var Nv=Object.defineProperty;var Dv=(t,e,n)=>e in t?Nv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var We=(t,e,n)=>Dv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Cg={exports:{}},Sc={},Rg={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),Iv=Symbol.for("react.portal"),Uv=Symbol.for("react.fragment"),Fv=Symbol.for("react.strict_mode"),Ov=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Bv=Symbol.for("react.forward_ref"),Hv=Symbol.for("react.suspense"),Gv=Symbol.for("react.memo"),Vv=Symbol.for("react.lazy"),tp=Symbol.iterator;function jv(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,Ng={};function go(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Pg}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dg(){}Dg.prototype=go.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Pg}var Hd=Bd.prototype=new Dg;Hd.constructor=Bd;Lg(Hd,go.prototype);Hd.isPureReactComponent=!0;var np=Array.isArray,Ig=Object.prototype.hasOwnProperty,Gd={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ig.call(e,i)&&!Ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wa,type:t,key:s,ref:o,props:r,_owner:Gd.current}}function Wv(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function Xv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ip=/\/+/g;function Wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xv(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wa:case Iv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Wc(o,0):i,np(r)?(n="",t!=null&&(n=t.replace(ip,"$&/")+"/"),Ml(r,e,n,"",function(c){return c})):r!=null&&(Vd(r)&&(r=Wv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ip,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",np(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Wc(s,a);o+=Ml(s,e,n,l,r)}else if(l=jv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Wc(s,a++),o+=Ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function La(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $v(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xn={current:null},Sl={transition:null},Yv={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Gd};function Og(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:La,forEach:function(t,e,n){La(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return La(t,function(){e++}),e},toArray:function(t){return La(t,function(e){return e})||[]},only:function(t){if(!Vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=go;Ze.Fragment=Uv;Ze.Profiler=Ov;Ze.PureComponent=Bd;Ze.StrictMode=Fv;Ze.Suspense=Hv;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yv;Ze.act=Og;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ig.call(e,l)&&!Ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:wa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:zv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kv,_context:t},t.Consumer=t};Ze.createElement=Fg;Ze.createFactory=function(t){var e=Fg.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:Bv,render:t}};Ze.isValidElement=Vd;Ze.lazy=function(t){return{$$typeof:Vv,_payload:{_status:-1,_result:t},_init:$v}};Ze.memo=function(t,e){return{$$typeof:Gv,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};Ze.unstable_act=Og;Ze.useCallback=function(t,e){return xn.current.useCallback(t,e)};Ze.useContext=function(t){return xn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return xn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return xn.current.useEffect(t,e)};Ze.useId=function(){return xn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return xn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return xn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return xn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return xn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return xn.current.useReducer(t,e,n)};Ze.useRef=function(t){return xn.current.useRef(t)};Ze.useState=function(t){return xn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return xn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return xn.current.useTransition()};Ze.version="18.3.1";Rg.exports=Ze;var be=Rg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=be,Zv=Symbol.for("react.element"),Kv=Symbol.for("react.fragment"),Qv=Object.prototype.hasOwnProperty,Jv=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e_={key:!0,ref:!0,__self:!0,__source:!0};function kg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Qv.call(e,i)&&!e_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Zv,type:t,key:s,ref:o,props:r,_owner:Jv.current}}Sc.Fragment=Kv;Sc.jsx=kg;Sc.jsxs=kg;Cg.exports=Sc;var M=Cg.exports,zg={exports:{}},zn={},Bg={exports:{}},Hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,K){var ee=N.length;N.push(K);e:for(;0<ee;){var ce=ee-1>>>1,ne=N[ce];if(0<r(ne,K))N[ce]=K,N[ee]=ne,ee=ce;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],ee=N.pop();if(ee!==K){N[0]=ee;e:for(var ce=0,ne=N.length,J=ne>>>1;ce<J;){var j=2*(ce+1)-1,re=N[j],de=j+1,pe=N[de];if(0>r(re,ee))de<ne&&0>r(pe,re)?(N[ce]=pe,N[de]=ee,ce=de):(N[ce]=re,N[j]=ee,ce=j);else if(de<ne&&0>r(pe,ee))N[ce]=pe,N[de]=ee,ce=de;else break e}}return K}function r(N,K){var ee=N.sortIndex-K.sortIndex;return ee!==0?ee:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=N)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(N){if(y=!1,x(N),!v)if(n(l)!==null)v=!0,V(C);else{var K=n(c);K!==null&&Z(S,K.startTime-N)}}function C(N,K){v=!1,y&&(y=!1,h(P),P=-1),p=!0;var ee=f;try{for(x(K),d=n(l);d!==null&&(!(d.expirationTime>K)||N&&!w());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,f=d.priorityLevel;var ne=ce(d.expirationTime<=K);K=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&i(l),x(K)}else i(l);d=n(l)}if(d!==null)var J=!0;else{var j=n(c);j!==null&&Z(S,j.startTime-K),J=!1}return J}finally{d=null,f=ee,p=!1}}var T=!1,A=null,P=-1,H=5,_=-1;function w(){return!(t.unstable_now()-_<H)}function O(){if(A!==null){var N=t.unstable_now();_=N;var K=!0;try{K=A(!0,N)}finally{K?k():(T=!1,A=null)}}else T=!1}var k;if(typeof g=="function")k=function(){g(O)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Q=X.port2;X.port1.onmessage=O,k=function(){Q.postMessage(null)}}else k=function(){m(O,0)};function V(N){A=N,T||(T=!0,k())}function Z(N,K){P=m(function(){N(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,V(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var ee=f;f=K;try{return N()}finally{f=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ee=f;f=N;try{return K()}finally{f=ee}},t.unstable_scheduleCallback=function(N,K,ee){var ce=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ce+ee:ce):ee=ce,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ee+ne,N={id:u++,callback:K,priorityLevel:N,startTime:ee,expirationTime:ne,sortIndex:-1},ee>ce?(N.sortIndex=ee,e(c,N),n(l)===null&&N===n(c)&&(y?(h(P),P=-1):y=!0,Z(S,ee-ce))):(N.sortIndex=ne,e(l,N),v||p||(v=!0,V(C))),N},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(N){var K=f;return function(){var ee=f;f=K;try{return N.apply(this,arguments)}finally{f=ee}}}})(Hg);Bg.exports=Hg;var t_=Bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_=be,kn=t_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gg=new Set,oa={};function as(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(oa[t]=e,t=0;t<e.length;t++)Gg.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,i_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rp={},sp={};function r_(t){return Ju.call(sp,t)?!0:Ju.call(rp,t)?!1:i_.test(t)?sp[t]=!0:(rp[t]=!0,!1)}function s_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o_(t,e,n,i){if(e===null||typeof e>"u"||s_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Wd);nn[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Wd);nn[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Wd);nn[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xd(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o_(e,n,r,i)&&(n=null),i||r===null?r_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Xi=n_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),Vg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),op=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,Xc;function jo(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||""}return`
`+Xc+t}var $c=!1;function Yc(t,e){if(!t||$c)return"";$c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function a_(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=Yc(t.type,!1),t;case 11:return t=Yc(t.type.render,!1),t;case 1:return t=Yc(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ps:return"Fragment";case Rs:return"Portal";case eh:return"Profiler";case $d:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case Vg:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qd:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function l_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===$d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c_(t){var e=Xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=c_(t))}function $g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ap(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yg(t,e){e=e.checked,e!=null&&Xd(t,"checked",e,!1)}function sh(t,e){Yg(t,e);var n=_r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||Gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function Ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Wo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function qg(t,e){var n=_r(e.value),i=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u_=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){u_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function Qg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function Jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var h_=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(t,e){if(e){if(h_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Xs=null,$s=null;function hp(t){if(t=Aa(t)){if(typeof dh!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Ac(e),dh(t.stateNode,t.type,e))}}function e0(t){Xs?$s?$s.push(t):$s=[t]:Xs=t}function t0(){if(Xs){var t=Xs,e=$s;if($s=Xs=null,hp(t),e)for(t=0;t<e.length;t++)hp(e[t])}}function n0(t,e){return t(e)}function i0(){}var qc=!1;function r0(t,e,n){if(qc)return t(e,n);qc=!0;try{return n0(t,e,n)}finally{qc=!1,(Xs!==null||$s!==null)&&(i0(),t0())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=Ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var fh=!1;if(Hi)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){fh=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{fh=!1}function d_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Zo=!1,Vl=null,jl=!1,ph=null,f_={onError:function(t){Zo=!0,Vl=t}};function p_(t,e,n,i,r,s,o,a,l){Zo=!1,Vl=null,d_.apply(f_,arguments)}function m_(t,e,n,i,r,s,o,a,l){if(p_.apply(this,arguments),Zo){if(Zo){var c=Vl;Zo=!1,Vl=null}else throw Error(se(198));jl||(jl=!0,ph=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dp(t){if(ls(t)!==t)throw Error(se(188))}function g_(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return dp(r),t;if(s===i)return dp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function o0(t){return t=g_(t),t!==null?a0(t):null}function a0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a0(t);if(e!==null)return e;t=t.sibling}return null}var l0=kn.unstable_scheduleCallback,fp=kn.unstable_cancelCallback,x_=kn.unstable_shouldYield,v_=kn.unstable_requestPaint,It=kn.unstable_now,__=kn.unstable_getCurrentPriorityLevel,Kd=kn.unstable_ImmediatePriority,c0=kn.unstable_UserBlockingPriority,Wl=kn.unstable_NormalPriority,y_=kn.unstable_LowPriority,u0=kn.unstable_IdlePriority,Ec=null,Ei=null;function M_(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:w_,S_=Math.log,E_=Math.LN2;function w_(t){return t>>>=0,t===0?32:31-(S_(t)/E_|0)|0}var Ua=64,Fa=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Xo(a):(s&=o,s!==0&&(i=Xo(s)))}else o=n&~r,o!==0?i=Xo(o):s!==0&&(i=Xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function T_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=T_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function Zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function A_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function d0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f0,Jd,p0,m0,g0,gh=!1,Oa=[],cr=null,ur=null,hr=null,ca=new Map,ua=new Map,rr=[],C_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pp(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Co(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function R_(t,e,n,i,r){switch(e){case"focusin":return cr=Co(cr,t,e,n,i,r),!0;case"dragenter":return ur=Co(ur,t,e,n,i,r),!0;case"mouseover":return hr=Co(hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,Co(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,Co(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function x0(t){var e=Wr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=s0(n),e!==null){t.blockedOn=e,g0(t.priority,function(){p0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hh=i,n.target.dispatchEvent(i),hh=null}else return e=Aa(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function mp(t,e,n){El(t)&&n.delete(e)}function P_(){gh=!1,cr!==null&&El(cr)&&(cr=null),ur!==null&&El(ur)&&(ur=null),hr!==null&&El(hr)&&(hr=null),ca.forEach(mp),ua.forEach(mp)}function Ro(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,P_)))}function ha(t){function e(r){return Ro(r,t)}if(0<Oa.length){Ro(Oa[0],t);for(var n=1;n<Oa.length;n++){var i=Oa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(cr!==null&&Ro(cr,t),ur!==null&&Ro(ur,t),hr!==null&&Ro(hr,t),ca.forEach(e),ua.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)x0(n),n.blockedOn===null&&rr.shift()}var Ys=Xi.ReactCurrentBatchConfig,$l=!0;function L_(t,e,n,i){var r=ct,s=Ys.transition;Ys.transition=null;try{ct=1,ef(t,e,n,i)}finally{ct=r,Ys.transition=s}}function N_(t,e,n,i){var r=ct,s=Ys.transition;Ys.transition=null;try{ct=4,ef(t,e,n,i)}finally{ct=r,Ys.transition=s}}function ef(t,e,n,i){if($l){var r=xh(t,e,n,i);if(r===null)ou(t,e,i,Yl,n),pp(t,i);else if(R_(r,t,e,n,i))i.stopPropagation();else if(pp(t,i),e&4&&-1<C_.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&f0(s),s=xh(t,e,n,i),s===null&&ou(t,e,i,Yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ou(t,e,i,null,n)}}var Yl=null;function xh(t,e,n,i){if(Yl=null,t=Zd(i),t=Wr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function v0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(__()){case Kd:return 1;case c0:return 4;case Wl:case y_:return 16;case u0:return 536870912;default:return 16}default:return 16}}var ar=null,tf=null,wl=null;function _0(){if(wl)return wl;var t,e=tf,n=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return wl=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function gp(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:gp,this.isPropagationStopped=gp,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=Bn(xo),ba=Ct({},xo,{view:0,detail:0}),D_=Bn(ba),Kc,Qc,Po,wc=Ct({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Po&&(Po&&t.type==="mousemove"?(Kc=t.screenX-Po.screenX,Qc=t.screenY-Po.screenY):Qc=Kc=0,Po=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),xp=Bn(wc),I_=Ct({},wc,{dataTransfer:0}),U_=Bn(I_),F_=Ct({},ba,{relatedTarget:0}),Jc=Bn(F_),O_=Ct({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),k_=Bn(O_),z_=Ct({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B_=Bn(z_),H_=Ct({},xo,{data:0}),vp=Bn(H_),G_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j_[t])?!!e[t]:!1}function rf(){return W_}var X_=Ct({},ba,{key:function(t){if(t.key){var e=G_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?V_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=Bn(X_),Y_=Ct({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Bn(Y_),q_=Ct({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),Z_=Bn(q_),K_=Ct({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q_=Bn(K_),J_=Ct({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ey=Bn(J_),ty=[9,13,27,32],sf=Hi&&"CompositionEvent"in window,Ko=null;Hi&&"documentMode"in document&&(Ko=document.documentMode);var ny=Hi&&"TextEvent"in window&&!Ko,y0=Hi&&(!sf||Ko&&8<Ko&&11>=Ko),yp=" ",Mp=!1;function M0(t,e){switch(t){case"keyup":return ty.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function iy(t,e){switch(t){case"compositionend":return S0(e);case"keypress":return e.which!==32?null:(Mp=!0,yp);case"textInput":return t=e.data,t===yp&&Mp?null:t;default:return null}}function ry(t,e){if(Ls)return t==="compositionend"||!sf&&M0(t,e)?(t=_0(),wl=tf=ar=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y0&&e.locale!=="ko"?null:e.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sy[t.type]:e==="textarea"}function E0(t,e,n,i){e0(i),e=ql(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qo=null,da=null;function oy(t){I0(t,0)}function Tc(t){var e=Is(t);if($g(e))return t}function ay(t,e){if(t==="change")return e}var w0=!1;if(Hi){var eu;if(Hi){var tu="oninput"in document;if(!tu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),tu=typeof Ep.oninput=="function"}eu=tu}else eu=!1;w0=eu&&(!document.documentMode||9<document.documentMode)}function wp(){Qo&&(Qo.detachEvent("onpropertychange",T0),da=Qo=null)}function T0(t){if(t.propertyName==="value"&&Tc(da)){var e=[];E0(e,da,t,Zd(t)),r0(oy,e)}}function ly(t,e,n){t==="focusin"?(wp(),Qo=e,da=n,Qo.attachEvent("onpropertychange",T0)):t==="focusout"&&wp()}function cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tc(da)}function uy(t,e){if(t==="click")return Tc(e)}function hy(t,e){if(t==="input"||t==="change")return Tc(e)}function dy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:dy;function fa(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ju.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bp(t,e){var n=Tp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tp(n)}}function b0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A0(){for(var t=window,e=Gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gl(t.document)}return e}function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fy(t){var e=A0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b0(n.ownerDocument.documentElement,n)){if(i!==null&&of(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bp(n,s);var o=bp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var py=Hi&&"documentMode"in document&&11>=document.documentMode,Ns=null,vh=null,Jo=null,_h=!1;function Ap(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||Ns==null||Ns!==Gl(i)||(i=Ns,"selectionStart"in i&&of(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jo&&fa(Jo,i)||(Jo=i,i=ql(vh,"onSelect"),0<i.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},nu={},C0={};Hi&&(C0=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function bc(t){if(nu[t])return nu[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C0)return nu[t]=e[n];return t}var R0=bc("animationend"),P0=bc("animationiteration"),L0=bc("animationstart"),N0=bc("transitionend"),D0=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){D0.set(t,e),as(e,[t])}for(var iu=0;iu<Cp.length;iu++){var ru=Cp[iu],my=ru.toLowerCase(),gy=ru[0].toUpperCase()+ru.slice(1);Tr(my,"on"+gy)}Tr(R0,"onAnimationEnd");Tr(P0,"onAnimationIteration");Tr(L0,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(N0,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xy=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,m_(i,e,void 0,t),t.currentTarget=null}function I0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rp(r,a,c),s=l}}}if(jl)throw t=ph,jl=!1,ph=null,t}function vt(t,e){var n=e[wh];n===void 0&&(n=e[wh]=new Set);var i=t+"__bubble";n.has(i)||(U0(e,t,2,!1),n.add(i))}function su(t,e,n){var i=0;e&&(i|=4),U0(n,t,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Ba]){t[Ba]=!0,Gg.forEach(function(n){n!=="selectionchange"&&(xy.has(n)||su(n,!1,t),su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,su("selectionchange",!1,e))}}function U0(t,e,n,i){switch(v0(e)){case 1:var r=L_;break;case 4:r=N_;break;default:r=ef}n=r.bind(null,e,n,t),r=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ou(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}r0(function(){var c=s,u=Zd(n),d=[];e:{var f=D0.get(t);if(f!==void 0){var p=nf,v=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":p=$_;break;case"focusin":v="focus",p=Jc;break;case"focusout":v="blur",p=Jc;break;case"beforeblur":case"afterblur":p=Jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=U_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Z_;break;case R0:case P0:case L0:p=k_;break;case N0:p=Q_;break;case"scroll":p=D_;break;case"wheel":p=ey;break;case"copy":case"cut":case"paste":p=B_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_p}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=la(g,h),S!=null&&y.push(ma(g,S,x)))),m)break;g=g.return}0<y.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==hh&&(v=n.relatedTarget||n.fromElement)&&(Wr(v)||v[Gi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Wr(v):null,v!==null&&(m=ls(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=xp,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=_p,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:Is(p),x=v==null?f:Is(v),f=new y(S,g+"leave",p,n,u),f.target=m,f.relatedTarget=x,S=null,Wr(u)===c&&(y=new y(h,g+"enter",v,n,u),y.target=x,y.relatedTarget=m,S=y),m=S,p&&v)t:{for(y=p,h=v,g=0,x=y;x;x=ds(x))g++;for(x=0,S=h;S;S=ds(S))x++;for(;0<g-x;)y=ds(y),g--;for(;0<x-g;)h=ds(h),x--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=ds(y),h=ds(h)}y=null}else y=null;p!==null&&Pp(d,f,p,y,!1),v!==null&&m!==null&&Pp(d,m,v,y,!0)}}e:{if(f=c?Is(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=ay;else if(Sp(f))if(w0)C=hy;else{C=cy;var T=ly}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=uy);if(C&&(C=C(t,c))){E0(d,C,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&oh(f,"number",f.value)}switch(T=c?Is(c):window,t){case"focusin":(Sp(T)||T.contentEditable==="true")&&(Ns=T,vh=c,Jo=null);break;case"focusout":Jo=vh=Ns=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,Ap(d,n,u);break;case"selectionchange":if(py)break;case"keydown":case"keyup":Ap(d,n,u)}var A;if(sf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ls?M0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(y0&&n.locale!=="ko"&&(Ls||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ls&&(A=_0()):(ar=u,tf="value"in ar?ar.value:ar.textContent,Ls=!0)),T=ql(c,P),0<T.length&&(P=new vp(P,t,null,n,u),d.push({event:P,listeners:T}),A?P.data=A:(A=S0(n),A!==null&&(P.data=A)))),(A=ny?iy(t,n):ry(t,n))&&(c=ql(c,"onBeforeInput"),0<c.length&&(u=new vp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}I0(d,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):r||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function Lp(t){return(typeof t=="string"?t:""+t).replace(vy,`
`).replace(_y,"")}function Ha(t,e,n){if(e=Lp(e),Lp(t)!==e&&n)throw Error(se(425))}function Zl(){}var yh=null,Mh=null;function Sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,Np=typeof Promise=="function"?Promise:void 0,My=typeof queueMicrotask=="function"?queueMicrotask:typeof Np<"u"?function(t){return Np.resolve(null).then(t).catch(Sy)}:Eh;function Sy(t){setTimeout(function(){throw t})}function au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ha(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Mi="__reactFiber$"+vo,ga="__reactProps$"+vo,Gi="__reactContainer$"+vo,wh="__reactEvents$"+vo,Ey="__reactListeners$"+vo,wy="__reactHandles$"+vo;function Wr(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dp(t);t!==null;){if(n=t[Mi])return n;t=Dp(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[Mi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Ac(t){return t[ga]||null}var Th=[],Us=-1;function br(t){return{current:t}}function yt(t){0>Us||(t.current=Th[Us],Th[Us]=null,Us--)}function xt(t,e){Us++,Th[Us]=t.current,t.current=e}var yr={},hn=br(yr),bn=br(!1),es=yr;function io(t,e){var n=t.type.contextTypes;if(!n)return yr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function Kl(){yt(bn),yt(hn)}function Ip(t,e,n){if(hn.current!==yr)throw Error(se(168));xt(hn,e),xt(bn,n)}function F0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,l_(t)||"Unknown",r));return Ct({},n,i)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,es=hn.current,xt(hn,t),xt(bn,bn.current),!0}function Up(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=F0(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,yt(bn),yt(hn),xt(hn,t)):yt(bn),xt(bn,n)}var Ui=null,Cc=!1,lu=!1;function O0(t){Ui===null?Ui=[t]:Ui.push(t)}function Ty(t){Cc=!0,O0(t)}function Ar(){if(!lu&&Ui!==null){lu=!0;var t=0,e=ct;try{var n=Ui;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,Cc=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),l0(Kd,Ar),r}finally{ct=e,lu=!1}}return null}var Fs=[],Os=0,Jl=null,ec=0,Yn=[],qn=0,ts=null,Oi=1,ki="";function zr(t,e){Fs[Os++]=ec,Fs[Os++]=Jl,Jl=t,ec=e}function k0(t,e,n){Yn[qn++]=Oi,Yn[qn++]=ki,Yn[qn++]=ts,ts=t;var i=Oi;t=ki;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-di(e)+r|n<<r|i,ki=s+t}else Oi=1<<s|n<<r|i,ki=t}function af(t){t.return!==null&&(zr(t,1),k0(t,1,0))}function lf(t){for(;t===Jl;)Jl=Fs[--Os],Fs[Os]=null,ec=Fs[--Os],Fs[Os]=null;for(;t===ts;)ts=Yn[--qn],Yn[qn]=null,ki=Yn[--qn],Yn[qn]=null,Oi=Yn[--qn],Yn[qn]=null}var Fn=null,Un=null,Mt=!1,li=null;function z0(t,e){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,Un=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,Un=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(Mt){var e=Un;if(e){var n=e;if(!Fp(t,e)){if(bh(t))throw Error(se(418));e=dr(n.nextSibling);var i=Fn;e&&Fp(t,e)?z0(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Fn=t)}}else{if(bh(t))throw Error(se(418));t.flags=t.flags&-4097|2,Mt=!1,Fn=t}}}function Op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Ga(t){if(t!==Fn)return!1;if(!Mt)return Op(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sh(t.type,t.memoizedProps)),e&&(e=Un)){if(bh(t))throw B0(),Error(se(418));for(;e;)z0(t,e),e=dr(e.nextSibling)}if(Op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=Fn?dr(t.stateNode.nextSibling):null;return!0}function B0(){for(var t=Un;t;)t=dr(t.nextSibling)}function ro(){Un=Fn=null,Mt=!1}function cf(t){li===null?li=[t]:li.push(t)}var by=Xi.ReactCurrentBatchConfig;function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kp(t){var e=t._init;return e(t._payload)}function H0(t){function e(h,g){if(t){var x=h.deletions;x===null?(h.deletions=[g],h.flags|=16):x.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=gr(h,g),h.index=0,h.sibling=null,h}function s(h,g,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<g?(h.flags|=2,g):x):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,x,S){return g===null||g.tag!==6?(g=mu(x,h.mode,S),g.return=h,g):(g=r(g,x),g.return=h,g)}function l(h,g,x,S){var C=x.type;return C===Ps?u(h,g,x.props.children,S,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===er&&kp(C)===g.type)?(S=r(g,x.props),S.ref=Lo(h,g,x),S.return=h,S):(S=Nl(x.type,x.key,x.props,null,h.mode,S),S.ref=Lo(h,g,x),S.return=h,S)}function c(h,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=gu(x,h.mode,S),g.return=h,g):(g=r(g,x.children||[]),g.return=h,g)}function u(h,g,x,S,C){return g===null||g.tag!==7?(g=Qr(x,h.mode,S,C),g.return=h,g):(g=r(g,x),g.return=h,g)}function d(h,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=mu(""+g,h.mode,x),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Na:return x=Nl(g.type,g.key,g.props,null,h.mode,x),x.ref=Lo(h,null,g),x.return=h,x;case Rs:return g=gu(g,h.mode,x),g.return=h,g;case er:var S=g._init;return d(h,S(g._payload),x)}if(Wo(g)||bo(g))return g=Qr(g,h.mode,x,null),g.return=h,g;Va(h,g)}return null}function f(h,g,x,S){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Na:return x.key===C?l(h,g,x,S):null;case Rs:return x.key===C?c(h,g,x,S):null;case er:return C=x._init,f(h,g,C(x._payload),S)}if(Wo(x)||bo(x))return C!==null?null:u(h,g,x,S,null);Va(h,x)}return null}function p(h,g,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(g,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Na:return h=h.get(S.key===null?x:S.key)||null,l(g,h,S,C);case Rs:return h=h.get(S.key===null?x:S.key)||null,c(g,h,S,C);case er:var T=S._init;return p(h,g,x,T(S._payload),C)}if(Wo(S)||bo(S))return h=h.get(x)||null,u(g,h,S,C,null);Va(g,S)}return null}function v(h,g,x,S){for(var C=null,T=null,A=g,P=g=0,H=null;A!==null&&P<x.length;P++){A.index>P?(H=A,A=null):H=A.sibling;var _=f(h,A,x[P],S);if(_===null){A===null&&(A=H);break}t&&A&&_.alternate===null&&e(h,A),g=s(_,g,P),T===null?C=_:T.sibling=_,T=_,A=H}if(P===x.length)return n(h,A),Mt&&zr(h,P),C;if(A===null){for(;P<x.length;P++)A=d(h,x[P],S),A!==null&&(g=s(A,g,P),T===null?C=A:T.sibling=A,T=A);return Mt&&zr(h,P),C}for(A=i(h,A);P<x.length;P++)H=p(A,h,P,x[P],S),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?P:H.key),g=s(H,g,P),T===null?C=H:T.sibling=H,T=H);return t&&A.forEach(function(w){return e(h,w)}),Mt&&zr(h,P),C}function y(h,g,x,S){var C=bo(x);if(typeof C!="function")throw Error(se(150));if(x=C.call(x),x==null)throw Error(se(151));for(var T=C=null,A=g,P=g=0,H=null,_=x.next();A!==null&&!_.done;P++,_=x.next()){A.index>P?(H=A,A=null):H=A.sibling;var w=f(h,A,_.value,S);if(w===null){A===null&&(A=H);break}t&&A&&w.alternate===null&&e(h,A),g=s(w,g,P),T===null?C=w:T.sibling=w,T=w,A=H}if(_.done)return n(h,A),Mt&&zr(h,P),C;if(A===null){for(;!_.done;P++,_=x.next())_=d(h,_.value,S),_!==null&&(g=s(_,g,P),T===null?C=_:T.sibling=_,T=_);return Mt&&zr(h,P),C}for(A=i(h,A);!_.done;P++,_=x.next())_=p(A,h,P,_.value,S),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?P:_.key),g=s(_,g,P),T===null?C=_:T.sibling=_,T=_);return t&&A.forEach(function(O){return e(h,O)}),Mt&&zr(h,P),C}function m(h,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Ps&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Na:e:{for(var C=x.key,T=g;T!==null;){if(T.key===C){if(C=x.type,C===Ps){if(T.tag===7){n(h,T.sibling),g=r(T,x.props.children),g.return=h,h=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===er&&kp(C)===T.type){n(h,T.sibling),g=r(T,x.props),g.ref=Lo(h,T,x),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}x.type===Ps?(g=Qr(x.props.children,h.mode,S,x.key),g.return=h,h=g):(S=Nl(x.type,x.key,x.props,null,h.mode,S),S.ref=Lo(h,g,x),S.return=h,h=S)}return o(h);case Rs:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(h,g.sibling),g=r(g,x.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=gu(x,h.mode,S),g.return=h,h=g}return o(h);case er:return T=x._init,m(h,g,T(x._payload),S)}if(Wo(x))return v(h,g,x,S);if(bo(x))return y(h,g,x,S);Va(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,x),g.return=h,h=g):(n(h,g),g=mu(x,h.mode,S),g.return=h,h=g),o(h)):n(h,g)}return m}var so=H0(!0),G0=H0(!1),tc=br(null),nc=null,ks=null,uf=null;function hf(){uf=ks=nc=null}function df(t){var e=tc.current;yt(tc),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){nc=t,uf=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function Jn(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(nc===null)throw Error(se(308));ks=t,nc.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Xr=null;function ff(t){Xr===null?Xr=[t]:Xr.push(t)}function V0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}function zp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ic(t,e,n,i){var r=t.updateQueue;tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=Ct({},d,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=d}}function Bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ca={},wi=br(Ca),xa=br(Ca),va=br(Ca);function $r(t){if(t===Ca)throw Error(se(174));return t}function mf(t,e){switch(xt(va,e),xt(xa,t),xt(wi,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}yt(wi),xt(wi,e)}function oo(){yt(wi),yt(xa),yt(va)}function W0(t){$r(va.current);var e=$r(wi.current),n=lh(e,t.type);e!==n&&(xt(xa,t),xt(wi,n))}function gf(t){xa.current===t&&(yt(wi),yt(xa))}var bt=br(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cu=[];function xf(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var Al=Xi.ReactCurrentDispatcher,uu=Xi.ReactCurrentBatchConfig,ns=0,At=null,zt=null,Yt=null,sc=!1,ea=!1,_a=0,Ay=0;function rn(){throw Error(se(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function _f(t,e,n,i,r,s){if(ns=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?Ly:Ny,t=n(i,r),ea){s=0;do{if(ea=!1,_a=0,25<=s)throw Error(se(301));s+=1,Yt=zt=null,e.updateQueue=null,Al.current=Dy,t=n(i,r)}while(ea)}if(Al.current=oc,e=zt!==null&&zt.next!==null,ns=0,Yt=zt=At=null,sc=!1,e)throw Error(se(300));return t}function yf(){var t=_a!==0;return _a=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?At.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function ei(){if(zt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Yt===null?At.memoizedState:Yt.next;if(e!==null)Yt=e,zt=t;else{if(t===null)throw Error(se(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Yt===null?At.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function ya(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=ei(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ns&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,At.lanes|=u,is|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function du(t){var e=ei(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function X0(){}function $0(t,e){var n=At,i=ei(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,Mf(Z0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Yt!==null&&Yt.memoizedState.tag&1){if(n.flags|=2048,Ma(9,q0.bind(null,n,i,r,e),void 0,null),Zt===null)throw Error(se(349));ns&30||Y0(n,e,r)}return r}function Y0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q0(t,e,n,i){e.value=n,e.getSnapshot=i,K0(e)&&Q0(t)}function Z0(t,e,n){return n(function(){K0(e)&&Q0(t)})}function K0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function Q0(t){var e=Vi(t,1);e!==null&&fi(e,t,1,-1)}function Hp(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=Py.bind(null,At,t),[e.memoizedState,t]}function Ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function J0(){return ei().memoizedState}function Cl(t,e,n,i){var r=_i();At.flags|=t,r.memoizedState=Ma(1|e,n,void 0,i===void 0?null:i)}function Rc(t,e,n,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&vf(i,o.deps)){r.memoizedState=Ma(e,n,s,i);return}}At.flags|=t,r.memoizedState=Ma(1|e,n,s,i)}function Gp(t,e){return Cl(8390656,8,t,e)}function Mf(t,e){return Rc(2048,8,t,e)}function ex(t,e){return Rc(4,2,t,e)}function tx(t,e){return Rc(4,4,t,e)}function nx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ix(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4,4,nx.bind(null,e,t),n)}function Sf(){}function rx(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sx(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ox(t,e,n){return ns&21?(pi(n,e)||(n=h0(),At.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function Cy(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=uu.transition;uu.transition={};try{t(!1),e()}finally{ct=n,uu.transition=i}}function ax(){return ei().memoizedState}function Ry(t,e,n){var i=mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lx(t))cx(e,n);else if(n=V0(t,e,n,i),n!==null){var r=mn();fi(n,t,i,r),ux(n,e,i)}}function Py(t,e,n){var i=mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lx(t))cx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=V0(t,e,r,i),n!==null&&(r=mn(),fi(n,t,i,r),ux(n,e,i))}}function lx(t){var e=t.alternate;return t===At||e!==null&&e===At}function cx(t,e){ea=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ux(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}var oc={readContext:Jn,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},Ly={readContext:Jn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:Jn,useEffect:Gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,nx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ry.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:Hp,useDebugValue:Sf,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Hp(!1),e=t[0];return t=Cy.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=_i();if(Mt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Zt===null)throw Error(se(349));ns&30||Y0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gp(Z0.bind(null,i,s,t),[t]),i.flags|=2048,Ma(9,q0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=Zt.identifierPrefix;if(Mt){var n=ki,i=Oi;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:Jn,useCallback:rx,useContext:Jn,useEffect:Mf,useImperativeHandle:ix,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:hu,useRef:J0,useState:function(){return hu(ya)},useDebugValue:Sf,useDeferredValue:function(t){var e=ei();return ox(e,zt.memoizedState,t)},useTransition:function(){var t=hu(ya)[0],e=ei().memoizedState;return[t,e]},useMutableSource:X0,useSyncExternalStore:$0,useId:ax,unstable_isNewReconciler:!1},Dy={readContext:Jn,useCallback:rx,useContext:Jn,useEffect:Mf,useImperativeHandle:ix,useInsertionEffect:ex,useLayoutEffect:tx,useMemo:sx,useReducer:du,useRef:J0,useState:function(){return du(ya)},useDebugValue:Sf,useDeferredValue:function(t){var e=ei();return zt===null?e.memoizedState=t:ox(e,zt.memoizedState,t)},useTransition:function(){var t=du(ya)[0],e=ei().memoizedState;return[t,e]},useMutableSource:X0,useSyncExternalStore:$0,useId:ax,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=mr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(fi(e,t,r,i),bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=mr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(fi(e,t,r,i),bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=mr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(fi(e,t,i,n),bl(e,t,i))}};function Vp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fa(n,i)||!fa(r,s):!0}function hx(t,e,n){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=An(e)?es:hn.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function Ph(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=An(e)?es:hn.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=a_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function dx(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){lc||(lc=!0,Hh=i),Lh(t,e)},n}function fx(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof i!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Iy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yy.bind(null,t,e,n),e.then(t,t))}function Xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var Uy=Xi.ReactCurrentOwner,wn=!1;function pn(t,e,n,i){e.child=t===null?G0(e,null,n,i):so(e,t.child,n,i)}function Yp(t,e,n,i,r){n=n.render;var s=e.ref;return qs(e,r),i=_f(t,e,n,i,s,r),n=yf(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(Mt&&n&&af(e),e.flags|=1,pn(t,e,i,r),e.child)}function qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,px(t,e,s,i,r)):(t=Nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(o,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=gr(s,i),t.ref=e.ref,t.return=e,e.child=t}function px(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fa(s,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,ji(t,e,r)}return Nh(t,e,n,i,r)}function mx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Bs,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Bs,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Bs,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Bs,Nn),Nn|=i;return pn(t,e,r,n),e.child}function gx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nh(t,e,n,i,r){var s=An(n)?es:hn.current;return s=io(e,s),qs(e,r),n=_f(t,e,n,i,s,r),i=yf(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(Mt&&i&&af(e),e.flags|=1,pn(t,e,n,r),e.child)}function Zp(t,e,n,i,r){if(An(n)){var s=!0;Ql(e)}else s=!1;if(qs(e,r),e.stateNode===null)Rl(t,e),hx(e,n,i),Ph(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=An(n)?es:hn.current,c=io(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&jp(e,o,i,c),tr=!1;var f=e.memoizedState;o.state=f,ic(e,i,o,r),l=e.memoizedState,a!==i||f!==l||bn.current||tr?(typeof u=="function"&&(Rh(e,n,u,i),l=e.memoizedState),(a=tr||Vp(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,j0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=An(n)?es:hn.current,l=io(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&jp(e,o,i,l),tr=!1,f=e.memoizedState,o.state=f,ic(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||bn.current||tr?(typeof p=="function"&&(Rh(e,n,p,i),v=e.memoizedState),(c=tr||Vp(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Dh(t,e,n,i,s,r)}function Dh(t,e,n,i,r,s){gx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Up(e,n,!1),ji(t,e,s);i=e.stateNode,Uy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):pn(t,e,a,s),e.memoizedState=i.state,r&&Up(e,n,!0),e.child}function xx(t){var e=t.stateNode;e.pendingContext?Ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(t,e.context,!1),mf(t,e.containerInfo)}function Kp(t,e,n,i,r){return ro(),cf(r),e.flags|=256,pn(t,e,n,i),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function vx(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(bt,r&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dc(o,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=Ih,t):Ef(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Fy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=gr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=gr(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,i}return s=t.child,t=s.sibling,i=gr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ef(t,e){return e=Dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,i){return i!==null&&cf(i),so(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=fu(Error(se(422))),ja(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return ja(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=fu(s,i,void 0),ja(t,e,o,i)}if(a=(o&t.childLanes)!==0,wn||a){if(i=Zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),fi(i,t,r,-1))}return Rf(),i=fu(Error(se(421))),ja(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=dr(r.nextSibling),Fn=e,Mt=!0,li=null,t!==null&&(Yn[qn++]=Oi,Yn[qn++]=ki,Yn[qn++]=ts,Oi=t.id,ki=t.overflow,ts=e),e=Ef(e,i.children),e.flags|=4096,e)}function Qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ch(t.return,e,n)}function pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _x(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qp(t,n,e);else if(t.tag===19)Qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pu(e,!0,n,null,s);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Oy(t,e,n){switch(e.tag){case 3:xx(e),ro();break;case 5:W0(e);break;case 1:An(e.type)&&Ql(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?vx(t,e,n):(xt(bt,bt.current&1),t=ji(t,e,n),t!==null?t.sibling:null);xt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _x(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,mx(t,e,n)}return ji(t,e,n)}var yx,Fh,Mx,Sx;yx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fh=function(){};Mx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(wi.current);var s=null;switch(n){case"input":r=rh(t,r),i=rh(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=ah(t,r),i=ah(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}ch(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sx=function(t,e,n,i){n!==i&&(e.flags|=4)};function No(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ky(t,e,n){var i=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return An(e.type)&&Kl(),sn(e),null;case 3:return i=e.stateNode,oo(),yt(bn),yt(hn),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(jh(li),li=null))),Fh(t,e),sn(e),null;case 5:gf(e);var r=$r(va.current);if(n=e.type,t!==null&&e.stateNode!=null)Mx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return sn(e),null}if(t=$r(wi.current),Ga(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<$o.length;r++)vt($o[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":ap(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":cp(i,s),vt("invalid",i)}ch(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":Da(i),lp(i,s,!0);break;case"textarea":Da(i),up(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Mi]=e,t[ga]=i,yx(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<$o.length;r++)vt($o[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":ap(t,i),r=rh(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),vt("invalid",t);break;case"textarea":cp(t,i),r=ah(t,i),vt("invalid",t);break;default:r=i}ch(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&Xd(t,s,l,o))}switch(n){case"input":Da(t),lp(t,i,!1);break;case"textarea":Da(t),up(t);break;case"option":i.value!=null&&t.setAttribute("value",""+_r(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)Sx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=$r(va.current),$r(wi.current),Ga(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:Ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return sn(e),null;case 13:if(yt(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Un!==null&&e.mode&1&&!(e.flags&128))B0(),ro(),e.flags|=98560,s=!1;else if(s=Ga(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Mi]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else li!==null&&(jh(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Ht===0&&(Ht=3):Rf())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return oo(),Fh(t,e),t===null&&pa(e.stateNode.containerInfo),sn(e),null;case 10:return df(e.type._context),sn(e),null;case 17:return An(e.type)&&Kl(),sn(e),null;case 19:if(yt(bt),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rc(t),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>lo&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(t=rc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return sn(e),null}else 2*It()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=bt.current,xt(bt,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return Cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function zy(t,e){switch(lf(e),e.tag){case 1:return An(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),yt(bn),yt(hn),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(yt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(bt),null;case 4:return oo(),null;case 10:return df(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var Wa=!1,ln=!1,By=typeof WeakSet=="function"?WeakSet:Set,Se=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function Oh(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var Jp=!1;function Hy(t,e){if(yh=$l,t=A0(),of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},$l=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:oi(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Lt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=Jp,Jp=!1,v}function ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Oh(e,n,s)}r=r.next}while(r!==i)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ex(t){var e=t.alternate;e!==null&&(t.alternate=null,Ex(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[ga],delete e[wh],delete e[Ey],delete e[wy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wx(t){return t.tag===5||t.tag===3||t.tag===4}function em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}var en=null,ai=!1;function $i(t,e,n){for(n=n.child;n!==null;)Tx(t,e,n),n=n.sibling}function Tx(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:ln||zs(n,e);case 6:var i=en,r=ai;en=null,$i(t,e,n),en=i,ai=r,en!==null&&(ai?(t=en,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(ai?(t=en,n=n.stateNode,t.nodeType===8?au(t.parentNode,n):t.nodeType===1&&au(t,n),ha(t)):au(en,n.stateNode));break;case 4:i=en,r=ai,en=n.stateNode.containerInfo,ai=!0,$i(t,e,n),en=i,ai=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Oh(n,e,o),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!ln&&(zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Lt(n,e,a)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,$i(t,e,n),ln=i):$i(t,e,n);break;default:$i(t,e,n)}}function tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new By),e.forEach(function(i){var r=Zy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,ai=!1;break e;case 3:en=a.stateNode.containerInfo,ai=!0;break e;case 4:en=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(en===null)throw Error(se(160));Tx(s,o,r),en=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bx(e,t),e=e.sibling}function bx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),vi(t),i&4){try{ta(3,t,t.return),Lc(3,t)}catch(y){Lt(t,t.return,y)}try{ta(5,t,t.return)}catch(y){Lt(t,t.return,y)}}break;case 1:ti(e,t),vi(t),i&512&&n!==null&&zs(n,n.return);break;case 5:if(ti(e,t),vi(t),i&512&&n!==null&&zs(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(y){Lt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yg(r,s),uh(a,o);var c=uh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Jg(r,d):u==="dangerouslySetInnerHTML"?Kg(r,d):u==="children"?aa(r,d):Xd(r,u,d,c)}switch(a){case"input":sh(r,s);break;case"textarea":qg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ws(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(y){Lt(t,t.return,y)}}break;case 6:if(ti(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Lt(t,t.return,y)}}break;case 3:if(ti(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(y){Lt(t,t.return,y)}break;case 4:ti(e,t),vi(t);break;case 13:ti(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bf=It())),i&4&&tm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||u,ti(e,t),ln=c):ti(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(d=Se=u;Se!==null;){switch(f=Se,p=f.child,f.tag){case 0:case 11:case 14:case 15:ta(4,f,f.return);break;case 1:zs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Lt(i,n,y)}}break;case 5:zs(f,f.return);break;case 22:if(f.memoizedState!==null){im(d);continue}}p!==null?(p.return=f,Se=p):im(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qg("display",o))}catch(y){Lt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Lt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ti(e,t),vi(t),i&4&&tm(t);break;case 21:break;default:ti(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wx(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=em(t);Bh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=em(t);zh(t,a,o);break;default:throw Error(se(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gy(t,e,n){Se=t,Ax(t)}function Ax(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||ln;a=Wa;var c=ln;if(Wa=o,(ln=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?rm(r):l!==null?(l.return=o,Se=l):rm(r);for(;s!==null;)Se=s,Ax(s),s=s.sibling;Se=r,Wa=a,ln=c}nm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):nm(t)}}function nm(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ln||Lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ha(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}ln||e.flags&512&&kh(e)}catch(f){Lt(e,e.return,f)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function im(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function rm(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{kh(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{kh(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Vy=Math.ceil,ac=Xi.ReactCurrentDispatcher,wf=Xi.ReactCurrentOwner,Kn=Xi.ReactCurrentBatchConfig,rt=0,Zt=null,Ot=null,tn=0,Nn=0,Bs=br(0),Ht=0,Sa=null,is=0,Nc=0,Tf=0,na=null,En=null,bf=0,lo=1/0,Ii=null,lc=!1,Hh=null,pr=null,Xa=!1,lr=null,cc=0,ia=0,Gh=null,Pl=-1,Ll=0;function mn(){return rt&6?It():Pl!==-1?Pl:Pl=It()}function mr(t){return t.mode&1?rt&2&&tn!==0?tn&-tn:by.transition!==null?(Ll===0&&(Ll=h0()),Ll):(t=ct,t!==0||(t=window.event,t=t===void 0?16:v0(t.type)),t):1}function fi(t,e,n,i){if(50<ia)throw ia=0,Gh=null,Error(se(185));Ta(t,n,i),(!(rt&2)||t!==Zt)&&(t===Zt&&(!(rt&2)&&(Nc|=n),Ht===4&&sr(t,tn)),Cn(t,i),n===1&&rt===0&&!(e.mode&1)&&(lo=It()+500,Cc&&Ar()))}function Cn(t,e){var n=t.callbackNode;b_(t,e);var i=Xl(t,t===Zt?tn:0);if(i===0)n!==null&&fp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fp(n),e===1)t.tag===0?Ty(sm.bind(null,t)):O0(sm.bind(null,t)),My(function(){!(rt&6)&&Ar()}),n=null;else{switch(d0(i)){case 1:n=Kd;break;case 4:n=c0;break;case 16:n=Wl;break;case 536870912:n=u0;break;default:n=Wl}n=Ux(n,Cx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cx(t,e){if(Pl=-1,Ll=0,rt&6)throw Error(se(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=Xl(t,t===Zt?tn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uc(t,i);else{e=i;var r=rt;rt|=2;var s=Px();(Zt!==t||tn!==e)&&(Ii=null,lo=It()+500,Kr(t,e));do try{Xy();break}catch(a){Rx(t,a)}while(!0);hf(),ac.current=s,rt=r,Ot!==null?e=0:(Zt=null,tn=0,e=Ht)}if(e!==0){if(e===2&&(r=mh(t),r!==0&&(i=r,e=Vh(t,r))),e===1)throw n=Sa,Kr(t,0),sr(t,i),Cn(t,It()),n;if(e===6)sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!jy(r)&&(e=uc(t,i),e===2&&(s=mh(t),s!==0&&(i=s,e=Vh(t,s))),e===1))throw n=Sa,Kr(t,0),sr(t,i),Cn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Br(t,En,Ii);break;case 3:if(sr(t,i),(i&130023424)===i&&(e=bf+500-It(),10<e)){if(Xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Eh(Br.bind(null,t,En,Ii),e);break}Br(t,En,Ii);break;case 4:if(sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Vy(i/1960))-i,10<i){t.timeoutHandle=Eh(Br.bind(null,t,En,Ii),i);break}Br(t,En,Ii);break;case 5:Br(t,En,Ii);break;default:throw Error(se(329))}}}return Cn(t,It()),t.callbackNode===n?Cx.bind(null,t):null}function Vh(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=uc(t,e),t!==2&&(e=En,En=n,e!==null&&jh(e)),t}function jh(t){En===null?En=t:En.push.apply(En,t)}function jy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~Tf,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function sm(t){if(rt&6)throw Error(se(327));Zs();var e=Xl(t,0);if(!(e&1))return Cn(t,It()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var i=mh(t);i!==0&&(e=i,n=Vh(t,i))}if(n===1)throw n=Sa,Kr(t,0),sr(t,e),Cn(t,It()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,En,Ii),Cn(t,It()),null}function Af(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(lo=It()+500,Cc&&Ar())}}function rs(t){lr!==null&&lr.tag===0&&!(rt&6)&&Zs();var e=rt;rt|=1;var n=Kn.transition,i=ct;try{if(Kn.transition=null,ct=1,t)return t()}finally{ct=i,Kn.transition=n,rt=e,!(rt&6)&&Ar()}}function Cf(){Nn=Bs.current,yt(Bs)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yy(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(lf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:oo(),yt(bn),yt(hn),xf();break;case 5:gf(i);break;case 4:oo();break;case 13:yt(bt);break;case 19:yt(bt);break;case 10:df(i.type._context);break;case 22:case 23:Cf()}n=n.return}if(Zt=t,Ot=t=gr(t.current,null),tn=Nn=e,Ht=0,Sa=null,Tf=Nc=is=0,En=na=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Xr=null}return t}function Rx(t,e){do{var n=Ot;try{if(hf(),Al.current=oc,sc){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sc=!1}if(ns=0,Yt=zt=At=null,ea=!1,_a=0,wf.current=null,n===null||n.return===null){Ht=1,Sa=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Xp(o);if(p!==null){p.flags&=-257,$p(p,o,a,s,e),p.mode&1&&Wp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Wp(s,c,e),Rf();break e}l=Error(se(426))}}else if(Mt&&a.mode&1){var m=Xp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),$p(m,o,a,s,e),cf(ao(l,a));break e}}s=l=ao(l,a),Ht!==4&&(Ht=2),na===null?na=[s]:na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=dx(s,l,e);zp(s,h);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(pr===null||!pr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=fx(s,a,e);zp(s,S);break e}}s=s.return}while(s!==null)}Nx(n)}catch(C){e=C,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function Px(){var t=ac.current;return ac.current=oc,t===null?oc:t}function Rf(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Zt===null||!(is&268435455)&&!(Nc&268435455)||sr(Zt,tn)}function uc(t,e){var n=rt;rt|=2;var i=Px();(Zt!==t||tn!==e)&&(Ii=null,Kr(t,e));do try{Wy();break}catch(r){Rx(t,r)}while(!0);if(hf(),rt=n,ac.current=i,Ot!==null)throw Error(se(261));return Zt=null,tn=0,Ht}function Wy(){for(;Ot!==null;)Lx(Ot)}function Xy(){for(;Ot!==null&&!x_();)Lx(Ot)}function Lx(t){var e=Ix(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?Nx(t):Ot=e,wf.current=null}function Nx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zy(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Ot=null;return}}else if(n=ky(n,e,Nn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Ht===0&&(Ht=5)}function Br(t,e,n){var i=ct,r=Kn.transition;try{Kn.transition=null,ct=1,$y(t,e,n,i)}finally{Kn.transition=r,ct=i}return null}function $y(t,e,n,i){do Zs();while(lr!==null);if(rt&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(A_(t,s),t===Zt&&(Ot=Zt=null,tn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,Ux(Wl,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var o=ct;ct=1;var a=rt;rt|=4,wf.current=null,Hy(t,n),bx(n,t),fy(Mh),$l=!!yh,Mh=yh=null,t.current=n,Gy(n),v_(),rt=a,ct=o,Kn.transition=s}else t.current=n;if(Xa&&(Xa=!1,lr=t,cc=r),s=t.pendingLanes,s===0&&(pr=null),M_(n.stateNode),Cn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(lc)throw lc=!1,t=Hh,Hh=null,t;return cc&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Gh?ia++:(ia=0,Gh=t):ia=0,Ar(),null}function Zs(){if(lr!==null){var t=d0(cc),e=Kn.transition,n=ct;try{if(Kn.transition=null,ct=16>t?16:t,lr===null)var i=!1;else{if(t=lr,lr=null,cc=0,rt&6)throw Error(se(331));var r=rt;for(rt|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:ta(8,u,s)}var d=u.child;if(d!==null)d.return=u,Se=d;else for(;Se!==null;){u=Se;var f=u.sibling,p=u.return;if(Ex(u),u===c){Se=null;break}if(f!==null){f.return=p,Se=f;break}Se=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var g=t.current;for(Se=g;Se!==null;){o=Se;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Se=x;else e:for(o=g;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(C){Lt(a,a.return,C)}if(a===o){Se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Se=S;break e}Se=a.return}}if(rt=r,Ar(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Ec,t)}catch{}i=!0}return i}finally{ct=n,Kn.transition=e}}return!1}function om(t,e,n){e=ao(n,e),e=dx(t,e,1),t=fr(t,e,1),e=mn(),t!==null&&(Ta(t,1,e),Cn(t,e))}function Lt(t,e,n){if(t.tag===3)om(t,t,n);else for(;e!==null;){if(e.tag===3){om(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pr===null||!pr.has(i))){t=ao(n,t),t=fx(e,t,1),e=fr(e,t,1),t=mn(),e!==null&&(Ta(e,1,t),Cn(e,t));break}}e=e.return}}function Yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Zt===t&&(tn&n)===n&&(Ht===4||Ht===3&&(tn&130023424)===tn&&500>It()-bf?Kr(t,0):Tf|=n),Cn(t,e)}function Dx(t,e){e===0&&(t.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var n=mn();t=Vi(t,e),t!==null&&(Ta(t,e,n),Cn(t,n))}function qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dx(t,n)}function Zy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Dx(t,n)}var Ix;Ix=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,Oy(t,e,n);wn=!!(t.flags&131072)}else wn=!1,Mt&&e.flags&1048576&&k0(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rl(t,e),t=e.pendingProps;var r=io(e,hn.current);qs(e,n),r=_f(null,e,i,t,r,n);var s=yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pf(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,Ph(e,i,t,n),e=Dh(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&af(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Qy(i),t=oi(i,t),r){case 0:e=Nh(null,e,i,t,n);break e;case 1:e=Zp(null,e,i,t,n);break e;case 11:e=Yp(null,e,i,t,n);break e;case 14:e=qp(null,e,i,oi(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Nh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Zp(t,e,i,r,n);case 3:e:{if(xx(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,j0(t,e),ic(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(se(423)),e),e=Kp(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(se(424)),e),e=Kp(t,e,i,n,r);break e}else for(Un=dr(e.stateNode.containerInfo.firstChild),Fn=e,Mt=!0,li=null,n=G0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=ji(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return W0(e),t===null&&Ah(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sh(i,r)?o=null:s!==null&&Sh(i,s)&&(e.flags|=32),gx(t,e),pn(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return vx(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Yp(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(tc,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!bn.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ch(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qs(e,n),r=Jn(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),qp(t,e,i,r,n);case 15:return px(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Rl(t,e),e.tag=1,An(i)?(t=!0,Ql(e)):t=!1,qs(e,n),hx(e,i,r),Ph(e,i,r,n),Dh(null,e,i,!0,t,n);case 19:return _x(t,e,n);case 22:return mx(t,e,n)}throw Error(se(156,e.tag))};function Ux(t,e){return l0(t,e)}function Ky(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,e,n,i){return new Ky(t,e,n,i)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qy(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===qd)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ps:return Qr(n.children,r,s,e);case $d:o=8,r|=8;break;case eh:return t=Zn(12,n,e,r|2),t.elementType=eh,t.lanes=s,t;case th:return t=Zn(13,n,e,r),t.elementType=th,t.lanes=s,t;case nh:return t=Zn(19,n,e,r),t.elementType=nh,t.lanes=s,t;case Wg:return Dc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vg:o=10;break e;case jg:o=9;break e;case Yd:o=11;break e;case qd:o=14;break e;case er:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=Zn(7,t,i,e),t.lanes=n,t}function Dc(t,e,n,i){return t=Zn(22,t,i,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function mu(t,e,n){return t=Zn(6,t,null,e),t.lanes=n,t}function gu(t,e,n){return e=Zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,i,r,s,o,a,l){return t=new Jy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function e1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Fx(t){if(!t)return yr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(An(n))return F0(t,n,e)}return e}function Ox(t,e,n,i,r,s,o,a,l){return t=Lf(n,i,!0,t,r,s,o,a,l),t.context=Fx(null),n=t.current,i=mn(),r=mr(n),s=Bi(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,Ta(t,r,i),Cn(t,i),t}function Ic(t,e,n,i){var r=e.current,s=mn(),o=mr(r);return n=Fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(fi(t,r,o,s),bl(t,r,o)),o}function hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nf(t,e){am(t,e),(t=t.alternate)&&am(t,e)}function t1(){return null}var kx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Df(t){this._internalRoot=t}Uc.prototype.render=Df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Ic(t,e,null,null)};Uc.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){Ic(null,t,null,null)}),e[Gi]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=m0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&x0(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lm(){}function n1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=hc(o);s.call(c)}}var o=Ox(e,i,t,0,null,!1,!1,"",lm);return t._reactRootContainer=o,t[Gi]=o.current,pa(t.nodeType===8?t.parentNode:t),rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hc(l);a.call(c)}}var l=Lf(t,0,!1,null,null,!1,!1,"",lm);return t._reactRootContainer=l,t[Gi]=l.current,pa(t.nodeType===8?t.parentNode:t),rs(function(){Ic(e,l,n,i)}),l}function Oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hc(o);a.call(l)}}Ic(e,o,t,r)}else o=n1(n,e,t,r,i);return hc(o)}f0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(Qd(e,n|1),Cn(e,It()),!(rt&6)&&(lo=It()+500,Ar()))}break;case 13:rs(function(){var i=Vi(t,1);if(i!==null){var r=mn();fi(i,t,1,r)}}),Nf(t,1)}};Jd=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=mn();fi(e,t,134217728,n)}Nf(t,134217728)}};p0=function(t){if(t.tag===13){var e=mr(t),n=Vi(t,e);if(n!==null){var i=mn();fi(n,t,e,i)}Nf(t,e)}};m0=function(){return ct};g0=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ac(i);if(!r)throw Error(se(90));$g(i),sh(i,r)}}}break;case"textarea":qg(t,n);break;case"select":e=n.value,e!=null&&Ws(t,!!n.multiple,e,!1)}};n0=Af;i0=rs;var i1={usingClientEntryPoint:!1,Events:[Aa,Is,Ac,e0,t0,Af]},Do={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r1={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o0(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||t1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Ec=$a.inject(r1),Ei=$a}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i1;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(se(200));return e1(t,e,null,n)};zn.createRoot=function(t,e){if(!If(t))throw Error(se(299));var n=!1,i="",r=kx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,pa(t.nodeType===8?t.parentNode:t),new Df(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=o0(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return rs(t)};zn.hydrate=function(t,e,n){if(!Fc(e))throw Error(se(200));return Oc(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!If(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=kx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ox(e,null,t,1,n??null,r,!1,s,o),t[Gi]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Uc(e)};zn.render=function(t,e,n){if(!Fc(e))throw Error(se(200));return Oc(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(se(40));return t._reactRootContainer?(rs(function(){Oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};zn.unstable_batchedUpdates=Af;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Oc(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function zx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zx)}catch(t){console.error(t)}}zx(),zg.exports=zn;var s1=zg.exports,Bx,cm=s1;Bx=cm.createRoot,cm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="169",Ks={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o1=0,um=1,a1=2,Hx=1,Gx=2,Di=3,Mr=0,gn=1,In=2,xr=0,Qs=1,Gs=2,hm=3,dm=4,l1=5,Gr=100,c1=101,u1=102,h1=103,d1=104,f1=200,p1=201,m1=202,g1=203,Wh=204,Xh=205,x1=206,v1=207,_1=208,y1=209,M1=210,S1=211,E1=212,w1=213,T1=214,$h=0,Yh=1,qh=2,co=3,Zh=4,Kh=5,Qh=6,Jh=7,Vx=0,b1=1,A1=2,vr=0,C1=1,R1=2,P1=3,jx=4,L1=5,N1=6,D1=7,Wx=300,uo=301,ho=302,ed=303,td=304,kc=306,nd=1e3,Yr=1001,id=1002,Tn=1003,I1=1004,Ya=1005,ci=1006,xu=1007,qr=1008,Wi=1009,Xx=1010,$x=1011,Ea=1012,Ff=1013,ss=1014,Si=1015,Ra=1016,Of=1017,kf=1018,fo=1020,Yx=35902,qx=1021,Zx=1022,hi=1023,Kx=1024,Qx=1025,Js=1026,po=1027,zf=1028,Bf=1029,Jx=1030,Hf=1031,Gf=1033,Dl=33776,Il=33777,Ul=33778,Fl=33779,rd=35840,sd=35841,od=35842,ad=35843,ld=36196,cd=37492,ud=37496,hd=37808,dd=37809,fd=37810,pd=37811,md=37812,gd=37813,xd=37814,vd=37815,_d=37816,yd=37817,Md=37818,Sd=37819,Ed=37820,wd=37821,Ol=36492,Td=36494,bd=36495,ev=36283,Ad=36284,Cd=36285,Rd=36286,U1=3200,F1=3201,tv=0,O1=1,or="",$n="srgb",Cr="srgb-linear",Vf="display-p3",zc="display-p3-linear",dc="linear",_t="srgb",fc="rec709",pc="p3",fs=7680,fm=519,k1=512,z1=513,B1=514,nv=515,H1=516,G1=517,V1=518,j1=519,pm=35044,ni=35048,mm="300 es",zi=2e3,mc=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,Pd=180/Math.PI;function Pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function cn(t,e,n){return Math.max(e,Math.min(n,t))}function W1(t,e){return(t%e+e)%e}function vu(t,e,n){return(1-n)*t+n*e}function Io(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const X1={DEG2RAD:kl};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],h=r[6],g=r[1],x=r[4],S=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*y+a*g+l*C,s[3]=o*m+a*x+l*T,s[6]=o*h+a*S+l*A,s[1]=c*y+u*g+d*C,s[4]=c*m+u*x+d*T,s[7]=c*h+u*S+d*A,s[2]=f*y+p*g+v*C,s[5]=f*m+p*x+v*T,s[8]=f*h+p*S+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_u.makeScale(e,n)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,n){return this.premultiply(_u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new $e;function iv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $1(){const t=gc("canvas");return t.style.display="block",t}const gm={};function zl(t){t in gm||(gm[t]=!0,console.warn(t))}function Y1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function q1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Z1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xm=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vm=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uo={[Cr]:{transfer:dc,primaries:fc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[$n]:{transfer:_t,primaries:fc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[zc]:{transfer:dc,primaries:pc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(vm),fromReference:t=>t.applyMatrix3(xm)},[Vf]:{transfer:_t,primaries:pc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(vm),fromReference:t=>t.applyMatrix3(xm).convertLinearToSRGB()}},K1=new Set([Cr,zc]),at={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!K1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Uo[e].toReference,r=Uo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Uo[t].primaries},getTransfer:function(t){return t===or?dc:Uo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Uo[e].luminanceCoefficients)}};function eo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ps;class Q1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=gc("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=eo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(eo(n[i]/255)*255):n[i]=eo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J1=0;class rv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Pa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Q1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eM=0;class un extends cs{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Yr,r=Yr,s=ci,o=qr,a=hi,l=Wi,c=un.DEFAULT_ANISOTROPY,u=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Pa(),this.name="",this.source=new rv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Wx;un.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,C=(h+1)/2,T=(u+f)/4,A=(d+y)/4,P=(v+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-y)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tM extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends tM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class sv extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==f||c!==p||u!==v){let m=1-a;const h=l*f+c*p+u*v+d*y,g=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,h*g);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*g;if(l=l*m+f*S,c=c*m+p*S,u=u*m+v*S,d=d*m+y*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*f,e[n+1]=l*v+u*f+c*d-a*p,e[n+2]=c*v+u*p+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_m.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_m.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new D,_m=new Sr;class us{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),Za.subVectors(this.max,Fo),ms.subVectors(e.a,Fo),gs.subVectors(e.b,Fo),xs.subVectors(e.c,Fo),Yi.subVectors(gs,ms),qi.subVectors(xs,gs),Dr.subVectors(ms,xs);let n=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Dr.z,Dr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Dr.z,0,-Dr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Dr.y,Dr.x,0];return!Eu(n,ms,gs,xs,Za)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,ms,gs,xs,Za))?!1:(Ka.crossVectors(Yi,qi),n=[Ka.x,Ka.y,Ka.z],Eu(n,ms,gs,xs,Za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new D,new D,new D,new D,new D,new D,new D,new D],ii=new D,qa=new us,ms=new D,gs=new D,xs=new D,Yi=new D,qi=new D,Dr=new D,Fo=new D,Za=new D,Ka=new D,Ir=new D;function Eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ir.fromArray(t,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),u=i.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iM=new us,Oo=new D,wu=new D;class _o{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const n=Oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(wu)),this.expandByPoint(Oo.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new D,Tu=new D,Qa=new D,Zi=new D,bu=new D,Ja=new D,Au=new D;class Bc{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tu.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),Zi.copy(this.origin).sub(Tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Qa),a=Zi.dot(this.direction),l=-Zi.dot(Qa),c=Zi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tu).addScaledVector(Qa,f),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){bu.subVectors(n,e),Ja.subVectors(i,e),Au.crossVectors(bu,Ja);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(Zi,Ja));if(l<0)return null;const c=a*this.direction.dot(bu.cross(Zi));if(c<0||l+c>o)return null;const u=-a*Zi.dot(Au);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,v=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,y=c*d;n[0]=f+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,v=a*u,y=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,sM)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ki.crossVectors(i,Rn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ki.crossVectors(i,Rn)),Ki.normalize(),el.crossVectors(Rn,Ki),r[0]=Ki.x,r[4]=el.x,r[8]=Rn.x,r[1]=Ki.y,r[5]=el.y,r[9]=Rn.y,r[2]=Ki.z,r[6]=el.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],h=i[14],g=i[3],x=i[7],S=i[11],C=i[15],T=r[0],A=r[4],P=r[8],H=r[12],_=r[1],w=r[5],O=r[9],k=r[13],X=r[2],Q=r[6],V=r[10],Z=r[14],N=r[3],K=r[7],ee=r[11],ce=r[15];return s[0]=o*T+a*_+l*X+c*N,s[4]=o*A+a*w+l*Q+c*K,s[8]=o*P+a*O+l*V+c*ee,s[12]=o*H+a*k+l*Z+c*ce,s[1]=u*T+d*_+f*X+p*N,s[5]=u*A+d*w+f*Q+p*K,s[9]=u*P+d*O+f*V+p*ee,s[13]=u*H+d*k+f*Z+p*ce,s[2]=v*T+y*_+m*X+h*N,s[6]=v*A+y*w+m*Q+h*K,s[10]=v*P+y*O+m*V+h*ee,s[14]=v*H+y*k+m*Z+h*ce,s[3]=g*T+x*_+S*X+C*N,s[7]=g*A+x*w+S*Q+C*K,s[11]=g*P+x*O+S*V+C*ee,s[15]=g*H+x*k+S*Z+C*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],h=e[15],g=d*m*c-y*f*c+y*l*p-a*m*p-d*l*h+a*f*h,x=v*f*c-u*m*c-v*l*p+o*m*p+u*l*h-o*f*h,S=u*y*c-v*d*c+v*a*p-o*y*p-u*a*h+o*d*h,C=v*d*l-u*y*l-v*a*f+o*y*f+u*a*m-o*d*m,T=n*g+i*x+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*A,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(u*m*s-v*f*s+v*r*p-n*m*p-u*r*h+n*f*h)*A,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*h-n*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(v*d*s-u*y*s-v*i*p+n*y*p+u*i*h-n*d*h)*A,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*y*r-v*d*r+v*i*f-n*y*f-u*i*m+n*d*m)*A,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,v=s*d,y=o*u,m=o*d,h=a*d,g=l*c,x=l*u,S=l*d,C=i.x,T=i.y,A=i.z;return r[0]=(1-(y+h))*C,r[1]=(p+S)*C,r[2]=(v-x)*C,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(v+x)*A,r[9]=(m-g)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const c=1/s,u=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,n.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=zi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===zi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===mc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=zi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let v,y;if(a===zi)v=(o+s)*d,y=-2*d;else if(a===mc)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new D,ri=new ft,rM=new D(0,0,0),sM=new D(1,1,1),Ki=new D,el=new D,Rn=new D,ym=new ft,Mm=new Sr;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ym,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oM=0;const Sm=new D,_s=new Sr,Ri=new ft,tl=new D,ko=new D,aM=new D,lM=new Sr,Em=new D(1,0,0),wm=new D(0,1,0),Tm=new D(0,0,1),bm={type:"added"},cM={type:"removed"},ys={type:"childadded",child:null},Cu={type:"childremoved",child:null};class Gt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new D,n=new bi,i=new Sr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new $e}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Em,e)}rotateY(e){return this.rotateOnAxis(wm,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,n){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Em,e)}translateY(e){return this.translateOnAxis(wm,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?tl.copy(e):tl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ko,tl,this.up):Ri.lookAt(tl,ko,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(Ri),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cM),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,aM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new D(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new D,Pi=new D,Ru=new D,Li=new D,Ms=new D,Ss=new D,Am=new D,Pu=new D,Lu=new D,Nu=new D,Du=new dt,Iu=new dt,Uu=new dt;class ui{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),Pi.subVectors(i,n),Ru.subVectors(e,n);const o=si.dot(si),a=si.dot(Pi),l=si.dot(Ru),c=Pi.dot(Pi),u=Pi.dot(Ru),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Du.setScalar(0),Iu.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,i),Uu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Du,s.x),o.addScaledVector(Iu,s.y),o.addScaledVector(Uu,s.z),o}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Pi.subVectors(e,n),si.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),si.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Ss.subVectors(s,i),Pu.subVectors(e,i);const l=Ms.dot(Pu),c=Ss.dot(Pu);if(l<=0&&c<=0)return n.copy(i);Lu.subVectors(e,r);const u=Ms.dot(Lu),d=Ss.dot(Lu);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ms,o);Nu.subVectors(e,s);const p=Ms.dot(Nu),v=Ss.dot(Nu);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Ss,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Am.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(Am,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(Ms,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=W1(e,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Fu(o,s,e+1/3),this.g=Fu(o,s,e),this.b=Fu(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=ov[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return at.fromWorkingColorSpace(an.copy(this),e),Math.round(cn(an.r*255,0,255))*65536+Math.round(cn(an.g*255,0,255))*256+Math.round(cn(an.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.fromWorkingColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.fromWorkingColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=$n){at.fromWorkingColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(nl);const i=vu(Qi.h,nl.h,n),r=vu(Qi.s,nl.s,n),s=vu(Qi.l,nl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ze;ze.NAMES=ov;let uM=0;class yo extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=Qs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wh&&(i.blendSrc=this.blendSrc),this.blendDst!==Xh&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zr extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Vx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new D,il=new Ne;class On{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pm,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Io(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Io(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Io(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Io(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Io(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array),s=Mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class av extends On{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class lv extends On{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gt extends On{constructor(e,n,i){super(new Float32Array(e),n,i)}}let hM=0;const jn=new ft,Ou=new Gt,Es=new D,Pn=new us,zo=new us,$t=new D;class _n extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?lv:av)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Ou.lookAt(e),Ou.updateMatrix(),this.applyMatrix4(Ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Pn.min,zo.min),Pn.expandByPoint($t),$t.addVectors(Pn.max,zo.max),Pn.expandByPoint($t)):(Pn.expandByPoint(zo.min),Pn.expandByPoint(zo.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),$t.add(Es)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new D,l[P]=new D;const c=new D,u=new D,d=new D,f=new Ne,p=new Ne,v=new Ne,y=new D,m=new D;function h(P,H,_){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,H),d.fromBufferAttribute(i,_),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,H),v.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const w=1/(p.x*v.y-v.x*p.y);isFinite(w)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(w),a[P].add(y),a[H].add(y),a[_].add(y),l[P].add(m),l[H].add(m),l[_].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,H=g.length;P<H;++P){const _=g[P],w=_.start,O=_.count;for(let k=w,X=w+O;k<X;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new D,S=new D,C=new D,T=new D;function A(P){C.fromBufferAttribute(r,P),T.copy(C);const H=a[P];x.copy(H),x.sub(C.multiplyScalar(C.dot(H))).normalize(),S.crossVectors(T,H);const w=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,H=g.length;P<H;++P){const _=g[P],w=_.start,O=_.count;for(let k=w,X=w+O;k<X;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new On(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cm=new ft,Ur=new Bc,rl=new _o,Rm=new D,sl=new D,ol=new D,al=new D,ku=new D,ll=new D,Pm=new D,cl=new D;class ot extends Gt{constructor(e=new _n,n=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ku.fromBufferAttribute(d,e),o?ll.addScaledVector(ku,u):ll.addScaledVector(ku.sub(n),u))}n.add(ll)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(rl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(rl,Rm)===null||Ur.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Cm.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Cm),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=x;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=ul(this,h,e,i,c,u,d,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=ul(this,o,e,i,c,u,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=x;S<C;S+=3){const T=S,A=S+1,P=S+2;r=ul(this,h,e,i,c,u,d,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=m,x=m+1,S=m+2;r=ul(this,o,e,i,c,u,d,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function dM(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Mr,a),l===null)return null;cl.copy(a),cl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(cl);return c<n.near||c>n.far?null:{distance:c,point:cl.clone(),object:t}}function ul(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,sl),t.getVertexPosition(l,ol),t.getVertexPosition(c,al);const u=dM(t,e,n,i,sl,ol,al,Pm);if(u){const d=new D;ui.getBarycoord(Pm,sl,ol,al,d),r&&(u.uv=ui.getInterpolatedAttribute(r,a,l,c,d,new Ne)),s&&(u.uv1=ui.getInterpolatedAttribute(s,a,l,c,d,new Ne)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};ui.getNormal(sl,ol,al,f.normal),u.face=f,u.barycoord=d}return u}class Mo extends _n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function v(y,m,h,g,x,S,C,T,A,P,H){const _=S/A,w=C/P,O=S/2,k=C/2,X=T/2,Q=A+1,V=P+1;let Z=0,N=0;const K=new D;for(let ee=0;ee<V;ee++){const ce=ee*w-k;for(let ne=0;ne<Q;ne++){const J=ne*_-O;K[y]=J*g,K[m]=ce*x,K[h]=X,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[h]=T>0?1:-1,u.push(K.x,K.y,K.z),d.push(ne/A),d.push(1-ee/P),Z+=1}}for(let ee=0;ee<P;ee++)for(let ce=0;ce<A;ce++){const ne=f+ce+Q*ee,J=f+ce+Q*(ee+1),j=f+(ce+1)+Q*(ee+1),re=f+(ce+1)+Q*ee;l.push(ne,J,re),l.push(J,j,re),N+=6}a.addGroup(p,N,H),p+=N,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=mo(t[n]);for(const r in i)e[r]=i[r]}return e}function fM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const pM={clone:mo,merge:fn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class uv extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new D,Lm=new Ne,Nm=new Ne;class Dn extends uv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,Lm,Nm),n.subVectors(Nm,Lm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ws=-90,Ts=1;class xM extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(ws,Ts,e,n);r.layers=this.layers,this.add(r);const s=new Dn(ws,Ts,e,n);s.layers=this.layers,this.add(s);const o=new Dn(ws,Ts,e,n);o.layers=this.layers,this.add(o);const a=new Dn(ws,Ts,e,n);a.layers=this.layers,this.add(a);const l=new Dn(ws,Ts,e,n);l.layers=this.layers,this.add(l);const c=new Dn(ws,Ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class hv extends un{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:uo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vM extends os{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ci}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mo(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:xr});s.uniforms.tEquirect.value=n;const o=new ot(r,s),a=n.minFilter;return n.minFilter===qr&&(n.minFilter=ci),new xM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const zu=new D,_M=new D,yM=new $e;class Fi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zu.subVectors(i,n).cross(_M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yM.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new _o,hl=new D;class Wf{constructor(e=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],y=r[10],m=r[11],h=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+v,S+g).normalize(),i[3].setComponents(l-o,f-u,m-v,S-g).normalize(),i[4].setComponents(l-a,f-d,m-y,S-x).normalize(),n===zi)i[5].setComponents(l+a,f+d,m+y,S+x).normalize();else if(n===mc)i[5].setComponents(a,d,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(hl.x=r.normal.x>0?e.max.x:e.min.x,hl.y=r.normal.y>0?e.max.y:e.min.y,hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function MM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Hc extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],v=[],y=[],m=[];for(let h=0;h<u;h++){const g=h*f-o;for(let x=0;x<c;x++){const S=x*d-s;v.push(S,-g,0),y.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const x=g+c*h,S=g+c*(h+1),C=g+1+c*(h+1),T=g+1+c*h;p.push(x,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_S=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ES=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,US=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:SM,alphahash_pars_fragment:EM,alphamap_fragment:wM,alphamap_pars_fragment:TM,alphatest_fragment:bM,alphatest_pars_fragment:AM,aomap_fragment:CM,aomap_pars_fragment:RM,batching_pars_vertex:PM,batching_vertex:LM,begin_vertex:NM,beginnormal_vertex:DM,bsdfs:IM,iridescence_fragment:UM,bumpmap_pars_fragment:FM,clipping_planes_fragment:OM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:BM,color_fragment:HM,color_pars_fragment:GM,color_pars_vertex:VM,color_vertex:jM,common:WM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:$M,displacementmap_pars_vertex:YM,displacementmap_vertex:qM,emissivemap_fragment:ZM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:eS,envmap_common_pars_fragment:tS,envmap_pars_fragment:nS,envmap_pars_vertex:iS,envmap_physical_pars_fragment:pS,envmap_vertex:rS,fog_vertex:sS,fog_pars_vertex:oS,fog_fragment:aS,fog_pars_fragment:lS,gradientmap_pars_fragment:cS,lightmap_pars_fragment:uS,lights_lambert_fragment:hS,lights_lambert_pars_fragment:dS,lights_pars_begin:fS,lights_toon_fragment:mS,lights_toon_pars_fragment:gS,lights_phong_fragment:xS,lights_phong_pars_fragment:vS,lights_physical_fragment:_S,lights_physical_pars_fragment:yS,lights_fragment_begin:MS,lights_fragment_maps:SS,lights_fragment_end:ES,logdepthbuf_fragment:wS,logdepthbuf_pars_fragment:TS,logdepthbuf_pars_vertex:bS,logdepthbuf_vertex:AS,map_fragment:CS,map_pars_fragment:RS,map_particle_fragment:PS,map_particle_pars_fragment:LS,metalnessmap_fragment:NS,metalnessmap_pars_fragment:DS,morphinstance_vertex:IS,morphcolor_vertex:US,morphnormal_vertex:FS,morphtarget_pars_vertex:OS,morphtarget_vertex:kS,normal_fragment_begin:zS,normal_fragment_maps:BS,normal_pars_fragment:HS,normal_pars_vertex:GS,normal_vertex:VS,normalmap_pars_fragment:jS,clearcoat_normal_fragment_begin:WS,clearcoat_normal_fragment_maps:XS,clearcoat_pars_fragment:$S,iridescence_pars_fragment:YS,opaque_fragment:qS,packing:ZS,premultiplied_alpha_fragment:KS,project_vertex:QS,dithering_fragment:JS,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:rE,shadowmap_vertex:sE,shadowmask_pars_fragment:oE,skinbase_vertex:aE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:hE,specularmap_pars_fragment:dE,tonemapping_fragment:fE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:xE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:yE,background_vert:ME,background_frag:SE,backgroundCube_vert:EE,backgroundCube_frag:wE,cube_vert:TE,cube_frag:bE,depth_vert:AE,depth_frag:CE,distanceRGBA_vert:RE,distanceRGBA_frag:PE,equirect_vert:LE,equirect_frag:NE,linedashed_vert:DE,linedashed_frag:IE,meshbasic_vert:UE,meshbasic_frag:FE,meshlambert_vert:OE,meshlambert_frag:kE,meshmatcap_vert:zE,meshmatcap_frag:BE,meshnormal_vert:HE,meshnormal_frag:GE,meshphong_vert:VE,meshphong_frag:jE,meshphysical_vert:WE,meshphysical_frag:XE,meshtoon_vert:$E,meshtoon_frag:YE,points_vert:qE,points_frag:ZE,shadow_vert:KE,shadow_frag:QE,sprite_vert:JE,sprite_frag:ew},he={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},yi={basic:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:fn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:fn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:fn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:fn([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:fn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:fn([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:fn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:fn([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:fn([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:fn([he.lights,he.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};yi.physical={uniforms:fn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const dl={r:0,b:0,g:0},Or=new bi,tw=new ft;function nw(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function v(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function y(g){let x=!1;const S=v(g);S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===kc)?(u===void 0&&(u=new ot(new Mo(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:mo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Or.copy(x.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tw.makeRotationFromEuler(Or)),u.material.toneMapped=at.getTransfer(S.colorSpace)!==_t,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ot(new Hc(2,2),new Er({name:"BackgroundMaterial",uniforms:mo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function h(g,x){g.getRGB(dl,cv(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,h(a,l)},render:y,addToRenderList:m}}function iw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(_,w,O,k,X){let Q=!1;const V=d(k,O,w);s!==V&&(s=V,c(s.object)),Q=p(_,k,O,X),Q&&v(_,k,O,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(_,w,O,k),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function d(_,w,O){const k=O.wireframe===!0;let X=i[_.id];X===void 0&&(X={},i[_.id]=X);let Q=X[w.id];Q===void 0&&(Q={},X[w.id]=Q);let V=Q[k];return V===void 0&&(V=f(l()),Q[k]=V),V}function f(_){const w=[],O=[],k=[];for(let X=0;X<n;X++)w[X]=0,O[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:k,object:_,attributes:{},index:null}}function p(_,w,O,k){const X=s.attributes,Q=w.attributes;let V=0;const Z=O.getAttributes();for(const N in Z)if(Z[N].location>=0){const ee=X[N];let ce=Q[N];if(ce===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function v(_,w,O,k){const X={},Q=w.attributes;let V=0;const Z=O.getAttributes();for(const N in Z)if(Z[N].location>=0){let ee=Q[N];ee===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),X[N]=ce,V++}s.attributes=X,s.attributesNum=V,s.index=k}function y(){const _=s.newAttributes;for(let w=0,O=_.length;w<O;w++)_[w]=0}function m(_){h(_,0)}function h(_,w){const O=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;O[_]=1,k[_]===0&&(t.enableVertexAttribArray(_),k[_]=1),X[_]!==w&&(t.vertexAttribDivisor(_,w),X[_]=w)}function g(){const _=s.newAttributes,w=s.enabledAttributes;for(let O=0,k=w.length;O<k;O++)w[O]!==_[O]&&(t.disableVertexAttribArray(O),w[O]=0)}function x(_,w,O,k,X,Q,V){V===!0?t.vertexAttribIPointer(_,w,O,X,Q):t.vertexAttribPointer(_,w,O,k,X,Q)}function S(_,w,O,k){y();const X=k.attributes,Q=O.getAttributes(),V=w.defaultAttributeValues;for(const Z in Q){const N=Q[Z];if(N.location>=0){let K=X[Z];if(K===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const ee=K.normalized,ce=K.itemSize,ne=e.get(K);if(ne===void 0)continue;const J=ne.buffer,j=ne.type,re=ne.bytesPerElement,de=j===t.INT||j===t.UNSIGNED_INT||K.gpuType===Ff;if(K.isInterleavedBufferAttribute){const pe=K.data,Fe=pe.stride,Pe=K.offset;if(pe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<N.locationSize;Ke++)h(N.location+Ke,pe.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ke=0;Ke<N.locationSize;Ke++)m(N.location+Ke);t.bindBuffer(t.ARRAY_BUFFER,J);for(let Ke=0;Ke<N.locationSize;Ke++)x(N.location+Ke,ce/N.locationSize,j,ee,Fe*re,(Pe+ce/N.locationSize*Ke)*re,de)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<N.locationSize;pe++)h(N.location+pe,K.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<N.locationSize;pe++)m(N.location+pe);t.bindBuffer(t.ARRAY_BUFFER,J);for(let pe=0;pe<N.locationSize;pe++)x(N.location+pe,ce/N.locationSize,j,ee,ce*re,ce/N.locationSize*pe*re,de)}}else if(V!==void 0){const ee=V[Z];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(N.location,ee);break;case 3:t.vertexAttrib3fv(N.location,ee);break;case 4:t.vertexAttrib4fv(N.location,ee);break;default:t.vertexAttrib1fv(N.location,ee)}}}}g()}function C(){P();for(const _ in i){const w=i[_];for(const O in w){const k=w[O];for(const X in k)u(k[X].object),delete k[X];delete w[O]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const O in w){const k=w[O];for(const X in k)u(k[X].object),delete k[X];delete w[O]}delete i[_.id]}function A(_){for(const w in i){const O=i[w];if(O[_.id]===void 0)continue;const k=O[_.id];for(const X in k)u(k[X].object),delete k[X];delete O[_.id]}}function P(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:H,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function rw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let y=0;y<d;y++)v+=u[y];for(let y=0;y<f.length;y++)n.update(v,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==hi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Wi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Si&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:T}}function ow(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,x=g*4;let S=h.clippingState||null;l.value=S,S=u(v,f,x,p);for(let C=0;C!==x;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const h=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==y;++x,S+=4)o.copy(d[x]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function aw(t){let e=new WeakMap;function n(o,a){return a===ed?o.mapping=uo:a===td&&(o.mapping=ho),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ed||a===td)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class fv extends uv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=4,Dm=[.125,.215,.35,.446,.526,.582],Vr=20,Bu=new fv,Im=new ze;let Hu=null,Gu=0,Vu=0,ju=!1;const Hr=(1+Math.sqrt(5))/2,bs=1/Hr,Um=[new D(-Hr,bs,0),new D(Hr,bs,0),new D(-bs,0,Hr),new D(bs,0,Hr),new D(0,Hr,-bs),new D(0,Hr,bs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Gu,Vu),this._renderer.xr.enabled=ju,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===uo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Ra,format:hi,colorSpace:Cr,depthBuffer:!1},r=Fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lw(s)),this._blurMaterial=cw(s,e,n)}return r}_compileMaterial(e){const n=new ot(this._lodPlanes[0],e);this._renderer.compile(n,Bu)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Im),u.toneMapping=vr,u.autoClear=!1;const p=new Zr({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),v=new ot(new Mo,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Im),y=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):g===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;fl(r,g*x,h>2?x:0,x,x),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===uo||e.mapping===ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Um[(r-s-1)%Um.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ot(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const h=[];let g=0;for(let A=0;A<Vr;++A){const P=A/y,H=Math.exp(-P*P/2);h.push(H),A===0?g+=H:A<m&&(g+=2*H)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Vs?r-x+Vs:0),T=4*(this._cubeSize-S);fl(n,C,T,3*S,2*S),l.setRenderTarget(n),l.render(d,Bu)}}function lw(t){const e=[],n=[],i=[];let r=t;const s=t-Vs+1+Dm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Vs?l=Dm[o-t+Vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,y=3,m=2,h=1,g=new Float32Array(y*v*p),x=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,H=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(H,y*v*T),x.set(f,m*v*T);const _=[T,T,T,T,T,T];S.set(_,h*v*T)}const C=new _n;C.setAttribute("position",new On(g,y)),C.setAttribute("uv",new On(x,m)),C.setAttribute("faceIndex",new On(S,h)),e.push(C),r>Vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fm(t,e,n){const i=new os(t,e,n);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cw(t,e,n){const i=new Float32Array(Vr),r=new D(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Om(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function km(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ed||l===td,u=l===uo||l===ho;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Ld(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Ld(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const y=p[v];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let x=0,S=g.length;x<S;x+=3){const C=g[x+0],T=g[x+1],A=g[x+2];f.push(C,T,T,A,A,C)}}else if(v!==void 0){const g=v.array;y=v.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const C=x+0,T=x+1,A=x+2;f.push(C,T,T,A,A,C)}}else return;const m=new(iv(f)?lv:av)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function fw(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*o,v),n.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function d(f,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,v);let h=0;for(let g=0;g<v;g++)h+=p[g];for(let g=0;g<y.length;g++)n.update(h,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mw(t,e,n){const i=new WeakMap,r=new dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let _=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*d),P=new sv(A,C,T,d);P.type=Si,P.needsUpdate=!0;const H=S*4;for(let w=0;w<d;w++){const O=h[w],k=g[w],X=x[w],Q=C*T*4*w;for(let V=0;V<O.count;V++){const Z=V*H;v===!0&&(r.fromBufferAttribute(O,V),A[Q+Z+0]=r.x,A[Q+Z+1]=r.y,A[Q+Z+2]=r.z,A[Q+Z+3]=0),y===!0&&(r.fromBufferAttribute(k,V),A[Q+Z+4]=r.x,A[Q+Z+5]=r.y,A[Q+Z+6]=r.z,A[Q+Z+7]=0),m===!0&&(r.fromBufferAttribute(X,V),A[Q+Z+8]=r.x,A[Q+Z+9]=r.y,A[Q+Z+10]=r.z,A[Q+Z+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Ne(C,T)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function gw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class pv extends un{constructor(e,n,i,r,s,o,a,l,c,u=Js){if(u!==Js&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Js&&(i=ss),i===void 0&&u===po&&(i=fo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const mv=new un,zm=new pv(1,1),gv=new sv,xv=new nM,vv=new hv,Bm=[],Hm=[],Gm=new Float32Array(16),Vm=new Float32Array(9),jm=new Float32Array(4);function So(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bm[r];if(s===void 0&&(s=new Float32Array(r),Bm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gc(t,e){let n=Hm[e];n===void 0&&(n=new Int32Array(e),Hm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Vt(n,i))return;jm.set(i),t.uniformMatrix2fv(this.addr,!1,jm),jt(n,i)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Vt(n,i))return;Vm.set(i),t.uniformMatrix3fv(this.addr,!1,Vm),jt(n,i)}}function Ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Vt(n,i))return;Gm.set(i),t.uniformMatrix4fv(this.addr,!1,Gm),jt(n,i)}}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function Cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function Nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(zm.compareFunction=nv,s=zm):s=mv,n.setTexture2D(e||s,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xv,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||vv,r)}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||gv,r)}function Fw(t){switch(t){case 5126:return xw;case 35664:return vw;case 35665:return _w;case 35666:return yw;case 35674:return Mw;case 35675:return Sw;case 35676:return Ew;case 5124:case 35670:return ww;case 35667:case 35671:return Tw;case 35668:case 35672:return bw;case 35669:case 35673:return Aw;case 5125:return Cw;case 36294:return Rw;case 36295:return Pw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Nw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Uw}}function Ow(t,e){t.uniform1fv(this.addr,e)}function kw(t,e){const n=So(e,this.size,2);t.uniform2fv(this.addr,n)}function zw(t,e){const n=So(e,this.size,3);t.uniform3fv(this.addr,n)}function Bw(t,e){const n=So(e,this.size,4);t.uniform4fv(this.addr,n)}function Hw(t,e){const n=So(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Gw(t,e){const n=So(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Vw(t,e){const n=So(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jw(t,e){t.uniform1iv(this.addr,e)}function Ww(t,e){t.uniform2iv(this.addr,e)}function Xw(t,e){t.uniform3iv(this.addr,e)}function $w(t,e){t.uniform4iv(this.addr,e)}function Yw(t,e){t.uniform1uiv(this.addr,e)}function qw(t,e){t.uniform2uiv(this.addr,e)}function Zw(t,e){t.uniform3uiv(this.addr,e)}function Kw(t,e){t.uniform4uiv(this.addr,e)}function Qw(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||mv,s[o])}function Jw(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||xv,s[o])}function eT(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||vv,s[o])}function tT(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||gv,s[o])}function nT(t){switch(t){case 5126:return Ow;case 35664:return kw;case 35665:return zw;case 35666:return Bw;case 35674:return Hw;case 35675:return Gw;case 35676:return Vw;case 5124:case 35670:return jw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return $w;case 5125:return Yw;case 36294:return qw;case 36295:return Zw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Fw(n.type)}}class rT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nT(n.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function Wm(t,e){t.seq.push(e),t.map[e.id]=e}function oT(t,e,n){const i=t.name,r=i.length;for(Wu.lastIndex=0;;){const s=Wu.exec(i),o=Wu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wm(n,c===void 0?new iT(a,t,e):new rT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new sT(a),Wm(n,d)),n=d}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);oT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aT=37297;let lT=0;function cT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function uT(t){const e=at.getPrimaries(at.workingColorSpace),n=at.getPrimaries(t);let i;switch(e===n?i="":e===pc&&n===fc?i="LinearDisplayP3ToLinearSRGB":e===fc&&n===pc&&(i="LinearSRGBToLinearDisplayP3"),t){case Cr:case zc:return[i,"LinearTransferOETF"];case $n:case Vf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function $m(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+cT(t.getShaderSource(e),o)}else return r}function hT(t,e){const n=uT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function dT(t,e){let n;switch(e){case C1:n="Linear";break;case R1:n="Reinhard";break;case P1:n="Cineon";break;case jx:n="ACESFilmic";break;case N1:n="AgX";break;case D1:n="Neutral";break;case L1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new D;function fT(){at.getLuminanceCoefficients(pl);const t=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function mT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Yo(t){return t!==""}function Ym(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(t){return t.replace(xT,_T)}const vT=new Map;function _T(t,e){let n=Xe[e];if(n===void 0){const i=vT.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nd(n)}const yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(t){return t.replace(yT,MT)}function MT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ST(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Hx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function ET(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case uo:case ho:e="ENVMAP_TYPE_CUBE";break;case kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function TT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vx:e="ENVMAP_BLENDING_MULTIPLY";break;case b1:e="ENVMAP_BLENDING_MIX";break;case A1:e="ENVMAP_BLENDING_ADD";break}return e}function bT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ST(n),c=ET(n),u=wT(n),d=TT(n),f=bT(n),p=pT(n),v=mT(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Yo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Yo).join(`
`),h.length>0&&(h+=`
`)):(m=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),h=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==vr?dT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,hT("linearToOutputTexel",n.outputColorSpace),fT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yo).join(`
`)),o=Nd(o),o=Ym(o,n),o=qm(o,n),a=Nd(a),a=Ym(a,n),a=qm(a,n),o=Zm(o),a=Zm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=g+m+o,S=g+h+a,C=Xm(r,r.VERTEX_SHADER,x),T=Xm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(w){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(T).trim();let Q=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,T);else{const Z=$m(r,C,"vertex"),N=$m(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+Z+`
`+N)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||X==="")&&(V=!1);V&&(w.diagnostics={runnable:Q,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(C),r.deleteShader(T),P=new Bl(r,y),H=gT(r,y)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let H;this.getAttributes=function(){return H===void 0&&A(this),H};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,aT)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}let CT=0;class RT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new PT(e),n.set(e,i)),i}}class PT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function LT(t,e,n,i,r,s,o){const a=new jf,l=new RT,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function h(_,w,O,k,X){const Q=k.fog,V=X.geometry,Z=_.isMeshStandardMaterial?k.environment:null,N=(_.isMeshStandardMaterial?n:e).get(_.envMap||Z),K=N&&N.mapping===kc?N.image.height:null,ee=y[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=ce!==void 0?ce.length:0;let J=0;V.morphAttributes.position!==void 0&&(J=1),V.morphAttributes.normal!==void 0&&(J=2),V.morphAttributes.color!==void 0&&(J=3);let j,re,de,pe;if(ee){const Kt=yi[ee];j=Kt.vertexShader,re=Kt.fragmentShader}else j=_.vertexShader,re=_.fragmentShader,l.update(_),de=l.getVertexShaderID(_),pe=l.getFragmentShaderID(_);const Fe=t.getRenderTarget(),Pe=X.isInstancedMesh===!0,Ke=X.isBatchedMesh===!0,Je=!!_.map,ke=!!_.matcap,L=!!N,Rt=!!_.aoMap,He=!!_.lightMap,Ye=!!_.bumpMap,Ae=!!_.normalMap,it=!!_.displacementMap,Ce=!!_.emissiveMap,R=!!_.metalnessMap,E=!!_.roughnessMap,z=_.anisotropy>0,q=_.clearcoat>0,ie=_.dispersion>0,Y=_.iridescence>0,Te=_.sheen>0,le=_.transmission>0,ue=z&&!!_.anisotropyMap,et=q&&!!_.clearcoatMap,oe=q&&!!_.clearcoatNormalMap,_e=q&&!!_.clearcoatRoughnessMap,De=Y&&!!_.iridescenceMap,Ue=Y&&!!_.iridescenceThicknessMap,ye=Te&&!!_.sheenColorMap,qe=Te&&!!_.sheenRoughnessMap,Oe=!!_.specularMap,st=!!_.specularColorMap,I=!!_.specularIntensityMap,xe=le&&!!_.transmissionMap,W=le&&!!_.thicknessMap,te=!!_.gradientMap,me=!!_.alphaMap,ve=_.alphaTest>0,Ie=!!_.alphaHash,St=!!_.extensions;let Wt=vr;_.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Wt=t.toneMapping);const nt={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:re,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:Ke,batchingColor:Ke&&X._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&X.instanceColor!==null,instancingMorph:Pe&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Cr,alphaToCoverage:!!_.alphaToCoverage,map:Je,matcap:ke,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:K,aoMap:Rt,lightMap:He,bumpMap:Ye,normalMap:Ae,displacementMap:p&&it,emissiveMap:Ce,normalMapObjectSpace:Ae&&_.normalMapType===O1,normalMapTangentSpace:Ae&&_.normalMapType===tv,metalnessMap:R,roughnessMap:E,anisotropy:z,anisotropyMap:ue,clearcoat:q,clearcoatMap:et,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:ie,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:Ue,sheen:Te,sheenColorMap:ye,sheenRoughnessMap:qe,specularMap:Oe,specularColorMap:st,specularIntensityMap:I,transmission:le,transmissionMap:xe,thicknessMap:W,gradientMap:te,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:ve,alphaHash:Ie,combine:_.combine,mapUv:Je&&m(_.map.channel),aoMapUv:Rt&&m(_.aoMap.channel),lightMapUv:He&&m(_.lightMap.channel),bumpMapUv:Ye&&m(_.bumpMap.channel),normalMapUv:Ae&&m(_.normalMap.channel),displacementMapUv:it&&m(_.displacementMap.channel),emissiveMapUv:Ce&&m(_.emissiveMap.channel),metalnessMapUv:R&&m(_.metalnessMap.channel),roughnessMapUv:E&&m(_.roughnessMap.channel),anisotropyMapUv:ue&&m(_.anisotropyMap.channel),clearcoatMapUv:et&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(_.sheenRoughnessMap.channel),specularMapUv:Oe&&m(_.specularMap.channel),specularColorMapUv:st&&m(_.specularColorMap.channel),specularIntensityMapUv:I&&m(_.specularIntensityMap.channel),transmissionMapUv:xe&&m(_.transmissionMap.channel),thicknessMapUv:W&&m(_.thicknessMap.channel),alphaMapUv:me&&m(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ae||z),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(Je||me),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Je&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:St&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&_.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)w.push(O),w.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(x(w,_),S(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function S(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function C(_){const w=y[_.type];let O;if(w){const k=yi[w];O=pM.clone(k.uniforms)}else O=_.uniforms;return O}function T(_,w){let O;for(let k=0,X=u.length;k<X;k++){const Q=u[k];if(Q.cacheKey===w){O=Q,++O.usedTimes;break}}return O===void 0&&(O=new AT(t,w,_,s),u.push(O)),O}function A(_){if(--_.usedTimes===0){const w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function P(_){l.remove(_)}function H(){l.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:H}}function NT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function DT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,v,y,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,v,y,m){const h=o(d,f,p,v,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,v,y,m){const h=o(d,f,p,v,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||DT),i.length>1&&i.sort(f||Qm),r.length>1&&r.sort(f||Qm)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function IT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jm,t.set(i,[o])):r>=s.length?(o=new Jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function UT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new ze};break;case"SpotLight":n={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function FT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OT=0;function kT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zT(t){const e=new UT,n=FT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new ft,o=new ft;function a(c){let u=0,d=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,v=0,y=0,m=0,h=0,g=0,x=0,S=0,C=0,T=0,A=0;c.sort(kT);for(let H=0,_=c.length;H<_;H++){const w=c[H],O=w.color,k=w.intensity,X=w.distance,Q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=O.r*k,d+=O.g*k,f+=O.b*k;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],k);A++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,N=n.get(w);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=V,p++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(O).multiplyScalar(k),V.distance=X,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[y]=V;const Z=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,Z.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[y]=Z.matrix,w.castShadow){const N=n.get(w);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=Q,S++}y++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(O).multiplyScalar(k),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=V,m++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const Z=w.shadow,N=n.get(w);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=w.shadow.matrix,x++}i.point[v]=V,v++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(k),V.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[h]=V,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==g||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=p,P.pointLength=v,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=g,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=A,i.version=OT++)}function l(c,u){let d=0,f=0,p=0,v=0,y=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const x=c[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function eg(t){const e=new zT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function BT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new eg(t),e.set(r,[a])):s>=o.length?(a=new eg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class HT extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GT extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WT(t,e,n){let i=new Wf;const r=new Ne,s=new Ne,o=new dt,a=new HT({depthPacking:F1}),l=new GT,c={},u=n.maxTextureSize,d={[Mr]:gn,[gn]:Mr,[In]:In},f=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:VT,fragmentShader:jT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new _n;v.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ot(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hx;let h=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const H=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),O=t.state;O.setBlending(xr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=h!==Di&&this.type===Di,X=h===Di&&this.type!==Di;for(let Q=0,V=T.length;Q<V;Q++){const Z=T[Q],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||k===!0||X===!0){const ce=this.type!==Di?{minFilter:Tn,magFilter:Tn}:{};N.map!==null&&N.map.dispose(),N.map=new os(r.x,r.y,ce),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const ee=N.getViewportCount();for(let ce=0;ce<ee;ce++){const ne=N.getViewport(ce);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),O.viewport(o),N.updateMatrices(Z,ce),i=N.getFrustum(),S(A,P,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===Di&&g(N,P),N.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(H,_,w)};function g(T,A){const P=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new os(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,p,y,null)}function x(T,A,P,H){let _=null;const w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=_.uuid,k=A.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let Q=X[k];Q===void 0&&(Q=_.clone(),X[k]=Q,A.addEventListener("dispose",C)),_=Q}if(_.visible=A.visible,_.wireframe=A.wireframe,H===Di?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=t.properties.get(_);O.light=P}return _}function S(T,A,P,H,_){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Di)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const k=e.update(T),X=T.material;if(Array.isArray(X)){const Q=k.groups;for(let V=0,Z=Q.length;V<Z;V++){const N=Q[V],K=X[N.materialIndex];if(K&&K.visible){const ee=x(T,K,H,_);T.onBeforeShadow(t,T,A,P,k,ee,N),t.renderBufferDirect(P,null,k,ee,T,N),T.onAfterShadow(t,T,A,P,k,ee,N)}}}else if(X.visible){const Q=x(T,X,H,_);T.onBeforeShadow(t,T,A,P,k,Q,null),t.renderBufferDirect(P,null,k,Q,T,null),T.onAfterShadow(t,T,A,P,k,Q,null)}}const O=T.children;for(let k=0,X=O.length;k<X;k++)S(O[k],A,P,H,_)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const H=c[P],_=T.target.uuid;_ in H&&(H[_].dispose(),delete H[_])}}}const XT={[$h]:Yh,[qh]:Qh,[Zh]:Jh,[co]:Kh,[Yh]:$h,[Qh]:qh,[Jh]:Zh,[Kh]:co};function $T(t){function e(){let I=!1;const xe=new dt;let W=null;const te=new dt(0,0,0,0);return{setMask:function(me){W!==me&&!I&&(t.colorMask(me,me,me,me),W=me)},setLocked:function(me){I=me},setClear:function(me,ve,Ie,St,Wt){Wt===!0&&(me*=St,ve*=St,Ie*=St),xe.set(me,ve,Ie,St),te.equals(xe)===!1&&(t.clearColor(me,ve,Ie,St),te.copy(xe))},reset:function(){I=!1,W=null,te.set(-1,0,0,0)}}}function n(){let I=!1,xe=!1,W=null,te=null,me=null;return{setReversed:function(ve){xe=ve},setTest:function(ve){ve?de(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(ve){W!==ve&&!I&&(t.depthMask(ve),W=ve)},setFunc:function(ve){if(xe&&(ve=XT[ve]),te!==ve){switch(ve){case $h:t.depthFunc(t.NEVER);break;case Yh:t.depthFunc(t.ALWAYS);break;case qh:t.depthFunc(t.LESS);break;case co:t.depthFunc(t.LEQUAL);break;case Zh:t.depthFunc(t.EQUAL);break;case Kh:t.depthFunc(t.GEQUAL);break;case Qh:t.depthFunc(t.GREATER);break;case Jh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){I=ve},setClear:function(ve){me!==ve&&(t.clearDepth(ve),me=ve)},reset:function(){I=!1,W=null,te=null,me=null}}}function i(){let I=!1,xe=null,W=null,te=null,me=null,ve=null,Ie=null,St=null,Wt=null;return{setTest:function(nt){I||(nt?de(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(nt){xe!==nt&&!I&&(t.stencilMask(nt),xe=nt)},setFunc:function(nt,Kt,Hn){(W!==nt||te!==Kt||me!==Hn)&&(t.stencilFunc(nt,Kt,Hn),W=nt,te=Kt,me=Hn)},setOp:function(nt,Kt,Hn){(ve!==nt||Ie!==Kt||St!==Hn)&&(t.stencilOp(nt,Kt,Hn),ve=nt,Ie=Kt,St=Hn)},setLocked:function(nt){I=nt},setClear:function(nt){Wt!==nt&&(t.clearStencil(nt),Wt=nt)},reset:function(){I=!1,xe=null,W=null,te=null,me=null,ve=null,Ie=null,St=null,Wt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,v=!1,y=null,m=null,h=null,g=null,x=null,S=null,C=null,T=new ze(0,0,0),A=0,P=!1,H=null,_=null,w=null,O=null,k=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,V=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=V>=2);let N=null,K={};const ee=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),ne=new dt().fromArray(ee),J=new dt().fromArray(ce);function j(I,xe,W,te){const me=new Uint8Array(4),ve=t.createTexture();t.bindTexture(I,ve),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<W;Ie++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(xe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ve}const re={};re[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(co),He(!1),Ye(um),de(t.CULL_FACE),L(xr);function de(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function pe(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Fe(I,xe){return u[I]!==xe?(t.bindFramebuffer(I,xe),u[I]=xe,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=xe),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function Pe(I,xe){let W=f,te=!1;if(I){W=d.get(xe),W===void 0&&(W=[],d.set(xe,W));const me=I.textures;if(W.length!==me.length||W[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ie=me.length;ve<Ie;ve++)W[ve]=t.COLOR_ATTACHMENT0+ve;W.length=me.length,te=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,te=!0);te&&t.drawBuffers(W)}function Ke(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const Je={[Gr]:t.FUNC_ADD,[c1]:t.FUNC_SUBTRACT,[u1]:t.FUNC_REVERSE_SUBTRACT};Je[h1]=t.MIN,Je[d1]=t.MAX;const ke={[f1]:t.ZERO,[p1]:t.ONE,[m1]:t.SRC_COLOR,[Wh]:t.SRC_ALPHA,[M1]:t.SRC_ALPHA_SATURATE,[_1]:t.DST_COLOR,[x1]:t.DST_ALPHA,[g1]:t.ONE_MINUS_SRC_COLOR,[Xh]:t.ONE_MINUS_SRC_ALPHA,[y1]:t.ONE_MINUS_DST_COLOR,[v1]:t.ONE_MINUS_DST_ALPHA,[S1]:t.CONSTANT_COLOR,[E1]:t.ONE_MINUS_CONSTANT_COLOR,[w1]:t.CONSTANT_ALPHA,[T1]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,xe,W,te,me,ve,Ie,St,Wt,nt){if(I===xr){v===!0&&(pe(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),I!==l1){if(I!==y||nt!==P){if((m!==Gr||x!==Gr)&&(t.blendEquation(t.FUNC_ADD),m=Gr,x=Gr),nt)switch(I){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gs:t.blendFunc(t.ONE,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gs:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,g=null,S=null,C=null,T.set(0,0,0),A=0,y=I,P=nt}return}me=me||xe,ve=ve||W,Ie=Ie||te,(xe!==m||me!==x)&&(t.blendEquationSeparate(Je[xe],Je[me]),m=xe,x=me),(W!==h||te!==g||ve!==S||Ie!==C)&&(t.blendFuncSeparate(ke[W],ke[te],ke[ve],ke[Ie]),h=W,g=te,S=ve,C=Ie),(St.equals(T)===!1||Wt!==A)&&(t.blendColor(St.r,St.g,St.b,Wt),T.copy(St),A=Wt),y=I,P=!1}function Rt(I,xe){I.side===In?pe(t.CULL_FACE):de(t.CULL_FACE);let W=I.side===gn;xe&&(W=!W),He(W),I.blending===Qs&&I.transparent===!1?L(xr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;o.setTest(te),te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){H!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),H=I)}function Ye(I){I!==o1?(de(t.CULL_FACE),I!==_&&(I===um?t.cullFace(t.BACK):I===a1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),_=I}function Ae(I){I!==w&&(Q&&t.lineWidth(I),w=I)}function it(I,xe,W){I?(de(t.POLYGON_OFFSET_FILL),(O!==xe||k!==W)&&(t.polygonOffset(xe,W),O=xe,k=W)):pe(t.POLYGON_OFFSET_FILL)}function Ce(I){I?de(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+X-1),N!==I&&(t.activeTexture(I),N=I)}function E(I,xe,W){W===void 0&&(N===null?W=t.TEXTURE0+X-1:W=N);let te=K[W];te===void 0&&(te={type:void 0,texture:void 0},K[W]=te),(te.type!==I||te.texture!==xe)&&(N!==W&&(t.activeTexture(W),N=W),t.bindTexture(I,xe||re[I]),te.type=I,te.texture=xe)}function z(){const I=K[N];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(I){ne.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function ye(I){J.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function qe(I,xe){let W=l.get(xe);W===void 0&&(W=new WeakMap,l.set(xe,W));let te=W.get(I);te===void 0&&(te=t.getUniformBlockIndex(xe,I.name),W.set(I,te))}function Oe(I,xe){const te=l.get(xe).get(I);a.get(xe)!==te&&(t.uniformBlockBinding(xe,te,I.__bindingPointIndex),a.set(xe,te))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,K={},u={},d=new WeakMap,f=[],p=null,v=!1,y=null,m=null,h=null,g=null,x=null,S=null,C=null,T=new ze(0,0,0),A=0,P=!1,H=null,_=null,w=null,O=null,k=null,ne.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:pe,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:Ke,setBlending:L,setMaterial:Rt,setFlipSided:He,setCullFace:Ye,setLineWidth:Ae,setPolygonOffset:it,setScissorTest:Ce,activeTexture:R,bindTexture:E,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:ie,texImage2D:_e,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:Oe,texStorage2D:et,texStorage3D:oe,texSubImage2D:Y,texSubImage3D:Te,compressedTexSubImage2D:le,compressedTexSubImage3D:ue,scissor:Ue,viewport:ye,reset:st}}function tg(t,e,n,i){const r=YT(i);switch(n){case qx:return t*e;case Kx:return t*e;case Qx:return t*e*2;case zf:return t*e/r.components*r.byteLength;case Bf:return t*e/r.components*r.byteLength;case Jx:return t*e*2/r.components*r.byteLength;case Hf:return t*e*2/r.components*r.byteLength;case Zx:return t*e*3/r.components*r.byteLength;case hi:return t*e*4/r.components*r.byteLength;case Gf:return t*e*4/r.components*r.byteLength;case Dl:case Il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sd:case ad:return Math.max(t,16)*Math.max(e,8)/4;case rd:case od:return Math.max(t,8)*Math.max(e,8)/2;case ld:case cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Td:case bd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ev:case Ad:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cd:case Rd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YT(t){switch(t){case Wi:case Xx:return{byteLength:1,components:1};case Ea:case $x:case Ra:return{byteLength:2,components:1};case Of:case kf:return{byteLength:2,components:4};case ss:case Ff:case Si:return{byteLength:4,components:1};case Yx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function qT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return p?new OffscreenCanvas(R,E):gc("canvas")}function y(R,E,z){let q=1;const ie=Ce(R);if((ie.width>z||ie.height>z)&&(q=z/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*ie.width),Te=Math.floor(q*ie.height);d===void 0&&(d=v(Y,Te));const le=E?v(Y,Te):d;return le.width=Y,le.height=Te,le.getContext("2d").drawImage(R,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Te+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Tn&&R.minFilter!==ci}function h(R){t.generateMipmap(R)}function g(R,E,z,q,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=E;if(E===t.RED&&(z===t.FLOAT&&(Y=t.R32F),z===t.HALF_FLOAT&&(Y=t.R16F),z===t.UNSIGNED_BYTE&&(Y=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.R8UI),z===t.UNSIGNED_SHORT&&(Y=t.R16UI),z===t.UNSIGNED_INT&&(Y=t.R32UI),z===t.BYTE&&(Y=t.R8I),z===t.SHORT&&(Y=t.R16I),z===t.INT&&(Y=t.R32I)),E===t.RG&&(z===t.FLOAT&&(Y=t.RG32F),z===t.HALF_FLOAT&&(Y=t.RG16F),z===t.UNSIGNED_BYTE&&(Y=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RG8UI),z===t.UNSIGNED_SHORT&&(Y=t.RG16UI),z===t.UNSIGNED_INT&&(Y=t.RG32UI),z===t.BYTE&&(Y=t.RG8I),z===t.SHORT&&(Y=t.RG16I),z===t.INT&&(Y=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),z===t.UNSIGNED_INT&&(Y=t.RGB32UI),z===t.BYTE&&(Y=t.RGB8I),z===t.SHORT&&(Y=t.RGB16I),z===t.INT&&(Y=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),z===t.UNSIGNED_INT&&(Y=t.RGBA32UI),z===t.BYTE&&(Y=t.RGBA8I),z===t.SHORT&&(Y=t.RGBA16I),z===t.INT&&(Y=t.RGBA32I)),E===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),E===t.RGBA){const Te=ie?dc:at.getTransfer(q);z===t.FLOAT&&(Y=t.RGBA32F),z===t.HALF_FLOAT&&(Y=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Y=Te===_t?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(R,E){let z;return R?E===null||E===ss||E===fo?z=t.DEPTH24_STENCIL8:E===Si?z=t.DEPTH32F_STENCIL8:E===Ea&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ss||E===fo?z=t.DEPTH_COMPONENT24:E===Si?z=t.DEPTH_COMPONENT32F:E===Ea&&(z=t.DEPTH_COMPONENT16),z}function S(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==ci?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),H(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,q=f.get(z);if(q){const ie=q[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(R),Object.keys(q).length===0&&f.delete(z)}i.remove(R)}function P(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const z=R.source,q=f.get(z);delete q[E.__cacheKey],o.memory.textures--}function H(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let ie=0;ie<E.__webglFramebuffer[q].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[q][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)t.deleteFramebuffer(E.__webglFramebuffer[q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let q=0,ie=z.length;q<ie;q++){const Y=i.get(z[q]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(z[q])}i.remove(R)}let _=0;function w(){_=0}function O(){const R=_;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),_+=1,R}function k(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function X(R,E){const z=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,R,E);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function Q(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function V(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function Z(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){j(z,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const N={[nd]:t.REPEAT,[Yr]:t.CLAMP_TO_EDGE,[id]:t.MIRRORED_REPEAT},K={[Tn]:t.NEAREST,[I1]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[ci]:t.LINEAR,[xu]:t.LINEAR_MIPMAP_NEAREST,[qr]:t.LINEAR_MIPMAP_LINEAR},ee={[k1]:t.NEVER,[j1]:t.ALWAYS,[z1]:t.LESS,[nv]:t.LEQUAL,[B1]:t.EQUAL,[V1]:t.GEQUAL,[H1]:t.GREATER,[G1]:t.NOTEQUAL};function ce(R,E){if(E.type===Si&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ci||E.magFilter===xu||E.magFilter===Ya||E.magFilter===qr||E.minFilter===ci||E.minFilter===xu||E.minFilter===Ya||E.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Ya&&E.minFilter!==qr||E.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ne(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const q=E.source;let ie=f.get(q);ie===void 0&&(ie={},f.set(q,ie));const Y=k(E);if(Y!==R.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ie[Y].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&P(E)),R.__cacheKey=Y,R.__webglTexture=ie[Y].texture}return z}function J(R,E,z){let q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=t.TEXTURE_3D);const ie=ne(R,E),Y=E.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+z);const Te=i.get(Y);if(Y.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+z);const le=at.getPrimaries(at.workingColorSpace),ue=E.colorSpace===or?null:at.getPrimaries(E.colorSpace),et=E.colorSpace===or||le===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let oe=y(E.image,!1,r.maxTextureSize);oe=it(E,oe);const _e=s.convert(E.format,E.colorSpace),De=s.convert(E.type);let Ue=g(E.internalFormat,_e,De,E.colorSpace,E.isVideoTexture);ce(q,E);let ye;const qe=E.mipmaps,Oe=E.isVideoTexture!==!0,st=Te.__version===void 0||ie===!0,I=Y.dataReady,xe=S(E,oe);if(E.isDepthTexture)Ue=x(E.format===po,E.type),st&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ue,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ue,oe.width,oe.height,0,_e,De,null));else if(E.isDataTexture)if(qe.length>0){Oe&&st&&n.texStorage2D(t.TEXTURE_2D,xe,Ue,qe[0].width,qe[0].height);for(let W=0,te=qe.length;W<te;W++)ye=qe[W],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,De,ye.data):n.texImage2D(t.TEXTURE_2D,W,Ue,ye.width,ye.height,0,_e,De,ye.data);E.generateMipmaps=!1}else Oe?(st&&n.texStorage2D(t.TEXTURE_2D,xe,Ue,oe.width,oe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,oe.width,oe.height,0,_e,De,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ue,qe[0].width,qe[0].height,oe.depth);for(let W=0,te=qe.length;W<te;W++)if(ye=qe[W],E.format!==hi)if(_e!==null)if(Oe){if(I)if(E.layerUpdates.size>0){const me=tg(ye.width,ye.height,E.format,E.type);for(const ve of E.layerUpdates){const Ie=ye.data.subarray(ve*me/ye.data.BYTES_PER_ELEMENT,(ve+1)*me/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,ve,ye.width,ye.height,1,_e,Ie,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,oe.depth,_e,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Ue,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,oe.depth,_e,De,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Ue,ye.width,ye.height,oe.depth,0,_e,De,ye.data)}else{Oe&&st&&n.texStorage2D(t.TEXTURE_2D,xe,Ue,qe[0].width,qe[0].height);for(let W=0,te=qe.length;W<te;W++)ye=qe[W],E.format!==hi?_e!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,De,ye.data):n.texImage2D(t.TEXTURE_2D,W,Ue,ye.width,ye.height,0,_e,De,ye.data)}else if(E.isDataArrayTexture)if(Oe){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ue,oe.width,oe.height,oe.depth),I)if(E.layerUpdates.size>0){const W=tg(oe.width,oe.height,E.format,E.type);for(const te of E.layerUpdates){const me=oe.data.subarray(te*W/oe.data.BYTES_PER_ELEMENT,(te+1)*W/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,_e,De,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,_e,De,oe.data);else if(E.isData3DTexture)Oe?(st&&n.texStorage3D(t.TEXTURE_3D,xe,Ue,oe.width,oe.height,oe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,_e,De,oe.data);else if(E.isFramebufferTexture){if(st)if(Oe)n.texStorage2D(t.TEXTURE_2D,xe,Ue,oe.width,oe.height);else{let W=oe.width,te=oe.height;for(let me=0;me<xe;me++)n.texImage2D(t.TEXTURE_2D,me,Ue,W,te,0,_e,De,null),W>>=1,te>>=1}}else if(qe.length>0){if(Oe&&st){const W=Ce(qe[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ue,W.width,W.height)}for(let W=0,te=qe.length;W<te;W++)ye=qe[W],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e,De,ye):n.texImage2D(t.TEXTURE_2D,W,Ue,_e,De,ye);E.generateMipmaps=!1}else if(Oe){if(st){const W=Ce(oe);n.texStorage2D(t.TEXTURE_2D,xe,Ue,W.width,W.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ue,_e,De,oe);m(E)&&h(q),Te.__version=Y.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function j(R,E,z){if(E.image.length!==6)return;const q=ne(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Y=i.get(ie);if(ie.version!==Y.__version||q===!0){n.activeTexture(t.TEXTURE0+z);const Te=at.getPrimaries(at.workingColorSpace),le=E.colorSpace===or?null:at.getPrimaries(E.colorSpace),ue=E.colorSpace===or||Te===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!et&&!oe?_e[te]=y(E.image[te],!0,r.maxCubemapSize):_e[te]=oe?E.image[te].image:E.image[te],_e[te]=it(E,_e[te]);const De=_e[0],Ue=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),qe=g(E.internalFormat,Ue,ye,E.colorSpace),Oe=E.isVideoTexture!==!0,st=Y.__version===void 0||q===!0,I=ie.dataReady;let xe=S(E,De);ce(t.TEXTURE_CUBE_MAP,E);let W;if(et){Oe&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,De.width,De.height);for(let te=0;te<6;te++){W=_e[te].mipmaps;for(let me=0;me<W.length;me++){const ve=W[me];E.format!==hi?Ue!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,ve.width,ve.height,Ue,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,qe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,ve.width,ve.height,Ue,ye,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,qe,ve.width,ve.height,0,Ue,ye,ve.data)}}}else{if(W=E.mipmaps,Oe&&st){W.length>0&&xe++;const te=Ce(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,te.width,te.height)}for(let te=0;te<6;te++)if(oe){Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ue,ye,_e[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,_e[te].width,_e[te].height,0,Ue,ye,_e[te].data);for(let me=0;me<W.length;me++){const Ie=W[me].image[te].image;Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ie.width,Ie.height,Ue,ye,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,qe,Ie.width,Ie.height,0,Ue,ye,Ie.data)}}else{Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,ye,_e[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Ue,ye,_e[te]);for(let me=0;me<W.length;me++){const ve=W[me];Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ue,ye,ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,qe,Ue,ye,ve.image[te])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),Y.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function re(R,E,z,q,ie,Y){const Te=s.convert(z.format,z.colorSpace),le=s.convert(z.type),ue=g(z.internalFormat,Te,le,z.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>Y),_e=Math.max(1,E.height>>Y);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Y,ue,oe,_e,E.depth,0,Te,le,null):n.texImage2D(ie,Y,ue,oe,_e,0,Te,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ie,i.get(z).__webglTexture,0,He(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ie,i.get(z).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const q=E.depthTexture,ie=q&&q.isDepthTexture?q.type:null,Y=x(E.stencilBuffer,ie),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=He(E);Ye(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Y,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const q=E.textures;for(let ie=0;ie<q.length;ie++){const Y=q[ie],Te=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),ue=g(Y.internalFormat,Te,le,Y.colorSpace),et=He(E);z&&Ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,ue,E.width,E.height):Ye(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const q=i.get(E.depthTexture).__webglTexture,ie=He(E);if(E.depthTexture.format===Js)Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(E.depthTexture.format===po)Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,R)}else if(z){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=t.createRenderbuffer(),de(E.__webglDepthbuffer[q],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),de(E.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,E,z){const q=i.get(R);E!==void 0&&re(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Fe(R)}function Ke(R){const E=R.texture,z=i.get(R),q=i.get(E);R.addEventListener("dispose",T);const ie=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=E.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let ue=0;ue<E.mipmaps.length;ue++)z.__webglFramebuffer[le][ue]=t.createFramebuffer()}else z.__webglFramebuffer[le]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)z.__webglFramebuffer[le]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Te)for(let le=0,ue=ie.length;le<ue;le++){const et=i.get(ie[le]);et.__webglTexture===void 0&&(et.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ye(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const ue=ie[le];z.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const et=s.convert(ue.format,ue.colorSpace),oe=s.convert(ue.type),_e=g(ue.internalFormat,et,oe,ue.colorSpace,R.isXRRenderTarget===!0),De=He(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,z.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),de(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ce(t.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)re(z.__webglFramebuffer[le][ue],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else re(z.__webglFramebuffer[le],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let le=0,ue=ie.length;le<ue;le++){const et=ie[le],oe=i.get(et);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ce(t.TEXTURE_2D,et),re(z.__webglFramebuffer,R,et,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(et)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,q.__webglTexture),ce(le,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)re(z.__webglFramebuffer[ue],R,E,t.COLOR_ATTACHMENT0,le,ue);else re(z.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,le,0);m(E)&&h(le),n.unbindTexture()}R.depthBuffer&&Fe(R)}function Je(R){const E=R.textures;for(let z=0,q=E.length;z<q;z++){const ie=E[z];if(m(ie)){const Y=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ie).__webglTexture;n.bindTexture(Y,Te),h(Y),n.unbindTexture()}}}const ke=[],L=[];function Rt(R){if(R.samples>0){if(Ye(R)===!1){const E=R.textures,z=R.width,q=R.height;let ie=t.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),le=E.length>1;if(le)for(let ue=0;ue<E.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const et=i.get(E[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,z,q,0,0,z,q,ie,t.NEAREST),l===!0&&(ke.length=0,L.length=0,ke.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(Y),L.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ue=0;ue<E.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const et=i.get(E[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,et,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function He(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function it(R,E){const z=R.colorSpace,q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Cr&&z!==or&&(at.getTransfer(z)===_t?(q!==hi||ie!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Pe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ye}function ZT(t,e){function n(i,r=or){let s;const o=at.getTransfer(r);if(i===Wi)return t.UNSIGNED_BYTE;if(i===Of)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Yx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xx)return t.BYTE;if(i===$x)return t.SHORT;if(i===Ea)return t.UNSIGNED_SHORT;if(i===Ff)return t.INT;if(i===ss)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===Ra)return t.HALF_FLOAT;if(i===qx)return t.ALPHA;if(i===Zx)return t.RGB;if(i===hi)return t.RGBA;if(i===Kx)return t.LUMINANCE;if(i===Qx)return t.LUMINANCE_ALPHA;if(i===Js)return t.DEPTH_COMPONENT;if(i===po)return t.DEPTH_STENCIL;if(i===zf)return t.RED;if(i===Bf)return t.RED_INTEGER;if(i===Jx)return t.RG;if(i===Hf)return t.RG_INTEGER;if(i===Gf)return t.RGBA_INTEGER;if(i===Dl||i===Il||i===Ul||i===Fl)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rd||i===sd||i===od||i===ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ld||i===cd)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ud)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hd||i===dd||i===fd||i===pd||i===md||i===gd||i===xd||i===vd||i===_d||i===yd||i===Md||i===Sd||i===Ed||i===wd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===md)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_d)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Md)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ol||i===Td||i===bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ol)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Td)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ev||i===Ad||i===Cd||i===Rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ol)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class KT extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QT={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ml;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const JT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Er({vertexShader:JT,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ot(new Hc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n2 extends cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const y=new t2,m=n.getContextAttributes();let h=null,g=null;const x=[],S=[],C=new Ne;let T=null;const A=new Dn;A.layers.enable(1),A.viewport=new dt;const P=new Dn;P.layers.enable(2),P.viewport=new dt;const H=[A,P],_=new KT;_.layers.enable(1),_.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=x[j];return re===void 0&&(re=new Xu,x[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=x[j];return re===void 0&&(re=new Xu,x[j]=re),re.getGripSpace()},this.getHand=function(j){let re=x[j];return re===void 0&&(re=new Xu,x[j]=re),re.getHandSpace()};function k(j){const re=S.indexOf(j.inputSource);if(re===-1)return;const de=x[re];de!==void 0&&(de.update(j.inputSource,j.frame,c||o),de.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Q);for(let j=0;j<x.length;j++){const re=S[j];re!==null&&(S[j]=null,x[j].disconnect(re))}w=null,O=null,y.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,g=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new os(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,de=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?po:Js,de=m.stencil?fo:ss);const Fe={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new os(f.textureWidth,f.textureHeight,{format:hi,type:Wi,depthTexture:new pv(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(j){for(let re=0;re<j.removed.length;re++){const de=j.removed[re],pe=S.indexOf(de);pe>=0&&(S[pe]=null,x[pe].disconnect(de))}for(let re=0;re<j.added.length;re++){const de=j.added[re];let pe=S.indexOf(de);if(pe===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=S.length){S.push(de),pe=Pe;break}else if(S[Pe]===null){S[Pe]=de,pe=Pe;break}if(pe===-1)break}const Fe=x[pe];Fe&&Fe.connect(de)}}const V=new D,Z=new D;function N(j,re,de){V.setFromMatrixPosition(re.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const pe=V.distanceTo(Z),Fe=re.projectionMatrix.elements,Pe=de.projectionMatrix.elements,Ke=Fe[14]/(Fe[10]-1),Je=Fe[14]/(Fe[10]+1),ke=(Fe[9]+1)/Fe[5],L=(Fe[9]-1)/Fe[5],Rt=(Fe[8]-1)/Fe[0],He=(Pe[8]+1)/Pe[0],Ye=Ke*Rt,Ae=Ke*He,it=pe/(-Rt+He),Ce=it*-Rt;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ce),j.translateZ(it),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Fe[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const R=Ke+it,E=Je+it,z=Ye-Ce,q=Ae+(pe-Ce),ie=ke*Je/E*R,Y=L*Je/E*R;j.projectionMatrix.makePerspective(z,q,ie,Y,R,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let re=j.near,de=j.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(de=y.depthFar)),_.near=P.near=A.near=re,_.far=P.far=A.far=de,(w!==_.near||O!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,O=_.far);const pe=j.parent,Fe=_.cameras;K(_,pe);for(let Pe=0;Pe<Fe.length;Pe++)K(Fe[Pe],pe);Fe.length===2?N(_,A,P):_.projectionMatrix.copy(A.projectionMatrix),ee(j,_,pe)};function ee(j,re,de){de===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let ce=null;function ne(j,re){if(u=re.getViewerPose(c||o),v=re,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let pe=!1;de.length!==_.cameras.length&&(_.cameras.length=0,pe=!0);for(let Pe=0;Pe<de.length;Pe++){const Ke=de[Pe];let Je=null;if(p!==null)Je=p.getViewport(Ke);else{const L=d.getViewSubImage(f,Ke);Je=L.viewport,Pe===0&&(e.setRenderTargetTextures(g,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let ke=H[Pe];ke===void 0&&(ke=new Dn,ke.layers.enable(Pe),ke.viewport=new dt,H[Pe]=ke),ke.matrix.fromArray(Ke.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ke.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Je.x,Je.y,Je.width,Je.height),Pe===0&&(_.matrix.copy(ke.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pe===!0&&_.cameras.push(ke)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Pe=d.getDepthInformation(de[0]);Pe&&Pe.isValid&&Pe.texture&&y.init(e,Pe,r.renderState)}}for(let de=0;de<x.length;de++){const pe=S[de],Fe=x[de];pe!==null&&Fe!==void 0&&Fe.update(pe,re,c||o)}ce&&ce(j,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const J=new dv;J.setAnimationLoop(ne),this.setAnimationLoop=function(j){ce=j},this.dispose=function(){}}}const kr=new bi,i2=new ft;function r2(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,cv(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===gn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===gn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,kr.copy(S),kr.x*=-1,kr.y*=-1,kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),m.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(kr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===gn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function s2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(v(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(g,C);const T=e.render.frame;s[g.id]!==T&&(f(g),s[g.id]=T)}function u(g){const x=d();g.__bindingPointIndex=x;const S=t.createBuffer(),C=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=r[g.id],S=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let H=0,_=P.length;H<_;H++){const w=P[H];if(p(w,T,H,C)===!0){const O=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let Q=0;Q<k.length;Q++){const V=k[Q],Z=y(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,O+X,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,S,C){const T=g.value,A=x+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function v(g){const x=g.uniforms;let S=0;const C=16;for(let A=0,P=x.length;A<P;A++){const H=Array.isArray(x[A])?x[A]:[x[A]];for(let _=0,w=H.length;_<w;_++){const O=H[_],k=Array.isArray(O.value)?O.value:[O.value];for(let X=0,Q=k.length;X<Q;X++){const V=k[X],Z=y(V),N=S%C,K=N%Z.boundary,ee=N+K;S+=K,ee!==0&&C-ee<Z.storage&&(S+=C-ee),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Z.storage}}}const T=S%C;return T>0&&(S+=C-T),g.__size=S,g.__cache={},this}function y(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class o2{constructor(e={}){const{canvas:n=$1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=vr,this.toneMappingExposure=1;const x=this;let S=!1,C=0,T=0,A=null,P=-1,H=null;const _=new dt,w=new dt;let O=null;const k=new ze(0);let X=0,Q=n.width,V=n.height,Z=1,N=null,K=null;const ee=new dt(0,0,Q,V),ce=new dt(0,0,Q,V);let ne=!1;const J=new Wf;let j=!1,re=!1;const de=new ft,pe=new ft,Fe=new D,Pe=new dt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function ke(){return A===null?Z:1}let L=i;function Rt(b,U){return n.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uf}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ve,!1),L===null){const U="webgl2";if(L=Rt(U,b),L===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let He,Ye,Ae,it,Ce,R,E,z,q,ie,Y,Te,le,ue,et,oe,_e,De,Ue,ye,qe,Oe,st,I;function xe(){He=new hw(L),He.init(),Oe=new ZT(L,He),Ye=new sw(L,He,e,Oe),Ae=new $T(L),Ye.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),it=new pw(L),Ce=new NT,R=new qT(L,He,Ae,Ce,Ye,Oe,it),E=new aw(x),z=new uw(x),q=new MM(L),st=new iw(L,q),ie=new dw(L,q,it,st),Y=new gw(L,ie,q,it),Ue=new mw(L,Ye,R),oe=new ow(Ce),Te=new LT(x,E,z,He,Ye,st,oe),le=new r2(x,Ce),ue=new IT,et=new BT(He),De=new nw(x,E,z,Ae,Y,f,l),_e=new WT(x,Y,Ye),I=new s2(L,it,Ye,Ae),ye=new rw(L,He,it),qe=new fw(L,He,it),it.programs=Te.programs,x.capabilities=Ye,x.extensions=He,x.properties=Ce,x.renderLists=ue,x.shadowMap=_e,x.state=Ae,x.info=it}xe();const W=new n2(x,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=He.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=He.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(Q,V,!1))},this.getSize=function(b){return b.set(Q,V)},this.setSize=function(b,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,V=U,n.width=Math.floor(b*Z),n.height=Math.floor(U*Z),B===!0&&(n.style.width=b+"px",n.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Q*Z,V*Z).floor()},this.setDrawingBufferSize=function(b,U,B){Q=b,V=U,Z=B,n.width=Math.floor(b*B),n.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(ee)},this.setViewport=function(b,U,B,G){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,U,B,G),Ae.viewport(_.copy(ee).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(ce)},this.setScissor=function(b,U,B,G){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,U,B,G),Ae.scissor(w.copy(ce).multiplyScalar(Z).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){Ae.setScissorTest(ne=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,U=!0,B=!0){let G=0;if(b){let F=!1;if(A!==null){const ae=A.texture.format;F=ae===Gf||ae===Hf||ae===Bf}if(F){const ae=A.texture.type,ge=ae===Wi||ae===ss||ae===Ea||ae===fo||ae===Of||ae===kf,Me=De.getClearColor(),Ee=De.getClearAlpha(),Re=Me.r,Le=Me.g,we=Me.b;ge?(p[0]=Re,p[1]=Le,p[2]=we,p[3]=Ee,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=Re,v[1]=Le,v[2]=we,v[3]=Ee,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ue.dispose(),et.dispose(),Ce.dispose(),E.dispose(),z.dispose(),Y.dispose(),st.dispose(),I.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",mi),W.removeEventListener("sessionend",Rr),Gn.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=it.autoReset,U=_e.enabled,B=_e.autoUpdate,G=_e.needsUpdate,F=_e.type;xe(),it.autoReset=b,_e.enabled=U,_e.autoUpdate=B,_e.needsUpdate=G,_e.type=F}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ie(b){const U=b.target;U.removeEventListener("dispose",Ie),St(U)}function St(b){Wt(b),Ce.remove(b)}function Wt(b){const U=Ce.get(b).programs;U!==void 0&&(U.forEach(function(B){Te.releaseProgram(B)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,G,F,ae){U===null&&(U=Ke);const ge=F.isMesh&&F.matrixWorld.determinant()<0,Me=gi(b,U,B,G,F);Ae.setMaterial(G,ge);let Ee=B.index,Re=1;if(G.wireframe===!0){if(Ee=ie.getWireframeAttribute(B),Ee===void 0)return;Re=2}const Le=B.drawRange,we=B.attributes.position;let tt=Le.start*Re,ut=(Le.start+Le.count)*Re;ae!==null&&(tt=Math.max(tt,ae.start*Re),ut=Math.min(ut,(ae.start+ae.count)*Re)),Ee!==null?(tt=Math.max(tt,0),ut=Math.min(ut,Ee.count)):we!=null&&(tt=Math.max(tt,0),ut=Math.min(ut,we.count));const pt=ut-tt;if(pt<0||pt===1/0)return;st.setup(F,G,Me,B,Ee);let dn,fe=ye;if(Ee!==null&&(dn=q.get(Ee),fe=qe,fe.setIndex(dn)),F.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*ke()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(F.isLine){let $=G.linewidth;$===void 0&&($=1),Ae.setLineWidth($*ke()),F.isLineSegments?fe.setMode(L.LINES):F.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else F.isPoints?fe.setMode(L.POINTS):F.isSprite&&fe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)fe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))fe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const $=F._multiDrawStarts,lt=F._multiDrawCounts,Ve=F._multiDrawCount,je=Ee?q.get(Ee).bytesPerElement:1,mt=Ce.get(G).currentProgram.getUniforms();for(let Et=0;Et<Ve;Et++)mt.setValue(L,"_gl_DrawID",Et),fe.render($[Et]/je,lt[Et])}else if(F.isInstancedMesh)fe.renderInstances(tt,pt,F.count);else if(B.isInstancedBufferGeometry){const $=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,lt=Math.min(B.instanceCount,$);fe.renderInstances(tt,pt,lt)}else fe.render(tt,pt)};function nt(b,U,B){b.transparent===!0&&b.side===In&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,Be(b,U,B),b.side=Mr,b.needsUpdate=!0,Be(b,U,B),b.side=In):Be(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),m=et.get(B),m.init(U),g.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==B&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const G=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const Me=ae[ge];nt(Me,B,F),G.add(Me)}else nt(ae,B,F),G.add(ae)}),g.pop(),m=null,G},this.compileAsync=function(b,U,B=null){const G=this.compile(b,U,B);return new Promise(F=>{function ae(){if(G.forEach(function(ge){Ce.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){F(b);return}setTimeout(ae,10)}He.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Kt=null;function Hn(b){Kt&&Kt(b)}function mi(){Gn.stop()}function Rr(){Gn.start()}const Gn=new dv;Gn.setAnimationLoop(Hn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(b){Kt=b,W.setAnimationLoop(b),b===null?Gn.stop():Gn.start()},W.addEventListener("sessionstart",mi),W.addEventListener("sessionend",Rr),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,A),m=et.get(b,g.length),m.init(U),g.push(m),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(pe),re=this.localClippingEnabled,j=oe.init(this.clippingPlanes,re),y=ue.get(b,h.length),y.init(),h.push(y),W.enabled===!0&&W.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&Pr(ae,U,-1/0,x.sortObjects)}Pr(b,U,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(N,K),Je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Je&&De.addToRenderList(y,b),this.info.render.frame++,j===!0&&oe.beginShadows();const B=m.state.shadowsArray;_e.render(B,b,U),j===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,F=y.transmissive;if(m.setupLights(),U.isArrayCamera){const ae=U.cameras;if(F.length>0)for(let ge=0,Me=ae.length;ge<Me;ge++){const Ee=ae[ge];wo(G,F,b,Ee)}Je&&De.render(b);for(let ge=0,Me=ae.length;ge<Me;ge++){const Ee=ae[ge];Eo(y,b,Ee,Ee.viewport)}}else F.length>0&&wo(G,F,b,U),Je&&De.render(b),Eo(y,b,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,U),st.resetDefaultState(),P=-1,H=null,g.pop(),g.length>0?(m=g[g.length-1],j===!0&&oe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Pr(b,U,B,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){G&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const ge=Y.update(b),Me=b.material;Me.visible&&y.push(b,ge,Me,B,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const ge=Y.update(b),Me=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Pe.copy(ge.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(Me)){const Ee=ge.groups;for(let Re=0,Le=Ee.length;Re<Le;Re++){const we=Ee[Re],tt=Me[we.materialIndex];tt&&tt.visible&&y.push(b,ge,tt,B,Pe.z,we)}}else Me.visible&&y.push(b,ge,Me,B,Pe.z,null)}}const ae=b.children;for(let ge=0,Me=ae.length;ge<Me;ge++)Pr(ae[ge],U,B,G)}function Eo(b,U,B,G){const F=b.opaque,ae=b.transmissive,ge=b.transparent;m.setupLightsView(B),j===!0&&oe.setGlobalState(x.clippingPlanes,B),G&&Ae.viewport(_.copy(G)),F.length>0&&Lr(F,U,B),ae.length>0&&Lr(ae,U,B),ge.length>0&&Lr(ge,U,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function wo(b,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new os(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ra:Wi,minFilter:qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ae=m.state.transmissionRenderTarget[G.id],ge=G.viewport||_;ae.setSize(ge.z,ge.w);const Me=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(k),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Je&&De.render(B);const Ee=x.toneMapping;x.toneMapping=vr;const Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),j===!0&&oe.setGlobalState(x.clippingPlanes,G),Lr(b,B,G),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),He.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let we=0,tt=U.length;we<tt;we++){const ut=U[we],pt=ut.object,dn=ut.geometry,fe=ut.material,$=ut.group;if(fe.side===In&&pt.layers.test(G.layers)){const lt=fe.side;fe.side=gn,fe.needsUpdate=!0,Ge(pt,B,G,dn,fe,$),fe.side=lt,fe.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}x.setRenderTarget(Me),x.setClearColor(k,X),Re!==void 0&&(G.viewport=Re),x.toneMapping=Ee}function Lr(b,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ae=b.length;F<ae;F++){const ge=b[F],Me=ge.object,Ee=ge.geometry,Re=G===null?ge.material:G,Le=ge.group;Me.layers.test(B.layers)&&Ge(Me,U,B,Ee,Re,Le)}}function Ge(b,U,B,G,F,ae){b.onBeforeRender(x,U,B,G,F,ae),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,U,B,G,b,ae),F.transparent===!0&&F.side===In&&F.forceSinglePass===!1?(F.side=gn,F.needsUpdate=!0,x.renderBufferDirect(B,U,G,F,b,ae),F.side=Mr,F.needsUpdate=!0,x.renderBufferDirect(B,U,G,F,b,ae),F.side=In):x.renderBufferDirect(B,U,G,F,b,ae),b.onAfterRender(x,U,B,G,F,ae)}function Be(b,U,B){U.isScene!==!0&&(U=Ke);const G=Ce.get(b),F=m.state.lights,ae=m.state.shadowsArray,ge=F.state.version,Me=Te.getParameters(b,F.state,ae,U,B),Ee=Te.getProgramCacheKey(Me);let Re=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?z:E).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Ie),Re=new Map,G.programs=Re);let Le=Re.get(Ee);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===ge)return Ut(b,Me),Le}else Me.uniforms=Te.getUniforms(b),b.onBeforeCompile(Me,x),Le=Te.acquireProgram(Me,Ee),Re.set(Ee,Le),G.uniforms=Me.uniforms;const we=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=oe.uniform),Ut(b,Me),G.needsLights=hs(b),G.lightsStateVersion=ge,G.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function Qt(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Bl.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ut(b,U){const B=Ce.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function gi(b,U,B,G,F){U.isScene!==!0&&(U=Ke),R.resetTextureUnits();const ae=U.fog,ge=G.isMeshStandardMaterial?U.environment:null,Me=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Cr,Ee=(G.isMeshStandardMaterial?z:E).get(G.envMap||ge),Re=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,ut=!!B.morphAttributes.color;let pt=vr;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=x.toneMapping);const dn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=dn!==void 0?dn.length:0,$=Ce.get(G),lt=m.state.lights;if(j===!0&&(re===!0||b!==H)){const Xt=b===H&&G.id===P;oe.setState(G,b,Xt)}let Ve=!1;G.version===$.__version?($.needsLights&&$.lightsStateVersion!==lt.state.version||$.outputColorSpace!==Me||F.isBatchedMesh&&$.batching===!1||!F.isBatchedMesh&&$.batching===!0||F.isBatchedMesh&&$.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&$.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&$.instancing===!1||!F.isInstancedMesh&&$.instancing===!0||F.isSkinnedMesh&&$.skinning===!1||!F.isSkinnedMesh&&$.skinning===!0||F.isInstancedMesh&&$.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&$.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&$.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&$.instancingMorph===!1&&F.morphTexture!==null||$.envMap!==Ee||G.fog===!0&&$.fog!==ae||$.numClippingPlanes!==void 0&&($.numClippingPlanes!==oe.numPlanes||$.numIntersection!==oe.numIntersection)||$.vertexAlphas!==Re||$.vertexTangents!==Le||$.morphTargets!==we||$.morphNormals!==tt||$.morphColors!==ut||$.toneMapping!==pt||$.morphTargetsCount!==fe)&&(Ve=!0):(Ve=!0,$.__version=G.version);let je=$.currentProgram;Ve===!0&&(je=Be(G,U,F));let mt=!1,Et=!1,wt=!1;const Tt=je.getUniforms(),yn=$.uniforms;if(Ae.useProgram(je.program)&&(mt=!0,Et=!0,wt=!0),G.id!==P&&(P=G.id,Et=!0),mt||H!==b){Ye.reverseDepthBuffer?(de.copy(b.projectionMatrix),q1(de),Z1(de),Tt.setValue(L,"projectionMatrix",de)):Tt.setValue(L,"projectionMatrix",b.projectionMatrix),Tt.setValue(L,"viewMatrix",b.matrixWorldInverse);const Xt=Tt.map.cameraPosition;Xt!==void 0&&Xt.setValue(L,Fe.setFromMatrixPosition(b.matrixWorld)),Ye.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,Et=!0,wt=!0)}if(F.isSkinnedMesh){Tt.setOptional(L,F,"bindMatrix"),Tt.setOptional(L,F,"bindMatrixInverse");const Xt=F.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Tt.setValue(L,"boneTexture",Xt.boneTexture,R))}F.isBatchedMesh&&(Tt.setOptional(L,F,"batchingTexture"),Tt.setValue(L,"batchingTexture",F._matricesTexture,R),Tt.setOptional(L,F,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",F._indirectTexture,R),Tt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",F._colorsTexture,R));const Vn=B.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&Ue.update(F,B,je),(Et||$.receiveShadow!==F.receiveShadow)&&($.receiveShadow=F.receiveShadow,Tt.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=Ee,yn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(yn.envMapIntensity.value=U.environmentIntensity),Et&&(Tt.setValue(L,"toneMappingExposure",x.toneMappingExposure),$.needsLights&&Pt(yn,wt),ae&&G.fog===!0&&le.refreshFogUniforms(yn,ae),le.refreshMaterialUniforms(yn,G,Z,V,m.state.transmissionRenderTarget[b.id]),Bl.upload(L,Qt($),yn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bl.upload(L,Qt($),yn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(L,"center",F.center),Tt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(L,"normalMatrix",F.normalMatrix),Tt.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xt=G.uniformsGroups;for(let xi=0,Nr=Xt.length;xi<Nr;xi++){const To=Xt[xi];I.update(To,je),I.bind(To,je)}}return je}function Pt(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function hs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,B){Ce.get(b.texture).__webglTexture=U,Ce.get(b.depthTexture).__webglTexture=B;const G=Ce.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const B=Ce.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){A=b,C=U,T=B;let G=!0,F=null,ae=!1,ge=!1;if(b){const Ee=Ce.get(b);if(Ee.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Ee.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Ee.__hasExternalTextures)R.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const we=b.depthTexture;if(Ee.__boundDepthTexture!==we){if(we!==null&&Ce.has(we)&&(b.width!==we.image.width||b.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ge=!0);const Le=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][B]:F=Le[U],ae=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?F=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[B]:F=Le,_.copy(b.viewport),w.copy(b.scissor),O=b.scissorTest}else _.copy(ee).multiplyScalar(Z).floor(),w.copy(ce).multiplyScalar(Z).floor(),O=ne;if(Ae.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&Ae.drawBuffers(b,F),Ae.viewport(_),Ae.scissor(w),Ae.setScissorTest(O),ae){const Ee=Ce.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,B)}else if(ge){const Ee=Ce.get(b.texture),Re=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,B||0,Re)}P=-1},this.readRenderTargetPixels=function(b,U,B,G,F,ae,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){Ae.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Ee=b.texture,Re=Ee.format,Le=Ee.type;if(!Ye.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&B>=0&&B<=b.height-F&&L.readPixels(U,B,G,F,Oe.convert(Re),Oe.convert(Le),ae)}finally{const Ee=A!==null?Ce.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,G,F,ae,ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){const Ee=b.texture,Re=Ee.format,Le=Ee.type;if(!Ye.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&B>=0&&B<=b.height-F){Ae.bindFramebuffer(L.FRAMEBUFFER,Me);const we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(U,B,G,F,Oe.convert(Re),Oe.convert(Le),0);const tt=A!==null?Ce.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,tt);const ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Y1(L,ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(we),L.deleteSync(ut),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(zl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-B),F=Math.floor(b.image.width*G),ae=Math.floor(b.image.height*G),ge=U!==null?U.x:0,Me=U!==null?U.y:0;R.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,ge,Me,F,ae),Ae.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,G=null,F=0){b.isTexture!==!0&&(zl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],F=arguments[3]||0,B=null);let ae,ge,Me,Ee,Re,Le;B!==null?(ae=B.max.x-B.min.x,ge=B.max.y-B.min.y,Me=B.min.x,Ee=B.min.y):(ae=b.image.width,ge=b.image.height,Me=0,Ee=0),G!==null?(Re=G.x,Le=G.y):(Re=0,Le=0);const we=Oe.convert(U.format),tt=Oe.convert(U.type);R.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ut=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),fe=L.getParameter(L.UNPACK_SKIP_ROWS),$=L.getParameter(L.UNPACK_SKIP_IMAGES),lt=b.isCompressedTexture?b.mipmaps[F]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Re,Le,ae,ge,we,tt,lt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Re,Le,lt.width,lt.height,we,lt.data):L.texSubImage2D(L.TEXTURE_2D,F,Re,Le,ae,ge,we,tt,lt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$),F===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,G=null,F=0){b.isTexture!==!0&&(zl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0);let ae,ge,Me,Ee,Re,Le,we,tt,ut;const pt=b.isCompressedTexture?b.mipmaps[F]:b.image;B!==null?(ae=B.max.x-B.min.x,ge=B.max.y-B.min.y,Me=B.max.z-B.min.z,Ee=B.min.x,Re=B.min.y,Le=B.min.z):(ae=pt.width,ge=pt.height,Me=pt.depth,Ee=0,Re=0,Le=0),G!==null?(we=G.x,tt=G.y,ut=G.z):(we=0,tt=0,ut=0);const dn=Oe.convert(U.format),fe=Oe.convert(U.type);let $;if(U.isData3DTexture)R.setTexture3D(U,0),$=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),$=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const lt=L.getParameter(L.UNPACK_ROW_LENGTH),Ve=L.getParameter(L.UNPACK_IMAGE_HEIGHT),je=L.getParameter(L.UNPACK_SKIP_PIXELS),mt=L.getParameter(L.UNPACK_SKIP_ROWS),Et=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),b.isDataTexture||b.isData3DTexture?L.texSubImage3D($,F,we,tt,ut,ae,ge,Me,dn,fe,pt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D($,F,we,tt,ut,ae,ge,Me,dn,pt.data):L.texSubImage3D($,F,we,tt,ut,ae,ge,Me,dn,fe,pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ve),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,mt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et),F===0&&U.generateMipmaps&&L.generateMipmap($),Ae.unbindTexture()},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,Ae.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vf?"display-p3":"srgb",n.unpackColorSpace=at.workingColorSpace===zc?"display-p3":"srgb"}}class $f{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=n,this.far=i}clone(){return new $f(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _v extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class a2 extends un{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Tn,u=Tn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr extends On{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const As=new ft,ng=new ft,gl=[],ig=new us,l2=new ft,Bo=new ot,Ho=new _o;class Wn extends ot{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,l2)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new us),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,As),ig.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(ig)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new _o),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,As),Ho.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(Ho)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),e.ray.intersectsSphere(Ho)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,As),ng.multiplyMatrices(i,As),Bo.matrixWorld=ng,Bo.raycast(e,gl);for(let o=0,a=gl.length;o<a;o++){const l=gl[o];l.instanceId=s,l.object=this,n.push(l)}gl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new a2(new Float32Array(r*this.count),r,this.count,zf,Si));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yv extends yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new D,vc=new D,rg=new ft,Go=new Bc,xl=new _o,$u=new D,sg=new D;class c2 extends Gt{constructor(e=new _n,n=new yv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)xc.fromBufferAttribute(n,r-1),vc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=xc.distanceTo(vc);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(r),xl.radius+=s,e.ray.intersectsSphere(xl)===!1)return;rg.copy(r).invert(),Go.copy(e.ray).applyMatrix4(rg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=c){const h=u.getX(y),g=u.getX(y+1),x=vl(this,e,Go,l,h,g);x&&n.push(x)}if(this.isLineLoop){const y=u.getX(v-1),m=u.getX(p),h=vl(this,e,Go,l,y,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=p,m=v-1;y<m;y+=c){const h=vl(this,e,Go,l,y,y+1);h&&n.push(h)}if(this.isLineLoop){const y=vl(this,e,Go,l,v-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(xc.fromBufferAttribute(o,r),vc.fromBufferAttribute(o,s),n.distanceSqToSegment(xc,vc,$u,sg)>i)return;$u.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo($u);if(!(l<e.near||l>e.far))return{distance:l,point:sg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const og=new D,ag=new D;class u2 extends c2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)og.fromBufferAttribute(n,r),ag.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+og.distanceTo(ag);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mv extends un{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _c extends _n{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,u=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class to extends _n{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let v=0;const y=[],m=i/2;let h=0;g(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(p,2));function g(){const S=new D,C=new D;let T=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const H=[],_=P/s,w=_*(n-e)+e;for(let O=0;O<=r;O++){const k=O/r,X=k*l+a,Q=Math.sin(X),V=Math.cos(X);C.x=w*Q,C.y=-_*i+m,C.z=w*V,d.push(C.x,C.y,C.z),S.set(Q,A,V).normalize(),f.push(S.x,S.y,S.z),p.push(k,1-_),H.push(v++)}y.push(H)}for(let P=0;P<r;P++)for(let H=0;H<s;H++){const _=y[H][P],w=y[H+1][P],O=y[H+1][P+1],k=y[H][P+1];e>0&&(u.push(_,w,k),T+=3),n>0&&(u.push(w,O,k),T+=3)}c.addGroup(h,T,0),h+=T}function x(S){const C=v,T=new Ne,A=new D;let P=0;const H=S===!0?e:n,_=S===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),v++;const w=v;for(let O=0;O<=r;O++){const X=O/r*l+a,Q=Math.cos(X),V=Math.sin(X);A.x=H*V,A.y=m*_,A.z=H*Q,d.push(A.x,A.y,A.z),f.push(0,_,0),T.x=Q*.5+.5,T.y=V*.5*_+.5,p.push(T.x,T.y),v++}for(let O=0;O<r;O++){const k=C+O,X=w+O;S===!0?u.push(X,X+1,k):u.push(X+1,X,k),P+=3}c.addGroup(h,P,S===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ra extends to{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ra(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yf extends _n{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new D,S=new D,C=new D;for(let T=0;T<n.length;T+=3)p(n[T+0],x),p(n[T+1],S),p(n[T+2],C),l(x,S,C,g)}function l(g,x,S,C){const T=C+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const H=g.clone().lerp(S,P/T),_=x.clone().lerp(S,P/T),w=T-P;for(let O=0;O<=w;O++)O===0&&P===T?A[P][O]=H:A[P][O]=H.clone().lerp(_,O/w)}for(let P=0;P<T;P++)for(let H=0;H<2*(T-P)-1;H++){const _=Math.floor(H/2);H%2===0?(f(A[P][_+1]),f(A[P+1][_]),f(A[P][_])):(f(A[P][_+1]),f(A[P+1][_+1]),f(A[P+1][_]))}}function c(g){const x=new D;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(g),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const g=new D;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const S=m(g)/2/Math.PI+.5,C=h(g)/Math.PI+.5;o.push(S,1-C)}v(),d()}function d(){for(let g=0;g<o.length;g+=6){const x=o[g+0],S=o[g+2],C=o[g+4],T=Math.max(x,S,C),A=Math.min(x,S,C);T>.9&&A<.1&&(x<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,x){const S=g*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function v(){const g=new D,x=new D,S=new D,C=new D,T=new Ne,A=new Ne,P=new Ne;for(let H=0,_=0;H<s.length;H+=9,_+=6){g.set(s[H+0],s[H+1],s[H+2]),x.set(s[H+3],s[H+4],s[H+5]),S.set(s[H+6],s[H+7],s[H+8]),T.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),C.copy(g).add(x).add(S).divideScalar(3);const w=m(C);y(T,_+0,g,w),y(A,_+2,x,w),y(P,_+4,S,w)}}function y(g,x,S,C){C<0&&g.x===1&&(o[x]=g.x-1),S.x===0&&S.z===0&&(o[x]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.vertices,e.indices,e.radius,e.details)}}class js extends Yf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new js(e.radius,e.detail)}}class qf extends _n{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,p=new D,v=new Ne;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,u.push(v.x,v.y)}d+=f}for(let y=0;y<r;y++){const m=y*(i+1);for(let h=0;h<i;h++){const g=h+m,x=g,S=g+i+1,C=g+i+2,T=g+1;a.push(x,S,T),a.push(S,C,T)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class jr extends _n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new D,f=new D,p=[],v=[],y=[],m=[];for(let h=0;h<=i;h++){const g=[],x=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const T=C/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(T+S,1-x),g.push(c++)}u.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){const x=u[h][g+1],S=u[h][g],C=u[h+1][g],T=u[h+1][g+1];(h!==0||o>0)&&p.push(x,S,T),(h!==i-1||l<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yc extends _n{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new D,d=new D,f=new D;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const y=v/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(y),d.y=(e+n*Math.cos(m))*Math.sin(y),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const y=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,h=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(y,m,g),o.push(m,h,g)}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jt extends yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tv,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h2 extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zf extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class d2 extends Zf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Yu=new ft,lg=new D,cg=new D;class Sv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;lg.setFromMatrixPosition(e.matrixWorld),n.position.copy(lg),cg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(cg),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ug=new ft,Vo=new D,qu=new D;class f2 extends Sv{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vo),qu.copy(i.position),qu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(qu),i.updateMatrixWorld(),r.makeTranslation(-Vo.x,-Vo.y,-Vo.z),ug.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ug)}}class Ev extends Zf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new f2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class p2 extends Sv{constructor(){super(new fv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends Zf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new p2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const dg=new ft;class m2{constructor(e,n,i=0,r=1/0){this.ray=new Bc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return dg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dg),this}intersectObject(e,n=!0,i=[]){return Dd(e,this,i,n),i.sort(fg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Dd(e[r],this,i,n);return i.sort(fg),i}}function fg(t,e){return t.distance-e.distance}function Dd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Dd(s[o],e,n,!0)}}class pg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(cn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class g2 extends cs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);const mg={type:"change"},Kf={type:"start"},wv={type:"end"},_l=new Bc,gg=new Fi,x2=Math.cos(70*X1.DEG2RAD),kt=new D,Sn=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zu=1e-6;class v2 extends g2{constructor(e,n=null){super(e,n),this.state=ht.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Sr,this._lastTargetPosition=new D,this._quat=new Sr().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pg,this._sphericalDelta=new pg,this._scale=1,this._panOffset=new D,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new D,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y2.bind(this),this._onPointerDown=_2.bind(this),this._onPointerUp=M2.bind(this),this._onContextMenu=C2.bind(this),this._onMouseWheel=w2.bind(this),this._onKeyDown=T2.bind(this),this._onTouchStart=b2.bind(this),this._onTouchMove=A2.bind(this),this._onMouseDown=S2.bind(this),this._onMouseMove=E2.bind(this),this._interceptControlDown=R2.bind(this),this._interceptControlUp=P2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mg),this.update(),this.state=ht.NONE}update(e=null){const n=this.object.position;kt.copy(n).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),r<-Math.PI?r+=Sn:r>Math.PI&&(r-=Sn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),n.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=kt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_l.origin.copy(this.object.position),_l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_l.direction))<x2?this.object.lookAt(this.target):(gg.setFromNormalAndCoplanarPoint(this.object.up,this.target),_l.intersectPlane(gg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zu||this._lastTargetPosition.distanceToSquared(this.target)>Zu?(this.dispatchEvent(mg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){kt.setFromMatrixColumn(n,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,n){this.screenSpacePanning===!0?kt.setFromMatrixColumn(n,1):(kt.setFromMatrixColumn(n,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kt.copy(r).sub(this.target);let s=kt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ne,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function y2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function M2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wv),this.state=ht.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function S2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ht.DOLLY;break;case Ks.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ht.ROTATE}break;case Ks.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Kf)}function E2(t){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function w2(t){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(t.preventDefault(),this.dispatchEvent(Kf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(wv))}function T2(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function b2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ht.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ht.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Kf)}function A2(t){switch(this._trackPointer(t),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ht.NONE}}function C2(t){this.enabled!==!1&&t.preventDefault()}function R2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class L2 extends _v{constructor(){super();const e=new Mo;e.deleteAttribute("uv");const n=new Jt({side:gn}),i=new Jt,r=new Ev(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ot(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new ot(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ot(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ot(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ot(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new ot(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new ot(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new ot(e,Cs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new ot(e,Cs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const v=new ot(e,Cs(17));v.position.set(14.904,12.198,-1.832),v.scale.set(.15,4.265,6.331),this.add(v);const y=new ot(e,Cs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const m=new ot(e,Cs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const h=new ot(e,Cs(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Cs(t){const e=new Zr;return e.color.setScalar(t),e}const N2={speed:1,sense:1,attack:1,defense:1,upkeep:1,energyGain:1,foodGain:1,eatRange:0,attackRange:0,size:1},qt={flagellum:{id:"flagellum",zh:"鞭毛",en:"Flagellum",icon:"〰",hue:"#7dd3fc",descZh:"游动速度 ×1.45",descEn:"Swim speed x1.45",realZh:"大肠杆菌的旋转鞭毛",realEn:"The rotary flagellum of E. coli",eraMa:3500,branch:"细菌",mods:{speed:1.45},noteZh:"地球上最早的运动器官，让细菌能逆着浓度梯度游动。",noteEn:"The earliest locomotion organ: lets bacteria swim against gradients."},cilia:{id:"cilia",zh:"纤毛",en:"Cilia",icon:"≋",hue:"#a5f3fc",descZh:"转向更灵活，感知 ×1.3",descEn:"Finer steering, sense x1.3",realZh:"草履虫周围成千上万根纤毛",realEn:"Thousands of cilia ringing a Paramecium",eraMa:1e3,branch:"真核",prereq:["flagellum"],mods:{speed:1.12,sense:1.3},noteZh:"真核细胞用纤毛做精密运动，这也是动物胚胎「旋转细胞」的原语。",noteEn:"Eukaryotic cilia power precise motion — the same primitive used by animal embryos."},tentacle:{id:"tentacle",zh:"触手",en:"Tentacle",icon:"⌇",hue:"#ff8b3d",descZh:"攻击距离 +40%，攻击 ×1.25，但能耗 ×1.2",descEn:"Attack range +40, attack x1.25, upkeep x1.2",realZh:"水母与海葵的刺细胞触手",realEn:"Tentacles bearing cnidocytes in jellyfish and anemones",eraMa:600,branch:"动物",prereq:["toxin"],mods:{attack:1.25,attackRange:40,upkeep:1.2},flags:{tentacle:!0},noteZh:"刺胞动物的「真身」武器：不用靠近，先把毒素射出去。",noteEn:"Cnidarians brought ranged weaponry: strike first, from a distance."},pseudopod:{id:"pseudopod",zh:"伪足",en:"Pseudopod",icon:"☁",hue:"#c4b5fd",descZh:"可以吞下比自己更大的食物，游速 ×0.8",descEn:"Can engulf food larger than itself, speed x0.8",realZh:"变形虫伸出的伪足",realEn:"The flowing pseudopods of an amoeba",eraMa:1200,branch:"真核",prereq:["mitochondria"],mods:{speed:.8,eatRange:10},flags:{engulf:!0},noteZh:"吞噬式进食：真核细胞第一次把固体食物整个包进体内。",noteEn:"Phagocytosis: eukaryotes began engulfing solid food whole."},mitochondria:{id:"mitochondria",zh:"线粒体",en:"Mitochondria",icon:"◈",hue:"#fb923c",descZh:"基础能耗 ×0.65",descEn:"Energy upkeep x0.65",realZh:"被 α-变形菌吞下后没被消化的古菌",realEn:"An archaeon spared inside an alpha-proteobacterium",eraMa:1800,branch:"内共生",mods:{upkeep:.65},noteZh:"真核细胞的发动机，本身就是一场没有硝烟的内共生战争。",noteEn:"The eukaryote engine — itself the survivor of an ancient takeover."},chloroplast:{id:"chloroplast",zh:"叶绿体",en:"Chloroplast",icon:"☀",hue:"#a2db3c",descZh:"光照下持续产能",descEn:"Photosynthesis in light",realZh:"被真核细胞吞下的蓝细菌",realEn:"A cyanobacterium adopted by a eukaryotic cell",eraMa:1550,branch:"内共生",mods:{energyGain:1},flags:{photosynthesis:!0},noteZh:"生命第一次自己制造氧气 —— 地球大气从此改写。",noteEn:"Life began making its own oxygen, rewriting the atmosphere."},chemosynthesis:{id:"chemosynthesis",zh:"化能合成酶",en:"Chemosynthesis",icon:"⛭",hue:"#f97316",descZh:"不依赖光照也能产能，但代谢代价更高",descEn:"Energy without light, at a higher metabolic cost",realZh:"深海热液喷口的硫氧化细菌",realEn:"Sulfur-oxidising bacteria at deep-sea vents",eraMa:3500,branch:"细菌",mods:{energyGain:1,upkeep:1.3},flags:{chemosynthesis:!0},noteZh:"地球上最早的生命根本不靠阳光，靠热液里的硫活。",noteEn:"The earliest life never needed sunlight — it ate sulfur from vents."},aerobe:{id:"aerobe",zh:"有氧呼吸器",en:"Aerobic respiratory chain",icon:"◉",hue:"#38bdf8",descZh:"产能效率 ×1.55",descEn:"Energy yield x1.55",realZh:"在大氧化事件后扩张的需氧细菌",realEn:"Aerobic bacteria that expanded after the Great Oxidation",eraMa:2400,branch:"细菌",prereq:["mitochondria"],mods:{energyGain:1.55},noteZh:"氧气从毒气变成燃料 —— 一次彻底的生态位翻转。",noteEn:"Oxygen flipped from poison to fuel — a total reversal of the niche."},lysosome:{id:"lysosome",zh:"溶酶体",en:"Lysosome",icon:"✦",hue:"#c084fc",descZh:"分解尸体碎屑，收益 ×2.5 并还原养分",descEn:"Digest corpses x2.5 and return nutrients",realZh:"真核细胞内的消化车间",realEn:"The digestive organelles of eukaryotic cells",eraMa:1500,branch:"真核",prereq:["mitochondria"],mods:{foodGain:1},flags:{digestion:!0},noteZh:"有了消化腔，尸体才第一次能变成下一代的养分。",noteEn:"With digestion, a corpse can finally become the next generation."},shell:{id:"shell",zh:"外壳",en:"Shell",icon:"⛨",hue:"#cbd5e1",descZh:"防御力 ×1.9",descEn:"Defense x1.9",realZh:"有孔虫与三叶虫的钙质外骨骼",realEn:"Calcified skeletons of foraminifera and trilobites",eraMa:550,branch:"动物",mods:{defense:1.9},noteZh:"第一副硬壳，把「被吃掉」变成了「大概率不会」。",noteEn:"The first armour: being eaten became merely unlikely."},toxin:{id:"toxin",zh:"刺丝泡",en:"Cnidocyte",icon:"☠",hue:"#ff8b3d",descZh:"攻击力 ×1.8",descEn:"Attack x1.8",realZh:"水母刺细胞里的刺丝囊",realEn:"Nematocysts inside jellyfish cnidocytes",eraMa:600,branch:"动物",mods:{attack:1.8},noteZh:"毒刺让刺胞动物成为海洋最早的有效捕食者。",noteEn:"Stinging cells made cnidarians the ocean’s first efficient predators."},capsule:{id:"capsule",zh:"荚膜",en:"Capsule",icon:"◍",hue:"#94a3b8",descZh:"防御 ×1.4，被吞食概率下降",descEn:"Defense x1.4, resists being swallowed",realZh:"肺炎链球菌的荚膜",realEn:"The capsule of Streptococcus pneumoniae",eraMa:2e3,branch:"细菌",mods:{defense:1.4,upkeep:1.08},noteZh:"一层多糖外衣，既挡抗体也是生物膜的底座。",noteEn:"A sugar coat that shields cells — and anchors the biofilm."},endospore:{id:"endospore",zh:"芽孢",en:"Endospore",icon:"◉",hue:"#facc15",descZh:"能量耗尽时进入休眠，免受天罚与瘟疫",descEn:"Dormant when exhausted; survives smite and plague",realZh:"芽孢杆菌内部那颗耐热核",realEn:"The heat-proof core inside a Bacillus cell",eraMa:2500,branch:"细菌",flags:{dormancy:!0},noteZh:"地球上最硬核的生存策略：睡上百万年再醒。",noteEn:"The toughest survival trick on Earth: sleep for a million years."},sensor:{id:"sensor",zh:"感应纤毛",en:"Sensor cilia",icon:"⌖",hue:"#93c5fd",descZh:"感知范围 ×1.6",descEn:"Sense range x1.6",realZh:"纤毛虫的化学感受纤毛",realEn:"Chemoreceptive cilia of ciliates",eraMa:1e3,branch:"真核",prereq:["cilia"],mods:{sense:1.6},noteZh:"有了感官，趋性行为才成为可能。",noteEn:"With senses, taxis — moving toward or away — become possible."},eyespot:{id:"eyespot",zh:"眼点",en:"Eyespot",icon:"◐",hue:"#e879f9",descZh:"朝最亮的方向游动",descEn:"Swims toward the brightest light",realZh:"团藻表面的感光眼点",realEn:"The light-sensitive eyespot of Volvox",eraMa:800,branch:"植物",prereq:["cilia"],flags:{phototaxis:!0},noteZh:"单细胞就能「看」光 —— 趋光性是多细胞形态学的第一步。",noteEn:"A single cell that can see light — the first step toward multicellular form."},magnetosome:{id:"magnetosome",zh:"磁性体",en:"Magnetosome",icon:"⌾",hue:"#f87171",descZh:"缓慢迁移到培养皿中层",descEn:"Slowly drifts to the mid layer of the dish",realZh:"磁性细菌体内的磁铁矿结晶链",realEn:"Chains of magnetite crystals inside magnetotactic bacteria",eraMa:3e3,branch:"细菌",flags:{magnetotaxis:!0},noteZh:"能感知地磁场的细菌 —— 它们连「上」和「下」都分得清。",noteEn:"Bacteria that read Earth’s magnetic field — they know up from down."},adhesion:{id:"adhesion",zh:"黏连蛋白",en:"Adhesin",icon:"⬡",hue:"#2cc9ff",descZh:"可以聚合成多细胞体",descEn:"Enables multicellularity",realZh:"团藻细胞表面的糖蛋白连接",realEn:"Glycoprotein junctions between Volvox cells",eraMa:900,branch:"多细胞起源",mods:{upkeep:1.1},flags:{adhesion:!0},noteZh:"多细胞生命的第一步，往往只是一颗细胞愿意牵着另一颗细胞。",noteEn:"The first step to multicellularity: one cell holding on to another."},quorum:{id:"quorum",zh:"群体感应",en:"Quorum sensing",icon:"⌘",hue:"#38bdf8",descZh:"群体共享能量的效率 ×1.8，感知半径 ×1.3",descEn:"Colony energy sharing x1.8, sense x1.3",realZh:"费氏弧菌的「分子投票」",realEn:"The molecular vote of Vibrio fischeri",eraMa:500,branch:"细菌",prereq:["adhesion"],mods:{sense:1.3},flags:{quorum:!0},noteZh:"细胞开始「数数」：只有人多时才行动。这是社会性的语言。",noteEn:"Cells learned to count themselves — the grammar of society."},myosin:{id:"myosin",zh:"收缩丝",en:"Myosin filament",icon:"⟿",hue:"#f472b6",descZh:"速度 ×1.35，能耗 ×1.3",descEn:"Speed x1.35, upkeep x1.3",realZh:"肌球蛋白构成的肌小节",realEn:"Myosin filaments in the sarcomere",eraMa:700,branch:"真核",prereq:["mitochondria"],mods:{speed:1.35,upkeep:1.3},flags:{dash:!0},noteZh:"能主动收缩的纤维 —— 从此细胞可以真正地「动」起来。",noteEn:"Contractile fibre: from here on, cells could really move."},meiosis:{id:"meiosis",zh:"减数分裂",en:"Meiosis",icon:"⧉",hue:"#a78bfa",descZh:"子代基因来自双亲重组，变异速度大幅提升",descEn:"Offspring genes recombine from two parents — faster adaptation",realZh:"真核生物的减数分裂与配子",realEn:"Meiosis and gametes in eukaryotes",eraMa:1e3,branch:"真核",prereq:["mitochondria"],flags:{meiosis:!0},noteZh:"有性生殖让基因在每一代都重新洗牌，演化速度从此翻倍。",noteEn:"Sex reshuffles the deck every generation, doubling evolutionary speed."},apoptosis:{id:"apoptosis",zh:"凋亡程序",en:"Apoptosis",icon:"☬",hue:"#fb7185",descZh:"群体成员可牺牲自己，把能量交给群体",descEn:"Members can sacrifice themselves for the colony",realZh:"多细胞生物的受控细胞死亡",realEn:"Programmed cell death in multicellular organisms",eraMa:1e3,branch:"多细胞起源",prereq:["adhesion"],flags:{apoptosis:!0},noteZh:"群体学会「牺牲部分成员」—— 合作的另一面。",noteEn:"Colonies learned to sacrifice members: the other side of cooperation."}},wr=Object.keys(qt),Jr={myxomycete:{id:"myxomycete",zh:"粘菌路线",en:"Myxomycete route",icon:"☂",hue:"#fbbf24",realZh:"黄色黏球菌（Myxococcus xanthus）",realEn:"Myxococcus xanthus",eraMa:900,requires:["adhesion","quorum"],descZh:"饥饿时，单细胞细菌聚成蠕动的菌毯，靠群体感应协调行动；资源耗尽后，群体长出子实体，分化出耐旱休眠孢子。",descEn:"When starved, single cells form a coordinated crawling mat; when food runs out the colony builds a fruiting body of dormant spores.",perkZh:"群体可在资源耗尽时形成子实体并播撒孢子，重新播种培养皿",perkEn:"Builds fruiting bodies that broadcast spores back into the dish"},volvocine:{id:"volvocine",zh:"团藻路线",en:"Volvocine route",icon:"◎",hue:"#34d399",realZh:"团藻（Volvox）",realEn:"Volvox",eraMa:800,requires:["adhesion","eyespot"],descZh:"数百个细胞嵌在果胶基质里形成空心球体，外层细胞负责游动，内层少数细胞专职生殖；群体整体转向光。",descEn:"Hundreds of cells in a hollow sphere: the outer shell swims, a few inner cells do nothing but reproduce; the sphere steers toward light.",perkZh:"群体整体游动与趋光，体内出现「体细胞 / 生殖细胞」分工",perkEn:"The colony swims as one body toward light, with germ-soma division"},animal:{id:"animal",zh:"动物路线",en:"Animal route",icon:"✦",hue:"#f472b6",realZh:"领鞭毛虫 → 海绵",realEn:"Choanoflagellate → sponge",eraMa:600,requires:["adhesion","tentacle"],descZh:"细胞之间出现电信号传导与集体迁移，群体像一只会变形的大生物一样整体移动。",descEn:"Cells coordinate by electrical signals and migrate collectively: the colony moves like one large, deforming animal.",perkZh:"群体获得神经样信号与集体迁移，能整体躲开捕食者",perkEn:"Neural-like signalling and collective migration; the colony dodges predators as one"}},Qf=Object.keys(Jr),Hl={goe:{id:"goe",zh:"大氧化事件",en:"Great Oxidation Event",icon:"☁",hue:"#e8c46a",eraMa:2400,descZh:"产氧光合铺开，氧气第一次在大气里积累。对当时的厌氧生命来说这是一场毒气浩劫，而呼吸氧气的细胞从此统治地球。",descEn:"Oxygenic photosynthesis floods the air. For anaerobic life it is a toxic catastrophe; for aerobes it is the beginning of dominance."},snowball:{id:"snowball",zh:"雪球地球",en:"Snowball Earth",icon:"❄",hue:"#7dd3fc",eraMa:700,descZh:"成冰纪把整个地球冻成一个白色的球。代谢放缓、食物锐减，能形成芽孢的谱系成为唯一的幸存者。",descEn:"An ice age freezes the planet white. Metabolism slows, food vanishes, and only spore-formers survive."},cambrian:{id:"cambrian",zh:"寒武纪爆发",en:"Cambrian Explosion",icon:"✺",hue:"#c084fc",eraMa:541,descZh:"多细胞生命一旦跨过那道门槛，身体蓝图就在极短时间内集中涌现 —— 触手、外骨骼、眼睛、消化腔同时登场。",descEn:"Once multicellularity clears the threshold, body plans arrive all at once: tentacles, skeletons, eyes, guts."}},Tv=qt,xg=wr,Qn={photosynthesizer:{zh:"光合者",en:"Phototroph",color:"#a2db3c",icon:"☀"},chemotroph:{zh:"化能者",en:"Chemotroph",color:"#f97316",icon:"⛭"},decomposer:{zh:"分解者",en:"Decomposer",color:"#c084fc",icon:"✦"},symbiote:{zh:"共生体",en:"Symbiote",color:"#2cc9ff",icon:"⬡"},hunter:{zh:"猎手",en:"Hunter",color:"#ff8b3d",icon:"☠"},gatherer:{zh:"采集者",en:"Gatherer",color:"#e8c46a",icon:"◈"}},Jf=Object.keys(Qn),Ti={core:{zh:"核心细胞",en:"Core cell",icon:"◉",color:"#ff6bd6",descZh:"群体代谢中枢：产能最高、行动最慢，向同伴输送能量",descEn:"Metabolic hub: highest output, slowest, shares energy with the colony"},worker:{zh:"采集工",en:"Worker",icon:"✦",color:"#a2db3c",descZh:"四处采集养分，把食物搬回群体共享",descEn:"Forages widely and ferries nutrients back to the colony"},guard:{zh:"守卫细胞",en:"Guard",icon:"⛨",color:"#ff8b3d",descZh:"富含毒素与外壳，死守群体边界并猎杀入侵者",descEn:"Toxin-laced defenders that hold the colony perimeter"},brooder:{zh:"繁殖体",en:"Brooder",icon:"❋",color:"#2cc9ff",descZh:"繁殖阈值更低，持续补充群体的新成员",descEn:"Lower breeding threshold, continuously replenishes the colony"},nurse:{zh:"养护细胞",en:"Nurse",icon:"♥",color:"#e8c46a",descZh:"从共享能量池抽取能量，修复受伤的同伴",descEn:"Draws from the shared pool to heal wounded mates"}},D2=Object.keys(Ti),I2={core:{speed:.55,size:1.35,defense:1.25,attack:1,food:.8,energy:1.35,breed:1.3,share:.3},worker:{speed:1.4,size:.95,defense:.9,attack:1,food:1.55,energy:1,breed:1,share:.9},guard:{speed:.85,size:1.1,defense:2,attack:1.6,food:.9,energy:1,breed:1.2,share:.2},brooder:{speed:.95,size:1.05,defense:1,attack:1.05,food:1.1,energy:1.15,breed:.6,share:.25},nurse:{speed:1,size:.9,defense:.95,attack:.9,food:1,energy:1.1,breed:1.1,share:.55}},Qe=(t,e)=>t+Math.random()*(e-t),Nt=(t,e,n)=>Math.max(e,Math.min(n,t)),Xn=(t,e,n,i)=>Math.hypot(t-n,e-i);class U2{constructor(e,n){We(this,"cell");We(this,"cols");We(this,"rows");We(this,"buckets");this.cell=n;const i=e*2+n*4;this.cols=Math.ceil(i/n),this.rows=this.cols,this.buckets=new Array(this.cols*this.rows);for(let r=0;r<this.buckets.length;r++)this.buckets[r]=[]}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length&&(this.buckets[e].length=0)}insert(e){const n=Nt(Math.floor((e.x+this.cols*this.cell*.5)/this.cell),0,this.cols-1),i=Nt(Math.floor((e.y+this.rows*this.cell*.5)/this.cell),0,this.rows-1);this.buckets[i*this.cols+n].push(e)}near(e,n){const i=Nt(Math.floor((e+this.cols*this.cell*.5)/this.cell),0,this.cols-1),r=Nt(Math.floor((n+this.rows*this.cell*.5)/this.cell),0,this.rows-1),s=[];for(let o=-1;o<=1;o++){const a=r+o;if(!(a<0||a>=this.rows))for(let l=-1;l<=1;l++){const c=i+l;if(c<0||c>=this.cols)continue;const u=this.buckets[a*this.cols+c];for(let d=0;d<u.length;d++)s.push(u[d])}}return s}}class F2{constructor(e,n){We(this,"cell");We(this,"cols");We(this,"rows");We(this,"slots");this.cell=n;const i=e*2+n*4;this.cols=Math.ceil(i/n),this.rows=this.cols,this.slots=new Array(this.cols*this.rows);for(let r=0;r<this.slots.length;r++)this.slots[r]=[]}clear(){for(let e=0;e<this.slots.length;e++)this.slots[e].length&&(this.slots[e].length=0)}insert(e){const n=Nt(Math.floor((e.x+this.cols*this.cell*.5)/this.cell),0,this.cols-1),i=Nt(Math.floor((e.y+this.rows*this.cell*.5)/this.cell),0,this.rows-1);this.slots[i*this.cols+n].push(e)}near(e,n){const i=Nt(Math.floor((e+this.cols*this.cell*.5)/this.cell),0,this.cols-1),r=Nt(Math.floor((n+this.rows*this.cell*.5)/this.cell),0,this.rows-1),s=[];for(let o=-1;o<=1;o++){const a=r+o;if(!(a<0||a>=this.rows))for(let l=-1;l<=1;l++){const c=i+l;if(c<0||c>=this.cols)continue;const u=this.slots[a*this.cols+c];for(let d=0;d<u.length;d++)s.push(u[d])}}return s}}let O2=1,k2=1;class z2{constructor(e){We(this,"agents",[]);We(this,"food",[]);We(this,"colonies",new Map);We(this,"events",[]);We(this,"history",[]);We(this,"effects",[]);We(this,"byId",new Map);We(this,"modCache",new Map);We(this,"tick",0);We(this,"config");We(this,"seenOrganelles",new Set);We(this,"seenMilestones",new Set);We(this,"seenRoles",new Set);We(this,"seenEarthEvents",new Set);We(this,"seenRoutes",new Set);We(this,"totalBirths",0);We(this,"totalDeaths",0);We(this,"totalKills",0);We(this,"totalCannibalKills",0);We(this,"apexId",null);We(this,"light",.8);We(this,"lightOverride",null);We(this,"nutrient",1);We(this,"temperature",.5);We(this,"oxygen",0);We(this,"glacial",0);We(this,"cambrian",0);We(this,"lastCannibalTick",-999);We(this,"colonyEventDone",!1);We(this,"agentGrid");We(this,"foodGrid");this.config={radius:900,initialCount:200,maxPopulation:550,foodPerTick:6.2,mutationRate:.75,...e},this.agentGrid=new U2(this.config.radius,60),this.foodGrid=new F2(this.config.radius,220),this.reset()}reset(){this.agents=[],this.food=[],this.colonies.clear(),this.events=[],this.history=[],this.effects=[],this.byId.clear(),this.modCache.clear(),this.tick=0,this.seenOrganelles.clear(),this.seenMilestones.clear(),this.seenRoles.clear(),this.seenEarthEvents.clear(),this.seenRoutes.clear(),this.totalBirths=0,this.totalDeaths=0,this.totalKills=0,this.totalCannibalKills=0,this.apexId=null,this.colonyEventDone=!1,this.nutrient=1,this.light=.8,this.lightOverride=null,this.temperature=.5,this.oxygen=0,this.glacial=0,this.cambrian=0;const e={hue:0,size:Qe(3.2,4.2),maxSpeed:Qe(.9,1.3),sense:Qe(55,80),aggression:Qe(.15,.45),efficiency:Qe(.4,.6),organelles:[]},n=Qe(0,360),i=[0,.33,.66].map(r=>(n+r*360+Qe(-9,9)+360)%360);for(let r=0;r<this.config.initialCount;r++){const s=(i[r%i.length]+Qe(-9,9)+360)%360;this.agents.push(this.spawnFrom({...e,hue:s,organelles:[]},void 0,!0))}for(let r=0;r<260;r++)this.spawnFood();this.log("milestone",`培养皿接种完成：${this.config.initialCount} 个原始单细胞生物，分属三条创始谱系`,`Inoculated: ${this.config.initialCount} primitive cells from three founder lineages`)}get innerRadius(){return this.config.radius-16}clampToDish(e,n,i=12){const r=this.innerRadius-i,s=Math.hypot(e,n);if(s<=r)return{x:e,y:n};const o=r/(s||1);return{x:e*o,y:n*o}}randomPos(e=30){const n=Qe(0,Math.PI*2),i=Math.sqrt(Math.random())*(this.innerRadius-e);return{x:Math.cos(n)*i,y:Math.sin(n)*i}}spawnFrom(e,n,i=!1){const r=i||!n?this.randomPos():{x:n.x+Qe(-14,14),y:n.y+Qe(-14,14)},s={id:O2++,x:r.x,y:r.y,vx:Qe(-1,1),vy:Qe(-1,1),genome:e,energy:n?n.energy*.45:Qe(50,70),age:0,generation:n?n.generation+1:0,kills:0,cannibalKills:0,children:0,colonyId:n?.colonyId??null,role:n?.role??null,strategy:yl(e),wander:Qe(0,Math.PI*2),alive:!0,flash:0,lastFeedTick:-999,dormant:!1};return this.byId.set(s.id,s),s}agentById(e){return this.byId.get(e)}spawnFood(e,n,i,r,s="organic"){let o,a;if(e===void 0||n===void 0){const l=this.randomPos(24);o=l.x,a=l.y}else{const l=this.clampToDish(e,n,18);o=l.x,a=l.y}this.food.push({x:o,y:a,energy:i??Qe(8,18),hue:r??(s==="detritus"?Qe(18,42):Qe(90,160)),kind:s,born:this.tick,dead:!1})}log(e,n,i){this.events.unshift({tick:this.tick,type:e,zh:n,en:i}),this.events.length>60&&this.events.pop()}godFeed(e,n){const i=this.clampToDish(e,n,40);for(let r=0;r<35;r++){const s=Qe(0,Math.PI*2),o=Math.sqrt(Math.random())*70;this.spawnFood(i.x+Math.cos(s)*o,i.y+Math.sin(s)*o,Qe(10,22))}this.effects.push({type:"feed",x:i.x,y:i.y,tick:this.tick}),this.log("god","上帝撒下了丰盛的食物","God scattered abundant food")}godSmite(e,n,i=110){let r=0;for(const s of this.agents)!s.alive||s.dormant||Xn(s.x,s.y,e,n)<i&&(s.alive=!1,s.energy=0,r++,this.totalDeaths++,this.spawnFood(s.x,s.y,s.genome.size*5,s.genome.hue,"detritus"),s.colonyId!==null&&this.colonies.get(s.colonyId)?.memberIds.delete(s.id));this.log("god",`天罚降临：${r} 个生物化为养分`,`Divine smite: ${r} organisms returned to nutrients`)}godMutate(e,n,i=150){let r=null,s=i;for(const a of this.agents){if(!a.alive)continue;const l=Xn(a.x,a.y,e,n);l<s&&(s=l,r=a)}if(!r)return;const o=bv(r.genome);if(o.length){const a=o[Math.floor(Math.random()*o.length)];r.genome.organelles.push(a),r.strategy=yl(r.genome),r.flash=1,this.seenOrganelles.add(a);const l=qt[a];this.effects.push({type:"mutate",x:r.x,y:r.y,tick:this.tick}),this.log("god",`上帝之手触碰了 #${r.id}，它立刻长出了「${l.zh}」`,`God touched #${r.id} — it instantly grew a ${l.en}`)}else r.genome.size=Nt(r.genome.size*1.3,2.4,9),this.log("god",`上帝之手让 #${r.id} 的体型暴涨`,`God made #${r.id} grow larger`)}godPlague(e=.4){const n=this.agents.filter(r=>r.alive&&!r.dormant);let i=0;for(const r of n)Math.random()<e&&(r.alive=!1,r.energy=0,i++,this.totalDeaths++,this.spawnFood(r.x,r.y,r.genome.size*5,r.genome.hue,"detritus"),r.colonyId!==null&&this.colonies.get(r.colonyId)?.memberIds.delete(r.id));this.effects.push({type:"plague",x:0,y:0,tick:this.tick}),this.log("god",`瘟疫席卷培养皿：${i} 个生物死亡，幸存者将占据空出的生态位`,`Plague: ${i} died; survivors inherit the empty niches`)}godAliens(e=18){const n=Qe(0,360);for(let i=0;i<e;i++){const r={hue:n+Qe(-10,10),size:Qe(3,6),maxSpeed:Qe(.8,1.6),sense:Qe(50,100),aggression:Qe(.1,.9),efficiency:Qe(.35,.7),organelles:[]};if(Math.random()<.6){const s=wr[Math.floor(Math.random()*wr.length)];r.organelles.push(s),this.seenOrganelles.add(s)}this.agents.push(this.spawnFrom(r,void 0,!0)),this.totalBirths++}this.effects.push({type:"alien",x:0,y:0,tick:this.tick}),this.log("god",`天外入侵：${e} 个携带未知基因的外来物种被投放到培养皿`,`Alien invasion: ${e} foreigners with unknown genes released`)}bundle(e){const n=this.modCache.get(e);if(n)return n;const i={...N2},r={};for(const o of e.organelles){const a=qt[o];if(a){if(a.mods)for(const l of Object.keys(a.mods)){const c=a.mods[l];l==="eatRange"||l==="attackRange"?i[l]=i[l]+c:i[l]=i[l]*c}a.flags&&Object.assign(r,a.flags)}}const s={mods:i,flags:r};return this.modCache.set(e,s),s}roleMods(e){return e.role?I2[e.role]:null}get effectiveTemperature(){return this.glacial>0?this.temperature*.3:this.temperature}speedOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.maxSpeed;i*=Math.sqrt(4/e.genome.size),i*=.75+this.effectiveTemperature*.5,i*=n.speed,e.colonyId!==null&&(i*=.75);const r=this.roleMods(e);return r&&(i*=r.speed),i}senseOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.sense*n.sense;return e.colonyId!==null&&(i*=1.15),i}attackOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.size*(.6+e.genome.aggression);i*=n.attack,e.genome.organelles.includes("toxin")&&(i*=1);const r=this.roleMods(e);return r&&(i*=r.attack),i}defenseOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.size*n.defense;const r=this.roleMods(e);return r&&(i*=r.defense),i}upkeepOf(e){const{mods:n}=this.bundle(e.genome);let i=.055+e.genome.size*.012+e.genome.maxSpeed*.02;i*=n.upkeep,i*=.7+this.effectiveTemperature*.8;const r=this.roleMods(e);return r&&(i/=r.energy),i}attackRangeOf(e){return this.bundle(e.genome).mods.attackRange}eatRangeOf(e){const{mods:n}=this.bundle(e.genome);return e.genome.size+5+(e.colonyId!==null?8:0)+n.eatRange}preyScore(e,n){if(e.colonyId!==null&&e.colonyId===n.colonyId)return 0;const i=this.attackOf(e),r=this.defenseOf(n);if(i>r*1.22&&e.genome.size>=n.genome.size*.97)return 1;if(e.strategy==="hunter"&&n.strategy==="hunter"&&i>r*.85){const o=e.genome.organelles.includes("toxin")?.99:1.01;if(e.genome.size>n.genome.size*o)return .85}return 0}step(){if(this.tick++,this.light=this.lightOverride??Nt(.55+.45*Math.cos(this.tick*.0015),.02,1),this.glacial>0&&this.glacial--,this.cambrian>0&&this.cambrian--,this.nutrient=Nt(this.nutrient,.35,2.4),this.food.length<520){let r=this.config.foodPerTick*(.5+.5*this.nutrient)*(this.glacial>0?.45:1);for(;r>0;)Math.random()<r&&this.spawnFood(),r-=1}const e=this.agents.filter(r=>r.alive),n=e.length;this.agentGrid.clear();for(const r of e)this.agentGrid.insert(r);this.foodGrid.clear();for(const r of this.food)this.foodGrid.insert(r);for(const r of e){if(r.age++,r.colonyId!==null&&r.genome.organelles.includes("adhesion")){const C=this.colonies.get(r.colonyId);C&&(C.differentiated||C.route)?r.strategy="symbiote":r.strategy==="symbiote"&&(r.strategy=yl(r.genome))}else r.strategy==="symbiote"&&(r.strategy=yl(r.genome));const s=r.genome,{mods:o,flags:a}=this.bundle(s),l=this.senseOf(r),c=this.speedOf(r);let u=null,d=1/0,f=0,p=null,v=1/0,y=null,m=1/0;for(const C of this.agentGrid.near(r.x,r.y)){if(C===r||!C.alive)continue;const T=Xn(r.x,r.y,C.x,C.y),A=l+this.attackRangeOf(r);if(T>A)continue;const P=this.preyScore(r,C);if(P>0){const H=1-Nt(r.energy/90,0,1),_=P<1?P+H*.14:P;(_>f||_===f&&T<d)&&(u=C,d=T,f=_)}else C.strategy==="hunter"&&r.strategy==="hunter"&&T<v&&(p=C,v=T);s.organelles.includes("adhesion")&&C.genome.organelles.includes("adhesion")&&Math.abs(C.genome.hue-s.hue)<34&&r.colonyId===null&&C.colonyId===null&&T<m&&(y=C,m=T)}let h=0,g=0;if(u){const C=f>=1?2.2:1.9;h+=(u.x-r.x)/(d+1)*C,g+=(u.y-r.y)/(d+1)*C}else if(p&&r.strategy==="hunter"){const C=1-Nt(r.energy/120,0,1);h+=(p.x-r.x)/(v+1)*(.9+C*1.1),g+=(p.y-r.y)/(v+1)*(.9+C*1.1)}else{const C=this.nearestFood(r.x,r.y,l);if(C){const T=C.d,A=.8+(1-Nt(r.energy/120,0,1));h+=(C.item.x-r.x)/(T+1)*A,g+=(C.item.y-r.y)/(T+1)*A}}if(a.phototaxis){const C=this.light;h+=.55*C,g+=.55*C}if(a.magnetotaxis){const C=Math.hypot(r.x,r.y)||1,A=(this.innerRadius*.55-C)*.0016;h+=r.x/C*A*60,g+=r.y/C*A*60}if(y&&(h+=(y.x-r.x)/(m+1)*1.1,g+=(y.y-r.y)/(m+1)*1.1),r.colonyId!==null){const C=this.colonies.get(r.colonyId);if(C){const T=this.colonyCenter(C),A=Xn(T.x,T.y,r.x,r.y)+1;A>26?(h+=(T.x-r.x)/A*1.4,g+=(T.y-r.y)/A*1.4):(h-=(T.x-r.x)/A*.5,g-=(T.y-r.y)/A*.5)}}if(r.role==="guard"&&r.colonyId!==null){const C=this.colonies.get(r.colonyId);if(C){const T=this.colonyCenter(C),A=Xn(T.x,T.y,r.x,r.y)+1,P=26+C.memberIds.size*1.6;A<P&&(h-=(T.x-r.x)/A*1.2,g-=(T.y-r.y)/A*1.2)}}r.wander+=Qe(-.35,.35),h+=Math.cos(r.wander)*.45,g+=Math.sin(r.wander)*.45;const x=Math.hypot(h,g)||1;r.vx=r.vx*.82+h/x*c*.18,r.vy=r.vy*.82+g/x*c*.18,r.x+=r.vx*c*2.2,r.y+=r.vy*c*2.2;const S=Math.hypot(r.x,r.y);if(S>this.innerRadius-12){const C=(this.innerRadius-12)/S;r.x*=C,r.y*=C,r.vx*=-.5,r.vy*=-.5}if(r.energy-=this.upkeepOf(r),a.photosynthesis&&(r.energy+=.42*this.light*o.energyGain),a.chemosynthesis&&(r.energy+=.13*o.energyGain),r.genome.organelles.includes("aerobe")&&(r.energy+=.16*this.oxygen*o.energyGain),r.colonyId!==null){const C=this.colonies.get(r.colonyId);if(C&&(r.energy+=.03*C.memberIds.size,r.role==="core"&&C.energyPool>0)){const T=Math.min(C.energyPool,.06);C.energyPool-=T,r.energy+=T}}a.dormancy&&r.energy<6&&!r.dormant?(r.dormant=!0,r.energy=0):r.dormant&&r.energy>14&&(r.dormant=!1),r.flash*=.9}for(const r of e){if(!r.alive||r.dormant)continue;const{mods:s,flags:o}=this.bundle(r.genome),a=this.eatRangeOf(r);let l=null,c=a;for(const y of this.foodGrid.near(r.x,r.y)){if(y.dead)continue;const m=Xn(y.x,y.y,r.x,r.y);m<c&&(c=m,l=y)}if(!l)continue;const u=l,d=this.roleMods(r),f=s.foodGain*(d?d.food:1),p=o.digestion;let v=u.energy*r.genome.efficiency*f;if(u.kind==="detritus"?p?(v*=2.6,this.nutrient=Nt(this.nutrient+u.energy*.018,.35,2.4)):v*=.45:p&&(v*=.8),r.energy+=v,r.flash=1,r.lastFeedTick=this.tick,r.colonyId!==null&&d&&d.share>0){const y=this.colonies.get(r.colonyId);if(y){const m=r.genome.organelles.includes("quorum")?1.8:1;y.energyPool=Math.min(120,y.energyPool+v*d.share*.25*m)}}u.dead=!0}this.food.some(r=>r.dead)&&(this.food=this.food.filter(r=>!r.dead));const i=new Set;for(const r of e){if(!r.alive||i.has(r.id))continue;const s=this.attackRangeOf(r);for(const o of this.agentGrid.near(r.x,r.y)){if(!o.alive||i.has(o.id)||o.id===r.id)continue;const a=Xn(r.x,r.y,o.x,o.y);if(a>r.genome.size+o.genome.size+3+s)continue;const l=this.preyScore(r,o);if(l>0){this.kill(r,o,i,l<1);break}const c=this.preyScore(o,r);if(c>0){this.kill(o,r,i,c<1);break}const u=(o.x-r.x)/(a+.01),d=(o.y-r.y)/(a+.01);r.vx-=u*.6,r.vy-=d*.6,o.vx+=u*.6,o.vy+=d*.6,r.energy-=.3,o.energy-=.3}}for(const r of e){if(!r.alive||r.role!=="nurse"||r.colonyId===null)continue;const s=this.colonies.get(r.colonyId);if(!(!s||s.energyPool<=1))for(const o of this.agentGrid.near(r.x,r.y)){if(!o.alive||o.colonyId!==r.colonyId||o===r||o.energy>110)continue;const a=Math.min(s.energyPool,1.6);s.energyPool-=a,o.energy+=a,o.flash=.6;break}}for(const r of e)if(!(!r.alive||r.colonyId!==null)&&r.genome.organelles.includes("adhesion"))for(const s of this.agentGrid.near(r.x,r.y)){if(!s.alive||s.colonyId!==null||s.id===r.id||!s.genome.organelles.includes("adhesion")||Math.abs(s.genome.hue-r.genome.hue)>25||Xn(r.x,r.y,s.x,s.y)>24)continue;const o={id:k2++,memberIds:new Set([r.id,s.id]),hue:r.genome.hue,born:this.tick,rounds:0,roles:new Map,energyPool:0,differentiated:!1,foundedGeneration:Math.max(r.generation,s.generation),totalKills:0,route:null,routeBorn:0,fruiting:0,swarmX:0,swarmY:0};this.colonies.set(o.id,o),r.colonyId=o.id,s.colonyId=o.id,this.colonyEventDone||(this.colonyEventDone=!0,this.log("colony","里程碑：首个多细胞聚合体诞生！细胞们开始协同合作","Milestone: the first multicellular colony is born — cells now cooperate"));break}for(const r of this.colonies.values()){const s=this.colonyCenter(r);for(const o of e)!o.alive||o.colonyId!==null||o.genome.organelles.includes("adhesion")&&(Math.abs(o.genome.hue-r.hue)>34||Xn(o.x,o.y,s.x,s.y)<40+r.memberIds.size*4&&r.memberIds.size<14&&(r.memberIds.add(o.id),o.colonyId=r.id))}this.updateColonyDifferentiation(),this.updateColonyRoutes();for(const r of e){if(!r.alive)continue;const s=this.roleMods(r),o=(100+r.genome.size*8)*(s?s.breed:1),a=n+this.totalBirths-this.totalDeaths>=this.config.maxPopulation;if(r.energy>o&&!a){const l=this.reproduceGenome(r),c=this.spawnFrom(l,r);c.colonyId=null,c.role=null,r.energy*=.55,r.children++,this.totalBirths++,this.agents.push(c);const u=l.organelles.find(d=>!r.genome.organelles.includes(d));if(u&&!this.seenOrganelles.has(u)){this.seenOrganelles.add(u);const d=qt[u];this.log("organelle",`进化突破！#${c.id} 在繁殖中突变出「${d.zh}」—— ${d.descZh}`,`Breakthrough! #${c.id} mutated a ${d.en} — ${d.descEn}`)}if(r.colonyId!==null){const d=this.colonies.get(r.colonyId);d&&d.memberIds.size<14&&l.organelles.includes("adhesion")&&(c.colonyId=d.id,d.memberIds.add(c.id),c.role=r.role,r.role&&d.roles.set(c.id,r.role))}}}for(const r of this.agents)if(r.alive&&!r.dormant&&(r.energy<=0||r.age>2600)){if(r.genome.organelles.includes("apoptosis")&&r.colonyId!==null&&r.energy<=0){const o=this.colonies.get(r.colonyId);o&&(o.energyPool=Math.min(120,o.energyPool+18),this.log("differentiate",`细胞 #${r.id} 启动凋亡程序，把最后的能量留给了群体`,`Cell #${r.id} triggered apoptosis, surrendering its energy to the colony`))}if(r.alive=!1,r.energy=0,this.totalDeaths++,this.spawnFood(r.x,r.y,r.genome.size*6,r.genome.hue,"detritus"),r.colonyId!==null){const o=this.colonies.get(r.colonyId);o?.memberIds.delete(r.id),o?.roles.delete(r.id)}}for(const[r,s]of this.colonies)if(s.memberIds.size<3){for(const o of s.memberIds){const a=this.byId.get(o);a&&(a.colonyId=null,a.role=null)}s.memberIds.clear(),this.colonies.delete(r)}for(const r of this.agents)r.alive&&(r.colonyId===null?r.role=null:this.colonies.has(r.colonyId)||(r.colonyId=null,r.role=null));if(this.agents.length>4e3&&(this.agents=this.agents.filter(r=>r.alive)),this.updateEarthEvents(),this.tick%10===0){const r=this.agents.filter(u=>u.alive),s=r.length,o=s?r.reduce((u,d)=>u+d.generation,0)/s:0,a=r.filter(u=>u.genome.organelles.length>0).length,l=r.reduce((u,d)=>Math.max(u,d.kills),0);this.history.push({tick:this.tick,population:s,avgGeneration:o,colonies:this.colonies.size,organelleRate:s?a/s:0,topKills:l,composition:this.composition()}),this.history.length>400&&this.history.shift();for(const u of[100,500,1e3,2500,5e3,1e4])this.tick>=u&&!this.seenMilestones.has(u)&&(this.seenMilestones.add(u),this.log("milestone",`第 ${u} 代际时刻：种群 ${s}，平均世代 ${o.toFixed(1)}，细胞器普及率 ${((s?a/s:0)*100).toFixed(0)}%`,`Tick ${u}: population ${s}, avg generation ${o.toFixed(1)}, organelle adoption ${((s?a/s:0)*100).toFixed(0)}%`));const c=r.reduce((u,d)=>d.kills>=3&&(!u||d.kills>u.kills)?d:u,null);if(c&&c.id!==this.apexId){this.apexId=c.id;const u=Qn[c.strategy];this.log("apex",`新的顶级掠食者登基：#${c.id}（${u.zh}，猎杀 ${c.kills}，第 ${c.generation} 代）`,`New apex predator: #${c.id} (${u.en}, ${c.kills} kills, gen ${c.generation})`)}s===0&&this.log("extinction","大灭绝：培养皿中所有生命已消亡","Extinction: all life in the dish has perished")}}reproduceGenome(e){const n=H2(e.genome,this.effectiveMutationRate());if(!e.genome.organelles.includes("meiosis"))return n;const i=this.agents.filter(l=>l.alive&&l.id!==e.id&&l.strategy===e.strategy);if(!i.length)return n;const s=i[Math.floor(Math.random()*i.length)].genome,o=(l,c)=>Math.random()<.5?l:c,a={hue:o(n.hue,s.hue),size:o(n.size,s.size),maxSpeed:o(n.maxSpeed,s.maxSpeed),sense:o(n.sense,s.sense),aggression:o(n.aggression,s.aggression),efficiency:o(n.efficiency,s.efficiency),organelles:o(n.organelles,s.organelles).slice()};return a.organelles=B2(a.organelles),a}effectiveMutationRate(){return this.config.mutationRate*(this.cambrian>0?2.5:1)}updateColonyRoutes(){for(const e of this.colonies.values()){const n=[...e.memberIds].map(r=>this.byId.get(r)).filter(r=>!!(r&&r.alive));if(n.length<4)continue;const i=new Set;for(const r of n)for(const s of r.genome.organelles)i.add(s);if(!e.route)for(const r of Qf){const s=Jr[r];if(!s.requires.every(a=>i.has(a)))continue;e.route=r,e.routeBorn=this.tick,this.seenRoutes.add(r);const o=this.colonyCenter(e);this.effects.push({type:"earth",x:o.x,y:o.y,tick:this.tick}),this.log("route",`演化里程碑：多细胞体走出「${s.zh}」—— ${s.perkZh}（现实原型：${s.realZh}）`,`Milestone: the colony follows the ${s.en} — ${s.perkEn} (real analogue: ${s.realEn})`);break}if(e.route==="myxomycete"){const r=e.energyPool<10||this.food.length<60;e.fruiting=Nt(e.fruiting+(r?.006:-.002),0,1);const s=this.agents.filter(a=>a.alive).length,o=n.length>=6&&s<this.config.maxPopulation*.55;if(e.fruiting>=1&&o){e.fruiting=.4;const a=this.colonyCenter(e),l=5;for(let c=0;c<l;c++){const u=Qe(0,Math.PI*2),d=Qe(30,120),f={...n[0].genome,organelles:[...n[0].genome.organelles]},p=this.spawnFrom(f,void 0,!0);p.x=a.x+Math.cos(u)*d,p.y=a.y+Math.sin(u)*d,p.colonyId=null,this.agents.push(p),this.totalBirths++}this.effects.push({type:"spore",x:a.x,y:a.y,tick:this.tick}),this.log("route","子实体成熟：粘菌群落播撒了休眠孢子","Fruiting body matured: the myxomycete colony released spores")}else e.fruiting>=1&&(e.fruiting=.92)}else if(e.route==="volvocine")e.swarmX=.6,e.swarmY=.6;else if(e.route==="animal"){let r=null,s=1/0;for(const o of n)for(const a of this.agentGrid.near(o.x,o.y)){if(!a.alive||a.strategy!=="hunter"||a.colonyId===e.id)continue;const l=Xn(a.x,a.y,o.x,o.y);l<s&&(s=l,r=a)}if(r&&s<260){const o=this.colonyCenter(e),a=Xn(o.x,o.y,r.x,r.y)||1;e.swarmX=(o.x-r.x)/a*.9,e.swarmY=(o.y-r.y)/a*.9}else e.swarmX*=.96,e.swarmY*=.96}}}updateEarthEvents(){if(!this.seenEarthEvents.has("goe")){const e=this.agents.filter(r=>r.alive),n=e.filter(r=>r.genome.organelles.includes("chloroplast")).length;if((e.length?n/e.length:0)>=.12&&e.length>=40&&this.tick>260){this.seenEarthEvents.add("goe");let r=0;for(const o of e)!o.genome.organelles.includes("aerobe")&&!o.genome.organelles.includes("mitochondria")&&Math.random()<.62&&(o.alive=!1,o.energy=0,r++,this.totalDeaths++,this.spawnFood(o.x,o.y,o.genome.size*5,o.genome.hue,"detritus"),o.colonyId!==null&&this.colonies.get(o.colonyId)?.memberIds.delete(o.id));this.oxygen=1,this.effects.push({type:"earth",x:0,y:0,tick:this.tick});const s=Hl.goe;this.log("earth",`【${s.zh}】${s.descZh} —— ${r} 个厌氧生物在毒气中灭绝`,`[${s.en}] ${s.descEn} — ${r} anaerobes perished in the poison`)}}if(!this.seenEarthEvents.has("snowball")&&this.seenEarthEvents.has("goe")){const e=this.agents.filter(n=>n.alive);if(this.tick>1400&&e.length>=120){this.seenEarthEvents.add("snowball"),this.glacial=420;let n=0;for(const r of e){const s=r.genome.organelles.includes("endospore");!s&&Math.random()<.42?(r.alive=!1,r.energy=0,n++,this.totalDeaths++,this.spawnFood(r.x,r.y,r.genome.size*4,r.genome.hue,"detritus"),r.colonyId!==null&&this.colonies.get(r.colonyId)?.memberIds.delete(r.id)):s&&(r.dormant=!0,r.energy=0)}this.effects.push({type:"earth",x:0,y:0,tick:this.tick});const i=Hl.snowball;this.log("earth",`【${i.zh}】${i.descZh} —— ${n} 个细胞冻毙，能形成芽孢的谱系进入休眠`,`[${i.en}] ${i.descEn} — ${n} cells froze; spore-formers went dormant`)}}if(!this.seenEarthEvents.has("cambrian")&&this.seenRoutes.size>0){this.seenEarthEvents.add("cambrian"),this.cambrian=320,this.effects.push({type:"earth",x:0,y:0,tick:this.tick});const e=Hl.cambrian;this.log("earth",`【${e.zh}】${e.descZh}`,`[${e.en}] ${e.descEn}`)}}updateColonyDifferentiation(){for(const e of this.colonies.values()){this.tick-e.born>=60&&(e.rounds=Math.floor((this.tick-e.born)/60));const n=[...e.memberIds].map(i=>this.byId.get(i)).filter(i=>!!(i&&i.alive));if(n.length<3){for(const i of n)i.role=null;e.roles.clear(),e.differentiated=!1;continue}if(e.differentiated)new Set(n.map(r=>r.role).filter(Boolean)).size<=1&&e.rounds>=1&&this.assignRoles(e,n);else{if(e.rounds<1||n.length<4)continue;this.assignRoles(e,n),e.differentiated=!0;const i=[...e.roles.values()].map(r=>Ti[r].zh);this.log("differentiate",`多细胞体完成功能分化：${i.join("、")} —— 细胞们不再各干各的`,`Multicellular differentiation: ${[...e.roles.values()].map(r=>Ti[r].en).join(", ")} — cells now specialise`)}}}assignRoles(e,n){e.roles.clear();for(const a of n)a.role=null;const i=(a,l)=>{const c=a.genome;let u=Math.random()*.6;switch(l){case"core":u+=(c.organelles.includes("chloroplast")?2.4:0)+c.efficiency*1.4-c.aggression*.8;break;case"guard":u+=(c.organelles.includes("toxin")?2.2:0)+(c.organelles.includes("shell")?1.6:0)+(c.organelles.includes("tentacle")?1.2:0)+c.aggression*1.6;break;case"brooder":u+=c.efficiency*1.5+(c.organelles.includes("mitochondria")?1.1:0)-c.aggression;break;case"nurse":u+=(c.organelles.includes("sensor")?1.5:0)+c.efficiency*1.2-c.size*.08;break;case"worker":u+=(c.organelles.includes("flagellum")?1.6:0)+c.maxSpeed*.8-c.aggression;break}return u},r=n.length,s={core:r>=6?1:0,nurse:r>=5?1:0,guard:r>=4?1:0,brooder:r>=4?1:0,worker:Math.max(1,r-3)};r<6&&(s.core=1);const o=new Set;for(const a of D2){const l=s[a];if(l<=0)continue;const c=n.filter(u=>!o.has(u.id)).sort((u,d)=>i(d,a)-i(u,a));for(let u=0;u<l&&u<c.length;u++){const d=c[u];d.role=a,o.add(d.id),e.roles.set(d.id,a),this.seenRoles.add(a)}}for(const a of n)o.has(a.id)||(a.role="worker",e.roles.set(a.id,"worker"),this.seenRoles.add("worker"))}nearestFood(e,n,i){let r=null,s=i;for(const o of this.foodGrid.near(e,n)){if(o.dead)continue;const a=Xn(o.x,o.y,e,n);a<s&&(s=a,r=o)}return r?{item:r,d:s}:null}colonySize(e){return e===null?0:this.colonies.get(e)?.memberIds.size??0}colonyCenter(e){let n=0,i=0,r=0;for(const s of e.memberIds){const o=this.byId.get(s);o&&o.alive&&(n+=o.x,i+=o.y,r++)}return r?{x:n/r,y:i/r}:{x:0,y:0}}composition(){const e={photosynthesizer:0,chemotroph:0,decomposer:0,symbiote:0,hunter:0,gatherer:0};let n=0;for(const i of this.agents)i.alive&&(e[i.strategy]++,n++);if(n>0)for(const i of Jf)e[i]=e[i]/n;return e}compositionCounts(){const e={photosynthesizer:0,chemotroph:0,decomposer:0,symbiote:0,hunter:0,gatherer:0};for(const n of this.agents)n.alive&&e[n.strategy]++;return e}kill(e,n,i,r){const s=n.energy;if(n.alive=!1,n.energy=0,i.add(n.id),e.energy+=s*.45*e.genome.efficiency+n.genome.size*2.4,e.energy=Math.min(e.energy,400),e.kills++,e.flash=1,e.genome.size=Nt(e.genome.size+.06,2.4,9),this.totalKills++,this.totalDeaths++,this.spawnFood(n.x,n.y,n.genome.size*5,n.genome.hue,"detritus"),r&&(e.cannibalKills++,this.totalCannibalKills++,this.lastCannibalTick=this.tick,this.effects.push({type:"cannibal",x:n.x,y:n.y,tick:this.tick}),this.log("cannibal",`食同族：猎手 #${e.id} 吞噬了同族 #${n.id}`,`Cannibalism: hunter #${e.id} devoured its own kind #${n.id}`)),n.colonyId!==null){const o=this.colonies.get(n.colonyId);o?.memberIds.delete(n.id),o?.roles.delete(n.id)}}consumeEffects(){if(!this.effects.length)return[];const e=this.effects;return this.effects=[],e}fastForward(e,n=!1){const i=this.events.length;let r=0;for(;r<e&&(this.step(),!(n&&this.events.length>i||this.agents.every(s=>!s.alive)));r++);return r}}function yl(t){const e=n=>t.organelles.includes(n);return t.aggression>.38||e("toxin")||e("tentacle")?"hunter":e("lysosome")?"decomposer":e("chloroplast")?"photosynthesizer":e("chemosynthesis")?"chemotroph":"gatherer"}function bv(t){return wr.filter(e=>{if(t.organelles.includes(e))return!1;const n=qt[e].prereq;return n?n.every(i=>t.organelles.includes(i)):!0})}function B2(t){const e=new Set;for(let n=0;n<4;n++){let i=!1;for(const r of t){if(e.has(r))continue;const s=qt[r].prereq;(!s||s.every(o=>e.has(o)))&&(e.add(r),i=!0)}if(!i)break}return t.filter(n=>e.has(n))}function H2(t,e){const n={hue:(t.hue+Qe(-14,14)+360)%360,size:Nt(t.size+Qe(-.35,.45),2.4,9),maxSpeed:Nt(t.maxSpeed+Qe(-.15,.15),.4,3.2),sense:Nt(t.sense+Qe(-8,8),30,220),aggression:Nt(t.aggression+Qe(-.08,.08),0,1),efficiency:Nt(t.efficiency+Qe(-.05,.05),.2,.95),organelles:[...t.organelles]},i=bv(n);if(Math.random()<e*.52&&n.organelles.length<7&&i.length)n.organelles.push(G2(i,n.organelles));else if(Math.random()<e*.005&&n.organelles.length>1){const r=n.organelles[Math.floor(Math.random()*n.organelles.length)];n.organelles=V2(n.organelles,r)}return n}function G2(t,e){const n=t.map(s=>{const o=wr.filter(u=>qt[u].prereq?.includes(s)).length,a=wr.filter(u=>qt[u].prereq?.includes(s)&&e.includes(u)).length,l=Qf.filter(u=>Jr[u].requires.includes(s)).length,c=qt[s].branch==="真核"||qt[s].branch==="多细胞起源"?2:0;return 1+o*1.8+a*3.2+l*4.2+c}),i=n.reduce((s,o)=>s+o,0);let r=Math.random()*i;for(let s=0;s<t.length;s++)if(r-=n[s],r<=0)return t[s];return t[t.length-1]}function V2(t,e){const n=new Set([e]);let i=!0;for(;i;){i=!1;for(const s of t){if(n.has(s))continue;const o=qt[s].prereq;o&&o.some(a=>n.has(a))&&(n.add(s),i=!0)}}const r=t.filter(s=>!n.has(s));return r.length?r:[e]}const Ln=9.6,j2=5.4,vg=1,Ni=900,_g=520,yg=520,Mg=28,W2={myxomycete:Jr.myxomycete.hue,volvocine:Jr.volvocine.hue,animal:Jr.animal.hue},Sg=`
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
`;function X2({engine:t,toolRef:e,selectedId:n,onSelect:i}){const r=be.useRef(null),s=be.useRef(n),o=be.useRef(i);return s.current=n,o.current=i,be.useEffect(()=>{const a=r.current;if(!a)return;const l=Ln/t.config.radius,c=new o2({antialias:!0,alpha:!1});c.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),c.setSize(a.clientWidth,a.clientHeight),c.toneMapping=jx,c.toneMappingExposure=1.05,c.outputColorSpace=$n,c.shadowMap.enabled=!0,c.shadowMap.type=Gx,a.appendChild(c.domElement);const u=new _v,d=new ze(727583),f=new ze(263949),p=d.clone();u.background=p;const v=new $f(727583,34,78);u.fog=v;const y=new Dn(46,a.clientWidth/a.clientHeight,.1,220),m=parseFloat(new URLSearchParams(window.location.search).get("cam")??""),h=Number.isFinite(m)?Math.max(.12,Math.min(2,m)):1;y.position.set(0,19.5*h,20*h);const g=new v2(y,c.domElement);g.enableDamping=!0,g.dampingFactor=.075,g.minDistance=5,g.maxDistance=58,g.maxPolarAngle=Math.PI*.49,g.target.set(0,0,0),g.update();const x=new Ld(c),S=x.fromScene(new L2,.04);u.environment=S.texture,u.environmentIntensity=.42;const C=new d2(10479871,397324,.4);u.add(C);const T=new hg(16774888,1.1);T.position.set(11,21,8),T.castShadow=!0,T.shadow.mapSize.set(768,768),T.shadow.camera.near=1,T.shadow.camera.far=90,T.shadow.camera.left=-30,T.shadow.camera.right=30,T.shadow.camera.top=30,T.shadow.camera.bottom=-30,T.shadow.bias=-9e-4,T.shadow.normalBias=.03,T.shadow.radius=3,u.add(T);const A=new hg(2935295,.75);A.position.set(-13,9,-11),u.add(A);const P=new Ev(10672956,.35,40);P.position.set(0,5,0),u.add(P);const H=$2(768);H.colorSpace=$n,H.anisotropy=c.capabilities.getMaxAnisotropy();const _=new Jt({map:H,color:16777215,roughness:.34,metalness:.04,envMapIntensity:.7}),w=new ot(new _c(Ln,160),_);w.rotation.x=-Math.PI/2,w.position.y=.001,w.receiveShadow=!0,u.add(w);const O=Y2(512),k=new ot(new _c(Ln*.995,128),new Zr({map:O,transparent:!0,opacity:.32,blending:Gs,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.position.set(-1.6,.012,-2.2),u.add(k);const X=new ot(new to(Ln+.55,Ln+.75,.7,128),new Jt({color:330252,roughness:.92,metalness:.04}));X.position.y=-.42,X.receiveShadow=!0,u.add(X);const Q=new Jt({color:13627135,roughness:.05,metalness:.05,transparent:!0,opacity:.17,side:In,depthWrite:!1,envMapIntensity:2.6}),V=new ot(new to(Ln+.26,Ln+.26,1.65,160,1,!0),Q);V.position.y=.8,V.renderOrder=3,u.add(V);const Z=new h2({color:15267839,roughness:.04,metalness:.06,transparent:!0,opacity:.42,side:In,depthWrite:!1,envMapIntensity:2.8,clearcoat:1,clearcoatRoughness:.03}),N=new ot(new yc(Ln+.26,.075,16,160),Z);N.rotation.x=Math.PI/2,N.position.y=1.62,N.renderOrder=4,u.add(N);const K=new ot(new to(Ln+.26,Ln+.26,.07,160),Q);K.position.y=-.03,K.renderOrder=2,u.add(K);const ee=new jr(1,8,6),ce=new Jt({color:16777215,roughness:.06,metalness:.1,transparent:!0,opacity:.42,envMapIntensity:2.4}),ne=new Wn(ee,ce,44),J=new Gt;for(let Ge=0;Ge<44;Ge++){const Be=Math.random()*Math.PI*2,Qt=.15+Math.random()*1.35,Ut=.018+Math.random()*.045;J.position.set(Math.cos(Be)*(Ln+.2),Qt,Math.sin(Be)*(Ln+.2)),J.scale.setScalar(Ut),J.updateMatrix(),ne.setMatrixAt(Ge,J.matrix)}ne.instanceMatrix.needsUpdate=!0,u.add(ne);const j=new js(1,2),re=new Float32Array(Ni),de=new Float32Array(Ni),pe=new Float32Array(Ni),Fe=new Float32Array(Ni),Pe=new Float32Array(Ni*3),Ke=new Float32Array(Ni);j.setAttribute("aSeed",new nr(re,1)),j.setAttribute("aFlags",new nr(de,1)),j.setAttribute("aFlags2",new nr(Ke,1)),j.setAttribute("aFlash",new nr(pe,1)),j.setAttribute("aRole",new nr(Fe,1)),j.setAttribute("aColor",new nr(Pe,3));const Je=new Jt({color:16777215,roughness:.46,metalness:.02,envMapIntensity:.42});Je.onBeforeCompile=Ge=>{Ge.uniforms.uTime={value:0},Je.userData.shader=Ge,Ge.vertexShader=Ge.vertexShader.replace("#include <common>",`
            #include <common>
            ${Sg}
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
          `).replace("#include <begin_vertex>",`
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
          `),Ge.fragmentShader=Ge.fragmentShader.replace("#include <common>",`
            #include <common>
            ${Sg}
            varying vec3 vLocal;
            varying vec3 vCellColor;
            varying float vNoise;
            varying float vFlags;
            varying float vFlags2;
            varying float vFlash;
            varying float vRole;
          `).replace("#include <color_fragment>",`
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
          `).replace("#include <emissivemap_fragment>",`
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
          `)};const ke=new Wn(j,Je,Ni);ke.instanceMatrix.setUsage(ni),ke.castShadow=!0,ke.receiveShadow=!1,ke.frustumCulled=!1,u.add(ke);const L=new Wn(new js(1.42,1),new Jt({color:14676223,roughness:.14,metalness:.14,transparent:!0,opacity:.26,side:In,depthWrite:!1,envMapIntensity:2.2}),320);L.instanceMatrix.setUsage(ni),L.frustumCulled=!1,L.renderOrder=1,u.add(L);const Rt=new Wn(new ra(.1,1.9,6),new Jt({color:13497343,roughness:.5,transparent:!0,opacity:.5}),420);Rt.instanceMatrix.setUsage(ni),Rt.frustumCulled=!1,u.add(Rt);const He=new Wn(new ra(.1,1.7,6),new Jt({color:16756874,emissive:16734780,emissiveIntensity:.35,roughness:.4,transparent:!0,opacity:.92}),1400);He.instanceMatrix.setUsage(ni),He.frustumCulled=!1,u.add(He);const Ye=new Wn(new ra(.028,.52,4),new Jt({color:14153727,roughness:.5,transparent:!0,opacity:.55}),1200);Ye.instanceMatrix.setUsage(ni),Ye.frustumCulled=!1,u.add(Ye);const Ae=new Wn(new jr(1,18,12),new Jt({color:16498468,emissive:9584654,emissiveIntensity:.6,roughness:.5}),40);Ae.instanceMatrix.setUsage(ni),Ae.frustumCulled=!1,u.add(Ae);const it=new Wn(new jr(1,24,16),new Jt({color:3462041,emissive:417606,emissiveIntensity:.55,transparent:!0,opacity:.28,roughness:.1,depthWrite:!1}),40);it.instanceMatrix.setUsage(ni),it.frustumCulled=!1,it.renderOrder=1,u.add(it);const Ce=new Wn(new js(1,2),new Jt({color:16020150,emissive:8591427,emissiveIntensity:.5,transparent:!0,opacity:.34,roughness:.35,depthWrite:!1}),40);Ce.instanceMatrix.setUsage(ni),Ce.frustumCulled=!1,Ce.renderOrder=1,u.add(Ce);const R=new Wn(new jr(1,8,6),new Jt({color:12448378,emissive:5212706,emissiveIntensity:.75,roughness:.55}),_g);R.instanceMatrix.setUsage(ni),R.frustumCulled=!1,u.add(R);const E=new Wn(new js(1,0),new Jt({color:7031347,roughness:.95,metalness:0}),yg);E.instanceMatrix.setUsage(ni),E.frustumCulled=!1,u.add(E);const z=3e3,q=new Float32Array(z*6),ie=new Float32Array(z*6),Y=new _n;Y.setAttribute("position",new On(q,3)),Y.setAttribute("color",new On(ie,3));const Te=new u2(Y,new yv({vertexColors:!0,transparent:!0,opacity:.5,blending:Gs,depthWrite:!1}));Te.frustumCulled=!1,u.add(Te);const le=new Wn(new jr(1,12,8),new Zr({color:16777215,transparent:!0,opacity:.09,blending:Gs,depthWrite:!1}),120);le.instanceMatrix.setUsage(ni),le.frustumCulled=!1,le.renderOrder=0,u.add(le);const ue=new ot(new yc(1,.055,12,64),new Zr({color:2935295,transparent:!0,opacity:.95}));ue.rotation.x=Math.PI/2,ue.visible=!1,u.add(ue);const et=new qf(.86,1,72),oe=[];for(let Ge=0;Ge<Mg;Ge++){const Be=new Zr({color:16777215,transparent:!0,opacity:0,side:In,depthWrite:!1,blending:Gs}),Qt=new ot(et,Be);Qt.rotation.x=-Math.PI/2,Qt.visible=!1,u.add(Qt),oe.push({mesh:Qt,mat:Be,t0:0,life:1,scale:1})}let _e=0;const De=(Ge,Be,Qt,Ut,gi)=>{const Pt=oe[_e];_e=(_e+1)%Mg,Pt.mesh.position.set(Ge,.09,Be),Pt.mesh.visible=!0,Pt.mat.color.setHex(Qt),Pt.t0=performance.now(),Pt.life=gi,Pt.scale=Ut},Ue={feed:{color:10672956,scale:2.2,life:1.1},smite:{color:16747325,scale:4.4,life:1.3},mutate:{color:13073919,scale:1.8,life:1},cannibal:{color:16727406,scale:2.6,life:1.2},plague:{color:16735067,scale:12,life:1.8},alien:{color:5099745,scale:10,life:1.8},spore:{color:16498468,scale:3.2,life:1.4},earth:{color:15254634,scale:16,life:2.4}},ye=new m2,qe=new Ne,Oe=new Fi(new D(0,1,0),0),st=new D;let I=0,xe=0;const W=Ge=>{const Be=c.domElement.getBoundingClientRect();qe.x=(Ge.clientX-Be.left)/Be.width*2-1,qe.y=-((Ge.clientY-Be.top)/Be.height)*2+1},te=Ge=>{I=Ge.clientX,xe=Ge.clientY},me=Ge=>{if(Math.hypot(Ge.clientX-I,Ge.clientY-xe)>6)return;W(Ge),ye.setFromCamera(qe,y);const Be=e.current;if(Be==="inspect"){const gi=ye.intersectObject(ke,!1);gi.length&&gi[0].instanceId!==void 0?o.current(ve[gi[0].instanceId]??null):o.current(null);return}if(!ye.ray.intersectPlane(Oe,st)||Math.hypot(st.x,st.z)>Ln)return;const Qt=st.x/l,Ut=st.z/l;Be==="feed"?t.godFeed(Qt,Ut):Be==="smite"?t.godSmite(Qt,Ut):Be==="mutate"&&t.godMutate(Qt,Ut)};c.domElement.addEventListener("pointerdown",te),c.domElement.addEventListener("pointerup",me);const ve=new Array(Ni).fill(null),Ie=new ze,St=new ze;let Wt=0,nt=performance.now();const Kt=new URLSearchParams(window.location.search).get("q"),Hn=Kt==="high"?2:Kt==="low"?0:null;let mi=2,Rr=0,Gn=0;const Pr=()=>{const Ge=window.devicePixelRatio||1;mi===2?(c.setPixelRatio(Math.min(Ge,1.25)),c.shadowMap.enabled=!0,T.castShadow=!0,le.visible=!0,ne.visible=!0):mi===1?(c.setPixelRatio(Math.min(Ge,1)),c.shadowMap.enabled=!1,T.castShadow=!1,le.visible=!0,ne.visible=!1):(c.setPixelRatio(.6),c.shadowMap.enabled=!1,T.castShadow=!1,le.visible=!1,ne.visible=!1,k.visible=!1),c.shadowMap.needsUpdate=!0,c.setSize(a.clientWidth,a.clientHeight)},Eo=()=>{const Ge=a.clientWidth,Be=a.clientHeight;!Ge||!Be||(y.aspect=Ge/Be,y.updateProjectionMatrix(),c.setSize(Ge,Be))},wo=new ResizeObserver(Eo);wo.observe(a),Eo();const Lr=()=>{Wt=requestAnimationFrame(Lr);const Ge=performance.now(),Be=Ge/1e3,Qt=(Ge-nt)/1e3;nt=Ge;const Ut=t.light;T.intensity=.2+Ut*1.05,C.intensity=.2+Ut*.32,A.intensity=.3+Ut*.6,P.intensity=.12+Ut*.4,p.copy(f).lerp(d,Ut),u.background=p,v.color.copy(p),_.emissive.setRGB(.02*Ut,.05*Ut,.03*Ut),k.material.opacity=.16+Ut*.42,Je.userData.shader&&(Je.userData.shader.uniforms.uTime.value=Be);const gi=t.agents;let Pt=0,hs=0,b=0,U=0,B=0,G=0,F=0,ae=0;const ge=new D(0,1,0),Me=new D,Ee=new Sr;for(let fe=0;fe<gi.length&&Pt<Ni;fe++){const $=gi[fe];if(!$.alive)continue;const lt=$.role?["core","worker","guard","brooder","nurse"].indexOf($.role)+1:0,Ve=new ze(Qn[$.strategy].color),je=$.genome.hue,mt=new ze().setHSL(je/360,.74,.46);$.role?(St.set(Ti[$.role].color),Ie.copy(mt).lerp(St,.55)):Ie.copy(mt).lerp(Ve,.15);const Et=$.dormant,wt=$.genome.size*l*j2*($.role==="core"?1.15:1)*(Et?.6:1),Tt=Math.sin(Be*1.6+$.id*1.7)*.012;if(J.position.set($.x*l,wt*.5+.02+Tt,$.y*l),J.rotation.set(0,Be*.4+$.id*.7,0),J.scale.setScalar(wt),J.updateMatrix(),ke.setMatrixAt(Pt,J.matrix),re[Pt]=$.id%97*.137,de[Pt]=($.genome.organelles.includes("chloroplast")?1:0)|($.genome.organelles.includes("toxin")?2:0)|($.genome.organelles.includes("shell")?4:0)|($.genome.organelles.includes("flagellum")?8:0)|($.genome.organelles.includes("lysosome")?16:0),Ke[Pt]=($.genome.organelles.includes("tentacle")?1:0)|($.genome.organelles.includes("cilia")?2:0)|($.genome.organelles.includes("eyespot")?4:0)|($.genome.organelles.includes("pseudopod")?8:0)|(Et?16:0)|($.genome.organelles.includes("myosin")?32:0),pe[Pt]=$.flash,Fe[Pt]=lt,Pe[Pt*3]=Ie.r,Pe[Pt*3+1]=Ie.g,Pe[Pt*3+2]=Ie.b,ve[Pt]=$.id,Pt++,$.genome.organelles.includes("shell")&&hs<320&&(J.scale.setScalar(wt*1.05),J.updateMatrix(),L.setMatrixAt(hs,J.matrix),hs++),$.genome.organelles.includes("flagellum")&&b<420){const yn=Math.atan2($.vy,$.vx);J.position.set($.x*l-Math.cos(yn)*wt*1.5,wt*.55,$.y*l-Math.sin(yn)*wt*1.5),J.rotation.set(Math.PI/2,0,-yn+Math.PI/2),J.scale.setScalar(wt*.55),J.updateMatrix(),Rt.setMatrixAt(b,J.matrix),b++}if($.genome.organelles.includes("tentacle")&&U<1400)for(let Vn=0;Vn<5&&U<1400;Vn++){const Xt=Vn/5*Math.PI*2+Be*.5+$.id*.7,xi=Math.sin(Be*2.1+Vn*1.3+$.id)*.45,Nr=Math.cos(Xt+xi*.35),To=Math.sin(Xt+xi*.35);Me.set(Nr,.22+xi*.12,To).normalize(),Ee.setFromUnitVectors(ge,Me),J.position.set($.x*l+Nr*wt*.75,wt*.55+.02,$.y*l+To*wt*.75),J.quaternion.copy(Ee),J.scale.set(wt*.34,wt*1.05,wt*.34),J.updateMatrix(),He.setMatrixAt(U,J.matrix),U++}if($.genome.organelles.includes("cilia")&&B<1200)for(let Vn=0;Vn<9&&B<1200;Vn++){const Xt=Vn/9*Math.PI*2+$.id*1.3+Be*.35,xi=Math.cos(Xt),Nr=Math.sin(Xt);Me.set(xi,.9,Nr).normalize(),Ee.setFromUnitVectors(ge,Me),J.position.set($.x*l+xi*wt*.72,wt*.5+.02,$.y*l+Nr*wt*.72),J.quaternion.copy(Ee),J.scale.set(wt*.3,wt*.7,wt*.3),J.updateMatrix(),Ye.setMatrixAt(B,J.matrix),B++}}ke.count=Pt,ke.instanceMatrix.needsUpdate=!0,He.count=U,He.instanceMatrix.needsUpdate=!0,Ye.count=B,Ye.instanceMatrix.needsUpdate=!0,Ae.count=G,Ae.instanceMatrix.needsUpdate=!0,it.count=F,it.instanceMatrix.needsUpdate=!0,Ce.count=ae,Ce.instanceMatrix.needsUpdate=!0,L.count=hs,L.instanceMatrix.needsUpdate=!0,Rt.count=b,Rt.instanceMatrix.needsUpdate=!0,j.getAttribute("aSeed").needsUpdate=!0,j.getAttribute("aFlags").needsUpdate=!0,j.getAttribute("aFlash").needsUpdate=!0,j.getAttribute("aRole").needsUpdate=!0,j.getAttribute("aColor").needsUpdate=!0,j.getAttribute("aFlags2").needsUpdate=!0;let Re=0,Le=0;for(const fe of t.food){if(fe.dead)continue;const $=1+Math.sin(Be*2.2+fe.x*.05)*.12;if(J.position.set(fe.x*l,.055,fe.y*l),J.rotation.set(fe.born*.7,fe.born*1.3,0),fe.kind==="detritus"){if(Le>=yg)continue;J.scale.setScalar(.1*$*vg),J.updateMatrix(),E.setMatrixAt(Le,J.matrix),Le++}else{if(Re>=_g)continue;J.scale.setScalar(.085*$*vg),J.updateMatrix(),R.setMatrixAt(Re,J.matrix),Re++}}R.count=Re,R.instanceMatrix.needsUpdate=!0,E.count=Le,E.instanceMatrix.needsUpdate=!0;let we=0,tt=0;for(const fe of t.colonies.values()){const $=[...fe.memberIds].map(je=>t.agentById(je)).filter(je=>!!(je&&je.alive));if($.length<2)continue;let lt=0,Ve=0;for(const je of $)lt+=je.x,Ve+=je.y;lt/=$.length,Ve/=$.length;for(const je of $){if(we>=z)break;const mt=we*6;q[mt]=lt*l,q[mt+1]=.16,q[mt+2]=Ve*l,q[mt+3]=je.x*l,q[mt+4]=.16,q[mt+5]=je.y*l;const Et=Eg($);Ie.set(Et?Ti[Et].color:"#2cc9ff"),ie[mt]=Ie.r*.9,ie[mt+1]=Ie.g*.9,ie[mt+2]=Ie.b*.9,ie[mt+3]=Ie.r*.45,ie[mt+4]=Ie.g*.45,ie[mt+5]=Ie.b*.45,we++}if(tt<120){const je=Eg($),mt=je?Ti[je].color:"#2cc9ff";Ie.set(fe.route?W2[fe.route]:mt);const Et=.7+$.length*.12;J.position.set(lt*l,.14,Ve*l),J.scale.set(Et*.6,Et*.28,Et*.6),J.rotation.set(0,0,0),J.updateMatrix(),le.setMatrixAt(tt,J.matrix),le.setColorAt(tt,Ie),tt++}if(fe.route==="myxomycete"&&G<40){const je=.22+fe.fruiting*.62;J.position.set(lt*l,.22+je*.85,Ve*l),J.scale.set(je*.55,je*.8,je*.55),J.rotation.set(0,Be*.25,0),J.updateMatrix(),Ae.setMatrixAt(G,J.matrix),G++}else if(fe.route==="volvocine"&&F<40){const je=.45+$.length*.1;J.position.set(lt*l,.24,Ve*l),J.scale.set(je,je*.82,je),J.rotation.set(0,Be*.4,0),J.updateMatrix(),it.setMatrixAt(F,J.matrix),F++}else if(fe.route==="animal"&&ae<40){const je=.4+$.length*.11,mt=18;J.position.set((lt+fe.swarmX*mt)*l,.18+Math.sin(Be*1.8+fe.id)*.05,(Ve+fe.swarmY*mt)*l),J.scale.set(je*(1+Math.sin(Be*2.2)*.07),je*.52,je*(1-Math.sin(Be*2.2)*.07)),J.rotation.set(0,Be*.3,0),J.updateMatrix(),Ce.setMatrixAt(ae,J.matrix),ae++}}Y.setDrawRange(0,we*2),Y.attributes.position.needsUpdate=!0,Y.attributes.color.needsUpdate=!0,le.count=tt,le.instanceMatrix.needsUpdate=!0,le.instanceColor&&(le.instanceColor.needsUpdate=!0);const ut=s.current,pt=ut!==null?t.agentById(ut):null;if(pt){ue.visible=!0;const fe=pt.genome.size*l*1.9;ue.position.set(pt.x*l,.1,pt.y*l),ue.scale.setScalar(fe*(1+Math.sin(Be*4)*.06)),ue.material.opacity=.65+Math.sin(Be*4)*.25}else ue.visible=!1;const dn=t.consumeEffects();for(const fe of dn){const $=Ue[fe.type];$&&(De(fe.x*l,fe.y*l,$.color,$.scale,$.life),fe.type==="cannibal"&&De(fe.x*l,fe.y*l,16747325,$.scale*.55,$.life*.7))}for(const fe of oe){if(!fe.mesh.visible)continue;const $=(Ge-fe.t0)/1e3/fe.life;if($>=1){fe.mesh.visible=!1;continue}const lt=1-Math.pow(1-$,3);fe.mesh.scale.setScalar(.2+lt*fe.scale),fe.mat.opacity=.9*(1-$)*(1-$)}if(Rr+=Qt*1e3,Gn++,Gn>=12||Rr>1200){const fe=Rr/Gn;Hn!==null?(mi=Hn,Pr()):fe>46&&mi>0?(mi--,Pr()):fe<17&&mi<2&&(mi++,Pr()),Rr=0,Gn=0}g.update(),c.render(u,y)};return Wt=requestAnimationFrame(Lr),()=>{cancelAnimationFrame(Wt),wo.disconnect(),c.domElement.removeEventListener("pointerdown",te),c.domElement.removeEventListener("pointerup",me),g.dispose(),S.dispose(),x.dispose(),j.dispose(),Je.dispose(),L.geometry.dispose(),L.material.dispose(),Rt.geometry.dispose(),Rt.material.dispose(),R.geometry.dispose(),R.material.dispose(),E.geometry.dispose(),E.material.dispose(),Y.dispose(),le.geometry.dispose(),le.material.dispose(),ue.geometry.dispose(),ue.material.dispose(),et.dispose(),w.geometry.dispose(),_.dispose(),H.dispose(),O.dispose(),X.geometry.dispose(),X.material.dispose(),V.geometry.dispose(),N.geometry.dispose(),K.geometry.dispose(),Q.dispose(),Z.dispose(),ee.dispose(),ce.dispose(),c.dispose(),c.domElement.parentNode===a&&a.removeChild(c.domElement)}},[t]),M.jsx("div",{ref:r,className:"absolute inset-0"})}function Eg(t){const e=new Map;for(const r of t)r.role&&e.set(r.role,(e.get(r.role)??0)+1);let n=null,i=0;for(const[r,s]of e)s>i&&(i=s,n=r);return n}function $2(t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=t/2,r=n.createRadialGradient(i,i*.92,i*.05,i,i,i);r.addColorStop(0,"#2a7a52"),r.addColorStop(.35,"#1c5c3f"),r.addColorStop(.72,"#123c2b"),r.addColorStop(1,"#081d16"),n.fillStyle=r,n.fillRect(0,0,t,t);const s=n.getImageData(0,0,t,t),o=s.data;for(let l=0;l<o.length;l+=4){const c=(Math.random()-.5)*26;o[l]=Math.max(0,Math.min(255,o[l]+c*.7)),o[l+1]=Math.max(0,Math.min(255,o[l+1]+c)),o[l+2]=Math.max(0,Math.min(255,o[l+2]+c*.8))}n.putImageData(s,0,0),n.globalCompositeOperation="lighter";for(let l=0;l<26;l++){const c=l/26*i*.98+Math.random()*6;n.beginPath(),n.arc(i,i,c,0,Math.PI*2),n.strokeStyle=`rgba(150, 220, 180, ${.012+Math.random()*.016})`,n.lineWidth=1+Math.random()*2.4,n.stroke()}for(let l=0;l<180;l++){const c=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*i*.97,d=1+Math.random()*3.6;n.beginPath(),n.arc(i+Math.cos(c)*u,i+Math.sin(c)*u,d,0,Math.PI*2),n.fillStyle=`rgba(200, 240, 220, ${.05+Math.random()*.1})`,n.fill()}n.globalCompositeOperation="source-over";const a=new Mv(e);return a.needsUpdate=!0,a}function Y2(t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.clearRect(0,0,t,t);const i=n.createRadialGradient(t*.32,t*.3,0,t*.32,t*.3,t*.46);i.addColorStop(0,"rgba(220, 245, 255, 0.55)"),i.addColorStop(.35,"rgba(160, 220, 240, 0.18)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,t,t),n.save(),n.translate(t*.5,t*.5),n.rotate(-.5);const r=n.createLinearGradient(-t*.5,0,t*.5,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.45,"rgba(255,255,255,0.22)"),r.addColorStop(.55,"rgba(255,255,255,0.22)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(-t*.5,-t*.012,t,t*.024),n.restore();const s=new Mv(e);return s.needsUpdate=!0,s}const ir="http://www.w3.org/2000/svg";let q2=0;function Av(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("backdrop-filter",'url("#x")')||CSS.supports("-webkit-backdrop-filter",'url("#x")')}function wg(t,e){const n=getComputedStyle(t).borderRadius,i=parseFloat(n.split(" ")[0]);return Number.isFinite(i)?i:e}function Tg(t,e,n,i,r){const s=document.createElement("canvas");s.width=Math.max(1,Math.round(t)),s.height=Math.max(1,Math.round(e));const o=s.getContext("2d");if(!o)return"";const a=s.width,l=s.height,c=Math.min(n,Math.min(a,l)/2),u=a/2,d=l/2,f=Math.max(2,i*Math.min(a,l)),p=o.createImageData(a,l),v=p.data,y=(m,h,g)=>{const x=Math.max(0,Math.min(1,(g-m)/(h-m||1)));return x*x*(3-2*x)};for(let m=0;m<l;m++)for(let h=0;h<a;h++){const g=h+.5,x=m+.5,S=Math.abs(g-u)-(u-c),C=Math.abs(x-d)-(d-c),T=Math.hypot(Math.max(S,0),Math.max(C,0)),A=Math.min(Math.max(S,C),0),P=T+A-c,H=1-y(0,f,Math.abs(P));let _=0,w=0;S>C?_=g<u?-1:1:w=x<d?-1:1;const O=H*r,k=(m*a+h)*4;v[k]=Math.max(0,Math.min(255,128+_*O)),v[k+1]=Math.max(0,Math.min(255,128+w*O)),v[k+2]=128,v[k+3]=255}return o.putImageData(p,0,0),s.toDataURL("image/png")}function bg(t,e,n,i){const r=document.createElementNS(ir,"filter");r.setAttribute("id",t),r.setAttribute("x","-10%"),r.setAttribute("y","-10%"),r.setAttribute("width","120%"),r.setAttribute("height","120%"),r.setAttribute("color-interpolation-filters","sRGB");const s=document.createElementNS(ir,"feImage");s.setAttribute("href",e),s.setAttributeNS("http://www.w3.org/1999/xlink","href",e),s.setAttribute("result","map"),r.appendChild(s);const o=(a,l,c)=>{const u=document.createElementNS(ir,"feDisplacementMap");return u.setAttribute("in","SourceGraphic"),u.setAttribute("in2","map"),u.setAttribute("scale",String(l)),u.setAttribute("xChannelSelector",a),u.setAttribute("yChannelSelector","G"),u.setAttribute("result",c),u};if(i>0){r.appendChild(o("R",n*(1+i/100),"dR"));const a=(u,d,f)=>{const p=document.createElementNS(ir,"feColorMatrix");p.setAttribute("in",u),p.setAttribute("type","matrix");const v=m=>m?"1 0 0 0 0":"0 0 0 0 0",y=[v(d==="R"),v(d==="G"),v(d==="B"),"0 0 0 1 0"];return p.setAttribute("values",y.join(" ")),p.setAttribute("result",f),p};r.appendChild(a("dR","R","cR")),r.appendChild(o("G",n,"dG")),r.appendChild(a("dG","G","cG")),r.appendChild(o("B",n*(1-i/100),"dB")),r.appendChild(a("dB","B","cB"));const l=document.createElementNS(ir,"feBlend");l.setAttribute("in","cR"),l.setAttribute("in2","cG"),l.setAttribute("mode","screen"),l.setAttribute("result","cRG"),r.appendChild(l);const c=document.createElementNS(ir,"feBlend");c.setAttribute("in","cRG"),c.setAttribute("in2","cB"),c.setAttribute("mode","screen"),r.appendChild(c)}else r.appendChild(o("R",n,"disp"));return r}function Z2(t,e={}){const{scale:n=70,chroma:i=0,border:r=.12,blur:s=2,saturate:o=1.45,radius:a=null,fallbackBlur:l=18}=e,c=Av(),u=`liquid-glass-${++q2}`;let d=null,f=null,p=null;const v=t.style,y=()=>{const h=`blur(${l}px) saturate(${o})`;v.backdropFilter=h,v.webkitBackdropFilter=h},m=()=>{const h=`url("#${u}") blur(${s}px) saturate(${o})`;v.backdropFilter=h,v.webkitBackdropFilter=h,(getComputedStyle(t).backdropFilter||"").includes("url(")||(y(),t.dataset.liquidGlass="fallback")};if(c){d=document.createElementNS(ir,"svg"),d.setAttribute("width","0"),d.setAttribute("height","0"),d.setAttribute("aria-hidden","true"),d.style.cssText="position:fixed;pointer-events:none;left:0;top:0;opacity:0;";const h=document.createElementNS(ir,"defs");d.appendChild(h),document.body.appendChild(d);const g=()=>{const S=t.getBoundingClientRect();if(S.width<2||S.height<2)return;const C=a??wg(t,24),T=Tg(S.width,S.height,C,r,Math.max(4,Math.min(255,n))/255);T&&(f&&f.remove(),f=bg(u,T,n,i),h.appendChild(f),m())};g();let x=0;p=new ResizeObserver(()=>{clearTimeout(x),x=window.setTimeout(()=>g(),120)}),p.observe(t)}else{const h=`blur(${l}px) saturate(${o})`;v.backdropFilter=h,v.webkitBackdropFilter=h,t.dataset.liquidGlass="fallback"}return{supported:c,refresh(){if(d&&f){const h=t.getBoundingClientRect(),g=a??wg(t,24),x=Tg(h.width,h.height,g,r,Math.max(4,Math.min(255,n))/255);x&&(f.remove(),f=bg(u,x,n,i),d.querySelector("defs")?.appendChild(f))}},destroy(){p?.disconnect(),p=null,f?.remove(),d?.remove(),v.backdropFilter="",v.webkitBackdropFilter=""}}}Av();const Bt=(...t)=>t.filter(Boolean).join(" ");function Vc(t,e={},n=!0){const i=be.useRef(e);i.current=e,be.useEffect(()=>{if(!n||!t.current)return;const r=Z2(t.current,i.current);return()=>r.destroy()},[t,n])}function K2({children:t,className:e,tone:n="default",glass:i=!0,radius:r=26,style:s}){const o=be.useRef(null);return Vc(o,{scale:56,border:.11,blur:1.2,saturate:1.45},i),M.jsx("div",{ref:o,className:Bt(i&&"glass",n==="strong"&&"glass-strong",n==="soft"&&"glass-soft",e),style:{borderRadius:r,...s},children:t})}function Q2({children:t,onClick:e,active:n,color:i,className:r,title:s,disabled:o,size:a="md",glass:l=!0,type:c="button"}){const u=be.useRef(null);Vc(u,{scale:44,border:.16,blur:1,saturate:1.5},l&&!n);const d=a==="sm"?"h-8 px-3 text-[10px]":a==="lg"?"h-12 px-5 text-[13px]":"h-10 px-4 text-[11px]";return M.jsx("button",{ref:u,type:c,title:s,disabled:o,onClick:e,className:Bt("capsule-btn relative select-none",d,l&&"glass",!l&&"border border-white/10 bg-white/[0.04]",n?"text-white":"text-white/70 hover:text-white",o&&"opacity-40 pointer-events-none",r),style:n?{color:i,borderColor:`${i}66`,background:`linear-gradient(180deg, ${i}33, ${i}12)`,boxShadow:`0 0 0 1px ${i}40, 0 6px 22px -8px ${i}, inset 0 1px 0 rgba(255,255,255,.45)`}:void 0,children:t})}function ep(t,e,n=320){be.useEffect(()=>{if(!e)return;const i=window.setTimeout(()=>{const r=t.current;if(!r)return;r.getAnimations().some(o=>{if((o.animationName??"")!=="glass-pop")return!1;const l=o.currentTime;return l===null?!0:(typeof l=="number"?l:0)<40})&&(r.classList.remove("pop-in"),r.style.opacity="1",r.style.transform="none")},n);return()=>window.clearTimeout(i)},[t,e,n])}const Dt=t=>({width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"}),J2=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"}),M.jsx("circle",{cx:"12",cy:"12",r:"2.8"})]}),Id=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M12 3v7"}),M.jsx("path",{d:"M8.5 7.5 12 11l3.5-3.5"}),M.jsx("circle",{cx:"6",cy:"16",r:"2.4"}),M.jsx("circle",{cx:"12",cy:"18",r:"2.4"}),M.jsx("circle",{cx:"18",cy:"16",r:"2.4"})]}),Ud=({size:t=16,...e})=>M.jsx("svg",{...Dt(t),...e,children:M.jsx("path",{d:"M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"})}),Fd=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"}),M.jsx("circle",{cx:"12",cy:"12",r:"3.1"})]}),eb=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M12 3c5 0 8 4 8 9s-3.5 8-8 8-8-3-8-8 3-9 8-9Z"}),M.jsx("ellipse",{cx:"8.8",cy:"10",rx:"2.1",ry:"2.6"}),M.jsx("ellipse",{cx:"15.2",cy:"10",rx:"2.1",ry:"2.6"}),M.jsx("path",{d:"M9.5 17c1.6 1 3.4 1 5 0"})]}),Od=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("circle",{cx:"12",cy:"12",r:"5.2"}),M.jsx("path",{d:"M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2M5.3 5.3l2.3 2.3M16.4 16.4l2.3 2.3M18.7 5.3l-2.3 2.3M7.6 16.4l-2.3 2.3"})]}),Cv=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M3.5 3.5v17h17"}),M.jsx("path",{d:"M8 16V11M12 16V6M16 16v-3.5"})]}),tb=({size:t=16,...e})=>M.jsx("svg",{...Dt(t),...e,children:M.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),nb=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("circle",{cx:"12",cy:"12",r:"8.6"}),M.jsx("path",{d:"M3.4 12h17.2M12 3.4c2.3 2.4 3.5 5.4 3.5 8.6s-1.2 6.2-3.5 8.6c-2.3-2.4-3.5-5.4-3.5-8.6S9.7 5.8 12 3.4Z"})]}),ib=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("rect",{x:"7",y:"5.5",width:"3.4",height:"13",rx:"1.5"}),M.jsx("rect",{x:"13.6",y:"5.5",width:"3.4",height:"13",rx:"1.5"})]}),rb=({size:t=16,...e})=>M.jsx("svg",{...Dt(t),...e,children:M.jsx("path",{d:"M8 5.6 18.5 12 8 18.4V5.6Z"})}),sb=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M20 12a8 8 0 1 1-2.6-5.9"}),M.jsx("path",{d:"M20 3.5V8h-4.5"})]}),ob=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M5 6.2 13 12l-8 5.8V6.2Z"}),M.jsx("path",{d:"M16.5 5.5v13"})]}),ab=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M4 6.2 12 12l-8 5.8V6.2Z"}),M.jsx("path",{d:"M13 6.2 21 12l-8 5.8V6.2Z"})]}),sa=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("circle",{cx:"12",cy:"12",r:"4"}),M.jsx("path",{d:"M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6"})]}),lb=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M14 14.8V5.2a2.2 2.2 0 1 0-4.4 0v9.6a4 4 0 1 0 4.4 0Z"}),M.jsx("circle",{cx:"11.8",cy:"17.4",r:"1.7"})]}),kd=({size:t=16,...e})=>M.jsx("svg",{...Dt(t),...e,children:M.jsx("path",{d:"M12 3.2s6 6.1 6 10a6 6 0 0 1-12 0c0-3.9 6-10 6-10Z"})}),Rv=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M4 5.2A2.2 2.2 0 0 1 6.2 3H19v14.5H6.2A2.2 2.2 0 0 0 4 19.7V5.2Z"}),M.jsx("path",{d:"M4 19.7A2.2 2.2 0 0 1 6.2 17.5H19V21H6.2A2.2 2.2 0 0 1 4 18.8v.9Z"})]}),Mc=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M7 4h10v5a5 5 0 0 1-10 0V4Z"}),M.jsx("path",{d:"M7 5.5H4.6v1.2A3.4 3.4 0 0 0 7.6 10M17 5.5h2.4v1.2a3.4 3.4 0 0 1-3 3.3"}),M.jsx("path",{d:"M12 14v3.5M8.5 20.5h7"})]}),Pv=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("path",{d:"M6 3.5h11a2 2 0 0 1 2 2v11.8a3.2 3.2 0 0 1-3.2 3.2H8.2A3.2 3.2 0 0 1 5 17.3V5.5a2 2 0 0 1 1-2Z"}),M.jsx("path",{d:"M8.5 8.5h7M8.5 12h7M8.5 15.5h4"})]}),zd=({size:t=16,...e})=>M.jsxs("svg",{...Dt(t),...e,children:[M.jsx("circle",{cx:"8",cy:"8.5",r:"4"}),M.jsx("circle",{cx:"16",cy:"15",r:"4.6"}),M.jsx("path",{d:"M8 12.5v3.2M8 15.7h3.4"})]}),jc=({size:t=16,...e})=>M.jsx("svg",{...Dt(t),...e,children:M.jsx("path",{d:"M12 3.2 13.9 9l5.9 1.9-5.9 1.9L12 18.7l-1.9-5.9L4.2 10.9 10.1 9 12 3.2Z"})}),cb={zh:{eyebrow:"PETRI ARENA · 演化沙盒",title:"微生物进化大赛",sub:"一个培养皿，一群原始单细胞，和一只看不见的手。在几十万个世代里，看它们如何从争抢营养，走向分工协作。",enter:"进入培养皿",enterHint:"也可以先看看玩法 ↓",cards:[{icon:M.jsx(sa,{size:18}),title:"光合者",body:"长出叶绿体，在光照下把光变成能量。它们是整张食物网的地基。",color:"#a2db3c"},{icon:M.jsx(kd,{size:18}),title:"分解者",body:"拥有溶酶体，把尸体碎屑还原成培养基养分。生态循环从这里闭合。",color:"#c084fc"},{icon:M.jsx(Mc,{size:18}),title:"猎手",body:"毒素与外壳武装到牙齿。它们会捕食弱者，也会同类相食。",color:"#ff8b3d"},{icon:M.jsx(zd,{size:18}),title:"多细胞体",body:"黏连蛋白把个体粘成团体，长期演化后长出核心、守卫、繁殖体等职能。",color:"#2cc9ff"}],steps:[{icon:M.jsx(Id,{size:15}),text:"投喂"},{icon:M.jsx(Fd,{size:15}),text:"点化"},{icon:M.jsx(Ud,{size:15}),text:"天罚"},{icon:M.jsx(Od,{size:15}),text:"瘟疫"}],footer:"拖动旋转 · 滚轮缩放 · 点击生物查看基因组"},en:{eyebrow:"PETRI ARENA · EVOLUTION SANDBOX",title:"Microbe Evolution Arena",sub:"One petri dish, a crowd of primitive cells, and an unseen hand. Watch them fight over nutrients — then learn to cooperate.",enter:"Enter the dish",enterHint:"or read the rules below ↓",cards:[{icon:M.jsx(sa,{size:18}),title:"Phototrophs",body:"They grow chloroplasts and turn light into energy — the bedrock of the whole food web.",color:"#a2db3c"},{icon:M.jsx(kd,{size:18}),title:"Decomposers",body:"Lysosomes break corpses back into nutrients. This is where the cycle closes.",color:"#c084fc"},{icon:M.jsx(Mc,{size:18}),title:"Hunters",body:"Armed with toxin and shell. They devour the weak — and sometimes their own kind.",color:"#ff8b3d"},{icon:M.jsx(zd,{size:18}),title:"Multicellularity",body:"Adhesin glues cells into colonies that evolve cores, guards and brooders over time.",color:"#2cc9ff"}],steps:[{icon:M.jsx(Id,{size:15}),text:"Feed"},{icon:M.jsx(Fd,{size:15}),text:"Bless"},{icon:M.jsx(Ud,{size:15}),text:"Smite"},{icon:M.jsx(Od,{size:15}),text:"Plague"}],footer:"Drag to orbit · Scroll to zoom · Click a cell to inspect"}};function ub({onEnter:t,lang:e}){const n=cb[e],[i,r]=be.useState(!1);return be.useEffect(()=>{const s=requestAnimationFrame(()=>r(!0)),o=window.setTimeout(()=>r(!0),500);return()=>{cancelAnimationFrame(s),window.clearTimeout(o)}},[]),M.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-y-auto scroll-thin",children:[M.jsx("div",{className:"absolute inset-0 bg-[#04070a]/95 backdrop-blur-2xl"}),M.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(120% 80% at 50% 0%, rgba(44,201,255,.10), transparent 55%), radial-gradient(90% 70% at 50% 100%, rgba(162,219,60,.08), transparent 60%)"}}),M.jsx("div",{className:"aurora"}),M.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[{x:"12%",y:"22%",s:46,d:0,c:"#a2db3c"},{x:"84%",y:"18%",s:62,d:1.6,c:"#2cc9ff"},{x:"78%",y:"74%",s:38,d:2.8,c:"#c084fc"},{x:"18%",y:"78%",s:54,d:.9,c:"#ff8b3d"},{x:"50%",y:"12%",s:30,d:3.4,c:"#e8c46a"},{x:"92%",y:"46%",s:26,d:1.2,c:"#ffffff"},{x:"6%",y:"52%",s:22,d:2.2,c:"#ffffff"}].map((s,o)=>M.jsx("div",{className:"absolute rounded-full animate-pulse",style:{left:s.x,top:s.y,width:s.s,height:s.s,background:`radial-gradient(circle at 34% 30%, ${s.c}, transparent 70%)`,opacity:.32,animationDelay:`${s.d}s`,animationDuration:`${4+o%4}s`,filter:"blur(0.5px)"}},o))}),M.jsxs("div",{className:"relative z-10 w-full max-w-[860px] px-5 py-10 md:py-16 transition-[transform,opacity] duration-500",style:{opacity:i?1:0,transform:i?"translateY(0)":"translateY(18px)"},children:[M.jsxs("div",{className:"text-center",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 mb-5",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-[#a2db3c] animate-pulse"}),M.jsx("span",{className:"label-xs text-[#2cc9ff]/80",children:n.eyebrow})]}),M.jsx("h1",{className:"text-[34px] md:text-[52px] font-semibold leading-[1.08] tracking-tight",style:{background:"linear-gradient(120deg, #ffffff 8%, #a8e6ff 38%, #d7f5a0 62%, #ffc9ef 88%)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"},children:n.title}),M.jsx("p",{className:"mt-4 mx-auto max-w-[560px] text-[13px] md:text-[14.5px] leading-relaxed text-white/58",children:n.sub})]}),M.jsx("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-2",children:n.steps.map(s=>M.jsxs("span",{className:"glass capsule-btn h-9 px-3.5 flex items-center gap-1.5 text-[11px] text-white/62",children:[s.icon,s.text]},s.text))}),M.jsx("div",{className:"mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:n.cards.map((s,o)=>M.jsxs(K2,{className:"p-4",radius:24,glass:!1,style:{background:`linear-gradient(165deg, ${s.color}1f, rgba(9,20,22,.55))`,border:`1px solid ${s.color}33`,boxShadow:`0 14px 36px -18px ${s.color}, inset 0 1px 0 rgba(255,255,255,.3)`,animation:`glass-pop .6s cubic-bezier(.22,1,.36,1) ${.12+o*.09}s both`,transformOrigin:"50% 120%"},children:[M.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center mb-2.5",style:{background:`${s.color}22`,border:`1px solid ${s.color}55`,color:s.color,boxShadow:`0 0 18px -4px ${s.color}`},children:s.icon}),M.jsx("div",{className:"text-[13px] font-medium text-white/88",children:s.title}),M.jsx("div",{className:"mt-1.5 text-[11px] leading-relaxed text-white/45",children:s.body})]},s.title))}),M.jsxs("div",{className:"mt-9 flex flex-col items-center gap-3",children:[M.jsxs(Q2,{size:"lg",onClick:t,color:"#2cc9ff",className:"!h-12 !px-7 text-[14px] font-medium tracking-wide shadow-[0_10px_40px_-12px_rgba(44,201,255,.7)]",children:[M.jsx(jc,{size:16}),n.enter]}),M.jsx("span",{className:"text-[10px] text-white/28",children:n.enterHint})]}),M.jsx("p",{className:"mt-8 text-center text-[10px] text-white/22 font-mono",children:n.footer})]})]})}function Lv({composition:t,counts:e,size:n=104,thickness:i=13,showLegend:r=!1,showTotal:s=!0}){const o=(n-i)/2,a=2*Math.PI*o,l=be.useMemo(()=>{let u=0;return Jf.map(d=>{const f=Math.max(0,t[d]??0),p={id:d,value:f,dash:f*a,offset:-u*a,color:Qn[d].color,label:Qn[d].zh,icon:Qn[d].icon};return u+=f,p})},[t,a]),c=e?Object.values(e).reduce((u,d)=>u+d,0):Math.round((t.photosynthesizer??0)*0)+hb();return M.jsxs("div",{className:"flex flex-col items-center gap-2.5",children:[M.jsxs("div",{className:"relative",style:{width:n,height:n},children:[M.jsx("svg",{width:n,height:n,className:"-rotate-90",children:M.jsx("circle",{cx:n/2,cy:n/2,r:o,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:i})}),M.jsx("svg",{width:n,height:n,className:"-rotate-90 absolute inset-0",children:l.map(u=>u.value<=1e-4?null:M.jsx("circle",{cx:n/2,cy:n/2,r:o,fill:"none",stroke:u.color,strokeWidth:i,strokeLinecap:"butt",strokeDasharray:`${u.dash} ${Math.max(0,a-u.dash)}`,strokeDashoffset:u.offset,style:{transition:"stroke-dasharray 640ms cubic-bezier(.22,1,.36,1), stroke-dashoffset 640ms cubic-bezier(.22,1,.36,1)",filter:`drop-shadow(0 0 5px ${u.color}88)`}},u.id))}),s&&M.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[M.jsx("span",{className:"num text-[19px] font-semibold leading-none text-white/92",children:c}),M.jsx("span",{className:"label-xs text-white/35 mt-1",children:"个体"})]}),M.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 animate-ping pointer-events-none [animation-duration:2.8s]"})]}),r&&M.jsx("div",{className:"w-full space-y-1",children:l.map(u=>M.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[M.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:u.color,boxShadow:`0 0 8px ${u.color}`}}),M.jsx("span",{className:"text-white/70",children:u.label}),M.jsx("span",{className:"flex-1"}),M.jsxs("span",{className:"num text-white/45",children:[(u.value*100).toFixed(1),"%"]}),e&&M.jsx("span",{className:"num text-white/30 w-8 text-right",children:e[u.id]??0})]},u.id))})]})}function hb(t){return 0}const db=["细菌","古菌","内共生","真核","多细胞起源","动物","植物","真菌"];function Ku(t){return t>=1e3?`${(t/1e3).toFixed(1)} 十亿年前`:`${t} 百万年前`}function fb({engine:t,lang:e}){const[n,i]=be.useState(null),[r,s]=be.useState(null),o=be.useMemo(()=>{const c=new Map;for(const u of wr){const d=qt[u].branch;c.has(d)||c.set(d,[]),c.get(d).push(u)}for(const[,u]of c)u.sort((d,f)=>qt[f].eraMa-qt[d].eraMa);return db.filter(u=>c.has(u)).map(u=>[u,c.get(u)])},[]),a=wr.length,l=t.seenOrganelles.size;return M.jsxs("div",{className:"space-y-5 pt-1",children:[M.jsxs("div",{className:"glass-soft rounded-2xl px-3.5 py-3",children:[M.jsxs("div",{className:"flex items-baseline justify-between mb-1.5",children:[M.jsx("span",{className:"label-xs text-white/40",children:e==="zh"?"已发现的演化创新":"DISCOVERED INNOVATIONS"}),M.jsxs("span",{className:"num text-[15px] text-[#a2db3c]",children:[l,M.jsxs("span",{className:"text-white/25 text-[11px]",children:["/",a]})]})]}),M.jsx("div",{className:"h-1.5 rounded-full bg-white/8 overflow-hidden",children:M.jsx("div",{className:"h-full rounded-full transition-[width] duration-700",style:{width:`${l/a*100}%`,background:"linear-gradient(90deg,#a2db3c,#2cc9ff)",boxShadow:"0 0 10px #a2db3c99"}})}),M.jsx("p",{className:"mt-2 text-[10px] leading-relaxed text-white/35",children:e==="zh"?"每一项都对应地球上真实发生过的演化创新，拥有真实存在的代表生物与起源年代。":"Every entry is a real evolutionary innovation with a real organism behind it."})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"真实的多细胞化路线":"REAL MULTICELLULAR ROUTES"}),M.jsx("div",{className:"space-y-2",children:Qf.map(c=>{const u=Jr[c],d=t.seenRoutes.has(c),f=r===c;return M.jsxs("button",{onClick:()=>s(f?null:c),className:"w-full text-left rounded-2xl px-3 py-2.5 transition-all duration-300",style:{background:d?`${u.hue}18`:"rgba(255,255,255,.03)",border:`1px solid ${d?`${u.hue}55`:"rgba(255,255,255,.08)"}`,boxShadow:d?`0 6px 22px -12px ${u.hue}`:"none"},children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"text-[15px]",style:{color:d?u.hue:"rgba(255,255,255,.3)"},children:u.icon}),M.jsx("span",{className:Bt("text-[12px]",d?"text-white/90":"text-white/40"),children:e==="zh"?u.zh:u.en}),M.jsx("span",{className:"flex-1"}),M.jsx("span",{className:"text-[9.5px] px-1.5 rounded-full",style:{background:d?`${u.hue}25`:"rgba(255,255,255,.05)",color:d?u.hue:"rgba(255,255,255,.3)"},children:d?e==="zh"?"已达成":"REACHED":e==="zh"?"未达成":"LOCKED"})]}),M.jsxs("div",{className:"mt-1 text-[10px] text-white/32",children:[e==="zh"?u.realZh:u.realEn," · ",Ku(u.eraMa)]}),f&&M.jsxs("div",{className:"mt-2 space-y-1.5 text-[10.5px] leading-relaxed",children:[M.jsx("p",{className:"text-white/55",children:e==="zh"?u.descZh:u.descEn}),M.jsxs("p",{style:{color:`${u.hue}dd`},children:["▸ ",e==="zh"?u.perkZh:u.perkEn]}),M.jsxs("p",{className:"text-white/35",children:[e==="zh"?"需要：":"Requires: ",u.requires.map(p=>qt[p].zh).join(" + ")]})]})]},c)})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"地球史大事件":"MASS EVENTS IN EARTH HISTORY"}),M.jsx("div",{className:"space-y-1.5",children:Object.values(Hl).map(c=>{const u=t.seenEarthEvents.has(c.id);return M.jsxs("div",{className:"flex items-start gap-2.5 px-2.5 py-2 rounded-xl",style:{background:u?`${c.hue}12`:"transparent",opacity:u?1:.38},children:[M.jsx("span",{className:"text-[14px] mt-px",style:{color:u?c.hue:"rgba(255,255,255,.35)"},children:c.icon}),M.jsxs("div",{className:"min-w-0",children:[M.jsxs("div",{className:"flex items-baseline gap-2",children:[M.jsx("span",{className:Bt("text-[11.5px]",u?"text-white/88":"text-white/45"),children:e==="zh"?c.zh:c.en}),M.jsx("span",{className:"text-[9px] text-white/28 num",children:Ku(c.eraMa)})]}),u&&M.jsx("div",{className:"text-[10px] text-white/42 leading-relaxed mt-0.5",children:e==="zh"?c.descZh:c.descEn})]})]},c.id)})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"演化谱系树":"LINEAGE TREE"}),M.jsx("div",{className:"space-y-4",children:o.map(([c,u])=>M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[M.jsx("span",{className:"w-1 h-1 rounded-full bg-white/30"}),M.jsx("span",{className:"text-[10.5px] text-white/50",children:c}),M.jsx("span",{className:"flex-1 h-px bg-white/8"})]}),M.jsx("div",{className:"space-y-1 pl-3 border-l border-white/8",children:u.map(d=>{const f=qt[d],p=t.seenOrganelles.has(d),v=n===d;return M.jsxs("button",{onClick:()=>i(v?null:d),className:"w-full text-left rounded-xl px-2 py-1.5 transition-all duration-200 hover:bg-white/4",style:{background:v?`${f.hue}16`:void 0},children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"w-6 h-6 rounded-full flex items-center justify-center text-[12px] shrink-0",style:{border:`1px solid ${p?`${f.hue}66`:"rgba(255,255,255,.12)"}`,background:p?`${f.hue}1c`:"transparent",color:p?f.hue:"rgba(255,255,255,.3)"},children:p?f.icon:"?"}),M.jsx("span",{className:Bt("text-[11.5px]",p?"text-white/85":"text-white/38"),children:e==="zh"?f.zh:f.en}),M.jsx("span",{className:"flex-1"}),M.jsx("span",{className:"text-[9px] text-white/26 num",children:Ku(f.eraMa)})]}),v&&M.jsxs("div",{className:"mt-1.5 pl-8 space-y-1",children:[M.jsx("p",{className:"text-[10.5px] text-white/55 leading-relaxed",children:e==="zh"?f.descZh:f.descEn}),M.jsxs("p",{className:"text-[10px] text-white/40",children:[M.jsx("span",{className:"text-white/55",children:e==="zh"?"现实原型：":"Real organism: "}),e==="zh"?f.realZh:f.realEn]}),M.jsx("p",{className:"text-[10px] text-white/32 leading-relaxed",children:e==="zh"?f.noteZh:f.noteEn}),f.prereq&&f.prereq.length>0&&M.jsxs("p",{className:"text-[9.5px] text-white/28",children:[e==="zh"?"前置：":"Requires: ",f.prereq.map(y=>qt[y].zh).join(" + ")]})]})]},d)})})]},c))})]})]})}const pb=[{id:"ecology",icon:M.jsx(Cv,{size:14}),zh:"生态",en:"Eco"},{id:"lineage",icon:M.jsx(jc,{size:14}),zh:"演化",en:"Tree"},{id:"ranks",icon:M.jsx(Mc,{size:14}),zh:"榜单",en:"Ranks"},{id:"codex",icon:M.jsx(Rv,{size:14}),zh:"图鉴",en:"Codex"},{id:"chronicle",icon:M.jsx(Pv,{size:14}),zh:"编年",en:"Log"},{id:"cell",icon:M.jsx(zd,{size:14}),zh:"个体",en:"Cell"}];function mb({open:t,tab:e,triggerRect:n,onTab:i,onClose:r,engine:s,lang:o,selected:a}){const l=be.useRef(null),[c,u]=be.useState({opacity:0,visibility:"hidden"}),[d,f]=be.useState(!1);return Vc(l,{scale:58,border:.09,blur:1.6,saturate:1.45},t),ep(l,t),be.useLayoutEffect(()=>{if(!t||!l.current)return;const p=()=>{if(!l.current)return;const m=window.innerWidth,h=window.innerHeight,g=Math.min(356,m-24),S=m-12-g,C=62,T=Math.max(240,Math.min(h-C-18,720)),A=n?n.left+n.width/2-S:-40,P=n?n.top+n.height/2-C:T/2,H=`${Math.max(-60,Math.min(g+60,A))}px ${Math.max(-60,Math.min(T+60,P))}px`;u(_=>_.left===S&&_.top===C&&_.width===g&&_.height===T&&_.transformOrigin===H?_:{left:S,top:C,width:g,height:T,transformOrigin:H,opacity:1,visibility:"visible"}),f(!0)};p();const v=new ResizeObserver(()=>p());return v.observe(l.current),()=>v.disconnect()},[t,n]),be.useEffect(()=>{if(!t)return;const p=v=>{v.key==="Escape"&&r()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[t,r]),!t&&!d?null:M.jsxs("aside",{ref:l,className:Bt("glass glass-strong fixed z-40 flex flex-col overflow-hidden rounded-[30px]",t?"pop-in":"pop-out"),style:c,onAnimationEnd:()=>{t||(f(!1),u(p=>({...p,opacity:0,visibility:"hidden"})))},children:[M.jsxs("div",{className:"flex items-center gap-1 px-3 pt-3 pb-2 shrink-0",children:[M.jsx("div",{className:"flex-1 flex items-center gap-0.5 p-1 rounded-full bg-white/[0.045] border border-white/8",children:pb.map(p=>{const v=e===p.id;return M.jsxs("button",{onClick:()=>i(p.id),title:o==="zh"?p.zh:p.en,className:Bt("relative flex-1 h-8 rounded-full flex items-center justify-center gap-1 transition-all duration-300",v?"text-white":"text-white/40 hover:text-white/75"),style:v?{background:"linear-gradient(180deg, rgba(44,201,255,.28), rgba(44,201,255,.12))",boxShadow:"inset 0 1px 0 rgba(255,255,255,.45), 0 2px 12px -4px rgba(44,201,255,.8)"}:void 0,children:[p.icon,M.jsx("span",{className:"text-[10px] hidden sm:inline",children:o==="zh"?p.zh:p.en})]},p.id)})}),M.jsx("button",{onClick:r,className:"w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/8 transition-colors shrink-0",title:"Close",children:M.jsx(tb,{size:14})})]}),M.jsxs("div",{className:"flex-1 overflow-y-auto scroll-thin px-4 pb-4",children:[e==="ecology"&&M.jsx(gb,{engine:s,lang:o}),e==="lineage"&&M.jsx(fb,{engine:s,lang:o}),e==="ranks"&&M.jsx(xb,{engine:s,lang:o}),e==="codex"&&M.jsx(vb,{engine:s,lang:o}),e==="chronicle"&&M.jsx(yb,{engine:s,lang:o}),e==="cell"&&M.jsx(Mb,{agent:a,engine:s,lang:o})]})]})}function gb({engine:t,lang:e}){const n=t.composition(),i=t.compositionCounts(),r=new Map;for(const s of t.agents)!s.alive||!s.role||r.set(s.role,(r.get(s.role)??0)+1);return M.jsxs("div",{className:"space-y-5 pt-1",children:[M.jsx("div",{className:"flex justify-center py-2",children:M.jsx(Lv,{composition:n,counts:i,size:148,thickness:17,showLegend:!1})}),M.jsx("div",{className:"space-y-1.5",children:Jf.map(s=>{const o=Qn[s],a=n[s]??0;return M.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[M.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:o.color,boxShadow:`0 0 8px ${o.color}`}}),M.jsx("span",{className:"text-white/68 w-[68px] shrink-0",children:e==="zh"?o.zh:o.en}),M.jsx("span",{className:"flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden",children:M.jsx("span",{className:"block h-full rounded-full transition-[width] duration-700 ease-out",style:{width:`${Math.max(0,a*100)}%`,background:`linear-gradient(90deg, ${o.color}, ${o.color}66)`,boxShadow:`0 0 10px ${o.color}aa`}})}),M.jsxs("span",{className:"num text-white/42 w-10 text-right",children:[(a*100).toFixed(1),"%"]}),M.jsx("span",{className:"num text-white/28 w-8 text-right",children:i[s]??0})]},s)})}),M.jsx("div",{className:"h-px bg-white/8"}),M.jsx("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2.5",children:[{k:e==="zh"?"存活生物":"Alive",v:t.agents.filter(s=>s.alive).length,c:"#a2db3c"},{k:e==="zh"?"多细胞群体":"Colonies",v:t.colonies.size,c:"#2cc9ff"},{k:e==="zh"?"累计捕食":"Total kills",v:t.totalKills,c:"#ff8b3d"},{k:e==="zh"?"其中食同族":"Cannibalism",v:t.totalCannibalKills,c:"#ff3d6e"},{k:e==="zh"?"累计新生":"Births",v:t.totalBirths,c:"#e8c46a"},{k:e==="zh"?"养分浓度":"Nutrient",v:`×${t.nutrient.toFixed(2)}`,c:"#c084fc"}].map(s=>M.jsxs("div",{children:[M.jsx("div",{className:"text-[9.5px] text-white/38",children:s.k}),M.jsx("div",{className:"num text-[17px] font-semibold leading-tight",style:{color:s.c},children:typeof s.v=="number"?s.v.toLocaleString():s.v})]},s.k))}),r.size>0&&M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"h-px bg-white/8"}),M.jsxs("div",{children:[M.jsx("div",{className:"text-[10px] tracking-widest text-white/38 font-mono mb-2",children:e==="zh"?"细胞职能分化":"CELL SPECIALISATION"}),M.jsx("div",{className:"space-y-1",children:[...r.entries()].map(([s,o])=>{const a=Ti[s];return M.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[M.jsx("span",{className:"text-[12px] w-4 text-center",style:{color:a.color},children:a.icon}),M.jsx("span",{className:"text-white/66",children:e==="zh"?a.zh:a.en}),M.jsx("span",{className:"flex-1"}),M.jsx("span",{className:"num text-white/45",children:o})]},s)})})]})]})]})}function xb({engine:t,lang:e}){const n=t.agents.filter(s=>s.alive),i=[...n].sort((s,o)=>o.kills-s.kills).slice(0,8),r=[...n].filter(s=>s.cannibalKills>0).sort((s,o)=>o.cannibalKills-s.cannibalKills).slice(0,5);return M.jsxs("div",{className:"space-y-5 pt-1",children:[M.jsxs("div",{children:[M.jsx("div",{className:"text-[10px] tracking-widest text-white/38 font-mono mb-2",children:e==="zh"?"猎杀排行榜":"KILL LEADERBOARD"}),M.jsxs("div",{className:"space-y-1",children:[i.map((s,o)=>M.jsxs("div",{className:"flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-white/5",children:[M.jsx("span",{className:"num text-[10px] text-white/28 w-3",children:o+1}),M.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:`hsl(${s.genome.hue}, 78%, 62%)`}}),M.jsxs("span",{className:"num text-[11.5px] text-white/82",children:["#",s.id]}),M.jsxs("span",{className:"text-[10px] text-white/42 truncate",children:[e==="zh"?Qn[s.strategy].zh:Qn[s.strategy].en,s.role?` · ${e==="zh"?Ti[s.role].zh:Ti[s.role].en}`:""]}),M.jsx("span",{className:"flex-1"}),s.cannibalKills>0&&M.jsx("span",{className:"text-[9px] px-1.5 rounded-full bg-[#ff3d6e]/18 text-[#ff8fae] border border-[#ff3d6e]/30",children:e==="zh"?`食同族 ${s.cannibalKills}`:`cannibal ${s.cannibalKills}`}),M.jsx("span",{className:"num text-[11px] text-[#ff8b3d]",children:s.kills})]},s.id)),i.length===0&&M.jsx("div",{className:"text-[10.5px] text-white/28 px-2 py-1",children:e==="zh"?"还没有生物完成猎杀":"No kills yet"})]})]}),M.jsx("div",{className:"h-px bg-white/8"}),M.jsxs("div",{children:[M.jsx("div",{className:"text-[10px] tracking-widest text-white/38 font-mono mb-2",children:e==="zh"?"食同族记录":"CANNIBALISM"}),M.jsxs("div",{className:"space-y-1",children:[r.map(s=>M.jsxs("div",{className:"flex items-center gap-2 px-2 py-1.5 rounded-xl",children:[M.jsx("span",{className:"text-[12px] w-4 text-center text-[#ff3d6e]",children:"☠"}),M.jsxs("span",{className:"num text-[11.5px] text-white/82",children:["#",s.id]}),M.jsx("span",{className:"text-[10px] text-white/42",children:e==="zh"?"吞噬同族":"devoured its own kind"}),M.jsx("span",{className:"flex-1"}),M.jsxs("span",{className:"num text-[11px] text-[#ff3d6e]",children:["×",s.cannibalKills]})]},s.id)),r.length===0&&M.jsx("div",{className:"text-[10.5px] text-white/28 px-2 py-1",children:e==="zh"?"尚未发生同类相食":"No cannibalism yet — push two hunters together"})]})]})]})}function vb({engine:t,lang:e}){const[n,i]=be.useState(null);return M.jsxs("div",{className:"space-y-1 pt-1",children:[M.jsxs("div",{className:"text-[10px] tracking-widest text-white/38 font-mono mb-2",children:[e==="zh"?"演化创新图鉴":"INNOVATION CODEX"," · ",t.seenOrganelles.size,"/",xg.length]}),xg.map(r=>{const s=Tv[r],o=t.seenOrganelles.has(r),a=n===r;return M.jsxs("button",{onClick:()=>i(a?null:r),className:"w-full text-left flex items-start gap-2.5 px-2.5 py-2 rounded-xl transition-colors hover:bg-white/4",style:{background:o?`${s.hue}12`:"transparent",opacity:o?1:.36},children:[M.jsx("span",{className:"w-7 h-7 rounded-full flex items-center justify-center text-[13px] shrink-0 mt-px",style:{border:`1px solid ${o?`${s.hue}66`:"rgba(255,255,255,.15)"}`,color:o?s.hue:"rgba(255,255,255,.4)",background:o?`${s.hue}18`:"transparent"},children:o?s.icon:"?"}),M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsxs("div",{className:"flex items-baseline gap-2",children:[M.jsx("span",{className:"text-[12px] text-white/85",children:e==="zh"?s.zh:s.en}),M.jsx("span",{className:"text-[9px] text-white/26 num",children:s.eraMa>=1e3?`${(s.eraMa/1e3).toFixed(1)}Ga`:`${s.eraMa}Ma`})]}),M.jsx("div",{className:"text-[10px] text-white/34 truncate",children:o?e==="zh"?s.realZh:s.realEn:e==="zh"?"未进化":"Not evolved"}),a&&M.jsxs("div",{className:"mt-1.5 space-y-1",children:[M.jsx("p",{className:"text-[10.5px] text-white/58 leading-relaxed",children:e==="zh"?s.descZh:s.descEn}),M.jsx("p",{className:"text-[10px] text-white/38 leading-relaxed",children:e==="zh"?s.noteZh:s.noteEn}),M.jsxs("p",{className:"text-[9.5px] text-white/26",children:[e==="zh"?"支系：":"Branch: ",s.branch]})]})]})]},r)})]})}const _b={organelle:"#a2db3c",colony:"#2cc9ff",milestone:"#e8c46a",extinction:"#ff5b5b",apex:"#ff8b3d",god:"#c77dff",cannibal:"#ff3d6e",differentiate:"#ff6bd6",earth:"#e8c46a",route:"#34d399"};function yb({engine:t,lang:e}){return M.jsxs("div",{className:"pt-1",children:[M.jsx("div",{className:"text-[10px] tracking-widest text-white/38 font-mono mb-2",children:e==="zh"?"进化编年史":"CHRONICLE"}),M.jsxs("div",{className:"space-y-1.5",children:[t.events.map((n,i)=>M.jsxs("div",{className:"flex gap-2 text-[11px] leading-relaxed event-in",children:[M.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",style:{background:_b[n.type]??"#8fa"}}),M.jsxs("div",{children:[M.jsxs("span",{className:"num text-white/26 mr-1.5",children:["[",n.tick,"]"]}),M.jsx("span",{className:"text-white/72",children:e==="zh"?n.zh:n.en})]})]},`${n.tick}-${i}`)),t.events.length===0&&M.jsx("div",{className:"text-[10.5px] text-white/28",children:e==="zh"?"暂无记录":"No entries yet"})]})]})}function Mb({agent:t,engine:e,lang:n}){if(!t)return M.jsx("div",{className:"pt-6 text-center text-[11px] text-white/32",children:n==="zh"?"点击培养皿里的任意生物查看它的基因组":"Click any organism to inspect its genome"});const i=Qn[t.strategy],r=t.role?Ti[t.role]:null,s=e.colonySize(t.colonyId),o=[{k:n==="zh"?"攻击":"Attack",v:e.attackOf(t),max:20,c:"#ff8b3d"},{k:n==="zh"?"防御":"Defense",v:e.defenseOf(t),max:20,c:"#2cc9ff"},{k:n==="zh"?"速度":"Speed",v:e.speedOf(t),max:4,c:"#a2db3c"},{k:n==="zh"?"感知":"Sense",v:e.senseOf(t),max:260,c:"#e8c46a"}];return M.jsxs("div",{className:"pt-1 space-y-4",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:"w-10 h-10 rounded-full shrink-0",style:{background:`radial-gradient(circle at 34% 30%, hsl(${t.genome.hue},78%,64%), hsl(${t.genome.hue},70%,32%))`,boxShadow:`0 0 22px -4px hsl(${t.genome.hue},78%,58%)`}}),M.jsxs("div",{className:"min-w-0",children:[M.jsxs("div",{className:"num text-[15px] text-white/90",children:["#",t.id]}),M.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[M.jsx("span",{className:"text-[10px] px-1.5 rounded-full",style:{background:`${i.color}22`,color:i.color},children:n==="zh"?i.zh:i.en}),r&&M.jsxs("span",{className:"text-[10px] px-1.5 rounded-full",style:{background:`${r.color}22`,color:r.color},children:[r.icon," ",n==="zh"?r.zh:r.en]})]})]})]}),r&&M.jsx("div",{className:"text-[10.5px] leading-relaxed px-2.5 py-2 rounded-xl",style:{background:`${r.color}12`,color:`${r.color}dd`},children:n==="zh"?r.descZh:r.descEn}),M.jsx("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2",children:[{k:n==="zh"?"世代":"Gen",v:t.generation},{k:n==="zh"?"能量":"Energy",v:Math.round(t.energy)},{k:n==="zh"?"猎杀":"Kills",v:t.kills},{k:n==="zh"?"食同族":"Cannibal",v:t.cannibalKills},{k:n==="zh"?"子代":"Offspring",v:t.children},{k:n==="zh"?"年龄":"Age",v:t.age}].map(a=>M.jsxs("div",{children:[M.jsx("div",{className:"text-[9.5px] text-white/36",children:a.k}),M.jsx("div",{className:"num text-[15px] text-white/85",children:a.v})]},a.k))}),M.jsx("div",{className:"space-y-1.5",children:o.map(a=>M.jsxs("div",{className:"flex items-center gap-2 text-[10.5px]",children:[M.jsx("span",{className:"text-white/45 w-10 shrink-0",children:a.k}),M.jsx("span",{className:"flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden",children:M.jsx("span",{className:"block h-full rounded-full transition-[width] duration-500",style:{width:`${Math.min(100,a.v/a.max*100)}%`,background:a.c,boxShadow:`0 0 8px ${a.c}`}})}),M.jsx("span",{className:"num text-white/40 w-9 text-right",children:a.v.toFixed(1)})]},a.k))}),s>0&&M.jsx("div",{className:"text-[10.5px] text-[#2cc9ff] bg-[#2cc9ff]/12 px-2.5 py-2 rounded-xl",children:n==="zh"?`隶属多细胞聚合体 · ${s} 个细胞协同中`:`Member of a colony · ${s} cells cooperating`}),M.jsxs("div",{children:[M.jsx("div",{className:"text-[9.5px] tracking-widest text-white/34 font-mono mb-1.5",children:n==="zh"?"细胞器":"ORGANELLES"}),M.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[t.genome.organelles.length===0&&M.jsx("span",{className:"text-[10.5px] text-white/32",children:n==="zh"?"原始细胞，尚无细胞器":"Primitive cell, no organelles"}),t.genome.organelles.map(a=>{const l=Tv[a];return M.jsxs("span",{title:n==="zh"?l.realZh:l.realEn,className:"text-[10px] px-2 py-1 rounded-full",style:{background:`${l.hue}1c`,color:l.hue,border:`1px solid ${l.hue}38`},children:[l.icon," ",n==="zh"?l.zh:l.en]},a)})]})]})]})}const Sb=[{id:"inspect",label:"观察",labelEn:"Inspect",hint:"点击任意生物，查看它的基因组",hintEn:"Click any organism to view its genome",color:"#2cc9ff",icon:M.jsx(J2,{size:15})},{id:"feed",label:"投喂",labelEn:"Feed",hint:"点击培养皿，在该处撒下食物",hintEn:"Click the dish to scatter food there",color:"#a2db3c",icon:M.jsx(Id,{size:15})},{id:"smite",label:"天罚",labelEn:"Smite",hint:"点击培养皿，毁灭半径内的生命",hintEn:"Click the dish to destroy life in a radius",color:"#ff8b3d",icon:M.jsx(Ud,{size:15})},{id:"mutate",label:"点化",labelEn:"Bless",hint:"点击生物附近，强制它突变出新细胞器",hintEn:"Click near a cell to force a new organelle",color:"#c77dff",icon:M.jsx(Fd,{size:15})},{id:"alien",label:"入侵",labelEn:"Aliens",hint:"投放一批携带未知基因的外来物种",hintEn:"Release alien species with unknown genes",color:"#4dd0e1",icon:M.jsx(eb,{size:15}),instant:!0},{id:"plague",label:"瘟疫",labelEn:"Plague",hint:"随机夺走约 40% 的生命",hintEn:"Randomly take ~40% of all life",color:"#ff5b5b",icon:M.jsx(Od,{size:15}),instant:!0}];function Eb({tool:t,onSelect:e,lang:n,onActiveRect:i}){const[r,s]=be.useState(!0),o=be.useRef(null),a=be.useRef(null);Vc(a,{scale:46,border:.14,blur:1,saturate:1.5},r),ep(a,r);const l=be.useRef({});return M.jsxs("div",{ref:o,className:"pointer-events-auto flex flex-col items-start gap-2",children:[M.jsxs("button",{onClick:()=>s(c=>!c),className:Bt("glass capsule-btn h-9 pl-3 pr-3.5 flex items-center gap-2 text-[10px] tracking-wider",r?"text-white/85":"text-white/55"),title:n==="zh"?"上帝之手":"Hand of God",children:[M.jsx(jc,{size:13}),M.jsx("span",{className:"label-xs",children:n==="zh"?"上帝之手":"GOD HAND"}),M.jsx("span",{className:Bt("w-1.5 h-1.5 rounded-full transition-all duration-300",r?"bg-[#c77dff] rotate-0":"bg-white/25 -rotate-90")})]}),M.jsx("div",{ref:a,className:Bt("glass capsule flex flex-col gap-1 p-1.5 overflow-hidden",r?"pop-in":"pop-out pointer-events-none"),style:{transformOrigin:"12px 0px",maxHeight:r?420:0,opacity:r?1:0,paddingLeft:r?6:0,paddingRight:r?6:0,paddingTop:r?6:0,paddingBottom:r?6:0,transition:"max-height .42s cubic-bezier(.22,1,.36,1), opacity .28s ease, padding .42s cubic-bezier(.22,1,.36,1)"},children:Sb.map(c=>{const u=!c.instant&&t===c.id;return M.jsxs("button",{ref:d=>{l.current[c.id]=d},onClick:()=>{e(c);const d=l.current[c.id];d&&i?.(d.getBoundingClientRect())},title:n==="zh"?c.hint:c.hintEn,className:Bt("capsule-btn relative w-10 h-10 flex flex-col items-center justify-center gap-0.5 shrink-0",u?"":"text-white/58 hover:text-white"),style:u?{color:c.color,background:`linear-gradient(180deg, ${c.color}33, ${c.color}12)`,boxShadow:`inset 0 0 0 1px ${c.color}55, 0 0 18px -4px ${c.color}`}:void 0,children:[c.icon,M.jsx("span",{className:"text-[8px] leading-none",children:n==="zh"?c.label:c.labelEn})]},c.id)})})]})}function Qu({value:t,min:e,max:n,onChange:i,color:r}){const s=(t-e)/(n-e)*100;return M.jsx("input",{type:"range",className:"slider",min:e,max:n,value:Math.round(t),style:{"--track-c":r,"--pct":`${s}%`},onChange:o=>i(Number(o.target.value))})}function wb({engine:t,lang:e,refresh:n}){const[i,r]=be.useState(!1),s=be.useRef(null);ep(s,i);const o=t.light>.45;return M.jsxs("div",{className:"pointer-events-auto flex flex-col items-start gap-2",children:[M.jsxs("button",{onClick:()=>r(a=>!a),className:Bt("glass capsule-btn h-9 pl-3 pr-3.5 flex items-center gap-2 text-[10px] tracking-wider",i?"text-white/85":"text-white/55"),title:e==="zh"?"环境控制":"Environment",children:[M.jsx(sa,{size:13}),M.jsx("span",{className:"label-xs",children:e==="zh"?"环境控制":"ENVIRONMENT"}),M.jsx("span",{className:Bt("w-1.5 h-1.5 rounded-full transition-all duration-300",i?"bg-[#e8c46a] rotate-0":"bg-white/25 -rotate-90")})]}),M.jsx("div",{ref:s,className:Bt("glass rounded-[22px] overflow-hidden",i?"pop-in":"pop-out pointer-events-none"),style:{transformOrigin:"12px 0px",maxHeight:i?320:0,opacity:i?1:0,transition:"max-height .42s cubic-bezier(.22,1,.36,1), opacity .28s ease, padding .42s cubic-bezier(.22,1,.36,1)",padding:i?"14px 16px":"0 16px"},children:M.jsxs("div",{className:"w-[196px] space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"label-xs text-white/38",children:e==="zh"?"环境控制":"ENVIRONMENT"}),M.jsxs("span",{className:Bt("flex items-center gap-1 text-[10px]",o?"text-[#e8c46a]":"text-[#7c8fb8]"),children:[M.jsx(sa,{size:10}),o?e==="zh"?"白昼":"Day":e==="zh"?"黑夜":"Night"," ",(t.light*100).toFixed(0),"%"]})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(sa,{size:10}),e==="zh"?"光照":"Light"]}),M.jsx("button",{onClick:()=>{t.lightOverride=t.lightOverride===null?t.light:null,n()},className:Bt("px-1.5 rounded-full text-[9px] border transition-colors",t.lightOverride===null?"border-[#2cc9ff]/45 text-[#2cc9ff]":"border-white/15 text-white/40"),children:e==="zh"?"昼夜循环":"Auto"})]}),M.jsx(Qu,{value:Math.round((t.lightOverride??t.light)*100),min:0,max:100,color:"#e8c46a",onChange:a=>{t.lightOverride=a/100}})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(lb,{size:10}),e==="zh"?"温度":"Temp"]}),M.jsxs("span",{className:"num text-white/40",children:[t.temperature<.33?e==="zh"?"寒冷":"cold":t.temperature>.66?e==="zh"?"炎热":"hot":""," ",(t.temperature*40).toFixed(0),"°C"]})]}),M.jsx(Qu,{value:Math.round(t.temperature*100),min:0,max:100,color:"#ff8b3d",onChange:a=>{t.temperature=a/100}})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(kd,{size:10}),e==="zh"?"养分":"Nutrient"]}),M.jsxs("span",{className:"num text-white/40",children:["×",t.nutrient.toFixed(2)]})]}),M.jsx(Qu,{value:Math.round(t.nutrient*100),min:35,max:240,color:"#a2db3c",onChange:a=>{t.nutrient=a/100}}),M.jsx("div",{className:"text-[9px] text-white/26 leading-relaxed mt-1",children:e==="zh"?"分解者会把尸体碎屑还原成养分":"Decomposers convert corpses back into nutrients"})]})]})})]})}const Tb=[1,5,20,100];function bb(){const t=be.useRef(null);t.current||(t.current=new z2({initialCount:200}));const e=t.current,[n,i]=be.useState("zh"),[r,s]=be.useState(!1),[o,a]=be.useState(!0),[l,c]=be.useState(5),[u,d]=be.useState("inspect"),[f,p]=be.useState(null),[v,y]=be.useState(0),[m,h]=be.useState(!1),[g,x]=be.useState("ecology"),[S,C]=be.useState(null),[T,A]=be.useState(null),[P,H]=be.useState(null),_=be.useRef("inspect");_.current=u,be.useEffect(()=>{let ne=0;performance.now();const J=()=>{ne=requestAnimationFrame(J);const j=performance.now();if(!o)return;const re=j+8;let de=0;for(;de<l&&performance.now()<re;)e.step(),de++};return ne=requestAnimationFrame(J),()=>cancelAnimationFrame(ne)},[e,o,l]),be.useEffect(()=>{const ne=setInterval(()=>y(J=>J+1),240);return()=>clearInterval(ne)},[]);const w=be.useMemo(()=>e.agents.filter(ne=>ne.alive),[e,v]),O=be.useMemo(()=>e.composition(),[e,v]),k=be.useMemo(()=>e.compositionCounts(),[e,v]),X=be.useMemo(()=>w.reduce((ne,J)=>Math.max(ne,J.generation),0),[w]),{eraLabel:Q,eraColor:V}=be.useMemo(()=>e.seenEarthEvents.has("cambrian")?{eraLabel:n==="zh"?"寒武纪":"CAMBRIAN",eraColor:"#c084fc"}:e.seenEarthEvents.has("snowball")?{eraLabel:n==="zh"?"雪球地球":"SNOWBALL",eraColor:"#7dd3fc"}:e.seenEarthEvents.has("goe")?{eraLabel:n==="zh"?"大氧化":"GOE",eraColor:"#e8c46a"}:{eraLabel:n==="zh"?"前寒武纪":"PRECAMBRIAN",eraColor:"#8fa3a0"},[e,e.seenEarthEvents.size,n]),Z=be.useMemo(()=>f===null?null:e.agentById(f)??null,[e,f,v]),N=be.useCallback((ne,J)=>{x(ne),C(J),h(!0)},[]),K=be.useCallback(ne=>{if(H(ne),ne.id==="alien"){e.godAliens(18),y(J=>J+1);return}if(ne.id==="plague"){e.godPlague(.4),y(J=>J+1);return}d(ne.id)},[e]),ee=be.useCallback((ne,J)=>{a(!1),setTimeout(()=>{e.fastForward(ne,J),y(j=>j+1),a(!0)},30)},[e]),ce=be.useCallback(()=>{a(!1),p(null),setTimeout(()=>{e.reset(),y(ne=>ne+1),a(!0)},20)},[e]);return M.jsxs("div",{className:"h-screen w-screen overflow-hidden relative bg-[#04070a] text-[#dbe8e2] select-none",children:[M.jsx("div",{className:"aurora"}),M.jsx(X2,{engine:e,toolRef:_,selectedId:f,onSelect:p}),M.jsxs("header",{className:"absolute top-0 left-0 right-0 flex items-start gap-2.5 px-4 pt-3.5 pointer-events-none z-20",children:[M.jsxs("div",{className:"pointer-events-auto glass capsule h-11 pl-3 pr-4 flex items-center gap-2.5",children:[M.jsx("div",{className:"w-6 h-6 rounded-full border border-[#2cc9ff]/50 flex items-center justify-center",children:M.jsx("div",{className:"w-2 h-2 rounded-full bg-[#a2db3c] animate-pulse"})}),M.jsxs("div",{className:"leading-none",children:[M.jsx("h1",{className:"text-[13px] font-semibold tracking-wide",children:n==="zh"?"微生物进化大赛":"Microbe Evolution Arena"}),M.jsx("span",{className:"label-xs text-[#2cc9ff]/65",children:"PETRI ARENA"})]})]}),M.jsx("div",{className:"flex-1"}),M.jsxs("div",{className:"pointer-events-auto glass capsule h-11 px-4 flex items-center gap-4 text-[11px] num text-white/55 max-md:hidden",children:[M.jsxs("span",{children:[n==="zh"?"世代时刻":"Tick"," ",M.jsx("b",{className:"text-[#2cc9ff]",children:e.tick.toLocaleString()})]}),M.jsxs("span",{children:[n==="zh"?"最高世代":"Max Gen"," ",M.jsx("b",{className:"text-[#2cc9ff]",children:X})]}),M.jsxs("span",{children:[n==="zh"?"存活":"Alive"," ",M.jsx("b",{className:"text-[#a2db3c]",children:w.length})]}),M.jsxs("span",{className:"flex items-center gap-1.5",children:[M.jsx("span",{className:Bt("w-1.5 h-1.5 rounded-full",o?"bg-[#a2db3c] animate-pulse":"bg-white/30")}),o?`${n==="zh"?"运行中":"LIVE"} ×${l}`:n==="zh"?"已暂停":"PAUSED"]}),M.jsx("span",{className:"px-1.5 rounded-full border text-[10px]",style:{borderColor:`${V}55`,color:V,background:`${V}14`},title:n==="zh"?"当前地球年代":"Current era",children:Q})]}),M.jsx("button",{onClick:()=>i(ne=>ne==="zh"?"en":"zh"),className:"pointer-events-auto glass capsule-btn w-10 h-10 text-white/70 hover:text-white",title:"Language",children:M.jsx(nb,{size:15})})]}),M.jsxs("div",{className:"absolute left-4 top-[76px] bottom-4 w-[230px] flex flex-col justify-start gap-3 overflow-y-auto scroll-thin pointer-events-none z-20",style:{scrollbarWidth:"none"},children:[M.jsx(Eb,{tool:u,onSelect:K,lang:n,onActiveRect:A}),M.jsx(wb,{engine:e,lang:n,refresh:()=>y(ne=>ne+1)})]}),T&&P&&M.jsx("div",{className:"tooltip-bubble fixed z-30 pointer-events-none glass rounded-2xl px-3 py-1.5 text-[10.5px] text-white/72 max-w-[220px] leading-relaxed",style:{left:T.right+12,top:T.top+T.height/2,transform:"translateY(-50%)",borderColor:`${P.color}38`},children:n==="zh"?P.hint:P.hintEn}),M.jsxs("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2.5 z-20",children:[M.jsxs("button",{"data-pop-anchor":!0,onClick:ne=>N("ecology",ne.currentTarget.getBoundingClientRect()),className:"glass capsule-btn p-1.5 flex items-center gap-2 group",title:n==="zh"?"生态构成（实时）":"Live ecology",children:[M.jsx(Lv,{composition:O,counts:k,size:58,thickness:8,showTotal:!1}),M.jsxs("div",{className:"pr-1.5 text-left hidden md:block",children:[M.jsx("div",{className:"label-xs text-white/38",children:n==="zh"?"生态构成":"ECOLOGY"}),M.jsxs("div",{className:"text-[10px] text-white/62 num",children:[w.length," ",n==="zh"?"个体":"alive"]})]})]}),[{tab:"lineage",icon:M.jsx(jc,{size:15}),label:n==="zh"?"演化路线":"Lineage",color:"#c084fc"},{tab:"ranks",icon:M.jsx(Mc,{size:15}),label:n==="zh"?"猎杀榜":"Ranks",color:"#ff8b3d"},{tab:"codex",icon:M.jsx(Rv,{size:15}),label:n==="zh"?"图鉴":"Codex",color:"#a2db3c"},{tab:"chronicle",icon:M.jsx(Pv,{size:15}),label:n==="zh"?"编年史":"Log",color:"#e8c46a"}].map(ne=>M.jsx("button",{"data-pop-anchor":!0,onClick:J=>N(ne.tab,J.currentTarget.getBoundingClientRect()),className:"glass capsule-btn w-11 h-11 flex items-center justify-center",style:{color:ne.color},title:ne.label,children:ne.icon},ne.tab))]}),M.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20",children:M.jsxs("div",{className:"glass capsule h-12 px-2.5 flex items-center gap-1.5",children:[M.jsx("button",{onClick:()=>a(ne=>!ne),className:Bt("capsule-btn w-8 h-8",o?"bg-[#ff5b5b]/18 text-[#ff8b8b]":"bg-[#a2db3c]/18 text-[#a2db3c]"),title:o?n==="zh"?"暂停":"Pause":n==="zh"?"继续":"Resume",children:o?M.jsx(ib,{size:14}):M.jsx(rb,{size:14})}),Tb.map(ne=>M.jsxs("button",{onClick:()=>{c(ne),a(!0)},className:Bt("capsule-btn h-7 px-2.5 text-[11px] num transition-colors",l===ne?"text-[#2cc9ff] bg-[#2cc9ff]/16 shadow-[inset_0_0_0_1px_rgba(44,201,255,.4)]":"text-white/45 hover:text-white/80"),children:["×",ne]},ne)),M.jsx("span",{className:"w-px h-5 bg-white/12 mx-1"}),M.jsxs("button",{onClick:()=>ee(2e3,!0),title:n==="zh"?"快进至下一个进化事件":"Skip to next event",className:"capsule-btn h-7 px-2.5 text-[11px] text-[#e8c46a] flex items-center gap-1",children:[M.jsx(ab,{size:12}),M.jsx("span",{className:"hidden sm:inline",children:n==="zh"?"事件":"Event"})]}),M.jsxs("button",{onClick:()=>ee(3e3,!1),title:n==="zh"?"快进 3000 世代":"Skip 3000 ticks",className:"capsule-btn h-7 px-2.5 text-[11px] text-white/50 flex items-center gap-1",children:[M.jsx(ob,{size:12}),M.jsx("span",{className:"hidden sm:inline",children:"3000"})]}),M.jsx("button",{onClick:ce,title:n==="zh"?"重置":"Reset",className:"capsule-btn w-7 h-7 text-white/45",children:M.jsx(sb,{size:13})})]})}),M.jsx("div",{className:"absolute bottom-4 left-4 z-10 hidden lg:block pointer-events-none",children:M.jsx("div",{className:"glass capsule h-9 px-3.5 flex items-center gap-3 text-[10px] text-white/50",children:Object.entries(Qn).map(([ne,J])=>M.jsxs("span",{className:"flex items-center gap-1.5",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{background:J.color,boxShadow:`0 0 6px ${J.color}`}}),M.jsxs("span",{className:"num text-white/62",children:[((O[ne]??0)*100).toFixed(0),"%"]})]},ne))})}),M.jsx("div",{className:"absolute bottom-5 right-4 z-10 text-[10px] text-white/22 font-mono pointer-events-none hidden md:block",children:n==="zh"?"拖动旋转 · 滚轮缩放 · 点击生物查看基因组":"Drag to orbit · Scroll to zoom · Click a cell to inspect"}),Z&&M.jsxs("button",{onClick:ne=>N("cell",ne.currentTarget.getBoundingClientRect()),className:"glass capsule h-10 px-3.5 flex items-center gap-2.5 z-20 absolute right-4 bottom-[68px]",children:[M.jsx("span",{className:"w-4 h-4 rounded-full",style:{background:`radial-gradient(circle at 34% 30%, hsl(${Z.genome.hue},78%,64%), hsl(${Z.genome.hue},70%,30%))`,boxShadow:`0 0 12px -2px hsl(${Z.genome.hue},78%,58%)`}}),M.jsxs("span",{className:"num text-[11px] text-white/80",children:["#",Z.id]}),M.jsxs("span",{className:"text-[10px] text-white/45",children:[Qn[Z.strategy].zh,Z.role?` · ${Z.role}`:""]}),M.jsx(Cv,{size:13,className:"text-white/35"})]}),M.jsx(mb,{open:m,tab:g,triggerRect:S,onTab:x,onClose:()=>h(!1),engine:e,lang:n,selected:Z}),!r&&M.jsx(ub,{lang:n,onEnter:()=>s(!0)})]})}const Ag=document.getElementById("root");Ag&&Bx(Ag).render(M.jsx(be.StrictMode,{children:M.jsx(bb,{})}));
