#!/usr/bin/env node
/**
 * Render 一键部署（完全自主，不需要浏览器登录）
 * ---------------------------------------------------------------
 * 用法：
 *   RENDER_API_KEY=rnd_xxx node tools/deploy_render.js
 *   node tools/deploy_render.js rnd_xxx
 *
 * 做的事：
 *   1. GET  /v1/owners                 → 取 workspace id
 *   2. GET  /v1/services?name=...       → 若已存在就复用，避免重名失败
 *   3. POST /v1/services                → type=static_site
 *   4. 轮询 /v1/services/{id}/deploys  → 直到 live
 *   5. 打印 https://<slug>.onrender.com
 *
 * API key 在 Render 控制台拿：Account Settings → API Keys → Create API Key
 */

const KEY = process.env.RENDER_API_KEY || process.argv[2];
const API = 'https://api.render.com/v1';

const REPO = 'https://github.com/Jack-hub-zhr/microbe-arena';
const NAME = 'microbe-arena';
const BRANCH = 'main';
const BUILD_COMMAND = 'npm ci && npm run build';
const PUBLISH_PATH = './dist';

if (!KEY) {
  console.error('需要 Render API Key：RENDER_API_KEY=rnd_xxx node tools/deploy_render.js');
  process.exit(1);
}

async function api(method, path, body) {
  const res = await fetch(API + path, {
    method,
    headers: {
      Authorization: `Bearer ${KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
  if (!res.ok) {
    const msg = json.message || json.error || json.raw || res.statusText;
    throw new Error(`${method} ${path} → ${res.status} ${String(msg).slice(0, 300)}`);
  }
  return json;
}

(async () => {
  // 1. 工作区
  const owners = await api('GET', '/owners');
  // 响应可能是 [{cursor, owner:{...}}] / {owner:[...]} / [{id,...}]
  let list = Array.isArray(owners) ? owners : owners.owner || owners.owners || [];
  if (list.length && list[0] && list[0].owner) list = list.map((x) => x.owner);
  const owner = Array.isArray(list) ? list[0] : list;
  if (!owner?.id) throw new Error('拿不到 ownerId：' + JSON.stringify(owners).slice(0, 300));
  console.log('· 工作区:', owner.name || owner.id, `(${owner.id})`);

  // 2. 是否已存在同名站点
  const existing = await api('GET', `/services?name=${encodeURIComponent(NAME)}`);
  const pool = Array.isArray(existing) ? existing : existing.service || existing.services || [];
  const found = pool.find((s) => s.name === NAME && (!s.repo || s.repo === REPO));
  let service = found;
  let deployId = null;

  if (found) {
    console.log('· 已存在同名站点，直接复用并触发重新部署');
    const dep = await api('POST', `/services/${found.id}/deploys`, { clearCache: 'do_not_clear' });
    deployId = dep.id || dep.deploy?.id;
    service = found;
  } else {
    // 3. 创建静态站点
    console.log('· 创建静态站点…');
    const created = await api('POST', '/services', {
      type: 'static_site',
      name: NAME,
      ownerId: owner.id,
      repo: REPO,
      branch: BRANCH,
      autoDeployTrigger: 'commit',
      serviceDetails: {
        buildCommand: BUILD_COMMAND,
        publishPath: PUBLISH_PATH,
        pullRequestPreviewsEnabled: 'yes',
      },
    });
    service = created.service || created;
    deployId = created.deployId || created.deploy?.id;
    console.log('· 已创建:', service.name, `(${service.id})`);
  }

  // 4. 等上线
  const slug = service.slug || service.serviceDetails?.url?.replace(/^https?:\/\//, '') || NAME;
  const url = `https://${slug}.onrender.com`;
  console.log('· 等待构建…', url);

  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 10000));
    const deps = await api('GET', `/services/${service.id}/deploys?limit=1`);
    const d = (Array.isArray(deps) ? deps[0] : deps.deploy || deps.deploys?.[0] || {});
    const status = d.status || (d.commit ? 'live' : 'build_in_progress');
    console.log(`  [${i + 1}] ${status}`);
    if (status === 'live') {
      console.log('\n✅ 部署完成');
      console.log('   地址:', url);
      console.log('   后台:', `https://dashboard.render.com/web/${service.id}`);
      process.exit(0);
    }
    if (status === 'failed' || status === 'cancelled') {
      console.error('\n❌ 构建失败：', d.finishedAt || '');
      const logs = await api('GET', `/services/${service.id}/logs?limit=40&type=build`).catch(() => null);
      if (logs) console.error(JSON.stringify(logs).slice(0, 1200));
      process.exit(2);
    }
  }
  console.log('\n⏳ 还在构建，稍后再看：', url);
  process.exit(3);
})().catch((e) => {
  console.error('\n❌', e.message);
  process.exit(1);
});
