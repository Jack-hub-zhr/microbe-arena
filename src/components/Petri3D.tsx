/**
 * Petri3D —— 培养皿三维场景
 * ---------------------------------------------------------------
 * 相比旧版的改动：
 *  · 培养皿：真实玻璃壁 + 圆角边缘 + 琼脂凝胶表面（自定义着色器）+ 冷凝水珠
 *  · 微生物：不再是扁平的八面体点，而是带膜高光、拟核、细胞器颗粒的有机体
 *  · 多细胞体：连接丝 + 柔和的群体光晕，一眼能看出「已经是一个整体」
 *  · 食物：有机养分（发光颗粒）与尸体碎屑（暗色碎块）两种材质
 *  · 特效：投喂 / 天罚 / 点化 / 食同族 都有对应的扩散环
 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { CELL_ROLES, STRATEGIES } from '../engine/Simulation';
import { ROUTES } from '../engine/lineages';
import type { Simulation } from '../engine/Simulation';
import type { CellRole, SimEffect } from '../engine/types';

export type ToolId = 'inspect' | 'feed' | 'smite' | 'mutate';

interface Props {
  engine: Simulation;
  toolRef: React.MutableRefObject<ToolId>;
  selectedId: number | null;
  onSelect: (id: number | null) => void;
}

const DISH_R = 9.6;
/** 细胞的视觉放大倍率：真实比例下细胞只有针尖大，看不清建模细节 */
const CELL_VIS = 5.4;
const FOOD_VIS = 1.0;
const MAX_CELLS = 900;
const MAX_FOOD = 520;
const MAX_DETRITUS = 520;
const MAX_RINGS = 28;

/** 三条多细胞路线各自的主色 */
const ROUTE_COLORS: Record<string, string> = {
  myxomycete: ROUTES.myxomycete.hue,
  volvocine: ROUTES.volvocine.hue,
  animal: ROUTES.animal.hue,
};

/* ── 着色器用的紧凑三维值噪声 ── */
const NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

