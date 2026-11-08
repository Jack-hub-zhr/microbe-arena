var Dv=Object.defineProperty;var Iv=(t,e,n)=>e in t?Dv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ue=(t,e,n)=>Iv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Rg={exports:{}},wc={},Pg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),Uv=Symbol.for("react.portal"),kv=Symbol.for("react.fragment"),Fv=Symbol.for("react.strict_mode"),Ov=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),Hv=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),jv=Symbol.for("react.lazy"),np=Symbol.iterator;function Wv(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var Ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,Dg={};function _o(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Ng}_o.prototype.isReactComponent={};_o.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ig(){}Ig.prototype=_o.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Ng}var zd=Od.prototype=new Ig;zd.constructor=Od;Lg(zd,_o.prototype);zd.isPureReactComponent=!0;var ip=Array.isArray,Ug=Object.prototype.hasOwnProperty,Bd={current:null},kg={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ug.call(e,i)&&!kg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Aa,type:t,key:s,ref:o,props:r,_owner:Bd.current}}function Xv(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function $v(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rp=/\/+/g;function Wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$v(""+t.key):e.toString(36)}function El(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case Uv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Wc(o,0):i,ip(r)?(n="",t!=null&&(n=t.replace(rp,"$&/")+"/"),El(r,e,n,"",function(c){return c})):r!=null&&(Hd(r)&&(r=Xv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(rp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ip(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Wc(s,a);o+=El(s,e,n,l,r)}else if(l=Wv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Wc(s,a++),o+=El(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var i=[],r=0;return El(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Yv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xn={current:null},wl={transition:null},Zv={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:wl,ReactCurrentOwner:Bd};function Og(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=_o;Je.Fragment=kv;Je.Profiler=Ov;Je.PureComponent=Od;Je.StrictMode=Fv;Je.Suspense=Gv;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;Je.act=Og;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ug.call(e,l)&&!kg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Aa,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:Bv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zv,_context:t},t.Consumer=t};Je.createElement=Fg;Je.createFactory=function(t){var e=Fg.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:Hv,render:t}};Je.isValidElement=Hd;Je.lazy=function(t){return{$$typeof:jv,_payload:{_status:-1,_result:t},_init:Yv}};Je.memo=function(t,e){return{$$typeof:Vv,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};Je.unstable_act=Og;Je.useCallback=function(t,e){return xn.current.useCallback(t,e)};Je.useContext=function(t){return xn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return xn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return xn.current.useEffect(t,e)};Je.useId=function(){return xn.current.useId()};Je.useImperativeHandle=function(t,e,n){return xn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return xn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return xn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return xn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return xn.current.useReducer(t,e,n)};Je.useRef=function(t){return xn.current.useRef(t)};Je.useState=function(t){return xn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return xn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return xn.current.useTransition()};Je.version="18.3.1";Pg.exports=Je;var we=Pg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=we,Kv=Symbol.for("react.element"),Qv=Symbol.for("react.fragment"),Jv=Object.prototype.hasOwnProperty,e_=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t_={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Jv.call(e,i)&&!t_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Kv,type:t,key:s,ref:o,props:r,_owner:e_.current}}wc.Fragment=Qv;wc.jsx=zg;wc.jsxs=zg;Rg.exports=wc;var p=Rg.exports,Bg={exports:{}},Bn={},Hg={exports:{}},Gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var Z=L.length;L.push(q);e:for(;0<Z;){var le=Z-1>>>1,Te=L[le];if(0<r(Te,q))L[le]=q,L[Z]=Te,Z=le;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var q=L[0],Z=L.pop();if(Z!==q){L[0]=Z;e:for(var le=0,Te=L.length,Oe=Te>>>1;le<Oe;){var k=2*(le+1)-1,H=L[k],ie=k+1,ce=L[ie];if(0>r(H,Z))ie<Te&&0>r(ce,H)?(L[le]=ce,L[ie]=Z,le=ie):(L[le]=H,L[k]=Z,le=k);else if(ie<Te&&0>r(ce,Z))L[le]=ce,L[ie]=Z,le=ie;else break e}}return q}function r(L,q){var Z=L.sortIndex-q.sortIndex;return Z!==0?Z:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,m=!1,_=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=L)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(L){if(M=!1,x(L),!_)if(n(l)!==null)_=!0,W(P);else{var q=n(c);q!==null&&J(S,q.startTime-L)}}function P(L,q){_=!1,M&&(M=!1,h(C),C=-1),m=!0;var Z=f;try{for(x(q),d=n(l);d!==null&&(!(d.expirationTime>q)||L&&!T());){var le=d.callback;if(typeof le=="function"){d.callback=null,f=d.priorityLevel;var Te=le(d.expirationTime<=q);q=t.unstable_now(),typeof Te=="function"?d.callback=Te:d===n(l)&&i(l),x(q)}else i(l);d=n(l)}if(d!==null)var Oe=!0;else{var k=n(c);k!==null&&J(S,k.startTime-q),Oe=!1}return Oe}finally{d=null,f=Z,m=!1}}var A=!1,E=null,C=-1,O=5,y=-1;function T(){return!(t.unstable_now()-y<O)}function z(){if(E!==null){var L=t.unstable_now();y=L;var q=!0;try{q=E(!0,L)}finally{q?G():(A=!1,E=null)}}else A=!1}var G;if(typeof v=="function")G=function(){v(z)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Q=X.port2;X.port1.onmessage=z,G=function(){Q.postMessage(null)}}else G=function(){g(z,0)};function W(L){E=L,A||(A=!0,G())}function J(L,q){C=g(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,W(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var Z=f;f=q;try{return L()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=f;f=L;try{return q()}finally{f=Z}},t.unstable_scheduleCallback=function(L,q,Z){var le=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?le+Z:le):Z=le,L){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Z+Te,L={id:u++,callback:q,priorityLevel:L,startTime:Z,expirationTime:Te,sortIndex:-1},Z>le?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(M?(h(C),C=-1):M=!0,J(S,Z-le))):(L.sortIndex=Te,e(l,L),_||m||(_=!0,W(P))),L},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(L){var q=f;return function(){var Z=f;f=q;try{return L.apply(this,arguments)}finally{f=Z}}}})(Gg);Hg.exports=Gg;var n_=Hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_=we,zn=n_;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vg=new Set,ca={};function us(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(ca[t]=e,t=0;t<e.length;t++)Vg.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,r_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sp={},op={};function s_(t){return Ju.call(op,t)?!0:Ju.call(sp,t)?!1:r_.test(t)?op[t]=!0:(sp[t]=!0,!1)}function o_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function a_(t,e,n,i){if(e===null||typeof e>"u"||o_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Vd);rn[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Vd);rn[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Vd);rn[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function jd(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a_(e,n,r,i)&&(n=null),i||r===null?s_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=i_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),Wg=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Xg=Symbol.for("react.offscreen"),ap=Symbol.iterator;function Ro(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Xc;function $o(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||""}return`
`+Xc+t}var $c=!1;function Yc(t,e){if(!t||$c)return"";$c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function l_(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=Yc(t.type,!1),t;case 11:return t=Yc(t.type.render,!1),t;case 1:return t=Yc(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ls:return"Portal";case eh:return"Profiler";case Wd:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wg:return(t.displayName||"Context")+".Consumer";case jg:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function c_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u_(t){var e=$g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=u_(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$g(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zg(t,e){e=e.checked,e!=null&&jd(t,"checked",e,!1)}function sh(t,e){Zg(t,e);var n=Tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function Ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Yo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function qg(t,e){var n=Tr(e.value),i=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h_=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){h_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function Jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function e0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var d_=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(t,e){if(e){if(d_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dh=null,Zs=null,qs=null;function dp(t){if(t=Pa(t)){if(typeof dh!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Rc(e),dh(t.stateNode,t.type,e))}}function t0(t){Zs?qs?qs.push(t):qs=[t]:Zs=t}function n0(){if(Zs){var t=Zs,e=qs;if(qs=Zs=null,dp(t),e)for(t=0;t<e.length;t++)dp(e[t])}}function i0(t,e){return t(e)}function r0(){}var Zc=!1;function s0(t,e,n){if(Zc)return t(e,n);Zc=!0;try{return i0(t,e,n)}finally{Zc=!1,(Zs!==null||qs!==null)&&(r0(),n0())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var fh=!1;if(Vi)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){fh=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{fh=!1}function f_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Jo=!1,Wl=null,Xl=!1,ph=null,p_={onError:function(t){Jo=!0,Wl=t}};function m_(t,e,n,i,r,s,o,a,l){Jo=!1,Wl=null,f_.apply(p_,arguments)}function g_(t,e,n,i,r,s,o,a,l){if(m_.apply(this,arguments),Jo){if(Jo){var c=Wl;Jo=!1,Wl=null}else throw Error(re(198));Xl||(Xl=!0,ph=c)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fp(t){if(hs(t)!==t)throw Error(re(188))}function x_(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return fp(r),t;if(s===i)return fp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function a0(t){return t=x_(t),t!==null?l0(t):null}function l0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l0(t);if(e!==null)return e;t=t.sibling}return null}var c0=zn.unstable_scheduleCallback,pp=zn.unstable_cancelCallback,v_=zn.unstable_shouldYield,__=zn.unstable_requestPaint,kt=zn.unstable_now,y_=zn.unstable_getCurrentPriorityLevel,Zd=zn.unstable_ImmediatePriority,u0=zn.unstable_UserBlockingPriority,$l=zn.unstable_NormalPriority,M_=zn.unstable_LowPriority,h0=zn.unstable_IdlePriority,Tc=null,Ei=null;function S_(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:T_,E_=Math.log,w_=Math.LN2;function T_(t){return t>>>=0,t===0?32:31-(E_(t)/w_|0)|0}var Oa=64,za=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function b_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=b_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d0(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function C_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function f0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p0,Kd,m0,g0,x0,gh=!1,Ba=[],mr=null,gr=null,xr=null,da=new Map,fa=new Map,ur=[],R_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function No(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Pa(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function P_(t,e,n,i,r){switch(e){case"focusin":return mr=No(mr,t,e,n,i,r),!0;case"dragenter":return gr=No(gr,t,e,n,i,r),!0;case"mouseover":return xr=No(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,No(da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fa.set(s,No(fa.get(s)||null,t,e,n,i,r)),!0}return!1}function v0(t){var e=Yr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=o0(n),e!==null){t.blockedOn=e,x0(t.priority,function(){m0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hh=i,n.target.dispatchEvent(i),hh=null}else return e=Pa(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function gp(t,e,n){Tl(t)&&n.delete(e)}function N_(){gh=!1,mr!==null&&Tl(mr)&&(mr=null),gr!==null&&Tl(gr)&&(gr=null),xr!==null&&Tl(xr)&&(xr=null),da.forEach(gp),fa.forEach(gp)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,N_)))}function pa(t){function e(r){return Lo(r,t)}if(0<Ba.length){Lo(Ba[0],t);for(var n=1;n<Ba.length;n++){var i=Ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(mr!==null&&Lo(mr,t),gr!==null&&Lo(gr,t),xr!==null&&Lo(xr,t),da.forEach(e),fa.forEach(e),n=0;n<ur.length;n++)i=ur[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&ur.shift()}var Ks=Yi.ReactCurrentBatchConfig,Zl=!0;function L_(t,e,n,i){var r=pt,s=Ks.transition;Ks.transition=null;try{pt=1,Qd(t,e,n,i)}finally{pt=r,Ks.transition=s}}function D_(t,e,n,i){var r=pt,s=Ks.transition;Ks.transition=null;try{pt=4,Qd(t,e,n,i)}finally{pt=r,Ks.transition=s}}function Qd(t,e,n,i){if(Zl){var r=xh(t,e,n,i);if(r===null)ou(t,e,i,ql,n),mp(t,i);else if(P_(r,t,e,n,i))i.stopPropagation();else if(mp(t,i),e&4&&-1<R_.indexOf(t)){for(;r!==null;){var s=Pa(r);if(s!==null&&p0(s),s=xh(t,e,n,i),s===null&&ou(t,e,i,ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ou(t,e,i,null,n)}}var ql=null;function xh(t,e,n,i){if(ql=null,t=Yd(i),t=Yr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function _0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y_()){case Zd:return 1;case u0:return 4;case $l:case M_:return 16;case h0:return 536870912;default:return 16}default:return 16}}var fr=null,Jd=null,bl=null;function y0(){if(bl)return bl;var t,e=Jd,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function xp(){return!1}function Hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:xp,this.isPropagationStopped=xp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Hn(yo),Ra=Rt({},yo,{view:0,detail:0}),I_=Hn(Ra),Kc,Qc,Do,bc=Rt({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Kc=t.screenX-Do.screenX,Qc=t.screenY-Do.screenY):Qc=Kc=0,Do=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),vp=Hn(bc),U_=Rt({},bc,{dataTransfer:0}),k_=Hn(U_),F_=Rt({},Ra,{relatedTarget:0}),Jc=Hn(F_),O_=Rt({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=Hn(O_),B_=Rt({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H_=Hn(B_),G_=Rt({},yo,{data:0}),_p=Hn(G_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=W_[t])?!!e[t]:!1}function tf(){return X_}var $_=Rt({},Ra,{key:function(t){if(t.key){var e=V_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y_=Hn($_),Z_=Rt({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Hn(Z_),q_=Rt({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),K_=Hn(q_),Q_=Rt({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),J_=Hn(Q_),ey=Rt({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=Hn(ey),ny=[9,13,27,32],nf=Vi&&"CompositionEvent"in window,ea=null;Vi&&"documentMode"in document&&(ea=document.documentMode);var iy=Vi&&"TextEvent"in window&&!ea,M0=Vi&&(!nf||ea&&8<ea&&11>=ea),Mp=" ",Sp=!1;function S0(t,e){switch(t){case"keyup":return ny.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function ry(t,e){switch(t){case"compositionend":return E0(e);case"keypress":return e.which!==32?null:(Sp=!0,Mp);case"textInput":return t=e.data,t===Mp&&Sp?null:t;default:return null}}function sy(t,e){if(Is)return t==="compositionend"||!nf&&S0(t,e)?(t=y0(),bl=Jd=fr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M0&&e.locale!=="ko"?null:e.data;default:return null}}var oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oy[t.type]:e==="textarea"}function w0(t,e,n,i){t0(i),e=Kl(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ta=null,ma=null;function ay(t){U0(t,0)}function Ac(t){var e=Fs(t);if(Yg(e))return t}function ly(t,e){if(t==="change")return e}var T0=!1;if(Vi){var eu;if(Vi){var tu="oninput"in document;if(!tu){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),tu=typeof wp.oninput=="function"}eu=tu}else eu=!1;T0=eu&&(!document.documentMode||9<document.documentMode)}function Tp(){ta&&(ta.detachEvent("onpropertychange",b0),ma=ta=null)}function b0(t){if(t.propertyName==="value"&&Ac(ma)){var e=[];w0(e,ma,t,Yd(t)),s0(ay,e)}}function cy(t,e,n){t==="focusin"?(Tp(),ta=e,ma=n,ta.attachEvent("onpropertychange",b0)):t==="focusout"&&Tp()}function uy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(ma)}function hy(t,e){if(t==="click")return Ac(e)}function dy(t,e){if(t==="input"||t==="change")return Ac(e)}function fy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mi=typeof Object.is=="function"?Object.is:fy;function ga(t,e){if(mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ju.call(e,r)||!mi(t[r],e[r]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,e){var n=bp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function A0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C0(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function py(t){var e=C0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A0(n.ownerDocument.documentElement,n)){if(i!==null&&rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ap(n,s);var o=Ap(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var my=Vi&&"documentMode"in document&&11>=document.documentMode,Us=null,vh=null,na=null,_h=!1;function Cp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||Us==null||Us!==jl(i)||(i=Us,"selectionStart"in i&&rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&ga(na,i)||(na=i,i=Kl(vh,"onSelect"),0<i.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},nu={},R0={};Vi&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Cc(t){if(nu[t])return nu[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R0)return nu[t]=e[n];return t}var P0=Cc("animationend"),N0=Cc("animationiteration"),L0=Cc("animationstart"),D0=Cc("transitionend"),I0=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){I0.set(t,e),us(e,[t])}for(var iu=0;iu<Rp.length;iu++){var ru=Rp[iu],gy=ru.toLowerCase(),xy=ru[0].toUpperCase()+ru.slice(1);Nr(gy,"on"+xy)}Nr(P0,"onAnimationEnd");Nr(N0,"onAnimationIteration");Nr(L0,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(D0,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Pp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,g_(i,e,void 0,t),t.currentTarget=null}function U0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pp(r,a,c),s=l}}}if(Xl)throw t=ph,Xl=!1,ph=null,t}function St(t,e){var n=e[wh];n===void 0&&(n=e[wh]=new Set);var i=t+"__bubble";n.has(i)||(k0(e,t,2,!1),n.add(i))}function su(t,e,n){var i=0;e&&(i|=4),k0(n,t,i,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[Va]){t[Va]=!0,Vg.forEach(function(n){n!=="selectionchange"&&(vy.has(n)||su(n,!1,t),su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,su("selectionchange",!1,e))}}function k0(t,e,n,i){switch(_0(e)){case 1:var r=L_;break;case 4:r=D_;break;default:r=Qd}n=r.bind(null,e,n,t),r=void 0,!fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ou(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}s0(function(){var c=s,u=Yd(n),d=[];e:{var f=I0.get(t);if(f!==void 0){var m=ef,_=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":m=Y_;break;case"focusin":_="focus",m=Jc;break;case"focusout":_="blur",m=Jc;break;case"beforeblur":case"afterblur":m=Jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=K_;break;case P0:case N0:case L0:m=z_;break;case D0:m=J_;break;case"scroll":m=I_;break;case"wheel":m=ty;break;case"copy":case"cut":case"paste":m=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=yp}var M=(e&4)!==0,g=!M&&t==="scroll",h=M?f!==null?f+"Capture":null:f;M=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ha(v,h),S!=null&&M.push(va(v,S,x)))),g)break;v=v.return}0<M.length&&(f=new m(f,_,null,n,u),d.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==hh&&(_=n.relatedTarget||n.fromElement)&&(Yr(_)||_[ji]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Yr(_):null,_!==null&&(g=hs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(M=vp,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=yp,S="onPointerLeave",h="onPointerEnter",v="pointer"),g=m==null?f:Fs(m),x=_==null?f:Fs(_),f=new M(S,v+"leave",m,n,u),f.target=g,f.relatedTarget=x,S=null,Yr(u)===c&&(M=new M(h,v+"enter",_,n,u),M.target=x,M.relatedTarget=g,S=M),g=S,m&&_)t:{for(M=m,h=_,v=0,x=M;x;x=ms(x))v++;for(x=0,S=h;S;S=ms(S))x++;for(;0<v-x;)M=ms(M),v--;for(;0<x-v;)h=ms(h),x--;for(;v--;){if(M===h||h!==null&&M===h.alternate)break t;M=ms(M),h=ms(h)}M=null}else M=null;m!==null&&Np(d,f,m,M,!1),_!==null&&g!==null&&Np(d,g,_,M,!0)}}e:{if(f=c?Fs(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var P=ly;else if(Ep(f))if(T0)P=dy;else{P=uy;var A=cy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=hy);if(P&&(P=P(t,c))){w0(d,P,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&oh(f,"number",f.value)}switch(A=c?Fs(c):window,t){case"focusin":(Ep(A)||A.contentEditable==="true")&&(Us=A,vh=c,na=null);break;case"focusout":na=vh=Us=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,Cp(d,n,u);break;case"selectionchange":if(my)break;case"keydown":case"keyup":Cp(d,n,u)}var E;if(nf)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Is?S0(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(M0&&n.locale!=="ko"&&(Is||C!=="onCompositionStart"?C==="onCompositionEnd"&&Is&&(E=y0()):(fr=u,Jd="value"in fr?fr.value:fr.textContent,Is=!0)),A=Kl(c,C),0<A.length&&(C=new _p(C,t,null,n,u),d.push({event:C,listeners:A}),E?C.data=E:(E=E0(n),E!==null&&(C.data=E)))),(E=iy?ry(t,n):sy(t,n))&&(c=Kl(c,"onBeforeInput"),0<c.length&&(u=new _p("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}U0(d,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(va(t,s,r)),s=ha(t,e),s!=null&&i.push(va(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Np(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(n,s),l!=null&&o.unshift(va(n,l,a))):r||(l=ha(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _y=/\r\n?/g,yy=/\u0000|\uFFFD/g;function Lp(t){return(typeof t=="string"?t:""+t).replace(_y,`
`).replace(yy,"")}function ja(t,e,n){if(e=Lp(e),Lp(t)!==e&&n)throw Error(re(425))}function Ql(){}var yh=null,Mh=null;function Sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(t){return Dp.resolve(null).then(t).catch(Ey)}:Eh;function Ey(t){setTimeout(function(){throw t})}function au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Mo,_a="__reactProps$"+Mo,ji="__reactContainer$"+Mo,wh="__reactEvents$"+Mo,wy="__reactListeners$"+Mo,Ty="__reactHandles$"+Mo;function Yr(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ip(t);t!==null;){if(n=t[Mi])return n;t=Ip(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[Mi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Rc(t){return t[_a]||null}var Th=[],Os=-1;function Lr(t){return{current:t}}function wt(t){0>Os||(t.current=Th[Os],Th[Os]=null,Os--)}function yt(t,e){Os++,Th[Os]=t.current,t.current=e}var br={},dn=Lr(br),Tn=Lr(!1),is=br;function oo(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function Jl(){wt(Tn),wt(dn)}function Up(t,e,n){if(dn.current!==br)throw Error(re(168));yt(dn,e),yt(Tn,n)}function F0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,c_(t)||"Unknown",r));return Rt({},n,i)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,is=dn.current,yt(dn,t),yt(Tn,Tn.current),!0}function kp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=F0(t,e,is),i.__reactInternalMemoizedMergedChildContext=t,wt(Tn),wt(dn),yt(dn,t)):wt(Tn),yt(Tn,n)}var Fi=null,Pc=!1,lu=!1;function O0(t){Fi===null?Fi=[t]:Fi.push(t)}function by(t){Pc=!0,O0(t)}function Dr(){if(!lu&&Fi!==null){lu=!0;var t=0,e=pt;try{var n=Fi;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Fi=null,Pc=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(t+1)),c0(Zd,Dr),r}finally{pt=e,lu=!1}}return null}var zs=[],Bs=0,tc=null,nc=0,Yn=[],Zn=0,rs=null,zi=1,Bi="";function Gr(t,e){zs[Bs++]=nc,zs[Bs++]=tc,tc=t,nc=e}function z0(t,e,n){Yn[Zn++]=zi,Yn[Zn++]=Bi,Yn[Zn++]=rs,rs=t;var i=zi;t=Bi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-di(e)+r|n<<r|i,Bi=s+t}else zi=1<<s|n<<r|i,Bi=t}function sf(t){t.return!==null&&(Gr(t,1),z0(t,1,0))}function of(t){for(;t===tc;)tc=zs[--Bs],zs[Bs]=null,nc=zs[--Bs],zs[Bs]=null;for(;t===rs;)rs=Yn[--Zn],Yn[Zn]=null,Bi=Yn[--Zn],Yn[Zn]=null,zi=Yn[--Zn],Yn[Zn]=null}var Fn=null,kn=null,Tt=!1,li=null;function B0(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,kn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:zi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,kn=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(Tt){var e=kn;if(e){var n=e;if(!Fp(t,e)){if(bh(t))throw Error(re(418));e=vr(n.nextSibling);var i=Fn;e&&Fp(t,e)?B0(i,n):(t.flags=t.flags&-4097|2,Tt=!1,Fn=t)}}else{if(bh(t))throw Error(re(418));t.flags=t.flags&-4097|2,Tt=!1,Fn=t}}}function Op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Wa(t){if(t!==Fn)return!1;if(!Tt)return Op(t),Tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sh(t.type,t.memoizedProps)),e&&(e=kn)){if(bh(t))throw H0(),Error(re(418));for(;e;)B0(t,e),e=vr(e.nextSibling)}if(Op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=Fn?vr(t.stateNode.nextSibling):null;return!0}function H0(){for(var t=kn;t;)t=vr(t.nextSibling)}function ao(){kn=Fn=null,Tt=!1}function af(t){li===null?li=[t]:li.push(t)}var Ay=Yi.ReactCurrentBatchConfig;function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Xa(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zp(t){var e=t._init;return e(t._payload)}function G0(t){function e(h,v){if(t){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Sr(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,S){return v===null||v.tag!==6?(v=mu(x,h.mode,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,S){var P=x.type;return P===Ds?u(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===or&&zp(P)===v.type)?(S=r(v,x.props),S.ref=Io(h,v,x),S.return=h,S):(S=Il(x.type,x.key,x.props,null,h.mode,S),S.ref=Io(h,v,x),S.return=h,S)}function c(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=gu(x,h.mode,S),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function u(h,v,x,S,P){return v===null||v.tag!==7?(v=ts(x,h.mode,S,P),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mu(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:return x=Il(v.type,v.key,v.props,null,h.mode,x),x.ref=Io(h,null,v),x.return=h,x;case Ls:return v=gu(v,h.mode,x),v.return=h,v;case or:var S=v._init;return d(h,S(v._payload),x)}if(Yo(v)||Ro(v))return v=ts(v,h.mode,x,null),v.return=h,v;Xa(h,v)}return null}function f(h,v,x,S){var P=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:return x.key===P?l(h,v,x,S):null;case Ls:return x.key===P?c(h,v,x,S):null;case or:return P=x._init,f(h,v,P(x._payload),S)}if(Yo(x)||Ro(x))return P!==null?null:u(h,v,x,S,null);Xa(h,x)}return null}function m(h,v,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(v,h,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ua:return h=h.get(S.key===null?x:S.key)||null,l(v,h,S,P);case Ls:return h=h.get(S.key===null?x:S.key)||null,c(v,h,S,P);case or:var A=S._init;return m(h,v,x,A(S._payload),P)}if(Yo(S)||Ro(S))return h=h.get(x)||null,u(v,h,S,P,null);Xa(v,S)}return null}function _(h,v,x,S){for(var P=null,A=null,E=v,C=v=0,O=null;E!==null&&C<x.length;C++){E.index>C?(O=E,E=null):O=E.sibling;var y=f(h,E,x[C],S);if(y===null){E===null&&(E=O);break}t&&E&&y.alternate===null&&e(h,E),v=s(y,v,C),A===null?P=y:A.sibling=y,A=y,E=O}if(C===x.length)return n(h,E),Tt&&Gr(h,C),P;if(E===null){for(;C<x.length;C++)E=d(h,x[C],S),E!==null&&(v=s(E,v,C),A===null?P=E:A.sibling=E,A=E);return Tt&&Gr(h,C),P}for(E=i(h,E);C<x.length;C++)O=m(E,h,C,x[C],S),O!==null&&(t&&O.alternate!==null&&E.delete(O.key===null?C:O.key),v=s(O,v,C),A===null?P=O:A.sibling=O,A=O);return t&&E.forEach(function(T){return e(h,T)}),Tt&&Gr(h,C),P}function M(h,v,x,S){var P=Ro(x);if(typeof P!="function")throw Error(re(150));if(x=P.call(x),x==null)throw Error(re(151));for(var A=P=null,E=v,C=v=0,O=null,y=x.next();E!==null&&!y.done;C++,y=x.next()){E.index>C?(O=E,E=null):O=E.sibling;var T=f(h,E,y.value,S);if(T===null){E===null&&(E=O);break}t&&E&&T.alternate===null&&e(h,E),v=s(T,v,C),A===null?P=T:A.sibling=T,A=T,E=O}if(y.done)return n(h,E),Tt&&Gr(h,C),P;if(E===null){for(;!y.done;C++,y=x.next())y=d(h,y.value,S),y!==null&&(v=s(y,v,C),A===null?P=y:A.sibling=y,A=y);return Tt&&Gr(h,C),P}for(E=i(h,E);!y.done;C++,y=x.next())y=m(E,h,C,y.value,S),y!==null&&(t&&y.alternate!==null&&E.delete(y.key===null?C:y.key),v=s(y,v,C),A===null?P=y:A.sibling=y,A=y);return t&&E.forEach(function(z){return e(h,z)}),Tt&&Gr(h,C),P}function g(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===Ds&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ua:e:{for(var P=x.key,A=v;A!==null;){if(A.key===P){if(P=x.type,P===Ds){if(A.tag===7){n(h,A.sibling),v=r(A,x.props.children),v.return=h,h=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===or&&zp(P)===A.type){n(h,A.sibling),v=r(A,x.props),v.ref=Io(h,A,x),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}x.type===Ds?(v=ts(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=Il(x.type,x.key,x.props,null,h.mode,S),S.ref=Io(h,v,x),S.return=h,h=S)}return o(h);case Ls:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=gu(x,h.mode,S),v.return=h,h=v}return o(h);case or:return A=x._init,g(h,v,A(x._payload),S)}if(Yo(x))return _(h,v,x,S);if(Ro(x))return M(h,v,x,S);Xa(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,x),v.return=h,h=v):(n(h,v),v=mu(x,h.mode,S),v.return=h,h=v),o(h)):n(h,v)}return g}var lo=G0(!0),V0=G0(!1),ic=Lr(null),rc=null,Hs=null,lf=null;function cf(){lf=Hs=rc=null}function uf(t){var e=ic.current;wt(ic),t._currentValue=e}function Ch(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){rc=t,lf=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function Jn(t){var e=t._currentValue;if(lf!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(rc===null)throw Error(re(308));Hs=t,rc.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Zr=null;function hf(t){Zr===null?Zr=[t]:Zr.push(t)}function j0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ot&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qd(t,n)}}function Bp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,M=a;switch(f=e,m=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){d=_.call(m,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break e;d=Rt({},d,f);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);os|=o,t.lanes=o,t.memoizedState=d}}function Hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Na={},wi=Lr(Na),ya=Lr(Na),Ma=Lr(Na);function qr(t){if(t===Na)throw Error(re(174));return t}function ff(t,e){switch(yt(Ma,e),yt(ya,t),yt(wi,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}wt(wi),yt(wi,e)}function co(){wt(wi),wt(ya),wt(Ma)}function X0(t){qr(Ma.current);var e=qr(wi.current),n=lh(e,t.type);e!==n&&(yt(ya,t),yt(wi,n))}function pf(t){ya.current===t&&(wt(wi),wt(ya))}var At=Lr(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cu=[];function mf(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var Rl=Yi.ReactCurrentDispatcher,uu=Yi.ReactCurrentBatchConfig,ss=0,Ct=null,Gt=null,Zt=null,ac=!1,ia=!1,Sa=0,Cy=0;function sn(){throw Error(re(321))}function gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mi(t[n],e[n]))return!1;return!0}function xf(t,e,n,i,r,s){if(ss=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?Ly:Dy,t=n(i,r),ia){s=0;do{if(ia=!1,Sa=0,25<=s)throw Error(re(301));s+=1,Zt=Gt=null,e.updateQueue=null,Rl.current=Iy,t=n(i,r)}while(ia)}if(Rl.current=lc,e=Gt!==null&&Gt.next!==null,ss=0,Zt=Gt=Ct=null,ac=!1,e)throw Error(re(300));return t}function vf(){var t=Sa!==0;return Sa=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ct.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function ei(){if(Gt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=Zt===null?Ct.memoizedState:Zt.next;if(e!==null)Zt=e,Gt=t;else{if(t===null)throw Error(re(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Zt===null?Ct.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function Ea(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=ei(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ss&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ct.lanes|=u,os|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,os|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function du(t){var e=ei(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $0(){}function Y0(t,e){var n=Ct,i=ei(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,_f(K0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,wa(9,q0.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(re(349));ss&30||Z0(n,e,r)}return r}function Z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q0(t,e,n,i){e.value=n,e.getSnapshot=i,Q0(e)&&J0(t)}function K0(t,e,n){return n(function(){Q0(e)&&J0(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mi(t,n)}catch{return!0}}function J0(t){var e=Wi(t,1);e!==null&&fi(e,t,1,-1)}function Gp(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=Ny.bind(null,Ct,t),[e.memoizedState,t]}function wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ex(){return ei().memoizedState}function Pl(t,e,n,i){var r=_i();Ct.flags|=t,r.memoizedState=wa(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=ei();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var o=Gt.memoizedState;if(s=o.destroy,i!==null&&gf(i,o.deps)){r.memoizedState=wa(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=wa(1|e,n,s,i)}function Vp(t,e){return Pl(8390656,8,t,e)}function _f(t,e){return Nc(2048,8,t,e)}function tx(t,e){return Nc(4,2,t,e)}function nx(t,e){return Nc(4,4,t,e)}function ix(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rx(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,ix.bind(null,e,t),n)}function yf(){}function sx(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ox(t,e){var n=ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ax(t,e,n){return ss&21?(mi(n,e)||(n=d0(),Ct.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function Ry(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=uu.transition;uu.transition={};try{t(!1),e()}finally{pt=n,uu.transition=i}}function lx(){return ei().memoizedState}function Py(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},cx(t))ux(e,n);else if(n=j0(t,e,n,i),n!==null){var r=mn();fi(n,t,i,r),hx(n,e,i)}}function Ny(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(cx(t))ux(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=j0(t,e,r,i),n!==null&&(r=mn(),fi(n,t,i,r),hx(n,e,i))}}function cx(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function ux(t,e){ia=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qd(t,n)}}var lc={readContext:Jn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},Ly={readContext:Jn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:Jn,useEffect:Vp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,ix.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Py.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:Gp,useDebugValue:yf,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Gp(!1),e=t[0];return t=Ry.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=_i();if(Tt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Kt===null)throw Error(re(349));ss&30||Z0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Vp(K0.bind(null,i,s,t),[t]),i.flags|=2048,wa(9,q0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=Kt.identifierPrefix;if(Tt){var n=Bi,i=zi;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dy={readContext:Jn,useCallback:sx,useContext:Jn,useEffect:_f,useImperativeHandle:rx,useInsertionEffect:tx,useLayoutEffect:nx,useMemo:ox,useReducer:hu,useRef:ex,useState:function(){return hu(Ea)},useDebugValue:yf,useDeferredValue:function(t){var e=ei();return ax(e,Gt.memoizedState,t)},useTransition:function(){var t=hu(Ea)[0],e=ei().memoizedState;return[t,e]},useMutableSource:$0,useSyncExternalStore:Y0,useId:lx,unstable_isNewReconciler:!1},Iy={readContext:Jn,useCallback:sx,useContext:Jn,useEffect:_f,useImperativeHandle:rx,useInsertionEffect:tx,useLayoutEffect:nx,useMemo:ox,useReducer:du,useRef:ex,useState:function(){return du(Ea)},useDebugValue:yf,useDeferredValue:function(t){var e=ei();return Gt===null?e.memoizedState=t:ax(e,Gt.memoizedState,t)},useTransition:function(){var t=du(Ea)[0],e=ei().memoizedState;return[t,e]},useMutableSource:$0,useSyncExternalStore:Y0,useId:lx,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Mr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(fi(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Mr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(fi(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=Mr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(fi(e,t,i,n),Cl(e,t,i))}};function jp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function dx(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Jn(s):(r=bn(e)?is:dn.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Ph(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Jn(s):(s=bn(e)?is:dn.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",i=e;do n+=l_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uy=typeof WeakMap=="function"?WeakMap:Map;function fx(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uc||(uc=!0,Hh=i),Nh(t,e)},n}function px(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nh(t,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Uy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Zy.bind(null,t,e,n),e.then(t,t))}function $p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var ky=Yi.ReactCurrentOwner,En=!1;function pn(t,e,n,i){e.child=t===null?V0(e,null,n,i):lo(e,t.child,n,i)}function Zp(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=xf(t,e,n,i,s,r),n=vf(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(Tt&&n&&sf(e),e.flags|=1,pn(t,e,i,r),e.child)}function qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mx(t,e,s,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function mx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return Lh(t,e,n,i,r)}function gx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Vs,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(Vs,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(Vs,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(Vs,Dn),Dn|=i;return pn(t,e,r,n),e.child}function xx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,i,r){var s=bn(n)?is:dn.current;return s=oo(e,s),Qs(e,r),n=xf(t,e,n,i,s,r),i=vf(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(Tt&&i&&sf(e),e.flags|=1,pn(t,e,n,r),e.child)}function Kp(t,e,n,i,r){if(bn(n)){var s=!0;ec(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Nl(t,e),dx(e,n,i),Ph(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Jn(c):(c=bn(n)?is:dn.current,c=oo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Wp(e,o,i,c),ar=!1;var f=e.memoizedState;o.state=f,sc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Tn.current||ar?(typeof u=="function"&&(Rh(e,n,u,i),l=e.memoizedState),(a=ar||jp(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,W0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jn(l):(l=bn(n)?is:dn.current,l=oo(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Wp(e,o,i,l),ar=!1,f=e.memoizedState,o.state=f,sc(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Tn.current||ar?(typeof m=="function"&&(Rh(e,n,m,i),_=e.memoizedState),(c=ar||jp(e,n,c,i,f,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Dh(t,e,n,i,s,r)}function Dh(t,e,n,i,r,s){xx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&kp(e,n,!1),Xi(t,e,s);i=e.stateNode,ky.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):pn(t,e,a,s),e.memoizedState=i.state,r&&kp(e,n,!0),e.child}function vx(t){var e=t.stateNode;e.pendingContext?Up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Up(t,e.context,!1),ff(t,e.containerInfo)}function Qp(t,e,n,i,r){return ao(),af(r),e.flags|=256,pn(t,e,n,i),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function _x(t,e,n){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(At,r&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,i,0,null),t=ts(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=Ih,t):Mf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Fy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=ts(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Mf(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,i){return i!==null&&af(i),lo(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=fu(Error(re(422))),$a(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return $a(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=fu(s,i,void 0),$a(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=Kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),fi(i,t,r,-1))}return Af(),i=fu(Error(re(421))),$a(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,kn=vr(r.nextSibling),Fn=e,Tt=!0,li=null,t!==null&&(Yn[Zn++]=zi,Yn[Zn++]=Bi,Yn[Zn++]=rs,zi=t.id,Bi=t.overflow,rs=e),e=Mf(e,i.children),e.flags|=4096,e)}function Jp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ch(t.return,e,n)}function pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function yx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jp(t,n,e);else if(t.tag===19)Jp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pu(e,!0,n,null,s);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Oy(t,e,n){switch(e.tag){case 3:vx(e),ao();break;case 5:X0(e);break;case 1:bn(e.type)&&ec(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?_x(t,e,n):(yt(At,At.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);yt(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return yx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,gx(t,e,n)}return Xi(t,e,n)}var Mx,kh,Sx,Ex;Mx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kh=function(){};Sx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(wi.current);var s=null;switch(n){case"input":r=rh(t,r),i=rh(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=ah(t,r),i=ah(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}ch(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ex=function(t,e,n,i){n!==i&&(e.flags|=4)};function Uo(t,e){if(!Tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zy(t,e,n){var i=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return bn(e.type)&&Jl(),on(e),null;case 3:return i=e.stateNode,co(),wt(Tn),wt(dn),mf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(jh(li),li=null))),kh(t,e),on(e),null;case 5:pf(e);var r=qr(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)Sx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return on(e),null}if(t=qr(wi.current),Wa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[_a]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)St(qo[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":lp(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":up(i,s),St("invalid",i)}ch(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ja(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ja(i.textContent,a,t),r=["children",""+a]):ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&St("scroll",i)}switch(n){case"input":ka(i),cp(i,s,!0);break;case"textarea":ka(i),hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Mi]=e,t[_a]=i,Mx(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)St(qo[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":lp(t,i),r=rh(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),St("invalid",t);break;case"textarea":up(t,i),r=ah(t,i),St("invalid",t);break;default:r=i}ch(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?e0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ua(t,l):typeof l=="number"&&ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&St("scroll",t):l!=null&&jd(t,s,l,o))}switch(n){case"input":ka(t),cp(t,i,!1);break;case"textarea":ka(t),hp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)Ex(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=qr(Ma.current),qr(wi.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return on(e),null;case 13:if(wt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Tt&&kn!==null&&e.mode&1&&!(e.flags&128))H0(),ao(),e.flags|=98560,s=!1;else if(s=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Mi]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else li!==null&&(jh(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?Vt===0&&(Vt=3):Af())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return co(),kh(t,e),t===null&&xa(e.stateNode.containerInfo),on(e),null;case 10:return uf(e.type._context),on(e),null;case 17:return bn(e.type)&&Jl(),on(e),null;case 19:if(wt(At),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Uo(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,Uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>ho&&(e.flags|=128,i=!0,Uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Tt)return on(e),null}else 2*kt()-s.renderingStartTime>ho&&n!==1073741824&&(e.flags|=128,i=!0,Uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=At.current,yt(At,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return bf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function By(t,e){switch(of(e),e.tag){case 1:return bn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),wt(Tn),wt(dn),mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pf(e),null;case 13:if(wt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(At),null;case 4:return co(),null;case 10:return uf(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var Ya=!1,cn=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function Fh(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var em=!1;function Gy(t,e){if(yh=Zl,t=C0(),rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},Zl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:oi(e.type,M),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Lt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return _=em,em=!1,_}function ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fh(e,n,s)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Oh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wx(t){var e=t.alternate;e!==null&&(t.alternate=null,wx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[_a],delete e[wh],delete e[wy],delete e[Ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tx(t){return t.tag===5||t.tag===3||t.tag===4}function tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}var tn=null,ai=!1;function Qi(t,e,n){for(n=n.child;n!==null;)bx(t,e,n),n=n.sibling}function bx(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:cn||Gs(n,e);case 6:var i=tn,r=ai;tn=null,Qi(t,e,n),tn=i,ai=r,tn!==null&&(ai?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(ai?(t=tn,n=n.stateNode,t.nodeType===8?au(t.parentNode,n):t.nodeType===1&&au(t,n),pa(t)):au(tn,n.stateNode));break;case 4:i=tn,r=ai,tn=n.stateNode.containerInfo,ai=!0,Qi(t,e,n),tn=i,ai=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fh(n,e,o),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!cn&&(Gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Lt(n,e,a)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Qi(t,e,n),cn=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hy),e.forEach(function(i){var r=Ky.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,ai=!1;break e;case 3:tn=a.stateNode.containerInfo,ai=!0;break e;case 4:tn=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(tn===null)throw Error(re(160));bx(s,o,r),tn=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ax(e,t),e=e.sibling}function Ax(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),vi(t),i&4){try{ra(3,t,t.return),Dc(3,t)}catch(M){Lt(t,t.return,M)}try{ra(5,t,t.return)}catch(M){Lt(t,t.return,M)}}break;case 1:ti(e,t),vi(t),i&512&&n!==null&&Gs(n,n.return);break;case 5:if(ti(e,t),vi(t),i&512&&n!==null&&Gs(n,n.return),t.flags&32){var r=t.stateNode;try{ua(r,"")}catch(M){Lt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zg(r,s),uh(a,o);var c=uh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?e0(r,d):u==="dangerouslySetInnerHTML"?Qg(r,d):u==="children"?ua(r,d):jd(r,u,d,c)}switch(a){case"input":sh(r,s);break;case"textarea":qg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ys(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ys(r,!!s.multiple,s.defaultValue,!0):Ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[_a]=s}catch(M){Lt(t,t.return,M)}}break;case 6:if(ti(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Lt(t,t.return,M)}}break;case 3:if(ti(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(M){Lt(t,t.return,M)}break;case 4:ti(e,t),vi(t);break;case 13:ti(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wf=kt())),i&4&&nm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||u,ti(e,t),cn=c):ti(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(d=ve=u;ve!==null;){switch(f=ve,m=f.child,f.tag){case 0:case 11:case 14:case 15:ra(4,f,f.return);break;case 1:Gs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Lt(i,n,M)}}break;case 5:Gs(f,f.return);break;case 22:if(f.memoizedState!==null){rm(d);continue}}m!==null?(m.return=f,ve=m):rm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jg("display",o))}catch(M){Lt(t,t.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Lt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ti(e,t),vi(t),i&4&&nm(t);break;case 21:break;default:ti(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ua(r,""),i.flags&=-33);var s=tm(t);Bh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=tm(t);zh(t,a,o);break;default:throw Error(re(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vy(t,e,n){ve=t,Cx(t)}function Cx(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ya;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=Ya;var c=cn;if(Ya=o,(cn=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?sm(r):l!==null?(l.return=o,ve=l):sm(r);for(;s!==null;)ve=s,Cx(s),s=s.sibling;ve=r,Ya=a,cn=c}im(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):im(t)}}function im(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}cn||e.flags&512&&Oh(e)}catch(f){Lt(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function rm(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function sm(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{Oh(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{Oh(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var jy=Math.ceil,cc=Yi.ReactCurrentDispatcher,Sf=Yi.ReactCurrentOwner,Kn=Yi.ReactCurrentBatchConfig,ot=0,Kt=null,Bt=null,nn=0,Dn=0,Vs=Lr(0),Vt=0,Ta=null,os=0,Ic=0,Ef=0,sa=null,Sn=null,wf=0,ho=1/0,ki=null,uc=!1,Hh=null,yr=null,Za=!1,pr=null,hc=0,oa=0,Gh=null,Ll=-1,Dl=0;function mn(){return ot&6?kt():Ll!==-1?Ll:Ll=kt()}function Mr(t){return t.mode&1?ot&2&&nn!==0?nn&-nn:Ay.transition!==null?(Dl===0&&(Dl=d0()),Dl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:_0(t.type)),t):1}function fi(t,e,n,i){if(50<oa)throw oa=0,Gh=null,Error(re(185));Ca(t,n,i),(!(ot&2)||t!==Kt)&&(t===Kt&&(!(ot&2)&&(Ic|=n),Vt===4&&hr(t,nn)),An(t,i),n===1&&ot===0&&!(e.mode&1)&&(ho=kt()+500,Pc&&Dr()))}function An(t,e){var n=t.callbackNode;A_(t,e);var i=Yl(t,t===Kt?nn:0);if(i===0)n!==null&&pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pp(n),e===1)t.tag===0?by(om.bind(null,t)):O0(om.bind(null,t)),Sy(function(){!(ot&6)&&Dr()}),n=null;else{switch(f0(i)){case 1:n=Zd;break;case 4:n=u0;break;case 16:n=$l;break;case 536870912:n=h0;break;default:n=$l}n=kx(n,Rx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rx(t,e){if(Ll=-1,Dl=0,ot&6)throw Error(re(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=Yl(t,t===Kt?nn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=ot;ot|=2;var s=Nx();(Kt!==t||nn!==e)&&(ki=null,ho=kt()+500,es(t,e));do try{$y();break}catch(a){Px(t,a)}while(!0);cf(),cc.current=s,ot=r,Bt!==null?e=0:(Kt=null,nn=0,e=Vt)}if(e!==0){if(e===2&&(r=mh(t),r!==0&&(i=r,e=Vh(t,r))),e===1)throw n=Ta,es(t,0),hr(t,i),An(t,kt()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Wy(r)&&(e=dc(t,i),e===2&&(s=mh(t),s!==0&&(i=s,e=Vh(t,s))),e===1))throw n=Ta,es(t,0),hr(t,i),An(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Vr(t,Sn,ki);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=wf+500-kt(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Eh(Vr.bind(null,t,Sn,ki),e);break}Vr(t,Sn,ki);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jy(i/1960))-i,10<i){t.timeoutHandle=Eh(Vr.bind(null,t,Sn,ki),i);break}Vr(t,Sn,ki);break;case 5:Vr(t,Sn,ki);break;default:throw Error(re(329))}}}return An(t,kt()),t.callbackNode===n?Rx.bind(null,t):null}function Vh(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(es(t,e).flags|=256),t=dc(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&jh(e)),t}function jh(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function Wy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Ef,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function om(t){if(ot&6)throw Error(re(327));Js();var e=Yl(t,0);if(!(e&1))return An(t,kt()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=mh(t);i!==0&&(e=i,n=Vh(t,i))}if(n===1)throw n=Ta,es(t,0),hr(t,e),An(t,kt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,Sn,ki),An(t,kt()),null}function Tf(t,e){var n=ot;ot|=1;try{return t(e)}finally{ot=n,ot===0&&(ho=kt()+500,Pc&&Dr())}}function as(t){pr!==null&&pr.tag===0&&!(ot&6)&&Js();var e=ot;ot|=1;var n=Kn.transition,i=pt;try{if(Kn.transition=null,pt=1,t)return t()}finally{pt=i,Kn.transition=n,ot=e,!(ot&6)&&Dr()}}function bf(){Dn=Vs.current,wt(Vs)}function es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,My(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:co(),wt(Tn),wt(dn),mf();break;case 5:pf(i);break;case 4:co();break;case 13:wt(At);break;case 19:wt(At);break;case 10:uf(i.type._context);break;case 22:case 23:bf()}n=n.return}if(Kt=t,Bt=t=Sr(t.current,null),nn=Dn=e,Vt=0,Ta=null,Ef=Ic=os=0,Sn=sa=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Zr=null}return t}function Px(t,e){do{var n=Bt;try{if(cf(),Rl.current=lc,ac){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ac=!1}if(ss=0,Zt=Gt=Ct=null,ia=!1,Sa=0,Sf.current=null,n===null||n.return===null){Vt=1,Ta=e,Bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=$p(o);if(m!==null){m.flags&=-257,Yp(m,o,a,s,e),m.mode&1&&Xp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){Xp(s,c,e),Af();break e}l=Error(re(426))}}else if(Tt&&a.mode&1){var g=$p(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Yp(g,o,a,s,e),af(uo(l,a));break e}}s=l=uo(l,a),Vt!==4&&(Vt=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=fx(s,l,e);Bp(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(yr===null||!yr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=px(s,a,e);Bp(s,S);break e}}s=s.return}while(s!==null)}Dx(n)}catch(P){e=P,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function Nx(){var t=cc.current;return cc.current=lc,t===null?lc:t}function Af(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Kt===null||!(os&268435455)&&!(Ic&268435455)||hr(Kt,nn)}function dc(t,e){var n=ot;ot|=2;var i=Nx();(Kt!==t||nn!==e)&&(ki=null,es(t,e));do try{Xy();break}catch(r){Px(t,r)}while(!0);if(cf(),ot=n,cc.current=i,Bt!==null)throw Error(re(261));return Kt=null,nn=0,Vt}function Xy(){for(;Bt!==null;)Lx(Bt)}function $y(){for(;Bt!==null&&!v_();)Lx(Bt)}function Lx(t){var e=Ux(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?Dx(t):Bt=e,Sf.current=null}function Dx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=By(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Bt=null;return}}else if(n=zy(n,e,Dn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Vt===0&&(Vt=5)}function Vr(t,e,n){var i=pt,r=Kn.transition;try{Kn.transition=null,pt=1,Yy(t,e,n,i)}finally{Kn.transition=r,pt=i}return null}function Yy(t,e,n,i){do Js();while(pr!==null);if(ot&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(t,s),t===Kt&&(Bt=Kt=null,nn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,kx($l,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var o=pt;pt=1;var a=ot;ot|=4,Sf.current=null,Gy(t,n),Ax(n,t),py(Mh),Zl=!!yh,Mh=yh=null,t.current=n,Vy(n),__(),ot=a,pt=o,Kn.transition=s}else t.current=n;if(Za&&(Za=!1,pr=t,hc=r),s=t.pendingLanes,s===0&&(yr=null),S_(n.stateNode),An(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,t=Hh,Hh=null,t;return hc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===Gh?oa++:(oa=0,Gh=t):oa=0,Dr(),null}function Js(){if(pr!==null){var t=f0(hc),e=Kn.transition,n=pt;try{if(Kn.transition=null,pt=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,hc=0,ot&6)throw Error(re(331));var r=ot;for(ot|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:ra(8,u,s)}var d=u.child;if(d!==null)d.return=u,ve=d;else for(;ve!==null;){u=ve;var f=u.sibling,m=u.return;if(wx(u),u===c){ve=null;break}if(f!==null){f.return=m,ve=f;break}ve=m}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var v=t.current;for(ve=v;ve!==null;){o=ve;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ve=x;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(P){Lt(a,a.return,P)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(ot=r,Dr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{pt=n,Kn.transition=e}}return!1}function am(t,e,n){e=uo(n,e),e=fx(t,e,1),t=_r(t,e,1),e=mn(),t!==null&&(Ca(t,1,e),An(t,e))}function Lt(t,e,n){if(t.tag===3)am(t,t,n);else for(;e!==null;){if(e.tag===3){am(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yr===null||!yr.has(i))){t=uo(n,t),t=px(e,t,1),e=_r(e,t,1),t=mn(),e!==null&&(Ca(e,1,t),An(e,t));break}}e=e.return}}function Zy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(nn&n)===n&&(Vt===4||Vt===3&&(nn&130023424)===nn&&500>kt()-wf?es(t,0):Ef|=n),An(t,e)}function Ix(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=mn();t=Wi(t,e),t!==null&&(Ca(t,e,n),An(t,n))}function qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ix(t,n)}function Ky(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Ix(t,n)}var Ux;Ux=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,Oy(t,e,n);En=!!(t.flags&131072)}else En=!1,Tt&&e.flags&1048576&&z0(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(t,e),t=e.pendingProps;var r=oo(e,dn.current);Qs(e,n),r=xf(null,e,i,t,r,n);var s=vf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,df(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Ph(e,i,t,n),e=Dh(null,e,i,!0,s,n)):(e.tag=0,Tt&&s&&sf(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Jy(i),t=oi(i,t),r){case 0:e=Lh(null,e,i,t,n);break e;case 1:e=Kp(null,e,i,t,n);break e;case 11:e=Zp(null,e,i,t,n);break e;case 14:e=qp(null,e,i,oi(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Lh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Kp(t,e,i,r,n);case 3:e:{if(vx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,W0(t,e),sc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(re(423)),e),e=Qp(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(re(424)),e),e=Qp(t,e,i,n,r);break e}else for(kn=vr(e.stateNode.containerInfo.firstChild),Fn=e,Tt=!0,li=null,n=V0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=Xi(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return X0(e),t===null&&Ah(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sh(i,r)?o=null:s!==null&&Sh(i,s)&&(e.flags|=32),xx(t,e),pn(t,e,o,n),e.child;case 6:return t===null&&Ah(e),null;case 13:return _x(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Zp(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(ic,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!Tn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ch(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ch(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=Jn(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),qp(t,e,i,r,n);case 15:return mx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Nl(t,e),e.tag=1,bn(i)?(t=!0,ec(e)):t=!1,Qs(e,n),dx(e,i,r),Ph(e,i,r,n),Dh(null,e,i,!0,t,n);case 19:return yx(t,e,n);case 22:return gx(t,e,n)}throw Error(re(156,e.tag))};function kx(t,e){return c0(t,e)}function Qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new Qy(t,e,n,i)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jy(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===$d)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return ts(n.children,r,s,e);case Wd:o=8,r|=8;break;case eh:return t=qn(12,n,e,r|2),t.elementType=eh,t.lanes=s,t;case th:return t=qn(13,n,e,r),t.elementType=th,t.lanes=s,t;case nh:return t=qn(19,n,e,r),t.elementType=nh,t.lanes=s,t;case Xg:return Uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jg:o=10;break e;case Wg:o=9;break e;case Xd:o=11;break e;case $d:o=14;break e;case or:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ts(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=qn(22,t,i,e),t.elementType=Xg,t.lanes=n,t.stateNode={isHidden:!1},t}function mu(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function gu(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function e1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qc(0),this.expirationTimes=qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,i,r,s,o,a,l){return t=new e1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(s),t}function t1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Fx(t){if(!t)return br;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(bn(n))return F0(t,n,e)}return e}function Ox(t,e,n,i,r,s,o,a,l){return t=Rf(n,i,!0,t,r,s,o,a,l),t.context=Fx(null),n=t.current,i=mn(),r=Mr(n),s=Gi(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,Ca(t,r,i),An(t,i),t}function kc(t,e,n,i){var r=e.current,s=mn(),o=Mr(r);return n=Fx(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(fi(t,r,o,s),Cl(t,r,o)),o}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){lm(t,e),(t=t.alternate)&&lm(t,e)}function n1(){return null}var zx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}Fc.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));kc(t,e,null,null)};Fc.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;as(function(){kc(null,t,null,null)}),e[ji]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=g0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&v0(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cm(){}function i1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=fc(o);s.call(c)}}var o=Ox(e,i,t,0,null,!1,!1,"",cm);return t._reactRootContainer=o,t[ji]=o.current,xa(t.nodeType===8?t.parentNode:t),as(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=fc(l);a.call(c)}}var l=Rf(t,0,!1,null,null,!1,!1,"",cm);return t._reactRootContainer=l,t[ji]=l.current,xa(t.nodeType===8?t.parentNode:t),as(function(){kc(e,l,n,i)}),l}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=fc(o);a.call(l)}}kc(e,o,t,r)}else o=i1(n,e,t,r,i);return fc(o)}p0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(qd(e,n|1),An(e,kt()),!(ot&6)&&(ho=kt()+500,Dr()))}break;case 13:as(function(){var i=Wi(t,1);if(i!==null){var r=mn();fi(i,t,1,r)}}),Pf(t,1)}};Kd=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=mn();fi(e,t,134217728,n)}Pf(t,134217728)}};m0=function(t){if(t.tag===13){var e=Mr(t),n=Wi(t,e);if(n!==null){var i=mn();fi(n,t,e,i)}Pf(t,e)}};g0=function(){return pt};x0=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};dh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rc(i);if(!r)throw Error(re(90));Yg(i),sh(i,r)}}}break;case"textarea":qg(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};i0=Tf;r0=as;var r1={usingClientEntryPoint:!1,Events:[Pa,Fs,Rc,t0,n0,Tf]},ko={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s1={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a0(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||n1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Tc=qa.inject(s1),Ei=qa}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(re(200));return t1(t,e,null,n)};Bn.createRoot=function(t,e){if(!Lf(t))throw Error(re(299));var n=!1,i="",r=zx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,xa(t.nodeType===8?t.parentNode:t),new Nf(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=a0(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return as(t)};Bn.hydrate=function(t,e,n){if(!Oc(e))throw Error(re(200));return zc(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=zx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ox(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fc(e)};Bn.render=function(t,e,n){if(!Oc(e))throw Error(re(200));return zc(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!Oc(t))throw Error(re(40));return t._reactRootContainer?(as(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Bn.unstable_batchedUpdates=Tf;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Oc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return zc(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bx)}catch(t){console.error(t)}}Bx(),Bg.exports=Bn;var o1=Bg.exports,Hx,um=o1;Hx=um.createRoot,um.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="169",eo={ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a1=0,hm=1,l1=2,Gx=1,Vx=2,Ui=3,Ar=0,gn=1,Un=2,Er=0,to=1,Ws=2,dm=3,fm=4,c1=5,Wr=100,u1=101,h1=102,d1=103,f1=104,p1=200,m1=201,g1=202,x1=203,Wh=204,Xh=205,v1=206,_1=207,y1=208,M1=209,S1=210,E1=211,w1=212,T1=213,b1=214,$h=0,Yh=1,Zh=2,fo=3,qh=4,Kh=5,Qh=6,Jh=7,jx=0,A1=1,C1=2,wr=0,R1=1,P1=2,N1=3,Wx=4,L1=5,D1=6,I1=7,Xx=300,po=301,mo=302,ed=303,td=304,Bc=306,nd=1e3,Kr=1001,id=1002,wn=1003,U1=1004,Ka=1005,ci=1006,xu=1007,Qr=1008,$i=1009,$x=1010,Yx=1011,ba=1012,If=1013,ls=1014,Si=1015,La=1016,Uf=1017,kf=1018,go=1020,Zx=35902,qx=1021,Kx=1022,hi=1023,Qx=1024,Jx=1025,no=1026,xo=1027,Ff=1028,Of=1029,ev=1030,zf=1031,Bf=1033,Ul=33776,kl=33777,Fl=33778,Ol=33779,rd=35840,sd=35841,od=35842,ad=35843,ld=36196,cd=37492,ud=37496,hd=37808,dd=37809,fd=37810,pd=37811,md=37812,gd=37813,xd=37814,vd=37815,_d=37816,yd=37817,Md=37818,Sd=37819,Ed=37820,wd=37821,zl=36492,Td=36494,bd=36495,tv=36283,Ad=36284,Cd=36285,Rd=36286,k1=3200,F1=3201,nv=0,O1=1,dr="",$n="srgb",Ir="srgb-linear",Hf="display-p3",Hc="display-p3-linear",pc="linear",Et="srgb",mc="rec709",gc="p3",gs=7680,pm=519,z1=512,B1=513,H1=514,iv=515,G1=516,V1=517,j1=518,W1=519,mm=35044,ni=35048,gm="300 es",Hi=2e3,xc=2001;class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=Math.PI/180,Pd=180/Math.PI;function Da(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function X1(t,e){return(t%e+e)%e}function vu(t,e,n){return(1-n)*t+n*e}function Fo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const $1={DEG2RAD:Bl};class Le{constructor(e=0,n=0){Le.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],_=i[8],M=r[0],g=r[3],h=r[6],v=r[1],x=r[4],S=r[7],P=r[2],A=r[5],E=r[8];return s[0]=o*M+a*v+l*P,s[3]=o*g+a*x+l*A,s[6]=o*h+a*S+l*E,s[1]=c*M+u*v+d*P,s[4]=c*g+u*x+d*A,s[7]=c*h+u*S+d*E,s[2]=f*M+m*v+_*P,s[5]=f*g+m*x+_*A,s[8]=f*h+m*S+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=n*d+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=f*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_u.makeScale(e,n)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,n){return this.premultiply(_u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new Ze;function rv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function vc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Y1(){const t=vc("canvas");return t.style.display="block",t}const xm={};function Hl(t){t in xm||(xm[t]=!0,console.warn(t))}function Z1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function q1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function K1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vm=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_m=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[Ir]:{transfer:pc,primaries:mc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[$n]:{transfer:Et,primaries:mc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hc]:{transfer:pc,primaries:gc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(_m),fromReference:t=>t.applyMatrix3(vm)},[Hf]:{transfer:Et,primaries:gc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(_m),fromReference:t=>t.applyMatrix3(vm).convertLinearToSRGB()}},Q1=new Set([Ir,Hc]),dt={enabled:!0,_workingColorSpace:Ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Q1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Oo[e].toReference,r=Oo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Oo[t].primaries},getTransfer:function(t){return t===dr?pc:Oo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Oo[e].luminanceCoefficients)}};function io(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class J1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=vc("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=io(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(io(n[i]/255)*255):n[i]=io(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class sv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?J1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tM=0;class hn extends ds{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Kr,r=Kr,s=ci,o=Qr,a=hi,l=$i,c=hn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Da(),this.name="",this.source=new sv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Xx;hn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(m+1)/2,P=(h+1)/2,A=(u+f)/4,E=(d+M)/4,C=(_+g)/4;return x>S&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=E/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=E/s,r=C/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(d-M)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nM extends ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new sv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends nM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ov extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=M;return}if(d!==M||l!==f||c!==m||u!==_){let g=1-a;const h=l*f+c*m+u*_+d*M,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,h*v);g=Math.sin(g*A)/P,a=Math.sin(a*A)/P}const S=a*v;if(l=l*g+f*S,c=c*g+m*S,u=u*g+_*S,d=d*g+M*S,g===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*m-c*f,e[n+1]=l*_+u*f+c*d-a*m,e[n+2]=c*_+u*m+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ym.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new D,ym=new Cr;class fs{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Ja.subVectors(this.max,zo),vs.subVectors(e.a,zo),_s.subVectors(e.b,zo),ys.subVectors(e.c,zo),Ji.subVectors(_s,vs),er.subVectors(ys,_s),kr.subVectors(vs,ys);let n=[0,-Ji.z,Ji.y,0,-er.z,er.y,0,-kr.z,kr.y,Ji.z,0,-Ji.x,er.z,0,-er.x,kr.z,0,-kr.x,-Ji.y,Ji.x,0,-er.y,er.x,0,-kr.y,kr.x,0];return!Eu(n,vs,_s,ys,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,vs,_s,ys,Ja))?!1:(el.crossVectors(Ji,er),n=[el.x,el.y,el.z],Eu(n,vs,_s,ys,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new D,new D,new D,new D,new D,new D,new D,new D],ii=new D,Qa=new fs,vs=new D,_s=new D,ys=new D,Ji=new D,er=new D,kr=new D,zo=new D,Ja=new D,el=new D,Fr=new D;function Eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rM=new fs,Bo=new D,wu=new D;class So{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(wu)),this.expandByPoint(Bo.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new D,Tu=new D,tl=new D,tr=new D,bu=new D,nl=new D,Au=new D;class Gc{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tu.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(Tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tl),a=tr.dot(this.direction),l=-tr.dot(tl),c=tr.lengthSq(),u=Math.abs(1-o*o);let d,f,m,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tu).addScaledVector(tl,f),m}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){bu.subVectors(n,e),nl.subVectors(i,e),Au.crossVectors(bu,nl);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(nl.crossVectors(tr,nl));if(l<0)return null;const c=a*this.direction.dot(bu.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(Au);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,m,_,M,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,m,_,M,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,m,_,M,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=f-M*c,n[9]=-a*l,n[2]=M-f*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,_=c*u,M=c*d;n[0]=f+M*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=m*a-_,n[6]=M+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,_=c*u,M=c*d;n[0]=f-M*a,n[4]=-o*d,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*u,n[9]=M-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,_=a*u,M=a*d;n[0]=l*u,n[4]=_*c-m,n[8]=f*c+M,n[1]=l*d,n[5]=M*c+f,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=M-f*d,n[8]=_*d+m,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*d+_,n[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+M,n[5]=o*u,n[9]=m*d-_,n[2]=_*d-m,n[6]=a*u,n[10]=M*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sM,e,oM)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),nr.crossVectors(i,Pn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),nr.crossVectors(i,Pn)),nr.normalize(),il.crossVectors(Pn,nr),r[0]=nr.x,r[4]=il.x,r[8]=Pn.x,r[1]=nr.y,r[5]=il.y,r[9]=Pn.y,r[2]=nr.z,r[6]=il.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],_=i[2],M=i[6],g=i[10],h=i[14],v=i[3],x=i[7],S=i[11],P=i[15],A=r[0],E=r[4],C=r[8],O=r[12],y=r[1],T=r[5],z=r[9],G=r[13],X=r[2],Q=r[6],W=r[10],J=r[14],L=r[3],q=r[7],Z=r[11],le=r[15];return s[0]=o*A+a*y+l*X+c*L,s[4]=o*E+a*T+l*Q+c*q,s[8]=o*C+a*z+l*W+c*Z,s[12]=o*O+a*G+l*J+c*le,s[1]=u*A+d*y+f*X+m*L,s[5]=u*E+d*T+f*Q+m*q,s[9]=u*C+d*z+f*W+m*Z,s[13]=u*O+d*G+f*J+m*le,s[2]=_*A+M*y+g*X+h*L,s[6]=_*E+M*T+g*Q+h*q,s[10]=_*C+M*z+g*W+h*Z,s[14]=_*O+M*G+g*J+h*le,s[3]=v*A+x*y+S*X+P*L,s[7]=v*E+x*T+S*Q+P*q,s[11]=v*C+x*z+S*W+P*Z,s[15]=v*O+x*G+S*J+P*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],_=e[3],M=e[7],g=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*m-i*l*m)+M*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+g*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],_=e[12],M=e[13],g=e[14],h=e[15],v=d*g*c-M*f*c+M*l*m-a*g*m-d*l*h+a*f*h,x=_*f*c-u*g*c-_*l*m+o*g*m+u*l*h-o*f*h,S=u*M*c-_*d*c+_*a*m-o*M*m-u*a*h+o*d*h,P=_*d*l-u*M*l-_*a*f+o*M*f+u*a*g-o*d*g,A=n*v+i*x+r*S+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=v*E,e[1]=(M*f*s-d*g*s-M*r*m+i*g*m+d*r*h-i*f*h)*E,e[2]=(a*g*s-M*l*s+M*r*c-i*g*c-a*r*h+i*l*h)*E,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*m-i*l*m)*E,e[4]=x*E,e[5]=(u*g*s-_*f*s+_*r*m-n*g*m-u*r*h+n*f*h)*E,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*h-n*l*h)*E,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*m+n*l*m)*E,e[8]=S*E,e[9]=(_*d*s-u*M*s-_*i*m+n*M*m+u*i*h-n*d*h)*E,e[10]=(o*M*s-_*a*s+_*i*c-n*M*c-o*i*h+n*a*h)*E,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*m-n*a*m)*E,e[12]=P*E,e[13]=(u*M*r-_*d*r+_*i*f-n*M*f-u*i*g+n*d*g)*E,e[14]=(_*a*r-o*M*r-_*i*l+n*M*l+o*i*g-n*a*g)*E,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,_=s*d,M=o*u,g=o*d,h=a*d,v=l*c,x=l*u,S=l*d,P=i.x,A=i.y,E=i.z;return r[0]=(1-(M+h))*P,r[1]=(m+S)*P,r[2]=(_-x)*P,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+h))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(_+x)*E,r[9]=(g-v)*E,r[10]=(1-(f+M))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ms.set(r[0],r[1],r[2]).length();const o=Ms.set(r[4],r[5],r[6]).length(),a=Ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const c=1/s,u=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,n.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Hi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(a===Hi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===xc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Hi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,m=(i+r)*u;let _,M;if(a===Hi)_=(o+s)*d,M=-2*d;else if(a===xc)_=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ms=new D,ri=new vt,sM=new D(0,0,0),oM=new D(1,1,1),nr=new D,il=new D,Pn=new D,Mm=new vt,Sm=new Cr;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aM=0;const Em=new D,Ss=new Cr,Ni=new vt,rl=new D,Ho=new D,lM=new D,cM=new Cr,wm=new D(1,0,0),Tm=new D(0,1,0),bm=new D(0,0,1),Am={type:"added"},uM={type:"removed"},Es={type:"childadded",child:null},Cu={type:"childremoved",child:null};class jt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new D,n=new bi,i=new Cr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ze}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rl.copy(e):rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Ho,rl,this.up):Ni.lookAt(rl,Ho,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uM),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,lM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new D(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new D,Li=new D,Ru=new D,Di=new D,ws=new D,Ts=new D,Cm=new D,Pu=new D,Nu=new D,Lu=new D,Du=new xt,Iu=new xt,Uu=new xt;class ui{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),Li.subVectors(i,n),Ru.subVectors(e,n);const o=si.dot(si),a=si.dot(Li),l=si.dot(Ru),c=Li.dot(Li),u=Li.dot(Ru),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Du.setScalar(0),Iu.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,i),Uu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Du,s.x),o.addScaledVector(Iu,s.y),o.addScaledVector(Uu,s.z),o}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Li.subVectors(e,n),si.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),si.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),Ts.subVectors(s,i),Pu.subVectors(e,i);const l=ws.dot(Pu),c=Ts.dot(Pu);if(l<=0&&c<=0)return n.copy(i);Nu.subVectors(e,r);const u=ws.dot(Nu),d=Ts.dot(Nu);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ws,o);Lu.subVectors(e,s);const m=ws.dot(Lu),_=Ts.dot(Lu);if(_>=0&&m<=_)return n.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ts,a);const g=u*_-m*d;if(g<=0&&d-u>=0&&m-_>=0)return Cm.subVectors(s,r),a=(d-u)/(d-u+(m-_)),n.copy(r).addScaledVector(Cm,a);const h=1/(g+M+f);return o=M*h,a=f*h,n.copy(i).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},sl={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=X1(e,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ku(o,s,e+1/3),this.g=ku(o,s,e),this.b=ku(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=av[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return dt.fromWorkingColorSpace(ln.copy(this),e),Math.round(un(ln.r*255,0,255))*65536+Math.round(un(ln.g*255,0,255))*256+Math.round(un(ln.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.fromWorkingColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=dt.workingColorSpace){return dt.fromWorkingColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=$n){dt.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(sl);const i=vu(ir.h,sl.h,n),r=vu(ir.s,sl.s,n),s=vu(ir.l,sl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ge;Ge.NAMES=av;let hM=0;class Eo extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=to,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wh&&(i.blendSrc=this.blendSrc),this.blendDst!==Xh&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jr extends Eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=jx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new D,ol=new Le;class On{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mm,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}}class lv extends On{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cv extends On{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _t extends On{constructor(e,n,i){super(new Float32Array(e),n,i)}}let dM=0;const jn=new vt,Fu=new jt,bs=new D,Nn=new fs,Go=new fs,Yt=new D;class _n extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rv(e)?cv:lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _t(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Nn.min,Go.min),Nn.expandByPoint(Yt),Yt.addVectors(Nn.max,Go.max),Nn.expandByPoint(Yt)):(Nn.expandByPoint(Go.min),Nn.expandByPoint(Go.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),Yt.add(bs)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new D,l[C]=new D;const c=new D,u=new D,d=new D,f=new Le,m=new Le,_=new Le,M=new D,g=new D;function h(C,O,y){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),m.fromBufferAttribute(s,O),_.fromBufferAttribute(s,y),u.sub(c),d.sub(c),m.sub(f),_.sub(f);const T=1/(m.x*_.y-_.x*m.y);isFinite(T)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(T),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(T),a[C].add(M),a[O].add(M),a[y].add(M),l[C].add(g),l[O].add(g),l[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,O=v.length;C<O;++C){const y=v[C],T=y.start,z=y.count;for(let G=T,X=T+z;G<X;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new D,S=new D,P=new D,A=new D;function E(C){P.fromBufferAttribute(r,C),A.copy(P);const O=a[C];x.copy(O),x.sub(P.multiplyScalar(P.dot(O))).normalize(),S.crossVectors(A,O);const T=S.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,T)}for(let C=0,O=v.length;C<O;++C){const y=v[C],T=y.start,z=y.count;for(let G=T,X=T+z;G<X;G+=3)E(e.getX(G+0)),E(e.getX(G+1)),E(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let h=0;h<u;h++)f[_++]=c[m++]}return new On(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rm=new vt,Or=new Gc,al=new So,Pm=new D,ll=new D,cl=new D,ul=new D,Ou=new D,hl=new D,Nm=new D,dl=new D;class ct extends jt{constructor(e=new _n,n=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ou.fromBufferAttribute(d,e),o?hl.addScaledVector(Ou,u):hl.addScaledVector(Ou.sub(n),u))}n.add(hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(al.containsPoint(Or.origin)===!1&&(Or.intersectSphere(al,Pm)===null||Or.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Rm.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Rm),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],h=o[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,P=x;S<P;S+=3){const A=a.getX(S),E=a.getX(S+1),C=a.getX(S+2);r=fl(this,h,e,i,c,u,d,A,E,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=_,h=M;g<h;g+=3){const v=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=fl(this,o,e,i,c,u,d,v,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const g=f[_],h=o[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=v,P=x;S<P;S+=3){const A=S,E=S+1,C=S+2;r=fl(this,h,e,i,c,u,d,A,E,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=_,h=M;g<h;g+=3){const v=g,x=g+1,S=g+2;r=fl(this,o,e,i,c,u,d,v,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function fM(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ar,a),l===null)return null;dl.copy(a),dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(dl);return c<n.near||c>n.far?null:{distance:c,point:dl.clone(),object:t}}function fl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ll),t.getVertexPosition(l,cl),t.getVertexPosition(c,ul);const u=fM(t,e,n,i,ll,cl,ul,Nm);if(u){const d=new D;ui.getBarycoord(Nm,ll,cl,ul,d),r&&(u.uv=ui.getInterpolatedAttribute(r,a,l,c,d,new Le)),s&&(u.uv1=ui.getInterpolatedAttribute(s,a,l,c,d,new Le)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};ui.getNormal(ll,cl,ul,f.normal),u.face=f,u.barycoord=d}return u}class wo extends _n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function _(M,g,h,v,x,S,P,A,E,C,O){const y=S/E,T=P/C,z=S/2,G=P/2,X=A/2,Q=E+1,W=C+1;let J=0,L=0;const q=new D;for(let Z=0;Z<W;Z++){const le=Z*T-G;for(let Te=0;Te<Q;Te++){const Oe=Te*y-z;q[M]=Oe*v,q[g]=le*x,q[h]=X,c.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[h]=A>0?1:-1,u.push(q.x,q.y,q.z),d.push(Te/E),d.push(1-Z/C),J+=1}}for(let Z=0;Z<C;Z++)for(let le=0;le<E;le++){const Te=f+le+Q*Z,Oe=f+le+Q*(Z+1),k=f+(le+1)+Q*(Z+1),H=f+(le+1)+Q*Z;l.push(Te,Oe,H),l.push(Oe,k,H),L+=6}a.addGroup(m,L,O),m+=L,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=vo(t[n]);for(const r in i)e[r]=i[r]}return e}function pM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const mM={clone:vo,merge:fn};var gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends Eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=pM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hv extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new D,Lm=new Le,Dm=new Le;class In extends hv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,Lm,Dm),n.subVectors(Dm,Lm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Cs=1;class vM extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(As,Cs,e,n);r.layers=this.layers,this.add(r);const s=new In(As,Cs,e,n);s.layers=this.layers,this.add(s);const o=new In(As,Cs,e,n);o.layers=this.layers,this.add(o);const a=new In(As,Cs,e,n);a.layers=this.layers,this.add(a);const l=new In(As,Cs,e,n);l.layers=this.layers,this.add(l);const c=new In(As,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class dv extends hn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:po,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _M extends cs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ci}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wo(5,5,5),s=new Rr({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Er});s.uniforms.tEquirect.value=n;const o=new ct(r,s),a=n.minFilter;return n.minFilter===Qr&&(n.minFilter=ci),new vM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const zu=new D,yM=new D,MM=new Ze;class Oi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=zu.subVectors(i,n).cross(yM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||MM.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new So,pl=new D;class Vf{constructor(e=new Oi,n=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],M=r[10],g=r[11],h=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-m,S-h).normalize(),i[1].setComponents(l+s,f+c,g+m,S+h).normalize(),i[2].setComponents(l+o,f+u,g+_,S+v).normalize(),i[3].setComponents(l-o,f-u,g-_,S-v).normalize(),i[4].setComponents(l-a,f-d,g-M,S-x).normalize(),n===Hi)i[5].setComponents(l+a,f+d,g+M,S+x).normalize();else if(n===xc)i[5].setComponents(a,d,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){const _=d[f],M=d[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){const M=d[m];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Vc extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,m=[],_=[],M=[],g=[];for(let h=0;h<u;h++){const v=h*f-o;for(let x=0;x<c;x++){const S=x*d-s;_.push(S,-v,0),M.push(0,0,1),g.push(x/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+c*h,S=v+c*(h+1),P=v+1+c*(h+1),A=v+1+c*h;m.push(x,S,A),m.push(S,P,A)}this.setIndex(m),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
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
#endif`,PM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
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
#endif`,DM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kM=`#ifdef USE_IRIDESCENCE
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,XM=`#define PI 3.141592653589793
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
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YM=`vec3 transformedNormal = objectNormal;
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
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",eS=`
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
}`,tS=`#ifdef USE_ENVMAP
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
#endif`,nS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,oS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uS=`#ifdef USE_GRADIENTMAP
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
}`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pS=`uniform bool receiveShadow;
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
#endif`,mS=`#ifdef USE_ENVMAP
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
#endif`,gS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yS=`PhysicalMaterial material;
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
#endif`,MS=`struct PhysicalMaterial {
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
}`,SS=`
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
#endif`,ES=`#if defined( RE_IndirectDiffuse )
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
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,US=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kS=`#if defined( USE_MORPHCOLORS )
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
#endif`,zS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WS=`#ifdef USE_NORMALMAP
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
#endif`,XS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZS=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aE=`float getShadowMask() {
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
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
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
}`,RE=`#if DEPTH_PACKING == 3200
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
}`,PE=`#define DISTANCE
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
}`,NE=`#define DISTANCE
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
}`,DE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`uniform float scale;
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
}`,UE=`uniform vec3 diffuse;
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
}`,kE=`#include <common>
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
}`,zE=`#define LAMBERT
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
}`,BE=`#define MATCAP
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
}`,HE=`#define MATCAP
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
}`,GE=`#define NORMAL
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
}`,VE=`#define NORMAL
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
}`,jE=`#define PHONG
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
}`,WE=`#define PHONG
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
}`,XE=`#define STANDARD
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
}`,$E=`#define STANDARD
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
}`,YE=`#define TOON
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
}`,ZE=`#define TOON
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
}`,KE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,JE=`uniform vec3 color;
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
}`,ew=`uniform float rotation;
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
}`,tw=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:EM,alphahash_pars_fragment:wM,alphamap_fragment:TM,alphamap_pars_fragment:bM,alphatest_fragment:AM,alphatest_pars_fragment:CM,aomap_fragment:RM,aomap_pars_fragment:PM,batching_pars_vertex:NM,batching_vertex:LM,begin_vertex:DM,beginnormal_vertex:IM,bsdfs:UM,iridescence_fragment:kM,bumpmap_pars_fragment:FM,clipping_planes_fragment:OM,clipping_planes_pars_fragment:zM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:VM,color_pars_vertex:jM,color_vertex:WM,common:XM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:YM,displacementmap_pars_vertex:ZM,displacementmap_vertex:qM,emissivemap_fragment:KM,emissivemap_pars_fragment:QM,colorspace_fragment:JM,colorspace_pars_fragment:eS,envmap_fragment:tS,envmap_common_pars_fragment:nS,envmap_pars_fragment:iS,envmap_pars_vertex:rS,envmap_physical_pars_fragment:mS,envmap_vertex:sS,fog_vertex:oS,fog_pars_vertex:aS,fog_fragment:lS,fog_pars_fragment:cS,gradientmap_pars_fragment:uS,lightmap_pars_fragment:hS,lights_lambert_fragment:dS,lights_lambert_pars_fragment:fS,lights_pars_begin:pS,lights_toon_fragment:gS,lights_toon_pars_fragment:xS,lights_phong_fragment:vS,lights_phong_pars_fragment:_S,lights_physical_fragment:yS,lights_physical_pars_fragment:MS,lights_fragment_begin:SS,lights_fragment_maps:ES,lights_fragment_end:wS,logdepthbuf_fragment:TS,logdepthbuf_pars_fragment:bS,logdepthbuf_pars_vertex:AS,logdepthbuf_vertex:CS,map_fragment:RS,map_pars_fragment:PS,map_particle_fragment:NS,map_particle_pars_fragment:LS,metalnessmap_fragment:DS,metalnessmap_pars_fragment:IS,morphinstance_vertex:US,morphcolor_vertex:kS,morphnormal_vertex:FS,morphtarget_pars_vertex:OS,morphtarget_vertex:zS,normal_fragment_begin:BS,normal_fragment_maps:HS,normal_pars_fragment:GS,normal_pars_vertex:VS,normal_vertex:jS,normalmap_pars_fragment:WS,clearcoat_normal_fragment_begin:XS,clearcoat_normal_fragment_maps:$S,clearcoat_pars_fragment:YS,iridescence_pars_fragment:ZS,opaque_fragment:qS,packing:KS,premultiplied_alpha_fragment:QS,project_vertex:JS,dithering_fragment:eE,dithering_pars_fragment:tE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:sE,shadowmap_vertex:oE,shadowmask_pars_fragment:aE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:hE,specularmap_fragment:dE,specularmap_pars_fragment:fE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:xE,uv_pars_fragment:vE,uv_pars_vertex:_E,uv_vertex:yE,worldpos_vertex:ME,background_vert:SE,background_frag:EE,backgroundCube_vert:wE,backgroundCube_frag:TE,cube_vert:bE,cube_frag:AE,depth_vert:CE,depth_frag:RE,distanceRGBA_vert:PE,distanceRGBA_frag:NE,equirect_vert:LE,equirect_frag:DE,linedashed_vert:IE,linedashed_frag:UE,meshbasic_vert:kE,meshbasic_frag:FE,meshlambert_vert:OE,meshlambert_frag:zE,meshmatcap_vert:BE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:VE,meshphong_vert:jE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:$E,meshtoon_vert:YE,meshtoon_frag:ZE,points_vert:qE,points_frag:KE,shadow_vert:QE,shadow_frag:JE,sprite_vert:ew,sprite_frag:tw},de={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},yi={basic:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:fn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:fn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:fn([de.points,de.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:fn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:fn([de.common,de.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:fn([de.sprite,de.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:fn([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:fn([de.lights,de.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};yi.physical={uniforms:fn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ml={r:0,b:0,g:0},Br=new bi,nw=new vt;function iw(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function M(v){let x=!1;const S=_(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Bc)?(u===void 0&&(u=new ct(new wo(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:vo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Br.copy(x.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nw.makeRotationFromEuler(Br)),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==Et,(d!==S||f!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ct(new Vc(2,2),new Rr({name:"BackgroundMaterial",uniforms:vo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(S.colorSpace)!==Et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,x){v.getRGB(ml,uv(t)),i.buffers.color.setClear(ml.r,ml.g,ml.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:M,addToRenderList:g}}function rw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,T,z,G,X){let Q=!1;const W=d(G,z,T);s!==W&&(s=W,c(s.object)),Q=m(y,G,z,X),Q&&_(y,G,z,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(y,T,z,G),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,T,z){const G=z.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let Q=X[T.id];Q===void 0&&(Q={},X[T.id]=Q);let W=Q[G];return W===void 0&&(W=f(l()),Q[G]=W),W}function f(y){const T=[],z=[],G=[];for(let X=0;X<n;X++)T[X]=0,z[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:G,object:y,attributes:{},index:null}}function m(y,T,z,G){const X=s.attributes,Q=T.attributes;let W=0;const J=z.getAttributes();for(const L in J)if(J[L].location>=0){const Z=X[L];let le=Q[L];if(le===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),Z===void 0||Z.attribute!==le||le&&Z.data!==le.data)return!0;W++}return s.attributesNum!==W||s.index!==G}function _(y,T,z,G){const X={},Q=T.attributes;let W=0;const J=z.getAttributes();for(const L in J)if(J[L].location>=0){let Z=Q[L];Z===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const le={};le.attribute=Z,Z&&Z.data&&(le.data=Z.data),X[L]=le,W++}s.attributes=X,s.attributesNum=W,s.index=G}function M(){const y=s.newAttributes;for(let T=0,z=y.length;T<z;T++)y[T]=0}function g(y){h(y,0)}function h(y,T){const z=s.newAttributes,G=s.enabledAttributes,X=s.attributeDivisors;z[y]=1,G[y]===0&&(t.enableVertexAttribArray(y),G[y]=1),X[y]!==T&&(t.vertexAttribDivisor(y,T),X[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let z=0,G=T.length;z<G;z++)T[z]!==y[z]&&(t.disableVertexAttribArray(z),T[z]=0)}function x(y,T,z,G,X,Q,W){W===!0?t.vertexAttribIPointer(y,T,z,X,Q):t.vertexAttribPointer(y,T,z,G,X,Q)}function S(y,T,z,G){M();const X=G.attributes,Q=z.getAttributes(),W=T.defaultAttributeValues;for(const J in Q){const L=Q[J];if(L.location>=0){let q=X[J];if(q===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const Z=q.normalized,le=q.itemSize,Te=e.get(q);if(Te===void 0)continue;const Oe=Te.buffer,k=Te.type,H=Te.bytesPerElement,ie=k===t.INT||k===t.UNSIGNED_INT||q.gpuType===If;if(q.isInterleavedBufferAttribute){const ce=q.data,be=ce.stride,Ae=q.offset;if(ce.isInstancedInterleavedBuffer){for(let Ke=0;Ke<L.locationSize;Ke++)h(L.location+Ke,ce.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ke=0;Ke<L.locationSize;Ke++)g(L.location+Ke);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Ke=0;Ke<L.locationSize;Ke++)x(L.location+Ke,le/L.locationSize,k,Z,be*H,(Ae+le/L.locationSize*Ke)*H,ie)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<L.locationSize;ce++)h(L.location+ce,q.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<L.locationSize;ce++)g(L.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ce=0;ce<L.locationSize;ce++)x(L.location+ce,le/L.locationSize,k,Z,le*H,le/L.locationSize*ce*H,ie)}}else if(W!==void 0){const Z=W[J];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}v()}function P(){C();for(const y in i){const T=i[y];for(const z in T){const G=T[z];for(const X in G)u(G[X].object),delete G[X];delete T[z]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const z in T){const G=T[z];for(const X in G)u(G[X].object),delete G[X];delete T[z]}delete i[y.id]}function E(y){for(const T in i){const z=i[T];if(z[y.id]===void 0)continue;const G=z[y.id];for(const X in G)u(G[X].object),delete G[X];delete z[y.id]}}function C(){O(),o=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:g,disableUnusedAttributes:v}}function sw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];n.update(m,i,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let M=0;M<d;M++)_+=u[M];for(let M=0;M<f.length;M++)n.update(_,i,f[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ow(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==hi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==$i&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Si&&!C)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:P,maxSamples:A}}function aw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Oi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,x=v*4;let S=h.clippingState||null;l.value=S,S=u(_,f,x,m);for(let P=0;P!==x;++P)S[P]=n[P];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,_){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const h=m+M*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,S=m;x!==M;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function lw(t){let e=new WeakMap;function n(o,a){return a===ed?o.mapping=po:a===td&&(o.mapping=mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ed||a===td)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _M(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pv extends hv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=4,Im=[.125,.215,.35,.446,.526,.582],Xr=20,Bu=new pv,Um=new Ge;let Hu=null,Gu=0,Vu=0,ju=!1;const jr=(1+Math.sqrt(5))/2,Rs=1/jr,km=[new D(-jr,Rs,0),new D(jr,Rs,0),new D(-Rs,0,jr),new D(Rs,0,jr),new D(0,jr,-Rs),new D(0,jr,Rs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Gu,Vu),this._renderer.xr.enabled=ju,e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:La,format:hi,colorSpace:Ir,depthBuffer:!1},r=Fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(s)),this._blurMaterial=uw(s,e,n)}return r}_compileMaterial(e){const n=new ct(this._lodPlanes[0],e);this._renderer.compile(n,Bu)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Um),u.toneMapping=wr,u.autoClear=!1;const m=new Jr({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),_=new ct(new wo,m);let M=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,M=!0):(m.color.copy(Um),M=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;gl(r,v*x,h>2?x:0,x,x),u.setRenderTarget(r),M&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===po||e.mapping===mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=km[(r-s-1)%km.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ct(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xr-1),M=s/_,g=isFinite(s)?1+Math.floor(u*M):Xr;g>Xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xr}`);const h=[];let v=0;for(let E=0;E<Xr;++E){const C=E/M,O=Math.exp(-C*C/2);h.push(O),E===0?v+=O:E<g&&(v+=2*O)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],P=3*S*(r>x-Xs?r-x+Xs:0),A=4*(this._cubeSize-S);gl(n,P,A,3*S,2*S),l.setRenderTarget(n),l.render(d,Bu)}}function cw(t){const e=[],n=[],i=[];let r=t;const s=t-Xs+1+Im.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xs?l=Im[o-t+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,M=3,g=2,h=1,v=new Float32Array(M*_*m),x=new Float32Array(g*_*m),S=new Float32Array(h*_*m);for(let A=0;A<m;A++){const E=A%3*2/3-1,C=A>2?0:-1,O=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(O,M*_*A),x.set(f,g*_*A);const y=[A,A,A,A,A,A];S.set(y,h*_*A)}const P=new _n;P.setAttribute("position",new On(v,M)),P.setAttribute("uv",new On(x,g)),P.setAttribute("faceIndex",new On(S,h)),e.push(P),r>Xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fm(t,e,n){const i=new cs(t,e,n);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uw(t,e,n){const i=new Float32Array(Xr),r=new D(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jf(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Om(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function zm(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function jf(){return`

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
	`}function hw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ed||l===td,u=l===po||l===mo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Nd(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Nd(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function dw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let g=0,h=M.length;g<h;g++)e.remove(M[g])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const M=m[_];for(let g=0,h=M.length;g<h;g++)e.update(M[g],t.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let M=0;if(m!==null){const v=m.array;M=m.version;for(let x=0,S=v.length;x<S;x+=3){const P=v[x+0],A=v[x+1],E=v[x+2];f.push(P,A,A,E,E,P)}}else if(_!==void 0){const v=_.array;M=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const P=x+0,A=x+1,E=x+2;f.push(P,A,A,E,E,P)}}else return;const g=new(rv(f)?cv:lv)(f,1);g.version=M;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function pw(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*o),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*o,_),n.update(m,i,_))}function u(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let g=0;for(let h=0;h<_;h++)g+=m[h];n.update(g,i,1)}function d(f,m,_,M){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,m[h],M[h]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,M,0,_);let h=0;for(let v=0;v<_;v++)h+=m[v];for(let v=0;v<M.length;v++)n.update(h,i,M[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gw(t,e,n){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),g===!0&&(S=3);let P=a.attributes.position.count*S,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*A*4*d),C=new ov(E,P,A,d);C.type=Si,C.needsUpdate=!0;const O=S*4;for(let T=0;T<d;T++){const z=h[T],G=v[T],X=x[T],Q=P*A*4*T;for(let W=0;W<z.count;W++){const J=W*O;_===!0&&(r.fromBufferAttribute(z,W),E[Q+J+0]=r.x,E[Q+J+1]=r.y,E[Q+J+2]=r.z,E[Q+J+3]=0),M===!0&&(r.fromBufferAttribute(G,W),E[Q+J+4]=r.x,E[Q+J+5]=r.y,E[Q+J+6]=r.z,E[Q+J+7]=0),g===!0&&(r.fromBufferAttribute(X,W),E[Q+J+8]=r.x,E[Q+J+9]=r.y,E[Q+J+10]=r.z,E[Q+J+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new Le(P,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function xw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class mv extends hn{constructor(e,n,i,r,s,o,a,l,c,u=no){if(u!==no&&u!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===no&&(i=ls),i===void 0&&u===xo&&(i=go),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const gv=new hn,Bm=new mv(1,1),xv=new ov,vv=new iM,_v=new dv,Hm=[],Gm=[],Vm=new Float32Array(16),jm=new Float32Array(9),Wm=new Float32Array(4);function To(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hm[r];if(s===void 0&&(s=new Float32Array(r),Hm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jc(t,e){let n=Gm[e];n===void 0&&(n=new Int32Array(e),Gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Wm.set(i),t.uniformMatrix2fv(this.addr,!1,Wm),Xt(n,i)}}function Ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;jm.set(i),t.uniformMatrix3fv(this.addr,!1,jm),Xt(n,i)}}function ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Vm.set(i),t.uniformMatrix4fv(this.addr,!1,Vm),Xt(n,i)}}function Tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function Rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Bm.compareFunction=iv,s=Bm):s=gv,n.setTexture2D(e||s,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vv,r)}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_v,r)}function kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xv,r)}function Fw(t){switch(t){case 5126:return vw;case 35664:return _w;case 35665:return yw;case 35666:return Mw;case 35674:return Sw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return bw;case 35668:case 35672:return Aw;case 35669:case 35673:return Cw;case 5125:return Rw;case 36294:return Pw;case 36295:return Nw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return kw}}function Ow(t,e){t.uniform1fv(this.addr,e)}function zw(t,e){const n=To(e,this.size,2);t.uniform2fv(this.addr,n)}function Bw(t,e){const n=To(e,this.size,3);t.uniform3fv(this.addr,n)}function Hw(t,e){const n=To(e,this.size,4);t.uniform4fv(this.addr,n)}function Gw(t,e){const n=To(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Vw(t,e){const n=To(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jw(t,e){const n=To(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ww(t,e){t.uniform1iv(this.addr,e)}function Xw(t,e){t.uniform2iv(this.addr,e)}function $w(t,e){t.uniform3iv(this.addr,e)}function Yw(t,e){t.uniform4iv(this.addr,e)}function Zw(t,e){t.uniform1uiv(this.addr,e)}function qw(t,e){t.uniform2uiv(this.addr,e)}function Kw(t,e){t.uniform3uiv(this.addr,e)}function Qw(t,e){t.uniform4uiv(this.addr,e)}function Jw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||gv,s[o])}function e2(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||vv,s[o])}function t2(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||_v,s[o])}function n2(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||xv,s[o])}function i2(t){switch(t){case 5126:return Ow;case 35664:return zw;case 35665:return Bw;case 35666:return Hw;case 35674:return Gw;case 35675:return Vw;case 35676:return jw;case 5124:case 35670:return Ww;case 35667:case 35671:return Xw;case 35668:case 35672:return $w;case 35669:case 35673:return Yw;case 5125:return Zw;case 36294:return qw;case 36295:return Kw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}class r2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Fw(n.type)}}class s2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=i2(n.type)}}class o2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function Xm(t,e){t.seq.push(e),t.map[e.id]=e}function a2(t,e,n){const i=t.name,r=i.length;for(Wu.lastIndex=0;;){const s=Wu.exec(i),o=Wu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xm(n,c===void 0?new r2(a,t,e):new s2(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new o2(a),Xm(n,d)),n=d}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);a2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function $m(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const l2=37297;let c2=0;function u2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function h2(t){const e=dt.getPrimaries(dt.workingColorSpace),n=dt.getPrimaries(t);let i;switch(e===n?i="":e===gc&&n===mc?i="LinearDisplayP3ToLinearSRGB":e===mc&&n===gc&&(i="LinearSRGBToLinearDisplayP3"),t){case Ir:case Hc:return[i,"LinearTransferOETF"];case $n:case Hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+u2(t.getShaderSource(e),o)}else return r}function d2(t,e){const n=h2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function f2(t,e){let n;switch(e){case R1:n="Linear";break;case P1:n="Reinhard";break;case N1:n="Cineon";break;case Wx:n="ACESFilmic";break;case D1:n="AgX";break;case I1:n="Neutral";break;case L1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new D;function p2(){dt.getLuminanceCoefficients(xl);const t=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function g2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function x2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ko(t){return t!==""}function Zm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(t){return t.replace(v2,y2)}const _2=new Map;function y2(t,e){let n=Ye[e];if(n===void 0){const i=_2.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ld(n)}const M2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(t){return t.replace(M2,S2)}function S2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function E2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function w2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function b2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jx:e="ENVMAP_BLENDING_MULTIPLY";break;case A1:e="ENVMAP_BLENDING_MIX";break;case C1:e="ENVMAP_BLENDING_ADD";break}return e}function A2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function C2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=E2(n),c=w2(n),u=T2(n),d=b2(n),f=A2(n),m=m2(n),_=g2(s),M=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ko).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ko).join(`
`),h.length>0&&(h+=`
`)):(g=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),h=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?Ye.tonemapping_pars_fragment:"",n.toneMapping!==wr?f2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,d2("linearToOutputTexel",n.outputColorSpace),p2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`)),o=Ld(o),o=Zm(o,n),o=qm(o,n),a=Ld(a),a=Zm(a,n),a=qm(a,n),o=Km(o),a=Km(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+g+o,S=v+h+a,P=$m(r,r.VERTEX_SHADER,x),A=$m(r,r.FRAGMENT_SHADER,S);r.attachShader(M,P),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function E(T){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(M).trim(),G=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(A).trim();let Q=!0,W=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,P,A);else{const J=Ym(r,P,"vertex"),L=Ym(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+J+`
`+L)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||X==="")&&(W=!1);W&&(T.diagnostics={runnable:Q,programLog:z,vertexShader:{log:G,prefix:g},fragmentShader:{log:X,prefix:h}})}r.deleteShader(P),r.deleteShader(A),C=new Gl(r,M),O=x2(r,M)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let O;this.getAttributes=function(){return O===void 0&&E(this),O};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,l2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c2++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=A,this}let R2=0;class P2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new N2(e),n.set(e,i)),i}}class N2{constructor(e){this.id=R2++,this.code=e,this.usedTimes=0}}function L2(t,e,n,i,r,s,o){const a=new Gf,l=new P2,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,T,z,G,X){const Q=G.fog,W=X.geometry,J=y.isMeshStandardMaterial?G.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||J),q=L&&L.mapping===Bc?L.image.height:null,Z=M[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Te=le!==void 0?le.length:0;let Oe=0;W.morphAttributes.position!==void 0&&(Oe=1),W.morphAttributes.normal!==void 0&&(Oe=2),W.morphAttributes.color!==void 0&&(Oe=3);let k,H,ie,ce;if(Z){const Jt=yi[Z];k=Jt.vertexShader,H=Jt.fragmentShader}else k=y.vertexShader,H=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const be=t.getRenderTarget(),Ae=X.isInstancedMesh===!0,Ke=X.isBatchedMesh===!0,ut=!!y.map,$e=!!y.matcap,N=!!L,bt=!!y.aoMap,Be=!!y.lightMap,qe=!!y.bumpMap,Ce=!!y.normalMap,at=!!y.displacementMap,Re=!!y.emissiveMap,R=!!y.metalnessMap,w=!!y.roughnessMap,B=y.anisotropy>0,K=y.clearcoat>0,te=y.dispersion>0,Y=y.iridescence>0,ye=y.sheen>0,he=y.transmission>0,ue=B&&!!y.anisotropyMap,He=K&&!!y.clearcoatMap,oe=K&&!!y.clearcoatNormalMap,xe=K&&!!y.clearcoatRoughnessMap,De=Y&&!!y.iridescenceMap,Ie=Y&&!!y.iridescenceThicknessMap,_e=ye&&!!y.sheenColorMap,Qe=ye&&!!y.sheenRoughnessMap,Fe=!!y.specularMap,mt=!!y.specularColorMap,I=!!y.specularIntensityMap,me=he&&!!y.transmissionMap,$=he&&!!y.thicknessMap,ee=!!y.gradientMap,pe=!!y.alphaMap,ge=y.alphaTest>0,et=!!y.alphaHash,tt=!!y.extensions;let Qt=wr;y.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const nt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:H,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ke,batchingColor:Ke&&X._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&X.instanceColor!==null,instancingMorph:Ae&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ir,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:$e,envMap:N,envMapMode:N&&L.mapping,envMapCubeUVHeight:q,aoMap:bt,lightMap:Be,bumpMap:qe,normalMap:Ce,displacementMap:m&&at,emissiveMap:Re,normalMapObjectSpace:Ce&&y.normalMapType===O1,normalMapTangentSpace:Ce&&y.normalMapType===nv,metalnessMap:R,roughnessMap:w,anisotropy:B,anisotropyMap:ue,clearcoat:K,clearcoatMap:He,clearcoatNormalMap:oe,clearcoatRoughnessMap:xe,dispersion:te,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:ye,sheenColorMap:_e,sheenRoughnessMap:Qe,specularMap:Fe,specularColorMap:mt,specularIntensityMap:I,transmission:he,transmissionMap:me,thicknessMap:$,gradientMap:ee,opaque:y.transparent===!1&&y.blending===to&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:ge,alphaHash:et,combine:y.combine,mapUv:ut&&g(y.map.channel),aoMapUv:bt&&g(y.aoMap.channel),lightMapUv:Be&&g(y.lightMap.channel),bumpMapUv:qe&&g(y.bumpMap.channel),normalMapUv:Ce&&g(y.normalMap.channel),displacementMapUv:at&&g(y.displacementMap.channel),emissiveMapUv:Re&&g(y.emissiveMap.channel),metalnessMapUv:R&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:ue&&g(y.anisotropyMap.channel),clearcoatMapUv:He&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&g(y.sheenRoughnessMap.channel),specularMapUv:Fe&&g(y.specularMap.channel),specularColorMapUv:mt&&g(y.specularColorMap.channel),specularIntensityMapUv:I&&g(y.specularIntensityMap.channel),transmissionMapUv:me&&g(y.transmissionMap.channel),thicknessMapUv:$&&g(y.thicknessMap.channel),alphaMapUv:pe&&g(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ce||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(ut||pe),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:tt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&y.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)T.push(z),T.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const T=M[y.type];let z;if(T){const G=yi[T];z=mM.clone(G.uniforms)}else z=y.uniforms;return z}function A(y,T){let z;for(let G=0,X=u.length;G<X;G++){const Q=u[G];if(Q.cacheKey===T){z=Q,++z.usedTimes;break}}return z===void 0&&(z=new C2(t,T,y,s),u.push(z)),z}function E(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function O(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:P,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:O}}function D2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function I2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function eg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,m,_,M,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:M,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=M,h.group=g),e++,h}function a(d,f,m,_,M,g){const h=o(d,f,m,_,M,g);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(d,f,m,_,M,g){const h=o(d,f,m,_,M,g);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||I2),i.length>1&&i.sort(f||Jm),r.length>1&&r.sort(f||Jm)}function u(){for(let d=e,f=t.length;d<f;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function U2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new eg,t.set(i,[o])):r>=s.length?(o=new eg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function k2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ge};break;case"SpotLight":n={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function F2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let O2=0;function z2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function B2(t){const e=new k2,n=F2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new vt,o=new vt;function a(c){let u=0,d=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,_=0,M=0,g=0,h=0,v=0,x=0,S=0,P=0,A=0,E=0;c.sort(z2);for(let O=0,y=c.length;O<y;O++){const T=c[O],z=T.color,G=T.intensity,X=T.distance,Q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=z.r*G,d+=z.g*G,f+=z.b*G;else if(T.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(T.sh.coefficients[W],G);E++}else if(T.isDirectionalLight){const W=e.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const J=T.shadow,L=n.get(T);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=T.shadow.matrix,v++}i.directional[m]=W,m++}else if(T.isSpotLight){const W=e.get(T);W.position.setFromMatrixPosition(T.matrixWorld),W.color.copy(z).multiplyScalar(G),W.distance=X,W.coneCos=Math.cos(T.angle),W.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W.decay=T.decay,i.spot[M]=W;const J=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,J.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[M]=J.matrix,T.castShadow){const L=n.get(T);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.spotShadow[M]=L,i.spotShadowMap[M]=Q,S++}M++}else if(T.isRectAreaLight){const W=e.get(T);W.color.copy(z).multiplyScalar(G),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=W,g++}else if(T.isPointLight){const W=e.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),W.distance=T.distance,W.decay=T.decay,T.castShadow){const J=T.shadow,L=n.get(T);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,L.shadowCameraNear=J.camera.near,L.shadowCameraFar=J.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=T.shadow.matrix,x++}i.point[_]=W,_++}else if(T.isHemisphereLight){const W=e.get(T);W.skyColor.copy(T.color).multiplyScalar(G),W.groundColor.copy(T.groundColor).multiplyScalar(G),i.hemi[h]=W,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==M||C.rectAreaLength!==g||C.hemiLength!==h||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==S||C.numSpotMaps!==P||C.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,C.directionalLength=m,C.pointLength=_,C.spotLength=M,C.rectAreaLength=g,C.hemiLength=h,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=S,C.numSpotMaps=P,C.numLightProbes=E,i.version=O2++)}function l(c,u){let d=0,f=0,m=0,_=0,M=0;const g=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const x=c[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(x.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function tg(t){const e=new B2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function H2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new tg(t),e.set(r,[a])):s>=o.length?(a=new tg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class G2 extends Eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V2 extends Eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W2=`uniform sampler2D shadow_pass;
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
}`;function X2(t,e,n){let i=new Vf;const r=new Le,s=new Le,o=new xt,a=new G2({depthPacking:F1}),l=new V2,c={},u=n.maxTextureSize,d={[Ar]:gn,[gn]:Ar,[Un]:Un},f=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:j2,fragmentShader:W2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ct(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gx;let h=this.type;this.render=function(A,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const O=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Er),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=h!==Ui&&this.type===Ui,X=h===Ui&&this.type!==Ui;for(let Q=0,W=A.length;Q<W;Q++){const J=A[Q],L=J.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const q=L.getFrameExtents();if(r.multiply(q),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,L.mapSize.y=s.y)),L.map===null||G===!0||X===!0){const le=this.type!==Ui?{minFilter:wn,magFilter:wn}:{};L.map!==null&&L.map.dispose(),L.map=new cs(r.x,r.y,le),L.map.texture.name=J.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let le=0;le<Z;le++){const Te=L.getViewport(le);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),z.viewport(o),L.updateMatrices(J,le),i=L.getFrustum(),S(E,C,L.camera,J,this.type)}L.isPointLightShadow!==!0&&this.type===Ui&&v(L,C),L.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(O,y,T)};function v(A,E){const C=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cs(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,C,f,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,C,m,M,null)}function x(A,E,C,O){let y=null;const T=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=C.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=y.uuid,G=E.uuid;let X=c[z];X===void 0&&(X={},c[z]=X);let Q=X[G];Q===void 0&&(Q=y.clone(),X[G]=Q,E.addEventListener("dispose",P)),y=Q}if(y.visible=E.visible,y.wireframe=E.wireframe,O===Ui?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=t.properties.get(y);z.light=C}return y}function S(A,E,C,O,y){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const G=e.update(A),X=A.material;if(Array.isArray(X)){const Q=G.groups;for(let W=0,J=Q.length;W<J;W++){const L=Q[W],q=X[L.materialIndex];if(q&&q.visible){const Z=x(A,q,O,y);A.onBeforeShadow(t,A,E,C,G,Z,L),t.renderBufferDirect(C,null,G,Z,A,L),A.onAfterShadow(t,A,E,C,G,Z,L)}}}else if(X.visible){const Q=x(A,X,O,y);A.onBeforeShadow(t,A,E,C,G,Q,null),t.renderBufferDirect(C,null,G,Q,A,null),A.onAfterShadow(t,A,E,C,G,Q,null)}}const z=A.children;for(let G=0,X=z.length;G<X;G++)S(z[G],E,C,O,y)}function P(A){A.target.removeEventListener("dispose",P);for(const C in c){const O=c[C],y=A.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}const $2={[$h]:Yh,[Zh]:Qh,[qh]:Jh,[fo]:Kh,[Yh]:$h,[Qh]:Zh,[Jh]:qh,[Kh]:fo};function Y2(t){function e(){let I=!1;const me=new xt;let $=null;const ee=new xt(0,0,0,0);return{setMask:function(pe){$!==pe&&!I&&(t.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){I=pe},setClear:function(pe,ge,et,tt,Qt){Qt===!0&&(pe*=tt,ge*=tt,et*=tt),me.set(pe,ge,et,tt),ee.equals(me)===!1&&(t.clearColor(pe,ge,et,tt),ee.copy(me))},reset:function(){I=!1,$=null,ee.set(-1,0,0,0)}}}function n(){let I=!1,me=!1,$=null,ee=null,pe=null;return{setReversed:function(ge){me=ge},setTest:function(ge){ge?ie(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ge){$!==ge&&!I&&(t.depthMask(ge),$=ge)},setFunc:function(ge){if(me&&(ge=$2[ge]),ee!==ge){switch(ge){case $h:t.depthFunc(t.NEVER);break;case Yh:t.depthFunc(t.ALWAYS);break;case Zh:t.depthFunc(t.LESS);break;case fo:t.depthFunc(t.LEQUAL);break;case qh:t.depthFunc(t.EQUAL);break;case Kh:t.depthFunc(t.GEQUAL);break;case Qh:t.depthFunc(t.GREATER);break;case Jh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=ge}},setLocked:function(ge){I=ge},setClear:function(ge){pe!==ge&&(t.clearDepth(ge),pe=ge)},reset:function(){I=!1,$=null,ee=null,pe=null}}}function i(){let I=!1,me=null,$=null,ee=null,pe=null,ge=null,et=null,tt=null,Qt=null;return{setTest:function(nt){I||(nt?ie(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(nt){me!==nt&&!I&&(t.stencilMask(nt),me=nt)},setFunc:function(nt,Jt,Gn){($!==nt||ee!==Jt||pe!==Gn)&&(t.stencilFunc(nt,Jt,Gn),$=nt,ee=Jt,pe=Gn)},setOp:function(nt,Jt,Gn){(ge!==nt||et!==Jt||tt!==Gn)&&(t.stencilOp(nt,Jt,Gn),ge=nt,et=Jt,tt=Gn)},setLocked:function(nt){I=nt},setClear:function(nt){Qt!==nt&&(t.clearStencil(nt),Qt=nt)},reset:function(){I=!1,me=null,$=null,ee=null,pe=null,ge=null,et=null,tt=null,Qt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],m=null,_=!1,M=null,g=null,h=null,v=null,x=null,S=null,P=null,A=new Ge(0,0,0),E=0,C=!1,O=null,y=null,T=null,z=null,G=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,W=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),Q=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Q=W>=2);let L=null,q={};const Z=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Te=new xt().fromArray(Z),Oe=new xt().fromArray(le);function k(I,me,$,ee){const pe=new Uint8Array(4),ge=t.createTexture();t.bindTexture(I,ge),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<$;et++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(me+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ge}const H={};H[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),H[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),H[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),s.setFunc(fo),Be(!1),qe(hm),ie(t.CULL_FACE),N(Er);function ie(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function ce(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function be(I,me){return u[I]!==me?(t.bindFramebuffer(I,me),u[I]=me,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=me),!0):!1}function Ae(I,me){let $=f,ee=!1;if(I){$=d.get(me),$===void 0&&($=[],d.set(me,$));const pe=I.textures;if($.length!==pe.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,et=pe.length;ge<et;ge++)$[ge]=t.COLOR_ATTACHMENT0+ge;$.length=pe.length,ee=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ee=!0);ee&&t.drawBuffers($)}function Ke(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const ut={[Wr]:t.FUNC_ADD,[u1]:t.FUNC_SUBTRACT,[h1]:t.FUNC_REVERSE_SUBTRACT};ut[d1]=t.MIN,ut[f1]=t.MAX;const $e={[p1]:t.ZERO,[m1]:t.ONE,[g1]:t.SRC_COLOR,[Wh]:t.SRC_ALPHA,[S1]:t.SRC_ALPHA_SATURATE,[y1]:t.DST_COLOR,[v1]:t.DST_ALPHA,[x1]:t.ONE_MINUS_SRC_COLOR,[Xh]:t.ONE_MINUS_SRC_ALPHA,[M1]:t.ONE_MINUS_DST_COLOR,[_1]:t.ONE_MINUS_DST_ALPHA,[E1]:t.CONSTANT_COLOR,[w1]:t.ONE_MINUS_CONSTANT_COLOR,[T1]:t.CONSTANT_ALPHA,[b1]:t.ONE_MINUS_CONSTANT_ALPHA};function N(I,me,$,ee,pe,ge,et,tt,Qt,nt){if(I===Er){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&(ie(t.BLEND),_=!0),I!==c1){if(I!==M||nt!==C){if((g!==Wr||x!==Wr)&&(t.blendEquation(t.FUNC_ADD),g=Wr,x=Wr),nt)switch(I){case to:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ws:t.blendFunc(t.ONE,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case to:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ws:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,v=null,S=null,P=null,A.set(0,0,0),E=0,M=I,C=nt}return}pe=pe||me,ge=ge||$,et=et||ee,(me!==g||pe!==x)&&(t.blendEquationSeparate(ut[me],ut[pe]),g=me,x=pe),($!==h||ee!==v||ge!==S||et!==P)&&(t.blendFuncSeparate($e[$],$e[ee],$e[ge],$e[et]),h=$,v=ee,S=ge,P=et),(tt.equals(A)===!1||Qt!==E)&&(t.blendColor(tt.r,tt.g,tt.b,Qt),A.copy(tt),E=Qt),M=I,C=!1}function bt(I,me){I.side===Un?ce(t.CULL_FACE):ie(t.CULL_FACE);let $=I.side===gn;me&&($=!$),Be($),I.blending===to&&I.transparent===!1?N(Er):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ee=I.stencilWrite;o.setTest(ee),ee&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){O!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),O=I)}function qe(I){I!==a1?(ie(t.CULL_FACE),I!==y&&(I===hm?t.cullFace(t.BACK):I===l1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=I}function Ce(I){I!==T&&(Q&&t.lineWidth(I),T=I)}function at(I,me,$){I?(ie(t.POLYGON_OFFSET_FILL),(z!==me||G!==$)&&(t.polygonOffset(me,$),z=me,G=$)):ce(t.POLYGON_OFFSET_FILL)}function Re(I){I?ie(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+X-1),L!==I&&(t.activeTexture(I),L=I)}function w(I,me,$){$===void 0&&(L===null?$=t.TEXTURE0+X-1:$=L);let ee=q[$];ee===void 0&&(ee={type:void 0,texture:void 0},q[$]=ee),(ee.type!==I||ee.texture!==me)&&(L!==$&&(t.activeTexture($),L=$),t.bindTexture(I,me||H[I]),ee.type=I,ee.texture=me)}function B(){const I=q[L];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){Te.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Te.copy(I))}function _e(I){Oe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Oe.copy(I))}function Qe(I,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let ee=$.get(I);ee===void 0&&(ee=t.getUniformBlockIndex(me,I.name),$.set(I,ee))}function Fe(I,me){const ee=l.get(me).get(I);a.get(me)!==ee&&(t.uniformBlockBinding(me,ee,I.__bindingPointIndex),a.set(me,ee))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,q={},u={},d=new WeakMap,f=[],m=null,_=!1,M=null,g=null,h=null,v=null,x=null,S=null,P=null,A=new Ge(0,0,0),E=0,C=!1,O=null,y=null,T=null,z=null,G=null,Te.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ie,disable:ce,bindFramebuffer:be,drawBuffers:Ae,useProgram:Ke,setBlending:N,setMaterial:bt,setFlipSided:Be,setCullFace:qe,setLineWidth:Ce,setPolygonOffset:at,setScissorTest:Re,activeTexture:R,bindTexture:w,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:xe,texImage3D:De,updateUBOMapping:Qe,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:oe,texSubImage2D:Y,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:ue,scissor:Ie,viewport:_e,reset:mt}}function ng(t,e,n,i){const r=Z2(i);switch(n){case qx:return t*e;case Qx:return t*e;case Jx:return t*e*2;case Ff:return t*e/r.components*r.byteLength;case Of:return t*e/r.components*r.byteLength;case ev:return t*e*2/r.components*r.byteLength;case zf:return t*e*2/r.components*r.byteLength;case Kx:return t*e*3/r.components*r.byteLength;case hi:return t*e*4/r.components*r.byteLength;case Bf:return t*e*4/r.components*r.byteLength;case Ul:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sd:case ad:return Math.max(t,16)*Math.max(e,8)/4;case rd:case od:return Math.max(t,8)*Math.max(e,8)/2;case ld:case cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zl:case Td:case bd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tv:case Ad:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cd:case Rd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Z2(t){switch(t){case $i:case $x:return{byteLength:1,components:1};case ba:case Yx:case La:return{byteLength:2,components:1};case Uf:case kf:return{byteLength:2,components:4};case ls:case If:case Si:return{byteLength:4,components:1};case Zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function q2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,w){return m?new OffscreenCanvas(R,w):vc("canvas")}function M(R,w,B){let K=1;const te=Re(R);if((te.width>B||te.height>B)&&(K=B/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(K*te.width),ye=Math.floor(K*te.height);d===void 0&&(d=_(Y,ye));const he=w?_(Y,ye):d;return he.width=Y,he.height=ye,he.getContext("2d").drawImage(R,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+ye+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==wn&&R.minFilter!==ci}function h(R){t.generateMipmap(R)}function v(R,w,B,K,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=w;if(w===t.RED&&(B===t.FLOAT&&(Y=t.R32F),B===t.HALF_FLOAT&&(Y=t.R16F),B===t.UNSIGNED_BYTE&&(Y=t.R8)),w===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.R8UI),B===t.UNSIGNED_SHORT&&(Y=t.R16UI),B===t.UNSIGNED_INT&&(Y=t.R32UI),B===t.BYTE&&(Y=t.R8I),B===t.SHORT&&(Y=t.R16I),B===t.INT&&(Y=t.R32I)),w===t.RG&&(B===t.FLOAT&&(Y=t.RG32F),B===t.HALF_FLOAT&&(Y=t.RG16F),B===t.UNSIGNED_BYTE&&(Y=t.RG8)),w===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RG8UI),B===t.UNSIGNED_SHORT&&(Y=t.RG16UI),B===t.UNSIGNED_INT&&(Y=t.RG32UI),B===t.BYTE&&(Y=t.RG8I),B===t.SHORT&&(Y=t.RG16I),B===t.INT&&(Y=t.RG32I)),w===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),B===t.UNSIGNED_INT&&(Y=t.RGB32UI),B===t.BYTE&&(Y=t.RGB8I),B===t.SHORT&&(Y=t.RGB16I),B===t.INT&&(Y=t.RGB32I)),w===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),B===t.UNSIGNED_INT&&(Y=t.RGBA32UI),B===t.BYTE&&(Y=t.RGBA8I),B===t.SHORT&&(Y=t.RGBA16I),B===t.INT&&(Y=t.RGBA32I)),w===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),w===t.RGBA){const ye=te?pc:dt.getTransfer(K);B===t.FLOAT&&(Y=t.RGBA32F),B===t.HALF_FLOAT&&(Y=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Y=ye===Et?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(R,w){let B;return R?w===null||w===ls||w===go?B=t.DEPTH24_STENCIL8:w===Si?B=t.DEPTH32F_STENCIL8:w===ba&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ls||w===go?B=t.DEPTH_COMPONENT24:w===Si?B=t.DEPTH_COMPONENT32F:w===ba&&(B=t.DEPTH_COMPONENT16),B}function S(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==ci?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function P(R){const w=R.target;w.removeEventListener("dispose",P),E(w),w.isVideoTexture&&u.delete(w)}function A(R){const w=R.target;w.removeEventListener("dispose",A),O(w)}function E(R){const w=i.get(R);if(w.__webglInit===void 0)return;const B=R.source,K=f.get(B);if(K){const te=K[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(R),Object.keys(K).length===0&&f.delete(B)}i.remove(R)}function C(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const B=R.source,K=f.get(B);delete K[w.__cacheKey],o.memory.textures--}function O(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let te=0;te<w.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(w.__webglFramebuffer[K][te]);else t.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)t.deleteFramebuffer(w.__webglFramebuffer[K]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=R.textures;for(let K=0,te=B.length;K<te;K++){const Y=i.get(B[K]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(R)}let y=0;function T(){y=0}function z(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function G(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function X(R,w){const B=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,R,w);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+w)}function Q(R,w){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Oe(B,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+w)}function W(R,w){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Oe(B,R,w);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+w)}function J(R,w){const B=i.get(R);if(R.version>0&&B.__version!==R.version){k(B,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+w)}const L={[nd]:t.REPEAT,[Kr]:t.CLAMP_TO_EDGE,[id]:t.MIRRORED_REPEAT},q={[wn]:t.NEAREST,[U1]:t.NEAREST_MIPMAP_NEAREST,[Ka]:t.NEAREST_MIPMAP_LINEAR,[ci]:t.LINEAR,[xu]:t.LINEAR_MIPMAP_NEAREST,[Qr]:t.LINEAR_MIPMAP_LINEAR},Z={[z1]:t.NEVER,[W1]:t.ALWAYS,[B1]:t.LESS,[iv]:t.LEQUAL,[H1]:t.EQUAL,[j1]:t.GEQUAL,[G1]:t.GREATER,[V1]:t.NOTEQUAL};function le(R,w){if(w.type===Si&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ci||w.magFilter===xu||w.magFilter===Ka||w.magFilter===Qr||w.minFilter===ci||w.minFilter===xu||w.minFilter===Ka||w.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==Ka&&w.minFilter!==Qr||w.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Te(R,w){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",P));const K=w.source;let te=f.get(K);te===void 0&&(te={},f.set(K,te));const Y=G(w);if(Y!==R.__cacheKey){te[Y]===void 0&&(te[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[Y].usedTimes++;const ye=te[R.__cacheKey];ye!==void 0&&(te[R.__cacheKey].usedTimes--,ye.usedTimes===0&&C(w)),R.__cacheKey=Y,R.__webglTexture=te[Y].texture}return B}function Oe(R,w,B){let K=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=t.TEXTURE_3D);const te=Te(R,w),Y=w.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+B);const ye=i.get(Y);if(Y.version!==ye.__version||te===!0){n.activeTexture(t.TEXTURE0+B);const he=dt.getPrimaries(dt.workingColorSpace),ue=w.colorSpace===dr?null:dt.getPrimaries(w.colorSpace),He=w.colorSpace===dr||he===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let oe=M(w.image,!1,r.maxTextureSize);oe=at(w,oe);const xe=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let Ie=v(w.internalFormat,xe,De,w.colorSpace,w.isVideoTexture);le(K,w);let _e;const Qe=w.mipmaps,Fe=w.isVideoTexture!==!0,mt=ye.__version===void 0||te===!0,I=Y.dataReady,me=S(w,oe);if(w.isDepthTexture)Ie=x(w.format===xo,w.type),mt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Ie,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,xe,De,null));else if(w.isDataTexture)if(Qe.length>0){Fe&&mt&&n.texStorage2D(t.TEXTURE_2D,me,Ie,Qe[0].width,Qe[0].height);for(let $=0,ee=Qe.length;$<ee;$++)_e=Qe[$],Fe?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,xe,De,_e.data):n.texImage2D(t.TEXTURE_2D,$,Ie,_e.width,_e.height,0,xe,De,_e.data);w.generateMipmaps=!1}else Fe?(mt&&n.texStorage2D(t.TEXTURE_2D,me,Ie,oe.width,oe.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,xe,De,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ie,Qe[0].width,Qe[0].height,oe.depth);for(let $=0,ee=Qe.length;$<ee;$++)if(_e=Qe[$],w.format!==hi)if(xe!==null)if(Fe){if(I)if(w.layerUpdates.size>0){const pe=ng(_e.width,_e.height,w.format,w.type);for(const ge of w.layerUpdates){const et=_e.data.subarray(ge*pe/_e.data.BYTES_PER_ELEMENT,(ge+1)*pe/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ge,_e.width,_e.height,1,xe,et,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,oe.depth,xe,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ie,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,oe.depth,xe,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ie,_e.width,_e.height,oe.depth,0,xe,De,_e.data)}else{Fe&&mt&&n.texStorage2D(t.TEXTURE_2D,me,Ie,Qe[0].width,Qe[0].height);for(let $=0,ee=Qe.length;$<ee;$++)_e=Qe[$],w.format!==hi?xe!==null?Fe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,xe,De,_e.data):n.texImage2D(t.TEXTURE_2D,$,Ie,_e.width,_e.height,0,xe,De,_e.data)}else if(w.isDataArrayTexture)if(Fe){if(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ie,oe.width,oe.height,oe.depth),I)if(w.layerUpdates.size>0){const $=ng(oe.width,oe.height,w.format,w.type);for(const ee of w.layerUpdates){const pe=oe.data.subarray(ee*$/oe.data.BYTES_PER_ELEMENT,(ee+1)*$/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,xe,De,pe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(w.isData3DTexture)Fe?(mt&&n.texStorage3D(t.TEXTURE_3D,me,Ie,oe.width,oe.height,oe.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(w.isFramebufferTexture){if(mt)if(Fe)n.texStorage2D(t.TEXTURE_2D,me,Ie,oe.width,oe.height);else{let $=oe.width,ee=oe.height;for(let pe=0;pe<me;pe++)n.texImage2D(t.TEXTURE_2D,pe,Ie,$,ee,0,xe,De,null),$>>=1,ee>>=1}}else if(Qe.length>0){if(Fe&&mt){const $=Re(Qe[0]);n.texStorage2D(t.TEXTURE_2D,me,Ie,$.width,$.height)}for(let $=0,ee=Qe.length;$<ee;$++)_e=Qe[$],Fe?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,xe,De,_e):n.texImage2D(t.TEXTURE_2D,$,Ie,xe,De,_e);w.generateMipmaps=!1}else if(Fe){if(mt){const $=Re(oe);n.texStorage2D(t.TEXTURE_2D,me,Ie,$.width,$.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ie,xe,De,oe);g(w)&&h(K),ye.__version=Y.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function k(R,w,B){if(w.image.length!==6)return;const K=Te(R,w),te=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const Y=i.get(te);if(te.version!==Y.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const ye=dt.getPrimaries(dt.workingColorSpace),he=w.colorSpace===dr?null:dt.getPrimaries(w.colorSpace),ue=w.colorSpace===dr||ye===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const He=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!He&&!oe?xe[ee]=M(w.image[ee],!0,r.maxCubemapSize):xe[ee]=oe?w.image[ee].image:w.image[ee],xe[ee]=at(w,xe[ee]);const De=xe[0],Ie=s.convert(w.format,w.colorSpace),_e=s.convert(w.type),Qe=v(w.internalFormat,Ie,_e,w.colorSpace),Fe=w.isVideoTexture!==!0,mt=Y.__version===void 0||K===!0,I=te.dataReady;let me=S(w,De);le(t.TEXTURE_CUBE_MAP,w);let $;if(He){Fe&&mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Qe,De.width,De.height);for(let ee=0;ee<6;ee++){$=xe[ee].mipmaps;for(let pe=0;pe<$.length;pe++){const ge=$[pe];w.format!==hi?Ie!==null?Fe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,ge.width,ge.height,Ie,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Qe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,ge.width,ge.height,Ie,_e,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Qe,ge.width,ge.height,0,Ie,_e,ge.data)}}}else{if($=w.mipmaps,Fe&&mt){$.length>0&&me++;const ee=Re(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,Ie,_e,xe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,xe[ee].width,xe[ee].height,0,Ie,_e,xe[ee].data);for(let pe=0;pe<$.length;pe++){const et=$[pe].image[ee].image;Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,et.width,et.height,Ie,_e,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Qe,et.width,et.height,0,Ie,_e,et.data)}}else{Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,_e,xe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Ie,_e,xe[ee]);for(let pe=0;pe<$.length;pe++){const ge=$[pe];Fe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ie,_e,ge.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Qe,Ie,_e,ge.image[ee])}}}g(w)&&h(t.TEXTURE_CUBE_MAP),Y.__version=te.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function H(R,w,B,K,te,Y){const ye=s.convert(B.format,B.colorSpace),he=s.convert(B.type),ue=v(B.internalFormat,ye,he,B.colorSpace);if(!i.get(w).__hasExternalTextures){const oe=Math.max(1,w.width>>Y),xe=Math.max(1,w.height>>Y);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Y,ue,oe,xe,w.depth,0,ye,he,null):n.texImage2D(te,Y,ue,oe,xe,0,ye,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),qe(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,i.get(B).__webglTexture,0,Be(w)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,i.get(B).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,w,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const K=w.depthTexture,te=K&&K.isDepthTexture?K.type:null,Y=x(w.stencilBuffer,te),ye=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=Be(w);qe(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,Y,w.width,w.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,Y,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Y,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,R)}else{const K=w.textures;for(let te=0;te<K.length;te++){const Y=K[te],ye=s.convert(Y.format,Y.colorSpace),he=s.convert(Y.type),ue=v(Y.internalFormat,ye,he,Y.colorSpace),He=Be(w);B&&qe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,ue,w.width,w.height):qe(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,ue,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ue,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const K=i.get(w.depthTexture).__webglTexture,te=Be(w);if(w.depthTexture.format===no)qe(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(w.depthTexture.format===xo)qe(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function be(R){const w=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=K}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ce(w.__webglFramebuffer,R)}else if(B){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=t.createRenderbuffer(),ie(w.__webglDepthbuffer[K],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ie(w.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(R,w,B){const K=i.get(R);w!==void 0&&H(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&be(R)}function Ke(R){const w=R.texture,B=i.get(R),K=i.get(w);R.addEventListener("dispose",A);const te=R.textures,Y=R.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=w.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let ue=0;ue<w.mipmaps.length;ue++)B.__webglFramebuffer[he][ue]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ye)for(let he=0,ue=te.length;he<ue;he++){const He=i.get(te[he]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&qe(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const ue=te[he];B.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const He=s.convert(ue.format,ue.colorSpace),oe=s.convert(ue.type),xe=v(ue.internalFormat,He,oe,ue.colorSpace,R.isXRRenderTarget===!0),De=Be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,B.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),le(t.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)H(B.__webglFramebuffer[he][ue],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ue);else H(B.__webglFramebuffer[he],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(w)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let he=0,ue=te.length;he<ue;he++){const He=te[he],oe=i.get(He);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),le(t.TEXTURE_2D,He),H(B.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),g(He)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,K.__webglTexture),le(he,w),w.mipmaps&&w.mipmaps.length>0)for(let ue=0;ue<w.mipmaps.length;ue++)H(B.__webglFramebuffer[ue],R,w,t.COLOR_ATTACHMENT0,he,ue);else H(B.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,he,0);g(w)&&h(he),n.unbindTexture()}R.depthBuffer&&be(R)}function ut(R){const w=R.textures;for(let B=0,K=w.length;B<K;B++){const te=w[B];if(g(te)){const Y=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(te).__webglTexture;n.bindTexture(Y,ye),h(Y),n.unbindTexture()}}}const $e=[],N=[];function bt(R){if(R.samples>0){if(qe(R)===!1){const w=R.textures,B=R.width,K=R.height;let te=t.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(R),he=w.length>1;if(he)for(let ue=0;ue<w.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const He=i.get(w[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,B,K,0,0,B,K,te,t.NEAREST),l===!0&&($e.length=0,N.length=0,$e.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&($e.push(Y),N.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ue=0;ue<w.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const He=i.get(w[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Be(R){return Math.min(r.maxSamples,R.samples)}function qe(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(R){const w=o.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function at(R,w){const B=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ir&&B!==dr&&(dt.getTransfer(B)===Et?(K!==hi||te!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=Ae,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=H,this.useMultisampledRTT=qe}function K2(t,e){function n(i,r=dr){let s;const o=dt.getTransfer(r);if(i===$i)return t.UNSIGNED_BYTE;if(i===Uf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$x)return t.BYTE;if(i===Yx)return t.SHORT;if(i===ba)return t.UNSIGNED_SHORT;if(i===If)return t.INT;if(i===ls)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===La)return t.HALF_FLOAT;if(i===qx)return t.ALPHA;if(i===Kx)return t.RGB;if(i===hi)return t.RGBA;if(i===Qx)return t.LUMINANCE;if(i===Jx)return t.LUMINANCE_ALPHA;if(i===no)return t.DEPTH_COMPONENT;if(i===xo)return t.DEPTH_STENCIL;if(i===Ff)return t.RED;if(i===Of)return t.RED_INTEGER;if(i===ev)return t.RG;if(i===zf)return t.RG_INTEGER;if(i===Bf)return t.RGBA_INTEGER;if(i===Ul||i===kl||i===Fl||i===Ol)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rd||i===sd||i===od||i===ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ld||i===cd)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ud)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hd||i===dd||i===fd||i===pd||i===md||i===gd||i===xd||i===vd||i===_d||i===yd||i===Md||i===Sd||i===Ed||i===wd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===md)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_d)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Md)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ed)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wd)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zl||i===Td||i===bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zl)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Td)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tv||i===Ad||i===Cd||i===Rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===go?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Q2 extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vl extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J2={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tT=`
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

}`;class nT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Rr({vertexShader:eT,fragmentShader:tT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ct(new Vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iT extends ds{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const M=new nT,g=n.getContextAttributes();let h=null,v=null;const x=[],S=[],P=new Le;let A=null;const E=new In;E.layers.enable(1),E.viewport=new xt;const C=new In;C.layers.enable(2),C.viewport=new xt;const O=[E,C],y=new Q2;y.layers.enable(1),y.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let H=x[k];return H===void 0&&(H=new Xu,x[k]=H),H.getTargetRaySpace()},this.getControllerGrip=function(k){let H=x[k];return H===void 0&&(H=new Xu,x[k]=H),H.getGripSpace()},this.getHand=function(k){let H=x[k];return H===void 0&&(H=new Xu,x[k]=H),H.getHandSpace()};function G(k){const H=S.indexOf(k.inputSource);if(H===-1)return;const ie=x[H];ie!==void 0&&(ie.update(k.inputSource,k.frame,c||o),ie.dispatchEvent({type:k.type,data:k.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Q);for(let k=0;k<x.length;k++){const H=S[k];H!==null&&(S[k]=null,x[k].disconnect(H))}T=null,z=null,M.reset(),e.setRenderTarget(h),m=null,f=null,d=null,r=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const H={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,H),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new cs(m.framebufferWidth,m.framebufferHeight,{format:hi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let H=null,ie=null,ce=null;g.depth&&(ce=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,H=g.stencil?xo:no,ie=g.stencil?go:ls);const be={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new cs(f.textureWidth,f.textureHeight,{format:hi,type:$i,depthTexture:new mv(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(k){for(let H=0;H<k.removed.length;H++){const ie=k.removed[H],ce=S.indexOf(ie);ce>=0&&(S[ce]=null,x[ce].disconnect(ie))}for(let H=0;H<k.added.length;H++){const ie=k.added[H];let ce=S.indexOf(ie);if(ce===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=S.length){S.push(ie),ce=Ae;break}else if(S[Ae]===null){S[Ae]=ie,ce=Ae;break}if(ce===-1)break}const be=x[ce];be&&be.connect(ie)}}const W=new D,J=new D;function L(k,H,ie){W.setFromMatrixPosition(H.matrixWorld),J.setFromMatrixPosition(ie.matrixWorld);const ce=W.distanceTo(J),be=H.projectionMatrix.elements,Ae=ie.projectionMatrix.elements,Ke=be[14]/(be[10]-1),ut=be[14]/(be[10]+1),$e=(be[9]+1)/be[5],N=(be[9]-1)/be[5],bt=(be[8]-1)/be[0],Be=(Ae[8]+1)/Ae[0],qe=Ke*bt,Ce=Ke*Be,at=ce/(-bt+Be),Re=at*-bt;if(H.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Re),k.translateZ(at),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),be[10]===-1)k.projectionMatrix.copy(H.projectionMatrix),k.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const R=Ke+at,w=ut+at,B=qe-Re,K=Ce+(ce-Re),te=$e*ut/w*R,Y=N*ut/w*R;k.projectionMatrix.makePerspective(B,K,te,Y,R,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function q(k,H){H===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(H.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let H=k.near,ie=k.far;M.texture!==null&&(M.depthNear>0&&(H=M.depthNear),M.depthFar>0&&(ie=M.depthFar)),y.near=C.near=E.near=H,y.far=C.far=E.far=ie,(T!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,z=y.far);const ce=k.parent,be=y.cameras;q(y,ce);for(let Ae=0;Ae<be.length;Ae++)q(be[Ae],ce);be.length===2?L(y,E,C):y.projectionMatrix.copy(E.projectionMatrix),Z(k,y,ce)};function Z(k,H,ie){ie===null?k.matrix.copy(H.matrixWorld):(k.matrix.copy(ie.matrixWorld),k.matrix.invert(),k.matrix.multiply(H.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(H.projectionMatrix),k.projectionMatrixInverse.copy(H.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Pd*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let le=null;function Te(k,H){if(u=H.getViewerPose(c||o),_=H,u!==null){const ie=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ce=!1;ie.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ae=0;Ae<ie.length;Ae++){const Ke=ie[Ae];let ut=null;if(m!==null)ut=m.getViewport(Ke);else{const N=d.getViewSubImage(f,Ke);ut=N.viewport,Ae===0&&(e.setRenderTargetTextures(v,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(v))}let $e=O[Ae];$e===void 0&&($e=new In,$e.layers.enable(Ae),$e.viewport=new xt,O[Ae]=$e),$e.matrix.fromArray(Ke.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Ke.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ut.x,ut.y,ut.width,ut.height),Ae===0&&(y.matrix.copy($e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push($e)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ae=d.getDepthInformation(ie[0]);Ae&&Ae.isValid&&Ae.texture&&M.init(e,Ae,r.renderState)}}for(let ie=0;ie<x.length;ie++){const ce=S[ie],be=x[ie];ce!==null&&be!==void 0&&be.update(ce,H,c||o)}le&&le(k,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),_=null}const Oe=new fv;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(k){le=k},this.dispose=function(){}}}const Hr=new bi,rT=new vt;function sT(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,uv(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&m(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),M(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===gn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===gn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,S=v.envMapRotation;x&&(g.envMap.value=x,Hr.copy(S),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),g.envMapRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Hr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===gn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",g));const P=x.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function u(v){const x=d();v.__bindingPointIndex=x;const S=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,E=S.length;A<E;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let O=0,y=C.length;O<y;O++){const T=C[O];if(m(T,A,O,P)===!0){const z=T.__offset,G=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let Q=0;Q<G.length;Q++){const W=G[Q],J=M(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,z+X,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,S,P){const A=v.value,E=x+"_"+S;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{const C=P[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(v){const x=v.uniforms;let S=0;const P=16;for(let E=0,C=x.length;E<C;E++){const O=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,T=O.length;y<T;y++){const z=O[y],G=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Q=G.length;X<Q;X++){const W=G[X],J=M(W),L=S%P,q=L%J.boundary,Z=L+q;S+=q,Z!==0&&P-Z<J.storage&&(S+=P-Z),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=J.storage}}}const A=S%P;return A>0&&(S+=P-A),v.__size=S,v.__cache={},this}function M(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class aT{constructor(e={}){const{canvas:n=Y1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let M=null,g=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=wr,this.toneMappingExposure=1;const x=this;let S=!1,P=0,A=0,E=null,C=-1,O=null;const y=new xt,T=new xt;let z=null;const G=new Ge(0);let X=0,Q=n.width,W=n.height,J=1,L=null,q=null;const Z=new xt(0,0,Q,W),le=new xt(0,0,Q,W);let Te=!1;const Oe=new Vf;let k=!1,H=!1;const ie=new vt,ce=new vt,be=new D,Ae=new xt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function $e(){return E===null?J:1}let N=i;function bt(b,U){return n.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Df}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",ge,!1),N===null){const U="webgl2";if(N=bt(U,b),N===null)throw bt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Be,qe,Ce,at,Re,R,w,B,K,te,Y,ye,he,ue,He,oe,xe,De,Ie,_e,Qe,Fe,mt,I;function me(){Be=new dw(N),Be.init(),Fe=new K2(N,Be),qe=new ow(N,Be,e,Fe),Ce=new Y2(N),qe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),at=new mw(N),Re=new D2,R=new q2(N,Be,Ce,Re,qe,Fe,at),w=new lw(x),B=new hw(x),K=new SM(N),mt=new rw(N,K),te=new fw(N,K,at,mt),Y=new xw(N,te,K,at),Ie=new gw(N,qe,R),oe=new aw(Re),ye=new L2(x,w,B,Be,qe,mt,oe),he=new sT(x,Re),ue=new U2,He=new H2(Be),De=new iw(x,w,B,Ce,Y,f,l),xe=new X2(x,Y,qe),I=new oT(N,at,qe,Ce),_e=new sw(N,Be,at),Qe=new pw(N,Be,at),at.programs=ye.programs,x.capabilities=qe,x.extensions=Be,x.properties=Re,x.renderLists=ue,x.shadowMap=xe,x.state=Ce,x.info=at}me();const $=new iT(x,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(Q,W,!1))},this.getSize=function(b){return b.set(Q,W)},this.setSize=function(b,U,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,W=U,n.width=Math.floor(b*J),n.height=Math.floor(U*J),V===!0&&(n.style.width=b+"px",n.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Q*J,W*J).floor()},this.setDrawingBufferSize=function(b,U,V){Q=b,W=U,J=V,n.width=Math.floor(b*V),n.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,U,V,j){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,U,V,j),Ce.viewport(y.copy(Z).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,U,V,j){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,U,V,j),Ce.scissor(T.copy(le).multiplyScalar(J).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(b){Ce.setScissorTest(Te=b)},this.setOpaqueSort=function(b){L=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,U=!0,V=!0){let j=0;if(b){let F=!1;if(E!==null){const se=E.texture.format;F=se===Bf||se===zf||se===Of}if(F){const se=E.texture.type,fe=se===$i||se===ls||se===ba||se===go||se===Uf||se===kf,Me=De.getClearColor(),Se=De.getClearAlpha(),Pe=Me.r,Ne=Me.g,Ee=Me.b;fe?(m[0]=Pe,m[1]=Ne,m[2]=Ee,m[3]=Se,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Pe,_[1]=Ne,_[2]=Ee,_[3]=Se,N.clearBufferiv(N.COLOR,0,_))}else j|=N.COLOR_BUFFER_BIT}U&&(j|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ue.dispose(),He.dispose(),Re.dispose(),w.dispose(),B.dispose(),Y.dispose(),mt.dispose(),I.dispose(),ye.dispose(),$.dispose(),$.removeEventListener("sessionstart",bo),$.removeEventListener("sessionend",gi),Vn.stop()};function ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=at.autoReset,U=xe.enabled,V=xe.autoUpdate,j=xe.needsUpdate,F=xe.type;me(),at.autoReset=b,xe.enabled=U,xe.autoUpdate=V,xe.needsUpdate=j,xe.type=F}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function et(b){const U=b.target;U.removeEventListener("dispose",et),tt(U)}function tt(b){Qt(b),Re.remove(b)}function Qt(b){const U=Re.get(b).programs;U!==void 0&&(U.forEach(function(V){ye.releaseProgram(V)}),b.isShaderMaterial&&ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,j,F,se){U===null&&(U=Ke);const fe=F.isMesh&&F.matrixWorld.determinant()<0,Me=Pt(b,U,V,j,F);Ce.setMaterial(j,fe);let Se=V.index,Pe=1;if(j.wireframe===!0){if(Se=te.getWireframeAttribute(V),Se===void 0)return;Pe=2}const Ne=V.drawRange,Ee=V.attributes.position;let rt=Ne.start*Pe,ht=(Ne.start+Ne.count)*Pe;se!==null&&(rt=Math.max(rt,se.start*Pe),ht=Math.min(ht,(se.start+se.count)*Pe)),Se!==null?(rt=Math.max(rt,0),ht=Math.min(ht,Se.count)):Ee!=null&&(rt=Math.max(rt,0),ht=Math.min(ht,Ee.count));const Mt=ht-rt;if(Mt<0||Mt===1/0)return;mt.setup(F,j,Me,V,Se);let $t,lt=_e;if(Se!==null&&($t=K.get(Se),lt=Qe,lt.setIndex($t)),F.isMesh)j.wireframe===!0?(Ce.setLineWidth(j.wireframeLinewidth*$e()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(F.isLine){let ne=j.linewidth;ne===void 0&&(ne=1),Ce.setLineWidth(ne*$e()),F.isLineSegments?lt.setMode(N.LINES):F.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else F.isPoints?lt.setMode(N.POINTS):F.isSprite&&lt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)lt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))lt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ne=F._multiDrawStarts,ae=F._multiDrawCounts,je=F._multiDrawCount,It=Se?K.get(Se).bytesPerElement:1,it=Re.get(j).currentProgram.getUniforms();for(let st=0;st<je;st++)it.setValue(N,"_gl_DrawID",st),lt.render(ne[st]/It,ae[st])}else if(F.isInstancedMesh)lt.renderInstances(rt,Mt,F.count);else if(V.isInstancedBufferGeometry){const ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ae=Math.min(V.instanceCount,ne);lt.renderInstances(rt,Mt,ae)}else lt.render(rt,Mt)};function nt(b,U,V){b.transparent===!0&&b.side===Un&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,ze(b,U,V),b.side=Ar,b.needsUpdate=!0,ze(b,U,V),b.side=Un):ze(b,U,V)}this.compile=function(b,U,V=null){V===null&&(V=b),g=He.get(V),g.init(U),v.push(g),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),b!==V&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const j=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const Me=se[fe];nt(Me,V,F),j.add(Me)}else nt(se,V,F),j.add(se)}),v.pop(),g=null,j},this.compileAsync=function(b,U,V=null){const j=this.compile(b,U,V);return new Promise(F=>{function se(){if(j.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&j.delete(fe)}),j.size===0){F(b);return}setTimeout(se,10)}Be.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Jt=null;function Gn(b){Jt&&Jt(b)}function bo(){Vn.stop()}function gi(){Vn.start()}const Vn=new fv;Vn.setAnimationLoop(Gn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(b){Jt=b,$.setAnimationLoop(b),b===null?Vn.stop():Vn.start()},$.addEventListener("sessionstart",bo),$.addEventListener("sessionend",gi),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,E),g=He.get(b,v.length),g.init(U),v.push(g),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Oe.setFromProjectionMatrix(ce),H=this.localClippingEnabled,k=oe.init(this.clippingPlanes,H),M=ue.get(b,h.length),M.init(),h.push(M),$.enabled===!0&&$.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&Zi(se,U,-1/0,x.sortObjects)}Zi(b,U,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(L,q),ut=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ut&&De.addToRenderList(M,b),this.info.render.frame++,k===!0&&oe.beginShadows();const V=g.state.shadowsArray;xe.render(V,b,U),k===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=M.opaque,F=M.transmissive;if(g.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let fe=0,Me=se.length;fe<Me;fe++){const Se=se[fe];Ao(j,F,b,Se)}ut&&De.render(b);for(let fe=0,Me=se.length;fe<Me;fe++){const Se=se[fe];ps(M,b,Se,Se.viewport)}}else F.length>0&&Ao(j,F,b,U),ut&&De.render(b),ps(M,b,U);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,U),mt.resetDefaultState(),C=-1,O=null,v.pop(),v.length>0?(g=v[v.length-1],k===!0&&oe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function Zi(b,U,V,j){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Oe.intersectsSprite(b)){j&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const fe=Y.update(b),Me=b.material;Me.visible&&M.push(b,fe,Me,V,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Oe.intersectsObject(b))){const fe=Y.update(b),Me=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ae.copy(fe.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){const Se=fe.groups;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++){const Ee=Se[Pe],rt=Me[Ee.materialIndex];rt&&rt.visible&&M.push(b,fe,rt,V,Ae.z,Ee)}}else Me.visible&&M.push(b,fe,Me,V,Ae.z,null)}}const se=b.children;for(let fe=0,Me=se.length;fe<Me;fe++)Zi(se[fe],U,V,j)}function ps(b,U,V,j){const F=b.opaque,se=b.transmissive,fe=b.transparent;g.setupLightsView(V),k===!0&&oe.setGlobalState(x.clippingPlanes,V),j&&Ce.viewport(y.copy(j)),F.length>0&&Ur(F,U,V),se.length>0&&Ur(se,U,V),fe.length>0&&Ur(fe,U,V),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ao(b,U,V,j){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new cs(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?La:$i,minFilter:Qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const se=g.state.transmissionRenderTarget[j.id],fe=j.viewport||y;se.setSize(fe.z,fe.w);const Me=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(G),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),ut&&De.render(V);const Se=x.toneMapping;x.toneMapping=wr;const Pe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),k===!0&&oe.setGlobalState(x.clippingPlanes,j),Ur(b,V,j),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ee=0,rt=U.length;Ee<rt;Ee++){const ht=U[Ee],Mt=ht.object,$t=ht.geometry,lt=ht.material,ne=ht.group;if(lt.side===Un&&Mt.layers.test(j.layers)){const ae=lt.side;lt.side=gn,lt.needsUpdate=!0,Co(Mt,V,j,$t,lt,ne),lt.side=ae,lt.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}x.setRenderTarget(Me),x.setClearColor(G,X),Pe!==void 0&&(j.viewport=Pe),x.toneMapping=Se}function Ur(b,U,V){const j=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=b.length;F<se;F++){const fe=b[F],Me=fe.object,Se=fe.geometry,Pe=j===null?fe.material:j,Ne=fe.group;Me.layers.test(V.layers)&&Co(Me,U,V,Se,Pe,Ne)}}function Co(b,U,V,j,F,se){b.onBeforeRender(x,U,V,j,F,se),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,U,V,j,b,se),F.transparent===!0&&F.side===Un&&F.forceSinglePass===!1?(F.side=gn,F.needsUpdate=!0,x.renderBufferDirect(V,U,j,F,b,se),F.side=Ar,F.needsUpdate=!0,x.renderBufferDirect(V,U,j,F,b,se),F.side=Un):x.renderBufferDirect(V,U,j,F,b,se),b.onAfterRender(x,U,V,j,F,se)}function ze(b,U,V){U.isScene!==!0&&(U=Ke);const j=Re.get(b),F=g.state.lights,se=g.state.shadowsArray,fe=F.state.version,Me=ye.getParameters(b,F.state,se,U,V),Se=ye.getProgramCacheKey(Me);let Pe=j.programs;j.environment=b.isMeshStandardMaterial?U.environment:null,j.fog=U.fog,j.envMap=(b.isMeshStandardMaterial?B:w).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",et),Pe=new Map,j.programs=Pe);let Ne=Pe.get(Se);if(Ne!==void 0){if(j.currentProgram===Ne&&j.lightsStateVersion===fe)return Ot(b,Me),Ne}else Me.uniforms=ye.getUniforms(b),b.onBeforeCompile(Me,x),Ne=ye.acquireProgram(Me,Se),Pe.set(Se,Ne),j.uniforms=Me.uniforms;const Ee=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ee.clippingPlanes=oe.uniform),Ot(b,Me),j.needsLights=Nt(b),j.lightsStateVersion=fe,j.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),j.currentProgram=Ne,j.uniformsList=null,Ne}function Ve(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Gl.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ot(b,U){const V=Re.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Pt(b,U,V,j,F){U.isScene!==!0&&(U=Ke),R.resetTextureUnits();const se=U.fog,fe=j.isMeshStandardMaterial?U.environment:null,Me=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ir,Se=(j.isMeshStandardMaterial?B:w).get(j.envMap||fe),Pe=j.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ee=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color;let Mt=wr;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const $t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=$t!==void 0?$t.length:0,ne=Re.get(j),ae=g.state.lights;if(k===!0&&(H===!0||b!==O)){const Ut=b===O&&j.id===C;oe.setState(j,b,Ut)}let je=!1;j.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==ae.state.version||ne.outputColorSpace!==Me||F.isBatchedMesh&&ne.batching===!1||!F.isBatchedMesh&&ne.batching===!0||F.isBatchedMesh&&ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ne.instancing===!1||!F.isInstancedMesh&&ne.instancing===!0||F.isSkinnedMesh&&ne.skinning===!1||!F.isSkinnedMesh&&ne.skinning===!0||F.isInstancedMesh&&ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ne.instancingMorph===!1&&F.morphTexture!==null||ne.envMap!==Se||j.fog===!0&&ne.fog!==se||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==oe.numPlanes||ne.numIntersection!==oe.numIntersection)||ne.vertexAlphas!==Pe||ne.vertexTangents!==Ne||ne.morphTargets!==Ee||ne.morphNormals!==rt||ne.morphColors!==ht||ne.toneMapping!==Mt||ne.morphTargetsCount!==lt)&&(je=!0):(je=!0,ne.__version=j.version);let It=ne.currentProgram;je===!0&&(It=ze(j,U,F));let it=!1,st=!1,Rn=!1;const Xe=It.getUniforms(),xi=ne.uniforms;if(Ce.useProgram(It.program)&&(it=!0,st=!0,Rn=!0),j.id!==C&&(C=j.id,st=!0),it||O!==b){qe.reverseDepthBuffer?(ie.copy(b.projectionMatrix),q1(ie),K1(ie),Xe.setValue(N,"projectionMatrix",ie)):Xe.setValue(N,"projectionMatrix",b.projectionMatrix),Xe.setValue(N,"viewMatrix",b.matrixWorldInverse);const Ut=Xe.map.cameraPosition;Ut!==void 0&&Ut.setValue(N,be.setFromMatrixPosition(b.matrixWorld)),qe.logarithmicDepthBuffer&&Xe.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Xe.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,st=!0,Rn=!0)}if(F.isSkinnedMesh){Xe.setOptional(N,F,"bindMatrix"),Xe.setOptional(N,F,"bindMatrixInverse");const Ut=F.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Xe.setValue(N,"boneTexture",Ut.boneTexture,R))}F.isBatchedMesh&&(Xe.setOptional(N,F,"batchingTexture"),Xe.setValue(N,"batchingTexture",F._matricesTexture,R),Xe.setOptional(N,F,"batchingIdTexture"),Xe.setValue(N,"batchingIdTexture",F._indirectTexture,R),Xe.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&Xe.setValue(N,"batchingColorTexture",F._colorsTexture,R));const Ai=V.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Ie.update(F,V,It),(st||ne.receiveShadow!==F.receiveShadow)&&(ne.receiveShadow=F.receiveShadow,Xe.setValue(N,"receiveShadow",F.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(xi.envMap.value=Se,xi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&U.environment!==null&&(xi.envMapIntensity.value=U.environmentIntensity),st&&(Xe.setValue(N,"toneMappingExposure",x.toneMappingExposure),ne.needsLights&&Cn(xi,Rn),se&&j.fog===!0&&he.refreshFogUniforms(xi,se),he.refreshMaterialUniforms(xi,j,J,W,g.state.transmissionRenderTarget[b.id]),Gl.upload(N,Ve(ne),xi,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Gl.upload(N,Ve(ne),xi,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Xe.setValue(N,"center",F.center),Xe.setValue(N,"modelViewMatrix",F.modelViewMatrix),Xe.setValue(N,"normalMatrix",F.normalMatrix),Xe.setValue(N,"modelMatrix",F.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ut=j.uniformsGroups;for(let Ci=0,qi=Ut.length;Ci<qi;Ci++){const Ki=Ut[Ci];I.update(Ki,It),I.bind(Ki,It)}}return It}function Cn(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Nt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,U,V){Re.get(b.texture).__webglTexture=U,Re.get(b.depthTexture).__webglTexture=V;const j=Re.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=V===void 0,j.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const V=Re.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,V=0){E=b,P=U,A=V;let j=!0,F=null,se=!1,fe=!1;if(b){const Se=Re.get(b);if(Se.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Se.__hasExternalTextures)R.rebindTextures(b,Re.get(b.texture).__webglTexture,Re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ee=b.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Re.has(Ee)&&(b.width!==Ee.image.width||b.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const Ne=Re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?F=Ne[U][V]:F=Ne[U],se=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?F=Re.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[V]:F=Ne,y.copy(b.viewport),T.copy(b.scissor),z=b.scissorTest}else y.copy(Z).multiplyScalar(J).floor(),T.copy(le).multiplyScalar(J).floor(),z=Te;if(Ce.bindFramebuffer(N.FRAMEBUFFER,F)&&j&&Ce.drawBuffers(b,F),Ce.viewport(y),Ce.scissor(T),Ce.setScissorTest(z),se){const Se=Re.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,V)}else if(fe){const Se=Re.get(b.texture),Pe=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Pe)}C=-1},this.readRenderTargetPixels=function(b,U,V,j,F,se,fe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){Ce.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Se=b.texture,Pe=Se.format,Ne=Se.type;if(!qe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-j&&V>=0&&V<=b.height-F&&N.readPixels(U,V,j,F,Fe.convert(Pe),Fe.convert(Ne),se)}finally{const Se=E!==null?Re.get(E).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,j,F,se,fe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){const Se=b.texture,Pe=Se.format,Ne=Se.type;if(!qe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-j&&V>=0&&V<=b.height-F){Ce.bindFramebuffer(N.FRAMEBUFFER,Me);const Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(U,V,j,F,Fe.convert(Pe),Fe.convert(Ne),0);const rt=E!==null?Re.get(E).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,rt);const ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Z1(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(Ee),N.deleteSync(ht),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,V=0){b.isTexture!==!0&&(Hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const j=Math.pow(2,-V),F=Math.floor(b.image.width*j),se=Math.floor(b.image.height*j),fe=U!==null?U.x:0,Me=U!==null?U.y:0;R.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,fe,Me,F,se),Ce.unbindTexture()},this.copyTextureToTexture=function(b,U,V=null,j=null,F=0){b.isTexture!==!0&&(Hl("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let se,fe,Me,Se,Pe,Ne;V!==null?(se=V.max.x-V.min.x,fe=V.max.y-V.min.y,Me=V.min.x,Se=V.min.y):(se=b.image.width,fe=b.image.height,Me=0,Se=0),j!==null?(Pe=j.x,Ne=j.y):(Pe=0,Ne=0);const Ee=Fe.convert(U.format),rt=Fe.convert(U.type);R.setTexture2D(U,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=N.getParameter(N.UNPACK_ROW_LENGTH),Mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),$t=N.getParameter(N.UNPACK_SKIP_PIXELS),lt=N.getParameter(N.UNPACK_SKIP_ROWS),ne=N.getParameter(N.UNPACK_SKIP_IMAGES),ae=b.isCompressedTexture?b.mipmaps[F]:b.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Se),b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Pe,Ne,se,fe,Ee,rt,ae.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Pe,Ne,ae.width,ae.height,Ee,ae.data):N.texSubImage2D(N.TEXTURE_2D,F,Pe,Ne,se,fe,Ee,rt,ae),N.pixelStorei(N.UNPACK_ROW_LENGTH,ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$t),N.pixelStorei(N.UNPACK_SKIP_ROWS,lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ne),F===0&&U.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(b,U,V=null,j=null,F=0){b.isTexture!==!0&&(Hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,j=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0);let se,fe,Me,Se,Pe,Ne,Ee,rt,ht;const Mt=b.isCompressedTexture?b.mipmaps[F]:b.image;V!==null?(se=V.max.x-V.min.x,fe=V.max.y-V.min.y,Me=V.max.z-V.min.z,Se=V.min.x,Pe=V.min.y,Ne=V.min.z):(se=Mt.width,fe=Mt.height,Me=Mt.depth,Se=0,Pe=0,Ne=0),j!==null?(Ee=j.x,rt=j.y,ht=j.z):(Ee=0,rt=0,ht=0);const $t=Fe.convert(U.format),lt=Fe.convert(U.type);let ne;if(U.isData3DTexture)R.setTexture3D(U,0),ne=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),ne=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const ae=N.getParameter(N.UNPACK_ROW_LENGTH),je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),It=N.getParameter(N.UNPACK_SKIP_PIXELS),it=N.getParameter(N.UNPACK_SKIP_ROWS),st=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne),b.isDataTexture||b.isData3DTexture?N.texSubImage3D(ne,F,Ee,rt,ht,se,fe,Me,$t,lt,Mt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(ne,F,Ee,rt,ht,se,fe,Me,$t,Mt.data):N.texSubImage3D(ne,F,Ee,rt,ht,se,fe,Me,$t,lt,Mt),N.pixelStorei(N.UNPACK_ROW_LENGTH,ae),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,It),N.pixelStorei(N.UNPACK_SKIP_ROWS,it),N.pixelStorei(N.UNPACK_SKIP_IMAGES,st),F===0&&U.generateMipmaps&&N.generateMipmap(ne),Ce.unbindTexture()},this.initRenderTarget=function(b){Re.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,Ce.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",n.unpackColorSpace=dt.workingColorSpace===Hc?"display-p3":"srgb"}}class Wf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=n,this.far=i}clone(){return new Wf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yv extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class lT extends hn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=wn,u=wn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr extends On{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new vt,ig=new vt,_l=[],rg=new fs,cT=new vt,Vo=new ct,jo=new So;class Wn extends ct{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,cT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new fs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ps),rg.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(rg)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ps),jo.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(jo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(i),e.ray.intersectsSphere(jo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ps),ig.multiplyMatrices(i,Ps),Vo.matrixWorld=ig,Vo.raycast(e,_l);for(let o=0,a=_l.length;o<a;o++){const l=_l[o];l.instanceId=s,l.object=this,n.push(l)}_l.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new lT(new Float32Array(r*this.count),r,this.count,Ff,Si));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Mv extends Eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _c=new D,yc=new D,sg=new vt,Wo=new Gc,yl=new So,$u=new D,og=new D;class uT extends jt{constructor(e=new _n,n=new Mv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_c.fromBufferAttribute(n,r-1),yc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_c.distanceTo(yc);e.setAttribute("lineDistance",new _t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),yl.radius+=s,e.ray.intersectsSphere(yl)===!1)return;sg.copy(r).invert(),Wo.copy(e.ray).applyMatrix4(sg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=m,g=_-1;M<g;M+=c){const h=u.getX(M),v=u.getX(M+1),x=Ml(this,e,Wo,l,h,v);x&&n.push(x)}if(this.isLineLoop){const M=u.getX(_-1),g=u.getX(m),h=Ml(this,e,Wo,l,M,g);h&&n.push(h)}}else{const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let M=m,g=_-1;M<g;M+=c){const h=Ml(this,e,Wo,l,M,M+1);h&&n.push(h)}if(this.isLineLoop){const M=Ml(this,e,Wo,l,_-1,m);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ml(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(_c.fromBufferAttribute(o,r),yc.fromBufferAttribute(o,s),n.distanceSqToSegment(_c,yc,$u,og)>i)return;$u.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo($u);if(!(l<e.near||l>e.far))return{distance:l,point:og.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const ag=new D,lg=new D;class hT extends uT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ag.fromBufferAttribute(n,r),lg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ag.distanceTo(lg);e.setAttribute("lineDistance",new _t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sv extends hn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mc extends _n{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,u=new Le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const m=i+d/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ro extends _n{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],m=[];let _=0;const M=[],g=i/2;let h=0;v(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(m,2));function v(){const S=new D,P=new D;let A=0;const E=(n-e)/i;for(let C=0;C<=s;C++){const O=[],y=C/s,T=y*(n-e)+e;for(let z=0;z<=r;z++){const G=z/r,X=G*l+a,Q=Math.sin(X),W=Math.cos(X);P.x=T*Q,P.y=-y*i+g,P.z=T*W,d.push(P.x,P.y,P.z),S.set(Q,E,W).normalize(),f.push(S.x,S.y,S.z),m.push(G,1-y),O.push(_++)}M.push(O)}for(let C=0;C<r;C++)for(let O=0;O<s;O++){const y=M[O][C],T=M[O+1][C],z=M[O+1][C+1],G=M[O][C+1];e>0&&(u.push(y,T,G),A+=3),n>0&&(u.push(T,z,G),A+=3)}c.addGroup(h,A,0),h+=A}function x(S){const P=_,A=new Le,E=new D;let C=0;const O=S===!0?e:n,y=S===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,g*y,0),f.push(0,y,0),m.push(.5,.5),_++;const T=_;for(let z=0;z<=r;z++){const X=z/r*l+a,Q=Math.cos(X),W=Math.sin(X);E.x=O*W,E.y=g*y,E.z=O*Q,d.push(E.x,E.y,E.z),f.push(0,y,0),A.x=Q*.5+.5,A.y=W*.5*y+.5,m.push(A.x,A.y),_++}for(let z=0;z<r;z++){const G=P+z,X=T+z;S===!0?u.push(X,X+1,G):u.push(X+1,X,G),C+=3}c.addGroup(h,C,S===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class aa extends ro{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new aa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xf extends _n{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new D,S=new D,P=new D;for(let A=0;A<n.length;A+=3)m(n[A+0],x),m(n[A+1],S),m(n[A+2],P),l(x,S,P,v)}function l(v,x,S,P){const A=P+1,E=[];for(let C=0;C<=A;C++){E[C]=[];const O=v.clone().lerp(S,C/A),y=x.clone().lerp(S,C/A),T=A-C;for(let z=0;z<=T;z++)z===0&&C===A?E[C][z]=O:E[C][z]=O.clone().lerp(y,z/T)}for(let C=0;C<A;C++)for(let O=0;O<2*(A-C)-1;O++){const y=Math.floor(O/2);O%2===0?(f(E[C][y+1]),f(E[C+1][y]),f(E[C][y])):(f(E[C][y+1]),f(E[C+1][y+1]),f(E[C+1][y]))}}function c(v){const x=new D;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(v),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const v=new D;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const S=g(v)/2/Math.PI+.5,P=h(v)/Math.PI+.5;o.push(S,1-P)}_(),d()}function d(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],P=o[v+4],A=Math.max(x,S,P),E=Math.min(x,S,P);A>.9&&E<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function m(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function _(){const v=new D,x=new D,S=new D,P=new D,A=new Le,E=new Le,C=new Le;for(let O=0,y=0;O<s.length;O+=9,y+=6){v.set(s[O+0],s[O+1],s[O+2]),x.set(s[O+3],s[O+4],s[O+5]),S.set(s[O+6],s[O+7],s[O+8]),A.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),P.copy(v).add(x).add(S).divideScalar(3);const T=g(P);M(A,y+0,v,T),M(E,y+2,x,T),M(C,y+4,S,T)}}function M(v,x,S,P){P<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=P/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function h(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.vertices,e.indices,e.radius,e.details)}}class $s extends Xf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $s(e.radius,e.detail)}}class $f extends _n{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,m=new D,_=new Le;for(let M=0;M<=r;M++){for(let g=0;g<=i;g++){const h=s+g/i*o;m.x=d*Math.cos(h),m.y=d*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/n+1)/2,_.y=(m.y/n+1)/2,u.push(_.x,_.y)}d+=f}for(let M=0;M<r;M++){const g=M*(i+1);for(let h=0;h<i;h++){const v=h+g,x=v,S=v+i+1,P=v+i+2,A=v+1;a.push(x,S,A),a.push(S,P,A)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $r extends _n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new D,f=new D,m=[],_=[],M=[],g=[];for(let h=0;h<=i;h++){const v=[],x=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const A=P/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),g.push(A+S,1-x),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const x=u[h][v+1],S=u[h][v],P=u[h+1][v],A=u[h+1][v+1];(h!==0||o>0)&&m.push(x,S,A),(h!==i-1||l<Math.PI)&&m.push(S,P,A)}this.setIndex(m),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sc extends _n{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new D,d=new D,f=new D;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const M=_/r*s,g=m/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(M),d.y=(e+n*Math.cos(g))*Math.sin(M),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const M=(r+1)*m+_-1,g=(r+1)*(m-1)+_-1,h=(r+1)*(m-1)+_,v=(r+1)*m+_;o.push(M,g,v),o.push(g,h,v)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class en extends Eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dT extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yf extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class fT extends Yf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Yu=new vt,cg=new D,ug=new D;class Ev{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vf,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cg.setFromMatrixPosition(e.matrixWorld),n.position.copy(cg),ug.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ug),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hg=new vt,Xo=new D,Zu=new D;class pT extends Ev{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xo),Zu.copy(i.position),Zu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zu),i.updateMatrixWorld(),r.makeTranslation(-Xo.x,-Xo.y,-Xo.z),hg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hg)}}class wv extends Yf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mT extends Ev{constructor(){super(new pv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dg extends Yf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new mT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fg=new vt;class gT{constructor(e,n,i=0,r=1/0){this.ray=new Gc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Gf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return fg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fg),this}intersectObject(e,n=!0,i=[]){return Dd(e,this,i,n),i.sort(pg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Dd(e[r],this,i,n);return i.sort(pg),i}}function pg(t,e){return t.distance-e.distance}function Dd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Dd(s[o],e,n,!0)}}class mg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(un(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xT extends ds{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);const gg={type:"change"},Zf={type:"start"},Tv={type:"end"},Sl=new Gc,xg=new Oi,vT=Math.cos(70*$1.DEG2RAD),Ht=new D,Mn=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qu=1e-6;class _T extends xT{constructor(e,n=null){super(e,n),this.state=gt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:eo.ROTATE,MIDDLE:eo.DOLLY,RIGHT:eo.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Cr,this._lastTargetPosition=new D,this._quat=new Cr().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mg,this._sphericalDelta=new mg,this._scale=1,this._panOffset=new D,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new D,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MT.bind(this),this._onPointerDown=yT.bind(this),this._onPointerUp=ST.bind(this),this._onContextMenu=RT.bind(this),this._onMouseWheel=TT.bind(this),this._onKeyDown=bT.bind(this),this._onTouchStart=AT.bind(this),this._onTouchMove=CT.bind(this),this._onMouseDown=ET.bind(this),this._onMouseMove=wT.bind(this),this._interceptControlDown=PT.bind(this),this._interceptControlUp=NT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gg),this.update(),this.state=gt.NONE}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),r<-Math.PI?r+=Mn:r>Math.PI&&(r-=Mn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Sl.origin.copy(this.object.position),Sl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sl.direction))<vT?this.object.lookAt(this.target):(xg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sl.intersectPlane(xg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qu||this._lastTargetPosition.distanceToSquared(this.target)>qu?(this.dispatchEvent(gg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ht.copy(r).sub(this.target);let s=Ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Le,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function MT(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function ST(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tv),this.state=gt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function ET(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case eo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=gt.DOLLY;break;case eo.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}break;case eo.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Zf)}function wT(t){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function TT(t){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(t.preventDefault(),this.dispatchEvent(Zf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Tv))}function bT(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function AT(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=gt.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=gt.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Zf)}function CT(t){switch(this._trackPointer(t),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=gt.NONE}}function RT(t){this.enabled!==!1&&t.preventDefault()}function PT(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NT(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class LT extends yv{constructor(){super();const e=new wo;e.deleteAttribute("uv");const n=new en({side:gn}),i=new en,r=new wv(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ct(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new ct(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ct(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ct(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ct(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new ct(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new ct(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new ct(e,Ns(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const m=new ct(e,Ns(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const _=new ct(e,Ns(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const M=new ct(e,Ns(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const g=new ct(e,Ns(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const h=new ct(e,Ns(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Ns(t){const e=new Jr;return e.color.setScalar(t),e}const Id=[{id:"bigbang",zh:"大爆炸",en:"Big Bang",eraMa:13800,icon:"event-burst",hue:"#e8c46a",category:"宇宙",realZh:"138 亿年前，空间、时间与能量从一点中诞生。宇宙最初是纯粹的高能等离子体，随后冷却出第一批氢、氦与锂。",effectZh:"把整个沙盒归零：清空所有生物与历史，回到时间起点重新接种。"},{id:"hadean",zh:"冥古宙的闷热",en:"Hadean hell",eraMa:4e3,icon:"event-magma",hue:"#e2663f",category:"地质",realZh:"地球是一颗刚诞生的岩浆球，表面被熔岩覆盖，海洋尚未形成，大气以二氧化碳与水蒸气为主。",effectZh:"温度锁死到极热 600 tick：代谢与养分消耗同步暴涨，活得快的死得也快。"},{id:"luca",zh:"第一次生命",en:"LUCA",eraMa:3800,icon:"event-cell",hue:"#84b96b",category:"生命",realZh:"最后共同祖先：地球生命共同的起点，一个能自我复制、能代谢的原始细胞。",effectZh:"推倒重来，重新接种 200 个一模一样的原始单细胞。"},{id:"greatoxidation",zh:"大氧化事件",en:"Great Oxidation Event",eraMa:2400,icon:"event-goe",hue:"#d9a441",category:"气候",realZh:"产氧光合铺开，氧气第一次在大气中积累。对当时绝大多数厌氧生物而言，这是一场毒气浩劫。",effectZh:"62% 的厌氧生物当场死亡；氧气浓度永久上升，有氧呼吸从此占优。"},{id:"eukaryote",zh:"真核细胞的诞生",en:"Eukaryogenesis",eraMa:1800,icon:"event-cell",hue:"#c9762e",category:"生命",realZh:"一个古菌吞下一枚 α-变形菌却没有消化它 —— 内共生由此开始，线粒体诞生，真核细胞出现。",effectZh:"所有个体获得线粒体（能耗骤降 35%），并首次具备吞噬能力，分解者开始分化。"},{id:"snowball",zh:"雪球地球",en:"Snowball Earth",eraMa:720,icon:"event-snowball",hue:"#7fa8bd",category:"气候",realZh:"成冰纪把整个地球冻成一个白色的球，冰盖一直延伸到赤道，海洋表面结冰数百米。",effectZh:"气温骤降 420 tick：食物锐减、代谢变慢，只有能形成芽孢的谱系能活下来。"},{id:"cambrian",zh:"寒武纪爆发",en:"Cambrian Explosion",eraMa:541,icon:"event-cambrian",hue:"#c08a9e",category:"生命",realZh:"几乎所有现代动物门类在两千万年内集中登场：眼睛、外骨骼、捕食、颌、肠道同时出现。",effectZh:"突变率暴涨 2.5 倍并持续 320 tick —— 身体蓝图在极短时间内集中涌现。"},{id:"ordovician",zh:"奥陶纪末大灭绝",en:"End-Ordovician extinction",eraMa:444,icon:"event-impact",hue:"#8d99a6",category:"灾变",realZh:"冈瓦纳大陆漂向南极引发急剧冰期，60% 的海洋生物在寒冷中消失，是五次大灭绝中第一次。",effectZh:"60% 个体死亡，海洋与浅水生态位被清空。"},{id:"landplants",zh:"陆地植物登陆",en:"Land plants",eraMa:470,icon:"chloroplast",hue:"#84b96b",category:"生命",realZh:"苔藓类祖先爬上陆地，开始在土壤中生长并制造土壤，改变了大气中的氧气含量。",effectZh:"光合者大量涌现，有机养分供给显著上升。"},{id:"insects",zh:"昆虫辐射",en:"Insect radiation",eraMa:400,icon:"event-insect",hue:"#b5652e",category:"生命",realZh:"植物与含氧空气让昆虫得以小型化并爆发式多样化，成为地球上最成功的类群之一。",effectZh:"全体体型缩小、繁殖加快，数量激增但个体更脆弱。"},{id:"forests",zh:"巨型蕨类森林",en:"Coal forests",eraMa:380,icon:"event-tree",hue:"#5aa89b",category:"地质",realZh:"鳞木与树蕨长成数十米高的森林，埋下的残骸经亿万年高压高温变成了今天的煤。",effectZh:"有机养分供给翻倍，同时气温略降 —— 大量碳被埋进地下。"},{id:"tetrapods",zh:"鱼类登陆",en:"Tetrapods on land",eraMa:380,icon:"flagellum",hue:"#4fb3c4",category:"生命",realZh:"提塔利克鱼用鳍状肢撑起身体，成为四足动物的祖先。",effectZh:"猎手体型上限提高 15%，捕食能力整体上移一个台阶。"},{id:"pangaea",zh:"冈瓦纳大陆分裂",en:"Pangaea breakup",eraMa:175,icon:"event-pangaea",hue:"#a89b83",category:"地质",realZh:"超大陆裂成南北两块，大陆漂移让基因流中断 —— 隔离正是物种形成的引擎。",effectZh:"群体分裂成两个互不往来的族群，各自独立演化。"},{id:"dinosaurs",zh:"恐龙时代",en:"Age of Dinosaurs",eraMa:230,icon:"event-dinosaur",hue:"#e2663f",category:"生命",realZh:"三叠纪末大灭绝让恐龙接管陆地，随后统治了一亿六千万年。",effectZh:"全体获得鳞甲（防御 ×1.5），猎手体型上限再提高 25%。"},{id:"permian",zh:"二叠纪末大灭绝",en:"Great Dying",eraMa:252,icon:"event-impact",hue:"#8d3b3b",category:"灾变",realZh:"西伯利亚暗色岩浆活动持续数十万年，海洋酸化缺氧，96% 的海洋物种与 70% 的陆生脊椎动物消失。",effectZh:"96% 个体死亡 —— 生态位几乎清空，这是五次大灭绝中最惨烈的一次。"},{id:"cretaceous",zh:"白垩纪末撞击",en:"Chicxulub impact",eraMa:66,icon:"event-impact",hue:"#b5652e",category:"灾变",realZh:"一颗直径 10 公里的小行星撞进今天的尤卡坦半岛，尘埃遮蔽阳光数年，全球生态链断裂。",effectZh:"90% 个体死亡，大型猎手优先覆灭。"},{id:"mammals",zh:"哺乳动物辐射",en:"Mammal radiation",eraMa:66,icon:"event-mammal",hue:"#c08a9e",category:"生命",realZh:"恐龙退场后，空出的生态位被小型哺乳动物迅速填满，体型与多样性都大幅上升。",effectZh:"猎手被小型哺乳替代（体型上限下调），分解者因尸体暴增而繁盛。"},{id:"iceage",zh:"第四纪冰期",en:"Quaternary ice age",eraMa:2.6,icon:"event-snowball",hue:"#7fa8bd",category:"气候",realZh:"冰盖反复进退，冰期与间冰期轮替，人类就是在最近一次间冰期里出现的。",effectZh:"气温持续下降 800 tick：代谢变慢，而个体趋向大型化。"},{id:"anthropocene",zh:"人类世",en:"Anthropocene",eraMa:.01,icon:"event-human",hue:"#d9a441",category:"现在",realZh:"人类活动把大气碳、二氧化碳与氮循环推到了 30 万年来的最高点，物种迁移速率创下纪录。",effectZh:"养分供给翻倍，环境全面可控 —— 但也就到此为止了。"}],DT=Object.fromEntries(Id.map(t=>[t.id,t])),IT=["宇宙","地质","气候","生命","灾变","现在"];function UT(t){if(t>=1e3){const e=t/1e3;return`${e%1===0?e:e.toFixed(1)} 十亿年前`}return t>=1?`${t} 百万年前`:`${Math.round(t*1e4)} 万年前`}const kT={speed:1,sense:1,attack:1,defense:1,upkeep:1,energyGain:1,foodGain:1,eatRange:0,attackRange:0,size:1},qt={flagellum:{id:"flagellum",zh:"鞭毛",en:"Flagellum",icon:"flagellum",hue:"#7fa8bd",descZh:"游动速度 ×1.45",descEn:"Swim speed x1.45",realZh:"大肠杆菌的旋转鞭毛",realEn:"The rotary flagellum of E. coli",eraMa:3500,branch:"细菌",mods:{speed:1.45},noteZh:"地球上最早的运动器官，让细菌能逆着浓度梯度游动。",noteEn:"The earliest locomotion organ: lets bacteria swim against gradients."},cilia:{id:"cilia",zh:"纤毛",en:"Cilia",icon:"cilia",hue:"#9cc3d0",descZh:"转向更灵活，感知 ×1.3",descEn:"Finer steering, sense x1.3",realZh:"草履虫周围成千上万根纤毛",realEn:"Thousands of cilia ringing a Paramecium",eraMa:1e3,branch:"真核",prereq:["flagellum"],mods:{speed:1.12,sense:1.3},noteZh:"真核细胞用纤毛做精密运动，这也是动物胚胎「旋转细胞」的原语。",noteEn:"Eukaryotic cilia power precise motion — the same primitive used by animal embryos."},tentacle:{id:"tentacle",zh:"触手",en:"Tentacle",icon:"tentacle",hue:"#e2663f",descZh:"攻击距离 +40%，攻击 ×1.25，但能耗 ×1.2",descEn:"Attack range +40, attack x1.25, upkeep x1.2",realZh:"水母与海葵的刺细胞触手",realEn:"Tentacles bearing cnidocytes in jellyfish and anemones",eraMa:600,branch:"动物",prereq:["toxin"],mods:{attack:1.25,attackRange:40,upkeep:1.2},flags:{tentacle:!0},noteZh:"刺胞动物的「真身」武器：不用靠近，先把毒素射出去。",noteEn:"Cnidarians brought ranged weaponry: strike first, from a distance."},pseudopod:{id:"pseudopod",zh:"伪足",en:"Pseudopod",icon:"pseudopod",hue:"#c98a6a",descZh:"可以吞下比自己更大的食物，游速 ×0.8",descEn:"Can engulf food larger than itself, speed x0.8",realZh:"变形虫伸出的伪足",realEn:"The flowing pseudopods of an amoeba",eraMa:1200,branch:"真核",prereq:["mitochondria"],mods:{speed:.8,eatRange:10},flags:{engulf:!0},noteZh:"吞噬式进食：真核细胞第一次把固体食物整个包进体内。",noteEn:"Phagocytosis: eukaryotes began engulfing solid food whole."},mitochondria:{id:"mitochondria",zh:"线粒体",en:"Mitochondria",icon:"mitochondria",hue:"#c9762e",descZh:"基础能耗 ×0.65",descEn:"Energy upkeep x0.65",realZh:"被 α-变形菌吞下后没被消化的古菌",realEn:"An archaeon spared inside an alpha-proteobacterium",eraMa:1800,branch:"内共生",mods:{upkeep:.65},noteZh:"真核细胞的发动机，本身就是一场没有硝烟的内共生战争。",noteEn:"The eukaryote engine — itself the survivor of an ancient takeover."},chloroplast:{id:"chloroplast",zh:"叶绿体",en:"Chloroplast",icon:"chloroplast",hue:"#84b96b",descZh:"光照下持续产能",descEn:"Photosynthesis in light",realZh:"被真核细胞吞下的蓝细菌",realEn:"A cyanobacterium adopted by a eukaryotic cell",eraMa:1550,branch:"内共生",mods:{energyGain:1},flags:{photosynthesis:!0},noteZh:"生命第一次自己制造氧气 —— 地球大气从此改写。",noteEn:"Life began making its own oxygen, rewriting the atmosphere."},chemosynthesis:{id:"chemosynthesis",zh:"化能合成酶",en:"Chemosynthesis",icon:"chemosynthesis",hue:"#b5652e",descZh:"不依赖光照也能产能（夜里接替光合者），但代谢代价更高",descEn:"Energy without light, at a higher metabolic cost",realZh:"深海热液喷口的硫氧化细菌",realEn:"Sulfur-oxidising bacteria at deep-sea vents",eraMa:3500,branch:"细菌",mods:{energyGain:1,upkeep:1.22},flags:{chemosynthesis:!0},noteZh:"地球上最早的生命根本不靠阳光，靠热液里的硫活。",noteEn:"The earliest life never needed sunlight — it ate sulfur from vents."},aerobe:{id:"aerobe",zh:"有氧呼吸器",en:"Aerobic respiratory chain",icon:"aerobe",hue:"#6fa8c4",descZh:"产能效率 ×1.55",descEn:"Energy yield x1.55",realZh:"在大氧化事件后扩张的需氧细菌",realEn:"Aerobic bacteria that expanded after the Great Oxidation",eraMa:2400,branch:"细菌",prereq:["mitochondria"],mods:{energyGain:1.55},noteZh:"氧气从毒气变成燃料 —— 一次彻底的生态位翻转。",noteEn:"Oxygen flipped from poison to fuel — a total reversal of the niche."},lysosome:{id:"lysosome",zh:"溶酶体",en:"Lysosome",icon:"lysosome",hue:"#d4748e",descZh:"分解尸体碎屑，收益 ×2.5 并还原养分",descEn:"Digest corpses x2.5 and return nutrients",realZh:"真核细胞内的消化车间",realEn:"The digestive organelles of eukaryotic cells",eraMa:1500,branch:"真核",prereq:["mitochondria"],mods:{foodGain:1},flags:{digestion:!0},noteZh:"有了消化腔，尸体才第一次能变成下一代的养分。",noteEn:"With digestion, a corpse can finally become the next generation."},shell:{id:"shell",zh:"外壳",en:"Shell",icon:"shell",hue:"#c9c0ad",descZh:"防御力 ×1.9",descEn:"Defense x1.9",realZh:"有孔虫与三叶虫的钙质外骨骼",realEn:"Calcified skeletons of foraminifera and trilobites",eraMa:550,branch:"动物",mods:{defense:1.9},noteZh:"第一副硬壳，把「被吃掉」变成了「大概率不会」。",noteEn:"The first armour: being eaten became merely unlikely."},toxin:{id:"toxin",zh:"刺丝泡",en:"Cnidocyte",icon:"toxin",hue:"#e2663f",descZh:"攻击力 ×1.8",descEn:"Attack x1.8",realZh:"水母刺细胞里的刺丝囊",realEn:"Nematocysts inside jellyfish cnidocytes",eraMa:600,branch:"动物",mods:{attack:1.8},noteZh:"毒刺让刺胞动物成为海洋最早的有效捕食者。",noteEn:"Stinging cells made cnidarians the ocean’s first efficient predators."},capsule:{id:"capsule",zh:"荚膜",en:"Capsule",icon:"capsule",hue:"#a89b83",descZh:"防御 ×1.4，被吞食概率下降",descEn:"Defense x1.4, resists being swallowed",realZh:"肺炎链球菌的荚膜",realEn:"The capsule of Streptococcus pneumoniae",eraMa:2e3,branch:"细菌",mods:{defense:1.4,upkeep:1.08},noteZh:"一层多糖外衣，既挡抗体也是生物膜的底座。",noteEn:"A sugar coat that shields cells — and anchors the biofilm."},endospore:{id:"endospore",zh:"芽孢",en:"Endospore",icon:"endospore",hue:"#d9a441",descZh:"能量耗尽时进入休眠，免受天罚与瘟疫",descEn:"Dormant when exhausted; survives smite and plague",realZh:"芽孢杆菌内部那颗耐热核",realEn:"The heat-proof core inside a Bacillus cell",eraMa:2500,branch:"细菌",flags:{dormancy:!0},noteZh:"地球上最硬核的生存策略：睡上百万年再醒。",noteEn:"The toughest survival trick on Earth: sleep for a million years."},sensor:{id:"sensor",zh:"感应纤毛",en:"Sensor cilia",icon:"sensor",hue:"#8fa9bd",descZh:"感知范围 ×1.6",descEn:"Sense range x1.6",realZh:"纤毛虫的化学感受纤毛",realEn:"Chemoreceptive cilia of ciliates",eraMa:1e3,branch:"真核",prereq:["cilia"],mods:{sense:1.6},noteZh:"有了感官，趋性行为才成为可能。",noteEn:"With senses, taxis — moving toward or away — become possible."},eyespot:{id:"eyespot",zh:"眼点",en:"Eyespot",icon:"eyespot",hue:"#d4748e",descZh:"朝最亮的方向游动",descEn:"Swims toward the brightest light",realZh:"团藻表面的感光眼点",realEn:"The light-sensitive eyespot of Volvox",eraMa:800,branch:"植物",prereq:["cilia"],flags:{phototaxis:!0},noteZh:"单细胞就能「看」光 —— 趋光性是多细胞形态学的第一步。",noteEn:"A single cell that can see light — the first step toward multicellular form."},magnetosome:{id:"magnetosome",zh:"磁性体",en:"Magnetosome",icon:"magnetosome",hue:"#b5652e",descZh:"缓慢迁移到培养皿中层",descEn:"Slowly drifts to the mid layer of the dish",realZh:"磁性细菌体内的磁铁矿结晶链",realEn:"Chains of magnetite crystals inside magnetotactic bacteria",eraMa:3e3,branch:"细菌",flags:{magnetotaxis:!0},noteZh:"能感知地磁场的细菌 —— 它们连「上」和「下」都分得清。",noteEn:"Bacteria that read Earth’s magnetic field — they know up from down."},adhesion:{id:"adhesion",zh:"黏连蛋白",en:"Adhesin",icon:"adhesion",hue:"#4fb3c4",descZh:"可以聚合成多细胞体",descEn:"Enables multicellularity",realZh:"团藻细胞表面的糖蛋白连接",realEn:"Glycoprotein junctions between Volvox cells",eraMa:900,branch:"多细胞起源",mods:{upkeep:1.1},flags:{adhesion:!0},noteZh:"多细胞生命的第一步，往往只是一颗细胞愿意牵着另一颗细胞。",noteEn:"The first step to multicellularity: one cell holding on to another."},quorum:{id:"quorum",zh:"群体感应",en:"Quorum sensing",icon:"quorum",hue:"#5aa89b",descZh:"群体共享能量的效率 ×1.8，感知半径 ×1.3",descEn:"Colony energy sharing x1.8, sense x1.3",realZh:"费氏弧菌的「分子投票」",realEn:"The molecular vote of Vibrio fischeri",eraMa:500,branch:"细菌",prereq:["adhesion"],mods:{sense:1.3},flags:{quorum:!0},noteZh:"细胞开始「数数」：只有人多时才行动。这是社会性的语言。",noteEn:"Cells learned to count themselves — the grammar of society."},myosin:{id:"myosin",zh:"收缩丝",en:"Myosin filament",icon:"myosin",hue:"#c08a9e",descZh:"速度 ×1.35，能耗 ×1.3",descEn:"Speed x1.35, upkeep x1.3",realZh:"肌球蛋白构成的肌小节",realEn:"Myosin filaments in the sarcomere",eraMa:700,branch:"真核",prereq:["mitochondria"],mods:{speed:1.35,upkeep:1.3},flags:{dash:!0},noteZh:"能主动收缩的纤维 —— 从此细胞可以真正地「动」起来。",noteEn:"Contractile fibre: from here on, cells could really move."},meiosis:{id:"meiosis",zh:"减数分裂",en:"Meiosis",icon:"meiosis",hue:"#b58fa8",descZh:"子代基因来自双亲重组，变异速度大幅提升",descEn:"Offspring genes recombine from two parents — faster adaptation",realZh:"真核生物的减数分裂与配子",realEn:"Meiosis and gametes in eukaryotes",eraMa:1e3,branch:"真核",prereq:["mitochondria"],flags:{meiosis:!0},noteZh:"有性生殖让基因在每一代都重新洗牌，演化速度从此翻倍。",noteEn:"Sex reshuffles the deck every generation, doubling evolutionary speed."},apoptosis:{id:"apoptosis",zh:"凋亡程序",en:"Apoptosis",icon:"apoptosis",hue:"#c96a6a",descZh:"群体成员可牺牲自己，把能量交给群体",descEn:"Members can sacrifice themselves for the colony",realZh:"多细胞生物的受控细胞死亡",realEn:"Programmed cell death in multicellular organisms",eraMa:1e3,branch:"多细胞起源",prereq:["adhesion"],flags:{apoptosis:!0},noteZh:"群体学会「牺牲部分成员」—— 合作的另一面。",noteEn:"Colonies learned to sacrifice members: the other side of cooperation."}},Pr=Object.keys(qt),ns={myxomycete:{id:"myxomycete",zh:"粘菌路线",en:"Myxomycete route",icon:"route-myxomycete",hue:"#b5652e",realZh:"黄色黏球菌（Myxococcus xanthus）",realEn:"Myxococcus xanthus",eraMa:900,requires:["adhesion","quorum"],descZh:"饥饿时，单细胞细菌聚成蠕动的菌毯，靠群体感应协调行动；资源耗尽后，群体长出子实体，分化出耐旱休眠孢子。",descEn:"When starved, single cells form a coordinated crawling mat; when food runs out the colony builds a fruiting body of dormant spores.",perkZh:"群体可在资源耗尽时形成子实体并播撒孢子，重新播种培养皿",perkEn:"Builds fruiting bodies that broadcast spores back into the dish"},volvocine:{id:"volvocine",zh:"团藻路线",en:"Volvocine route",icon:"route-volvocine",hue:"#84b96b",realZh:"团藻（Volvox）",realEn:"Volvox",eraMa:800,requires:["adhesion","eyespot"],descZh:"数百个细胞嵌在果胶基质里形成空心球体，外层细胞负责游动，内层少数细胞专职生殖；群体整体转向光。",descEn:"Hundreds of cells in a hollow sphere: the outer shell swims, a few inner cells do nothing but reproduce; the sphere steers toward light.",perkZh:"群体整体游动与趋光，体内出现「体细胞 / 生殖细胞」分工",perkEn:"The colony swims as one body toward light, with germ-soma division"},animal:{id:"animal",zh:"动物路线",en:"Animal route",icon:"route-animal",hue:"#d4748e",realZh:"领鞭毛虫 → 海绵",realEn:"Choanoflagellate → sponge",eraMa:600,requires:["adhesion","tentacle"],descZh:"细胞之间出现电信号传导与集体迁移，群体像一只会变形的大生物一样整体移动。",descEn:"Cells coordinate by electrical signals and migrate collectively: the colony moves like one large, deforming animal.",perkZh:"群体获得神经样信号与集体迁移，能整体躲开捕食者",perkEn:"Neural-like signalling and collective migration; the colony dodges predators as one"}},qf=Object.keys(ns),Vl={goe:{id:"goe",zh:"大氧化事件",en:"Great Oxidation Event",icon:"event-goe",hue:"#d9a441",eraMa:2400,descZh:"产氧光合铺开，氧气第一次在大气里积累。对当时的厌氧生命来说这是一场毒气浩劫，而呼吸氧气的细胞从此统治地球。",descEn:"Oxygenic photosynthesis floods the air. For anaerobic life it is a toxic catastrophe; for aerobes it is the beginning of dominance."},snowball:{id:"snowball",zh:"雪球地球",en:"Snowball Earth",icon:"event-snowball",hue:"#7fa8bd",eraMa:700,descZh:"成冰纪把整个地球冻成一个白色的球。代谢放缓、食物锐减，能形成芽孢的谱系成为唯一的幸存者。",descEn:"An ice age freezes the planet white. Metabolism slows, food vanishes, and only spore-formers survive."},cambrian:{id:"cambrian",zh:"寒武纪爆发",en:"Cambrian Explosion",icon:"event-cambrian",hue:"#c08a9e",eraMa:541,descZh:"多细胞生命一旦跨过那道门槛，身体蓝图就在极短时间内集中涌现 —— 触手、外骨骼、眼睛、消化腔同时登场。",descEn:"Once multicellularity clears the threshold, body plans arrive all at once: tentacles, skeletons, eyes, guts."}},bv=qt,vg=Pr,Qn={photosynthesizer:{zh:"光合者",en:"Phototroph",color:"#84b96b",icon:"chloroplast"},chemotroph:{zh:"化能者",en:"Chemotroph",color:"#b5652e",icon:"chemosynthesis"},decomposer:{zh:"分解者",en:"Decomposer",color:"#d4748e",icon:"lysosome"},symbiote:{zh:"共生体",en:"Symbiote",color:"#4fb3c4",icon:"adhesion"},hunter:{zh:"猎手",en:"Hunter",color:"#e2663f",icon:"toxin"},gatherer:{zh:"采集者",en:"Gatherer",color:"#d6c48f",icon:"flagellum"}},Kf=Object.keys(Qn),Ti={core:{zh:"核心细胞",en:"Core cell",icon:"role-core",color:"#c9a227",descZh:"群体代谢中枢：产能最高、行动最慢，向同伴输送能量",descEn:"Metabolic hub: highest output, slowest, shares energy with the colony"},worker:{zh:"采集工",en:"Worker",icon:"role-worker",color:"#84b96b",descZh:"四处采集养分，把食物搬回群体共享",descEn:"Forages widely and ferries nutrients back to the colony"},guard:{zh:"守卫细胞",en:"Guard",icon:"role-guard",color:"#e2663f",descZh:"富含毒素与外壳，死守群体边界并猎杀入侵者",descEn:"Toxin-laced defenders that hold the colony perimeter"},brooder:{zh:"繁殖体",en:"Brooder",icon:"role-brooder",color:"#4fb3c4",descZh:"繁殖阈值更低，持续补充群体的新成员",descEn:"Lower breeding threshold, continuously replenishes the colony"},nurse:{zh:"养护细胞",en:"Nurse",icon:"role-nurse",color:"#d6c48f",descZh:"从共享能量池抽取能量，修复受伤的同伴",descEn:"Draws from the shared pool to heal wounded mates"}},FT=Object.keys(Ti),OT={core:{speed:.55,size:1.35,defense:1.25,attack:1,food:.8,energy:1.35,breed:1.3,share:.3},worker:{speed:1.4,size:.95,defense:.9,attack:1,food:1.55,energy:1,breed:1,share:.9},guard:{speed:.85,size:1.1,defense:2,attack:1.6,food:.9,energy:1,breed:1.2,share:.2},brooder:{speed:.95,size:1.05,defense:1,attack:1.05,food:1.1,energy:1.15,breed:.6,share:.25},nurse:{speed:1,size:.9,defense:.95,attack:.9,food:1,energy:1.1,breed:1.1,share:.55}},ke=(t,e)=>t+Math.random()*(e-t),ft=(t,e,n)=>Math.max(e,Math.min(n,t)),Xn=(t,e,n,i)=>Math.hypot(t-n,e-i);function zT(t){let e=0;for(const n of t.agents)n.alive&&e++;return e}class BT{constructor(e,n){Ue(this,"cell");Ue(this,"cols");Ue(this,"rows");Ue(this,"buckets");this.cell=n;const i=e*2+n*4;this.cols=Math.ceil(i/n),this.rows=this.cols,this.buckets=new Array(this.cols*this.rows);for(let r=0;r<this.buckets.length;r++)this.buckets[r]=[]}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length&&(this.buckets[e].length=0)}insert(e){const n=ft(Math.floor((e.x+this.cols*this.cell*.5)/this.cell),0,this.cols-1),i=ft(Math.floor((e.y+this.rows*this.cell*.5)/this.cell),0,this.rows-1);this.buckets[i*this.cols+n].push(e)}near(e,n){const i=ft(Math.floor((e+this.cols*this.cell*.5)/this.cell),0,this.cols-1),r=ft(Math.floor((n+this.rows*this.cell*.5)/this.cell),0,this.rows-1),s=[];for(let o=-1;o<=1;o++){const a=r+o;if(!(a<0||a>=this.rows))for(let l=-1;l<=1;l++){const c=i+l;if(c<0||c>=this.cols)continue;const u=this.buckets[a*this.cols+c];for(let d=0;d<u.length;d++)s.push(u[d])}}return s}}class HT{constructor(e,n){Ue(this,"cell");Ue(this,"cols");Ue(this,"rows");Ue(this,"slots");this.cell=n;const i=e*2+n*4;this.cols=Math.ceil(i/n),this.rows=this.cols,this.slots=new Array(this.cols*this.rows);for(let r=0;r<this.slots.length;r++)this.slots[r]=[]}clear(){for(let e=0;e<this.slots.length;e++)this.slots[e].length&&(this.slots[e].length=0)}insert(e){const n=ft(Math.floor((e.x+this.cols*this.cell*.5)/this.cell),0,this.cols-1),i=ft(Math.floor((e.y+this.rows*this.cell*.5)/this.cell),0,this.rows-1);this.slots[i*this.cols+n].push(e)}near(e,n){const i=ft(Math.floor((e+this.cols*this.cell*.5)/this.cell),0,this.cols-1),r=ft(Math.floor((n+this.rows*this.cell*.5)/this.cell),0,this.rows-1),s=[];for(let o=-1;o<=1;o++){const a=r+o;if(!(a<0||a>=this.rows))for(let l=-1;l<=1;l++){const c=i+l;if(c<0||c>=this.cols)continue;const u=this.slots[a*this.cols+c];for(let d=0;d<u.length;d++)s.push(u[d])}}return s}}let GT=1,VT=1;class jT{constructor(e){Ue(this,"agents",[]);Ue(this,"food",[]);Ue(this,"colonies",new Map);Ue(this,"events",[]);Ue(this,"history",[]);Ue(this,"effects",[]);Ue(this,"byId",new Map);Ue(this,"modCache",new Map);Ue(this,"tick",0);Ue(this,"config");Ue(this,"seenOrganelles",new Set);Ue(this,"seenMilestones",new Set);Ue(this,"seenRoles",new Set);Ue(this,"seenEarthEvents",new Set);Ue(this,"seenRoutes",new Set);Ue(this,"totalBirths",0);Ue(this,"totalDeaths",0);Ue(this,"totalKills",0);Ue(this,"totalCannibalKills",0);Ue(this,"apexId",null);Ue(this,"light",.8);Ue(this,"lightOverride",null);Ue(this,"nutrient",1);Ue(this,"temperature",.5);Ue(this,"oxygen",0);Ue(this,"glacial",0);Ue(this,"cambrian",0);Ue(this,"geoEventsTriggered",new Set);Ue(this,"tempLock",null);Ue(this,"mutationBoost",1);Ue(this,"mutationBoostUntil",0);Ue(this,"nutrientMul",1);Ue(this,"nutrientMulUntil",0);Ue(this,"sizeScale",1);Ue(this,"lastCannibalTick",-999);Ue(this,"lastCannibalLogTick",null);Ue(this,"colonyEventDone",!1);Ue(this,"agentGrid");Ue(this,"foodGrid");this.config={radius:900,initialCount:200,maxPopulation:550,foodPerTick:6.2,mutationRate:.75,...e},this.agentGrid=new BT(this.config.radius,60),this.foodGrid=new HT(this.config.radius,220),this.reset()}reset(){this.agents=[],this.food=[],this.colonies.clear(),this.events=[],this.history=[],this.effects=[],this.byId.clear(),this.modCache.clear(),this.tick=0,this.seenOrganelles.clear(),this.seenMilestones.clear(),this.seenRoles.clear(),this.seenEarthEvents.clear(),this.seenRoutes.clear(),this.totalBirths=0,this.totalDeaths=0,this.totalKills=0,this.totalCannibalKills=0,this.apexId=null,this.colonyEventDone=!1,this.nutrient=1,this.light=.8,this.lightOverride=null,this.temperature=.5,this.oxygen=0,this.glacial=0,this.cambrian=0;const e={hue:0,size:ke(3.2,4.2),maxSpeed:ke(.9,1.3),sense:ke(55,80),aggression:ke(.15,.45),efficiency:ke(.4,.6),organelles:[]},n=ke(0,360),i=[0,.33,.66].map(r=>(n+r*360+ke(-9,9)+360)%360);for(let r=0;r<this.config.initialCount;r++){const s=(i[r%i.length]+ke(-9,9)+360)%360;this.agents.push(this.spawnFrom({...e,hue:s,organelles:[]},void 0,!0))}for(let r=0;r<260;r++)this.spawnFood();this.log("milestone",`培养皿接种完成：${this.config.initialCount} 个原始单细胞生物，分属三条创始谱系`,`Inoculated: ${this.config.initialCount} primitive cells from three founder lineages`)}get innerRadius(){return this.config.radius-16}clampToDish(e,n,i=12){const r=this.innerRadius-i,s=Math.hypot(e,n);if(s<=r)return{x:e,y:n};const o=r/(s||1);return{x:e*o,y:n*o}}randomPos(e=30){const n=ke(0,Math.PI*2),i=Math.sqrt(Math.random())*(this.innerRadius-e);return{x:Math.cos(n)*i,y:Math.sin(n)*i}}spawnFrom(e,n,i=!1){const r=i||!n?this.randomPos():{x:n.x+ke(-14,14),y:n.y+ke(-14,14)},s={...e,size:ft(e.size*this.sizeScale,2.4,9)},o={id:GT++,x:r.x,y:r.y,vx:ke(-1,1),vy:ke(-1,1),genome:s,energy:n?n.energy*.45:ke(50,70),age:0,generation:n?n.generation+1:0,kills:0,cannibalKills:0,children:0,colonyId:n?.colonyId??null,role:n?.role??null,strategy:sr(s),wander:ke(0,Math.PI*2),alive:!0,flash:0,lastFeedTick:-999,dormant:!1,alien:!1,digest:0};return this.byId.set(o.id,o),o}agentById(e){return this.byId.get(e)}spawnFood(e,n,i,r,s="organic"){let o,a;if(e===void 0||n===void 0){const l=this.randomPos(24);o=l.x,a=l.y}else{const l=this.clampToDish(e,n,18);o=l.x,a=l.y}this.food.push({x:o,y:a,energy:i??ke(8,18),hue:r??(s==="detritus"?ke(18,42):ke(90,160)),kind:s,born:this.tick,dead:!1})}log(e,n,i){this.events.unshift({tick:this.tick,type:e,zh:n,en:i}),this.events.length>60&&this.events.pop()}godFeed(e,n){const i=this.clampToDish(e,n,40);for(let r=0;r<35;r++){const s=ke(0,Math.PI*2),o=Math.sqrt(Math.random())*70;this.spawnFood(i.x+Math.cos(s)*o,i.y+Math.sin(s)*o,ke(10,22))}this.effects.push({type:"feed",x:i.x,y:i.y,tick:this.tick}),this.log("god","上帝撒下了丰盛的食物","God scattered abundant food")}godSmite(e,n,i=110){let r=0;for(const s of this.agents)!s.alive||s.dormant||Xn(s.x,s.y,e,n)<i&&(s.alive=!1,s.energy=0,r++,this.totalDeaths++,this.spawnFood(s.x,s.y,s.genome.size*5,s.genome.hue,"detritus"),s.colonyId!==null&&this.colonies.get(s.colonyId)?.memberIds.delete(s.id));this.log("god",`天罚降临：${r} 个生物化为养分`,`Divine smite: ${r} organisms returned to nutrients`)}godMutate(e,n,i=150){let r=null,s=i;for(const a of this.agents){if(!a.alive)continue;const l=Xn(a.x,a.y,e,n);l<s&&(s=l,r=a)}if(!r)return;const o=Av(r.genome);if(o.length){const a=o[Math.floor(Math.random()*o.length)];r.genome.organelles.push(a),r.strategy=sr(r.genome),r.flash=1,this.seenOrganelles.add(a);const l=qt[a];this.effects.push({type:"mutate",x:r.x,y:r.y,tick:this.tick}),this.log("god",`上帝之手触碰了 #${r.id}，它立刻长出了「${l.zh}」`,`God touched #${r.id} — it instantly grew a ${l.en}`)}else r.genome.size=ft(r.genome.size*1.3,2.4,9),this.log("god",`上帝之手让 #${r.id} 的体型暴涨`,`God made #${r.id} grow larger`)}godPlague(e=.4){const n=this.agents.filter(r=>r.alive&&!r.dormant);let i=0;for(const r of n)Math.random()<e&&(r.alive=!1,r.energy=0,i++,this.totalDeaths++,this.spawnFood(r.x,r.y,r.genome.size*5,r.genome.hue,"detritus"),r.colonyId!==null&&this.colonies.get(r.colonyId)?.memberIds.delete(r.id));this.effects.push({type:"plague",x:0,y:0,tick:this.tick}),this.log("god",`瘟疫席卷培养皿：${i} 个生物死亡，幸存者将占据空出的生态位`,`Plague: ${i} died; survivors inherit the empty niches`)}godAliens(e=18){const n=ke(0,360);for(let i=0;i<e;i++){const r={hue:n+ke(-10,10),size:ke(3,6),maxSpeed:ke(.8,1.6),sense:ke(50,100),aggression:ke(.1,.9),efficiency:ke(.35,.7),organelles:[]};if(Math.random()<.6){const o=Pr[Math.floor(Math.random()*Pr.length)];r.organelles.push(o),this.seenOrganelles.add(o)}const s=this.spawnFrom(r,void 0,!0);s.alien=!0,s.genome.hue=186,this.agents.push(s),this.totalBirths++}this.effects.push({type:"alien",x:0,y:0,tick:this.tick}),this.log("god",`天外入侵：${e} 个携带未知基因的外来物种被投放到培养皿`,`Alien invasion: ${e} foreigners with unknown genes released`)}bundle(e){const n=this.modCache.get(e);if(n)return n;const i={...kT},r={};for(const o of e.organelles){const a=qt[o];if(a){if(a.mods)for(const l of Object.keys(a.mods)){const c=a.mods[l];l==="eatRange"||l==="attackRange"?i[l]=i[l]+c:i[l]=i[l]*c}a.flags&&Object.assign(r,a.flags)}}const s={mods:i,flags:r};return this.modCache.set(e,s),s}roleMods(e){return e.role?OT[e.role]:null}get nutrientMultiplier(){return this.tick<this.nutrientMulUntil?this.nutrientMul:1}get mutationMultiplier(){return this.tick<this.mutationBoostUntil?this.mutationBoost:1}get effectiveTemperature(){return this.tempLock&&this.tick<this.tempLock.until?this.tempLock.value:this.glacial>0?this.temperature*.3:this.temperature}speedOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.maxSpeed;i*=Math.sqrt(4/e.genome.size),i*=.75+this.effectiveTemperature*.5,i*=n.speed,e.colonyId!==null&&(i*=.75);const r=this.roleMods(e);return r&&(i*=r.speed),i}senseOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.sense*n.sense;return e.colonyId!==null&&(i*=1.15),i}attackOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.size*(.6+e.genome.aggression);i*=n.attack,e.genome.organelles.includes("toxin")&&(i*=1);const r=this.roleMods(e);return r&&(i*=r.attack),i}defenseOf(e){const{mods:n}=this.bundle(e.genome);let i=e.genome.size*n.defense;const r=this.roleMods(e);return r&&(i*=r.defense),i}upkeepOf(e){const{mods:n}=this.bundle(e.genome);let i=.055+e.genome.size*.012+e.genome.maxSpeed*.02;i*=n.upkeep,i*=.7+this.effectiveTemperature*.8;const r=this.roleMods(e);return r&&(i/=r.energy),i}attackRangeOf(e){return this.bundle(e.genome).mods.attackRange}eatRangeOf(e){const{mods:n}=this.bundle(e.genome);return e.genome.size+5+(e.colonyId!==null?8:0)+n.eatRange}preyScore(e,n){if(e.colonyId!==null&&e.colonyId===n.colonyId)return 0;const i=this.attackOf(e),r=this.defenseOf(n);if(i>r*1.22&&e.genome.size>=n.genome.size*.97)return 1;if(e.strategy==="hunter"&&n.strategy==="hunter"&&i>r*.85){const o=e.genome.organelles.includes("toxin")?.99:1.01;if(e.genome.size>n.genome.size*o)return .85}return 0}step(){if(this.tick++,this.light=this.lightOverride??ft(.55+.45*Math.cos(this.tick*.0015),.02,1),this.glacial>0&&this.glacial--,this.cambrian>0&&this.cambrian--,this.nutrient=ft(this.nutrient,.35,2.4),this.food.length<520){const o=this.tick<this.nutrientMulUntil?this.nutrientMul:1;let a=this.config.foodPerTick*(.5+.5*this.nutrient)*o*(this.glacial>0?.45:1);for(;a>0;)Math.random()<a&&this.spawnFood(),a-=1}const e=this.agents.filter(o=>o.alive),n=e.length;this.agentGrid.clear();for(const o of e)this.agentGrid.insert(o);this.foodGrid.clear();for(const o of this.food)this.foodGrid.insert(o);for(const o of e){if(o.age++,o.colonyId!==null&&o.genome.organelles.includes("adhesion")){const E=this.colonies.get(o.colonyId);E&&(E.differentiated||E.route)?o.strategy="symbiote":o.strategy==="symbiote"&&(o.strategy=sr(o.genome))}else o.strategy==="symbiote"&&(o.strategy=sr(o.genome));const a=o.genome,{mods:l,flags:c}=this.bundle(a),u=this.senseOf(o),d=this.speedOf(o);let f=null,m=1/0,_=0,M=null,g=1/0,h=null,v=1/0;for(const E of this.agentGrid.near(o.x,o.y)){if(E===o||!E.alive)continue;const C=Xn(o.x,o.y,E.x,E.y),O=u+this.attackRangeOf(o);if(C>O)continue;const y=this.preyScore(o,E);if(y>0){const T=1-ft(o.energy/90,0,1),z=y<1?y+T*.14:y;(z>_||z===_&&C<m)&&(f=E,m=C,_=z)}else E.strategy==="hunter"&&o.strategy==="hunter"&&C<g&&(M=E,g=C);a.organelles.includes("adhesion")&&E.genome.organelles.includes("adhesion")&&Math.abs(E.genome.hue-a.hue)<34&&o.colonyId===null&&E.colonyId===null&&C<v&&(h=E,v=C)}let x=0,S=0;if(f){const E=_>=1?2.2:1.9;x+=(f.x-o.x)/(m+1)*E,S+=(f.y-o.y)/(m+1)*E}else if(M&&o.strategy==="hunter"){const E=1-ft(o.energy/120,0,1);x+=(M.x-o.x)/(g+1)*(.9+E*1.1),S+=(M.y-o.y)/(g+1)*(.9+E*1.1)}else{const E=this.nearestFood(o.x,o.y,u);if(E){const C=E.d,O=.8+(1-ft(o.energy/120,0,1));x+=(E.item.x-o.x)/(C+1)*O,S+=(E.item.y-o.y)/(C+1)*O}}if(c.phototaxis){const E=this.light;x+=.55*E,S+=.55*E}if(c.magnetotaxis){const E=Math.hypot(o.x,o.y)||1,O=(this.innerRadius*.55-E)*.0016;x+=o.x/E*O*60,S+=o.y/E*O*60}if(h&&(x+=(h.x-o.x)/(v+1)*1.1,S+=(h.y-o.y)/(v+1)*1.1),o.colonyId!==null){const E=this.colonies.get(o.colonyId);if(E){const C=this.colonyCenter(E),O=Xn(C.x,C.y,o.x,o.y)+1;O>26?(x+=(C.x-o.x)/O*1.4,S+=(C.y-o.y)/O*1.4):(x-=(C.x-o.x)/O*.5,S-=(C.y-o.y)/O*.5)}}if(o.role==="guard"&&o.colonyId!==null){const E=this.colonies.get(o.colonyId);if(E){const C=this.colonyCenter(E),O=Xn(C.x,C.y,o.x,o.y)+1,y=26+E.memberIds.size*1.6;O<y&&(x-=(C.x-o.x)/O*1.2,S-=(C.y-o.y)/O*1.2)}}o.wander+=ke(-.35,.35),x+=Math.cos(o.wander)*.45,S+=Math.sin(o.wander)*.45;const P=Math.hypot(x,S)||1;o.vx=o.vx*.82+x/P*d*.18,o.vy=o.vy*.82+S/P*d*.18,o.x+=o.vx*d*2.2,o.y+=o.vy*d*2.2;const A=Math.hypot(o.x,o.y);if(A>this.innerRadius-12){const E=(this.innerRadius-12)/A;o.x*=E,o.y*=E,o.vx*=-.5,o.vy*=-.5}if(o.energy-=this.upkeepOf(o),c.photosynthesis&&(o.energy+=.42*this.light*l.energyGain),c.chemosynthesis&&(o.energy+=(.12+.07*(1-this.light))*l.energyGain,c.photosynthesis&&o.strategy==="photosynthesizer"&&(o.strategy=this.light>.42?"photosynthesizer":"chemotroph")),o.genome.organelles.includes("aerobe")&&(o.energy+=.16*this.oxygen*l.energyGain),o.colonyId!==null){const E=this.colonies.get(o.colonyId);if(E&&(o.energy+=.03*E.memberIds.size,o.role==="core"&&E.energyPool>0)){const C=Math.min(E.energyPool,.06);E.energyPool-=C,o.energy+=C}}c.dormancy&&o.energy<6&&!o.dormant?(o.dormant=!0,o.energy=0):o.dormant&&o.energy>14&&(o.dormant=!1),o.flash*=.9}for(const o of e){if(!o.alive||o.dormant)continue;const{mods:a,flags:l}=this.bundle(o.genome),c=this.eatRangeOf(o);let u=null,d=c;for(const h of this.foodGrid.near(o.x,o.y)){if(h.dead)continue;const v=Xn(h.x,h.y,o.x,o.y);v<d&&(d=v,u=h)}if(!u)continue;const f=u,m=this.roleMods(o),_=a.foodGain*(m?m.food:1),M=l.digestion;let g=f.energy*o.genome.efficiency*_;if(f.kind==="detritus"?M?(g*=2.6,this.nutrient=ft(this.nutrient+f.energy*.018,.35,2.4)):g*=.45:M&&(g*=.8),o.energy+=g,o.flash=1,o.lastFeedTick=this.tick,o.colonyId!==null&&m&&m.share>0){const h=this.colonies.get(o.colonyId);if(h){const v=o.genome.organelles.includes("quorum")?1.8:1;h.energyPool=Math.min(120,h.energyPool+g*m.share*.25*v)}}f.dead=!0}this.food.some(o=>o.dead)&&(this.food=this.food.filter(o=>!o.dead));let i=0;for(const o of e)o.strategy!=="hunter"&&i++;const r=ft(1-i/Math.max(8,e.length*.18),0,.85),s=new Set;for(const o of e){if(!o.alive||s.has(o.id)||o.digest>0)continue;const a=this.attackRangeOf(o);for(const l of this.agentGrid.near(o.x,o.y)){if(!l.alive||s.has(l.id)||l.id===o.id)continue;const c=Xn(o.x,o.y,l.x,l.y);if(c>o.genome.size+l.genome.size+3+a)continue;const u=this.preyScore(o,l);if(u>0){if(Math.random()>=r){this.kill(o,l,s,u<1);break}continue}const d=this.preyScore(l,o);if(d>0){if(Math.random()>=r){this.kill(l,o,s,d<1);break}continue}const f=(l.x-o.x)/(c+.01),m=(l.y-o.y)/(c+.01);o.vx-=f*.6,o.vy-=m*.6,l.vx+=f*.6,l.vy+=m*.6,o.energy-=.3,l.energy-=.3}}for(const o of e){if(!o.alive||o.role!=="nurse"||o.colonyId===null)continue;const a=this.colonies.get(o.colonyId);if(!(!a||a.energyPool<=1))for(const l of this.agentGrid.near(o.x,o.y)){if(!l.alive||l.colonyId!==o.colonyId||l===o||l.energy>110)continue;const c=Math.min(a.energyPool,1.6);a.energyPool-=c,l.energy+=c,l.flash=.6;break}}for(const o of e)if(!(!o.alive||o.colonyId!==null)&&o.genome.organelles.includes("adhesion"))for(const a of this.agentGrid.near(o.x,o.y)){if(!a.alive||a.colonyId!==null||a.id===o.id||!a.genome.organelles.includes("adhesion")||Math.abs(a.genome.hue-o.genome.hue)>25||Xn(o.x,o.y,a.x,a.y)>24)continue;const l={id:VT++,memberIds:new Set([o.id,a.id]),hue:o.genome.hue,born:this.tick,rounds:0,roles:new Map,energyPool:0,differentiated:!1,foundedGeneration:Math.max(o.generation,a.generation),totalKills:0,route:null,routeBorn:0,fruiting:0,swarmX:0,swarmY:0};this.colonies.set(l.id,l),o.colonyId=l.id,a.colonyId=l.id,this.colonyEventDone||(this.colonyEventDone=!0,this.log("colony","里程碑：首个多细胞聚合体诞生！细胞们开始协同合作","Milestone: the first multicellular colony is born — cells now cooperate"));break}for(const o of this.colonies.values()){const a=this.colonyCenter(o);for(const l of e)!l.alive||l.colonyId!==null||l.genome.organelles.includes("adhesion")&&(Math.abs(l.genome.hue-o.hue)>34||Xn(l.x,l.y,a.x,a.y)<40+o.memberIds.size*4&&o.memberIds.size<14&&(o.memberIds.add(l.id),l.colonyId=o.id))}this.updateColonyDifferentiation(),this.updateColonyRoutes();for(const o of e){if(!o.alive)continue;const a=this.roleMods(o),l=(100+o.genome.size*8)*(a?a.breed:1),c=n+this.totalBirths-this.totalDeaths>=this.config.maxPopulation;if(o.energy>l&&!c){const u=this.reproduceGenome(o),d=this.spawnFrom(u,o);d.colonyId=null,d.role=null,o.energy*=.55,o.children++,this.totalBirths++,this.agents.push(d);const f=u.organelles.find(m=>!o.genome.organelles.includes(m));if(f&&!this.seenOrganelles.has(f)){this.seenOrganelles.add(f);const m=qt[f];this.log("organelle",`进化突破！#${d.id} 在繁殖中突变出「${m.zh}」—— ${m.descZh}`,`Breakthrough! #${d.id} mutated a ${m.en} — ${m.descEn}`)}if(o.colonyId!==null){const m=this.colonies.get(o.colonyId);m&&m.memberIds.size<14&&u.organelles.includes("adhesion")&&(d.colonyId=m.id,m.memberIds.add(d.id),d.role=o.role,o.role&&m.roles.set(d.id,o.role))}}}for(const o of this.agents)if(o.alive&&!o.dormant&&(o.energy<=0||o.age>2600)){if(o.genome.organelles.includes("apoptosis")&&o.colonyId!==null&&o.energy<=0){const l=this.colonies.get(o.colonyId);l&&(l.energyPool=Math.min(120,l.energyPool+18),this.log("differentiate",`细胞 #${o.id} 启动凋亡程序，把最后的能量留给了群体`,`Cell #${o.id} triggered apoptosis, surrendering its energy to the colony`))}if(o.alive=!1,o.energy=0,this.totalDeaths++,this.spawnFood(o.x,o.y,o.genome.size*6,o.genome.hue,"detritus"),o.colonyId!==null){const l=this.colonies.get(o.colonyId);l?.memberIds.delete(o.id),l?.roles.delete(o.id)}}for(const[o,a]of this.colonies)if(a.memberIds.size<3){for(const l of a.memberIds){const c=this.byId.get(l);c&&(c.colonyId=null,c.role=null)}a.memberIds.clear(),this.colonies.delete(o)}for(const o of this.agents)o.alive&&(o.colonyId===null?o.role=null:this.colonies.has(o.colonyId)||(o.colonyId=null,o.role=null));if(this.agents.length>4e3&&(this.agents=this.agents.filter(o=>o.alive)),this.updateEarthEvents(),this.tick%10===0){const o=this.agents.filter(f=>f.alive),a=o.length,l=a?o.reduce((f,m)=>f+m.generation,0)/a:0,c=o.filter(f=>f.genome.organelles.length>0).length,u=o.reduce((f,m)=>Math.max(f,m.kills),0);this.history.push({tick:this.tick,population:a,avgGeneration:l,colonies:this.colonies.size,organelleRate:a?c/a:0,topKills:u,composition:this.composition()}),this.history.length>400&&this.history.shift();for(const f of[100,500,1e3,2500,5e3,1e4])this.tick>=f&&!this.seenMilestones.has(f)&&(this.seenMilestones.add(f),this.log("milestone",`第 ${f} 代际时刻：种群 ${a}，平均世代 ${l.toFixed(1)}，细胞器普及率 ${((a?c/a:0)*100).toFixed(0)}%`,`Tick ${f}: population ${a}, avg generation ${l.toFixed(1)}, organelle adoption ${((a?c/a:0)*100).toFixed(0)}%`));const d=o.reduce((f,m)=>m.kills>=3&&(!f||m.kills>f.kills)?m:f,null);if(d&&d.id!==this.apexId){this.apexId=d.id;const f=Qn[d.strategy];this.log("apex",`新的顶级掠食者登基：#${d.id}（${f.zh}，猎杀 ${d.kills}，第 ${d.generation} 代）`,`New apex predator: #${d.id} (${f.en}, ${d.kills} kills, gen ${d.generation})`)}a===0&&this.log("extinction","大灭绝：培养皿中所有生命已消亡","Extinction: all life in the dish has perished")}}reproduceGenome(e){const n=XT(e.genome,this.effectiveMutationRate());if(!e.genome.organelles.includes("meiosis"))return n;const i=this.agents.filter(l=>l.alive&&l.id!==e.id&&l.strategy===e.strategy);if(!i.length)return n;const s=i[Math.floor(Math.random()*i.length)].genome,o=(l,c)=>Math.random()<.5?l:c,a={hue:o(n.hue,s.hue),size:o(n.size,s.size),maxSpeed:o(n.maxSpeed,s.maxSpeed),sense:o(n.sense,s.sense),aggression:o(n.aggression,s.aggression),efficiency:o(n.efficiency,s.efficiency),organelles:o(n.organelles,s.organelles).slice()};return a.organelles=WT(a.organelles),a}effectiveMutationRate(){const e=this.tick<this.mutationBoostUntil?this.mutationBoost:1;return this.config.mutationRate*e*(this.cambrian>0?2.5:1)}updateColonyRoutes(){for(const e of this.colonies.values()){const n=[...e.memberIds].map(r=>this.byId.get(r)).filter(r=>!!(r&&r.alive));if(n.length<4)continue;const i=new Set;for(const r of n)for(const s of r.genome.organelles)i.add(s);if(!e.route)for(const r of qf){const s=ns[r];if(!s.requires.every(a=>i.has(a)))continue;e.route=r,e.routeBorn=this.tick,this.seenRoutes.add(r);const o=this.colonyCenter(e);this.effects.push({type:"earth",x:o.x,y:o.y,tick:this.tick}),this.log("route",`演化里程碑：多细胞体走出「${s.zh}」—— ${s.perkZh}（现实原型：${s.realZh}）`,`Milestone: the colony follows the ${s.en} — ${s.perkEn} (real analogue: ${s.realEn})`);break}if(e.route==="myxomycete"){const r=e.energyPool<10||this.food.length<60;e.fruiting=ft(e.fruiting+(r?.006:-.002),0,1);const s=this.agents.filter(a=>a.alive).length,o=n.length>=6&&s<this.config.maxPopulation*.55;if(e.fruiting>=1&&o){e.fruiting=.4;const a=this.colonyCenter(e),l=5;for(let c=0;c<l;c++){const u=ke(0,Math.PI*2),d=ke(30,120),f={...n[0].genome,organelles:[...n[0].genome.organelles]},m=this.spawnFrom(f,void 0,!0);m.x=a.x+Math.cos(u)*d,m.y=a.y+Math.sin(u)*d,m.colonyId=null,this.agents.push(m),this.totalBirths++}this.effects.push({type:"spore",x:a.x,y:a.y,tick:this.tick}),this.log("route","子实体成熟：粘菌群落播撒了休眠孢子","Fruiting body matured: the myxomycete colony released spores")}else e.fruiting>=1&&(e.fruiting=.92)}else if(e.route==="volvocine")e.swarmX=.6,e.swarmY=.6;else if(e.route==="animal"){let r=null,s=1/0;for(const o of n)for(const a of this.agentGrid.near(o.x,o.y)){if(!a.alive||a.strategy!=="hunter"||a.colonyId===e.id)continue;const l=Xn(a.x,a.y,o.x,o.y);l<s&&(s=l,r=a)}if(r&&s<260){const o=this.colonyCenter(e),a=Xn(o.x,o.y,r.x,r.y)||1;e.swarmX=(o.x-r.x)/a*.9,e.swarmY=(o.y-r.y)/a*.9}else e.swarmX*=.96,e.swarmY*=.96}}}applyGeoEvent(e,n={}){const i=DT[e];if(!i)return{ok:!1,message:"未知事件"};const r=this.agents.filter(a=>a.alive).length;let s="";switch(e){case"bigbang":case"luca":this.reInoculate(),s=`时间归零：重新接种 ${this.config.initialCount} 个原始单细胞`;break;case"hadean":this.tempLock={value:.95,until:this.tick+600},s="地表熔化：600 tick 内代谢与养分消耗同步暴涨";break;case"greatoxidation":s=this.applyGreatOxidation();break;case"eukaryote":for(const l of this.agents)l.alive&&!l.genome.organelles.includes("mitochondria")&&l.genome.organelles.length<7&&(l.genome.organelles.push("mitochondria"),l.strategy=sr(l.genome));s="内共生完成：全体获得线粒体，能耗下降 35%";break;case"snowball":s=this.applySnowball();break;case"cambrian":this.mutationBoost=2.5,this.mutationBoostUntil=this.tick+320,s="突变率 ×2.5 持续 320 tick：身体蓝图集中涌现";break;case"ordovician":s=`奥陶纪末冰期：${this.massDeath(.6)} 个体被寒冷清除`;break;case"landplants":{let l=0;for(const c of this.agents)!c.alive||l>zT(this)*.6||!c.genome.organelles.includes("chloroplast")&&c.genome.organelles.length<7&&(c.genome.organelles.push("chloroplast"),c.strategy=sr(c.genome),l++);this.nutrientMul=1.6,this.nutrientMulUntil=this.tick+900,s=`${l} 个体获得叶绿体，有机养分供给上升`;break}case"insects":for(const l of this.agents)l.alive&&(l.genome.size=ft(l.genome.size*.82,2.4,9));this.mutationBoost=1.5,this.mutationBoostUntil=this.tick+500,s="体型小型化 + 变异加快：数量激增但个体更脆弱";break;case"forests":this.nutrientMul=2,this.nutrientMulUntil=this.tick+900,this.tempLock={value:.36,until:this.tick+900},s="巨型蕨类森林：养分供给 ×2，气温略降";break;case"tetrapods":this.sizeScale=1.15;for(const l of this.agents)l.alive&&(l.genome.size=ft(l.genome.size*1.15,2.4,9));s="四足登陆：全体体型上调 15%，捕食能力上移";break;case"pangaea":{const l=this.agents.filter(u=>u.alive),c=l.slice(Math.floor(l.length/2));for(const u of c)u.x=-u.x*.85-ke(20,160),u.y=-u.y*.85-ke(20,160),u.genome.hue=(u.genome.hue+62)%360,u.colonyId!==null&&(this.colonies.get(u.colonyId)?.memberIds.delete(u.id),u.colonyId=null,u.role=null);s=`冈瓦纳分裂：${c.length} 个体被隔离到另一半皿区`;break}case"dinosaurs":for(const l of this.agents)l.alive&&(!l.genome.organelles.includes("shell")&&l.genome.organelles.length<7&&(l.genome.organelles.push("shell"),l.strategy=sr(l.genome)),l.genome.size=ft(l.genome.size*1.12,2.4,9));this.sizeScale=1.25,s="鳞甲普及（防御 ×1.5），体型上限再上调 25%";break;case"permian":s=`二叠纪末：${this.massDeath(.96)} 个体死亡 —— 生态位几乎清空`;break;case"cretaceous":{s=`希克苏鲁伯撞击：${this.massDeath(.9,c=>c.genome.size>5.5?1.6:1)} 个体死亡，大型猎手优先覆灭`;break}case"mammals":for(const l of this.agents)l.alive&&(l.genome.size=ft(l.genome.size*.8,2.4,9));this.sizeScale=.85;let a=0;for(const l of this.agents)!l.alive||a>60||!l.genome.organelles.includes("lysosome")&&l.genome.organelles.length<7&&(l.genome.organelles.push("lysosome"),l.strategy=sr(l.genome),a++);s=`猎手被小型哺乳替代（体型上限下调），${a} 个体获得溶酶体`;break;case"iceage":this.tempLock={value:.2,until:this.tick+800};for(const l of this.agents)l.alive&&(l.genome.size=ft(l.genome.size*1.18,2.4,9));this.sizeScale=1.18,s="冰期降临：800 tick 持续低温，物种趋向大型化";break;case"anthropocene":this.nutrientMul=2,this.nutrientMulUntil=Number.MAX_SAFE_INTEGER,this.tempLock=null,this.glacial=0,s="养分供给 ×2，环境全面可控 —— 演化交到人类手里";break;default:return{ok:!1,message:"该事件尚未实现"}}this.geoEventsTriggered.add(e);const o=this.agents.filter(a=>a.alive).length;return n.silent||(this.log("earth",`【${i.zh}】${i.effectZh} —— ${s}（种群 ${r} → ${o}）`,`[${i.en}] ${i.effectZh} — ${s}`),this.effects.push({type:"earth",x:0,y:0,tick:this.tick})),{ok:!0,message:s}}reInoculatePublic(){this.reInoculate()}reInoculate(){this.agents=[],this.food=[],this.colonies.clear(),this.byId.clear(),this.totalBirths=0,this.totalDeaths=0,this.totalKills=0,this.totalCannibalKills=0,this.apexId=null,this.nutrient=1,this.sizeScale=1,this.tempLock=null,this.glacial=0;const e={hue:ke(0,360),size:ke(3.2,4.2),maxSpeed:ke(.9,1.3),sense:ke(55,80),aggression:ke(.15,.45),efficiency:ke(.4,.6),organelles:[]},n=ke(0,360),i=[0,.33,.66].map(r=>(n+r*360+ke(-9,9)+360)%360);for(let r=0;r<this.config.initialCount;r++){const s=(i[r%i.length]+ke(-9,9)+360)%360;this.agents.push(this.spawnFrom({...e,hue:s,organelles:[]},void 0,!0))}for(let r=0;r<260;r++)this.spawnFood()}massDeath(e,n){const i=this.agents.filter(s=>s.alive);let r=0;for(const s of i){const o=Math.min(1,e*(n?n(s):1));if(Math.random()<o&&(s.alive=!1,s.energy=0,r++,this.totalDeaths++,this.spawnFood(s.x,s.y,s.genome.size*5,s.genome.hue,"detritus"),s.colonyId!==null)){const a=this.colonies.get(s.colonyId);a?.memberIds.delete(s.id),a?.roles.delete(s.id)}}return r}applyGreatOxidation(){let e=0;for(const n of this.agents){if(!n.alive)continue;!n.genome.organelles.includes("aerobe")&&!n.genome.organelles.includes("mitochondria")&&Math.random()<.62&&(n.alive=!1,n.energy=0,e++,this.totalDeaths++,this.spawnFood(n.x,n.y,n.genome.size*5,n.genome.hue,"detritus"),n.colonyId!==null&&this.colonies.get(n.colonyId)?.memberIds.delete(n.id))}return this.oxygen=1,`${e} 个厌氧生物在毒气中灭绝，氧气浓度永久上升`}applySnowball(){this.glacial=420;let e=0;for(const n of this.agents){if(!n.alive)continue;const i=n.genome.organelles.includes("endospore");!i&&Math.random()<.42?(n.alive=!1,n.energy=0,e++,this.totalDeaths++,this.spawnFood(n.x,n.y,n.genome.size*4,n.genome.hue,"detritus"),n.colonyId!==null&&this.colonies.get(n.colonyId)?.memberIds.delete(n.id)):i&&(n.dormant=!0,n.energy=0)}return`${e} 个细胞冻毙，能形成芽孢的谱系进入休眠`}updateEarthEvents(){if(!this.seenEarthEvents.has("goe")){const e=this.agents.filter(r=>r.alive),n=e.filter(r=>r.genome.organelles.includes("chloroplast")).length;if((e.length?n/e.length:0)>=.1&&e.length>=40&&this.tick>260||this.tick>2400){this.applyGeoEvent("greatoxidation",{silent:!0}),this.seenEarthEvents.add("goe");const r=Vl.goe;this.log("earth",`【${r.zh}】${r.descZh}`,`[${r.en}] ${r.descEn}`)}}if(!this.seenEarthEvents.has("snowball")&&this.seenEarthEvents.has("goe")){const e=this.agents.filter(n=>n.alive);if(this.tick>1400&&e.length>=120||this.tick>3200){this.applyGeoEvent("snowball",{silent:!0}),this.seenEarthEvents.add("snowball");const n=Vl.snowball;this.log("earth",`【${n.zh}】${n.descZh}`,`[${n.en}] ${n.descEn}`)}}if(!this.seenEarthEvents.has("cambrian")&&(this.seenRoutes.size>0||this.tick>4200)){this.seenEarthEvents.add("cambrian"),this.applyGeoEvent("cambrian",{silent:!0}),this.effects.push({type:"earth",x:0,y:0,tick:this.tick});const e=Vl.cambrian;this.log("earth",`【${e.zh}】${e.descZh}`,`[${e.en}] ${e.descEn}`)}}updateColonyDifferentiation(){for(const e of this.colonies.values()){this.tick-e.born>=60&&(e.rounds=Math.floor((this.tick-e.born)/60));const n=[...e.memberIds].map(i=>this.byId.get(i)).filter(i=>!!(i&&i.alive));if(n.length<3){for(const i of n)i.role=null;e.roles.clear(),e.differentiated=!1;continue}if(e.differentiated)new Set(n.map(r=>r.role).filter(Boolean)).size<=1&&e.rounds>=1&&this.assignRoles(e,n);else{if(e.rounds<1||n.length<4)continue;this.assignRoles(e,n),e.differentiated=!0;const i=[...e.roles.values()].map(r=>Ti[r].zh);this.log("differentiate",`多细胞体完成功能分化：${i.join("、")} —— 细胞们不再各干各的`,`Multicellular differentiation: ${[...e.roles.values()].map(r=>Ti[r].en).join(", ")} — cells now specialise`)}}}assignRoles(e,n){e.roles.clear();for(const a of n)a.role=null;const i=(a,l)=>{const c=a.genome;let u=Math.random()*.6;switch(l){case"core":u+=(c.organelles.includes("chloroplast")?2.4:0)+c.efficiency*1.4-c.aggression*.8;break;case"guard":u+=(c.organelles.includes("toxin")?2.2:0)+(c.organelles.includes("shell")?1.6:0)+(c.organelles.includes("tentacle")?1.2:0)+c.aggression*1.6;break;case"brooder":u+=c.efficiency*1.5+(c.organelles.includes("mitochondria")?1.1:0)-c.aggression;break;case"nurse":u+=(c.organelles.includes("sensor")?1.5:0)+c.efficiency*1.2-c.size*.08;break;case"worker":u+=(c.organelles.includes("flagellum")?1.6:0)+c.maxSpeed*.8-c.aggression;break}return u},r=n.length,s={core:r>=6?1:0,nurse:r>=5?1:0,guard:r>=4?1:0,brooder:r>=4?1:0,worker:Math.max(1,r-3)};r<6&&(s.core=1);const o=new Set;for(const a of FT){const l=s[a];if(l<=0)continue;const c=n.filter(u=>!o.has(u.id)).sort((u,d)=>i(d,a)-i(u,a));for(let u=0;u<l&&u<c.length;u++){const d=c[u];d.role=a,o.add(d.id),e.roles.set(d.id,a),this.seenRoles.add(a)}}for(const a of n)o.has(a.id)||(a.role="worker",e.roles.set(a.id,"worker"),this.seenRoles.add("worker"))}nearestFood(e,n,i){let r=null,s=i;for(const o of this.foodGrid.near(e,n)){if(o.dead)continue;const a=Xn(o.x,o.y,e,n);a<s&&(s=a,r=o)}return r?{item:r,d:s}:null}colonySize(e){return e===null?0:this.colonies.get(e)?.memberIds.size??0}colonyCenter(e){let n=0,i=0,r=0;for(const s of e.memberIds){const o=this.byId.get(s);o&&o.alive&&(n+=o.x,i+=o.y,r++)}return r?{x:n/r,y:i/r}:{x:0,y:0}}composition(){const e={photosynthesizer:0,chemotroph:0,decomposer:0,symbiote:0,hunter:0,gatherer:0};let n=0;for(const i of this.agents)i.alive&&(e[i.strategy]++,n++);if(n>0)for(const i of Kf)e[i]=e[i]/n;return e}compositionCounts(){const e={photosynthesizer:0,chemotroph:0,decomposer:0,symbiote:0,hunter:0,gatherer:0};for(const n of this.agents)n.alive&&e[n.strategy]++;return e}kill(e,n,i,r){const s=n.energy;if(n.alive=!1,n.energy=0,i.add(n.id),e.energy+=s*.45*e.genome.efficiency+n.genome.size*2.4,e.energy=Math.min(e.energy,400),e.kills++,e.flash=1,e.digest=14,e.genome.size=ft(e.genome.size+.06,2.4,9),this.totalKills++,this.totalDeaths++,this.spawnFood(n.x,n.y,n.genome.size*5,n.genome.hue,"detritus"),r&&(e.cannibalKills++,this.totalCannibalKills++,this.lastCannibalTick=this.tick,this.effects.push({type:"cannibal",x:n.x,y:n.y,tick:this.tick}),this.tick-(this.lastCannibalLogTick??-999)>60&&(this.lastCannibalLogTick=this.tick,this.log("cannibal",`食同族：猎手 #${e.id} 吞噬了同族 #${n.id}`,`Cannibalism: hunter #${e.id} devoured its own kind #${n.id}`))),n.colonyId!==null){const o=this.colonies.get(n.colonyId);o?.memberIds.delete(n.id),o?.roles.delete(n.id)}}consumeEffects(){if(!this.effects.length)return[];const e=this.effects;return this.effects=[],e}fastForward(e,n=!1){const i=this.events.length;let r=0;for(;r<e&&(this.step(),!(n&&this.events.length>i||this.agents.every(s=>!s.alive)));r++);return r}}function sr(t){const e=n=>t.organelles.includes(n);return t.aggression>.38||e("toxin")||e("tentacle")?"hunter":e("lysosome")?"decomposer":e("chloroplast")?"photosynthesizer":e("chemosynthesis")?"chemotroph":"gatherer"}function Av(t){return Pr.filter(e=>{if(t.organelles.includes(e))return!1;const n=qt[e].prereq;return n?n.every(i=>t.organelles.includes(i)):!0})}function WT(t){const e=new Set;for(let n=0;n<4;n++){let i=!1;for(const r of t){if(e.has(r))continue;const s=qt[r].prereq;(!s||s.every(o=>e.has(o)))&&(e.add(r),i=!0)}if(!i)break}return t.filter(n=>e.has(n))}function XT(t,e){const n={hue:(t.hue+ke(-14,14)+360)%360,size:ft(t.size+ke(-.35,.45),2.4,9),maxSpeed:ft(t.maxSpeed+ke(-.15,.15),.4,3.2),sense:ft(t.sense+ke(-8,8),30,220),aggression:ft(t.aggression+ke(-.08,.08),0,1),efficiency:ft(t.efficiency+ke(-.05,.05),.2,.95),organelles:[...t.organelles]},i=Av(n);if(Math.random()<e*.52&&n.organelles.length<7&&i.length)n.organelles.push($T(i,n.organelles));else if(Math.random()<e*.005&&n.organelles.length>1){const r=n.organelles[Math.floor(Math.random()*n.organelles.length)];n.organelles=YT(n.organelles,r)}return n}function $T(t,e){const n=t.map(s=>{const o=Pr.filter(u=>qt[u].prereq?.includes(s)).length,a=Pr.filter(u=>qt[u].prereq?.includes(s)&&e.includes(u)).length,l=qf.filter(u=>ns[u].requires.includes(s)).length,c=qt[s].branch==="真核"||qt[s].branch==="多细胞起源"?2:0;return 1+o*1.8+a*3.2+l*4.2+c}),i=n.reduce((s,o)=>s+o,0);let r=Math.random()*i;for(let s=0;s<t.length;s++)if(r-=n[s],r<=0)return t[s];return t[t.length-1]}function YT(t,e){const n=new Set([e]);let i=!0;for(;i;){i=!1;for(const s of t){if(n.has(s))continue;const o=qt[s].prereq;o&&o.some(a=>n.has(a))&&(n.add(s),i=!0)}}const r=t.filter(s=>!n.has(s));return r.length?r:[e]}const Ln=9.6,ZT=5.4,_g=1,Ii=900,yg=520,Mg=520,Sg=28,qT={myxomycete:ns.myxomycete.hue,volvocine:ns.volvocine.hue,animal:ns.animal.hue},Eg=`
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
`;function KT({engine:t,toolRef:e,selectedId:n,onSelect:i}){const r=we.useRef(null),s=we.useRef(n),o=we.useRef(i);return s.current=n,o.current=i,we.useEffect(()=>{const a=r.current;if(!a)return;const l=Ln/t.config.radius,c=new aT({antialias:!0,alpha:!1});c.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),c.setSize(a.clientWidth,a.clientHeight),c.toneMapping=Wx,c.toneMappingExposure=1.05,c.outputColorSpace=$n,c.shadowMap.enabled=!0,c.shadowMap.type=Vx,a.appendChild(c.domElement);const u=new yv,d=new Ge(727583),f=new Ge(263949),m=d.clone();u.background=m;const _=new Wf(727583,34,78);u.fog=_;const M=new In(46,a.clientWidth/a.clientHeight,.1,220),g=parseFloat(new URLSearchParams(window.location.search).get("cam")??""),h=Number.isFinite(g)?Math.max(.12,Math.min(2,g)):1;M.position.set(0,19.5*h,20*h);const v=()=>{const ze=a.clientWidth||1,Ve=a.clientHeight||1,Ot=ze/Ve,Pt=Ot<.9,Cn=Pt?Math.min(1.62,.74/Math.max(.42,Ot)):1;M.position.set(0,19.5*Cn*(Pt?1.12:1),20*Cn),M.updateProjectionMatrix()};v();const x=new _T(M,c.domElement);x.enableDamping=!0,x.dampingFactor=.075,x.minDistance=5,x.maxDistance=140,x.maxPolarAngle=Math.PI*.49,x.target.set(0,0,0),x.update();const S=new Nd(c),P=S.fromScene(new LT,.04);u.environment=P.texture,u.environmentIntensity=.42;const A=new fT(10479871,397324,.4);u.add(A);const E=new dg(16774888,1.1);E.position.set(11,21,8),E.castShadow=!0,E.shadow.mapSize.set(768,768),E.shadow.camera.near=1,E.shadow.camera.far=90,E.shadow.camera.left=-30,E.shadow.camera.right=30,E.shadow.camera.top=30,E.shadow.camera.bottom=-30,E.shadow.bias=-9e-4,E.shadow.normalBias=.03,E.shadow.radius=3,u.add(E);const C=new dg(9678524,.75);C.position.set(-13,9,-11),u.add(C);const O=new wv(10672956,.35,40);O.position.set(0,5,0),u.add(O);const y=QT(768);y.colorSpace=$n,y.anisotropy=c.capabilities.getMaxAnisotropy();const T=new en({map:y,color:16777215,roughness:.34,metalness:.04,envMapIntensity:.7}),z=new ct(new Mc(Ln,160),T);z.rotation.x=-Math.PI/2,z.position.y=.001,z.receiveShadow=!0,u.add(z);const G=JT(512),X=new ct(new Mc(Ln*.995,128),new Jr({map:G,transparent:!0,opacity:.32,blending:Ws,depthWrite:!1}));X.rotation.x=-Math.PI/2,X.position.set(-1.6,.012,-2.2),u.add(X);const Q=new ct(new ro(Ln+.55,Ln+.75,.7,128),new en({color:330252,roughness:.92,metalness:.04}));Q.position.y=-.42,Q.receiveShadow=!0,u.add(Q);const W=new en({color:13627135,roughness:.05,metalness:.05,transparent:!0,opacity:.17,side:Un,depthWrite:!1,envMapIntensity:2.6}),J=new ct(new ro(Ln+.26,Ln+.26,1.65,160,1,!0),W);J.position.y=.8,J.renderOrder=3,u.add(J);const L=new dT({color:15267839,roughness:.04,metalness:.06,transparent:!0,opacity:.42,side:Un,depthWrite:!1,envMapIntensity:2.8,clearcoat:1,clearcoatRoughness:.03}),q=new ct(new Sc(Ln+.26,.075,16,160),L);q.rotation.x=Math.PI/2,q.position.y=1.62,q.renderOrder=4,u.add(q);const Z=new ct(new ro(Ln+.26,Ln+.26,.07,160),W);Z.position.y=-.03,Z.renderOrder=2,u.add(Z);const le=new $r(1,8,6),Te=new en({color:16777215,roughness:.06,metalness:.1,transparent:!0,opacity:.42,envMapIntensity:2.4}),Oe=new Wn(le,Te,44),k=new jt;for(let ze=0;ze<44;ze++){const Ve=Math.random()*Math.PI*2,Ot=.15+Math.random()*1.35,Pt=.018+Math.random()*.045;k.position.set(Math.cos(Ve)*(Ln+.2),Ot,Math.sin(Ve)*(Ln+.2)),k.scale.setScalar(Pt),k.updateMatrix(),Oe.setMatrixAt(ze,k.matrix)}Oe.instanceMatrix.needsUpdate=!0,u.add(Oe);const H=new $s(1,2),ie=new Float32Array(Ii),ce=new Float32Array(Ii),be=new Float32Array(Ii),Ae=new Float32Array(Ii),Ke=new Float32Array(Ii*3),ut=new Float32Array(Ii);H.setAttribute("aSeed",new lr(ie,1)),H.setAttribute("aFlags",new lr(ce,1)),H.setAttribute("aFlags2",new lr(ut,1)),H.setAttribute("aFlash",new lr(be,1)),H.setAttribute("aRole",new lr(Ae,1)),H.setAttribute("aColor",new lr(Ke,3));const $e=new en({color:16777215,roughness:.46,metalness:.02,envMapIntensity:.42});$e.onBeforeCompile=ze=>{ze.uniforms.uTime={value:0},$e.userData.shader=ze,ze.vertexShader=ze.vertexShader.replace("#include <common>",`
            #include <common>
            ${Eg}
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
          `),ze.fragmentShader=ze.fragmentShader.replace("#include <common>",`
            #include <common>
            ${Eg}
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
          `)};const N=new Wn(H,$e,Ii);N.instanceMatrix.setUsage(ni),N.castShadow=!0,N.receiveShadow=!1,N.frustumCulled=!1,u.add(N);const bt=new Wn(new $s(1.42,1),new en({color:14676223,roughness:.14,metalness:.14,transparent:!0,opacity:.26,side:Un,depthWrite:!1,envMapIntensity:2.2}),320);bt.instanceMatrix.setUsage(ni),bt.frustumCulled=!1,bt.renderOrder=1,u.add(bt);const Be=new Wn(new aa(.1,1.9,6),new en({color:13497343,roughness:.5,transparent:!0,opacity:.5}),420);Be.instanceMatrix.setUsage(ni),Be.frustumCulled=!1,u.add(Be);const qe=new Wn(new aa(.1,1.7,6),new en({color:16756874,emissive:16734780,emissiveIntensity:.35,roughness:.4,transparent:!0,opacity:.92}),1400);qe.instanceMatrix.setUsage(ni),qe.frustumCulled=!1,u.add(qe);const Ce=new Wn(new aa(.028,.52,4),new en({color:14153727,roughness:.5,transparent:!0,opacity:.55}),1200);Ce.instanceMatrix.setUsage(ni),Ce.frustumCulled=!1,u.add(Ce);const at=new Wn(new $r(1,18,12),new en({color:16498468,emissive:9584654,emissiveIntensity:.6,roughness:.5}),40);at.instanceMatrix.setUsage(ni),at.frustumCulled=!1,u.add(at);const Re=new Wn(new $r(1,24,16),new en({color:3462041,emissive:417606,emissiveIntensity:.55,transparent:!0,opacity:.28,roughness:.1,depthWrite:!1}),40);Re.instanceMatrix.setUsage(ni),Re.frustumCulled=!1,Re.renderOrder=1,u.add(Re);const R=new Wn(new $s(1,2),new en({color:16020150,emissive:8591427,emissiveIntensity:.5,transparent:!0,opacity:.34,roughness:.35,depthWrite:!1}),40);R.instanceMatrix.setUsage(ni),R.frustumCulled=!1,R.renderOrder=1,u.add(R);const w=new Wn(new $r(1,8,6),new en({color:12448378,emissive:5212706,emissiveIntensity:.75,roughness:.55}),yg);w.instanceMatrix.setUsage(ni),w.frustumCulled=!1,u.add(w);const B=new Wn(new $s(1,0),new en({color:7031347,roughness:.95,metalness:0}),Mg);B.instanceMatrix.setUsage(ni),B.frustumCulled=!1,u.add(B);const K=3e3,te=new Float32Array(K*6),Y=new Float32Array(K*6),ye=new _n;ye.setAttribute("position",new On(te,3)),ye.setAttribute("color",new On(Y,3));const he=new hT(ye,new Mv({vertexColors:!0,transparent:!0,opacity:.5,blending:Ws,depthWrite:!1}));he.frustumCulled=!1,u.add(he);const ue=new Wn(new $r(1,12,8),new Jr({color:16777215,transparent:!0,opacity:.09,blending:Ws,depthWrite:!1}),120);ue.instanceMatrix.setUsage(ni),ue.frustumCulled=!1,ue.renderOrder=0,u.add(ue);const He=new ct(new Sc(1,.055,12,64),new Jr({color:14263361,transparent:!0,opacity:.95}));He.rotation.x=Math.PI/2,He.visible=!1,u.add(He);const oe=new $f(.86,1,72),xe=[];for(let ze=0;ze<Sg;ze++){const Ve=new Jr({color:16777215,transparent:!0,opacity:0,side:Un,depthWrite:!1,blending:Ws}),Ot=new ct(oe,Ve);Ot.rotation.x=-Math.PI/2,Ot.visible=!1,u.add(Ot),xe.push({mesh:Ot,mat:Ve,t0:0,life:1,scale:1})}let De=0;const Ie=(ze,Ve,Ot,Pt,Cn)=>{const Nt=xe[De];De=(De+1)%Sg,Nt.mesh.position.set(ze,.09,Ve),Nt.mesh.visible=!0,Nt.mat.color.setHex(Ot),Nt.t0=performance.now(),Nt.life=Cn,Nt.scale=Pt},_e={feed:{color:10672956,scale:2.2,life:1.1},smite:{color:16747325,scale:4.4,life:1.3},mutate:{color:13073919,scale:1.8,life:1},cannibal:{color:16727406,scale:2.6,life:1.2},plague:{color:16735067,scale:12,life:1.8},alien:{color:5099745,scale:10,life:1.8},spore:{color:16498468,scale:3.2,life:1.4},earth:{color:15254634,scale:16,life:2.4}},Qe=new gT,Fe=new Le,mt=new Oi(new D(0,1,0),0),I=new D;let me=0,$=0;const ee=ze=>{const Ve=c.domElement.getBoundingClientRect();Fe.x=(ze.clientX-Ve.left)/Ve.width*2-1,Fe.y=-((ze.clientY-Ve.top)/Ve.height)*2+1},pe=ze=>{me=ze.clientX,$=ze.clientY},ge=ze=>{if(Math.hypot(ze.clientX-me,ze.clientY-$)>6)return;ee(ze),Qe.setFromCamera(Fe,M);const Ve=e.current;if(Ve==="inspect"){const Cn=Qe.intersectObject(N,!1);Cn.length&&Cn[0].instanceId!==void 0?o.current(et[Cn[0].instanceId]??null):o.current(null);return}if(!Qe.ray.intersectPlane(mt,I)||Math.hypot(I.x,I.z)>Ln)return;const Ot=I.x/l,Pt=I.z/l;Ve==="feed"?t.godFeed(Ot,Pt):Ve==="smite"?t.godSmite(Ot,Pt):Ve==="mutate"&&t.godMutate(Ot,Pt)};c.domElement.addEventListener("pointerdown",pe),c.domElement.addEventListener("pointerup",ge);const et=new Array(Ii).fill(null),tt=new Ge,Qt=new Ge;let nt=0,Jt=performance.now();const Gn=new URLSearchParams(window.location.search).get("q"),bo=Gn==="high"?2:Gn==="low"?0:null;let gi=2,Vn=0,Zi=0;const ps=()=>{const ze=window.devicePixelRatio||1;gi===2?(c.setPixelRatio(Math.min(ze,1.25)),c.shadowMap.enabled=!0,E.castShadow=!0,ue.visible=!0,Oe.visible=!0):gi===1?(c.setPixelRatio(Math.min(ze,1)),c.shadowMap.enabled=!1,E.castShadow=!1,ue.visible=!0,Oe.visible=!1):(c.setPixelRatio(.6),c.shadowMap.enabled=!1,E.castShadow=!1,ue.visible=!1,Oe.visible=!1,X.visible=!1),c.shadowMap.needsUpdate=!0,c.setSize(a.clientWidth,a.clientHeight)},Ao=()=>{const ze=a.clientWidth,Ve=a.clientHeight;!ze||!Ve||(M.aspect=ze/Ve,M.updateProjectionMatrix(),v(),c.setSize(ze,Ve))},Ur=new ResizeObserver(Ao);Ur.observe(a),Ao();const Co=()=>{nt=requestAnimationFrame(Co);const ze=performance.now(),Ve=ze/1e3,Ot=(ze-Jt)/1e3;Jt=ze;const Pt=t.light;E.intensity=.2+Pt*1.05,A.intensity=.2+Pt*.32,C.intensity=.3+Pt*.6,O.intensity=.12+Pt*.4,m.copy(f).lerp(d,Pt),u.background=m,_.color.copy(m),T.emissive.setRGB(.02*Pt,.05*Pt,.03*Pt),X.material.opacity=.16+Pt*.42,$e.userData.shader&&($e.userData.shader.uniforms.uTime.value=Ve);const Cn=t.agents;let Nt=0,b=0,U=0,V=0,j=0,F=0,se=0,fe=0;const Me=new D(0,1,0),Se=new D,Pe=new Cr;for(let ne=0;ne<Cn.length&&Nt<Ii;ne++){const ae=Cn[ne];if(!ae.alive)continue;const je=ae.role?["core","worker","guard","brooder","nurse"].indexOf(ae.role)+1:0,It=new Ge(Qn[ae.strategy].color),it=ae.genome.hue,st=new Ge().setHSL(it/360,.74,.46);ae.alien?tt.set("#4fd6c0"):ae.role?(Qt.set(Ti[ae.role].color),tt.copy(st).lerp(Qt,.55)):tt.copy(st).lerp(It,.15);const Rn=ae.dormant,Xe=ae.genome.size*l*ZT*(ae.role==="core"?1.15:1)*(Rn?.6:1)*(ae.alien?1.2:1),xi=Math.sin(Ve*1.6+ae.id*1.7)*.012;if(k.position.set(ae.x*l,Xe*.5+.02+xi,ae.y*l),k.rotation.set(0,Ve*.4+ae.id*.7,0),k.scale.setScalar(Xe),k.updateMatrix(),N.setMatrixAt(Nt,k.matrix),ie[Nt]=ae.id%97*.137,ce[Nt]=(ae.genome.organelles.includes("chloroplast")?1:0)|(ae.genome.organelles.includes("toxin")?2:0)|(ae.genome.organelles.includes("shell")?4:0)|(ae.genome.organelles.includes("flagellum")?8:0)|(ae.genome.organelles.includes("lysosome")?16:0),ut[Nt]=(ae.genome.organelles.includes("tentacle")?1:0)|(ae.genome.organelles.includes("cilia")?2:0)|(ae.genome.organelles.includes("eyespot")?4:0)|(ae.genome.organelles.includes("pseudopod")?8:0)|(Rn?16:0)|(ae.genome.organelles.includes("myosin")?32:0),be[Nt]=ae.flash,Ae[Nt]=je,Ke[Nt*3]=tt.r,Ke[Nt*3+1]=tt.g,Ke[Nt*3+2]=tt.b,et[Nt]=ae.id,Nt++,ae.genome.organelles.includes("shell")&&b<320&&(k.scale.setScalar(Xe*1.05),k.updateMatrix(),bt.setMatrixAt(b,k.matrix),b++),ae.genome.organelles.includes("flagellum")&&U<420){const Ai=Math.atan2(ae.vy,ae.vx);k.position.set(ae.x*l-Math.cos(Ai)*Xe*1.5,Xe*.55,ae.y*l-Math.sin(Ai)*Xe*1.5),k.rotation.set(Math.PI/2,0,-Ai+Math.PI/2),k.scale.setScalar(Xe*.55),k.updateMatrix(),Be.setMatrixAt(U,k.matrix),U++}if(ae.genome.organelles.includes("tentacle")&&V<1400)for(let Ut=0;Ut<5&&V<1400;Ut++){const Ci=Ut/5*Math.PI*2+Ve*.5+ae.id*.7,qi=Math.sin(Ve*2.1+Ut*1.3+ae.id)*.45,Ki=Math.cos(Ci+qi*.35),tp=Math.sin(Ci+qi*.35);Se.set(Ki,.22+qi*.12,tp).normalize(),Pe.setFromUnitVectors(Me,Se),k.position.set(ae.x*l+Ki*Xe*.75,Xe*.55+.02,ae.y*l+tp*Xe*.75),k.quaternion.copy(Pe),k.scale.set(Xe*.34,Xe*1.05,Xe*.34),k.updateMatrix(),qe.setMatrixAt(V,k.matrix),V++}if(ae.genome.organelles.includes("cilia")&&j<1200)for(let Ut=0;Ut<9&&j<1200;Ut++){const Ci=Ut/9*Math.PI*2+ae.id*1.3+Ve*.35,qi=Math.cos(Ci),Ki=Math.sin(Ci);Se.set(qi,.9,Ki).normalize(),Pe.setFromUnitVectors(Me,Se),k.position.set(ae.x*l+qi*Xe*.72,Xe*.5+.02,ae.y*l+Ki*Xe*.72),k.quaternion.copy(Pe),k.scale.set(Xe*.3,Xe*.7,Xe*.3),k.updateMatrix(),Ce.setMatrixAt(j,k.matrix),j++}}N.count=Nt,N.instanceMatrix.needsUpdate=!0,qe.count=V,qe.instanceMatrix.needsUpdate=!0,Ce.count=j,Ce.instanceMatrix.needsUpdate=!0,at.count=F,at.instanceMatrix.needsUpdate=!0,Re.count=se,Re.instanceMatrix.needsUpdate=!0,R.count=fe,R.instanceMatrix.needsUpdate=!0,bt.count=b,bt.instanceMatrix.needsUpdate=!0,Be.count=U,Be.instanceMatrix.needsUpdate=!0,H.getAttribute("aSeed").needsUpdate=!0,H.getAttribute("aFlags").needsUpdate=!0,H.getAttribute("aFlash").needsUpdate=!0,H.getAttribute("aRole").needsUpdate=!0,H.getAttribute("aColor").needsUpdate=!0,H.getAttribute("aFlags2").needsUpdate=!0;let Ne=0,Ee=0;for(const ne of t.food){if(ne.dead)continue;const ae=1+Math.sin(Ve*2.2+ne.x*.05)*.12;if(k.position.set(ne.x*l,.055,ne.y*l),k.rotation.set(ne.born*.7,ne.born*1.3,0),ne.kind==="detritus"){if(Ee>=Mg)continue;k.scale.setScalar(.1*ae*_g),k.updateMatrix(),B.setMatrixAt(Ee,k.matrix),Ee++}else{if(Ne>=yg)continue;k.scale.setScalar(.085*ae*_g),k.updateMatrix(),w.setMatrixAt(Ne,k.matrix),Ne++}}w.count=Ne,w.instanceMatrix.needsUpdate=!0,B.count=Ee,B.instanceMatrix.needsUpdate=!0;let rt=0,ht=0;for(const ne of t.colonies.values()){const ae=[...ne.memberIds].map(it=>t.agentById(it)).filter(it=>!!(it&&it.alive));if(ae.length<2)continue;let je=0,It=0;for(const it of ae)je+=it.x,It+=it.y;je/=ae.length,It/=ae.length;for(const it of ae){if(rt>=K)break;const st=rt*6;te[st]=je*l,te[st+1]=.16,te[st+2]=It*l,te[st+3]=it.x*l,te[st+4]=.16,te[st+5]=it.y*l;const Rn=wg(ae);tt.set(Rn?Ti[Rn].color:"#4fb3c4"),Y[st]=tt.r*.9,Y[st+1]=tt.g*.9,Y[st+2]=tt.b*.9,Y[st+3]=tt.r*.45,Y[st+4]=tt.g*.45,Y[st+5]=tt.b*.45,rt++}if(ht<120){const it=wg(ae),st=it?Ti[it].color:"#4fb3c4";tt.set(ne.route?qT[ne.route]:st);const Rn=.7+ae.length*.12;k.position.set(je*l,.14,It*l),k.scale.set(Rn*.6,Rn*.28,Rn*.6),k.rotation.set(0,0,0),k.updateMatrix(),ue.setMatrixAt(ht,k.matrix),ue.setColorAt(ht,tt),ht++}if(ne.route==="myxomycete"&&F<40){const it=.22+ne.fruiting*.62;k.position.set(je*l,.22+it*.85,It*l),k.scale.set(it*.55,it*.8,it*.55),k.rotation.set(0,Ve*.25,0),k.updateMatrix(),at.setMatrixAt(F,k.matrix),F++}else if(ne.route==="volvocine"&&se<40){const it=.45+ae.length*.1;k.position.set(je*l,.24,It*l),k.scale.set(it,it*.82,it),k.rotation.set(0,Ve*.4,0),k.updateMatrix(),Re.setMatrixAt(se,k.matrix),se++}else if(ne.route==="animal"&&fe<40){const it=.4+ae.length*.11,st=18;k.position.set((je+ne.swarmX*st)*l,.18+Math.sin(Ve*1.8+ne.id)*.05,(It+ne.swarmY*st)*l),k.scale.set(it*(1+Math.sin(Ve*2.2)*.07),it*.52,it*(1-Math.sin(Ve*2.2)*.07)),k.rotation.set(0,Ve*.3,0),k.updateMatrix(),R.setMatrixAt(fe,k.matrix),fe++}}ye.setDrawRange(0,rt*2),ye.attributes.position.needsUpdate=!0,ye.attributes.color.needsUpdate=!0,ue.count=ht,ue.instanceMatrix.needsUpdate=!0,ue.instanceColor&&(ue.instanceColor.needsUpdate=!0);const Mt=s.current,$t=Mt!==null?t.agentById(Mt):null;if($t){He.visible=!0;const ne=$t.genome.size*l*1.9;He.position.set($t.x*l,.1,$t.y*l),He.scale.setScalar(ne*(1+Math.sin(Ve*4)*.06)),He.material.opacity=.65+Math.sin(Ve*4)*.25}else He.visible=!1;const lt=t.consumeEffects();for(const ne of lt){const ae=_e[ne.type];ae&&(Ie(ne.x*l,ne.y*l,ae.color,ae.scale,ae.life),ne.type==="cannibal"&&Ie(ne.x*l,ne.y*l,16747325,ae.scale*.55,ae.life*.7))}for(const ne of xe){if(!ne.mesh.visible)continue;const ae=(ze-ne.t0)/1e3/ne.life;if(ae>=1){ne.mesh.visible=!1;continue}const je=1-Math.pow(1-ae,3);ne.mesh.scale.setScalar(.2+je*ne.scale),ne.mat.opacity=.9*(1-ae)*(1-ae)}if(Vn+=Ot*1e3,Zi++,Zi>=12||Vn>1200){const ne=Vn/Zi;bo!==null?(gi=bo,ps()):ne>46&&gi>0?(gi--,ps()):ne<17&&gi<2&&(gi++,ps()),Vn=0,Zi=0}x.update(),c.render(u,M)};return nt=requestAnimationFrame(Co),()=>{cancelAnimationFrame(nt),Ur.disconnect(),c.domElement.removeEventListener("pointerdown",pe),c.domElement.removeEventListener("pointerup",ge),x.dispose(),P.dispose(),S.dispose(),H.dispose(),$e.dispose(),bt.geometry.dispose(),bt.material.dispose(),Be.geometry.dispose(),Be.material.dispose(),w.geometry.dispose(),w.material.dispose(),B.geometry.dispose(),B.material.dispose(),ye.dispose(),ue.geometry.dispose(),ue.material.dispose(),He.geometry.dispose(),He.material.dispose(),oe.dispose(),z.geometry.dispose(),T.dispose(),y.dispose(),G.dispose(),Q.geometry.dispose(),Q.material.dispose(),J.geometry.dispose(),q.geometry.dispose(),Z.geometry.dispose(),W.dispose(),L.dispose(),le.dispose(),Te.dispose(),c.dispose(),c.domElement.parentNode===a&&a.removeChild(c.domElement)}},[t]),p.jsx("div",{ref:r,className:"absolute inset-0"})}function wg(t){const e=new Map;for(const r of t)r.role&&e.set(r.role,(e.get(r.role)??0)+1);let n=null,i=0;for(const[r,s]of e)s>i&&(i=s,n=r);return n}function QT(t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=t/2,r=n.createRadialGradient(i,i*.92,i*.05,i,i,i);r.addColorStop(0,"#2a7a52"),r.addColorStop(.35,"#1c5c3f"),r.addColorStop(.72,"#123c2b"),r.addColorStop(1,"#081d16"),n.fillStyle=r,n.fillRect(0,0,t,t);const s=n.getImageData(0,0,t,t),o=s.data;for(let l=0;l<o.length;l+=4){const c=(Math.random()-.5)*26;o[l]=Math.max(0,Math.min(255,o[l]+c*.7)),o[l+1]=Math.max(0,Math.min(255,o[l+1]+c)),o[l+2]=Math.max(0,Math.min(255,o[l+2]+c*.8))}n.putImageData(s,0,0),n.globalCompositeOperation="lighter";for(let l=0;l<26;l++){const c=l/26*i*.98+Math.random()*6;n.beginPath(),n.arc(i,i,c,0,Math.PI*2),n.strokeStyle=`rgba(150, 220, 180, ${.012+Math.random()*.016})`,n.lineWidth=1+Math.random()*2.4,n.stroke()}for(let l=0;l<180;l++){const c=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*i*.97,d=1+Math.random()*3.6;n.beginPath(),n.arc(i+Math.cos(c)*u,i+Math.sin(c)*u,d,0,Math.PI*2),n.fillStyle=`rgba(200, 240, 220, ${.05+Math.random()*.1})`,n.fill()}n.globalCompositeOperation="source-over";const a=new Sv(e);return a.needsUpdate=!0,a}function JT(t){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.clearRect(0,0,t,t);const i=n.createRadialGradient(t*.32,t*.3,0,t*.32,t*.3,t*.46);i.addColorStop(0,"rgba(220, 245, 255, 0.55)"),i.addColorStop(.35,"rgba(160, 220, 240, 0.18)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,t,t),n.save(),n.translate(t*.5,t*.5),n.rotate(-.5);const r=n.createLinearGradient(-t*.5,0,t*.5,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.45,"rgba(255,255,255,0.22)"),r.addColorStop(.55,"rgba(255,255,255,0.22)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.fillRect(-t*.5,-t*.012,t,t*.024),n.restore();const s=new Sv(e);return s.needsUpdate=!0,s}const cr="http://www.w3.org/2000/svg";let eb=0;function Cv(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("backdrop-filter",'url("#x")')||CSS.supports("-webkit-backdrop-filter",'url("#x")')}function Tg(t,e){const n=getComputedStyle(t).borderRadius,i=parseFloat(n.split(" ")[0]);return Number.isFinite(i)?i:e}function bg(t,e,n,i,r){const s=document.createElement("canvas");s.width=Math.max(1,Math.round(t)),s.height=Math.max(1,Math.round(e));const o=s.getContext("2d");if(!o)return"";const a=s.width,l=s.height,c=Math.min(n,Math.min(a,l)/2),u=a/2,d=l/2,f=Math.max(2,i*Math.min(a,l)),m=o.createImageData(a,l),_=m.data,M=(g,h,v)=>{const x=Math.max(0,Math.min(1,(v-g)/(h-g||1)));return x*x*(3-2*x)};for(let g=0;g<l;g++)for(let h=0;h<a;h++){const v=h+.5,x=g+.5,S=Math.abs(v-u)-(u-c),P=Math.abs(x-d)-(d-c),A=Math.hypot(Math.max(S,0),Math.max(P,0)),E=Math.min(Math.max(S,P),0),C=A+E-c,O=1-M(0,f,Math.abs(C));let y=0,T=0;S>P?y=v<u?-1:1:T=x<d?-1:1;const z=O*r,G=(g*a+h)*4;_[G]=Math.max(0,Math.min(255,128+y*z)),_[G+1]=Math.max(0,Math.min(255,128+T*z)),_[G+2]=128,_[G+3]=255}return o.putImageData(m,0,0),s.toDataURL("image/png")}function Ag(t,e,n,i){const r=document.createElementNS(cr,"filter");r.setAttribute("id",t),r.setAttribute("x","-10%"),r.setAttribute("y","-10%"),r.setAttribute("width","120%"),r.setAttribute("height","120%"),r.setAttribute("color-interpolation-filters","sRGB");const s=document.createElementNS(cr,"feImage");s.setAttribute("href",e),s.setAttributeNS("http://www.w3.org/1999/xlink","href",e),s.setAttribute("result","map"),r.appendChild(s);const o=(a,l,c)=>{const u=document.createElementNS(cr,"feDisplacementMap");return u.setAttribute("in","SourceGraphic"),u.setAttribute("in2","map"),u.setAttribute("scale",String(l)),u.setAttribute("xChannelSelector",a),u.setAttribute("yChannelSelector","G"),u.setAttribute("result",c),u};if(i>0){r.appendChild(o("R",n*(1+i/100),"dR"));const a=(u,d,f)=>{const m=document.createElementNS(cr,"feColorMatrix");m.setAttribute("in",u),m.setAttribute("type","matrix");const _=g=>g?"1 0 0 0 0":"0 0 0 0 0",M=[_(d==="R"),_(d==="G"),_(d==="B"),"0 0 0 1 0"];return m.setAttribute("values",M.join(" ")),m.setAttribute("result",f),m};r.appendChild(a("dR","R","cR")),r.appendChild(o("G",n,"dG")),r.appendChild(a("dG","G","cG")),r.appendChild(o("B",n*(1-i/100),"dB")),r.appendChild(a("dB","B","cB"));const l=document.createElementNS(cr,"feBlend");l.setAttribute("in","cR"),l.setAttribute("in2","cG"),l.setAttribute("mode","screen"),l.setAttribute("result","cRG"),r.appendChild(l);const c=document.createElementNS(cr,"feBlend");c.setAttribute("in","cRG"),c.setAttribute("in2","cB"),c.setAttribute("mode","screen"),r.appendChild(c)}else r.appendChild(o("R",n,"disp"));return r}function tb(t,e={}){const{scale:n=70,chroma:i=0,border:r=.12,blur:s=2,saturate:o=1.45,radius:a=null,fallbackBlur:l=18}=e,c=Cv(),u=`liquid-glass-${++eb}`;let d=null,f=null,m=null;const _=t.style,M=()=>{const h=`blur(${l}px) saturate(${o})`;_.backdropFilter=h,_.webkitBackdropFilter=h},g=()=>{const h=`url("#${u}") blur(${s}px) saturate(${o})`;_.backdropFilter=h,_.webkitBackdropFilter=h,(getComputedStyle(t).backdropFilter||"").includes("url(")||(M(),t.dataset.liquidGlass="fallback")};if(c){d=document.createElementNS(cr,"svg"),d.setAttribute("width","0"),d.setAttribute("height","0"),d.setAttribute("aria-hidden","true"),d.style.cssText="position:fixed;pointer-events:none;left:0;top:0;opacity:0;";const h=document.createElementNS(cr,"defs");d.appendChild(h),document.body.appendChild(d);const v=()=>{const S=t.getBoundingClientRect();if(S.width<2||S.height<2)return;const P=a??Tg(t,24),A=bg(S.width,S.height,P,r,Math.max(4,Math.min(255,n))/255);A&&(f&&f.remove(),f=Ag(u,A,n,i),h.appendChild(f),g())};v();let x=0;m=new ResizeObserver(()=>{clearTimeout(x),x=window.setTimeout(()=>v(),120)}),m.observe(t)}else{const h=`blur(${l}px) saturate(${o})`;_.backdropFilter=h,_.webkitBackdropFilter=h,t.dataset.liquidGlass="fallback"}return{supported:c,refresh(){if(d&&f){const h=t.getBoundingClientRect(),v=a??Tg(t,24),x=bg(h.width,h.height,v,r,Math.max(4,Math.min(255,n))/255);x&&(f.remove(),f=Ag(u,x,n,i),d.querySelector("defs")?.appendChild(f))}},destroy(){m?.disconnect(),m=null,f?.remove(),d?.remove(),_.backdropFilter="",_.webkitBackdropFilter=""}}}Cv();const Ft=(...t)=>t.filter(Boolean).join(" ");function Qf(t,e={},n=!0){const i=we.useRef(e);i.current=e,we.useEffect(()=>{if(!n||!t.current)return;const r=tb(t.current,i.current);return()=>r.destroy()},[t,n])}function nb({children:t,onClick:e,active:n,color:i,className:r,title:s,disabled:o,size:a="md",glass:l=!0,type:c="button"}){const u=we.useRef(null);Qf(u,{scale:44,border:.16,blur:1,saturate:1.5},l&&!n);const d=a==="sm"?"h-8 px-3 text-[10px]":a==="lg"?"h-12 px-5 text-[13px]":"h-10 px-4 text-[11px]";return p.jsx("button",{ref:u,type:c,title:s,disabled:o,onClick:e,className:Ft("capsule-btn relative select-none",d,l&&"glass",!l&&"border border-white/10 bg-white/[0.04]",n?"text-white":"text-white/70 hover:text-white",o&&"opacity-40 pointer-events-none",r),style:n?{color:i,borderColor:`${i}66`,background:`linear-gradient(180deg, ${i}33, ${i}12)`,boxShadow:`inset 0 0 0 1px ${i}66, inset 0 1px 0 rgba(255,255,255,.14)`}:void 0,children:t})}function Jf(t,e,n=320){we.useEffect(()=>{if(!e)return;const i=window.setTimeout(()=>{const r=t.current;if(!r)return;r.getAnimations().some(o=>{if((o.animationName??"")!=="glass-pop")return!1;const l=o.currentTime;return l===null?!0:(typeof l=="number"?l:0)<40})&&(r.classList.remove("pop-in"),r.style.opacity="1",r.style.transform="none")},n);return()=>window.clearTimeout(i)},[t,e,n])}const We=({size:t=16,children:e})=>p.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round",children:e}),ib={flagellum:p.jsxs(We,{children:[p.jsx("circle",{cx:"7",cy:"12",r:"4.2"}),p.jsx("path",{d:"M11.2 12c2-2.6 3.4.8 5.2-1.4s3 1.4 4.6.2"})]}),cilia:p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"4.6"}),p.jsx("path",{d:"M12 4.6v2.2M12 17.2v2.2M4.6 12h2.2M17.2 12h2.2M6.8 6.8l1.6 1.6M15.6 15.6l1.6 1.6M17.2 6.8l-1.6 1.6M8.4 15.6l-1.6 1.6"})]}),tentacle:p.jsxs(We,{children:[p.jsx("circle",{cx:"6",cy:"18",r:"3.2"}),p.jsx("path",{d:"M8.4 15.8c3-1.6 2-6 5.6-6.6 2.4-.4 3.6 1.4 3.4 3"}),p.jsx("circle",{cx:"17.6",cy:"11",r:"1.5"})]}),pseudopod:p.jsx(We,{children:p.jsx("path",{d:"M4 13.5c0-3.6 2.6-6 5.6-6 2.4 0 3.3 1.6 4.7 1.6 1.5 0 2.2-1.4 3.4-1.4 1.4 0 2.3 1.3 2.3 3 0 4.2-3.4 7.3-7.6 7.3-4.4 0-8.4-2-8.4-4.5Z"})}),mitochondria:p.jsxs(We,{children:[p.jsx("ellipse",{cx:"12",cy:"12",rx:"7.6",ry:"4.6",transform:"rotate(-24 12 12)"}),p.jsx("path",{d:"M7.4 14.6c1.6-2.6 3-2.6 4.6 0s3 2.6 4.6 0"})]}),chloroplast:p.jsxs(We,{children:[p.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"5",transform:"rotate(-18 12 12)"}),p.jsx("path",{d:"M8.4 12.6h7.2M9.2 10.6h5.6M9.6 14.2h4.4"})]}),chemosynthesis:p.jsxs(We,{children:[p.jsx("path",{d:"M8.5 20V13c0-3.4 1.4-5.4 3.5-7.2 2.1 1.8 3.5 3.8 3.5 7.2v7"}),p.jsx("path",{d:"M10.4 20v-5.2h3.2V20"}),p.jsx("path",{d:"M12 3.4V1.4M8.8 5 7.6 3.4M15.2 5l1.2-1.6"})]}),aerobe:p.jsxs(We,{children:[p.jsx("circle",{cx:"9.5",cy:"12",r:"3.2"}),p.jsx("path",{d:"M15 8.6a4.8 4.8 0 0 1 0 6.8M17.8 6.2a8.4 8.4 0 0 1 0 11.6"})]}),lysosome:p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"7.4"}),p.jsx("circle",{cx:"10",cy:"10.6",r:"1.1"}),p.jsx("circle",{cx:"13.8",cy:"11.4",r:"0.9"}),p.jsx("circle",{cx:"11.4",cy:"14.4",r:"1"})]}),shell:p.jsxs(We,{children:[p.jsx("path",{d:"M12 3.4 19 6.4v6.1c0 3.6-3 6.5-7 8.1-4-1.6-7-4.5-7-8.1V6.4Z"}),p.jsx("path",{d:"M12 7.6v10M8.6 9.6l6.8 4.8M15.4 9.6l-6.8 4.8"})]}),toxin:p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"3"}),p.jsx("path",{d:"M12 4.6v3M12 16.4v3M4.6 12h3M16.4 12h3M6.8 6.8l2.1 2.1M15.1 15.1l2.1 2.1M17.2 6.8l-2.1 2.1M8.9 15.1l-2.1 2.1"})]}),capsule:p.jsxs(We,{children:[p.jsx("rect",{x:"4.4",y:"5.6",width:"15.2",height:"12.8",rx:"4.6"}),p.jsx("circle",{cx:"12",cy:"12",r:"3.4"})]}),endospore:p.jsxs(We,{children:[p.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"5.4",transform:"rotate(-24 12 12)"}),p.jsx("ellipse",{cx:"12",cy:"12",rx:"3",ry:"2",transform:"rotate(-24 12 12)"})]}),sensor:p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"2.4"}),p.jsx("path",{d:"M12 9.6V4.4M9.6 12H4.4M14.4 12h5.2M10.2 10.2 6.6 6.6M13.8 13.8l3.6 3.6"})]}),eyespot:p.jsxs(We,{children:[p.jsx("path",{d:"M3.4 12s3.6-5.4 8.6-5.4S20.6 12 20.6 12s-3.6 5.4-8.6 5.4S3.4 12 3.4 12Z"}),p.jsx("circle",{cx:"12",cy:"12",r:"2.4"})]}),magnetosome:p.jsxs(We,{children:[p.jsx("path",{d:"M6.6 5.4v6.8a5.4 5.4 0 0 0 10.8 0V5.4"}),p.jsx("path",{d:"M6.6 9.4h3.4M14 9.4h3.4"})]}),adhesion:p.jsxs(We,{children:[p.jsx("circle",{cx:"7.4",cy:"12",r:"4.4"}),p.jsx("circle",{cx:"16.6",cy:"12",r:"4.4"}),p.jsx("path",{d:"M10.6 12h2.8"})]}),quorum:p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"2.4"}),p.jsx("circle",{cx:"12",cy:"4.6",r:"1.5"}),p.jsx("circle",{cx:"18.4",cy:"9.3",r:"1.5"}),p.jsx("circle",{cx:"18.4",cy:"14.7",r:"1.5"}),p.jsx("circle",{cx:"12",cy:"19.4",r:"1.5"}),p.jsx("circle",{cx:"5.6",cy:"14.7",r:"1.5"}),p.jsx("circle",{cx:"5.6",cy:"9.3",r:"1.5"})]}),myosin:p.jsxs(We,{children:[p.jsx("path",{d:"M3.4 15c2.6-5 5.2 5 7.8 0s5.2 5 7.8 0"}),p.jsx("circle",{cx:"18.6",cy:"8.2",r:"2.2"})]}),meiosis:p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"3"}),p.jsx("circle",{cx:"5.4",cy:"7.6",r:"1.7"}),p.jsx("circle",{cx:"18.6",cy:"7.6",r:"1.7"}),p.jsx("circle",{cx:"5.4",cy:"16.4",r:"1.7"}),p.jsx("circle",{cx:"18.6",cy:"16.4",r:"1.7"})]}),apoptosis:p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"7",strokeDasharray:"3.4 2.6"}),p.jsx("path",{d:"M8.4 8.4 5.6 5.6M15.6 15.6l2.8 2.8M15.6 8.4l2.8-2.8M8.4 15.6l-2.8 2.8"})]}),"role-core":p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"3.4"}),p.jsx("circle",{cx:"12",cy:"12",r:"7.4",strokeDasharray:"2 2.6"})]}),"role-worker":p.jsxs(We,{children:[p.jsx("circle",{cx:"9",cy:"12",r:"3.6"}),p.jsx("path",{d:"M12.6 12h5.8M16 9.6 18.4 12 16 14.4"})]}),"role-guard":p.jsxs(We,{children:[p.jsx("path",{d:"M12 3.8 18 6.4v5.2c0 3.4-2.6 6-6 7.4-3.4-1.4-6-4-6-7.4V6.4Z"}),p.jsx("path",{d:"m9.4 12 1.9 1.9 3.4-3.6"})]}),"role-brooder":p.jsxs(We,{children:[p.jsx("circle",{cx:"10",cy:"12",r:"4.6"}),p.jsx("circle",{cx:"17.4",cy:"12",r:"2.4"})]}),"role-nurse":p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"7.4"}),p.jsx("path",{d:"M12 8.6v6.8M8.6 12h6.8"})]}),"event-burst":p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"2.2"}),p.jsx("path",{d:"M12 7.2V3.4M12 16.8v3.8M7.2 12H3.4M16.8 12h3.8M8.7 8.7 6 6M15.3 15.3l2.7 2.7M15.3 8.7 18 6M8.7 15.3 6 18"})]}),"event-magma":p.jsxs(We,{children:[p.jsx("path",{d:"M12 3.2c3 3.6 4.8 6 4.8 9.2a4.8 4.8 0 1 1-9.6 0c0-3.2 1.8-5.6 4.8-9.2Z"}),p.jsx("path",{d:"M9.6 13.4a2.6 2.6 0 0 0 2.6 2.6"})]}),"event-cell":p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"7.6"}),p.jsx("circle",{cx:"12",cy:"12",r:"2.8"}),p.jsx("circle",{cx:"7.6",cy:"8.6",r:"0.9"}),p.jsx("circle",{cx:"16.2",cy:"15",r:"0.9"})]}),"event-impact":p.jsxs(We,{children:[p.jsx("circle",{cx:"15",cy:"15",r:"5.4"}),p.jsx("path",{d:"M3.4 6.6 9 11.2"}),p.jsx("path",{d:"M12.6 16.8a2 2 0 0 1 1.6-2.6"}),p.jsx("path",{d:"M17.4 4.6 15 6.6"})]}),"event-insect":p.jsxs(We,{children:[p.jsx("ellipse",{cx:"12",cy:"13.4",rx:"2.6",ry:"4"}),p.jsx("circle",{cx:"12",cy:"7.6",r:"1.8"}),p.jsx("path",{d:"M9.6 11 5.6 9.4M9.6 14 5.6 15.4M14.4 11l4-1.6M14.4 14l4 1.4"})]}),"event-tree":p.jsxs(We,{children:[p.jsx("path",{d:"M12 21v-6.4"}),p.jsx("path",{d:"M12 14.6C8.6 13 7 10.6 7.4 7.4c2.8-.4 4.6 1.4 4.6 4.2 0-2.8 1.8-4.6 4.6-4.2.4 3.2-1.2 5.6-4.6 7.2Z"})]}),"event-pangaea":p.jsxs(We,{children:[p.jsx("path",{d:"M3.6 6.2c3-1.6 5.6-.4 8.4.8 2.8 1.2 5.6 1 8.4-.6"}),p.jsx("path",{d:"M3.6 17.8c3 1.6 5.6.4 8.4-.8 2.8-1.2 5.6-1 8.4.6"}),p.jsx("path",{d:"M12 9v6",strokeDasharray:"2 2"})]}),"event-dinosaur":p.jsxs(We,{children:[p.jsx("ellipse",{cx:"10",cy:"15",rx:"4",ry:"5.4"}),p.jsx("path",{d:"M14.4 11.6 18 6.6M18 6.6l2 .8M18 6.6l-.4 2"})]}),"event-mammal":p.jsxs(We,{children:[p.jsx("path",{d:"M8 9.4a4 4 0 0 1 8 0v3.2a4.6 4.6 0 1 1-8 0Z"}),p.jsx("circle",{cx:"9",cy:"6.4",r:"1.5"}),p.jsx("circle",{cx:"15",cy:"6.4",r:"1.5"})]}),"event-human":p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"7.6",r:"3.2"}),p.jsx("path",{d:"M4.8 20.4a7.2 7.2 0 0 1 14.4 0"})]}),"event-goe":p.jsxs(We,{children:[p.jsx("path",{d:"M4 16.4h16M6.4 12.4h11.2M8.6 8.4h6.8"}),p.jsx("circle",{cx:"12",cy:"5",r:"1.8"})]}),"event-snowball":p.jsxs(We,{children:[p.jsx("path",{d:"M12 3.4v17.2M4.6 7.6l14.8 8.8M19.4 7.6 4.6 16.4"}),p.jsx("path",{d:"M9.6 5.4 12 7.8l2.4-2.4M9.6 18.6l2.4-2.4 2.4 2.4"})]}),"event-cambrian":p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"2.4"}),p.jsx("path",{d:"M12 9.6V4.4M12 14.4v5.2M9.6 12H4.4M14.4 12h5.2"}),p.jsx("path",{d:"M10.2 10.2 6.8 6.8M13.8 13.8l3.4 3.4M13.8 10.2l3.4-3.4M10.2 13.8l-3.4 3.4"})]}),"route-myxomycete":p.jsxs(We,{children:[p.jsx("path",{d:"M12 20v-8"}),p.jsx("path",{d:"M8 12c0-2.4 1.8-4.4 4-4.4s4 2 4 4.4"}),p.jsx("circle",{cx:"12",cy:"9.4",r:"2.6"}),p.jsx("path",{d:"M7.4 20h9.2"})]}),"route-volvocine":p.jsxs(We,{children:[p.jsx("circle",{cx:"12",cy:"12",r:"7.4"}),p.jsx("circle",{cx:"9.4",cy:"10.4",r:"1.2"}),p.jsx("circle",{cx:"14.6",cy:"10.4",r:"1.2"}),p.jsx("circle",{cx:"9.4",cy:"14.6",r:"1.2"}),p.jsx("circle",{cx:"14.6",cy:"14.6",r:"1.2"}),p.jsx("circle",{cx:"12",cy:"12",r:"1.4"})]}),"route-animal":p.jsxs(We,{children:[p.jsx("path",{d:"M3.6 14.4c2-4.4 5-6.6 8.4-6.6s6.4 2.2 8.4 6.6c-2 4.4-5 6.6-8.4 6.6s-6.4-2.2-8.4-6.6Z"}),p.jsx("circle",{cx:"12",cy:"12.4",r:"2.2"}),p.jsx("path",{d:"M4.4 18.6 2.2 21M19.6 18.6l2.2 2.4"})]})};function pi({id:t,size:e=16,className:n}){const i=ib[t];return i?p.jsx("span",{className:n,style:{display:"inline-flex",width:e,height:e,flexShrink:0},children:i}):null}const Dt=t=>({width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"}),rb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"}),p.jsx("circle",{cx:"12",cy:"12",r:"2.8"})]}),sb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M12 3v7"}),p.jsx("path",{d:"M8.5 7.5 12 11l3.5-3.5"}),p.jsx("circle",{cx:"6",cy:"16",r:"2.4"}),p.jsx("circle",{cx:"12",cy:"18",r:"2.4"}),p.jsx("circle",{cx:"18",cy:"16",r:"2.4"})]}),ob=({size:t=16,...e})=>p.jsx("svg",{...Dt(t),...e,children:p.jsx("path",{d:"M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"})}),ab=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"}),p.jsx("circle",{cx:"12",cy:"12",r:"3.1"})]}),lb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M12 3c5 0 8 4 8 9s-3.5 8-8 8-8-3-8-8 3-9 8-9Z"}),p.jsx("ellipse",{cx:"8.8",cy:"10",rx:"2.1",ry:"2.6"}),p.jsx("ellipse",{cx:"15.2",cy:"10",rx:"2.1",ry:"2.6"}),p.jsx("path",{d:"M9.5 17c1.6 1 3.4 1 5 0"})]}),cb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("circle",{cx:"12",cy:"12",r:"5.2"}),p.jsx("path",{d:"M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2M5.3 5.3l2.3 2.3M16.4 16.4l2.3 2.3M18.7 5.3l-2.3 2.3M7.6 16.4l-2.3 2.3"})]}),Rv=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M3.5 3.5v17h17"}),p.jsx("path",{d:"M8 16V11M12 16V6M16 16v-3.5"})]}),ub=({size:t=16,...e})=>p.jsx("svg",{...Dt(t),...e,children:p.jsx("path",{d:"M6 6l12 12M18 6 6 18"})}),Ud=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("circle",{cx:"12",cy:"12",r:"8.6"}),p.jsx("path",{d:"M3.4 12h17.2M12 3.4c2.3 2.4 3.5 5.4 3.5 8.6s-1.2 6.2-3.5 8.6c-2.3-2.4-3.5-5.4-3.5-8.6S9.7 5.8 12 3.4Z"})]}),hb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("rect",{x:"7",y:"5.5",width:"3.4",height:"13",rx:"1.5"}),p.jsx("rect",{x:"13.6",y:"5.5",width:"3.4",height:"13",rx:"1.5"})]}),db=({size:t=16,...e})=>p.jsx("svg",{...Dt(t),...e,children:p.jsx("path",{d:"M8 5.6 18.5 12 8 18.4V5.6Z"})}),fb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M20 12a8 8 0 1 1-2.6-5.9"}),p.jsx("path",{d:"M20 3.5V8h-4.5"})]}),pb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M5 6.2 13 12l-8 5.8V6.2Z"}),p.jsx("path",{d:"M16.5 5.5v13"})]}),mb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M4 6.2 12 12l-8 5.8V6.2Z"}),p.jsx("path",{d:"M13 6.2 21 12l-8 5.8V6.2Z"})]}),la=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("circle",{cx:"12",cy:"12",r:"4"}),p.jsx("path",{d:"M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6"})]}),gb=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M14 14.8V5.2a2.2 2.2 0 1 0-4.4 0v9.6a4 4 0 1 0 4.4 0Z"}),p.jsx("circle",{cx:"11.8",cy:"17.4",r:"1.7"})]}),kd=({size:t=16,...e})=>p.jsx("svg",{...Dt(t),...e,children:p.jsx("path",{d:"M12 3.2s6 6.1 6 10a6 6 0 0 1-12 0c0-3.9 6-10 6-10Z"})}),Pv=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M4 5.2A2.2 2.2 0 0 1 6.2 3H19v14.5H6.2A2.2 2.2 0 0 0 4 19.7V5.2Z"}),p.jsx("path",{d:"M4 19.7A2.2 2.2 0 0 1 6.2 17.5H19V21H6.2A2.2 2.2 0 0 1 4 18.8v.9Z"})]}),Ec=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M7 4h10v5a5 5 0 0 1-10 0V4Z"}),p.jsx("path",{d:"M7 5.5H4.6v1.2A3.4 3.4 0 0 0 7.6 10M17 5.5h2.4v1.2a3.4 3.4 0 0 1-3 3.3"}),p.jsx("path",{d:"M12 14v3.5M8.5 20.5h7"})]}),Nv=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("path",{d:"M6 3.5h11a2 2 0 0 1 2 2v11.8a3.2 3.2 0 0 1-3.2 3.2H8.2A3.2 3.2 0 0 1 5 17.3V5.5a2 2 0 0 1 1-2Z"}),p.jsx("path",{d:"M8.5 8.5h7M8.5 12h7M8.5 15.5h4"})]}),Fd=({size:t=16,...e})=>p.jsxs("svg",{...Dt(t),...e,children:[p.jsx("circle",{cx:"8",cy:"8.5",r:"4"}),p.jsx("circle",{cx:"16",cy:"15",r:"4.6"}),p.jsx("path",{d:"M8 12.5v3.2M8 15.7h3.4"})]}),ep=({size:t=16,...e})=>p.jsx("svg",{...Dt(t),...e,children:p.jsx("path",{d:"M12 3.2 13.9 9l5.9 1.9-5.9 1.9L12 18.7l-1.9-5.9L4.2 10.9 10.1 9 12 3.2Z"})}),xb={zh:{eyebrow:"演化沙盒 · 第 1 号培养皿",title:`在玻璃皿里，
看细胞长成生态`,lede:"200 个相同的原始单细胞被接种进一只培养皿。你可以投喂、点化、降下瘟疫，也可以什么都不做，看它们自己走完从争抢营养到分工协作的整段路。",enter:"进入培养皿",note:"也可以先看玩法",modes:"投喂 · 点化 · 天罚 · 瘟疫 · 入侵",label:{id:"PL-01",title:"培养皿 · 实时演化",rows:[{k:"生态位",v:"光合 / 化能 / 分解 / 共生 / 猎手"},{k:"演化创新",v:"21 项 · 各有真实代表生物"},{k:"多细胞",v:"三条真实路线 · 功能分化"}]},cards:[{icon:p.jsx(la,{size:15}),title:"光合者",body:"长出叶绿体，在光照下把光变成能量。它们是整张食物网的地基。",color:"#84b96b"},{icon:p.jsx(kd,{size:15}),title:"分解者",body:"拥有溶酶体，把尸体碎屑还原成培养基养分。生态循环在这里闭合。",color:"#d4748e"},{icon:p.jsx(Ec,{size:15}),title:"猎手",body:"毒素与外壳武装到牙齿。它们会捕食弱者，也会同类相食。",color:"#e2663f"},{icon:p.jsx(Fd,{size:15}),title:"多细胞体",body:"黏连蛋白把个体粘成团体，长期演化后长出核心、守卫、繁殖体等职能。",color:"#4fb3c4"}],footer:"拖动旋转 · 滚轮缩放 · 点击生物查看基因组"},en:{eyebrow:"EVOLUTION SANDBOX · PLATE 01",title:`A colony of cells,
growing into an ecosystem`,lede:"Two hundred identical primitive cells are inoculated into one dish. Feed them, bless them, strike them with plague — or do nothing and watch them walk the whole road from competing for nutrients to cooperating.",enter:"Enter the dish",note:"or read the rules first",modes:"Feed · Bless · Smite · Plague · Aliens",label:{id:"PL-01",title:"Petri dish · live evolution",rows:[{k:"Niches",v:"Photo / Chemo / Decomposer / Symbiote / Hunter"},{k:"Innovations",v:"21, each with a real organism behind it"},{k:"Multicellular",v:"Three real routes, with cell specialisation"}]},cards:[{icon:p.jsx(la,{size:15}),title:"Phototrophs",body:"They grow chloroplasts and turn light into energy — the bedrock of the food web.",color:"#84b96b"},{icon:p.jsx(kd,{size:15}),title:"Decomposers",body:"Lysosomes break corpses back into nutrients. The cycle closes here.",color:"#d4748e"},{icon:p.jsx(Ec,{size:15}),title:"Hunters",body:"Armed with toxin and shell. They devour the weak, and sometimes their own kind.",color:"#e2663f"},{icon:p.jsx(Fd,{size:15}),title:"Multicellularity",body:"Adhesin glues cells into colonies that evolve cores, guards and brooders over time.",color:"#4fb3c4"}],footer:"Drag to orbit · Scroll to zoom · Click a cell to inspect"}};function vb({onEnter:t,lang:e}){const n=xb[e],[i,r]=we.useState(!1);return we.useEffect(()=>{const s=requestAnimationFrame(()=>r(!0)),o=window.setTimeout(()=>r(!0),500);return()=>{cancelAnimationFrame(s),window.clearTimeout(o)}},[]),p.jsxs("div",{className:"fixed inset-0 z-50",children:[p.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(101deg, rgba(14,13,11,.975) 0%, rgba(14,13,11,.95) 38%, rgba(14,13,11,.72) 55%, rgba(14,13,11,.12) 74%, rgba(14,13,11,.05) 100%)"}}),p.jsx("div",{className:"relative h-full w-full overflow-y-auto scroll-thin",style:{pointerEvents:"none"},children:p.jsxs("div",{className:"min-h-full w-full max-w-[1240px] mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col",children:[p.jsxs("div",{className:"flex items-center justify-between gap-4 transition-all duration-500",style:{opacity:i?1:0,transform:i?"none":"translateY(-8px)"},children:[p.jsxs("div",{className:"flex items-baseline gap-3",children:[p.jsx("span",{className:"display text-[15px] text-[#efe9de] tracking-tight",children:"Petri Arena"}),p.jsx("span",{className:"label-xs text-[#857f74]",children:n.eyebrow})]}),p.jsx("span",{className:"label-xs text-[#857f74] hidden md:inline",children:n.modes})]}),p.jsxs("div",{className:"flex-1 grid md:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] gap-8 items-center py-10 md:py-0",children:[p.jsxs("div",{className:"max-w-[560px] transition-all duration-500",style:{opacity:i?1:0,transform:i?"none":"translateY(14px)"},children:[p.jsx("h1",{className:"display whitespace-pre-line text-[31px] md:text-[44px] leading-[1.1] text-[#efe9de]",style:{letterSpacing:"-0.018em"},children:n.title}),p.jsx("p",{className:"mt-5 max-w-[46ch] text-[13.5px] leading-[1.75] text-[#aaa398]",children:n.lede}),p.jsxs("div",{className:"mt-8 flex items-center gap-4",style:{pointerEvents:"auto"},children:[p.jsx(nb,{size:"lg",onClick:t,color:"#d9a441",className:"!h-11 !px-6 text-[13px] font-medium !rounded-[8px]",children:n.enter}),p.jsx("span",{className:"text-[11px] text-[#857f74]",children:n.note})]}),p.jsx("dl",{className:"mt-11 border-t border-[#efe9de]/10 max-w-[520px]",children:n.cards.map((s,o)=>p.jsxs("div",{className:"group flex items-start gap-3.5 py-3 border-b border-[#efe9de]/[0.07] transition-colors",style:{marginLeft:o%2?26:0},children:[p.jsx("span",{className:"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px]",style:{color:s.color,background:`${s.color}14`,border:`1px solid ${s.color}30`},children:s.icon}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("dt",{className:"text-[12.5px] text-[#efe9de]",children:s.title}),p.jsx("dd",{className:"mt-0.5 text-[11.5px] leading-[1.65] text-[#857f74]",children:s.body})]})]},s.title))})]}),p.jsx("div",{className:"hidden md:block","aria-hidden":!0})]}),p.jsxs("div",{className:"flex items-end justify-between gap-6 border-t border-[#efe9de]/10 pt-4 transition-all duration-500",style:{opacity:i?1:0,transform:i?"none":"translateY(10px)"},children:[p.jsx("dl",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-1.5 flex-1 max-w-[720px]",children:n.label.rows.map(s=>p.jsxs("div",{className:"flex items-baseline gap-2",children:[p.jsx("dt",{className:"label-xs text-[#857f74] shrink-0",children:s.k}),p.jsx("dd",{className:"text-[11.5px] text-[#aaa398] truncate",children:s.v})]},s.k))}),p.jsxs("div",{className:"hidden lg:block text-right",children:[p.jsx("div",{className:"label-xs text-[#d9a441]",children:n.label.id}),p.jsx("div",{className:"text-[11.5px] text-[#857f74] mt-0.5",children:n.label.title})]})]}),p.jsxs("div",{className:"mt-4 flex items-center justify-between gap-4",children:[p.jsx("span",{className:"text-[10.5px] text-[#6d675e] font-mono",children:n.footer}),p.jsxs("span",{className:"flex items-center gap-2 text-[10.5px] text-[#6d675e]",children:[p.jsx(pi,{id:"flagellum",size:13}),p.jsx(pi,{id:"chloroplast",size:13}),p.jsx(pi,{id:"adhesion",size:13})]})]})]})})]})}function Lv({composition:t,counts:e,size:n=104,thickness:i=13,showLegend:r=!1,showTotal:s=!0}){const o=(n-i)/2,a=2*Math.PI*o,l=we.useMemo(()=>{let u=0;return Kf.map(d=>{const f=Math.max(0,t[d]??0),m={id:d,value:f,dash:f*a,offset:-u*a,color:Qn[d].color,label:Qn[d].zh,icon:Qn[d].icon};return u+=f,m})},[t,a]),c=e?Object.values(e).reduce((u,d)=>u+d,0):Math.round((t.photosynthesizer??0)*0)+_b();return p.jsxs("div",{className:"flex flex-col items-center gap-2.5",children:[p.jsxs("div",{className:"relative",style:{width:n,height:n},children:[p.jsx("svg",{width:n,height:n,className:"-rotate-90",children:p.jsx("circle",{cx:n/2,cy:n/2,r:o,fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:i})}),p.jsx("svg",{width:n,height:n,className:"-rotate-90 absolute inset-0",children:l.map(u=>u.value<=1e-4?null:p.jsx("circle",{cx:n/2,cy:n/2,r:o,fill:"none",stroke:u.color,strokeWidth:i,strokeLinecap:"butt",strokeDasharray:`${u.dash} ${Math.max(0,a-u.dash)}`,strokeDashoffset:u.offset,style:{transition:"stroke-dasharray 640ms cubic-bezier(.22,1,.36,1), stroke-dashoffset 640ms cubic-bezier(.22,1,.36,1)"}},u.id))}),s&&p.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[p.jsx("span",{className:"num text-[19px] font-semibold leading-none text-white/92",children:c}),p.jsx("span",{className:"label-xs text-white/35 mt-1",children:"个体"})]}),p.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 animate-ping pointer-events-none [animation-duration:2.8s]"})]}),r&&p.jsx("div",{className:"w-full space-y-1",children:l.map(u=>p.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[p.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:u.color}}),p.jsx("span",{className:"text-white/70",children:u.label}),p.jsx("span",{className:"flex-1"}),p.jsxs("span",{className:"num text-white/45",children:[(u.value*100).toFixed(1),"%"]}),e&&p.jsx("span",{className:"num text-white/30 w-8 text-right",children:e[u.id]??0})]},u.id))})]})}function _b(t){return 0}const yb=["细菌","古菌","内共生","真核","多细胞起源","动物","植物","真菌"];function Ku(t){return t>=1e3?`${(t/1e3).toFixed(1)} 十亿年前`:`${t} 百万年前`}function Mb({engine:t,lang:e}){const[n,i]=we.useState(null),[r,s]=we.useState(null),o=we.useMemo(()=>{const c=new Map;for(const u of Pr){const d=qt[u].branch;c.has(d)||c.set(d,[]),c.get(d).push(u)}for(const[,u]of c)u.sort((d,f)=>qt[f].eraMa-qt[d].eraMa);return yb.filter(u=>c.has(u)).map(u=>[u,c.get(u)])},[]),a=Pr.length,l=t.seenOrganelles.size;return p.jsxs("div",{className:"space-y-5 pt-1",children:[p.jsxs("div",{className:"glass-soft rounded-xl px-3.5 py-3",children:[p.jsxs("div",{className:"flex items-baseline justify-between mb-1.5",children:[p.jsx("span",{className:"label-xs text-white/40",children:e==="zh"?"已发现的演化创新":"DISCOVERED INNOVATIONS"}),p.jsxs("span",{className:"num text-[15px] text-[#a2db3c]",children:[l,p.jsxs("span",{className:"text-white/25 text-[11px]",children:["/",a]})]})]}),p.jsx("div",{className:"h-1.5 rounded-full bg-white/8 overflow-hidden",children:p.jsx("div",{className:"h-full rounded-full transition-[width] duration-700",style:{width:`${l/a*100}%`,background:"var(--accent)"}})}),p.jsx("p",{className:"mt-2 text-[10px] leading-relaxed text-white/35",children:e==="zh"?"每一项都对应地球上真实发生过的演化创新，拥有真实存在的代表生物与起源年代。":"Every entry is a real evolutionary innovation with a real organism behind it."})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"真实的多细胞化路线":"REAL MULTICELLULAR ROUTES"}),p.jsx("div",{className:"space-y-2",children:qf.map(c=>{const u=ns[c],d=t.seenRoutes.has(c),f=r===c;return p.jsxs("button",{onClick:()=>s(f?null:c),className:"w-full text-left rounded-xl px-3 py-2.5 transition-all duration-300",style:{background:d?`${u.hue}18`:"rgba(255,255,255,.03)",border:`1px solid ${d?`${u.hue}55`:"rgba(255,255,255,.08)"}`,boxShadow:d?`0 6px 22px -12px ${u.hue}`:"none"},children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"text-[15px]",style:{color:d?u.hue:"rgba(255,255,255,.3)"},children:p.jsx(pi,{id:u.icon,size:15})}),p.jsx("span",{className:Ft("text-[12px]",d?"text-white/90":"text-white/40"),children:e==="zh"?u.zh:u.en}),p.jsx("span",{className:"flex-1"}),p.jsx("span",{className:"text-[9.5px] px-1.5 rounded-[4px]",style:{background:d?`${u.hue}25`:"rgba(255,255,255,.05)",color:d?u.hue:"rgba(255,255,255,.3)"},children:d?e==="zh"?"已达成":"REACHED":e==="zh"?"未达成":"LOCKED"})]}),p.jsxs("div",{className:"mt-1 text-[10px] text-white/32",children:[e==="zh"?u.realZh:u.realEn," · ",Ku(u.eraMa)]}),f&&p.jsxs("div",{className:"mt-2 space-y-1.5 text-[10.5px] leading-relaxed",children:[p.jsx("p",{className:"text-white/55",children:e==="zh"?u.descZh:u.descEn}),p.jsxs("p",{style:{color:`${u.hue}dd`},children:["▸ ",e==="zh"?u.perkZh:u.perkEn]}),p.jsxs("p",{className:"text-white/35",children:[e==="zh"?"需要：":"Requires: ",u.requires.map(m=>qt[m].zh).join(" + ")]})]})]},c)})})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"地球史大事件":"MASS EVENTS IN EARTH HISTORY"}),p.jsx("div",{className:"space-y-1.5",children:Object.values(Vl).map(c=>{const u=t.seenEarthEvents.has(c.id);return p.jsxs("div",{className:"flex items-start gap-2.5 px-2.5 py-2 rounded-xl",style:{background:u?`${c.hue}12`:"transparent",opacity:u?1:.38},children:[p.jsx("span",{className:"text-[14px] mt-px",style:{color:u?c.hue:"rgba(255,255,255,.35)"},children:p.jsx(pi,{id:c.icon,size:14})}),p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:"flex items-baseline gap-2",children:[p.jsx("span",{className:Ft("text-[11.5px]",u?"text-white/88":"text-white/45"),children:e==="zh"?c.zh:c.en}),p.jsx("span",{className:"text-[9px] text-white/28 num",children:Ku(c.eraMa)})]}),u&&p.jsx("div",{className:"text-[10px] text-white/42 leading-relaxed mt-0.5",children:e==="zh"?c.descZh:c.descEn})]})]},c.id)})})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label-xs text-white/38 mb-2",children:e==="zh"?"演化谱系树":"LINEAGE TREE"}),p.jsx("div",{className:"space-y-4",children:o.map(([c,u])=>p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[p.jsx("span",{className:"w-1 h-1 rounded-full bg-white/30"}),p.jsx("span",{className:"text-[10.5px] text-white/50",children:c}),p.jsx("span",{className:"flex-1 h-px bg-white/8"})]}),p.jsx("div",{className:"space-y-1 pl-3 border-l border-white/8",children:u.map(d=>{const f=qt[d],m=t.seenOrganelles.has(d),_=n===d;return p.jsxs("button",{onClick:()=>i(_?null:d),className:"w-full text-left rounded-xl px-2 py-1.5 transition-all duration-200 hover:bg-white/4",style:{background:_?`${f.hue}16`:void 0},children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-6 h-6 rounded-full flex items-center justify-center text-[12px] shrink-0",style:{border:`1px solid ${m?`${f.hue}66`:"rgba(255,255,255,.12)"}`,background:m?`${f.hue}1c`:"transparent",color:m?f.hue:"rgba(255,255,255,.3)"},children:m?p.jsx(pi,{id:f.icon,size:13}):p.jsx("span",{className:"text-[11px]",children:"?"})}),p.jsx("span",{className:Ft("text-[11.5px]",m?"text-white/85":"text-white/38"),children:e==="zh"?f.zh:f.en}),p.jsx("span",{className:"flex-1"}),p.jsx("span",{className:"text-[9px] text-white/26 num",children:Ku(f.eraMa)})]}),_&&p.jsxs("div",{className:"mt-1.5 pl-8 space-y-1",children:[p.jsx("p",{className:"text-[10.5px] text-white/55 leading-relaxed",children:e==="zh"?f.descZh:f.descEn}),p.jsxs("p",{className:"text-[10px] text-white/40",children:[p.jsx("span",{className:"text-white/55",children:e==="zh"?"现实原型：":"Real organism: "}),e==="zh"?f.realZh:f.realEn]}),p.jsx("p",{className:"text-[10px] text-white/32 leading-relaxed",children:e==="zh"?f.noteZh:f.noteEn}),f.prereq&&f.prereq.length>0&&p.jsxs("p",{className:"text-[9.5px] text-white/28",children:[e==="zh"?"前置：":"Requires: ",f.prereq.map(M=>qt[M].zh).join(" + ")]})]})]},d)})})]},c))})]})]})}function Sb({engine:t,lang:e,onFire:n}){const[i,r]=we.useState(null),[s,o]=we.useState("全部"),a=Id.filter(c=>s==="全部"||c.category===s),l=(c,u,d)=>{r(c);const f=t.applyGeoEvent(c);r(null),f.ok&&n(u,f.message,d)};return p.jsxs("div",{className:"space-y-4 pt-1",children:[p.jsxs("div",{className:"glass-soft rounded-2xl px-3.5 py-3",children:[p.jsxs("div",{className:"flex items-baseline justify-between",children:[p.jsx("span",{className:"label-xs text-white/40",children:e==="zh"?"地球史大事件":"MASS EVENTS IN EARTH HISTORY"}),p.jsxs("span",{className:"num text-[13px] text-[#d9a441]",children:[t.geoEventsTriggered.size,p.jsxs("span",{className:"text-white/25 text-[10px]",children:["/",Id.length]})]})]}),p.jsx("p",{className:"mt-1.5 text-[10.5px] leading-relaxed text-white/42",children:e==="zh"?"每一件都是地球上真实发生过的重大事件。选一个直接实施 —— 它会真的改变演化规则和种群，而不只是弹一条提示。":"Every entry really happened on Earth. Pick one to enact — it changes the simulation itself, not just the log."})]}),p.jsx("div",{className:"flex flex-wrap gap-1.5",children:["全部",...IT].map(c=>p.jsx("button",{onClick:()=>o(c),className:Ft("capsule-btn h-7 px-2.5 text-[10px] border transition-colors",s===c?"border-[#d9a441]/50 text-[#d9a441] bg-[#d9a441]/12":"border-white/10 text-white/45 hover:text-white/80"),children:c},c))}),p.jsx("div",{className:"space-y-1.5",children:[...a].sort((c,u)=>c.eraMa-u.eraMa).map(c=>{const u=t.geoEventsTriggered.has(c.id),d=i===c.id;return p.jsxs("div",{className:"rounded-xl px-2.5 py-2 transition-colors",style:{background:u?`${c.hue}12`:"transparent",border:`1px solid ${u?`${c.hue}38`:"rgba(239,233,222,.07)"}`},children:[p.jsxs("div",{className:"flex items-start gap-2.5",children:[p.jsx("span",{className:"mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px]",style:{color:c.hue,background:`${c.hue}14`,border:`1px solid ${c.hue}30`},children:p.jsx(pi,{id:c.icon,size:14})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsxs("div",{className:"flex items-baseline gap-2",children:[p.jsx("span",{className:"text-[12px] text-white/88",children:c.zh}),p.jsx("span",{className:"text-[9.5px] text-white/28 num",children:UT(c.eraMa)}),p.jsx("span",{className:"ml-auto text-[9px] text-white/26",children:c.category})]}),p.jsx("p",{className:"mt-1 text-[10.5px] leading-relaxed text-white/45",children:c.realZh}),p.jsxs("p",{className:"mt-1 text-[10.5px] leading-relaxed",style:{color:`${c.hue}dd`},children:["▸ ",c.effectZh]})]})]}),p.jsxs("div",{className:"mt-2 flex items-center gap-2 pl-[38px]",children:[p.jsx("button",{disabled:d,onClick:()=>l(c.id,c.zh,c.hue),className:Ft("capsule-btn h-7 px-3 text-[10px] border transition-colors",u?"border-white/12 text-white/40 hover:text-white/70":"border-[#d9a441]/45 text-[#d9a441] hover:bg-[#d9a441]/12"),children:d?e==="zh"?"正在发生…":"happening…":u?e==="zh"?"再次实施":"replay":e==="zh"?"实施这个事件":"enact"}),u&&p.jsx("span",{className:"text-[9.5px] px-1.5 rounded-[4px]",style:{background:`${c.hue}1c`,color:c.hue},children:e==="zh"?"已发生":"happened"})]})]},c.id)})})]})}const Eb=[{id:"ecology",icon:p.jsx(Rv,{size:14}),zh:"生态",en:"Eco"},{id:"lineage",icon:p.jsx(ep,{size:14}),zh:"演化",en:"Tree"},{id:"geo",icon:p.jsx(Ud,{size:14}),zh:"地球史",en:"Earth"},{id:"ranks",icon:p.jsx(Ec,{size:14}),zh:"榜单",en:"Ranks"},{id:"codex",icon:p.jsx(Pv,{size:14}),zh:"图鉴",en:"Codex"},{id:"chronicle",icon:p.jsx(Nv,{size:14}),zh:"编年",en:"Log"},{id:"cell",icon:p.jsx(Fd,{size:14}),zh:"个体",en:"Cell"}];function wb({open:t,tab:e,triggerRect:n,onTab:i,onClose:r,engine:s,lang:o,selected:a,onGeoEvent:l}){const c=we.useRef(null),[u,d]=we.useState({opacity:0,visibility:"hidden"}),[f,m]=we.useState(!1);return Qf(c,{scale:58,border:.09,blur:1.6,saturate:1.45},t),Jf(c,t),we.useLayoutEffect(()=>{if(!t||!c.current)return;const _=()=>{if(!c.current)return;const h=window.innerWidth,v=window.innerHeight,x=Math.min(356,h-24),P=h-12-x,A=62,E=Math.max(240,Math.min(v-A-18,720)),C=n?n.left+n.width/2-P:-40,O=n?n.top+n.height/2-A:E/2,y=`${Math.max(-60,Math.min(x+60,C))}px ${Math.max(-60,Math.min(E+60,O))}px`;d(T=>T.left===P&&T.top===A&&T.width===x&&T.height===E&&T.transformOrigin===y?T:{left:P,top:A,width:x,height:E,transformOrigin:y,opacity:1,visibility:"visible"}),m(!0)};_();const M=new ResizeObserver(()=>_());return M.observe(c.current),()=>M.disconnect()},[t,n]),we.useEffect(()=>{if(!t)return;const _=M=>{M.key==="Escape"&&r()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[t,r]),!t&&!f?null:p.jsxs("aside",{ref:c,className:Ft("glass glass-strong fixed z-40 flex flex-col overflow-hidden rounded-[20px]",t?"pop-in":"pop-out"),style:u,onAnimationEnd:()=>{t||(m(!1),d(_=>({..._,opacity:0,visibility:"hidden"})))},children:[p.jsxs("div",{className:"flex items-center gap-1 px-3 pt-3 pb-2 shrink-0",children:[p.jsx("div",{className:"flex-1 flex items-center gap-0.5 p-1 rounded-[8px] bg-white/[0.045] border border-white/8 overflow-x-auto scroll-thin",children:Eb.map(_=>{const M=e===_.id;return p.jsxs("button",{onClick:()=>i(_.id),title:o==="zh"?_.zh:_.en,className:Ft("relative shrink-0 h-8 px-2 rounded-full flex items-center justify-center gap-1 transition-all duration-300",M?"text-white":"text-white/40 hover:text-white/75"),style:M?{background:"rgba(217,164,65,.16)",boxShadow:"inset 0 0 0 1px rgba(217,164,65,.42)"}:void 0,children:[_.icon,p.jsx("span",{className:"text-[10px] hidden sm:inline",children:o==="zh"?_.zh:_.en})]},_.id)})}),p.jsx("button",{onClick:r,className:"w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/8 transition-colors shrink-0",title:"Close",children:p.jsx(ub,{size:14})})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto scroll-thin px-4 pb-4",children:[e==="ecology"&&p.jsx(Tb,{engine:s,lang:o}),e==="lineage"&&p.jsx(Mb,{engine:s,lang:o}),e==="geo"&&p.jsx(Sb,{engine:s,lang:o,onFire:(_,M,g)=>l?.(_,M,g)}),e==="ranks"&&p.jsx(bb,{engine:s,lang:o}),e==="codex"&&p.jsx(Ab,{engine:s,lang:o}),e==="chronicle"&&p.jsx(Rb,{engine:s,lang:o}),e==="cell"&&p.jsx(Pb,{agent:a,engine:s,lang:o})]})]})}function Tb({engine:t,lang:e}){const n=t.composition(),i=t.compositionCounts(),r=new Map;for(const s of t.agents)!s.alive||!s.role||r.set(s.role,(r.get(s.role)??0)+1);return p.jsxs("div",{className:"space-y-5 pt-1",children:[p.jsx("div",{className:"flex justify-center py-2",children:p.jsx(Lv,{composition:n,counts:i,size:148,thickness:17,showLegend:!1})}),p.jsx("div",{className:"space-y-1.5",children:Kf.map(s=>{const o=Qn[s],a=n[s]??0;return p.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[p.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{background:o.color}}),p.jsx("span",{className:"text-white/68 w-[68px] shrink-0",children:e==="zh"?o.zh:o.en}),p.jsx("span",{className:"flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden",children:p.jsx("span",{className:"block h-full rounded-full transition-[width] duration-700 ease-out",style:{width:`${Math.max(0,a*100)}%`,background:`linear-gradient(90deg, ${o.color}, ${o.color}66)`,boxShadow:"0 1px 2px rgba(0,0,0,.35)"}})}),p.jsxs("span",{className:"num text-white/42 w-10 text-right",children:[(a*100).toFixed(1),"%"]}),p.jsx("span",{className:"num text-white/28 w-8 text-right",children:i[s]??0})]},s)})}),p.jsx("div",{className:"h-px bg-white/8"}),p.jsx("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2.5",children:[{k:e==="zh"?"存活生物":"Alive",v:t.agents.filter(s=>s.alive).length,c:"#a2db3c"},{k:e==="zh"?"多细胞群体":"Colonies",v:t.colonies.size,c:"#4fb3c4"},{k:e==="zh"?"累计捕食":"Total kills",v:t.totalKills,c:"#ff8b3d"},{k:e==="zh"?"其中食同族":"Cannibalism",v:t.totalCannibalKills,c:"#ff3d6e"},{k:e==="zh"?"累计新生":"Births",v:t.totalBirths,c:"#e8c46a"},{k:e==="zh"?"养分浓度":"Nutrient",v:`×${t.nutrient.toFixed(2)}`,c:"#b5652e"}].map(s=>p.jsxs("div",{children:[p.jsx("div",{className:"text-[9.5px] text-white/38",children:s.k}),p.jsx("div",{className:"num text-[17px] font-semibold leading-tight",style:{color:s.c},children:typeof s.v=="number"?s.v.toLocaleString():s.v})]},s.k))}),r.size>0&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"h-px bg-white/8"}),p.jsxs("div",{children:[p.jsx("div",{className:"label-xs text-white/40 mb-2",children:e==="zh"?"细胞职能分化":"CELL SPECIALISATION"}),p.jsx("div",{className:"space-y-1",children:[...r.entries()].map(([s,o])=>{const a=Ti[s];return p.jsxs("div",{className:"flex items-center gap-2 text-[11px]",children:[p.jsx("span",{className:"w-4 flex justify-center",style:{color:a.color},children:p.jsx(pi,{id:a.icon,size:13})}),p.jsx("span",{className:"text-white/66",children:e==="zh"?a.zh:a.en}),p.jsx("span",{className:"flex-1"}),p.jsx("span",{className:"num text-white/45",children:o})]},s)})})]})]})]})}function bb({engine:t,lang:e}){const n=t.agents.filter(s=>s.alive),i=[...n].sort((s,o)=>o.kills-s.kills).slice(0,8),r=[...n].filter(s=>s.cannibalKills>0).sort((s,o)=>o.cannibalKills-s.cannibalKills).slice(0,5);return p.jsxs("div",{className:"space-y-5 pt-1",children:[p.jsxs("div",{children:[p.jsx("div",{className:"label-xs text-white/40 mb-2",children:e==="zh"?"猎杀排行榜":"KILL LEADERBOARD"}),p.jsxs("div",{className:"space-y-1",children:[i.map((s,o)=>p.jsxs("div",{className:"flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-white/5",children:[p.jsx("span",{className:"num text-[10px] text-white/28 w-3",children:o+1}),p.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{background:`hsl(${s.genome.hue}, 78%, 62%)`}}),p.jsxs("span",{className:"num text-[11.5px] text-white/82",children:["#",s.id]}),p.jsxs("span",{className:"text-[10px] text-white/42 truncate",children:[e==="zh"?Qn[s.strategy].zh:Qn[s.strategy].en,s.role?` · ${e==="zh"?Ti[s.role].zh:Ti[s.role].en}`:""]}),p.jsx("span",{className:"flex-1"}),s.cannibalKills>0&&p.jsx("span",{className:"text-[9px] px-1.5 rounded-[4px] bg-[#d2604f]/18 text-[#e79b8c] border border-[#d2604f]/32",children:e==="zh"?`食同族 ${s.cannibalKills}`:`cannibal ${s.cannibalKills}`}),p.jsx("span",{className:"num text-[11px] text-[#ff8b3d]",children:s.kills})]},s.id)),i.length===0&&p.jsx("div",{className:"text-[10.5px] text-white/28 px-2 py-1",children:e==="zh"?"还没有生物完成猎杀":"No kills yet"})]})]}),p.jsx("div",{className:"h-px bg-white/8"}),p.jsxs("div",{children:[p.jsx("div",{className:"label-xs text-white/40 mb-2",children:e==="zh"?"食同族记录":"CANNIBALISM"}),p.jsxs("div",{className:"space-y-1",children:[r.map(s=>p.jsxs("div",{className:"flex items-center gap-2 px-2 py-1.5 rounded-xl",children:[p.jsx("span",{className:"text-[12px] w-4 text-center text-[#ff3d6e]",children:"☠"}),p.jsxs("span",{className:"num text-[11.5px] text-white/82",children:["#",s.id]}),p.jsx("span",{className:"text-[10px] text-white/42",children:e==="zh"?"吞噬同族":"devoured its own kind"}),p.jsx("span",{className:"flex-1"}),p.jsxs("span",{className:"num text-[11px] text-[#ff3d6e]",children:["×",s.cannibalKills]})]},s.id)),r.length===0&&p.jsx("div",{className:"text-[10.5px] text-white/28 px-2 py-1",children:e==="zh"?"尚未发生同类相食":"No cannibalism yet — push two hunters together"})]})]})]})}function Ab({engine:t,lang:e}){const[n,i]=we.useState(null);return p.jsxs("div",{className:"space-y-1 pt-1",children:[p.jsxs("div",{className:"label-xs text-white/40 mb-2",children:[e==="zh"?"演化创新图鉴":"INNOVATION CODEX"," · ",t.seenOrganelles.size,"/",vg.length]}),vg.map(r=>{const s=bv[r],o=t.seenOrganelles.has(r),a=n===r;return p.jsxs("button",{onClick:()=>i(a?null:r),className:"w-full text-left flex items-start gap-2.5 px-2.5 py-2 rounded-xl transition-colors hover:bg-white/4",style:{background:o?`${s.hue}12`:"transparent",opacity:o?1:.36},children:[p.jsx("span",{className:"w-7 h-7 rounded-full flex items-center justify-center text-[13px] shrink-0 mt-px",style:{border:`1px solid ${o?`${s.hue}66`:"rgba(255,255,255,.15)"}`,color:o?s.hue:"rgba(255,255,255,.4)",background:o?`${s.hue}18`:"transparent"},children:o?p.jsx(pi,{id:s.icon,size:13}):p.jsx("span",{className:"text-[11px]",children:"?"})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-baseline gap-2",children:[p.jsx("span",{className:"text-[12px] text-white/85",children:e==="zh"?s.zh:s.en}),p.jsx("span",{className:"text-[9px] text-white/26 num",children:s.eraMa>=1e3?`${(s.eraMa/1e3).toFixed(1)}Ga`:`${s.eraMa}Ma`})]}),p.jsx("div",{className:"text-[10px] text-white/34 truncate",children:o?e==="zh"?s.realZh:s.realEn:e==="zh"?"未进化":"Not evolved"}),a&&p.jsxs("div",{className:"mt-1.5 space-y-1",children:[p.jsx("p",{className:"text-[10.5px] text-white/58 leading-relaxed",children:e==="zh"?s.descZh:s.descEn}),p.jsx("p",{className:"text-[10px] text-white/38 leading-relaxed",children:e==="zh"?s.noteZh:s.noteEn}),p.jsxs("p",{className:"text-[9.5px] text-white/26",children:[e==="zh"?"支系：":"Branch: ",s.branch]})]})]})]},r)})]})}const Cb={organelle:"#a2db3c",colony:"#4fb3c4",milestone:"#e8c46a",extinction:"#ff5b5b",apex:"#ff8b3d",god:"#c08a9e",cannibal:"#ff3d6e",differentiate:"#c9a227",earth:"#e8c46a",route:"#34d399"};function Rb({engine:t,lang:e}){return p.jsxs("div",{className:"pt-1",children:[p.jsx("div",{className:"label-xs text-white/40 mb-2",children:e==="zh"?"进化编年史":"CHRONICLE"}),p.jsxs("div",{className:"space-y-1.5",children:[t.events.map((n,i)=>p.jsxs("div",{className:"flex gap-2 text-[11px] leading-relaxed event-in",children:[p.jsx("span",{className:"mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",style:{background:Cb[n.type]??"#8fa"}}),p.jsxs("div",{children:[p.jsxs("span",{className:"num text-white/26 mr-1.5",children:["[",n.tick,"]"]}),p.jsx("span",{className:"text-white/72",children:e==="zh"?n.zh:n.en})]})]},`${n.tick}-${i}`)),t.events.length===0&&p.jsx("div",{className:"text-[10.5px] text-white/28",children:e==="zh"?"暂无记录":"No entries yet"})]})]})}function Pb({agent:t,engine:e,lang:n}){if(!t)return p.jsx("div",{className:"pt-6 text-center text-[11px] text-white/32",children:n==="zh"?"点击培养皿里的任意生物查看它的基因组":"Click any organism to inspect its genome"});const i=Qn[t.strategy],r=t.role?Ti[t.role]:null,s=e.colonySize(t.colonyId),o=[{k:n==="zh"?"攻击":"Attack",v:e.attackOf(t),max:20,c:"#ff8b3d"},{k:n==="zh"?"防御":"Defense",v:e.defenseOf(t),max:20,c:"#4fb3c4"},{k:n==="zh"?"速度":"Speed",v:e.speedOf(t),max:4,c:"#a2db3c"},{k:n==="zh"?"感知":"Sense",v:e.senseOf(t),max:260,c:"#e8c46a"}];return p.jsxs("div",{className:"pt-1 space-y-4",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("span",{className:"w-10 h-10 rounded-full shrink-0",style:{background:`radial-gradient(circle at 34% 30%, hsl(${t.genome.hue},78%,64%), hsl(${t.genome.hue},70%,32%))`,boxShadow:"0 1px 2px rgba(0,0,0,.4)"}}),p.jsxs("div",{className:"min-w-0",children:[p.jsxs("div",{className:"num text-[15px] text-white/90",children:["#",t.id]}),p.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[p.jsx("span",{className:"text-[10px] px-1.5 rounded-[4px]",style:{background:`${i.color}22`,color:i.color},children:n==="zh"?i.zh:i.en}),r&&p.jsxs("span",{className:"text-[10px] px-1.5 rounded-[4px]",style:{background:`${r.color}22`,color:r.color},children:[p.jsx(pi,{id:r.icon,size:11})," ",n==="zh"?r.zh:r.en]})]})]})]}),r&&p.jsx("div",{className:"text-[10.5px] leading-relaxed px-2.5 py-2 rounded-xl",style:{background:`${r.color}12`,color:`${r.color}dd`},children:n==="zh"?r.descZh:r.descEn}),p.jsx("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2",children:[{k:n==="zh"?"世代":"Gen",v:t.generation},{k:n==="zh"?"能量":"Energy",v:Math.round(t.energy)},{k:n==="zh"?"猎杀":"Kills",v:t.kills},{k:n==="zh"?"食同族":"Cannibal",v:t.cannibalKills},{k:n==="zh"?"子代":"Offspring",v:t.children},{k:n==="zh"?"年龄":"Age",v:t.age}].map(a=>p.jsxs("div",{children:[p.jsx("div",{className:"text-[9.5px] text-white/36",children:a.k}),p.jsx("div",{className:"num text-[15px] text-white/85",children:a.v})]},a.k))}),p.jsx("div",{className:"space-y-1.5",children:o.map(a=>p.jsxs("div",{className:"flex items-center gap-2 text-[10.5px]",children:[p.jsx("span",{className:"text-white/45 w-10 shrink-0",children:a.k}),p.jsx("span",{className:"flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden",children:p.jsx("span",{className:"block h-full rounded-full transition-[width] duration-500",style:{width:`${Math.min(100,a.v/a.max*100)}%`,background:a.c}})}),p.jsx("span",{className:"num text-white/40 w-9 text-right",children:a.v.toFixed(1)})]},a.k))}),s>0&&p.jsx("div",{className:"text-[10.5px] text-[#4fb3c4] bg-[#4fb3c4]/12 px-2.5 py-2 rounded-xl",children:n==="zh"?`隶属多细胞聚合体 · ${s} 个细胞协同中`:`Member of a colony · ${s} cells cooperating`}),p.jsxs("div",{children:[p.jsx("div",{className:"label-xs text-white/40 mb-1.5",children:n==="zh"?"细胞器":"ORGANELLES"}),p.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[t.genome.organelles.length===0&&p.jsx("span",{className:"text-[10.5px] text-white/32",children:n==="zh"?"原始细胞，尚无细胞器":"Primitive cell, no organelles"}),t.genome.organelles.map(a=>{const l=bv[a];return p.jsxs("span",{title:n==="zh"?l.realZh:l.realEn,className:"text-[10px] px-2 py-1 rounded-full",style:{background:`${l.hue}1c`,color:l.hue,border:`1px solid ${l.hue}38`},children:[p.jsx(pi,{id:l.icon,size:11})," ",n==="zh"?l.zh:l.en]},a)})]})]})]})}const Nb=[{id:"inspect",label:"观察",labelEn:"Inspect",hint:"点击任意生物，查看它的基因组",hintEn:"Click any organism to view its genome",color:"#4fb3c4",icon:p.jsx(rb,{size:15})},{id:"feed",label:"投喂",labelEn:"Feed",hint:"点击培养皿，在该处撒下食物",hintEn:"Click the dish to scatter food there",color:"#84b96b",icon:p.jsx(sb,{size:15})},{id:"smite",label:"天罚",labelEn:"Smite",hint:"点击培养皿，毁灭半径内的生命",hintEn:"Click the dish to destroy life in a radius",color:"#e2663f",icon:p.jsx(ob,{size:15})},{id:"mutate",label:"点化",labelEn:"Bless",hint:"点击生物附近，强制它突变出新细胞器",hintEn:"Click near a cell to force a new organelle",color:"#c08a9e",icon:p.jsx(ab,{size:15})},{id:"alien",label:"入侵",labelEn:"Aliens",hint:"投放一批携带未知基因的外来物种",hintEn:"Release alien species with unknown genes",color:"#5aa89b",icon:p.jsx(lb,{size:15}),instant:!0},{id:"plague",label:"瘟疫",labelEn:"Plague",hint:"随机夺走约 40% 的生命",hintEn:"Randomly take ~40% of all life",color:"#d2604f",icon:p.jsx(cb,{size:15}),instant:!0}];function Lb({tool:t,onSelect:e,lang:n,onActiveRect:i}){const[r,s]=we.useState(!0),o=we.useRef(null),a=we.useRef(null);Qf(a,{scale:46,border:.14,blur:1,saturate:1.5},r),Jf(a,r);const l=we.useRef({});return p.jsxs("div",{ref:o,className:`pointer-events-auto flex flex-col items-start gap-2
        max-md:flex-row max-md:items-center max-md:gap-1.5`,children:[p.jsxs("button",{onClick:()=>s(c=>!c),className:Ft("glass capsule-btn h-9 pl-3 pr-3.5 flex items-center gap-2 text-[10px] tracking-wider max-md:h-8 max-md:pl-2.5 max-md:pr-2.5 max-md:shrink-0",r?"text-white/85":"text-white/55"),title:n==="zh"?"上帝之手":"Hand of God",children:[p.jsx(ep,{size:13}),p.jsx("span",{className:"label-xs max-md:hidden",children:n==="zh"?"上帝之手":"GOD HAND"}),p.jsx("span",{className:Ft("w-1.5 h-1.5 rounded-full transition-all duration-300",r?"bg-[#c08a9e] rotate-0":"bg-white/25 -rotate-90")})]}),p.jsx("div",{ref:a,className:Ft("glass capsule flex flex-col gap-1 p-1.5 overflow-hidden","max-md:flex-row max-md:gap-1 max-md:p-1",r?"pop-in":"pop-out pointer-events-none"),style:{transformOrigin:"12px 0px",maxHeight:r?420:0,opacity:r?1:0,paddingLeft:r?6:0,paddingRight:r?6:0,paddingTop:r?6:0,paddingBottom:r?6:0,transition:"max-height .42s cubic-bezier(.22,1,.36,1), opacity .28s ease, padding .42s cubic-bezier(.22,1,.36,1)"},children:Nb.map(c=>{const u=!c.instant&&t===c.id;return p.jsxs("button",{ref:d=>{l.current[c.id]=d},onClick:()=>{e(c);const d=l.current[c.id];d&&i?.(d.getBoundingClientRect())},title:n==="zh"?c.hint:c.hintEn,className:Ft("capsule-btn relative w-10 h-10 flex flex-col items-center justify-center gap-0.5 shrink-0 max-md:w-9 max-md:h-9",u?"":"text-white/58 hover:text-white"),style:u?{color:c.color,background:`linear-gradient(180deg, ${c.color}33, ${c.color}12)`,boxShadow:`inset 0 0 0 1px ${c.color}66`}:void 0,children:[c.icon,p.jsx("span",{className:"text-[8px] leading-none max-md:text-[7px]",children:n==="zh"?c.label:c.labelEn})]},c.id)})})]})}function Qu({value:t,min:e,max:n,onChange:i,color:r}){const s=(t-e)/(n-e)*100;return p.jsx("input",{type:"range",className:"slider",min:e,max:n,value:Math.round(t),style:{"--track-c":r,"--pct":`${s}%`},onChange:o=>i(Number(o.target.value))})}function Db({engine:t,lang:e,refresh:n}){const[i,r]=we.useState(!1),s=we.useRef(null);Jf(s,i);const o=t.light>.45;return p.jsxs("div",{className:"pointer-events-auto flex flex-col items-start gap-2",children:[p.jsxs("button",{onClick:()=>r(a=>!a),className:Ft("glass capsule-btn h-9 pl-3 pr-3.5 flex items-center gap-2 text-[10px] tracking-wider",i?"text-white/85":"text-white/55"),title:e==="zh"?"环境控制":"Environment",children:[p.jsx(la,{size:13}),p.jsx("span",{className:"label-xs max-md:hidden",children:e==="zh"?"环境控制":"ENVIRONMENT"}),p.jsx("span",{className:Ft("w-1.5 h-1.5 rounded-full transition-all duration-300",i?"bg-[#e8c46a] rotate-0":"bg-white/25 -rotate-90")})]}),p.jsx("div",{ref:s,className:Ft("glass rounded-[14px] overflow-hidden","max-md:fixed max-md:bottom-[126px] max-md:left-2 max-md:right-2 max-md:w-auto max-md:z-30",i?"pop-in":"pop-out pointer-events-none"),style:{transformOrigin:"12px 0px",maxHeight:i?320:0,opacity:i?1:0,transition:"max-height .42s cubic-bezier(.22,1,.36,1), opacity .28s ease, padding .42s cubic-bezier(.22,1,.36,1)",padding:i?"14px 16px":"0 16px"},children:p.jsxs("div",{className:"w-[196px] space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"label-xs text-white/38",children:e==="zh"?"环境控制":"ENVIRONMENT"}),p.jsxs("span",{className:Ft("flex items-center gap-1 text-[10px]",o?"text-[#e8c46a]":"text-[#7c8fb8]"),children:[p.jsx(la,{size:10}),o?e==="zh"?"白昼":"Day":e==="zh"?"黑夜":"Night"," ",(t.light*100).toFixed(0),"%"]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[p.jsxs("span",{className:"flex items-center gap-1",children:[p.jsx(la,{size:10}),e==="zh"?"光照":"Light"]}),p.jsx("button",{onClick:()=>{t.lightOverride=t.lightOverride===null?t.light:null,n()},className:Ft("px-1.5 rounded-[4px] text-[9px] border transition-colors",t.lightOverride===null?"border-[#d9a441]/45 text-[#d9a441]":"border-white/15 text-white/40"),children:e==="zh"?"昼夜循环":"Auto"})]}),p.jsx(Qu,{value:Math.round((t.lightOverride??t.light)*100),min:0,max:100,color:"#e8c46a",onChange:a=>{t.lightOverride=a/100}})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[p.jsxs("span",{className:"flex items-center gap-1",children:[p.jsx(gb,{size:10}),e==="zh"?"温度":"Temp"]}),p.jsxs("span",{className:"num text-white/40",children:[t.temperature<.33?e==="zh"?"寒冷":"cold":t.temperature>.66?e==="zh"?"炎热":"hot":""," ",(t.temperature*40).toFixed(0),"°C"]})]}),p.jsx(Qu,{value:Math.round(t.temperature*100),min:0,max:100,color:"#ff8b3d",onChange:a=>{t.temperature=a/100}})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between items-center text-[10px] text-white/50 mb-0.5",children:[p.jsxs("span",{className:"flex items-center gap-1",children:[p.jsx(kd,{size:10}),e==="zh"?"养分":"Nutrient"]}),p.jsxs("span",{className:"num text-white/40",children:["×",t.nutrient.toFixed(2)]})]}),p.jsx(Qu,{value:Math.round(t.nutrient*100),min:35,max:240,color:"#a2db3c",onChange:a=>{t.nutrient=a/100}}),p.jsx("div",{className:"text-[9px] text-white/26 leading-relaxed mt-1",children:e==="zh"?"分解者会把尸体碎屑还原成养分":"Decomposers convert corpses back into nutrients"})]})]})})]})}const Ib=[1,5,20,100];function Ub(){const t=we.useRef(null);t.current||(t.current=new jT({initialCount:200}));const e=t.current,[n,i]=we.useState("zh"),[r,s]=we.useState(!1),[o,a]=we.useState(!0),[l,c]=we.useState(5),[u,d]=we.useState("inspect"),[f,m]=we.useState(null),[_,M]=we.useState(0),[g,h]=we.useState(!1),[v,x]=we.useState("ecology"),[S,P]=we.useState(null),[A,E]=we.useState(null),[C,O]=we.useState(null),y=we.useCallback((H,ie,ce)=>{O({title:H,detail:ie,hue:ce,id:Date.now()})},[]);we.useEffect(()=>{if(!C)return;const H=window.setTimeout(()=>O(null),4600);return()=>window.clearTimeout(H)},[C]);const[T,z]=we.useState(null),G=we.useRef("inspect");G.current=u,we.useEffect(()=>{let H=0;performance.now();const ie=()=>{H=requestAnimationFrame(ie);const ce=performance.now();if(!o)return;const be=ce+8;let Ae=0;for(;Ae<l&&performance.now()<be;)e.step(),Ae++};return H=requestAnimationFrame(ie),()=>cancelAnimationFrame(H)},[e,o,l]),we.useEffect(()=>{const H=setInterval(()=>M(ie=>ie+1),240);return()=>clearInterval(H)},[]);const X=we.useMemo(()=>e.agents.filter(H=>H.alive),[e,_]),Q=we.useMemo(()=>e.composition(),[e,_]),W=we.useMemo(()=>e.compositionCounts(),[e,_]),J=we.useMemo(()=>X.reduce((H,ie)=>Math.max(H,ie.generation),0),[X]),{eraLabel:L,eraColor:q}=we.useMemo(()=>e.seenEarthEvents.has("cambrian")?{eraLabel:n==="zh"?"寒武纪":"CAMBRIAN",eraColor:"#d4748e"}:e.seenEarthEvents.has("snowball")?{eraLabel:n==="zh"?"雪球地球":"SNOWBALL",eraColor:"#7dd3fc"}:e.seenEarthEvents.has("goe")?{eraLabel:n==="zh"?"大氧化":"GOE",eraColor:"#d9a441"}:{eraLabel:n==="zh"?"前寒武纪":"PRECAMBRIAN",eraColor:"#8fa3a0"},[e,e.seenEarthEvents.size,n]),Z=we.useMemo(()=>f===null?null:e.agentById(f)??null,[e,f,_]),le=we.useCallback((H,ie)=>{x(H),P(ie),h(!0)},[]),Te=we.useCallback(H=>{if(z(H),H.id==="alien"){e.agents.filter(ie=>ie.alive).length,e.godAliens(18),M(ie=>ie+1),y("天外入侵","18 个携带未知基因的外来物种进入培养皿（青绿色个体）","#4fd6c0");return}if(H.id==="plague"){const ie=e.agents.filter(be=>be.alive).length;e.godPlague(.4);const ce=e.agents.filter(be=>be.alive).length;M(be=>be+1),y("瘟疫席卷",`${ie} → ${ce}：约四成生命被带走，幸存者将占据空出的生态位`,"#d2604f");return}d(H.id)},[e]),Oe=we.useCallback((H,ie)=>{a(!1),setTimeout(()=>{e.fastForward(H,ie),M(ce=>ce+1),a(!0)},30)},[e]),k=we.useCallback(()=>{a(!1),m(null),setTimeout(()=>{e.reset(),M(H=>H+1),a(!0)},20)},[e]);return p.jsxs("div",{className:"h-screen w-screen overflow-hidden relative bg-[#100f0d] text-[#efe9de] select-none",children:[p.jsx("div",{className:"bench"}),p.jsx(KT,{engine:e,toolRef:G,selectedId:f,onSelect:m}),p.jsxs("div",{className:Ft("transition-opacity duration-700",r?"opacity-100":"opacity-0 [&_*]:pointer-events-none"),children:[p.jsxs("header",{className:"absolute top-0 left-0 right-0 flex items-start gap-2.5 px-4 pt-3.5 pointer-events-none z-20",children:[p.jsxs("div",{className:"pointer-events-auto glass capsule h-11 pl-3 pr-4 flex items-center gap-2.5",children:[p.jsx("div",{className:"w-6 h-6 rounded-full border border-[#4fb3c4]/50 flex items-center justify-center",children:p.jsx("div",{className:"w-2 h-2 rounded-full bg-[#84b96b] animate-pulse"})}),p.jsxs("div",{className:"leading-none",children:[p.jsx("h1",{className:"text-[13px] font-semibold tracking-wide max-md:text-[11px] max-md:whitespace-nowrap",children:n==="zh"?"微生物进化大赛":"Microbe Evolution Arena"}),p.jsx("span",{className:"label-xs text-[#4fb3c4]/65 max-md:hidden",children:"PETRI ARENA"})]})]}),p.jsx("div",{className:"flex-1"}),p.jsxs("div",{className:"pointer-events-auto glass capsule h-11 px-4 flex items-center gap-4 text-[11px] num text-white/55 max-md:hidden",children:[p.jsxs("span",{children:[n==="zh"?"世代时刻":"Tick"," ",p.jsx("b",{className:"text-[#4fb3c4]",children:e.tick.toLocaleString()})]}),p.jsxs("span",{children:[n==="zh"?"最高世代":"Max Gen"," ",p.jsx("b",{className:"text-[#4fb3c4]",children:J})]}),p.jsxs("span",{children:[n==="zh"?"存活":"Alive"," ",p.jsx("b",{className:"text-[#84b96b]",children:X.length})]}),p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:Ft("w-1.5 h-1.5 rounded-full",o?"bg-[#84b96b] animate-pulse":"bg-white/30")}),o?`${n==="zh"?"运行中":"LIVE"} ×${l}`:n==="zh"?"已暂停":"PAUSED"]}),p.jsx("span",{className:"px-1.5 rounded-[4px] border text-[10px]",style:{borderColor:`${q}55`,color:q,background:`${q}14`},title:n==="zh"?"当前地球年代":"Current era",children:L})]}),p.jsxs("div",{className:"pointer-events-auto md:hidden glass capsule h-9 px-3 flex items-center gap-2.5 text-[10px] num text-white/55",children:[p.jsxs("span",{children:[n==="zh"?"世代":"Tick"," ",p.jsx("b",{className:"text-[#d9a441]",children:e.tick.toLocaleString()})]}),p.jsxs("span",{children:[n==="zh"?"存活":"Alive"," ",p.jsx("b",{className:"text-[#84b96b]",children:X.length})]}),p.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{background:o?"#84b96b":"rgba(255,255,255,.3)"}})]}),p.jsx("button",{onClick:()=>i(H=>H==="zh"?"en":"zh"),className:"pointer-events-auto glass capsule-btn w-10 h-10 text-white/70 hover:text-white",title:"Language",children:p.jsx(Ud,{size:15})})]}),p.jsxs("div",{className:`absolute left-4 top-[76px] bottom-4 w-[230px] flex flex-col justify-start gap-3 overflow-y-auto scroll-thin pointer-events-none z-20
          max-md:left-2 max-md:right-2 max-md:top-auto max-md:bottom-[78px] max-md:w-auto max-md:flex-row
          max-md:items-end max-md:gap-2 max-md:overflow-x-auto max-md:overflow-y-hidden`,style:{scrollbarWidth:"none"},children:[p.jsx(Lb,{tool:u,onSelect:Te,lang:n,onActiveRect:E}),p.jsx(Db,{engine:e,lang:n,refresh:()=>M(H=>H+1)})]}),A&&T&&p.jsx("div",{className:"tooltip-bubble fixed z-30 pointer-events-none glass rounded-[10px] px-3 py-1.5 text-[10.5px] text-white/72 max-w-[220px] leading-relaxed",style:{left:A.right+12,top:A.top+A.height/2,transform:"translateY(-50%)",borderColor:`${T.color}38`},children:n==="zh"?T.hint:T.hintEn}),p.jsxs("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2.5 z-20 max-md:right-2 max-md:gap-1.5",children:[p.jsxs("button",{"data-pop-anchor":!0,onClick:H=>le("ecology",H.currentTarget.getBoundingClientRect()),className:"glass capsule-btn p-1.5 flex items-center gap-2 group max-md:p-1",title:n==="zh"?"生态构成（实时）":"Live ecology",children:[p.jsx(Lv,{composition:Q,counts:W,size:58,thickness:8,showTotal:!1}),p.jsxs("div",{className:"pr-1.5 text-left hidden md:block",children:[p.jsx("div",{className:"label-xs text-white/38",children:n==="zh"?"生态构成":"ECOLOGY"}),p.jsxs("div",{className:"text-[10px] text-white/62 num",children:[X.length," ",n==="zh"?"个体":"alive"]})]})]}),[{tab:"geo",icon:p.jsx(Ud,{size:15}),label:n==="zh"?"地球史":"Earth",color:"#d9a441"},{tab:"lineage",icon:p.jsx(ep,{size:15}),label:n==="zh"?"演化路线":"Lineage",color:"#d4748e"},{tab:"ranks",icon:p.jsx(Ec,{size:15}),label:n==="zh"?"猎杀榜":"Ranks",color:"#e2663f"},{tab:"codex",icon:p.jsx(Pv,{size:15}),label:n==="zh"?"图鉴":"Codex",color:"#84b96b"},{tab:"chronicle",icon:p.jsx(Nv,{size:15}),label:n==="zh"?"编年史":"Log",color:"#d9a441"}].map(H=>p.jsx("button",{"data-pop-anchor":!0,onClick:ie=>le(H.tab,ie.currentTarget.getBoundingClientRect()),className:"glass capsule-btn w-11 h-11 flex items-center justify-center max-md:w-9 max-md:h-9",style:{color:H.color},title:H.label,children:H.icon},H.tab))]}),p.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 z-20 max-md:bottom-2",children:p.jsxs("div",{className:"glass capsule h-12 px-2.5 flex items-center gap-1.5 max-md:h-10 max-md:px-1.5 max-md:gap-0.5",children:[p.jsx("button",{onClick:()=>a(H=>!H),className:Ft("capsule-btn w-8 h-8",o?"bg-[#d2604f]/18 text-[#ff8b8b]":"bg-[#84b96b]/18 text-[#84b96b]"),title:o?n==="zh"?"暂停":"Pause":n==="zh"?"继续":"Resume",children:o?p.jsx(hb,{size:14}):p.jsx(db,{size:14})}),Ib.map(H=>p.jsxs("button",{onClick:()=>{c(H),a(!0)},className:Ft("capsule-btn h-7 px-2.5 text-[11px] num transition-colors",l===H?"text-[#d9a441] bg-[#d9a441]/14 shadow-[inset_0_0_0_1px_rgba(217,164,65,.45)]":"text-white/45 hover:text-white/80"),children:["×",H]},H)),p.jsx("span",{className:"w-px h-5 bg-white/12 mx-1"}),p.jsxs("button",{onClick:()=>Oe(2e3,!0),title:n==="zh"?"快进至下一个进化事件":"Skip to next event",className:"capsule-btn h-7 px-2.5 text-[11px] text-[#d9a441] flex items-center gap-1",children:[p.jsx(mb,{size:12}),p.jsx("span",{className:"hidden sm:inline",children:n==="zh"?"事件":"Event"})]}),p.jsxs("button",{onClick:()=>Oe(3e3,!1),title:n==="zh"?"快进 3000 世代":"Skip 3000 ticks",className:"capsule-btn h-7 px-2.5 text-[11px] text-white/50 flex items-center gap-1",children:[p.jsx(pb,{size:12}),p.jsx("span",{className:"hidden sm:inline",children:"3000"})]}),p.jsx("button",{onClick:k,title:n==="zh"?"重置":"Reset",className:"capsule-btn w-7 h-7 text-white/45",children:p.jsx(fb,{size:13})})]})}),p.jsx("div",{className:"absolute bottom-4 left-4 z-10 hidden lg:block pointer-events-none",children:p.jsx("div",{className:"glass capsule h-9 px-3.5 flex items-center gap-3 text-[10px] text-white/50",children:Object.entries(Qn).map(([H,ie])=>p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{background:ie.color}}),p.jsxs("span",{className:"num text-white/62",children:[((Q[H]??0)*100).toFixed(0),"%"]})]},H))})}),p.jsx("div",{className:"absolute bottom-5 right-4 z-10 text-[10px] text-white/22 font-mono pointer-events-none hidden md:block",children:n==="zh"?"拖动旋转 · 滚轮缩放 · 点击生物查看基因组":"Drag to orbit · Scroll to zoom · Click a cell to inspect"}),Z&&p.jsxs("button",{onClick:H=>le("cell",H.currentTarget.getBoundingClientRect()),className:"glass capsule h-10 px-3.5 flex items-center gap-2.5 z-20 absolute right-4 bottom-[68px] max-md:bottom-[132px] max-md:h-8 max-md:px-2.5 max-md:text-[10px]",children:[p.jsx("span",{className:"w-4 h-4 rounded-full",style:{background:`radial-gradient(circle at 34% 30%, hsl(${Z.genome.hue},78%,64%), hsl(${Z.genome.hue},70%,30%))`,boxShadow:"0 1px 2px rgba(0,0,0,.4)"}}),p.jsxs("span",{className:"num text-[11px] text-white/80",children:["#",Z.id]}),p.jsxs("span",{className:"text-[10px] text-white/45",children:[Qn[Z.strategy].zh,Z.role?` · ${Z.role}`:""]}),p.jsx(Rv,{size:13,className:"text-white/35"})]})]}),p.jsx(wb,{open:g,tab:v,triggerRect:S,onTab:x,onClose:()=>h(!1),engine:e,lang:n,selected:Z,onGeoEvent:y}),C&&p.jsx("div",{className:"pointer-events-none fixed left-1/2 top-[64px] z-[60] w-[min(440px,calc(100vw-24px))] -translate-x-1/2",style:{animation:"toast-in .28s cubic-bezier(.22,1,.36,1) both"},children:p.jsxs("div",{className:"glass glass-strong rounded-[14px] px-3.5 py-2.5",style:{borderColor:`${C.hue}44`},children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full shrink-0",style:{background:C.hue}}),p.jsx("span",{className:"text-[12px]",style:{color:C.hue},children:C.title})]}),p.jsx("p",{className:"mt-1 text-[11px] leading-relaxed text-white/62",children:C.detail})]})},C.id),!r&&p.jsx(vb,{lang:n,onEnter:()=>s(!0)})]})}const Cg=document.getElementById("root");Cg&&Hx(Cg).render(p.jsx(we.StrictMode,{children:p.jsx(Ub,{})}));
