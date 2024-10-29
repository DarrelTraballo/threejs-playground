function ky(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Aa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h_={exports:{}},Lu={},p_={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),By=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Vy=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),Xy=Symbol.for("react.forward_ref"),jy=Symbol.for("react.suspense"),Yy=Symbol.for("react.memo"),$y=Symbol.for("react.lazy"),Pp=Symbol.iterator;function qy(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var m_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g_=Object.assign,__={};function ds(t,e,n){this.props=t,this.context=e,this.refs=__,this.updater=n||m_}ds.prototype.isReactComponent={};ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v_(){}v_.prototype=ds.prototype;function oh(t,e,n){this.props=t,this.context=e,this.refs=__,this.updater=n||m_}var sh=oh.prototype=new v_;sh.constructor=oh;g_(sh,ds.prototype);sh.isPureReactComponent=!0;var Lp=Array.isArray,y_=Object.prototype.hasOwnProperty,ah={current:null},x_={key:!0,ref:!0,__self:!0,__source:!0};function S_(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)y_.call(e,i)&&!x_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ca,type:t,key:o,ref:s,props:r,_owner:ah.current}}function Ky(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function Zy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zy(""+t.key):e.toString(36)}function Pl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ca:case By:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+rc(s,0):i,Lp(r)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),Pl(r,e,n,"",function(u){return u})):r!=null&&(lh(r)&&(r=Ky(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Dp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Lp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+rc(o,a);s+=Pl(o,e,n,l,r)}else if(l=qy(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+rc(o,a++),s+=Pl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Pl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Qy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},Ll={transition:null},Jy={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:ah};function E_(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!lh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=ds;ze.Fragment=zy;ze.Profiler=Vy;ze.PureComponent=oh;ze.StrictMode=Hy;ze.Suspense=jy;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;ze.act=E_;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=g_({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)y_.call(e,l)&&!x_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ca,type:t.type,key:r,ref:o,props:i,_owner:s}};ze.createContext=function(t){return t={$$typeof:Wy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gy,_context:t},t.Consumer=t};ze.createElement=S_;ze.createFactory=function(t){var e=S_.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:Xy,render:t}};ze.isValidElement=lh;ze.lazy=function(t){return{$$typeof:$y,_payload:{_status:-1,_result:t},_init:Qy}};ze.memo=function(t,e){return{$$typeof:Yy,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};ze.unstable_act=E_;ze.useCallback=function(t,e){return on.current.useCallback(t,e)};ze.useContext=function(t){return on.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return on.current.useDeferredValue(t)};ze.useEffect=function(t,e){return on.current.useEffect(t,e)};ze.useId=function(){return on.current.useId()};ze.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return on.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};ze.useRef=function(t){return on.current.useRef(t)};ze.useState=function(t){return on.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return on.current.useTransition()};ze.version="18.3.1";p_.exports=ze;var xe=p_.exports;const zo=Aa(xe),ex=ky({__proto__:null,default:zo},[xe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx=xe,nx=Symbol.for("react.element"),ix=Symbol.for("react.fragment"),rx=Object.prototype.hasOwnProperty,ox=tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function M_(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)rx.call(e,i)&&!sx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:nx,type:t,key:o,ref:s,props:r,_owner:ox.current}}Lu.Fragment=ix;Lu.jsx=M_;Lu.jsxs=M_;h_.exports=Lu;var tn=h_.exports,T_={exports:{}},Rn={},w_={exports:{}},A_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,K){var J=L.length;L.push(K);e:for(;0<J;){var se=J-1>>>1,Ae=L[se];if(0<r(Ae,K))L[se]=K,L[J]=Ae,J=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var K=L[0],J=L.pop();if(J!==K){L[0]=J;e:for(var se=0,Ae=L.length,He=Ae>>>1;se<He;){var X=2*(se+1)-1,ie=L[X],de=X+1,ue=L[de];if(0>r(ie,J))de<Ae&&0>r(ue,ie)?(L[se]=ue,L[de]=J,se=de):(L[se]=ie,L[X]=J,se=X);else if(de<Ae&&0>r(ue,J))L[se]=ue,L[de]=J,se=de;else break e}}return K}function r(L,K){var J=L.sortIndex-K.sortIndex;return J!==0?J:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,g=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=L)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function E(L){if(y=!1,v(L),!g)if(n(l)!==null)g=!0,V(b);else{var K=n(u);K!==null&&ee(E,K.startTime-L)}}function b(L,K){g=!1,y&&(y=!1,d(R),R=-1),m=!0;var J=h;try{for(v(K),f=n(l);f!==null&&(!(f.expirationTime>K)||L&&!T());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var Ae=se(f.expirationTime<=K);K=t.unstable_now(),typeof Ae=="function"?f.callback=Ae:f===n(l)&&i(l),v(K)}else i(l);f=n(l)}if(f!==null)var He=!0;else{var X=n(u);X!==null&&ee(E,X.startTime-K),He=!1}return He}finally{f=null,h=J,m=!1}}var C=!1,w=null,R=-1,j=5,x=-1;function T(){return!(t.unstable_now()-x<j)}function H(){if(w!==null){var L=t.unstable_now();x=L;var K=!0;try{K=w(!0,L)}finally{K?z():(C=!1,w=null)}}else C=!1}var z;if(typeof _=="function")z=function(){_(H)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Z=W.port2;W.port1.onmessage=H,z=function(){Z.postMessage(null)}}else z=function(){p(H,0)};function V(L){w=L,C||(C=!0,z())}function ee(L,K){R=p(function(){L(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,V(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var J=h;h=K;try{return L()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=h;h=L;try{return K()}finally{h=J}},t.unstable_scheduleCallback=function(L,K,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,L){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=J+Ae,L={id:c++,callback:K,priorityLevel:L,startTime:J,expirationTime:Ae,sortIndex:-1},J>se?(L.sortIndex=J,e(u,L),n(l)===null&&L===n(u)&&(y?(d(R),R=-1):y=!0,ee(E,J-se))):(L.sortIndex=Ae,e(l,L),g||m||(g=!0,V(b))),L},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(L){var K=h;return function(){var J=h;h=K;try{return L.apply(this,arguments)}finally{h=J}}}})(A_);w_.exports=A_;var ax=w_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=xe,bn=ax;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C_=new Set,na={};function Qr(t,e){Qo(t,e),Qo(t+"Capture",e)}function Qo(t,e){for(na[t]=e,t=0;t<e.length;t++)C_.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=Object.prototype.hasOwnProperty,ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ip={},Up={};function cx(t){return hf.call(Up,t)?!0:hf.call(Ip,t)?!1:ux.test(t)?Up[t]=!0:(Ip[t]=!0,!1)}function fx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dx(t,e,n,i){if(e===null||typeof e>"u"||fx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var uh=/[\-:]([a-z])/g;function ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uh,ch);Wt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uh,ch);Wt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uh,ch);Wt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function fh(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dx(e,n,r,i)&&(n=null),i||r===null?cx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),wo=Symbol.for("react.portal"),Ao=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),ph=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),P_=Symbol.for("react.offscreen"),Np=Symbol.iterator;function vs(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,oc;function Os(t){if(oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oc=e&&e[1]||""}return`
`+oc+t}var sc=!1;function ac(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Os(t):""}function hx(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function _f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ao:return"Fragment";case wo:return"Portal";case pf:return"Profiler";case dh:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R_:return(t.displayName||"Context")+".Consumer";case b_:return(t._context.displayName||"Context")+".Provider";case hh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ph:return e=t.displayName||null,e!==null?e:_f(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return _f(t(e))}catch{}}return null}function px(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _f(e);case 8:return e===dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function L_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mx(t){var e=L_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=mx(t))}function D_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=L_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Op(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I_(t,e){e=e.checked,e!=null&&fh(t,"checked",e,!1)}function yf(t,e){I_(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&xf(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xf(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fs=Array.isArray;function Ho(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Fs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function U_(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function N_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?N_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,O_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gx=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){gx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function F_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function k_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=F_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _x=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(_x[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wf=null;function mh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Af=null,Vo=null,Go=null;function zp(t){if(t=Pa(t)){if(typeof Af!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Ou(e),Af(t.stateNode,t.type,e))}}function B_(t){Vo?Go?Go.push(t):Go=[t]:Vo=t}function z_(){if(Vo){var t=Vo,e=Go;if(Go=Vo=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function H_(t,e){return t(e)}function V_(){}var lc=!1;function G_(t,e,n){if(lc)return t(e,n);lc=!0;try{return H_(t,e,n)}finally{lc=!1,(Vo!==null||Go!==null)&&(V_(),z_())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Ou(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Cf=!1;if(Ui)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Cf=!1}function vx(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Gs=!1,Ql=null,Jl=!1,bf=null,yx={onError:function(t){Gs=!0,Ql=t}};function xx(t,e,n,i,r,o,s,a,l){Gs=!1,Ql=null,vx.apply(yx,arguments)}function Sx(t,e,n,i,r,o,s,a,l){if(xx.apply(this,arguments),Gs){if(Gs){var u=Ql;Gs=!1,Ql=null}else throw Error(ne(198));Jl||(Jl=!0,bf=u)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hp(t){if(Jr(t)!==t)throw Error(ne(188))}function Ex(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Hp(r),t;if(o===i)return Hp(r),e;o=o.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function X_(t){return t=Ex(t),t!==null?j_(t):null}function j_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=j_(t);if(e!==null)return e;t=t.sibling}return null}var Y_=bn.unstable_scheduleCallback,Vp=bn.unstable_cancelCallback,Mx=bn.unstable_shouldYield,Tx=bn.unstable_requestPaint,At=bn.unstable_now,wx=bn.unstable_getCurrentPriorityLevel,gh=bn.unstable_ImmediatePriority,$_=bn.unstable_UserBlockingPriority,eu=bn.unstable_NormalPriority,Ax=bn.unstable_LowPriority,q_=bn.unstable_IdlePriority,Du=null,pi=null;function Cx(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Du,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:Px,bx=Math.log,Rx=Math.LN2;function Px(t){return t>>>=0,t===0?32:31-(bx(t)/Rx|0)|0}var Ga=64,Wa=4194304;function ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ks(a):(o&=s,o!==0&&(i=ks(o)))}else s=n&~r,s!==0?i=ks(s):o!==0&&(i=ks(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function Lx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ni(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Lx(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K_(){var t=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function Ix(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function _h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q_,vh,J_,ev,tv,Pf=!1,Xa=[],rr=null,or=null,sr=null,oa=new Map,sa=new Map,Qi=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function xs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Pa(e),e!==null&&vh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Nx(t,e,n,i,r){switch(e){case"focusin":return rr=xs(rr,t,e,n,i,r),!0;case"dragenter":return or=xs(or,t,e,n,i,r),!0;case"mouseover":return sr=xs(sr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return oa.set(o,xs(oa.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,sa.set(o,xs(sa.get(o)||null,t,e,n,i,r)),!0}return!1}function nv(t){var e=Or(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=W_(n),e!==null){t.blockedOn=e,tv(t.priority,function(){J_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);wf=i,n.target.dispatchEvent(i),wf=null}else return e=Pa(n),e!==null&&vh(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){Dl(t)&&n.delete(e)}function Ox(){Pf=!1,rr!==null&&Dl(rr)&&(rr=null),or!==null&&Dl(or)&&(or=null),sr!==null&&Dl(sr)&&(sr=null),oa.forEach(Wp),sa.forEach(Wp)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Pf||(Pf=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,Ox)))}function aa(t){function e(r){return Ss(r,t)}if(0<Xa.length){Ss(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&Ss(rr,t),or!==null&&Ss(or,t),sr!==null&&Ss(sr,t),oa.forEach(e),sa.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)nv(n),n.blockedOn===null&&Qi.shift()}var Wo=zi.ReactCurrentBatchConfig,nu=!0;function Fx(t,e,n,i){var r=nt,o=Wo.transition;Wo.transition=null;try{nt=1,yh(t,e,n,i)}finally{nt=r,Wo.transition=o}}function kx(t,e,n,i){var r=nt,o=Wo.transition;Wo.transition=null;try{nt=4,yh(t,e,n,i)}finally{nt=r,Wo.transition=o}}function yh(t,e,n,i){if(nu){var r=Lf(t,e,n,i);if(r===null)yc(t,e,i,iu,n),Gp(t,i);else if(Nx(r,t,e,n,i))i.stopPropagation();else if(Gp(t,i),e&4&&-1<Ux.indexOf(t)){for(;r!==null;){var o=Pa(r);if(o!==null&&Q_(o),o=Lf(t,e,n,i),o===null&&yc(t,e,i,iu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else yc(t,e,i,null,n)}}var iu=null;function Lf(t,e,n,i){if(iu=null,t=mh(i),t=Or(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return iu=t,null}function iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case gh:return 1;case $_:return 4;case eu:case Ax:return 16;case q_:return 536870912;default:return 16}default:return 16}}var tr=null,xh=null,Il=null;function rv(){if(Il)return Il;var t,e=xh,n=e.length,i,r="value"in tr?tr.value:tr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Il=r.slice(t,1<i?1-i:void 0)}function Ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function Xp(){return!1}function Pn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ja:Xp,this.isPropagationStopped=Xp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=Pn(hs),Ra=xt({},hs,{view:0,detail:0}),Bx=Pn(Ra),cc,fc,Es,Iu=xt({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Es&&(Es&&t.type==="mousemove"?(cc=t.screenX-Es.screenX,fc=t.screenY-Es.screenY):fc=cc=0,Es=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),jp=Pn(Iu),zx=xt({},Iu,{dataTransfer:0}),Hx=Pn(zx),Vx=xt({},Ra,{relatedTarget:0}),dc=Pn(Vx),Gx=xt({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wx=Pn(Gx),Xx=xt({},hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jx=Pn(Xx),Yx=xt({},hs,{data:0}),Yp=Pn(Yx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Kx[t])?!!e[t]:!1}function Eh(){return Zx}var Qx=xt({},Ra,{key:function(t){if(t.key){var e=$x[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eh,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jx=Pn(Qx),eS=xt({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Pn(eS),tS=xt({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eh}),nS=Pn(tS),iS=xt({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=Pn(iS),oS=xt({},Iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sS=Pn(oS),aS=[9,13,27,32],Mh=Ui&&"CompositionEvent"in window,Ws=null;Ui&&"documentMode"in document&&(Ws=document.documentMode);var lS=Ui&&"TextEvent"in window&&!Ws,ov=Ui&&(!Mh||Ws&&8<Ws&&11>=Ws),qp=" ",Kp=!1;function sv(t,e){switch(t){case"keyup":return aS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Co=!1;function uS(t,e){switch(t){case"compositionend":return av(e);case"keypress":return e.which!==32?null:(Kp=!0,qp);case"textInput":return t=e.data,t===qp&&Kp?null:t;default:return null}}function cS(t,e){if(Co)return t==="compositionend"||!Mh&&sv(t,e)?(t=rv(),Il=xh=tr=null,Co=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ov&&e.locale!=="ko"?null:e.data;default:return null}}var fS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fS[t.type]:e==="textarea"}function lv(t,e,n,i){B_(i),e=ru(e,"onChange"),0<e.length&&(n=new Sh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xs=null,la=null;function dS(t){yv(t,0)}function Uu(t){var e=Po(t);if(D_(e))return t}function hS(t,e){if(t==="change")return e}var uv=!1;if(Ui){var hc;if(Ui){var pc="oninput"in document;if(!pc){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),pc=typeof Qp.oninput=="function"}hc=pc}else hc=!1;uv=hc&&(!document.documentMode||9<document.documentMode)}function Jp(){Xs&&(Xs.detachEvent("onpropertychange",cv),la=Xs=null)}function cv(t){if(t.propertyName==="value"&&Uu(la)){var e=[];lv(e,la,t,mh(t)),G_(dS,e)}}function pS(t,e,n){t==="focusin"?(Jp(),Xs=e,la=n,Xs.attachEvent("onpropertychange",cv)):t==="focusout"&&Jp()}function mS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(la)}function gS(t,e){if(t==="click")return Uu(e)}function _S(t,e){if(t==="input"||t==="change")return Uu(e)}function vS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:vS;function ua(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hf.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function fv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dv(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yS(t){var e=dv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fv(n.ownerDocument.documentElement,n)){if(i!==null&&Th(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=tm(n,o);var s=tm(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xS=Ui&&"documentMode"in document&&11>=document.documentMode,bo=null,Df=null,js=null,If=!1;function nm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||bo==null||bo!==Zl(i)||(i=bo,"selectionStart"in i&&Th(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),js&&ua(js,i)||(js=i,i=ru(Df,"onSelect"),0<i.length&&(e=new Sh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=bo)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ro={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},mc={},hv={};Ui&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function Nu(t){if(mc[t])return mc[t];if(!Ro[t])return t;var e=Ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hv)return mc[t]=e[n];return t}var pv=Nu("animationend"),mv=Nu("animationiteration"),gv=Nu("animationstart"),_v=Nu("transitionend"),vv=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){vv.set(t,e),Qr(e,[t])}for(var gc=0;gc<im.length;gc++){var _c=im[gc],SS=_c.toLowerCase(),ES=_c[0].toUpperCase()+_c.slice(1);vr(SS,"on"+ES)}vr(pv,"onAnimationEnd");vr(mv,"onAnimationIteration");vr(gv,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(_v,"onTransitionEnd");Qo("onMouseEnter",["mouseout","mouseover"]);Qo("onMouseLeave",["mouseout","mouseover"]);Qo("onPointerEnter",["pointerout","pointerover"]);Qo("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function rm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Sx(i,e,void 0,t),t.currentTarget=null}function yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;rm(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;rm(r,a,u),o=l}}}if(Jl)throw t=bf,Jl=!1,bf=null,t}function ft(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var i=t+"__bubble";n.has(i)||(xv(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),xv(n,t,i,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[$a]){t[$a]=!0,C_.forEach(function(n){n!=="selectionchange"&&(MS.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,vc("selectionchange",!1,e))}}function xv(t,e,n,i){switch(iv(e)){case 1:var r=Fx;break;case 4:r=kx;break;default:r=yh}n=r.bind(null,e,n,t),r=void 0,!Cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Or(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}G_(function(){var u=o,c=mh(n),f=[];e:{var h=vv.get(t);if(h!==void 0){var m=Sh,g=t;switch(t){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":m=Jx;break;case"focusin":g="focus",m=dc;break;case"focusout":g="blur",m=dc;break;case"beforeblur":case"afterblur":m=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nS;break;case pv:case mv:case gv:m=Wx;break;case _v:m=rS;break;case"scroll":m=Bx;break;case"wheel":m=sS;break;case"copy":case"cut":case"paste":m=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$p}var y=(e&4)!==0,p=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var _=u,v;_!==null;){v=_;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,d!==null&&(E=ra(_,d),E!=null&&y.push(fa(_,E,v)))),p)break;_=_.return}0<y.length&&(h=new m(h,g,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==wf&&(g=n.relatedTarget||n.fromElement)&&(Or(g)||g[Ni]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Or(g):null,g!==null&&(p=Jr(g),g!==p||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(y=jp,E="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=$p,E="onPointerLeave",d="onPointerEnter",_="pointer"),p=m==null?h:Po(m),v=g==null?h:Po(g),h=new y(E,_+"leave",m,n,c),h.target=p,h.relatedTarget=v,E=null,Or(c)===u&&(y=new y(d,_+"enter",g,n,c),y.target=v,y.relatedTarget=p,E=y),p=E,m&&g)t:{for(y=m,d=g,_=0,v=y;v;v=oo(v))_++;for(v=0,E=d;E;E=oo(E))v++;for(;0<_-v;)y=oo(y),_--;for(;0<v-_;)d=oo(d),v--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=oo(y),d=oo(d)}y=null}else y=null;m!==null&&om(f,h,m,y,!1),g!==null&&p!==null&&om(f,p,g,y,!0)}}e:{if(h=u?Po(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=hS;else if(Zp(h))if(uv)b=_S;else{b=mS;var C=pS}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=gS);if(b&&(b=b(t,u))){lv(f,b,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&xf(h,"number",h.value)}switch(C=u?Po(u):window,t){case"focusin":(Zp(C)||C.contentEditable==="true")&&(bo=C,Df=u,js=null);break;case"focusout":js=Df=bo=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,nm(f,n,c);break;case"selectionchange":if(xS)break;case"keydown":case"keyup":nm(f,n,c)}var w;if(Mh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Co?sv(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ov&&n.locale!=="ko"&&(Co||R!=="onCompositionStart"?R==="onCompositionEnd"&&Co&&(w=rv()):(tr=c,xh="value"in tr?tr.value:tr.textContent,Co=!0)),C=ru(u,R),0<C.length&&(R=new Yp(R,t,null,n,c),f.push({event:R,listeners:C}),w?R.data=w:(w=av(n),w!==null&&(R.data=w)))),(w=lS?uS(t,n):cS(t,n))&&(u=ru(u,"onBeforeInput"),0<u.length&&(c=new Yp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=w))}yv(f,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ra(t,n),o!=null&&i.unshift(fa(t,o,r)),o=ra(t,e),o!=null&&i.push(fa(t,o,r))),t=t.return}return i}function oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ra(n,o),l!=null&&s.unshift(fa(n,l,a))):r||(l=ra(n,o),l!=null&&s.push(fa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var TS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(wS,"")}function qa(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(ne(425))}function ou(){}var Uf=null,Nf=null;function Of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,CS=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(bS)}:Ff;function bS(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);aa(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),di="__reactFiber$"+ps,da="__reactProps$"+ps,Ni="__reactContainer$"+ps,kf="__reactEvents$"+ps,RS="__reactListeners$"+ps,PS="__reactHandles$"+ps;function Or(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[di])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[di]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Po(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Ou(t){return t[da]||null}var Bf=[],Lo=-1;function yr(t){return{current:t}}function ht(t){0>Lo||(t.current=Bf[Lo],Bf[Lo]=null,Lo--)}function at(t,e){Lo++,Bf[Lo]=t.current,t.current=e}var pr={},Zt=yr(pr),pn=yr(!1),Xr=pr;function Jo(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function su(){ht(pn),ht(Zt)}function um(t,e,n){if(Zt.current!==pr)throw Error(ne(168));at(Zt,e),at(pn,n)}function Sv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,px(t)||"Unknown",r));return xt({},n,i)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Xr=Zt.current,at(Zt,t),at(pn,pn.current),!0}function cm(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Sv(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,ht(pn),ht(Zt),at(Zt,t)):ht(pn),at(pn,n)}var Ai=null,Fu=!1,Sc=!1;function Ev(t){Ai===null?Ai=[t]:Ai.push(t)}function LS(t){Fu=!0,Ev(t)}function xr(){if(!Sc&&Ai!==null){Sc=!0;var t=0,e=nt;try{var n=Ai;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,Fu=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),Y_(gh,xr),r}finally{nt=e,Sc=!1}}return null}var Do=[],Io=0,lu=null,uu=0,In=[],Un=0,jr=null,bi=1,Ri="";function Lr(t,e){Do[Io++]=uu,Do[Io++]=lu,lu=t,uu=e}function Mv(t,e,n){In[Un++]=bi,In[Un++]=Ri,In[Un++]=jr,jr=t;var i=bi;t=Ri;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var o=32-ni(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,bi=1<<32-ni(e)+r|n<<r|i,Ri=o+t}else bi=1<<o|n<<r|i,Ri=t}function wh(t){t.return!==null&&(Lr(t,1),Mv(t,1,0))}function Ah(t){for(;t===lu;)lu=Do[--Io],Do[Io]=null,uu=Do[--Io],Do[Io]=null;for(;t===jr;)jr=In[--Un],In[Un]=null,Ri=In[--Un],In[Un]=null,bi=In[--Un],In[Un]=null}var Cn=null,wn=null,gt=!1,Kn=null;function Tv(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,wn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:bi,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,wn=null,!0):!1;default:return!1}}function zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hf(t){if(gt){var e=wn;if(e){var n=e;if(!fm(t,e)){if(zf(t))throw Error(ne(418));e=ar(n.nextSibling);var i=Cn;e&&fm(t,e)?Tv(i,n):(t.flags=t.flags&-4097|2,gt=!1,Cn=t)}}else{if(zf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,gt=!1,Cn=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Ka(t){if(t!==Cn)return!1;if(!gt)return dm(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Of(t.type,t.memoizedProps)),e&&(e=wn)){if(zf(t))throw wv(),Error(ne(418));for(;e;)Tv(t,e),e=ar(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Cn?ar(t.stateNode.nextSibling):null;return!0}function wv(){for(var t=wn;t;)t=ar(t.nextSibling)}function es(){wn=Cn=null,gt=!1}function Ch(t){Kn===null?Kn=[t]:Kn.push(t)}var DS=zi.ReactCurrentBatchConfig;function Ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function Av(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=fr(d,_),d.index=0,d.sibling=null,d}function o(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,E){return _===null||_.tag!==6?(_=bc(v,d.mode,E),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,E){var b=v.type;return b===Ao?c(d,_,v.props.children,E,v.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qi&&hm(b)===_.type)?(E=r(_,v.props),E.ref=Ms(d,_,v),E.return=d,E):(E=Hl(v.type,v.key,v.props,null,d.mode,E),E.ref=Ms(d,_,v),E.return=d,E)}function u(d,_,v,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Rc(v,d.mode,E),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function c(d,_,v,E,b){return _===null||_.tag!==7?(_=Vr(v,d.mode,E,b),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bc(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case za:return v=Hl(_.type,_.key,_.props,null,d.mode,v),v.ref=Ms(d,null,_),v.return=d,v;case wo:return _=Rc(_,d.mode,v),_.return=d,_;case qi:var E=_._init;return f(d,E(_._payload),v)}if(Fs(_)||vs(_))return _=Vr(_,d.mode,v,null),_.return=d,_;Za(d,_)}return null}function h(d,_,v,E){var b=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(d,_,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===b?l(d,_,v,E):null;case wo:return v.key===b?u(d,_,v,E):null;case qi:return b=v._init,h(d,_,b(v._payload),E)}if(Fs(v)||vs(v))return b!==null?null:c(d,_,v,E,null);Za(d,v)}return null}function m(d,_,v,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(v)||null,a(_,d,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case za:return d=d.get(E.key===null?v:E.key)||null,l(_,d,E,b);case wo:return d=d.get(E.key===null?v:E.key)||null,u(_,d,E,b);case qi:var C=E._init;return m(d,_,v,C(E._payload),b)}if(Fs(E)||vs(E))return d=d.get(v)||null,c(_,d,E,b,null);Za(_,E)}return null}function g(d,_,v,E){for(var b=null,C=null,w=_,R=_=0,j=null;w!==null&&R<v.length;R++){w.index>R?(j=w,w=null):j=w.sibling;var x=h(d,w,v[R],E);if(x===null){w===null&&(w=j);break}t&&w&&x.alternate===null&&e(d,w),_=o(x,_,R),C===null?b=x:C.sibling=x,C=x,w=j}if(R===v.length)return n(d,w),gt&&Lr(d,R),b;if(w===null){for(;R<v.length;R++)w=f(d,v[R],E),w!==null&&(_=o(w,_,R),C===null?b=w:C.sibling=w,C=w);return gt&&Lr(d,R),b}for(w=i(d,w);R<v.length;R++)j=m(w,d,R,v[R],E),j!==null&&(t&&j.alternate!==null&&w.delete(j.key===null?R:j.key),_=o(j,_,R),C===null?b=j:C.sibling=j,C=j);return t&&w.forEach(function(T){return e(d,T)}),gt&&Lr(d,R),b}function y(d,_,v,E){var b=vs(v);if(typeof b!="function")throw Error(ne(150));if(v=b.call(v),v==null)throw Error(ne(151));for(var C=b=null,w=_,R=_=0,j=null,x=v.next();w!==null&&!x.done;R++,x=v.next()){w.index>R?(j=w,w=null):j=w.sibling;var T=h(d,w,x.value,E);if(T===null){w===null&&(w=j);break}t&&w&&T.alternate===null&&e(d,w),_=o(T,_,R),C===null?b=T:C.sibling=T,C=T,w=j}if(x.done)return n(d,w),gt&&Lr(d,R),b;if(w===null){for(;!x.done;R++,x=v.next())x=f(d,x.value,E),x!==null&&(_=o(x,_,R),C===null?b=x:C.sibling=x,C=x);return gt&&Lr(d,R),b}for(w=i(d,w);!x.done;R++,x=v.next())x=m(w,d,R,x.value,E),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?R:x.key),_=o(x,_,R),C===null?b=x:C.sibling=x,C=x);return t&&w.forEach(function(H){return e(d,H)}),gt&&Lr(d,R),b}function p(d,_,v,E){if(typeof v=="object"&&v!==null&&v.type===Ao&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var b=v.key,C=_;C!==null;){if(C.key===b){if(b=v.type,b===Ao){if(C.tag===7){n(d,C.sibling),_=r(C,v.props.children),_.return=d,d=_;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qi&&hm(b)===C.type){n(d,C.sibling),_=r(C,v.props),_.ref=Ms(d,C,v),_.return=d,d=_;break e}n(d,C);break}else e(d,C);C=C.sibling}v.type===Ao?(_=Vr(v.props.children,d.mode,E,v.key),_.return=d,d=_):(E=Hl(v.type,v.key,v.props,null,d.mode,E),E.ref=Ms(d,_,v),E.return=d,d=E)}return s(d);case wo:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Rc(v,d.mode,E),_.return=d,d=_}return s(d);case qi:return C=v._init,p(d,_,C(v._payload),E)}if(Fs(v))return g(d,_,v,E);if(vs(v))return y(d,_,v,E);Za(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=bc(v,d.mode,E),_.return=d,d=_),s(d)):n(d,_)}return p}var ts=Av(!0),Cv=Av(!1),cu=yr(null),fu=null,Uo=null,bh=null;function Rh(){bh=Uo=fu=null}function Ph(t){var e=cu.current;ht(cu),t._currentValue=e}function Vf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xo(t,e){fu=t,bh=Uo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(bh!==t)if(t={context:t,memoizedValue:e,next:null},Uo===null){if(fu===null)throw Error(ne(308));Uo=t,fu.dependencies={lanes:0,firstContext:t}}else Uo=Uo.next=t;return e}var Fr=null;function Lh(t){Fr===null?Fr=[t]:Fr.push(t)}function bv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Lh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function Dh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,Lh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_h(t,n)}}function pm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,i){var r=t.updateQueue;Ki=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(h=e,m=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(m,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(m,f,h):g,h==null)break e;f=xt({},f,h);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);$r|=s,t.lanes=s,t.memoizedState=f}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var La={},mi=yr(La),ha=yr(La),pa=yr(La);function kr(t){if(t===La)throw Error(ne(174));return t}function Ih(t,e){switch(at(pa,e),at(ha,t),at(mi,La),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ef(e,t)}ht(mi),at(mi,e)}function ns(){ht(mi),ht(ha),ht(pa)}function Pv(t){kr(pa.current);var e=kr(mi.current),n=Ef(e,t.type);e!==n&&(at(ha,t),at(mi,n))}function Uh(t){ha.current===t&&(ht(mi),ht(ha))}var _t=yr(0);function hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ec=[];function Nh(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var Ol=zi.ReactCurrentDispatcher,Mc=zi.ReactCurrentBatchConfig,Yr=0,vt=null,Dt=null,Ft=null,pu=!1,Ys=!1,ma=0,IS=0;function Xt(){throw Error(ne(321))}function Oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Fh(t,e,n,i,r,o){if(Yr=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?FS:kS,t=n(i,r),Ys){o=0;do{if(Ys=!1,ma=0,25<=o)throw Error(ne(301));o+=1,Ft=Dt=null,e.updateQueue=null,Ol.current=BS,t=n(i,r)}while(Ys)}if(Ol.current=mu,e=Dt!==null&&Dt.next!==null,Yr=0,Ft=Dt=vt=null,pu=!1,e)throw Error(ne(300));return t}function kh(){var t=ma!==0;return ma=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?vt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function zn(){if(Dt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ft===null?vt.memoizedState:Ft.next;if(e!==null)Ft=e,Dt=t;else{if(t===null)throw Error(ne(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ft===null?vt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function ga(t,e){return typeof e=="function"?e(t):e}function Tc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,vt.lanes|=c,$r|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ri(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,$r|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ri(o,e.memoizedState)||(hn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Lv(){}function Dv(t,e){var n=vt,i=zn(),r=e(),o=!ri(i.memoizedState,r);if(o&&(i.memoizedState=r,hn=!0),i=i.queue,Bh(Nv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,_a(9,Uv.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ne(349));Yr&30||Iv(n,e,r)}return r}function Iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Uv(t,e,n,i){e.value=n,e.getSnapshot=i,Ov(e)&&Fv(t)}function Nv(t,e,n){return n(function(){Ov(e)&&Fv(t)})}function Ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function Fv(t){var e=Oi(t,1);e!==null&&ii(e,t,1,-1)}function gm(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=OS.bind(null,vt,t),[e.memoizedState,t]}function _a(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kv(){return zn().memoizedState}function Fl(t,e,n,i){var r=ci();vt.flags|=t,r.memoizedState=_a(1|e,n,void 0,i===void 0?null:i)}function ku(t,e,n,i){var r=zn();i=i===void 0?null:i;var o=void 0;if(Dt!==null){var s=Dt.memoizedState;if(o=s.destroy,i!==null&&Oh(i,s.deps)){r.memoizedState=_a(e,n,o,i);return}}vt.flags|=t,r.memoizedState=_a(1|e,n,o,i)}function _m(t,e){return Fl(8390656,8,t,e)}function Bh(t,e){return ku(2048,8,t,e)}function Bv(t,e){return ku(4,2,t,e)}function zv(t,e){return ku(4,4,t,e)}function Hv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vv(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,Hv.bind(null,e,t),n)}function zh(){}function Gv(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Oh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wv(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Oh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Xv(t,e,n){return Yr&21?(ri(n,e)||(n=K_(),vt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function US(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Mc.transition;Mc.transition={};try{t(!1),e()}finally{nt=n,Mc.transition=i}}function jv(){return zn().memoizedState}function NS(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Yv(t))$v(e,n);else if(n=bv(t,e,n,i),n!==null){var r=nn();ii(n,t,i,r),qv(n,e,i)}}function OS(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yv(t))$v(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,s)){var l=e.interleaved;l===null?(r.next=r,Lh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=bv(t,e,r,i),n!==null&&(r=nn(),ii(n,t,i,r),qv(n,e,i))}}function Yv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function $v(t,e){Ys=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_h(t,n)}}var mu={readContext:Bn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},FS={readContext:Bn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:_m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4194308,4,Hv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fl(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=NS.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:zh,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=US.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ci();if(gt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),kt===null)throw Error(ne(349));Yr&30||Iv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,_m(Nv.bind(null,i,o,t),[t]),i.flags|=2048,_a(9,Uv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ci(),e=kt.identifierPrefix;if(gt){var n=Ri,i=bi;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:Bn,useCallback:Gv,useContext:Bn,useEffect:Bh,useImperativeHandle:Vv,useInsertionEffect:Bv,useLayoutEffect:zv,useMemo:Wv,useReducer:Tc,useRef:kv,useState:function(){return Tc(ga)},useDebugValue:zh,useDeferredValue:function(t){var e=zn();return Xv(e,Dt.memoizedState,t)},useTransition:function(){var t=Tc(ga)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Dv,useId:jv,unstable_isNewReconciler:!1},BS={readContext:Bn,useCallback:Gv,useContext:Bn,useEffect:Bh,useImperativeHandle:Vv,useInsertionEffect:Bv,useLayoutEffect:zv,useMemo:Wv,useReducer:wc,useRef:kv,useState:function(){return wc(ga)},useDebugValue:zh,useDeferredValue:function(t){var e=zn();return Dt===null?e.memoizedState=t:Xv(e,Dt.memoizedState,t)},useTransition:function(){var t=wc(ga)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Dv,useId:jv,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=cr(t),o=Di(i,r);o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(ii(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=cr(t),o=Di(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(ii(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=cr(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(ii(e,t,i,n),Nl(e,t,i))}};function vm(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ua(n,i)||!ua(r,o):!0}function Kv(t,e,n){var i=!1,r=pr,o=e.contextType;return typeof o=="object"&&o!==null?o=Bn(o):(r=mn(e)?Xr:Zt.current,i=e.contextTypes,o=(i=i!=null)?Jo(t,r):pr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function ym(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function Wf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Dh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Bn(o):(o=mn(e)?Xr:Zt.current,r.context=Jo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Gf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),du(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e){try{var n="",i=e;do n+=hx(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zS=typeof WeakMap=="function"?WeakMap:Map;function Zv(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_u||(_u=!0,td=i),Xf(t,e)},n}function Qv(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Xf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xf(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function xm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=eE.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var HS=zi.ReactCurrentOwner,hn=!1;function en(t,e,n,i){e.child=t===null?Cv(e,null,n,i):ts(e,t.child,n,i)}function Mm(t,e,n,i,r){n=n.render;var o=e.ref;return Xo(e,r),i=Fh(t,e,n,i,o,r),n=kh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(gt&&n&&wh(e),e.flags|=1,en(t,e,i,r),e.child)}function Tm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!$h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Jv(t,e,o,i,r)):(t=Hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(s,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=fr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ua(o,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return jf(t,e,n,i,r)}function e0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Oo,Tn),Tn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Oo,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(Oo,Tn),Tn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(Oo,Tn),Tn|=i;return en(t,e,r,n),e.child}function t0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jf(t,e,n,i,r){var o=mn(n)?Xr:Zt.current;return o=Jo(e,o),Xo(e,r),n=Fh(t,e,n,i,o,r),i=kh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(gt&&i&&wh(e),e.flags|=1,en(t,e,n,r),e.child)}function wm(t,e,n,i,r){if(mn(n)){var o=!0;au(e)}else o=!1;if(Xo(e,r),e.stateNode===null)kl(t,e),Kv(e,n,i),Wf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bn(u):(u=mn(n)?Xr:Zt.current,u=Jo(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ym(e,s,i,u),Ki=!1;var h=e.memoizedState;s.state=h,du(e,i,s,r),l=e.memoizedState,a!==i||h!==l||pn.current||Ki?(typeof c=="function"&&(Gf(e,n,c,i),l=e.memoizedState),(a=Ki||vm(e,n,a,i,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Rv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yn(e.type,a),s.props=u,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=mn(n)?Xr:Zt.current,l=Jo(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&ym(e,s,i,l),Ki=!1,h=e.memoizedState,s.state=h,du(e,i,s,r);var g=e.memoizedState;a!==f||h!==g||pn.current||Ki?(typeof m=="function"&&(Gf(e,n,m,i),g=e.memoizedState),(u=Ki||vm(e,n,u,i,h,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Yf(t,e,n,i,o,r)}function Yf(t,e,n,i,r,o){t0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&cm(e,n,!1),Fi(t,e,o);i=e.stateNode,HS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=ts(e,t.child,null,o),e.child=ts(e,null,a,o)):en(t,e,a,o),e.memoizedState=i.state,r&&cm(e,n,!0),e.child}function n0(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),Ih(t,e.containerInfo)}function Am(t,e,n,i,r){return es(),Ch(r),e.flags|=256,en(t,e,n,i),e.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function i0(t,e,n){var i=e.pendingProps,r=_t.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(_t,r&1),t===null)return Hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Vu(s,i,0,null),t=Vr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=qf(n),e.memoizedState=$f,t):Hh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return VS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=fr(a,o):(o=Vr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?qf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=$f,i}return o=t.child,t=o.sibling,i=fr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Hh(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,i){return i!==null&&Ch(i),ts(e,t.child,null,n),t=Hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Ac(Error(ne(422))),Qa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Vu({mode:"visible",children:i.children},r,0,null),o=Vr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ts(e,t.child,null,s),e.child.memoizedState=qf(s),e.memoizedState=$f,o);if(!(e.mode&1))return Qa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ne(419)),i=Ac(o,i,void 0),Qa(t,e,s,i)}if(a=(s&t.childLanes)!==0,hn||a){if(i=kt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Oi(t,r),ii(i,t,r,-1))}return Yh(),i=Ac(Error(ne(421))),Qa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tE.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,wn=ar(r.nextSibling),Cn=e,gt=!0,Kn=null,t!==null&&(In[Un++]=bi,In[Un++]=Ri,In[Un++]=jr,bi=t.id,Ri=t.overflow,jr=e),e=Hh(e,i.children),e.flags|=4096,e)}function Cm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vf(t.return,e,n)}function Cc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function r0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(en(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,n,e);else if(t.tag===19)Cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cc(e,!0,n,null,o);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GS(t,e,n){switch(e.tag){case 3:n0(e),es();break;case 5:Pv(e);break;case 1:mn(e.type)&&au(e);break;case 4:Ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(cu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?i0(t,e,n):(at(_t,_t.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);at(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return r0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,e0(t,e,n)}return Fi(t,e,n)}var o0,Kf,s0,a0;o0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kf=function(){};s0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,kr(mi.current);var o=null;switch(n){case"input":r=vf(t,r),i=vf(t,i),o=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),o=[];break;case"textarea":r=Sf(t,r),i=Sf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ou)}Mf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(na.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};a0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ts(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function WS(t,e,n){var i=e.pendingProps;switch(Ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return mn(e.type)&&su(),jt(e),null;case 3:return i=e.stateNode,ns(),ht(pn),ht(Zt),Nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(rd(Kn),Kn=null))),Kf(t,e),jt(e),null;case 5:Uh(e);var r=kr(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)s0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return jt(e),null}if(t=kr(mi.current),Ka(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[di]=e,i[da]=o,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Bs.length;r++)ft(Bs[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Op(i,o),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ft("invalid",i);break;case"textarea":kp(i,o),ft("invalid",i)}Mf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&qa(i.textContent,a,t),r=["children",""+a]):na.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ft("scroll",i)}switch(n){case"input":Ha(i),Fp(i,o,!0);break;case"textarea":Ha(i),Bp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ou)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[di]=e,t[da]=i,o0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Tf(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bs.length;r++)ft(Bs[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Op(t,i),r=vf(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":kp(t,i),r=Sf(t,i),ft("invalid",t);break;default:r=i}Mf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?k_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(t,l):typeof l=="number"&&ia(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(na.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ft("scroll",t):l!=null&&fh(t,o,l,s))}switch(n){case"input":Ha(t),Fp(t,i,!1);break;case"textarea":Ha(t),Bp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ho(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ho(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ou)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)a0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=kr(pa.current),kr(mi.current),Ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(o=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return jt(e),null;case 13:if(ht(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&wn!==null&&e.mode&1&&!(e.flags&128))wv(),es(),e.flags|=98560,o=!1;else if(o=Ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ne(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ne(317));o[di]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),o=!1}else Kn!==null&&(rd(Kn),Kn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?It===0&&(It=3):Yh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return ns(),Kf(t,e),t===null&&ca(e.stateNode.containerInfo),jt(e),null;case 10:return Ph(e.type._context),jt(e),null;case 17:return mn(e.type)&&su(),jt(e),null;case 19:if(ht(_t),o=e.memoizedState,o===null)return jt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ts(o,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=hu(t),s!==null){for(e.flags|=128,Ts(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(_t,_t.current&1|2),e.child}t=t.sibling}o.tail!==null&&At()>rs&&(e.flags|=128,i=!0,Ts(o,!1),e.lanes=4194304)}else{if(!i)if(t=hu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ts(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!gt)return jt(e),null}else 2*At()-o.renderingStartTime>rs&&n!==1073741824&&(e.flags|=128,i=!0,Ts(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,n=_t.current,at(_t,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return jh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function XS(t,e){switch(Ah(e),e.tag){case 1:return mn(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),ht(pn),ht(Zt),Nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uh(e),null;case 13:if(ht(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(_t),null;case 4:return ns(),null;case 10:return Ph(e.type._context),null;case 22:case 23:return jh(),null;case 24:return null;default:return null}}var Ja=!1,qt=!1,jS=typeof WeakSet=="function"?WeakSet:Set,me=null;function No(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Zf(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var bm=!1;function YS(t,e){if(Uf=nu,t=dv(),Th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},nu=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,p=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yn(e.type,y),p);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){Mt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return g=bm,bm=!1,g}function $s(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Zf(e,n,o)}r=r.next}while(r!==i)}}function zu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l0(t){var e=t.alternate;e!==null&&(t.alternate=null,l0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[da],delete e[kf],delete e[RS],delete e[PS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u0(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ou));else if(i!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var Ht=null,$n=!1;function Vi(t,e,n){for(n=n.child;n!==null;)c0(t,e,n),n=n.sibling}function c0(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Du,n)}catch{}switch(n.tag){case 5:qt||No(n,e);case 6:var i=Ht,r=$n;Ht=null,Vi(t,e,n),Ht=i,$n=r,Ht!==null&&($n?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&($n?(t=Ht,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),aa(t)):xc(Ht,n.stateNode));break;case 4:i=Ht,r=$n,Ht=n.stateNode.containerInfo,$n=!0,Vi(t,e,n),Ht=i,$n=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Zf(n,e,s),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!qt&&(No(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Vi(t,e,n),qt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jS),e.forEach(function(i){var r=nE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,$n=!1;break e;case 3:Ht=a.stateNode.containerInfo,$n=!0;break e;case 4:Ht=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Ht===null)throw Error(ne(160));c0(o,s,r),Ht=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f0(e,t),e=e.sibling}function f0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),li(t),i&4){try{$s(3,t,t.return),zu(3,t)}catch(y){Mt(t,t.return,y)}try{$s(5,t,t.return)}catch(y){Mt(t,t.return,y)}}break;case 1:Gn(e,t),li(t),i&512&&n!==null&&No(n,n.return);break;case 5:if(Gn(e,t),li(t),i&512&&n!==null&&No(n,n.return),t.flags&32){var r=t.stateNode;try{ia(r,"")}catch(y){Mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&I_(r,o),Tf(a,s);var u=Tf(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?k_(r,f):c==="dangerouslySetInnerHTML"?O_(r,f):c==="children"?ia(r,f):fh(r,c,f,u)}switch(a){case"input":yf(r,o);break;case"textarea":U_(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Ho(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ho(r,!!o.multiple,o.defaultValue,!0):Ho(r,!!o.multiple,o.multiple?[]:"",!1))}r[da]=o}catch(y){Mt(t,t.return,y)}}break;case 6:if(Gn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){Mt(t,t.return,y)}}break;case 3:if(Gn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(y){Mt(t,t.return,y)}break;case 4:Gn(e,t),li(t);break;case 13:Gn(e,t),li(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Wh=At())),i&4&&Pm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(u=qt)||c,Gn(e,t),qt=u):Gn(e,t),li(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(me=t,c=t.child;c!==null;){for(f=me=c;me!==null;){switch(h=me,m=h.child,h.tag){case 0:case 11:case 14:case 15:$s(4,h,h.return);break;case 1:No(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Mt(i,n,y)}}break;case 5:No(h,h.return);break;case 22:if(h.memoizedState!==null){Dm(f);continue}}m!==null?(m.return=h,me=m):Dm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=F_("display",s))}catch(y){Mt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),li(t),i&4&&Pm(t);break;case 21:break;default:Gn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var o=Rm(t);ed(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Rm(t);Jf(t,a,s);break;default:throw Error(ne(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $S(t,e,n){me=t,d0(t)}function d0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ja;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Ja;var u=qt;if(Ja=s,(qt=l)&&!u)for(me=r;me!==null;)s=me,l=s.child,s.tag===22&&s.memoizedState!==null?Im(r):l!==null?(l.return=s,me=l):Im(r);for(;o!==null;)me=o,d0(o),o=o.sibling;me=r,Ja=a,qt=u}Lm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,me=o):Lm(t)}}function Lm(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||zu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&mm(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}qt||e.flags&512&&Qf(e)}catch(h){Mt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Dm(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Im(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zu(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var o=e.return;try{Qf(e)}catch(l){Mt(e,o,l)}break;case 5:var s=e.return;try{Qf(e)}catch(l){Mt(e,s,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var qS=Math.ceil,gu=zi.ReactCurrentDispatcher,Vh=zi.ReactCurrentOwner,kn=zi.ReactCurrentBatchConfig,Ye=0,kt=null,Rt=null,Vt=0,Tn=0,Oo=yr(0),It=0,va=null,$r=0,Hu=0,Gh=0,qs=null,dn=null,Wh=0,rs=1/0,wi=null,_u=!1,td=null,ur=null,el=!1,nr=null,vu=0,Ks=0,nd=null,Bl=-1,zl=0;function nn(){return Ye&6?At():Bl!==-1?Bl:Bl=At()}function cr(t){return t.mode&1?Ye&2&&Vt!==0?Vt&-Vt:DS.transition!==null?(zl===0&&(zl=K_()),zl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:iv(t.type)),t):1}function ii(t,e,n,i){if(50<Ks)throw Ks=0,nd=null,Error(ne(185));ba(t,n,i),(!(Ye&2)||t!==kt)&&(t===kt&&(!(Ye&2)&&(Hu|=n),It===4&&Ji(t,Vt)),gn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(rs=At()+500,Fu&&xr()))}function gn(t,e){var n=t.callbackNode;Dx(t,e);var i=tu(t,t===kt?Vt:0);if(i===0)n!==null&&Vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vp(n),e===1)t.tag===0?LS(Um.bind(null,t)):Ev(Um.bind(null,t)),CS(function(){!(Ye&6)&&xr()}),n=null;else{switch(Z_(i)){case 1:n=gh;break;case 4:n=$_;break;case 16:n=eu;break;case 536870912:n=q_;break;default:n=eu}n=x0(n,h0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h0(t,e){if(Bl=-1,zl=0,Ye&6)throw Error(ne(327));var n=t.callbackNode;if(jo()&&t.callbackNode!==n)return null;var i=tu(t,t===kt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yu(t,i);else{e=i;var r=Ye;Ye|=2;var o=m0();(kt!==t||Vt!==e)&&(wi=null,rs=At()+500,Hr(t,e));do try{QS();break}catch(a){p0(t,a)}while(!0);Rh(),gu.current=o,Ye=r,Rt!==null?e=0:(kt=null,Vt=0,e=It)}if(e!==0){if(e===2&&(r=Rf(t),r!==0&&(i=r,e=id(t,r))),e===1)throw n=va,Hr(t,0),Ji(t,i),gn(t,At()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!KS(r)&&(e=yu(t,i),e===2&&(o=Rf(t),o!==0&&(i=o,e=id(t,o))),e===1))throw n=va,Hr(t,0),Ji(t,i),gn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Dr(t,dn,wi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Wh+500-At(),10<e)){if(tu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ff(Dr.bind(null,t,dn,wi),e);break}Dr(t,dn,wi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ni(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qS(i/1960))-i,10<i){t.timeoutHandle=Ff(Dr.bind(null,t,dn,wi),i);break}Dr(t,dn,wi);break;case 5:Dr(t,dn,wi);break;default:throw Error(ne(329))}}}return gn(t,At()),t.callbackNode===n?h0.bind(null,t):null}function id(t,e){var n=qs;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=yu(t,e),t!==2&&(e=dn,dn=n,e!==null&&rd(e)),t}function rd(t){dn===null?dn=t:dn.push.apply(dn,t)}function KS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ri(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Gh,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Um(t){if(Ye&6)throw Error(ne(327));jo();var e=tu(t,0);if(!(e&1))return gn(t,At()),null;var n=yu(t,e);if(t.tag!==0&&n===2){var i=Rf(t);i!==0&&(e=i,n=id(t,i))}if(n===1)throw n=va,Hr(t,0),Ji(t,e),gn(t,At()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,dn,wi),gn(t,At()),null}function Xh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(rs=At()+500,Fu&&xr())}}function qr(t){nr!==null&&nr.tag===0&&!(Ye&6)&&jo();var e=Ye;Ye|=1;var n=kn.transition,i=nt;try{if(kn.transition=null,nt=1,t)return t()}finally{nt=i,kn.transition=n,Ye=e,!(Ye&6)&&xr()}}function jh(){Tn=Oo.current,ht(Oo)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AS(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Ah(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&su();break;case 3:ns(),ht(pn),ht(Zt),Nh();break;case 5:Uh(i);break;case 4:ns();break;case 13:ht(_t);break;case 19:ht(_t);break;case 10:Ph(i.type._context);break;case 22:case 23:jh()}n=n.return}if(kt=t,Rt=t=fr(t.current,null),Vt=Tn=e,It=0,va=null,Gh=Hu=$r=0,dn=qs=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Fr=null}return t}function p0(t,e){do{var n=Rt;try{if(Rh(),Ol.current=mu,pu){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pu=!1}if(Yr=0,Ft=Dt=vt=null,Ys=!1,ma=0,Vh.current=null,n===null||n.return===null){It=1,va=e,Rt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Sm(s);if(m!==null){m.flags&=-257,Em(m,s,a,o,e),m.mode&1&&xm(o,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){xm(o,u,e),Yh();break e}l=Error(ne(426))}}else if(gt&&a.mode&1){var p=Sm(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Em(p,s,a,o,e),Ch(is(l,a));break e}}o=l=is(l,a),It!==4&&(It=2),qs===null?qs=[o]:qs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Zv(o,l,e);pm(o,d);break e;case 1:a=l;var _=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ur===null||!ur.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=Qv(o,a,e);pm(o,E);break e}}o=o.return}while(o!==null)}_0(n)}catch(b){e=b,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function m0(){var t=gu.current;return gu.current=mu,t===null?mu:t}function Yh(){(It===0||It===3||It===2)&&(It=4),kt===null||!($r&268435455)&&!(Hu&268435455)||Ji(kt,Vt)}function yu(t,e){var n=Ye;Ye|=2;var i=m0();(kt!==t||Vt!==e)&&(wi=null,Hr(t,e));do try{ZS();break}catch(r){p0(t,r)}while(!0);if(Rh(),Ye=n,gu.current=i,Rt!==null)throw Error(ne(261));return kt=null,Vt=0,It}function ZS(){for(;Rt!==null;)g0(Rt)}function QS(){for(;Rt!==null&&!Mx();)g0(Rt)}function g0(t){var e=y0(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?_0(t):Rt=e,Vh.current=null}function _0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XS(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Rt=null;return}}else if(n=WS(n,e,Tn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);It===0&&(It=5)}function Dr(t,e,n){var i=nt,r=kn.transition;try{kn.transition=null,nt=1,JS(t,e,n,i)}finally{kn.transition=r,nt=i}return null}function JS(t,e,n,i){do jo();while(nr!==null);if(Ye&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ix(t,o),t===kt&&(Rt=kt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,x0(eu,function(){return jo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kn.transition,kn.transition=null;var s=nt;nt=1;var a=Ye;Ye|=4,Vh.current=null,YS(t,n),f0(n,t),yS(Nf),nu=!!Uf,Nf=Uf=null,t.current=n,$S(n),Tx(),Ye=a,nt=s,kn.transition=o}else t.current=n;if(el&&(el=!1,nr=t,vu=r),o=t.pendingLanes,o===0&&(ur=null),Cx(n.stateNode),gn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_u)throw _u=!1,t=td,td=null,t;return vu&1&&t.tag!==0&&jo(),o=t.pendingLanes,o&1?t===nd?Ks++:(Ks=0,nd=t):Ks=0,xr(),null}function jo(){if(nr!==null){var t=Z_(vu),e=kn.transition,n=nt;try{if(kn.transition=null,nt=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,vu=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var o=me,s=o.child;if(me.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:$s(8,c,o)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var h=c.sibling,m=c.return;if(l0(c),c===u){me=null;break}if(h!==null){h.return=m,me=h;break}me=m}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}me=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,me=s;else e:for(;me!==null;){if(o=me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$s(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,me=d;break e}me=o.return}}var _=t.current;for(me=_;me!==null;){s=me;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,me=v;else e:for(s=_;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zu(9,a)}}catch(b){Mt(a,a.return,b)}if(a===s){me=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,me=E;break e}me=a.return}}if(Ye=r,xr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Du,t)}catch{}i=!0}return i}finally{nt=n,kn.transition=e}}return!1}function Nm(t,e,n){e=is(n,e),e=Zv(t,e,1),t=lr(t,e,1),e=nn(),t!==null&&(ba(t,1,e),gn(t,e))}function Mt(t,e,n){if(t.tag===3)Nm(t,t,n);else for(;e!==null;){if(e.tag===3){Nm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=is(n,t),t=Qv(e,t,1),e=lr(e,t,1),t=nn(),e!==null&&(ba(e,1,t),gn(e,t));break}}e=e.return}}function eE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Vt&n)===n&&(It===4||It===3&&(Vt&130023424)===Vt&&500>At()-Wh?Hr(t,0):Gh|=n),gn(t,e)}function v0(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=nn();t=Oi(t,e),t!==null&&(ba(t,e,n),gn(t,n))}function tE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v0(t,n)}function nE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),v0(t,n)}var y0;y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,GS(t,e,n);hn=!!(t.flags&131072)}else hn=!1,gt&&e.flags&1048576&&Mv(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;kl(t,e),t=e.pendingProps;var r=Jo(e,Zt.current);Xo(e,n),r=Fh(null,e,i,t,r,n);var o=kh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(o=!0,au(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Dh(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,Wf(e,i,t,n),e=Yf(null,e,i,!0,o,n)):(e.tag=0,gt&&o&&wh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rE(i),t=Yn(i,t),r){case 0:e=jf(null,e,i,t,n);break e;case 1:e=wm(null,e,i,t,n);break e;case 11:e=Mm(null,e,i,t,n);break e;case 14:e=Tm(null,e,i,Yn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),jf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),wm(t,e,i,r,n);case 3:e:{if(n0(e),t===null)throw Error(ne(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Rv(t,e),du(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=is(Error(ne(423)),e),e=Am(t,e,i,n,r);break e}else if(i!==r){r=is(Error(ne(424)),e),e=Am(t,e,i,n,r);break e}else for(wn=ar(e.stateNode.containerInfo.firstChild),Cn=e,gt=!0,Kn=null,n=Cv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),i===r){e=Fi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return Pv(e),t===null&&Hf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Of(i,r)?s=null:o!==null&&Of(i,o)&&(e.flags|=32),t0(t,e),en(t,e,s,n),e.child;case 6:return t===null&&Hf(e),null;case 13:return i0(t,e,n);case 4:return Ih(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ts(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Mm(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(cu,i._currentValue),i._currentValue=s,o!==null)if(ri(o.value,s)){if(o.children===r.children&&!pn.current){e=Fi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Di(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ne(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Vf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xo(e,n),r=Bn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Tm(t,e,i,r,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),kl(t,e),e.tag=1,mn(i)?(t=!0,au(e)):t=!1,Xo(e,n),Kv(e,i,r),Wf(e,i,r,n),Yf(null,e,i,!0,t,n);case 19:return r0(t,e,n);case 22:return e0(t,e,n)}throw Error(ne(156,e.tag))};function x0(t,e){return Y_(t,e)}function iE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new iE(t,e,n,i)}function $h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rE(t){if(typeof t=="function")return $h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hh)return 11;if(t===ph)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")$h(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ao:return Vr(n.children,r,o,e);case dh:s=8,r|=8;break;case pf:return t=On(12,n,e,r|2),t.elementType=pf,t.lanes=o,t;case mf:return t=On(13,n,e,r),t.elementType=mf,t.lanes=o,t;case gf:return t=On(19,n,e,r),t.elementType=gf,t.lanes=o,t;case P_:return Vu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b_:s=10;break e;case R_:s=9;break e;case hh:s=11;break e;case ph:s=14;break e;case qi:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=On(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Vr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Vu(t,e,n,i){return t=On(22,t,i,e),t.elementType=P_,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qh(t,e,n,i,r,o,s,a,l){return t=new oE(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=On(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(o),t}function sE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return pr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(mn(n))return Sv(t,n,e)}return e}function E0(t,e,n,i,r,o,s,a,l){return t=qh(n,i,!0,t,r,o,s,a,l),t.context=S0(null),n=t.current,i=nn(),r=cr(n),o=Di(i,r),o.callback=e??null,lr(n,o,r),t.current.lanes=r,ba(t,r,i),gn(t,i),t}function Gu(t,e,n,i){var r=e.current,o=nn(),s=cr(r);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,s),t!==null&&(ii(t,r,s,o),Nl(t,r,s)),s}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Om(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kh(t,e){Om(t,e),(t=t.alternate)&&Om(t,e)}function aE(){return null}var M0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zh(t){this._internalRoot=t}Wu.prototype.render=Zh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Gu(t,e,null,null)};Wu.prototype.unmount=Zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Gu(null,t,null,null)}),e[Ni]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&nv(t)}};function Qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function lE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=xu(s);o.call(u)}}var s=E0(e,i,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=s,t[Ni]=s.current,ca(t.nodeType===8?t.parentNode:t),qr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=xu(l);a.call(u)}}var l=qh(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=l,t[Ni]=l.current,ca(t.nodeType===8?t.parentNode:t),qr(function(){Gu(e,l,n,i)}),l}function ju(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=xu(s);a.call(l)}}Gu(e,s,t,r)}else s=lE(n,e,t,r,i);return xu(s)}Q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ks(e.pendingLanes);n!==0&&(_h(e,n|1),gn(e,At()),!(Ye&6)&&(rs=At()+500,xr()))}break;case 13:qr(function(){var i=Oi(t,1);if(i!==null){var r=nn();ii(i,t,1,r)}}),Kh(t,1)}};vh=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=nn();ii(e,t,134217728,n)}Kh(t,134217728)}};J_=function(t){if(t.tag===13){var e=cr(t),n=Oi(t,e);if(n!==null){var i=nn();ii(n,t,e,i)}Kh(t,e)}};ev=function(){return nt};tv=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Af=function(t,e,n){switch(e){case"input":if(yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ou(i);if(!r)throw Error(ne(90));D_(i),yf(i,r)}}}break;case"textarea":U_(t,n);break;case"select":e=n.value,e!=null&&Ho(t,!!n.multiple,e,!1)}};H_=Xh;V_=qr;var uE={usingClientEntryPoint:!1,Events:[Pa,Po,Ou,B_,z_,Xh]},ws={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cE={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X_(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||aE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Du=tl.inject(cE),pi=tl}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uE;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qh(e))throw Error(ne(200));return sE(t,e,null,n)};Rn.createRoot=function(t,e){if(!Qh(t))throw Error(ne(299));var n=!1,i="",r=M0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qh(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,ca(t.nodeType===8?t.parentNode:t),new Zh(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=X_(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return qr(t)};Rn.hydrate=function(t,e,n){if(!Xu(e))throw Error(ne(200));return ju(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Qh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=M0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=E0(e,null,t,1,n??null,r,!1,o,s),t[Ni]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wu(e)};Rn.render=function(t,e,n){if(!Xu(e))throw Error(ne(200));return ju(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(ne(40));return t._reactRootContainer?(qr(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Rn.unstable_batchedUpdates=Xh;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return ju(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function T0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T0)}catch(t){console.error(t)}}T0(),T_.exports=Rn;var fE=T_.exports,w0,km=fE;w0=km.createRoot,km.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ya.apply(this,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const Bm="popstate";function dE(t){t===void 0&&(t={});function e(r,o){let{pathname:s="/",search:a="",hash:l=""}=eo(r.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),od("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){let s=r.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:A0(o))}function i(r,o){Jh(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return pE(e,n,i,t)}function Pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hE(){return Math.random().toString(36).substr(2,8)}function zm(t,e){return{usr:t.state,key:t.key,idx:e}}function od(t,e,n,i){return n===void 0&&(n=null),ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?eo(e):e,{state:n,key:e&&e.key||i||hE()})}function A0(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function eo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function pE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=ir.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(ya({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=ir.Pop;let p=c(),d=p==null?null:p-u;u=p,l&&l({action:a,location:y.location,delta:d})}function h(p,d){a=ir.Push;let _=od(y.location,p,d);n&&n(_,p),u=c()+1;let v=zm(_,u),E=y.createHref(_);try{s.pushState(v,"",E)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(E)}o&&l&&l({action:a,location:y.location,delta:1})}function m(p,d){a=ir.Replace;let _=od(y.location,p,d);n&&n(_,p),u=c();let v=zm(_,u),E=y.createHref(_);s.replaceState(v,"",E),o&&l&&l({action:a,location:y.location,delta:0})}function g(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:A0(p);return _=_.replace(/ $/,"%20"),Pt(d,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,d)}let y={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Bm,f),l=p,()=>{r.removeEventListener(Bm,f),l=null}},createHref(p){return e(r,p)},createURL:g,encodeLocation(p){let d=g(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(p){return s.go(p)}};return y}var Hm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hm||(Hm={}));function mE(t,e,n){return n===void 0&&(n="/"),gE(t,e,n,!1)}function gE(t,e,n,i){let r=typeof e=="string"?eo(e):e,o=R0(r.pathname||"/",n);if(o==null)return null;let s=C0(t);_E(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=bE(o);a=AE(s[l],u,i)}return a}function C0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Pt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Gr([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Pt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),C0(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:TE(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of b0(o.path))r(o,s,l)}),e}function b0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=b0(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function _E(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const vE=/^:[\w-]+$/,yE=3,xE=2,SE=1,EE=10,ME=-2,Vm=t=>t==="*";function TE(t,e){let n=t.split("/"),i=n.length;return n.some(Vm)&&(i+=ME),e&&(i+=xE),n.filter(r=>!Vm(r)).reduce((r,o)=>r+(vE.test(o)?yE:o===""?SE:EE),i)}function wE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function AE(t,e,n){let{routesMeta:i}=t,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=o==="/"?e:e.slice(o.length)||"/",f=Gm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=Gm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:Gr([o,f.pathname]),pathnameBase:DE(Gr([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=Gr([o,f.pathnameBase]))}return s}function Gm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=CE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let y=a[f]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[f];return m&&!g?u[h]=void 0:u[h]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function CE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function bE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function R0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function RE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?eo(t):t;return{pathname:n?n.startsWith("/")?n:PE(n,e):e,search:IE(i),hash:UE(r)}}function PE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Pc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function P0(t,e){let n=LE(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function L0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=eo(t):(r=ya({},t),Pt(!r.pathname||!r.pathname.includes("?"),Pc("?","pathname","search",r)),Pt(!r.pathname||!r.pathname.includes("#"),Pc("#","pathname","hash",r)),Pt(!r.search||!r.search.includes("#"),Pc("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=RE(r,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Gr=t=>t.join("/").replace(/\/\/+/g,"/"),DE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,UE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function NE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const D0=["post","put","patch","delete"];new Set(D0);const OE=["get",...D0];new Set(OE);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xa.apply(this,arguments)}const ep=xe.createContext(null),FE=xe.createContext(null),Da=xe.createContext(null),Yu=xe.createContext(null),to=xe.createContext({outlet:null,matches:[],isDataRoute:!1}),I0=xe.createContext(null);function Ia(){return xe.useContext(Yu)!=null}function tp(){return Ia()||Pt(!1),xe.useContext(Yu).location}function U0(t){xe.useContext(Da).static||xe.useLayoutEffect(t)}function kE(){let{isDataRoute:t}=xe.useContext(to);return t?ZE():BE()}function BE(){Ia()||Pt(!1);let t=xe.useContext(ep),{basename:e,future:n,navigator:i}=xe.useContext(Da),{matches:r}=xe.useContext(to),{pathname:o}=tp(),s=JSON.stringify(P0(r,n.v7_relativeSplatPath)),a=xe.useRef(!1);return U0(()=>{a.current=!0}),xe.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let f=L0(u,JSON.parse(s),o,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Gr([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,s,o,t])}function zE(t,e){return HE(t,e)}function HE(t,e,n,i){Ia()||Pt(!1);let{navigator:r}=xe.useContext(Da),{matches:o}=xe.useContext(to),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=tp(),c;if(e){var f;let p=typeof e=="string"?eo(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||Pt(!1),c=p}else c=u;let h=c.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let g=mE(t,{pathname:m}),y=jE(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Gr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Gr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,i);return e&&y?xe.createElement(Yu.Provider,{value:{location:xa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ir.Pop}},y):y}function VE(){let t=KE(),e=NE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return xe.createElement(xe.Fragment,null,xe.createElement("h2",null,"Unexpected Application Error!"),xe.createElement("h3",{style:{fontStyle:"italic"}},e),n?xe.createElement("pre",{style:r},n):null,null)}const GE=xe.createElement(VE,null);class WE extends xe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?xe.createElement(to.Provider,{value:this.props.routeContext},xe.createElement(I0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function XE(t){let{routeContext:e,match:n,children:i}=t,r=xe.useContext(ep);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),xe.createElement(to.Provider,{value:e},i)}function jE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=i)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||Pt(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:m}=n,g=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||g){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,h)=>{let m,g=!1,y=null,p=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||GE,l&&(u<0&&h===0?(g=!0,p=null):u===h&&(g=!0,p=f.route.hydrateFallbackElement||null)));let d=e.concat(s.slice(0,h+1)),_=()=>{let v;return m?v=y:g?v=p:f.route.Component?v=xe.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=c,xe.createElement(XE,{match:f,routeContext:{outlet:c,matches:d,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?xe.createElement(WE,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:_(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):_()},null)}var N0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(N0||{}),Su=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Su||{});function YE(t){let e=xe.useContext(ep);return e||Pt(!1),e}function $E(t){let e=xe.useContext(FE);return e||Pt(!1),e}function qE(t){let e=xe.useContext(to);return e||Pt(!1),e}function O0(t){let e=qE(),n=e.matches[e.matches.length-1];return n.route.id||Pt(!1),n.route.id}function KE(){var t;let e=xe.useContext(I0),n=$E(Su.UseRouteError),i=O0(Su.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function ZE(){let{router:t}=YE(N0.UseNavigateStable),e=O0(Su.UseNavigateStable),n=xe.useRef(!1);return U0(()=>{n.current=!0}),xe.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,xa({fromRouteId:e},o)))},[t,e])}function QE(t){let{to:e,replace:n,state:i,relative:r}=t;Ia()||Pt(!1);let{future:o,static:s}=xe.useContext(Da),{matches:a}=xe.useContext(to),{pathname:l}=tp(),u=kE(),c=L0(e,P0(a,o.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(c);return xe.useEffect(()=>u(JSON.parse(f),{replace:n,state:i,relative:r}),[u,f,r,n,i]),null}function sd(t){Pt(!1)}function JE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ir.Pop,navigator:o,static:s=!1,future:a}=t;Ia()&&Pt(!1);let l=e.replace(/^\/*/,"/"),u=xe.useMemo(()=>({basename:l,navigator:o,static:s,future:xa({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=eo(i));let{pathname:c="/",search:f="",hash:h="",state:m=null,key:g="default"}=i,y=xe.useMemo(()=>{let p=R0(c,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:g},navigationType:r}},[l,c,f,h,m,g,r]);return y==null?null:xe.createElement(Da.Provider,{value:u},xe.createElement(Yu.Provider,{children:n,value:y}))}function eM(t){let{children:e,location:n}=t;return zE(ad(e),n)}new Promise(()=>{});function ad(t,e){e===void 0&&(e=[]);let n=[];return xe.Children.forEach(t,(i,r)=>{if(!xe.isValidElement(i))return;let o=[...e,r];if(i.type===xe.Fragment){n.push.apply(n,ad(i.props.children,o));return}i.type!==sd&&Pt(!1),!i.props.index||!i.props.children||Pt(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=ad(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const tM="6";try{window.__reactRouterVersion=tM}catch{}const nM="startTransition",Wm=ex[nM];function iM(t){let{basename:e,children:n,future:i,window:r}=t,o=xe.useRef();o.current==null&&(o.current=dE({window:r,v5Compat:!0}));let s=o.current,[a,l]=xe.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},c=xe.useCallback(f=>{u&&Wm?Wm(()=>l(f)):l(f)},[l,u]);return xe.useLayoutEffect(()=>s.listen(c),[s,c]),xe.createElement(JE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}var Xm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xm||(Xm={}));var jm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jm||(jm={}));var F0={exports:{}},rM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",oM=rM,sM=oM;function k0(){}function B0(){}B0.resetWarningCache=k0;var aM=function(){function t(i,r,o,s,a,l){if(l!==sM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:B0,resetWarningCache:k0};return n.PropTypes=n,n};F0.exports=aM();var lM=F0.exports;const pt=Aa(lM);function uM(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var z0=xe,cM=uM(z0);function Ym(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fM(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var dM=!!(typeof window<"u"&&window.document&&window.document.createElement);function hM(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function i(r){return r.displayName||r.name||"Component"}return function(o){if(typeof o!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],a;function l(){a=t(s.map(function(c){return c.props})),u.canUseDOM?e(a):n&&(a=n(a))}var u=function(c){fM(f,c);function f(){return c.apply(this,arguments)||this}f.peek=function(){return a},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=a;return a=void 0,s=[],g};var h=f.prototype;return h.UNSAFE_componentWillMount=function(){s.push(this),l()},h.componentDidUpdate=function(){l()},h.componentWillUnmount=function(){var g=s.indexOf(this);s.splice(g,1),l()},h.render=function(){return cM.createElement(o,this.props)},f}(z0.PureComponent);return Ym(u,"displayName","SideEffect("+i(o)+")"),Ym(u,"canUseDOM",dM),u}}var pM=hM;const mM=Aa(pM);var gM=typeof Element<"u",_M=typeof Map=="function",vM=typeof Set=="function",yM=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Vl(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,i,r;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(i=n;i--!==0;)if(!Vl(t[i],e[i]))return!1;return!0}var o;if(_M&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(i=o.next()).done;)if(!e.has(i.value[0]))return!1;for(o=t.entries();!(i=o.next()).done;)if(!Vl(i.value[1],e.get(i.value[0])))return!1;return!0}if(vM&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(i=o.next()).done;)if(!e.has(i.value[0]))return!1;return!0}if(yM&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(i=n;i--!==0;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,r[i]))return!1;if(gM&&t instanceof Element)return!1;for(i=n;i--!==0;)if(!((r[i]==="_owner"||r[i]==="__v"||r[i]==="__o")&&t.$$typeof)&&!Vl(t[r[i]],e[r[i]]))return!1;return!0}return t!==t&&e!==e}var xM=function(e,n){try{return Vl(e,n)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}};const SM=Aa(xM);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $m=Object.getOwnPropertySymbols,EM=Object.prototype.hasOwnProperty,MM=Object.prototype.propertyIsEnumerable;function TM(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function wM(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(o){r[o]=o}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var AM=wM()?Object.assign:function(t,e){for(var n,i=TM(t),r,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)EM.call(n,s)&&(i[s]=n[s]);if($m){r=$m(n);for(var a=0;a<r.length;a++)MM.call(n,r[a])&&(i[r[a]]=n[r[a]])}}return i};const CM=Aa(AM);var Wr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Ue={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Ue).map(function(t){return Ue[t]});var mt={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Eu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Sa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},bM=Object.keys(Eu).reduce(function(t,e){return t[Eu[e]]=e,t},{}),RM=[Ue.NOSCRIPT,Ue.SCRIPT,Ue.STYLE],ei="data-react-helmet",PM=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},LM=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},DM=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),cn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},IM=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},qm=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},UM=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},ld=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},NM=function(e){var n=Yo(e,Ue.TITLE),i=Yo(e,Sa.TITLE_TEMPLATE);if(i&&n)return i.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var r=Yo(e,Sa.DEFAULT_TITLE);return n||r||void 0},OM=function(e){return Yo(e,Sa.ON_CHANGE_CLIENT_STATE)||function(){}},Lc=function(e,n){return n.filter(function(i){return typeof i[e]<"u"}).map(function(i){return i[e]}).reduce(function(i,r){return cn({},i,r)},{})},FM=function(e,n){return n.filter(function(i){return typeof i[Ue.BASE]<"u"}).map(function(i){return i[Ue.BASE]}).reverse().reduce(function(i,r){if(!i.length)for(var o=Object.keys(r),s=0;s<o.length;s++){var a=o[s],l=a.toLowerCase();if(e.indexOf(l)!==-1&&r[l])return i.concat(r)}return i},[])},As=function(e,n,i){var r={};return i.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&HM("Helmet: "+e+' should be of type "Array". Instead found type "'+PM(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,s){var a={};s.filter(function(h){for(var m=void 0,g=Object.keys(h),y=0;y<g.length;y++){var p=g[y],d=p.toLowerCase();n.indexOf(d)!==-1&&!(m===mt.REL&&h[m].toLowerCase()==="canonical")&&!(d===mt.REL&&h[d].toLowerCase()==="stylesheet")&&(m=d),n.indexOf(p)!==-1&&(p===mt.INNER_HTML||p===mt.CSS_TEXT||p===mt.ITEM_PROP)&&(m=p)}if(!m||!h[m])return!1;var _=h[m].toLowerCase();return r[m]||(r[m]={}),a[m]||(a[m]={}),r[m][_]?!1:(a[m][_]=!0,!0)}).reverse().forEach(function(h){return o.push(h)});for(var l=Object.keys(a),u=0;u<l.length;u++){var c=l[u],f=CM({},r[c],a[c]);r[c]=f}return o},[]).reverse()},Yo=function(e,n){for(var i=e.length-1;i>=0;i--){var r=e[i];if(r.hasOwnProperty(n))return r[n]}return null},kM=function(e){return{baseTag:FM([mt.HREF,mt.TARGET],e),bodyAttributes:Lc(Wr.BODY,e),defer:Yo(e,Sa.DEFER),encode:Yo(e,Sa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Lc(Wr.HTML,e),linkTags:As(Ue.LINK,[mt.REL,mt.HREF],e),metaTags:As(Ue.META,[mt.NAME,mt.CHARSET,mt.HTTPEQUIV,mt.PROPERTY,mt.ITEM_PROP],e),noscriptTags:As(Ue.NOSCRIPT,[mt.INNER_HTML],e),onChangeClientState:OM(e),scriptTags:As(Ue.SCRIPT,[mt.SRC,mt.INNER_HTML],e),styleTags:As(Ue.STYLE,[mt.CSS_TEXT],e),title:NM(e),titleAttributes:Lc(Wr.TITLE,e)}},ud=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){ud(e)},0)}}(),Km=function(e){return clearTimeout(e)},BM=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ud:global.requestAnimationFrame||ud,zM=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Km:global.cancelAnimationFrame||Km,HM=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},Cs=null,VM=function(e){Cs&&zM(Cs),e.defer?Cs=BM(function(){Zm(e,function(){Cs=null})}):(Zm(e),Cs=null)},Zm=function(e,n){var i=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,h=e.title,m=e.titleAttributes;cd(Ue.BODY,r),cd(Ue.HTML,o),GM(h,m);var g={baseTag:so(Ue.BASE,i),linkTags:so(Ue.LINK,s),metaTags:so(Ue.META,a),noscriptTags:so(Ue.NOSCRIPT,l),scriptTags:so(Ue.SCRIPT,c),styleTags:so(Ue.STYLE,f)},y={},p={};Object.keys(g).forEach(function(d){var _=g[d],v=_.newTags,E=_.oldTags;v.length&&(y[d]=v),E.length&&(p[d]=g[d].oldTags)}),n&&n(),u(e,y,p)},H0=function(e){return Array.isArray(e)?e.join(""):e},GM=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=H0(e)),cd(Ue.TITLE,n)},cd=function(e,n){var i=document.getElementsByTagName(e)[0];if(i){for(var r=i.getAttribute(ei),o=r?r.split(","):[],s=[].concat(o),a=Object.keys(n),l=0;l<a.length;l++){var u=a[l],c=n[u]||"";i.getAttribute(u)!==c&&i.setAttribute(u,c),o.indexOf(u)===-1&&o.push(u);var f=s.indexOf(u);f!==-1&&s.splice(f,1)}for(var h=s.length-1;h>=0;h--)i.removeAttribute(s[h]);o.length===s.length?i.removeAttribute(ei):i.getAttribute(ei)!==a.join(",")&&i.setAttribute(ei,a.join(","))}},so=function(e,n){var i=document.head||document.querySelector(Ue.HEAD),r=i.querySelectorAll(e+"["+ei+"]"),o=Array.prototype.slice.call(r),s=[],a=void 0;return n&&n.length&&n.forEach(function(l){var u=document.createElement(e);for(var c in l)if(l.hasOwnProperty(c))if(c===mt.INNER_HTML)u.innerHTML=l.innerHTML;else if(c===mt.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=l.cssText:u.appendChild(document.createTextNode(l.cssText));else{var f=typeof l[c]>"u"?"":l[c];u.setAttribute(c,f)}u.setAttribute(ei,"true"),o.some(function(h,m){return a=m,u.isEqualNode(h)})?o.splice(a,1):s.push(u)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),s.forEach(function(l){return i.appendChild(l)}),{oldTags:o,newTags:s}},V0=function(e){return Object.keys(e).reduce(function(n,i){var r=typeof e[i]<"u"?i+'="'+e[i]+'"':""+i;return n?n+" "+r:r},"")},WM=function(e,n,i,r){var o=V0(i),s=H0(n);return o?"<"+e+" "+ei+'="true" '+o+">"+ld(s,r)+"</"+e+">":"<"+e+" "+ei+'="true">'+ld(s,r)+"</"+e+">"},XM=function(e,n,i){return n.reduce(function(r,o){var s=Object.keys(o).filter(function(u){return!(u===mt.INNER_HTML||u===mt.CSS_TEXT)}).reduce(function(u,c){var f=typeof o[c]>"u"?c:c+'="'+ld(o[c],i)+'"';return u?u+" "+f:f},""),a=o.innerHTML||o.cssText||"",l=RM.indexOf(e)===-1;return r+"<"+e+" "+ei+'="true" '+s+(l?"/>":">"+a+"</"+e+">")},"")},G0=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(i,r){return i[Eu[r]||r]=e[r],i},n)},jM=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(i,r){return i[bM[r]||r]=e[r],i},n)},YM=function(e,n,i){var r,o=(r={key:n},r[ei]=!0,r),s=G0(i,o);return[zo.createElement(Ue.TITLE,s,n)]},$M=function(e,n){return n.map(function(i,r){var o,s=(o={key:r},o[ei]=!0,o);return Object.keys(i).forEach(function(a){var l=Eu[a]||a;if(l===mt.INNER_HTML||l===mt.CSS_TEXT){var u=i.innerHTML||i.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[l]=i[a]}),zo.createElement(e,s)})},vi=function(e,n,i){switch(e){case Ue.TITLE:return{toComponent:function(){return YM(e,n.title,n.titleAttributes)},toString:function(){return WM(e,n.title,n.titleAttributes,i)}};case Wr.BODY:case Wr.HTML:return{toComponent:function(){return G0(n)},toString:function(){return V0(n)}};default:return{toComponent:function(){return $M(e,n)},toString:function(){return XM(e,n,i)}}}},W0=function(e){var n=e.baseTag,i=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,s=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.scriptTags,c=e.styleTags,f=e.title,h=f===void 0?"":f,m=e.titleAttributes;return{base:vi(Ue.BASE,n,r),bodyAttributes:vi(Wr.BODY,i,r),htmlAttributes:vi(Wr.HTML,o,r),link:vi(Ue.LINK,s,r),meta:vi(Ue.META,a,r),noscript:vi(Ue.NOSCRIPT,l,r),script:vi(Ue.SCRIPT,u,r),style:vi(Ue.STYLE,c,r),title:vi(Ue.TITLE,{title:h,titleAttributes:m},r)}},qM=function(e){var n,i;return i=n=function(r){IM(o,r);function o(){return LM(this,o),UM(this,r.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(a){return!SM(this.props,a)},o.prototype.mapNestedChildrenToProps=function(a,l){if(!l)return null;switch(a.type){case Ue.SCRIPT:case Ue.NOSCRIPT:return{innerHTML:l};case Ue.STYLE:return{cssText:l}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(a){var l,u=a.child,c=a.arrayTypeChildren,f=a.newChildProps,h=a.nestedChildren;return cn({},c,(l={},l[u.type]=[].concat(c[u.type]||[],[cn({},f,this.mapNestedChildrenToProps(u,h))]),l))},o.prototype.mapObjectTypeChildren=function(a){var l,u,c=a.child,f=a.newProps,h=a.newChildProps,m=a.nestedChildren;switch(c.type){case Ue.TITLE:return cn({},f,(l={},l[c.type]=m,l.titleAttributes=cn({},h),l));case Ue.BODY:return cn({},f,{bodyAttributes:cn({},h)});case Ue.HTML:return cn({},f,{htmlAttributes:cn({},h)})}return cn({},f,(u={},u[c.type]=cn({},h),u))},o.prototype.mapArrayTypeChildrenToProps=function(a,l){var u=cn({},l);return Object.keys(a).forEach(function(c){var f;u=cn({},u,(f={},f[c]=a[c],f))}),u},o.prototype.warnOnInvalidChildren=function(a,l){return!0},o.prototype.mapChildrenToProps=function(a,l){var u=this,c={};return zo.Children.forEach(a,function(f){if(!(!f||!f.props)){var h=f.props,m=h.children,g=qm(h,["children"]),y=jM(g);switch(u.warnOnInvalidChildren(f,m),f.type){case Ue.LINK:case Ue.META:case Ue.NOSCRIPT:case Ue.SCRIPT:case Ue.STYLE:c=u.flattenArrayTypeChildren({child:f,arrayTypeChildren:c,newChildProps:y,nestedChildren:m});break;default:l=u.mapObjectTypeChildren({child:f,newProps:l,newChildProps:y,nestedChildren:m});break}}}),l=this.mapArrayTypeChildrenToProps(c,l),l},o.prototype.render=function(){var a=this.props,l=a.children,u=qm(a,["children"]),c=cn({},u);return l&&(c=this.mapChildrenToProps(l,c)),zo.createElement(e,c)},DM(o,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),o}(zo.Component),n.propTypes={base:pt.object,bodyAttributes:pt.object,children:pt.oneOfType([pt.arrayOf(pt.node),pt.node]),defaultTitle:pt.string,defer:pt.bool,encodeSpecialCharacters:pt.bool,htmlAttributes:pt.object,link:pt.arrayOf(pt.object),meta:pt.arrayOf(pt.object),noscript:pt.arrayOf(pt.object),onChangeClientState:pt.func,script:pt.arrayOf(pt.object),style:pt.arrayOf(pt.object),title:pt.string,titleAttributes:pt.object,titleTemplate:pt.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var r=e.rewind();return r||(r=W0({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),r},i},KM=function(){return null},ZM=mM(kM,VM,W0)(KM),fd=qM(ZM);fd.renderStatic=fd.rewind;const QM=({children:t,title:e})=>tn.jsxs(tn.Fragment,{children:[tn.jsx(fd,{children:tn.jsx("title",{children:e})}),t]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="169",$o={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JM=0,Qm=1,eT=2,X0=1,tT=2,Ti=3,mr=0,_n=1,Ci=2,Ii=0,qo=1,Jm=2,eg=3,tg=4,nT=5,Ur=100,iT=101,rT=102,oT=103,sT=104,aT=200,lT=201,uT=202,cT=203,dd=204,hd=205,fT=206,dT=207,hT=208,pT=209,mT=210,gT=211,_T=212,vT=213,yT=214,pd=0,md=1,gd=2,os=3,_d=4,vd=5,yd=6,xd=7,j0=0,xT=1,ST=2,dr=0,ET=1,MT=2,TT=3,wT=4,AT=5,CT=6,bT=7,Y0=300,ss=301,as=302,Sd=303,Ed=304,$u=306,Md=1e3,Br=1001,Td=1002,Fn=1003,RT=1004,nl=1005,Qn=1006,Dc=1007,zr=1008,ki=1009,$0=1010,q0=1011,Ea=1012,ip=1013,Kr=1014,Pi=1015,ms=1016,rp=1017,op=1018,ls=1020,K0=35902,Z0=1021,Q0=1022,ti=1023,J0=1024,ey=1025,Ko=1026,us=1027,ty=1028,sp=1029,ny=1030,ap=1031,lp=1033,Gl=33776,Wl=33777,Xl=33778,jl=33779,wd=35840,Ad=35841,Cd=35842,bd=35843,Rd=36196,Pd=37492,Ld=37496,Dd=37808,Id=37809,Ud=37810,Nd=37811,Od=37812,Fd=37813,kd=37814,Bd=37815,zd=37816,Hd=37817,Vd=37818,Gd=37819,Wd=37820,Xd=37821,Yl=36492,jd=36494,Yd=36495,iy=36283,$d=36284,qd=36285,Kd=36286,PT=3200,LT=3201,DT=0,IT=1,er="",qn="srgb",Sr="srgb-linear",up="display-p3",qu="display-p3-linear",Mu="linear",dt="srgb",Tu="rec709",wu="p3",ao=7680,ng=519,UT=512,NT=513,OT=514,ry=515,FT=516,kT=517,BT=518,zT=519,ig=35044,rg="300 es",Li=2e3,Au=2001;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let og=1234567;const Zs=Math.PI/180,Ma=180/Math.PI;function gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function cp(t,e){return(t%e+e)%e}function HT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function VT(t,e,n){return t!==e?(n-t)/(e-t):0}function Qs(t,e,n){return(1-n)*t+n*e}function GT(t,e,n,i){return Qs(t,e,1-Math.exp(-n*i))}function WT(t,e=1){return e-Math.abs(cp(t,e*2)-e)}function XT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function jT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function YT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function $T(t,e){return t+Math.random()*(e-t)}function qT(t){return t*(.5-Math.random())}function KT(t){t!==void 0&&(og=t);let e=og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZT(t){return t*Zs}function QT(t){return t*Ma}function JT(t){return(t&t-1)===0&&t!==0}function e1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function t1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function n1(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),c=s((e+i)/2),f=o((e-i)/2),h=s((e-i)/2),m=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":t.set(a*c,l*f,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*f,a*u);break;case"ZXZ":t.set(l*f,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*g,l*m,a*u);break;case"YXY":t.set(l*m,a*c,l*g,a*u);break;case"ZYZ":t.set(l*g,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const i1={DEG2RAD:Zs,RAD2DEG:Ma,generateUUID:gs,clamp:Kt,euclideanModulo:cp,mapLinear:HT,inverseLerp:VT,lerp:Qs,damp:GT,pingpong:WT,smoothstep:XT,smootherstep:jT,randInt:YT,randFloat:$T,randFloatSpread:qT,seededRandom:KT,degToRad:ZT,radToDeg:QT,isPowerOfTwo:JT,ceilPowerOfTwo:e1,floorPowerOfTwo:t1,setQuaternionFromProperEuler:n1,normalize:Qt,denormalize:Eo};class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,o,s,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],g=i[8],y=r[0],p=r[3],d=r[6],_=r[1],v=r[4],E=r[7],b=r[2],C=r[5],w=r[8];return o[0]=s*y+a*_+l*b,o[3]=s*p+a*v+l*C,o[6]=s*d+a*E+l*w,o[1]=u*y+c*_+f*b,o[4]=u*p+c*v+f*C,o[7]=u*d+c*E+f*w,o[2]=h*y+m*_+g*b,o[5]=h*p+m*v+g*C,o[8]=h*d+m*E+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*s-a*u,h=a*l-c*o,m=u*o-s*l,g=n*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*s)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ic.makeScale(e,n)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ic.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new Be;function oy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ta(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function r1(){const t=Ta("canvas");return t.style.display="block",t}const sg={};function $l(t){t in sg||(sg[t]=!0,console.warn(t))}function o1(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function s1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ag=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lg=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Sr]:{transfer:Mu,primaries:Tu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[qn]:{transfer:dt,primaries:Tu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[qu]:{transfer:Mu,primaries:wu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(lg),fromReference:t=>t.applyMatrix3(ag)},[up]:{transfer:dt,primaries:wu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(lg),fromReference:t=>t.applyMatrix3(ag).convertLinearToSRGB()}},l1=new Set([Sr,qu]),et={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!l1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=bs[e].toReference,r=bs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return bs[t].primaries},getTransfer:function(t){return t===er?Mu:bs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(bs[e].luminanceCoefficients)}};function Zo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let lo;class u1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lo===void 0&&(lo=Ta("canvas")),lo.width=e.width,lo.height=e.height;const i=lo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=lo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ta("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Zo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zo(n[i]/255)*255):n[i]=Zo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c1=0;class sy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Nc(r[s].image)):o.push(Nc(r[s]))}else o=Nc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?u1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f1=0;class vn extends no{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Br,r=Br,o=Qn,s=zr,a=ti,l=ki,u=vn.DEFAULT_ANISOTROPY,c=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=gs(),this.name="",this.source=new sy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Y0;vn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],g=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,E=(m+1)/2,b=(d+1)/2,C=(c+h)/4,w=(f+y)/4,R=(g+p)/4;return v>E&&v>b?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=C/i,o=w/i):E>b?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=C/r,o=R/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=w/o,r=R/o),this.set(i,r,o,n),this}let _=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-y)/_,this.z=(h-c)/_,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d1 extends no{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new sy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends d1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ay extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h1 extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=o[s+0],m=o[s+1],g=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==h||u!==m||c!==g){let p=1-a;const d=l*h+u*m+c*g+f*y,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,d*_);p=Math.sin(p*C)/b,a=Math.sin(a*C)/b}const E=a*_;if(l=l*p+h*E,u=u*p+m*E,c=c*p+g*E,f=f*p+y*E,p===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[s],h=o[s+1],m=o[s+2],g=o[s+3];return e[n]=a*g+c*f+l*m-u*h,e[n+1]=l*g+c*h+u*f-a*m,e[n+2]=u*g+c*m+a*h-l*f,e[n+3]=c*g-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(o/2),h=l(i/2),m=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=h*c*f+u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f-h*m*g;break;case"YXZ":this._x=h*c*f+u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f+h*m*g;break;case"ZXY":this._x=h*c*f-u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f-h*m*g;break;case"ZYX":this._x=h*c*f-u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f+h*m*g;break;case"YZX":this._x=h*c*f+u*m*g,this._y=u*m*f+h*c*g,this._z=u*c*g-h*m*f,this._w=u*c*f-h*m*g;break;case"XZY":this._x=h*c*f-u*m*g,this._y=u*m*f-h*c*g,this._z=u*c*g+h*m*f,this._w=u*c*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ug.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ug.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*c,this.y=i+l*c+a*u-o*f,this.z=r+l*f+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new N,ug=new Zr;class Ua{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Wn):Wn.fromBufferAttribute(o,s),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),rl.subVectors(this.max,Rs),uo.subVectors(e.a,Rs),co.subVectors(e.b,Rs),fo.subVectors(e.c,Rs),Gi.subVectors(co,uo),Wi.subVectors(fo,co),wr.subVectors(uo,fo);let n=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-wr.z,wr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,wr.z,0,-wr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-wr.y,wr.x,0];return!Fc(n,uo,co,fo,rl)||(n=[1,0,0,0,1,0,0,0,1],!Fc(n,uo,co,fo,rl))?!1:(ol.crossVectors(Gi,Wi),n=[ol.x,ol.y,ol.z],Fc(n,uo,co,fo,rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new N,new N,new N,new N,new N,new N,new N,new N],Wn=new N,il=new Ua,uo=new N,co=new N,fo=new N,Gi=new N,Wi=new N,wr=new N,Rs=new N,rl=new N,ol=new N,Ar=new N;function Fc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Ar.fromArray(t,o);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),u=n.dot(Ar),c=i.dot(Ar);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const p1=new Ua,Ps=new N,kc=new N;class Ku{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):p1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const n=Ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(kc)),this.expandByPoint(Ps.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new N,Bc=new N,sl=new N,Xi=new N,zc=new N,al=new N,Hc=new N;class fp{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bc.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(Bc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(sl),a=Xi.dot(this.direction),l=-Xi.dot(sl),u=Xi.lengthSq(),c=Math.abs(1-s*s);let f,h,m,g;if(c>0)if(f=s*l-a,h=s*a-l,g=o*c,f>=0)if(h>=-g)if(h<=g){const y=1/c;f*=y,h*=y,m=f*(f+s*h+2*a)+h*(s*f+h+2*l)+u}else h=o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+u);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bc).addScaledVector(sl,h),m}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,o){zc.subVectors(n,e),al.subVectors(i,e),Hc.crossVectors(zc,al);let s=this.direction.dot(Hc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(al.crossVectors(Xi,al));if(l<0)return null;const u=a*this.direction.dot(zc.cross(Xi));if(u<0||l+u>s)return null;const c=-a*Xi.dot(Hc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,o,s,a,l,u,c,f,h,m,g,y,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,f,h,m,g,y,p)}set(e,n,i,r,o,s,a,l,u,c,f,h,m,g,y,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=g,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ho.setFromMatrixColumn(e,0).length(),o=1/ho.setFromMatrixColumn(e,1).length(),s=1/ho.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*c,m=s*f,g=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+g*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=g+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,g=u*c,y=u*f;n[0]=h+y*a,n[4]=g*a-m,n[8]=s*u,n[1]=s*f,n[5]=s*c,n[9]=-a,n[2]=m*a-g,n[6]=y+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,g=u*c,y=u*f;n[0]=h-y*a,n[4]=-s*f,n[8]=g+m*a,n[1]=m+g*a,n[5]=s*c,n[9]=y-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,m=s*f,g=a*c,y=a*f;n[0]=l*c,n[4]=g*u-m,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=m*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,g=a*l,y=a*u;n[0]=l*c,n[4]=y-h*f,n[8]=g*f+m,n[1]=f,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*f+g,n[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,m=s*u,g=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+y,n[5]=s*c,n[9]=m*f-g,n[2]=g*f-m,n[6]=a*c,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m1,e,g1)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),ji.crossVectors(i,En),ji.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ji.crossVectors(i,En)),ji.normalize(),ll.crossVectors(En,ji),r[0]=ji.x,r[4]=ll.x,r[8]=En.x,r[1]=ji.y,r[5]=ll.y,r[9]=En.y,r[2]=ji.z,r[6]=ll.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],g=i[2],y=i[6],p=i[10],d=i[14],_=i[3],v=i[7],E=i[11],b=i[15],C=r[0],w=r[4],R=r[8],j=r[12],x=r[1],T=r[5],H=r[9],z=r[13],W=r[2],Z=r[6],V=r[10],ee=r[14],L=r[3],K=r[7],J=r[11],se=r[15];return o[0]=s*C+a*x+l*W+u*L,o[4]=s*w+a*T+l*Z+u*K,o[8]=s*R+a*H+l*V+u*J,o[12]=s*j+a*z+l*ee+u*se,o[1]=c*C+f*x+h*W+m*L,o[5]=c*w+f*T+h*Z+m*K,o[9]=c*R+f*H+h*V+m*J,o[13]=c*j+f*z+h*ee+m*se,o[2]=g*C+y*x+p*W+d*L,o[6]=g*w+y*T+p*Z+d*K,o[10]=g*R+y*H+p*V+d*J,o[14]=g*j+y*z+p*ee+d*se,o[3]=_*C+v*x+E*W+b*L,o[7]=_*w+v*T+E*Z+b*K,o[11]=_*R+v*H+E*V+b*J,o[15]=_*j+v*z+E*ee+b*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],g=e[3],y=e[7],p=e[11],d=e[15];return g*(+o*l*f-r*u*f-o*a*h+i*u*h+r*a*m-i*l*m)+y*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*c-o*l*c)+p*(+n*u*f-n*a*m-o*s*f+i*s*m+o*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*s*f-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],g=e[12],y=e[13],p=e[14],d=e[15],_=f*p*u-y*h*u+y*l*m-a*p*m-f*l*d+a*h*d,v=g*h*u-c*p*u-g*l*m+s*p*m+c*l*d-s*h*d,E=c*y*u-g*f*u+g*a*m-s*y*m-c*a*d+s*f*d,b=g*f*l-c*y*l-g*a*h+s*y*h+c*a*p-s*f*p,C=n*_+i*v+r*E+o*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(y*h*o-f*p*o-y*r*m+i*p*m+f*r*d-i*h*d)*w,e[2]=(a*p*o-y*l*o+y*r*u-i*p*u-a*r*d+i*l*d)*w,e[3]=(f*l*o-a*h*o-f*r*u+i*h*u+a*r*m-i*l*m)*w,e[4]=v*w,e[5]=(c*p*o-g*h*o+g*r*m-n*p*m-c*r*d+n*h*d)*w,e[6]=(g*l*o-s*p*o-g*r*u+n*p*u+s*r*d-n*l*d)*w,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*m+n*l*m)*w,e[8]=E*w,e[9]=(g*f*o-c*y*o-g*i*m+n*y*m+c*i*d-n*f*d)*w,e[10]=(s*y*o-g*a*o+g*i*u-n*y*u-s*i*d+n*a*d)*w,e[11]=(c*a*o-s*f*o-c*i*u+n*f*u+s*i*m-n*a*m)*w,e[12]=b*w,e[13]=(c*y*r-g*f*r+g*i*h-n*y*h-c*i*p+n*f*p)*w,e[14]=(g*a*r-s*y*r-g*i*l+n*y*l+s*i*p-n*a*p)*w,e[15]=(s*f*r-c*a*r+c*i*l-n*f*l-s*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,f=a+a,h=o*u,m=o*c,g=o*f,y=s*c,p=s*f,d=a*f,_=l*u,v=l*c,E=l*f,b=i.x,C=i.y,w=i.z;return r[0]=(1-(y+d))*b,r[1]=(m+E)*b,r[2]=(g-v)*b,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(h+d))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(g+v)*w,r[9]=(p-_)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=ho.set(r[0],r[1],r[2]).length();const s=ho.set(r[4],r[5],r[6]).length(),a=ho.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);const u=1/o,c=1/s,f=1/a;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Li){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,g;if(a===Li)m=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Au)m=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Li){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(s-o),h=(n+e)*u,m=(i+r)*c;let g,y;if(a===Li)g=(s+o)*f,y=-2*f;else if(a===Au)g=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ho=new N,Xn=new yt,m1=new N(0,0,0),g1=new N(1,1,1),ji=new N,ll=new N,En=new N,cg=new yt,fg=new Zr;class Bi{constructor(e=0,n=0,i=0,r=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class ly{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _1=0;const dg=new N,po=new Zr,Si=new yt,ul=new N,Ls=new N,v1=new N,y1=new Zr,hg=new N(1,0,0),pg=new N(0,1,0),mg=new N(0,0,1),gg={type:"added"},x1={type:"removed"},mo={type:"childadded",child:null},Vc={type:"childremoved",child:null};class rn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new N,n=new Bi,i=new Zr,r=new N(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Be}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ly,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return po.setFromAxisAngle(e,n),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,n){return po.setFromAxisAngle(e,n),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(pg,e)}rotateZ(e){return this.rotateOnAxis(mg,e)}translateOnAxis(e,n){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(pg,e)}translateZ(e){return this.translateOnAxis(mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ul.copy(e):ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ls,ul,this.up):Si.lookAt(ul,Ls,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),po.setFromRotationMatrix(Si),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gg),mo.child=e,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(x1),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gg),mo.child=e,this.dispatchEvent(mo),mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,v1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,y1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new N(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new N,Ei=new N,Gc=new N,Mi=new N,go=new N,_o=new N,_g=new N,Wc=new N,Xc=new N,jc=new N,Yc=new Tt,$c=new Tt,qc=new Tt;class Jn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){jn.subVectors(r,n),Ei.subVectors(i,n),Gc.subVectors(e,n);const s=jn.dot(jn),a=jn.dot(Ei),l=jn.dot(Gc),u=Ei.dot(Ei),c=Ei.dot(Gc),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,m=(u*l-a*c)*h,g=(s*c-a*l)*h;return o.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Mi.x),l.addScaledVector(s,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Yc.setScalar(0),$c.setScalar(0),qc.setScalar(0),Yc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),qc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Yc,o.x),s.addScaledVector($c,o.y),s.addScaledVector(qc,o.z),s}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Ei.subVectors(e,n),jn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;go.subVectors(r,i),_o.subVectors(o,i),Wc.subVectors(e,i);const l=go.dot(Wc),u=_o.dot(Wc);if(l<=0&&u<=0)return n.copy(i);Xc.subVectors(e,r);const c=go.dot(Xc),f=_o.dot(Xc);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(go,s);jc.subVectors(e,o);const m=go.dot(jc),g=_o.dot(jc);if(g>=0&&m<=g)return n.copy(o);const y=m*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(_o,a);const p=c*g-m*f;if(p<=0&&f-c>=0&&m-g>=0)return _g.subVectors(o,r),a=(f-c)/(f-c+(m-g)),n.copy(r).addScaledVector(_g,a);const d=1/(p+y+h);return s=y*d,a=h*d,n.copy(i).addScaledVector(go,s).addScaledVector(_o,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let Ke=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=cp(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Kc(s,o,e+1/3),this.g=Kc(s,o,e),this.b=Kc(s,o,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=qn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=uy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zo(e.r),this.g=Zo(e.g),this.b=Zo(e.b),this}copyLinearToSRGB(e){return this.r=Uc(e.r),this.g=Uc(e.g),this.b=Uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return et.fromWorkingColorSpace($t.copy(this),e),Math.round(Kt($t.r*255,0,255))*65536+Math.round(Kt($t.g*255,0,255))*256+Math.round(Kt($t.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,o=$t.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=c<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=qn){et.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(cl);const i=Qs(Yi.h,cl.h,n),r=Qs(Yi.s,cl.s,n),o=Qs(Yi.l,cl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const $t=new Ke;Ke.NAMES=uy;let S1=0;class Na extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=qo,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=hd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qo&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dd&&(i.blendSrc=this.blendSrc),this.blendDst!==hd&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zu extends Na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,fl=new Fe;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ig,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),o=Qt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ig&&(e.usage=this.usage),e}}class cy extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fy extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gt extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let E1=0;const Dn=new yt,Zc=new rn,vo=new N,Mn=new Ua,Ds=new Ua,Ot=new N;class Hn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oy(e)?fy:cy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Be().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Gt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Mn.min,Ds.min),Mn.expandByPoint(Ot),Ot.addVectors(Mn.max,Ds.max),Mn.expandByPoint(Ot)):(Mn.expandByPoint(Ds.min),Mn.expandByPoint(Ds.max))}Mn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ot.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ot.fromBufferAttribute(a,u),l&&(vo.fromBufferAttribute(e,u),Ot.add(vo)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;const u=new N,c=new N,f=new N,h=new Fe,m=new Fe,g=new Fe,y=new N,p=new N;function d(R,j,x){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,j),f.fromBufferAttribute(i,x),h.fromBufferAttribute(o,R),m.fromBufferAttribute(o,j),g.fromBufferAttribute(o,x),c.sub(u),f.sub(u),m.sub(h),g.sub(h);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(T),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(T),a[R].add(y),a[j].add(y),a[x].add(y),l[R].add(p),l[j].add(p),l[x].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,j=_.length;R<j;++R){const x=_[R],T=x.start,H=x.count;for(let z=T,W=T+H;z<W;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new N,E=new N,b=new N,C=new N;function w(R){b.fromBufferAttribute(r,R),C.copy(b);const j=a[R];v.copy(j),v.sub(b.multiplyScalar(b.dot(j))).normalize(),E.crossVectors(C,j);const T=E.dot(l[R])<0?-1:1;s.setXYZW(R,v.x,v.y,v.z,T)}for(let R=0,j=_.length;R<j;++R){const x=_[R],T=x.start,H=x.count;for(let z=T,W=T+H;z<W;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new N,o=new N,s=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,p),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*c;for(let d=0;d<c;d++)h[g++]=u[m++]}return new gi(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vg=new yt,Cr=new fp,dl=new Ku,yg=new N,hl=new N,pl=new N,ml=new N,Qc=new N,gl=new N,xg=new N,_l=new N;class An extends rn{constructor(e=new Hn,n=new Zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){gl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],f=o[l];c!==0&&(Qc.fromBufferAttribute(f,e),s?gl.addScaledVector(Qc,c):gl.addScaledVector(Qc.sub(n),c))}n.add(gl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(o),Cr.copy(e.ray).recast(e.near),!(dl.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(dl,yg)===null||Cr.origin.distanceToSquared(yg)>(e.far-e.near)**2))&&(vg.copy(o).invert(),Cr.copy(e.ray).applyMatrix4(vg),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,y=h.length;g<y;g++){const p=h[g],d=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=_,b=v;E<b;E+=3){const C=a.getX(E),w=a.getX(E+1),R=a.getX(E+2);r=vl(this,d,e,i,u,c,f,C,w,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){const _=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);r=vl(this,s,e,i,u,c,f,_,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,y=h.length;g<y;g++){const p=h[g],d=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=_,b=v;E<b;E+=3){const C=E,w=E+1,R=E+2;r=vl(this,d,e,i,u,c,f,C,w,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,d=y;p<d;p+=3){const _=p,v=p+1,E=p+2;r=vl(this,s,e,i,u,c,f,_,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function M1(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===mr,a),l===null)return null;_l.copy(a),_l.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(_l);return u<n.near||u>n.far?null:{distance:u,point:_l.clone(),object:t}}function vl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,hl),t.getVertexPosition(l,pl),t.getVertexPosition(u,ml);const c=M1(t,e,n,i,hl,pl,ml,xg);if(c){const f=new N;Jn.getBarycoord(xg,hl,pl,ml,f),r&&(c.uv=Jn.getInterpolatedAttribute(r,a,l,u,f,new Fe)),o&&(c.uv1=Jn.getInterpolatedAttribute(o,a,l,u,f,new Fe)),s&&(c.normal=Jn.getInterpolatedAttribute(s,a,l,u,f,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new N,materialIndex:0};Jn.getNormal(hl,pl,ml,h.normal),c.face=h,c.barycoord=f}return c}class Oa extends Hn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(f,2));function g(y,p,d,_,v,E,b,C,w,R,j){const x=E/w,T=b/R,H=E/2,z=b/2,W=C/2,Z=w+1,V=R+1;let ee=0,L=0;const K=new N;for(let J=0;J<V;J++){const se=J*T-z;for(let Ae=0;Ae<Z;Ae++){const He=Ae*x-H;K[y]=He*_,K[p]=se*v,K[d]=W,u.push(K.x,K.y,K.z),K[y]=0,K[p]=0,K[d]=C>0?1:-1,c.push(K.x,K.y,K.z),f.push(Ae/w),f.push(1-J/R),ee+=1}}for(let J=0;J<R;J++)for(let se=0;se<w;se++){const Ae=h+se+Z*J,He=h+se+Z*(J+1),X=h+(se+1)+Z*(J+1),ie=h+(se+1)+Z*J;l.push(Ae,He,ie),l.push(He,X,ie),L+=6}a.addGroup(m,L,j),m+=L,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=cs(t[n]);for(const r in i)e[r]=i[r]}return e}function T1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const hy={clone:cs,merge:Jt};var w1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w1,this.fragmentShader=A1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=T1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class py extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new N,Sg=new Fe,Eg=new Fe;class Nn extends py{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,Sg,Eg),n.subVectors(Eg,Sg)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yo=-90,xo=1;class C1 extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(yo,xo,e,n);r.layers=this.layers,this.add(r);const o=new Nn(yo,xo,e,n);o.layers=this.layers,this.add(o);const s=new Nn(yo,xo,e,n);s.layers=this.layers,this.add(s);const a=new Nn(yo,xo,e,n);a.layers=this.layers,this.add(a);const l=new Nn(yo,xo,e,n);l.layers=this.layers,this.add(l);const u=new Nn(yo,xo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class dp extends vn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ss,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b1 extends gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Oa(5,5,5),o=new oi({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ii});o.uniforms.tEquirect.value=n;const s=new An(r,o),a=n.minFilter;return n.minFilter===zr&&(n.minFilter=Qn),new C1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Jc=new N,R1=new N,P1=new Be;class Zi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jc.subVectors(i,n).cross(R1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||P1.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Ku,yl=new N;class my{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,o=new Zi,s=new Zi){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],g=r[9],y=r[10],p=r[11],d=r[12],_=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-o,h-u,p-m,E-d).normalize(),i[1].setComponents(l+o,h+u,p+m,E+d).normalize(),i[2].setComponents(l+s,h+c,p+g,E+_).normalize(),i[3].setComponents(l-s,h-c,p-g,E-_).normalize(),i[4].setComponents(l-a,h-f,p-y,E-v).normalize(),n===Li)i[5].setComponents(l+a,h+f,p+y,E+v).normalize();else if(n===Au)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gy(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function L1(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const y=f[m];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class fs extends Hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,m=[],g=[],y=[],p=[];for(let d=0;d<c;d++){const _=d*h-s;for(let v=0;v<u;v++){const E=v*f-o;g.push(E,-_,0),y.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+u*d,E=_+u*(d+1),b=_+1+u*(d+1),C=_+1+u*d;m.push(v,E,C),m.push(E,b,C)}this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I1=`#ifdef USE_ALPHAHASH
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
#endif`,U1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k1=`#ifdef USE_AOMAP
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
#endif`,B1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z1=`#ifdef USE_BATCHING
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
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,j1=`#ifdef USE_BUMPMAP
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ew=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tw=`#define PI 3.141592653589793
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
} // validated`,nw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iw=`vec3 transformedNormal = objectNormal;
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
#endif`,rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ow=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lw="gl_FragColor = linearToOutputTexel( gl_FragColor );",uw=`
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
}`,cw=`#ifdef USE_ENVMAP
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
#endif`,fw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dw=`#ifdef USE_ENVMAP
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
#endif`,hw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pw=`#ifdef USE_ENVMAP
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
#endif`,mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_w=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yw=`#ifdef USE_GRADIENTMAP
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
}`,xw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mw=`uniform bool receiveShadow;
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
#endif`,Tw=`#ifdef USE_ENVMAP
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
#endif`,ww=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rw=`PhysicalMaterial material;
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
#endif`,Pw=`struct PhysicalMaterial {
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
}`,Lw=`
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
#endif`,Dw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hw=`#if defined( USE_POINTS_UV )
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
#endif`,Vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yw=`#ifdef USE_MORPHTARGETS
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
#endif`,$w=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eA=`#ifdef USE_NORMALMAP
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
#endif`,tA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gA=`float getShadowMask() {
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
}`,_A=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vA=`#ifdef USE_SKINNING
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
#endif`,yA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xA=`#ifdef USE_SKINNING
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
#endif`,SA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wA=`#ifdef USE_TRANSMISSION
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
#endif`,AA=`#ifdef USE_TRANSMISSION
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
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DA=`uniform sampler2D t2D;
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
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`#include <common>
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
}`,kA=`#if DEPTH_PACKING == 3200
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
}`,BA=`#define DISTANCE
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
}`,zA=`#define DISTANCE
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
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`uniform float scale;
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
}`,WA=`uniform vec3 diffuse;
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
}`,XA=`#include <common>
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
}`,jA=`uniform vec3 diffuse;
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
}`,YA=`#define LAMBERT
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
}`,$A=`#define LAMBERT
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
}`,qA=`#define MATCAP
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
}`,KA=`#define MATCAP
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
}`,ZA=`#define NORMAL
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
}`,QA=`#define NORMAL
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
}`,JA=`#define PHONG
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
}`,eC=`#define PHONG
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
}`,tC=`#define STANDARD
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
}`,nC=`#define STANDARD
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
}`,iC=`#define TOON
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
}`,rC=`#define TOON
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
}`,oC=`uniform float size;
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
}`,sC=`uniform vec3 diffuse;
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
}`,aC=`#include <common>
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
}`,lC=`uniform vec3 color;
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
}`,uC=`uniform float rotation;
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
}`,cC=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:D1,alphahash_pars_fragment:I1,alphamap_fragment:U1,alphamap_pars_fragment:N1,alphatest_fragment:O1,alphatest_pars_fragment:F1,aomap_fragment:k1,aomap_pars_fragment:B1,batching_pars_vertex:z1,batching_vertex:H1,begin_vertex:V1,beginnormal_vertex:G1,bsdfs:W1,iridescence_fragment:X1,bumpmap_pars_fragment:j1,clipping_planes_fragment:Y1,clipping_planes_pars_fragment:$1,clipping_planes_pars_vertex:q1,clipping_planes_vertex:K1,color_fragment:Z1,color_pars_fragment:Q1,color_pars_vertex:J1,color_vertex:ew,common:tw,cube_uv_reflection_fragment:nw,defaultnormal_vertex:iw,displacementmap_pars_vertex:rw,displacementmap_vertex:ow,emissivemap_fragment:sw,emissivemap_pars_fragment:aw,colorspace_fragment:lw,colorspace_pars_fragment:uw,envmap_fragment:cw,envmap_common_pars_fragment:fw,envmap_pars_fragment:dw,envmap_pars_vertex:hw,envmap_physical_pars_fragment:Tw,envmap_vertex:pw,fog_vertex:mw,fog_pars_vertex:gw,fog_fragment:_w,fog_pars_fragment:vw,gradientmap_pars_fragment:yw,lightmap_pars_fragment:xw,lights_lambert_fragment:Sw,lights_lambert_pars_fragment:Ew,lights_pars_begin:Mw,lights_toon_fragment:ww,lights_toon_pars_fragment:Aw,lights_phong_fragment:Cw,lights_phong_pars_fragment:bw,lights_physical_fragment:Rw,lights_physical_pars_fragment:Pw,lights_fragment_begin:Lw,lights_fragment_maps:Dw,lights_fragment_end:Iw,logdepthbuf_fragment:Uw,logdepthbuf_pars_fragment:Nw,logdepthbuf_pars_vertex:Ow,logdepthbuf_vertex:Fw,map_fragment:kw,map_pars_fragment:Bw,map_particle_fragment:zw,map_particle_pars_fragment:Hw,metalnessmap_fragment:Vw,metalnessmap_pars_fragment:Gw,morphinstance_vertex:Ww,morphcolor_vertex:Xw,morphnormal_vertex:jw,morphtarget_pars_vertex:Yw,morphtarget_vertex:$w,normal_fragment_begin:qw,normal_fragment_maps:Kw,normal_pars_fragment:Zw,normal_pars_vertex:Qw,normal_vertex:Jw,normalmap_pars_fragment:eA,clearcoat_normal_fragment_begin:tA,clearcoat_normal_fragment_maps:nA,clearcoat_pars_fragment:iA,iridescence_pars_fragment:rA,opaque_fragment:oA,packing:sA,premultiplied_alpha_fragment:aA,project_vertex:lA,dithering_fragment:uA,dithering_pars_fragment:cA,roughnessmap_fragment:fA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:hA,shadowmap_pars_vertex:pA,shadowmap_vertex:mA,shadowmask_pars_fragment:gA,skinbase_vertex:_A,skinning_pars_vertex:vA,skinning_vertex:yA,skinnormal_vertex:xA,specularmap_fragment:SA,specularmap_pars_fragment:EA,tonemapping_fragment:MA,tonemapping_pars_fragment:TA,transmission_fragment:wA,transmission_pars_fragment:AA,uv_pars_fragment:CA,uv_pars_vertex:bA,uv_vertex:RA,worldpos_vertex:PA,background_vert:LA,background_frag:DA,backgroundCube_vert:IA,backgroundCube_frag:UA,cube_vert:NA,cube_frag:OA,depth_vert:FA,depth_frag:kA,distanceRGBA_vert:BA,distanceRGBA_frag:zA,equirect_vert:HA,equirect_frag:VA,linedashed_vert:GA,linedashed_frag:WA,meshbasic_vert:XA,meshbasic_frag:jA,meshlambert_vert:YA,meshlambert_frag:$A,meshmatcap_vert:qA,meshmatcap_frag:KA,meshnormal_vert:ZA,meshnormal_frag:QA,meshphong_vert:JA,meshphong_frag:eC,meshphysical_vert:tC,meshphysical_frag:nC,meshtoon_vert:iC,meshtoon_frag:rC,points_vert:oC,points_frag:sC,shadow_vert:aC,shadow_frag:lC,sprite_vert:uC,sprite_frag:cC},ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},fi={basic:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Jt([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Jt([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Jt([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Jt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Jt([ae.lights,ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};fi.physical={uniforms:Jt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const xl={r:0,b:0,g:0},Rr=new Bi,fC=new yt;function dC(t,e,n,i,r,o,s){const a=new Ke(0);let l=o===!0?0:1,u,c,f=null,h=0,m=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function y(_){let v=!1;const E=g(_);E===null?d(a,l):E&&E.isColor&&(d(E,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===$u)?(c===void 0&&(c=new An(new Oa(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:cs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Rr.copy(v.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fC.makeRotationFromEuler(Rr)),c.material.toneMapped=et.getTransfer(E.colorSpace)!==dt,(f!==E||h!==E.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new An(new fs(2,2),new oi({name:"BackgroundMaterial",uniforms:cs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=et.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function d(_,v){_.getRGB(xl,dy(t)),i.buffers.color.setClear(xl.r,xl.g,xl.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:y,addToRenderList:p}}function hC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(x,T,H,z,W){let Z=!1;const V=f(z,H,T);o!==V&&(o=V,u(o.object)),Z=m(x,z,H,W),Z&&g(x,z,H,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,E(x,T,H,z),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function c(x){return t.deleteVertexArray(x)}function f(x,T,H){const z=H.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let Z=W[T.id];Z===void 0&&(Z={},W[T.id]=Z);let V=Z[z];return V===void 0&&(V=h(l()),Z[z]=V),V}function h(x){const T=[],H=[],z=[];for(let W=0;W<n;W++)T[W]=0,H[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:H,attributeDivisors:z,object:x,attributes:{},index:null}}function m(x,T,H,z){const W=o.attributes,Z=T.attributes;let V=0;const ee=H.getAttributes();for(const L in ee)if(ee[L].location>=0){const J=W[L];let se=Z[L];if(se===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;V++}return o.attributesNum!==V||o.index!==z}function g(x,T,H,z){const W={},Z=T.attributes;let V=0;const ee=H.getAttributes();for(const L in ee)if(ee[L].location>=0){let J=Z[L];J===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),W[L]=se,V++}o.attributes=W,o.attributesNum=V,o.index=z}function y(){const x=o.newAttributes;for(let T=0,H=x.length;T<H;T++)x[T]=0}function p(x){d(x,0)}function d(x,T){const H=o.newAttributes,z=o.enabledAttributes,W=o.attributeDivisors;H[x]=1,z[x]===0&&(t.enableVertexAttribArray(x),z[x]=1),W[x]!==T&&(t.vertexAttribDivisor(x,T),W[x]=T)}function _(){const x=o.newAttributes,T=o.enabledAttributes;for(let H=0,z=T.length;H<z;H++)T[H]!==x[H]&&(t.disableVertexAttribArray(H),T[H]=0)}function v(x,T,H,z,W,Z,V){V===!0?t.vertexAttribIPointer(x,T,H,W,Z):t.vertexAttribPointer(x,T,H,z,W,Z)}function E(x,T,H,z){y();const W=z.attributes,Z=H.getAttributes(),V=T.defaultAttributeValues;for(const ee in Z){const L=Z[ee];if(L.location>=0){let K=W[ee];if(K===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const J=K.normalized,se=K.itemSize,Ae=e.get(K);if(Ae===void 0)continue;const He=Ae.buffer,X=Ae.type,ie=Ae.bytesPerElement,de=X===t.INT||X===t.UNSIGNED_INT||K.gpuType===ip;if(K.isInterleavedBufferAttribute){const ue=K.data,Ne=ue.stride,be=K.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<L.locationSize;We++)d(L.location+We,ue.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<L.locationSize;We++)p(L.location+We);t.bindBuffer(t.ARRAY_BUFFER,He);for(let We=0;We<L.locationSize;We++)v(L.location+We,se/L.locationSize,X,J,Ne*ie,(be+se/L.locationSize*We)*ie,de)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<L.locationSize;ue++)d(L.location+ue,K.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<L.locationSize;ue++)p(L.location+ue);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ue=0;ue<L.locationSize;ue++)v(L.location+ue,se/L.locationSize,X,J,se*ie,se/L.locationSize*ue*ie,de)}}else if(V!==void 0){const J=V[ee];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(L.location,J);break;case 3:t.vertexAttrib3fv(L.location,J);break;case 4:t.vertexAttrib4fv(L.location,J);break;default:t.vertexAttrib1fv(L.location,J)}}}}_()}function b(){R();for(const x in i){const T=i[x];for(const H in T){const z=T[H];for(const W in z)c(z[W].object),delete z[W];delete T[H]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const H in T){const z=T[H];for(const W in z)c(z[W].object),delete z[W];delete T[H]}delete i[x.id]}function w(x){for(const T in i){const H=i[T];if(H[x.id]===void 0)continue;const z=H[x.id];for(const W in z)c(z[W].object),delete z[W];delete H[x.id]}}function R(){j(),s=!0,o!==r&&(o=r,u(o.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:j,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function pC(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];n.update(m,i,1)}function l(u,c,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)s(u[g],c[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=c[y];for(let y=0;y<h.length;y++)n.update(g,i,h[y])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mC(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==ti&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ki&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pi&&!R)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:b,maxSamples:C}}function gC(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Zi,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||o&&!p)o?c(null):u();else{const _=o?0:i,v=_*4;let E=d.clippingState||null;l.value=E,E=c(g,h,v,m);for(let b=0;b!==v;++b)E[b]=n[b];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,g){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const d=m+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,E=m;v!==y;++v,E+=4)s.copy(f[v]).applyMatrix4(_,a),s.normal.toArray(p,E),p[E+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function _C(t){let e=new WeakMap;function n(s,a){return a===Sd?s.mapping=ss:a===Ed&&(s.mapping=as),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Sd||a===Ed)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new b1(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class _y extends py{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ko=4,Mg=[.125,.215,.35,.446,.526,.582],Nr=20,ef=new _y,Tg=new Ke;let tf=null,nf=0,rf=0,of=!1;const Ir=(1+Math.sqrt(5))/2,So=1/Ir,wg=[new N(-Ir,So,0),new N(Ir,So,0),new N(-So,0,Ir),new N(So,0,Ir),new N(0,Ir,-So),new N(0,Ir,So),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tf,nf,rf),this._renderer.xr.enabled=of,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:ms,format:ti,colorSpace:Sr,depthBuffer:!1},r=Cg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vC(o)),this._blurMaterial=yC(o,e,n)}return r}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,ef)}_sceneToCubeUV(e,n,i,r){const a=new Nn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Tg),c.toneMapping=dr,c.autoClear=!1;const m=new Zu({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new An(new Oa,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Tg),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;Sl(r,_*v,d>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new An(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ef)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=wg[(r-o-1)%wg.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new An(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Nr-1),y=o/g,p=isFinite(o)?1+Math.floor(c*y):Nr;p>Nr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nr}`);const d=[];let _=0;for(let w=0;w<Nr;++w){const R=w/y,j=Math.exp(-R*R/2);d.push(j),w===0?_+=j:w<p&&(_+=2*j)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const E=this._sizeLods[r],b=3*E*(r>v-ko?r-v+ko:0),C=4*(this._cubeSize-E);Sl(n,b,C,3*E,2*E),l.setRenderTarget(n),l.render(f,ef)}}function vC(t){const e=[],n=[],i=[];let r=t;const o=t-ko+1+Mg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-ko?l=Mg[s-t+ko-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,y=3,p=2,d=1,_=new Float32Array(y*g*m),v=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,R=C>2?0:-1,j=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(j,y*g*C),v.set(h,p*g*C);const x=[C,C,C,C,C,C];E.set(x,d*g*C)}const b=new Hn;b.setAttribute("position",new gi(_,y)),b.setAttribute("uv",new gi(v,p)),b.setAttribute("faceIndex",new gi(E,d)),e.push(b),r>ko&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cg(t,e,n){const i=new gr(t,e,n);return i.texture.mapping=$u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yC(t,e,n){const i=new Float32Array(Nr),r=new N(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hp(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function bg(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hp(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Rg(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function hp(){return`

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
	`}function xC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Sd||l===Ed,c=l===ss||l===as;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Ag(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new Ag(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function SC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$l("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EC(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let p=0,d=y.length;p<d;p++)e.remove(y[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const y=m[g];for(let p=0,d=y.length;p<d;p++)e.update(y[p],t.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,g=f.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let v=0,E=_.length;v<E;v+=3){const b=_[v+0],C=_[v+1],w=_[v+2];h.push(b,C,C,w,w,b)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,E=_.length/3-1;v<E;v+=3){const b=v+0,C=v+1,w=v+2;h.push(b,C,C,w,w,b)}}else return;const p=new(oy(h)?fy:cy)(h,1);p.version=y;const d=o.get(f);d&&e.remove(d),o.set(f,p)}function c(f){const h=o.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function MC(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,m){t.drawElements(i,m,o,h*s),n.update(m,i,1)}function u(h,m,g){g!==0&&(t.drawElementsInstanced(i,m,o,h*s,g),n.update(m,i,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,h,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];n.update(p,i,1)}function f(h,m,g,y){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)u(h[d]/s,m[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,o,h,0,y,0,g);let d=0;for(let _=0;_<g;_++)d+=m[_];for(let _=0;_<y.length;_++)n.update(d,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function TC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function wC(t,e,n){const i=new WeakMap,r=new Tt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),y===!0&&(E=2),p===!0&&(E=3);let b=a.attributes.position.count*E,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*C*4*f),R=new ay(w,b,C,f);R.type=Pi,R.needsUpdate=!0;const j=E*4;for(let T=0;T<f;T++){const H=d[T],z=_[T],W=v[T],Z=b*C*4*T;for(let V=0;V<H.count;V++){const ee=V*j;g===!0&&(r.fromBufferAttribute(H,V),w[Z+ee+0]=r.x,w[Z+ee+1]=r.y,w[Z+ee+2]=r.z,w[Z+ee+3]=0),y===!0&&(r.fromBufferAttribute(z,V),w[Z+ee+4]=r.x,w[Z+ee+5]=r.y,w[Z+ee+6]=r.z,w[Z+ee+7]=0),p===!0&&(r.fromBufferAttribute(W,V),w[Z+ee+8]=r.x,w[Z+ee+9]=r.y,w[Z+ee+10]=r.z,w[Z+ee+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Fe(b,C)},i.set(a,h),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let p=0;p<u.length;p++)g+=u[p];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function AC(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class vy extends vn{constructor(e,n,i,r,o,s,a,l,u,c=Ko){if(c!==Ko&&c!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ko&&(i=Kr),i===void 0&&c===us&&(i=ls),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const yy=new vn,Pg=new vy(1,1),xy=new ay,Sy=new h1,Ey=new dp,Lg=[],Dg=[],Ig=new Float32Array(16),Ug=new Float32Array(9),Ng=new Float32Array(4);function _s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Lg[r];if(o===void 0&&(o=new Float32Array(r),Lg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qu(t,e){let n=Dg[e];n===void 0&&(n=new Int32Array(e),Dg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function LC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Ng.set(i),t.uniformMatrix2fv(this.addr,!1,Ng),Nt(n,i)}}function DC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Ug.set(i),t.uniformMatrix3fv(this.addr,!1,Ug),Nt(n,i)}}function IC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Ig.set(i),t.uniformMatrix4fv(this.addr,!1,Ig),Nt(n,i)}}function UC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function kC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function VC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Pg.compareFunction=ry,o=Pg):o=yy,n.setTexture2D(e||o,r)}function GC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Sy,r)}function WC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ey,r)}function XC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xy,r)}function jC(t){switch(t){case 5126:return CC;case 35664:return bC;case 35665:return RC;case 35666:return PC;case 35674:return LC;case 35675:return DC;case 35676:return IC;case 5124:case 35670:return UC;case 35667:case 35671:return NC;case 35668:case 35672:return OC;case 35669:case 35673:return FC;case 5125:return kC;case 36294:return BC;case 36295:return zC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return VC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return XC}}function YC(t,e){t.uniform1fv(this.addr,e)}function $C(t,e){const n=_s(e,this.size,2);t.uniform2fv(this.addr,n)}function qC(t,e){const n=_s(e,this.size,3);t.uniform3fv(this.addr,n)}function KC(t,e){const n=_s(e,this.size,4);t.uniform4fv(this.addr,n)}function ZC(t,e){const n=_s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function QC(t,e){const n=_s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JC(t,e){const n=_s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eb(t,e){t.uniform1iv(this.addr,e)}function tb(t,e){t.uniform2iv(this.addr,e)}function nb(t,e){t.uniform3iv(this.addr,e)}function ib(t,e){t.uniform4iv(this.addr,e)}function rb(t,e){t.uniform1uiv(this.addr,e)}function ob(t,e){t.uniform2uiv(this.addr,e)}function sb(t,e){t.uniform3uiv(this.addr,e)}function ab(t,e){t.uniform4uiv(this.addr,e)}function lb(t,e,n){const i=this.cache,r=e.length,o=Qu(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||yy,o[s])}function ub(t,e,n){const i=this.cache,r=e.length,o=Qu(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Sy,o[s])}function cb(t,e,n){const i=this.cache,r=e.length,o=Qu(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Ey,o[s])}function fb(t,e,n){const i=this.cache,r=e.length,o=Qu(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||xy,o[s])}function db(t){switch(t){case 5126:return YC;case 35664:return $C;case 35665:return qC;case 35666:return KC;case 35674:return ZC;case 35675:return QC;case 35676:return JC;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return ob;case 36295:return sb;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return fb}}class hb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jC(n.type)}}class pb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=db(n.type)}}class mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const sf=/(\w+)(\])?(\[|\.)?/g;function Og(t,e){t.seq.push(e),t.map[e.id]=e}function gb(t,e,n){const i=t.name,r=i.length;for(sf.lastIndex=0;;){const o=sf.exec(i),s=sf.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Og(n,u===void 0?new hb(a,t,e):new pb(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new mb(a),Og(n,f)),n=f}}}class ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);gb(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const _b=37297;let vb=0;function yb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function xb(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===wu&&n===Tu?i="LinearDisplayP3ToLinearSRGB":e===Tu&&n===wu&&(i="LinearSRGBToLinearDisplayP3"),t){case Sr:case qu:return[i,"LinearTransferOETF"];case qn:case up:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+yb(t.getShaderSource(e),s)}else return r}function Sb(t,e){const n=xb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Eb(t,e){let n;switch(e){case ET:n="Linear";break;case MT:n="Reinhard";break;case TT:n="Cineon";break;case wT:n="ACESFilmic";break;case CT:n="AgX";break;case bT:n="Neutral";break;case AT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new N;function Mb(){et.getLuminanceCoefficients(El);const t=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function wb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ab(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function zs(t){return t!==""}function Bg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(t){return t.replace(Cb,Rb)}const bb=new Map;function Rb(t,e){let n=ke[e];if(n===void 0){const i=bb.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(n)}const Pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(t){return t.replace(Pb,Lb)}function Lb(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Vg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Db(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Ib(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ss:case as:e="ENVMAP_TYPE_CUBE";break;case $u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ub(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case as:e="ENVMAP_MODE_REFRACTION";break}return e}function Nb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case j0:e="ENVMAP_BLENDING_MULTIPLY";break;case xT:e="ENVMAP_BLENDING_MIX";break;case ST:e="ENVMAP_BLENDING_ADD";break}return e}function Ob(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Fb(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=Db(n),u=Ib(n),c=Ub(n),f=Nb(n),h=Ob(n),m=Tb(n),g=wb(o),y=r.createProgram();let p,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(zs).join(`
`),d.length>0&&(d+=`
`)):(p=[Vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),d=[Vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?ke.tonemapping_pars_fragment:"",n.toneMapping!==dr?Eb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Sb("linearToOutputTexel",n.outputColorSpace),Mb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zs).join(`
`)),s=Zd(s),s=Bg(s,n),s=zg(s,n),a=Zd(a),a=Bg(a,n),a=zg(a,n),s=Hg(s),a=Hg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+p+s,E=_+d+a,b=Fg(r,r.VERTEX_SHADER,v),C=Fg(r,r.FRAGMENT_SHADER,E);r.attachShader(y,b),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(T){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(C).trim();let Z=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,C);else{const ee=kg(r,b,"vertex"),L=kg(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+H+`
`+ee+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(V=!1);V&&(T.diagnostics={runnable:Z,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:d}})}r.deleteShader(b),r.deleteShader(C),R=new ql(r,y),j=Ab(r,y)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let j;this.getAttributes=function(){return j===void 0&&w(this),j};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,_b)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=C,this}let kb=0;class Bb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zb(e),n.set(e,i)),i}}class zb{constructor(e){this.id=kb++,this.code=e,this.usedTimes=0}}function Hb(t,e,n,i,r,o,s){const a=new ly,l=new Bb,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return u.add(x),x===0?"uv":`uv${x}`}function d(x,T,H,z,W){const Z=z.fog,V=W.geometry,ee=x.isMeshStandardMaterial?z.environment:null,L=(x.isMeshStandardMaterial?n:e).get(x.envMap||ee),K=L&&L.mapping===$u?L.image.height:null,J=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ae=se!==void 0?se.length:0;let He=0;V.morphAttributes.position!==void 0&&(He=1),V.morphAttributes.normal!==void 0&&(He=2),V.morphAttributes.color!==void 0&&(He=3);let X,ie,de,ue;if(J){const ln=fi[J];X=ln.vertexShader,ie=ln.fragmentShader}else X=x.vertexShader,ie=x.fragmentShader,l.update(x),de=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const Ne=t.getRenderTarget(),be=W.isInstancedMesh===!0,We=W.isBatchedMesh===!0,it=!!x.map,Xe=!!x.matcap,P=!!L,yn=!!x.aoMap,Ve=!!x.lightMap,$e=!!x.bumpMap,Pe=!!x.normalMap,ut=!!x.displacementMap,Ie=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,O=x.anisotropy>0,$=x.clearcoat>0,te=x.dispersion>0,Y=x.iridescence>0,Ee=x.sheen>0,le=x.transmission>0,ge=O&&!!x.anisotropyMap,qe=$&&!!x.clearcoatMap,re=$&&!!x.clearcoatNormalMap,_e=$&&!!x.clearcoatRoughnessMap,Le=Y&&!!x.iridescenceMap,De=Y&&!!x.iridescenceThicknessMap,ve=Ee&&!!x.sheenColorMap,Ge=Ee&&!!x.sheenRoughnessMap,Oe=!!x.specularMap,st=!!x.specularColorMap,D=!!x.specularIntensityMap,he=le&&!!x.transmissionMap,G=le&&!!x.thicknessMap,Q=!!x.gradientMap,ce=!!x.alphaMap,pe=x.alphaTest>0,je=!!x.alphaHash,Ct=!!x.extensions;let an=dr;x.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(an=t.toneMapping);const Ze={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:ie,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:We,batchingColor:We&&W._colorsTexture!==null,instancing:be,instancingColor:be&&W.instanceColor!==null,instancingMorph:be&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Sr,alphaToCoverage:!!x.alphaToCoverage,map:it,matcap:Xe,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:K,aoMap:yn,lightMap:Ve,bumpMap:$e,normalMap:Pe,displacementMap:m&&ut,emissiveMap:Ie,normalMapObjectSpace:Pe&&x.normalMapType===IT,normalMapTangentSpace:Pe&&x.normalMapType===DT,metalnessMap:A,roughnessMap:S,anisotropy:O,anisotropyMap:ge,clearcoat:$,clearcoatMap:qe,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:te,iridescence:Y,iridescenceMap:Le,iridescenceThicknessMap:De,sheen:Ee,sheenColorMap:ve,sheenRoughnessMap:Ge,specularMap:Oe,specularColorMap:st,specularIntensityMap:D,transmission:le,transmissionMap:he,thicknessMap:G,gradientMap:Q,opaque:x.transparent===!1&&x.blending===qo&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:pe,alphaHash:je,combine:x.combine,mapUv:it&&p(x.map.channel),aoMapUv:yn&&p(x.aoMap.channel),lightMapUv:Ve&&p(x.lightMap.channel),bumpMapUv:$e&&p(x.bumpMap.channel),normalMapUv:Pe&&p(x.normalMap.channel),displacementMapUv:ut&&p(x.displacementMap.channel),emissiveMapUv:Ie&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:ge&&p(x.anisotropyMap.channel),clearcoatMapUv:qe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(x.sheenRoughnessMap.channel),specularMapUv:Oe&&p(x.specularMap.channel),specularColorMapUv:st&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:he&&p(x.transmissionMap.channel),thicknessMapUv:G&&p(x.thicknessMap.channel),alphaMapUv:ce&&p(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pe||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(it||ce),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:an,decodeVideoTexture:it&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ci,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ct&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&x.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=u.has(1),Ze.vertexUv2s=u.has(2),Ze.vertexUv3s=u.has(3),u.clear(),Ze}function _(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)T.push(H),T.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(v(T,x),E(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const T=y[x.type];let H;if(T){const z=fi[T];H=hy.clone(z.uniforms)}else H=x.uniforms;return H}function C(x,T){let H;for(let z=0,W=c.length;z<W;z++){const Z=c[z];if(Z.cacheKey===T){H=Z,++H.usedTimes;break}}return H===void 0&&(H=new Fb(t,T,x,o),c.push(H)),H}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function R(x){l.remove(x)}function j(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:b,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:j}}function Vb(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function Gb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,m,g,y,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:y,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=p),e++,d}function a(f,h,m,g,y,p){const d=s(f,h,m,g,y,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,h,m,g,y,p){const d=s(f,h,m,g,y,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||Gb),i.length>1&&i.sort(h||Gg),r.length>1&&r.sort(h||Gg)}function c(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function Wb(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Wg,t.set(i,[s])):r>=o.length?(s=new Wg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Xb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Ke};break;case"SpotLight":n={position:new N,direction:new N,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function jb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Yb=0;function $b(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qb(t){const e=new Xb,n=jb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,o=new yt,s=new yt;function a(u){let c=0,f=0,h=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let m=0,g=0,y=0,p=0,d=0,_=0,v=0,E=0,b=0,C=0,w=0;u.sort($b);for(let j=0,x=u.length;j<x;j++){const T=u[j],H=T.color,z=T.intensity,W=T.distance,Z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=H.r*z,f+=H.g*z,h+=H.b*z;else if(T.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(T.sh.coefficients[V],z);w++}else if(T.isDirectionalLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const ee=T.shadow,L=n.get(T);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=T.shadow.matrix,_++}i.directional[m]=V,m++}else if(T.isSpotLight){const V=e.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(H).multiplyScalar(z),V.distance=W,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,i.spot[y]=V;const ee=T.shadow;if(T.map&&(i.spotLightMap[b]=T.map,b++,ee.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[y]=ee.matrix,T.castShadow){const L=n.get(T);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=Z,E++}y++}else if(T.isRectAreaLight){const V=e.get(T);V.color.copy(H).multiplyScalar(z),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=V,p++}else if(T.isPointLight){const V=e.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const ee=T.shadow,L=n.get(T);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,L.shadowCameraNear=ee.camera.near,L.shadowCameraFar=ee.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=T.shadow.matrix,v++}i.point[g]=V,g++}else if(T.isHemisphereLight){const V=e.get(T);V.skyColor.copy(T.color).multiplyScalar(z),V.groundColor.copy(T.groundColor).multiplyScalar(z),i.hemi[d]=V,d++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==p||R.hemiLength!==d||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==E||R.numSpotMaps!==b||R.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,R.directionalLength=m,R.pointLength=g,R.spotLength=y,R.rectAreaLength=p,R.hemiLength=d,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=E,R.numSpotMaps=b,R.numLightProbes=w,i.version=Yb++)}function l(u,c){let f=0,h=0,m=0,g=0,y=0;const p=c.matrixWorldInverse;for(let d=0,_=u.length;d<_;d++){const v=u[d];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(v.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),s.identity(),o.copy(v.matrixWorld),o.premultiply(p),s.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function Xg(t){const e=new qb(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Kb(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Xg(t),e.set(r,[a])):o>=s.length?(a=new Xg(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Zb extends Na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qb extends Na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eR=`uniform sampler2D shadow_pass;
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
}`;function tR(t,e,n){let i=new my;const r=new Fe,o=new Fe,s=new Tt,a=new Zb({depthPacking:LT}),l=new Qb,u={},c=n.maxTextureSize,f={[mr]:_n,[_n]:mr,[Ci]:Ci},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Jb,fragmentShader:eR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new An(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X0;let d=this.type;this.render=function(C,w,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const j=t.getRenderTarget(),x=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ii),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=d!==Ti&&this.type===Ti,W=d===Ti&&this.type!==Ti;for(let Z=0,V=C.length;Z<V;Z++){const ee=C[Z],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const K=L.getFrameExtents();if(r.multiply(K),o.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/K.x),r.x=o.x*K.x,L.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/K.y),r.y=o.y*K.y,L.mapSize.y=o.y)),L.map===null||z===!0||W===!0){const se=this.type!==Ti?{minFilter:Fn,magFilter:Fn}:{};L.map!==null&&L.map.dispose(),L.map=new gr(r.x,r.y,se),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const J=L.getViewportCount();for(let se=0;se<J;se++){const Ae=L.getViewport(se);s.set(o.x*Ae.x,o.y*Ae.y,o.x*Ae.z,o.y*Ae.w),H.viewport(s),L.updateMatrices(ee,se),i=L.getFrustum(),E(w,R,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===Ti&&_(L,R),L.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(j,x,T)};function _(C,w){const R=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,R,h,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,R,m,y,null)}function v(C,w,R,j){let x=null;const T=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=R.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=x.uuid,z=w.uuid;let W=u[H];W===void 0&&(W={},u[H]=W);let Z=W[z];Z===void 0&&(Z=x.clone(),W[z]=Z,w.addEventListener("dispose",b)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,j===Ti?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=t.properties.get(x);H.light=R}return x}function E(C,w,R,j,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const z=e.update(C),W=C.material;if(Array.isArray(W)){const Z=z.groups;for(let V=0,ee=Z.length;V<ee;V++){const L=Z[V],K=W[L.materialIndex];if(K&&K.visible){const J=v(C,K,j,x);C.onBeforeShadow(t,C,w,R,z,J,L),t.renderBufferDirect(R,null,z,J,C,L),C.onAfterShadow(t,C,w,R,z,J,L)}}}else if(W.visible){const Z=v(C,W,j,x);C.onBeforeShadow(t,C,w,R,z,Z,null),t.renderBufferDirect(R,null,z,Z,C,null),C.onAfterShadow(t,C,w,R,z,Z,null)}}const H=C.children;for(let z=0,W=H.length;z<W;z++)E(H[z],w,R,j,x)}function b(C){C.target.removeEventListener("dispose",b);for(const R in u){const j=u[R],x=C.target.uuid;x in j&&(j[x].dispose(),delete j[x])}}}const nR={[pd]:md,[gd]:yd,[_d]:xd,[os]:vd,[md]:pd,[yd]:gd,[xd]:_d,[vd]:os};function iR(t){function e(){let D=!1;const he=new Tt;let G=null;const Q=new Tt(0,0,0,0);return{setMask:function(ce){G!==ce&&!D&&(t.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){D=ce},setClear:function(ce,pe,je,Ct,an){an===!0&&(ce*=Ct,pe*=Ct,je*=Ct),he.set(ce,pe,je,Ct),Q.equals(he)===!1&&(t.clearColor(ce,pe,je,Ct),Q.copy(he))},reset:function(){D=!1,G=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,G=null,Q=null,ce=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?de(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(pe){G!==pe&&!D&&(t.depthMask(pe),G=pe)},setFunc:function(pe){if(he&&(pe=nR[pe]),Q!==pe){switch(pe){case pd:t.depthFunc(t.NEVER);break;case md:t.depthFunc(t.ALWAYS);break;case gd:t.depthFunc(t.LESS);break;case os:t.depthFunc(t.LEQUAL);break;case _d:t.depthFunc(t.EQUAL);break;case vd:t.depthFunc(t.GEQUAL);break;case yd:t.depthFunc(t.GREATER);break;case xd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ce!==pe&&(t.clearDepth(pe),ce=pe)},reset:function(){D=!1,G=null,Q=null,ce=null}}}function i(){let D=!1,he=null,G=null,Q=null,ce=null,pe=null,je=null,Ct=null,an=null;return{setTest:function(Ze){D||(Ze?de(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Ze){he!==Ze&&!D&&(t.stencilMask(Ze),he=Ze)},setFunc:function(Ze,ln,_i){(G!==Ze||Q!==ln||ce!==_i)&&(t.stencilFunc(Ze,ln,_i),G=Ze,Q=ln,ce=_i)},setOp:function(Ze,ln,_i){(pe!==Ze||je!==ln||Ct!==_i)&&(t.stencilOp(Ze,ln,_i),pe=Ze,je=ln,Ct=_i)},setLocked:function(Ze){D=Ze},setClear:function(Ze){an!==Ze&&(t.clearStencil(Ze),an=Ze)},reset:function(){D=!1,he=null,G=null,Q=null,ce=null,pe=null,je=null,Ct=null,an=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],m=null,g=!1,y=null,p=null,d=null,_=null,v=null,E=null,b=null,C=new Ke(0,0,0),w=0,R=!1,j=null,x=null,T=null,H=null,z=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=V>=2);let L=null,K={};const J=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ae=new Tt().fromArray(J),He=new Tt().fromArray(se);function X(D,he,G,Q){const ce=new Uint8Array(4),pe=t.createTexture();t.bindTexture(D,pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<G;je++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(he+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return pe}const ie={};ie[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(t.DEPTH_TEST),o.setFunc(os),Ve(!1),$e(Qm),de(t.CULL_FACE),P(Ii);function de(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ue(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ne(D,he){return c[D]!==he?(t.bindFramebuffer(D,he),c[D]=he,D===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=he),!0):!1}function be(D,he){let G=h,Q=!1;if(D){G=f.get(he),G===void 0&&(G=[],f.set(he,G));const ce=D.textures;if(G.length!==ce.length||G[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,je=ce.length;pe<je;pe++)G[pe]=t.COLOR_ATTACHMENT0+pe;G.length=ce.length,Q=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,Q=!0);Q&&t.drawBuffers(G)}function We(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const it={[Ur]:t.FUNC_ADD,[iT]:t.FUNC_SUBTRACT,[rT]:t.FUNC_REVERSE_SUBTRACT};it[oT]=t.MIN,it[sT]=t.MAX;const Xe={[aT]:t.ZERO,[lT]:t.ONE,[uT]:t.SRC_COLOR,[dd]:t.SRC_ALPHA,[mT]:t.SRC_ALPHA_SATURATE,[hT]:t.DST_COLOR,[fT]:t.DST_ALPHA,[cT]:t.ONE_MINUS_SRC_COLOR,[hd]:t.ONE_MINUS_SRC_ALPHA,[pT]:t.ONE_MINUS_DST_COLOR,[dT]:t.ONE_MINUS_DST_ALPHA,[gT]:t.CONSTANT_COLOR,[_T]:t.ONE_MINUS_CONSTANT_COLOR,[vT]:t.CONSTANT_ALPHA,[yT]:t.ONE_MINUS_CONSTANT_ALPHA};function P(D,he,G,Q,ce,pe,je,Ct,an,Ze){if(D===Ii){g===!0&&(ue(t.BLEND),g=!1);return}if(g===!1&&(de(t.BLEND),g=!0),D!==nT){if(D!==y||Ze!==R){if((p!==Ur||v!==Ur)&&(t.blendEquation(t.FUNC_ADD),p=Ur,v=Ur),Ze)switch(D){case qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFunc(t.ONE,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,_=null,E=null,b=null,C.set(0,0,0),w=0,y=D,R=Ze}return}ce=ce||he,pe=pe||G,je=je||Q,(he!==p||ce!==v)&&(t.blendEquationSeparate(it[he],it[ce]),p=he,v=ce),(G!==d||Q!==_||pe!==E||je!==b)&&(t.blendFuncSeparate(Xe[G],Xe[Q],Xe[pe],Xe[je]),d=G,_=Q,E=pe,b=je),(Ct.equals(C)===!1||an!==w)&&(t.blendColor(Ct.r,Ct.g,Ct.b,an),C.copy(Ct),w=an),y=D,R=!1}function yn(D,he){D.side===Ci?ue(t.CULL_FACE):de(t.CULL_FACE);let G=D.side===_n;he&&(G=!G),Ve(G),D.blending===qo&&D.transparent===!1?P(Ii):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Q=D.stencilWrite;s.setTest(Q),Q&&(s.setMask(D.stencilWriteMask),s.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),s.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){j!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),j=D)}function $e(D){D!==JM?(de(t.CULL_FACE),D!==x&&(D===Qm?t.cullFace(t.BACK):D===eT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),x=D}function Pe(D){D!==T&&(Z&&t.lineWidth(D),T=D)}function ut(D,he,G){D?(de(t.POLYGON_OFFSET_FILL),(H!==he||z!==G)&&(t.polygonOffset(he,G),H=he,z=G)):ue(t.POLYGON_OFFSET_FILL)}function Ie(D){D?de(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function A(D){D===void 0&&(D=t.TEXTURE0+W-1),L!==D&&(t.activeTexture(D),L=D)}function S(D,he,G){G===void 0&&(L===null?G=t.TEXTURE0+W-1:G=L);let Q=K[G];Q===void 0&&(Q={type:void 0,texture:void 0},K[G]=Q),(Q.type!==D||Q.texture!==he)&&(L!==G&&(t.activeTexture(G),L=G),t.bindTexture(D,he||ie[D]),Q.type=D,Q.texture=he)}function O(){const D=K[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Ae.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ae.copy(D))}function ve(D){He.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function Ge(D,he){let G=l.get(he);G===void 0&&(G=new WeakMap,l.set(he,G));let Q=G.get(D);Q===void 0&&(Q=t.getUniformBlockIndex(he,D.name),G.set(D,Q))}function Oe(D,he){const Q=l.get(he).get(D);a.get(he)!==Q&&(t.uniformBlockBinding(he,Q,D.__bindingPointIndex),a.set(he,Q))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,K={},c={},f=new WeakMap,h=[],m=null,g=!1,y=null,p=null,d=null,_=null,v=null,E=null,b=null,C=new Ke(0,0,0),w=0,R=!1,j=null,x=null,T=null,H=null,z=null,Ae.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:de,disable:ue,bindFramebuffer:Ne,drawBuffers:be,useProgram:We,setBlending:P,setMaterial:yn,setFlipSided:Ve,setCullFace:$e,setLineWidth:Pe,setPolygonOffset:ut,setScissorTest:Ie,activeTexture:A,bindTexture:S,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:_e,texImage3D:Le,updateUBOMapping:Ge,uniformBlockBinding:Oe,texStorage2D:qe,texStorage3D:re,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:De,viewport:ve,reset:st}}function jg(t,e,n,i){const r=rR(i);switch(n){case Z0:return t*e;case J0:return t*e;case ey:return t*e*2;case ty:return t*e/r.components*r.byteLength;case sp:return t*e/r.components*r.byteLength;case ny:return t*e*2/r.components*r.byteLength;case ap:return t*e*2/r.components*r.byteLength;case Q0:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case lp:return t*e*4/r.components*r.byteLength;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:case bd:return Math.max(t,16)*Math.max(e,8)/4;case wd:case Cd:return Math.max(t,8)*Math.max(e,8)/2;case Rd:case Pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Yl:case jd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case iy:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qd:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rR(t){switch(t){case ki:case $0:return{byteLength:1,components:1};case Ea:case q0:case ms:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Kr:case ip:case Pi:return{byteLength:4,components:1};case K0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function oR(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,c=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):Ta("canvas")}function y(A,S,O){let $=1;const te=Ie(A);if((te.width>O||te.height>O)&&($=O/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor($*te.width),Ee=Math.floor($*te.height);f===void 0&&(f=g(Y,Ee));const le=S?g(Y,Ee):f;return le.width=Y,le.height=Ee,le.getContext("2d").drawImage(A,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+Ee+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Fn&&A.minFilter!==Qn}function d(A){t.generateMipmap(A)}function _(A,S,O,$,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===t.RED&&(O===t.FLOAT&&(Y=t.R32F),O===t.HALF_FLOAT&&(Y=t.R16F),O===t.UNSIGNED_BYTE&&(Y=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.R8UI),O===t.UNSIGNED_SHORT&&(Y=t.R16UI),O===t.UNSIGNED_INT&&(Y=t.R32UI),O===t.BYTE&&(Y=t.R8I),O===t.SHORT&&(Y=t.R16I),O===t.INT&&(Y=t.R32I)),S===t.RG&&(O===t.FLOAT&&(Y=t.RG32F),O===t.HALF_FLOAT&&(Y=t.RG16F),O===t.UNSIGNED_BYTE&&(Y=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RG8UI),O===t.UNSIGNED_SHORT&&(Y=t.RG16UI),O===t.UNSIGNED_INT&&(Y=t.RG32UI),O===t.BYTE&&(Y=t.RG8I),O===t.SHORT&&(Y=t.RG16I),O===t.INT&&(Y=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),O===t.UNSIGNED_INT&&(Y=t.RGB32UI),O===t.BYTE&&(Y=t.RGB8I),O===t.SHORT&&(Y=t.RGB16I),O===t.INT&&(Y=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),O===t.UNSIGNED_INT&&(Y=t.RGBA32UI),O===t.BYTE&&(Y=t.RGBA8I),O===t.SHORT&&(Y=t.RGBA16I),O===t.INT&&(Y=t.RGBA32I)),S===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),S===t.RGBA){const Ee=te?Mu:et.getTransfer($);O===t.FLOAT&&(Y=t.RGBA32F),O===t.HALF_FLOAT&&(Y=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Y=Ee===dt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(A,S){let O;return A?S===null||S===Kr||S===ls?O=t.DEPTH24_STENCIL8:S===Pi?O=t.DEPTH32F_STENCIL8:S===Ea&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kr||S===ls?O=t.DEPTH_COMPONENT24:S===Pi?O=t.DEPTH_COMPONENT32F:S===Ea&&(O=t.DEPTH_COMPONENT16),O}function E(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Fn&&A.minFilter!==Qn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){const S=A.target;S.removeEventListener("dispose",b),w(S),S.isVideoTexture&&c.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),j(S)}function w(A){const S=i.get(A);if(S.__webglInit===void 0)return;const O=A.source,$=h.get(O);if($){const te=$[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(A),Object.keys($).length===0&&h.delete(O)}i.remove(A)}function R(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const O=A.source,$=h.get(O);delete $[S.__cacheKey],s.memory.textures--}function j(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let te=0;te<S.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[$][te]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=A.textures;for(let $=0,te=O.length;$<te;$++){const Y=i.get(O[$]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),s.memory.textures--),i.remove(O[$])}i.remove(A)}let x=0;function T(){x=0}function H(){const A=x;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),x+=1,A}function z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){const O=i.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(O,A,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function Z(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){He(O,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function V(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){He(O,A,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function ee(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){X(O,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const L={[Md]:t.REPEAT,[Br]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},K={[Fn]:t.NEAREST,[RT]:t.NEAREST_MIPMAP_NEAREST,[nl]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[Dc]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},J={[UT]:t.NEVER,[zT]:t.ALWAYS,[NT]:t.LESS,[ry]:t.LEQUAL,[OT]:t.EQUAL,[BT]:t.GEQUAL,[FT]:t.GREATER,[kT]:t.NOTEQUAL};function se(A,S){if(S.type===Pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qn||S.magFilter===Dc||S.magFilter===nl||S.magFilter===zr||S.minFilter===Qn||S.minFilter===Dc||S.minFilter===nl||S.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,L[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,L[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,L[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,K[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fn||S.minFilter!==nl&&S.minFilter!==zr||S.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ae(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let te=h.get($);te===void 0&&(te={},h.set($,te));const Y=z(S);if(Y!==A.__cacheKey){te[Y]===void 0&&(te[Y]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,O=!0),te[Y].usedTimes++;const Ee=te[A.__cacheKey];Ee!==void 0&&(te[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&R(S)),A.__cacheKey=Y,A.__webglTexture=te[Y].texture}return O}function He(A,S,O){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);const te=Ae(A,S),Y=S.source;n.bindTexture($,A.__webglTexture,t.TEXTURE0+O);const Ee=i.get(Y);if(Y.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const le=et.getPrimaries(et.workingColorSpace),ge=S.colorSpace===er?null:et.getPrimaries(S.colorSpace),qe=S.colorSpace===er||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let re=y(S.image,!1,r.maxTextureSize);re=ut(S,re);const _e=o.convert(S.format,S.colorSpace),Le=o.convert(S.type);let De=_(S.internalFormat,_e,Le,S.colorSpace,S.isVideoTexture);se($,S);let ve;const Ge=S.mipmaps,Oe=S.isVideoTexture!==!0,st=Ee.__version===void 0||te===!0,D=Y.dataReady,he=E(S,re);if(S.isDepthTexture)De=v(S.format===us,S.type),st&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,De,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,_e,Le,null));else if(S.isDataTexture)if(Ge.length>0){Oe&&st&&n.texStorage2D(t.TEXTURE_2D,he,De,Ge[0].width,Ge[0].height);for(let G=0,Q=Ge.length;G<Q;G++)ve=Ge[G],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,_e,Le,ve.data):n.texImage2D(t.TEXTURE_2D,G,De,ve.width,ve.height,0,_e,Le,ve.data);S.generateMipmaps=!1}else Oe?(st&&n.texStorage2D(t.TEXTURE_2D,he,De,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,_e,Le,re.data)):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,_e,Le,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,De,Ge[0].width,Ge[0].height,re.depth);for(let G=0,Q=Ge.length;G<Q;G++)if(ve=Ge[G],S.format!==ti)if(_e!==null)if(Oe){if(D)if(S.layerUpdates.size>0){const ce=jg(ve.width,ve.height,S.format,S.type);for(const pe of S.layerUpdates){const je=ve.data.subarray(pe*ce/ve.data.BYTES_PER_ELEMENT,(pe+1)*ce/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,pe,ve.width,ve.height,1,_e,je,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,re.depth,_e,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,De,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ve.width,ve.height,re.depth,_e,Le,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,De,ve.width,ve.height,re.depth,0,_e,Le,ve.data)}else{Oe&&st&&n.texStorage2D(t.TEXTURE_2D,he,De,Ge[0].width,Ge[0].height);for(let G=0,Q=Ge.length;G<Q;G++)ve=Ge[G],S.format!==ti?_e!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,_e,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,G,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ve.width,ve.height,_e,Le,ve.data):n.texImage2D(t.TEXTURE_2D,G,De,ve.width,ve.height,0,_e,Le,ve.data)}else if(S.isDataArrayTexture)if(Oe){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,De,re.width,re.height,re.depth),D)if(S.layerUpdates.size>0){const G=jg(re.width,re.height,S.format,S.type);for(const Q of S.layerUpdates){const ce=re.data.subarray(Q*G/re.data.BYTES_PER_ELEMENT,(Q+1)*G/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,_e,Le,ce)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Le,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,_e,Le,re.data);else if(S.isData3DTexture)Oe?(st&&n.texStorage3D(t.TEXTURE_3D,he,De,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Le,re.data)):n.texImage3D(t.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,_e,Le,re.data);else if(S.isFramebufferTexture){if(st)if(Oe)n.texStorage2D(t.TEXTURE_2D,he,De,re.width,re.height);else{let G=re.width,Q=re.height;for(let ce=0;ce<he;ce++)n.texImage2D(t.TEXTURE_2D,ce,De,G,Q,0,_e,Le,null),G>>=1,Q>>=1}}else if(Ge.length>0){if(Oe&&st){const G=Ie(Ge[0]);n.texStorage2D(t.TEXTURE_2D,he,De,G.width,G.height)}for(let G=0,Q=Ge.length;G<Q;G++)ve=Ge[G],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,_e,Le,ve):n.texImage2D(t.TEXTURE_2D,G,De,_e,Le,ve);S.generateMipmaps=!1}else if(Oe){if(st){const G=Ie(re);n.texStorage2D(t.TEXTURE_2D,he,De,G.width,G.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Le,re)}else n.texImage2D(t.TEXTURE_2D,0,De,_e,Le,re);p(S)&&d($),Ee.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function X(A,S,O){if(S.image.length!==6)return;const $=Ae(A,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const Y=i.get(te);if(te.version!==Y.__version||$===!0){n.activeTexture(t.TEXTURE0+O);const Ee=et.getPrimaries(et.workingColorSpace),le=S.colorSpace===er?null:et.getPrimaries(S.colorSpace),ge=S.colorSpace===er||Ee===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let Q=0;Q<6;Q++)!qe&&!re?_e[Q]=y(S.image[Q],!0,r.maxCubemapSize):_e[Q]=re?S.image[Q].image:S.image[Q],_e[Q]=ut(S,_e[Q]);const Le=_e[0],De=o.convert(S.format,S.colorSpace),ve=o.convert(S.type),Ge=_(S.internalFormat,De,ve,S.colorSpace),Oe=S.isVideoTexture!==!0,st=Y.__version===void 0||$===!0,D=te.dataReady;let he=E(S,Le);se(t.TEXTURE_CUBE_MAP,S);let G;if(qe){Oe&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ge,Le.width,Le.height);for(let Q=0;Q<6;Q++){G=_e[Q].mipmaps;for(let ce=0;ce<G.length;ce++){const pe=G[ce];S.format!==ti?De!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,pe.width,pe.height,De,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,Ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,pe.width,pe.height,De,ve,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,Ge,pe.width,pe.height,0,De,ve,pe.data)}}}else{if(G=S.mipmaps,Oe&&st){G.length>0&&he++;const Q=Ie(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_e[Q].width,_e[Q].height,De,ve,_e[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,_e[Q].width,_e[Q].height,0,De,ve,_e[Q].data);for(let ce=0;ce<G.length;ce++){const je=G[ce].image[Q].image;Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,je.width,je.height,De,ve,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,Ge,je.width,je.height,0,De,ve,je.data)}}else{Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,ve,_e[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,De,ve,_e[Q]);for(let ce=0;ce<G.length;ce++){const pe=G[ce];Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,De,ve,pe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,Ge,De,ve,pe.image[Q])}}}p(S)&&d(t.TEXTURE_CUBE_MAP),Y.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ie(A,S,O,$,te,Y){const Ee=o.convert(O.format,O.colorSpace),le=o.convert(O.type),ge=_(O.internalFormat,Ee,le,O.colorSpace);if(!i.get(S).__hasExternalTextures){const re=Math.max(1,S.width>>Y),_e=Math.max(1,S.height>>Y);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Y,ge,re,_e,S.depth,0,Ee,le,null):n.texImage2D(te,Y,ge,re,_e,0,Ee,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,i.get(O).__webglTexture,0,Ve(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,i.get(O).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(A,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,te=$&&$.isDepthTexture?$.type:null,Y=v(S.stencilBuffer,te),Ee=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Ve(S);$e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Y,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Y,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Y,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,A)}else{const $=S.textures;for(let te=0;te<$.length;te++){const Y=$[te],Ee=o.convert(Y.format,Y.colorSpace),le=o.convert(Y.type),ge=_(Y.internalFormat,Ee,le,Y.colorSpace),qe=Ve(S);O&&$e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,ge,S.width,S.height):$e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const $=i.get(S.depthTexture).__webglTexture,te=Ve(S);if(S.depthTexture.format===Ko)$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(S.depthTexture.format===us)$e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const S=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),de(S.__webglDepthbuffer[$],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),de(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,S,O){const $=i.get(A);S!==void 0&&ie($.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ne(A)}function We(A){const S=A.texture,O=i.get(A),$=i.get(S);A.addEventListener("dispose",C);const te=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,s.memory.textures++),Y){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let ge=0;ge<S.mipmaps.length;ge++)O.__webglFramebuffer[le][ge]=t.createFramebuffer()}else O.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)O.__webglFramebuffer[le]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let le=0,ge=te.length;le<ge;le++){const qe=i.get(te[le]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&$e(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const ge=te[le];O.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const qe=o.convert(ge.format,ge.colorSpace),re=o.convert(ge.type),_e=_(ge.internalFormat,qe,re,ge.colorSpace,A.isXRRenderTarget===!0),Le=Ve(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,_e,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,O.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),de(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),se(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ie(O.__webglFramebuffer[le][ge],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else ie(O.__webglFramebuffer[le],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let le=0,ge=te.length;le<ge;le++){const qe=te[le],re=i.get(qe);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),se(t.TEXTURE_2D,qe),ie(O.__webglFramebuffer,A,qe,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),p(qe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,$.__webglTexture),se(le,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ie(O.__webglFramebuffer[ge],A,S,t.COLOR_ATTACHMENT0,le,ge);else ie(O.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,le,0);p(S)&&d(le),n.unbindTexture()}A.depthBuffer&&Ne(A)}function it(A){const S=A.textures;for(let O=0,$=S.length;O<$;O++){const te=S[O];if(p(te)){const Y=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(te).__webglTexture;n.bindTexture(Y,Ee),d(Y),n.unbindTexture()}}}const Xe=[],P=[];function yn(A){if(A.samples>0){if($e(A)===!1){const S=A.textures,O=A.width,$=A.height;let te=t.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(A),le=S.length>1;if(le)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const qe=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,O,$,0,0,O,$,te,t.NEAREST),l===!0&&(Xe.length=0,P.length=0,Xe.push(t.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Xe.push(Y),P.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const qe=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function $e(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(A){const S=s.render.frame;c.get(A)!==S&&(c.set(A,S),A.update())}function ut(A,S){const O=A.colorSpace,$=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Sr&&O!==er&&(et.getTransfer(O)===dt?($!==ti||te!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=T,this.setTexture2D=W,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=be,this.setupRenderTarget=We,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=$e}function sR(t,e){function n(i,r=er){let o;const s=et.getTransfer(r);if(i===ki)return t.UNSIGNED_BYTE;if(i===rp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===op)return t.UNSIGNED_SHORT_5_5_5_1;if(i===K0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$0)return t.BYTE;if(i===q0)return t.SHORT;if(i===Ea)return t.UNSIGNED_SHORT;if(i===ip)return t.INT;if(i===Kr)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===ms)return t.HALF_FLOAT;if(i===Z0)return t.ALPHA;if(i===Q0)return t.RGB;if(i===ti)return t.RGBA;if(i===J0)return t.LUMINANCE;if(i===ey)return t.LUMINANCE_ALPHA;if(i===Ko)return t.DEPTH_COMPONENT;if(i===us)return t.DEPTH_STENCIL;if(i===ty)return t.RED;if(i===sp)return t.RED_INTEGER;if(i===ny)return t.RG;if(i===ap)return t.RG_INTEGER;if(i===lp)return t.RGBA_INTEGER;if(i===Gl||i===Wl||i===Xl||i===jl)if(s===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Gl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Gl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wd||i===Ad||i===Cd||i===bd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===wd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ad)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Pd||i===Ld)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Rd||i===Pd)return s===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ld)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dd||i===Id||i===Ud||i===Nd||i===Od||i===Fd||i===kd||i===Bd||i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===Xd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Dd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Id)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ud)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Od)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xd)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===jd||i===Yd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Yl)return s===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iy||i===$d||i===qd||i===Kd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Yl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===$d)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class aR extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ml extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lR={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),d=this._getHandJoint(u,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&h>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ml;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const uR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cR=`
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

}`;class fR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new vn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new oi({vertexShader:uR,fragmentShader:cR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dR extends no{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,g=null;const y=new fR,p=n.getContextAttributes();let d=null,_=null;const v=[],E=[],b=new Fe;let C=null;const w=new Nn;w.layers.enable(1),w.viewport=new Tt;const R=new Nn;R.layers.enable(2),R.viewport=new Tt;const j=[w,R],x=new aR;x.layers.enable(1),x.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=v[X];return ie===void 0&&(ie=new af,v[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=v[X];return ie===void 0&&(ie=new af,v[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=v[X];return ie===void 0&&(ie=new af,v[X]=ie),ie.getHandSpace()};function z(X){const ie=E.indexOf(X.inputSource);if(ie===-1)return;const de=v[ie];de!==void 0&&(de.update(X.inputSource,X.frame,u||s),de.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<v.length;X++){const ie=E[X];ie!==null&&(E[X]=null,v[X].disconnect(ie))}T=null,H=null,y.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new gr(m.framebufferWidth,m.framebufferHeight,{format:ti,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,de=null,ue=null;p.depth&&(ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=p.stencil?us:Ko,de=p.stencil?ls:Kr);const Ne={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new gr(h.textureWidth,h.textureHeight,{format:ti,type:ki,depthTexture:new vy(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(X){for(let ie=0;ie<X.removed.length;ie++){const de=X.removed[ie],ue=E.indexOf(de);ue>=0&&(E[ue]=null,v[ue].disconnect(de))}for(let ie=0;ie<X.added.length;ie++){const de=X.added[ie];let ue=E.indexOf(de);if(ue===-1){for(let be=0;be<v.length;be++)if(be>=E.length){E.push(de),ue=be;break}else if(E[be]===null){E[be]=de,ue=be;break}if(ue===-1)break}const Ne=v[ue];Ne&&Ne.connect(de)}}const V=new N,ee=new N;function L(X,ie,de){V.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(de.matrixWorld);const ue=V.distanceTo(ee),Ne=ie.projectionMatrix.elements,be=de.projectionMatrix.elements,We=Ne[14]/(Ne[10]-1),it=Ne[14]/(Ne[10]+1),Xe=(Ne[9]+1)/Ne[5],P=(Ne[9]-1)/Ne[5],yn=(Ne[8]-1)/Ne[0],Ve=(be[8]+1)/be[0],$e=We*yn,Pe=We*Ve,ut=ue/(-yn+Ve),Ie=ut*-yn;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(ut),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ne[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const A=We+ut,S=it+ut,O=$e-Ie,$=Pe+(ue-Ie),te=Xe*it/S*A,Y=P*it/S*A;X.projectionMatrix.makePerspective(O,$,te,Y,A,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ie=X.near,de=X.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(de=y.depthFar)),x.near=R.near=w.near=ie,x.far=R.far=w.far=de,(T!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,H=x.far);const ue=X.parent,Ne=x.cameras;K(x,ue);for(let be=0;be<Ne.length;be++)K(Ne[be],ue);Ne.length===2?L(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),J(X,x,ue)};function J(X,ie,de){de===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ma*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let se=null;function Ae(X,ie){if(c=ie.getViewerPose(u||s),g=ie,c!==null){const de=c.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ue=!1;de.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let be=0;be<de.length;be++){const We=de[be];let it=null;if(m!==null)it=m.getViewport(We);else{const P=f.getViewSubImage(h,We);it=P.viewport,be===0&&(e.setRenderTargetTextures(_,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let Xe=j[be];Xe===void 0&&(Xe=new Nn,Xe.layers.enable(be),Xe.viewport=new Tt,j[be]=Xe),Xe.matrix.fromArray(We.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(We.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(it.x,it.y,it.width,it.height),be===0&&(x.matrix.copy(Xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(Xe)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const be=f.getDepthInformation(de[0]);be&&be.isValid&&be.texture&&y.init(e,be,r.renderState)}}for(let de=0;de<v.length;de++){const ue=E[de],Ne=v[de];ue!==null&&Ne!==void 0&&Ne.update(ue,ie,u||s)}se&&se(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const He=new gy;He.setAnimationLoop(Ae),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const Pr=new Bi,hR=new yt;function pR(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,dy(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,_,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(p,d):d.isMeshToonMaterial?(o(p,d),f(p,d)):d.isMeshPhongMaterial?(o(p,d),c(p,d)):d.isMeshStandardMaterial?(o(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(o(p,d),g(p,d)):d.isMeshDepthMaterial?o(p,d):d.isMeshDistanceMaterial?(o(p,d),y(p,d)):d.isMeshNormalMaterial?o(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,_,v):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===_n&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===_n&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,E=_.envMapRotation;v&&(p.envMap.value=v,Pr.copy(E),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),p.envMapRotation.value.setFromMatrix4(hR.makeRotationFromEuler(Pr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,_,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=v*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const _=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mR(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const E=v.program;i.uniformBlockBinding(_,E)}function u(_,v){let E=r[_.id];E===void 0&&(g(_),E=c(_),r[_.id]=E,_.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(_,b);const C=e.render.frame;o[_.id]!==C&&(h(_),o[_.id]=C)}function c(_){const v=f();_.__bindingPointIndex=v;const E=t.createBuffer(),b=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],E=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,w=E.length;C<w;C++){const R=Array.isArray(E[C])?E[C]:[E[C]];for(let j=0,x=R.length;j<x;j++){const T=R[j];if(m(T,C,j,b)===!0){const H=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let W=0;for(let Z=0;Z<z.length;Z++){const V=z[Z],ee=y(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,H+W,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,E,b){const C=_.value,w=v+"_"+E;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{const R=b[w];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return b[w]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(_){const v=_.uniforms;let E=0;const b=16;for(let w=0,R=v.length;w<R;w++){const j=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,T=j.length;x<T;x++){const H=j[x],z=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Z=z.length;W<Z;W++){const V=z[W],ee=y(V),L=E%b,K=L%ee.boundary,J=L+K;E+=K,J!==0&&b-J<ee.storage&&(E+=b-J),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=ee.storage}}}const C=E%b;return C>0&&(E+=b-C),_.__size=E,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const E=s.indexOf(v.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:d}}class gR{constructor(e={}){const{canvas:n=r1(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const m=new Uint32Array(4),g=new Int32Array(4);let y=null,p=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=dr,this.toneMappingExposure=1;const v=this;let E=!1,b=0,C=0,w=null,R=-1,j=null;const x=new Tt,T=new Tt;let H=null;const z=new Ke(0);let W=0,Z=n.width,V=n.height,ee=1,L=null,K=null;const J=new Tt(0,0,Z,V),se=new Tt(0,0,Z,V);let Ae=!1;const He=new my;let X=!1,ie=!1;const de=new yt,ue=new yt,Ne=new N,be=new Tt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Xe(){return w===null?ee:1}let P=i;function yn(M,I){return n.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",pe,!1),P===null){const I="webgl2";if(P=yn(I,M),P===null)throw yn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ve,$e,Pe,ut,Ie,A,S,O,$,te,Y,Ee,le,ge,qe,re,_e,Le,De,ve,Ge,Oe,st,D;function he(){Ve=new SC(P),Ve.init(),Oe=new sR(P,Ve),$e=new mC(P,Ve,e,Oe),Pe=new iR(P),$e.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),ut=new TC(P),Ie=new Vb,A=new oR(P,Ve,Pe,Ie,$e,Oe,ut),S=new _C(v),O=new xC(v),$=new L1(P),st=new hC(P,$),te=new EC(P,$,ut,st),Y=new AC(P,te,$,ut),De=new wC(P,$e,A),re=new gC(Ie),Ee=new Hb(v,S,O,Ve,$e,st,re),le=new pR(v,Ie),ge=new Wb,qe=new Kb(Ve),Le=new dC(v,S,O,Pe,Y,h,l),_e=new tR(v,Y,$e),D=new mR(P,ut,$e,Pe),ve=new pC(P,Ve,ut),Ge=new MC(P,Ve,ut),ut.programs=Ee.programs,v.capabilities=$e,v.extensions=Ve,v.properties=Ie,v.renderLists=ge,v.shadowMap=_e,v.state=Pe,v.info=ut}he();const G=new dR(v,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(Z,V,!1))},this.getSize=function(M){return M.set(Z,V)},this.setSize=function(M,I,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,V=I,n.width=Math.floor(M*ee),n.height=Math.floor(I*ee),F===!0&&(n.style.width=M+"px",n.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(Z*ee,V*ee).floor()},this.setDrawingBufferSize=function(M,I,F){Z=M,V=I,ee=F,n.width=Math.floor(M*F),n.height=Math.floor(I*F),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,I,F,B){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,I,F,B),Pe.viewport(x.copy(J).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(se)},this.setScissor=function(M,I,F,B){M.isVector4?se.set(M.x,M.y,M.z,M.w):se.set(M,I,F,B),Pe.scissor(T.copy(se).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(M){Pe.setScissorTest(Ae=M)},this.setOpaqueSort=function(M){L=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(M=!0,I=!0,F=!0){let B=0;if(M){let U=!1;if(w!==null){const oe=w.texture.format;U=oe===lp||oe===ap||oe===sp}if(U){const oe=w.texture.type,fe=oe===ki||oe===Kr||oe===Ea||oe===ls||oe===rp||oe===op,ye=Le.getClearColor(),Se=Le.getClearAlpha(),Ce=ye.r,Re=ye.g,Me=ye.b;fe?(m[0]=Ce,m[1]=Re,m[2]=Me,m[3]=Se,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Ce,g[1]=Re,g[2]=Me,g[3]=Se,P.clearBufferiv(P.COLOR,0,g))}else B|=P.COLOR_BUFFER_BIT}I&&(B|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),qe.dispose(),Ie.dispose(),S.dispose(),O.dispose(),Y.dispose(),st.dispose(),D.dispose(),Ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",Ep),G.removeEventListener("sessionend",Mp),Tr.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=ut.autoReset,I=_e.enabled,F=_e.autoUpdate,B=_e.needsUpdate,U=_e.type;he(),ut.autoReset=M,_e.enabled=I,_e.autoUpdate=F,_e.needsUpdate=B,_e.type=U}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function je(M){const I=M.target;I.removeEventListener("dispose",je),Ct(I)}function Ct(M){an(M),Ie.remove(M)}function an(M){const I=Ie.get(M).programs;I!==void 0&&(I.forEach(function(F){Ee.releaseProgram(F)}),M.isShaderMaterial&&Ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,F,B,U,oe){I===null&&(I=We);const fe=U.isMesh&&U.matrixWorld.determinant()<0,ye=Uy(M,I,F,B,U);Pe.setMaterial(B,fe);let Se=F.index,Ce=1;if(B.wireframe===!0){if(Se=te.getWireframeAttribute(F),Se===void 0)return;Ce=2}const Re=F.drawRange,Me=F.attributes.position;let tt=Re.start*Ce,ct=(Re.start+Re.count)*Ce;oe!==null&&(tt=Math.max(tt,oe.start*Ce),ct=Math.min(ct,(oe.start+oe.count)*Ce)),Se!==null?(tt=Math.max(tt,0),ct=Math.min(ct,Se.count)):Me!=null&&(tt=Math.max(tt,0),ct=Math.min(ct,Me.count));const St=ct-tt;if(St<0||St===1/0)return;st.setup(U,B,ye,F,Se);let xn,Qe=ve;if(Se!==null&&(xn=$.get(Se),Qe=Ge,Qe.setIndex(xn)),U.isMesh)B.wireframe===!0?(Pe.setLineWidth(B.wireframeLinewidth*Xe()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(U.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*Xe()),U.isLineSegments?Qe.setMode(P.LINES):U.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else U.isPoints?Qe.setMode(P.POINTS):U.isSprite&&Qe.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,zt=U._multiDrawCounts,Je=U._multiDrawCount,Vn=Se?$.get(Se).bytesPerElement:1,ro=Ie.get(B).currentProgram.getUniforms();for(let Sn=0;Sn<Je;Sn++)ro.setValue(P,"_gl_DrawID",Sn),Qe.render(Te[Sn]/Vn,zt[Sn])}else if(U.isInstancedMesh)Qe.renderInstances(tt,St,U.count);else if(F.isInstancedBufferGeometry){const Te=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,zt=Math.min(F.instanceCount,Te);Qe.renderInstances(tt,St,zt)}else Qe.render(tt,St)};function Ze(M,I,F){M.transparent===!0&&M.side===Ci&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,ka(M,I,F),M.side=mr,M.needsUpdate=!0,ka(M,I,F),M.side=Ci):ka(M,I,F)}this.compile=function(M,I,F=null){F===null&&(F=M),p=qe.get(F),p.init(I),_.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==F&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const B=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const ye=oe[fe];Ze(ye,F,U),B.add(ye)}else Ze(oe,F,U),B.add(oe)}),_.pop(),p=null,B},this.compileAsync=function(M,I,F=null){const B=this.compile(M,I,F);return new Promise(U=>{function oe(){if(B.forEach(function(fe){Ie.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){U(M);return}setTimeout(oe,10)}Ve.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ln=null;function _i(M){ln&&ln(M)}function Ep(){Tr.stop()}function Mp(){Tr.start()}const Tr=new gy;Tr.setAnimationLoop(_i),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(M){ln=M,G.setAnimationLoop(M),M===null?Tr.stop():Tr.start()},G.addEventListener("sessionstart",Ep),G.addEventListener("sessionend",Mp),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,I,w),p=qe.get(M,_.length),p.init(I),_.push(p),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),He.setFromProjectionMatrix(ue),ie=this.localClippingEnabled,X=re.init(this.clippingPlanes,ie),y=ge.get(M,d.length),y.init(),d.push(y),G.enabled===!0&&G.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&ec(oe,I,-1/0,v.sortObjects)}ec(M,I,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,K),it=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,it&&Le.addToRenderList(y,M),this.info.render.frame++,X===!0&&re.beginShadows();const F=p.state.shadowsArray;_e.render(F,M,I),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=y.opaque,U=y.transmissive;if(p.setupLights(),I.isArrayCamera){const oe=I.cameras;if(U.length>0)for(let fe=0,ye=oe.length;fe<ye;fe++){const Se=oe[fe];wp(B,U,M,Se)}it&&Le.render(M);for(let fe=0,ye=oe.length;fe<ye;fe++){const Se=oe[fe];Tp(y,M,Se,Se.viewport)}}else U.length>0&&wp(B,U,M,I),it&&Le.render(M),Tp(y,M,I);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(v,M,I),st.resetDefaultState(),R=-1,j=null,_.pop(),_.length>0?(p=_[_.length-1],X===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function ec(M,I,F,B){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||He.intersectsSprite(M)){B&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);const fe=Y.update(M),ye=M.material;ye.visible&&y.push(M,fe,ye,F,be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||He.intersectsObject(M))){const fe=Y.update(M),ye=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),be.copy(fe.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(ye)){const Se=fe.groups;for(let Ce=0,Re=Se.length;Ce<Re;Ce++){const Me=Se[Ce],tt=ye[Me.materialIndex];tt&&tt.visible&&y.push(M,fe,tt,F,be.z,Me)}}else ye.visible&&y.push(M,fe,ye,F,be.z,null)}}const oe=M.children;for(let fe=0,ye=oe.length;fe<ye;fe++)ec(oe[fe],I,F,B)}function Tp(M,I,F,B){const U=M.opaque,oe=M.transmissive,fe=M.transparent;p.setupLightsView(F),X===!0&&re.setGlobalState(v.clippingPlanes,F),B&&Pe.viewport(x.copy(B)),U.length>0&&Fa(U,I,F),oe.length>0&&Fa(oe,I,F),fe.length>0&&Fa(fe,I,F),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function wp(M,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new gr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?ms:ki,minFilter:zr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const oe=p.state.transmissionRenderTarget[B.id],fe=B.viewport||x;oe.setSize(fe.z,fe.w);const ye=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(z),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),it&&Le.render(F);const Se=v.toneMapping;v.toneMapping=dr;const Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),X===!0&&re.setGlobalState(v.clippingPlanes,B),Fa(M,F,B),A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,tt=I.length;Me<tt;Me++){const ct=I[Me],St=ct.object,xn=ct.geometry,Qe=ct.material,Te=ct.group;if(Qe.side===Ci&&St.layers.test(B.layers)){const zt=Qe.side;Qe.side=_n,Qe.needsUpdate=!0,Ap(St,F,B,xn,Qe,Te),Qe.side=zt,Qe.needsUpdate=!0,Re=!0}}Re===!0&&(A.updateMultisampleRenderTarget(oe),A.updateRenderTargetMipmap(oe))}v.setRenderTarget(ye),v.setClearColor(z,W),Ce!==void 0&&(B.viewport=Ce),v.toneMapping=Se}function Fa(M,I,F){const B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,oe=M.length;U<oe;U++){const fe=M[U],ye=fe.object,Se=fe.geometry,Ce=B===null?fe.material:B,Re=fe.group;ye.layers.test(F.layers)&&Ap(ye,I,F,Se,Ce,Re)}}function Ap(M,I,F,B,U,oe){M.onBeforeRender(v,I,F,B,U,oe),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(v,I,F,B,M,oe),U.transparent===!0&&U.side===Ci&&U.forceSinglePass===!1?(U.side=_n,U.needsUpdate=!0,v.renderBufferDirect(F,I,B,U,M,oe),U.side=mr,U.needsUpdate=!0,v.renderBufferDirect(F,I,B,U,M,oe),U.side=Ci):v.renderBufferDirect(F,I,B,U,M,oe),M.onAfterRender(v,I,F,B,U,oe)}function ka(M,I,F){I.isScene!==!0&&(I=We);const B=Ie.get(M),U=p.state.lights,oe=p.state.shadowsArray,fe=U.state.version,ye=Ee.getParameters(M,U.state,oe,I,F),Se=Ee.getProgramCacheKey(ye);let Ce=B.programs;B.environment=M.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(M.isMeshStandardMaterial?O:S).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",je),Ce=new Map,B.programs=Ce);let Re=Ce.get(Se);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===fe)return bp(M,ye),Re}else ye.uniforms=Ee.getUniforms(M),M.onBeforeCompile(ye,v),Re=Ee.acquireProgram(ye,Se),Ce.set(Se,Re),B.uniforms=ye.uniforms;const Me=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=re.uniform),bp(M,ye),B.needsLights=Oy(M),B.lightsStateVersion=fe,B.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function Cp(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=ql.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function bp(M,I){const F=Ie.get(M);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Uy(M,I,F,B,U){I.isScene!==!0&&(I=We),A.resetTextureUnits();const oe=I.fog,fe=B.isMeshStandardMaterial?I.environment:null,ye=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Sr,Se=(B.isMeshStandardMaterial?O:S).get(B.envMap||fe),Ce=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!F.morphAttributes.position,tt=!!F.morphAttributes.normal,ct=!!F.morphAttributes.color;let St=dr;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(St=v.toneMapping);const xn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=xn!==void 0?xn.length:0,Te=Ie.get(B),zt=p.state.lights;if(X===!0&&(ie===!0||M!==j)){const Ln=M===j&&B.id===R;re.setState(B,M,Ln)}let Je=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==zt.state.version||Te.outputColorSpace!==ye||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==Se||B.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==re.numPlanes||Te.numIntersection!==re.numIntersection)||Te.vertexAlphas!==Ce||Te.vertexTangents!==Re||Te.morphTargets!==Me||Te.morphNormals!==tt||Te.morphColors!==ct||Te.toneMapping!==St||Te.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Te.__version=B.version);let Vn=Te.currentProgram;Je===!0&&(Vn=ka(B,I,U));let ro=!1,Sn=!1,tc=!1;const wt=Vn.getUniforms(),Hi=Te.uniforms;if(Pe.useProgram(Vn.program)&&(ro=!0,Sn=!0,tc=!0),B.id!==R&&(R=B.id,Sn=!0),ro||j!==M){$e.reverseDepthBuffer?(de.copy(M.projectionMatrix),s1(de),a1(de),wt.setValue(P,"projectionMatrix",de)):wt.setValue(P,"projectionMatrix",M.projectionMatrix),wt.setValue(P,"viewMatrix",M.matrixWorldInverse);const Ln=wt.map.cameraPosition;Ln!==void 0&&Ln.setValue(P,Ne.setFromMatrixPosition(M.matrixWorld)),$e.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&wt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Sn=!0,tc=!0)}if(U.isSkinnedMesh){wt.setOptional(P,U,"bindMatrix"),wt.setOptional(P,U,"bindMatrixInverse");const Ln=U.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),wt.setValue(P,"boneTexture",Ln.boneTexture,A))}U.isBatchedMesh&&(wt.setOptional(P,U,"batchingTexture"),wt.setValue(P,"batchingTexture",U._matricesTexture,A),wt.setOptional(P,U,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",U._indirectTexture,A),wt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",U._colorsTexture,A));const nc=F.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0)&&De.update(U,F,Vn),(Sn||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,wt.setValue(P,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Hi.envMap.value=Se,Hi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(Hi.envMapIntensity.value=I.environmentIntensity),Sn&&(wt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&Ny(Hi,tc),oe&&B.fog===!0&&le.refreshFogUniforms(Hi,oe),le.refreshMaterialUniforms(Hi,B,ee,V,p.state.transmissionRenderTarget[M.id]),ql.upload(P,Cp(Te),Hi,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ql.upload(P,Cp(Te),Hi,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&wt.setValue(P,"center",U.center),wt.setValue(P,"modelViewMatrix",U.modelViewMatrix),wt.setValue(P,"normalMatrix",U.normalMatrix),wt.setValue(P,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ln=B.uniformsGroups;for(let ic=0,Fy=Ln.length;ic<Fy;ic++){const Rp=Ln[ic];D.update(Rp,Vn),D.bind(Rp,Vn)}}return Vn}function Ny(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Oy(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,I,F){Ie.get(M.texture).__webglTexture=I,Ie.get(M.depthTexture).__webglTexture=F;const B=Ie.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const F=Ie.get(M);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,F=0){w=M,b=I,C=F;let B=!0,U=null,oe=!1,fe=!1;if(M){const Se=Ie.get(M);if(Se.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(Se.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(Se.__hasExternalTextures)A.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Me=M.depthTexture;if(Se.__boundDepthTexture!==Me){if(Me!==null&&Ie.has(Me)&&(M.width!==Me.image.width||M.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const Re=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?U=Re[I][F]:U=Re[I],oe=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?U=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[F]:U=Re,x.copy(M.viewport),T.copy(M.scissor),H=M.scissorTest}else x.copy(J).multiplyScalar(ee).floor(),T.copy(se).multiplyScalar(ee).floor(),H=Ae;if(Pe.bindFramebuffer(P.FRAMEBUFFER,U)&&B&&Pe.drawBuffers(M,U),Pe.viewport(x),Pe.scissor(T),Pe.setScissorTest(H),oe){const Se=Ie.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,F)}else if(fe){const Se=Ie.get(M.texture),Ce=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,F||0,Ce)}R=-1},this.readRenderTargetPixels=function(M,I,F,B,U,oe,fe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){Pe.bindFramebuffer(P.FRAMEBUFFER,ye);try{const Se=M.texture,Ce=Se.format,Re=Se.type;if(!$e.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-B&&F>=0&&F<=M.height-U&&P.readPixels(I,F,B,U,Oe.convert(Ce),Oe.convert(Re),oe)}finally{const Se=w!==null?Ie.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,I,F,B,U,oe,fe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){const Se=M.texture,Ce=Se.format,Re=Se.type;if(!$e.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-B&&F>=0&&F<=M.height-U){Pe.bindFramebuffer(P.FRAMEBUFFER,ye);const Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(I,F,B,U,Oe.convert(Ce),Oe.convert(Re),0);const tt=w!==null?Ie.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(P.FRAMEBUFFER,tt);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await o1(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(Me),P.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,F=0){M.isTexture!==!0&&($l("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-F),U=Math.floor(M.image.width*B),oe=Math.floor(M.image.height*B),fe=I!==null?I.x:0,ye=I!==null?I.y:0;A.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,fe,ye,U,oe),Pe.unbindTexture()},this.copyTextureToTexture=function(M,I,F=null,B=null,U=0){M.isTexture!==!0&&($l("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,F=null);let oe,fe,ye,Se,Ce,Re;F!==null?(oe=F.max.x-F.min.x,fe=F.max.y-F.min.y,ye=F.min.x,Se=F.min.y):(oe=M.image.width,fe=M.image.height,ye=0,Se=0),B!==null?(Ce=B.x,Re=B.y):(Ce=0,Re=0);const Me=Oe.convert(I.format),tt=Oe.convert(I.type);A.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ct=P.getParameter(P.UNPACK_ROW_LENGTH),St=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xn=P.getParameter(P.UNPACK_SKIP_PIXELS),Qe=P.getParameter(P.UNPACK_SKIP_ROWS),Te=P.getParameter(P.UNPACK_SKIP_IMAGES),zt=M.isCompressedTexture?M.mipmaps[U]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,zt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Se),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ce,Re,oe,fe,Me,tt,zt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ce,Re,zt.width,zt.height,Me,zt.data):P.texSubImage2D(P.TEXTURE_2D,U,Ce,Re,oe,fe,Me,tt,zt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te),U===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(M,I,F=null,B=null,U=0){M.isTexture!==!0&&($l("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0);let oe,fe,ye,Se,Ce,Re,Me,tt,ct;const St=M.isCompressedTexture?M.mipmaps[U]:M.image;F!==null?(oe=F.max.x-F.min.x,fe=F.max.y-F.min.y,ye=F.max.z-F.min.z,Se=F.min.x,Ce=F.min.y,Re=F.min.z):(oe=St.width,fe=St.height,ye=St.depth,Se=0,Ce=0,Re=0),B!==null?(Me=B.x,tt=B.y,ct=B.z):(Me=0,tt=0,ct=0);const xn=Oe.convert(I.format),Qe=Oe.convert(I.type);let Te;if(I.isData3DTexture)A.setTexture3D(I,0),Te=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),Te=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const zt=P.getParameter(P.UNPACK_ROW_LENGTH),Je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Vn=P.getParameter(P.UNPACK_SKIP_PIXELS),ro=P.getParameter(P.UNPACK_SKIP_ROWS),Sn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Te,U,Me,tt,ct,oe,fe,ye,xn,Qe,St.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,U,Me,tt,ct,oe,fe,ye,xn,St.data):P.texSubImage3D(Te,U,Me,tt,ct,oe,fe,ye,xn,Qe,St),P.pixelStorei(P.UNPACK_ROW_LENGTH,zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ro),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Sn),U===0&&I.generateMipmaps&&P.generateMipmap(Te),Pe.unbindTexture()},this.initRenderTarget=function(M){Ie.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Pe.unbindTexture()},this.resetState=function(){b=0,C=0,w=null,Pe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===up?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===qu?"display-p3":"srgb"}}class _R extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class My extends Na{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cu=new N,bu=new N,Yg=new yt,Is=new fp,Tl=new Ku,lf=new N,$g=new N;class vR extends rn{constructor(e=new Hn,n=new My){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)Cu.fromBufferAttribute(n,r-1),bu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Cu.distanceTo(bu);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Tl.radius+=o,e.ray.intersectsSphere(Tl)===!1)return;Yg.copy(r).invert(),Is.copy(e.ray).applyMatrix4(Yg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const m=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let y=m,p=g-1;y<p;y+=u){const d=c.getX(y),_=c.getX(y+1),v=wl(this,e,Is,l,d,_);v&&n.push(v)}if(this.isLineLoop){const y=c.getX(g-1),p=c.getX(m),d=wl(this,e,Is,l,y,p);d&&n.push(d)}}else{const m=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let y=m,p=g-1;y<p;y+=u){const d=wl(this,e,Is,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=wl(this,e,Is,l,g-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function wl(t,e,n,i,r,o){const s=t.geometry.attributes.position;if(Cu.fromBufferAttribute(s,r),bu.fromBufferAttribute(s,o),n.distanceSqToSegment(Cu,bu,lf,$g)>i)return;lf.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(lf);if(!(l<e.near||l>e.far))return{distance:l,point:$g.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class pp extends Hn{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),o=Math.floor(o);const c=[],f=[],h=[],m=[];let g=0;const y=[],p=i/2;let d=0;_(),s===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(m,2));function _(){const E=new N,b=new N;let C=0;const w=(n-e)/i;for(let R=0;R<=o;R++){const j=[],x=R/o,T=x*(n-e)+e;for(let H=0;H<=r;H++){const z=H/r,W=z*l+a,Z=Math.sin(W),V=Math.cos(W);b.x=T*Z,b.y=-x*i+p,b.z=T*V,f.push(b.x,b.y,b.z),E.set(Z,w,V).normalize(),h.push(E.x,E.y,E.z),m.push(z,1-x),j.push(g++)}y.push(j)}for(let R=0;R<r;R++)for(let j=0;j<o;j++){const x=y[j][R],T=y[j+1][R],H=y[j+1][R+1],z=y[j][R+1];e>0&&(c.push(x,T,z),C+=3),n>0&&(c.push(T,H,z),C+=3)}u.addGroup(d,C,0),d+=C}function v(E){const b=g,C=new Fe,w=new N;let R=0;const j=E===!0?e:n,x=E===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,p*x,0),h.push(0,x,0),m.push(.5,.5),g++;const T=g;for(let H=0;H<=r;H++){const W=H/r*l+a,Z=Math.cos(W),V=Math.sin(W);w.x=j*V,w.y=p*x,w.z=j*Z,f.push(w.x,w.y,w.z),h.push(0,x,0),C.x=Z*.5+.5,C.y=V*.5*x+.5,m.push(C.x,C.y),g++}for(let H=0;H<r;H++){const z=b+H,W=T+H;E===!0?c.push(W,W+1,z):c.push(W+1,W,z),R+=3}u.addGroup(d,R,E===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mp extends Hn{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const c=[],f=new N,h=new N,m=[],g=[],y=[],p=[];for(let d=0;d<=i;d++){const _=[],v=d/i;let E=0;d===0&&s===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let b=0;b<=n;b++){const C=b/n;f.x=-e*Math.cos(r+C*o)*Math.sin(s+v*a),f.y=e*Math.cos(s+v*a),f.z=e*Math.sin(r+C*o)*Math.sin(s+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(C+E,1-v),_.push(u++)}c.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const v=c[d][_+1],E=c[d][_],b=c[d+1][_],C=c[d+1][_+1];(d!==0||s>0)&&m.push(v,E,C),(d!==i-1||l<Math.PI)&&m.push(E,b,C)}this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const qg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class yR{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,o===!1&&r.onStart!==void 0&&r.onStart(c,s,a),o=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],g=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}}const xR=new yR;class gp{constructor(e){this.manager=e!==void 0?e:xR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gp.DEFAULT_MATERIAL_NAME="__DEFAULT";class SR extends gp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=qg.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=Ta("img");function l(){c(),qg.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(f){c(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class ER extends gp{constructor(e){super(e)}load(e,n,i,r){const o=new dp;o.colorSpace=qn;const s=new SR(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function l(u){s.load(e[u],function(c){o.images[u]=c,a++,a===6&&(o.needsUpdate=!0,n&&n(o))},void 0,r)}for(let u=0;u<e.length;++u)l(u);return o}}class Ty{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Kg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Kg(){return performance.now()}class Zg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Kt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qg=new N;let Al,uf;class MR extends rn{constructor(e=new N(0,0,1),n=new N(0,0,0),i=1,r=16776960,o=i*.2,s=o*.2){super(),this.type="ArrowHelper",Al===void 0&&(Al=new Hn,Al.setAttribute("position",new Gt([0,0,0,0,1,0],3)),uf=new pp(0,.5,1,5,1),uf.translate(0,-.5,0)),this.position.copy(n),this.line=new vR(Al,new My({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new An(uf,new Zu({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,o,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Qg.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Qg,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class TR extends no{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);const Jg={type:"change"},_p={type:"start"},wy={type:"end"},Cl=new fp,e_=new Zi,wR=Math.cos(70*i1.DEG2RAD),Lt=new N,un=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cf=1e-6;class AR extends TR{constructor(e,n=null){super(e,n),this.state=rt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$o.ROTATE,MIDDLE:$o.DOLLY,RIGHT:$o.PAN},this.touches={ONE:Fo.ROTATE,TWO:Fo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Zr,this._lastTargetPosition=new N,this._quat=new Zr().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zg,this._sphericalDelta=new Zg,this._scale=1,this._panOffset=new N,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new N,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bR.bind(this),this._onPointerDown=CR.bind(this),this._onPointerUp=RR.bind(this),this._onContextMenu=OR.bind(this),this._onMouseWheel=DR.bind(this),this._onKeyDown=IR.bind(this),this._onTouchStart=UR.bind(this),this._onTouchMove=NR.bind(this),this._onMouseDown=PR.bind(this),this._onMouseMove=LR.bind(this),this._interceptControlDown=FR.bind(this),this._interceptControlUp=kR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jg),this.update(),this.state=rt.NONE}update(e=null){const n=this.object.position;Lt.copy(n).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),r<-Math.PI?r+=un:r>Math.PI&&(r-=un),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Lt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const u=new N(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),s=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Cl.origin.copy(this.object.position),Cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cl.direction))<wR?this.object.lookAt(this.target):(e_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cl.intersectPlane(e_,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>cf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cf||this._lastTargetPosition.distanceToSquared(this.target)>cf?(this.dispatchEvent(Jg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Lt.setFromMatrixColumn(n,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,n){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(n,1):(Lt.setFromMatrixColumn(n,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let o=Lt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*n*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=n-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(un*this._rotateDelta.x/n.clientHeight),this._rotateUp(un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(un*this._rotateDelta.x/n.clientHeight),this._rotateUp(un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Fe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function CR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function bR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function RR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wy),this.state=rt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function PR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $o.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=rt.DOLLY;break;case $o.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=rt.ROTATE}break;case $o.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(_p)}function LR(t){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function DR(t){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(t.preventDefault(),this.dispatchEvent(_p),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(wy))}function IR(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function UR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Fo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=rt.TOUCH_ROTATE;break;case Fo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Fo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=rt.TOUCH_DOLLY_PAN;break;case Fo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(_p)}function NR(t){switch(this._trackPointer(t),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=rt.NONE}}function OR(t){this.enabled!==!1&&t.preventDefault()}function FR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ju{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const BR=new _y(-1,1,1,-1,0,1);class zR extends Hn{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const HR=new zR;class VR{constructor(e){this._mesh=new An(HR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const GR={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Kl extends Ju{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof oi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hy.clone(e.uniforms),this.material=new oi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new VR(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class t_ extends Ju{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class WR extends Ju{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class XR{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Fe);this._width=i.width,this._height=i.height,n=new gr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ms}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Kl(GR),this.copyPass.material.blending=Ii,this.clock=new Ty}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}t_!==void 0&&(s instanceof t_?i=!0:s instanceof WR&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jR extends Ju{constructor(e,n,i=null,r=null,o=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ke}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}var Js=function(){var t=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(c){c.preventDefault(),i(++t%e.children.length)},!1);function n(c){return e.appendChild(c.dom),c}function i(c){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===c?"block":"none";t=c}var r=(performance||Date).now(),o=r,s=0,a=n(new Js.Panel("FPS","#0ff","#002")),l=n(new Js.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new Js.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:n,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){s++;var c=(performance||Date).now();if(l.update(c-r,200),c>=o+1e3&&(a.update(s*1e3/(c-o),100),o=c,s=0,u)){var f=performance.memory;u.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return c},update:function(){r=this.end()},domElement:e,setMode:i}};Js.Panel=function(t,e,n){var i=1/0,r=0,o=Math.round,s=o(window.devicePixelRatio||1),a=80*s,l=48*s,u=3*s,c=2*s,f=3*s,h=15*s,m=74*s,g=30*s,y=document.createElement("canvas");y.width=a,y.height=l,y.style.cssText="width:80px;height:48px";var p=y.getContext("2d");return p.font="bold "+9*s+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=n,p.fillRect(0,0,a,l),p.fillStyle=e,p.fillText(t,u,c),p.fillRect(f,h,m,g),p.fillStyle=n,p.globalAlpha=.9,p.fillRect(f,h,m,g),{dom:y,update:function(d,_){i=Math.min(i,d),r=Math.max(r,d),p.fillStyle=n,p.globalAlpha=1,p.fillRect(0,0,a,h),p.fillStyle=e,p.fillText(o(d)+" "+t+" ("+o(i)+"-"+o(r)+")",u,c),p.drawImage(y,f+s,h,m-s,g,f,h,m-s,g),p.fillRect(f+m-s,h,s,g),p.fillStyle=n,p.globalAlpha=.9,p.fillRect(f+m-s,h,s,o((1-d/_)*g))}}};const ff=(t,e)=>Math.random()*(e-t)+t,Zn={backlight:{name:"Backlight Showcase",light:{x:60,y:40,z:-80},camera:{x:-60,y:25,z:80}},sunrise:{name:"Sunrise Glow",light:{x:100,y:15,z:0},camera:{x:-40,y:8,z:-60}},overhead:{name:"Overhead Drama",light:{x:20,y:100,z:20},camera:{x:-70,y:45,z:-70}},lowAngleRim:{name:"Low Angle Rim Light",light:{x:40,y:15,z:60},camera:{x:-50,y:10,z:-80}},grazing:{name:"Grazing Light",light:{x:100,y:8,z:0},camera:{x:-60,y:15,z:-60}},dualTone:{name:"Dual Tone",light:{x:80,y:30,z:-40},camera:{x:-70,y:35,z:70}},dramatic:{name:"Dramatic Contrast",light:{x:60,y:50,z:-60},camera:{x:-50,y:30,z:50}},underwater:{name:"Underwater Feel",light:{x:0,y:80,z:0},camera:{x:-40,y:5,z:-40}},artistic:{name:"Artistic Profile",light:{x:90,y:25,z:0},camera:{x:0,y:20,z:-90}},scatterHighlight:{name:"Scatter Highlight",light:{x:70,y:20,z:-70},camera:{x:-40,y:15,z:60}}},Qd={defaultWater:{name:"Default Water",uniforms:{uWaterIOR:1.34,uTurbidity:.2,uDepthColor:100,uSmoothness:90,uScatteringDepth:1,uBackScatteringStrength:.6,uSideScatteringStrength:.4,uSideScatterFocus:.9,uFresnelPower:4.5,uWaterColor:2142890}},crystalPool:{name:"Swimming Pool",uniforms:{uWaterIOR:1.338,uTurbidity:.1,uDepthColor:20,uSmoothness:128,uScatteringDepth:.8,uBackScatteringStrength:.5,uSideScatteringStrength:.3,uSideScatterFocus:.8,uFresnelPower:5,uWaterColor:32947}},calmOcean:{name:"Calm Ocean",uniforms:{uWaterIOR:1.342,uTurbidity:.3,uDepthColor:150,uSmoothness:64,uScatteringDepth:1.2,uBackScatteringStrength:.7,uSideScatteringStrength:.5,uSideScatterFocus:1,uFresnelPower:4,uWaterColor:19840}},tropicalLagoon:{name:"Tropical Lagoon",uniforms:{uWaterIOR:1.339,uTurbidity:.15,uDepthColor:100,uSmoothness:96,uScatteringDepth:1,uBackScatteringStrength:.6,uSideScatteringStrength:.4,uSideScatterFocus:.9,uFresnelPower:4.5,uWaterColor:39296}},murkyLake:{name:"Murky Lake",uniforms:{uWaterIOR:1.335,uTurbidity:.7,uDepthColor:30,uSmoothness:32,uScatteringDepth:1.5,uBackScatteringStrength:.9,uSideScatteringStrength:.7,uSideScatterFocus:1.2,uFresnelPower:3,uWaterColor:3362099}},glacialMelt:{name:"Glacial Melt",uniforms:{uWaterIOR:1.333,uTurbidity:.05,uDepthColor:180,uSmoothness:150,uScatteringDepth:.6,uBackScatteringStrength:.4,uSideScatteringStrength:.2,uSideScatterFocus:.7,uFresnelPower:5.5,uWaterColor:8963071}},caribbeanShallows:{name:"Caribbean Shallows",uniforms:{uWaterIOR:1.337,uTurbidity:.12,uDepthColor:120,uSmoothness:110,uScatteringDepth:.9,uBackScatteringStrength:.55,uSideScatteringStrength:.45,uSideScatterFocus:.85,uFresnelPower:4.8,uWaterColor:46296}},stormySea:{name:"Stormy Sea",uniforms:{uWaterIOR:1.343,uTurbidity:.45,uDepthColor:200,uSmoothness:45,uScatteringDepth:1.4,uBackScatteringStrength:.8,uSideScatteringStrength:.6,uSideScatterFocus:1.1,uFresnelPower:3.5,uWaterColor:2899536}},mangroveSwamp:{name:"Mangrove Swamp",uniforms:{uWaterIOR:1.336,uTurbidity:.6,uDepthColor:40,uSmoothness:50,uScatteringDepth:1.3,uBackScatteringStrength:.85,uSideScatteringStrength:.65,uSideScatterFocus:1.15,uFresnelPower:3.2,uWaterColor:3100495}},hotSpring:{name:"Hot Spring",uniforms:{uWaterIOR:1.334,uTurbidity:.25,uDepthColor:90,uSmoothness:80,uScatteringDepth:1.1,uBackScatteringStrength:.65,uSideScatteringStrength:.5,uSideScatterFocus:.95,uFresnelPower:4.2,uWaterColor:8369589}}},fn={width:500,height:500,widthSegments:200,heightSegments:200,wireframe:!1},Et={MAX_WAVES:16,amplitude:{min:.1,max:2,step:.1},frequency:{min:.1,max:1,step:.1},speed:{min:.1,max:2,step:.1},persistence:{min:.1,max:1,step:.1},peakHeight:{min:.1,max:1,step:.1}},ot={smoothness:{min:10,max:200,step:1},fresnelPower:{min:1,max:20,step:1},lightDir:{x:{min:-90,max:90,step:1},y:{min:0,max:90,step:1},z:{min:-90,max:90,step:1}},scatteringDepth:{min:0,max:2,step:.1},backScatteringStrength:{min:0,max:4,step:.1},sideScatteringStrength:{min:0,max:4,step:.1},sideScatterFocus:{min:1,max:20,step:1},waterIOR:{min:1.2,max:1.4,step:.001},turbidity:{min:.1,max:1,step:.1},depthColor:{min:10,max:200,step:10}},we={uTime:{type:"f",value:0},uResolution:{type:"v2",value:new Fe(window.innerWidth,window.innerHeight)},uWaveCount:{type:"i",value:12},uWaveParams:{type:"v4",value:new Tt(ff(Et.amplitude.min,Et.amplitude.max),ff(Et.frequency.min,Et.frequency.max),ff(Et.speed.min,Et.speed.max),.8)},uPeakHeight:{type:"f",value:.8},uWaterColor:{type:"v3",value:new Ke(Qd.defaultWater.uniforms.uWaterColor)},uLightDirection:{type:"v3",value:new N(Zn.lowAngleRim.light.x,Zn.lowAngleRim.light.y,Zn.lowAngleRim.light.z)},uSmoothness:{type:"f",value:100},uFresnelPower:{type:"f",value:10},uScatteringDepth:{type:"f",value:1},uBackScatteringStrength:{type:"f",value:2},uSideScatteringStrength:{type:"f",value:1},uSideScatterFocus:{type:"f",value:4},uSkybox:{type:"t",value:null},uWaterIOR:{type:"f",value:1.333},uTurbidity:{type:"f",value:.1},uDepthColor:{type:"f",value:50}},hi={commonUniforms:{tDiffuse:{value:null},uTime:we.uTime,uResolution:we.uResolution,uLightDirection:{type:"v3",value:new N(Zn.lowAngleRim.light.x,Zn.lowAngleRim.light.y,Zn.lowAngleRim.light.z)}},sunUniforms:{tDiffuse:{value:null},uTime:we.uTime,uResolution:we.uResolution,uLightDirection:{type:"v3",value:new N(Zn.lowAngleRim.light.x,Zn.lowAngleRim.light.y,Zn.lowAngleRim.light.z)},uSunColor:{value:new N(1,.957,.839)},uProjectionMatrix:{value:new yt},uViewMatrix:{value:new yt},uSunSize:{value:.02},uSunIntensity:{value:5},uBloomStrength:{value:.5},uAtmosphereStrength:{value:.3}},fogUniforms:{tDiffuse:{value:null},uTime:we.uTime,uResolution:we.uResolution,uSkyColor:{value:new N(.7,.7,.75)},uHorizonHeight:{value:.9},uFogDensity:{value:1}},causticsUniforms:{tDiffuse:{value:null},uTime:we.uTime,uResolution:we.uResolution,uIntensity:{value:1}},chromaticAberrationUniforms:{tDiffuse:{value:null},uTime:we.uTime,uOffset:{value:.005}}};class YR{constructor(e){this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.composer=void 0,this.clock=void 0,this.stats=void 0,this.controls=void 0,this.fov=45,this.canvasID=e,this.nearPlane=1,this.farPlane=1e3,this.ambientLight=void 0,this.directionalLight=void 0,this.spotLight=void 0,this.skybox=void 0}initialize(){this.scene=new _R,this.camera=new Nn(this.fov,window.innerWidth/window.innerHeight,this.nearPlane,this.farPlane);const e=Zn.lowAngleRim;this.camera.position.set(e.camera.x,e.camera.y,e.camera.z),this.camera.lookAt(0,0,0);const n=document.getElementById(this.canvasID);this.renderer=new gR({canvas:n,antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.composer=new XR(this.renderer),this.composer.addPass(new jR(this.scene,this.camera)),this.clock=new Ty,this.controls=new AR(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.stats=Js(),document.body.appendChild(this.stats.dom);const i=new ER,r="assets/images/Daylight_Box_Pieces/",o=["Daylight_Box_Right.bmp","Daylight_Box_Left.bmp","Daylight_Box_Top.bmp","Daylight_Box_Bottom.bmp","Daylight_Box_Front.bmp","Daylight_Box_Back.bmp"];i.setPath(r),i.load(o,s=>{this.skybox=s,this.scene.background=this.skybox,we.uSkybox.value=this.skybox},void 0,s=>{console.error("Error loading skybox textures:",s)}),window.addEventListener("resize",()=>this.onWindowResize(),!1)}animate(e){window.requestAnimationFrame(this.animate.bind(this,e)),this.render(),this.stats.update(),this.controls.update(),e&&e(this.clock.getElapsedTime())}render(){this.composer.render()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}var $R=`uniform float uTime;\r
uniform int uWaveCount;\r
uniform vec4 uWaveParams; 
uniform float uPeakHeight;

varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec3 vWorldPosition;

float random(vec2 st) {\r
    vec2 k = vec2(23.14069263277926, 2.665144142690225);\r
    return fract(cos(dot(st, k)) * 12345.6789);\r
}

float randomSpeed(float seed) {\r
    float randomValue = random(vec2(seed * 12.9898, seed * 78.233));\r
    float minSpeed = 0.1;\r
    float maxSpeed = uWaveParams.z;\r
    return mix(minSpeed, maxSpeed, randomValue);\r
}

vec2 randomDirection(float seed) {\r
    float angle = random(vec2(seed * 43.758, seed * 28.957)) * 2.0 * 3.14159265;\r
    return normalize(vec2(cos(angle), sin(angle)));\r
}

float sineWave(vec2 st, vec2 direction, float frequency, float speed, float phase) {\r
    float angle = -dot(st, direction);\r
    float wave = sin(angle * frequency + uTime * speed + phase);

    float asymmetry = clamp(uPeakHeight, 0.0, 5.0);\r
    return sign(wave) * (exp(abs(wave) * asymmetry) - 1.0) * 0.5;\r
}

float steepSineWave(vec2 st, vec2 direction, float frequency, float speed, float phase) {\r
    float angle = -dot(st, direction);\r
    float wave = sin(angle * frequency + uTime * speed + phase);\r
    float asymmetry = uPeakHeight;\r
    return sign(wave) * (exp(abs(wave) * asymmetry) - 1.0);\r
}

float sineFbm(vec2 st) {\r
    float amplitude = uWaveParams.x;\r
    float frequency = uWaveParams.y;\r
    float persistence = uWaveParams.w;

    float value = 0.0;\r
    float maxValue = 0.0;

    float maxFreq = 25.0;

    for(int i = 0; i < uWaveCount; i++) {\r
        if(frequency > maxFreq)\r
            break;

        vec2 dir = randomDirection(float(i));\r
        float speed = randomSpeed(float(i));

        float wave = steepSineWave(st, dir, frequency, speed, float(i) * 0.5);

        value += amplitude * wave;\r
        maxValue += amplitude;

        frequency *= 1.18;\r
        amplitude *= persistence;\r
    }

    maxValue = max(maxValue, 0.001);\r
    return value / maxValue;\r
}

vec3 calculateNormal(vec2 pos, float height, float epsilon) {\r
    vec2 e = vec2(epsilon, 0.0);

    float h1 = sineFbm(pos + e.xy);\r
    float h2 = sineFbm(pos - e.xy);\r
    float h3 = sineFbm(pos + e.yx);\r
    float h4 = sineFbm(pos - e.yx);

    vec3 normal = normalize(vec3(h1 - h2, epsilon * 2.0, h3 - h4));

    return normal;\r
}

void main() {\r
    
    vec2 pos = vec2(position.x, -position.y);

    
    float distanceDamp = 1.0 / (1.0 + 0.02 * length(cameraPosition - vec3(position.xy, 0.0)));

    
    float height = sineFbm(pos) * distanceDamp;\r
    float maxDisplacement = 2.0;\r
    height = clamp(height, -maxDisplacement, maxDisplacement);

    
    height *= uPeakHeight;

    
    vec3 finalPosition = vec3(position.x, height * uWaveParams.x, -position.y);

    
    vec3 newNormal = calculateNormal(pos, height, 0.01 * distanceDamp);

    vNormal = normalMatrix * newNormal;\r
    vPosition = finalPosition;\r
    vWorldPosition = (modelMatrix * vec4(finalPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(finalPosition, 1.0);\r
}`,qR=`uniform samplerCube uSkybox;

uniform vec3 uWaterColor;\r
uniform vec3 uLightDirection;\r
uniform float uSmoothness;

uniform float uFresnelPower;

uniform float uScatteringDepth;\r
uniform float uBackScatteringStrength;\r
uniform float uSideScatteringStrength;\r
uniform float uSideScatterFocus;

uniform float uWaterIOR; 
uniform float uTurbidity; 
uniform float uDepthColor; 

varying vec3 vNormal;\r
varying vec3 vWorldPosition;

const vec3 WATER_ABSORPTION = vec3(0.45, 0.029, 0.018);

float calculateFresnelF0(float ior) {\r
    float temp = (1.0 - ior) / (1.0 / ior);\r
    return temp * temp;\r
}

float schlickFresnel(float cosTheta, float ior) {\r
    float F0 = calculateFresnelF0(ior);\r
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, uFresnelPower);\r
}

float sunDisc(vec3 rayDir, vec3 sunDir, float size, float softness) {\r
    float cosAngle = dot(normalize(rayDir), normalize(sunDir));\r
    float sun = smoothstep(1.0 - size - softness, 1.0 - size, cosAngle);\r
    return sun * sun;\r
}

vec3 subsurfaceScattering(vec3 normal, vec3 lightDir, vec3 viewDir, vec3 waterColor, float depth) {\r
    float backScatter = max(0.0, -dot(lightDir, normal)) * uScatteringDepth * uBackScatteringStrength * (1.0 - uTurbidity * 0.5);

    vec3 sideDir = normalize(cross(lightDir, vec3(0.0, 1.0, 0.0)));\r
    float sideScatter = pow(max(0.0, dot(viewDir, -sideDir)), uSideScatterFocus) * uScatteringDepth * uSideScatteringStrength;

    float depthAttenuation = exp(-depth * 0.01 * (1.0 + uTurbidity));\r
    float scatterTerm = (backScatter + sideScatter) * depthAttenuation;

    return waterColor * scatterTerm;\r
}

vec3 calculateWaterAbsorption(float depth) {\r
    return exp(-depth * WATER_ABSORPTION * (1.0 + uTurbidity * 2.0));\r
}

void main() {\r
    vec3 normal = normalize(vNormal);\r
    vec3 lightColor = normalize(vec3(1.0, 0.957, 0.839)) * 1.5;\r
    vec3 lightDir = normalize(uLightDirection);\r
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);\r
    float NdotV = max(dot(normal, viewDir), 0.0);

    float depth = length(vWorldPosition - cameraPosition);\r
    float depthFactor = clamp(depth / uDepthColor, 0.0, 1.0);

    vec3 absorption = calculateWaterAbsorption(depth);

    
    float fresnelFactor = schlickFresnel(NdotV, uWaterIOR);

    
    vec3 shallowColor = uWaterColor;\r
    vec3 deepColor = vec3(0.0, 0.4, 0.8) * absorption;\r
    vec3 scatterColor = mix(shallowColor, deepColor,depthFactor);\r
    vec3 scatter = subsurfaceScattering(normal, lightDir, viewDir, scatterColor, depth) * (1.0 - fresnelFactor * 0.5);\r
    \r
    
    vec3 ambient = vec3(0.5, 0.5, 0.5) * absorption;

    
    float diffuseStrength = max(0.0, dot(lightDir, normal));\r
    vec3 diffuse = diffuseStrength * lightColor * absorption;

    
    vec3 reflectSource = normalize(reflect(-lightDir, normal));\r
    float specularStrength = max(0.0, dot(viewDir, reflectSource));\r
    \r
    float roughness = (1.0 - uSmoothness) * (1.0 + normal.y * 0.5);\r
    float alpha = roughness * roughness;\r
    specularStrength = pow(specularStrength, uSmoothness * (1.0 + alpha));

    vec3 specular = specularStrength * fresnelFactor * lightColor * (1.0 + fresnelFactor * 0.5);

    
    vec3 reflectionDir = reflect(-viewDir, normalize(vNormal));\r
    vec3 blurredReflectionDir = normalize(reflectionDir + vec3(fresnelFactor * 0.05));\r
    vec3 skyboxColor = textureCube(uSkybox, blurredReflectionDir).rgb;

    
    float sunIntensity = 4.0 * (1.0 - uTurbidity * 0.5);\r
    float sunSize = 0.02;\r
    float sunSoftness = 0.01 * (1.0 + uTurbidity * 2.0);\r
    float sun = sunDisc(reflectionDir, lightDir, sunSize, sunSoftness);\r
    vec3 sunColor = lightColor * sunIntensity;\r
    vec3 reflection = skyboxColor + sun * sunColor;

    
    vec3 lighting = ambient + scatter + specular;

    float reflectionStrength = fresnelFactor * depthFactor * (1.0 - uTurbidity * 0.3);\r
        \r
    
    vec3 finalColor = mix(uWaterColor * lighting, reflection, reflectionStrength);

    gl_FragColor = vec4(clamp(finalColor, 0.0, 1.0), 1.0);\r
}`,vp=`varying vec2 vUv;

void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,KR=`uniform sampler2D tDiffuse;\r
uniform vec2 uResolution;\r
uniform vec3 uLightDirection;\r
uniform vec3 uSunColor;\r
uniform float uTime;\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uViewMatrix;\r
uniform float uSunSize;\r
uniform float uSunIntensity;\r
uniform float uBloomStrength;\r
uniform float uAtmosphericStrength;

varying vec2 vUv;

vec2 directionToScreenSpace(vec3 direction) {\r
    vec3 normalizedDirection = normalize(direction);\r
    vec4 viewSpace = uViewMatrix * vec4(normalizedDirection, 0.0);\r
    vec4 clipSpace = uProjectionMatrix * viewSpace;\r
    vec2 ndc = clipSpace.xy / clipSpace.w;

    return ndc * 0.5 + 0.5;\r
}

float random(vec2 st) {\r
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);\r
}

float atmosphere(vec2 uv, vec2 sunPos, float size) {\r
    float aspectRatio = uResolution.x / uResolution.y;\r
    vec2 aspectAdjustedUV = vec2((uv.x - sunPos.x) * aspectRatio, uv.y - sunPos.y);\r
    float dist = length(aspectAdjustedUV);\r
    float atmosphere = 1.0 - smoothstep(size, size * 4.0, dist);\r
    return pow(atmosphere, 3.0) * uAtmosphericStrength;\r
}

float corona(vec2 uv, vec2 sunPos) {\r
    float time = uTime * 0.5;\r
    float aspectRatio = uResolution.x / uResolution.y;\r
    vec2 aspectAdjustedUV = vec2((uv.x - sunPos.x) * aspectRatio, uv.y - sunPos.y);\r
    \r
    float angle = atan(aspectAdjustedUV.y, aspectAdjustedUV.x);\r
    float dist = length(aspectAdjustedUV);\r
    float corona = 0.0;

    for (int i = 0; i < 6; i++) {\r
        float freq = float(i) * 2.0 + 1.0;\r
        float amplitude = 1.0 / float(i + 1);\r
        corona += sin(angle * freq + time) * amplitude;\r
    }

    corona = abs(corona) * 0.5;\r
    corona *= smoothstep(uSunSize * 1.2, uSunSize * 0.8, dist);

    return corona;\r
}

vec3 lensFlare(vec2 uv, vec2 sunPos) {\r
    vec2 sunToCenter = sunPos - vec2(0.5);\r
    vec2 flarePos = vec2(0.5) - sunToCenter * 0.5;\r
    \r
    float flare = 0.0;\r
    flare += smoothstep(0.3, 0.0, length(uv - flarePos)) * 0.3;\r
    flare += smoothstep(0.1, 0.0, length(uv - (flarePos + sunToCenter * 0.2))) * 0.2;\r
    flare += smoothstep(0.05, 0.0, length(uv - (flarePos - sunToCenter * 0.2))) * 0.1;\r
    \r
    flare *= 0.8 + random(uv + vec2(uTime * 0.1)) * 0.4;\r
    \r
    return uSunColor * flare;\r
}

vec3 bloom(sampler2D tex, vec2 uv, float strength) {\r
    vec3 color = vec3(0.0);\r
    float total = 0.0;\r
    \r
    for(float i = -4.0; i <= 4.0; i += 1.0) {\r
        for(float j = -4.0; j <= 4.0; j += 1.0) {\r
            vec2 offset = vec2(i, j) * strength / uResolution;\r
            float weight = 1.0 / (1.0 + length(vec2(i, j)));\r
            color += texture2D(tex, uv + offset).rgb * weight;\r
            total += weight;\r
        }\r
    }\r
    \r
    return color / total;\r
}

void main() {\r
    vec4 sceneColor = texture2D(tDiffuse, vUv);\r
    \r
    vec2 sunPos = directionToScreenSpace(normalize(uLightDirection));\r
    \r
    if(sunPos.x >= 0.0 && sunPos.x <= 1.0 && sunPos.y >= 0.0 && sunPos.y <= 1.0) {\r
        float aspectRatio = uResolution.x / uResolution.y;\r
        vec2 aspectAdjustedUV = vec2((vUv.x - sunPos.x) * aspectRatio, vUv.y - sunPos.y);\r
        float dist = length(aspectAdjustedUV);\r
        \r
        float sunDisk = 1.0 - smoothstep(uSunSize * 0.9, uSunSize, dist);\r
        \r
        float coronaEffect = corona(vUv, sunPos);\r
        \r
        float atmosphereEffect = atmosphere(vUv, sunPos, uSunSize);\r
        \r
        vec3 sunColor = uSunColor * (sunDisk + coronaEffect) * uSunIntensity;\r
        sunColor += uSunColor * atmosphereEffect;\r
        \r
        vec3 flareColor = lensFlare(vUv, sunPos);\r
        \r
        vec3 finalColor = sceneColor.rgb + sunColor + flareColor;\r
        \r
        vec3 bloomColor = bloom(tDiffuse, vUv, uBloomStrength);\r
        finalColor += bloomColor * step(0.4, atmosphereEffect);\r
        \r
        gl_FragColor = vec4(finalColor, 1.0);\r
    } else {\r
        gl_FragColor = sceneColor;\r
    }\r
}`,ZR=`uniform sampler2D tDiffuse;\r
uniform vec2 uResolution;\r
uniform vec3 uSkyColor;\r
uniform float uHorizonHeight;\r
uniform float uFogDensity;\r
uniform float uTime;

varying vec2 vUv;

float random(vec2 st) {\r
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);\r
}

vec2 grad(ivec2 z) {\r
    int n = z.x + z.y * 11111;\r
    n = (n << 13) ^ n;\r
    n = (n * (n * n * 15731 + 789221) + 1376312589) >> 16;\r
    n &= 7;\r
    \r
    vec2 gr = vec2(n & 1, n >> 1) * 2.0 - 1.0;\r
    return normalize(gr);\r
}

float noise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    \r
    float v00 = dot(grad(ivec2(i)), f);\r
    float v10 = dot(grad(ivec2(i) + ivec2(1, 0)), f - vec2(1.0, 0.0));\r
    float v01 = dot(grad(ivec2(i) + ivec2(0, 1)), f - vec2(0.0, 1.0));\r
    float v11 = dot(grad(ivec2(i) + ivec2(1, 1)), f - vec2(1.0, 1.0));\r
    \r
    vec2 u = f * f * (3.0 - 2.0 * f);\r
    return mix(mix(v00, v10, u.x), mix(v01, v11, u.x), u.y);\r
}

float fbm(vec2 p) {\r
    float sum = 0.0;\r
    float amp = 1.0;\r
    float freq = 1.0;\r
    \r
    for(int i = 0; i < 4; i++) {\r
        sum += noise(p * freq) * amp;\r
        amp *= 0.5;\r
        freq *= 2.0;\r
    }\r
    \r
    return sum;\r
}

void main() {\r
    vec4 color = texture2D(tDiffuse, vUv);\r
    \r
    float horizonDist = abs(vUv.y - uHorizonHeight);\r
    \r
    vec2 noiseCoord = vec2(vUv.x * 3.0 + uTime * 0.05, vUv.y * 2.0);\r
    float dynamicNoise = fbm(noiseCoord) * 0.5 + 0.5;\r
    \r
    float atmosphericDensity = smoothstep(0.0, 0.5, 1.0 - horizonDist * 2.0);\r
    atmosphericDensity *= dynamicNoise;\r
    \r
    float heightGradient = smoothstep(uHorizonHeight - 0.2, uHorizonHeight + 0.2, vUv.y);\r
    \r
    float fogStrength = atmosphericDensity * uFogDensity;\r
    fogStrength *= (1.0 + sin(uTime * 0.2) * 0.1);\r
    \r
    vec3 fogColor = mix(uSkyColor, uSkyColor * 0.8, heightGradient);\r
    color.rgb = mix(color.rgb, fogColor, fogStrength);\r
    \r
    gl_FragColor = color;\r
}`,QR=`uniform sampler2D tDiffuse;\r
uniform float uOffset;\r
uniform float uTime;

varying vec2 vUv;

void main() {\r
    float wave = sin(vUv.y * 20.0 + uTime) * 0.5 + 0.5;\r
    float offset = uOffset * wave;\r
    \r
    vec4 cr = texture2D(tDiffuse, vUv + vec2(offset, 0.0));\r
    vec4 cga = texture2D(tDiffuse, vUv);\r
    vec4 cb = texture2D(tDiffuse, vUv - vec2(offset, 0.0));\r
    \r
    gl_FragColor = vec4(cr.r, cga.g, cb.b, 1.0);\r
}`;const JR={uniforms:we,vertexShader:$R,fragmentShader:qR},eP={uniforms:{...hi.sunUniforms,uLightDirection:{value:hi.sunUniforms.uLightDirection.value.clone()}},vertexShader:vp,fragmentShader:KR},tP={uniforms:hi.fogUniforms,vertexShader:vp,fragmentShader:ZR},nP={uniforms:hi.chromaticAberrationUniforms,vertexShader:vp,fragmentShader:QR};function iP(t){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e),t}}function Bo(t,e){var n=t.__state.conversionName.toString(),i=Math.round(t.r),r=Math.round(t.g),o=Math.round(t.b),s=t.a,a=Math.round(t.h),l=t.s.toFixed(1),u=t.v.toFixed(1);if(e||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var c=t.hex.toString(16);c.length<6;)c="0"+c;return"#"+c}else{if(n==="CSS_RGB")return"rgb("+i+","+r+","+o+")";if(n==="CSS_RGBA")return"rgba("+i+","+r+","+o+","+s+")";if(n==="HEX")return"0x"+t.hex.toString(16);if(n==="RGB_ARRAY")return"["+i+","+r+","+o+"]";if(n==="RGBA_ARRAY")return"["+i+","+r+","+o+","+s+"]";if(n==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+o+"}";if(n==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+o+",a:"+s+"}";if(n==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(n==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+s+"}"}return"unknown format"}var n_=Array.prototype.forEach,Us=Array.prototype.slice,q={BREAK:{},extend:function(e){return this.each(Us.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(r){this.isUndefined(n[r])||(e[r]=n[r])}).bind(this))},this),e},defaults:function(e){return this.each(Us.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(r){this.isUndefined(e[r])&&(e[r]=n[r])}).bind(this))},this),e},compose:function(){var e=Us.call(arguments);return function(){for(var n=Us.call(arguments),i=e.length-1;i>=0;i--)n=[e[i].apply(this,n)];return n[0]}},each:function(e,n,i){if(e){if(n_&&e.forEach&&e.forEach===n_)e.forEach(n,i);else if(e.length===e.length+0){var r=void 0,o=void 0;for(r=0,o=e.length;r<o;r++)if(r in e&&n.call(i,e[r],r)===this.BREAK)return}else for(var s in e)if(n.call(i,e[s],s)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,n,i){var r=void 0;return function(){var o=this,s=arguments;function a(){r=null,i||e.apply(o,s)}var l=i||!r;clearTimeout(r),r=setTimeout(a,n),l&&e.apply(o,s)}},toArray:function(e){return e.toArray?e.toArray():Us.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(t){function e(n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return isNaN(t)}),isArray:Array.isArray||function(t){return t.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},rP=[{litmus:q.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:Bo},SIX_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:Bo},CSS_RGB:{read:function(e){var n=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:Bo},CSS_RGBA:{read:function(e){var n=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:Bo}}},{litmus:q.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:q.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:q.isObject,conversions:{RGBA_OBJ:{read:function(e){return q.isNumber(e.r)&&q.isNumber(e.g)&&q.isNumber(e.b)&&q.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return q.isNumber(e.r)&&q.isNumber(e.g)&&q.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return q.isNumber(e.h)&&q.isNumber(e.s)&&q.isNumber(e.v)&&q.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return q.isNumber(e.h)&&q.isNumber(e.s)&&q.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ns=void 0,bl=void 0,Jd=function(){bl=!1;var e=arguments.length>1?q.toArray(arguments):arguments[0];return q.each(rP,function(n){if(n.litmus(e))return q.each(n.conversions,function(i,r){if(Ns=i.read(e),bl===!1&&Ns!==!1)return bl=Ns,Ns.conversionName=r,Ns.conversion=i,q.BREAK}),q.BREAK}),bl},i_=void 0,Ru={hsv_to_rgb:function(e,n,i){var r=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),s=i*(1-n),a=i*(1-o*n),l=i*(1-(1-o)*n),u=[[i,l,s],[a,i,s],[s,i,l],[s,a,i],[l,s,i],[i,s,a]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,n,i){var r=Math.min(e,n,i),o=Math.max(e,n,i),s=o-r,a=void 0,l=void 0;if(o!==0)l=s/o;else return{h:NaN,s:0,v:0};return e===o?a=(n-i)/s:n===o?a=2+(i-e)/s:a=4+(e-n)/s,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:o/255}},rgb_to_hex:function(e,n,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,n),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,n){return e>>n*8&255},hex_with_component:function(e,n,i){return i<<(i_=n*8)|e&~(255<<i_)}},oP=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},si=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ai=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_r=function t(e,n,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(r===void 0){var o=Object.getPrototypeOf(e);return o===null?void 0:t(o,n,i)}else{if("value"in r)return r.value;var s=r.get;return s===void 0?void 0:s.call(i)}},Er=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Mr=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Bt=function(){function t(){if(si(this,t),this.__state=Jd.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return ai(t,[{key:"toString",value:function(){return Bo(this)}},{key:"toHexString",value:function(){return Bo(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),t}();function yp(t,e,n){Object.defineProperty(t,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Bt.recalculateRGB(this,e,n),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Bt.recalculateRGB(this,e,n),this.__state.space="RGB"),this.__state[e]=r}})}function xp(t,e){Object.defineProperty(t,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Bt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Bt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Bt.recalculateRGB=function(t,e,n){if(t.__state.space==="HEX")t.__state[e]=Ru.component_from_hex(t.__state.hex,n);else if(t.__state.space==="HSV")q.extend(t.__state,Ru.hsv_to_rgb(t.__state.h,t.__state.s,t.__state.v));else throw new Error("Corrupted color state")};Bt.recalculateHSV=function(t){var e=Ru.rgb_to_hsv(t.r,t.g,t.b);q.extend(t.__state,{s:e.s,v:e.v}),q.isNaN(e.h)?q.isUndefined(t.__state.h)&&(t.__state.h=0):t.__state.h=e.h};Bt.COMPONENTS=["r","g","b","h","s","v","hex","a"];yp(Bt.prototype,"r",2);yp(Bt.prototype,"g",1);yp(Bt.prototype,"b",0);xp(Bt.prototype,"h");xp(Bt.prototype,"s");xp(Bt.prototype,"v");Object.defineProperty(Bt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Bt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Ru.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var io=function(){function t(e,n){si(this,t),this.initialValue=e[n],this.domElement=document.createElement("div"),this.object=e,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return ai(t,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),t}(),sP={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Ay={};q.each(sP,function(t,e){q.each(t,function(n){Ay[n]=e})});var aP=/(\d+(\.\d+)?)px/;function ui(t){if(t==="0"||q.isUndefined(t))return 0;var e=t.match(aP);return q.isNull(e)?0:parseFloat(e[1])}var k={makeSelectable:function(e,n){e===void 0||e.style===void 0||(e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off")},makeFullscreen:function(e,n,i){var r=i,o=n;q.isUndefined(o)&&(o=!0),q.isUndefined(r)&&(r=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,n,i,r){var o=i||{},s=Ay[n];if(!s)throw new Error("Event type "+n+" not supported.");var a=document.createEvent(s);switch(s){case"MouseEvents":{var l=o.x||o.clientX||0,u=o.y||o.clientY||0;a.initMouseEvent(n,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var c=a.initKeyboardEvent||a.initKeyEvent;q.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(n,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break}default:{a.initEvent(n,o.bubbles||!1,o.cancelable||!0);break}}q.defaults(a,r),e.dispatchEvent(a)},bind:function(e,n,i,r){var o=r||!1;return e.addEventListener?e.addEventListener(n,i,o):e.attachEvent&&e.attachEvent("on"+n,i),k},unbind:function(e,n,i,r){var o=r||!1;return e.removeEventListener?e.removeEventListener(n,i,o):e.detachEvent&&e.detachEvent("on"+n,i),k},addClass:function(e,n){if(e.className===void 0)e.className=n;else if(e.className!==n){var i=e.className.split(/ +/);i.indexOf(n)===-1&&(i.push(n),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return k},removeClass:function(e,n){if(n)if(e.className===n)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(n);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return k},hasClass:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var n=getComputedStyle(e);return ui(n["border-left-width"])+ui(n["border-right-width"])+ui(n["padding-left"])+ui(n["padding-right"])+ui(n.width)},getHeight:function(e){var n=getComputedStyle(e);return ui(n["border-top-width"])+ui(n["border-bottom-width"])+ui(n["padding-top"])+ui(n["padding-bottom"])+ui(n.height)},getOffset:function(e){var n=e,i={left:0,top:0};if(n.offsetParent)do i.left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;while(n);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Cy=function(t){Er(e,t);function e(n,i){si(this,e);var r=Mr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),o=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function s(){o.setValue(!o.__prev)}return k.bind(r.__checkbox,"change",s,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return ai(e,[{key:"setValue",value:function(i){var r=_r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),_r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(io),lP=function(t){Er(e,t);function e(n,i,r){si(this,e);var o=Mr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=r,a=o;if(o.__select=document.createElement("select"),q.isArray(s)){var l={};q.each(s,function(u){l[u]=u}),s=l}return q.each(s,function(u,c){var f=document.createElement("option");f.innerHTML=c,f.setAttribute("value",u),a.__select.appendChild(f)}),o.updateDisplay(),k.bind(o.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),o.domElement.appendChild(o.__select),o}return ai(e,[{key:"setValue",value:function(i){var r=_r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return k.isActive(this.__select)?this:(this.__select.value=this.getValue(),_r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(io),uP=function(t){Er(e,t);function e(n,i){si(this,e);var r=Mr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),o=r;function s(){o.setValue(o.__input.value)}function a(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),k.bind(r.__input,"keyup",s),k.bind(r.__input,"change",s),k.bind(r.__input,"blur",a),k.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return ai(e,[{key:"updateDisplay",value:function(){return k.isActive(this.__input)||(this.__input.value=this.getValue()),_r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(io);function r_(t){var e=t.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var by=function(t){Er(e,t);function e(n,i,r){si(this,e);var o=Mr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=r||{};return o.__min=s.min,o.__max=s.max,o.__step=s.step,q.isUndefined(o.__step)?o.initialValue===0?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=r_(o.__impliedStep),o}return ai(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),_r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=r_(i),this}}]),e}(io);function cP(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}var Pu=function(t){Er(e,t);function e(n,i,r){si(this,e);var o=Mr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,r));o.__truncationSuspended=!1;var s=o,a=void 0;function l(){var g=parseFloat(s.__input.value);q.isNaN(g)||s.setValue(g)}function u(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function c(){u()}function f(g){var y=a-g.clientY;s.setValue(s.getValue()+y*s.__impliedStep),a=g.clientY}function h(){k.unbind(window,"mousemove",f),k.unbind(window,"mouseup",h),u()}function m(g){k.bind(window,"mousemove",f),k.bind(window,"mouseup",h),a=g.clientY}return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),k.bind(o.__input,"change",l),k.bind(o.__input,"blur",c),k.bind(o.__input,"mousedown",m),k.bind(o.__input,"keydown",function(g){g.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,u())}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return ai(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():cP(this.getValue(),this.__precision),_r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(by);function o_(t,e,n,i,r){return i+(r-i)*((t-e)/(n-e))}var eh=function(t){Er(e,t);function e(n,i,r,o,s){si(this,e);var a=Mr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,{min:r,max:o,step:s})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),k.bind(a.__background,"mousedown",u),k.bind(a.__background,"touchstart",h),k.addClass(a.__background,"slider"),k.addClass(a.__foreground,"slider-fg");function u(y){document.activeElement.blur(),k.bind(window,"mousemove",c),k.bind(window,"mouseup",f),c(y)}function c(y){y.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(o_(y.clientX,p.left,p.right,l.__min,l.__max)),!1}function f(){k.unbind(window,"mousemove",c),k.unbind(window,"mouseup",f),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(y){y.touches.length===1&&(k.bind(window,"touchmove",m),k.bind(window,"touchend",g),m(y))}function m(y){var p=y.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(o_(p,d.left,d.right,l.__min,l.__max))}function g(){k.unbind(window,"touchmove",m),k.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return ai(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",_r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(by),Ry=function(t){Er(e,t);function e(n,i,r){si(this,e);var o=Mr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=o;return o.__button=document.createElement("div"),o.__button.innerHTML=r===void 0?"Fire":r,k.bind(o.__button,"click",function(a){return a.preventDefault(),s.fire(),!1}),k.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return ai(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(io),th=function(t){Er(e,t);function e(n,i){si(this,e);var r=Mr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));r.__color=new Bt(r.getValue()),r.__temp=new Bt(0);var o=r;r.domElement=document.createElement("div"),k.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",k.bind(r.__input,"keydown",function(y){y.keyCode===13&&f.call(this)}),k.bind(r.__input,"blur",f),k.bind(r.__selector,"mousedown",function(){k.addClass(this,"drag").bind(window,"mouseup",function(){k.removeClass(o.__selector,"drag")})}),k.bind(r.__selector,"touchstart",function(){k.addClass(this,"drag").bind(window,"touchend",function(){k.removeClass(o.__selector,"drag")})});var s=document.createElement("div");q.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),q.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),q.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),q.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),q.extend(s.style,{width:"100%",height:"100%",background:"none"}),s_(s,"top","rgba(0,0,0,0)","#000"),q.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),dP(r.__hue_field),q.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),k.bind(r.__saturation_field,"mousedown",a),k.bind(r.__saturation_field,"touchstart",a),k.bind(r.__field_knob,"mousedown",a),k.bind(r.__field_knob,"touchstart",a),k.bind(r.__hue_field,"mousedown",l),k.bind(r.__hue_field,"touchstart",l);function a(y){m(y),k.bind(window,"mousemove",m),k.bind(window,"touchmove",m),k.bind(window,"mouseup",u),k.bind(window,"touchend",u)}function l(y){g(y),k.bind(window,"mousemove",g),k.bind(window,"touchmove",g),k.bind(window,"mouseup",c),k.bind(window,"touchend",c)}function u(){k.unbind(window,"mousemove",m),k.unbind(window,"touchmove",m),k.unbind(window,"mouseup",u),k.unbind(window,"touchend",u),h()}function c(){k.unbind(window,"mousemove",g),k.unbind(window,"touchmove",g),k.unbind(window,"mouseup",c),k.unbind(window,"touchend",c),h()}function f(){var y=Jd(this.value);y!==!1?(o.__color.__state=y,o.setValue(o.__color.toOriginal())):this.value=o.__color.toString()}function h(){o.__onFinishChange&&o.__onFinishChange.call(o,o.__color.toOriginal())}r.__saturation_field.appendChild(s),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function m(y){y.type.indexOf("touch")===-1&&y.preventDefault();var p=o.__saturation_field.getBoundingClientRect(),d=y.touches&&y.touches[0]||y,_=d.clientX,v=d.clientY,E=(_-p.left)/(p.right-p.left),b=1-(v-p.top)/(p.bottom-p.top);return b>1?b=1:b<0&&(b=0),E>1?E=1:E<0&&(E=0),o.__color.v=b,o.__color.s=E,o.setValue(o.__color.toOriginal()),!1}function g(y){y.type.indexOf("touch")===-1&&y.preventDefault();var p=o.__hue_field.getBoundingClientRect(),d=y.touches&&y.touches[0]||y,_=d.clientY,v=1-(_-p.top)/(p.bottom-p.top);return v>1?v=1:v<0&&(v=0),o.__color.h=v*360,o.setValue(o.__color.toOriginal()),!1}return r}return ai(e,[{key:"updateDisplay",value:function(){var i=Jd(this.getValue());if(i!==!1){var r=!1;q.each(Bt.COMPONENTS,function(a){if(!q.isUndefined(i[a])&&!q.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&q.extend(this.__color.__state,i)}q.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var o=this.__color.v<.5||this.__color.s>.5?255:0,s=255-o;q.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+o+","+o+","+o+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,s_(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),q.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+o+","+o+","+o+")",textShadow:this.__input_textShadow+"rgba("+s+","+s+","+s+",.7)"})}}]),e}(io),fP=["-moz-","-o-","-webkit-","-ms-",""];function s_(t,e,n,i){t.style.background="",q.each(fP,function(r){t.style.cssText+="background: "+r+"linear-gradient("+e+", "+n+" 0%, "+i+" 100%); "})}function dP(t){t.style.background="",t.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",t.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var hP={load:function(e,n){var i=n||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,n){var i=n||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var o=i.getElementsByTagName("head")[0];try{o.appendChild(r)}catch{}}},pP=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,mP=function(e,n){var i=e[n];return q.isArray(arguments[2])||q.isObject(arguments[2])?new lP(e,n,arguments[2]):q.isNumber(i)?q.isNumber(arguments[2])&&q.isNumber(arguments[3])?q.isNumber(arguments[4])?new eh(e,n,arguments[2],arguments[3],arguments[4]):new eh(e,n,arguments[2],arguments[3]):q.isNumber(arguments[4])?new Pu(e,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Pu(e,n,{min:arguments[2],max:arguments[3]}):q.isString(i)?new uP(e,n):q.isFunction(i)?new Ry(e,n,""):q.isBoolean(i)?new Cy(e,n):null};function gP(t){setTimeout(t,1e3/60)}var _P=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||gP,vP=function(){function t(){si(this,t),this.backgroundElement=document.createElement("div"),q.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),k.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),q.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;k.bind(this.backgroundElement,"click",function(){e.hide()})}return ai(t,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),q.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,i=function r(){n.domElement.style.display="none",n.backgroundElement.style.display="none",k.unbind(n.domElement,"webkitTransitionEnd",r),k.unbind(n.domElement,"transitionend",r),k.unbind(n.domElement,"oTransitionEnd",r)};k.bind(this.domElement,"webkitTransitionEnd",i),k.bind(this.domElement,"transitionend",i),k.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-k.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-k.getHeight(this.domElement)/2+"px"}}]),t}(),yP=iP(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);hP.inject(yP);var a_="dg",l_=72,u_=20,wa="Default",Hs=function(){try{return!!window.localStorage}catch{return!1}}(),ea=void 0,c_=!0,Mo=void 0,df=!1,Py=[],lt=function t(e){var n=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),k.addClass(this.domElement,a_),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=q.defaults(i,{closeOnTop:!1,autoPlace:!0,width:t.DEFAULT_WIDTH}),i=q.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),q.isUndefined(i.load)?i.load={preset:wa}:i.preset&&(i.load.preset=i.preset),q.isUndefined(i.parent)&&i.hideable&&Py.push(this),i.resizable=q.isUndefined(i.parent)&&i.resizable,i.autoPlace&&q.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=Hs&&localStorage.getItem(To(this,"isLocal"))==="true",o=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(h){n.parent?n.getRoot().preset=h:i.load.preset=h,MP(this),n.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,rh(n,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,s&&(s.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?k.addClass(n.__ul,t.CLASS_CLOSED):k.removeClass(n.__ul,t.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=h?t.TEXT_OPEN:t.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(h){Hs&&(r=h,h?k.bind(window,"unload",o):k.unbind(window,"unload",o),localStorage.setItem(To(n,"isLocal"),h))}}}),q.isUndefined(i.parent)){if(this.closed=i.closed||!1,k.addClass(this.domElement,t.CLASS_MAIN),k.makeSelectable(this.domElement,!1),Hs&&r){n.useLocalStorage=!0;var a=localStorage.getItem(To(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=t.TEXT_CLOSED,k.addClass(this.__closeButton,t.CLASS_CLOSE_BUTTON),i.closeOnTop?(k.addClass(this.__closeButton,t.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(k.addClass(this.__closeButton,t.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),k.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);k.addClass(l,"controller-name"),s=Sp(n,l);var u=function(h){return h.preventDefault(),n.closed=!n.closed,!1};k.addClass(this.__ul,t.CLASS_CLOSED),k.addClass(s,"title"),k.bind(s,"click",u),i.closed||(this.closed=!1)}i.autoPlace&&(q.isUndefined(i.parent)&&(c_&&(Mo=document.createElement("div"),k.addClass(Mo,a_),k.addClass(Mo,t.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Mo),c_=!1),Mo.appendChild(this.domElement),k.addClass(this.domElement,t.CLASS_AUTO_PLACE)),this.parent||rh(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},k.bind(window,"resize",this.__resizeHandler),k.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),k.bind(this.__ul,"transitionend",this.__resizeHandler),k.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&EP(this),o=function(){Hs&&localStorage.getItem(To(n,"isLocal"))==="true"&&localStorage.setItem(To(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=o;function c(){var f=n.getRoot();f.width+=1,q.defer(function(){f.width-=1})}i.parent||c()};lt.toggleHide=function(){df=!df,q.each(Py,function(t){t.domElement.style.display=df?"none":""})};lt.CLASS_AUTO_PLACE="a";lt.CLASS_AUTO_PLACE_CONTAINER="ac";lt.CLASS_MAIN="main";lt.CLASS_CONTROLLER_ROW="cr";lt.CLASS_TOO_TALL="taller-than-window";lt.CLASS_CLOSED="closed";lt.CLASS_CLOSE_BUTTON="close-button";lt.CLASS_CLOSE_TOP="close-top";lt.CLASS_CLOSE_BOTTOM="close-bottom";lt.CLASS_DRAG="drag";lt.DEFAULT_WIDTH=245;lt.TEXT_CLOSED="Close Controls";lt.TEXT_OPEN="Open Controls";lt._keydownHandler=function(t){document.activeElement.type!=="text"&&(t.which===l_||t.keyCode===l_)&&lt.toggleHide()};k.bind(window,"keydown",lt._keydownHandler,!1);q.extend(lt.prototype,{add:function(e,n){return ta(this,e,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,n){return ta(this,e,n,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var n=this;q.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Mo.removeChild(this.domElement);var e=this;q.each(this.__folders,function(n){e.removeFolder(n)}),k.unbind(window,"keydown",lt._keydownHandler,!1),f_(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var n={name:e,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(n.closed=this.load.folders[e].closed,n.load=this.load.folders[e]);var i=new lt(n);this.__folders[e]=i;var r=Sp(this,i.domElement);return k.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],f_(e);var n=this;q.each(e.__folders,function(i){e.removeFolder(i)}),q.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var n=k.getOffset(e.__ul).top,i=0;q.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=k.getHeight(r))}),window.innerHeight-n-u_<i?(k.addClass(e.domElement,lt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-n-u_+"px"):(k.removeClass(e.domElement,lt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&q.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:q.debounce(function(){this.onResize()},50),remember:function(){if(q.isUndefined(ea)&&(ea=new vP,ea.domElement.innerHTML=pP),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;q.each(Array.prototype.slice.call(arguments),function(n){e.__rememberedObjects.length===0&&SP(e),e.__rememberedObjects.indexOf(n)===-1&&e.__rememberedObjects.push(n)}),this.autoPlace&&rh(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Rl(this)),e.folders={},q.each(this.__folders,function(n,i){e.folders[i]=n.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Rl(this),nh(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[wa]=Rl(this,!0)),this.load.remembered[e]=Rl(this),this.preset=e,ih(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){q.each(this.__controllers,function(n){this.getRoot().load.remembered?Ly(e||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),q.each(this.__folders,function(n){n.revert(n)}),e||nh(this.getRoot(),!1)},listen:function(e){var n=this.__listening.length===0;this.__listening.push(e),n&&Dy(this.__listening)},updateDisplay:function(){q.each(this.__controllers,function(e){e.updateDisplay()}),q.each(this.__folders,function(e){e.updateDisplay()})}});function Sp(t,e,n){var i=document.createElement("li");return e&&i.appendChild(e),n?t.__ul.insertBefore(i,n):t.__ul.appendChild(i),t.onResize(),i}function f_(t){k.unbind(window,"resize",t.__resizeHandler),t.saveToLocalStorageIfPossible&&k.unbind(window,"unload",t.saveToLocalStorageIfPossible)}function nh(t,e){var n=t.__preset_select[t.__preset_select.selectedIndex];e?n.innerHTML=n.value+"*":n.innerHTML=n.value}function xP(t,e,n){if(n.__li=e,n.__gui=t,q.extend(n,{options:function(s){if(arguments.length>1){var a=n.__li.nextElementSibling;return n.remove(),ta(t,n.object,n.property,{before:a,factoryArgs:[q.toArray(arguments)]})}if(q.isArray(s)||q.isObject(s)){var l=n.__li.nextElementSibling;return n.remove(),ta(t,n.object,n.property,{before:l,factoryArgs:[s]})}},name:function(s){return n.__li.firstElementChild.firstElementChild.innerHTML=s,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof eh){var i=new Pu(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});q.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(o){var s=n[o],a=i[o];n[o]=i[o]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),s.apply(n,l)}}),k.addClass(e,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof Pu){var r=function(s){if(q.isNumber(n.__min)&&q.isNumber(n.__max)){var a=n.__li.firstElementChild.firstElementChild.innerHTML,l=n.__gui.__listening.indexOf(n)>-1;n.remove();var u=ta(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return u.name(a),l&&u.listen(),u}return s};n.min=q.compose(r,n.min),n.max=q.compose(r,n.max)}else n instanceof Cy?(k.bind(e,"click",function(){k.fakeEvent(n.__checkbox,"click")}),k.bind(n.__checkbox,"click",function(o){o.stopPropagation()})):n instanceof Ry?(k.bind(e,"click",function(){k.fakeEvent(n.__button,"click")}),k.bind(e,"mouseover",function(){k.addClass(n.__button,"hover")}),k.bind(e,"mouseout",function(){k.removeClass(n.__button,"hover")})):n instanceof th&&(k.addClass(e,"color"),n.updateDisplay=q.compose(function(o){return e.style.borderLeftColor=n.__color.toString(),o},n.updateDisplay),n.updateDisplay());n.setValue=q.compose(function(o){return t.getRoot().__preset_select&&n.isModified()&&nh(t.getRoot(),!0),o},n.setValue)}function Ly(t,e){var n=t.getRoot(),i=n.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=n.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},n.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,n.load&&n.load.remembered){var o=n.load.remembered,s=void 0;if(o[t.preset])s=o[t.preset];else if(o[wa])s=o[wa];else return;if(s[i]&&s[i][e.property]!==void 0){var a=s[i][e.property];e.initialValue=a,e.setValue(a)}}}}function ta(t,e,n,i){if(e[n]===void 0)throw new Error('Object "'+e+'" has no property "'+n+'"');var r=void 0;if(i.color)r=new th(e,n);else{var o=[e,n].concat(i.factoryArgs);r=mP.apply(t,o)}i.before instanceof io&&(i.before=i.before.__li),Ly(t,r),k.addClass(r.domElement,"c");var s=document.createElement("span");k.addClass(s,"property-name"),s.innerHTML=r.property;var a=document.createElement("div");a.appendChild(s),a.appendChild(r.domElement);var l=Sp(t,a,i.before);return k.addClass(l,lt.CLASS_CONTROLLER_ROW),r instanceof th?k.addClass(l,"color"):k.addClass(l,oP(r.getValue())),xP(t,l,r),t.__controllers.push(r),r}function To(t,e){return document.location.href+"."+e}function ih(t,e,n){var i=document.createElement("option");i.innerHTML=e,i.value=e,t.__preset_select.appendChild(i),n&&(t.__preset_select.selectedIndex=t.__preset_select.length-1)}function d_(t,e){e.style.display=t.useLocalStorage?"block":"none"}function SP(t){var e=t.__save_row=document.createElement("li");k.addClass(t.domElement,"has-save"),t.__ul.insertBefore(e,t.__ul.firstChild),k.addClass(e,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",k.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",k.addClass(i,"button"),k.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",k.addClass(r,"button"),k.addClass(r,"save-as");var o=document.createElement("span");o.innerHTML="Revert",k.addClass(o,"button"),k.addClass(o,"revert");var s=t.__preset_select=document.createElement("select");if(t.load&&t.load.remembered?q.each(t.load.remembered,function(f,h){ih(t,h,h===t.preset)}):ih(t,wa,!1),k.bind(s,"change",function(){for(var f=0;f<t.__preset_select.length;f++)t.__preset_select[f].innerHTML=t.__preset_select[f].value;t.preset=this.value}),e.appendChild(s),e.appendChild(n),e.appendChild(i),e.appendChild(r),e.appendChild(o),Hs){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(To(t,"isLocal"))==="true"&&l.setAttribute("checked","checked"),d_(t,a),k.bind(l,"change",function(){t.useLocalStorage=!t.useLocalStorage,d_(t,a)})}var c=document.getElementById("dg-new-constructor");k.bind(c,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&ea.hide()}),k.bind(n,"click",function(){c.innerHTML=JSON.stringify(t.getSaveObject(),void 0,2),ea.show(),c.focus(),c.select()}),k.bind(i,"click",function(){t.save()}),k.bind(r,"click",function(){var f=prompt("Enter a new preset name.");f&&t.saveAs(f)}),k.bind(o,"click",function(){t.revert()})}function EP(t){var e=void 0;t.__resize_handle=document.createElement("div"),q.extend(t.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(o){return o.preventDefault(),t.width+=e-o.clientX,t.onResize(),e=o.clientX,!1}function i(){k.removeClass(t.__closeButton,lt.CLASS_DRAG),k.unbind(window,"mousemove",n),k.unbind(window,"mouseup",i)}function r(o){return o.preventDefault(),e=o.clientX,k.addClass(t.__closeButton,lt.CLASS_DRAG),k.bind(window,"mousemove",n),k.bind(window,"mouseup",i),!1}k.bind(t.__resize_handle,"mousedown",r),k.bind(t.__closeButton,"mousedown",r),t.domElement.insertBefore(t.__resize_handle,t.domElement.firstElementChild)}function rh(t,e){t.domElement.style.width=e+"px",t.__save_row&&t.autoPlace&&(t.__save_row.style.width=e+"px"),t.__closeButton&&(t.__closeButton.style.width=e+"px")}function Rl(t,e){var n={};return q.each(t.__rememberedObjects,function(i,r){var o={},s=t.__rememberedObjectIndecesToControllers[r];q.each(s,function(a,l){o[l]=e?a.initialValue:a.getValue()}),n[r]=o}),n}function MP(t){for(var e=0;e<t.__preset_select.length;e++)t.__preset_select[e].value===t.preset&&(t.__preset_select.selectedIndex=e)}function Dy(t){t.length!==0&&_P.call(window,function(){Dy(t)}),q.each(t,function(e){e.updateDisplay()})}var Iy=lt;function TP(t,e){const n=new Iy,i=n.addFolder("Mesh Properties");i.add(t.material,"wireframe").name("Wireframe");const r=s=>{fn.width=s,fn.height=s,e()},o=s=>{fn.widthSegments=s,fn.heightSegments=s,e()};return i.add(fn,"width").min(50).max(1e3).step(10).name("Dimensions").onChange(r),i.add(fn,"widthSegments").min(1).max(256).step(1).name("Segments").onChange(o),i.open(),n}function wP(t){const e=t.addFolder("Vertex Shader Properties");e.add(we.uWaveCount,"value",1,Et.MAX_WAVES,1).name("Number of Waves");const n=e.addFolder("Wave"),i={amplitude:we.uWaveParams.value.x,frequency:we.uWaveParams.value.y,speed:we.uWaveParams.value.z,persistence:we.uWaveParams.value.w,peakHeight:we.uPeakHeight.value};return n.add(i,"amplitude",Et.amplitude.min,Et.amplitude.max,Et.amplitude.step).name("Amplitude").onChange(r=>{we.uWaveParams.value.x=r}),n.add(i,"frequency",Et.frequency.min,Et.frequency.max,Et.frequency.step).name("Frequency").onChange(r=>{we.uWaveParams.value.y=r}),n.add(i,"speed",Et.speed.min,Et.speed.max,Et.speed.step).name("Speed").onChange(r=>{we.uWaveParams.value.z=r}),n.add(i,"persistence",Et.persistence.min,Et.persistence.max,Et.persistence.step).name("Persistence").onChange(r=>{we.uWaveParams.value.w=r}),n.add(i,"peakHeight",Et.peakHeight.min,Et.peakHeight.max,Et.peakHeight.step).name("Peak Height").onChange(r=>{we.uPeakHeight.value=r}),n.open(),e.open(),t}function AP(t){const e=t.addFolder("Fragment Shader Properties"),n={color:[we.uWaterColor.value.r*255,we.uWaterColor.value.g*255,we.uWaterColor.value.b*255],smoothness:we.uSmoothness.value,fresnelPower:we.uFresnelPower.value,scatteringDepth:we.uScatteringDepth.value,backScatteringStrength:we.uBackScatteringStrength.value,sideScatteringStrength:we.uSideScatteringStrength.value,sideScatterFocus:we.uSideScatterFocus.value,waterIOR:we.uWaterIOR.value,turbidity:we.uTurbidity.value,depthColor:we.uDepthColor.value},i={color:e.addColor(n,"color").name("Wave Color").onChange(r=>{we.uWaterColor.value.setRGB(r[0]/255,r[1]/255,r[2]/255)}),smoothness:e.add(n,"smoothness").min(ot.smoothness.min).max(ot.smoothness.max).step(ot.smoothness.step).name("Smoothness").onChange(r=>{we.uSmoothness.value=r}),fresnelPower:e.add(n,"fresnelPower").min(ot.fresnelPower.min).max(ot.fresnelPower.max).step(ot.fresnelPower.step).name("Fresnel Power").onChange(r=>{we.uFresnelPower.value=r}),scatteringDepth:e.add(n,"scatteringDepth").min(ot.scatteringDepth.min).max(ot.scatteringDepth.max).step(ot.scatteringDepth.step).name("Scattering Depth").onChange(r=>{we.uScatteringDepth.value=r}),backScatteringStrength:e.add(n,"backScatteringStrength").min(ot.backScatteringStrength.min).max(ot.backScatteringStrength.max).step(ot.backScatteringStrength.step).name("Back Scattering Strength").onChange(r=>{we.uBackScatteringStrength.value=r}),sideScatteringStrength:e.add(n,"sideScatteringStrength").min(ot.sideScatteringStrength.min).max(ot.sideScatteringStrength.max).step(ot.sideScatteringStrength.step).name("Side Scattering Strength").onChange(r=>{we.uSideScatteringStrength.value=r}),sideScatterFocus:e.add(n,"sideScatterFocus").min(ot.sideScatterFocus.min).max(ot.sideScatterFocus.max).step(ot.sideScatterFocus.step).name("Side Scatter Focus").onChange(r=>{we.uSideScatterFocus.value=r}),waterIOR:e.add(n,"waterIOR").min(ot.waterIOR.min).max(ot.waterIOR.max).step(ot.waterIOR.step).name("Water IOR").onChange(r=>{we.uWaterIOR.value=r}),turbidity:e.add(n,"turbidity").min(ot.turbidity.min).max(ot.turbidity.max).step(ot.turbidity.step).name("Turbidity").onChange(r=>{we.uTurbidity.value=r}),depthColor:e.add(n,"depthColor").min(ot.depthColor.min).max(ot.depthColor.max).step(ot.depthColor.step).name("Depth Color").onChange(r=>{we.uDepthColor.value=r})};return e.open(),{gui:t,fragmentFolder:e,config:n,controllers:i}}function CP(t,e,n){const i={waterPreset:"defaultWater"},r=s=>{const a=Qd[s];if(a)for(const[l,u]of Object.entries(a.uniforms))if(l==="uWaterColor"){const c=new Ke(u);we[l].value.setRGB(c.r,c.g,c.b),e.color=[c.r*255,c.g*255,c.b*255],n.color.updateDisplay()}else{we[l].value=u;const c=l.charAt(1).toLowerCase()+l.slice(2);e[c]=u,n[c]&&n[c].updateDisplay()}},o={};for(const[s,a]of Object.entries(Qd))o[a.name]=s;return t.add(i,"waterPreset",o).name("Water Preset").onChange(r),r(i.waterPreset),t}function bP(t,e,n,i,r){const o={showLightDirection:!1,lightDirection:{water:{x:we.uLightDirection.value.x,y:we.uLightDirection.value.y,z:we.uLightDirection.value.z},sun:{x:hi.sunUniforms.uLightDirection.value.x,y:hi.sunUniforms.uLightDirection.value.y,z:hi.sunUniforms.uLightDirection.value.z}},cameraPreset:"lowAngleRim"},s=l=>{const u=Zn[l];if(!u)return;const c=new N(u.light.x,u.light.y,u.light.z).normalize();o.lightDirection.water.x=c.x,o.lightDirection.water.y=c.y,o.lightDirection.water.z=c.z,o.lightDirection.sun.x=c.x,o.lightDirection.sun.y=c.y,o.lightDirection.sun.z=c.z,we.uLightDirection.value.copy(c),hi.sunUniforms.uLightDirection.value.copy(c),r&&r.uniforms.uLightDirection&&r.uniforms.uLightDirection.value.copy(c),i.position.set(u.camera.x,u.camera.y,u.camera.z),i.lookAt(0,0,0),a()},a=()=>{const l=new N(o.lightDirection.water.x,o.lightDirection.water.y,o.lightDirection.water.z).normalize(),u=new N(o.lightDirection.sun.x,o.lightDirection.sun.y,o.lightDirection.sun.z).normalize();we.uLightDirection.value.copy(l),hi.sunUniforms.uLightDirection.value.copy(u),r&&r.uniforms.uLightDirection&&r.uniforms.uLightDirection.value.copy(u),e.setDirection(l),n.position.copy(l.multiplyScalar(250))};return t.add(o,"showLightDirection").name("Show Light Direction").onChange(l=>{e.visible=l,n.visible=l}),t.add(o,"cameraPreset",{"Backlight Showcase":"backlight","Sunrise Glow":"sunrise","Overhead Drama":"overhead","Low Angle Rim Light":"lowAngleRim","Grazing Light":"grazing","Dual Tone":"dualTone","Dramatic Contrast":"dramatic","Underwater Feel":"underwater","Artistic Profile":"artistic","Scatter Highlight":"scatterHighlight"}).name("Viewing Preset").onChange(s),a(),t}function RP(t,e,n,i){const r=new Iy;wP(r);const{config:o,controllers:s}=AP(r),a=r.addFolder("Presets");return bP(a,t,e,n,i),CP(a,o,s),a.open(),r}function PP(){return xe.useEffect(()=>{const t=new YR("shaderCanvas");t.initialize();const e=new Kl(eP),n=new Kl(tP),i=new Kl(nP),r=new mp(5,32,32),o=new Zu({color:16776960}),s=new An(r,o);s.position.set(5,5,5),t.scene.add(s),s.visible=!1;const a=new MR(new N(5,5,5),new N(0,0,0),5,16776960,1,.5);t.scene.add(a),a.visible=!1;let l=0;const u=1/60;let c=0;const f=RP(a,s,t.camera,e),h=new fs(fn.width,fn.height,fn.widthSegments,fn.heightSegments),m=new oi(JR),g=new An(h,m);g.position.set(0,0,0),t.scene.add(g);const p=TP(g,()=>{const _=new fs(fn.width,fn.height,fn.widthSegments,fn.heightSegments);g.geometry.dispose(),g.geometry=_});t.composer.addPass(e),t.composer.addPass(n),t.composer.addPass(i);const d=_=>{const v=_-l;for(l=_,c+=v;c>=u;)we.uTime.value+=u,e.uniforms.uProjectionMatrix.value.copy(t.camera.projectionMatrix),e.uniforms.uViewMatrix.value.copy(t.camera.matrixWorldInverse),e.uniforms.uLightDirection.value.copy(hi.sunUniforms.uLightDirection.value),c-=u;a.position.copy(g.position)};return t.animate(d),()=>{f.destroy(),p.destroy(),h.dispose(),m.dispose()}},[]),tn.jsx("div",{children:tn.jsx("canvas",{id:"shaderCanvas"})})}function LP(){return tn.jsx(iM,{children:tn.jsxs(eM,{children:[tn.jsx(sd,{path:"/",element:tn.jsx(QE,{to:"/Water"})}),tn.jsx(sd,{path:"/Water",element:tn.jsx(QM,{title:"Water Shader Demo",children:tn.jsx(PP,{})})})]})})}w0(document.getElementById("root")).render(tn.jsx(xe.StrictMode,{children:tn.jsx(LP,{})}));