export default function Petri3D({ engine, toolRef, selectedId, onSelect }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef(selectedId);
  const onSelectRef = useRef(onSelect);
  selectedRef.current = selectedId;
  onSelectRef.current = onSelect;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const S = DISH_R / engine.config.radius;

    /* ───────── 渲染器 / 场景 / 相机 ───────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const bgDay = new THREE.Color(0x0b1a1f);
    const bgNight = new THREE.Color(0x04070d);
    const bgCurrent = bgDay.clone();
    scene.background = bgCurrent;
    const fog = new THREE.Fog(0x0b1a1f, 34, 78);
    scene.fog = fog;

    const camera = new THREE.PerspectiveCamera(
      46,
      mount.clientWidth / mount.clientHeight,
      0.1,
      220,
    );
    // ?cam=0.4 可以把镜头拉近到细胞尺度，便于观察触手、纤毛、眼点等细节
    const camParam = parseFloat(new URLSearchParams(window.location.search).get('cam') ?? '');
    const camScale = Number.isFinite(camParam) ? Math.max(0.12, Math.min(2, camParam)) : 1;
    camera.position.set(0, 19.5 * camScale, 20 * camScale);

    /** 竖屏时把镜头拉远并抬高，否则培养皿会被裁掉一大半 */
    const fitCamera = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      const aspect = w / h;
      const portrait = aspect < 0.9;
      // 竖屏：镜头拉远一点并压低视角，让整只皿尽量占满宽度又不出框
      const k = portrait ? Math.min(1.62, 0.74 / Math.max(0.42, aspect)) : 1;
      camera.position.set(0, 19.5 * k * (portrait ? 1.12 : 1), 20 * k);
      camera.updateProjectionMatrix();
    };
    fitCamera();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.075;
    controls.minDistance = 5;
    controls.maxDistance = 140;
    controls.maxPolarAngle = Math.PI * 0.49;
    controls.target.set(0, 0, 0);
    controls.update();

    // 环境贴图：让玻璃与细胞膜有可信的高光反射
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;
    scene.environmentIntensity = 0.42;

    /* ───────── 灯光 ───────── */
    const hemi = new THREE.HemisphereLight(0x9fe8ff, 0x06100c, 0.4);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xfff6e8, 1.1);
    key.position.set(11, 21, 8);
    key.castShadow = true;
    key.shadow.mapSize.set(768, 768);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 90;
    key.shadow.camera.left = -30;
    key.shadow.camera.right = 30;
    key.shadow.camera.top = 30;
    key.shadow.camera.bottom = -30;
    key.shadow.bias = -0.0009;
    key.shadow.normalBias = 0.03;
    key.shadow.radius = 3;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x93aebc, 0.75);
    rim.position.set(-13, 9, -11);
    scene.add(rim);

    const fill = new THREE.PointLight(0xa2db3c, 0.35, 40);
    fill.position.set(0, 5, 0);
    scene.add(fill);

    /* ───────── 培养皿：琼脂 ───────── */
    // 一次性烘焙一张琼脂贴图，避免逐像素噪声着色（性能与观感双赢）
    const agarTexture = createAgarTexture(768);
    agarTexture.colorSpace = THREE.SRGBColorSpace;
    agarTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const agarMat = new THREE.MeshStandardMaterial({
      map: agarTexture,
      color: 0xffffff,
      roughness: 0.34,
      metalness: 0.04,
      envMapIntensity: 0.7,
    });

    const agar = new THREE.Mesh(new THREE.CircleGeometry(DISH_R, 160), agarMat);
    agar.rotation.x = -Math.PI / 2;
    agar.position.y = 0.001;
    agar.receiveShadow = true;
    scene.add(agar);

    // 培养皿盖的镜面反光：一层加性渐变
    const sheenTexture = createSheenTexture(512);
    const sheen = new THREE.Mesh(
      new THREE.CircleGeometry(DISH_R * 0.995, 128),
      new THREE.MeshBasicMaterial({
        map: sheenTexture,
        transparent: true,
        opacity: 0.32,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    sheen.rotation.x = -Math.PI / 2;
    sheen.position.set(-1.6, 0.012, -2.2);
    scene.add(sheen);

    // 培养皿底座（承接阴影）
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(DISH_R + 0.55, DISH_R + 0.75, 0.7, 128),
      new THREE.MeshStandardMaterial({
        color: 0x050a0c,
        roughness: 0.92,
        metalness: 0.04,
      }),
    );
    base.position.y = -0.42;
    base.receiveShadow = true;
    scene.add(base);

    /* ───────── 培养皿：玻璃 ───────── */
    // 侧壁面积很大，用 MeshStandardMaterial（少一层 clearcoat BRDF）；
    // 细窄的皿沿另用带清漆的材质保留「湿玻璃」高光。
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xcfeeff,
      roughness: 0.05,
      metalness: 0.05,
      transparent: true,
      opacity: 0.17,
      side: THREE.DoubleSide,
      depthWrite: false,
      envMapIntensity: 2.6,
    });

    const wall = new THREE.Mesh(
      new THREE.CylinderGeometry(DISH_R + 0.26, DISH_R + 0.26, 1.65, 160, 1, true),
      glassMat,
    );
    wall.position.y = 0.8;
    wall.renderOrder = 3;
    scene.add(wall);

    const rimMat = new THREE.MeshPhysicalMaterial({
      color: 0xe8f7ff,
      roughness: 0.04,
      metalness: 0.06,
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide,
      depthWrite: false,
      envMapIntensity: 2.8,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
    });
    const rimMesh = new THREE.Mesh(
      new THREE.TorusGeometry(DISH_R + 0.26, 0.075, 16, 160),
      rimMat,
    );
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.y = 1.62;
    rimMesh.renderOrder = 4;
    scene.add(rimMesh);

    const bottomGlass = new THREE.Mesh(
      new THREE.CylinderGeometry(DISH_R + 0.26, DISH_R + 0.26, 0.07, 160),
      glassMat,
    );
    bottomGlass.position.y = -0.03;
    bottomGlass.renderOrder = 2;
    scene.add(bottomGlass);

    // 冷凝水珠
    const dropGeo = new THREE.SphereGeometry(1, 8, 6);
    const dropMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.06,
      metalness: 0.1,
      transparent: true,
      opacity: 0.42,
      envMapIntensity: 2.4,
    });
    const drops = new THREE.InstancedMesh(dropGeo, dropMat, 44);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 44; i++) {
      const a = Math.random() * Math.PI * 2;
      const h = 0.15 + Math.random() * 1.35;
      const sc = 0.018 + Math.random() * 0.045;
      dummy.position.set(Math.cos(a) * (DISH_R + 0.2), h, Math.sin(a) * (DISH_R + 0.2));
      dummy.scale.setScalar(sc);
      dummy.updateMatrix();
      drops.setMatrixAt(i, dummy.matrix);
    }
    drops.instanceMatrix.needsUpdate = true;
    scene.add(drops);

    /* ───────── 微生物 ───────── */
    const cellGeo = new THREE.IcosahedronGeometry(1, 2);
    const aSeed = new Float32Array(MAX_CELLS);
    const aFlags = new Float32Array(MAX_CELLS);
    const aFlash = new Float32Array(MAX_CELLS);
    const aRole = new Float32Array(MAX_CELLS);
    const aColor = new Float32Array(MAX_CELLS * 3);
    // 第二组标记位：触手 / 纤毛 / 眼点 / 伪足 / 休眠 / 收缩丝
    const aFlags2 = new Float32Array(MAX_CELLS);
    cellGeo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(aSeed, 1));
    cellGeo.setAttribute('aFlags', new THREE.InstancedBufferAttribute(aFlags, 1));
    cellGeo.setAttribute('aFlags2', new THREE.InstancedBufferAttribute(aFlags2, 1));
    cellGeo.setAttribute('aFlash', new THREE.InstancedBufferAttribute(aFlash, 1));
    cellGeo.setAttribute('aRole', new THREE.InstancedBufferAttribute(aRole, 1));
    cellGeo.setAttribute('aColor', new THREE.InstancedBufferAttribute(aColor, 3));

    const cellMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.46,
      metalness: 0.02,
      envMapIntensity: 0.42,
    });

    cellMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 };
      cellMat.userData.shader = shader;

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          /* glsl */ `
            #include <common>
            ${NOISE_GLSL}
            attribute float aSeed;
            attribute float aFlags;
            attribute float aFlags2;
            attribute float aFlash;
            attribute float aRole;
            attribute vec3 aColor;
            varying vec3 vLocal;
            varying vec3 vCellColor;
            varying float vNoise;
            varying float vFlags;
            varying float vFlags2;
            varying float vFlash;
            varying float vRole;
          `,
        )
        .replace(
          '#include <begin_vertex>',
          /* glsl */ `
            vec3 transformed = vec3( position );
            float seed = aSeed;
            // 有机形变：低频起伏 + 高频褶皱
            float n1 = snoise(position * 1.7 + seed * 17.3);
            float n2 = snoise(position * 4.3 - seed * 9.1);
            float wob = n1 * 0.19 + n2 * 0.07;
            // 守卫细胞带刺
            float isGuard = step(2.5, aRole) * step(aRole, 3.5);
            float spike = isGuard * pow(max(0.0, sin(n1 * 7.0 + seed * 31.0)), 8.0) * 0.26;
            transformed += normal * (wob + spike);
            // 压扁成贴盘的扁球
            transformed.y *= 0.60;
            // 繁殖体略微拉长
            float isBrooder = step(3.5, aRole) * step(aRole, 4.5);
            transformed.x *= 1.0 + isBrooder * 0.28;
            // 核心细胞更饱满
            float isCore = step(0.5, aRole) * step(aRole, 1.5);
            transformed.y *= 1.0 + isCore * 0.26;

            // 伪足：形变更强、轮廓更不规则（变形虫的样子）
            float isPseudopod = step(0.5, mod(floor(aFlags2 / 8.0), 2.0));
            wob += isPseudopod * (n1 * 0.16 + n2 * 0.12);

            vLocal = position;
            vCellColor = aColor;
            vNoise = n1;
            vFlags = aFlags;
            vFlags2 = aFlags2;
            vFlash = aFlash;
            vRole = aRole;
          `,
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          /* glsl */ `
            #include <common>
            ${NOISE_GLSL}
            varying vec3 vLocal;
            varying vec3 vCellColor;
            varying float vNoise;
            varying float vFlags;
            varying float vFlags2;
            varying float vFlash;
            varying float vRole;
          `,
        )
        .replace(
          '#include <color_fragment>',
          /* glsl */ `
            #include <color_fragment>
            diffuseColor.rgb = vCellColor;

            // 拟核：内部球体
            float nucD = length(vLocal);
            float nuc = 1.0 - smoothstep(0.16, 0.56, nucD);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.16 + vec3(0.015, 0.03, 0.025), nuc * 0.95);
            // 核膜高光环
            float ring = smoothstep(0.40, 0.50, nucD) * (1.0 - smoothstep(0.50, 0.62, nucD));
            diffuseColor.rgb += vec3(0.42, 0.55, 0.5) * ring * 0.6;

            // 细胞质斑驳
            diffuseColor.rgb *= 0.86 + 0.26 * (vNoise * 0.5 + 0.5);

            // 叶绿体：绿色小颗粒（flags bit0）
            float hasChl = step(0.5, mod(vFlags, 2.0));
            float speck = snoise(vLocal * 9.0 + vCellColor * 12.0);
            diffuseColor.rgb += vec3(0.16, 0.52, 0.10) * smoothstep(0.45, 0.85, speck) * hasChl * 0.85;

            // 溶酶体：紫色颗粒（flags bit4）
            float hasLys = step(0.5, mod(floor(vFlags / 16.0), 2.0));
            diffuseColor.rgb += vec3(0.42, 0.18, 0.62) * smoothstep(0.52, 0.9, -speck) * hasLys * 0.8;

            // 毒素：暗红斑块（flags bit1）
            float hasTox = step(0.5, mod(floor(vFlags / 2.0), 2.0));
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.35, 0.55, 0.5), hasTox * smoothstep(0.2, 0.7, speck) * 0.55);

            // 眼点：顶面上一枚深色瞳点 + 高光环（团藻用来感光）
            float hasEye = step(0.5, mod(floor(vFlags2 / 4.0), 2.0));
            float up = dot(normalize(vLocal + vec3(0.0001)), vec3(0.0, 1.0, 0.0));
            float eyeDisc = smoothstep(0.72, 0.94, up);
            float eyeRing = smoothstep(0.58, 0.74, up) * (1.0 - smoothstep(0.74, 0.9, up));
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.02, 0.05, 0.04), eyeDisc * hasEye * 0.85);
            diffuseColor.rgb += vec3(0.9, 0.45, 0.95) * eyeRing * hasEye * 0.7;

            // 芽孢休眠：整体变暗、中心透出耐热的孢核
            float isDormant = step(0.5, mod(floor(vFlags2 / 16.0), 2.0));
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.35 + vec3(0.06, 0.05, 0.02), isDormant * 0.8);
            diffuseColor.rgb += vec3(1.0, 0.82, 0.35) * nuc * isDormant * 0.8;
          `,
        )
        .replace(
          '#include <emissivemap_fragment>',
          /* glsl */ `
            #include <emissivemap_fragment>
            vec3 vd = normalize(vViewPosition);
            vec3 nn = normalize(normal);
            float fres = pow(1.0 - abs(dot(nn, vd)), 2.6);
            totalEmissiveRadiance += vCellColor * fres * 0.34;
            // 进食/受击闪光
            totalEmissiveRadiance += mix(vec3(1.0), vCellColor, 0.5) * vFlash * 2.4;
            // 职能色环
            vec3 roleCol = vec3(0.0);
            if (vRole > 0.5 && vRole < 1.5) roleCol = vec3(1.0, 0.42, 0.84);
            else if (vRole > 1.5 && vRole < 2.5) roleCol = vec3(0.64, 0.86, 0.24);
            else if (vRole > 2.5 && vRole < 3.5) roleCol = vec3(1.0, 0.55, 0.24);
            else if (vRole > 3.5 && vRole < 4.5) roleCol = vec3(0.17, 0.79, 1.0);
            else if (vRole > 4.5) roleCol = vec3(0.91, 0.77, 0.42);
            totalEmissiveRadiance += roleCol * fres * 0.55;
          `,
        );
    };

    const cells = new THREE.InstancedMesh(cellGeo, cellMat, MAX_CELLS);
    cells.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    cells.castShadow = true;
    cells.receiveShadow = false;
    cells.frustumCulled = false;
    scene.add(cells);

    // 外壳（细胞器「外壳」拥有）
    const shellMesh = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(1.42, 1),
      new THREE.MeshStandardMaterial({
        color: 0xdff0ff,
        roughness: 0.14,
        metalness: 0.14,
        transparent: true,
        opacity: 0.26,
        side: THREE.DoubleSide,
        depthWrite: false,
        envMapIntensity: 2.2,
      }),
      320,
    );
    shellMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    shellMesh.frustumCulled = false;
    shellMesh.renderOrder = 1;
    scene.add(shellMesh);

    // 鞭毛
    const flagMesh = new THREE.InstancedMesh(
      new THREE.ConeGeometry(0.1, 1.9, 6),
      new THREE.MeshStandardMaterial({
        color: 0xcdf3ff,
        roughness: 0.5,
        transparent: true,
        opacity: 0.5,
      }),
      420,
    );
    flagMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    flagMesh.frustumCulled = false;
    scene.add(flagMesh);

    /* ───────── 触手（刺胞动物的远攻器官） ───────── */
    const tentacleMesh = new THREE.InstancedMesh(
      new THREE.ConeGeometry(0.1, 1.7, 6),
      new THREE.MeshStandardMaterial({
        color: 0xffb08a,
        emissive: 0xff5a3c,
        emissiveIntensity: 0.35,
        roughness: 0.4,
        transparent: true,
        opacity: 0.92,
      }),
      1400,
    );
    tentacleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    tentacleMesh.frustumCulled = false;
    scene.add(tentacleMesh);

    /* ───────── 纤毛（真核细胞的精密毛发） ───────── */
    const ciliaMesh = new THREE.InstancedMesh(
      new THREE.ConeGeometry(0.028, 0.52, 4),
      new THREE.MeshStandardMaterial({
        color: 0xd7f7ff,
        roughness: 0.5,
        transparent: true,
        opacity: 0.55,
      }),
      1200,
    );
    ciliaMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    ciliaMesh.frustumCulled = false;
    scene.add(ciliaMesh);

    /* ───────── 多细胞体的三种形态 ───────── */
    // 粘菌：子实体（孢子囊 + 柄）
    const fruitingMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 18, 12),
      new THREE.MeshStandardMaterial({
        color: 0xfbbf24,
        emissive: 0x92400e,
        emissiveIntensity: 0.6,
        roughness: 0.5,
      }),
      40,
    );
    fruitingMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    fruitingMesh.frustumCulled = false;
    scene.add(fruitingMesh);

    // 团藻：整体漂游的半透明球体
    const swarmMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 24, 16),
      new THREE.MeshStandardMaterial({
        color: 0x34d399,
        emissive: 0x065f46,
        emissiveIntensity: 0.55,
        transparent: true,
        opacity: 0.28,
        roughness: 0.1,
        depthWrite: false,
      }),
      40,
    );
    swarmMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    swarmMesh.frustumCulled = false;
    swarmMesh.renderOrder = 1;
    scene.add(swarmMesh);

    // 动物：会变形的集体身体
    const animalMesh = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(1, 2),
      new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        emissive: 0x831843,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.34,
        roughness: 0.35,
        depthWrite: false,
      }),
      40,
    );
    animalMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    animalMesh.frustumCulled = false;
    animalMesh.renderOrder = 1;
    scene.add(animalMesh);

    /* ───────── 食物 ───────── */
    const foodMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 8, 6),
      new THREE.MeshStandardMaterial({
        color: 0xbdf27a,
        emissive: 0x4f8a22,
        emissiveIntensity: 0.75,
        roughness: 0.55,
      }),
      MAX_FOOD,
    );
    foodMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    foodMesh.frustumCulled = false;
    scene.add(foodMesh);

    const detritusMesh = new THREE.InstancedMesh(
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.MeshStandardMaterial({
        color: 0x6b4a33,
        roughness: 0.95,
        metalness: 0,
      }),
      MAX_DETRITUS,
    );
    detritusMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    detritusMesh.frustumCulled = false;
    scene.add(detritusMesh);

    /* ───────── 多细胞体：连接丝 + 群体光晕 ───────── */
    const MAX_LINKS = 3000;
    const linkPos = new Float32Array(MAX_LINKS * 6);
    const linkCol = new Float32Array(MAX_LINKS * 6);
    const linkGeo = new THREE.BufferGeometry();
    linkGeo.setAttribute('position', new THREE.BufferAttribute(linkPos, 3));
    linkGeo.setAttribute('color', new THREE.BufferAttribute(linkCol, 3));
    const links = new THREE.LineSegments(
      linkGeo,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    links.frustumCulled = false;
    scene.add(links);

    const colonyGlow = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 12, 8),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.09,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
      120,
    );
    colonyGlow.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    colonyGlow.frustumCulled = false;
    colonyGlow.renderOrder = 0;
    scene.add(colonyGlow);

    /* ───────── 选中光环 ───────── */
    const selectRing = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.055, 12, 64),
      new THREE.MeshBasicMaterial({ color: 0xd9a441, transparent: true, opacity: 0.95 }),
    );
    selectRing.rotation.x = Math.PI / 2;
    selectRing.visible = false;
    scene.add(selectRing);

    /* ───────── 特效环 ───────── */
    const ringGeo = new THREE.RingGeometry(0.86, 1, 72);
    const ringPool: {
      mesh: THREE.Mesh;
      mat: THREE.MeshBasicMaterial;
      t0: number;
      life: number;
      scale: number;
    }[] = [];
    for (let i = 0; i < MAX_RINGS; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(ringGeo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      scene.add(mesh);
      ringPool.push({ mesh, mat, t0: 0, life: 1, scale: 1 });
    }
    let ringCursor = 0;

    const spawnRing = (x: number, y: number, color: number, scale: number, life: number) => {
      const r = ringPool[ringCursor];
      ringCursor = (ringCursor + 1) % MAX_RINGS;
      r.mesh.position.set(x, 0.09, y);
      r.mesh.visible = true;
      r.mat.color.setHex(color);
      r.t0 = performance.now();
      r.life = life;
      r.scale = scale;
    };

    const EFFECT_STYLE: Record<SimEffect['type'], { color: number; scale: number; life: number }> = {
      feed: { color: 0xa2db3c, scale: 2.2, life: 1.1 },
      smite: { color: 0xff8b3d, scale: 4.4, life: 1.3 },
      mutate: { color: 0xc77dff, scale: 1.8, life: 1.0 },
      cannibal: { color: 0xff3d6e, scale: 2.6, life: 1.2 },
      plague: { color: 0xff5b5b, scale: 12, life: 1.8 },
      alien: { color: 0x4dd0e1, scale: 10, life: 1.8 },
      spore: { color: 0xfbbf24, scale: 3.2, life: 1.4 },
      earth: { color: 0xe8c46a, scale: 16, life: 2.4 },
    };

    /* ───────── 交互 ───────── */
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const agarPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hitPoint = new THREE.Vector3();
    let downX = 0;
    let downY = 0;

    const setPointer = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onDown = (e: PointerEvent) => {
      downX = e.clientX;
      downY = e.clientY;
    };

    const onUp = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - downX, e.clientY - downY) > 6) return; // 拖拽不算点击
      setPointer(e);
      raycaster.setFromCamera(pointer, camera);

      const tool = toolRef.current;
      if (tool === 'inspect') {
        const hits = raycaster.intersectObject(cells, false);
        if (hits.length && hits[0].instanceId !== undefined) {
          onSelectRef.current(instanceToAgent[hits[0].instanceId] ?? null);
        } else {
          onSelectRef.current(null);
        }
        return;
      }

      if (!raycaster.ray.intersectPlane(agarPlane, hitPoint)) return;
      if (Math.hypot(hitPoint.x, hitPoint.z) > DISH_R) return;
      const wx = hitPoint.x / S;
      const wy = hitPoint.z / S;

      if (tool === 'feed') engine.godFeed(wx, wy);
      else if (tool === 'smite') engine.godSmite(wx, wy);
      else if (tool === 'mutate') engine.godMutate(wx, wy);
    };

    renderer.domElement.addEventListener('pointerdown', onDown);
    renderer.domElement.addEventListener('pointerup', onUp);

    /* ───────── 渲染循环 ───────── */
    const instanceToAgent: (number | null)[] = new Array(MAX_CELLS).fill(null);
    const colorTmp = new THREE.Color();
    const roleColor = new THREE.Color();
    let raf = 0;
    let lastTime = performance.now();

    /* ── 自适应画质：低端设备 / 软件渲染下自动降级，保证操作跟手 ── */
    // ?q=high 锁定高画质，?q=low 锁定低画质，默认按帧率自动调节
    const qParam = new URLSearchParams(window.location.search).get('q');
    const pinned = qParam === 'high' ? 2 : qParam === 'low' ? 0 : null;
    let quality = 2; // 2 = 高, 1 = 中, 0 = 低
    let frameAcc = 0;
    let frameCount = 0;

    const applyQuality = () => {
      const dpr = window.devicePixelRatio || 1;
      if (quality === 2) {
        renderer.setPixelRatio(Math.min(dpr, 1.25));
        renderer.shadowMap.enabled = true;
        key.castShadow = true;
        colonyGlow.visible = true;
        drops.visible = true;
      } else if (quality === 1) {
        renderer.setPixelRatio(Math.min(dpr, 1));
        renderer.shadowMap.enabled = false;
        key.castShadow = false;
        colonyGlow.visible = true;
        drops.visible = false;
      } else {
        renderer.setPixelRatio(0.6);
        renderer.shadowMap.enabled = false;
        key.castShadow = false;
        colonyGlow.visible = false;
        drops.visible = false;
        sheen.visible = false;
      }
      renderer.shadowMap.needsUpdate = true;
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      fitCamera();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    const frame = () => {
      raf = requestAnimationFrame(frame);
      const now = performance.now();
      const t = now / 1000;
      const rawDt = (now - lastTime) / 1000;
      lastTime = now;

      const light = engine.light;
      key.intensity = 0.2 + light * 1.05;
      hemi.intensity = 0.2 + light * 0.32;
      rim.intensity = 0.3 + light * 0.6;
      fill.intensity = 0.12 + light * 0.4;
      bgCurrent.copy(bgNight).lerp(bgDay, light);
      scene.background = bgCurrent;
      fog.color.copy(bgCurrent);
      agarMat.emissive.setRGB(0.02 * light, 0.05 * light, 0.03 * light);
      (sheen.material as THREE.MeshBasicMaterial).opacity = 0.16 + light * 0.42;
      if (cellMat.userData.shader) cellMat.userData.shader.uniforms.uTime.value = t;

      /* ── 微生物 ── */
      const agents = engine.agents;
      let n = 0;
      let shellN = 0;
      let flagN = 0;
      let tentN = 0;
      let cilN = 0;
      let fruitingN = 0;
      let swarmN = 0;
      let animalN = 0;
      const UP = new THREE.Vector3(0, 1, 0);
      const dirV = new THREE.Vector3();
      const quatV = new THREE.Quaternion();
      for (let i = 0; i < agents.length && n < MAX_CELLS; i++) {
        const a = agents[i];
        if (!a.alive) continue;

        const roleIdx = a.role
          ? ['core', 'worker', 'guard', 'brooder', 'nurse'].indexOf(a.role) + 1
          : 0;
        const strategyColor = new THREE.Color(STRATEGIES[a.strategy].color);
        // 同一批接种的个体基因完全相同，这里只做一点视觉色相抖动
        const visualHue = a.genome.hue;
        const hueColor = new THREE.Color().setHSL(visualHue / 360, 0.74, 0.46);
        // 职能色与生态位色混合，多细胞成员一眼可辨
        if (a.alien) {
          // 外星物种：固定的青绿色，与三条创始谱系明显区分
          colorTmp.set('#4fd6c0');
        } else if (a.role) {
          roleColor.set(CELL_ROLES[a.role].color);
          colorTmp.copy(hueColor).lerp(roleColor, 0.55);
        } else {
          colorTmp.copy(hueColor).lerp(strategyColor, 0.15);
        }

        const dormant = a.dormant;
        const sizeScale =
          a.genome.size * S * CELL_VIS *
          (a.role === 'core' ? 1.15 : 1) *
          (dormant ? 0.6 : 1) *
          (a.alien ? 1.2 : 1);
        const bob = Math.sin(t * 1.6 + a.id * 1.7) * 0.012;
        dummy.position.set(a.x * S, sizeScale * 0.5 + 0.02 + bob, a.y * S);
        dummy.rotation.set(0, t * 0.4 + a.id * 0.7, 0);
        dummy.scale.setScalar(sizeScale);
        dummy.updateMatrix();
        cells.setMatrixAt(n, dummy.matrix);

        aSeed[n] = (a.id % 97) * 0.137;
        aFlags[n] =
          (a.genome.organelles.includes('chloroplast') ? 1 : 0) |
          (a.genome.organelles.includes('toxin') ? 2 : 0) |
          (a.genome.organelles.includes('shell') ? 4 : 0) |
          (a.genome.organelles.includes('flagellum') ? 8 : 0) |
          (a.genome.organelles.includes('lysosome') ? 16 : 0);
        aFlags2[n] =
          (a.genome.organelles.includes('tentacle') ? 1 : 0) |
          (a.genome.organelles.includes('cilia') ? 2 : 0) |
          (a.genome.organelles.includes('eyespot') ? 4 : 0) |
          (a.genome.organelles.includes('pseudopod') ? 8 : 0) |
          (dormant ? 16 : 0) |
          (a.genome.organelles.includes('myosin') ? 32 : 0);
        aFlash[n] = a.flash;
        aRole[n] = roleIdx;
        aColor[n * 3] = colorTmp.r;
        aColor[n * 3 + 1] = colorTmp.g;
        aColor[n * 3 + 2] = colorTmp.b;
        instanceToAgent[n] = a.id;
        n++;

        if (a.genome.organelles.includes('shell') && shellN < 320) {
          dummy.scale.setScalar(sizeScale * 1.05);
          dummy.updateMatrix();
          shellMesh.setMatrixAt(shellN, dummy.matrix);
          shellN++;
        }
        if (a.genome.organelles.includes('flagellum') && flagN < 420) {
          const dir = Math.atan2(a.vy, a.vx);
          dummy.position.set(
            a.x * S - Math.cos(dir) * sizeScale * 1.5,
            sizeScale * 0.55,
            a.y * S - Math.sin(dir) * sizeScale * 1.5,
          );
          dummy.rotation.set(Math.PI / 2, 0, -dir + Math.PI / 2);
          dummy.scale.setScalar(sizeScale * 0.55);
          dummy.updateMatrix();
          flagMesh.setMatrixAt(flagN, dummy.matrix);
          flagN++;
        }

        // 触手：从细胞表面伸出，像水母那样缓慢摆动
        if (a.genome.organelles.includes('tentacle') && tentN < 1400) {
          const cnt = 5;
          for (let k = 0; k < cnt && tentN < 1400; k++) {
            const ang = (k / cnt) * Math.PI * 2 + t * 0.5 + a.id * 0.7;
            const wave = Math.sin(t * 2.1 + k * 1.3 + a.id) * 0.45;
            const dx = Math.cos(ang + wave * 0.35);
            const dz = Math.sin(ang + wave * 0.35);
            dirV.set(dx, 0.22 + wave * 0.12, dz).normalize();
            quatV.setFromUnitVectors(UP, dirV);
            dummy.position.set(
              a.x * S + dx * sizeScale * 0.75,
              sizeScale * 0.55 + 0.02,
              a.y * S + dz * sizeScale * 0.75,
            );
            dummy.quaternion.copy(quatV);
            dummy.scale.set(sizeScale * 0.34, sizeScale * 1.05, sizeScale * 0.34);
            dummy.updateMatrix();
            tentacleMesh.setMatrixAt(tentN, dummy.matrix);
            tentN++;
          }
        }

        // 纤毛：围着细胞的一圈细毛
        if (a.genome.organelles.includes('cilia') && cilN < 1200) {
          const cnt = 9;
          for (let k = 0; k < cnt && cilN < 1200; k++) {
            const ang = (k / cnt) * Math.PI * 2 + a.id * 1.3 + t * 0.35;
            const dx = Math.cos(ang);
            const dz = Math.sin(ang);
            dirV.set(dx, 0.9, dz).normalize();
            quatV.setFromUnitVectors(UP, dirV);
            dummy.position.set(
              a.x * S + dx * sizeScale * 0.72,
              sizeScale * 0.5 + 0.02,
              a.y * S + dz * sizeScale * 0.72,
            );
            dummy.quaternion.copy(quatV);
            dummy.scale.set(sizeScale * 0.3, sizeScale * 0.7, sizeScale * 0.3);
            dummy.updateMatrix();
            ciliaMesh.setMatrixAt(cilN, dummy.matrix);
            cilN++;
          }
        }
      }
      cells.count = n;
      cells.instanceMatrix.needsUpdate = true;
      tentacleMesh.count = tentN;
      tentacleMesh.instanceMatrix.needsUpdate = true;
      ciliaMesh.count = cilN;
      ciliaMesh.instanceMatrix.needsUpdate = true;
      fruitingMesh.count = fruitingN;
      fruitingMesh.instanceMatrix.needsUpdate = true;
      swarmMesh.count = swarmN;
      swarmMesh.instanceMatrix.needsUpdate = true;
      animalMesh.count = animalN;
      animalMesh.instanceMatrix.needsUpdate = true;
      shellMesh.count = shellN;
      shellMesh.instanceMatrix.needsUpdate = true;
      flagMesh.count = flagN;
      flagMesh.instanceMatrix.needsUpdate = true;
      (cellGeo.getAttribute('aSeed') as THREE.InstancedBufferAttribute).needsUpdate = true;
      (cellGeo.getAttribute('aFlags') as THREE.InstancedBufferAttribute).needsUpdate = true;
      (cellGeo.getAttribute('aFlash') as THREE.InstancedBufferAttribute).needsUpdate = true;
      (cellGeo.getAttribute('aRole') as THREE.InstancedBufferAttribute).needsUpdate = true;
      (cellGeo.getAttribute('aColor') as THREE.InstancedBufferAttribute).needsUpdate = true;
      (cellGeo.getAttribute('aFlags2') as THREE.InstancedBufferAttribute).needsUpdate = true;

      /* ── 食物 / 碎屑 ── */
      let foodN = 0;
      let detN = 0;
      for (const f of engine.food) {
        if (f.dead) continue;
        const wobble = 1 + Math.sin(t * 2.2 + f.x * 0.05) * 0.12;
        dummy.position.set(f.x * S, 0.055, f.y * S);
        dummy.rotation.set(f.born * 0.7, f.born * 1.3, 0);
        if (f.kind === 'detritus') {
          if (detN >= MAX_DETRITUS) continue;
          dummy.scale.setScalar(0.1 * wobble * FOOD_VIS);
          dummy.updateMatrix();
          detritusMesh.setMatrixAt(detN, dummy.matrix);
          detN++;
        } else {
          if (foodN >= MAX_FOOD) continue;
          dummy.scale.setScalar(0.085 * wobble * FOOD_VIS);
          dummy.updateMatrix();
          foodMesh.setMatrixAt(foodN, dummy.matrix);
          foodN++;
        }
      }
      foodMesh.count = foodN;
      foodMesh.instanceMatrix.needsUpdate = true;
      detritusMesh.count = detN;
      detritusMesh.instanceMatrix.needsUpdate = true;

      /* ── 多细胞体 ── */
      let linkCount = 0;
      let glowN = 0;
      for (const colony of engine.colonies.values()) {
        const members = [...colony.memberIds]
          .map((id) => engine.agentById(id))
          .filter((a): a is NonNullable<typeof a> => Boolean(a && a.alive));
        if (members.length < 2) continue;

        let cx = 0;
        let cy = 0;
        for (const m of members) {
          cx += m.x;
          cy += m.y;
        }
        cx /= members.length;
        cy /= members.length;

        // 连接丝：把所有成员和中心连起来
        for (const m of members) {
          if (linkCount >= MAX_LINKS) break;
          const i6 = linkCount * 6;
          linkPos[i6] = cx * S;
          linkPos[i6 + 1] = 0.16;
          linkPos[i6 + 2] = cy * S;
          linkPos[i6 + 3] = m.x * S;
          linkPos[i6 + 4] = 0.16;
          linkPos[i6 + 5] = m.y * S;
          const dominant = dominantRole(members);
          colorTmp.set(dominant ? CELL_ROLES[dominant].color : '#4fb3c4');
          linkCol[i6] = colorTmp.r * 0.9;
          linkCol[i6 + 1] = colorTmp.g * 0.9;
          linkCol[i6 + 2] = colorTmp.b * 0.9;
          linkCol[i6 + 3] = colorTmp.r * 0.45;
          linkCol[i6 + 4] = colorTmp.g * 0.45;
          linkCol[i6 + 5] = colorTmp.b * 0.45;
          linkCount++;
        }

        // 群体光晕：让多细胞体看起来是一个整体
        if (glowN < 120) {
          const dominant = dominantRole(members);
          const roleC = dominant ? CELL_ROLES[dominant].color : '#4fb3c4';
          colorTmp.set(colony.route ? ROUTE_COLORS[colony.route] : roleC);
          const spread = 0.7 + members.length * 0.12;
          dummy.position.set(cx * S, 0.14, cy * S);
          dummy.scale.set(spread * 0.6, spread * 0.28, spread * 0.6);
          dummy.rotation.set(0, 0, 0);
          dummy.updateMatrix();
          colonyGlow.setMatrixAt(glowN, dummy.matrix);
          colonyGlow.setColorAt(glowN, colorTmp);
          glowN++;
        }

        /* ── 三条真实多细胞化路线各自的身体形态 ── */
        if (colony.route === 'myxomycete' && fruitingN < 40) {
          // 粘菌：资源匮乏时长出的子实体（孢子囊）
          const sc = 0.22 + colony.fruiting * 0.62;
          dummy.position.set(cx * S, 0.22 + sc * 0.85, cy * S);
          dummy.scale.set(sc * 0.55, sc * 0.8, sc * 0.55);
          dummy.rotation.set(0, t * 0.25, 0);
          dummy.updateMatrix();
          fruitingMesh.setMatrixAt(fruitingN, dummy.matrix);
          fruitingN++;
        } else if (colony.route === 'volvocine' && swarmN < 40) {
          // 团藻：整体漂游的半透明球体
          const r = 0.45 + members.length * 0.1;
          dummy.position.set(cx * S, 0.24, cy * S);
          dummy.scale.set(r, r * 0.82, r);
          dummy.rotation.set(0, t * 0.4, 0);
          dummy.updateMatrix();
          swarmMesh.setMatrixAt(swarmN, dummy.matrix);
          swarmN++;
        } else if (colony.route === 'animal' && animalN < 40) {
          // 动物路线：会变形、会集体迁移的身体
          const r = 0.4 + members.length * 0.11;
          const drift = 18;
          dummy.position.set(
            (cx + colony.swarmX * drift) * S,
            0.18 + Math.sin(t * 1.8 + colony.id) * 0.05,
            (cy + colony.swarmY * drift) * S,
          );
          dummy.scale.set(
            r * (1 + Math.sin(t * 2.2) * 0.07),
            r * 0.52,
            r * (1 - Math.sin(t * 2.2) * 0.07),
          );
          dummy.rotation.set(0, t * 0.3, 0);
          dummy.updateMatrix();
          animalMesh.setMatrixAt(animalN, dummy.matrix);
          animalN++;
        }
      }
      linkGeo.setDrawRange(0, linkCount * 2);
      linkGeo.attributes.position.needsUpdate = true;
      linkGeo.attributes.color.needsUpdate = true;
      colonyGlow.count = glowN;
      colonyGlow.instanceMatrix.needsUpdate = true;
      if (colonyGlow.instanceColor) colonyGlow.instanceColor.needsUpdate = true;

      /* ── 选中光环 ── */
      const sel = selectedRef.current;
      const selAgent = sel !== null ? engine.agentById(sel) : null;
      if (selAgent) {
        selectRing.visible = true;
        const s = selAgent.genome.size * S * 1.9;
        selectRing.position.set(selAgent.x * S, 0.1, selAgent.y * S);
        selectRing.scale.setScalar(s * (1 + Math.sin(t * 4) * 0.06));
        (selectRing.material as THREE.MeshBasicMaterial).opacity = 0.65 + Math.sin(t * 4) * 0.25;
      } else {
        selectRing.visible = false;
      }

      /* ── 特效 ── */
      const effects = engine.consumeEffects();
      for (const e of effects) {
        const style = EFFECT_STYLE[e.type];
        if (!style) continue;
        spawnRing(e.x * S, e.y * S, style.color, style.scale, style.life);
        if (e.type === 'cannibal') {
          spawnRing(e.x * S, e.y * S, 0xff8b3d, style.scale * 0.55, style.life * 0.7);
        }
      }

      for (const r of ringPool) {
        if (!r.mesh.visible) continue;
        const p = (now - r.t0) / 1000 / r.life;
        if (p >= 1) {
          r.mesh.visible = false;
          continue;
        }
        const ease = 1 - Math.pow(1 - p, 3);
        r.mesh.scale.setScalar(0.2 + ease * r.scale);
        r.mat.opacity = 0.9 * (1 - p) * (1 - p);
      }

      // 自适应画质评估：按帧数或按墙钟时间触发，慢机器上也能及时降级
      frameAcc += rawDt * 1000;
      frameCount++;
      if (frameCount >= 12 || frameAcc > 1200) {
        const avg = frameAcc / frameCount;
        if (pinned !== null) {
          quality = pinned;
          applyQuality();
        } else if (avg > 46 && quality > 0) {
          quality--;
          applyQuality();
        } else if (avg < 17 && quality < 2) {
          quality++;
          applyQuality();
        }
        frameAcc = 0;
        frameCount = 0;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener('pointerdown', onDown);
      renderer.domElement.removeEventListener('pointerup', onUp);
      controls.dispose();
      envRT.dispose();
      pmrem.dispose();
      cellGeo.dispose();
      cellMat.dispose();
      shellMesh.geometry.dispose();
      (shellMesh.material as THREE.Material).dispose();
      flagMesh.geometry.dispose();
      (flagMesh.material as THREE.Material).dispose();
      foodMesh.geometry.dispose();
      (foodMesh.material as THREE.Material).dispose();
      detritusMesh.geometry.dispose();
      (detritusMesh.material as THREE.Material).dispose();
      linkGeo.dispose();
      colonyGlow.geometry.dispose();
      (colonyGlow.material as THREE.Material).dispose();
      selectRing.geometry.dispose();
      (selectRing.material as THREE.Material).dispose();
      ringGeo.dispose();
      agar.geometry.dispose();
      agarMat.dispose();
      agarTexture.dispose();
      sheenTexture.dispose();
      base.geometry.dispose();
      (base.material as THREE.Material).dispose();
      wall.geometry.dispose();
      rimMesh.geometry.dispose();
      bottomGlass.geometry.dispose();
      glassMat.dispose();
      rimMat.dispose();
      dropGeo.dispose();
      dropMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [engine]);

  return <div ref={mountRef} className="absolute inset-0" />;
}

/** 群体中的主导职能 —— 决定连接丝与光晕的颜色 */
function dominantRole(members: { role: CellRole | null }[]): CellRole | null {
  const tally = new Map<CellRole, number>();
  for (const m of members) {
    if (!m.role) continue;
    tally.set(m.role, (tally.get(m.role) ?? 0) + 1);
  }
  let best: CellRole | null = null;
  let bestN = 0;
  for (const [role, n] of tally) {
    if (n > bestN) {
      bestN = n;
      best = role;
    }
  }
  return best;
}

/** 一次性烘焙琼脂表面贴图：中心略亮的凝胶 + 细密颗粒 + 轻微同心纹理 */
function createAgarTexture(size: number): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d')!;
  const R = size / 2;

  const grad = ctx.createRadialGradient(R, R * 0.92, R * 0.05, R, R, R);
  grad.addColorStop(0, '#2a7a52');
  grad.addColorStop(0.35, '#1c5c3f');
  grad.addColorStop(0.72, '#123c2b');
  grad.addColorStop(1, '#081d16');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // 凝胶颗粒
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * 26;
    d[i] = Math.max(0, Math.min(255, d[i] + n * 0.7));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n * 0.8));
  }
  ctx.putImageData(img, 0, 0);

  // 同心涟漪，模拟倒液时的波纹
  ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 26; i++) {
    const r = (i / 26) * R * 0.98 + Math.random() * 6;
    ctx.beginPath();
    ctx.arc(R, R, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(150, 220, 180, ${0.012 + Math.random() * 0.016})`;
    ctx.lineWidth = 1 + Math.random() * 2.4;
    ctx.stroke();
  }
  // 少量气泡
  for (let i = 0; i < 180; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * R * 0.97;
    const rr = 1 + Math.random() * 3.6;
    ctx.beginPath();
    ctx.arc(R + Math.cos(a) * r, R + Math.sin(a) * r, rr, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200, 240, 220, ${0.05 + Math.random() * 0.1})`;
    ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

/** 培养皿盖的镜面反光贴图 */
function createSheenTexture(size: number): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d')!;
  ctx.clearRect(0, 0, size, size);

  const g = ctx.createRadialGradient(size * 0.32, size * 0.3, 0, size * 0.32, size * 0.3, size * 0.46);
  g.addColorStop(0, 'rgba(220, 245, 255, 0.55)');
  g.addColorStop(0.35, 'rgba(160, 220, 240, 0.18)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  // 一道斜向的窄反光
  ctx.save();
  ctx.translate(size * 0.5, size * 0.5);
  ctx.rotate(-0.5);
  const lg = ctx.createLinearGradient(-size * 0.5, 0, size * 0.5, 0);
  lg.addColorStop(0, 'rgba(255,255,255,0)');
  lg.addColorStop(0.45, 'rgba(255,255,255,0.22)');
  lg.addColorStop(0.55, 'rgba(255,255,255,0.22)');
  lg.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = lg;
  ctx.fillRect(-size * 0.5, -size * 0.012, size, size * 0.024);
  ctx.restore();

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
