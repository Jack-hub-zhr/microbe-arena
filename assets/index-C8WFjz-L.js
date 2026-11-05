var Pv=Object.defineProperty;var Lv=(t,e,n)=>e in t?Pv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var We=(t,e,n)=>Lv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var bg={exports:{}},wc={},Ag={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),Nv=Symbol.for("react.portal"),Dv=Symbol.for("react.fragment"),Iv=Symbol.for("react.strict_mode"),Uv=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),Ov=Symbol.for("react.context"),kv=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),Bv=Symbol.for("react.memo"),Hv=Symbol.for("react.lazy"),Jf=Symbol.iterator;function Gv(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var Cg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rg=Object.assign,Pg={};function vo(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||Cg}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lg(){}Lg.prototype=vo.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||Cg}var Od=Fd.prototype=new Lg;Od.constructor=Fd;Rg(Od,vo.prototype);Od.isPureReactComponent=!0;var ep=Array.isArray,Ng=Object.prototype.hasOwnProperty,kd={current:null},Dg={key:!0,ref:!0,__self:!0,__source:!0};function Ig(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ng.call(e,i)&&!Dg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:t,key:s,ref:o,props:r,_owner:kd.current}}function Vv(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tp=/\/+/g;function Wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jv(""+t.key):e.toString(36)}function El(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case Nv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Wc(o,0):i,ep(r)?(n="",t!=null&&(n=t.replace(tp,"$&/")+"/"),El(r,e,n,"",function(c){return c})):r!=null&&(zd(r)&&(r=Vv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(tp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ep(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Wc(s,a);o+=El(s,e,n,l,r)}else if(l=Gv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Wc(s,a++),o+=El(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Da(t,e,n){if(t==null)return t;var i=[],r=0;return El(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Wv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vn={current:null},wl={transition:null},Xv={ReactCurrentDispatcher:vn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:kd};function Ug(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=vo;Ze.Fragment=Dv;Ze.Profiler=Uv;Ze.PureComponent=Fd;Ze.StrictMode=Iv;Ze.Suspense=zv;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;Ze.act=Ug;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Rg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ng.call(e,l)&&!Dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:Ov,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fv,_context:t},t.Consumer=t};Ze.createElement=Ig;Ze.createFactory=function(t){var e=Ig.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:kv,render:t}};Ze.isValidElement=zd;Ze.lazy=function(t){return{$$typeof:Hv,_payload:{_status:-1,_result:t},_init:Wv}};Ze.memo=function(t,e){return{$$typeof:Bv,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};Ze.unstable_act=Ug;Ze.useCallback=function(t,e){return vn.current.useCallback(t,e)};Ze.useContext=function(t){return vn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return vn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return vn.current.useEffect(t,e)};Ze.useId=function(){return vn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return vn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return vn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return vn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return vn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return vn.current.useReducer(t,e,n)};Ze.useRef=function(t){return vn.current.useRef(t)};Ze.useState=function(t){return vn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return vn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return vn.current.useTransition()};Ze.version="18.3.1";Ag.exports=Ze;var be=Ag.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=be,Yv=Symbol.for("react.element"),qv=Symbol.for("react.fragment"),Zv=Object.prototype.hasOwnProperty,Kv=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qv={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Zv.call(e,i)&&!Qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Yv,type:t,key:s,ref:o,props:r,_owner:Kv.current}}wc.Fragment=qv;wc.jsx=Fg;wc.jsxs=Fg;bg.exports=wc;var m=bg.exports,Og={exports:{}},Bn={},kg={exports:{}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,K){var J=N.length;N.push(K);e:for(;0<J;){var ce=J-1>>>1,ne=N[ce];if(0<r(ne,K))N[ce]=K,N[J]=ne,J=ce;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],J=N.pop();if(J!==K){N[0]=J;e:for(var ce=0,ne=N.length,ee=ne>>>1;ce<ee;){var j=2*(ce+1)-1,re=N[j],de=j+1,pe=N[de];if(0>r(re,J))de<ne&&0>r(pe,re)?(N[ce]=pe,N[de]=J,ce=de):(N[ce]=re,N[j]=J,ce=j);else if(de<ne&&0>r(pe,J))N[ce]=pe,N[de]=J,ce=de;else break e}}return K}function r(N,K){var J=N.sortIndex-K.sortIndex;return J!==0?J:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=N)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(N){if(M=!1,v(N),!_)if(n(l)!==null)_=!0,V(C);else{var K=n(c);K!==null&&Z(S,K.startTime-N)}}function C(N,K){_=!1,M&&(M=!1,h(P),P=-1),p=!0;var J=f;try{for(v(K),d=n(l);d!==null&&(!(d.expirationTime>K)||N&&!w());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,f=d.priorityLevel;var ne=ce(d.expirationTime<=K);K=t.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(l)&&i(l),v(K)}else i(l);d=n(l)}if(d!==null)var ee=!0;else{var j=n(c);j!==null&&Z(S,j.startTime-K),ee=!1}return ee}finally{d=null,f=J,p=!1}}var T=!1,A=null,P=-1,H=5,y=-1;function w(){return!(t.unstable_now()-y<H)}function O(){if(A!==null){var N=t.unstable_now();y=N;var K=!0;try{K=A(!0,N)}finally{K?k():(T=!1,A=null)}}else T=!1}var k;if(typeof x=="function")k=function(){x(O)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Q=X.port2;X.port1.onmessage=O,k=function(){Q.postMessage(null)}}else k=function(){g(O,0)};function V(N){A=N,T||(T=!0,k())}function Z(N,K){P=g(function(){N(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,V(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var J=f;f=K;try{return N()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=f;f=N;try{return K()}finally{f=J}},t.unstable_scheduleCallback=function(N,K,J){var ce=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ce+J:ce):J=ce,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,N={id:u++,callback:K,priorityLevel:N,startTime:J,expirationTime:ne,sortIndex:-1},J>ce?(N.sortIndex=J,e(c,N),n(l)===null&&N===n(c)&&(M?(h(P),P=-1):M=!0,Z(S,J-ce))):(N.sortIndex=ne,e(l,N),_||p||(_=!0,V(C))),N},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(N){var K=f;return function(){var J=f;f=K;try{return N.apply(this,arguments)}finally{f=J}}}})(zg);kg.exports=zg;var Jv=kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_=be,zn=Jv;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bg=new Set,la={};function cs(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(la[t]=e,t=0;t<e.length;t++)Bg.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,t_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,np={},ip={};function n_(t){return Ju.call(ip,t)?!0:Ju.call(np,t)?!1:t_.test(t)?ip[t]=!0:(np[t]=!0,!1)}function i_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function r_(t,e,n,i){if(e===null||typeof e>"u"||i_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new _n(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new _n(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new _n(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new _n(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new _n(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new _n(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new _n(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new _n(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new _n(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function Hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,Hd);rn[e]=new _n(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,Hd);rn[e]=new _n(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,Hd);rn[e]=new _n(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new _n(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new _n(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r_(e,n,r,i)&&(n=null),i||r===null?n_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),Gg=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Vg=Symbol.for("react.offscreen"),rp=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Xc;function Xo(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||""}return`
`+Xc+t}var $c=!1;function Yc(t,e){if(!t||$c)return"";$c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xo(t):""}function s_(t){switch(t.tag){case 5:return Xo(t.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return t=Yc(t.type,!1),t;case 11:return t=Yc(t.type.render,!1),t;case 1:return t=Yc(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Ls:return"Portal";case eh:return"Profiler";case Vd:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gg:return(t.displayName||"Context")+".Consumer";case Hg:return(t._context.displayName||"Context")+".Provider";case jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wd:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function o_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a_(t){var e=jg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=a_(t))}function Wg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xg(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function sh(t,e){Xg(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function op(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if($o(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function $g(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l_=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){l_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function Zg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function Kg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var c_=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(t,e){if(e){if(c_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Ys=null,qs=null;function cp(t){if(t=Ra(t)){if(typeof dh!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Rc(e),dh(t.stateNode,t.type,e))}}function Qg(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function Jg(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,cp(t),e)for(t=0;t<e.length;t++)cp(e[t])}}function e0(t,e){return t(e)}function t0(){}var qc=!1;function n0(t,e,n){if(qc)return t(e,n);qc=!0;try{return e0(t,e,n)}finally{qc=!1,(Ys!==null||qs!==null)&&(t0(),Jg())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var i=Rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var fh=!1;if(Vi)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){fh=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{fh=!1}function u_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Qo=!1,Wl=null,Xl=!1,ph=null,h_={onError:function(t){Qo=!0,Wl=t}};function d_(t,e,n,i,r,s,o,a,l){Qo=!1,Wl=null,u_.apply(h_,arguments)}function f_(t,e,n,i,r,s,o,a,l){if(d_.apply(this,arguments),Qo){if(Qo){var c=Wl;Qo=!1,Wl=null}else throw Error(se(198));Xl||(Xl=!0,ph=c)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function up(t){if(us(t)!==t)throw Error(se(188))}function p_(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return up(r),t;if(s===i)return up(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function r0(t){return t=p_(t),t!==null?s0(t):null}function s0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s0(t);if(e!==null)return e;t=t.sibling}return null}var o0=zn.unstable_scheduleCallback,hp=zn.unstable_cancelCallback,m_=zn.unstable_shouldYield,g_=zn.unstable_requestPaint,Ut=zn.unstable_now,x_=zn.unstable_getCurrentPriorityLevel,$d=zn.unstable_ImmediatePriority,a0=zn.unstable_UserBlockingPriority,$l=zn.unstable_NormalPriority,v_=zn.unstable_LowPriority,l0=zn.unstable_IdlePriority,Tc=null,wi=null;function __(t){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:S_,y_=Math.log,M_=Math.LN2;function S_(t){return t>>>=0,t===0?32:31-(y_(t)/M_|0)|0}var Oa=64,ka=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Yo(a):(s&=o,s!==0&&(i=Yo(s)))}else o=n&~r,o!==0?i=Yo(o):s!==0&&(i=Yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-fi(e),r=1<<n,i|=t[n],e&=~r;return i}function E_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=E_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c0(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fi(e),t[e]=n}function T_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function u0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h0,qd,d0,f0,p0,gh=!1,za=[],hr=null,dr=null,fr=null,ha=new Map,da=new Map,or=[],b_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dp(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function Po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ra(e),e!==null&&qd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function A_(t,e,n,i,r){switch(e){case"focusin":return hr=Po(hr,t,e,n,i,r),!0;case"dragenter":return dr=Po(dr,t,e,n,i,r),!0;case"mouseover":return fr=Po(fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,Po(ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,da.set(s,Po(da.get(s)||null,t,e,n,i,r)),!0}return!1}function m0(t){var e=$r(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=i0(n),e!==null){t.blockedOn=e,p0(t.priority,function(){d0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hh=i,n.target.dispatchEvent(i),hh=null}else return e=Ra(n),e!==null&&qd(e),t.blockedOn=n,!1;e.shift()}return!0}function fp(t,e,n){Tl(t)&&n.delete(e)}function C_(){gh=!1,hr!==null&&Tl(hr)&&(hr=null),dr!==null&&Tl(dr)&&(dr=null),fr!==null&&Tl(fr)&&(fr=null),ha.forEach(fp),da.forEach(fp)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,C_)))}function fa(t){function e(r){return Lo(r,t)}if(0<za.length){Lo(za[0],t);for(var n=1;n<za.length;n++){var i=za[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&Lo(hr,t),dr!==null&&Lo(dr,t),fr!==null&&Lo(fr,t),ha.forEach(e),da.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)m0(n),n.blockedOn===null&&or.shift()}var Zs=Yi.ReactCurrentBatchConfig,ql=!0;function R_(t,e,n,i){var r=ut,s=Zs.transition;Zs.transition=null;try{ut=1,Zd(t,e,n,i)}finally{ut=r,Zs.transition=s}}function P_(t,e,n,i){var r=ut,s=Zs.transition;Zs.transition=null;try{ut=4,Zd(t,e,n,i)}finally{ut=r,Zs.transition=s}}function Zd(t,e,n,i){if(ql){var r=xh(t,e,n,i);if(r===null)ou(t,e,i,Zl,n),dp(t,i);else if(A_(r,t,e,n,i))i.stopPropagation();else if(dp(t,i),e&4&&-1<b_.indexOf(t)){for(;r!==null;){var s=Ra(r);if(s!==null&&h0(s),s=xh(t,e,n,i),s===null&&ou(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ou(t,e,i,null,n)}}var Zl=null;function xh(t,e,n,i){if(Zl=null,t=Xd(i),t=$r(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function g0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x_()){case $d:return 1;case a0:return 4;case $l:case v_:return 16;case l0:return 536870912;default:return 16}default:return 16}}var cr=null,Kd=null,bl=null;function x0(){if(bl)return bl;var t,e=Kd,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function pp(){return!1}function Hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:pp,this.isPropagationStopped=pp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=Hn(_o),Ca=Rt({},_o,{view:0,detail:0}),L_=Hn(Ca),Kc,Qc,No,bc=Rt({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Kc=t.screenX-No.screenX,Qc=t.screenY-No.screenY):Qc=Kc=0,No=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),mp=Hn(bc),N_=Rt({},bc,{dataTransfer:0}),D_=Hn(N_),I_=Rt({},Ca,{relatedTarget:0}),Jc=Hn(I_),U_=Rt({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=Hn(U_),O_=Rt({},_o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k_=Hn(O_),z_=Rt({},_o,{data:0}),gp=Hn(z_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=G_[t])?!!e[t]:!1}function Jd(){return V_}var j_=Rt({},Ca,{key:function(t){if(t.key){var e=B_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jd,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W_=Hn(j_),X_=Rt({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Hn(X_),$_=Rt({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jd}),Y_=Hn($_),q_=Rt({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z_=Hn(q_),K_=Rt({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q_=Hn(K_),J_=[9,13,27,32],ef=Vi&&"CompositionEvent"in window,Jo=null;Vi&&"documentMode"in document&&(Jo=document.documentMode);var ey=Vi&&"TextEvent"in window&&!Jo,v0=Vi&&(!ef||Jo&&8<Jo&&11>=Jo),vp=" ",_p=!1;function _0(t,e){switch(t){case"keyup":return J_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function ty(t,e){switch(t){case"compositionend":return y0(e);case"keypress":return e.which!==32?null:(_p=!0,vp);case"textInput":return t=e.data,t===vp&&_p?null:t;default:return null}}function ny(t,e){if(Ds)return t==="compositionend"||!ef&&_0(t,e)?(t=x0(),bl=Kd=cr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v0&&e.locale!=="ko"?null:e.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iy[t.type]:e==="textarea"}function M0(t,e,n,i){Qg(i),e=Kl(e,"onChange"),0<e.length&&(n=new Qd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ea=null,pa=null;function ry(t){N0(t,0)}function Ac(t){var e=Fs(t);if(Wg(e))return t}function sy(t,e){if(t==="change")return e}var S0=!1;if(Vi){var eu;if(Vi){var tu="oninput"in document;if(!tu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),tu=typeof Mp.oninput=="function"}eu=tu}else eu=!1;S0=eu&&(!document.documentMode||9<document.documentMode)}function Sp(){ea&&(ea.detachEvent("onpropertychange",E0),pa=ea=null)}function E0(t){if(t.propertyName==="value"&&Ac(pa)){var e=[];M0(e,pa,t,Xd(t)),n0(ry,e)}}function oy(t,e,n){t==="focusin"?(Sp(),ea=e,pa=n,ea.attachEvent("onpropertychange",E0)):t==="focusout"&&Sp()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(pa)}function ly(t,e){if(t==="click")return Ac(e)}function cy(t,e){if(t==="input"||t==="change")return Ac(e)}function uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mi=typeof Object.is=="function"?Object.is:uy;function ma(t,e){if(mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ju.call(e,r)||!mi(t[r],e[r]))return!1}return!0}function Ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,e){var n=Ep(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ep(n)}}function w0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?w0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T0(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hy(t){var e=T0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&w0(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wp(n,s);var o=wp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dy=Vi&&"documentMode"in document&&11>=document.documentMode,Is=null,vh=null,ta=null,_h=!1;function Tp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||Is==null||Is!==jl(i)||(i=Is,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ta&&ma(ta,i)||(ta=i,i=Kl(vh,"onSelect"),0<i.length&&(e=new Qd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Is)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},nu={},b0={};Vi&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Cc(t){if(nu[t])return nu[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b0)return nu[t]=e[n];return t}var A0=Cc("animationend"),C0=Cc("animationiteration"),R0=Cc("animationstart"),P0=Cc("transitionend"),L0=new Map,bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){L0.set(t,e),cs(e,[t])}for(var iu=0;iu<bp.length;iu++){var ru=bp[iu],fy=ru.toLowerCase(),py=ru[0].toUpperCase()+ru.slice(1);Ar(fy,"on"+py)}Ar(A0,"onAnimationEnd");Ar(C0,"onAnimationIteration");Ar(R0,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(P0,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,f_(i,e,void 0,t),t.currentTarget=null}function N0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ap(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ap(r,a,c),s=l}}}if(Xl)throw t=ph,Xl=!1,ph=null,t}function _t(t,e){var n=e[wh];n===void 0&&(n=e[wh]=new Set);var i=t+"__bubble";n.has(i)||(D0(e,t,2,!1),n.add(i))}function su(t,e,n){var i=0;e&&(i|=4),D0(n,t,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[Ga]){t[Ga]=!0,Bg.forEach(function(n){n!=="selectionchange"&&(my.has(n)||su(n,!1,t),su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,su("selectionchange",!1,e))}}function D0(t,e,n,i){switch(g0(e)){case 1:var r=R_;break;case 4:r=P_;break;default:r=Zd}n=r.bind(null,e,n,t),r=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ou(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}n0(function(){var c=s,u=Xd(n),d=[];e:{var f=L0.get(t);if(f!==void 0){var p=Qd,_=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":p=W_;break;case"focusin":_="focus",p=Jc;break;case"focusout":_="blur",p=Jc;break;case"beforeblur":case"afterblur":p=Jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Y_;break;case A0:case C0:case R0:p=F_;break;case P0:p=Z_;break;case"scroll":p=L_;break;case"wheel":p=Q_;break;case"copy":case"cut":case"paste":p=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xp}var M=(e&4)!==0,g=!M&&t==="scroll",h=M?f!==null?f+"Capture":null:f;M=[];for(var x=c,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=ua(x,h),S!=null&&M.push(xa(x,S,v)))),g)break;x=x.return}0<M.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==hh&&(_=n.relatedTarget||n.fromElement)&&($r(_)||_[ji]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?$r(_):null,_!==null&&(g=us(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(M=mp,S="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=xp,S="onPointerLeave",h="onPointerEnter",x="pointer"),g=p==null?f:Fs(p),v=_==null?f:Fs(_),f=new M(S,x+"leave",p,n,u),f.target=g,f.relatedTarget=v,S=null,$r(u)===c&&(M=new M(h,x+"enter",_,n,u),M.target=v,M.relatedTarget=g,S=M),g=S,p&&_)t:{for(M=p,h=_,x=0,v=M;v;v=ps(v))x++;for(v=0,S=h;S;S=ps(S))v++;for(;0<x-v;)M=ps(M),x--;for(;0<v-x;)h=ps(h),v--;for(;x--;){if(M===h||h!==null&&M===h.alternate)break t;M=ps(M),h=ps(h)}M=null}else M=null;p!==null&&Cp(d,f,p,M,!1),_!==null&&g!==null&&Cp(d,g,_,M,!0)}}e:{if(f=c?Fs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=sy;else if(yp(f))if(S0)C=cy;else{C=ay;var T=oy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=ly);if(C&&(C=C(t,c))){M0(d,C,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&oh(f,"number",f.value)}switch(T=c?Fs(c):window,t){case"focusin":(yp(T)||T.contentEditable==="true")&&(Is=T,vh=c,ta=null);break;case"focusout":ta=vh=Is=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,Tp(d,n,u);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":Tp(d,n,u)}var A;if(ef)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ds?_0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(v0&&n.locale!=="ko"&&(Ds||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ds&&(A=x0()):(cr=u,Kd="value"in cr?cr.value:cr.textContent,Ds=!0)),T=Kl(c,P),0<T.length&&(P=new gp(P,t,null,n,u),d.push({event:P,listeners:T}),A?P.data=A:(A=y0(n),A!==null&&(P.data=A)))),(A=ey?ty(t,n):ny(t,n))&&(c=Kl(c,"onBeforeInput"),0<c.length&&(u=new gp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}N0(d,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ua(t,n),s!=null&&i.unshift(xa(t,s,r)),s=ua(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ua(n,s),l!=null&&o.unshift(xa(n,l,a))):r||(l=ua(n,s),l!=null&&o.push(xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gy=/\r\n?/g,xy=/\u0000|\uFFFD/g;function Rp(t){return(typeof t=="string"?t:""+t).replace(gy,`
`).replace(xy,"")}function Va(t,e,n){if(e=Rp(e),Rp(t)!==e&&n)throw Error(se(425))}function Ql(){}var yh=null,Mh=null;function Sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(t){return Pp.resolve(null).then(t).catch(yy)}:Eh;function yy(t){setTimeout(function(){throw t})}function au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yo=Math.random().toString(36).slice(2),Si="__reactFiber$"+yo,va="__reactProps$"+yo,ji="__reactContainer$"+yo,wh="__reactEvents$"+yo,My="__reactListeners$"+yo,Sy="__reactHandles$"+yo;function $r(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lp(t);t!==null;){if(n=t[Si])return n;t=Lp(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[Si]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Rc(t){return t[va]||null}var Th=[],Os=-1;function Cr(t){return{current:t}}function Mt(t){0>Os||(t.current=Th[Os],Th[Os]=null,Os--)}function vt(t,e){Os++,Th[Os]=t.current,t.current=e}var Sr={},dn=Cr(Sr),An=Cr(!1),ns=Sr;function so(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Cn(t){return t=t.childContextTypes,t!=null}function Jl(){Mt(An),Mt(dn)}function Np(t,e,n){if(dn.current!==Sr)throw Error(se(168));vt(dn,e),vt(An,n)}function I0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,o_(t)||"Unknown",r));return Rt({},n,i)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ns=dn.current,vt(dn,t),vt(An,An.current),!0}function Dp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=I0(t,e,ns),i.__reactInternalMemoizedMergedChildContext=t,Mt(An),Mt(dn),vt(dn,t)):Mt(An),vt(An,n)}var Oi=null,Pc=!1,lu=!1;function U0(t){Oi===null?Oi=[t]:Oi.push(t)}function Ey(t){Pc=!0,U0(t)}function Rr(){if(!lu&&Oi!==null){lu=!0;var t=0,e=ut;try{var n=Oi;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,Pc=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),o0($d,Rr),r}finally{ut=e,lu=!1}}return null}var ks=[],zs=0,tc=null,nc=0,qn=[],Zn=0,is=null,zi=1,Bi="";function Hr(t,e){ks[zs++]=nc,ks[zs++]=tc,tc=t,nc=e}function F0(t,e,n){qn[Zn++]=zi,qn[Zn++]=Bi,qn[Zn++]=is,is=t;var i=zi;t=Bi;var r=32-fi(i)-1;i&=~(1<<r),n+=1;var s=32-fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-fi(e)+r|n<<r|i,Bi=s+t}else zi=1<<s|n<<r|i,Bi=t}function nf(t){t.return!==null&&(Hr(t,1),F0(t,1,0))}function rf(t){for(;t===tc;)tc=ks[--zs],ks[zs]=null,nc=ks[--zs],ks[zs]=null;for(;t===is;)is=qn[--Zn],qn[Zn]=null,Bi=qn[--Zn],qn[Zn]=null,zi=qn[--Zn],qn[Zn]=null}var On=null,Fn=null,St=!1,ci=null;function O0(t,e){var n=Kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,Fn=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:zi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,Fn=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(St){var e=Fn;if(e){var n=e;if(!Ip(t,e)){if(bh(t))throw Error(se(418));e=pr(n.nextSibling);var i=On;e&&Ip(t,e)?O0(i,n):(t.flags=t.flags&-4097|2,St=!1,On=t)}}else{if(bh(t))throw Error(se(418));t.flags=t.flags&-4097|2,St=!1,On=t}}}function Up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function ja(t){if(t!==On)return!1;if(!St)return Up(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sh(t.type,t.memoizedProps)),e&&(e=Fn)){if(bh(t))throw k0(),Error(se(418));for(;e;)O0(t,e),e=pr(e.nextSibling)}if(Up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=On?pr(t.stateNode.nextSibling):null;return!0}function k0(){for(var t=Fn;t;)t=pr(t.nextSibling)}function oo(){Fn=On=null,St=!1}function sf(t){ci===null?ci=[t]:ci.push(t)}var wy=Yi.ReactCurrentBatchConfig;function Do(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fp(t){var e=t._init;return e(t._payload)}function z0(t){function e(h,x){if(t){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=vr(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,x,v,S){return x===null||x.tag!==6?(x=mu(v,h.mode,S),x.return=h,x):(x=r(x,v),x.return=h,x)}function l(h,x,v,S){var C=v.type;return C===Ns?u(h,x,v.props.children,S,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nr&&Fp(C)===x.type)?(S=r(x,v.props),S.ref=Do(h,x,v),S.return=h,S):(S=Il(v.type,v.key,v.props,null,h.mode,S),S.ref=Do(h,x,v),S.return=h,S)}function c(h,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=gu(v,h.mode,S),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function u(h,x,v,S,C){return x===null||x.tag!==7?(x=es(v,h.mode,S,C),x.return=h,x):(x=r(x,v),x.return=h,x)}function d(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=mu(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ia:return v=Il(x.type,x.key,x.props,null,h.mode,v),v.ref=Do(h,null,x),v.return=h,v;case Ls:return x=gu(x,h.mode,v),x.return=h,x;case nr:var S=x._init;return d(h,S(x._payload),v)}if($o(x)||Co(x))return x=es(x,h.mode,v,null),x.return=h,x;Wa(h,x)}return null}function f(h,x,v,S){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(h,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ia:return v.key===C?l(h,x,v,S):null;case Ls:return v.key===C?c(h,x,v,S):null;case nr:return C=v._init,f(h,x,C(v._payload),S)}if($o(v)||Co(v))return C!==null?null:u(h,x,v,S,null);Wa(h,v)}return null}function p(h,x,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(x,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ia:return h=h.get(S.key===null?v:S.key)||null,l(x,h,S,C);case Ls:return h=h.get(S.key===null?v:S.key)||null,c(x,h,S,C);case nr:var T=S._init;return p(h,x,v,T(S._payload),C)}if($o(S)||Co(S))return h=h.get(v)||null,u(x,h,S,C,null);Wa(x,S)}return null}function _(h,x,v,S){for(var C=null,T=null,A=x,P=x=0,H=null;A!==null&&P<v.length;P++){A.index>P?(H=A,A=null):H=A.sibling;var y=f(h,A,v[P],S);if(y===null){A===null&&(A=H);break}t&&A&&y.alternate===null&&e(h,A),x=s(y,x,P),T===null?C=y:T.sibling=y,T=y,A=H}if(P===v.length)return n(h,A),St&&Hr(h,P),C;if(A===null){for(;P<v.length;P++)A=d(h,v[P],S),A!==null&&(x=s(A,x,P),T===null?C=A:T.sibling=A,T=A);return St&&Hr(h,P),C}for(A=i(h,A);P<v.length;P++)H=p(A,h,P,v[P],S),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?P:H.key),x=s(H,x,P),T===null?C=H:T.sibling=H,T=H);return t&&A.forEach(function(w){return e(h,w)}),St&&Hr(h,P),C}function M(h,x,v,S){var C=Co(v);if(typeof C!="function")throw Error(se(150));if(v=C.call(v),v==null)throw Error(se(151));for(var T=C=null,A=x,P=x=0,H=null,y=v.next();A!==null&&!y.done;P++,y=v.next()){A.index>P?(H=A,A=null):H=A.sibling;var w=f(h,A,y.value,S);if(w===null){A===null&&(A=H);break}t&&A&&w.alternate===null&&e(h,A),x=s(w,x,P),T===null?C=w:T.sibling=w,T=w,A=H}if(y.done)return n(h,A),St&&Hr(h,P),C;if(A===null){for(;!y.done;P++,y=v.next())y=d(h,y.value,S),y!==null&&(x=s(y,x,P),T===null?C=y:T.sibling=y,T=y);return St&&Hr(h,P),C}for(A=i(h,A);!y.done;P++,y=v.next())y=p(A,h,P,y.value,S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?P:y.key),x=s(y,x,P),T===null?C=y:T.sibling=y,T=y);return t&&A.forEach(function(O){return e(h,O)}),St&&Hr(h,P),C}function g(h,x,v,S){if(typeof v=="object"&&v!==null&&v.type===Ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ia:e:{for(var C=v.key,T=x;T!==null;){if(T.key===C){if(C=v.type,C===Ns){if(T.tag===7){n(h,T.sibling),x=r(T,v.props.children),x.return=h,h=x;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nr&&Fp(C)===T.type){n(h,T.sibling),x=r(T,v.props),x.ref=Do(h,T,v),x.return=h,h=x;break e}n(h,T);break}else e(h,T);T=T.sibling}v.type===Ns?(x=es(v.props.children,h.mode,S,v.key),x.return=h,h=x):(S=Il(v.type,v.key,v.props,null,h.mode,S),S.ref=Do(h,x,v),S.return=h,h=S)}return o(h);case Ls:e:{for(T=v.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=gu(v,h.mode,S),x.return=h,h=x}return o(h);case nr:return T=v._init,g(h,x,T(v._payload),S)}if($o(v))return _(h,x,v,S);if(Co(v))return M(h,x,v,S);Wa(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,v),x.return=h,h=x):(n(h,x),x=mu(v,h.mode,S),x.return=h,h=x),o(h)):n(h,x)}return g}var ao=z0(!0),B0=z0(!1),ic=Cr(null),rc=null,Bs=null,of=null;function af(){of=Bs=rc=null}function lf(t){var e=ic.current;Mt(ic),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){rc=t,of=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tn=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(rc===null)throw Error(se(308));Bs=t,rc.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Yr=null;function cf(t){Yr===null?Yr=[t]:Yr.push(t)}function H0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function G0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,cf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yd(t,n)}}function Op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,i){var r=t.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,M=a;switch(f=e,p=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Rt({},d,f);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=d}}function kp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Pa={},Ti=Cr(Pa),_a=Cr(Pa),ya=Cr(Pa);function qr(t){if(t===Pa)throw Error(se(174));return t}function hf(t,e){switch(vt(ya,e),vt(_a,t),vt(Ti,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}Mt(Ti),vt(Ti,e)}function lo(){Mt(Ti),Mt(_a),Mt(ya)}function V0(t){qr(ya.current);var e=qr(Ti.current),n=lh(e,t.type);e!==n&&(vt(_a,t),vt(Ti,n))}function df(t){_a.current===t&&(Mt(Ti),Mt(_a))}var At=Cr(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cu=[];function ff(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var Rl=Yi.ReactCurrentDispatcher,uu=Yi.ReactCurrentBatchConfig,rs=0,Ct=null,Bt=null,qt=null,ac=!1,na=!1,Ma=0,Ty=0;function sn(){throw Error(se(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mi(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(rs=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?Ry:Py,t=n(i,r),na){s=0;do{if(na=!1,Ma=0,25<=s)throw Error(se(301));s+=1,qt=Bt=null,e.updateQueue=null,Rl.current=Ly,t=n(i,r)}while(na)}if(Rl.current=lc,e=Bt!==null&&Bt.next!==null,rs=0,qt=Bt=Ct=null,ac=!1,e)throw Error(se(300));return t}function gf(){var t=Ma!==0;return Ma=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Ct.memoizedState=qt=t:qt=qt.next=t,qt}function ti(){if(Bt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=qt===null?Ct.memoizedState:qt.next;if(e!==null)qt=e,Bt=t;else{if(t===null)throw Error(se(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},qt===null?Ct.memoizedState=qt=t:qt=qt.next=t}return qt}function Sa(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=ti(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((rs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ct.lanes|=u,ss|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function du(t){var e=ti(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function j0(){}function W0(t,e){var n=Ct,i=ti(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,xf(Y0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,Ea(9,$0.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(se(349));rs&30||X0(n,e,r)}return r}function X0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $0(t,e,n,i){e.value=n,e.getSnapshot=i,q0(e)&&Z0(t)}function Y0(t,e,n){return n(function(){q0(e)&&Z0(t)})}function q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mi(t,n)}catch{return!0}}function Z0(t){var e=Wi(t,1);e!==null&&pi(e,t,1,-1)}function zp(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e.queue=t,t=t.dispatch=Cy.bind(null,Ct,t),[e.memoizedState,t]}function Ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function K0(){return ti().memoizedState}function Pl(t,e,n,i){var r=yi();Ct.flags|=t,r.memoizedState=Ea(1|e,n,void 0,i===void 0?null:i)}function Lc(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&pf(i,o.deps)){r.memoizedState=Ea(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Ea(1|e,n,s,i)}function Bp(t,e){return Pl(8390656,8,t,e)}function xf(t,e){return Lc(2048,8,t,e)}function Q0(t,e){return Lc(4,2,t,e)}function J0(t,e){return Lc(4,4,t,e)}function ex(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tx(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,ex.bind(null,e,t),n)}function vf(){}function nx(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ix(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function rx(t,e,n){return rs&21?(mi(n,e)||(n=c0(),Ct.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=n)}function by(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=uu.transition;uu.transition={};try{t(!1),e()}finally{ut=n,uu.transition=i}}function sx(){return ti().memoizedState}function Ay(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ox(t))ax(e,n);else if(n=H0(t,e,n,i),n!==null){var r=gn();pi(n,t,i,r),lx(n,e,i)}}function Cy(t,e,n){var i=xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ox(t))ax(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,cf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=H0(t,e,r,i),n!==null&&(r=gn(),pi(n,t,i,r),lx(n,e,i))}}function ox(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function ax(t,e){na=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yd(t,n)}}var lc={readContext:ei,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},Ry={readContext:ei,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:Bp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,ex.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ay.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:zp,useDebugValue:vf,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=zp(!1),e=t[0];return t=by.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=yi();if(St){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Kt===null)throw Error(se(349));rs&30||X0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bp(Y0.bind(null,i,s,t),[t]),i.flags|=2048,Ea(9,$0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=Kt.identifierPrefix;if(St){var n=Bi,i=zi;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ty++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Py={readContext:ei,useCallback:nx,useContext:ei,useEffect:xf,useImperativeHandle:tx,useInsertionEffect:Q0,useLayoutEffect:J0,useMemo:ix,useReducer:hu,useRef:K0,useState:function(){return hu(Sa)},useDebugValue:vf,useDeferredValue:function(t){var e=ti();return rx(e,Bt.memoizedState,t)},useTransition:function(){var t=hu(Sa)[0],e=ti().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:W0,useId:sx,unstable_isNewReconciler:!1},Ly={readContext:ei,useCallback:nx,useContext:ei,useEffect:xf,useImperativeHandle:tx,useInsertionEffect:Q0,useLayoutEffect:J0,useMemo:ix,useReducer:du,useRef:K0,useState:function(){return du(Sa)},useDebugValue:vf,useDeferredValue:function(t){var e=ti();return Bt===null?e.memoizedState=t:rx(e,Bt.memoizedState,t)},useTransition:function(){var t=du(Sa)[0],e=ti().memoizedState;return[t,e]},useMutableSource:j0,useSyncExternalStore:W0,useId:sx,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=xr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(pi(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=xr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(pi(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=xr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(pi(e,t,i,n),Cl(e,t,i))}};function Hp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,i)||!ma(r,s):!0}function cx(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=Cn(e)?ns:dn.current,i=e.contextTypes,s=(i=i!=null)?so(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Ph(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},uf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=Cn(e)?ns:dn.current,r.context=so(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nc.enqueueReplaceState(r,r.state,null),sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",i=e;do n+=s_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ny=typeof WeakMap=="function"?WeakMap:Map;function ux(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uc||(uc=!0,Hh=i),Lh(t,e)},n}function hx(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ny;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Xy.bind(null,t,e,n),e.then(t,t))}function jp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var Dy=Yi.ReactCurrentOwner,Tn=!1;function mn(t,e,n,i){e.child=t===null?B0(e,null,n,i):ao(e,t.child,n,i)}function Xp(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(St&&n&&nf(e),e.flags|=1,mn(t,e,i,r),e.child)}function $p(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dx(t,e,s,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function dx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ma(s,i)&&t.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Tn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return Nh(t,e,n,i,r)}function fx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Gs,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Gs,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Gs,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Gs,Dn),Dn|=i;return mn(t,e,r,n),e.child}function px(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nh(t,e,n,i,r){var s=Cn(n)?ns:dn.current;return s=so(e,s),Ks(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(St&&i&&nf(e),e.flags|=1,mn(t,e,n,r),e.child)}function Yp(t,e,n,i,r){if(Cn(n)){var s=!0;ec(e)}else s=!1;if(Ks(e,r),e.stateNode===null)Ll(t,e),cx(e,n,i),Ph(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=Cn(n)?ns:dn.current,c=so(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Gp(e,o,i,c),ir=!1;var f=e.memoizedState;o.state=f,sc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||An.current||ir?(typeof u=="function"&&(Rh(e,n,u,i),l=e.memoizedState),(a=ir||Hp(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,G0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=Cn(n)?ns:dn.current,l=so(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Gp(e,o,i,l),ir=!1,f=e.memoizedState,o.state=f,sc(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||An.current||ir?(typeof p=="function"&&(Rh(e,n,p,i),_=e.memoizedState),(c=ir||Hp(e,n,c,i,f,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Dh(t,e,n,i,s,r)}function Dh(t,e,n,i,r,s){px(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Dp(e,n,!1),Xi(t,e,s);i=e.stateNode,Dy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):mn(t,e,a,s),e.memoizedState=i.state,r&&Dp(e,n,!0),e.child}function mx(t){var e=t.stateNode;e.pendingContext?Np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Np(t,e.context,!1),hf(t,e.containerInfo)}function qp(t,e,n,i,r){return oo(),sf(r),e.flags|=256,mn(t,e,n,i),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function gx(t,e,n){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(At,r&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,i,0,null),t=es(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=Ih,t):_f(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Iy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=vr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=vr(a,s):(s=es(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,i}return s=t.child,t=s.sibling,i=vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function _f(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,i){return i!==null&&sf(i),ao(e,t.child,null,n),t=_f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Iy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=fu(Error(se(422))),Xa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return Xa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=fu(s,i,void 0),Xa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Tn||a){if(i=Kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),pi(i,t,r,-1))}return Tf(),i=fu(Error(se(421))),Xa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$y.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fn=pr(r.nextSibling),On=e,St=!0,ci=null,t!==null&&(qn[Zn++]=zi,qn[Zn++]=Bi,qn[Zn++]=is,zi=t.id,Bi=t.overflow,is=e),e=_f(e,i.children),e.flags|=4096,e)}function Zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ch(t.return,e,n)}function pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function xx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,n,e);else if(t.tag===19)Zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pu(e,!0,n,null,s);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uy(t,e,n){switch(e.tag){case 3:mx(e),oo();break;case 5:V0(e);break;case 1:Cn(e.type)&&ec(e);break;case 4:hf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?gx(t,e,n):(vt(At,At.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);vt(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return xx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,fx(t,e,n)}return Xi(t,e,n)}var vx,Fh,_x,yx;vx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fh=function(){};_x=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(Ti.current);var s=null;switch(n){case"input":r=rh(t,r),i=rh(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=ah(t,r),i=ah(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}ch(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};yx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Io(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Fy(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return Cn(e.type)&&Jl(),on(e),null;case 3:return i=e.stateNode,lo(),Mt(An),Mt(dn),ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(jh(ci),ci=null))),Fh(t,e),on(e),null;case 5:df(e);var r=qr(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)_x(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return on(e),null}if(t=qr(Ti.current),ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[va]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)_t(qo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":sp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":ap(i,s),_t("invalid",i)}ch(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Ua(i),op(i,s,!0);break;case"textarea":Ua(i),lp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[va]=i,vx(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)_t(qo[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":sp(t,i),r=rh(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":ap(t,i),r=ah(t,i),_t("invalid",t);break;default:r=i}ch(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Gd(t,s,l,o))}switch(n){case"input":Ua(t),op(t,i,!1);break;case"textarea":Ua(t),lp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$s(t,!!i.multiple,s,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)yx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=qr(ya.current),qr(Ti.current),ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:Va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return on(e),null;case 13:if(Mt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Fn!==null&&e.mode&1&&!(e.flags&128))k0(),oo(),e.flags|=98560,s=!1;else if(s=ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Si]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else ci!==null&&(jh(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?Gt===0&&(Gt=3):Tf())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return lo(),Fh(t,e),t===null&&ga(e.stateNode.containerInfo),on(e),null;case 10:return lf(e.type._context),on(e),null;case 17:return Cn(e.type)&&Jl(),on(e),null;case 19:if(Mt(At),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Io(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,Io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>uo&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return on(e),null}else 2*Ut()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=At.current,vt(At,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Oy(t,e){switch(rf(e),e.tag){case 1:return Cn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),Mt(An),Mt(dn),ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return df(e),null;case 13:if(Mt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(At),null;case 4:return lo(),null;case 10:return lf(e.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var $a=!1,cn=!1,ky=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function Oh(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Kp=!1;function zy(t,e){if(yh=ql,t=T0(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},ql=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:ai(e.type,M),g);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Nt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return _=Kp,Kp=!1,_}function ia(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Oh(e,n,s)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mx(t){var e=t.alternate;e!==null&&(t.alternate=null,Mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[va],delete e[wh],delete e[My],delete e[Sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sx(t){return t.tag===5||t.tag===3||t.tag===4}function Qp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}var tn=null,li=!1;function qi(t,e,n){for(n=n.child;n!==null;)Ex(t,e,n),n=n.sibling}function Ex(t,e,n){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:cn||Hs(n,e);case 6:var i=tn,r=li;tn=null,qi(t,e,n),tn=i,li=r,tn!==null&&(li?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(li?(t=tn,n=n.stateNode,t.nodeType===8?au(t.parentNode,n):t.nodeType===1&&au(t,n),fa(t)):au(tn,n.stateNode));break;case 4:i=tn,r=li,tn=n.stateNode.containerInfo,li=!0,qi(t,e,n),tn=i,li=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Oh(n,e,o),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!cn&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,qi(t,e,n),cn=i):qi(t,e,n);break;default:qi(t,e,n)}}function Jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ky),e.forEach(function(i){var r=Yy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,li=!1;break e;case 3:tn=a.stateNode.containerInfo,li=!0;break e;case 4:tn=a.stateNode.containerInfo,li=!0;break e}a=a.return}if(tn===null)throw Error(se(160));Ex(s,o,r),tn=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wx(e,t),e=e.sibling}function wx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),_i(t),i&4){try{ia(3,t,t.return),Dc(3,t)}catch(M){Nt(t,t.return,M)}try{ia(5,t,t.return)}catch(M){Nt(t,t.return,M)}}break;case 1:ni(e,t),_i(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(ni(e,t),_i(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(M){Nt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xg(r,s),uh(a,o);var c=uh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Kg(r,d):u==="dangerouslySetInnerHTML"?qg(r,d):u==="children"?ca(r,d):Gd(r,u,d,c)}switch(a){case"input":sh(r,s);break;case"textarea":$g(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$s(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(M){Nt(t,t.return,M)}}break;case 6:if(ni(e,t),_i(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Nt(t,t.return,M)}}break;case 3:if(ni(e,t),_i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(M){Nt(t,t.return,M)}break;case 4:ni(e,t),_i(t);break;case 13:ni(e,t),_i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Sf=Ut())),i&4&&Jp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||u,ni(e,t),cn=c):ni(e,t),_i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(d=Se=u;Se!==null;){switch(f=Se,p=f.child,f.tag){case 0:case 11:case 14:case 15:ia(4,f,f.return);break;case 1:Hs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Nt(i,n,M)}}break;case 5:Hs(f,f.return);break;case 22:if(f.memoizedState!==null){tm(d);continue}}p!==null?(p.return=f,Se=p):tm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zg("display",o))}catch(M){Nt(t,t.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Nt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ni(e,t),_i(t),i&4&&Jp(t);break;case 21:break;default:ni(e,t),_i(t)}}function _i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sx(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=Qp(t);Bh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Qp(t);zh(t,a,o);break;default:throw Error(se(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function By(t,e,n){Se=t,Tx(t)}function Tx(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||$a;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=$a;var c=cn;if($a=o,(cn=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?nm(r):l!==null?(l.return=o,Se=l):nm(r);for(;s!==null;)Se=s,Tx(s),s=s.sibling;Se=r,$a=a,cn=c}em(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):em(t)}}function em(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&fa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}cn||e.flags&512&&kh(e)}catch(f){Nt(e,e.return,f)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function tm(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function nm(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{kh(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{kh(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Hy=Math.ceil,cc=Yi.ReactCurrentDispatcher,yf=Yi.ReactCurrentOwner,Qn=Yi.ReactCurrentBatchConfig,rt=0,Kt=null,kt=null,nn=0,Dn=0,Gs=Cr(0),Gt=0,wa=null,ss=0,Ic=0,Mf=0,ra=null,wn=null,Sf=0,uo=1/0,Fi=null,uc=!1,Hh=null,gr=null,Ya=!1,ur=null,hc=0,sa=0,Gh=null,Nl=-1,Dl=0;function gn(){return rt&6?Ut():Nl!==-1?Nl:Nl=Ut()}function xr(t){return t.mode&1?rt&2&&nn!==0?nn&-nn:wy.transition!==null?(Dl===0&&(Dl=c0()),Dl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:g0(t.type)),t):1}function pi(t,e,n,i){if(50<sa)throw sa=0,Gh=null,Error(se(185));Aa(t,n,i),(!(rt&2)||t!==Kt)&&(t===Kt&&(!(rt&2)&&(Ic|=n),Gt===4&&ar(t,nn)),Rn(t,i),n===1&&rt===0&&!(e.mode&1)&&(uo=Ut()+500,Pc&&Rr()))}function Rn(t,e){var n=t.callbackNode;w_(t,e);var i=Yl(t,t===Kt?nn:0);if(i===0)n!==null&&hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hp(n),e===1)t.tag===0?Ey(im.bind(null,t)):U0(im.bind(null,t)),_y(function(){!(rt&6)&&Rr()}),n=null;else{switch(u0(i)){case 1:n=$d;break;case 4:n=a0;break;case 16:n=$l;break;case 536870912:n=l0;break;default:n=$l}n=Dx(n,bx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bx(t,e){if(Nl=-1,Dl=0,rt&6)throw Error(se(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=Yl(t,t===Kt?nn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=rt;rt|=2;var s=Cx();(Kt!==t||nn!==e)&&(Fi=null,uo=Ut()+500,Jr(t,e));do try{jy();break}catch(a){Ax(t,a)}while(!0);af(),cc.current=s,rt=r,kt!==null?e=0:(Kt=null,nn=0,e=Gt)}if(e!==0){if(e===2&&(r=mh(t),r!==0&&(i=r,e=Vh(t,r))),e===1)throw n=wa,Jr(t,0),ar(t,i),Rn(t,Ut()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!Gy(r)&&(e=dc(t,i),e===2&&(s=mh(t),s!==0&&(i=s,e=Vh(t,s))),e===1))throw n=wa,Jr(t,0),ar(t,i),Rn(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Gr(t,wn,Fi);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=Sf+500-Ut(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Eh(Gr.bind(null,t,wn,Fi),e);break}Gr(t,wn,Fi);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hy(i/1960))-i,10<i){t.timeoutHandle=Eh(Gr.bind(null,t,wn,Fi),i);break}Gr(t,wn,Fi);break;case 5:Gr(t,wn,Fi);break;default:throw Error(se(329))}}}return Rn(t,Ut()),t.callbackNode===n?bx.bind(null,t):null}function Vh(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=dc(t,e),t!==2&&(e=wn,wn=n,e!==null&&jh(e)),t}function jh(t){wn===null?wn=t:wn.push.apply(wn,t)}function Gy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Mf,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fi(e),i=1<<n;t[n]=-1,e&=~i}}function im(t){if(rt&6)throw Error(se(327));Qs();var e=Yl(t,0);if(!(e&1))return Rn(t,Ut()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=mh(t);i!==0&&(e=i,n=Vh(t,i))}if(n===1)throw n=wa,Jr(t,0),ar(t,e),Rn(t,Ut()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,wn,Fi),Rn(t,Ut()),null}function Ef(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(uo=Ut()+500,Pc&&Rr())}}function os(t){ur!==null&&ur.tag===0&&!(rt&6)&&Qs();var e=rt;rt|=1;var n=Qn.transition,i=ut;try{if(Qn.transition=null,ut=1,t)return t()}finally{ut=i,Qn.transition=n,rt=e,!(rt&6)&&Rr()}}function wf(){Dn=Gs.current,Mt(Gs)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vy(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:lo(),Mt(An),Mt(dn),ff();break;case 5:df(i);break;case 4:lo();break;case 13:Mt(At);break;case 19:Mt(At);break;case 10:lf(i.type._context);break;case 22:case 23:wf()}n=n.return}if(Kt=t,kt=t=vr(t.current,null),nn=Dn=e,Gt=0,wa=null,Mf=Ic=ss=0,wn=ra=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Yr=null}return t}function Ax(t,e){do{var n=kt;try{if(af(),Rl.current=lc,ac){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ac=!1}if(rs=0,qt=Bt=Ct=null,na=!1,Ma=0,yf.current=null,n===null||n.return===null){Gt=1,wa=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=jp(o);if(p!==null){p.flags&=-257,Wp(p,o,a,s,e),p.mode&1&&Vp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){Vp(s,c,e),Tf();break e}l=Error(se(426))}}else if(St&&a.mode&1){var g=jp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Wp(g,o,a,s,e),sf(co(l,a));break e}}s=l=co(l,a),Gt!==4&&(Gt=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=ux(s,l,e);Op(s,h);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gr===null||!gr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=hx(s,a,e);Op(s,S);break e}}s=s.return}while(s!==null)}Px(n)}catch(C){e=C,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function Cx(){var t=cc.current;return cc.current=lc,t===null?lc:t}function Tf(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Kt===null||!(ss&268435455)&&!(Ic&268435455)||ar(Kt,nn)}function dc(t,e){var n=rt;rt|=2;var i=Cx();(Kt!==t||nn!==e)&&(Fi=null,Jr(t,e));do try{Vy();break}catch(r){Ax(t,r)}while(!0);if(af(),rt=n,cc.current=i,kt!==null)throw Error(se(261));return Kt=null,nn=0,Gt}function Vy(){for(;kt!==null;)Rx(kt)}function jy(){for(;kt!==null&&!m_();)Rx(kt)}function Rx(t){var e=Nx(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?Px(t):kt=e,yf.current=null}function Px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Oy(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,kt=null;return}}else if(n=Fy(n,e,Dn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Gt===0&&(Gt=5)}function Gr(t,e,n){var i=ut,r=Qn.transition;try{Qn.transition=null,ut=1,Wy(t,e,n,i)}finally{Qn.transition=r,ut=i}return null}function Wy(t,e,n,i){do Qs();while(ur!==null);if(rt&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T_(t,s),t===Kt&&(kt=Kt=null,nn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ya||(Ya=!0,Dx($l,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=ut;ut=1;var a=rt;rt|=4,yf.current=null,zy(t,n),wx(n,t),hy(Mh),ql=!!yh,Mh=yh=null,t.current=n,By(n),g_(),rt=a,ut=o,Qn.transition=s}else t.current=n;if(Ya&&(Ya=!1,ur=t,hc=r),s=t.pendingLanes,s===0&&(gr=null),__(n.stateNode),Rn(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,t=Hh,Hh=null,t;return hc&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===Gh?sa++:(sa=0,Gh=t):sa=0,Rr(),null}function Qs(){if(ur!==null){var t=u0(hc),e=Qn.transition,n=ut;try{if(Qn.transition=null,ut=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,hc=0,rt&6)throw Error(se(331));var r=rt;for(rt|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:ia(8,u,s)}var d=u.child;if(d!==null)d.return=u,Se=d;else for(;Se!==null;){u=Se;var f=u.sibling,p=u.return;if(Mx(u),u===c){Se=null;break}if(f!==null){f.return=p,Se=f;break}Se=p}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var x=t.current;for(Se=x;Se!==null;){o=Se;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Se=v;else e:for(o=x;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(C){Nt(a,a.return,C)}if(a===o){Se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Se=S;break e}Se=a.return}}if(rt=r,Rr(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{ut=n,Qn.transition=e}}return!1}function rm(t,e,n){e=co(n,e),e=ux(t,e,1),t=mr(t,e,1),e=gn(),t!==null&&(Aa(t,1,e),Rn(t,e))}function Nt(t,e,n){if(t.tag===3)rm(t,t,n);else for(;e!==null;){if(e.tag===3){rm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=co(n,t),t=hx(e,t,1),e=mr(e,t,1),t=gn(),e!==null&&(Aa(e,1,t),Rn(e,t));break}}e=e.return}}function Xy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(nn&n)===n&&(Gt===4||Gt===3&&(nn&130023424)===nn&&500>Ut()-Sf?Jr(t,0):Mf|=n),Rn(t,e)}function Lx(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=gn();t=Wi(t,e),t!==null&&(Aa(t,e,n),Rn(t,n))}function $y(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lx(t,n)}function Yy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Lx(t,n)}var Nx;Nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||An.current)Tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tn=!1,Uy(t,e,n);Tn=!!(t.flags&131072)}else Tn=!1,St&&e.flags&1048576&&F0(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(t,e),t=e.pendingProps;var r=so(e,dn.current);Ks(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Cn(i)?(s=!0,ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uf(e),r.updater=Nc,e.stateNode=r,r._reactInternals=e,Ph(e,i,t,n),e=Dh(null,e,i,!0,s,n)):(e.tag=0,St&&s&&nf(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Zy(i),t=ai(i,t),r){case 0:e=Nh(null,e,i,t,n);break e;case 1:e=Yp(null,e,i,t,n);break e;case 11:e=Xp(null,e,i,t,n);break e;case 14:e=$p(null,e,i,ai(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Nh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Yp(t,e,i,r,n);case 3:e:{if(mx(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,G0(t,e),sc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=co(Error(se(423)),e),e=qp(t,e,i,n,r);break e}else if(i!==r){r=co(Error(se(424)),e),e=qp(t,e,i,n,r);break e}else for(Fn=pr(e.stateNode.containerInfo.firstChild),On=e,St=!0,ci=null,n=B0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),i===r){e=Xi(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return V0(e),t===null&&Ah(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sh(i,r)?o=null:s!==null&&Sh(i,s)&&(e.flags|=32),px(t,e),mn(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return gx(t,e,n);case 4:return hf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ao(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Xp(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(ic,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!An.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ch(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=ei(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),$p(t,e,i,r,n);case 15:return dx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Ll(t,e),e.tag=1,Cn(i)?(t=!0,ec(e)):t=!1,Ks(e,n),cx(e,i,r),Ph(e,i,r,n),Dh(null,e,i,!0,t,n);case 19:return xx(t,e,n);case 22:return fx(t,e,n)}throw Error(se(156,e.tag))};function Dx(t,e){return o0(t,e)}function qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,e,n,i){return new qy(t,e,n,i)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zy(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jd)return 11;if(t===Wd)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return es(n.children,r,s,e);case Vd:o=8,r|=8;break;case eh:return t=Kn(12,n,e,r|2),t.elementType=eh,t.lanes=s,t;case th:return t=Kn(13,n,e,r),t.elementType=th,t.lanes=s,t;case nh:return t=Kn(19,n,e,r),t.elementType=nh,t.lanes=s,t;case Vg:return Uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hg:o=10;break e;case Gg:o=9;break e;case jd:o=11;break e;case Wd:o=14;break e;case nr:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function es(t,e,n,i){return t=Kn(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=Kn(22,t,i,e),t.elementType=Vg,t.lanes=n,t.stateNode={isHidden:!1},t}function mu(t,e,n){return t=Kn(6,t,null,e),t.lanes=n,t}function gu(t,e,n){return e=Kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ky(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Af(t,e,n,i,r,s,o,a,l){return t=new Ky(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),t}function Qy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ix(t){if(!t)return Sr;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Cn(n))return I0(t,n,e)}return e}function Ux(t,e,n,i,r,s,o,a,l){return t=Af(n,i,!0,t,r,s,o,a,l),t.context=Ix(null),n=t.current,i=gn(),r=xr(n),s=Gi(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,Aa(t,r,i),Rn(t,i),t}function Fc(t,e,n,i){var r=e.current,s=gn(),o=xr(r);return n=Ix(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,o),t!==null&&(pi(t,r,o,s),Cl(t,r,o)),o}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){sm(t,e),(t=t.alternate)&&sm(t,e)}function Jy(){return null}var Fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rf(t){this._internalRoot=t}Oc.prototype.render=Rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Fc(t,e,null,null)};Oc.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Fc(null,t,null,null)}),e[ji]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=f0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&m0(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function om(){}function e1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=fc(o);s.call(c)}}var o=Ux(e,i,t,0,null,!1,!1,"",om);return t._reactRootContainer=o,t[ji]=o.current,ga(t.nodeType===8?t.parentNode:t),os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=fc(l);a.call(c)}}var l=Af(t,0,!1,null,null,!1,!1,"",om);return t._reactRootContainer=l,t[ji]=l.current,ga(t.nodeType===8?t.parentNode:t),os(function(){Fc(e,l,n,i)}),l}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=fc(o);a.call(l)}}Fc(e,o,t,r)}else o=e1(n,e,t,r,i);return fc(o)}h0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yo(e.pendingLanes);n!==0&&(Yd(e,n|1),Rn(e,Ut()),!(rt&6)&&(uo=Ut()+500,Rr()))}break;case 13:os(function(){var i=Wi(t,1);if(i!==null){var r=gn();pi(i,t,1,r)}}),Cf(t,1)}};qd=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=gn();pi(e,t,134217728,n)}Cf(t,134217728)}};d0=function(t){if(t.tag===13){var e=xr(t),n=Wi(t,e);if(n!==null){var i=gn();pi(n,t,e,i)}Cf(t,e)}};f0=function(){return ut};p0=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rc(i);if(!r)throw Error(se(90));Wg(i),sh(i,r)}}}break;case"textarea":$g(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};e0=Ef;t0=os;var t1={usingClientEntryPoint:!1,Events:[Ra,Fs,Rc,Qg,Jg,Ef]},Uo={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n1={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r0(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Tc=qa.inject(n1),wi=qa}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t1;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(se(200));return Qy(t,e,null,n)};Bn.createRoot=function(t,e){if(!Pf(t))throw Error(se(299));var n=!1,i="",r=Fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Af(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,ga(t.nodeType===8?t.parentNode:t),new Rf(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=r0(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return os(t)};Bn.hydrate=function(t,e,n){if(!kc(e))throw Error(se(200));return zc(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ux(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};Bn.render=function(t,e,n){if(!kc(e))throw Error(se(200));return zc(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!kc(t))throw Error(se(40));return t._reactRootContainer?(os(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Bn.unstable_batchedUpdates=Ef;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return zc(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Ox(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ox)}catch(t){console.error(t)}}Ox(),Og.exports=Bn;var i1=Og.exports,kx,am=i1;kx=am.createRoot,am.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="169",Js={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},r1=0,lm=1,s1=2,zx=1,Bx=2,Ui=3,Er=0,xn=1,Un=2,_r=0,eo=1,js=2,cm=3,um=4,o1=5,jr=100,a1=101,l1=102,c1=103,u1=104,h1=200,d1=201,f1=202,p1=203,Wh=204,Xh=205,m1=206,g1=207,x1=208,v1=209,_1=210,y1=211,M1=212,S1=213,E1=214,$h=0,Yh=1,qh=2,ho=3,Zh=4,Kh=5,Qh=6,Jh=7,Hx=0,w1=1,T1=2,yr=0,b1=1,A1=2,C1=3,Gx=4,R1=5,P1=6,L1=7,Vx=300,fo=301,po=302,ed=303,td=304,Bc=306,nd=1e3,Zr=1001,id=1002,bn=1003,N1=1004,Za=1005,ui=1006,xu=1007,Kr=1008,$i=1009,jx=1010,Wx=1011,Ta=1012,Nf=1013,as=1014,Ei=1015,La=1016,Df=1017,If=1018,mo=1020,Xx=35902,$x=1021,Yx=1022,di=1023,qx=1024,Zx=1025,to=1026,go=1027,Uf=1028,Ff=1029,Kx=1030,Of=1031,kf=1033,Ul=33776,Fl=33777,Ol=33778,kl=33779,rd=35840,sd=35841,od=35842,ad=35843,ld=36196,cd=37492,ud=37496,hd=37808,dd=37809,fd=37810,pd=37811,md=37812,gd=37813,xd=37814,vd=37815,_d=37816,yd=37817,Md=37818,Sd=37819,Ed=37820,wd=37821,zl=36492,Td=36494,bd=36495,Qx=36283,Ad=36284,Cd=36285,Rd=36286,D1=3200,I1=3201,Jx=0,U1=1,lr="",Yn="srgb",Pr="srgb-linear",zf="display-p3",Hc="display-p3-linear",pc="linear",yt="srgb",mc="rec709",gc="p3",ms=7680,hm=519,F1=512,O1=513,k1=514,ev=515,z1=516,B1=517,H1=518,G1=519,dm=35044,ii=35048,fm="300 es",Hi=2e3,xc=2001;class hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=Math.PI/180,Pd=180/Math.PI;function Na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function V1(t,e){return(t%e+e)%e}function vu(t,e,n){return(1-n)*t+n*e}function Fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const j1={DEG2RAD:Bl};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],M=r[0],g=r[3],h=r[6],x=r[1],v=r[4],S=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*M+a*x+l*C,s[3]=o*g+a*v+l*T,s[6]=o*h+a*S+l*A,s[1]=c*M+u*x+d*C,s[4]=c*g+u*v+d*T,s[7]=c*h+u*S+d*A,s[2]=f*M+p*x+_*C,s[5]=f*g+p*v+_*T,s[8]=f*h+p*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=f*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_u.makeScale(e,n)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,n){return this.premultiply(_u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new $e;function tv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function W1(){const t=vc("canvas");return t.style.display="block",t}const pm={};function Hl(t){t in pm||(pm[t]=!0,console.warn(t))}function X1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function $1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Y1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mm=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gm=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[Pr]:{transfer:pc,primaries:mc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Yn]:{transfer:yt,primaries:mc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hc]:{transfer:pc,primaries:gc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm)},[zf]:{transfer:yt,primaries:gc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm).convertLinearToSRGB()}},q1=new Set([Pr,Hc]),lt={enabled:!0,_workingColorSpace:Pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!q1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Oo[e].toReference,r=Oo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Oo[t].primaries},getTransfer:function(t){return t===lr?pc:Oo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Oo[e].luminanceCoefficients)}};function no(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gs;class Z1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=vc("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=no(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(no(n[i]/255)*255):n[i]=no(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K1=0;class nv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Na(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Z1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q1=0;class hn extends hs{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Zr,r=Zr,s=ui,o=Kr,a=di,l=$i,c=hn.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=Na(),this.name="",this.source=new nv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Vx;hn.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(h+1)/2,T=(u+f)/4,A=(d+M)/4,P=(_+g)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-_)*(g-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(d-M)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J1 extends hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new nv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends J1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=M;return}if(d!==M||l!==f||c!==p||u!==_){let g=1-a;const h=l*f+c*p+u*_+d*M,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,h*x);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}const S=a*x;if(l=l*g+f*S,c=c*g+p*S,u=u*g+_*S,d=d*g+M*S,g===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*p-c*f,e[n+1]=l*_+u*f+c*d-a*p,e[n+2]=c*_+u*p+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new D,xm=new wr;class ds{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Qa.subVectors(this.max,ko),xs.subVectors(e.a,ko),vs.subVectors(e.b,ko),_s.subVectors(e.c,ko),Zi.subVectors(vs,xs),Ki.subVectors(_s,vs),Ur.subVectors(xs,_s);let n=[0,-Zi.z,Zi.y,0,-Ki.z,Ki.y,0,-Ur.z,Ur.y,Zi.z,0,-Zi.x,Ki.z,0,-Ki.x,Ur.z,0,-Ur.x,-Zi.y,Zi.x,0,-Ki.y,Ki.x,0,-Ur.y,Ur.x,0];return!Eu(n,xs,vs,_s,Qa)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,xs,vs,_s,Qa))?!1:(Ja.crossVectors(Zi,Ki),n=[Ja.x,Ja.y,Ja.z],Eu(n,xs,vs,_s,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new D,new D,new D,new D,new D,new D,new D,new D],ri=new D,Ka=new ds,xs=new D,vs=new D,_s=new D,Zi=new D,Ki=new D,Ur=new D,ko=new D,Qa=new D,Ja=new D,Fr=new D;function Eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tM=new ds,zo=new D,wu=new D;class Mo{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(wu)),this.expandByPoint(zo.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new D,Tu=new D,el=new D,Qi=new D,bu=new D,tl=new D,Au=new D;class Gc{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tu.copy(e).add(n).multiplyScalar(.5),el.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(el),a=Qi.dot(this.direction),l=-Qi.dot(el),c=Qi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tu).addScaledVector(el,f),p}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){bu.subVectors(n,e),tl.subVectors(i,e),Au.crossVectors(bu,tl);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(tl.crossVectors(Qi,tl));if(l<0)return null;const c=a*this.direction.dot(bu.cross(Qi));if(c<0||l+c>o)return null;const u=-a*Qi.dot(Au);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,_,M,g){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,_,M,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,_,M,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-M*c,n[9]=-a*l,n[2]=M-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,M=c*d;n[0]=f+M*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=M+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,M=c*d;n[0]=f-M*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=M-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+M,n[1]=l*d,n[5]=M*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=M-f*d,n[8]=_*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+M,n[5]=o*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=M*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nM,e,iM)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ji.crossVectors(i,Pn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ji.crossVectors(i,Pn)),Ji.normalize(),nl.crossVectors(Pn,Ji),r[0]=Ji.x,r[4]=nl.x,r[8]=Pn.x,r[1]=Ji.y,r[5]=nl.y,r[9]=Pn.y,r[2]=Ji.z,r[6]=nl.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],M=i[6],g=i[10],h=i[14],x=i[3],v=i[7],S=i[11],C=i[15],T=r[0],A=r[4],P=r[8],H=r[12],y=r[1],w=r[5],O=r[9],k=r[13],X=r[2],Q=r[6],V=r[10],Z=r[14],N=r[3],K=r[7],J=r[11],ce=r[15];return s[0]=o*T+a*y+l*X+c*N,s[4]=o*A+a*w+l*Q+c*K,s[8]=o*P+a*O+l*V+c*J,s[12]=o*H+a*k+l*Z+c*ce,s[1]=u*T+d*y+f*X+p*N,s[5]=u*A+d*w+f*Q+p*K,s[9]=u*P+d*O+f*V+p*J,s[13]=u*H+d*k+f*Z+p*ce,s[2]=_*T+M*y+g*X+h*N,s[6]=_*A+M*w+g*Q+h*K,s[10]=_*P+M*O+g*V+h*J,s[14]=_*H+M*k+g*Z+h*ce,s[3]=x*T+v*y+S*X+C*N,s[7]=x*A+v*w+S*Q+C*K,s[11]=x*P+v*O+S*V+C*J,s[15]=x*H+v*k+S*Z+C*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],M=e[7],g=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+M*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],M=e[13],g=e[14],h=e[15],x=d*g*c-M*f*c+M*l*p-a*g*p-d*l*h+a*f*h,v=_*f*c-u*g*c-_*l*p+o*g*p+u*l*h-o*f*h,S=u*M*c-_*d*c+_*a*p-o*M*p-u*a*h+o*d*h,C=_*d*l-u*M*l-_*a*f+o*M*f+u*a*g-o*d*g,T=n*x+i*v+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(M*f*s-d*g*s-M*r*p+i*g*p+d*r*h-i*f*h)*A,e[2]=(a*g*s-M*l*s+M*r*c-i*g*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*g*s-_*f*s+_*r*p-n*g*p-u*r*h+n*f*h)*A,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*h-n*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(_*d*s-u*M*s-_*i*p+n*M*p+u*i*h-n*d*h)*A,e[10]=(o*M*s-_*a*s+_*i*c-n*M*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*M*r-_*d*r+_*i*f-n*M*f-u*i*g+n*d*g)*A,e[14]=(_*a*r-o*M*r-_*i*l+n*M*l+o*i*g-n*a*g)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,_=s*d,M=o*u,g=o*d,h=a*d,x=l*c,v=l*u,S=l*d,C=i.x,T=i.y,A=i.z;return r[0]=(1-(M+h))*C,r[1]=(p+S)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(_+v)*A,r[9]=(g-x)*A,r[10]=(1-(f+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,u=1/o,d=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,n.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Hi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Hi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===xc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Hi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let _,M;if(a===Hi)_=(o+s)*d,M=-2*d;else if(a===xc)_=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ys=new D,si=new pt,nM=new D(0,0,0),iM=new D(1,1,1),Ji=new D,nl=new D,Pn=new D,vm=new pt,_m=new wr;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rM=0;const ym=new D,Ms=new wr,Li=new pt,il=new D,Bo=new D,sM=new D,oM=new wr,Mm=new D(1,0,0),Sm=new D(0,1,0),Em=new D(0,0,1),wm={type:"added"},aM={type:"removed"},Ss={type:"childadded",child:null},Cu={type:"childremoved",child:null};class Vt extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new D,n=new Ci,i=new wr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new $e}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?il.copy(e):il.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Bo,il,this.up):Li.lookAt(il,Bo,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Li),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aM),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,sM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,oM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new D,Ni=new D,Ru=new D,Di=new D,Es=new D,ws=new D,Tm=new D,Pu=new D,Lu=new D,Nu=new D,Du=new ft,Iu=new ft,Uu=new ft;class hi{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),oi.subVectors(e,n),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){oi.subVectors(r,n),Ni.subVectors(i,n),Ru.subVectors(e,n);const o=oi.dot(oi),a=oi.dot(Ni),l=oi.dot(Ru),c=Ni.dot(Ni),u=Ni.dot(Ru),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Du.setScalar(0),Iu.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,i),Uu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Du,s.x),o.addScaledVector(Iu,s.y),o.addScaledVector(Uu,s.z),o}static isFrontFacing(e,n,i,r){return oi.subVectors(i,n),Ni.subVectors(e,n),oi.cross(Ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Es.subVectors(r,i),ws.subVectors(s,i),Pu.subVectors(e,i);const l=Es.dot(Pu),c=ws.dot(Pu);if(l<=0&&c<=0)return n.copy(i);Lu.subVectors(e,r);const u=Es.dot(Lu),d=ws.dot(Lu);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Es,o);Nu.subVectors(e,s);const p=Es.dot(Nu),_=ws.dot(Nu);if(_>=0&&p<=_)return n.copy(s);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ws,a);const g=u*_-p*d;if(g<=0&&d-u>=0&&p-_>=0)return Tm.subVectors(s,r),a=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(Tm,a);const h=1/(g+M+f);return o=M*h,a=f*h,n.copy(i).addScaledVector(Es,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=V1(e,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Fu(o,s,e+1/3),this.g=Fu(o,s,e),this.b=Fu(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const i=rv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return lt.fromWorkingColorSpace(ln.copy(this),e),Math.round(un(ln.r*255,0,255))*65536+Math.round(un(ln.g*255,0,255))*256+Math.round(un(ln.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Yn){lt.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(rl);const i=vu(er.h,rl.h,n),r=vu(er.s,rl.s,n),s=vu(er.l,rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ze;ze.NAMES=rv;let lM=0;class So extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=eo,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wh&&(i.blendSrc=this.blendSrc),this.blendDst!==Xh&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qr extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new D,sl=new Ne;class kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=dm,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}}class sv extends kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ov extends kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xt extends kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cM=0;const Wn=new pt,Ou=new Vt,Ts=new D,Ln=new ds,Ho=new ds,Yt=new D;class yn extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?ov:sv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,i){return Wn.makeTranslation(e,n,i),this.applyMatrix4(Wn),this}scale(e,n,i){return Wn.makeScale(e,n,i),this.applyMatrix4(Wn),this}lookAt(e){return Ou.lookAt(e),Ou.updateMatrix(),this.applyMatrix4(Ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Ln.min,Ho.min),Ln.expandByPoint(Yt),Yt.addVectors(Ln.max,Ho.max),Ln.expandByPoint(Yt)):(Ln.expandByPoint(Ho.min),Ln.expandByPoint(Ho.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Yt.add(Ts)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new D,l[P]=new D;const c=new D,u=new D,d=new D,f=new Ne,p=new Ne,_=new Ne,M=new D,g=new D;function h(P,H,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,H),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,H),_.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(w),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(w),a[P].add(M),a[H].add(M),a[y].add(M),l[P].add(g),l[H].add(g),l[y].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,H=x.length;P<H;++P){const y=x[P],w=y.start,O=y.count;for(let k=w,X=w+O;k<X;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new D,S=new D,C=new D,T=new D;function A(P){C.fromBufferAttribute(r,P),T.copy(C);const H=a[P];v.copy(H),v.sub(C.multiplyScalar(C.dot(H))).normalize(),S.crossVectors(T,H);const w=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,H=x.length;P<H;++P){const y=x[P],w=y.start,O=y.count;for(let k=w,X=w+O;k<X;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new kn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bm=new pt,Or=new Gc,ol=new Mo,Am=new D,al=new D,ll=new D,cl=new D,ku=new D,ul=new D,Cm=new D,hl=new D;class at extends Vt{constructor(e=new yn,n=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ku.fromBufferAttribute(d,e),o?ul.addScaledVector(ku,u):ul.addScaledVector(ku.sub(n),u))}n.add(ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(ol.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ol,Am)===null||Or.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(bm.copy(s).invert(),Or.copy(e.ray).applyMatrix4(bm),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],h=o[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const T=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=dl(this,h,e,i,c,u,d,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let g=_,h=M;g<h;g+=3){const x=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=dl(this,o,e,i,c,u,d,x,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],h=o[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const T=S,A=S+1,P=S+2;r=dl(this,h,e,i,c,u,d,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,h=M;g<h;g+=3){const x=g,v=g+1,S=g+2;r=dl(this,o,e,i,c,u,d,x,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function uM(t,e,n,i,r,s,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Er,a),l===null)return null;hl.copy(a),hl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(hl);return c<n.near||c>n.far?null:{distance:c,point:hl.clone(),object:t}}function dl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,al),t.getVertexPosition(l,ll),t.getVertexPosition(c,cl);const u=uM(t,e,n,i,al,ll,cl,Cm);if(u){const d=new D;hi.getBarycoord(Cm,al,ll,cl,d),r&&(u.uv=hi.getInterpolatedAttribute(r,a,l,c,d,new Ne)),s&&(u.uv1=hi.getInterpolatedAttribute(s,a,l,c,d,new Ne)),o&&(u.normal=hi.getInterpolatedAttribute(o,a,l,c,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};hi.getNormal(al,ll,cl,f.normal),u.face=f,u.barycoord=d}return u}class Eo extends yn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function _(M,g,h,x,v,S,C,T,A,P,H){const y=S/A,w=C/P,O=S/2,k=C/2,X=T/2,Q=A+1,V=P+1;let Z=0,N=0;const K=new D;for(let J=0;J<V;J++){const ce=J*w-k;for(let ne=0;ne<Q;ne++){const ee=ne*y-O;K[M]=ee*x,K[g]=ce*v,K[h]=X,c.push(K.x,K.y,K.z),K[M]=0,K[g]=0,K[h]=T>0?1:-1,u.push(K.x,K.y,K.z),d.push(ne/A),d.push(1-J/P),Z+=1}}for(let J=0;J<P;J++)for(let ce=0;ce<A;ce++){const ne=f+ce+Q*J,ee=f+ce+Q*(J+1),j=f+(ce+1)+Q*(J+1),re=f+(ce+1)+Q*J;l.push(ne,ee,re),l.push(ee,j,re),N+=6}a.addGroup(p,N,H),p+=N,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const r in i)e[r]=i[r]}return e}function hM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function av(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const dM={clone:xo,merge:pn};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class lv extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new D,Rm=new Ne,Pm=new Ne;class In extends lv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Pm),n.subVectors(Pm,Rm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,As=1;class mM extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(bs,As,e,n);r.layers=this.layers,this.add(r);const s=new In(bs,As,e,n);s.layers=this.layers,this.add(s);const o=new In(bs,As,e,n);o.layers=this.layers,this.add(o);const a=new In(bs,As,e,n);a.layers=this.layers,this.add(a);const l=new In(bs,As,e,n);l.layers=this.layers,this.add(l);const c=new In(bs,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class cv extends hn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:fo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gM extends ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ui}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Eo(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:_r});s.uniforms.tEquirect.value=n;const o=new at(r,s),a=n.minFilter;return n.minFilter===Kr&&(n.minFilter=ui),new mM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const zu=new D,xM=new D,vM=new $e;class ki{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zu.subVectors(i,n).cross(xM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vM.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Mo,fl=new D;class Hf{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],M=r[10],g=r[11],h=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-p,S-h).normalize(),i[1].setComponents(l+s,f+c,g+p,S+h).normalize(),i[2].setComponents(l+o,f+u,g+_,S+x).normalize(),i[3].setComponents(l-o,f-u,g-_,S-x).normalize(),i[4].setComponents(l-a,f-d,g-M,S-v).normalize(),n===Hi)i[5].setComponents(l+a,f+d,g+M,S+v).normalize();else if(n===xc)i[5].setComponents(a,d,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _M(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const M=d[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Vc extends yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],_=[],M=[],g=[];for(let h=0;h<u;h++){const x=h*f-o;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-x,0),M.push(0,0,1),g.push(v/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+c*h,S=x+c*(h+1),C=x+1+c*(h+1),T=x+1+c*h;p.push(v,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
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
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
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
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DM=`#ifdef USE_IRIDESCENCE
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
#endif`,IM=`#ifdef USE_BUMPMAP
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VM=`#define PI 3.141592653589793
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
} // validated`,jM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WM=`vec3 transformedNormal = objectNormal;
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
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`
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
}`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eS=`#ifdef USE_ENVMAP
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
#endif`,tS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
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
#endif`,iS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aS=`#ifdef USE_GRADIENTMAP
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
}`,lS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hS=`uniform bool receiveShadow;
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
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xS=`PhysicalMaterial material;
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
#endif`,vS=`struct PhysicalMaterial {
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
}`,_S=`
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
#endif`,yS=`#if defined( RE_IndirectDiffuse )
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
#endif`,MS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ES=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RS=`#if defined( USE_POINTS_UV )
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
#endif`,PS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,US=`#ifdef USE_MORPHTARGETS
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
#endif`,FS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GS=`#ifdef USE_NORMALMAP
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
#endif`,VS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
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
}`,bE=`#if DEPTH_PACKING == 3200
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
}`,AE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,UE=`#define LAMBERT
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
}`,FE=`#define LAMBERT
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
}`,OE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,zE=`#define NORMAL
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
}`,BE=`#define NORMAL
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
}`,HE=`#define PHONG
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
}`,GE=`#define PHONG
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
}`,VE=`#define STANDARD
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
}`,jE=`#define STANDARD
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
}`,WE=`#define TOON
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
}`,XE=`#define TOON
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
}`,$E=`uniform float size;
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
}`,YE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,ZE=`uniform vec3 color;
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
}`,KE=`uniform float rotation;
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
}`,QE=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:yM,alphahash_pars_fragment:MM,alphamap_fragment:SM,alphamap_pars_fragment:EM,alphatest_fragment:wM,alphatest_pars_fragment:TM,aomap_fragment:bM,aomap_pars_fragment:AM,batching_pars_vertex:CM,batching_vertex:RM,begin_vertex:PM,beginnormal_vertex:LM,bsdfs:NM,iridescence_fragment:DM,bumpmap_pars_fragment:IM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:FM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:kM,color_fragment:zM,color_pars_fragment:BM,color_pars_vertex:HM,color_vertex:GM,common:VM,cube_uv_reflection_fragment:jM,defaultnormal_vertex:WM,displacementmap_pars_vertex:XM,displacementmap_vertex:$M,emissivemap_fragment:YM,emissivemap_pars_fragment:qM,colorspace_fragment:ZM,colorspace_pars_fragment:KM,envmap_fragment:QM,envmap_common_pars_fragment:JM,envmap_pars_fragment:eS,envmap_pars_vertex:tS,envmap_physical_pars_fragment:dS,envmap_vertex:nS,fog_vertex:iS,fog_pars_vertex:rS,fog_fragment:sS,fog_pars_fragment:oS,gradientmap_pars_fragment:aS,lightmap_pars_fragment:lS,lights_lambert_fragment:cS,lights_lambert_pars_fragment:uS,lights_pars_begin:hS,lights_toon_fragment:fS,lights_toon_pars_fragment:pS,lights_phong_fragment:mS,lights_phong_pars_fragment:gS,lights_physical_fragment:xS,lights_physical_pars_fragment:vS,lights_fragment_begin:_S,lights_fragment_maps:yS,lights_fragment_end:MS,logdepthbuf_fragment:SS,logdepthbuf_pars_fragment:ES,logdepthbuf_pars_vertex:wS,logdepthbuf_vertex:TS,map_fragment:bS,map_pars_fragment:AS,map_particle_fragment:CS,map_particle_pars_fragment:RS,metalnessmap_fragment:PS,metalnessmap_pars_fragment:LS,morphinstance_vertex:NS,morphcolor_vertex:DS,morphnormal_vertex:IS,morphtarget_pars_vertex:US,morphtarget_vertex:FS,normal_fragment_begin:OS,normal_fragment_maps:kS,normal_pars_fragment:zS,normal_pars_vertex:BS,normal_vertex:HS,normalmap_pars_fragment:GS,clearcoat_normal_fragment_begin:VS,clearcoat_normal_fragment_maps:jS,clearcoat_pars_fragment:WS,iridescence_pars_fragment:XS,opaque_fragment:$S,packing:YS,premultiplied_alpha_fragment:qS,project_vertex:ZS,dithering_fragment:KS,dithering_pars_fragment:QS,roughnessmap_fragment:JS,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:aE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:hE,tonemapping_pars_fragment:dE,transmission_fragment:fE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:xE,worldpos_vertex:vE,background_vert:_E,background_frag:yE,backgroundCube_vert:ME,backgroundCube_frag:SE,cube_vert:EE,cube_frag:wE,depth_vert:TE,depth_frag:bE,distanceRGBA_vert:AE,distanceRGBA_frag:CE,equirect_vert:RE,equirect_frag:PE,linedashed_vert:LE,linedashed_frag:NE,meshbasic_vert:DE,meshbasic_frag:IE,meshlambert_vert:UE,meshlambert_frag:FE,meshmatcap_vert:OE,meshmatcap_frag:kE,meshnormal_vert:zE,meshnormal_frag:BE,meshphong_vert:HE,meshphong_frag:GE,meshphysical_vert:VE,meshphysical_frag:jE,meshtoon_vert:WE,meshtoon_frag:XE,points_vert:$E,points_frag:YE,shadow_vert:qE,shadow_frag:ZE,sprite_vert:KE,sprite_frag:QE},he={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Mi={basic:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:pn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:pn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:pn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:pn([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:pn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:pn([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:pn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:pn([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:pn([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:pn([he.lights,he.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Mi.physical={uniforms:pn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const pl={r:0,b:0,g:0},zr=new Ci,JE=new pt;function ew(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?n:e).get(v)),v}function M(x){let v=!1;const S=_(x);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===Bc)?(u===void 0&&(u=new at(new Eo(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:xo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zr.copy(v.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(zr)),u.material.toneMapped=lt.getTransfer(S.colorSpace)!==yt,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new at(new Vc(2,2),new Tr({name:"BackgroundMaterial",uniforms:xo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(S.colorSpace)!==yt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,v){x.getRGB(pl,av(t)),i.buffers.color.setClear(pl.r,pl.g,pl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:M,addToRenderList:g}}function tw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,w,O,k,X){let Q=!1;const V=d(k,O,w);s!==V&&(s=V,c(s.object)),Q=p(y,k,O,X),Q&&_(y,k,O,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(y,w,O,k),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,w,O){const k=O.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let Q=X[w.id];Q===void 0&&(Q={},X[w.id]=Q);let V=Q[k];return V===void 0&&(V=f(l()),Q[k]=V),V}function f(y){const w=[],O=[],k=[];for(let X=0;X<n;X++)w[X]=0,O[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,w,O,k){const X=s.attributes,Q=w.attributes;let V=0;const Z=O.getAttributes();for(const N in Z)if(Z[N].location>=0){const J=X[N];let ce=Q[N];if(ce===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function _(y,w,O,k){const X={},Q=w.attributes;let V=0;const Z=O.getAttributes();for(const N in Z)if(Z[N].location>=0){let J=Q[N];J===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),X[N]=ce,V++}s.attributes=X,s.attributesNum=V,s.index=k}function M(){const y=s.newAttributes;for(let w=0,O=y.length;w<O;w++)y[w]=0}function g(y){h(y,0)}function h(y,w){const O=s.newAttributes,k=s.enabledAttributes,X=s.attributeDivisors;O[y]=1,k[y]===0&&(t.enableVertexAttribArray(y),k[y]=1),X[y]!==w&&(t.vertexAttribDivisor(y,w),X[y]=w)}function x(){const y=s.newAttributes,w=s.enabledAttributes;for(let O=0,k=w.length;O<k;O++)w[O]!==y[O]&&(t.disableVertexAttribArray(O),w[O]=0)}function v(y,w,O,k,X,Q,V){V===!0?t.vertexAttribIPointer(y,w,O,X,Q):t.vertexAttribPointer(y,w,O,k,X,Q)}function S(y,w,O,k){M();const X=k.attributes,Q=O.getAttributes(),V=w.defaultAttributeValues;for(const Z in Q){const N=Q[Z];if(N.location>=0){let K=X[Z];if(K===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const J=K.normalized,ce=K.itemSize,ne=e.get(K);if(ne===void 0)continue;const ee=ne.buffer,j=ne.type,re=ne.bytesPerElement,de=j===t.INT||j===t.UNSIGNED_INT||K.gpuType===Nf;if(K.isInterleavedBufferAttribute){const pe=K.data,Fe=pe.stride,Pe=K.offset;if(pe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<N.locationSize;Ke++)h(N.location+Ke,pe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ke=0;Ke<N.locationSize;Ke++)g(N.location+Ke);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let Ke=0;Ke<N.locationSize;Ke++)v(N.location+Ke,ce/N.locationSize,j,J,Fe*re,(Pe+ce/N.locationSize*Ke)*re,de)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<N.locationSize;pe++)h(N.location+pe,K.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<N.locationSize;pe++)g(N.location+pe);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let pe=0;pe<N.locationSize;pe++)v(N.location+pe,ce/N.locationSize,j,J,ce*re,ce/N.locationSize*pe*re,de)}}else if(V!==void 0){const J=V[Z];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(N.location,J);break;case 3:t.vertexAttrib3fv(N.location,J);break;case 4:t.vertexAttrib4fv(N.location,J);break;default:t.vertexAttrib1fv(N.location,J)}}}}x()}function C(){P();for(const y in i){const w=i[y];for(const O in w){const k=w[O];for(const X in k)u(k[X].object),delete k[X];delete w[O]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const O in w){const k=w[O];for(const X in k)u(k[X].object),delete k[X];delete w[O]}delete i[y.id]}function A(y){for(const w in i){const O=i[w];if(O[y.id]===void 0)continue;const k=O[y.id];for(const X in k)u(k[X].object),delete k[X];delete O[y.id]}}function P(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:H,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function nw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let M=0;M<d;M++)_+=u[M];for(let M=0;M<f.length;M++)n.update(_,i,f[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==di&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==$i&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ei&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:T}}function rw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ki,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const x=s?0:i,v=x*4;let S=h.clippingState||null;l.value=S,S=u(_,f,v,p);for(let C=0;C!==v;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const h=p+M*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<h)&&(g=new Float32Array(h));for(let v=0,S=p;v!==M;++v,S+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function sw(t){let e=new WeakMap;function n(o,a){return a===ed?o.mapping=fo:a===td&&(o.mapping=po),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ed||a===td)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hv extends lv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ws=4,Lm=[.125,.215,.35,.446,.526,.582],Wr=20,Bu=new hv,Nm=new ze;let Hu=null,Gu=0,Vu=0,ju=!1;const Vr=(1+Math.sqrt(5))/2,Cs=1/Vr,Dm=[new D(-Vr,Cs,0),new D(Vr,Cs,0),new D(-Cs,0,Vr),new D(Cs,0,Vr),new D(0,Vr,-Cs),new D(0,Vr,Cs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Gu,Vu),this._renderer.xr.enabled=ju,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:La,format:di,colorSpace:Pr,depthBuffer:!1},r=Im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ow(s)),this._blurMaterial=aw(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,Bu)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nm),u.toneMapping=yr,u.autoClear=!1;const p=new Qr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new at(new Eo,p);let M=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,M=!0):(p.color.copy(Nm),M=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;ml(r,x*v,h>2?v:0,v,v),u.setRenderTarget(r),M&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fo||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dm[(r-s-1)%Dm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new at(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),M=s/_,g=isFinite(s)?1+Math.floor(u*M):Wr;g>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wr}`);const h=[];let x=0;for(let A=0;A<Wr;++A){const P=A/M,H=Math.exp(-P*P/2);h.push(H),A===0?x+=H:A<g&&(x+=2*H)}for(let A=0;A<h.length;A++)h[A]=h[A]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-Ws?r-v+Ws:0),T=4*(this._cubeSize-S);ml(n,C,T,3*S,2*S),l.setRenderTarget(n),l.render(d,Bu)}}function ow(t){const e=[],n=[],i=[];let r=t;const s=t-Ws+1+Lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ws?l=Lm[o-t+Ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,M=3,g=2,h=1,x=new Float32Array(M*_*p),v=new Float32Array(g*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,H=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(H,M*_*T),v.set(f,g*_*T);const y=[T,T,T,T,T,T];S.set(y,h*_*T)}const C=new yn;C.setAttribute("position",new kn(x,M)),C.setAttribute("uv",new kn(v,g)),C.setAttribute("faceIndex",new kn(S,h)),e.push(C),r>Ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Im(t,e,n){const i=new ls(t,e,n);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aw(t,e,n){const i=new Float32Array(Wr),r=new D(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Um(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Fm(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Gf(){return`

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
	`}function lw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ed||l===td,u=l===fo||l===po;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Ld(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Ld(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function cw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let g=0,h=M.length;g<h;g++)e.remove(M[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const M=p[_];for(let g=0,h=M.length;g<h;g++)e.update(M[g],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let M=0;if(p!==null){const x=p.array;M=p.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],T=x[v+1],A=x[v+2];f.push(C,T,T,A,A,C)}}else if(_!==void 0){const x=_.array;M=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,T=v+1,A=v+2;f.push(C,T,T,A,A,C)}}else return;const g=new(tv(f)?ov:sv)(f,1);g.version=M;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function hw(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*o,_),n.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let g=0;for(let h=0;h<_;h++)g+=p[h];n.update(g,i,1)}function d(f,p,_,M){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],M[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,M,0,_);let h=0;for(let x=0;x<_;x++)h+=p[x];for(let x=0;x<M.length;x++)n.update(h,i,M[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fw(t,e,n){const i=new WeakMap,r=new ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),g===!0&&(S=3);let C=a.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*d),P=new iv(A,C,T,d);P.type=Ei,P.needsUpdate=!0;const H=S*4;for(let w=0;w<d;w++){const O=h[w],k=x[w],X=v[w],Q=C*T*4*w;for(let V=0;V<O.count;V++){const Z=V*H;_===!0&&(r.fromBufferAttribute(O,V),A[Q+Z+0]=r.x,A[Q+Z+1]=r.y,A[Q+Z+2]=r.z,A[Q+Z+3]=0),M===!0&&(r.fromBufferAttribute(k,V),A[Q+Z+4]=r.x,A[Q+Z+5]=r.y,A[Q+Z+6]=r.z,A[Q+Z+7]=0),g===!0&&(r.fromBufferAttribute(X,V),A[Q+Z+8]=r.x,A[Q+Z+9]=r.y,A[Q+Z+10]=r.z,A[Q+Z+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new Ne(C,T)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function pw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class dv extends hn{constructor(e,n,i,r,s,o,a,l,c,u=to){if(u!==to&&u!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===to&&(i=as),i===void 0&&u===go&&(i=mo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fv=new hn,Om=new dv(1,1),pv=new iv,mv=new eM,gv=new cv,km=[],zm=[],Bm=new Float32Array(16),Hm=new Float32Array(9),Gm=new Float32Array(4);function wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=km[r];if(s===void 0&&(s=new Float32Array(r),km[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jc(t,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function _w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(jt(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Wt(n,i)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(jt(n,i))return;Hm.set(i),t.uniformMatrix3fv(this.addr,!1,Hm),Wt(n,i)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(jt(n,i))return;Bm.set(i),t.uniformMatrix4fv(this.addr,!1,Bm),Wt(n,i)}}function Sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function bw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Om.compareFunction=ev,s=Om):s=fv,n.setTexture2D(e||s,r)}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mv,r)}function Nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gv,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||pv,r)}function Iw(t){switch(t){case 5126:return mw;case 35664:return gw;case 35665:return xw;case 35666:return vw;case 35674:return _w;case 35675:return yw;case 35676:return Mw;case 5124:case 35670:return Sw;case 35667:case 35671:return Ew;case 35668:case 35672:return ww;case 35669:case 35673:return Tw;case 5125:return bw;case 36294:return Aw;case 36295:return Cw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Uw(t,e){t.uniform1fv(this.addr,e)}function Fw(t,e){const n=wo(e,this.size,2);t.uniform2fv(this.addr,n)}function Ow(t,e){const n=wo(e,this.size,3);t.uniform3fv(this.addr,n)}function kw(t,e){const n=wo(e,this.size,4);t.uniform4fv(this.addr,n)}function zw(t,e){const n=wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Bw(t,e){const n=wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Hw(t,e){const n=wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Gw(t,e){t.uniform1iv(this.addr,e)}function Vw(t,e){t.uniform2iv(this.addr,e)}function jw(t,e){t.uniform3iv(this.addr,e)}function Ww(t,e){t.uniform4iv(this.addr,e)}function Xw(t,e){t.uniform1uiv(this.addr,e)}function $w(t,e){t.uniform2uiv(this.addr,e)}function Yw(t,e){t.uniform3uiv(this.addr,e)}function qw(t,e){t.uniform4uiv(this.addr,e)}function Zw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||fv,s[o])}function Kw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||mv,s[o])}function Qw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||gv,s[o])}function Jw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||pv,s[o])}function e2(t){switch(t){case 5126:return Uw;case 35664:return Fw;case 35665:return Ow;case 35666:return kw;case 35674:return zw;case 35675:return Bw;case 35676:return Hw;case 5124:case 35670:return Gw;case 35667:case 35671:return Vw;case 35668:case 35672:return jw;case 35669:case 35673:return Ww;case 5125:return Xw;case 36294:return $w;case 36295:return Yw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return Jw}}class t2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Iw(n.type)}}class n2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=e2(n.type)}}class i2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function Vm(t,e){t.seq.push(e),t.map[e.id]=e}function r2(t,e,n){const i=t.name,r=i.length;for(Wu.lastIndex=0;;){const s=Wu.exec(i),o=Wu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vm(n,c===void 0?new t2(a,t,e):new n2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new i2(a),Vm(n,d)),n=d}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);r2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const s2=37297;let o2=0;function a2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function l2(t){const e=lt.getPrimaries(lt.workingColorSpace),n=lt.getPrimaries(t);let i;switch(e===n?i="":e===gc&&n===mc?i="LinearDisplayP3ToLinearSRGB":e===mc&&n===gc&&(i="LinearSRGBToLinearDisplayP3"),t){case Pr:case Hc:return[i,"LinearTransferOETF"];case Yn:case zf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+a2(t.getShaderSource(e),o)}else return r}function c2(t,e){const n=l2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function u2(t,e){let n;switch(e){case b1:n="Linear";break;case A1:n="Reinhard";break;case C1:n="Cineon";break;case Gx:n="ACESFilmic";break;case P1:n="AgX";break;case L1:n="Neutral";break;case R1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gl=new D;function h2(){lt.getLuminanceCoefficients(gl);const t=gl.x.toFixed(4),e=gl.y.toFixed(4),n=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function f2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function p2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Zo(t){return t!==""}function Xm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(t){return t.replace(m2,x2)}const g2=new Map;function x2(t,e){let n=Xe[e];if(n===void 0){const i=g2.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nd(n)}const v2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(t){return t.replace(v2,_2)}function _2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function y2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Bx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function M2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function E2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Hx:e="ENVMAP_BLENDING_MULTIPLY";break;case w1:e="ENVMAP_BLENDING_MIX";break;case T1:e="ENVMAP_BLENDING_ADD";break}return e}function w2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function T2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=y2(n),c=M2(n),u=S2(n),d=E2(n),f=w2(n),p=d2(n),_=f2(s),M=r.createProgram();let g,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zo).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zo).join(`
`),h.length>0&&(h+=`
`)):(g=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),h=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==yr?u2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,c2("linearToOutputTexel",n.outputColorSpace),h2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zo).join(`
`)),o=Nd(o),o=Xm(o,n),o=$m(o,n),a=Nd(a),a=Xm(a,n),a=$m(a,n),o=Ym(o),a=Ym(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+g+o,S=x+h+a,C=jm(r,r.VERTEX_SHADER,v),T=jm(r,r.FRAGMENT_SHADER,S);r.attachShader(M,C),r.attachShader(M,T),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(w){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(M).trim(),k=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(T).trim();let Q=!0,V=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,C,T);else{const Z=Wm(r,C,"vertex"),N=Wm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+Z+`
`+N)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||X==="")&&(V=!1);V&&(w.diagnostics={runnable:Q,programLog:O,vertexShader:{log:k,prefix:g},fragmentShader:{log:X,prefix:h}})}r.deleteShader(C),r.deleteShader(T),P=new Gl(r,M),H=p2(r,M)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let H;this.getAttributes=function(){return H===void 0&&A(this),H};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,s2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=o2++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=T,this}let b2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new C2(e),n.set(e,i)),i}}class C2{constructor(e){this.id=b2++,this.code=e,this.usedTimes=0}}function R2(t,e,n,i,r,s,o){const a=new Bf,l=new A2,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,w,O,k,X){const Q=k.fog,V=X.geometry,Z=y.isMeshStandardMaterial?k.environment:null,N=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),K=N&&N.mapping===Bc?N.image.height:null,J=M[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=ce!==void 0?ce.length:0;let ee=0;V.morphAttributes.position!==void 0&&(ee=1),V.morphAttributes.normal!==void 0&&(ee=2),V.morphAttributes.color!==void 0&&(ee=3);let j,re,de,pe;if(J){const Qt=Mi[J];j=Qt.vertexShader,re=Qt.fragmentShader}else j=y.vertexShader,re=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const Fe=t.getRenderTarget(),Pe=X.isInstancedMesh===!0,Ke=X.isBatchedMesh===!0,Je=!!y.map,ke=!!y.matcap,L=!!N,Pt=!!y.aoMap,He=!!y.lightMap,Ye=!!y.bumpMap,Ae=!!y.normalMap,it=!!y.displacementMap,Ce=!!y.emissiveMap,R=!!y.metalnessMap,E=!!y.roughnessMap,z=y.anisotropy>0,q=y.clearcoat>0,ie=y.dispersion>0,Y=y.iridescence>0,Te=y.sheen>0,le=y.transmission>0,ue=z&&!!y.anisotropyMap,et=q&&!!y.clearcoatMap,oe=q&&!!y.clearcoatNormalMap,_e=q&&!!y.clearcoatRoughnessMap,De=Y&&!!y.iridescenceMap,Ue=Y&&!!y.iridescenceThicknessMap,ye=Te&&!!y.sheenColorMap,qe=Te&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,st=!!y.specularColorMap,I=!!y.specularIntensityMap,xe=le&&!!y.transmissionMap,W=le&&!!y.thicknessMap,te=!!y.gradientMap,me=!!y.alphaMap,ve=y.alphaTest>0,Ie=!!y.alphaHash,Et=!!y.extensions;let Xt=yr;y.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const nt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:re,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&X._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&X.instanceColor!==null,instancingMorph:Pe&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Pr,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:ke,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:K,aoMap:Pt,lightMap:He,bumpMap:Ye,normalMap:Ae,displacementMap:p&&it,emissiveMap:Ce,normalMapObjectSpace:Ae&&y.normalMapType===U1,normalMapTangentSpace:Ae&&y.normalMapType===Jx,metalnessMap:R,roughnessMap:E,anisotropy:z,anisotropyMap:ue,clearcoat:q,clearcoatMap:et,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:ie,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:Ue,sheen:Te,sheenColorMap:ye,sheenRoughnessMap:qe,specularMap:Oe,specularColorMap:st,specularIntensityMap:I,transmission:le,transmissionMap:xe,thicknessMap:W,gradientMap:te,opaque:y.transparent===!1&&y.blending===eo&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:ve,alphaHash:Ie,combine:y.combine,mapUv:Je&&g(y.map.channel),aoMapUv:Pt&&g(y.aoMap.channel),lightMapUv:He&&g(y.lightMap.channel),bumpMapUv:Ye&&g(y.bumpMap.channel),normalMapUv:Ae&&g(y.normalMap.channel),displacementMapUv:it&&g(y.displacementMap.channel),emissiveMapUv:Ce&&g(y.emissiveMap.channel),metalnessMapUv:R&&g(y.metalnessMap.channel),roughnessMapUv:E&&g(y.roughnessMap.channel),anisotropyMapUv:ue&&g(y.anisotropyMap.channel),clearcoatMapUv:et&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(y.sheenRoughnessMap.channel),specularMapUv:Oe&&g(y.specularMap.channel),specularColorMapUv:st&&g(y.specularColorMap.channel),specularIntensityMapUv:I&&g(y.specularIntensityMap.channel),transmissionMapUv:xe&&g(y.transmissionMap.channel),thicknessMapUv:W&&g(y.thicknessMap.channel),alphaMapUv:me&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ae||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!V.attributes.uv&&(Je||me),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function x(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)w.push(O),w.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(v(w,y),S(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function v(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const w=M[y.type];let O;if(w){const k=Mi[w];O=dM.clone(k.uniforms)}else O=y.uniforms;return O}function T(y,w){let O;for(let k=0,X=u.length;k<X;k++){const Q=u[k];if(Q.cacheKey===w){O=Q,++O.usedTimes;break}}return O===void 0&&(O=new T2(t,w,y,s),u.push(O)),O}function A(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function H(){l.dispose()}return{getParameters:h,getProgramCacheKey:x,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:H}}function P2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function L2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Km(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,_,M,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:M,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=M,h.group=g),e++,h}function a(d,f,p,_,M,g){const h=o(d,f,p,_,M,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,_,M,g){const h=o(d,f,p,_,M,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||L2),i.length>1&&i.sort(f||Zm),r.length>1&&r.sort(f||Zm)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function N2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Km,t.set(i,[o])):r>=s.length?(o=new Km,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function D2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new ze};break;case"SpotLight":n={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function I2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let U2=0;function F2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function O2(t){const e=new D2,n=I2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new pt,o=new pt;function a(c){let u=0,d=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,_=0,M=0,g=0,h=0,x=0,v=0,S=0,C=0,T=0,A=0;c.sort(F2);for(let H=0,y=c.length;H<y;H++){const w=c[H],O=w.color,k=w.intensity,X=w.distance,Q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=O.r*k,d+=O.g*k,f+=O.b*k;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],k);A++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,N=n.get(w);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=w.shadow.matrix,x++}i.directional[p]=V,p++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(O).multiplyScalar(k),V.distance=X,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[M]=V;const Z=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,Z.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[M]=Z.matrix,w.castShadow){const N=n.get(w);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[M]=N,i.spotShadowMap[M]=Q,S++}M++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(O).multiplyScalar(k),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const Z=w.shadow,N=n.get(w);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=w.shadow.matrix,v++}i.point[_]=V,_++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(k),V.groundColor.copy(w.groundColor).multiplyScalar(k),i.hemi[h]=V,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==M||P.rectAreaLength!==g||P.hemiLength!==h||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=p,P.pointLength=_,P.spotLength=M,P.rectAreaLength=g,P.hemiLength=h,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=A,i.version=U2++)}function l(c,u){let d=0,f=0,p=0,_=0,M=0;const g=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const v=c[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function Qm(t){const e=new O2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function k2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Qm(t),e.set(r,[a])):s>=o.length?(a=new Qm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class z2 extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B2 extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G2=`uniform sampler2D shadow_pass;
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
}`;function V2(t,e,n){let i=new Hf;const r=new Ne,s=new Ne,o=new ft,a=new z2({depthPacking:I1}),l=new B2,c={},u=n.maxTextureSize,d={[Er]:xn,[xn]:Er,[Un]:Un},f=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:H2,fragmentShader:G2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new yn;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new at(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zx;let h=this.type;this.render=function(T,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const H=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),O=t.state;O.setBlending(_r),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=h!==Ui&&this.type===Ui,X=h===Ui&&this.type!==Ui;for(let Q=0,V=T.length;Q<V;Q++){const Z=T[Q],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||k===!0||X===!0){const ce=this.type!==Ui?{minFilter:bn,magFilter:bn}:{};N.map!==null&&N.map.dispose(),N.map=new ls(r.x,r.y,ce),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const J=N.getViewportCount();for(let ce=0;ce<J;ce++){const ne=N.getViewport(ce);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),O.viewport(o),N.updateMatrices(Z,ce),i=N.getFrustum(),S(A,P,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===Ui&&x(N,P),N.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(H,y,w)};function x(T,A){const P=e.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ls(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,f,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,p,M,null)}function v(T,A,P,H){let y=null;const w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=y.uuid,k=A.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let Q=X[k];Q===void 0&&(Q=y.clone(),X[k]=Q,A.addEventListener("dispose",C)),y=Q}if(y.visible=A.visible,y.wireframe=A.wireframe,H===Ui?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=t.properties.get(y);O.light=P}return y}function S(T,A,P,H,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Ui)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const k=e.update(T),X=T.material;if(Array.isArray(X)){const Q=k.groups;for(let V=0,Z=Q.length;V<Z;V++){const N=Q[V],K=X[N.materialIndex];if(K&&K.visible){const J=v(T,K,H,y);T.onBeforeShadow(t,T,A,P,k,J,N),t.renderBufferDirect(P,null,k,J,T,N),T.onAfterShadow(t,T,A,P,k,J,N)}}}else if(X.visible){const Q=v(T,X,H,y);T.onBeforeShadow(t,T,A,P,k,Q,null),t.renderBufferDirect(P,null,k,Q,T,null),T.onAfterShadow(t,T,A,P,k,Q,null)}}const O=T.children;for(let k=0,X=O.length;k<X;k++)S(O[k],A,P,H,y)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const H=c[P],y=T.target.uuid;y in H&&(H[y].dispose(),delete H[y])}}}const j2={[$h]:Yh,[qh]:Qh,[Zh]:Jh,[ho]:Kh,[Yh]:$h,[Qh]:qh,[Jh]:Zh,[Kh]:ho};function W2(t){function e(){let I=!1;const xe=new ft;let W=null;const te=new ft(0,0,0,0);return{setMask:function(me){W!==me&&!I&&(t.colorMask(me,me,me,me),W=me)},setLocked:function(me){I=me},setClear:function(me,ve,Ie,Et,Xt){Xt===!0&&(me*=Et,ve*=Et,Ie*=Et),xe.set(me,ve,Ie,Et),te.equals(xe)===!1&&(t.clearColor(me,ve,Ie,Et),te.copy(xe))},reset:function(){I=!1,W=null,te.set(-1,0,0,0)}}}function n(){let I=!1,xe=!1,W=null,te=null,me=null;return{setReversed:function(ve){xe=ve},setTest:function(ve){ve?de(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(ve){W!==ve&&!I&&(t.depthMask(ve),W=ve)},setFunc:function(ve){if(xe&&(ve=j2[ve]),te!==ve){switch(ve){case $h:t.depthFunc(t.NEVER);break;case Yh:t.depthFunc(t.ALWAYS);break;case qh:t.depthFunc(t.LESS);break;case ho:t.depthFunc(t.LEQUAL);break;case Zh:t.depthFunc(t.EQUAL);break;case Kh:t.depthFunc(t.GEQUAL);break;case Qh:t.depthFunc(t.GREATER);break;case Jh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){I=ve},setClear:function(ve){me!==ve&&(t.clearDepth(ve),me=ve)},reset:function(){I=!1,W=null,te=null,me=null}}}function i(){let I=!1,xe=null,W=null,te=null,me=null,ve=null,Ie=null,Et=null,Xt=null;return{setTest:function(nt){I||(nt?de(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(nt){xe!==nt&&!I&&(t.stencilMask(nt),xe=nt)},setFunc:function(nt,Qt,Gn){(W!==nt||te!==Qt||me!==Gn)&&(t.stencilFunc(nt,Qt,Gn),W=nt,te=Qt,me=Gn)},setOp:function(nt,Qt,Gn){(ve!==nt||Ie!==Qt||Et!==Gn)&&(t.stencilOp(nt,Qt,Gn),ve=nt,Ie=Qt,Et=Gn)},setLocked:function(nt){I=nt},setClear:function(nt){Xt!==nt&&(t.clearStencil(nt),Xt=nt)},reset:function(){I=!1,xe=null,W=null,te=null,me=null,ve=null,Ie=null,Et=null,Xt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,_=!1,M=null,g=null,h=null,x=null,v=null,S=null,C=null,T=new ze(0,0,0),A=0,P=!1,H=null,y=null,w=null,O=null,k=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,V=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=V>=2);let N=null,K={};const J=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),ne=new ft().fromArray(J),ee=new ft().fromArray(ce);function j(I,xe,W,te){const me=new Uint8Array(4),ve=t.createTexture();t.bindTexture(I,ve),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<W;Ie++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(xe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ve}const re={};re[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(ho),He(!1),Ye(lm),de(t.CULL_FACE),L(_r);function de(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function pe(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Fe(I,xe){return u[I]!==xe?(t.bindFramebuffer(I,xe),u[I]=xe,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=xe),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function Pe(I,xe){let W=f,te=!1;if(I){W=d.get(xe),W===void 0&&(W=[],d.set(xe,W));const me=I.textures;if(W.length!==me.length||W[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ie=me.length;ve<Ie;ve++)W[ve]=t.COLOR_ATTACHMENT0+ve;W.length=me.length,te=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,te=!0);te&&t.drawBuffers(W)}function Ke(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const Je={[jr]:t.FUNC_ADD,[a1]:t.FUNC_SUBTRACT,[l1]:t.FUNC_REVERSE_SUBTRACT};Je[c1]=t.MIN,Je[u1]=t.MAX;const ke={[h1]:t.ZERO,[d1]:t.ONE,[f1]:t.SRC_COLOR,[Wh]:t.SRC_ALPHA,[_1]:t.SRC_ALPHA_SATURATE,[x1]:t.DST_COLOR,[m1]:t.DST_ALPHA,[p1]:t.ONE_MINUS_SRC_COLOR,[Xh]:t.ONE_MINUS_SRC_ALPHA,[v1]:t.ONE_MINUS_DST_COLOR,[g1]:t.ONE_MINUS_DST_ALPHA,[y1]:t.CONSTANT_COLOR,[M1]:t.ONE_MINUS_CONSTANT_COLOR,[S1]:t.CONSTANT_ALPHA,[E1]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,xe,W,te,me,ve,Ie,Et,Xt,nt){if(I===_r){_===!0&&(pe(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),I!==o1){if(I!==M||nt!==P){if((g!==jr||v!==jr)&&(t.blendEquation(t.FUNC_ADD),g=jr,v=jr),nt)switch(I){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case js:t.blendFunc(t.ONE,t.ONE);break;case cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case um:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case js:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case um:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,x=null,S=null,C=null,T.set(0,0,0),A=0,M=I,P=nt}return}me=me||xe,ve=ve||W,Ie=Ie||te,(xe!==g||me!==v)&&(t.blendEquationSeparate(Je[xe],Je[me]),g=xe,v=me),(W!==h||te!==x||ve!==S||Ie!==C)&&(t.blendFuncSeparate(ke[W],ke[te],ke[ve],ke[Ie]),h=W,x=te,S=ve,C=Ie),(Et.equals(T)===!1||Xt!==A)&&(t.blendColor(Et.r,Et.g,Et.b,Xt),T.copy(Et),A=Xt),M=I,P=!1}function Pt(I,xe){I.side===Un?pe(t.CULL_FACE):de(t.CULL_FACE);let W=I.side===xn;xe&&(W=!W),He(W),I.blending===eo&&I.transparent===!1?L(_r):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;o.setTest(te),te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){H!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),H=I)}function Ye(I){I!==r1?(de(t.CULL_FACE),I!==y&&(I===lm?t.cullFace(t.BACK):I===s1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),y=I}function Ae(I){I!==w&&(Q&&t.lineWidth(I),w=I)}function it(I,xe,W){I?(de(t.POLYGON_OFFSET_FILL),(O!==xe||k!==W)&&(t.polygonOffset(xe,W),O=xe,k=W)):pe(t.POLYGON_OFFSET_FILL)}function Ce(I){I?de(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+X-1),N!==I&&(t.activeTexture(I),N=I)}function E(I,xe,W){W===void 0&&(N===null?W=t.TEXTURE0+X-1:W=N);let te=K[W];te===void 0&&(te={type:void 0,texture:void 0},K[W]=te),(te.type!==I||te.texture!==xe)&&(N!==W&&(t.activeTexture(W),N=W),t.bindTexture(I,xe||re[I]),te.type=I,te.texture=xe)}function z(){const I=K[N];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(I){ne.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function ye(I){ee.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function qe(I,xe){let W=l.get(xe);W===void 0&&(W=new WeakMap,l.set(xe,W));let te=W.get(I);te===void 0&&(te=t.getUniformBlockIndex(xe,I.name),W.set(I,te))}function Oe(I,xe){const te=l.get(xe).get(I);a.get(xe)!==te&&(t.uniformBlockBinding(xe,te,I.__bindingPointIndex),a.set(xe,te))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,K={},u={},d=new WeakMap,f=[],p=null,_=!1,M=null,g=null,h=null,x=null,v=null,S=null,C=null,T=new ze(0,0,0),A=0,P=!1,H=null,y=null,w=null,O=null,k=null,ne.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:pe,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:Ke,setBlending:L,setMaterial:Pt,setFlipSided:He,setCullFace:Ye,setLineWidth:Ae,setPolygonOffset:it,setScissorTest:Ce,activeTexture:R,bindTexture:E,unbindTexture:z,compressedTexImage2D:q,compressedTexImage3D:ie,texImage2D:_e,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:Oe,texStorage2D:et,texStorage3D:oe,texSubImage2D:Y,texSubImage3D:Te,compressedTexSubImage2D:le,compressedTexSubImage3D:ue,scissor:Ue,viewport:ye,reset:st}}function Jm(t,e,n,i){const r=X2(i);switch(n){case $x:return t*e;case qx:return t*e;case Zx:return t*e*2;case Uf:return t*e/r.components*r.byteLength;case Ff:return t*e/r.components*r.byteLength;case Kx:return t*e*2/r.components*r.byteLength;case Of:return t*e*2/r.components*r.byteLength;case Yx:return t*e*3/r.components*r.byteLength;case di:return t*e*4/r.components*r.byteLength;case kf:return t*e*4/r.components*r.byteLength;case Ul:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sd:case ad:return Math.max(t,16)*Math.max(e,8)/4;case rd:case od:return Math.max(t,8)*Math.max(e,8)/2;case ld:case cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zl:case Td:case bd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Qx:case Ad:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cd:case Rd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function X2(t){switch(t){case $i:case jx:return{byteLength:1,components:1};case Ta:case Wx:case La:return{byteLength:2,components:1};case Df:case If:return{byteLength:2,components:4};case as:case Nf:case Ei:return{byteLength:4,components:1};case Xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function $2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return p?new OffscreenCanvas(R,E):vc("canvas")}function M(R,E,z){let q=1;const ie=Ce(R);if((ie.width>z||ie.height>z)&&(q=z/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*ie.width),Te=Math.floor(q*ie.height);d===void 0&&(d=_(Y,Te));const le=E?_(Y,Te):d;return le.width=Y,le.height=Te,le.getContext("2d").drawImage(R,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Te+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==bn&&R.minFilter!==ui}function h(R){t.generateMipmap(R)}function x(R,E,z,q,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=E;if(E===t.RED&&(z===t.FLOAT&&(Y=t.R32F),z===t.HALF_FLOAT&&(Y=t.R16F),z===t.UNSIGNED_BYTE&&(Y=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.R8UI),z===t.UNSIGNED_SHORT&&(Y=t.R16UI),z===t.UNSIGNED_INT&&(Y=t.R32UI),z===t.BYTE&&(Y=t.R8I),z===t.SHORT&&(Y=t.R16I),z===t.INT&&(Y=t.R32I)),E===t.RG&&(z===t.FLOAT&&(Y=t.RG32F),z===t.HALF_FLOAT&&(Y=t.RG16F),z===t.UNSIGNED_BYTE&&(Y=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RG8UI),z===t.UNSIGNED_SHORT&&(Y=t.RG16UI),z===t.UNSIGNED_INT&&(Y=t.RG32UI),z===t.BYTE&&(Y=t.RG8I),z===t.SHORT&&(Y=t.RG16I),z===t.INT&&(Y=t.RG32I)),E===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),z===t.UNSIGNED_INT&&(Y=t.RGB32UI),z===t.BYTE&&(Y=t.RGB8I),z===t.SHORT&&(Y=t.RGB16I),z===t.INT&&(Y=t.RGB32I)),E===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),z===t.UNSIGNED_INT&&(Y=t.RGBA32UI),z===t.BYTE&&(Y=t.RGBA8I),z===t.SHORT&&(Y=t.RGBA16I),z===t.INT&&(Y=t.RGBA32I)),E===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),E===t.RGBA){const Te=ie?pc:lt.getTransfer(q);z===t.FLOAT&&(Y=t.RGBA32F),z===t.HALF_FLOAT&&(Y=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Y=Te===yt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(R,E){let z;return R?E===null||E===as||E===mo?z=t.DEPTH24_STENCIL8:E===Ei?z=t.DEPTH32F_STENCIL8:E===Ta&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===as||E===mo?z=t.DEPTH_COMPONENT24:E===Ei?z=t.DEPTH_COMPONENT32F:E===Ta&&(z=t.DEPTH_COMPONENT16),z}function S(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==bn&&R.minFilter!==ui?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),H(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,q=f.get(z);if(q){const ie=q[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(R),Object.keys(q).length===0&&f.delete(z)}i.remove(R)}function P(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const z=R.source,q=f.get(z);delete q[E.__cacheKey],o.memory.textures--}function H(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let ie=0;ie<E.__webglFramebuffer[q].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[q][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)t.deleteFramebuffer(E.__webglFramebuffer[q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let q=0,ie=z.length;q<ie;q++){const Y=i.get(z[q]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(z[q])}i.remove(R)}let y=0;function w(){y=0}function O(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function k(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function X(R,E){const z=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,R,E);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function Q(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ee(z,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function V(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ee(z,R,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function Z(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){j(z,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const N={[nd]:t.REPEAT,[Zr]:t.CLAMP_TO_EDGE,[id]:t.MIRRORED_REPEAT},K={[bn]:t.NEAREST,[N1]:t.NEAREST_MIPMAP_NEAREST,[Za]:t.NEAREST_MIPMAP_LINEAR,[ui]:t.LINEAR,[xu]:t.LINEAR_MIPMAP_NEAREST,[Kr]:t.LINEAR_MIPMAP_LINEAR},J={[F1]:t.NEVER,[G1]:t.ALWAYS,[O1]:t.LESS,[ev]:t.LEQUAL,[k1]:t.EQUAL,[H1]:t.GEQUAL,[z1]:t.GREATER,[B1]:t.NOTEQUAL};function ce(R,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ui||E.magFilter===xu||E.magFilter===Za||E.magFilter===Kr||E.minFilter===ui||E.minFilter===xu||E.minFilter===Za||E.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bn||E.minFilter!==Za&&E.minFilter!==Kr||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ne(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const q=E.source;let ie=f.get(q);ie===void 0&&(ie={},f.set(q,ie));const Y=k(E);if(Y!==R.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ie[Y].usedTimes++;const Te=ie[R.__cacheKey];Te!==void 0&&(ie[R.__cacheKey].usedTimes--,Te.usedTimes===0&&P(E)),R.__cacheKey=Y,R.__webglTexture=ie[Y].texture}return z}function ee(R,E,z){let q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=t.TEXTURE_3D);const ie=ne(R,E),Y=E.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+z);const Te=i.get(Y);if(Y.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+z);const le=lt.getPrimaries(lt.workingColorSpace),ue=E.colorSpace===lr?null:lt.getPrimaries(E.colorSpace),et=E.colorSpace===lr||le===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let oe=M(E.image,!1,r.maxTextureSize);oe=it(E,oe);const _e=s.convert(E.format,E.colorSpace),De=s.convert(E.type);let Ue=x(E.internalFormat,_e,De,E.colorSpace,E.isVideoTexture);ce(q,E);let ye;const qe=E.mipmaps,Oe=E.isVideoTexture!==!0,st=Te.__version===void 0||ie===!0,I=Y.dataReady,xe=S(E,oe);if(E.isDepthTexture)Ue=v(E.format===go,E.type),st&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ue,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ue,oe.width,oe.height,0,_e,De,null));else if(E.isDataTexture)if(qe.length>0){Oe&&st&&n.texStorage2D(t.TEXTURE_2D,xe,Ue,qe[0].width,qe[0].height);for(let W=0,te=qe.length;W<te;W++)ye=qe[W],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,De,ye.data):n.texImage2D(t.TEXTURE_2D,W,Ue,ye.width,ye.height,0,_e,De,ye.data);E.generateMipmaps=!1}else Oe?(st&&n.texStorage2D(t.TEXTURE_2D,xe,Ue,oe.width,oe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,oe.width,oe.height,0,_e,De,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ue,qe[0].width,qe[0].height,oe.depth);for(let W=0,te=qe.length;W<te;W++)if(ye=qe[W],E.format!==di)if(_e!==null)if(Oe){if(I)if(E.layerUpdates.size>0){const me=Jm(ye.width,ye.height,E.format,E.type);for(const ve of E.layerUpdates){const Ie=ye.data.subarray(ve*me/ye.data.BYTES_PER_ELEMENT,(ve+1)*me/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,ve,ye.width,ye.height,1,_e,Ie,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,oe.depth,_e,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Ue,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,oe.depth,_e,De,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Ue,ye.width,ye.height,oe.depth,0,_e,De,ye.data)}else{Oe&&st&&n.texStorage2D(t.TEXTURE_2D,xe,Ue,qe[0].width,qe[0].height);for(let W=0,te=qe.length;W<te;W++)ye=qe[W],E.format!==di?_e!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,De,ye.data):n.texImage2D(t.TEXTURE_2D,W,Ue,ye.width,ye.height,0,_e,De,ye.data)}else if(E.isDataArrayTexture)if(Oe){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ue,oe.width,oe.height,oe.depth),I)if(E.layerUpdates.size>0){const W=Jm(oe.width,oe.height,E.format,E.type);for(const te of E.layerUpdates){const me=oe.data.subarray(te*W/oe.data.BYTES_PER_ELEMENT,(te+1)*W/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,_e,De,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,oe.width,oe.height,oe.depth,0,_e,De,oe.data);else if(E.isData3DTexture)Oe?(st&&n.texStorage3D(t.TEXTURE_3D,xe,Ue,oe.width,oe.height,oe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,oe.width,oe.height,oe.depth,0,_e,De,oe.data);else if(E.isFramebufferTexture){if(st)if(Oe)n.texStorage2D(t.TEXTURE_2D,xe,Ue,oe.width,oe.height);else{let W=oe.width,te=oe.height;for(let me=0;me<xe;me++)n.texImage2D(t.TEXTURE_2D,me,Ue,W,te,0,_e,De,null),W>>=1,te>>=1}}else if(qe.length>0){if(Oe&&st){const W=Ce(qe[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ue,W.width,W.height)}for(let W=0,te=qe.length;W<te;W++)ye=qe[W],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e,De,ye):n.texImage2D(t.TEXTURE_2D,W,Ue,_e,De,ye);E.generateMipmaps=!1}else if(Oe){if(st){const W=Ce(oe);n.texStorage2D(t.TEXTURE_2D,xe,Ue,W.width,W.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ue,_e,De,oe);g(E)&&h(q),Te.__version=Y.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function j(R,E,z){if(E.image.length!==6)return;const q=ne(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Y=i.get(ie);if(ie.version!==Y.__version||q===!0){n.activeTexture(t.TEXTURE0+z);const Te=lt.getPrimaries(lt.workingColorSpace),le=E.colorSpace===lr?null:lt.getPrimaries(E.colorSpace),ue=E.colorSpace===lr||Te===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!et&&!oe?_e[te]=M(E.image[te],!0,r.maxCubemapSize):_e[te]=oe?E.image[te].image:E.image[te],_e[te]=it(E,_e[te]);const De=_e[0],Ue=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),qe=x(E.internalFormat,Ue,ye,E.colorSpace),Oe=E.isVideoTexture!==!0,st=Y.__version===void 0||q===!0,I=ie.dataReady;let xe=S(E,De);ce(t.TEXTURE_CUBE_MAP,E);let W;if(et){Oe&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,De.width,De.height);for(let te=0;te<6;te++){W=_e[te].mipmaps;for(let me=0;me<W.length;me++){const ve=W[me];E.format!==di?Ue!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,ve.width,ve.height,Ue,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,qe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,ve.width,ve.height,Ue,ye,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,qe,ve.width,ve.height,0,Ue,ye,ve.data)}}}else{if(W=E.mipmaps,Oe&&st){W.length>0&&xe++;const te=Ce(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,te.width,te.height)}for(let te=0;te<6;te++)if(oe){Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ue,ye,_e[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,_e[te].width,_e[te].height,0,Ue,ye,_e[te].data);for(let me=0;me<W.length;me++){const Ie=W[me].image[te].image;Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ie.width,Ie.height,Ue,ye,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,qe,Ie.width,Ie.height,0,Ue,ye,Ie.data)}}else{Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,ye,_e[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Ue,ye,_e[te]);for(let me=0;me<W.length;me++){const ve=W[me];Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ue,ye,ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,qe,Ue,ye,ve.image[te])}}}g(E)&&h(t.TEXTURE_CUBE_MAP),Y.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function re(R,E,z,q,ie,Y){const Te=s.convert(z.format,z.colorSpace),le=s.convert(z.type),ue=x(z.internalFormat,Te,le,z.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>Y),_e=Math.max(1,E.height>>Y);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Y,ue,oe,_e,E.depth,0,Te,le,null):n.texImage2D(ie,Y,ue,oe,_e,0,Te,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ie,i.get(z).__webglTexture,0,He(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ie,i.get(z).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const q=E.depthTexture,ie=q&&q.isDepthTexture?q.type:null,Y=v(E.stencilBuffer,ie),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=He(E);Ye(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Y,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const q=E.textures;for(let ie=0;ie<q.length;ie++){const Y=q[ie],Te=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),ue=x(Y.internalFormat,Te,le,Y.colorSpace),et=He(E);z&&Ye(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,ue,E.width,E.height):Ye(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const q=i.get(E.depthTexture).__webglTexture,ie=He(E);if(E.depthTexture.format===to)Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(E.depthTexture.format===go)Ye(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,R)}else if(z){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=t.createRenderbuffer(),de(E.__webglDepthbuffer[q],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),de(E.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,E,z){const q=i.get(R);E!==void 0&&re(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Fe(R)}function Ke(R){const E=R.texture,z=i.get(R),q=i.get(E);R.addEventListener("dispose",T);const ie=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=E.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let ue=0;ue<E.mipmaps.length;ue++)z.__webglFramebuffer[le][ue]=t.createFramebuffer()}else z.__webglFramebuffer[le]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)z.__webglFramebuffer[le]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Te)for(let le=0,ue=ie.length;le<ue;le++){const et=i.get(ie[le]);et.__webglTexture===void 0&&(et.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ye(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const ue=ie[le];z.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const et=s.convert(ue.format,ue.colorSpace),oe=s.convert(ue.type),_e=x(ue.internalFormat,et,oe,ue.colorSpace,R.isXRRenderTarget===!0),De=He(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,z.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),de(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ce(t.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)re(z.__webglFramebuffer[le][ue],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ue);else re(z.__webglFramebuffer[le],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let le=0,ue=ie.length;le<ue;le++){const et=ie[le],oe=i.get(et);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ce(t.TEXTURE_2D,et),re(z.__webglFramebuffer,R,et,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),g(et)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,q.__webglTexture),ce(le,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)re(z.__webglFramebuffer[ue],R,E,t.COLOR_ATTACHMENT0,le,ue);else re(z.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,le,0);g(E)&&h(le),n.unbindTexture()}R.depthBuffer&&Fe(R)}function Je(R){const E=R.textures;for(let z=0,q=E.length;z<q;z++){const ie=E[z];if(g(ie)){const Y=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ie).__webglTexture;n.bindTexture(Y,Te),h(Y),n.unbindTexture()}}}const ke=[],L=[];function Pt(R){if(R.samples>0){if(Ye(R)===!1){const E=R.textures,z=R.width,q=R.height;let ie=t.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),le=E.length>1;if(le)for(let ue=0;ue<E.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const et=i.get(E[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,z,q,0,0,z,q,ie,t.NEAREST),l===!0&&(ke.length=0,L.length=0,ke.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(Y),L.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ue=0;ue<E.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const et=i.get(E[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,et,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function He(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function it(R,E){const z=R.colorSpace,q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Pr&&z!==lr&&(lt.getTransfer(z)===yt?(q!==di||ie!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Pe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ye}function Y2(t,e){function n(i,r=lr){let s;const o=lt.getTransfer(r);if(i===$i)return t.UNSIGNED_BYTE;if(i===Df)return t.UNSIGNED_SHORT_4_4_4_4;if(i===If)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jx)return t.BYTE;if(i===Wx)return t.SHORT;if(i===Ta)return t.UNSIGNED_SHORT;if(i===Nf)return t.INT;if(i===as)return t.UNSIGNED_INT;if(i===Ei)return t.FLOAT;if(i===La)return t.HALF_FLOAT;if(i===$x)return t.ALPHA;if(i===Yx)return t.RGB;if(i===di)return t.RGBA;if(i===qx)return t.LUMINANCE;if(i===Zx)return t.LUMINANCE_ALPHA;if(i===to)return t.DEPTH_COMPONENT;if(i===go)return t.DEPTH_STENCIL;if(i===Uf)return t.RED;if(i===Ff)return t.RED_INTEGER;if(i===Kx)return t.RG;if(i===Of)return t.RG_INTEGER;if(i===kf)return t.RGBA_INTEGER;if(i===Ul||i===Fl||i===Ol||i===kl)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rd||i===sd||i===od||i===ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ld||i===cd)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ud)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hd||i===dd||i===fd||i===pd||i===md||i===gd||i===xd||i===vd||i===_d||i===yd||i===Md||i===Sd||i===Ed||i===wd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===md)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_d)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Md)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Td||i===bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zl)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Td)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qx||i===Ad||i===Cd||i===Rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class q2 extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xl extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z2={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const K2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q2=`
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

}`;class J2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Tr({vertexShader:K2,fragmentShader:Q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new Vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eT extends hs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const M=new J2,g=n.getContextAttributes();let h=null,x=null;const v=[],S=[],C=new Ne;let T=null;const A=new In;A.layers.enable(1),A.viewport=new ft;const P=new In;P.layers.enable(2),P.viewport=new ft;const H=[A,P],y=new q2;y.layers.enable(1),y.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=v[j];return re===void 0&&(re=new Xu,v[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=v[j];return re===void 0&&(re=new Xu,v[j]=re),re.getGripSpace()},this.getHand=function(j){let re=v[j];return re===void 0&&(re=new Xu,v[j]=re),re.getHandSpace()};function k(j){const re=S.indexOf(j.inputSource);if(re===-1)return;const de=v[re];de!==void 0&&(de.update(j.inputSource,j.frame,c||o),de.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Q);for(let j=0;j<v.length;j++){const re=S[j];re!==null&&(S[j]=null,v[j].disconnect(re))}w=null,O=null,M.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,x=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ls(p.framebufferWidth,p.framebufferHeight,{format:di,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,de=null,pe=null;g.depth&&(pe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?go:to,de=g.stencil?mo:as);const Fe={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ls(f.textureWidth,f.textureHeight,{format:di,type:$i,depthTexture:new dv(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(j){for(let re=0;re<j.removed.length;re++){const de=j.removed[re],pe=S.indexOf(de);pe>=0&&(S[pe]=null,v[pe].disconnect(de))}for(let re=0;re<j.added.length;re++){const de=j.added[re];let pe=S.indexOf(de);if(pe===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=S.length){S.push(de),pe=Pe;break}else if(S[Pe]===null){S[Pe]=de,pe=Pe;break}if(pe===-1)break}const Fe=v[pe];Fe&&Fe.connect(de)}}const V=new D,Z=new D;function N(j,re,de){V.setFromMatrixPosition(re.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const pe=V.distanceTo(Z),Fe=re.projectionMatrix.elements,Pe=de.projectionMatrix.elements,Ke=Fe[14]/(Fe[10]-1),Je=Fe[14]/(Fe[10]+1),ke=(Fe[9]+1)/Fe[5],L=(Fe[9]-1)/Fe[5],Pt=(Fe[8]-1)/Fe[0],He=(Pe[8]+1)/Pe[0],Ye=Ke*Pt,Ae=Ke*He,it=pe/(-Pt+He),Ce=it*-Pt;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ce),j.translateZ(it),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Fe[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const R=Ke+it,E=Je+it,z=Ye-Ce,q=Ae+(pe-Ce),ie=ke*Je/E*R,Y=L*Je/E*R;j.projectionMatrix.makePerspective(z,q,ie,Y,R,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let re=j.near,de=j.far;M.texture!==null&&(M.depthNear>0&&(re=M.depthNear),M.depthFar>0&&(de=M.depthFar)),y.near=P.near=A.near=re,y.far=P.far=A.far=de,(w!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,O=y.far);const pe=j.parent,Fe=y.cameras;K(y,pe);for(let Pe=0;Pe<Fe.length;Pe++)K(Fe[Pe],pe);Fe.length===2?N(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),J(j,y,pe)};function J(j,re,de){de===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let ce=null;function ne(j,re){if(u=re.getViewerPose(c||o),_=re,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let pe=!1;de.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let Pe=0;Pe<de.length;Pe++){const Ke=de[Pe];let Je=null;if(p!==null)Je=p.getViewport(Ke);else{const L=d.getViewSubImage(f,Ke);Je=L.viewport,Pe===0&&(e.setRenderTargetTextures(x,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let ke=H[Pe];ke===void 0&&(ke=new In,ke.layers.enable(Pe),ke.viewport=new ft,H[Pe]=ke),ke.matrix.fromArray(Ke.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ke.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Je.x,Je.y,Je.width,Je.height),Pe===0&&(y.matrix.copy(ke.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(ke)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Pe=d.getDepthInformation(de[0]);Pe&&Pe.isValid&&Pe.texture&&M.init(e,Pe,r.renderState)}}for(let de=0;de<v.length;de++){const pe=S[de],Fe=v[de];pe!==null&&Fe!==void 0&&Fe.update(pe,re,c||o)}ce&&ce(j,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const ee=new uv;ee.setAnimationLoop(ne),this.setAnimationLoop=function(j){ce=j},this.dispose=function(){}}}const Br=new Ci,tT=new pt;function nT(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,av(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,x,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),M(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,x,v):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===xn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===xn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,S=x.envMapRotation;v&&(g.envMap.value=v,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.envMapRotation.value.setFromMatrix4(tT.makeRotationFromEuler(Br)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,x,v){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*x,g.scale.value=v*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,x){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){const x=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(_(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(x,C);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const v=d();x.__bindingPointIndex=v;const S=t.createBuffer(),C=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],S=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let H=0,y=P.length;H<y;H++){const w=P[H];if(p(w,T,H,C)===!0){const O=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let Q=0;Q<k.length;Q++){const V=k[Q],Z=M(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,O+X,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,S,C){const T=x.value,A=v+"_"+S;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(x){const v=x.uniforms;let S=0;const C=16;for(let A=0,P=v.length;A<P;A++){const H=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,w=H.length;y<w;y++){const O=H[y],k=Array.isArray(O.value)?O.value:[O.value];for(let X=0,Q=k.length;X<Q;X++){const V=k[X],Z=M(V),N=S%C,K=N%Z.boundary,J=N+K;S+=K,J!==0&&C-J<Z.storage&&(S+=C-J),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Z.storage}}}const T=S%C;return T>0&&(S+=C-T),x.__size=S,x.__cache={},this}function M(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class rT{constructor(e={}){const{canvas:n=W1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let M=null,g=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=yr,this.toneMappingExposure=1;const v=this;let S=!1,C=0,T=0,A=null,P=-1,H=null;const y=new ft,w=new ft;let O=null;const k=new ze(0);let X=0,Q=n.width,V=n.height,Z=1,N=null,K=null;const J=new ft(0,0,Q,V),ce=new ft(0,0,Q,V);let ne=!1;const ee=new Hf;let j=!1,re=!1;const de=new pt,pe=new pt,Fe=new D,Pe=new ft,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function ke(){return A===null?Z:1}let L=i;function Pt(b,U){return n.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lf}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ve,!1),L===null){const U="webgl2";if(L=Pt(U,b),L===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let He,Ye,Ae,it,Ce,R,E,z,q,ie,Y,Te,le,ue,et,oe,_e,De,Ue,ye,qe,Oe,st,I;function xe(){He=new cw(L),He.init(),Oe=new Y2(L,He),Ye=new iw(L,He,e,Oe),Ae=new W2(L),Ye.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),it=new dw(L),Ce=new P2,R=new $2(L,He,Ae,Ce,Ye,Oe,it),E=new sw(v),z=new lw(v),q=new _M(L),st=new tw(L,q),ie=new uw(L,q,it,st),Y=new pw(L,ie,q,it),Ue=new fw(L,Ye,R),oe=new rw(Ce),Te=new R2(v,E,z,He,Ye,st,oe),le=new nT(v,Ce),ue=new N2,et=new k2(He),De=new ew(v,E,z,Ae,Y,f,l),_e=new V2(v,Y,Ye),I=new iT(L,it,Ye,Ae),ye=new nw(L,He,it),qe=new hw(L,He,it),it.programs=Te.programs,v.capabilities=Ye,v.extensions=He,v.properties=Ce,v.renderLists=ue,v.shadowMap=_e,v.state=Ae,v.info=it}xe();const W=new eT(v,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=He.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=He.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(Q,V,!1))},this.getSize=function(b){return b.set(Q,V)},this.setSize=function(b,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,V=U,n.width=Math.floor(b*Z),n.height=Math.floor(U*Z),B===!0&&(n.style.width=b+"px",n.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Q*Z,V*Z).floor()},this.setDrawingBufferSize=function(b,U,B){Q=b,V=U,Z=B,n.width=Math.floor(b*B),n.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,U,B,G){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,U,B,G),Ae.viewport(y.copy(J).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(ce)},this.setScissor=function(b,U,B,G){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,U,B,G),Ae.scissor(w.copy(ce).multiplyScalar(Z).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){Ae.setScissorTest(ne=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,U=!0,B=!0){let G=0;if(b){let F=!1;if(A!==null){const ae=A.texture.format;F=ae===kf||ae===Of||ae===Ff}if(F){const ae=A.texture.type,ge=ae===$i||ae===as||ae===Ta||ae===mo||ae===Df||ae===If,Me=De.getClearColor(),Ee=De.getClearAlpha(),Re=Me.r,Le=Me.g,we=Me.b;ge?(p[0]=Re,p[1]=Le,p[2]=we,p[3]=Ee,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=Re,_[1]=Le,_[2]=we,_[3]=Ee,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ue.dispose(),et.dispose(),Ce.dispose(),E.dispose(),z.dispose(),Y.dispose(),st.dispose(),I.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",gi),W.removeEventListener("sessionend",Lr),Vn.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=it.autoReset,U=_e.enabled,B=_e.autoUpdate,G=_e.needsUpdate,F=_e.type;xe(),it.autoReset=b,_e.enabled=U,_e.autoUpdate=B,_e.needsUpdate=G,_e.type=F}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ie(b){const U=b.target;U.removeEventListener("dispose",Ie),Et(U)}function Et(b){Xt(b),Ce.remove(b)}function Xt(b){const U=Ce.get(b).programs;U!==void 0&&(U.forEach(function(B){Te.releaseProgram(B)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,G,F,ae){U===null&&(U=Ke);const ge=F.isMesh&&F.matrixWorld.determinant()<0,Me=xi(b,U,B,G,F);Ae.setMaterial(G,ge);let Ee=B.index,Re=1;if(G.wireframe===!0){if(Ee=ie.getWireframeAttribute(B),Ee===void 0)return;Re=2}const Le=B.drawRange,we=B.attributes.position;let tt=Le.start*Re,ht=(Le.start+Le.count)*Re;ae!==null&&(tt=Math.max(tt,ae.start*Re),ht=Math.min(ht,(ae.start+ae.count)*Re)),Ee!==null?(tt=Math.max(tt,0),ht=Math.min(ht,Ee.count)):we!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,we.count));const mt=ht-tt;if(mt<0||mt===1/0)return;st.setup(F,G,Me,B,Ee);let fn,fe=ye;if(Ee!==null&&(fn=q.get(Ee),fe=qe,fe.setIndex(fn)),F.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*ke()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(F.isLine){let $=G.linewidth;$===void 0&&($=1),Ae.setLineWidth($*ke()),F.isLineSegments?fe.setMode(L.LINES):F.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else F.isPoints?fe.setMode(L.POINTS):F.isSprite&&fe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)fe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))fe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const $=F._multiDrawStarts,ct=F._multiDrawCounts,Ve=F._multiDrawCount,je=Ee?q.get(Ee).bytesPerElement:1,gt=Ce.get(G).currentProgram.getUniforms();for(let wt=0;wt<Ve;wt++)gt.setValue(L,"_gl_DrawID",wt),fe.render($[wt]/je,ct[wt])}else if(F.isInstancedMesh)fe.renderInstances(tt,mt,F.count);else if(B.isInstancedBufferGeometry){const $=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ct=Math.min(B.instanceCount,$);fe.renderInstances(tt,mt,ct)}else fe.render(tt,mt)};function nt(b,U,B){b.transparent===!0&&b.side===Un&&b.forceSinglePass===!1?(b.side=xn,b.needsUpdate=!0,Be(b,U,B),b.side=Er,b.needsUpdate=!0,Be(b,U,B),b.side=Un):Be(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),g=et.get(B),g.init(U),x.push(g),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),b!==B&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const G=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const Me=ae[ge];nt(Me,B,F),G.add(Me)}else nt(ae,B,F),G.add(ae)}),x.pop(),g=null,G},this.compileAsync=function(b,U,B=null){const G=this.compile(b,U,B);return new Promise(F=>{function ae(){if(G.forEach(function(ge){Ce.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){F(b);return}setTimeout(ae,10)}He.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Qt=null;function Gn(b){Qt&&Qt(b)}function gi(){Vn.stop()}function Lr(){Vn.start()}const Vn=new uv;Vn.setAnimationLoop(Gn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(b){Qt=b,W.setAnimationLoop(b),b===null?Vn.stop():Vn.start()},W.addEventListener("sessionstart",gi),W.addEventListener("sessionend",Lr),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,A),g=et.get(b,x.length),g.init(U),x.push(g),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(pe),re=this.localClippingEnabled,j=oe.init(this.clippingPlanes,re),M=ue.get(b,h.length),M.init(),h.push(M),W.enabled===!0&&W.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&Nr(ae,U,-1/0,v.sortObjects)}Nr(b,U,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(N,K),Je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Je&&De.addToRenderList(M,b),this.info.render.frame++,j===!0&&oe.beginShadows();const B=g.state.shadowsArray;_e.render(B,b,U),j===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=M.opaque,F=M.transmissive;if(g.setupLights(),U.isArrayCamera){const ae=U.cameras;if(F.length>0)for(let ge=0,Me=ae.length;ge<Me;ge++){const Ee=ae[ge];bo(G,F,b,Ee)}Je&&De.render(b);for(let ge=0,Me=ae.length;ge<Me;ge++){const Ee=ae[ge];To(M,b,Ee,Ee.viewport)}}else F.length>0&&bo(G,F,b,U),Je&&De.render(b),To(M,b,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,U),st.resetDefaultState(),P=-1,H=null,x.pop(),x.length>0?(g=x[x.length-1],j===!0&&oe.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function Nr(b,U,B,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){G&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const ge=Y.update(b),Me=b.material;Me.visible&&M.push(b,ge,Me,B,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ee.intersectsObject(b))){const ge=Y.update(b),Me=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Pe.copy(ge.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(Me)){const Ee=ge.groups;for(let Re=0,Le=Ee.length;Re<Le;Re++){const we=Ee[Re],tt=Me[we.materialIndex];tt&&tt.visible&&M.push(b,ge,tt,B,Pe.z,we)}}else Me.visible&&M.push(b,ge,Me,B,Pe.z,null)}}const ae=b.children;for(let ge=0,Me=ae.length;ge<Me;ge++)Nr(ae[ge],U,B,G)}function To(b,U,B,G){const F=b.opaque,ae=b.transmissive,ge=b.transparent;g.setupLightsView(B),j===!0&&oe.setGlobalState(v.clippingPlanes,B),G&&Ae.viewport(y.copy(G)),F.length>0&&Dr(F,U,B),ae.length>0&&Dr(ae,U,B),ge.length>0&&Dr(ge,U,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function bo(b,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new ls(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?La:$i,minFilter:Kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ae=g.state.transmissionRenderTarget[G.id],ge=G.viewport||y;ae.setSize(ge.z,ge.w);const Me=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(k),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Je&&De.render(B);const Ee=v.toneMapping;v.toneMapping=yr;const Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),j===!0&&oe.setGlobalState(v.clippingPlanes,G),Dr(b,B,G),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),He.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let we=0,tt=U.length;we<tt;we++){const ht=U[we],mt=ht.object,fn=ht.geometry,fe=ht.material,$=ht.group;if(fe.side===Un&&mt.layers.test(G.layers)){const ct=fe.side;fe.side=xn,fe.needsUpdate=!0,Ge(mt,B,G,fn,fe,$),fe.side=ct,fe.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}v.setRenderTarget(Me),v.setClearColor(k,X),Re!==void 0&&(G.viewport=Re),v.toneMapping=Ee}function Dr(b,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ae=b.length;F<ae;F++){const ge=b[F],Me=ge.object,Ee=ge.geometry,Re=G===null?ge.material:G,Le=ge.group;Me.layers.test(B.layers)&&Ge(Me,U,B,Ee,Re,Le)}}function Ge(b,U,B,G,F,ae){b.onBeforeRender(v,U,B,G,F,ae),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,U,B,G,b,ae),F.transparent===!0&&F.side===Un&&F.forceSinglePass===!1?(F.side=xn,F.needsUpdate=!0,v.renderBufferDirect(B,U,G,F,b,ae),F.side=Er,F.needsUpdate=!0,v.renderBufferDirect(B,U,G,F,b,ae),F.side=Un):v.renderBufferDirect(B,U,G,F,b,ae),b.onAfterRender(v,U,B,G,F,ae)}function Be(b,U,B){U.isScene!==!0&&(U=Ke);const G=Ce.get(b),F=g.state.lights,ae=g.state.shadowsArray,ge=F.state.version,Me=Te.getParameters(b,F.state,ae,U,B),Ee=Te.getProgramCacheKey(Me);let Re=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?z:E).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Ie),Re=new Map,G.programs=Re);let Le=Re.get(Ee);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===ge)return Ft(b,Me),Le}else Me.uniforms=Te.getUniforms(b),b.onBeforeCompile(Me,v),Le=Te.acquireProgram(Me,Ee),Re.set(Ee,Le),G.uniforms=Me.uniforms;const we=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=oe.uniform),Ft(b,Me),G.needsLights=fs(b),G.lightsStateVersion=ge,G.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function Jt(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Gl.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ft(b,U){const B=Ce.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function xi(b,U,B,G,F){U.isScene!==!0&&(U=Ke),R.resetTextureUnits();const ae=U.fog,ge=G.isMeshStandardMaterial?U.environment:null,Me=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Pr,Ee=(G.isMeshStandardMaterial?z:E).get(G.envMap||ge),Re=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,ht=!!B.morphAttributes.color;let mt=yr;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=v.toneMapping);const fn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=fn!==void 0?fn.length:0,$=Ce.get(G),ct=g.state.lights;if(j===!0&&(re===!0||b!==H)){const $t=b===H&&G.id===P;oe.setState(G,b,$t)}let Ve=!1;G.version===$.__version?($.needsLights&&$.lightsStateVersion!==ct.state.version||$.outputColorSpace!==Me||F.isBatchedMesh&&$.batching===!1||!F.isBatchedMesh&&$.batching===!0||F.isBatchedMesh&&$.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&$.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&$.instancing===!1||!F.isInstancedMesh&&$.instancing===!0||F.isSkinnedMesh&&$.skinning===!1||!F.isSkinnedMesh&&$.skinning===!0||F.isInstancedMesh&&$.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&$.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&$.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&$.instancingMorph===!1&&F.morphTexture!==null||$.envMap!==Ee||G.fog===!0&&$.fog!==ae||$.numClippingPlanes!==void 0&&($.numClippingPlanes!==oe.numPlanes||$.numIntersection!==oe.numIntersection)||$.vertexAlphas!==Re||$.vertexTangents!==Le||$.morphTargets!==we||$.morphNormals!==tt||$.morphColors!==ht||$.toneMapping!==mt||$.morphTargetsCount!==fe)&&(Ve=!0):(Ve=!0,$.__version=G.version);let je=$.currentProgram;Ve===!0&&(je=Be(G,U,F));let gt=!1,wt=!1,Tt=!1;const bt=je.getUniforms(),Mn=$.uniforms;if(Ae.useProgram(je.program)&&(gt=!0,wt=!0,Tt=!0),G.id!==P&&(P=G.id,wt=!0),gt||H!==b){Ye.reverseDepthBuffer?(de.copy(b.projectionMatrix),$1(de),Y1(de),bt.setValue(L,"projectionMatrix",de)):bt.setValue(L,"projectionMatrix",b.projectionMatrix),bt.setValue(L,"viewMatrix",b.matrixWorldInverse);const $t=bt.map.cameraPosition;$t!==void 0&&$t.setValue(L,Fe.setFromMatrixPosition(b.matrixWorld)),Ye.logarithmicDepthBuffer&&bt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,wt=!0,Tt=!0)}if(F.isSkinnedMesh){bt.setOptional(L,F,"bindMatrix"),bt.setOptional(L,F,"bindMatrixInverse");const $t=F.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),bt.setValue(L,"boneTexture",$t.boneTexture,R))}F.isBatchedMesh&&(bt.setOptional(L,F,"batchingTexture"),bt.setValue(L,"batchingTexture",F._matricesTexture,R),bt.setOptional(L,F,"batchingIdTexture"),bt.setValue(L,"batchingIdTexture",F._indirectTexture,R),bt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&bt.setValue(L,"batchingColorTexture",F._colorsTexture,R));const jn=B.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Ue.update(F,B,je),(wt||$.receiveShadow!==F.receiveShadow)&&($.receiveShadow=F.receiveShadow,bt.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Mn.envMap.value=Ee,Mn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Mn.envMapIntensity.value=U.environmentIntensity),wt&&(bt.setValue(L,"toneMappingExposure",v.toneMappingExposure),$.needsLights&&Lt(Mn,Tt),ae&&G.fog===!0&&le.refreshFogUniforms(Mn,ae),le.refreshMaterialUniforms(Mn,G,Z,V,g.state.transmissionRenderTarget[b.id]),Gl.upload(L,Jt($),Mn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Gl.upload(L,Jt($),Mn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(L,"center",F.center),bt.setValue(L,"modelViewMatrix",F.modelViewMatrix),bt.setValue(L,"normalMatrix",F.normalMatrix),bt.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $t=G.uniformsGroups;for(let vi=0,Ir=$t.length;vi<Ir;vi++){const Ao=$t[vi];I.update(Ao,je),I.bind(Ao,je)}}return je}function Lt(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function fs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,B){Ce.get(b.texture).__webglTexture=U,Ce.get(b.depthTexture).__webglTexture=B;const G=Ce.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const B=Ce.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){A=b,C=U,T=B;let G=!0,F=null,ae=!1,ge=!1;if(b){const Ee=Ce.get(b);if(Ee.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Ee.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Ee.__hasExternalTextures)R.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const we=b.depthTexture;if(Ee.__boundDepthTexture!==we){if(we!==null&&Ce.has(we)&&(b.width!==we.image.width||b.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ge=!0);const Le=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][B]:F=Le[U],ae=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?F=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[B]:F=Le,y.copy(b.viewport),w.copy(b.scissor),O=b.scissorTest}else y.copy(J).multiplyScalar(Z).floor(),w.copy(ce).multiplyScalar(Z).floor(),O=ne;if(Ae.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&Ae.drawBuffers(b,F),Ae.viewport(y),Ae.scissor(w),Ae.setScissorTest(O),ae){const Ee=Ce.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,B)}else if(ge){const Ee=Ce.get(b.texture),Re=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,B||0,Re)}P=-1},this.readRenderTargetPixels=function(b,U,B,G,F,ae,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){Ae.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Ee=b.texture,Re=Ee.format,Le=Ee.type;if(!Ye.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&B>=0&&B<=b.height-F&&L.readPixels(U,B,G,F,Oe.convert(Re),Oe.convert(Le),ae)}finally{const Ee=A!==null?Ce.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,G,F,ae,ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){const Ee=b.texture,Re=Ee.format,Le=Ee.type;if(!Ye.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&B>=0&&B<=b.height-F){Ae.bindFramebuffer(L.FRAMEBUFFER,Me);const we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(U,B,G,F,Oe.convert(Re),Oe.convert(Le),0);const tt=A!==null?Ce.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,tt);const ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await X1(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(we),L.deleteSync(ht),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(Hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-B),F=Math.floor(b.image.width*G),ae=Math.floor(b.image.height*G),ge=U!==null?U.x:0,Me=U!==null?U.y:0;R.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,ge,Me,F,ae),Ae.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,G=null,F=0){b.isTexture!==!0&&(Hl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],F=arguments[3]||0,B=null);let ae,ge,Me,Ee,Re,Le;B!==null?(ae=B.max.x-B.min.x,ge=B.max.y-B.min.y,Me=B.min.x,Ee=B.min.y):(ae=b.image.width,ge=b.image.height,Me=0,Ee=0),G!==null?(Re=G.x,Le=G.y):(Re=0,Le=0);const we=Oe.convert(U.format),tt=Oe.convert(U.type);R.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),fn=L.getParameter(L.UNPACK_SKIP_PIXELS),fe=L.getParameter(L.UNPACK_SKIP_ROWS),$=L.getParameter(L.UNPACK_SKIP_IMAGES),ct=b.isCompressedTexture?b.mipmaps[F]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ee),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Re,Le,ae,ge,we,tt,ct.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Re,Le,ct.width,ct.height,we,ct.data):L.texSubImage2D(L.TEXTURE_2D,F,Re,Le,ae,ge,we,tt,ct),L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$),F===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,G=null,F=0){b.isTexture!==!0&&(Hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0);let ae,ge,Me,Ee,Re,Le,we,tt,ht;const mt=b.isCompressedTexture?b.mipmaps[F]:b.image;B!==null?(ae=B.max.x-B.min.x,ge=B.max.y-B.min.y,Me=B.max.z-B.min.z,Ee=B.min.x,Re=B.min.y,Le=B.min.z):(ae=mt.width,ge=mt.height,Me=mt.depth,Ee=0,Re=0,Le=0),G!==null?(we=G.x,tt=G.y,ht=G.z):(we=0,tt=0,ht=0);const fn=Oe.convert(U.format),fe=Oe.convert(U.type);let $;if(U.isData3DTexture)R.setTexture3D(U,0),$=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),$=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=L.getParameter(L.UNPACK_ROW_LENGTH),Ve=L.getParameter(L.UNPACK_IMAGE_HEIGHT),je=L.getParameter(L.UNPACK_SKIP_PIXELS),gt=L.getParameter(L.UNPACK_SKIP_ROWS),wt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),b.isDataTexture||b.isData3DTexture?L.texSubImage3D($,F,we,tt,ht,ae,ge,Me,fn,fe,mt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D($,F,we,tt,ht,ae,ge,Me,fn,mt.data):L.texSubImage3D($,F,we,tt,ht,ae,ge,Me,fn,fe,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ve),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt),F===0&&U.generateMipmaps&&L.generateMipmap($),Ae.unbindTexture()},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,Ae.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zf?"display-p3":"srgb",n.unpackColorSpace=lt.workingColorSpace===Hc?"display-p3":"srgb"}}class Vf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=n,this.far=i}clone(){return new Vf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xv extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class sT extends hn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=bn,u=bn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr extends kn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new pt,eg=new pt,vl=[],tg=new ds,oT=new pt,Go=new at,Vo=new Mo;class Xn extends at{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,oT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ds),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Rs),tg.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(tg)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Rs),Vo.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(Vo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(i),e.ray.intersectsSphere(Vo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Rs),eg.multiplyMatrices(i,Rs),Go.matrixWorld=eg,Go.raycast(e,vl);for(let o=0,a=vl.length;o<a;o++){const l=vl[o];l.instanceId=s,l.object=this,n.push(l)}vl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new sT(new Float32Array(r*this.count),r,this.count,Uf,Ei));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vv extends So{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _c=new D,yc=new D,ng=new pt,jo=new Gc,_l=new Mo,$u=new D,ig=new D;class aT extends Vt{constructor(e=new yn,n=new vv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_c.fromBufferAttribute(n,r-1),yc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_c.distanceTo(yc);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;ng.copy(r).invert(),jo.copy(e.ray).applyMatrix4(ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=p,g=_-1;M<g;M+=c){const h=u.getX(M),x=u.getX(M+1),v=yl(this,e,jo,l,h,x);v&&n.push(v)}if(this.isLineLoop){const M=u.getX(_-1),g=u.getX(p),h=yl(this,e,jo,l,M,g);h&&n.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let M=p,g=_-1;M<g;M+=c){const h=yl(this,e,jo,l,M,M+1);h&&n.push(h)}if(this.isLineLoop){const M=yl(this,e,jo,l,_-1,p);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(_c.fromBufferAttribute(o,r),yc.fromBufferAttribute(o,s),n.distanceSqToSegment(_c,yc,$u,ig)>i)return;$u.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo($u);if(!(l<e.near||l>e.far))return{distance:l,point:ig.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const rg=new D,sg=new D;class lT extends aT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)rg.fromBufferAttribute(n,r),sg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+rg.distanceTo(sg);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _v extends hn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mc extends yn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,u=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class io extends yn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let _=0;const M=[],g=i/2;let h=0;x(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function x(){const S=new D,C=new D;let T=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const H=[],y=P/s,w=y*(n-e)+e;for(let O=0;O<=r;O++){const k=O/r,X=k*l+a,Q=Math.sin(X),V=Math.cos(X);C.x=w*Q,C.y=-y*i+g,C.z=w*V,d.push(C.x,C.y,C.z),S.set(Q,A,V).normalize(),f.push(S.x,S.y,S.z),p.push(k,1-y),H.push(_++)}M.push(H)}for(let P=0;P<r;P++)for(let H=0;H<s;H++){const y=M[H][P],w=M[H+1][P],O=M[H+1][P+1],k=M[H][P+1];e>0&&(u.push(y,w,k),T+=3),n>0&&(u.push(w,O,k),T+=3)}c.addGroup(h,T,0),h+=T}function v(S){const C=_,T=new Ne,A=new D;let P=0;const H=S===!0?e:n,y=S===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),_++;const w=_;for(let O=0;O<=r;O++){const X=O/r*l+a,Q=Math.cos(X),V=Math.sin(X);A.x=H*V,A.y=g*y,A.z=H*Q,d.push(A.x,A.y,A.z),f.push(0,y,0),T.x=Q*.5+.5,T.y=V*.5*y+.5,p.push(T.x,T.y),_++}for(let O=0;O<r;O++){const k=C+O,X=w+O;S===!0?u.push(X,X+1,k):u.push(X+1,X,k),P+=3}c.addGroup(h,P,S===!0?1:2),h+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oa extends io{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new oa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jf extends yn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new D,S=new D,C=new D;for(let T=0;T<n.length;T+=3)p(n[T+0],v),p(n[T+1],S),p(n[T+2],C),l(v,S,C,x)}function l(x,v,S,C){const T=C+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const H=x.clone().lerp(S,P/T),y=v.clone().lerp(S,P/T),w=T-P;for(let O=0;O<=w;O++)O===0&&P===T?A[P][O]=H:A[P][O]=H.clone().lerp(y,O/w)}for(let P=0;P<T;P++)for(let H=0;H<2*(T-P)-1;H++){const y=Math.floor(H/2);H%2===0?(f(A[P][y+1]),f(A[P+1][y]),f(A[P][y])):(f(A[P][y+1]),f(A[P+1][y+1]),f(A[P+1][y]))}}function c(x){const v=new D;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const x=new D;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=g(x)/2/Math.PI+.5,C=h(x)/Math.PI+.5;o.push(S,1-C)}_(),d()}function d(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],C=o[x+4],T=Math.max(v,S,C),A=Math.min(v,S,C);T>.9&&A<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const x=new D,v=new D,S=new D,C=new D,T=new Ne,A=new Ne,P=new Ne;for(let H=0,y=0;H<s.length;H+=9,y+=6){x.set(s[H+0],s[H+1],s[H+2]),v.set(s[H+3],s[H+4],s[H+5]),S.set(s[H+6],s[H+7],s[H+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),C.copy(x).add(v).add(S).divideScalar(3);const w=g(C);M(T,y+0,x,w),M(A,y+2,v,w),M(P,y+4,S,w)}}function M(x,v,S,C){C<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=C/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.vertices,e.indices,e.radius,e.details)}}class Xs extends jf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Xs(e.radius,e.detail)}}class Wf extends yn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,p=new D,_=new Ne;for(let M=0;M<=r;M++){for(let g=0;g<=i;g++){const h=s+g/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,u.push(_.x,_.y)}d+=f}for(let M=0;M<r;M++){const g=M*(i+1);for(let h=0;h<i;h++){const x=h+g,v=x,S=x+i+1,C=x+i+2,T=x+1;a.push(v,S,T),a.push(S,C,T)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xr extends yn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new D,f=new D,p=[],_=[],M=[],g=[];for(let h=0;h<=i;h++){const x=[],v=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const T=C/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),g.push(T+S,1-v),x.push(c++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<n;x++){const v=u[h][x+1],S=u[h][x],C=u[h+1][x],T=u[h+1][x+1];(h!==0||o>0)&&p.push(v,S,T),(h!==i-1||l<Math.PI)&&p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sc extends yn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new D,d=new D,f=new D;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const M=_/r*s,g=p/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(M),d.y=(e+n*Math.cos(g))*Math.sin(M),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const M=(r+1)*p+_-1,g=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,x=(r+1)*p+_;o.push(M,g,x),o.push(g,h,x)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class en extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jx,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cT extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xf extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class uT extends Xf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Yu=new pt,og=new D,ag=new D;class yv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hf,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lg=new pt,Wo=new D,qu=new D;class hT extends yv{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wo),qu.copy(i.position),qu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(qu),i.updateMatrixWorld(),r.makeTranslation(-Wo.x,-Wo.y,-Wo.z),lg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lg)}}class Mv extends Xf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dT extends yv{constructor(){super(new hv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cg extends Xf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new dT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ug=new pt;class fT{constructor(e,n,i=0,r=1/0){this.ray=new Gc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Bf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ug.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ug),this}intersectObject(e,n=!0,i=[]){return Dd(e,this,i,n),i.sort(hg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Dd(e[r],this,i,n);return i.sort(hg),i}}function hg(t,e){return t.distance-e.distance}function Dd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Dd(s[o],e,n,!0)}}class dg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(un(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pT extends hs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);const fg={type:"change"},$f={type:"start"},Sv={type:"end"},Ml=new Gc,pg=new ki,mT=Math.cos(70*j1.DEG2RAD),zt=new D,En=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zu=1e-6;class gT extends pT{constructor(e,n=null){super(e,n),this.state=dt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new wr,this._lastTargetPosition=new D,this._quat=new wr().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dg,this._sphericalDelta=new dg,this._scale=1,this._panOffset=new D,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new D,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vT.bind(this),this._onPointerDown=xT.bind(this),this._onPointerUp=_T.bind(this),this._onContextMenu=bT.bind(this),this._onMouseWheel=ST.bind(this),this._onKeyDown=ET.bind(this),this._onTouchStart=wT.bind(this),this._onTouchMove=TT.bind(this),this._onMouseDown=yT.bind(this),this._onMouseMove=MT.bind(this),this._interceptControlDown=AT.bind(this),this._interceptControlUp=CT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fg),this.update(),this.state=dt.NONE}update(e=null){const n=this.object.position;zt.copy(n).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=En:i>Math.PI&&(i-=En),r<-Math.PI?r+=En:r>Math.PI&&(r-=En),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),n.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<mT?this.object.lookAt(this.target):(pg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(pg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zu||this._lastTargetPosition.distanceToSquared(this.target)>Zu?(this.dispatchEvent(fg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){zt.setFromMatrixColumn(n,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,n){this.screenSpacePanning===!0?zt.setFromMatrixColumn(n,1):(zt.setFromMatrixColumn(n,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;zt.copy(r).sub(this.target);let s=zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(En*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-En*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(En*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-En*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ne,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function vT(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function _T(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sv),this.state=dt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function yT(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=dt.DOLLY;break;case Js.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}break;case Js.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent($f)}function MT(t){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function ST(t){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(t.preventDefault(),this.dispatchEvent($f),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Sv))}function ET(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function wT(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=dt.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=dt.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent($f)}function TT(t){switch(this._trackPointer(t),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=dt.NONE}}function bT(t){this.enabled!==!1&&t.preventDefault()}function AT(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CT(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class RT extends xv{constructor(){super();const e=new Eo;e.deleteAttribute("uv");const n=new en({side:xn}),i=new en,r=new Mv(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new at(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new at(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new at(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new at(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new at(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new at(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new at(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new at(e,Ps(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new at(e,Ps(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new at(e,Ps(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const M=new at(e,Ps(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const g=new at(e,Ps(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const h=new at(e,Ps(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Ps(t){const e=new Qr;return e.color.setScalar(t),e}const PT={speed:1,sense:1,attack:1,defense:1,upkeep:1,energyGain:1,foodGain:1,eatRange:0,attackRange:0,size:1},Zt={flagellum:{id:"flagellum",zh:"鞭毛",en:"Flagellum",icon:"flagellum",hue:"#7fa8bd",descZh:"游动速度 ×1.45",descEn:"Swim speed x1.45",realZh:"大肠杆菌的旋转鞭毛",realEn:"The rotary flagellum of E. coli",eraMa:3500,branch:"细菌",mods:{speed:1.45},noteZh:"地球上最早的运动器官，让细菌能逆着浓度梯度游动。",noteEn:"The earliest locomotion organ: lets bacteria swim against gradients."},cilia:{id:"cilia",zh:"纤毛",en:"Cilia",icon:"cilia",hue:"#9cc3d0",descZh:"转向更灵活，感知 ×1.3",descEn:"Finer steering, sense x1.3",realZh:"草履虫周围成千上万根纤毛",realEn:"Thousands of cilia ringing a Paramecium",eraMa:1e3,branch:"真核",prereq:["flagellum"],mods:{speed:1.12,sense:1.3},noteZh:"真核细胞用纤毛做精密运动，这也是动物胚胎「旋转细胞」的原语。",noteEn:"Eukaryotic cilia power precise motion — the same primitive used by animal embryos."},tentacle:{id:"tentacle",zh:"触手",en:"Tentacle",icon:"tentacle",hue:"#e2663f",descZh:"攻击距离 +40%，攻击 ×1.25，但能耗 ×1.2",descEn:"Attack range +40, attack x1.25, upkeep x1.2",realZh:"水母与海葵的刺细胞触手",realEn:"Tentacles bearing cnidocytes in jellyfish and anemones",eraMa:600,branch:"动物",prereq:["toxin"],mods:{attack:1.25,attackRange:40,upkeep:1.2},flags:{tentacle:!0},noteZh:"刺胞动物的「真身」武器：不用靠近，先把毒素射出去。",noteEn:"Cnidarians brought ranged weaponry: strike first, from a distance."},pseudopod:{id:"pseudopod",zh:"伪足",en:"Pseudopod",icon:"pseudopod",hue:"#c98a6a",descZh:"可以吞下比自己更大的食物，游速 ×0.8",descEn:"Can engulf food larger than itself, speed x0.8",realZh:"变形虫伸出的伪足",realEn:"The flowing pseudopods of an amoeba",eraMa:1200,branch:"真核",prereq:["mitochondria"],mods:{speed:.8,eatRange:10},flags:{engulf:!0},noteZh:"吞噬式进食：真核细胞第一次把固体食物整个包进体内。",noteEn:"Phagocytosis: eukaryotes began engulfing solid food whole."},mitochondria:{id:"mitochondria",zh:"线粒体",en:"Mitochondria",icon:"mitochondria",hue:"#c9762e",descZh:"基础能耗 ×0.65",descEn:"Energy upkeep x0.65",realZh:"被 α-变形菌吞下后没被消化的古菌",realEn:"An archaeon spared inside an alpha-proteobacterium",eraMa:1800,branch:"内共生",mods:{upkeep:.65},noteZh:"真核细胞的发动机，本身就是一场没有硝烟的内共生战争。",noteEn:"The eukaryote engine — itself the survivor of an ancient takeover."},chloroplast:{id:"chloroplast",zh:"叶绿体",en:"Chloroplast",icon:"chloroplast",hue:"#84b96b",descZh:"光照下持续产能",descEn:"Photosynthesis in light",realZh:"被真核细胞吞下的蓝细菌",realEn:"A cyanobacterium adopted by a eukaryotic cell",eraMa:1550,branch:"内共生",mods:{energyGain:1},flags:{photosynthesis:!0},noteZh:"生命第一次自己制造氧气 —— 地球大气从此改写。",noteEn:"Life began making its own oxygen, rewriting the atmosphere."},chemosynthesis:{id:"chemosynthesis",zh:"化能合成酶",en:"Chemosynthesis",icon:"chemosynthesis",hue:"#b5652e",descZh:"不依赖光照也能产能，但代谢代价更高",descEn:"Energy without light, at a higher metabolic cost",realZh:"深海热液喷口的硫氧化细菌",realEn:"Sulfur-oxidising bacteria at deep-sea vents",eraMa:3500,branch:"细菌",mods:{energyGain:1,upkeep:1.3},flags:{chemosynthesis:!0},noteZh:"地球上最早的生命根本不靠阳光，靠热液里的硫活。",noteEn:"The earliest life never needed sunlight — it ate sulfur from vents."},aerobe:{id:"aerobe",zh:"有氧呼吸器",en:"Aerobic respiratory chain",icon:"aerobe",hue:"#6fa8c4",descZh:"产能效率 ×1.55",descEn:"Energy yield x1.55",realZh:"在大氧化事件后扩张的需氧细菌",realEn:"Aerobic bacteria that expanded after the Great Oxidation",eraMa:2400,branch:"细菌",prereq:["mitochondria"],mods:{energyGain:1.55},noteZh:"氧气从毒气变成燃料 —— 一次彻底的生态位翻转。",noteEn:"Oxygen flipped from poison to fuel — a total reversal of the niche."},lysosome:{id:"lysosome",zh:"溶酶体",en:"Lysosome",icon:"lysosome",hue:"#d4748e",descZh:"分解尸体碎屑，收益 ×2.5 并还原养分",descEn:"Digest corpses x2.5 and return nutrients",realZh:"真核细胞内的消化车间",realEn:"The digestive organelles of eukaryotic cells",eraMa:1500,branch:"真核",prereq:["mitochondria"],mods:{foodGain:1},flags:{digestion:!0},noteZh:"有了消化腔，尸体才第一次能变成下一代的养分。",noteEn:"With digestion, a corpse can finally become the next generation."},shell:{id:"shell",zh:"外壳",en:"Shell",icon:"shell",hue:"#c9c0ad",descZh:"防御力 ×1.9",descEn:"Defense x1.9",realZh:"有孔虫与三叶虫的钙质外骨骼",realEn:"Calcified skeletons of foraminifera and trilobites",eraMa:550,branch:"动物",mods:{defense:1.9},noteZh:"第一副硬壳，把「被吃掉」变成了「大概率不会」。",noteEn:"The first armour: being eaten became merely unlikely."},toxin:{id:"toxin",zh:"刺丝泡",en:"Cnidocyte",icon:"toxin",hue:"#e2663f",descZh:"攻击力 ×1.8",descEn:"Attack x1.8",realZh:"水母刺细胞里的刺丝囊",realEn:"Nematocysts inside jellyfish cnidocytes",eraMa:600,branch:"动物",mods:{attack:1.8},noteZh:"毒刺让刺胞动物成为海洋最早的有效捕食者。",noteEn:"Stinging cells made cnidarians the ocean’s first efficient predators."},capsule:{id:"capsule",zh:"荚膜",en:"Capsule",icon:"capsule",hue:"#a89b83",descZh:"防御 ×1.4，被吞食概率下降",descEn:"Defense x1.4, resists being swallowed",realZh:"肺炎链球菌的荚膜",realEn:"The capsule of Streptococcus pneumoniae",eraMa:2e3,branch:"细菌",mods:{defense:1.4,upkeep:1.08},noteZh:"一层多糖外衣，既挡抗体也是生物膜的底座。",noteEn:"A sugar coat that shields cells — and anchors the biofilm."},endospore:{id:"endospore",zh:"芽孢",en:"Endospore",icon:"endospore",hue:"#d9a441",descZh:"能量耗尽时进入休眠，免受天罚与瘟疫",descEn:"Dormant when exhausted; survives smite and plague",realZh:"芽孢杆菌内部那颗耐热核",realEn:"The heat-proof core inside a Bacillus cell",eraMa:2500,branch:"细菌",flags:{dormancy:!0},noteZh:"地球上最硬核的生存策略：睡上百万年再醒。",noteEn:"The toughest survival trick on Earth: sleep for a million years."},sensor:{id:"sensor",zh:"感应纤毛",en:"Sensor cilia",icon:"sensor",hue:"#8fa9bd",descZh:"感知范围 ×1.6",descEn:"Sense range x1.6",realZh:"纤毛虫的化学感受纤毛",realEn:"Chemoreceptive cilia of ciliates",eraMa:1e3,branch:"真核",prereq:["cilia"],mods:{sense:1.6},noteZh:"有了感官，趋性行为才成为可能。",noteEn:"With senses, taxis — moving toward or away — become possible."},eyespot:{id:"eyespot",zh:"眼点",en:"Eyespot",icon:"eyespot",hue:"#d4748e",descZh:"朝最亮的方向游动",descEn:"Swims toward the brightest light",realZh:"团藻表面的感光眼点",realEn:"The light-sensitive eyespot of Volvox",eraMa:800,branch:"植物",prereq:["cilia"],flags:{phototaxis:!0},noteZh:"单细胞就能「看」光 —— 趋光性是多细胞形态学的第一步。",noteEn:"A single cell that can see light — the first step toward multicellular form."},magnetosome:{id:"magnetosome",zh:"磁性体",en:"Magnetosome",icon:"magnetosome",hue:"#b5652e",descZh:"缓慢迁移到培养皿中层",descEn:"Slowly drifts to the mid layer of the dish",realZh:"磁性细菌体内的磁铁矿结晶链",realEn:"Chains of magnetite crystals inside magnetotactic bacteria",eraMa:3e3,branch:"细菌",flags:{magnetotaxis:!0},noteZh:"能感知地磁场的细菌 —— 它们连「上」和「下」都分得清。",noteEn:"Bacteria that read Earth’s magnetic field — they know up from down."},adhesion:{id:"adhesion",zh:"黏连蛋白",en:"Adhesin",icon:"adhesion",hue:"#4fb3c4",descZh:"可以聚合成多细胞体",descEn:"Enables multicellularity",realZh:"团藻细胞表面的糖蛋白连接",realEn:"Glycoprotein junctions between Volvox cells",eraMa:900,branch:"多细胞起源",mods:{upkeep:1.1},flags:{adhesion:!0},noteZh:"多细胞生命的第一步，往往只是一颗细胞愿意牵着另一颗细胞。",noteEn:"The first step to multicellularity: one cell holding on to another."},quorum:{id:"quorum",zh:"群体感应",en:"Quorum sensing",icon:"quorum",hue:"#5aa89b",descZh:"群体共享能量的效率 ×1.8，感知半径 ×1.3",descEn:"Colony energy sharing x1.8, sense x1.3",realZh:"费氏弧菌的「分子投票」",realEn:"The molecular vote of Vibrio fischeri",eraMa:500,branch:"细菌",prereq:["adhesion"],mods:{sense:1.3},flags:{quorum:!0},noteZh:"细胞开始「数数」：只有人多时才行动。这是社会性的语言。",noteEn:"Cells learned to count themselves — the grammar of society."},myosin:{id:"myosin",zh:"收缩丝",en:"Myosin filament",icon:"myosin",hue:"#c08a9e",descZh:"速度 ×1.35，能耗 ×1.3",descEn:"Speed x1.35, upkeep x1.3",realZh:"肌球蛋白构成的肌小节",realEn:"Myosin filaments in the sarcomere",eraMa:700,branch:"真核",prereq:["mitochondria"],mods:{speed:1.35,upkeep:1.3},flags:{dash:!0},noteZh:"能主动收缩的纤维 —— 从此细胞可以真正地「动」起来。",noteEn:"Contractile fibre: from here on, cells could really move."},meiosis:{id:"meiosis",zh:"减数分裂",en:"Meiosis",icon:"meiosis",hue:"#b58fa8",descZh:"子代基因来自双亲重组，变异速度大幅提升",descEn:"Offspring genes recombine from two parents — faster adaptation",realZh:"真核生物的减数分裂与配子",realEn:"Meiosis and gametes in eukaryotes",eraMa:1e3,branch:"真核",prereq:["mitochondria"],flags:{meiosis:!0},noteZh:"有性生殖让基因在每一代都重新洗牌，演化速度从此翻倍。",noteEn:"Sex reshuffles the deck every generation, doubling evolutionary speed."},apoptosis:{id:"apoptosis",zh:"凋亡程序",en:"Apoptosis",icon:"apoptosis",hue:"#c96a6a",descZh:"群体成员可牺牲自己，把能量交给群体",descEn:"Members can sacrifice themselves for the colony",realZh:"多细胞生物的受控细胞死亡",realEn:"Programmed cell death in multicellular organisms",eraMa:1e3,branch:"多细胞起源",prereq:["adhesion"],flags:{apoptosis:!0},noteZh:"群体学会「牺牲部分成员」—— 合作的另一面。",noteEn:"Colonies learned to sacrifice members: the other side of cooperation."}},br=Object.keys(Zt),ts={myxomycete:{id:"myxomycete",zh:"粘菌路线",en:"Myxomycete route",icon:"route-myxomycete",hue:"#b5652e",realZh:"黄色黏球菌（Myxococcus xanthus）",realEn:"Myxococcus xanthus",eraMa:900,requires:["adhesion","quorum"],descZh:"饥饿时，单细胞细菌聚成蠕动的菌毯，靠群体感应协调行动；资源耗尽后，群体长出子实体，分化出耐旱休眠孢子。",descEn:"When starved, single cells form a coordinated crawling mat; when food runs out the colony builds a fruiting body of dormant spores.",perkZh:"群体可在资源耗尽时形成子实体并播撒孢子，重新播种培养皿",perkEn:"Builds fruiting bodies that broadcast spores back into the dish"},volvocine:{id:"volvocine",zh:"团藻路线",en:"Volvocine route",icon:"route-volvocine",hue:"#84b96b",realZh:"团藻（Volvox）",realEn:"Volvox",eraMa:800,requires:["adhesion","eyespot"],descZh:"数百个细胞嵌在果胶基质里形成空心球体，外层细胞负责游动，内层少数细胞专职生殖；群体整体转向光。",descEn:"Hundreds of cells in a hollow sphere: the outer shell swims, a few inner cells do nothing but reproduce; the sphere steers toward light.",perkZh:"群体整体游动与趋光，体内出现「体细胞 / 生殖细胞」分工",perkEn:"The colony swims as one body toward light, with germ-soma division"},animal:{id:"animal",zh:"动物路线",en:"Animal route",icon:"route-animal",hue:"#d4748e",realZh:"领鞭毛虫 → 海绵",realEn:"Choanoflagellate → sponge",eraMa:600,requires:["adhesion","tentacle"],descZh:"细胞之间出现电信号传导与集体迁移，群体像一只会变形的大生物一样整体移动。",descEn:"Cells coordinate by electrical signals and migrate collectively: the colony moves like one large, deforming animal.",perkZh:"群体获得神经样信号与集体迁移，能整体躲开捕食者",perkEn:"Neural-like signalling and collective migration; the colony dodges predators as one"}},Yf=Object.keys(ts),Vl={goe:{id:"goe",zh:"大氧化事件",en:"Great Oxidation Event",icon:"event-goe",hue:"#d9a441",eraMa:2400,descZh:"产氧光合铺开，氧气第一次在大气里积累。对当时的厌氧生命来说这是一场毒气浩劫，而呼吸氧气的细胞从此统治地球。",descEn:"Oxygenic photosynthesis floods the air. For anaerobic life it is a toxic catastrophe; for aerobes it is the beginning of dominance."},snowball:{id:"snowball",zh:"雪球地球",en:"Snowball Earth",icon:"event-snowball",hue:"#7fa8bd",eraMa:700,descZh:"成冰纪把整个地球冻成一个白色的球。代谢放缓、食物锐减，能形成芽孢的谱系成为唯一的幸存者。",descEn:"An ice age freezes the planet white. Metabolism slows, food vanishes, and only spore-formers survive."},cambrian:{id:"cambrian",zh:"寒武纪爆发",en:"Cambrian Explosion",icon:"event-cambrian",hue:"#c08a9e",eraMa:541,descZh:"多细胞生命一旦跨过那道门槛，身体蓝图就在极短时间内集中涌现 —— 触手、外骨骼、眼睛、消化腔同时登场。",descEn:"Once multicellularity clears the threshold, body plans arrive all at once: tentacles, skeletons, eyes, guts."}},Ev=Zt,mg=br,Jn={photosynthesizer:{zh:"光合者",en:"Phototroph",color:"#84b96b",icon:"chloroplast"},chemotroph:{zh:"化能者",en:"Chemotroph",color:"#b5652e",icon:"chemosynthesis"},decomposer:{zh:"分解者",en:"Decomposer",color:"#d4748e",icon:"lysosome"},symbiote:{zh:"共生体",en:"Symbiote",color:"#4fb3c4",icon:"adhesion"},hunter:{zh:"猎手",en:"Hunter",color:"#e2663f",icon:"toxin"},gatherer:{zh:"采集者",en:"Gatherer",color:"#d6c48f",icon:"flagellum"}},qf=Object.keys(Jn),bi={core:{zh:"核心细胞",en:"Core cell",icon:"role-core",color:"#c9a227",descZh:"群体代谢中枢：产能最高、行动最慢，向同伴输送能量",descEn:"Metabolic hub: highest output, slowest, shares energy with the colony"},worker:{zh:"采集工",en:"Worker",icon:"role-worker",color:"#84b96b",descZh:"四处采集养分，把食物搬回群体共享",descEn:"Forages widely and ferries nutrients back to the colony"},guard:{zh:"守卫细胞",en:"Guard",icon:"role-guard",color:"#e2663f",descZh:"富含毒素与外壳，死守群体边界并猎杀入侵者",descEn:"Toxin-laced defenders that hold the colony perimeter"},brooder:{zh:"繁殖体",en:"Brooder",icon:"role-brooder",color:"#4fb3c4",descZh:"繁殖阈值更低，持续补充群体的新成员",descEn:"Lower breeding threshold, continuously replenishes the colony"},nurse:{zh:"养护细胞",en:"Nurse",icon:"role-nurse",color:"#d6c48f",descZh:"从共享能量池抽取能量，修复受伤的同伴",descEn:"Draws from the shared pool to heal wounded mates"}},LT=Object.keys(bi),NT={core:{speed:.55,size:1.35,defense:1.25,attack:1,food:.8,energy:1.35,breed:1.3,share:.3},worker:{speed:1.4,size:.95,defense:.9,attack:1,food:1.55,energy:1,breed:1,share:.9},guard:{speed:.85,size:1.1,defense:2,attack:1.6,food:.9,energy:1,breed:1.2,share:.2},brooder:{speed:.95,size:1.05,defense:1,attack:1.05,food:1.1,energy:1.15,breed:.6,share:.25},nurse:{speed:1,size:.9,defense:.95,attack:.9,food:1,energy:1.1,breed:1.1,share:.55}},Qe=(t,e)=>t+Math.random()*(e-t),Dt=(t,e,n)=>Math.max(e,Math.min(n,t)),$n=(t,e,n,i)=>Math.hypot(t-n,e-i);class DT{constructor(e,n){We(this,"cell");We(this,"cols");We(this,"rows");We(this,"buckets");this.cell=n;const i=e*2+n*4;this.cols=Math.ceil(i/n),this.rows=this.cols,this.buckets=new Array(this.cols*this.rows);for(let r=0;r<this.buckets.length;r++)this.buckets[r]=[]}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length&&(this.buckets[e].length=0)}insert(e){const n=Dt(Math.floor((e.x+this.cols*this.cell*.5)/this.cell),0,this.cols-1),i=Dt(Math.floor((e.y+this.rows*this.cell*.5)/this.cell),0,this.rows-1);this.buckets[i*this.cols+n].push(e)}near(e,n){const i=Dt(Math.floor((e+this.cols*this.cell*.5)/this.cell),0,this.cols-1),r=Dt(Math.floor((n+this.rows*this.cell*.5)/this.cell),0,this.rows-1),s=[];for(let o=-1;o<=1;o++){const a=r+o;if(!(a<0||a>=this.rows))for(let l=-1;l<=1;l++){const c=i+l;if(c<0||c>=this.cols)continue;const u=this.buckets[a*this.cols+c];for(let d=0;d<u.length;d++)s.push(u[d])}}return s}}class IT{constructor(e,n){We(this,"cell");We(this,"cols");We(this,"rows");We(this,"slots");this.cell=n;const i=e*2+n*4;this.cols=Math.ceil(i/n),this.rows=this.cols,this.slots=new Array(this.cols*this.rows);for(let r=0;r<this.slots.length;r++)this.slots[r]=[]}clear(){for(let e=0;e<this.slots.length;e++)this.slots[e].length&&(this.slots[e].length=0)}insert(e){const n=Dt(Math.floor((e.x+this.cols*this.cell*.5)/this.cell),0,this.cols-1),i=Dt(Math.floor((e.y+this.rows*this.cell*.5)/this.cell),0,this.rows-1);this.slots[i*this.cols+n].push(e)}near(e,n){const i=Dt(Math.floor((e+this.cols*this.cell*.5)/this.cell),0,this.cols-1),r=Dt(Math.floor((n+this.rows*this.cell*.5)/this.cell),0,this.rows-1),s=[];for(let o=-1;o<=1;o++){const a=r+o;if(!(a<0||a>=this.rows))for(let l=-1;l<=1;l++){const c=i+l;if(c<0||c>=this.cols)continue;const u=this.slots[a*this.cols+c];for(let d=0;d<u.length;d++)s.push(u[d])}}return s}}let UT=1,FT=1;class OT{constructor(e){We(this,"agents",[]);We(this,"food",[]);We(this,"colonies",new Map);We(this,"events",[]);We(this,"history",[]);We(this,"effects",[]);We(this,"byId",new Map);We(this,"modCache",new Map);We(this,"tick",0);We(this,"config");We(this,"seenOrganelles",new Set);We(this,"seenMilestones",new Set);We(this,"seenRoles",new Set);We(this,"seenEarthEvents",new Set);We(this,"seenRoutes",new Set);We(this,"totalBirths",0);We(this,"totalDeaths",0);We(this,"totalKills",0);We(this,"totalCannibalKills",0);We(this,"apexId",null);We(this,"light",.8);We(this,"lightOverride",null);We(this,"nutrient",1);We(this,"temperature",.5);We(this,"oxygen",0);We(this,"glacial",0);We(this,"cambrian",0);We(this,"lastCannibalTick",-999);We(this,"colonyEventDone",!1);We(this,"agentGrid");We(this,"foodGrid");this.config={radius:900,initialCount:200,maxPopulation:550,foodPerTick:6.2,mutationRate:.75,...e},this.agentGrid=new DT(this.config.radius,60),this.foodGrid=new IT(this.config.radius,220),this.reset()}reset(){this.agents=[],this.food=[],this.colonies.clear(),this.events=[],this.history=[],this.effects=[],this.byId.clear(),this.modCache.clear(),this.tick=0,this.seenOrganelles.clear(),this.seenMilestones.clear(),this.seenRoles.clear(),this.seenEarthEvents.clear(),this.seenRoutes.clear(),this.totalBirths=0,this.totalDeaths=0,this.totalKills=0,this.totalCannibalKills=0,this.apexId=null,this.colonyEventDone=!1,this.nutrient=1,this.light=.8,this.lightOverride=null,this.temperature=.5,this.oxygen=0,this.glacial=0,this.cambrian=0;const e={hue:0,size:Qe(3.2,4.2),maxSpeed:Qe(.9,1.3),sense:Qe(55,80),aggression:Qe(.15,.45),efficiency:Qe(.4,.6),organelles:[]},n=Qe(0,360),i=[0,.33,.66].map(r=>(n+r*360+Qe(-9,9)+360)%360);for(let r=0;r<this.config.initialCount;r++){const s=(i[r%i.length]+Qe(-9,9)+360)%360;this.agents.push(this.spawnFrom({...e,hue:s,organelles:[]},void 0,!0))}for(let r=0;r<260;r++)this.spawnFood();this.log("milestone",`培养皿接种完成：${this.config.initialCount} 个原始单细胞生物，分属三条创始谱系`,`Inoculated: ${this.config.initialCount} primitive cells from three founder lineages`)}get innerRadius(){return this.config.radius-16}clampToDish(e,n,i=12){const r=this.innerRadius-i,s=Math.hypot(e,n);if(s<=r)return{x:e,y:n};const o=r/(s||1);return{x:e*o,y:n*o}}randomPos(e=30){const n=Qe(0,Math.PI*2),i=Math.sqrt(Math.random())*(this.innerRadius-e);return{x:Math.cos(n)*i,y:Math.sin(n)*i}}spawnFrom(e,n,i=!1){const r=i||!n?this.randomPos():{x:n.x+Qe(-14,14),y:n.y+Qe(-14,14)},s={id:UT++,x:r.x,y:r.y,vx:Qe(-1,1),vy:Qe(-1,1),genome:e,energy:n?n.energy*.45:Qe(50,70),age:0,generation:n?n.generation+1:0,kills:0,cannibalKills:0,children:0,colonyId:n?.colonyId??null,role:n?.role??null,strategy:Sl(e),wander:Qe(0,Math.PI*2),alive:!0,flash:0,lastFeedTick:-999,dormant:!1};return this.byId.set(s.id,s),s}agentById(e){return this.byId.get(e)}spawnFood(e,n,i,r,s="organic"){let o,a;if(e===void 0||n===void 0){const l=this.randomPos(24);o=l.x,a=l.y}else{const l=this.clampToDish(e,n,18);o=l.x,a=l.y}this.food.push({x:o,y:a,energy:i??Qe(8,18),hue:r??(s==="detritus"?Qe(18,42):Qe(90,160)),kind:s,born:this.tick,dead:!1})}log(e,n,i){this.events.unshift({tick:this.tick,type:e,zh:n,en:i}),this.events.length>60&&this.events.pop()}godFeed(e,n){const i=this.clampToDish(e,n,40);for(let r=0;r<35;r++){const s=Qe(0,Math.PI*2),o=Math.sqrt(Math.random())*70;this.spawnFood(i.x+Math.cos(s)*o,i.y+Math.sin(s)*o,Qe(10,22))}this.effects.push({type:"feed",x:i.x,y:i.y,tick:this.tick}),this.log("god","上帝撒下了丰盛的食物","God scattered abundant food")}godSmite(e,n,i=110){let r=0;for(const s of this.agents)!s.alive||s.dormant||$n(s.x,s.y,e,n)<i&&(s.alive=!1,s.energy=0,r++,this.totalDeaths++,this.spawnFood(s.x,s.y,s.genome.size*5,s.genome.hue,"detritus"),s.colonyId!==null&&this.colonies.get(s.colonyId)?.memberIds.delete(s.id));this.log("god",`天罚降临：${r} 个生物化为养分`,`Divine smite: ${r} organisms returned to nutrients`)}godMutate(e,n,i=150){let r=null,s=i;for(const a of this.agents){if(!a.alive)continue;const l=$n(a.x,a.y,e,n);l<s&&(s=l,r=a)}if(!r)return;const o=wv(r.genome);if(o.length){const a=o[Math.floor(Math.random()*o.length)];r.genome.organelles.push(a),r.strategy=Sl(r.genome),r.flash=1,this.seenOrganelles.add(a);const l=Zt[a];this.effects.push({type:"mutate",x:r.x,y:r.y,tick:this.tick}),this.log("god",`上帝之手触碰了 #${r.id}，它立刻长出了「${l.zh}」`,`God touched #${r.id} — it instantly grew a ${l.en}`)}else r.genome.size=Dt(r.genome.size*1.3,2.4,9),this.log("god",`上帝之手让 #${r.id} 的体型暴涨`,`God made #${r.id} grow larger`)}godPlague(e=.4){const n=this.agents.filter(r=>r.alive&&!r.dormant);let i=0;for(const r of n)Math.random()<e&&(r.alive=!1,r.energy=0,i++,this.totalDeaths++,this.spawnFood(r.x,r.y,r.genome.size*5,r.genome.hue,"detritus"),r.colonyId!==null&&this.colonies.get(r.colonyId)?.memberIds.delete(r.id));this.effects.push({type:"plague",x:0,y:0,tick:this.tick}),this.log("god",`瘟疫席卷培养皿：${i} 个生物死亡，幸存者将占据空出的生态位`,`Plague: ${i} died; survivors inherit the empty niches`)}godAliens(e=18){const n=Qe(0,360);for(let i=0;i<e;i++){const r={hue:n+Qe(-10,10),size:Qe(3,6),maxSpeed:Qe(.8,1.6),sense:Qe(50,100),aggression:Qe(.1,.9),efficiency:Qe(.35,.7),organelles:[]};if(Math.random()<.6){const s=br[Math.floor(Math.random()*br.length)];r.organelles.push(s),this.seenOrganelles.add(s)}this.agents.push(this.spawnFrom(r,void 0,!0)),this.totalBirths++}this.effects.push({type:"alien",x:0,y:0,tick:this.tick}),this.log("god",`天外入侵：${e} 个携带未知基因的外来物种被投放到培养皿`,`Alien invasion: ${e} foreigners with unknown genes released`)}bundle(e){const n=this.modCache.get(e);if(n)return n;const i={...PT},r={};for(const o of e.organelles){const a=Zt[o];if(a){if(a.mods)for(const l of Object.keys(a.mods)){const c=a.mods[l];l==="eatRange"||l==="attackRange"?i[l]=i[l]+c:i[l]=i[l]*c}a.flags&&Object.assign(r,a.flags)}}const s={mods:i,flags:r};return this.modCache.set(e,s),s}roleMods(e){return e.role?NT[e.role]:null}get effectiveTemperature(){return this.glacial>0?this.temperature*.3:this.temperature}speedOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.maxSpeed;i*=Math.sqrt(4/e.genome.size),i*=.75+this.effectiveTemperature*.5,i*=n.speed,e.colonyId!==null&&(i*=.75);const r=this.roleMods(e);return r&&(i*=r.speed),i}senseOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.sense*n.sense;return e.colonyId!==null&&(i*=1.15),i}attackOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.size*(.6+e.genome.aggression);i*=n.attack,e.genome.organelles.includes("toxin")&&(i*=1);const r=this.roleMods(e);return r&&(i*=r.attack),i}defenseOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.size*n.defense;const r=this.roleMods(e);return r&&(i*=r.defense),i}upkeepOf(e){const{mods:n}=this.bundle(e.genome);let i=.055+e.genome.size*.012+e.genome.maxSpeed*.02;i*=n.upkeep,i*=.7+this.effectiveTemperature*.8;const r=this.roleMods(e);return r&&(i/=r.energy),i}attackRangeOf(e){return this.bundle(e.genome).mods.attackRange}eatRangeOf(e){const{mods:n}=this.bundle(e.genome);return e.genome.size+5+(e.colonyId!==null?8:0)+n.eatRange}preyScore(e,n){if(e.colonyId!==null&&e.colonyId===n.colonyId)return 0;const i=this.attackOf(e),r=this.defenseOf(n);if(i>r*1.22&&e.genome.size>=n.genome.size*.97)return 1;if(e.strategy==="hunter"&&n.strategy==="hunter"&&i>r*.85){const o=e.genome.organelles.includes("toxin")?.99:1.01;if(e.genome.size>n.genome.size*o)return .85}return 0}step(){if(this.tick++,this.light=this.lightOverride??Dt(.55+.45*Math.cos(this.tick*.0015),.02,1),this.glacial>0&&this.glacial--,this.cambrian>0&&this.cambrian--,this.nutrient=Dt(this.nutrient,.35,2.4),this.food.length<520){let r=this.config.foodPerTick*(.5+.5*this.nutrient)*(this.glacial>0?.45:1);for(;r>0;)Math.random()<r&&this.spawnFood(),r-=1}const e=this.agents.filter(r=>r.alive),n=e.length;this.agentGrid.clear();for(const r of e)this.agentGrid.insert(r);this.foodGrid.clear();for(const r of this.food)this.foodGrid.insert(r);for(const r of e){if(r.age++,r.colonyId!==null&&r.genome.organelles.includes("adhesion")){const C=this.colonies.get(r.colonyId);C&&(C.differentiated||C.route)?r.strategy="symbiote":r.strategy==="symbiote"&&(r.strategy=Sl(r.genome))}else r.strategy==="symbiote"&&(r.strategy=Sl(r.genome));const s=r.genome,{mods:o,flags:a}=this.bundle(s),l=this.senseOf(r),c=this.speedOf(r);let u=null,d=1/0,f=0,p=null,_=1/0,M=null,g=1/0;for(const C of this.agentGrid.near(r.x,r.y)){if(C===r||!C.alive)continue;const T=$n(r.x,r.y,C.x,C.y),A=l+this.attackRangeOf(r);if(T>A)continue;const P=this.preyScore(r,C);if(P>0){const H=1-Dt(r.energy/90,0,1),y=P<1?P+H*.14:P;(y>f||y===f&&T<d)&&(u=C,d=T,f=y)}else C.strategy==="hunter"&&r.strategy==="hunter"&&T<_&&(p=C,_=T);s.organelles.includes("adhesion")&&C.genome.organelles.includes("adhesion")&&Math.abs(C.genome.hue-s.hue)<34&&r.colonyId===null&&C.colonyId===null&&T<g&&(M=C,g=T)}let h=0,x=0;if(u){const C=f>=1?2.2:1.9;h+=(u.x-r.x)/(d+1)*C,x+=(u.y-r.y)/(d+1)*C}else if(p&&r.strategy==="hunter"){const C=1-Dt(r.energy/120,0,1);h+=(p.x-r.x)/(_+1)*(.9+C*1.1),x+=(p.y-r.y)/(_+1)*(.9+C*1.1)}else{const C=this.nearestFood(r.x,r.y,l);if(C){const T=C.d,A=.8+(1-Dt(r.energy/120,0,1));h+=(C.item.x-r.x)/(T+1)*A,x+=(C.item.y-r.y)/(T+1)*A}}if(a.phototaxis){const C=this.light;h+=.55*C,x+=.55*C}if(a.magnetotaxis){const C=Math.hypot(r.x,r.y)||1,A=(this.innerRadius*.55-C)*.0016;h+=r.x/C*A*60,x+=r.y/C*A*60}if(M&&(h+=(M.x-r.x)/(g+1)*1.1,x+=(M.y-r.y)/(g+1)*1.1),r.colonyId!==null){const C=this.colonies.get(r.colonyId);if(C){const T=this.colonyCenter(C),A=$n(T.x,T.y,r.x,r.y)+1;A>26?(h+=(T.x-r.x)/A*1.4,x+=(T.y-r.y)/A*1.4):(h-=(T.x-r.x)/A*.5,x-=(T.y-r.y)/A*.5)}}if(r.role==="guard"&&r.colonyId!==null){const C=this.colonies.get(r.colonyId);if(C){const T=this.colonyCenter(C),A=$n(T.x,T.y,r.x,r.y)+1,P=26+C.memberIds.size*1.6;A<P&&(h-=(T.x-r.x)/A*1.2,x-=(T.y-r.y)/A*1.2)}}r.wander+=Qe(-.35,.35),h+=Math.cos(r.wander)*.45,x+=Math.sin(r.wander)*.45;const v=Math.hypot(h,x)||1;r.vx=r.vx*.82+h/v*c*.18,r.vy=r.vy*.82+x/v*c*.18,r.x+=r.vx*c*2.2,r.y+=r.vy*c*2.2;const S=Math.hypot(r.x,r.y);if(S>this.innerRadius-12){const C=(this.innerRadius-12)/S;r.x*=C,r.y*=C,r.vx*=-.5,r.vy*=-.5}if(r.energy-=this.upkeepOf(r),a.photosynthesis&&(r.energy+=.42*this.light*o.energyGain),a.chemosynthesis&&(r.energy+=.13*o.energyGain),r.genome.organelles.includes("aerobe")&&(r.energy+=.16*this.oxygen*o.energyGain),r.colonyId!==null){const C=this.colonies.get(r.colonyId);if(C&&(r.energy+=.03*C.memberIds.size,r.role==="core"&&C.energyPool>0)){const T=Math.min(C.energyPool,.06);C.energyPool-=T,r.energy+=T}}a.dormancy&&r.energy<6&&!r.dormant?(r.dormant=!0,r.energy=0):r.dormant&&r.energy>14&&(r.dormant=!1),r.flash*=.9}for(const r of e){if(!r.alive||r.dormant)continue;const{mods:s,flags:o}=this.bundle(r.genome),a=this.eatRangeOf(r);let l=null,c=a;for(const M of this.foodGrid.near(r.x,r.y)){if(M.dead)continue;const g=$n(M.x,M.y,r.x,r.y);g<c&&(c=g,l=M)}if(!l)continue;const u=l,d=this.roleMods(r),f=s.foodGain*(d?d.food:1),p=o.digestion;let _=u.energy*r.genome.efficiency*f;if(u.kind==="detritus"?p?(_*=2.6,this.nutrient=Dt(this.nutrient+u.energy*.018,.35,2.4)):_*=.45:p&&(_*=.8),r.energy+=_,r.flash=1,r.lastFeedTick=this.tick,r.colonyId!==null&&d&&d.share>0){const M=this.colonies.get(r.colonyId);if(M){const g=r.genome.organelles.includes("quorum")?1.8:1;M.energyPool=Math.min(120,M.energyPool+_*d.share*.25*g)}}u.dead=!0}this.food.some(r=>r.dead)&&(this.food=this.food.filter(r=>!r.dead));const i=new Set;for(const r of e){if(!r.alive||i.has(r.id))continue;const s=this.attackRangeOf(r);for(const o of this.agentGrid.near(r.x,r.y)){if(!o.alive||i.has(o.id)||o.id===r.id)continue;const a=$n(r.x,r.y,o.x,o.y);if(a>r.genome.size+o.genome.size+3+s)continue;const l=this.preyScore(r,o);if(l>0){this.kill(r,o,i,l<1);break}const c=this.preyScore(o,r);if(c>0){this.kill(o,r,i,c<1);break}const u=(o.x-r.x)/(a+.01),d=(o.y-r.y)/(a+.01);r.vx-=u*.6,r.vy-=d*.6,o.vx+=u*.6,o.vy+=d*.6,r.energy-=.3,o.energy-=.3}}for(const r of e){if(!r.alive||r.role!=="nurse"||r.colonyId===null)continue;const s=this.colonies.get(r.colonyId);if(!(!s||s.energyPool<=1))for(const o of this.agentGrid.near(r.x,r.y)){if(!o.alive||o.colonyId!==r.colonyId||o===r||o.energy>110)continue;const a=Math.min(s.energyPool,1.6);s.energyPool-=a,o.energy+=a,o.flash=.6;break}}for(const r of e)if(!(!r.alive||r.colonyId!==null)&&r.genome.organelles.includes("adhesion"))for(const s of this.agentGrid.near(r.x,r.y)){if(!s.alive||s.colonyId!==null||s.id===r.id||!s.genome.organelles.includes("adhesion")||Math.abs(s.genome.hue-r.genome.hue)>25||$n(r.x,r.y,s.x,s.y)>24)continue;const o={id:FT++,memberIds:new Set([r.id,s.id]),hue:r.genome.hue,born:this.tick,rounds:0,roles:new Map,energyPool:0,differentiated:!1,foundedGeneration:Math.max(r.generation,s.generation),totalKills:0,route:null,routeBorn:0,fruiting:0,swarmX:0,swarmY:0};this.colonies.set(o.id,o),r.colonyId=o.id,s.colonyId=o.id,this.colonyEventDone||(this.colonyEventDone=!0,this.log("colony","里程碑：首个多细胞聚合体诞生！细胞们开始协同合作","Milestone: the first multicellular colony is born — cells now cooperate"));break}for(const r of this.colonies.values()){const s=this.colonyCenter(r);for(const o of e)!o.alive||o.colonyId!==null||o.genome.organelles.includes("adhesion")&&(Math.abs(o.genome.hue-r.hue)>34||$n(o.x,o.y,s.x,s.y)<40+r.memberIds.size*4&&r.memberIds.size<14&&(r.memberIds.add(o.id),o.colonyId=r.id))}this.updateColonyDifferentiation(),this.updateColonyRoutes();for(const r of e){if(!r.alive)continue;const s=this.roleMods(r),o=(100+r.genome.size*8)*(s?s.breed:1),a=n+this.totalBirths-this.totalDeaths>=this.config.maxPopulation;if(r.energy>o&&!a){const l=this.reproduceGenome(r),c=this.spawnFrom(l,r);c.colonyId=null,c.role=null,r.energy*=.55,r.children++,this.totalBirths++,this.agents.push(c);const u=l.organelles.find(d=>!r.genome.organelles.includes(d));if(u&&!this.seenOrganelles.has(u)){this.seenOrganelles.add(u);const d=Zt[u];this.log("organelle",`进化突破！#${c.id} 在繁殖中突变出「${d.zh}」—— ${d.descZh}`,`Breakthrough! #${c.id} mutated a ${d.en} — ${d.descEn}`)}if(r.colonyId!==null){const d=this.colonies.get(r.colonyId);d&&d.memberIds.size<14&&l.organelles.includes("adhesion")&&(c.colonyId=d.id,d.memberIds.add(c.id),c.role=r.role,r.role&&d.roles.set(c.id,r.role))}}}for(const r of this.agents)if(r.alive&&!r.dormant&&(r.energy<=0||r.age>2600)){if(r.genome.organelles.includes("apoptosis")&&r.colonyId!==null&&r.energy<=0){const o=this.colonies.get(r.colonyId);o&&(o.energyPool=Math.min(120,o.energyPool+18),this.log("differentiate",`细胞 #${r.id} 启动凋亡程序，把最后的能量留给了群体`,`Cell #${r.id} triggered apoptosis, surrendering its energy to the colony`))}if(r.alive=!1,r.energy=0,this.totalDeaths++,this.spawnFood(r.x,r.y,r.genome.size*6,r.genome.hue,"detritus"),r.colonyId!==null){const o=this.colonies.get(r.colonyId);o?.memberIds.delete(r.id),o?.roles.delete(r.id)}}for(const[r,s]of this.colonies)if(s.memberIds.size<3){for(const o of s.memberIds){const a=this.byId.get(o);a&&(a.colonyId=null,a.role=null)}s.memberIds.clear(),this.colonies.delete(r)}for(const r of this.agents)r.alive&&(r.colonyId===null?r.role=null:this.colonies.has(r.colonyId)||(r.colonyId=null,r.role=null));if(this.agents.length>4e3&&(this.agents=this.agents.filter(r=>r.alive)),this.updateEarthEvents(),this.tick%10===0){const r=this.agents.filter(u=>u.alive),s=r.length,o=s?r.reduce((u,d)=>u+d.generation,0)/s:0,a=r.filter(u=>u.genome.organelles.length>0).length,l=r.reduce((u,d)=>Math.max(u,d.kills),0);this.history.push({tick:this.tick,population:s,avgGeneration:o,colonies:this.colonies.size,organelleRate:s?a/s:0,topKills:l,composition:this.composition()}),this.history.length>400&&this.history.shift();for(const u of[100,500,1e3,2500,5e3,1e4])this.tick>=u&&!this.seenMilestones.has(u)&&(this.seenMilestones.add(u),this.log("milestone",`第 ${u} 代际时刻：种群 ${s}，平均世代 ${o.toFixed(1)}，细胞器普及率 ${((s?a/s:0)*100).toFixed(0)}%`,`Tick ${u}: population ${s}, avg generation ${o.toFixed(1)}, organelle adoption ${((s?a/s:0)*100).toFixed(0)}%`));const c=r.reduce((u,d)=>d.kills>=3&&(!u||d.kills>u.kills)?d:u,null);if(c&&c.id!==this.apexId){this.apexId=c.id;const u=Jn[c.strategy];this.log("apex",`新的顶级掠食者登基：#${c.id}（${u.zh}，猎杀 ${c.kills}，第 ${c.generation} 代）`,`New apex predator: #${c.id} (${u.en}, ${c.kills} kills, gen ${c.generation})`)}s===0&&this.log("extinction","大灭绝：培养皿中所有生命已消亡","Extinction: all life in the dish has perished")}}reproduceGenome(e){const n=zT(e.genome,this.effectiveMutationRate());if(!e.genome.organelles.includes("meiosis"))return n;const i=this.agents.filter(l=>l.alive&&l.id!==e.id&&l.strategy===e.strategy);if(!i.length)return n;const s=i[Math.floor(Math.random()*i.length)].genome,o=(l,c)=>Math.random()<.5?l:c,a={hue:o(n.hue,s.hue),size:o(n.size,s.size),maxSpeed:o(n.maxSpeed,s.maxSpeed),sense:o(n.sense,s.sense),aggression:o(n.aggression,s.aggression),efficiency:o(n.efficiency,s.efficiency),organelles:o(n.organelles,s.organelles).slice()};return a.organelles=kT(a.organelles),a}effectiveMutationRate(){return this.config.mutationRate*(this.cambrian>0?2.5:1)}updateColonyRoutes(){for(const e of this.colonies.values()){const n=[...e.memberIds].map(r=>this.byId.get(r)).filter(r=>!!(r&&r.alive));if(n.length<4)continue;const i=new Set;for(const r of n)for(const s of r.genome.organelles)i.add(s);if(!e.route)for(const r of Yf){const s=ts[r];if(!s.requires.every(a=>i.has(a)))continue;e.route=r,e.routeBorn=this.tick,this.seenRoutes.add(r);const o=this.colonyCenter(e);this.effects.push({type:"earth",x:o.x,y:o.y,tick:this.tick}),this.log("route",`演化里程碑：多细胞体走出「${s.zh}」—— ${s.perkZh}（现实原型：${s.realZh}）`,`Milestone: the colony follows the ${s.en} — ${s.perkEn} (real analogue: ${s.realEn})`);break}if(e.route==="myxomycete"){const r=e.energyPool<10||this.food.length<60;e.fruiting=Dt(e.fruiting+(r?.006:-.002),0,1);const s=this.agents.filter(a=>a.alive).length,o=n.length>=6&&s<this.config.maxPopulation*.55;if(e.fruiting>=1&&o){e.fruiting=.4;const a=this.colonyCenter(e),l=5;for(let c=0;c<l;c++){const u=Qe(0,Math.PI*2),d=Qe(30,120),f={...n[0].genome,organelles:[...n[0].genome.organelles]},p=this.spawnFrom(f,void 0,!0);p.x=a.x+Math.cos(u)*d,p.y=a.y+Math.sin(u)*d,p.colonyId=null,this.agents.push(p),this.totalBirths++}this.effects.push({type:"spore",x:a.x,y:a.y,tick:this.tick}),this.log("route","子实体成熟：粘菌群落播撒了休眠孢子","Fruiting body matured: the myxomycete colony released spores")}else e.fruiting>=1&&(e.fruiting=.92)}else if(e.route==="volvocine")e.swarmX=.6,e.swarmY=.6;else if(e.route==="animal"){let r=null,s=1/0;for(const o of n)for(const a of this.agentGrid.near(o.x,o.y)){if(!a.alive||a.strategy!=="hunter"||a.colonyId===e.id)continue;const l=$n(a.x,a.y,o.x,o.y);l<s&&(s=l,r=a)}if(r&&s<260){const o=this.colonyCenter(e),a=$n(o.x,o.y,r.x,r.y)||1;e.swarmX=(o.x-r.x)/a*.9,e.swarmY=(o.y-r.y)/a*.9}else e.swarmX*=.96,e.swarmY*=.96}}}updateEarthEvents(){if(!this.seenEarthEvents.has("goe")){const e=this.agents.filter(r=>r.alive),n=e.filter(r=>r.genome.organelles.includes("chloroplast")).length;if((e.length?n/e.length:0)>=.12&&e.length>=40&&this.tick>260){this.seenEarthEvents.add("goe");let r=0;for(const o of e)!o.genome.organelles.includes("aerobe")&&!o.genome.organelles.includes("mitochondria")&&Math.random()<.62&&(o.alive=!1,o.energy=0,r++,this.totalDeaths++,this.spawnFood(o.x,o.y,o.genome.size*5,o.genome.hue,"detritus"),o.colonyId!==null&&this.colonies.get(o.colonyId)?.memberIds.delete(o.id));this.oxygen=1,this.effects.push({type:"earth",x:0,y:0,tick:this.tick});const s=Vl.goe;this.log("earth",`【${s.zh}】${s.descZh} —— ${r} 个厌氧生物在毒气中灭绝`,`[${s.en}] ${s.descEn} — ${r} anaerobes perished in the poison`)}}if(!this.seenEarthEvents.has("snowball")&&this.seenEarthEvents.has("goe")){const e=this.agents.filter(n=>n.alive);if(this.tick>1400&&e.length>=120){this.seenEarthEvents.add("snowball"),this.glacial=420;let n=0;for(const r of e){const s=r.genome.organelles.includes("endospore");!s&&Math.random()<.42?(r.alive=!1,r.energy=0,n++,this.totalDeaths++,this.spawnFood(r.x,r.y,r.genome.size*4,r.genome.hue,"detritus"),r.colonyId!==null&&this.colonies.get(r.colonyId)?.memberIds.delete(r.id)):s&&(r.dormant=!0,r.energy=0)}this.effects.push({type:"earth",x:0,y:0,tick:this.tick});const i=Vl.snowball;this.log("earth",`【${i.zh}】${i.descZh} —— ${n} 个细胞冻毙，能形成芽孢的谱系进入休眠`,`[${i.en}] ${i.descEn} — ${n} cells froze; spore-formers went dormant`)}}if(!this.seenEarthEvents.has("cambrian")&&this.seenRoutes.size>0){this.seenEarthEvents.add("cambrian"),this.cambrian=320,this.effects.push({type:"earth",x:0,y:0,tick:this.tick});const e=Vl.cambrian;this.log("earth",`【${e.zh}】${e.descZh}`,`[${e.en}] ${e.descEn}`)}}updateColonyDifferentiation(){for(const e of this.colonies.values()){this.tick-e.born>=60&&(e.rounds=Math.floor((this.tick-e.born)/60));const n=[...e.memberIds].map(i=>this.byId.get(i)).filter(i=>!!(i&&i.alive));if(n.length<3){for(const i of n)i.role=null;e.roles.clear(),e.differentiated=!1;continue}if(e.differentiated)new Set(n.map(r=>r.role).filter(Boolean)).size<=1&&e.rounds>=1&&this.assignRoles(e,n);else{if(e.rounds<1||n.length<4)continue;this.assignRoles(e,n),e.differentiated=!0;const i=[...e.roles.values()].map(r=>bi[r].zh);this.log("differentiate",`多细胞体完成功能分化：${i.join("、")} —— 细胞们不再各干各的`,`Multicellular differentiation: ${[...e.roles.values()].map(r=>bi[r].en).join(", ")} — cells now specialise`)}}}assignRoles(e,n){e.roles.clear();for(const a of n)a.role=null;const i=(a,l)=>{const c=a.genome;let u=Math.random()*.6;switch(l){case"core":u+=(c.organelles.includes("chloroplast")?2.4:0)+c.efficiency*1.4-c.aggression*.8;break;case"guard":u+=(c.organelles.includes("toxin")?2.2:0)+(c.organelles.includes("shell")?1.6:0)+(c.organelles.includes("tentacle")?1.2:0)+c.aggression*1.6;break;case"brooder":u+=c.efficiency*1.5+(c.organelles.includes("mitochondria")?1.1:0)-c.aggression;break;case"nurse":u+=(c.organelles.includes("sensor")?1.5:0)+c.efficiency*1.2-c.size*.08;break;case"worker":u+=(c.organelles.includes("flagellum")?1.6:0)+c.maxSpeed*.8-c.aggression;break}return u},r=n.length,s={core:r>=6?1:0,nurse:r>=5?1:0,guard:r>=4?1:0,brooder:r>=4?1:0,worker:Math.max(1,r-3)};r<6&&(s.core=1);const o=new Set;for(const a of LT){const l=s[a];if(l<=0)continue;const c=n.filter(u=>!o.has(u.id)).sort((u,d)=>i(d,a)-i(u,a));for(let u=0;u<l&&u<c.length;u++){const d=c[u];d.role=a,o.add(d.id),e.roles.set(d.id,a),this.seenRoles.add(a)}}for(const a of n)o.has(a.id)||(a.role="worker",e.roles.set(a.id,"worker"),this.seenRoles.add("worker"))}nearestFood(e,n,i){let r=null,s=i;for(const o of this.foodGrid.near(e,n)){if(o.dead)continue;const a=$n(o.x,o.y,e,n);a<s&&(s=a,r=o)}return r?{item:r,d:s}:null}colonySize(e){return e===null?0:this.colonies.get(e)?.memberIds.size??0}colonyCenter(e){let n=0,i=0,r=0;for(const s of e.memberIds){const o=this.byId.get(s);o&&o.alive&&(n+=o.x,i+=o.y,r++)}return r?{x:n/r,y:i/r}:{x:0,y:0}}composition(){const e={photosynthesizer:0,chemotroph:0,decomposer:0,symbiote:0,hunter:0,gatherer:0};let n=0;for(const i of this.agents)i.alive&&(e[i.strategy]++,n++);if(n>0)for(const i of qf)e[i]=e[i]/n;return e}compositionCounts(){const e={photosynthesizer:0,chemotroph:0,decomposer:0,symbiote:0,hunter:0,gatherer:0};for(const n of this.agents)n.alive&&e[n.strategy]++;return e}kill(e,n,i,r){const s=n.energy;if(n.alive=!1,n.energy=0,i.add(n.id),e.energy+=s*.45*e.genome.efficiency+n.genome.size*2.4,e.energy=Math.min(e.energy,400),e.kills++,e.flash=1,e.genome.size=Dt(e.genome.size+.06,2.4,9),this.totalKills++,this.totalDeaths++,this.spawnFood(n.x,n.y,n.genome.size*5,n.genome.hue,"detritus"),r&&(e.cannibalKills++,this.totalCannibalKills++,this.lastCannibalTick=this.tick,this.effects.push({type:"cannibal",x:n.x,y:n.y,tick:this.tick}),this.log("cannibal",`食同族：猎手 #${e.id} 吞噬了同族 #${n.id}`,`Cannibalism: hunter #${e.id} devoured its own kind #${n.id}`)),n.colonyId!==null){const o=this.colonies.get(n.colonyId);o?.memberIds.delete(n.id),o?.roles.delete(n.id)}}consumeEffects(){if(!this.effects.length)return[];const e=this.effects;return this.effects=[],e}fastForward(e,n=!1){const i=this.events.length;let r=0;for(;r<e&&(this.step(),!(n&&this.events.length>i||this.agents.every(s=>!s.alive)));r++);return r}}function Sl(t){const e=n=>t.organelles.includes(n);return t.aggression>.38||e("toxin")||e("tentacle")?"hunter":e("lysosome")?"decomposer":e("chloroplast")?"photosynthesizer":e("chemosynthesis")?"chemotroph":"gatherer"}function wv(t){return br.filter(e=>{if(t.organelles.includes(e))return!1;const n=Zt[e].prereq;return n?n.every(i=>t.organelles.includes(i)):!0})}function kT(t){const e=new Set;for(let n=0;n<4;n++){let i=!1;for(const r of t){if(e.has(r))continue;const s=Zt[r].prereq;(!s||s.every(o=>e.has(o)))&&(e.add(r),i=!0)}if(!i)break}return t.filter(n=>e.has(n))}function zT(t,e){const n={hue:(t.hue+Qe(-14,14)+360)%360,size:Dt(t.size+Qe(-.35,.45),2.4,9),maxSpeed:Dt(t.maxSpeed+Qe(-.15,.15),.4,3.2),sense:Dt(t.sense+Qe(-8,8),30,220),aggression:Dt(t.aggression+Qe(-.08,.08),0,1),efficiency:Dt(t.efficiency+Qe(-.05,.05),.2,.95),organelles:[...t.organelles]},i=wv(n);if(Math.random()<e*.52&&n.organelles.length<7&&i.length)n.organelles.push(BT(i,n.organelles));else if(Math.random()<e*.005&&n.organelles.length>1){const r=n.organelles[Math.floor(Math.random()*n.organelles.length)];n.organelles=HT(n.organelles,r)}return n}function BT(t,e){const n=t.map(s=>{const o=br.filter(u=>Zt[u].prereq?.includes(s)).length,a=br.filter(u=>Zt[u].prereq?.includes(s)&&e.includes(u)).length,l=Yf.filter(u=>ts[u].requires.includes(s)).length,c=Zt[s].branch==="真核"||Zt[s].branch==="多细胞起源"?2:0;return 1+o*1.8+a*3.2+l*4.2+c}),i=n.reduce((s,o)=>s+o,0);let r=Math.random()*i;for(let s=0;s<t.length;s++)if(r-=n[s],r<=0)return t[s];return t[t.length-1]}function HT(t,e){const n=new Set([e]);let i=!0;for(;i;){i=!1;for(const s of t){if(n.has(s))continue;const o=Zt[s].prereq;o&&o.some(a=>n.has(a))&&(n.add(s),i=!0)}}const r=t.filter(s=>!n.has(s));return r.length?r:[e]}const Nn=9.6,GT=5.4,gg=1,Ii=900,xg=520,vg=520,_g=28,VT={myxomycete:ts.myxomycete.hue,volvocine:ts.volvocine.hue,animal:ts.animal.hue},yg=`
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
`;function jT({engine:t,toolRef:e,selectedId:n,onSelect:i}){const r=be.useRef(null),s=be.useRef(n),o=be.useRef(i);return s.current=n,o.current=i,be.useEffect(()=>{const a=r.current;if(!a)return;const l=Nn/t.config.radius,c=new rT({antialias:!0,alpha:!1});c.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),c.setSize(a.clientWidth,a.clientHeight),c.toneMapping=Gx,c.toneMappingExposure=1.05,c.outputColorSpace=Yn,c.shadowMap.enabled=!0,c.shadowMap.type=Bx,a.appendChild(c.domElement);const u=new xv,d=new ze(727583),f=new ze(263949),p=d.clone();u.background=p;const _=new Vf(727583,34,78);u.fog=_;const M=new In(46,a.clientWidth/a.clientHeight,.1,220),g=parseFloat(new URLSearchParams(window.location.search).get("cam")??""),h=Number.isFinite(g)?Math.max(.12,Math.min(2,g)):1;M.position.set(0,19.5*h,20*h);const x=new gT(M,c.domElement);x.enableDamping=!0,x.dampingFactor=.075,x.minDistance=5,x.maxDistance=58,x.maxPolarAngle=Math.PI*.49,x.target.set(0,0,0),x.update();const v=new Ld(c),S=v.fromScene(new RT,.04);u.environment=S.texture,u.environmentIntensity=.42;const C=new uT(10479871,397324,.4);u.add(C);const T=new cg(16774888,1.1);T.position.set(11,21,8),T.castShadow=!0,T.shadow.mapSize.set(768,768),T.shadow.camera.near=1,T.shadow.camera.far=90,T.shadow.camera.left=-30,T.shadow.camera.right=30,T.shadow.camera.top=30,T.shadow.camera.bottom=-30,T.shadow.bias=-9e-4,T.shadow.normalBias=.03,T.shadow.radius=3,u.add(T);const A=new cg(9678524,.75);A.position.set(-13,9,-11),u.add(A);const P=new Mv(10672956,.35,40);P.position.set(0,5,0),u.add(P);const H=WT(768);H.colorSpace=Yn,H.anisotropy=c.capabilities.getMaxAnisotropy();const y=new en({map:H,color:16777215,roughness:.34,metalness:.04,envMapIntensity:.7}),w=new at(new Mc(Nn,160),y);w.rotation.x=-Math.PI/2,w.position.y=.001,w.receiveShadow=!0,u.add(w);const O=XT(512),k=new at(new Mc(Nn*.995,128),new Qr({map:O,transparent:!0,opacity:.32,blending:js,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.position.set(-1.6,.012,-2.2),u.add(k);const X=new at(new io(Nn+.55,Nn+.75,.7,128),new en({color:330252,roughness:.92,metalness:.04}));X.position.y=-.42,X.receiveShadow=!0,u.add(X);const Q=new en({color:13627135,roughness:.05,metalness:.05,transparent:!0,opacity:.17,side:Un,depthWrite:!1,envMapIntensity:2.6}),V=new at(new io(Nn+.26,Nn+.26,1.65,160,1,!0),Q);V.position.y=.8,V.renderOrder=3,u.add(V);const Z=new cT({color:15267839,roughness:.04,metalness:.06,transparent:!0,opacity:.42,side:Un,depthWrite:!1,envMapIntensity:2.8,clearcoat:1,clearcoatRoughness:.03}),N=new at(new Sc(Nn+.26,.075,16,160),Z);N.rotation.x=Math.PI/2,N.position.y=1.62,N.renderOrder=4,u.add(N);const K=new at(new io(Nn+.26,Nn+.26,.07,160),Q);K.position.y=-.03,K.renderOrder=2,u.add(K);const J=new Xr(1,8,6),ce=new en({color:16777215,roughness:.06,metalness:.1,transparent:!0,opacity:.42,envMapIntensity:2.4}),ne=new Xn(J,ce,44),ee=new Vt;for(let Ge=0;Ge<44;Ge++){const Be=Math.random()*Math.PI*2,Jt=.15+Math.random()*1.35,Ft=.018+Math.random()*.045;ee.position.set(Math.cos(Be)*(Nn+.2),Jt,Math.sin(Be)*(Nn+.2)),ee.scale.setScalar(Ft),ee.updateMatrix(),ne.setMatrixAt(Ge,ee.matrix)}ne.instanceMatrix.needsUpdate=!0,u.add(ne);const j=new Xs(1,2),re=new Float32Array(Ii),de=new Float32Array(Ii),pe=new Float32Array(Ii),Fe=new Float32Array(Ii),Pe=new Float32Array(Ii*3),Ke=new Float32Array(Ii);j.setAttribute("aSeed",new rr(re,1)),j.setAttribute("aFlags",new rr(de,1)),j.setAttribute("aFlags2",new rr(Ke,1)),j.setAttribute("aFlash",new rr(pe,1)),j.setAttribute("aRole",new rr(Fe,1)),j.setAttribute("aColor",new rr(Pe,3));const Je=new en({color:16777215,roughness:.46,metalness:.02,envMapIntensity:.42});Je.onBeforeCompile=Ge=>{Ge.uniforms.uTime={value:0},Je.userData.shader=Ge,Ge.vertexShader=Ge.vertexShader.replace("#include <common>",`
            #include <common>
            ${yg}
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
            ${yg}
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
          `)};const ke=new Xn(j,Je,Ii);ke.instanceMatrix.setUsage(ii),ke.castShadow=!0,ke.receiveShadow=!1,ke.frustumCulled=!1,u.add(ke);const L=new Xn(new Xs(1.42,1),new en({color:14676223,roughness:.14,metalness:.14,transparent:!0,opacity:.26,side:Un,depthWrite:!1,envMapIntensity:2.2}),320);L.instanceMatrix.setUsage(ii),L.frustumCulled=!1,L.renderOrder=1,u.add(L);const Pt=new Xn(new oa(.1,1.9,6),new en({color:13497343,roughness:.5,transparent:!0,opacity:.5}),420);Pt.instanceMatrix.setUsage(ii),Pt.frustumCulled=!1,u.add(Pt);const He=new Xn(new oa(.1,1.7,6),new en({color:16756874,emissive:16734780,emissiveIntensity:.35,roughness:.4,transparent:!0,opacity:.92}),1400);He.instanceMatrix.setUsage(ii),He.frustumCulled=!1,u.add(He);const Ye=new Xn(new oa(.028,.52,4),new en({color:14153727,roughness:.5,transparent:!0,opacity:.55}),1200);Ye.instanceMatrix.setUsage(ii),Ye.frustumCulled=!1,u.add(Ye);const Ae=new Xn(new Xr(1,18,12),new en({color:16498468,emissive:9584654,emissiveIntensity:.6,roughness:.5}),40);Ae.instanceMatrix.setUsage(ii),Ae.frustumCulled=!1,u.add(Ae);const it=new Xn(new Xr(1,24,16),new en({color:3462041,emissive:417606,emissiveIntensity:.55,transparent:!0,opacity:.28,roughness:.1,depthWrite:!1}),40);it.instanceMatrix.setUsage(ii),it.frustumCulled=!1,it.renderOrder=1,u.add(it);const Ce=new Xn(new Xs(1,2),new en({color:16020150,emissive:8591427,emissiveIntensity:.5,transparent:!0,opacity:.34,roughness:.35,depthWrite:!1}),40);Ce.instanceMatrix.setUsage(ii),Ce.frustumCulled=!1,Ce.renderOrder=1,u.add(Ce);const R=new Xn(new Xr(1,8,6),new en({color:12448378,emissive:5212706,emissiveIntensity:.75,roughness:.55}),xg);R.instanceMatrix.setUsage(ii),R.frustumCulled=!1,u.add(R);const E=new Xn(new Xs(1,0),new en({color:7031347,roughness:.95,metalness:0}),vg);E.instanceMatrix.setUsage(ii),E.frustumCulled=!1,u.add(E);const z=3e3,q=new Float32Array(z*6),ie=new Float32Array(z*6),Y=new yn;Y.setAttribute("position",new kn(q,3)),Y.setAttribute("color",new kn(ie,3));const Te=new lT(Y,new vv({vertexColors:!0,transparent:!0,opacity:.5,blending:js,depthWrite:!1}));Te.frustumCulled=!1,u.add(Te);const le=new Xn(new Xr(1,12,8),new Qr({color:16777215,transparent:!0,opacity:.09,blending:js,depthWrite:!1}),120);le.instanceMatrix.setUsage(ii),le.frustumCulled=!1,le.renderOrder=0,u.add(le);const ue=new at(new Sc(1,.055,12,64),new Qr({color:14263361,transparent:!0,opacity:.95}));ue.rotation.x=Math.PI/2,ue.visible=!1,u.add(ue);const et=new Wf(.86,1,72),oe=[];for(let Ge=0;Ge<_g;Ge++){const Be=new Qr({color:16777215,transparent:!0,opacity:0,side:Un,depthWrite:!1,blending:js}),Jt=new at(et,Be);Jt.rotation.x=-Math.PI/2,Jt.visible=!1,u.add(Jt),oe.push({mesh:Jt,mat:Be,t0:0,life:1,scale:1})}let _e=0;const De=(Ge,Be,Jt,Ft,xi)=>{const Lt=oe[_e];_e=(_e+1)%_g,Lt.mesh.position.set(Ge,.09,Be),Lt.mesh.visible=!0,Lt.mat.color.setHex(Jt),Lt.t0=performance.now(),Lt.life=xi,Lt.scale=Ft},Ue={feed:{color:10672956,scale:2.2,life:1.1},smite:{color:16747325,scale:4.4,life:1.3},mutate:{color:13073919,scale:1.8,life:1},cannibal:{color:16727406,scale:2.6,life:1.2},plague:{color:16735067,scale:12,life:1.8},alien:{color:5099745,scale:10,life:1.8},spore:{color:16498468,scale:3.2,life:1.4},earth:{color:15254634,scale:16,life:2.4}},ye=new fT,qe=new Ne,Oe=new ki(new D(0,1,0),0),st=new D;let I=0,xe=0;const W=Ge=>{const Be=c.domElement.getBoundingClientRect();qe.x=(Ge.clientX-Be.left)/Be.width*2-1,qe.y=-((Ge.clientY-Be.top)/Be.height)*2+1},te=Ge=>{I=Ge.clientX,xe=Ge.clientY},me=Ge=>{if(Math.hypot(Ge.clientX-I,Ge.clientY-xe)>6)return;W(Ge),ye.setFromCamera(qe,M);const Be=e.current;if(Be==="inspect"){const xi=ye.intersectObject(ke,!1);xi.length&&xi[0].instanceId!==void 0?o.current(ve[xi[0].instanceId]??null):o.current(null);return}if(!ye.ray.intersectPlane(Oe,st)||Math.hypot(st.x,st.z)>Nn)return;const Jt=st.x/l,Ft=st.z/l;Be==="feed"?t.godFeed(Jt,Ft):Be==="smite"?t.godSmite(Jt,Ft):Be==="mutate"&&t.godMutate(Jt,Ft)};c.domElement.addEventListener("pointerdown",te),c.domElement.addEventListener("pointerup",me);const ve=new Array(Ii).fill(null),Ie=new ze,Et=new ze;let Xt=0,nt=performance.now();const Qt=new URLSearchParams(window.location.search).get("q"),Gn=Qt==="high"?2:Qt==="low"?0:null;let gi=2,Lr=0,Vn=0;const Nr=()=>{const Ge=window.devicePixelRatio||1;gi===2?(c.setPixelRatio(Math.min(Ge,1.25)),c.shadowMap.enabled=!0,T.castShadow=!0,le.visible=!0,ne.visible=!0):gi===1?(c.setPixelRatio(Math.min(Ge,1)),c.shadowMap.enabled=!1,T.castShadow=!1,le.visible=!0,ne.visible=!1):(c.setPixelRatio(.6),c.shadowMap.enabled=!1,T.castShadow=!1,le.visible=!1,ne.visible=!1,k.visible=!1),c.shadowMap.needsUpdate=!0,c.setSize(a.clientWidth,a.clientHeight)},To=()=>{const Ge=a.clientWidth,Be=a.clientHeight;!Ge||!Be||(M.aspect=Ge/Be,M.updateProjectionMatrix(),c.setSize(Ge,Be))},bo=new ResizeObserver(To);bo.observe(a),To();const Dr=()=>{Xt=requestAnimationFrame(Dr);const Ge=performance.now(),Be=Ge/1e3,Jt=(Ge-nt)/1e3;nt=Ge;const Ft=t.light;T.intensity=.2+Ft*1.05,C.intensity=.2+Ft*.32,A.intensity=.3+Ft*.6,P.intensity=.12+Ft*.4,p.copy(f).lerp(d,Ft),u.background=p,_.color.copy(p),y.emissive.setRGB(.02*Ft,.05*Ft,.03*Ft),k.material.opacity=.16+Ft*.42,Je.userData.shader&&(Je.userData.shader.uniforms.uTime.value=Be);const xi=t.agents;let Lt=0,fs=0,b=0,U=0,B=0,G=0,F=0,ae=0;const ge=new D(0,1,0),Me=new D,Ee=new wr;for(let fe=0;fe<xi.length&&Lt<Ii;fe++){const $=xi[fe];if(!$.alive)continue;const ct=$.role?["core","worker","guard","brooder","nurse"].indexOf($.role)+1:0,Ve=new ze(Jn[$.strategy].color),je=$.genome.hue,gt=new ze().setHSL(je/360,.74,.46);$.role?(Et.set(bi[$.role].color),Ie.copy(gt).lerp(Et,.55)):Ie.copy(gt).lerp(Ve,.15);const wt=$.dormant,Tt=$.genome.size*l*GT*($.role==="core"?1.15:1)*(wt?.6:1),bt=Math.sin(Be*1.6+$.id*1.7)*.012;if(ee.position.set($.x*l,Tt*.5+.02+bt,$.y*l),ee.rotation.set(0,Be*.4+$.id*.7,0),ee.scale.setScalar(Tt),ee.updateMatrix(),ke.setMatrixAt(Lt,ee.matrix),re[Lt]=$.id%97*.137,de[Lt]=($.genome.organelles.includes("chloroplast")?1:0)|($.genome.organelles.includes("toxin")?2:0)|($.genome.organelles.includes("shell")?4:0)|($.genome.organelles.includes("flagellum")?8:0)|($.genome.organelles.includes("lysosome")?16:0),Ke[Lt]=($.genome.organelles.includes("tentacle")?1:0)|($.genome.organelles.includes("cilia")?2:0)|($.genome.organelles.includes("eyespot")?4:0)|($.genome.organelles.includes("pseudopod")?8:0)|(wt?16:0)|($.genome.organelles.includes("myosin")?32:0),pe[Lt]=$.flash,Fe[Lt]=ct,Pe[Lt*3]=Ie.r,Pe[Lt*3+1]=Ie.g,Pe[Lt*3+2]=Ie.b,ve[Lt]=$.id,Lt++,$.genome.organelles.includes("shell")&&fs<320&&(ee.scale.setScalar(Tt*1.05),ee.updateMatrix(),L.setMatrixAt(fs,ee.matrix),fs++),$.genome.organelles.includes("flagellum")&&b<420){const Mn=Math.atan2($.vy,$.vx);ee.position.set($.x*l-Math.cos(Mn)*Tt*1.5,Tt*.55,$.y*l-Math.sin(Mn)*Tt*1.5),ee.rotation.set(Math.PI/2,0,-Mn+Math.PI/2),ee.scale.setScalar(Tt*.55),ee.updateMatrix(),Pt.setMatrixAt(b,ee.matrix),b++}if($.genome.organelles.includes("tentacle")&&U<1400)for(let jn=0;jn<5&&U<1400;jn++){const $t=jn/5*Math.PI*2+Be*.5+$.id*.7,vi=Math.sin(Be*2.1+jn*1.3+$.id)*.45,Ir=Math.cos($t+vi*.35),Ao=Math.sin($t+vi*.35);Me.set(Ir,.22+vi*.12,Ao).normalize(),Ee.setFromUnitVectors(ge,Me),ee.position.set($.x*l+Ir*Tt*.75,Tt*.55+.02,$.y*l+Ao*Tt*.75),ee.quaternion.copy(Ee),ee.scale.set(Tt*.34,Tt*1.05,Tt*.34),ee.updateMatrix(),He.setMatrixAt(U,ee.matrix),U++}if($.genome.organelles.includes("cilia")&&B<1200)for(let jn=0;jn<9&&B<1200;jn++){const $t=jn/9*Math.PI*2+$.id*1.3+Be*.35,vi=Math.cos($t),Ir=Math.sin($t);Me.set(vi,.9,Ir).normalize(),Ee.setFromUnitVectors(ge,Me),ee.position.set($.x*l+vi*Tt*.72,Tt*.5+.02,$.y*l+Ir*Tt*.72),ee.quaternion.copy(Ee),ee.scale.set(Tt*.3,Tt*.7,Tt*.3),ee.updateMatrix(),Ye.setMatrixAt(B,ee.matrix),B++}}ke.count=Lt,ke.instanceMatrix.needsUpdate=!0,He.count=U,He.instanceMatrix.needsUpdate=!0,Ye.count=B,Ye.instanceMatrix.needsUpdate=!0,Ae.count=G,Ae.instanceMatrix.needsUpdate=!0,it.count=F,it.instanceMatrix.needsUpdate=!0,Ce.count=ae,Ce.instanceMatrix.needsUpdate=!0,L.count=fs,L.instanceMatrix.needsUpdate=!0,Pt.count=b,Pt.instanceMatrix.needsUpdate=!0,j.getAttribute("aSeed").needsUpdate=!0,j.getAttribute("aFlags").needsUpdate=!0,j.getAttribute("aFlash").needsUpdate=!0,j.getAttribute("aRole").needsUpdate=!0,j.getAttribute("aColor").needsUpdate=!0,j.getAttribute("aFlags2").needsUpdate=!0;let Re=0,Le=0;for(const fe of t.food){if(fe.dead)continue;const $=1+Math.sin(Be*2.2+fe.x*.05)*.12;if(ee.position.set(fe.x*l,.055,fe.y*l),ee.rotation.set(fe.born*.7,fe.born*1.3,0),fe.kind==="detritus"){if(Le>=vg)continue;ee.scale.setScalar(.1*$*gg),ee.updateMatrix(),E.setMatrixAt(Le,ee.matrix),Le++}else{if(Re>=xg)continue;ee.scale.setScalar(.085*$*gg),ee.updateMatrix(),R.setMatrixAt(Re,ee.matrix),Re++}}R.count=Re,R.instanceMatrix.needsUpdate=!0,E.count=Le,E.instanceMatrix.needsUpdate=!0;let we=0,tt=0;for(const fe of t.colonies.values()){const $=[...fe.memberIds].map(je=>t.agentById(je)).filter(je=>!!(je&&je.alive));if($.length<2)continue;let ct=0,Ve=0;for(const je of $)ct+=je.x,Ve+=je.y;ct/=$.length,Ve/=$.length;for(const je of $){if(we>=z)break;const gt=we*6;q[gt]=ct*l,q[gt+1]=.16,q[gt+2]=Ve*l,q[gt+3]=je.x*l,q[gt+4]=.16,q[gt+5]=je.y*l;const wt=Mg($);Ie.set(wt?bi[wt].color:"#4fb3c4"),ie[gt]=Ie.r*.9,ie[gt+1]=Ie.g*.9,ie[gt+2]=Ie.b*.9,ie[gt+3]=Ie.r*.45,ie[gt+4]=Ie.g*.45,ie[gt+5]=Ie.b*.45,we++}if(tt<120){const je=Mg($),gt=je?bi[je].color:"#4fb3c4";Ie.set(fe.route?VT[fe.route]:gt);const wt=.7+$.length*.12;ee.position.set(ct*l,.14,Ve*l),ee.scale.set(wt*.6,wt*.28,wt*.6),ee.rotation.set(0,0,0),ee.updateMatrix(),le.setMatrixAt(tt,ee.matrix),le.setColorAt(tt,Ie),tt++}if(fe.route==="myxomycete"&&G<40){const je=.22+fe.fruiting*.62;ee.position.set(ct*l,.22+je*.85,Ve*l),ee.scale.set(je*.55,je*.8,je*.55),ee.rotation.set(0,Be*.25,0),ee.updateMatrix(),Ae.setMatrixAt(G,ee.matrix),G++}else if(fe.route==="volvocine"&&F<40){const je=.45+$.length*.1;ee.position.set(ct*l,.24,Ve*l),ee.scale.set(je,je*.82,je),ee.rotation.set(0,Be*.4,0),ee.updateMatrix(),it.setMatrixAt(F,ee.matrix),F++}else if(fe.route==="animal"&&ae<40){const je=.4+$.length*.11,gt=18;ee.position.set((ct+fe.swarmX*gt)*l,.18+Math.sin(Be*1.8+fe.id)*.05,(Ve+fe.swarmY*gt)*l),ee.scale.set(je*(1+Math.sin(Be*2.2)*.07),je*.52,je*(1-Math.sin(Be*2.2)*.07)),ee.rotation.set(0,Be*.3,0),ee.updateMatrix(),Ce.setMatrixAt(ae,ee.matrix),ae++}}Y.setDrawRange(0,we*2),Y.attributes.position.needsUpdate=!0,Y.attributes.color.needsUpdate=!0,le.count=tt,le.instanceMatrix.needsUpdate=!0,le.instanceColor&&(le.instanceColor.needsUpdate=!0);const ht=s.current,mt=ht!==null?t.agentById(ht):null;if(mt){ue.visible=!0;const fe=mt.genome.size*l*1.9;ue.position.set(mt.x*l,.1,mt.y*l),ue.scale.setScalar(fe*(1+Math.sin(Be*4)*.06)),ue.material.opacity=.65+Math.sin(Be*4)*.25}else ue.visible=!1;const fn=t.consumeEffects();for(const fe of fn){const $=Ue[fe.type];$&&(De(fe.x*l,fe.y*l,$.color,$.scale,$.life),fe.type==="cannibal"&&De(fe.x*l,fe.y*l,16747325,$.scale*.55,$.life*.7))}for(const fe of oe){if(!fe.mesh.visible)continue;const $=(Ge-fe.t0)/1e3/fe.life;if($>=1){fe.mesh.visible=!1;continue}const ct=1-Math.pow(1-$,3);fe.mesh.scale.setScalar(.2+ct*fe.scale),fe.mat.opacity=.9*(1-$)*(1-$)}if(Lr+=Jt*1e3,Vn++,Vn>=12||Lr>1200){const fe=Lr/Vn;Gn!==null?(gi=Gn,Nr()):fe>46&&gi>0?(gi--,Nr()):fe<17&&gi<2&&(gi++,Nr()),Lr=0,Vn=0}x.update(),c.render(u,M)};return Xt=requestAnimationFrame(Dr),()=>{cancelAnimationFrame(Xt),bo.disconnect(),c.domElement.removeEventListener("pointerdown",te),c.domElement.removeEventListener("pointerup",me),x.dispose(),S.dispose(),v.dispose(),j.dispose(),Je.dispose(),L.geometry.dispose(),L.material.dispose(),Pt.geometry.dispose(),Pt.material.dispose(),R.geometry.dispose(),R.material.dispose(),E.geometry.dispose(),E.material.dispose(),Y.dispose(),le.geometry.dispose(),le.material.dispose(),ue.geometry.dispose(),ue.material.dispose(),et.dispose(),w.geometry.dispose(),y.dispose(),H.dispose(),O.dispose(),X.geometry.dispose(),X.material.dispose(),V.geometry.dispose(),N.geometry.dispose(),K.geometry.dispose(),Q.dispose(),Z.dispose(),J.dispose(),ce.dispose(),c.dispose(),c.domElement.parentNode===a&&a.removeChild(c.domElement)}},[t]),m.jsx("div",{ref:r,className:"absolute inset-0"})}function Mg(t){const e=new Map;for(const r of t)r.role&&e.set(r.role,(e.get(r.role)??0)+1);let n=null,i=0;for(const[r,s]of e)s>i&&(i=s,n=r);return n}function WT(t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=t/2,r=n.createRadialGradient(i,i*.92,i*.05,i,i,i);r.addColorStop(0,"#2a7a52"),r.addColorStop(.35,"#1c5c3f"),r.addColorStop(.72,"#123c2b"),r.addColorStop(1,"#081d16"),n.fillStyle=r,n.fillRect(0,0,t,t);const s=n.getImageData(0,0,t,t),o=s.data;for(let l=0;l<o.length;l+=4){const c=(Math.random()-.5)*26;o[l]=Math.max(0,Math.min(255,o[l]+c*.7)),o[l+1]=Math.max(0,Math.min(255,o[l+1]+c)),o[l+2]=Math.max(0,Math.min(255,o[l+2]+c*.8))}n.putImageData(s,0,0),n.globalCompositeOperation="lighter";for(let l=0;l<26;l++){const c=l/26*i*.98+Math.random()*6;n.beginPath(),n.arc(i,i,c,0,Math.PI*2),n.strokeStyle=`rgba(150, 220, 180, ${.012+Math.random()*.016})`,n.lineWidth=1+Math.random()*2.4,n.stroke()}for(let l=0;l<180;l++){const c=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*i*.97,d=1+Math.random()*3.6;n.beginPath(),n.arc(i+Math.cos(c)*u,i+Math.sin(c)*u,d,0,Math.PI*2),n.fillStyle=`rgba(200, 240, 220, ${.05+Math.random()*.1})`,n.fill()}n.globalCompositeOperation="source-over";const a=new _v(e);return a.needsUpdate=!0,a}function XT(t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.clearRect(0,0,t,t);const i=n.createRadialGradient(t*.32,t*.3,0,t*.32,t*.3,t*.46);i.addColorStop(0,"rgba(220, 245, 255, 0.55)"),i.addColorStop(.35,"rgba(160, 220, 240, 0.18)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,t,t),n.save(),n.translate(t*.5,t*.5),n.rotate(-.5);const r=n.createLinearGradient(-t*.5,0,t*.5,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.45,"rgba(255,255,255,0.22)"),r.addColorStop(.55,"rgba(255,255,255,0.22)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(-t*.5,-t*.012,t,t*.024),n.restore();const s=new _v(e);return s.needsUpdate=!0,s}const sr="http://www.w3.org/2000/svg";let $T=0;function Tv(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("backdrop-filter",'url("#x")')||CSS.supports("-webkit-backdrop-filter",'url("#x")')}function Sg(t,e){const n=getComputedStyle(t).borderRadius,i=parseFloat(n.split(" ")[0]);return Number.isFinite(i)?i:e}function Eg(t,e,n,i,r){const s=document.createElement("canvas");s.width=Math.max(1,Math.round(t)),s.height=Math.max(1,Math.round(e));const o=s.getContext("2d");if(!o)return"";const a=s.width,l=s.height,c=Math.min(n,Math.min(a,l)/2),u=a/2,d=l/2,f=Math.max(2,i*Math.min(a,l)),p=o.createImageData(a,l),_=p.data,M=(g,h,x)=>{const v=Math.max(0,Math.min(1,(x-g)/(h-g||1)));return v*v*(3-2*v)};for(let g=0;g<l;g++)for(let h=0;h<a;h++){const x=h+.5,v=g+.5,S=Math.abs(x-u)-(u-c),C=Math.abs(v-d)-(d-c),T=Math.hypot(Math.max(S,0),Math.max(C,0)),A=Math.min(Math.max(S,C),0),P=T+A-c,H=1-M(0,f,Math.abs(P));let y=0,w=0;S>C?y=x<u?-1:1:w=v<d?-1:1;const O=H*r,k=(g*a+h)*4;_[k]=Math.max(0,Math.min(255,128+y*O)),_[k+1]=Math.max(0,Math.min(255,128+w*O)),_[k+2]=128,_[k+3]=255}return o.putImageData(p,0,0),s.toDataURL("image/png")}function wg(t,e,n,i){const r=document.createElementNS(sr,"filter");r.setAttribute("id",t),r.setAttribute("x","-10%"),r.setAttribute("y","-10%"),r.setAttribute("width","120%"),r.setAttribute("height","120%"),r.setAttribute("color-interpolation-filters","sRGB");const s=document.createElementNS(sr,"feImage");s.setAttribute("href",e),s.setAttributeNS("http://www.w3.org/1999/xlink","href",e),s.setAttribute("result","map"),r.appendChild(s);const o=(a,l,c)=>{const u=document.createElementNS(sr,"feDisplacementMap");return u.setAttribute("in","SourceGraphic"),u.setAttribute("in2","map"),u.setAttribute("scale",String(l)),u.setAttribute("xChannelSelector",a),u.setAttribute("yChannelSelector","G"),u.setAttribute("result",c),u};if(i>0){r.appendChild(o("R",n*(1+i/100),"dR"));const a=(u,d,f)=>{const p=document.createElementNS(sr,"feColorMatrix");p.setAttribute("in",u),p.setAttribute("type","matrix");const _=g=>g?"1 0 0 0 0":"0 0 0 0 0",M=[_(d==="R"),_(d==="G"),_(d==="B"),"0 0 0 1 0"];return p.setAttribute("values",M.join(" ")),p.setAttribute("result",f),p};r.appendChild(a("dR","R","cR")),r.appendChild(o("G",n,"dG")),r.appendChild(a("dG","G","cG")),r.appendChild(o("B",n*(1-i/100),"dB")),r.appendChild(a("dB","B","cB"));const l=document.createElementNS(sr,"feBlend");l.setAttribute("in","cR"),l.setAttribute("in2","cG"),l.setAttribute("mode","screen"),l.setAttribute("result","cRG"),r.appendChild(l);const c=document.createElementNS(sr,"feBlend");c.setAttribute("in","cRG"),c.setAttribute("in2","cB"),c.setAttribute("mode","screen"),r.appendChild(c)}else r.appendChild(o("R",n,"disp"));return r}function YT(t,e={}){const{scale:n=70,chroma:i=0,border:r=.12,blur:s=2,saturate:o=1.45,radius:a=null,fallbackBlur:l=18}=e,c=Tv(),u=`liquid-glass-${++$T}`;let d=null,f=null,p=null;const _=t.style,M=()=>{const h=`blur(${l}px) saturate(${o})`;_.backdropFilter=h,_.webkitBackdropFilter=h},g=()=>{const h=`url("#${u}") blur(${s}px) saturate(${o})`;_.backdropFilter=h,_.webkitBackdropFilter=h,(getComputedStyle(t).backdropFilter||"").includes("url(")||(M(),t.dataset.liquidGlass="fallback")};if(c){d=document.createElementNS(sr,"svg"),d.setAttribute("width","0"),d.setAttribute("height","0"),d.setAttribute("aria-hidden","true"),d.style.cssText="position:fixed;pointer-events:none;left:0;top:0;opacity:0;";const h=document.createElementNS(sr,"defs");d.appendChild(h),document.body.appendChild(d);const x=()=>{const S=t.getBoundingClientRect();if(S.width<2||S.height<2)return;const C=a??Sg(t,24),T=Eg(S.width,S.height,C,r,Math.max(4,Math.min(255,n))/255);T&&(f&&f.remove(),f=wg(u,T,n,i),h.appendChild(f),g())};x();let v=0;p=new ResizeObserver(()=>{clearTimeout(v),v=window.setTimeout(()=>x(),120)}),p.observe(t)}else{const h=`blur(${l}px) saturate(${o})`;_.backdropFilter=h,_.webkitBackdropFilter=h,t.dataset.liquidGlass="fallback"}return{supported:c,refresh(){if(d&&f){const h=t.getBoundingClientRect(),x=a??Sg(t,24),v=Eg(h.width,h.height,x,r,Math.max(4,Math.min(255,n))/255);v&&(f.remove(),f=wg(u,v,n,i),d.querySelector("defs")?.appendChild(f))}},destroy(){p?.disconnect(),p=null,f?.remove(),d?.remove(),_.backdropFilter="",_.webkitBackdropFilter=""}}}Tv();const Ht=(...t)=>t.filter(Boolean).join(" ");function Zf(t,e={},n=!0){const i=be.useRef(e);i.current=e,be.useEffect(()=>{if(!n||!t.current)return;const r=YT(t.current,i.current);return()=>r.destroy()},[t,n])}function qT({children:t,onClick:e,active:n,color:i,className:r,title:s,disabled:o,size:a="md",glass:l=!0,type:c="button"}){const u=be.useRef(null);Zf(u,{scale:44,border:.16,blur:1,saturate:1.5},l&&!n);const d=a==="sm"?"h-8 px-3 text-[10px]":a==="lg"?"h-12 px-5 text-[13px]":"h-10 px-4 text-[11px]";return m.jsx("button",{ref:u,type:c,title:s,disabled:o,onClick:e,className:Ht("capsule-btn relative select-none",d,l&&"glass",!l&&"border border-white/10 bg-white/[0.04]",n?"text-white":"text-white/70 hover:text-white",o&&"opacity-40 pointer-events-none",r),style:n?{color:i,borderColor:`${i}66`,background:`linear-gradient(180deg, ${i}33, ${i}12)`,boxShadow:`inset 0 0 0 1px ${i}66, inset 0 1px 0 rgba(255,255,255,.14)`}:void 0,children:t})}function Kf(t,e,n=320){be.useEffect(()=>{if(!e)return;const i=window.setTimeout(()=>{const r=t.current;if(!r)return;r.getAnimations().some(o=>{if((o.animationName??"")!=="glass-pop")return!1;const l=o.currentTime;return l===null?!0:(typeof l=="number"?l:0)<40})&&(r.classList.remove("pop-in"),r.style.opacity="1",r.style.transform="none")},n);return()=>window.clearTimeout(i)},[t,e,n])}const ot=({size:t=16,children:e})=>m.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round",children:e}),ZT={flagellum:m.jsxs(ot,{children:[m.jsx("circle",{cx:"7",cy:"12",r:"4.2"}),m.jsx("path",{d:"M11.2 12c2-2.6 3.4.8 5.2-1.4s3 1.4 4.6.2"})]}),cilia:m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"4.6"}),m.jsx("path",{d:"M12 4.6v2.2M12 17.2v2.2M4.6 12h2.2M17.2 12h2.2M6.8 6.8l1.6 1.6M15.6 15.6l1.6 1.6M17.2 6.8l-1.6 1.6M8.4 15.6l-1.6 1.6"})]}),tentacle:m.jsxs(ot,{children:[m.jsx("circle",{cx:"6",cy:"18",r:"3.2"}),m.jsx("path",{d:"M8.4 15.8c3-1.6 2-6 5.6-6.6 2.4-.4 3.6 1.4 3.4 3"}),m.jsx("circle",{cx:"17.6",cy:"11",r:"1.5"})]}),pseudopod:m.jsx(ot,{children:m.jsx("path",{d:"M4 13.5c0-3.6 2.6-6 5.6-6 2.4 0 3.3 1.6 4.7 1.6 1.5 0 2.2-1.4 3.4-1.4 1.4 0 2.3 1.3 2.3 3 0 4.2-3.4 7.3-7.6 7.3-4.4 0-8.4-2-8.4-4.5Z"})}),mitochondria:m.jsxs(ot,{children:[m.jsx("ellipse",{cx:"12",cy:"12",rx:"7.6",ry:"4.6",transform:"rotate(-24 12 12)"}),m.jsx("path",{d:"M7.4 14.6c1.6-2.6 3-2.6 4.6 0s3 2.6 4.6 0"})]}),chloroplast:m.jsxs(ot,{children:[m.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"5",transform:"rotate(-18 12 12)"}),m.jsx("path",{d:"M8.4 12.6h7.2M9.2 10.6h5.6M9.6 14.2h4.4"})]}),chemosynthesis:m.jsxs(ot,{children:[m.jsx("path",{d:"M8.5 20V13c0-3.4 1.4-5.4 3.5-7.2 2.1 1.8 3.5 3.8 3.5 7.2v7"}),m.jsx("path",{d:"M10.4 20v-5.2h3.2V20"}),m.jsx("path",{d:"M12 3.4V1.4M8.8 5 7.6 3.4M15.2 5l1.2-1.6"})]}),aerobe:m.jsxs(ot,{children:[m.jsx("circle",{cx:"9.5",cy:"12",r:"3.2"}),m.jsx("path",{d:"M15 8.6a4.8 4.8 0 0 1 0 6.8M17.8 6.2a8.4 8.4 0 0 1 0 11.6"})]}),lysosome:m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"7.4"}),m.jsx("circle",{cx:"10",cy:"10.6",r:"1.1"}),m.jsx("circle",{cx:"13.8",cy:"11.4",r:"0.9"}),m.jsx("circle",{cx:"11.4",cy:"14.4",r:"1"})]}),shell:m.jsxs(ot,{children:[m.jsx("path",{d:"M12 3.4 19 6.4v6.1c0 3.6-3 6.5-7 8.1-4-1.6-7-4.5-7-8.1V6.4Z"}),m.jsx("path",{d:"M12 7.6v10M8.6 9.6l6.8 4.8M15.4 9.6l-6.8 4.8"})]}),toxin:m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"3"}),m.jsx("path",{d:"M12 4.6v3M12 16.4v3M4.6 12h3M16.4 12h3M6.8 6.8l2.1 2.1M15.1 15.1l2.1 2.1M17.2 6.8l-2.1 2.1M8.9 15.1l-2.1 2.1"})]}),capsule:m.jsxs(ot,{children:[m.jsx("rect",{x:"4.4",y:"5.6",width:"15.2",height:"12.8",rx:"4.6"}),m.jsx("circle",{cx:"12",cy:"12",r:"3.4"})]}),endospore:m.jsxs(ot,{children:[m.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"5.4",transform:"rotate(-24 12 12)"}),m.jsx("ellipse",{cx:"12",cy:"12",rx:"3",ry:"2",transform:"rotate(-24 12 12)"})]}),sensor:m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"2.4"}),m.jsx("path",{d:"M12 9.6V4.4M9.6 12H4.4M14.4 12h5.2M10.2 10.2 6.6 6.6M13.8 13.8l3.6 3.6"})]}),eyespot:m.jsxs(ot,{children:[m.jsx("path",{d:"M3.4 12s3.6-5.4 8.6-5.4S20.6 12 20.6 12s-3.6 5.4-8.6 5.4S3.4 12 3.4 12Z"}),m.jsx("circle",{cx:"12",cy:"12",r:"2.4"})]}),magnetosome:m.jsxs(ot,{children:[m.jsx("path",{d:"M6.6 5.4v6.8a5.4 5.4 0 0 0 10.8 0V5.4"}),m.jsx("path",{d:"M6.6 9.4h3.4M14 9.4h3.4"})]}),adhesion:m.jsxs(ot,{children:[m.jsx("circle",{cx:"7.4",cy:"12",r:"4.4"}),m.jsx("circle",{cx:"16.6",cy:"12",r:"4.4"}),m.jsx("path",{d:"M10.6 12h2.8"})]}),quorum:m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"2.4"}),m.jsx("circle",{cx:"12",cy:"4.6",r:"1.5"}),m.jsx("circle",{cx:"18.4",cy:"9.3",r:"1.5"}),m.jsx("circle",{cx:"18.4",cy:"14.7",r:"1.5"}),m.jsx("circle",{cx:"12",cy:"19.4",r:"1.5"}),m.jsx("circle",{cx:"5.6",cy:"14.7",r:"1.5"}),m.jsx("circle",{cx:"5.6",cy:"9.3",r:"1.5"})]}),myosin:m.jsxs(ot,{children:[m.jsx("path",{d:"M3.4 15c2.6-5 5.2 5 7.8 0s5.2 5 7.8 0"}),m.jsx("circle",{cx:"18.6",cy:"8.2",r:"2.2"})]}),meiosis:m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"3"}),m.jsx("circle",{cx:"5.4",cy:"7.6",r:"1.7"}),m.jsx("circle",{cx:"18.6",cy:"7.6",r:"1.7"}),m.jsx("circle",{cx:"5.4",cy:"16.4",r:"1.7"}),m.jsx("circle",{cx:"18.6",cy:"16.4",r:"1.7"})]}),apoptosis:m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"7",strokeDasharray:"3.4 2.6"}),m.jsx("path",{d:"M8.4 8.4 5.6 5.6M15.6 15.6l2.8 2.8M15.6 8.4l2.8-2.8M8.4 15.6l-2.8 2.8"})]}),"role-core":m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"3.4"}),m.jsx("circle",{cx:"12",cy:"12",r:"7.4",strokeDasharray:"2 2.6"})]}),"role-worker":m.jsxs(ot,{children:[m.jsx("circle",{cx:"9",cy:"12",r:"3.6"}),m.jsx("path",{d:"M12.6 12h5.8M16 9.6 18.4 12 16 14.4"})]}),"role-guard":m.jsxs(ot,{children:[m.jsx("path",{d:"M12 3.8 18 6.4v5.2c0 3.4-2.6 6-6 7.4-3.4-1.4-6-4-6-7.4V6.4Z"}),m.jsx("path",{d:"m9.4 12 1.9 1.9 3.4-3.6"})]}),"role-brooder":m.jsxs(ot,{children:[m.jsx("circle",{cx:"10",cy:"12",r:"4.6"}),m.jsx("circle",{cx:"17.4",cy:"12",r:"2.4"})]}),"role-nurse":m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"7.4"}),m.jsx("path",{d:"M12 8.6v6.8M8.6 12h6.8"})]}),"event-goe":m.jsxs(ot,{children:[m.jsx("path",{d:"M4 16.4h16M6.4 12.4h11.2M8.6 8.4h6.8"}),m.jsx("circle",{cx:"12",cy:"5",r:"1.8"})]}),"event-snowball":m.jsxs(ot,{children:[m.jsx("path",{d:"M12 3.4v17.2M4.6 7.6l14.8 8.8M19.4 7.6 4.6 16.4"}),m.jsx("path",{d:"M9.6 5.4 12 7.8l2.4-2.4M9.6 18.6l2.4-2.4 2.4 2.4"})]}),"event-cambrian":m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"2.4"}),m.jsx("path",{d:"M12 9.6V4.4M12 14.4v5.2M9.6 12H4.4M14.4 12h5.2"}),m.jsx("path",{d:"M10.2 10.2 6.8 6.8M13.8 13.8l3.4 3.4M13.8 10.2l3.4-3.4M10.2 13.8l-3.4 3.4"})]}),"route-myxomycete":m.jsxs(ot,{children:[m.jsx("path",{d:"M12 20v-8"}),m.jsx("path",{d:"M8 12c0-2.4 1.8-4.4 4-4.4s4 2 4 4.4"}),m.jsx("circle",{cx:"12",cy:"9.4",r:"2.6"}),m.jsx("path",{d:"M7.4 20h9.2"})]}),"route-volvocine":m.jsxs(ot,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"7.4"}),m.jsx("circle",{cx:"9.4",cy:"10.4",r:"1.2"}),m.jsx("circle",{cx:"14.6",cy:"10.4",r:"1.2"}),m.jsx("circle",{cx:"9.4",cy:"14.6",r:"1.2"}),m.jsx("circle",{cx:"14.6",cy:"14.6",r:"1.2"}),m.jsx("circle",{cx:"12",cy:"12",r:"1.4"})]}),"route-animal":m.jsxs(ot,{children:[m.jsx("path",{d:"M3.6 14.4c2-4.4 5-6.6 8.4-6.6s6.4 2.2 8.4 6.6c-2 4.4-5 6.6-8.4 6.6s-6.4-2.2-8.4-6.6Z"}),m.jsx("circle",{cx:"12",cy:"12.4",r:"2.2"}),m.jsx("path",{d:"M4.4 18.6 2.2 21M19.6 18.6l2.2 2.4"})]})};function Ai({id:t,size:e=16,className:n}){const i=ZT[t];return i?m.jsx("span",{className:n,style:{display:"inline-flex",width:e,height:e,flexShrink:0},children:i}):null}const It=t=>({width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"}),KT=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"}),m.jsx("circle",{cx:"12",cy:"12",r:"2.8"})]}),QT=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M12 3v7"}),m.jsx("path",{d:"M8.5 7.5 12 11l3.5-3.5"}),m.jsx("circle",{cx:"6",cy:"16",r:"2.4"}),m.jsx("circle",{cx:"12",cy:"18",r:"2.4"}),m.jsx("circle",{cx:"18",cy:"16",r:"2.4"})]}),JT=({size:t=16,...e})=>m.jsx("svg",{...It(t),...e,children:m.jsx("path",{d:"M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"})}),eb=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"}),m.jsx("circle",{cx:"12",cy:"12",r:"3.1"})]}),tb=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M12 3c5 0 8 4 8 9s-3.5 8-8 8-8-3-8-8 3-9 8-9Z"}),m.jsx("ellipse",{cx:"8.8",cy:"10",rx:"2.1",ry:"2.6"}),m.jsx("ellipse",{cx:"15.2",cy:"10",rx:"2.1",ry:"2.6"}),m.jsx("path",{d:"M9.5 17c1.6 1 3.4 1 5 0"})]}),nb=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("circle",{cx:"12",cy:"12",r:"5.2"}),m.jsx("path",{d:"M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2M5.3 5.3l2.3 2.3M16.4 16.4l2.3 2.3M18.7 5.3l-2.3 2.3M7.6 16.4l-2.3 2.3"})]}),bv=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M3.5 3.5v17h17"}),m.jsx("path",{d:"M8 16V11M12 16V6M16 16v-3.5"})]}),ib=({size:t=16,...e})=>m.jsx("svg",{...It(t),...e,children:m.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),rb=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("circle",{cx:"12",cy:"12",r:"8.6"}),m.jsx("path",{d:"M3.4 12h17.2M12 3.4c2.3 2.4 3.5 5.4 3.5 8.6s-1.2 6.2-3.5 8.6c-2.3-2.4-3.5-5.4-3.5-8.6S9.7 5.8 12 3.4Z"})]}),sb=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("rect",{x:"7",y:"5.5",width:"3.4",height:"13",rx:"1.5"}),m.jsx("rect",{x:"13.6",y:"5.5",width:"3.4",height:"13",rx:"1.5"})]}),ob=({size:t=16,...e})=>m.jsx("svg",{...It(t),...e,children:m.jsx("path",{d:"M8 5.6 18.5 12 8 18.4V5.6Z"})}),ab=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M20 12a8 8 0 1 1-2.6-5.9"}),m.jsx("path",{d:"M20 3.5V8h-4.5"})]}),lb=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M5 6.2 13 12l-8 5.8V6.2Z"}),m.jsx("path",{d:"M16.5 5.5v13"})]}),cb=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M4 6.2 12 12l-8 5.8V6.2Z"}),m.jsx("path",{d:"M13 6.2 21 12l-8 5.8V6.2Z"})]}),aa=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("circle",{cx:"12",cy:"12",r:"4"}),m.jsx("path",{d:"M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6"})]}),ub=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M14 14.8V5.2a2.2 2.2 0 1 0-4.4 0v9.6a4 4 0 1 0 4.4 0Z"}),m.jsx("circle",{cx:"11.8",cy:"17.4",r:"1.7"})]}),Id=({size:t=16,...e})=>m.jsx("svg",{...It(t),...e,children:m.jsx("path",{d:"M12 3.2s6 6.1 6 10a6 6 0 0 1-12 0c0-3.9 6-10 6-10Z"})}),Av=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M4 5.2A2.2 2.2 0 0 1 6.2 3H19v14.5H6.2A2.2 2.2 0 0 0 4 19.7V5.2Z"}),m.jsx("path",{d:"M4 19.7A2.2 2.2 0 0 1 6.2 17.5H19V21H6.2A2.2 2.2 0 0 1 4 18.8v.9Z"})]}),Ec=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M7 4h10v5a5 5 0 0 1-10 0V4Z"}),m.jsx("path",{d:"M7 5.5H4.6v1.2A3.4 3.4 0 0 0 7.6 10M17 5.5h2.4v1.2a3.4 3.4 0 0 1-3 3.3"}),m.jsx("path",{d:"M12 14v3.5M8.5 20.5h7"})]}),Cv=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("path",{d:"M6 3.5h11a2 2 0 0 1 2 2v11.8a3.2 3.2 0 0 1-3.2 3.2H8.2A3.2 3.2 0 0 1 5 17.3V5.5a2 2 0 0 1 1-2Z"}),m.jsx("path",{d:"M8.5 8.5h7M8.5 12h7M8.5 15.5h4"})]}),Ud=({size:t=16,...e})=>m.jsxs("svg",{...It(t),...e,children:[m.jsx("circle",{cx:"8",cy:"8.5",r:"4"}),m.jsx("circle",{cx:"16",cy:"15",r:"4.6"}),m.jsx("path",{d:"M8 12.5v3.2M8 15.7h3.4"})]}),Qf=({size:t=16,...e})=>m.jsx("svg",{...It(t),...e,children:m.jsx("path",{d:"M12 3.2 13.9 9l5.9 1.9-5.9 1.9L12 18.7l-1.9-5.9L4.2 10.9 10.1 9 12 3.2Z"})}),hb={zh:{eyebrow:"演化沙盒 · 第 1 号培养皿",title:`在玻璃皿里，
看细胞长成生态`,lede:"200 个相同的原始单细胞被接种进一只培养皿。你可以投喂、点化、降下瘟疫，也可以什么都不做，看它们自己走完从争抢营养到分工协作的整段路。",enter:"进入培养皿",note:"也可以先看玩法",modes:"投喂 · 点化 · 天罚 · 瘟疫 · 入侵",label:{id:"PL-01",title:"培养皿 · 实时演化",rows:[{k:"生态位",v:"光合 / 化能 / 分解 / 共生 / 猎手"},{k:"演化创新",v:"21 项 · 各有真实代表生物"},{k:"多细胞",v:"三条真实路线 · 功能分化"}]},cards:[{icon:m.jsx(aa,{size:15}),title:"光合者",body:"长出叶绿体，在光照下把光变成能量。它们是整张食物网的地基。",color:"#84b96b"},{icon:m.jsx(Id,{size:15}),title:"分解者",body:"拥有溶酶体，把尸体碎屑还原成培养基养分。生态循环在这里闭合。",color:"#d4748e"},{icon:m.jsx(Ec,{size:15}),title:"猎手",body:"毒素与外壳武装到牙齿。它们会捕食弱者，也会同类相食。",color:"#e2663f"},{icon:m.jsx(Ud,{size:15}),title:"多细胞体",body:"黏连蛋白把个体粘成团体，长期演化后长出核心、守卫、繁殖体等职能。",color:"#4fb3c4"}],footer:"拖动旋转 · 滚轮缩放 · 点击生物查看基因组"},en:{eyebrow:"EVOLUTION SANDBOX · PLATE 01",title:`A colony of cells,
growing into an ecosystem`,lede:"Two hundred identical primitive cells are inoculated into one dish. Feed them, bless them, strike them with plague — or do nothing and watch them walk the whole road from competing for nutrients to cooperating.",enter:"Enter the dish",note:"or read the rules first",modes:"Feed · Bless · Smite · Plague · Aliens",label:{id:"PL-01",title:"Petri dish · live evolution",rows:[{k:"Niches",v:"Photo / Chemo / Decomposer / Symbiote / Hunter"},{k:"Innovations",v:"21, each with a real organism behind it"},{k:"Multicellular",v:"Three real routes, with cell specialisation"}]},cards:[{icon:m.jsx(aa,{size:15}),title:"Phototrophs",body:"They grow chloroplasts and turn light into energy — the bedrock of the food web.",color:"#84b96b"},{icon:m.jsx(Id,{size:15}),title:"Decomposers",body:"Lysosomes break corpses back into nutrients. The cycle closes here.",color:"#d4748e"},{icon:m.jsx(Ec,{size:15}),title:"Hunters",body:"Armed with toxin and shell. They devour the weak, and sometimes their own kind.",color:"#e2663f"},{icon:m.jsx(Ud,{size:15}),title:"Multicellularity",body:"Adhesin glues cells into colonies that evolve cores, guards and brooders over time.",color:"#4fb3c4"}],footer:"Drag to orbit · Scroll to zoom · Click a cell to inspect"}};function db({onEnter:t,lang:e}){const n=hb[e],[i,r]=be.useState(!1);return be.useEffect(()=>{const s=requestAnimationFrame(()=>r(!0)),o=window.setTimeout(()=>r(!0),500);return()=>{cancelAnimationFrame(s),window.clearTimeout(o)}},[]),m.jsxs("div",{className:"fixed inset-0 z-50",children:[m.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(101deg, rgba(14,13,11,.975) 0%, rgba(14,13,11,.95) 38%, rgba(14,13,11,.72) 55%, rgba(14,13,11,.12) 74%, rgba(14,13,11,.05) 100%)"}}),m.jsx("div",{className:"relative h-full w-full overflow-y-auto scroll-thin",style:{pointerEvents:"none"},children:m.jsxs("div",{className:"min-h-full w-full max-w-[1240px] mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col",children:[m.jsxs("div",{className:"flex items-center justify-between gap-4 transition-all duration-500",style:{opacity:i?1:0,transform:i?"none":"translateY(-8px)"},children:[m.jsxs("div",{className:"flex items-baseline gap-3",children:[m.jsx("span",{className:"display text-[15px] text-[#efe9de] tracking-tight",children:"Petri Arena"}),m.jsx("span",{className:"label-xs text-[#857f74]",children:n.eyebrow})]}),m.jsx("span",{className:"label-xs text-[#857f74] hidden md:inline",children:n.modes})]}),m.jsxs("div",{className:"flex-1 grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] gap-8 items-center py-10 md:py-0",children:[m.jsxs("div",{className:"max-w-[560px] transition-all duration-500",style:{opacity:i?1:0,transform:i?"none":"translateY(14px)"},children:[m.jsx("h1",{className:"display whitespace-pre-line text-[31px] md:text-[44px] leading-[1.1] text-[#efe9de]",style:{letterSpacing:"-0.018em"},children:n.title}),m.jsx("p",{className:"mt-5 max-w-[46ch] text-[13.5px] leading-[1.75] text-[#aaa398]",children:n.lede}),m.jsxs("div",{className:"mt-8 flex items-center gap-4",style:{pointerEvents:"auto"},children:[m.jsx(qT,{size:"lg",onClick:t,color:"#d9a441",className:"!h-11 !px-6 text-[13px] font-medium !rounded-[8px]",children:n.enter}),m.jsx("span",{className:"text-[11px] text-[#857f74]",children:n.note})]}),m.jsx("dl",{className:"mt-11 border-t border-[#efe9de]/10 max-w-[520px]",children:n.cards.map((s,o)=>m.jsxs("div",{className:"group flex items-start gap-3.5 py-3 border-b border-[#efe9de]/[0.07] transition-colors",style:{marginLeft:o%2?26:0},children:[m.jsx("span",{className:"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px]",style:{color:s.color,background:`${s.color}14`,border:`1px solid ${s.color}30`},children:s.icon}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("dt",{className:"text-[12.5px] text-[#efe9de]",children:s.title}),m.jsx("dd",{className:"mt-0.5 text-[11.5px] leading-[1.65] text-[#857f74]",children:s.body})]})]},s.title))})]}),m.jsx("div",{className:"hidden md:block","aria-hidden":!0})]}),m.jsxs("div",{className:"flex items-end justify-between gap-6 border-t border-[#efe9de]/10 pt-4 transition-all duration-500",style:{opacity:i?1:0,transform:i?"none":"translateY(10px)"},children:[m.jsx("dl",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-1.5 flex-1 max-w-[720px]",children:n.label.rows.map(s=>m.jsxs("div",{className:"flex items-baseline gap-2",children:[m.jsx("dt",{className:"label-xs text-[#857f74] shrink-0",children:s.k}),m.jsx("dd",{className:"text-[11.5px] text-[#aaa398] truncate",children:s.v})]},s.k))}),m.jsxs("div",{className:"hidden lg:block text-right",children:[m.jsx("div",{className:"label-xs text-[#d9a441]",children:n.label.id}),m.jsx("div",{className:"text-[11.5px] text-[#857f74] mt-0.5",children:n.label.title})]})]}),m.jsxs("div",{className:"mt-4 flex items-center justify-between gap-4",children:[m.jsx("span",{className:"text-[10.5px] text-[#6d675e] font-mono",children:n.footer}),m.jsxs("span",{className:"flex items-center gap-2 text-[10.5px] text-[#6d675e]",children:[m.jsx(Ai,{id:"flagellum",size:13}),m.jsx(Ai,{id:"chloroplast",size:13}),m.jsx(Ai,{id:"adhesion",size:13})]})]})]})})]})}function Rv({composition:t,counts:e,size:n=104,thickness:i=13,showLegend:r=!1,showTotal:s=!0}){const o=(n-i)/2,a=2*Math.PI*o,l=be.useMemo(()=>{let u=0;return qf.map(d=>{const f=Math.max(0,t[d]??0),p={id:d,value:f,dash:f*a,offset:-u*a,color:Jn[d].color,label:Jn[d].zh,icon:Jn[d].icon};return u+=f,p})},[t,a]),c=e?Object.values(e).reduce((u,d)=>u+d,0):Math.round((t.photosynthesizer??0)*0)+fb();return m.jsxs("div",{className:"flex flex-col items-center gap-2.5",children:[m.jsxs("div",{className:"relative",style:{width:n,height:n},children:[m.jsx("svg",{width:n,height:n,className:"-rotate-90",children:m.jsx("circle",{cx:n/2,cy:n/2,r:o,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:i})}),m.jsx("svg",{width:n,height:n,className:"-rotate-90 absolute inset-0",children:l.map(u=>u.value<=1e-4?null:m.jsx("circle",{cx:n/2,cy:n/2,r:o,fill:"none",stroke:u.color,strokeWidth:i,strokeLinecap:"butt",strokeDasharray:`${u.dash} ${Math.max(0,a-u.dash)}`,strokeDashoffset:u.offset,style:{transition:"stroke-dasharray 640ms cubic-bezier(.22,1,.36,1), stroke-dashoffset 640ms cubic-bezier(.22,1,.36,1)"}},u.id))}),s&&m.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[m.jsx("span",{className:"num text-[19px] font-semibold leading-none text-white/92",children:c}),m.jsx("span",{className:"label-xs text-white/35 mt-1",children:"个体"})]}),m.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 animate-ping pointer-events-none [animation-duration:2.8s]"})]}),r&&m.jsx("div",{className:"w-full space-y-1",children:l.map(u=>m.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[m.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:u.color}}),m.jsx("span",{className:"text-white/70",children:u.label}),m.jsx("span",{className:"flex-1"}),m.jsxs("span",{className:"num text-white/45",children:[(u.value*100).toFixed(1),"%"]}),e&&m.jsx("span",{className:"num text-white/30 w-8 text-right",children:e[u.id]??0})]},u.id))})]})}function fb(t){return 0}const pb=["细菌","古菌","内共生","真核","多细胞起源","动物","植物","真菌"];function Ku(t){return t>=1e3?`${(t/1e3).toFixed(1)} 十亿年前`:`${t} 百万年前`}function mb({engine:t,lang:e}){const[n,i]=be.useState(null),[r,s]=be.useState(null),o=be.useMemo(()=>{const c=new Map;for(const u of br){const d=Zt[u].branch;c.has(d)||c.set(d,[]),c.get(d).push(u)}for(const[,u]of c)u.sort((d,f)=>Zt[f].eraMa-Zt[d].eraMa);return pb.filter(u=>c.has(u)).map(u=>[u,c.get(u)])},[]),a=br.length,l=t.seenOrganelles.size;return m.jsxs("div",{className:"space-y-5 pt-1",children:[m.jsxs("div",{className:"glass-soft rounded-xl px-3.5 py-3",children:[m.jsxs("div",{className:"flex items-baseline justify-between mb-1.5",children:[m.jsx("span",{className:"label-xs text-white/40",children:e==="zh"?"已发现的演化创新":"DISCOVERED INNOVATIONS"}),m.jsxs("span",{className:"num text-[15px] text-[#a2db3c]",children:[l,m.jsxs("span",{className:"text-white/25 text-[11px]",children:["/",a]})]})]}),m.jsx("div",{className:"h-1.5 rounded-full bg-white/8 overflow-hidden",children:m.jsx("div",{className:"h-full rounded-full transition-[width] duration-700",style:{width:`${l/a*100}%`,background:"var(--accent)"}})}),m.jsx("p",{className:"mt-2 text-[10px] leading-relaxed text-white/35",children:e==="zh"?"每一项都对应地球上真实发生过的演化创新，拥有真实存在的代表生物与起源年代。":"Every entry is a real evolutionary innovation with a real organism behind it."})]}),m.jsxs("div",{children:[m.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"真实的多细胞化路线":"REAL MULTICELLULAR ROUTES"}),m.jsx("div",{className:"space-y-2",children:Yf.map(c=>{const u=ts[c],d=t.seenRoutes.has(c),f=r===c;return m.jsxs("button",{onClick:()=>s(f?null:c),className:"w-full text-left rounded-xl px-3 py-2.5 transition-all duration-300",style:{background:d?`${u.hue}18`:"rgba(255,255,255,.03)",border:`1px solid ${d?`${u.hue}55`:"rgba(255,255,255,.08)"}`,boxShadow:d?`0 6px 22px -12px ${u.hue}`:"none"},children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"text-[15px]",style:{color:d?u.hue:"rgba(255,255,255,.3)"},children:m.jsx(Ai,{id:u.icon,size:15})}),m.jsx("span",{className:Ht("text-[12px]",d?"text-white/90":"text-white/40"),children:e==="zh"?u.zh:u.en}),m.jsx("span",{className:"flex-1"}),m.jsx("span",{className:"text-[9.5px] px-1.5 rounded-[4px]",style:{background:d?`${u.hue}25`:"rgba(255,255,255,.05)",color:d?u.hue:"rgba(255,255,255,.3)"},children:d?e==="zh"?"已达成":"REACHED":e==="zh"?"未达成":"LOCKED"})]}),m.jsxs("div",{className:"mt-1 text-[10px] text-white/32",children:[e==="zh"?u.realZh:u.realEn," · ",Ku(u.eraMa)]}),f&&m.jsxs("div",{className:"mt-2 space-y-1.5 text-[10.5px] leading-relaxed",children:[m.jsx("p",{className:"text-white/55",children:e==="zh"?u.descZh:u.descEn}),m.jsxs("p",{style:{color:`${u.hue}dd`},children:["▸ ",e==="zh"?u.perkZh:u.perkEn]}),m.jsxs("p",{className:"text-white/35",children:[e==="zh"?"需要：":"Requires: ",u.requires.map(p=>Zt[p].zh).join(" + ")]})]})]},c)})})]}),m.jsxs("div",{children:[m.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"地球史大事件":"MASS EVENTS IN EARTH HISTORY"}),m.jsx("div",{className:"space-y-1.5",children:Object.values(Vl).map(c=>{const u=t.seenEarthEvents.has(c.id);return m.jsxs("div",{className:"flex items-start gap-2.5 px-2.5 py-2 rounded-xl",style:{background:u?`${c.hue}12`:"transparent",opacity:u?1:.38},children:[m.jsx("span",{className:"text-[14px] mt-px",style:{color:u?c.hue:"rgba(255,255,255,.35)"},children:m.jsx(Ai,{id:c.icon,size:14})}),m.jsxs("div",{className:"min-w-0",children:[m.jsxs("div",{className:"flex items-baseline gap-2",children:[m.jsx("span",{className:Ht("text-[11.5px]",u?"text-white/88":"text-white/45"),children:e==="zh"?c.zh:c.en}),m.jsx("span",{className:"text-[9px] text-white/28 num",children:Ku(c.eraMa)})]}),u&&m.jsx("div",{className:"text-[10px] text-white/42 leading-relaxed mt-0.5",children:e==="zh"?c.descZh:c.descEn})]})]},c.id)})})]}),m.jsxs("div",{children:[m.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"演化谱系树":"LINEAGE TREE"}),m.jsx("div",{className:"space-y-4",children:o.map(([c,u])=>m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[m.jsx("span",{className:"w-1 h-1 rounded-full bg-white/30"}),m.jsx("span",{className:"text-[10.5px] text-white/50",children:c}),m.jsx("span",{className:"flex-1 h-px bg-white/8"})]}),m.jsx("div",{className:"space-y-1 pl-3 border-l border-white/8",children:u.map(d=>{const f=Zt[d],p=t.seenOrganelles.has(d),_=n===d;return m.jsxs("button",{onClick:()=>i(_?null:d),className:"w-full text-left rounded-xl px-2 py-1.5 transition-all duration-200 hover:bg-white/4",style:{background:_?`${f.hue}16`:void 0},children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-6 h-6 rounded-full flex items-center justify-center text-[12px] shrink-0",style:{border:`1px solid ${p?`${f.hue}66`:"rgba(255,255,255,.12)"}`,background:p?`${f.hue}1c`:"transparent",color:p?f.hue:"rgba(255,255,255,.3)"},children:p?m.jsx(Ai,{id:f.icon,size:13}):m.jsx("span",{className:"text-[11px]",children:"?"})}),m.jsx("span",{className:Ht("text-[11.5px]",p?"text-white/85":"text-white/38"),children:e==="zh"?f.zh:f.en}),m.jsx("span",{className:"flex-1"}),m.jsx("span",{className:"text-[9px] text-white/26 num",children:Ku(f.eraMa)})]}),_&&m.jsxs("div",{className:"mt-1.5 pl-8 space-y-1",children:[m.jsx("p",{className:"text-[10.5px] text-white/55 leading-relaxed",children:e==="zh"?f.descZh:f.descEn}),m.jsxs("p",{className:"text-[10px] text-white/40",children:[m.jsx("span",{className:"text-white/55",children:e==="zh"?"现实原型：":"Real organism: "}),e==="zh"?f.realZh:f.realEn]}),m.jsx("p",{className:"text-[10px] text-white/32 leading-relaxed",children:e==="zh"?f.noteZh:f.noteEn}),f.prereq&&f.prereq.length>0&&m.jsxs("p",{className:"text-[9.5px] text-white/28",children:[e==="zh"?"前置：":"Requires: ",f.prereq.map(M=>Zt[M].zh).join(" + ")]})]})]},d)})})]},c))})]})]})}const gb=[{id:"ecology",icon:m.jsx(bv,{size:14}),zh:"生态",en:"Eco"},{id:"lineage",icon:m.jsx(Qf,{size:14}),zh:"演化",en:"Tree"},{id:"ranks",icon:m.jsx(Ec,{size:14}),zh:"榜单",en:"Ranks"},{id:"codex",icon:m.jsx(Av,{size:14}),zh:"图鉴",en:"Codex"},{id:"chronicle",icon:m.jsx(Cv,{size:14}),zh:"编年",en:"Log"},{id:"cell",icon:m.jsx(Ud,{size:14}),zh:"个体",en:"Cell"}];function xb({open:t,tab:e,triggerRect:n,onTab:i,onClose:r,engine:s,lang:o,selected:a}){const l=be.useRef(null),[c,u]=be.useState({opacity:0,visibility:"hidden"}),[d,f]=be.useState(!1);return Zf(l,{scale:58,border:.09,blur:1.6,saturate:1.45},t),Kf(l,t),be.useLayoutEffect(()=>{if(!t||!l.current)return;const p=()=>{if(!l.current)return;const g=window.innerWidth,h=window.innerHeight,x=Math.min(356,g-24),S=g-12-x,C=62,T=Math.max(240,Math.min(h-C-18,720)),A=n?n.left+n.width/2-S:-40,P=n?n.top+n.height/2-C:T/2,H=`${Math.max(-60,Math.min(x+60,A))}px ${Math.max(-60,Math.min(T+60,P))}px`;u(y=>y.left===S&&y.top===C&&y.width===x&&y.height===T&&y.transformOrigin===H?y:{left:S,top:C,width:x,height:T,transformOrigin:H,opacity:1,visibility:"visible"}),f(!0)};p();const _=new ResizeObserver(()=>p());return _.observe(l.current),()=>_.disconnect()},[t,n]),be.useEffect(()=>{if(!t)return;const p=_=>{_.key==="Escape"&&r()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[t,r]),!t&&!d?null:m.jsxs("aside",{ref:l,className:Ht("glass glass-strong fixed z-40 flex flex-col overflow-hidden rounded-[20px]",t?"pop-in":"pop-out"),style:c,onAnimationEnd:()=>{t||(f(!1),u(p=>({...p,opacity:0,visibility:"hidden"})))},children:[m.jsxs("div",{className:"flex items-center gap-1 px-3 pt-3 pb-2 shrink-0",children:[m.jsx("div",{className:"flex-1 flex items-center gap-0.5 p-1 rounded-[8px] bg-white/[0.045] border border-white/8",children:gb.map(p=>{const _=e===p.id;return m.jsxs("button",{onClick:()=>i(p.id),title:o==="zh"?p.zh:p.en,className:Ht("relative flex-1 h-8 rounded-full flex items-center justify-center gap-1 transition-all duration-300",_?"text-white":"text-white/40 hover:text-white/75"),style:_?{background:"rgba(217,164,65,.16)",boxShadow:"inset 0 0 0 1px rgba(217,164,65,.42)"}:void 0,children:[p.icon,m.jsx("span",{className:"text-[10px] hidden sm:inline",children:o==="zh"?p.zh:p.en})]},p.id)})}),m.jsx("button",{onClick:r,className:"w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/8 transition-colors shrink-0",title:"Close",children:m.jsx(ib,{size:14})})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto scroll-thin px-4 pb-4",children:[e==="ecology"&&m.jsx(vb,{engine:s,lang:o}),e==="lineage"&&m.jsx(mb,{engine:s,lang:o}),e==="ranks"&&m.jsx(_b,{engine:s,lang:o}),e==="codex"&&m.jsx(yb,{engine:s,lang:o}),e==="chronicle"&&m.jsx(Sb,{engine:s,lang:o}),e==="cell"&&m.jsx(Eb,{agent:a,engine:s,lang:o})]})]})}function vb({engine:t,lang:e}){const n=t.composition(),i=t.compositionCounts(),r=new Map;for(const s of t.agents)!s.alive||!s.role||r.set(s.role,(r.get(s.role)??0)+1);return m.jsxs("div",{className:"space-y-5 pt-1",children:[m.jsx("div",{className:"flex justify-center py-2",children:m.jsx(Rv,{composition:n,counts:i,size:148,thickness:17,showLegend:!1})}),m.jsx("div",{className:"space-y-1.5",children:qf.map(s=>{const o=Jn[s],a=n[s]??0;return m.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[m.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:o.color}}),m.jsx("span",{className:"text-white/68 w-[68px] shrink-0",children:e==="zh"?o.zh:o.en}),m.jsx("span",{className:"flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden",children:m.jsx("span",{className:"block h-full rounded-full transition-[width] duration-700 ease-out",style:{width:`${Math.max(0,a*100)}%`,background:`linear-gradient(90deg, ${o.color}, ${o.color}66)`,boxShadow:"0 1px 2px rgba(0,0,0,.35)"}})}),m.jsxs("span",{className:"num text-white/42 w-10 text-right",children:[(a*100).toFixed(1),"%"]}),m.jsx("span",{className:"num text-white/28 w-8 text-right",children:i[s]??0})]},s)})}),m.jsx("div",{className:"h-px bg-white/8"}),m.jsx("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2.5",children:[{k:e==="zh"?"存活生物":"Alive",v:t.agents.filter(s=>s.alive).length,c:"#a2db3c"},{k:e==="zh"?"多细胞群体":"Colonies",v:t.colonies.size,c:"#4fb3c4"},{k:e==="zh"?"累计捕食":"Total kills",v:t.totalKills,c:"#ff8b3d"},{k:e==="zh"?"其中食同族":"Cannibalism",v:t.totalCannibalKills,c:"#ff3d6e"},{k:e==="zh"?"累计新生":"Births",v:t.totalBirths,c:"#e8c46a"},{k:e==="zh"?"养分浓度":"Nutrient",v:`×${t.nutrient.toFixed(2)}`,c:"#b5652e"}].map(s=>m.jsxs("div",{children:[m.jsx("div",{className:"text-[9.5px] text-white/38",children:s.k}),m.jsx("div",{className:"num text-[17px] font-semibold leading-tight",style:{color:s.c},children:typeof s.v=="number"?s.v.toLocaleString():s.v})]},s.k))}),r.size>0&&m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"h-px bg-white/8"}),m.jsxs("div",{children:[m.jsx("div",{className:"label-xs text-white/40 mb-2",children:e==="zh"?"细胞职能分化":"CELL SPECIALISATION"}),m.jsx("div",{className:"space-y-1",children:[...r.entries()].map(([s,o])=>{const a=bi[s];return m.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[m.jsx("span",{className:"w-4 flex justify-center",style:{color:a.color},children:m.jsx(Ai,{id:a.icon,size:13})}),m.jsx("span",{className:"text-white/66",children:e==="zh"?a.zh:a.en}),m.jsx("span",{className:"flex-1"}),m.jsx("span",{className:"num text-white/45",children:o})]},s)})})]})]})]})}function _b({engine:t,lang:e}){const n=t.agents.filter(s=>s.alive),i=[...n].sort((s,o)=>o.kills-s.kills).slice(0,8),r=[...n].filter(s=>s.cannibalKills>0).sort((s,o)=>o.cannibalKills-s.cannibalKills).slice(0,5);return m.jsxs("div",{className:"space-y-5 pt-1",children:[m.jsxs("div",{children:[m.jsx("div",{className:"label-xs text-white/40 mb-2",children:e==="zh"?"猎杀排行榜":"KILL LEADERBOARD"}),m.jsxs("div",{className:"space-y-1",children:[i.map((s,o)=>m.jsxs("div",{className:"flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-white/5",children:[m.jsx("span",{className:"num text-[10px] text-white/28 w-3",children:o+1}),m.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:`hsl(${s.genome.hue}, 78%, 62%)`}}),m.jsxs("span",{className:"num text-[11.5px] text-white/82",children:["#",s.id]}),m.jsxs("span",{className:"text-[10px] text-white/42 truncate",children:[e==="zh"?Jn[s.strategy].zh:Jn[s.strategy].en,s.role?` · ${e==="zh"?bi[s.role].zh:bi[s.role].en}`:""]}),m.jsx("span",{className:"flex-1"}),s.cannibalKills>0&&m.jsx("span",{className:"text-[9px] px-1.5 rounded-[4px] bg-[#d2604f]/18 text-[#e79b8c] border border-[#d2604f]/32",children:e==="zh"?`食同族 ${s.cannibalKills}`:`cannibal ${s.cannibalKills}`}),m.jsx("span",{className:"num text-[11px] text-[#ff8b3d]",children:s.kills})]},s.id)),i.length===0&&m.jsx("div",{className:"text-[10.5px] text-white/28 px-2 py-1",children:e==="zh"?"还没有生物完成猎杀":"No kills yet"})]})]}),m.jsx("div",{className:"h-px bg-white/8"}),m.jsxs("div",{children:[m.jsx("div",{className:"label-xs text-white/40 mb-2",children:e==="zh"?"食同族记录":"CANNIBALISM"}),m.jsxs("div",{className:"space-y-1",children:[r.map(s=>m.jsxs("div",{className:"flex items-center gap-2 px-2 py-1.5 rounded-xl",children:[m.jsx("span",{className:"text-[12px] w-4 text-center text-[#ff3d6e]",children:"☠"}),m.jsxs("span",{className:"num text-[11.5px] text-white/82",children:["#",s.id]}),m.jsx("span",{className:"text-[10px] text-white/42",children:e==="zh"?"吞噬同族":"devoured its own kind"}),m.jsx("span",{className:"flex-1"}),m.jsxs("span",{className:"num text-[11px] text-[#ff3d6e]",children:["×",s.cannibalKills]})]},s.id)),r.length===0&&m.jsx("div",{className:"text-[10.5px] text-white/28 px-2 py-1",children:e==="zh"?"尚未发生同类相食":"No cannibalism yet — push two hunters together"})]})]})]})}function yb({engine:t,lang:e}){const[n,i]=be.useState(null);return m.jsxs("div",{className:"space-y-1 pt-1",children:[m.jsxs("div",{className:"label-xs text-white/40 mb-2",children:[e==="zh"?"演化创新图鉴":"INNOVATION CODEX"," · ",t.seenOrganelles.size,"/",mg.length]}),mg.map(r=>{const s=Ev[r],o=t.seenOrganelles.has(r),a=n===r;return m.jsxs("button",{onClick:()=>i(a?null:r),className:"w-full text-left flex items-start gap-2.5 px-2.5 py-2 rounded-xl transition-colors hover:bg-white/4",style:{background:o?`${s.hue}12`:"transparent",opacity:o?1:.36},children:[m.jsx("span",{className:"w-7 h-7 rounded-full flex items-center justify-center text-[13px] shrink-0 mt-px",style:{border:`1px solid ${o?`${s.hue}66`:"rgba(255,255,255,.15)"}`,color:o?s.hue:"rgba(255,255,255,.4)",background:o?`${s.hue}18`:"transparent"},children:o?m.jsx(Ai,{id:s.icon,size:13}):m.jsx("span",{className:"text-[11px]",children:"?"})}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsxs("div",{className:"flex items-baseline gap-2",children:[m.jsx("span",{className:"text-[12px] text-white/85",children:e==="zh"?s.zh:s.en}),m.jsx("span",{className:"text-[9px] text-white/26 num",children:s.eraMa>=1e3?`${(s.eraMa/1e3).toFixed(1)}Ga`:`${s.eraMa}Ma`})]}),m.jsx("div",{className:"text-[10px] text-white/34 truncate",children:o?e==="zh"?s.realZh:s.realEn:e==="zh"?"未进化":"Not evolved"}),a&&m.jsxs("div",{className:"mt-1.5 space-y-1",children:[m.jsx("p",{className:"text-[10.5px] text-white/58 leading-relaxed",children:e==="zh"?s.descZh:s.descEn}),m.jsx("p",{className:"text-[10px] text-white/38 leading-relaxed",children:e==="zh"?s.noteZh:s.noteEn}),m.jsxs("p",{className:"text-[9.5px] text-white/26",children:[e==="zh"?"支系：":"Branch: ",s.branch]})]})]})]},r)})]})}const Mb={organelle:"#a2db3c",colony:"#4fb3c4",milestone:"#e8c46a",extinction:"#ff5b5b",apex:"#ff8b3d",god:"#c08a9e",cannibal:"#ff3d6e",differentiate:"#c9a227",earth:"#e8c46a",route:"#34d399"};function Sb({engine:t,lang:e}){return m.jsxs("div",{className:"pt-1",children:[m.jsx("div",{className:"label-xs text-white/40 mb-2",children:e==="zh"?"进化编年史":"CHRONICLE"}),m.jsxs("div",{className:"space-y-1.5",children:[t.events.map((n,i)=>m.jsxs("div",{className:"flex gap-2 text-[11px] leading-relaxed event-in",children:[m.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",style:{background:Mb[n.type]??"#8fa"}}),m.jsxs("div",{children:[m.jsxs("span",{className:"num text-white/26 mr-1.5",children:["[",n.tick,"]"]}),m.jsx("span",{className:"text-white/72",children:e==="zh"?n.zh:n.en})]})]},`${n.tick}-${i}`)),t.events.length===0&&m.jsx("div",{className:"text-[10.5px] text-white/28",children:e==="zh"?"暂无记录":"No entries yet"})]})]})}function Eb({agent:t,engine:e,lang:n}){if(!t)return m.jsx("div",{className:"pt-6 text-center text-[11px] text-white/32",children:n==="zh"?"点击培养皿里的任意生物查看它的基因组":"Click any organism to inspect its genome"});const i=Jn[t.strategy],r=t.role?bi[t.role]:null,s=e.colonySize(t.colonyId),o=[{k:n==="zh"?"攻击":"Attack",v:e.attackOf(t),max:20,c:"#ff8b3d"},{k:n==="zh"?"防御":"Defense",v:e.defenseOf(t),max:20,c:"#4fb3c4"},{k:n==="zh"?"速度":"Speed",v:e.speedOf(t),max:4,c:"#a2db3c"},{k:n==="zh"?"感知":"Sense",v:e.senseOf(t),max:260,c:"#e8c46a"}];return m.jsxs("div",{className:"pt-1 space-y-4",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("span",{className:"w-10 h-10 rounded-full shrink-0",style:{background:`radial-gradient(circle at 34% 30%, hsl(${t.genome.hue},78%,64%), hsl(${t.genome.hue},70%,32%))`,boxShadow:"0 1px 2px rgba(0,0,0,.4)"}}),m.jsxs("div",{className:"min-w-0",children:[m.jsxs("div",{className:"num text-[15px] text-white/90",children:["#",t.id]}),m.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[m.jsx("span",{className:"text-[10px] px-1.5 rounded-[4px]",style:{background:`${i.color}22`,color:i.color},children:n==="zh"?i.zh:i.en}),r&&m.jsxs("span",{className:"text-[10px] px-1.5 rounded-[4px]",style:{background:`${r.color}22`,color:r.color},children:[m.jsx(Ai,{id:r.icon,size:11})," ",n==="zh"?r.zh:r.en]})]})]})]}),r&&m.jsx("div",{className:"text-[10.5px] leading-relaxed px-2.5 py-2 rounded-xl",style:{background:`${r.color}12`,color:`${r.color}dd`},children:n==="zh"?r.descZh:r.descEn}),m.jsx("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2",children:[{k:n==="zh"?"世代":"Gen",v:t.generation},{k:n==="zh"?"能量":"Energy",v:Math.round(t.energy)},{k:n==="zh"?"猎杀":"Kills",v:t.kills},{k:n==="zh"?"食同族":"Cannibal",v:t.cannibalKills},{k:n==="zh"?"子代":"Offspring",v:t.children},{k:n==="zh"?"年龄":"Age",v:t.age}].map(a=>m.jsxs("div",{children:[m.jsx("div",{className:"text-[9.5px] text-white/36",children:a.k}),m.jsx("div",{className:"num text-[15px] text-white/85",children:a.v})]},a.k))}),m.jsx("div",{className:"space-y-1.5",children:o.map(a=>m.jsxs("div",{className:"flex items-center gap-2 text-[10.5px]",children:[m.jsx("span",{className:"text-white/45 w-10 shrink-0",children:a.k}),m.jsx("span",{className:"flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden",children:m.jsx("span",{className:"block h-full rounded-full transition-[width] duration-500",style:{width:`${Math.min(100,a.v/a.max*100)}%`,background:a.c}})}),m.jsx("span",{className:"num text-white/40 w-9 text-right",children:a.v.toFixed(1)})]},a.k))}),s>0&&m.jsx("div",{className:"text-[10.5px] text-[#4fb3c4] bg-[#4fb3c4]/12 px-2.5 py-2 rounded-xl",children:n==="zh"?`隶属多细胞聚合体 · ${s} 个细胞协同中`:`Member of a colony · ${s} cells cooperating`}),m.jsxs("div",{children:[m.jsx("div",{className:"label-xs text-white/40 mb-1.5",children:n==="zh"?"细胞器":"ORGANELLES"}),m.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[t.genome.organelles.length===0&&m.jsx("span",{className:"text-[10.5px] text-white/32",children:n==="zh"?"原始细胞，尚无细胞器":"Primitive cell, no organelles"}),t.genome.organelles.map(a=>{const l=Ev[a];return m.jsxs("span",{title:n==="zh"?l.realZh:l.realEn,className:"text-[10px] px-2 py-1 rounded-full",style:{background:`${l.hue}1c`,color:l.hue,border:`1px solid ${l.hue}38`},children:[m.jsx(Ai,{id:l.icon,size:11})," ",n==="zh"?l.zh:l.en]},a)})]})]})]})}const wb=[{id:"inspect",label:"观察",labelEn:"Inspect",hint:"点击任意生物，查看它的基因组",hintEn:"Click any organism to view its genome",color:"#4fb3c4",icon:m.jsx(KT,{size:15})},{id:"feed",label:"投喂",labelEn:"Feed",hint:"点击培养皿，在该处撒下食物",hintEn:"Click the dish to scatter food there",color:"#84b96b",icon:m.jsx(QT,{size:15})},{id:"smite",label:"天罚",labelEn:"Smite",hint:"点击培养皿，毁灭半径内的生命",hintEn:"Click the dish to destroy life in a radius",color:"#e2663f",icon:m.jsx(JT,{size:15})},{id:"mutate",label:"点化",labelEn:"Bless",hint:"点击生物附近，强制它突变出新细胞器",hintEn:"Click near a cell to force a new organelle",color:"#c08a9e",icon:m.jsx(eb,{size:15})},{id:"alien",label:"入侵",labelEn:"Aliens",hint:"投放一批携带未知基因的外来物种",hintEn:"Release alien species with unknown genes",color:"#5aa89b",icon:m.jsx(tb,{size:15}),instant:!0},{id:"plague",label:"瘟疫",labelEn:"Plague",hint:"随机夺走约 40% 的生命",hintEn:"Randomly take ~40% of all life",color:"#d2604f",icon:m.jsx(nb,{size:15}),instant:!0}];function Tb({tool:t,onSelect:e,lang:n,onActiveRect:i}){const[r,s]=be.useState(!0),o=be.useRef(null),a=be.useRef(null);Zf(a,{scale:46,border:.14,blur:1,saturate:1.5},r),Kf(a,r);const l=be.useRef({});return m.jsxs("div",{ref:o,className:"pointer-events-auto flex flex-col items-start gap-2",children:[m.jsxs("button",{onClick:()=>s(c=>!c),className:Ht("glass capsule-btn h-9 pl-3 pr-3.5 flex items-center gap-2 text-[10px] tracking-wider",r?"text-white/85":"text-white/55"),title:n==="zh"?"上帝之手":"Hand of God",children:[m.jsx(Qf,{size:13}),m.jsx("span",{className:"label-xs",children:n==="zh"?"上帝之手":"GOD HAND"}),m.jsx("span",{className:Ht("w-1.5 h-1.5 rounded-full transition-all duration-300",r?"bg-[#c08a9e] rotate-0":"bg-white/25 -rotate-90")})]}),m.jsx("div",{ref:a,className:Ht("glass capsule flex flex-col gap-1 p-1.5 overflow-hidden",r?"pop-in":"pop-out pointer-events-none"),style:{transformOrigin:"12px 0px",maxHeight:r?420:0,opacity:r?1:0,paddingLeft:r?6:0,paddingRight:r?6:0,paddingTop:r?6:0,paddingBottom:r?6:0,transition:"max-height .42s cubic-bezier(.22,1,.36,1), opacity .28s ease, padding .42s cubic-bezier(.22,1,.36,1)"},children:wb.map(c=>{const u=!c.instant&&t===c.id;return m.jsxs("button",{ref:d=>{l.current[c.id]=d},onClick:()=>{e(c);const d=l.current[c.id];d&&i?.(d.getBoundingClientRect())},title:n==="zh"?c.hint:c.hintEn,className:Ht("capsule-btn relative w-10 h-10 flex flex-col items-center justify-center gap-0.5 shrink-0",u?"":"text-white/58 hover:text-white"),style:u?{color:c.color,background:`linear-gradient(180deg, ${c.color}33, ${c.color}12)`,boxShadow:`inset 0 0 0 1px ${c.color}66`}:void 0,children:[c.icon,m.jsx("span",{className:"text-[8px] leading-none",children:n==="zh"?c.label:c.labelEn})]},c.id)})})]})}function Qu({value:t,min:e,max:n,onChange:i,color:r}){const s=(t-e)/(n-e)*100;return m.jsx("input",{type:"range",className:"slider",min:e,max:n,value:Math.round(t),style:{"--track-c":r,"--pct":`${s}%`},onChange:o=>i(Number(o.target.value))})}function bb({engine:t,lang:e,refresh:n}){const[i,r]=be.useState(!1),s=be.useRef(null);Kf(s,i);const o=t.light>.45;return m.jsxs("div",{className:"pointer-events-auto flex flex-col items-start gap-2",children:[m.jsxs("button",{onClick:()=>r(a=>!a),className:Ht("glass capsule-btn h-9 pl-3 pr-3.5 flex items-center gap-2 text-[10px] tracking-wider",i?"text-white/85":"text-white/55"),title:e==="zh"?"环境控制":"Environment",children:[m.jsx(aa,{size:13}),m.jsx("span",{className:"label-xs",children:e==="zh"?"环境控制":"ENVIRONMENT"}),m.jsx("span",{className:Ht("w-1.5 h-1.5 rounded-full transition-all duration-300",i?"bg-[#e8c46a] rotate-0":"bg-white/25 -rotate-90")})]}),m.jsx("div",{ref:s,className:Ht("glass rounded-[14px] overflow-hidden",i?"pop-in":"pop-out pointer-events-none"),style:{transformOrigin:"12px 0px",maxHeight:i?320:0,opacity:i?1:0,transition:"max-height .42s cubic-bezier(.22,1,.36,1), opacity .28s ease, padding .42s cubic-bezier(.22,1,.36,1)",padding:i?"14px 16px":"0 16px"},children:m.jsxs("div",{className:"w-[196px] space-y-3",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"label-xs text-white/38",children:e==="zh"?"环境控制":"ENVIRONMENT"}),m.jsxs("span",{className:Ht("flex items-center gap-1 text-[10px]",o?"text-[#e8c46a]":"text-[#7c8fb8]"),children:[m.jsx(aa,{size:10}),o?e==="zh"?"白昼":"Day":e==="zh"?"黑夜":"Night"," ",(t.light*100).toFixed(0),"%"]})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx(aa,{size:10}),e==="zh"?"光照":"Light"]}),m.jsx("button",{onClick:()=>{t.lightOverride=t.lightOverride===null?t.light:null,n()},className:Ht("px-1.5 rounded-[4px] text-[9px] border transition-colors",t.lightOverride===null?"border-[#d9a441]/45 text-[#d9a441]":"border-white/15 text-white/40"),children:e==="zh"?"昼夜循环":"Auto"})]}),m.jsx(Qu,{value:Math.round((t.lightOverride??t.light)*100),min:0,max:100,color:"#e8c46a",onChange:a=>{t.lightOverride=a/100}})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx(ub,{size:10}),e==="zh"?"温度":"Temp"]}),m.jsxs("span",{className:"num text-white/40",children:[t.temperature<.33?e==="zh"?"寒冷":"cold":t.temperature>.66?e==="zh"?"炎热":"hot":""," ",(t.temperature*40).toFixed(0),"°C"]})]}),m.jsx(Qu,{value:Math.round(t.temperature*100),min:0,max:100,color:"#ff8b3d",onChange:a=>{t.temperature=a/100}})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx(Id,{size:10}),e==="zh"?"养分":"Nutrient"]}),m.jsxs("span",{className:"num text-white/40",children:["×",t.nutrient.toFixed(2)]})]}),m.jsx(Qu,{value:Math.round(t.nutrient*100),min:35,max:240,color:"#a2db3c",onChange:a=>{t.nutrient=a/100}}),m.jsx("div",{className:"text-[9px] text-white/26 leading-relaxed mt-1",children:e==="zh"?"分解者会把尸体碎屑还原成养分":"Decomposers convert corpses back into nutrients"})]})]})})]})}const Ab=[1,5,20,100];function Cb(){const t=be.useRef(null);t.current||(t.current=new OT({initialCount:200}));const e=t.current,[n,i]=be.useState("zh"),[r,s]=be.useState(!1),[o,a]=be.useState(!0),[l,c]=be.useState(5),[u,d]=be.useState("inspect"),[f,p]=be.useState(null),[_,M]=be.useState(0),[g,h]=be.useState(!1),[x,v]=be.useState("ecology"),[S,C]=be.useState(null),[T,A]=be.useState(null),[P,H]=be.useState(null),y=be.useRef("inspect");y.current=u,be.useEffect(()=>{let ne=0;performance.now();const ee=()=>{ne=requestAnimationFrame(ee);const j=performance.now();if(!o)return;const re=j+8;let de=0;for(;de<l&&performance.now()<re;)e.step(),de++};return ne=requestAnimationFrame(ee),()=>cancelAnimationFrame(ne)},[e,o,l]),be.useEffect(()=>{const ne=setInterval(()=>M(ee=>ee+1),240);return()=>clearInterval(ne)},[]);const w=be.useMemo(()=>e.agents.filter(ne=>ne.alive),[e,_]),O=be.useMemo(()=>e.composition(),[e,_]),k=be.useMemo(()=>e.compositionCounts(),[e,_]),X=be.useMemo(()=>w.reduce((ne,ee)=>Math.max(ne,ee.generation),0),[w]),{eraLabel:Q,eraColor:V}=be.useMemo(()=>e.seenEarthEvents.has("cambrian")?{eraLabel:n==="zh"?"寒武纪":"CAMBRIAN",eraColor:"#d4748e"}:e.seenEarthEvents.has("snowball")?{eraLabel:n==="zh"?"雪球地球":"SNOWBALL",eraColor:"#7dd3fc"}:e.seenEarthEvents.has("goe")?{eraLabel:n==="zh"?"大氧化":"GOE",eraColor:"#d9a441"}:{eraLabel:n==="zh"?"前寒武纪":"PRECAMBRIAN",eraColor:"#8fa3a0"},[e,e.seenEarthEvents.size,n]),Z=be.useMemo(()=>f===null?null:e.agentById(f)??null,[e,f,_]),N=be.useCallback((ne,ee)=>{v(ne),C(ee),h(!0)},[]),K=be.useCallback(ne=>{if(H(ne),ne.id==="alien"){e.godAliens(18),M(ee=>ee+1);return}if(ne.id==="plague"){e.godPlague(.4),M(ee=>ee+1);return}d(ne.id)},[e]),J=be.useCallback((ne,ee)=>{a(!1),setTimeout(()=>{e.fastForward(ne,ee),M(j=>j+1),a(!0)},30)},[e]),ce=be.useCallback(()=>{a(!1),p(null),setTimeout(()=>{e.reset(),M(ne=>ne+1),a(!0)},20)},[e]);return m.jsxs("div",{className:"h-screen w-screen overflow-hidden relative bg-[#100f0d] text-[#efe9de] select-none",children:[m.jsx("div",{className:"bench"}),m.jsx(jT,{engine:e,toolRef:y,selectedId:f,onSelect:p}),m.jsxs("div",{className:Ht("transition-opacity duration-700",r?"opacity-100":"opacity-0 [&_*]:pointer-events-none"),children:[m.jsxs("header",{className:"absolute top-0 left-0 right-0 flex items-start gap-2.5 px-4 pt-3.5 pointer-events-none z-20",children:[m.jsxs("div",{className:"pointer-events-auto glass capsule h-11 pl-3 pr-4 flex items-center gap-2.5",children:[m.jsx("div",{className:"w-6 h-6 rounded-full border border-[#4fb3c4]/50 flex items-center justify-center",children:m.jsx("div",{className:"w-2 h-2 rounded-full bg-[#84b96b] animate-pulse"})}),m.jsxs("div",{className:"leading-none",children:[m.jsx("h1",{className:"text-[13px] font-semibold tracking-wide",children:n==="zh"?"微生物进化大赛":"Microbe Evolution Arena"}),m.jsx("span",{className:"label-xs text-[#4fb3c4]/65",children:"PETRI ARENA"})]})]}),m.jsx("div",{className:"flex-1"}),m.jsxs("div",{className:"pointer-events-auto glass capsule h-11 px-4 flex items-center gap-4 text-[11px] num text-white/55 max-md:hidden",children:[m.jsxs("span",{children:[n==="zh"?"世代时刻":"Tick"," ",m.jsx("b",{className:"text-[#4fb3c4]",children:e.tick.toLocaleString()})]}),m.jsxs("span",{children:[n==="zh"?"最高世代":"Max Gen"," ",m.jsx("b",{className:"text-[#4fb3c4]",children:X})]}),m.jsxs("span",{children:[n==="zh"?"存活":"Alive"," ",m.jsx("b",{className:"text-[#84b96b]",children:w.length})]}),m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:Ht("w-1.5 h-1.5 rounded-full",o?"bg-[#84b96b] animate-pulse":"bg-white/30")}),o?`${n==="zh"?"运行中":"LIVE"} ×${l}`:n==="zh"?"已暂停":"PAUSED"]}),m.jsx("span",{className:"px-1.5 rounded-[4px] border text-[10px]",style:{borderColor:`${V}55`,color:V,background:`${V}14`},title:n==="zh"?"当前地球年代":"Current era",children:Q})]}),m.jsx("button",{onClick:()=>i(ne=>ne==="zh"?"en":"zh"),className:"pointer-events-auto glass capsule-btn w-10 h-10 text-white/70 hover:text-white",title:"Language",children:m.jsx(rb,{size:15})})]}),m.jsxs("div",{className:"absolute left-4 top-[76px] bottom-4 w-[230px] flex flex-col justify-start gap-3 overflow-y-auto scroll-thin pointer-events-none z-20",style:{scrollbarWidth:"none"},children:[m.jsx(Tb,{tool:u,onSelect:K,lang:n,onActiveRect:A}),m.jsx(bb,{engine:e,lang:n,refresh:()=>M(ne=>ne+1)})]}),T&&P&&m.jsx("div",{className:"tooltip-bubble fixed z-30 pointer-events-none glass rounded-[10px] px-3 py-1.5 text-[10.5px] text-white/72 max-w-[220px] leading-relaxed",style:{left:T.right+12,top:T.top+T.height/2,transform:"translateY(-50%)",borderColor:`${P.color}38`},children:n==="zh"?P.hint:P.hintEn}),m.jsxs("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2.5 z-20",children:[m.jsxs("button",{"data-pop-anchor":!0,onClick:ne=>N("ecology",ne.currentTarget.getBoundingClientRect()),className:"glass capsule-btn p-1.5 flex items-center gap-2 group",title:n==="zh"?"生态构成（实时）":"Live ecology",children:[m.jsx(Rv,{composition:O,counts:k,size:58,thickness:8,showTotal:!1}),m.jsxs("div",{className:"pr-1.5 text-left hidden md:block",children:[m.jsx("div",{className:"label-xs text-white/38",children:n==="zh"?"生态构成":"ECOLOGY"}),m.jsxs("div",{className:"text-[10px] text-white/62 num",children:[w.length," ",n==="zh"?"个体":"alive"]})]})]}),[{tab:"lineage",icon:m.jsx(Qf,{size:15}),label:n==="zh"?"演化路线":"Lineage",color:"#d4748e"},{tab:"ranks",icon:m.jsx(Ec,{size:15}),label:n==="zh"?"猎杀榜":"Ranks",color:"#e2663f"},{tab:"codex",icon:m.jsx(Av,{size:15}),label:n==="zh"?"图鉴":"Codex",color:"#84b96b"},{tab:"chronicle",icon:m.jsx(Cv,{size:15}),label:n==="zh"?"编年史":"Log",color:"#d9a441"}].map(ne=>m.jsx("button",{"data-pop-anchor":!0,onClick:ee=>N(ne.tab,ee.currentTarget.getBoundingClientRect()),className:"glass capsule-btn w-11 h-11 flex items-center justify-center",style:{color:ne.color},title:ne.label,children:ne.icon},ne.tab))]}),m.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20",children:m.jsxs("div",{className:"glass capsule h-12 px-2.5 flex items-center gap-1.5",children:[m.jsx("button",{onClick:()=>a(ne=>!ne),className:Ht("capsule-btn w-8 h-8",o?"bg-[#d2604f]/18 text-[#ff8b8b]":"bg-[#84b96b]/18 text-[#84b96b]"),title:o?n==="zh"?"暂停":"Pause":n==="zh"?"继续":"Resume",children:o?m.jsx(sb,{size:14}):m.jsx(ob,{size:14})}),Ab.map(ne=>m.jsxs("button",{onClick:()=>{c(ne),a(!0)},className:Ht("capsule-btn h-7 px-2.5 text-[11px] num transition-colors",l===ne?"text-[#d9a441] bg-[#d9a441]/14 shadow-[inset_0_0_0_1px_rgba(217,164,65,.45)]":"text-white/45 hover:text-white/80"),children:["×",ne]},ne)),m.jsx("span",{className:"w-px h-5 bg-white/12 mx-1"}),m.jsxs("button",{onClick:()=>J(2e3,!0),title:n==="zh"?"快进至下一个进化事件":"Skip to next event",className:"capsule-btn h-7 px-2.5 text-[11px] text-[#d9a441] flex items-center gap-1",children:[m.jsx(cb,{size:12}),m.jsx("span",{className:"hidden sm:inline",children:n==="zh"?"事件":"Event"})]}),m.jsxs("button",{onClick:()=>J(3e3,!1),title:n==="zh"?"快进 3000 世代":"Skip 3000 ticks",className:"capsule-btn h-7 px-2.5 text-[11px] text-white/50 flex items-center gap-1",children:[m.jsx(lb,{size:12}),m.jsx("span",{className:"hidden sm:inline",children:"3000"})]}),m.jsx("button",{onClick:ce,title:n==="zh"?"重置":"Reset",className:"capsule-btn w-7 h-7 text-white/45",children:m.jsx(ab,{size:13})})]})}),m.jsx("div",{className:"absolute bottom-4 left-4 z-10 hidden lg:block pointer-events-none",children:m.jsx("div",{className:"glass capsule h-9 px-3.5 flex items-center gap-3 text-[10px] text-white/50",children:Object.entries(Jn).map(([ne,ee])=>m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{background:ee.color}}),m.jsxs("span",{className:"num text-white/62",children:[((O[ne]??0)*100).toFixed(0),"%"]})]},ne))})}),m.jsx("div",{className:"absolute bottom-5 right-4 z-10 text-[10px] text-white/22 font-mono pointer-events-none hidden md:block",children:n==="zh"?"拖动旋转 · 滚轮缩放 · 点击生物查看基因组":"Drag to orbit · Scroll to zoom · Click a cell to inspect"}),Z&&m.jsxs("button",{onClick:ne=>N("cell",ne.currentTarget.getBoundingClientRect()),className:"glass capsule h-10 px-3.5 flex items-center gap-2.5 z-20 absolute right-4 bottom-[68px]",children:[m.jsx("span",{className:"w-4 h-4 rounded-full",style:{background:`radial-gradient(circle at 34% 30%, hsl(${Z.genome.hue},78%,64%), hsl(${Z.genome.hue},70%,30%))`,boxShadow:"0 1px 2px rgba(0,0,0,.4)"}}),m.jsxs("span",{className:"num text-[11px] text-white/80",children:["#",Z.id]}),m.jsxs("span",{className:"text-[10px] text-white/45",children:[Jn[Z.strategy].zh,Z.role?` · ${Z.role}`:""]}),m.jsx(bv,{size:13,className:"text-white/35"})]})]}),m.jsx(xb,{open:g,tab:x,triggerRect:S,onTab:v,onClose:()=>h(!1),engine:e,lang:n,selected:Z}),!r&&m.jsx(db,{lang:n,onEnter:()=>s(!0)})]})}const Tg=document.getElementById("root");Tg&&kx(Tg).render(m.jsx(be.StrictMode,{children:m.jsx(Cb,{})}));
