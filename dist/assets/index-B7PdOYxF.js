var AS=Object.defineProperty;var DS=(t,e,n)=>e in t?AS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var mp=(t,e,n)=>DS(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function py(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gp={exports:{}},ko={},xp={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function FS(){if(ax)return be;ax=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,_={};function C(D,G,ge){this.props=D,this.context=G,this.refs=_,this.updater=ge||w}C.prototype.isReactComponent={},C.prototype.setState=function(D,G){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,G,"setState")},C.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function E(){}E.prototype=C.prototype;function S(D,G,ge){this.props=D,this.context=G,this.refs=_,this.updater=ge||w}var j=S.prototype=new E;j.constructor=S,b(j,C.prototype),j.isPureReactComponent=!0;var I=Array.isArray,R=Object.prototype.hasOwnProperty,z={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function L(D,G,ge){var fe,xe={},we=null,Ie=null;if(G!=null)for(fe in G.ref!==void 0&&(Ie=G.ref),G.key!==void 0&&(we=""+G.key),G)R.call(G,fe)&&!N.hasOwnProperty(fe)&&(xe[fe]=G[fe]);var ke=arguments.length-2;if(ke===1)xe.children=ge;else if(1<ke){for(var Ee=Array(ke),gt=0;gt<ke;gt++)Ee[gt]=arguments[gt+2];xe.children=Ee}if(D&&D.defaultProps)for(fe in ke=D.defaultProps,ke)xe[fe]===void 0&&(xe[fe]=ke[fe]);return{$$typeof:t,type:D,key:we,ref:Ie,props:xe,_owner:z.current}}function O(D,G){return{$$typeof:t,type:D.type,key:G,ref:D.ref,props:D.props,_owner:D._owner}}function B(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function Y(D){var G={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ge){return G[ge]})}var X=/\/+/g;function J(D,G){return typeof D=="object"&&D!==null&&D.key!=null?Y(""+D.key):G.toString(36)}function ne(D,G,ge,fe,xe){var we=typeof D;(we==="undefined"||we==="boolean")&&(D=null);var Ie=!1;if(D===null)Ie=!0;else switch(we){case"string":case"number":Ie=!0;break;case"object":switch(D.$$typeof){case t:case e:Ie=!0}}if(Ie)return Ie=D,xe=xe(Ie),D=fe===""?"."+J(Ie,0):fe,I(xe)?(ge="",D!=null&&(ge=D.replace(X,"$&/")+"/"),ne(xe,G,ge,"",function(gt){return gt})):xe!=null&&(B(xe)&&(xe=O(xe,ge+(!xe.key||Ie&&Ie.key===xe.key?"":(""+xe.key).replace(X,"$&/")+"/")+D)),G.push(xe)),1;if(Ie=0,fe=fe===""?".":fe+":",I(D))for(var ke=0;ke<D.length;ke++){we=D[ke];var Ee=fe+J(we,ke);Ie+=ne(we,G,ge,Ee,xe)}else if(Ee=y(D),typeof Ee=="function")for(D=Ee.call(D),ke=0;!(we=D.next()).done;)we=we.value,Ee=fe+J(we,ke++),Ie+=ne(we,G,ge,Ee,xe);else if(we==="object")throw G=String(D),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ie}function ie(D,G,ge){if(D==null)return D;var fe=[],xe=0;return ne(D,fe,"","",function(we){return G.call(ge,we,xe++)}),fe}function ce(D){if(D._status===-1){var G=D._result;G=G(),G.then(function(ge){(D._status===0||D._status===-1)&&(D._status=1,D._result=ge)},function(ge){(D._status===0||D._status===-1)&&(D._status=2,D._result=ge)}),D._status===-1&&(D._status=0,D._result=G)}if(D._status===1)return D._result.default;throw D._result}var pe={current:null},H={transition:null},ee={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:H,ReactCurrentOwner:z};function Q(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:ie,forEach:function(D,G,ge){ie(D,function(){G.apply(this,arguments)},ge)},count:function(D){var G=0;return ie(D,function(){G++}),G},toArray:function(D){return ie(D,function(G){return G})||[]},only:function(D){if(!B(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},be.Component=C,be.Fragment=n,be.Profiler=s,be.PureComponent=S,be.StrictMode=r,be.Suspense=p,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,be.act=Q,be.cloneElement=function(D,G,ge){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var fe=b({},D.props),xe=D.key,we=D.ref,Ie=D._owner;if(G!=null){if(G.ref!==void 0&&(we=G.ref,Ie=z.current),G.key!==void 0&&(xe=""+G.key),D.type&&D.type.defaultProps)var ke=D.type.defaultProps;for(Ee in G)R.call(G,Ee)&&!N.hasOwnProperty(Ee)&&(fe[Ee]=G[Ee]===void 0&&ke!==void 0?ke[Ee]:G[Ee])}var Ee=arguments.length-2;if(Ee===1)fe.children=ge;else if(1<Ee){ke=Array(Ee);for(var gt=0;gt<Ee;gt++)ke[gt]=arguments[gt+2];fe.children=ke}return{$$typeof:t,type:D.type,key:xe,ref:we,props:fe,_owner:Ie}},be.createContext=function(D){return D={$$typeof:l,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:a,_context:D},D.Consumer=D},be.createElement=L,be.createFactory=function(D){var G=L.bind(null,D);return G.type=D,G},be.createRef=function(){return{current:null}},be.forwardRef=function(D){return{$$typeof:d,render:D}},be.isValidElement=B,be.lazy=function(D){return{$$typeof:m,_payload:{_status:-1,_result:D},_init:ce}},be.memo=function(D,G){return{$$typeof:h,type:D,compare:G===void 0?null:G}},be.startTransition=function(D){var G=H.transition;H.transition={};try{D()}finally{H.transition=G}},be.unstable_act=Q,be.useCallback=function(D,G){return pe.current.useCallback(D,G)},be.useContext=function(D){return pe.current.useContext(D)},be.useDebugValue=function(){},be.useDeferredValue=function(D){return pe.current.useDeferredValue(D)},be.useEffect=function(D,G){return pe.current.useEffect(D,G)},be.useId=function(){return pe.current.useId()},be.useImperativeHandle=function(D,G,ge){return pe.current.useImperativeHandle(D,G,ge)},be.useInsertionEffect=function(D,G){return pe.current.useInsertionEffect(D,G)},be.useLayoutEffect=function(D,G){return pe.current.useLayoutEffect(D,G)},be.useMemo=function(D,G){return pe.current.useMemo(D,G)},be.useReducer=function(D,G,ge){return pe.current.useReducer(D,G,ge)},be.useRef=function(D){return pe.current.useRef(D)},be.useState=function(D){return pe.current.useState(D)},be.useSyncExternalStore=function(D,G,ge){return pe.current.useSyncExternalStore(D,G,ge)},be.useTransition=function(){return pe.current.useTransition()},be.version="18.3.1",be}var lx;function Kc(){return lx||(lx=1,xp.exports=FS()),xp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx;function BS(){if(cx)return ko;cx=1;var t=Kc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(d,p,h){var m,x={},y=null,w=null;h!==void 0&&(y=""+h),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(w=p.ref);for(m in p)r.call(p,m)&&!a.hasOwnProperty(m)&&(x[m]=p[m]);if(d&&d.defaultProps)for(m in p=d.defaultProps,p)x[m]===void 0&&(x[m]=p[m]);return{$$typeof:e,type:d,key:y,ref:w,props:x,_owner:s.current}}return ko.Fragment=n,ko.jsx=l,ko.jsxs=l,ko}var ux;function VS(){return ux||(ux=1,gp.exports=BS()),gp.exports}var u=VS(),$=Kc();const _e=py($);var Pl={},vp={exports:{}},Bt={},yp={exports:{}},wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function WS(){return dx||(dx=1,function(t){function e(H,ee){var Q=H.length;H.push(ee);e:for(;0<Q;){var D=Q-1>>>1,G=H[D];if(0<s(G,ee))H[D]=ee,H[Q]=G,Q=D;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ee=H[0],Q=H.pop();if(Q!==ee){H[0]=Q;e:for(var D=0,G=H.length,ge=G>>>1;D<ge;){var fe=2*(D+1)-1,xe=H[fe],we=fe+1,Ie=H[we];if(0>s(xe,Q))we<G&&0>s(Ie,xe)?(H[D]=Ie,H[we]=Q,D=we):(H[D]=xe,H[fe]=Q,D=fe);else if(we<G&&0>s(Ie,Q))H[D]=Ie,H[we]=Q,D=we;else break e}}return ee}function s(H,ee){var Q=H.sortIndex-ee.sortIndex;return Q!==0?Q:H.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,d=l.now();t.unstable_now=function(){return l.now()-d}}var p=[],h=[],m=1,x=null,y=3,w=!1,b=!1,_=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(H){for(var ee=n(h);ee!==null;){if(ee.callback===null)r(h);else if(ee.startTime<=H)r(h),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=n(h)}}function I(H){if(_=!1,j(H),!b)if(n(p)!==null)b=!0,ce(R);else{var ee=n(h);ee!==null&&pe(I,ee.startTime-H)}}function R(H,ee){b=!1,_&&(_=!1,E(L),L=-1),w=!0;var Q=y;try{for(j(ee),x=n(p);x!==null&&(!(x.expirationTime>ee)||H&&!Y());){var D=x.callback;if(typeof D=="function"){x.callback=null,y=x.priorityLevel;var G=D(x.expirationTime<=ee);ee=t.unstable_now(),typeof G=="function"?x.callback=G:x===n(p)&&r(p),j(ee)}else r(p);x=n(p)}if(x!==null)var ge=!0;else{var fe=n(h);fe!==null&&pe(I,fe.startTime-ee),ge=!1}return ge}finally{x=null,y=Q,w=!1}}var z=!1,N=null,L=-1,O=5,B=-1;function Y(){return!(t.unstable_now()-B<O)}function X(){if(N!==null){var H=t.unstable_now();B=H;var ee=!0;try{ee=N(!0,H)}finally{ee?J():(z=!1,N=null)}}else z=!1}var J;if(typeof S=="function")J=function(){S(X)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ie=ne.port2;ne.port1.onmessage=X,J=function(){ie.postMessage(null)}}else J=function(){C(X,0)};function ce(H){N=H,z||(z=!0,J())}function pe(H,ee){L=C(function(){H(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){b||w||(b=!0,ce(R))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(p)},t.unstable_next=function(H){switch(y){case 1:case 2:case 3:var ee=3;break;default:ee=y}var Q=y;y=ee;try{return H()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Q=y;y=H;try{return ee()}finally{y=Q}},t.unstable_scheduleCallback=function(H,ee,Q){var D=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?D+Q:D):Q=D,H){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=Q+G,H={id:m++,callback:ee,priorityLevel:H,startTime:Q,expirationTime:G,sortIndex:-1},Q>D?(H.sortIndex=Q,e(h,H),n(p)===null&&H===n(h)&&(_?(E(L),L=-1):_=!0,pe(I,Q-D))):(H.sortIndex=G,e(p,H),b||w||(b=!0,ce(R))),H},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(H){var ee=y;return function(){var Q=y;y=ee;try{return H.apply(this,arguments)}finally{y=Q}}}}(wp)),wp}var px;function US(){return px||(px=1,yp.exports=WS()),yp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function GS(){if(fx)return Bt;fx=1;var t=Kc(),e=US();function n(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function y(i){return p.call(x,i)?!0:p.call(m,i)?!1:h.test(i)?x[i]=!0:(m[i]=!0,!1)}function w(i,o,c,f){if(c!==null&&c.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,o,c,f){if(o===null||typeof o>"u"||w(i,o,c,f))return!0;if(f)return!1;if(c!==null)switch(c.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function _(i,o,c,f,g,v,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=c,this.propertyName=i,this.type=o,this.sanitizeURL=v,this.removeEmptyString=T}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){C[i]=new _(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];C[o]=new _(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){C[i]=new _(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){C[i]=new _(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){C[i]=new _(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){C[i]=new _(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){C[i]=new _(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){C[i]=new _(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){C[i]=new _(i,5,!1,i.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function S(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(E,S);C[o]=new _(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(E,S);C[o]=new _(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(E,S);C[o]=new _(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){C[i]=new _(i,1,!1,i.toLowerCase(),null,!1,!1)}),C.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){C[i]=new _(i,1,!1,i.toLowerCase(),null,!0,!0)});function j(i,o,c,f){var g=C.hasOwnProperty(o)?C[o]:null;(g!==null?g.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(b(o,c,g,f)&&(c=null),f||g===null?y(o)&&(c===null?i.removeAttribute(o):i.setAttribute(o,""+c)):g.mustUseProperty?i[g.propertyName]=c===null?g.type===3?!1:"":c:(o=g.attributeName,f=g.attributeNamespace,c===null?i.removeAttribute(o):(g=g.type,c=g===3||g===4&&c===!0?"":""+c,f?i.setAttributeNS(f,o,c):i.setAttribute(o,c))))}var I=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Y=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),H=Symbol.iterator;function ee(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var Q=Object.assign,D;function G(i){if(D===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);D=o&&o[1]||""}return`
`+D+i}var ge=!1;function fe(i,o){if(!i||ge)return"";ge=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var f=W}Reflect.construct(i,[],o)}else{try{o.call()}catch(W){f=W}i.call(o.prototype)}else{try{throw Error()}catch(W){f=W}i()}}catch(W){if(W&&f&&typeof W.stack=="string"){for(var g=W.stack.split(`
`),v=f.stack.split(`
`),T=g.length-1,P=v.length-1;1<=T&&0<=P&&g[T]!==v[P];)P--;for(;1<=T&&0<=P;T--,P--)if(g[T]!==v[P]){if(T!==1||P!==1)do if(T--,P--,0>P||g[T]!==v[P]){var M=`
`+g[T].replace(" at new "," at ");return i.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",i.displayName)),M}while(1<=T&&0<=P);break}}}finally{ge=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?G(i):""}function xe(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=fe(i.type,!1),i;case 11:return i=fe(i.type.render,!1),i;case 1:return i=fe(i.type,!0),i;default:return""}}function we(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case z:return"Portal";case O:return"Profiler";case L:return"StrictMode";case J:return"Suspense";case ne:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case Y:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case X:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ie:return o=i.displayName||null,o!==null?o:we(i.type)||"Memo";case ce:o=i._payload,i=i._init;try{return we(i(o))}catch{}}return null}function Ie(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(o);case 8:return o===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function ke(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ee(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function gt(i){var o=Ee(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),f=""+i[o];if(!i.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var g=c.get,v=c.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return g.call(this)},set:function(T){f=""+T,v.call(this,T)}}),Object.defineProperty(i,o,{enumerable:c.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Zn(i){i._valueTracker||(i._valueTracker=gt(i))}function bn(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var c=o.getValue(),f="";return i&&(f=Ee(i)?i.checked?"true":"false":i.value),i=f,i!==c?(o.setValue(i),!0):!1}function Sa(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function _u(i,o){var c=o.checked;return Q({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function hm(i,o){var c=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;c=ke(o.value!=null?o.value:c),i._wrapperState={initialChecked:f,initialValue:c,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function mm(i,o){o=o.checked,o!=null&&j(i,"checked",o,!1)}function Su(i,o){mm(i,o);var c=ke(o.value),f=o.type;if(c!=null)f==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?ku(i,o.type,c):o.hasOwnProperty("defaultValue")&&ku(i,o.type,ke(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function gm(i,o,c){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,c||o===i.value||(i.value=o),i.defaultValue=o}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function ku(i,o,c){(o!=="number"||Sa(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var As=Array.isArray;function Oi(i,o,c,f){if(i=i.options,o){o={};for(var g=0;g<c.length;g++)o["$"+c[g]]=!0;for(c=0;c<i.length;c++)g=o.hasOwnProperty("$"+i[c].value),i[c].selected!==g&&(i[c].selected=g),g&&f&&(i[c].defaultSelected=!0)}else{for(c=""+ke(c),o=null,g=0;g<i.length;g++){if(i[g].value===c){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}o!==null||i[g].disabled||(o=i[g])}o!==null&&(o.selected=!0)}}function ju(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(n(91));return Q({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function xm(i,o){var c=o.value;if(c==null){if(c=o.children,o=o.defaultValue,c!=null){if(o!=null)throw Error(n(92));if(As(c)){if(1<c.length)throw Error(n(93));c=c[0]}o=c}o==null&&(o=""),c=o}i._wrapperState={initialValue:ke(c)}}function vm(i,o){var c=ke(o.value),f=ke(o.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),o.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),f!=null&&(i.defaultValue=""+f)}function ym(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function wm(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?wm(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ka,bm=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,c,f,g){MSApp.execUnsafeLocalFunction(function(){return i(o,c,f,g)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=ka.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ds(i,o){if(o){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=o;return}}i.textContent=o}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vb=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(i){Vb.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Fs[o]=Fs[i]})});function _m(i,o,c){return o==null||typeof o=="boolean"||o===""?"":c||typeof o!="number"||o===0||Fs.hasOwnProperty(i)&&Fs[i]?(""+o).trim():o+"px"}function Sm(i,o){i=i.style;for(var c in o)if(o.hasOwnProperty(c)){var f=c.indexOf("--")===0,g=_m(c,o[c],f);c==="float"&&(c="cssFloat"),f?i.setProperty(c,g):i[c]=g}}var Wb=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(i,o){if(o){if(Wb[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(n(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(n(61))}if(o.style!=null&&typeof o.style!="object")throw Error(n(62))}}function Tu(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function Ru(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var $u=null,Li=null,Ai=null;function km(i){if(i=lo(i)){if(typeof $u!="function")throw Error(n(280));var o=i.stateNode;o&&(o=Ya(o),$u(i.stateNode,i.type,o))}}function jm(i){Li?Ai?Ai.push(i):Ai=[i]:Li=i}function Cm(){if(Li){var i=Li,o=Ai;if(Ai=Li=null,km(i),o)for(i=0;i<o.length;i++)km(o[i])}}function Em(i,o){return i(o)}function Tm(){}var Pu=!1;function Im(i,o,c){if(Pu)return i(o,c);Pu=!0;try{return Em(i,o,c)}finally{Pu=!1,(Li!==null||Ai!==null)&&(Tm(),Cm())}}function Bs(i,o){var c=i.stateNode;if(c===null)return null;var f=Ya(c);if(f===null)return null;c=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(n(231,o,typeof c));return c}var zu=!1;if(d)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{zu=!1}function Ub(i,o,c,f,g,v,T,P,M){var W=Array.prototype.slice.call(arguments,3);try{o.apply(c,W)}catch(Z){this.onError(Z)}}var Ws=!1,ja=null,Ca=!1,Mu=null,Gb={onError:function(i){Ws=!0,ja=i}};function Hb(i,o,c,f,g,v,T,P,M){Ws=!1,ja=null,Ub.apply(Gb,arguments)}function Yb(i,o,c,f,g,v,T,P,M){if(Hb.apply(this,arguments),Ws){if(Ws){var W=ja;Ws=!1,ja=null}else throw Error(n(198));Ca||(Ca=!0,Mu=W)}}function ei(i){var o=i,c=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(c=o.return),i=o.return;while(i)}return o.tag===3?c:null}function Rm(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function $m(i){if(ei(i)!==i)throw Error(n(188))}function Jb(i){var o=i.alternate;if(!o){if(o=ei(i),o===null)throw Error(n(188));return o!==i?null:i}for(var c=i,f=o;;){var g=c.return;if(g===null)break;var v=g.alternate;if(v===null){if(f=g.return,f!==null){c=f;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===c)return $m(g),i;if(v===f)return $m(g),o;v=v.sibling}throw Error(n(188))}if(c.return!==f.return)c=g,f=v;else{for(var T=!1,P=g.child;P;){if(P===c){T=!0,c=g,f=v;break}if(P===f){T=!0,f=g,c=v;break}P=P.sibling}if(!T){for(P=v.child;P;){if(P===c){T=!0,c=v,f=g;break}if(P===f){T=!0,f=v,c=g;break}P=P.sibling}if(!T)throw Error(n(189))}}if(c.alternate!==f)throw Error(n(190))}if(c.tag!==3)throw Error(n(188));return c.stateNode.current===c?i:o}function Pm(i){return i=Jb(i),i!==null?zm(i):null}function zm(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=zm(i);if(o!==null)return o;i=i.sibling}return null}var Mm=e.unstable_scheduleCallback,Nm=e.unstable_cancelCallback,qb=e.unstable_shouldYield,Qb=e.unstable_requestPaint,Ze=e.unstable_now,Zb=e.unstable_getCurrentPriorityLevel,Nu=e.unstable_ImmediatePriority,Om=e.unstable_UserBlockingPriority,Ea=e.unstable_NormalPriority,Kb=e.unstable_LowPriority,Lm=e.unstable_IdlePriority,Ta=null,Mn=null;function Xb(i){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(Ta,i,void 0,(i.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:n_,e_=Math.log,t_=Math.LN2;function n_(i){return i>>>=0,i===0?32:31-(e_(i)/t_|0)|0}var Ia=64,Ra=4194304;function Us(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function $a(i,o){var c=i.pendingLanes;if(c===0)return 0;var f=0,g=i.suspendedLanes,v=i.pingedLanes,T=c&268435455;if(T!==0){var P=T&~g;P!==0?f=Us(P):(v&=T,v!==0&&(f=Us(v)))}else T=c&~g,T!==0?f=Us(T):v!==0&&(f=Us(v));if(f===0)return 0;if(o!==0&&o!==f&&!(o&g)&&(g=f&-f,v=o&-o,g>=v||g===16&&(v&4194240)!==0))return o;if(f&4&&(f|=c&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=f;0<o;)c=31-_n(o),g=1<<c,f|=i[c],o&=~g;return f}function r_(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i_(i,o){for(var c=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,v=i.pendingLanes;0<v;){var T=31-_n(v),P=1<<T,M=g[T];M===-1?(!(P&c)||P&f)&&(g[T]=r_(P,o)):M<=o&&(i.expiredLanes|=P),v&=~P}}function Ou(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Am(){var i=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),i}function Lu(i){for(var o=[],c=0;31>c;c++)o.push(i);return o}function Gs(i,o,c){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-_n(o),i[o]=c}function s_(i,o){var c=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<c;){var g=31-_n(c),v=1<<g;o[g]=0,f[g]=-1,i[g]=-1,c&=~v}}function Au(i,o){var c=i.entangledLanes|=o;for(i=i.entanglements;c;){var f=31-_n(c),g=1<<f;g&o|i[f]&o&&(i[f]|=o),c&=~g}}var ze=0;function Dm(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Fm,Du,Bm,Vm,Wm,Fu=!1,Pa=[],vr=null,yr=null,wr=null,Hs=new Map,Ys=new Map,br=[],o_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(i,o){switch(i){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Hs.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(o.pointerId)}}function Js(i,o,c,f,g,v){return i===null||i.nativeEvent!==v?(i={blockedOn:o,domEventName:c,eventSystemFlags:f,nativeEvent:v,targetContainers:[g]},o!==null&&(o=lo(o),o!==null&&Du(o)),i):(i.eventSystemFlags|=f,o=i.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),i)}function a_(i,o,c,f,g){switch(o){case"focusin":return vr=Js(vr,i,o,c,f,g),!0;case"dragenter":return yr=Js(yr,i,o,c,f,g),!0;case"mouseover":return wr=Js(wr,i,o,c,f,g),!0;case"pointerover":var v=g.pointerId;return Hs.set(v,Js(Hs.get(v)||null,i,o,c,f,g)),!0;case"gotpointercapture":return v=g.pointerId,Ys.set(v,Js(Ys.get(v)||null,i,o,c,f,g)),!0}return!1}function Gm(i){var o=ti(i.target);if(o!==null){var c=ei(o);if(c!==null){if(o=c.tag,o===13){if(o=Rm(c),o!==null){i.blockedOn=o,Wm(i.priority,function(){Bm(c)});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function za(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var c=Vu(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var f=new c.constructor(c.type,c);Iu=f,c.target.dispatchEvent(f),Iu=null}else return o=lo(c),o!==null&&Du(o),i.blockedOn=c,!1;o.shift()}return!0}function Hm(i,o,c){za(i)&&c.delete(o)}function l_(){Fu=!1,vr!==null&&za(vr)&&(vr=null),yr!==null&&za(yr)&&(yr=null),wr!==null&&za(wr)&&(wr=null),Hs.forEach(Hm),Ys.forEach(Hm)}function qs(i,o){i.blockedOn===o&&(i.blockedOn=null,Fu||(Fu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,l_)))}function Qs(i){function o(g){return qs(g,i)}if(0<Pa.length){qs(Pa[0],i);for(var c=1;c<Pa.length;c++){var f=Pa[c];f.blockedOn===i&&(f.blockedOn=null)}}for(vr!==null&&qs(vr,i),yr!==null&&qs(yr,i),wr!==null&&qs(wr,i),Hs.forEach(o),Ys.forEach(o),c=0;c<br.length;c++)f=br[c],f.blockedOn===i&&(f.blockedOn=null);for(;0<br.length&&(c=br[0],c.blockedOn===null);)Gm(c),c.blockedOn===null&&br.shift()}var Di=I.ReactCurrentBatchConfig,Ma=!0;function c_(i,o,c,f){var g=ze,v=Di.transition;Di.transition=null;try{ze=1,Bu(i,o,c,f)}finally{ze=g,Di.transition=v}}function u_(i,o,c,f){var g=ze,v=Di.transition;Di.transition=null;try{ze=4,Bu(i,o,c,f)}finally{ze=g,Di.transition=v}}function Bu(i,o,c,f){if(Ma){var g=Vu(i,o,c,f);if(g===null)sd(i,o,f,Na,c),Um(i,f);else if(a_(g,i,o,c,f))f.stopPropagation();else if(Um(i,f),o&4&&-1<o_.indexOf(i)){for(;g!==null;){var v=lo(g);if(v!==null&&Fm(v),v=Vu(i,o,c,f),v===null&&sd(i,o,f,Na,c),v===g)break;g=v}g!==null&&f.stopPropagation()}else sd(i,o,f,null,c)}}var Na=null;function Vu(i,o,c,f){if(Na=null,i=Ru(f),i=ti(i),i!==null)if(o=ei(i),o===null)i=null;else if(c=o.tag,c===13){if(i=Rm(o),i!==null)return i;i=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Na=i,null}function Ym(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zb()){case Nu:return 1;case Om:return 4;case Ea:case Kb:return 16;case Lm:return 536870912;default:return 16}default:return 16}}var _r=null,Wu=null,Oa=null;function Jm(){if(Oa)return Oa;var i,o=Wu,c=o.length,f,g="value"in _r?_r.value:_r.textContent,v=g.length;for(i=0;i<c&&o[i]===g[i];i++);var T=c-i;for(f=1;f<=T&&o[c-f]===g[v-f];f++);return Oa=g.slice(i,1<f?1-f:void 0)}function La(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Aa(){return!0}function qm(){return!1}function qt(i){function o(c,f,g,v,T){this._reactName=c,this._targetInst=g,this.type=f,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var P in i)i.hasOwnProperty(P)&&(c=i[P],this[P]=c?c(v):v[P]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Aa:qm,this.isPropagationStopped=qm,this}return Q(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),o}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=qt(Fi),Zs=Q({},Fi,{view:0,detail:0}),d_=qt(Zs),Gu,Hu,Ks,Da=Q({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ks&&(Ks&&i.type==="mousemove"?(Gu=i.screenX-Ks.screenX,Hu=i.screenY-Ks.screenY):Hu=Gu=0,Ks=i),Gu)},movementY:function(i){return"movementY"in i?i.movementY:Hu}}),Qm=qt(Da),p_=Q({},Da,{dataTransfer:0}),f_=qt(p_),h_=Q({},Zs,{relatedTarget:0}),Yu=qt(h_),m_=Q({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),g_=qt(m_),x_=Q({},Fi,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),v_=qt(x_),y_=Q({},Fi,{data:0}),Zm=qt(y_),w_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},__={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S_(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=__[i])?!!o[i]:!1}function Ju(){return S_}var k_=Q({},Zs,{key:function(i){if(i.key){var o=w_[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=La(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?b_[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(i){return i.type==="keypress"?La(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?La(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),j_=qt(k_),C_=Q({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=qt(C_),E_=Q({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),T_=qt(E_),I_=Q({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),R_=qt(I_),$_=Q({},Da,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),P_=qt($_),z_=[9,13,27,32],qu=d&&"CompositionEvent"in window,Xs=null;d&&"documentMode"in document&&(Xs=document.documentMode);var M_=d&&"TextEvent"in window&&!Xs,Xm=d&&(!qu||Xs&&8<Xs&&11>=Xs),eg=" ",tg=!1;function ng(i,o){switch(i){case"keyup":return z_.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Bi=!1;function N_(i,o){switch(i){case"compositionend":return rg(o);case"keypress":return o.which!==32?null:(tg=!0,eg);case"textInput":return i=o.data,i===eg&&tg?null:i;default:return null}}function O_(i,o){if(Bi)return i==="compositionend"||!qu&&ng(i,o)?(i=Jm(),Oa=Wu=_r=null,Bi=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Xm&&o.locale!=="ko"?null:o.data;default:return null}}var L_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!L_[i.type]:o==="textarea"}function sg(i,o,c,f){jm(f),o=Ua(o,"onChange"),0<o.length&&(c=new Uu("onChange","change",null,c,f),i.push({event:c,listeners:o}))}var eo=null,to=null;function A_(i){Sg(i,0)}function Fa(i){var o=Hi(i);if(bn(o))return i}function D_(i,o){if(i==="change")return o}var og=!1;if(d){var Qu;if(d){var Zu="oninput"in document;if(!Zu){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),Zu=typeof ag.oninput=="function"}Qu=Zu}else Qu=!1;og=Qu&&(!document.documentMode||9<document.documentMode)}function lg(){eo&&(eo.detachEvent("onpropertychange",cg),to=eo=null)}function cg(i){if(i.propertyName==="value"&&Fa(to)){var o=[];sg(o,to,i,Ru(i)),Im(A_,o)}}function F_(i,o,c){i==="focusin"?(lg(),eo=o,to=c,eo.attachEvent("onpropertychange",cg)):i==="focusout"&&lg()}function B_(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Fa(to)}function V_(i,o){if(i==="click")return Fa(o)}function W_(i,o){if(i==="input"||i==="change")return Fa(o)}function U_(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Sn=typeof Object.is=="function"?Object.is:U_;function no(i,o){if(Sn(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var c=Object.keys(i),f=Object.keys(o);if(c.length!==f.length)return!1;for(f=0;f<c.length;f++){var g=c[f];if(!p.call(o,g)||!Sn(i[g],o[g]))return!1}return!0}function ug(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function dg(i,o){var c=ug(i);i=0;for(var f;c;){if(c.nodeType===3){if(f=i+c.textContent.length,i<=o&&f>=o)return{node:c,offset:o-i};i=f}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=ug(c)}}function pg(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?pg(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function fg(){for(var i=window,o=Sa();o instanceof i.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)i=o.contentWindow;else break;o=Sa(i.document)}return o}function Ku(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function G_(i){var o=fg(),c=i.focusedElem,f=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&pg(c.ownerDocument.documentElement,c)){if(f!==null&&Ku(c)){if(o=f.start,i=f.end,i===void 0&&(i=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(i,c.value.length);else if(i=(o=c.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var g=c.textContent.length,v=Math.min(f.start,g);f=f.end===void 0?v:Math.min(f.end,g),!i.extend&&v>f&&(g=f,f=v,v=g),g=dg(c,v);var T=dg(c,f);g&&T&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),i.removeAllRanges(),v>f?(i.addRange(o),i.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),i.addRange(o)))}}for(o=[],i=c;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<o.length;c++)i=o[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var H_=d&&"documentMode"in document&&11>=document.documentMode,Vi=null,Xu=null,ro=null,ed=!1;function hg(i,o,c){var f=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;ed||Vi==null||Vi!==Sa(f)||(f=Vi,"selectionStart"in f&&Ku(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ro&&no(ro,f)||(ro=f,f=Ua(Xu,"onSelect"),0<f.length&&(o=new Uu("onSelect","select",null,o,c),i.push({event:o,listeners:f}),o.target=Vi)))}function Ba(i,o){var c={};return c[i.toLowerCase()]=o.toLowerCase(),c["Webkit"+i]="webkit"+o,c["Moz"+i]="moz"+o,c}var Wi={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},td={},mg={};d&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Va(i){if(td[i])return td[i];if(!Wi[i])return i;var o=Wi[i],c;for(c in o)if(o.hasOwnProperty(c)&&c in mg)return td[i]=o[c];return i}var gg=Va("animationend"),xg=Va("animationiteration"),vg=Va("animationstart"),yg=Va("transitionend"),wg=new Map,bg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(i,o){wg.set(i,o),a(o,[i])}for(var nd=0;nd<bg.length;nd++){var rd=bg[nd],Y_=rd.toLowerCase(),J_=rd[0].toUpperCase()+rd.slice(1);Sr(Y_,"on"+J_)}Sr(gg,"onAnimationEnd"),Sr(xg,"onAnimationIteration"),Sr(vg,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(yg,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q_=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function _g(i,o,c){var f=i.type||"unknown-event";i.currentTarget=c,Yb(f,o,void 0,i),i.currentTarget=null}function Sg(i,o){o=(o&4)!==0;for(var c=0;c<i.length;c++){var f=i[c],g=f.event;f=f.listeners;e:{var v=void 0;if(o)for(var T=f.length-1;0<=T;T--){var P=f[T],M=P.instance,W=P.currentTarget;if(P=P.listener,M!==v&&g.isPropagationStopped())break e;_g(g,P,W),v=M}else for(T=0;T<f.length;T++){if(P=f[T],M=P.instance,W=P.currentTarget,P=P.listener,M!==v&&g.isPropagationStopped())break e;_g(g,P,W),v=M}}}if(Ca)throw i=Mu,Ca=!1,Mu=null,i}function Le(i,o){var c=o[dd];c===void 0&&(c=o[dd]=new Set);var f=i+"__bubble";c.has(f)||(kg(o,i,2,!1),c.add(f))}function id(i,o,c){var f=0;o&&(f|=4),kg(c,i,f,o)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function so(i){if(!i[Wa]){i[Wa]=!0,r.forEach(function(c){c!=="selectionchange"&&(q_.has(c)||id(c,!1,i),id(c,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Wa]||(o[Wa]=!0,id("selectionchange",!1,o))}}function kg(i,o,c,f){switch(Ym(o)){case 1:var g=c_;break;case 4:g=u_;break;default:g=Bu}c=g.bind(null,o,c,i),g=void 0,!zu||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(o,c,{capture:!0,passive:g}):i.addEventListener(o,c,!0):g!==void 0?i.addEventListener(o,c,{passive:g}):i.addEventListener(o,c,!1)}function sd(i,o,c,f,g){var v=f;if(!(o&1)&&!(o&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var P=f.stateNode.containerInfo;if(P===g||P.nodeType===8&&P.parentNode===g)break;if(T===4)for(T=f.return;T!==null;){var M=T.tag;if((M===3||M===4)&&(M=T.stateNode.containerInfo,M===g||M.nodeType===8&&M.parentNode===g))return;T=T.return}for(;P!==null;){if(T=ti(P),T===null)return;if(M=T.tag,M===5||M===6){f=v=T;continue e}P=P.parentNode}}f=f.return}Im(function(){var W=v,Z=Ru(c),K=[];e:{var q=wg.get(i);if(q!==void 0){var re=Uu,oe=i;switch(i){case"keypress":if(La(c)===0)break e;case"keydown":case"keyup":re=j_;break;case"focusin":oe="focus",re=Yu;break;case"focusout":oe="blur",re=Yu;break;case"beforeblur":case"afterblur":re=Yu;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=f_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=T_;break;case gg:case xg:case vg:re=g_;break;case yg:re=R_;break;case"scroll":re=d_;break;case"wheel":re=P_;break;case"copy":case"cut":case"paste":re=v_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=Km}var ae=(o&4)!==0,Ke=!ae&&i==="scroll",F=ae?q!==null?q+"Capture":null:q;ae=[];for(var A=W,V;A!==null;){V=A;var te=V.stateNode;if(V.tag===5&&te!==null&&(V=te,F!==null&&(te=Bs(A,F),te!=null&&ae.push(oo(A,te,V)))),Ke)break;A=A.return}0<ae.length&&(q=new re(q,oe,null,c,Z),K.push({event:q,listeners:ae}))}}if(!(o&7)){e:{if(q=i==="mouseover"||i==="pointerover",re=i==="mouseout"||i==="pointerout",q&&c!==Iu&&(oe=c.relatedTarget||c.fromElement)&&(ti(oe)||oe[Kn]))break e;if((re||q)&&(q=Z.window===Z?Z:(q=Z.ownerDocument)?q.defaultView||q.parentWindow:window,re?(oe=c.relatedTarget||c.toElement,re=W,oe=oe?ti(oe):null,oe!==null&&(Ke=ei(oe),oe!==Ke||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(re=null,oe=W),re!==oe)){if(ae=Qm,te="onMouseLeave",F="onMouseEnter",A="mouse",(i==="pointerout"||i==="pointerover")&&(ae=Km,te="onPointerLeave",F="onPointerEnter",A="pointer"),Ke=re==null?q:Hi(re),V=oe==null?q:Hi(oe),q=new ae(te,A+"leave",re,c,Z),q.target=Ke,q.relatedTarget=V,te=null,ti(Z)===W&&(ae=new ae(F,A+"enter",oe,c,Z),ae.target=V,ae.relatedTarget=Ke,te=ae),Ke=te,re&&oe)t:{for(ae=re,F=oe,A=0,V=ae;V;V=Ui(V))A++;for(V=0,te=F;te;te=Ui(te))V++;for(;0<A-V;)ae=Ui(ae),A--;for(;0<V-A;)F=Ui(F),V--;for(;A--;){if(ae===F||F!==null&&ae===F.alternate)break t;ae=Ui(ae),F=Ui(F)}ae=null}else ae=null;re!==null&&jg(K,q,re,ae,!1),oe!==null&&Ke!==null&&jg(K,Ke,oe,ae,!0)}}e:{if(q=W?Hi(W):window,re=q.nodeName&&q.nodeName.toLowerCase(),re==="select"||re==="input"&&q.type==="file")var le=D_;else if(ig(q))if(og)le=W_;else{le=B_;var ue=F_}else(re=q.nodeName)&&re.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(le=V_);if(le&&(le=le(i,W))){sg(K,le,c,Z);break e}ue&&ue(i,q,W),i==="focusout"&&(ue=q._wrapperState)&&ue.controlled&&q.type==="number"&&ku(q,"number",q.value)}switch(ue=W?Hi(W):window,i){case"focusin":(ig(ue)||ue.contentEditable==="true")&&(Vi=ue,Xu=W,ro=null);break;case"focusout":ro=Xu=Vi=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,hg(K,c,Z);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":hg(K,c,Z)}var de;if(qu)e:{switch(i){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Bi?ng(i,c)&&(he="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(he="onCompositionStart");he&&(Xm&&c.locale!=="ko"&&(Bi||he!=="onCompositionStart"?he==="onCompositionEnd"&&Bi&&(de=Jm()):(_r=Z,Wu="value"in _r?_r.value:_r.textContent,Bi=!0)),ue=Ua(W,he),0<ue.length&&(he=new Zm(he,i,null,c,Z),K.push({event:he,listeners:ue}),de?he.data=de:(de=rg(c),de!==null&&(he.data=de)))),(de=M_?N_(i,c):O_(i,c))&&(W=Ua(W,"onBeforeInput"),0<W.length&&(Z=new Zm("onBeforeInput","beforeinput",null,c,Z),K.push({event:Z,listeners:W}),Z.data=de))}Sg(K,o)})}function oo(i,o,c){return{instance:i,listener:o,currentTarget:c}}function Ua(i,o){for(var c=o+"Capture",f=[];i!==null;){var g=i,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=Bs(i,c),v!=null&&f.unshift(oo(i,v,g)),v=Bs(i,o),v!=null&&f.push(oo(i,v,g))),i=i.return}return f}function Ui(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function jg(i,o,c,f,g){for(var v=o._reactName,T=[];c!==null&&c!==f;){var P=c,M=P.alternate,W=P.stateNode;if(M!==null&&M===f)break;P.tag===5&&W!==null&&(P=W,g?(M=Bs(c,v),M!=null&&T.unshift(oo(c,M,P))):g||(M=Bs(c,v),M!=null&&T.push(oo(c,M,P)))),c=c.return}T.length!==0&&i.push({event:o,listeners:T})}var Q_=/\r\n?/g,Z_=/\u0000|\uFFFD/g;function Cg(i){return(typeof i=="string"?i:""+i).replace(Q_,`
`).replace(Z_,"")}function Ga(i,o,c){if(o=Cg(o),Cg(i)!==o&&c)throw Error(n(425))}function Ha(){}var od=null,ad=null;function ld(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,K_=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,X_=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(i){return Eg.resolve(null).then(i).catch(eS)}:cd;function eS(i){setTimeout(function(){throw i})}function ud(i,o){var c=o,f=0;do{var g=c.nextSibling;if(i.removeChild(c),g&&g.nodeType===8)if(c=g.data,c==="/$"){if(f===0){i.removeChild(g),Qs(o);return}f--}else c!=="$"&&c!=="$?"&&c!=="$!"||f++;c=g}while(c);Qs(o)}function kr(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function Tg(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return i;o--}else c==="/$"&&o++}i=i.previousSibling}return null}var Gi=Math.random().toString(36).slice(2),Nn="__reactFiber$"+Gi,ao="__reactProps$"+Gi,Kn="__reactContainer$"+Gi,dd="__reactEvents$"+Gi,tS="__reactListeners$"+Gi,nS="__reactHandles$"+Gi;function ti(i){var o=i[Nn];if(o)return o;for(var c=i.parentNode;c;){if(o=c[Kn]||c[Nn]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(i=Tg(i);i!==null;){if(c=i[Nn])return c;i=Tg(i)}return o}i=c,c=i.parentNode}return null}function lo(i){return i=i[Nn]||i[Kn],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Hi(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function Ya(i){return i[ao]||null}var pd=[],Yi=-1;function jr(i){return{current:i}}function Ae(i){0>Yi||(i.current=pd[Yi],pd[Yi]=null,Yi--)}function Ne(i,o){Yi++,pd[Yi]=i.current,i.current=o}var Cr={},bt=jr(Cr),Ot=jr(!1),ni=Cr;function Ji(i,o){var c=i.type.contextTypes;if(!c)return Cr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in c)g[v]=o[v];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=g),g}function Lt(i){return i=i.childContextTypes,i!=null}function Ja(){Ae(Ot),Ae(bt)}function Ig(i,o,c){if(bt.current!==Cr)throw Error(n(168));Ne(bt,o),Ne(Ot,c)}function Rg(i,o,c){var f=i.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return c;f=f.getChildContext();for(var g in f)if(!(g in o))throw Error(n(108,Ie(i)||"Unknown",g));return Q({},c,f)}function qa(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Cr,ni=bt.current,Ne(bt,i),Ne(Ot,Ot.current),!0}function $g(i,o,c){var f=i.stateNode;if(!f)throw Error(n(169));c?(i=Rg(i,o,ni),f.__reactInternalMemoizedMergedChildContext=i,Ae(Ot),Ae(bt),Ne(bt,i)):Ae(Ot),Ne(Ot,c)}var Xn=null,Qa=!1,fd=!1;function Pg(i){Xn===null?Xn=[i]:Xn.push(i)}function rS(i){Qa=!0,Pg(i)}function Er(){if(!fd&&Xn!==null){fd=!0;var i=0,o=ze;try{var c=Xn;for(ze=1;i<c.length;i++){var f=c[i];do f=f(!0);while(f!==null)}Xn=null,Qa=!1}catch(g){throw Xn!==null&&(Xn=Xn.slice(i+1)),Mm(Nu,Er),g}finally{ze=o,fd=!1}}return null}var qi=[],Qi=0,Za=null,Ka=0,dn=[],pn=0,ri=null,er=1,tr="";function ii(i,o){qi[Qi++]=Ka,qi[Qi++]=Za,Za=i,Ka=o}function zg(i,o,c){dn[pn++]=er,dn[pn++]=tr,dn[pn++]=ri,ri=i;var f=er;i=tr;var g=32-_n(f)-1;f&=~(1<<g),c+=1;var v=32-_n(o)+g;if(30<v){var T=g-g%5;v=(f&(1<<T)-1).toString(32),f>>=T,g-=T,er=1<<32-_n(o)+g|c<<g|f,tr=v+i}else er=1<<v|c<<g|f,tr=i}function hd(i){i.return!==null&&(ii(i,1),zg(i,1,0))}function md(i){for(;i===Za;)Za=qi[--Qi],qi[Qi]=null,Ka=qi[--Qi],qi[Qi]=null;for(;i===ri;)ri=dn[--pn],dn[pn]=null,tr=dn[--pn],dn[pn]=null,er=dn[--pn],dn[pn]=null}var Qt=null,Zt=null,Be=!1,kn=null;function Mg(i,o){var c=gn(5,null,null,0);c.elementType="DELETED",c.stateNode=o,c.return=i,o=i.deletions,o===null?(i.deletions=[c],i.flags|=16):o.push(c)}function Ng(i,o){switch(i.tag){case 5:var c=i.type;return o=o.nodeType!==1||c.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Qt=i,Zt=kr(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Qt=i,Zt=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(c=ri!==null?{id:er,overflow:tr}:null,i.memoizedState={dehydrated:o,treeContext:c,retryLane:1073741824},c=gn(18,null,null,0),c.stateNode=o,c.return=i,i.child=c,Qt=i,Zt=null,!0):!1;default:return!1}}function gd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function xd(i){if(Be){var o=Zt;if(o){var c=o;if(!Ng(i,o)){if(gd(i))throw Error(n(418));o=kr(c.nextSibling);var f=Qt;o&&Ng(i,o)?Mg(f,c):(i.flags=i.flags&-4097|2,Be=!1,Qt=i)}}else{if(gd(i))throw Error(n(418));i.flags=i.flags&-4097|2,Be=!1,Qt=i}}}function Og(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Qt=i}function Xa(i){if(i!==Qt)return!1;if(!Be)return Og(i),Be=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!ld(i.type,i.memoizedProps)),o&&(o=Zt)){if(gd(i))throw Lg(),Error(n(418));for(;o;)Mg(i,o),o=kr(o.nextSibling)}if(Og(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(o===0){Zt=kr(i.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++}i=i.nextSibling}Zt=null}}else Zt=Qt?kr(i.stateNode.nextSibling):null;return!0}function Lg(){for(var i=Zt;i;)i=kr(i.nextSibling)}function Zi(){Zt=Qt=null,Be=!1}function vd(i){kn===null?kn=[i]:kn.push(i)}var iS=I.ReactCurrentBatchConfig;function co(i,o,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(n(309));var f=c.stateNode}if(!f)throw Error(n(147,i));var g=f,v=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===v?o.ref:(o=function(T){var P=g.refs;T===null?delete P[v]:P[v]=T},o._stringRef=v,o)}if(typeof i!="string")throw Error(n(284));if(!c._owner)throw Error(n(290,i))}return i}function el(i,o){throw i=Object.prototype.toString.call(o),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Ag(i){var o=i._init;return o(i._payload)}function Dg(i){function o(F,A){if(i){var V=F.deletions;V===null?(F.deletions=[A],F.flags|=16):V.push(A)}}function c(F,A){if(!i)return null;for(;A!==null;)o(F,A),A=A.sibling;return null}function f(F,A){for(F=new Map;A!==null;)A.key!==null?F.set(A.key,A):F.set(A.index,A),A=A.sibling;return F}function g(F,A){return F=Nr(F,A),F.index=0,F.sibling=null,F}function v(F,A,V){return F.index=V,i?(V=F.alternate,V!==null?(V=V.index,V<A?(F.flags|=2,A):V):(F.flags|=2,A)):(F.flags|=1048576,A)}function T(F){return i&&F.alternate===null&&(F.flags|=2),F}function P(F,A,V,te){return A===null||A.tag!==6?(A=cp(V,F.mode,te),A.return=F,A):(A=g(A,V),A.return=F,A)}function M(F,A,V,te){var le=V.type;return le===N?Z(F,A,V.props.children,te,V.key):A!==null&&(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ce&&Ag(le)===A.type)?(te=g(A,V.props),te.ref=co(F,A,V),te.return=F,te):(te=kl(V.type,V.key,V.props,null,F.mode,te),te.ref=co(F,A,V),te.return=F,te)}function W(F,A,V,te){return A===null||A.tag!==4||A.stateNode.containerInfo!==V.containerInfo||A.stateNode.implementation!==V.implementation?(A=up(V,F.mode,te),A.return=F,A):(A=g(A,V.children||[]),A.return=F,A)}function Z(F,A,V,te,le){return A===null||A.tag!==7?(A=pi(V,F.mode,te,le),A.return=F,A):(A=g(A,V),A.return=F,A)}function K(F,A,V){if(typeof A=="string"&&A!==""||typeof A=="number")return A=cp(""+A,F.mode,V),A.return=F,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case R:return V=kl(A.type,A.key,A.props,null,F.mode,V),V.ref=co(F,null,A),V.return=F,V;case z:return A=up(A,F.mode,V),A.return=F,A;case ce:var te=A._init;return K(F,te(A._payload),V)}if(As(A)||ee(A))return A=pi(A,F.mode,V,null),A.return=F,A;el(F,A)}return null}function q(F,A,V,te){var le=A!==null?A.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return le!==null?null:P(F,A,""+V,te);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case R:return V.key===le?M(F,A,V,te):null;case z:return V.key===le?W(F,A,V,te):null;case ce:return le=V._init,q(F,A,le(V._payload),te)}if(As(V)||ee(V))return le!==null?null:Z(F,A,V,te,null);el(F,V)}return null}function re(F,A,V,te,le){if(typeof te=="string"&&te!==""||typeof te=="number")return F=F.get(V)||null,P(A,F,""+te,le);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case R:return F=F.get(te.key===null?V:te.key)||null,M(A,F,te,le);case z:return F=F.get(te.key===null?V:te.key)||null,W(A,F,te,le);case ce:var ue=te._init;return re(F,A,V,ue(te._payload),le)}if(As(te)||ee(te))return F=F.get(V)||null,Z(A,F,te,le,null);el(A,te)}return null}function oe(F,A,V,te){for(var le=null,ue=null,de=A,he=A=0,dt=null;de!==null&&he<V.length;he++){de.index>he?(dt=de,de=null):dt=de.sibling;var Te=q(F,de,V[he],te);if(Te===null){de===null&&(de=dt);break}i&&de&&Te.alternate===null&&o(F,de),A=v(Te,A,he),ue===null?le=Te:ue.sibling=Te,ue=Te,de=dt}if(he===V.length)return c(F,de),Be&&ii(F,he),le;if(de===null){for(;he<V.length;he++)de=K(F,V[he],te),de!==null&&(A=v(de,A,he),ue===null?le=de:ue.sibling=de,ue=de);return Be&&ii(F,he),le}for(de=f(F,de);he<V.length;he++)dt=re(de,F,he,V[he],te),dt!==null&&(i&&dt.alternate!==null&&de.delete(dt.key===null?he:dt.key),A=v(dt,A,he),ue===null?le=dt:ue.sibling=dt,ue=dt);return i&&de.forEach(function(Or){return o(F,Or)}),Be&&ii(F,he),le}function ae(F,A,V,te){var le=ee(V);if(typeof le!="function")throw Error(n(150));if(V=le.call(V),V==null)throw Error(n(151));for(var ue=le=null,de=A,he=A=0,dt=null,Te=V.next();de!==null&&!Te.done;he++,Te=V.next()){de.index>he?(dt=de,de=null):dt=de.sibling;var Or=q(F,de,Te.value,te);if(Or===null){de===null&&(de=dt);break}i&&de&&Or.alternate===null&&o(F,de),A=v(Or,A,he),ue===null?le=Or:ue.sibling=Or,ue=Or,de=dt}if(Te.done)return c(F,de),Be&&ii(F,he),le;if(de===null){for(;!Te.done;he++,Te=V.next())Te=K(F,Te.value,te),Te!==null&&(A=v(Te,A,he),ue===null?le=Te:ue.sibling=Te,ue=Te);return Be&&ii(F,he),le}for(de=f(F,de);!Te.done;he++,Te=V.next())Te=re(de,F,he,Te.value,te),Te!==null&&(i&&Te.alternate!==null&&de.delete(Te.key===null?he:Te.key),A=v(Te,A,he),ue===null?le=Te:ue.sibling=Te,ue=Te);return i&&de.forEach(function(LS){return o(F,LS)}),Be&&ii(F,he),le}function Ke(F,A,V,te){if(typeof V=="object"&&V!==null&&V.type===N&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case R:e:{for(var le=V.key,ue=A;ue!==null;){if(ue.key===le){if(le=V.type,le===N){if(ue.tag===7){c(F,ue.sibling),A=g(ue,V.props.children),A.return=F,F=A;break e}}else if(ue.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ce&&Ag(le)===ue.type){c(F,ue.sibling),A=g(ue,V.props),A.ref=co(F,ue,V),A.return=F,F=A;break e}c(F,ue);break}else o(F,ue);ue=ue.sibling}V.type===N?(A=pi(V.props.children,F.mode,te,V.key),A.return=F,F=A):(te=kl(V.type,V.key,V.props,null,F.mode,te),te.ref=co(F,A,V),te.return=F,F=te)}return T(F);case z:e:{for(ue=V.key;A!==null;){if(A.key===ue)if(A.tag===4&&A.stateNode.containerInfo===V.containerInfo&&A.stateNode.implementation===V.implementation){c(F,A.sibling),A=g(A,V.children||[]),A.return=F,F=A;break e}else{c(F,A);break}else o(F,A);A=A.sibling}A=up(V,F.mode,te),A.return=F,F=A}return T(F);case ce:return ue=V._init,Ke(F,A,ue(V._payload),te)}if(As(V))return oe(F,A,V,te);if(ee(V))return ae(F,A,V,te);el(F,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,A!==null&&A.tag===6?(c(F,A.sibling),A=g(A,V),A.return=F,F=A):(c(F,A),A=cp(V,F.mode,te),A.return=F,F=A),T(F)):c(F,A)}return Ke}var Ki=Dg(!0),Fg=Dg(!1),tl=jr(null),nl=null,Xi=null,yd=null;function wd(){yd=Xi=nl=null}function bd(i){var o=tl.current;Ae(tl),i._currentValue=o}function _d(i,o,c){for(;i!==null;){var f=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),i===c)break;i=i.return}}function es(i,o){nl=i,yd=Xi=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(At=!0),i.firstContext=null)}function fn(i){var o=i._currentValue;if(yd!==i)if(i={context:i,memoizedValue:o,next:null},Xi===null){if(nl===null)throw Error(n(308));Xi=i,nl.dependencies={lanes:0,firstContext:i}}else Xi=Xi.next=i;return o}var si=null;function Sd(i){si===null?si=[i]:si.push(i)}function Bg(i,o,c,f){var g=o.interleaved;return g===null?(c.next=c,Sd(o)):(c.next=g.next,g.next=c),o.interleaved=c,nr(i,f)}function nr(i,o){i.lanes|=o;var c=i.alternate;for(c!==null&&(c.lanes|=o),c=i,i=i.return;i!==null;)i.childLanes|=o,c=i.alternate,c!==null&&(c.childLanes|=o),c=i,i=i.return;return c.tag===3?c.stateNode:null}var Tr=!1;function kd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function rr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Ir(i,o,c){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,Ce&2){var g=f.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),f.pending=o,nr(i,c)}return g=f.interleaved,g===null?(o.next=o,Sd(f)):(o.next=g.next,g.next=o),f.interleaved=o,nr(i,c)}function rl(i,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194240)!==0)){var f=o.lanes;f&=i.pendingLanes,c|=f,o.lanes=c,Au(i,c)}}function Wg(i,o){var c=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,c===f)){var g=null,v=null;if(c=c.firstBaseUpdate,c!==null){do{var T={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};v===null?g=v=T:v=v.next=T,c=c.next}while(c!==null);v===null?g=v=o:v=v.next=o}else g=v=o;c={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:f.shared,effects:f.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=o:i.next=o,c.lastBaseUpdate=o}function il(i,o,c,f){var g=i.updateQueue;Tr=!1;var v=g.firstBaseUpdate,T=g.lastBaseUpdate,P=g.shared.pending;if(P!==null){g.shared.pending=null;var M=P,W=M.next;M.next=null,T===null?v=W:T.next=W,T=M;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,P=Z.lastBaseUpdate,P!==T&&(P===null?Z.firstBaseUpdate=W:P.next=W,Z.lastBaseUpdate=M))}if(v!==null){var K=g.baseState;T=0,Z=W=M=null,P=v;do{var q=P.lane,re=P.eventTime;if((f&q)===q){Z!==null&&(Z=Z.next={eventTime:re,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var oe=i,ae=P;switch(q=o,re=c,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){K=oe.call(re,K,q);break e}K=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,q=typeof oe=="function"?oe.call(re,K,q):oe,q==null)break e;K=Q({},K,q);break e;case 2:Tr=!0}}P.callback!==null&&P.lane!==0&&(i.flags|=64,q=g.effects,q===null?g.effects=[P]:q.push(P))}else re={eventTime:re,lane:q,tag:P.tag,payload:P.payload,callback:P.callback,next:null},Z===null?(W=Z=re,M=K):Z=Z.next=re,T|=q;if(P=P.next,P===null){if(P=g.shared.pending,P===null)break;q=P,P=q.next,q.next=null,g.lastBaseUpdate=q,g.shared.pending=null}}while(!0);if(Z===null&&(M=K),g.baseState=M,g.firstBaseUpdate=W,g.lastBaseUpdate=Z,o=g.shared.interleaved,o!==null){g=o;do T|=g.lane,g=g.next;while(g!==o)}else v===null&&(g.shared.lanes=0);li|=T,i.lanes=T,i.memoizedState=K}}function Ug(i,o,c){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var f=i[o],g=f.callback;if(g!==null){if(f.callback=null,f=c,typeof g!="function")throw Error(n(191,g));g.call(f)}}}var uo={},On=jr(uo),po=jr(uo),fo=jr(uo);function oi(i){if(i===uo)throw Error(n(174));return i}function jd(i,o){switch(Ne(fo,o),Ne(po,i),Ne(On,uo),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Cu(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Cu(o,i)}Ae(On),Ne(On,o)}function ts(){Ae(On),Ae(po),Ae(fo)}function Gg(i){oi(fo.current);var o=oi(On.current),c=Cu(o,i.type);o!==c&&(Ne(po,i),Ne(On,c))}function Cd(i){po.current===i&&(Ae(On),Ae(po))}var We=jr(0);function sl(i){for(var o=i;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Ed=[];function Td(){for(var i=0;i<Ed.length;i++)Ed[i]._workInProgressVersionPrimary=null;Ed.length=0}var ol=I.ReactCurrentDispatcher,Id=I.ReactCurrentBatchConfig,ai=0,Ue=null,ot=null,ct=null,al=!1,ho=!1,mo=0,sS=0;function _t(){throw Error(n(321))}function Rd(i,o){if(o===null)return!1;for(var c=0;c<o.length&&c<i.length;c++)if(!Sn(i[c],o[c]))return!1;return!0}function $d(i,o,c,f,g,v){if(ai=v,Ue=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,ol.current=i===null||i.memoizedState===null?cS:uS,i=c(f,g),ho){v=0;do{if(ho=!1,mo=0,25<=v)throw Error(n(301));v+=1,ct=ot=null,o.updateQueue=null,ol.current=dS,i=c(f,g)}while(ho)}if(ol.current=ul,o=ot!==null&&ot.next!==null,ai=0,ct=ot=Ue=null,al=!1,o)throw Error(n(300));return i}function Pd(){var i=mo!==0;return mo=0,i}function Ln(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ue.memoizedState=ct=i:ct=ct.next=i,ct}function hn(){if(ot===null){var i=Ue.alternate;i=i!==null?i.memoizedState:null}else i=ot.next;var o=ct===null?Ue.memoizedState:ct.next;if(o!==null)ct=o,ot=i;else{if(i===null)throw Error(n(310));ot=i,i={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ct===null?Ue.memoizedState=ct=i:ct=ct.next=i}return ct}function go(i,o){return typeof o=="function"?o(i):o}function zd(i){var o=hn(),c=o.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=i;var f=ot,g=f.baseQueue,v=c.pending;if(v!==null){if(g!==null){var T=g.next;g.next=v.next,v.next=T}f.baseQueue=g=v,c.pending=null}if(g!==null){v=g.next,f=f.baseState;var P=T=null,M=null,W=v;do{var Z=W.lane;if((ai&Z)===Z)M!==null&&(M=M.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),f=W.hasEagerState?W.eagerState:i(f,W.action);else{var K={lane:Z,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};M===null?(P=M=K,T=f):M=M.next=K,Ue.lanes|=Z,li|=Z}W=W.next}while(W!==null&&W!==v);M===null?T=f:M.next=P,Sn(f,o.memoizedState)||(At=!0),o.memoizedState=f,o.baseState=T,o.baseQueue=M,c.lastRenderedState=f}if(i=c.interleaved,i!==null){g=i;do v=g.lane,Ue.lanes|=v,li|=v,g=g.next;while(g!==i)}else g===null&&(c.lanes=0);return[o.memoizedState,c.dispatch]}function Md(i){var o=hn(),c=o.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=i;var f=c.dispatch,g=c.pending,v=o.memoizedState;if(g!==null){c.pending=null;var T=g=g.next;do v=i(v,T.action),T=T.next;while(T!==g);Sn(v,o.memoizedState)||(At=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),c.lastRenderedState=v}return[v,f]}function Hg(){}function Yg(i,o){var c=Ue,f=hn(),g=o(),v=!Sn(f.memoizedState,g);if(v&&(f.memoizedState=g,At=!0),f=f.queue,Nd(Qg.bind(null,c,f,i),[i]),f.getSnapshot!==o||v||ct!==null&&ct.memoizedState.tag&1){if(c.flags|=2048,xo(9,qg.bind(null,c,f,g,o),void 0,null),ut===null)throw Error(n(349));ai&30||Jg(c,o,g)}return g}function Jg(i,o,c){i.flags|=16384,i={getSnapshot:o,value:c},o=Ue.updateQueue,o===null?(o={lastEffect:null,stores:null},Ue.updateQueue=o,o.stores=[i]):(c=o.stores,c===null?o.stores=[i]:c.push(i))}function qg(i,o,c,f){o.value=c,o.getSnapshot=f,Zg(o)&&Kg(i)}function Qg(i,o,c){return c(function(){Zg(o)&&Kg(i)})}function Zg(i){var o=i.getSnapshot;i=i.value;try{var c=o();return!Sn(i,c)}catch{return!0}}function Kg(i){var o=nr(i,1);o!==null&&Tn(o,i,1,-1)}function Xg(i){var o=Ln();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:i},o.queue=i,i=i.dispatch=lS.bind(null,Ue,i),[o.memoizedState,i]}function xo(i,o,c,f){return i={tag:i,create:o,destroy:c,deps:f,next:null},o=Ue.updateQueue,o===null?(o={lastEffect:null,stores:null},Ue.updateQueue=o,o.lastEffect=i.next=i):(c=o.lastEffect,c===null?o.lastEffect=i.next=i:(f=c.next,c.next=i,i.next=f,o.lastEffect=i)),i}function e0(){return hn().memoizedState}function ll(i,o,c,f){var g=Ln();Ue.flags|=i,g.memoizedState=xo(1|o,c,void 0,f===void 0?null:f)}function cl(i,o,c,f){var g=hn();f=f===void 0?null:f;var v=void 0;if(ot!==null){var T=ot.memoizedState;if(v=T.destroy,f!==null&&Rd(f,T.deps)){g.memoizedState=xo(o,c,v,f);return}}Ue.flags|=i,g.memoizedState=xo(1|o,c,v,f)}function t0(i,o){return ll(8390656,8,i,o)}function Nd(i,o){return cl(2048,8,i,o)}function n0(i,o){return cl(4,2,i,o)}function r0(i,o){return cl(4,4,i,o)}function i0(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function s0(i,o,c){return c=c!=null?c.concat([i]):null,cl(4,4,i0.bind(null,o,i),c)}function Od(){}function o0(i,o){var c=hn();o=o===void 0?null:o;var f=c.memoizedState;return f!==null&&o!==null&&Rd(o,f[1])?f[0]:(c.memoizedState=[i,o],i)}function a0(i,o){var c=hn();o=o===void 0?null:o;var f=c.memoizedState;return f!==null&&o!==null&&Rd(o,f[1])?f[0]:(i=i(),c.memoizedState=[i,o],i)}function l0(i,o,c){return ai&21?(Sn(c,o)||(c=Am(),Ue.lanes|=c,li|=c,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,At=!0),i.memoizedState=c)}function oS(i,o){var c=ze;ze=c!==0&&4>c?c:4,i(!0);var f=Id.transition;Id.transition={};try{i(!1),o()}finally{ze=c,Id.transition=f}}function c0(){return hn().memoizedState}function aS(i,o,c){var f=zr(i);if(c={lane:f,action:c,hasEagerState:!1,eagerState:null,next:null},u0(i))d0(o,c);else if(c=Bg(i,o,c,f),c!==null){var g=zt();Tn(c,i,f,g),p0(c,o,f)}}function lS(i,o,c){var f=zr(i),g={lane:f,action:c,hasEagerState:!1,eagerState:null,next:null};if(u0(i))d0(o,g);else{var v=i.alternate;if(i.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null))try{var T=o.lastRenderedState,P=v(T,c);if(g.hasEagerState=!0,g.eagerState=P,Sn(P,T)){var M=o.interleaved;M===null?(g.next=g,Sd(o)):(g.next=M.next,M.next=g),o.interleaved=g;return}}catch{}finally{}c=Bg(i,o,g,f),c!==null&&(g=zt(),Tn(c,i,f,g),p0(c,o,f))}}function u0(i){var o=i.alternate;return i===Ue||o!==null&&o===Ue}function d0(i,o){ho=al=!0;var c=i.pending;c===null?o.next=o:(o.next=c.next,c.next=o),i.pending=o}function p0(i,o,c){if(c&4194240){var f=o.lanes;f&=i.pendingLanes,c|=f,o.lanes=c,Au(i,c)}}var ul={readContext:fn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},cS={readContext:fn,useCallback:function(i,o){return Ln().memoizedState=[i,o===void 0?null:o],i},useContext:fn,useEffect:t0,useImperativeHandle:function(i,o,c){return c=c!=null?c.concat([i]):null,ll(4194308,4,i0.bind(null,o,i),c)},useLayoutEffect:function(i,o){return ll(4194308,4,i,o)},useInsertionEffect:function(i,o){return ll(4,2,i,o)},useMemo:function(i,o){var c=Ln();return o=o===void 0?null:o,i=i(),c.memoizedState=[i,o],i},useReducer:function(i,o,c){var f=Ln();return o=c!==void 0?c(o):o,f.memoizedState=f.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},f.queue=i,i=i.dispatch=aS.bind(null,Ue,i),[f.memoizedState,i]},useRef:function(i){var o=Ln();return i={current:i},o.memoizedState=i},useState:Xg,useDebugValue:Od,useDeferredValue:function(i){return Ln().memoizedState=i},useTransition:function(){var i=Xg(!1),o=i[0];return i=oS.bind(null,i[1]),Ln().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,c){var f=Ue,g=Ln();if(Be){if(c===void 0)throw Error(n(407));c=c()}else{if(c=o(),ut===null)throw Error(n(349));ai&30||Jg(f,o,c)}g.memoizedState=c;var v={value:c,getSnapshot:o};return g.queue=v,t0(Qg.bind(null,f,v,i),[i]),f.flags|=2048,xo(9,qg.bind(null,f,v,c,o),void 0,null),c},useId:function(){var i=Ln(),o=ut.identifierPrefix;if(Be){var c=tr,f=er;c=(f&~(1<<32-_n(f)-1)).toString(32)+c,o=":"+o+"R"+c,c=mo++,0<c&&(o+="H"+c.toString(32)),o+=":"}else c=sS++,o=":"+o+"r"+c.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},uS={readContext:fn,useCallback:o0,useContext:fn,useEffect:Nd,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:a0,useReducer:zd,useRef:e0,useState:function(){return zd(go)},useDebugValue:Od,useDeferredValue:function(i){var o=hn();return l0(o,ot.memoizedState,i)},useTransition:function(){var i=zd(go)[0],o=hn().memoizedState;return[i,o]},useMutableSource:Hg,useSyncExternalStore:Yg,useId:c0,unstable_isNewReconciler:!1},dS={readContext:fn,useCallback:o0,useContext:fn,useEffect:Nd,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:a0,useReducer:Md,useRef:e0,useState:function(){return Md(go)},useDebugValue:Od,useDeferredValue:function(i){var o=hn();return ot===null?o.memoizedState=i:l0(o,ot.memoizedState,i)},useTransition:function(){var i=Md(go)[0],o=hn().memoizedState;return[i,o]},useMutableSource:Hg,useSyncExternalStore:Yg,useId:c0,unstable_isNewReconciler:!1};function jn(i,o){if(i&&i.defaultProps){o=Q({},o),i=i.defaultProps;for(var c in i)o[c]===void 0&&(o[c]=i[c]);return o}return o}function Ld(i,o,c,f){o=i.memoizedState,c=c(f,o),c=c==null?o:Q({},o,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var dl={isMounted:function(i){return(i=i._reactInternals)?ei(i)===i:!1},enqueueSetState:function(i,o,c){i=i._reactInternals;var f=zt(),g=zr(i),v=rr(f,g);v.payload=o,c!=null&&(v.callback=c),o=Ir(i,v,g),o!==null&&(Tn(o,i,g,f),rl(o,i,g))},enqueueReplaceState:function(i,o,c){i=i._reactInternals;var f=zt(),g=zr(i),v=rr(f,g);v.tag=1,v.payload=o,c!=null&&(v.callback=c),o=Ir(i,v,g),o!==null&&(Tn(o,i,g,f),rl(o,i,g))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var c=zt(),f=zr(i),g=rr(c,f);g.tag=2,o!=null&&(g.callback=o),o=Ir(i,g,f),o!==null&&(Tn(o,i,f,c),rl(o,i,f))}};function f0(i,o,c,f,g,v,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,v,T):o.prototype&&o.prototype.isPureReactComponent?!no(c,f)||!no(g,v):!0}function h0(i,o,c){var f=!1,g=Cr,v=o.contextType;return typeof v=="object"&&v!==null?v=fn(v):(g=Lt(o)?ni:bt.current,f=o.contextTypes,v=(f=f!=null)?Ji(i,g):Cr),o=new o(c,v),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=dl,i.stateNode=o,o._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=v),o}function m0(i,o,c,f){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,f),o.state!==i&&dl.enqueueReplaceState(o,o.state,null)}function Ad(i,o,c,f){var g=i.stateNode;g.props=c,g.state=i.memoizedState,g.refs={},kd(i);var v=o.contextType;typeof v=="object"&&v!==null?g.context=fn(v):(v=Lt(o)?ni:bt.current,g.context=Ji(i,v)),g.state=i.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Ld(i,o,v,c),g.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&dl.enqueueReplaceState(g,g.state,null),il(i,c,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function ns(i,o){try{var c="",f=o;do c+=xe(f),f=f.return;while(f);var g=c}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:i,source:o,stack:g,digest:null}}function Dd(i,o,c){return{value:i,source:null,stack:c??null,digest:o??null}}function Fd(i,o){try{console.error(o.value)}catch(c){setTimeout(function(){throw c})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function g0(i,o,c){c=rr(-1,c),c.tag=3,c.payload={element:null};var f=o.value;return c.callback=function(){vl||(vl=!0,tp=f),Fd(i,o)},c}function x0(i,o,c){c=rr(-1,c),c.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=o.value;c.payload=function(){return f(g)},c.callback=function(){Fd(i,o)}}var v=i.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(c.callback=function(){Fd(i,o),typeof f!="function"&&($r===null?$r=new Set([this]):$r.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),c}function v0(i,o,c){var f=i.pingCache;if(f===null){f=i.pingCache=new pS;var g=new Set;f.set(o,g)}else g=f.get(o),g===void 0&&(g=new Set,f.set(o,g));g.has(c)||(g.add(c),i=CS.bind(null,i,o,c),o.then(i,i))}function y0(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function w0(i,o,c,f,g){return i.mode&1?(i.flags|=65536,i.lanes=g,i):(i===o?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(o=rr(-1,1),o.tag=2,Ir(c,o,1))),c.lanes|=1),i)}var fS=I.ReactCurrentOwner,At=!1;function Pt(i,o,c,f){o.child=i===null?Fg(o,null,c,f):Ki(o,i.child,c,f)}function b0(i,o,c,f,g){c=c.render;var v=o.ref;return es(o,g),f=$d(i,o,c,f,v,g),c=Pd(),i!==null&&!At?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,ir(i,o,g)):(Be&&c&&hd(o),o.flags|=1,Pt(i,o,f,g),o.child)}function _0(i,o,c,f,g){if(i===null){var v=c.type;return typeof v=="function"&&!lp(v)&&v.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(o.tag=15,o.type=v,S0(i,o,v,f,g)):(i=kl(c.type,null,f,o,o.mode,g),i.ref=o.ref,i.return=o,o.child=i)}if(v=i.child,!(i.lanes&g)){var T=v.memoizedProps;if(c=c.compare,c=c!==null?c:no,c(T,f)&&i.ref===o.ref)return ir(i,o,g)}return o.flags|=1,i=Nr(v,f),i.ref=o.ref,i.return=o,o.child=i}function S0(i,o,c,f,g){if(i!==null){var v=i.memoizedProps;if(no(v,f)&&i.ref===o.ref)if(At=!1,o.pendingProps=f=v,(i.lanes&g)!==0)i.flags&131072&&(At=!0);else return o.lanes=i.lanes,ir(i,o,g)}return Bd(i,o,c,f,g)}function k0(i,o,c){var f=o.pendingProps,g=f.children,v=i!==null?i.memoizedState:null;if(f.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(is,Kt),Kt|=c;else{if(!(c&1073741824))return i=v!==null?v.baseLanes|c:c,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Ne(is,Kt),Kt|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:c,Ne(is,Kt),Kt|=f}else v!==null?(f=v.baseLanes|c,o.memoizedState=null):f=c,Ne(is,Kt),Kt|=f;return Pt(i,o,g,c),o.child}function j0(i,o){var c=o.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(o.flags|=512,o.flags|=2097152)}function Bd(i,o,c,f,g){var v=Lt(c)?ni:bt.current;return v=Ji(o,v),es(o,g),c=$d(i,o,c,f,v,g),f=Pd(),i!==null&&!At?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,ir(i,o,g)):(Be&&f&&hd(o),o.flags|=1,Pt(i,o,c,g),o.child)}function C0(i,o,c,f,g){if(Lt(c)){var v=!0;qa(o)}else v=!1;if(es(o,g),o.stateNode===null)fl(i,o),h0(o,c,f),Ad(o,c,f,g),f=!0;else if(i===null){var T=o.stateNode,P=o.memoizedProps;T.props=P;var M=T.context,W=c.contextType;typeof W=="object"&&W!==null?W=fn(W):(W=Lt(c)?ni:bt.current,W=Ji(o,W));var Z=c.getDerivedStateFromProps,K=typeof Z=="function"||typeof T.getSnapshotBeforeUpdate=="function";K||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(P!==f||M!==W)&&m0(o,T,f,W),Tr=!1;var q=o.memoizedState;T.state=q,il(o,f,T,g),M=o.memoizedState,P!==f||q!==M||Ot.current||Tr?(typeof Z=="function"&&(Ld(o,c,Z,f),M=o.memoizedState),(P=Tr||f0(o,c,P,f,q,M,W))?(K||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=M),T.props=f,T.state=M,T.context=W,f=P):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{T=o.stateNode,Vg(i,o),P=o.memoizedProps,W=o.type===o.elementType?P:jn(o.type,P),T.props=W,K=o.pendingProps,q=T.context,M=c.contextType,typeof M=="object"&&M!==null?M=fn(M):(M=Lt(c)?ni:bt.current,M=Ji(o,M));var re=c.getDerivedStateFromProps;(Z=typeof re=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(P!==K||q!==M)&&m0(o,T,f,M),Tr=!1,q=o.memoizedState,T.state=q,il(o,f,T,g);var oe=o.memoizedState;P!==K||q!==oe||Ot.current||Tr?(typeof re=="function"&&(Ld(o,c,re,f),oe=o.memoizedState),(W=Tr||f0(o,c,W,f,q,oe,M)||!1)?(Z||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,oe,M),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,oe,M)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||P===i.memoizedProps&&q===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||P===i.memoizedProps&&q===i.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=oe),T.props=f,T.state=oe,T.context=M,f=W):(typeof T.componentDidUpdate!="function"||P===i.memoizedProps&&q===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||P===i.memoizedProps&&q===i.memoizedState||(o.flags|=1024),f=!1)}return Vd(i,o,c,f,v,g)}function Vd(i,o,c,f,g,v){j0(i,o);var T=(o.flags&128)!==0;if(!f&&!T)return g&&$g(o,c,!1),ir(i,o,v);f=o.stateNode,fS.current=o;var P=T&&typeof c.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,i!==null&&T?(o.child=Ki(o,i.child,null,v),o.child=Ki(o,null,P,v)):Pt(i,o,P,v),o.memoizedState=f.state,g&&$g(o,c,!0),o.child}function E0(i){var o=i.stateNode;o.pendingContext?Ig(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Ig(i,o.context,!1),jd(i,o.containerInfo)}function T0(i,o,c,f,g){return Zi(),vd(g),o.flags|=256,Pt(i,o,c,f),o.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function Ud(i){return{baseLanes:i,cachePool:null,transitions:null}}function I0(i,o,c){var f=o.pendingProps,g=We.current,v=!1,T=(o.flags&128)!==0,P;if((P=T)||(P=i!==null&&i.memoizedState===null?!1:(g&2)!==0),P?(v=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Ne(We,g&1),i===null)return xd(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(T=f.children,i=f.fallback,v?(f=o.mode,v=o.child,T={mode:"hidden",children:T},!(f&1)&&v!==null?(v.childLanes=0,v.pendingProps=T):v=jl(T,f,0,null),i=pi(i,f,c,null),v.return=o,i.return=o,v.sibling=i,o.child=v,o.child.memoizedState=Ud(c),o.memoizedState=Wd,i):Gd(o,T));if(g=i.memoizedState,g!==null&&(P=g.dehydrated,P!==null))return hS(i,o,T,f,P,g,c);if(v){v=f.fallback,T=o.mode,g=i.child,P=g.sibling;var M={mode:"hidden",children:f.children};return!(T&1)&&o.child!==g?(f=o.child,f.childLanes=0,f.pendingProps=M,o.deletions=null):(f=Nr(g,M),f.subtreeFlags=g.subtreeFlags&14680064),P!==null?v=Nr(P,v):(v=pi(v,T,c,null),v.flags|=2),v.return=o,f.return=o,f.sibling=v,o.child=f,f=v,v=o.child,T=i.child.memoizedState,T=T===null?Ud(c):{baseLanes:T.baseLanes|c,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=i.childLanes&~c,o.memoizedState=Wd,f}return v=i.child,i=v.sibling,f=Nr(v,{mode:"visible",children:f.children}),!(o.mode&1)&&(f.lanes=c),f.return=o,f.sibling=null,i!==null&&(c=o.deletions,c===null?(o.deletions=[i],o.flags|=16):c.push(i)),o.child=f,o.memoizedState=null,f}function Gd(i,o){return o=jl({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function pl(i,o,c,f){return f!==null&&vd(f),Ki(o,i.child,null,c),i=Gd(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function hS(i,o,c,f,g,v,T){if(c)return o.flags&256?(o.flags&=-257,f=Dd(Error(n(422))),pl(i,o,T,f)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(v=f.fallback,g=o.mode,f=jl({mode:"visible",children:f.children},g,0,null),v=pi(v,g,T,null),v.flags|=2,f.return=o,v.return=o,f.sibling=v,o.child=f,o.mode&1&&Ki(o,i.child,null,T),o.child.memoizedState=Ud(T),o.memoizedState=Wd,v);if(!(o.mode&1))return pl(i,o,T,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var P=f.dgst;return f=P,v=Error(n(419)),f=Dd(v,f,void 0),pl(i,o,T,f)}if(P=(T&i.childLanes)!==0,At||P){if(f=ut,f!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=g&(f.suspendedLanes|T)?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,nr(i,g),Tn(f,i,g,-1))}return ap(),f=Dd(Error(n(421))),pl(i,o,T,f)}return g.data==="$?"?(o.flags|=128,o.child=i.child,o=ES.bind(null,i),g._reactRetry=o,null):(i=v.treeContext,Zt=kr(g.nextSibling),Qt=o,Be=!0,kn=null,i!==null&&(dn[pn++]=er,dn[pn++]=tr,dn[pn++]=ri,er=i.id,tr=i.overflow,ri=o),o=Gd(o,f.children),o.flags|=4096,o)}function R0(i,o,c){i.lanes|=o;var f=i.alternate;f!==null&&(f.lanes|=o),_d(i.return,o,c)}function Hd(i,o,c,f,g){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:c,tailMode:g}:(v.isBackwards=o,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=c,v.tailMode=g)}function $0(i,o,c){var f=o.pendingProps,g=f.revealOrder,v=f.tail;if(Pt(i,o,f.children,c),f=We.current,f&2)f=f&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&R0(i,c,o);else if(i.tag===19)R0(i,c,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ne(We,f),!(o.mode&1))o.memoizedState=null;else switch(g){case"forwards":for(c=o.child,g=null;c!==null;)i=c.alternate,i!==null&&sl(i)===null&&(g=c),c=c.sibling;c=g,c===null?(g=o.child,o.child=null):(g=c.sibling,c.sibling=null),Hd(o,!1,g,c,v);break;case"backwards":for(c=null,g=o.child,o.child=null;g!==null;){if(i=g.alternate,i!==null&&sl(i)===null){o.child=g;break}i=g.sibling,g.sibling=c,c=g,g=i}Hd(o,!0,c,null,v);break;case"together":Hd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function fl(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ir(i,o,c){if(i!==null&&(o.dependencies=i.dependencies),li|=o.lanes,!(c&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(n(153));if(o.child!==null){for(i=o.child,c=Nr(i,i.pendingProps),o.child=c,c.return=o;i.sibling!==null;)i=i.sibling,c=c.sibling=Nr(i,i.pendingProps),c.return=o;c.sibling=null}return o.child}function mS(i,o,c){switch(o.tag){case 3:E0(o),Zi();break;case 5:Gg(o);break;case 1:Lt(o.type)&&qa(o);break;case 4:jd(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,g=o.memoizedProps.value;Ne(tl,f._currentValue),f._currentValue=g;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(Ne(We,We.current&1),o.flags|=128,null):c&o.child.childLanes?I0(i,o,c):(Ne(We,We.current&1),i=ir(i,o,c),i!==null?i.sibling:null);Ne(We,We.current&1);break;case 19:if(f=(c&o.childLanes)!==0,i.flags&128){if(f)return $0(i,o,c);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Ne(We,We.current),f)break;return null;case 22:case 23:return o.lanes=0,k0(i,o,c)}return ir(i,o,c)}var P0,Yd,z0,M0;P0=function(i,o){for(var c=o.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===o)break;for(;c.sibling===null;){if(c.return===null||c.return===o)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Yd=function(){},z0=function(i,o,c,f){var g=i.memoizedProps;if(g!==f){i=o.stateNode,oi(On.current);var v=null;switch(c){case"input":g=_u(i,g),f=_u(i,f),v=[];break;case"select":g=Q({},g,{value:void 0}),f=Q({},f,{value:void 0}),v=[];break;case"textarea":g=ju(i,g),f=ju(i,f),v=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Ha)}Eu(c,f);var T;c=null;for(W in g)if(!f.hasOwnProperty(W)&&g.hasOwnProperty(W)&&g[W]!=null)if(W==="style"){var P=g[W];for(T in P)P.hasOwnProperty(T)&&(c||(c={}),c[T]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(s.hasOwnProperty(W)?v||(v=[]):(v=v||[]).push(W,null));for(W in f){var M=f[W];if(P=g!=null?g[W]:void 0,f.hasOwnProperty(W)&&M!==P&&(M!=null||P!=null))if(W==="style")if(P){for(T in P)!P.hasOwnProperty(T)||M&&M.hasOwnProperty(T)||(c||(c={}),c[T]="");for(T in M)M.hasOwnProperty(T)&&P[T]!==M[T]&&(c||(c={}),c[T]=M[T])}else c||(v||(v=[]),v.push(W,c)),c=M;else W==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,P=P?P.__html:void 0,M!=null&&P!==M&&(v=v||[]).push(W,M)):W==="children"?typeof M!="string"&&typeof M!="number"||(v=v||[]).push(W,""+M):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(s.hasOwnProperty(W)?(M!=null&&W==="onScroll"&&Le("scroll",i),v||P===M||(v=[])):(v=v||[]).push(W,M))}c&&(v=v||[]).push("style",c);var W=v;(o.updateQueue=W)&&(o.flags|=4)}},M0=function(i,o,c,f){c!==f&&(o.flags|=4)};function vo(i,o){if(!Be)switch(i.tailMode){case"hidden":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var f=null;c!==null;)c.alternate!==null&&(f=c),c=c.sibling;f===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function St(i){var o=i.alternate!==null&&i.alternate.child===i.child,c=0,f=0;if(o)for(var g=i.child;g!==null;)c|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)c|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=c,o}function gS(i,o,c){var f=o.pendingProps;switch(md(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(o),null;case 1:return Lt(o.type)&&Ja(),St(o),null;case 3:return f=o.stateNode,ts(),Ae(Ot),Ae(bt),Td(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Xa(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,kn!==null&&(ip(kn),kn=null))),Yd(i,o),St(o),null;case 5:Cd(o);var g=oi(fo.current);if(c=o.type,i!==null&&o.stateNode!=null)z0(i,o,c,f,g),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(n(166));return St(o),null}if(i=oi(On.current),Xa(o)){f=o.stateNode,c=o.type;var v=o.memoizedProps;switch(f[Nn]=o,f[ao]=v,i=(o.mode&1)!==0,c){case"dialog":Le("cancel",f),Le("close",f);break;case"iframe":case"object":case"embed":Le("load",f);break;case"video":case"audio":for(g=0;g<io.length;g++)Le(io[g],f);break;case"source":Le("error",f);break;case"img":case"image":case"link":Le("error",f),Le("load",f);break;case"details":Le("toggle",f);break;case"input":hm(f,v),Le("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},Le("invalid",f);break;case"textarea":xm(f,v),Le("invalid",f)}Eu(c,v),g=null;for(var T in v)if(v.hasOwnProperty(T)){var P=v[T];T==="children"?typeof P=="string"?f.textContent!==P&&(v.suppressHydrationWarning!==!0&&Ga(f.textContent,P,i),g=["children",P]):typeof P=="number"&&f.textContent!==""+P&&(v.suppressHydrationWarning!==!0&&Ga(f.textContent,P,i),g=["children",""+P]):s.hasOwnProperty(T)&&P!=null&&T==="onScroll"&&Le("scroll",f)}switch(c){case"input":Zn(f),gm(f,v,!0);break;case"textarea":Zn(f),ym(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=Ha)}f=g,o.updateQueue=f,f!==null&&(o.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=wm(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(c,{is:f.is}):(i=T.createElement(c),c==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,c),i[Nn]=o,i[ao]=f,P0(i,o,!1,!1),o.stateNode=i;e:{switch(T=Tu(c,f),c){case"dialog":Le("cancel",i),Le("close",i),g=f;break;case"iframe":case"object":case"embed":Le("load",i),g=f;break;case"video":case"audio":for(g=0;g<io.length;g++)Le(io[g],i);g=f;break;case"source":Le("error",i),g=f;break;case"img":case"image":case"link":Le("error",i),Le("load",i),g=f;break;case"details":Le("toggle",i),g=f;break;case"input":hm(i,f),g=_u(i,f),Le("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=Q({},f,{value:void 0}),Le("invalid",i);break;case"textarea":xm(i,f),g=ju(i,f),Le("invalid",i);break;default:g=f}Eu(c,g),P=g;for(v in P)if(P.hasOwnProperty(v)){var M=P[v];v==="style"?Sm(i,M):v==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&bm(i,M)):v==="children"?typeof M=="string"?(c!=="textarea"||M!=="")&&Ds(i,M):typeof M=="number"&&Ds(i,""+M):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?M!=null&&v==="onScroll"&&Le("scroll",i):M!=null&&j(i,v,M,T))}switch(c){case"input":Zn(i),gm(i,f,!1);break;case"textarea":Zn(i),ym(i);break;case"option":f.value!=null&&i.setAttribute("value",""+ke(f.value));break;case"select":i.multiple=!!f.multiple,v=f.value,v!=null?Oi(i,!!f.multiple,v,!1):f.defaultValue!=null&&Oi(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Ha)}switch(c){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return St(o),null;case 6:if(i&&o.stateNode!=null)M0(i,o,i.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(n(166));if(c=oi(fo.current),oi(On.current),Xa(o)){if(f=o.stateNode,c=o.memoizedProps,f[Nn]=o,(v=f.nodeValue!==c)&&(i=Qt,i!==null))switch(i.tag){case 3:Ga(f.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ga(f.nodeValue,c,(i.mode&1)!==0)}v&&(o.flags|=4)}else f=(c.nodeType===9?c:c.ownerDocument).createTextNode(f),f[Nn]=o,o.stateNode=f}return St(o),null;case 13:if(Ae(We),f=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Be&&Zt!==null&&o.mode&1&&!(o.flags&128))Lg(),Zi(),o.flags|=98560,v=!1;else if(v=Xa(o),f!==null&&f.dehydrated!==null){if(i===null){if(!v)throw Error(n(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(n(317));v[Nn]=o}else Zi(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;St(o),v=!1}else kn!==null&&(ip(kn),kn=null),v=!0;if(!v)return o.flags&65536?o:null}return o.flags&128?(o.lanes=c,o):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(o.child.flags|=8192,o.mode&1&&(i===null||We.current&1?at===0&&(at=3):ap())),o.updateQueue!==null&&(o.flags|=4),St(o),null);case 4:return ts(),Yd(i,o),i===null&&so(o.stateNode.containerInfo),St(o),null;case 10:return bd(o.type._context),St(o),null;case 17:return Lt(o.type)&&Ja(),St(o),null;case 19:if(Ae(We),v=o.memoizedState,v===null)return St(o),null;if(f=(o.flags&128)!==0,T=v.rendering,T===null)if(f)vo(v,!1);else{if(at!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(T=sl(i),T!==null){for(o.flags|=128,vo(v,!1),f=T.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=c,c=o.child;c!==null;)v=c,i=f,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=i,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,i=T.dependencies,v.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return Ne(We,We.current&1|2),o.child}i=i.sibling}v.tail!==null&&Ze()>ss&&(o.flags|=128,f=!0,vo(v,!1),o.lanes=4194304)}else{if(!f)if(i=sl(T),i!==null){if(o.flags|=128,f=!0,c=i.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),vo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Be)return St(o),null}else 2*Ze()-v.renderingStartTime>ss&&c!==1073741824&&(o.flags|=128,f=!0,vo(v,!1),o.lanes=4194304);v.isBackwards?(T.sibling=o.child,o.child=T):(c=v.last,c!==null?c.sibling=T:o.child=T,v.last=T)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=Ze(),o.sibling=null,c=We.current,Ne(We,f?c&1|2:c&1),o):(St(o),null);case 22:case 23:return op(),f=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(o.flags|=8192),f&&o.mode&1?Kt&1073741824&&(St(o),o.subtreeFlags&6&&(o.flags|=8192)):St(o),null;case 24:return null;case 25:return null}throw Error(n(156,o.tag))}function xS(i,o){switch(md(o),o.tag){case 1:return Lt(o.type)&&Ja(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ts(),Ae(Ot),Ae(bt),Td(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return Cd(o),null;case 13:if(Ae(We),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(n(340));Zi()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return Ae(We),null;case 4:return ts(),null;case 10:return bd(o.type._context),null;case 22:case 23:return op(),null;case 24:return null;default:return null}}var hl=!1,kt=!1,vS=typeof WeakSet=="function"?WeakSet:Set,se=null;function rs(i,o){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(f){Je(i,o,f)}else c.current=null}function Jd(i,o,c){try{c()}catch(f){Je(i,o,f)}}var N0=!1;function yS(i,o){if(od=Ma,i=fg(),Ku(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var f=c.getSelection&&c.getSelection();if(f&&f.rangeCount!==0){c=f.anchorNode;var g=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{c.nodeType,v.nodeType}catch{c=null;break e}var T=0,P=-1,M=-1,W=0,Z=0,K=i,q=null;t:for(;;){for(var re;K!==c||g!==0&&K.nodeType!==3||(P=T+g),K!==v||f!==0&&K.nodeType!==3||(M=T+f),K.nodeType===3&&(T+=K.nodeValue.length),(re=K.firstChild)!==null;)q=K,K=re;for(;;){if(K===i)break t;if(q===c&&++W===g&&(P=T),q===v&&++Z===f&&(M=T),(re=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=re}c=P===-1||M===-1?null:{start:P,end:M}}else c=null}c=c||{start:0,end:0}}else c=null;for(ad={focusedElem:i,selectionRange:c},Ma=!1,se=o;se!==null;)if(o=se,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,se=i;else for(;se!==null;){o=se;try{var oe=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,Ke=oe.memoizedState,F=o.stateNode,A=F.getSnapshotBeforeUpdate(o.elementType===o.type?ae:jn(o.type,ae),Ke);F.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var V=o.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(te){Je(o,o.return,te)}if(i=o.sibling,i!==null){i.return=o.return,se=i;break}se=o.return}return oe=N0,N0=!1,oe}function yo(i,o,c){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var v=g.destroy;g.destroy=void 0,v!==void 0&&Jd(o,c,v)}g=g.next}while(g!==f)}}function ml(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&i)===i){var f=c.create;c.destroy=f()}c=c.next}while(c!==o)}}function qd(i){var o=i.ref;if(o!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof o=="function"?o(i):o.current=i}}function O0(i){var o=i.alternate;o!==null&&(i.alternate=null,O0(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Nn],delete o[ao],delete o[dd],delete o[tS],delete o[nS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function L0(i){return i.tag===5||i.tag===3||i.tag===4}function A0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||L0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Qd(i,o,c){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?c.nodeType===8?c.parentNode.insertBefore(i,o):c.insertBefore(i,o):(c.nodeType===8?(o=c.parentNode,o.insertBefore(i,c)):(o=c,o.appendChild(i)),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=Ha));else if(f!==4&&(i=i.child,i!==null))for(Qd(i,o,c),i=i.sibling;i!==null;)Qd(i,o,c),i=i.sibling}function Zd(i,o,c){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?c.insertBefore(i,o):c.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Zd(i,o,c),i=i.sibling;i!==null;)Zd(i,o,c),i=i.sibling}var xt=null,Cn=!1;function Rr(i,o,c){for(c=c.child;c!==null;)D0(i,o,c),c=c.sibling}function D0(i,o,c){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(Ta,c)}catch{}switch(c.tag){case 5:kt||rs(c,o);case 6:var f=xt,g=Cn;xt=null,Rr(i,o,c),xt=f,Cn=g,xt!==null&&(Cn?(i=xt,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):xt.removeChild(c.stateNode));break;case 18:xt!==null&&(Cn?(i=xt,c=c.stateNode,i.nodeType===8?ud(i.parentNode,c):i.nodeType===1&&ud(i,c),Qs(i)):ud(xt,c.stateNode));break;case 4:f=xt,g=Cn,xt=c.stateNode.containerInfo,Cn=!0,Rr(i,o,c),xt=f,Cn=g;break;case 0:case 11:case 14:case 15:if(!kt&&(f=c.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var v=g,T=v.destroy;v=v.tag,T!==void 0&&(v&2||v&4)&&Jd(c,o,T),g=g.next}while(g!==f)}Rr(i,o,c);break;case 1:if(!kt&&(rs(c,o),f=c.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=c.memoizedProps,f.state=c.memoizedState,f.componentWillUnmount()}catch(P){Je(c,o,P)}Rr(i,o,c);break;case 21:Rr(i,o,c);break;case 22:c.mode&1?(kt=(f=kt)||c.memoizedState!==null,Rr(i,o,c),kt=f):Rr(i,o,c);break;default:Rr(i,o,c)}}function F0(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new vS),o.forEach(function(f){var g=TS.bind(null,i,f);c.has(f)||(c.add(f),f.then(g,g))})}}function En(i,o){var c=o.deletions;if(c!==null)for(var f=0;f<c.length;f++){var g=c[f];try{var v=i,T=o,P=T;e:for(;P!==null;){switch(P.tag){case 5:xt=P.stateNode,Cn=!1;break e;case 3:xt=P.stateNode.containerInfo,Cn=!0;break e;case 4:xt=P.stateNode.containerInfo,Cn=!0;break e}P=P.return}if(xt===null)throw Error(n(160));D0(v,T,g),xt=null,Cn=!1;var M=g.alternate;M!==null&&(M.return=null),g.return=null}catch(W){Je(g,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)B0(o,i),o=o.sibling}function B0(i,o){var c=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(En(o,i),An(i),f&4){try{yo(3,i,i.return),ml(3,i)}catch(ae){Je(i,i.return,ae)}try{yo(5,i,i.return)}catch(ae){Je(i,i.return,ae)}}break;case 1:En(o,i),An(i),f&512&&c!==null&&rs(c,c.return);break;case 5:if(En(o,i),An(i),f&512&&c!==null&&rs(c,c.return),i.flags&32){var g=i.stateNode;try{Ds(g,"")}catch(ae){Je(i,i.return,ae)}}if(f&4&&(g=i.stateNode,g!=null)){var v=i.memoizedProps,T=c!==null?c.memoizedProps:v,P=i.type,M=i.updateQueue;if(i.updateQueue=null,M!==null)try{P==="input"&&v.type==="radio"&&v.name!=null&&mm(g,v),Tu(P,T);var W=Tu(P,v);for(T=0;T<M.length;T+=2){var Z=M[T],K=M[T+1];Z==="style"?Sm(g,K):Z==="dangerouslySetInnerHTML"?bm(g,K):Z==="children"?Ds(g,K):j(g,Z,K,W)}switch(P){case"input":Su(g,v);break;case"textarea":vm(g,v);break;case"select":var q=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var re=v.value;re!=null?Oi(g,!!v.multiple,re,!1):q!==!!v.multiple&&(v.defaultValue!=null?Oi(g,!!v.multiple,v.defaultValue,!0):Oi(g,!!v.multiple,v.multiple?[]:"",!1))}g[ao]=v}catch(ae){Je(i,i.return,ae)}}break;case 6:if(En(o,i),An(i),f&4){if(i.stateNode===null)throw Error(n(162));g=i.stateNode,v=i.memoizedProps;try{g.nodeValue=v}catch(ae){Je(i,i.return,ae)}}break;case 3:if(En(o,i),An(i),f&4&&c!==null&&c.memoizedState.isDehydrated)try{Qs(o.containerInfo)}catch(ae){Je(i,i.return,ae)}break;case 4:En(o,i),An(i);break;case 13:En(o,i),An(i),g=i.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||(ep=Ze())),f&4&&F0(i);break;case 22:if(Z=c!==null&&c.memoizedState!==null,i.mode&1?(kt=(W=kt)||Z,En(o,i),kt=W):En(o,i),An(i),f&8192){if(W=i.memoizedState!==null,(i.stateNode.isHidden=W)&&!Z&&i.mode&1)for(se=i,Z=i.child;Z!==null;){for(K=se=Z;se!==null;){switch(q=se,re=q.child,q.tag){case 0:case 11:case 14:case 15:yo(4,q,q.return);break;case 1:rs(q,q.return);var oe=q.stateNode;if(typeof oe.componentWillUnmount=="function"){f=q,c=q.return;try{o=f,oe.props=o.memoizedProps,oe.state=o.memoizedState,oe.componentWillUnmount()}catch(ae){Je(f,c,ae)}}break;case 5:rs(q,q.return);break;case 22:if(q.memoizedState!==null){U0(K);continue}}re!==null?(re.return=q,se=re):U0(K)}Z=Z.sibling}e:for(Z=null,K=i;;){if(K.tag===5){if(Z===null){Z=K;try{g=K.stateNode,W?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(P=K.stateNode,M=K.memoizedProps.style,T=M!=null&&M.hasOwnProperty("display")?M.display:null,P.style.display=_m("display",T))}catch(ae){Je(i,i.return,ae)}}}else if(K.tag===6){if(Z===null)try{K.stateNode.nodeValue=W?"":K.memoizedProps}catch(ae){Je(i,i.return,ae)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===i)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===i)break e;for(;K.sibling===null;){if(K.return===null||K.return===i)break e;Z===K&&(Z=null),K=K.return}Z===K&&(Z=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:En(o,i),An(i),f&4&&F0(i);break;case 21:break;default:En(o,i),An(i)}}function An(i){var o=i.flags;if(o&2){try{e:{for(var c=i.return;c!==null;){if(L0(c)){var f=c;break e}c=c.return}throw Error(n(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(Ds(g,""),f.flags&=-33);var v=A0(i);Zd(i,v,g);break;case 3:case 4:var T=f.stateNode.containerInfo,P=A0(i);Qd(i,P,T);break;default:throw Error(n(161))}}catch(M){Je(i,i.return,M)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function wS(i,o,c){se=i,V0(i)}function V0(i,o,c){for(var f=(i.mode&1)!==0;se!==null;){var g=se,v=g.child;if(g.tag===22&&f){var T=g.memoizedState!==null||hl;if(!T){var P=g.alternate,M=P!==null&&P.memoizedState!==null||kt;P=hl;var W=kt;if(hl=T,(kt=M)&&!W)for(se=g;se!==null;)T=se,M=T.child,T.tag===22&&T.memoizedState!==null?G0(g):M!==null?(M.return=T,se=M):G0(g);for(;v!==null;)se=v,V0(v),v=v.sibling;se=g,hl=P,kt=W}W0(i)}else g.subtreeFlags&8772&&v!==null?(v.return=g,se=v):W0(i)}}function W0(i){for(;se!==null;){var o=se;if(o.flags&8772){var c=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:kt||ml(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!kt)if(c===null)f.componentDidMount();else{var g=o.elementType===o.type?c.memoizedProps:jn(o.type,c.memoizedProps);f.componentDidUpdate(g,c.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=o.updateQueue;v!==null&&Ug(o,v,f);break;case 3:var T=o.updateQueue;if(T!==null){if(c=null,o.child!==null)switch(o.child.tag){case 5:c=o.child.stateNode;break;case 1:c=o.child.stateNode}Ug(o,T,c)}break;case 5:var P=o.stateNode;if(c===null&&o.flags&4){c=P;var M=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&c.focus();break;case"img":M.src&&(c.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var Z=W.memoizedState;if(Z!==null){var K=Z.dehydrated;K!==null&&Qs(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}kt||o.flags&512&&qd(o)}catch(q){Je(o,o.return,q)}}if(o===i){se=null;break}if(c=o.sibling,c!==null){c.return=o.return,se=c;break}se=o.return}}function U0(i){for(;se!==null;){var o=se;if(o===i){se=null;break}var c=o.sibling;if(c!==null){c.return=o.return,se=c;break}se=o.return}}function G0(i){for(;se!==null;){var o=se;try{switch(o.tag){case 0:case 11:case 15:var c=o.return;try{ml(4,o)}catch(M){Je(o,c,M)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var g=o.return;try{f.componentDidMount()}catch(M){Je(o,g,M)}}var v=o.return;try{qd(o)}catch(M){Je(o,v,M)}break;case 5:var T=o.return;try{qd(o)}catch(M){Je(o,T,M)}}}catch(M){Je(o,o.return,M)}if(o===i){se=null;break}var P=o.sibling;if(P!==null){P.return=o.return,se=P;break}se=o.return}}var bS=Math.ceil,gl=I.ReactCurrentDispatcher,Kd=I.ReactCurrentOwner,mn=I.ReactCurrentBatchConfig,Ce=0,ut=null,nt=null,vt=0,Kt=0,is=jr(0),at=0,wo=null,li=0,xl=0,Xd=0,bo=null,Dt=null,ep=0,ss=1/0,sr=null,vl=!1,tp=null,$r=null,yl=!1,Pr=null,wl=0,_o=0,np=null,bl=-1,_l=0;function zt(){return Ce&6?Ze():bl!==-1?bl:bl=Ze()}function zr(i){return i.mode&1?Ce&2&&vt!==0?vt&-vt:iS.transition!==null?(_l===0&&(_l=Am()),_l):(i=ze,i!==0||(i=window.event,i=i===void 0?16:Ym(i.type)),i):1}function Tn(i,o,c,f){if(50<_o)throw _o=0,np=null,Error(n(185));Gs(i,c,f),(!(Ce&2)||i!==ut)&&(i===ut&&(!(Ce&2)&&(xl|=c),at===4&&Mr(i,vt)),Ft(i,f),c===1&&Ce===0&&!(o.mode&1)&&(ss=Ze()+500,Qa&&Er()))}function Ft(i,o){var c=i.callbackNode;i_(i,o);var f=$a(i,i===ut?vt:0);if(f===0)c!==null&&Nm(c),i.callbackNode=null,i.callbackPriority=0;else if(o=f&-f,i.callbackPriority!==o){if(c!=null&&Nm(c),o===1)i.tag===0?rS(Y0.bind(null,i)):Pg(Y0.bind(null,i)),X_(function(){!(Ce&6)&&Er()}),c=null;else{switch(Dm(f)){case 1:c=Nu;break;case 4:c=Om;break;case 16:c=Ea;break;case 536870912:c=Lm;break;default:c=Ea}c=tx(c,H0.bind(null,i))}i.callbackPriority=o,i.callbackNode=c}}function H0(i,o){if(bl=-1,_l=0,Ce&6)throw Error(n(327));var c=i.callbackNode;if(os()&&i.callbackNode!==c)return null;var f=$a(i,i===ut?vt:0);if(f===0)return null;if(f&30||f&i.expiredLanes||o)o=Sl(i,f);else{o=f;var g=Ce;Ce|=2;var v=q0();(ut!==i||vt!==o)&&(sr=null,ss=Ze()+500,ui(i,o));do try{kS();break}catch(P){J0(i,P)}while(!0);wd(),gl.current=v,Ce=g,nt!==null?o=0:(ut=null,vt=0,o=at)}if(o!==0){if(o===2&&(g=Ou(i),g!==0&&(f=g,o=rp(i,g))),o===1)throw c=wo,ui(i,0),Mr(i,f),Ft(i,Ze()),c;if(o===6)Mr(i,f);else{if(g=i.current.alternate,!(f&30)&&!_S(g)&&(o=Sl(i,f),o===2&&(v=Ou(i),v!==0&&(f=v,o=rp(i,v))),o===1))throw c=wo,ui(i,0),Mr(i,f),Ft(i,Ze()),c;switch(i.finishedWork=g,i.finishedLanes=f,o){case 0:case 1:throw Error(n(345));case 2:di(i,Dt,sr);break;case 3:if(Mr(i,f),(f&130023424)===f&&(o=ep+500-Ze(),10<o)){if($a(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){zt(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=cd(di.bind(null,i,Dt,sr),o);break}di(i,Dt,sr);break;case 4:if(Mr(i,f),(f&4194240)===f)break;for(o=i.eventTimes,g=-1;0<f;){var T=31-_n(f);v=1<<T,T=o[T],T>g&&(g=T),f&=~v}if(f=g,f=Ze()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*bS(f/1960))-f,10<f){i.timeoutHandle=cd(di.bind(null,i,Dt,sr),f);break}di(i,Dt,sr);break;case 5:di(i,Dt,sr);break;default:throw Error(n(329))}}}return Ft(i,Ze()),i.callbackNode===c?H0.bind(null,i):null}function rp(i,o){var c=bo;return i.current.memoizedState.isDehydrated&&(ui(i,o).flags|=256),i=Sl(i,o),i!==2&&(o=Dt,Dt=c,o!==null&&ip(o)),i}function ip(i){Dt===null?Dt=i:Dt.push.apply(Dt,i)}function _S(i){for(var o=i;;){if(o.flags&16384){var c=o.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var f=0;f<c.length;f++){var g=c[f],v=g.getSnapshot;g=g.value;try{if(!Sn(v(),g))return!1}catch{return!1}}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Mr(i,o){for(o&=~Xd,o&=~xl,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var c=31-_n(o),f=1<<c;i[c]=-1,o&=~f}}function Y0(i){if(Ce&6)throw Error(n(327));os();var o=$a(i,0);if(!(o&1))return Ft(i,Ze()),null;var c=Sl(i,o);if(i.tag!==0&&c===2){var f=Ou(i);f!==0&&(o=f,c=rp(i,f))}if(c===1)throw c=wo,ui(i,0),Mr(i,o),Ft(i,Ze()),c;if(c===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,di(i,Dt,sr),Ft(i,Ze()),null}function sp(i,o){var c=Ce;Ce|=1;try{return i(o)}finally{Ce=c,Ce===0&&(ss=Ze()+500,Qa&&Er())}}function ci(i){Pr!==null&&Pr.tag===0&&!(Ce&6)&&os();var o=Ce;Ce|=1;var c=mn.transition,f=ze;try{if(mn.transition=null,ze=1,i)return i()}finally{ze=f,mn.transition=c,Ce=o,!(Ce&6)&&Er()}}function op(){Kt=is.current,Ae(is)}function ui(i,o){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,K_(c)),nt!==null)for(c=nt.return;c!==null;){var f=c;switch(md(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ja();break;case 3:ts(),Ae(Ot),Ae(bt),Td();break;case 5:Cd(f);break;case 4:ts();break;case 13:Ae(We);break;case 19:Ae(We);break;case 10:bd(f.type._context);break;case 22:case 23:op()}c=c.return}if(ut=i,nt=i=Nr(i.current,null),vt=Kt=o,at=0,wo=null,Xd=xl=li=0,Dt=bo=null,si!==null){for(o=0;o<si.length;o++)if(c=si[o],f=c.interleaved,f!==null){c.interleaved=null;var g=f.next,v=c.pending;if(v!==null){var T=v.next;v.next=g,f.next=T}c.pending=f}si=null}return i}function J0(i,o){do{var c=nt;try{if(wd(),ol.current=ul,al){for(var f=Ue.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}al=!1}if(ai=0,ct=ot=Ue=null,ho=!1,mo=0,Kd.current=null,c===null||c.return===null){at=1,wo=o,nt=null;break}e:{var v=i,T=c.return,P=c,M=o;if(o=vt,P.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var W=M,Z=P,K=Z.tag;if(!(Z.mode&1)&&(K===0||K===11||K===15)){var q=Z.alternate;q?(Z.updateQueue=q.updateQueue,Z.memoizedState=q.memoizedState,Z.lanes=q.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var re=y0(T);if(re!==null){re.flags&=-257,w0(re,T,P,v,o),re.mode&1&&v0(v,W,o),o=re,M=W;var oe=o.updateQueue;if(oe===null){var ae=new Set;ae.add(M),o.updateQueue=ae}else oe.add(M);break e}else{if(!(o&1)){v0(v,W,o),ap();break e}M=Error(n(426))}}else if(Be&&P.mode&1){var Ke=y0(T);if(Ke!==null){!(Ke.flags&65536)&&(Ke.flags|=256),w0(Ke,T,P,v,o),vd(ns(M,P));break e}}v=M=ns(M,P),at!==4&&(at=2),bo===null?bo=[v]:bo.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,o&=-o,v.lanes|=o;var F=g0(v,M,o);Wg(v,F);break e;case 1:P=M;var A=v.type,V=v.stateNode;if(!(v.flags&128)&&(typeof A.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&($r===null||!$r.has(V)))){v.flags|=65536,o&=-o,v.lanes|=o;var te=x0(v,P,o);Wg(v,te);break e}}v=v.return}while(v!==null)}Z0(c)}catch(le){o=le,nt===c&&c!==null&&(nt=c=c.return);continue}break}while(!0)}function q0(){var i=gl.current;return gl.current=ul,i===null?ul:i}function ap(){(at===0||at===3||at===2)&&(at=4),ut===null||!(li&268435455)&&!(xl&268435455)||Mr(ut,vt)}function Sl(i,o){var c=Ce;Ce|=2;var f=q0();(ut!==i||vt!==o)&&(sr=null,ui(i,o));do try{SS();break}catch(g){J0(i,g)}while(!0);if(wd(),Ce=c,gl.current=f,nt!==null)throw Error(n(261));return ut=null,vt=0,at}function SS(){for(;nt!==null;)Q0(nt)}function kS(){for(;nt!==null&&!qb();)Q0(nt)}function Q0(i){var o=ex(i.alternate,i,Kt);i.memoizedProps=i.pendingProps,o===null?Z0(i):nt=o,Kd.current=null}function Z0(i){var o=i;do{var c=o.alternate;if(i=o.return,o.flags&32768){if(c=xS(c,o),c!==null){c.flags&=32767,nt=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{at=6,nt=null;return}}else if(c=gS(c,o,Kt),c!==null){nt=c;return}if(o=o.sibling,o!==null){nt=o;return}nt=o=i}while(o!==null);at===0&&(at=5)}function di(i,o,c){var f=ze,g=mn.transition;try{mn.transition=null,ze=1,jS(i,o,c,f)}finally{mn.transition=g,ze=f}return null}function jS(i,o,c,f){do os();while(Pr!==null);if(Ce&6)throw Error(n(327));c=i.finishedWork;var g=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var v=c.lanes|c.childLanes;if(s_(i,v),i===ut&&(nt=ut=null,vt=0),!(c.subtreeFlags&2064)&&!(c.flags&2064)||yl||(yl=!0,tx(Ea,function(){return os(),null})),v=(c.flags&15990)!==0,c.subtreeFlags&15990||v){v=mn.transition,mn.transition=null;var T=ze;ze=1;var P=Ce;Ce|=4,Kd.current=null,yS(i,c),B0(c,i),G_(ad),Ma=!!od,ad=od=null,i.current=c,wS(c),Qb(),Ce=P,ze=T,mn.transition=v}else i.current=c;if(yl&&(yl=!1,Pr=i,wl=g),v=i.pendingLanes,v===0&&($r=null),Xb(c.stateNode),Ft(i,Ze()),o!==null)for(f=i.onRecoverableError,c=0;c<o.length;c++)g=o[c],f(g.value,{componentStack:g.stack,digest:g.digest});if(vl)throw vl=!1,i=tp,tp=null,i;return wl&1&&i.tag!==0&&os(),v=i.pendingLanes,v&1?i===np?_o++:(_o=0,np=i):_o=0,Er(),null}function os(){if(Pr!==null){var i=Dm(wl),o=mn.transition,c=ze;try{if(mn.transition=null,ze=16>i?16:i,Pr===null)var f=!1;else{if(i=Pr,Pr=null,wl=0,Ce&6)throw Error(n(331));var g=Ce;for(Ce|=4,se=i.current;se!==null;){var v=se,T=v.child;if(se.flags&16){var P=v.deletions;if(P!==null){for(var M=0;M<P.length;M++){var W=P[M];for(se=W;se!==null;){var Z=se;switch(Z.tag){case 0:case 11:case 15:yo(8,Z,v)}var K=Z.child;if(K!==null)K.return=Z,se=K;else for(;se!==null;){Z=se;var q=Z.sibling,re=Z.return;if(O0(Z),Z===W){se=null;break}if(q!==null){q.return=re,se=q;break}se=re}}}var oe=v.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var Ke=ae.sibling;ae.sibling=null,ae=Ke}while(ae!==null)}}se=v}}if(v.subtreeFlags&2064&&T!==null)T.return=v,se=T;else e:for(;se!==null;){if(v=se,v.flags&2048)switch(v.tag){case 0:case 11:case 15:yo(9,v,v.return)}var F=v.sibling;if(F!==null){F.return=v.return,se=F;break e}se=v.return}}var A=i.current;for(se=A;se!==null;){T=se;var V=T.child;if(T.subtreeFlags&2064&&V!==null)V.return=T,se=V;else e:for(T=A;se!==null;){if(P=se,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:ml(9,P)}}catch(le){Je(P,P.return,le)}if(P===T){se=null;break e}var te=P.sibling;if(te!==null){te.return=P.return,se=te;break e}se=P.return}}if(Ce=g,Er(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(Ta,i)}catch{}f=!0}return f}finally{ze=c,mn.transition=o}}return!1}function K0(i,o,c){o=ns(c,o),o=g0(i,o,1),i=Ir(i,o,1),o=zt(),i!==null&&(Gs(i,1,o),Ft(i,o))}function Je(i,o,c){if(i.tag===3)K0(i,i,c);else for(;o!==null;){if(o.tag===3){K0(o,i,c);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&($r===null||!$r.has(f))){i=ns(c,i),i=x0(o,i,1),o=Ir(o,i,1),i=zt(),o!==null&&(Gs(o,1,i),Ft(o,i));break}}o=o.return}}function CS(i,o,c){var f=i.pingCache;f!==null&&f.delete(o),o=zt(),i.pingedLanes|=i.suspendedLanes&c,ut===i&&(vt&c)===c&&(at===4||at===3&&(vt&130023424)===vt&&500>Ze()-ep?ui(i,0):Xd|=c),Ft(i,o)}function X0(i,o){o===0&&(i.mode&1?(o=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):o=1);var c=zt();i=nr(i,o),i!==null&&(Gs(i,o,c),Ft(i,c))}function ES(i){var o=i.memoizedState,c=0;o!==null&&(c=o.retryLane),X0(i,c)}function TS(i,o){var c=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(c=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(n(314))}f!==null&&f.delete(o),X0(i,c)}var ex;ex=function(i,o,c){if(i!==null)if(i.memoizedProps!==o.pendingProps||Ot.current)At=!0;else{if(!(i.lanes&c)&&!(o.flags&128))return At=!1,mS(i,o,c);At=!!(i.flags&131072)}else At=!1,Be&&o.flags&1048576&&zg(o,Ka,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;fl(i,o),i=o.pendingProps;var g=Ji(o,bt.current);es(o,c),g=$d(null,o,f,i,g,c);var v=Pd();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Lt(f)?(v=!0,qa(o)):v=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,kd(o),g.updater=dl,o.stateNode=g,g._reactInternals=o,Ad(o,f,i,c),o=Vd(null,o,f,!0,v,c)):(o.tag=0,Be&&v&&hd(o),Pt(null,o,g,c),o=o.child),o;case 16:f=o.elementType;e:{switch(fl(i,o),i=o.pendingProps,g=f._init,f=g(f._payload),o.type=f,g=o.tag=RS(f),i=jn(f,i),g){case 0:o=Bd(null,o,f,i,c);break e;case 1:o=C0(null,o,f,i,c);break e;case 11:o=b0(null,o,f,i,c);break e;case 14:o=_0(null,o,f,jn(f.type,i),c);break e}throw Error(n(306,f,""))}return o;case 0:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:jn(f,g),Bd(i,o,f,g,c);case 1:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:jn(f,g),C0(i,o,f,g,c);case 3:e:{if(E0(o),i===null)throw Error(n(387));f=o.pendingProps,v=o.memoizedState,g=v.element,Vg(i,o),il(o,f,null,c);var T=o.memoizedState;if(f=T.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){g=ns(Error(n(423)),o),o=T0(i,o,f,c,g);break e}else if(f!==g){g=ns(Error(n(424)),o),o=T0(i,o,f,c,g);break e}else for(Zt=kr(o.stateNode.containerInfo.firstChild),Qt=o,Be=!0,kn=null,c=Fg(o,null,f,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Zi(),f===g){o=ir(i,o,c);break e}Pt(i,o,f,c)}o=o.child}return o;case 5:return Gg(o),i===null&&xd(o),f=o.type,g=o.pendingProps,v=i!==null?i.memoizedProps:null,T=g.children,ld(f,g)?T=null:v!==null&&ld(f,v)&&(o.flags|=32),j0(i,o),Pt(i,o,T,c),o.child;case 6:return i===null&&xd(o),null;case 13:return I0(i,o,c);case 4:return jd(o,o.stateNode.containerInfo),f=o.pendingProps,i===null?o.child=Ki(o,null,f,c):Pt(i,o,f,c),o.child;case 11:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:jn(f,g),b0(i,o,f,g,c);case 7:return Pt(i,o,o.pendingProps,c),o.child;case 8:return Pt(i,o,o.pendingProps.children,c),o.child;case 12:return Pt(i,o,o.pendingProps.children,c),o.child;case 10:e:{if(f=o.type._context,g=o.pendingProps,v=o.memoizedProps,T=g.value,Ne(tl,f._currentValue),f._currentValue=T,v!==null)if(Sn(v.value,T)){if(v.children===g.children&&!Ot.current){o=ir(i,o,c);break e}}else for(v=o.child,v!==null&&(v.return=o);v!==null;){var P=v.dependencies;if(P!==null){T=v.child;for(var M=P.firstContext;M!==null;){if(M.context===f){if(v.tag===1){M=rr(-1,c&-c),M.tag=2;var W=v.updateQueue;if(W!==null){W=W.shared;var Z=W.pending;Z===null?M.next=M:(M.next=Z.next,Z.next=M),W.pending=M}}v.lanes|=c,M=v.alternate,M!==null&&(M.lanes|=c),_d(v.return,c,o),P.lanes|=c;break}M=M.next}}else if(v.tag===10)T=v.type===o.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(n(341));T.lanes|=c,P=T.alternate,P!==null&&(P.lanes|=c),_d(T,c,o),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===o){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Pt(i,o,g.children,c),o=o.child}return o;case 9:return g=o.type,f=o.pendingProps.children,es(o,c),g=fn(g),f=f(g),o.flags|=1,Pt(i,o,f,c),o.child;case 14:return f=o.type,g=jn(f,o.pendingProps),g=jn(f.type,g),_0(i,o,f,g,c);case 15:return S0(i,o,o.type,o.pendingProps,c);case 17:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:jn(f,g),fl(i,o),o.tag=1,Lt(f)?(i=!0,qa(o)):i=!1,es(o,c),h0(o,f,g),Ad(o,f,g,c),Vd(null,o,f,!0,i,c);case 19:return $0(i,o,c);case 22:return k0(i,o,c)}throw Error(n(156,o.tag))};function tx(i,o){return Mm(i,o)}function IS(i,o,c,f){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(i,o,c,f){return new IS(i,o,c,f)}function lp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function RS(i){if(typeof i=="function")return lp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===X)return 11;if(i===ie)return 14}return 2}function Nr(i,o){var c=i.alternate;return c===null?(c=gn(i.tag,o,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=o,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,o=i.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function kl(i,o,c,f,g,v){var T=2;if(f=i,typeof i=="function")lp(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case N:return pi(c.children,g,v,o);case L:T=8,g|=8;break;case O:return i=gn(12,c,o,g|2),i.elementType=O,i.lanes=v,i;case J:return i=gn(13,c,o,g),i.elementType=J,i.lanes=v,i;case ne:return i=gn(19,c,o,g),i.elementType=ne,i.lanes=v,i;case pe:return jl(c,g,v,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:T=10;break e;case Y:T=9;break e;case X:T=11;break e;case ie:T=14;break e;case ce:T=16,f=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return o=gn(T,c,o,g),o.elementType=i,o.type=f,o.lanes=v,o}function pi(i,o,c,f){return i=gn(7,i,f,o),i.lanes=c,i}function jl(i,o,c,f){return i=gn(22,i,f,o),i.elementType=pe,i.lanes=c,i.stateNode={isHidden:!1},i}function cp(i,o,c){return i=gn(6,i,null,o),i.lanes=c,i}function up(i,o,c){return o=gn(4,i.children!==null?i.children:[],i.key,o),o.lanes=c,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function $S(i,o,c,f,g){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function dp(i,o,c,f,g,v,T,P,M){return i=new $S(i,o,c,P,M),o===1?(o=1,v===!0&&(o|=8)):o=0,v=gn(3,null,null,o),i.current=v,v.stateNode=i,v.memoizedState={element:f,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(v),i}function PS(i,o,c){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:f==null?null:""+f,children:i,containerInfo:o,implementation:c}}function nx(i){if(!i)return Cr;i=i._reactInternals;e:{if(ei(i)!==i||i.tag!==1)throw Error(n(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Lt(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(n(171))}if(i.tag===1){var c=i.type;if(Lt(c))return Rg(i,c,o)}return o}function rx(i,o,c,f,g,v,T,P,M){return i=dp(c,f,!0,i,g,v,T,P,M),i.context=nx(null),c=i.current,f=zt(),g=zr(c),v=rr(f,g),v.callback=o??null,Ir(c,v,g),i.current.lanes=g,Gs(i,g,f),Ft(i,f),i}function Cl(i,o,c,f){var g=o.current,v=zt(),T=zr(g);return c=nx(c),o.context===null?o.context=c:o.pendingContext=c,o=rr(v,T),o.payload={element:i},f=f===void 0?null:f,f!==null&&(o.callback=f),i=Ir(g,o,T),i!==null&&(Tn(i,g,T,v),rl(i,g,T)),T}function El(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function ix(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<o?c:o}}function pp(i,o){ix(i,o),(i=i.alternate)&&ix(i,o)}function zS(){return null}var sx=typeof reportError=="function"?reportError:function(i){console.error(i)};function fp(i){this._internalRoot=i}Tl.prototype.render=fp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(n(409));Cl(i,o,null,null)},Tl.prototype.unmount=fp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;ci(function(){Cl(null,i,null,null)}),o[Kn]=null}};function Tl(i){this._internalRoot=i}Tl.prototype.unstable_scheduleHydration=function(i){if(i){var o=Vm();i={blockedOn:null,target:i,priority:o};for(var c=0;c<br.length&&o!==0&&o<br[c].priority;c++);br.splice(c,0,i),c===0&&Gm(i)}};function hp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Il(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ox(){}function MS(i,o,c,f,g){if(g){if(typeof f=="function"){var v=f;f=function(){var W=El(T);v.call(W)}}var T=rx(o,f,i,0,null,!1,!1,"",ox);return i._reactRootContainer=T,i[Kn]=T.current,so(i.nodeType===8?i.parentNode:i),ci(),T}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var P=f;f=function(){var W=El(M);P.call(W)}}var M=dp(i,0,!1,null,null,!1,!1,"",ox);return i._reactRootContainer=M,i[Kn]=M.current,so(i.nodeType===8?i.parentNode:i),ci(function(){Cl(o,M,c,f)}),M}function Rl(i,o,c,f,g){var v=c._reactRootContainer;if(v){var T=v;if(typeof g=="function"){var P=g;g=function(){var M=El(T);P.call(M)}}Cl(o,T,i,g)}else T=MS(c,o,i,g,f);return El(T)}Fm=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var c=Us(o.pendingLanes);c!==0&&(Au(o,c|1),Ft(o,Ze()),!(Ce&6)&&(ss=Ze()+500,Er()))}break;case 13:ci(function(){var f=nr(i,1);if(f!==null){var g=zt();Tn(f,i,1,g)}}),pp(i,1)}},Du=function(i){if(i.tag===13){var o=nr(i,134217728);if(o!==null){var c=zt();Tn(o,i,134217728,c)}pp(i,134217728)}},Bm=function(i){if(i.tag===13){var o=zr(i),c=nr(i,o);if(c!==null){var f=zt();Tn(c,i,o,f)}pp(i,o)}},Vm=function(){return ze},Wm=function(i,o){var c=ze;try{return ze=i,o()}finally{ze=c}},$u=function(i,o,c){switch(o){case"input":if(Su(i,c),o=c.name,c.type==="radio"&&o!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<c.length;o++){var f=c[o];if(f!==i&&f.form===i.form){var g=Ya(f);if(!g)throw Error(n(90));bn(f),Su(f,g)}}}break;case"textarea":vm(i,c);break;case"select":o=c.value,o!=null&&Oi(i,!!c.multiple,o,!1)}},Em=sp,Tm=ci;var NS={usingClientEntryPoint:!1,Events:[lo,Hi,Ya,jm,Cm,sp]},So={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OS={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Pm(i),i===null?null:i.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Ta=$l.inject(OS),Mn=$l}catch{}}return Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NS,Bt.createPortal=function(i,o){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(o))throw Error(n(200));return PS(i,o,null,c)},Bt.createRoot=function(i,o){if(!hp(i))throw Error(n(299));var c=!1,f="",g=sx;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=dp(i,1,!1,null,null,c,!1,f,g),i[Kn]=o.current,so(i.nodeType===8?i.parentNode:i),new fp(o)},Bt.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=Pm(o),i=i===null?null:i.stateNode,i},Bt.flushSync=function(i){return ci(i)},Bt.hydrate=function(i,o,c){if(!Il(o))throw Error(n(200));return Rl(null,i,o,!0,c)},Bt.hydrateRoot=function(i,o,c){if(!hp(i))throw Error(n(405));var f=c!=null&&c.hydratedSources||null,g=!1,v="",T=sx;if(c!=null&&(c.unstable_strictMode===!0&&(g=!0),c.identifierPrefix!==void 0&&(v=c.identifierPrefix),c.onRecoverableError!==void 0&&(T=c.onRecoverableError)),o=rx(o,null,i,1,c??null,g,!1,v,T),i[Kn]=o.current,so(i),f)for(i=0;i<f.length;i++)c=f[i],g=c._getVersion,g=g(c._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[c,g]:o.mutableSourceEagerHydrationData.push(c,g);return new Tl(o)},Bt.render=function(i,o,c){if(!Il(o))throw Error(n(200));return Rl(null,i,o,!1,c)},Bt.unmountComponentAtNode=function(i){if(!Il(i))throw Error(n(40));return i._reactRootContainer?(ci(function(){Rl(null,null,i,!1,function(){i._reactRootContainer=null,i[Kn]=null})}),!0):!1},Bt.unstable_batchedUpdates=sp,Bt.unstable_renderSubtreeIntoContainer=function(i,o,c,f){if(!Il(c))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return Rl(i,o,c,!1,f)},Bt.version="18.3.1-next-f1338f8080-20240426",Bt}var hx;function HS(){if(hx)return vp.exports;hx=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),vp.exports=GS(),vp.exports}var mx;function YS(){if(mx)return Pl;mx=1;var t=HS();return Pl.createRoot=t.createRoot,Pl.hydrateRoot=t.hydrateRoot,Pl}var JS=YS();const qS=py(JS);var jo={},gx;function QS(){if(gx)return jo;gx=1,Object.defineProperty(jo,"__esModule",{value:!0}),jo.parse=l,jo.serialize=h;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,a=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function l(y,w){const b=new a,_=y.length;if(_<2)return b;const C=(w==null?void 0:w.decode)||m;let E=0;do{const S=y.indexOf("=",E);if(S===-1)break;const j=y.indexOf(";",E),I=j===-1?_:j;if(S>I){E=y.lastIndexOf(";",S-1)+1;continue}const R=d(y,E,S),z=p(y,S,R),N=y.slice(R,z);if(b[N]===void 0){let L=d(y,S+1,I),O=p(y,I,L);const B=C(y.slice(L,O));b[N]=B}E=I+1}while(E<_);return b}function d(y,w,b){do{const _=y.charCodeAt(w);if(_!==32&&_!==9)return w}while(++w<b);return b}function p(y,w,b){for(;w>b;){const _=y.charCodeAt(--w);if(_!==32&&_!==9)return w+1}return b}function h(y,w,b){const _=(b==null?void 0:b.encode)||encodeURIComponent;if(!t.test(y))throw new TypeError(`argument name is invalid: ${y}`);const C=_(w);if(!e.test(C))throw new TypeError(`argument val is invalid: ${w}`);let E=y+"="+C;if(!b)return E;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);E+="; Max-Age="+b.maxAge}if(b.domain){if(!n.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);E+="; Domain="+b.domain}if(b.path){if(!r.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);E+="; Path="+b.path}if(b.expires){if(!x(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);E+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(E+="; HttpOnly"),b.secure&&(E+="; Secure"),b.partitioned&&(E+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return E}function m(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function x(y){return s.call(y)==="[object Date]"}return jo}QS();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xx="popstate";function ZS(t={}){function e(s,a){let{pathname:l="/",search:d="",hash:p=""}=Mi(s.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),If("",{pathname:l,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){let l=s.document.querySelector("base"),d="";if(l&&l.getAttribute("href")){let p=s.location.href,h=p.indexOf("#");d=h===-1?p:p.slice(0,h)}return d+"#"+(typeof a=="string"?a:ea(a))}function r(s,a){$n(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return XS(e,n,r,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $n(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substring(2,10)}function vx(t,e){return{usr:t.state,key:t.key,idx:e}}function If(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Mi(e):e,state:n,key:e&&e.key||r||KS()}}function ea({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Mi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function XS(t,e,n,r={}){let{window:s=document.defaultView,v5Compat:a=!1}=r,l=s.history,d="POP",p=null,h=m();h==null&&(h=0,l.replaceState({...l.state,idx:h},""));function m(){return(l.state||{idx:null}).idx}function x(){d="POP";let C=m(),E=C==null?null:C-h;h=C,p&&p({action:d,location:_.location,delta:E})}function y(C,E){d="PUSH";let S=If(_.location,C,E);n&&n(S,C),h=m()+1;let j=vx(S,h),I=_.createHref(S);try{l.pushState(j,"",I)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;s.location.assign(I)}a&&p&&p({action:d,location:_.location,delta:1})}function w(C,E){d="REPLACE";let S=If(_.location,C,E);n&&n(S,C),h=m();let j=vx(S,h),I=_.createHref(S);l.replaceState(j,"",I),a&&p&&p({action:d,location:_.location,delta:0})}function b(C){let E=s.location.origin!=="null"?s.location.origin:s.location.href,S=typeof C=="string"?C:ea(C);return S=S.replace(/ $/,"%20"),Ye(E,`No window.location.(origin|href) available to create URL for href: ${S}`),new URL(S,E)}let _={get action(){return d},get location(){return t(s,l)},listen(C){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(xx,x),p=C,()=>{s.removeEventListener(xx,x),p=null}},createHref(C){return e(s,C)},createURL:b,encodeLocation(C){let E=b(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:y,replace:w,go(C){return l.go(C)}};return _}function fy(t,e,n="/"){return e2(t,e,n,!1)}function e2(t,e,n,r){let s=typeof e=="string"?Mi(e):e,a=Yr(s.pathname||"/",n);if(a==null)return null;let l=hy(t);t2(l);let d=null;for(let p=0;d==null&&p<l.length;++p){let h=p2(a);d=u2(l[p],h,r)}return d}function hy(t,e=[],n=[],r=""){let s=(a,l,d)=>{let p={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};p.relativePath.startsWith("/")&&(Ye(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let h=pr([r,p.relativePath]),m=n.concat(p);a.children&&a.children.length>0&&(Ye(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),hy(a.children,e,m,h)),!(a.path==null&&!a.index)&&e.push({path:h,score:l2(h,a.index),routesMeta:m})};return t.forEach((a,l)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))s(a,l);else for(let p of my(a.path))s(a,l,p)}),e}function my(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let l=my(r.join("/")),d=[];return d.push(...l.map(p=>p===""?a:[a,p].join("/"))),s&&d.push(...l),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function t2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:c2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var n2=/^:[\w-]+$/,r2=3,i2=2,s2=1,o2=10,a2=-2,yx=t=>t==="*";function l2(t,e){let n=t.split("/"),r=n.length;return n.some(yx)&&(r+=a2),e&&(r+=i2),n.filter(s=>!yx(s)).reduce((s,a)=>s+(n2.test(a)?r2:a===""?s2:o2),r)}function c2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function u2(t,e,n=!1){let{routesMeta:r}=t,s={},a="/",l=[];for(let d=0;d<r.length;++d){let p=r[d],h=d===r.length-1,m=a==="/"?e:e.slice(a.length)||"/",x=_c({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},m),y=p.route;if(!x&&h&&n&&!r[r.length-1].route.index&&(x=_c({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},m)),!x)return null;Object.assign(s,x.params),l.push({params:s,pathname:pr([a,x.pathname]),pathnameBase:g2(pr([a,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(a=pr([a,x.pathnameBase]))}return l}function _c(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=d2(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:r.reduce((h,{paramName:m,isOptional:x},y)=>{if(m==="*"){let b=d[y]||"";l=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const w=d[y];return x&&!w?h[m]=void 0:h[m]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:l,pattern:t}}function d2(t,e=!1,n=!0){$n(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function p2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $n(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Yr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function f2(t,e="/"){let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Mi(t):t;return{pathname:n?n.startsWith("/")?n:h2(n,e):e,search:x2(r),hash:v2(s)}}function h2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function bp(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function m2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gy(t){let e=m2(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function xy(t,e,n,r=!1){let s;typeof t=="string"?s=Mi(t):(s={...t},Ye(!s.pathname||!s.pathname.includes("?"),bp("?","pathname","search",s)),Ye(!s.pathname||!s.pathname.includes("#"),bp("#","pathname","hash",s)),Ye(!s.search||!s.search.includes("#"),bp("#","search","hash",s)));let a=t===""||s.pathname==="",l=a?"/":s.pathname,d;if(l==null)d=n;else{let x=e.length-1;if(!r&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),x-=1;s.pathname=y.join("/")}d=x>=0?e[x]:"/"}let p=f2(s,d),h=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||m)&&(p.pathname+="/"),p}var pr=t=>t.join("/").replace(/\/\/+/g,"/"),g2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),x2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,v2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function y2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var vy=["POST","PUT","PATCH","DELETE"];new Set(vy);var w2=["GET",...vy];new Set(w2);var Ms=$.createContext(null);Ms.displayName="DataRouter";var Xc=$.createContext(null);Xc.displayName="DataRouterState";var yy=$.createContext({isTransitioning:!1});yy.displayName="ViewTransition";var b2=$.createContext(new Map);b2.displayName="Fetchers";var _2=$.createContext(null);_2.displayName="Await";var Qn=$.createContext(null);Qn.displayName="Navigation";var fa=$.createContext(null);fa.displayName="Location";var Pn=$.createContext({outlet:null,matches:[],isDataRoute:!1});Pn.displayName="Route";var wh=$.createContext(null);wh.displayName="RouteError";function S2(t,{relative:e}={}){Ye(ha(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=$.useContext(Qn),{hash:s,pathname:a,search:l}=ma(t,{relative:e}),d=a;return n!=="/"&&(d=a==="/"?n:pr([n,a])),r.createHref({pathname:d,search:l,hash:s})}function ha(){return $.useContext(fa)!=null}function xr(){return Ye(ha(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(fa).location}var wy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function by(t){$.useContext(Qn).static||$.useLayoutEffect(t)}function tt(){let{isDataRoute:t}=$.useContext(Pn);return t?A2():k2()}function k2(){Ye(ha(),"useNavigate() may be used only in the context of a <Router> component.");let t=$.useContext(Ms),{basename:e,navigator:n}=$.useContext(Qn),{matches:r}=$.useContext(Pn),{pathname:s}=xr(),a=JSON.stringify(gy(r)),l=$.useRef(!1);return by(()=>{l.current=!0}),$.useCallback((p,h={})=>{if($n(l.current,wy),!l.current)return;if(typeof p=="number"){n.go(p);return}let m=xy(p,JSON.parse(a),s,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:pr([e,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[e,n,a,s,t])}var j2=$.createContext(null);function C2(t){let e=$.useContext(Pn).outlet;return e&&$.createElement(j2.Provider,{value:t},e)}function bh(){let{matches:t}=$.useContext(Pn),e=t[t.length-1];return e?e.params:{}}function ma(t,{relative:e}={}){let{matches:n}=$.useContext(Pn),{pathname:r}=xr(),s=JSON.stringify(gy(n));return $.useMemo(()=>xy(t,JSON.parse(s),r,e==="path"),[t,s,r,e])}function E2(t,e){return _y(t,e)}function _y(t,e,n,r){var S;Ye(ha(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:a}=$.useContext(Qn),{matches:l}=$.useContext(Pn),d=l[l.length-1],p=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",x=d&&d.route;{let j=x&&x.path||"";Sy(h,!x||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let y=xr(),w;if(e){let j=typeof e=="string"?Mi(e):e;Ye(m==="/"||((S=j.pathname)==null?void 0:S.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${j.pathname}" was given in the \`location\` prop.`),w=j}else w=y;let b=w.pathname||"/",_=b;if(m!=="/"){let j=m.replace(/^\//,"").split("/");_="/"+b.replace(/^\//,"").split("/").slice(j.length).join("/")}let C=!a&&n&&n.matches&&n.matches.length>0?n.matches:fy(t,{pathname:_});$n(x||C!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),$n(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=P2(C&&C.map(j=>Object.assign({},j,{params:Object.assign({},p,j.params),pathname:pr([m,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?m:pr([m,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,n,r);return e&&E?$.createElement(fa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},E):E}function T2(){let t=L2(),e=y2(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:a},"ErrorBoundary")," or"," ",$.createElement("code",{style:a},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:s},n):null,l)}var I2=$.createElement(T2,null),R2=class extends $.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?$.createElement(Pn.Provider,{value:this.props.routeContext},$.createElement(wh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $2({routeContext:t,match:e,children:n}){let r=$.useContext(Ms);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Pn.Provider,{value:t},n)}function P2(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=n==null?void 0:n.errors;if(a!=null){let p=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);Ye(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let l=!1,d=-1;if(n)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:m,errors:x}=n,y=h.route.loader&&!m.hasOwnProperty(h.route.id)&&(!x||x[h.route.id]===void 0);if(h.route.lazy||y){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,h,m)=>{let x,y=!1,w=null,b=null;n&&(x=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||I2,l&&(d<0&&m===0?(Sy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):d===m&&(y=!0,b=h.route.hydrateFallbackElement||null)));let _=e.concat(s.slice(0,m+1)),C=()=>{let E;return x?E=w:y?E=b:h.route.Component?E=$.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=p,$.createElement($2,{match:h,routeContext:{outlet:p,matches:_,isDataRoute:n!=null},children:E})};return n&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?$.createElement(R2,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:C(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):C()},null)}function _h(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function z2(t){let e=$.useContext(Ms);return Ye(e,_h(t)),e}function M2(t){let e=$.useContext(Xc);return Ye(e,_h(t)),e}function N2(t){let e=$.useContext(Pn);return Ye(e,_h(t)),e}function Sh(t){let e=N2(t),n=e.matches[e.matches.length-1];return Ye(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function O2(){return Sh("useRouteId")}function L2(){var r;let t=$.useContext(wh),e=M2("useRouteError"),n=Sh("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function A2(){let{router:t}=z2("useNavigate"),e=Sh("useNavigate"),n=$.useRef(!1);return by(()=>{n.current=!0}),$.useCallback(async(s,a={})=>{$n(n.current,wy),n.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:e,...a}))},[t,e])}var wx={};function Sy(t,e,n){!e&&!wx[t]&&(wx[t]=!0,$n(!1,n))}$.memo(D2);function D2({routes:t,future:e,state:n}){return _y(t,void 0,n,e)}function F2(t){return C2(t.context)}function De(t){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function B2({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:s,static:a=!1}){Ye(!ha(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:l,navigator:s,static:a,future:{}}),[l,s,a]);typeof n=="string"&&(n=Mi(n));let{pathname:p="/",search:h="",hash:m="",state:x=null,key:y="default"}=n,w=$.useMemo(()=>{let b=Yr(p,l);return b==null?null:{location:{pathname:b,search:h,hash:m,state:x,key:y},navigationType:r}},[l,p,h,m,x,y,r]);return $n(w!=null,`<Router basename="${l}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:$.createElement(Qn.Provider,{value:d},$.createElement(fa.Provider,{children:e,value:w}))}function V2({children:t,location:e}){return E2(Rf(t),e)}function Rf(t,e=[]){let n=[];return $.Children.forEach(t,(r,s)=>{if(!$.isValidElement(r))return;let a=[...e,s];if(r.type===$.Fragment){n.push.apply(n,Rf(r.props.children,a));return}Ye(r.type===De,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Rf(r.props.children,a)),n.push(l)}),n}var ql="get",Ql="application/x-www-form-urlencoded";function eu(t){return t!=null&&typeof t.tagName=="string"}function W2(t){return eu(t)&&t.tagName.toLowerCase()==="button"}function U2(t){return eu(t)&&t.tagName.toLowerCase()==="form"}function G2(t){return eu(t)&&t.tagName.toLowerCase()==="input"}function H2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Y2(t,e){return t.button===0&&(!e||e==="_self")&&!H2(t)}var zl=null;function J2(){if(zl===null)try{new FormData(document.createElement("form"),0),zl=!1}catch{zl=!0}return zl}var q2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _p(t){return t!=null&&!q2.has(t)?($n(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ql}"`),null):t}function Q2(t,e){let n,r,s,a,l;if(U2(t)){let d=t.getAttribute("action");r=d?Yr(d,e):null,n=t.getAttribute("method")||ql,s=_p(t.getAttribute("enctype"))||Ql,a=new FormData(t)}else if(W2(t)||G2(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(r=p?Yr(p,e):null,n=t.getAttribute("formmethod")||d.getAttribute("method")||ql,s=_p(t.getAttribute("formenctype"))||_p(d.getAttribute("enctype"))||Ql,a=new FormData(d,t),!J2()){let{name:h,type:m,value:x}=t;if(m==="image"){let y=h?`${h}.`:"";a.append(`${y}x`,"0"),a.append(`${y}y`,"0")}else h&&a.append(h,x)}}else{if(eu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ql,r=null,s=Ql,l=t}return a&&s==="text/plain"&&(l=a,a=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:a,body:l}}function kh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function Z2(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function K2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function X2(t,e,n){let r=await Promise.all(t.map(async s=>{let a=e.routes[s.route.id];if(a){let l=await Z2(a,n);return l.links?l.links():[]}return[]}));return rk(r.flat(1).filter(K2).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function bx(t,e,n,r,s,a){let l=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,d=(p,h)=>{var m;return n[h].pathname!==p.pathname||((m=n[h].route.path)==null?void 0:m.endsWith("*"))&&n[h].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,h)=>l(p,h)||d(p,h)):a==="data"?e.filter((p,h)=>{var x;let m=r.routes[p.route.id];if(!m||!m.hasLoader)return!1;if(l(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function ek(t,e){return tk(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let s=[r.module];return r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function tk(t){return[...new Set(t)]}function nk(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function rk(t,e){let n=new Set;return new Set(e),t.reduce((r,s)=>{let a=JSON.stringify(nk(s));return n.has(a)||(n.add(a),r.push({key:a,link:s})),r},[])}function ik(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function sk(){let t=$.useContext(Ms);return kh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function ok(){let t=$.useContext(Xc);return kh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var jh=$.createContext(void 0);jh.displayName="FrameworkContext";function ky(){let t=$.useContext(jh);return kh(t,"You must render this element inside a <HydratedRouter> element"),t}function ak(t,e){let n=$.useContext(jh),[r,s]=$.useState(!1),[a,l]=$.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:m,onTouchStart:x}=e,y=$.useRef(null);$.useEffect(()=>{if(t==="render"&&l(!0),t==="viewport"){let _=E=>{E.forEach(S=>{l(S.isIntersecting)})},C=new IntersectionObserver(_,{threshold:.5});return y.current&&C.observe(y.current),()=>{C.disconnect()}}},[t]),$.useEffect(()=>{if(r){let _=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(_)}}},[r]);let w=()=>{s(!0)},b=()=>{s(!1),l(!1)};return n?t!=="intent"?[a,y,{}]:[a,y,{onFocus:Co(d,w),onBlur:Co(p,b),onMouseEnter:Co(h,w),onMouseLeave:Co(m,b),onTouchStart:Co(x,w)}]:[!1,y,{}]}function Co(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function lk({page:t,...e}){let{router:n}=sk(),r=$.useMemo(()=>fy(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?$.createElement(uk,{page:t,matches:r,...e}):null}function ck(t){let{manifest:e,routeModules:n}=ky(),[r,s]=$.useState([]);return $.useEffect(()=>{let a=!1;return X2(t,e,n).then(l=>{a||s(l)}),()=>{a=!0}},[t,e,n]),r}function uk({page:t,matches:e,...n}){let r=xr(),{manifest:s,routeModules:a}=ky(),{loaderData:l,matches:d}=ok(),p=$.useMemo(()=>bx(t,e,d,s,r,"data"),[t,e,d,s,r]),h=$.useMemo(()=>bx(t,e,d,s,r,"assets"),[t,e,d,s,r]),m=$.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let w=new Set,b=!1;if(e.forEach(C=>{var S;let E=s.routes[C.route.id];!E||!E.hasLoader||(!p.some(j=>j.route.id===C.route.id)&&C.route.id in l&&((S=a[C.route.id])!=null&&S.shouldRevalidate)||E.hasClientLoader?b=!0:w.add(C.route.id))}),w.size===0)return[];let _=ik(t);return b&&w.size>0&&_.searchParams.set("_routes",e.filter(C=>w.has(C.route.id)).map(C=>C.route.id).join(",")),[_.pathname+_.search]},[l,r,s,p,e,t,a]),x=$.useMemo(()=>ek(h,s),[h,s]),y=ck(h);return $.createElement($.Fragment,null,m.map(w=>$.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),x.map(w=>$.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),y.map(({key:w,link:b})=>$.createElement("link",{key:w,...b})))}function dk(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var jy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jy&&(window.__reactRouterVersion="7.1.5")}catch{}function pk({basename:t,children:e,window:n}){let r=$.useRef();r.current==null&&(r.current=ZS({window:n,v5Compat:!0}));let s=r.current,[a,l]=$.useState({action:s.action,location:s.location}),d=$.useCallback(p=>{$.startTransition(()=>l(p))},[l]);return $.useLayoutEffect(()=>s.listen(d),[s,d]),$.createElement(B2,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:s})}var Cy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=$.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:s,reloadDocument:a,replace:l,state:d,target:p,to:h,preventScrollReset:m,viewTransition:x,...y},w){let{basename:b}=$.useContext(Qn),_=typeof h=="string"&&Cy.test(h),C,E=!1;if(typeof h=="string"&&_&&(C=h,jy))try{let O=new URL(window.location.href),B=h.startsWith("//")?new URL(O.protocol+h):new URL(h),Y=Yr(B.pathname,b);B.origin===O.origin&&Y!=null?h=Y+B.search+B.hash:E=!0}catch{$n(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=S2(h,{relative:s}),[j,I,R]=ak(r,y),z=gk(h,{replace:l,state:d,target:p,preventScrollReset:m,relative:s,viewTransition:x});function N(O){e&&e(O),O.defaultPrevented||z(O)}let L=$.createElement("a",{...y,...R,href:C||S,onClick:E||a?e:N,ref:dk(w,I),target:p,"data-discover":!_&&n==="render"?"true":void 0});return j&&!_?$.createElement($.Fragment,null,L,$.createElement(lk,{page:S})):L});lt.displayName="Link";var fk=$.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:s=!1,style:a,to:l,viewTransition:d,children:p,...h},m){let x=ma(l,{relative:h.relative}),y=xr(),w=$.useContext(Xc),{navigator:b,basename:_}=$.useContext(Qn),C=w!=null&&bk(x)&&d===!0,E=b.encodeLocation?b.encodeLocation(x).pathname:x.pathname,S=y.pathname,j=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(S=S.toLowerCase(),j=j?j.toLowerCase():null,E=E.toLowerCase()),j&&_&&(j=Yr(j,_)||j);const I=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let R=S===E||!s&&S.startsWith(E)&&S.charAt(I)==="/",z=j!=null&&(j===E||!s&&j.startsWith(E)&&j.charAt(E.length)==="/"),N={isActive:R,isPending:z,isTransitioning:C},L=R?e:void 0,O;typeof r=="function"?O=r(N):O=[r,R?"active":null,z?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(N):a;return $.createElement(lt,{...h,"aria-current":L,className:O,ref:m,style:B,to:l,viewTransition:d},typeof p=="function"?p(N):p)});fk.displayName="NavLink";var hk=$.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:s,state:a,method:l=ql,action:d,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:x,...y},w)=>{let b=yk(),_=wk(d,{relative:h}),C=l.toLowerCase()==="get"?"get":"post",E=typeof d=="string"&&Cy.test(d),S=j=>{if(p&&p(j),j.defaultPrevented)return;j.preventDefault();let I=j.nativeEvent.submitter,R=(I==null?void 0:I.getAttribute("formmethod"))||l;b(I||j.currentTarget,{fetcherKey:e,method:R,navigate:n,replace:s,state:a,relative:h,preventScrollReset:m,viewTransition:x})};return $.createElement("form",{ref:w,method:C,action:_,onSubmit:r?p:S,...y,"data-discover":!E&&t==="render"?"true":void 0})});hk.displayName="Form";function mk(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ey(t){let e=$.useContext(Ms);return Ye(e,mk(t)),e}function gk(t,{target:e,replace:n,state:r,preventScrollReset:s,relative:a,viewTransition:l}={}){let d=tt(),p=xr(),h=ma(t,{relative:a});return $.useCallback(m=>{if(Y2(m,e)){m.preventDefault();let x=n!==void 0?n:ea(p)===ea(h);d(t,{replace:x,state:r,preventScrollReset:s,relative:a,viewTransition:l})}},[p,d,h,n,r,e,t,s,a,l])}var xk=0,vk=()=>`__${String(++xk)}__`;function yk(){let{router:t}=Ey("useSubmit"),{basename:e}=$.useContext(Qn),n=O2();return $.useCallback(async(r,s={})=>{let{action:a,method:l,encType:d,formData:p,body:h}=Q2(r,e);if(s.navigate===!1){let m=s.fetcherKey||vk();await t.fetch(m,n,s.action||a,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||l,formEncType:s.encType||d,flushSync:s.flushSync})}else await t.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||l,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,e,n])}function wk(t,{relative:e}={}){let{basename:n}=$.useContext(Qn),r=$.useContext(Pn);Ye(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),a={...ma(t||".",{relative:e})},l=xr();if(t==null){a.search=l.search;let d=new URLSearchParams(a.search),p=d.getAll("index");if(p.some(m=>m==="")){d.delete("index"),p.filter(x=>x).forEach(x=>d.append("index",x));let m=d.toString();a.search=m?`?${m}`:""}}return(!t||t===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:pr([n,a.pathname])),ea(a)}function bk(t,e={}){let n=$.useContext(yy);Ye(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ey("useViewTransitionState"),s=ma(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Yr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Yr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return _c(s.pathname,l)!=null||_c(s.pathname,a)!=null}new TextEncoder;var Et=function(){return Et=Object.assign||function(e){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Et.apply(this,arguments)};function ws(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,a;r<s;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}var Fe="-ms-",Do="-moz-",Re="-webkit-",Ty="comm",tu="rule",Ch="decl",_k="@import",Iy="@keyframes",Sk="@layer",Ry=Math.abs,Eh=String.fromCharCode,$f=Object.assign;function kk(t,e){return ht(t,0)^45?(((e<<2^ht(t,0))<<2^ht(t,1))<<2^ht(t,2))<<2^ht(t,3):0}function $y(t){return t.trim()}function lr(t,e){return(t=e.exec(t))?t[0]:t}function ye(t,e,n){return t.replace(e,n)}function Zl(t,e,n){return t.indexOf(e,n)}function ht(t,e){return t.charCodeAt(e)|0}function bs(t,e,n){return t.slice(e,n)}function Vn(t){return t.length}function Py(t){return t.length}function No(t,e){return e.push(t),t}function jk(t,e){return t.map(e).join("")}function _x(t,e){return t.filter(function(n){return!lr(n,e)})}var nu=1,_s=1,zy=0,yn=0,st=0,Ns="";function ru(t,e,n,r,s,a,l,d){return{value:t,root:e,parent:n,type:r,props:s,children:a,line:nu,column:_s,length:l,return:"",siblings:d}}function Lr(t,e){return $f(ru("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function as(t){for(;t.root;)t=Lr(t.root,{children:[t]});No(t,t.siblings)}function Ck(){return st}function Ek(){return st=yn>0?ht(Ns,--yn):0,_s--,st===10&&(_s=1,nu--),st}function Rn(){return st=yn<zy?ht(Ns,yn++):0,_s++,st===10&&(_s=1,nu++),st}function _i(){return ht(Ns,yn)}function Kl(){return yn}function iu(t,e){return bs(Ns,t,e)}function Pf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tk(t){return nu=_s=1,zy=Vn(Ns=t),yn=0,[]}function Ik(t){return Ns="",t}function Sp(t){return $y(iu(yn-1,zf(t===91?t+2:t===40?t+1:t)))}function Rk(t){for(;(st=_i())&&st<33;)Rn();return Pf(t)>2||Pf(st)>3?"":" "}function $k(t,e){for(;--e&&Rn()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return iu(t,Kl()+(e<6&&_i()==32&&Rn()==32))}function zf(t){for(;Rn();)switch(st){case t:return yn;case 34:case 39:t!==34&&t!==39&&zf(st);break;case 40:t===41&&zf(t);break;case 92:Rn();break}return yn}function Pk(t,e){for(;Rn()&&t+st!==57;)if(t+st===84&&_i()===47)break;return"/*"+iu(e,yn-1)+"*"+Eh(t===47?t:Rn())}function zk(t){for(;!Pf(_i());)Rn();return iu(t,yn)}function Mk(t){return Ik(Xl("",null,null,null,[""],t=Tk(t),0,[0],t))}function Xl(t,e,n,r,s,a,l,d,p){for(var h=0,m=0,x=l,y=0,w=0,b=0,_=1,C=1,E=1,S=0,j="",I=s,R=a,z=r,N=j;C;)switch(b=S,S=Rn()){case 40:if(b!=108&&ht(N,x-1)==58){Zl(N+=ye(Sp(S),"&","&\f"),"&\f",Ry(h?d[h-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:N+=Sp(S);break;case 9:case 10:case 13:case 32:N+=Rk(b);break;case 92:N+=$k(Kl()-1,7);continue;case 47:switch(_i()){case 42:case 47:No(Nk(Pk(Rn(),Kl()),e,n,p),p);break;default:N+="/"}break;case 123*_:d[h++]=Vn(N)*E;case 125*_:case 59:case 0:switch(S){case 0:case 125:C=0;case 59+m:E==-1&&(N=ye(N,/\f/g,"")),w>0&&Vn(N)-x&&No(w>32?kx(N+";",r,n,x-1,p):kx(ye(N," ","")+";",r,n,x-2,p),p);break;case 59:N+=";";default:if(No(z=Sx(N,e,n,h,m,s,d,j,I=[],R=[],x,a),a),S===123)if(m===0)Xl(N,e,z,z,I,a,x,d,R);else switch(y===99&&ht(N,3)===110?100:y){case 100:case 108:case 109:case 115:Xl(t,z,z,r&&No(Sx(t,z,z,0,0,s,d,j,s,I=[],x,R),R),s,R,x,d,r?I:R);break;default:Xl(N,z,z,z,[""],R,0,d,R)}}h=m=w=0,_=E=1,j=N="",x=l;break;case 58:x=1+Vn(N),w=b;default:if(_<1){if(S==123)--_;else if(S==125&&_++==0&&Ek()==125)continue}switch(N+=Eh(S),S*_){case 38:E=m>0?1:(N+="\f",-1);break;case 44:d[h++]=(Vn(N)-1)*E,E=1;break;case 64:_i()===45&&(N+=Sp(Rn())),y=_i(),m=x=Vn(j=N+=zk(Kl())),S++;break;case 45:b===45&&Vn(N)==2&&(_=0)}}return a}function Sx(t,e,n,r,s,a,l,d,p,h,m,x){for(var y=s-1,w=s===0?a:[""],b=Py(w),_=0,C=0,E=0;_<r;++_)for(var S=0,j=bs(t,y+1,y=Ry(C=l[_])),I=t;S<b;++S)(I=$y(C>0?w[S]+" "+j:ye(j,/&\f/g,w[S])))&&(p[E++]=I);return ru(t,e,n,s===0?tu:d,p,h,m,x)}function Nk(t,e,n,r){return ru(t,e,n,Ty,Eh(Ck()),bs(t,2,-2),0,r)}function kx(t,e,n,r,s){return ru(t,e,n,Ch,bs(t,0,r),bs(t,r+1,-1),r,s)}function My(t,e,n){switch(kk(t,e)){case 5103:return Re+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+t+t;case 4789:return Do+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+t+Do+t+Fe+t+t;case 5936:switch(ht(t,e+11)){case 114:return Re+t+Fe+ye(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Re+t+Fe+ye(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Re+t+Fe+ye(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Re+t+Fe+t+t;case 6165:return Re+t+Fe+"flex-"+t+t;case 5187:return Re+t+ye(t,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Fe+"flex-$1$2")+t;case 5443:return Re+t+Fe+"flex-item-"+ye(t,/flex-|-self/g,"")+(lr(t,/flex-|baseline/)?"":Fe+"grid-row-"+ye(t,/flex-|-self/g,""))+t;case 4675:return Re+t+Fe+"flex-line-pack"+ye(t,/align-content|flex-|-self/g,"")+t;case 5548:return Re+t+Fe+ye(t,"shrink","negative")+t;case 5292:return Re+t+Fe+ye(t,"basis","preferred-size")+t;case 6060:return Re+"box-"+ye(t,"-grow","")+Re+t+Fe+ye(t,"grow","positive")+t;case 4554:return Re+ye(t,/([^-])(transform)/g,"$1"+Re+"$2")+t;case 6187:return ye(ye(ye(t,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),t,"")+t;case 5495:case 3959:return ye(t,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return ye(ye(t,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+t+t;case 4200:if(!lr(t,/flex-|baseline/))return Fe+"grid-column-align"+bs(t,e)+t;break;case 2592:case 3360:return Fe+ye(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,s){return e=s,lr(r.props,/grid-\w+-end/)})?~Zl(t+(n=n[e].value),"span",0)?t:Fe+ye(t,"-start","")+t+Fe+"grid-row-span:"+(~Zl(n,"span",0)?lr(n,/\d+/):+lr(n,/\d+/)-+lr(t,/\d+/))+";":Fe+ye(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return lr(r.props,/grid-\w+-start/)})?t:Fe+ye(ye(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ye(t,/(.+)-inline(.+)/,Re+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vn(t)-1-e>6)switch(ht(t,e+1)){case 109:if(ht(t,e+4)!==45)break;case 102:return ye(t,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+Do+(ht(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Zl(t,"stretch",0)?My(ye(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ye(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,a,l,d,p,h){return Fe+s+":"+a+h+(l?Fe+s+"-span:"+(d?p:+p-+a)+h:"")+t});case 4949:if(ht(t,e+6)===121)return ye(t,":",":"+Re)+t;break;case 6444:switch(ht(t,ht(t,14)===45?18:11)){case 120:return ye(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Re+(ht(t,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Fe+"$2box$3")+t;case 100:return ye(t,":",":"+Fe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(t,"scroll-","scroll-snap-")+t}return t}function Sc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Ok(t,e,n,r){switch(t.type){case Sk:if(t.children.length)break;case _k:case Ch:return t.return=t.return||t.value;case Ty:return"";case Iy:return t.return=t.value+"{"+Sc(t.children,r)+"}";case tu:if(!Vn(t.value=t.props.join(",")))return""}return Vn(n=Sc(t.children,r))?t.return=t.value+"{"+n+"}":""}function Lk(t){var e=Py(t);return function(n,r,s,a){for(var l="",d=0;d<e;d++)l+=t[d](n,r,s,a)||"";return l}}function Ak(t){return function(e){e.root||(e=e.return)&&t(e)}}function Dk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ch:t.return=My(t.value,t.length,n);return;case Iy:return Sc([Lr(t,{value:ye(t.value,"@","@"+Re)})],r);case tu:if(t.length)return jk(n=t.props,function(s){switch(lr(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":as(Lr(t,{props:[ye(s,/:(read-\w+)/,":"+Do+"$1")]})),as(Lr(t,{props:[s]})),$f(t,{props:_x(n,r)});break;case"::placeholder":as(Lr(t,{props:[ye(s,/:(plac\w+)/,":"+Re+"input-$1")]})),as(Lr(t,{props:[ye(s,/:(plac\w+)/,":"+Do+"$1")]})),as(Lr(t,{props:[ye(s,/:(plac\w+)/,Fe+"input-$1")]})),as(Lr(t,{props:[s]})),$f(t,{props:_x(n,r)});break}return""})}}var Fk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xt={},Ss=typeof process<"u"&&Xt!==void 0&&(Xt.REACT_APP_SC_ATTR||Xt.SC_ATTR)||"data-styled",Ny="active",Oy="data-styled-version",su="6.1.15",Th=`/*!sc*/
`,kc=typeof window<"u"&&"HTMLElement"in window,Bk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==""?Xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.SC_DISABLE_SPEEDY!==void 0&&Xt.SC_DISABLE_SPEEDY!==""&&Xt.SC_DISABLE_SPEEDY!=="false"&&Xt.SC_DISABLE_SPEEDY),Vk={},ou=Object.freeze([]),ks=Object.freeze({});function Ly(t,e,n){return n===void 0&&(n=ks),t.theme!==n.theme&&t.theme||e||n.theme}var Ay=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uk=/(^-|-$)/g;function jx(t){return t.replace(Wk,"-").replace(Uk,"")}var Gk=/(a)(d)/gi,Ml=52,Cx=function(t){return String.fromCharCode(t+(t>25?39:97))};function Mf(t){var e,n="";for(e=Math.abs(t);e>Ml;e=e/Ml|0)n=Cx(e%Ml)+n;return(Cx(e%Ml)+n).replace(Gk,"$1-$2")}var kp,Dy=5381,ds=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Fy=function(t){return ds(Dy,t)};function Ih(t){return Mf(Fy(t)>>>0)}function Hk(t){return t.displayName||t.name||"Component"}function jp(t){return typeof t=="string"&&!0}var By=typeof Symbol=="function"&&Symbol.for,Vy=By?Symbol.for("react.memo"):60115,Yk=By?Symbol.for("react.forward_ref"):60112,Jk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qk=((kp={})[Yk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kp[Vy]=Wy,kp);function Ex(t){return("type"in(e=t)&&e.type.$$typeof)===Vy?Wy:"$$typeof"in t?Qk[t.$$typeof]:Jk;var e}var Zk=Object.defineProperty,Kk=Object.getOwnPropertyNames,Tx=Object.getOwnPropertySymbols,Xk=Object.getOwnPropertyDescriptor,ej=Object.getPrototypeOf,Ix=Object.prototype;function Uy(t,e,n){if(typeof e!="string"){if(Ix){var r=ej(e);r&&r!==Ix&&Uy(t,r,n)}var s=Kk(e);Tx&&(s=s.concat(Tx(e)));for(var a=Ex(t),l=Ex(e),d=0;d<s.length;++d){var p=s[d];if(!(p in qk||n&&n[p]||l&&p in l||a&&p in a)){var h=Xk(e,p);try{Zk(t,p,h)}catch{}}}}return t}function js(t){return typeof t=="function"}function Rh(t){return typeof t=="object"&&"styledComponentId"in t}function yi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function jc(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ta(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Nf(t,e,n){if(n===void 0&&(n=!1),!n&&!ta(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Nf(t[r],e[r]);else if(ta(e))for(var r in e)t[r]=Nf(t[r],e[r]);return t}function $h(t,e){Object.defineProperty(t,"toString",{value:e})}function ga(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var tj=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,a=s;e>=a;)if((a<<=1)<0)throw ga(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var d=this.indexOfGroup(e+1),p=(l=0,n.length);l<p;l++)this.tag.insertRule(d,n[l])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),s=r+n;this.groupSizes[e]=0;for(var a=r;a<s;a++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],s=this.indexOfGroup(e),a=s+r,l=s;l<a;l++)n+="".concat(this.tag.getRule(l)).concat(Th);return n},t}(),ec=new Map,Cc=new Map,tc=1,Nl=function(t){if(ec.has(t))return ec.get(t);for(;Cc.has(tc);)tc++;var e=tc++;return ec.set(t,e),Cc.set(e,t),e},nj=function(t,e){tc=e+1,ec.set(t,e),Cc.set(e,t)},rj="style[".concat(Ss,"][").concat(Oy,'="').concat(su,'"]'),ij=new RegExp("^".concat(Ss,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sj=function(t,e,n){for(var r,s=n.split(","),a=0,l=s.length;a<l;a++)(r=s[a])&&t.registerName(e,r)},oj=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Th),s=[],a=0,l=r.length;a<l;a++){var d=r[a].trim();if(d){var p=d.match(ij);if(p){var h=0|parseInt(p[1],10),m=p[2];h!==0&&(nj(m,h),sj(t,m,p[3]),t.getTag().insertRules(h,s)),s.length=0}else s.push(d)}}},Rx=function(t){for(var e=document.querySelectorAll(rj),n=0,r=e.length;n<r;n++){var s=e[n];s&&s.getAttribute(Ss)!==Ny&&(oj(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function aj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Gy=function(t){var e=document.head,n=t||e,r=document.createElement("style"),s=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Ss,"]")));return p[p.length-1]}(n),a=s!==void 0?s.nextSibling:null;r.setAttribute(Ss,Ny),r.setAttribute(Oy,su);var l=aj();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},lj=function(){function t(e){this.element=Gy(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,s=0,a=r.length;s<a;s++){var l=r[s];if(l.ownerNode===n)return l}throw ga(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),cj=function(){function t(e){this.element=Gy(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),uj=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),$x=kc,dj={isServer:!kc,useCSSOMInjection:!Bk},Ec=function(){function t(e,n,r){e===void 0&&(e=ks),n===void 0&&(n={});var s=this;this.options=Et(Et({},dj),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&kc&&$x&&($x=!1,Rx(this)),$h(this,function(){return function(a){for(var l=a.getTag(),d=l.length,p="",h=function(x){var y=function(E){return Cc.get(E)}(x);if(y===void 0)return"continue";var w=a.names.get(y),b=l.getGroup(x);if(w===void 0||!w.size||b.length===0)return"continue";var _="".concat(Ss,".g").concat(x,'[id="').concat(y,'"]'),C="";w!==void 0&&w.forEach(function(E){E.length>0&&(C+="".concat(E,","))}),p+="".concat(b).concat(_,'{content:"').concat(C,'"}').concat(Th)},m=0;m<d;m++)h(m);return p}(s)})}return t.registerId=function(e){return Nl(e)},t.prototype.rehydrate=function(){!this.server&&kc&&Rx(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Et(Et({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,s=n.target;return n.isServer?new uj(s):r?new lj(s):new cj(s)}(this.options),new tj(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Nl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Nl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Nl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),pj=/&/g,fj=/^\s*\/\/.*$/gm;function Hy(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Hy(n.children,e)),n})}function hj(t){var e,n,r,s=ks,a=s.options,l=a===void 0?ks:a,d=s.plugins,p=d===void 0?ou:d,h=function(y,w,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(e):y},m=p.slice();m.push(function(y){y.type===tu&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(pj,n).replace(r,h))}),l.prefix&&m.push(Dk),m.push(Ok);var x=function(y,w,b,_){w===void 0&&(w=""),b===void 0&&(b=""),_===void 0&&(_="&"),e=_,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=y.replace(fj,""),E=Mk(b||w?"".concat(b," ").concat(w," { ").concat(C," }"):C);l.namespace&&(E=Hy(E,l.namespace));var S=[];return Sc(E,Lk(m.concat(Ak(function(j){return S.push(j)})))),S};return x.hash=p.length?p.reduce(function(y,w){return w.name||ga(15),ds(y,w.name)},Dy).toString():"",x}var mj=new Ec,Of=hj(),Yy=_e.createContext({shouldForwardProp:void 0,styleSheet:mj,stylis:Of});Yy.Consumer;_e.createContext(void 0);function Lf(){return $.useContext(Yy)}var Jy=function(){function t(e,n){var r=this;this.inject=function(s,a){a===void 0&&(a=Of);var l=r.name+a.hash;s.hasNameForId(r.id,l)||s.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,$h(this,function(){throw ga(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Of),this.name+e.hash},t}(),gj=function(t){return t>="A"&&t<="Z"};function Px(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;gj(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var qy=function(t){return t==null||t===!1||t===""},Qy=function(t){var e,n,r=[];for(var s in t){var a=t[s];t.hasOwnProperty(s)&&!qy(a)&&(Array.isArray(a)&&a.isCss||js(a)?r.push("".concat(Px(s),":"),a,";"):ta(a)?r.push.apply(r,ws(ws(["".concat(s," {")],Qy(a),!1),["}"],!1)):r.push("".concat(Px(s),": ").concat((e=s,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Fk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wr(t,e,n,r){if(qy(t))return[];if(Rh(t))return[".".concat(t.styledComponentId)];if(js(t)){if(!js(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var s=t(e);return Wr(s,e,n,r)}var a;return t instanceof Jy?n?(t.inject(n,r),[t.getName(r)]):[t]:ta(t)?Qy(t):Array.isArray(t)?Array.prototype.concat.apply(ou,t.map(function(l){return Wr(l,e,n,r)})):[t.toString()]}function Zy(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(js(n)&&!Rh(n))return!1}return!0}var xj=Fy(su),vj=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Zy(e),this.componentId=n,this.baseHash=ds(xj,n),this.baseStyle=r,Ec.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=yi(s,this.staticRulesId);else{var a=jc(Wr(this.rules,e,n,r)),l=Mf(ds(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,l)){var d=r(a,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,d)}s=yi(s,l),this.staticRulesId=l}else{for(var p=ds(this.baseHash,r.hash),h="",m=0;m<this.rules.length;m++){var x=this.rules[m];if(typeof x=="string")h+=x;else if(x){var y=jc(Wr(x,e,n,r));p=ds(p,y+m),h+=y}}if(h){var w=Mf(p>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(h,".".concat(w),void 0,this.componentId)),s=yi(s,w)}}return s},t}(),Ph=_e.createContext(void 0);Ph.Consumer;var Cp={};function yj(t,e,n){var r=Rh(t),s=t,a=!jp(t),l=e.attrs,d=l===void 0?ou:l,p=e.componentId,h=p===void 0?function(I,R){var z=typeof I!="string"?"sc":jx(I);Cp[z]=(Cp[z]||0)+1;var N="".concat(z,"-").concat(Ih(su+z+Cp[z]));return R?"".concat(R,"-").concat(N):N}(e.displayName,e.parentComponentId):p,m=e.displayName,x=m===void 0?function(I){return jp(I)?"styled.".concat(I):"Styled(".concat(Hk(I),")")}(t):m,y=e.displayName&&e.componentId?"".concat(jx(e.displayName),"-").concat(e.componentId):e.componentId||h,w=r&&s.attrs?s.attrs.concat(d).filter(Boolean):d,b=e.shouldForwardProp;if(r&&s.shouldForwardProp){var _=s.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;b=function(I,R){return _(I,R)&&C(I,R)}}else b=_}var E=new vj(n,y,r?s.componentStyle:void 0);function S(I,R){return function(z,N,L){var O=z.attrs,B=z.componentStyle,Y=z.defaultProps,X=z.foldedComponentIds,J=z.styledComponentId,ne=z.target,ie=_e.useContext(Ph),ce=Lf(),pe=z.shouldForwardProp||ce.shouldForwardProp,H=Ly(N,ie,Y)||ks,ee=function(xe,we,Ie){for(var ke,Ee=Et(Et({},we),{className:void 0,theme:Ie}),gt=0;gt<xe.length;gt+=1){var Zn=js(ke=xe[gt])?ke(Ee):ke;for(var bn in Zn)Ee[bn]=bn==="className"?yi(Ee[bn],Zn[bn]):bn==="style"?Et(Et({},Ee[bn]),Zn[bn]):Zn[bn]}return we.className&&(Ee.className=yi(Ee.className,we.className)),Ee}(O,N,H),Q=ee.as||ne,D={};for(var G in ee)ee[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&ee.theme===H||(G==="forwardedAs"?D.as=ee.forwardedAs:pe&&!pe(G,Q)||(D[G]=ee[G]));var ge=function(xe,we){var Ie=Lf(),ke=xe.generateAndInjectStyles(we,Ie.styleSheet,Ie.stylis);return ke}(B,ee),fe=yi(X,J);return ge&&(fe+=" "+ge),ee.className&&(fe+=" "+ee.className),D[jp(Q)&&!Ay.has(Q)?"class":"className"]=fe,L&&(D.ref=L),$.createElement(Q,D)}(j,I,R)}S.displayName=x;var j=_e.forwardRef(S);return j.attrs=w,j.componentStyle=E,j.displayName=x,j.shouldForwardProp=b,j.foldedComponentIds=r?yi(s.foldedComponentIds,s.styledComponentId):"",j.styledComponentId=y,j.target=r?s.target:t,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=r?function(R){for(var z=[],N=1;N<arguments.length;N++)z[N-1]=arguments[N];for(var L=0,O=z;L<O.length;L++)Nf(R,O[L],!0);return R}({},s.defaultProps,I):I}}),$h(j,function(){return".".concat(j.styledComponentId)}),a&&Uy(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function zx(t,e){for(var n=[t[0]],r=0,s=e.length;r<s;r+=1)n.push(e[r],t[r+1]);return n}var Mx=function(t){return Object.assign(t,{isCss:!0})};function xa(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(js(t)||ta(t))return Mx(Wr(zx(ou,ws([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Wr(r):Mx(Wr(zx(r,e)))}function Af(t,e,n){if(n===void 0&&(n=ks),!e)throw ga(1,e);var r=function(s){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return t(e,n,xa.apply(void 0,ws([s],a,!1)))};return r.attrs=function(s){return Af(t,e,Et(Et({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},r.withConfig=function(s){return Af(t,e,Et(Et({},n),s))},r}var Ky=function(t){return Af(yj,t)},k=Ky;Ay.forEach(function(t){k[t]=Ky(t)});var wj=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Zy(e),Ec.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,s){var a=s(jc(Wr(this.rules,n,r,s)),""),l=this.componentId+e;r.insertRules(l,l,a)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,s){e>2&&Ec.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,s)},t}();function Xy(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=xa.apply(void 0,ws([t],e,!1)),s="sc-global-".concat(Ih(JSON.stringify(r))),a=new wj(r,s),l=function(p){var h=Lf(),m=_e.useContext(Ph),x=_e.useRef(h.styleSheet.allocateGSInstance(s)).current;return h.styleSheet.server&&d(x,p,h.styleSheet,m,h.stylis),_e.useLayoutEffect(function(){if(!h.styleSheet.server)return d(x,p,h.styleSheet,m,h.stylis),function(){return a.removeStyles(x,h.styleSheet)}},[x,p,h.styleSheet,m,h.stylis]),null};function d(p,h,m,x,y){if(a.isStatic)a.renderStyles(p,Vk,m,y);else{var w=Et(Et({},h),{theme:Ly(h,x,l.defaultProps)});a.renderStyles(p,w,m,y)}}return _e.memo(l)}function bj(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=jc(xa.apply(void 0,ws([t],e,!1))),s=Ih(r);return new Jy(s,r)}var e1=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},t1=xa(Nx||(Nx=e1([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));Xy(Ox||(Ox=e1(["",""],["",""])),t1);var Nx,Ox;const _j=Xy`
 :root {
    /* Primary Colors */
    --primary-base: #07FFE6;
    --primary-100: #D9FCFA;
    --primary-200: #B3FAF5;
    --primary-300: #8EF7F0;
    --primary-400: #68F5EB;
    --primary-600: #06DBBF;
    --primary-700: #04998A;
    --primary-800: #02665C;
    --primary-900: #01322D;
    
    /* Secondary Colors */
    --secondary-base: #009C8C;
    --secondary-100: #E6F5F4;
    --secondary-200: #CCEBE8;
    --secondary-300: #B2E1DC;
    --secondary-400: #66C4BA;
    --secondary-600: #007D70;
    --secondary-700: #005E54;
    --secondary-800: #003E38;
    --secondary-900: #001F1C;

    /* Grayscale */
    --gray-100: #E6E7E9;
    --gray-200: #D1D2D4;
    --gray-300: #BCBDC0;
    --gray-400: #A8A9AD;
    --gray-500: #939598;
    --gray-600: #6C6D70;
    --gray-700: #57585A;
    --gray-800: #3E3E3F;
    --gray-900: #191919;

    /* 색깔 극단값 */
    --white: #ffffff;
    --black: #000000;

    /* Color contrast ratios */
    --contrast-normal: 3.1;     /* 3:1 with white */
    --contrast-high: 4.5;       /* 4.5:1 with white */
   /* Spacing System */
    --spacing-0: 0px;
    --spacing-1: 2px;
    --spacing-2: 4px;
    --spacing-3: 8px;
    --spacing-4: 12px;
    --spacing-5: 16px;
    --spacing-6: 20px;
    --spacing-7: 24px;
    --spacing-8: 32px;
    --spacing-9: 40px;
    --spacing-10: 48px;

  /* Layout Spacing System */
    --layout-gnb-body: clamp(64px, 3.33vw, 50px);        /* 390px일 때 64px, 1920px일 때 50px */
    --layout-titleCont-title: clamp(0px, 2.08vw, 40px);      /* 390px일 때 0px, 1920px일 때 40px */
    --layout-titleCont-contents: clamp(64px, 3.33vw, 64px);  /* 390px일 때 64px, 1920px일 때 64px */
    --layout-contents-contents: clamp(40px, 3.65vw, 70px); /* 390px일 때 40px, 1920px일 때 70px */
    --layout-body-footer: clamp(64px, 4.17vw, 80px);     /* 390px일 때 64px, 1920px일 때 80px */

    /* breakpoint */
    --breakpoint-mobileUp: 360px;  /* min-width: 최소 모바일 화면 */
    --breakpoint-mobile: 390px; /* 모바일: 360px~600px 대표: 390px*/
    --breakpoint-mobileDown: 600px;  /* max-width: 최대 모바일 화면 */

    --breakpoint-tabletUp: 601px;  /* min-width: 최소 태블릿 화면 */
    --breakpoint-tablet: 768px; /* 태블릿: 601px~1024px 대표: 768px*/
    --breakpoint-tabletDown: 1024px; /* max-width: 최대 태블릿 화면 */

    --breakpoint-desktopUp: 1025px; /* min-width: 최소 데스크탑 화면 */
    --breakpoint-desktop: 1920px; /* 데스크탑: 1025px~1920px 대표&최대 화면: 1920px*/
   /* Display */
   /* 한 눈에 가장 큰 텍스트 */
    --display-large-size: 120px;
    --display-large-mobile: 65px;
    --display-large-weight: 700;
    
    --display-medium-size: 80px;
    --display-medium-mobile: 35px;
    --display-medium-weight: 800;
    
    --display-small-size: 40px;
    --display-small-mobile: 25px;
    --display-small-weight: 700;

    /* Heading */
    /* 페이지 섹션 타이틀에 사용 */
    --heading-large-size: 48px;
    --heading-large-mobile: 48px;
    --heading-large-weight: 800;
    
    --heading-medium-size: 40px;
    --heading-medium-mobile: 32px;
    --heading-medium-weight: 700;
    
    --heading-small-size: 32px;
    --heading-small-mobile: 25px;
    --heading-small-weight: 700;

    /* Title */
    /* 텍스트 단위, 모듈 단위의 작은 제목 사용 */
    --title-xxlarge-size: 60px;
    --title-xxlarge-mobile: 48px;
    --title-xxlarge-weight: 700;
    
    --title-xlarge-size: 32px;
    --title-xlarge-mobile: 32px;
    --title-xlarge-weight: 800;
    
    --title-large-size: 28px;
    --title-large-mobile: 24px;
    --title-large-weight: 700;
    
    --title-medium-size: 20px;
    --title-medium-mobile: 20px;
    --title-medium-weight: 700;
    
    --title-small-size: 17px;
    --title-small-mobile: 17px;
    --title-small-weight: 800;
    
    --title-xsmall-size: 15px;
    --title-xsmall-mobile: 15px;
    --title-xsmall-weight: 700;

    /* Body */
    /* 본문 텍스트로 사용 */
    --body-large-size: 28px;
    --body-large-mobile: 19px;
    --body-large-weight: 400;
    
    --body-medium-size: 17px;
    --body-medium-mobile: 17px;
    --body-medium-weight: 400;
    
    --body-small-size: 15px;
    --body-small-mobile: 15px;
    --body-small-weight: 400;

    /* Detail */
    /* 추가 보충 또는 작은 알림 텍스트 사용 */
    --detail-large-size: 17px;
    --detail-large-mobile: 17px;
    --detail-large-weight: 400;
    
    --detail-medium-size: 15px;
    --detail-medium-mobile: 15px;
    --detail-medium-weight: 400;
    
    --detail-small-size: 13px;
    --detail-small-mobile: 13px;
    --detail-small-weight: 400;

    /* Label */
    /* 구성 요소 내부에서 텍스트로 사용 */
    --label-large-size: 19px;
    --label-large-mobile: 19px;
    --label-large-weight: 400;
    
    --label-medium-size: 17px;
    --label-medium-mobile: 17px;
    --label-medium-weight: 400;
    
    --label-small-size: 15px;
    --label-small-mobile: 15px;
    --label-small-weight: 400;
    
    --label-xsmall-size: 13px;
    --label-xsmall-mobile: 13px;
    --label-xsmall-weight: 400;

    /* Links */
    /* 링크나 컴포넌트 영역의 텍스트로 사용 */
    --links-large-size: 19px;
    --links-large-mobile: 19px;
    --links-large-weight: 400;
    
    --links-medium-size: 17px;
    --links-medium-mobile: 17px;
    --links-medium-weight: 400;
    
    --links-small-size: 15px;
    --links-small-mobile: 15px;
    --links-small-weight: 400;

    /* text common */
    /* 행간, 자간 */
    --m-line-height: 150%; /* Mobile (13~14px 대표 기준) Line Height */
    --pc-l-line-height: 130%; /* PC Large(40px 이상일때) Line Height */
    --pc-n-line-height: 160%; /* PC Normal(15~16px 기준) Line Height */
    --letter-spacing-default: 1px;
    --letter-spacing-none: 0;
 }
  ${t1}
  /* reset */
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  button,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  "NanumSquareNeo", Pretendard, sans-serif;
  }

  fieldset,
  img {
    border: 0 none;
  }

  img,
  video {
    max-width: 100%;
  }

  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after {
    content: '';
    content: none;
  }

  q:before,
  q:after {
    content: '';
    content: none;
  }

  input,
  select,
  textarea {
    font-size: 100%;
    vertical-align: middle;
  }

  button {
    font-size: 100%;
    vertical-align: middle;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all ease 100ms;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    color: var(--white);
    background-color: var(--gray-900);
    -webkit-text-size-adjust: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: top;
  }

  input[type='text'],
  input[type='password'],
  input[type='submit'],
  input[type='search'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  input:checked[type='checkbox'] {
    background-color: #e4e4e4;
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
  }

  button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    border-radius: 0;
    border: none;
    cursor: pointer;
  }

  input[type='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='file'] {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    border-radius: 0;
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }

  hr {
    display: none;
  }

  input[type='password'] {
    font-family: 'Malgun Gothic';
  }

  /* 중요한 이미지 대체텍스트로 이미지off시에도 대체 텍스트를 보여주고자 할때 */
  .blind,
  caption,
  legend {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  /* 공통 클래스 */
  .inner {
    width: 1400px;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    padding: 120px 0;
  }

  .main {
    width: 100%;
  }

  .hide {
    overflow: hidden;
    text-indent: -9999px;
    width: 0;
    height: 0;
    line-height: 0;
  }

  /* Swiper 스타일 */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: var(--gray-900);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;function Lx(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function zh(t,e){t===void 0&&(t={}),e===void 0&&(e={});const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:Lx(e[r])&&Lx(t[r])&&Object.keys(e[r]).length>0&&zh(t[r],e[r])})}const n1={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Hn(){const t=typeof document<"u"?document:{};return zh(t,n1),t}const Sj={document:n1,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Nt(){const t=typeof window<"u"?window:{};return zh(t,Sj),t}function kj(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function jj(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Df(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Tc(){return Date.now()}function Cj(t){const e=Nt();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Ej(t,e){e===void 0&&(e="x");const n=Nt();let r,s,a;const l=Cj(t);return n.WebKitCSSMatrix?(s=l.transform||l.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(d=>d.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(s==="none"?"":s)):(a=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?s=a.m41:r.length===16?s=parseFloat(r[12]):s=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?s=a.m42:r.length===16?s=parseFloat(r[13]):s=parseFloat(r[5])),s||0}function Ol(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function Tj(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function en(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Tj(r)){const s=Object.keys(Object(r)).filter(a=>e.indexOf(a)<0);for(let a=0,l=s.length;a<l;a+=1){const d=s[a],p=Object.getOwnPropertyDescriptor(r,d);p!==void 0&&p.enumerable&&(Ol(t[d])&&Ol(r[d])?r[d].__swiper__?t[d]=r[d]:en(t[d],r[d]):!Ol(t[d])&&Ol(r[d])?(t[d]={},r[d].__swiper__?t[d]=r[d]:en(t[d],r[d])):t[d]=r[d])}}}return t}function Ll(t,e,n){t.style.setProperty(e,n)}function r1(t){let{swiper:e,targetPosition:n,side:r}=t;const s=Nt(),a=-e.translate;let l=null,d;const p=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const h=n>a?"next":"prev",m=(y,w)=>h==="next"&&y>=w||h==="prev"&&y<=w,x=()=>{d=new Date().getTime(),l===null&&(l=d);const y=Math.max(Math.min((d-l)/p,1),0),w=.5-Math.cos(y*Math.PI)/2;let b=a+w*(n-a);if(m(b,n)&&(b=n),e.wrapperEl.scrollTo({[r]:b}),m(b,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:b})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(x)};x()}function Un(t,e){e===void 0&&(e="");const n=Nt(),r=[...t.children];return n.HTMLSlotElement&&t instanceof HTMLSlotElement&&r.push(...t.assignedElements()),e?r.filter(s=>s.matches(e)):r}function Ij(t,e){var r,s;const n=[e];for(;n.length>0;){const a=n.shift();if(t===a)return!0;n.push(...a.children,...((r=a.shadowRoot)==null?void 0:r.children)||[],...((s=a.assignedElements)==null?void 0:s.call(a))||[])}}function Rj(t,e){const n=Nt();let r=e.contains(t);return!r&&n.HTMLSlotElement&&e instanceof HTMLSlotElement&&(r=[...e.assignedElements()].includes(t),r||(r=Ij(t,e))),r}function Ic(t){try{console.warn(t);return}catch{}}function Rc(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:kj(e)),n}function $j(t,e){const n=[];for(;t.previousElementSibling;){const r=t.previousElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function Pj(t,e){const n=[];for(;t.nextElementSibling;){const r=t.nextElementSibling;e?r.matches(e)&&n.push(r):n.push(r),t=r}return n}function Ar(t,e){return Nt().getComputedStyle(t,null).getPropertyValue(e)}function $c(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function i1(t,e){const n=[];let r=t.parentElement;for(;r;)e?r.matches(e)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ff(t,e,n){const r=Nt();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function ft(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}let Ep;function zj(){const t=Nt(),e=Hn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function s1(){return Ep||(Ep=zj()),Ep}let Tp;function Mj(t){let{userAgent:e}=t===void 0?{}:t;const n=s1(),r=Nt(),s=r.navigator.platform,a=e||r.navigator.userAgent,l={ios:!1,android:!1},d=r.screen.width,p=r.screen.height,h=a.match(/(Android);?[\s\/]+([\d.]+)?/);let m=a.match(/(iPad).*OS\s([\d_]+)/);const x=a.match(/(iPod)(.*OS\s([\d_]+))?/),y=!m&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),w=s==="Win32";let b=s==="MacIntel";const _=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!m&&b&&n.touch&&_.indexOf(`${d}x${p}`)>=0&&(m=a.match(/(Version)\/([\d.]+)/),m||(m=[0,1,"13_0_0"]),b=!1),h&&!w&&(l.os="android",l.android=!0),(m||y||x)&&(l.os="ios",l.ios=!0),l}function o1(t){return t===void 0&&(t={}),Tp||(Tp=Mj(t)),Tp}let Ip;function Nj(){const t=Nt(),e=o1();let n=!1;function r(){const d=t.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(r()){const d=String(t.navigator.userAgent);if(d.includes("Version/")){const[p,h]=d.split("Version/")[1].split(" ")[0].split(".").map(m=>Number(m));n=p<16||p===16&&h<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),a=r(),l=a||s&&e.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:l,isWebView:s}}function a1(){return Ip||(Ip=Nj()),Ip}function Oj(t){let{swiper:e,on:n,emit:r}=t;const s=Nt();let a=null,l=null;const d=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},p=()=>{!e||e.destroyed||!e.initialized||(a=new ResizeObserver(x=>{l=s.requestAnimationFrame(()=>{const{width:y,height:w}=e;let b=y,_=w;x.forEach(C=>{let{contentBoxSize:E,contentRect:S,target:j}=C;j&&j!==e.el||(b=S?S.width:(E[0]||E).inlineSize,_=S?S.height:(E[0]||E).blockSize)}),(b!==y||_!==w)&&d()})}),a.observe(e.el))},h=()=>{l&&s.cancelAnimationFrame(l),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null)},m=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){p();return}s.addEventListener("resize",d),s.addEventListener("orientationchange",m)}),n("destroy",()=>{h(),s.removeEventListener("resize",d),s.removeEventListener("orientationchange",m)})}function Lj(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const a=[],l=Nt(),d=function(m,x){x===void 0&&(x={});const y=l.MutationObserver||l.WebkitMutationObserver,w=new y(b=>{if(e.__preventObserver__)return;if(b.length===1){s("observerUpdate",b[0]);return}const _=function(){s("observerUpdate",b[0])};l.requestAnimationFrame?l.requestAnimationFrame(_):l.setTimeout(_,0)});w.observe(m,{attributes:typeof x.attributes>"u"?!0:x.attributes,childList:e.isElement||(typeof x.childList>"u"?!0:x).childList,characterData:typeof x.characterData>"u"?!0:x.characterData}),a.push(w)},p=()=>{if(e.params.observer){if(e.params.observeParents){const m=i1(e.hostEl);for(let x=0;x<m.length;x+=1)d(m[x])}d(e.hostEl,{childList:e.params.observeSlideChildren}),d(e.wrapperEl,{attributes:!1})}},h=()=>{a.forEach(m=>{m.disconnect()}),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",p),r("destroy",h)}var Aj={on(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const s=n?"unshift":"push";return t.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][s](e)}),r},once(t,e,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function s(){r.off(t,s),s.__emitterProxy&&delete s.__emitterProxy;for(var a=arguments.length,l=new Array(a),d=0;d<a;d++)l[d]=arguments[d];e.apply(r,l)}return s.__emitterProxy=e,r.on(t,s,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((s,a)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&n.eventsListeners[r].splice(a,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,r;for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return typeof a[0]=="string"||Array.isArray(a[0])?(e=a[0],n=a.slice(1,a.length),r=t):(e=a[0].events,n=a[0].data,r=a[0].context||t),n.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(p=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(h=>{h.apply(r,[p,...n])}),t.eventsListeners&&t.eventsListeners[p]&&t.eventsListeners[p].forEach(h=>{h.apply(r,n)})}),t}};function Dj(){const t=this;let e,n;const r=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(Ar(r,"padding-left")||0,10)-parseInt(Ar(r,"padding-right")||0,10),n=n-parseInt(Ar(r,"padding-top")||0,10)-parseInt(Ar(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function Fj(){const t=this;function e(B,Y){return parseFloat(B.getPropertyValue(t.getDirectionLabel(Y))||0)}const n=t.params,{wrapperEl:r,slidesEl:s,size:a,rtlTranslate:l,wrongRTL:d}=t,p=t.virtual&&n.virtual.enabled,h=p?t.virtual.slides.length:t.slides.length,m=Un(s,`.${t.params.slideClass}, swiper-slide`),x=p?t.virtual.slides.length:m.length;let y=[];const w=[],b=[];let _=n.slidesOffsetBefore;typeof _=="function"&&(_=n.slidesOffsetBefore.call(t));let C=n.slidesOffsetAfter;typeof C=="function"&&(C=n.slidesOffsetAfter.call(t));const E=t.snapGrid.length,S=t.slidesGrid.length;let j=n.spaceBetween,I=-_,R=0,z=0;if(typeof a>"u")return;typeof j=="string"&&j.indexOf("%")>=0?j=parseFloat(j.replace("%",""))/100*a:typeof j=="string"&&(j=parseFloat(j)),t.virtualSize=-j,m.forEach(B=>{l?B.style.marginLeft="":B.style.marginRight="",B.style.marginBottom="",B.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ll(r,"--swiper-centered-offset-before",""),Ll(r,"--swiper-centered-offset-after",""));const N=n.grid&&n.grid.rows>1&&t.grid;N?t.grid.initSlides(m):t.grid&&t.grid.unsetSlides();let L;const O=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(B=>typeof n.breakpoints[B].slidesPerView<"u").length>0;for(let B=0;B<x;B+=1){L=0;let Y;if(m[B]&&(Y=m[B]),N&&t.grid.updateSlide(B,Y,m),!(m[B]&&Ar(Y,"display")==="none")){if(n.slidesPerView==="auto"){O&&(m[B].style[t.getDirectionLabel("width")]="");const X=getComputedStyle(Y),J=Y.style.transform,ne=Y.style.webkitTransform;if(J&&(Y.style.transform="none"),ne&&(Y.style.webkitTransform="none"),n.roundLengths)L=t.isHorizontal()?Ff(Y,"width"):Ff(Y,"height");else{const ie=e(X,"width"),ce=e(X,"padding-left"),pe=e(X,"padding-right"),H=e(X,"margin-left"),ee=e(X,"margin-right"),Q=X.getPropertyValue("box-sizing");if(Q&&Q==="border-box")L=ie+H+ee;else{const{clientWidth:D,offsetWidth:G}=Y;L=ie+ce+pe+H+ee+(G-D)}}J&&(Y.style.transform=J),ne&&(Y.style.webkitTransform=ne),n.roundLengths&&(L=Math.floor(L))}else L=(a-(n.slidesPerView-1)*j)/n.slidesPerView,n.roundLengths&&(L=Math.floor(L)),m[B]&&(m[B].style[t.getDirectionLabel("width")]=`${L}px`);m[B]&&(m[B].swiperSlideSize=L),b.push(L),n.centeredSlides?(I=I+L/2+R/2+j,R===0&&B!==0&&(I=I-a/2-j),B===0&&(I=I-a/2-j),Math.abs(I)<1/1e3&&(I=0),n.roundLengths&&(I=Math.floor(I)),z%n.slidesPerGroup===0&&y.push(I),w.push(I)):(n.roundLengths&&(I=Math.floor(I)),(z-Math.min(t.params.slidesPerGroupSkip,z))%t.params.slidesPerGroup===0&&y.push(I),w.push(I),I=I+L+j),t.virtualSize+=L+j,R=L,z+=1}}if(t.virtualSize=Math.max(t.virtualSize,a)+C,l&&d&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${t.virtualSize+j}px`),n.setWrapperSize&&(r.style[t.getDirectionLabel("width")]=`${t.virtualSize+j}px`),N&&t.grid.updateWrapperSize(L,y),!n.centeredSlides){const B=[];for(let Y=0;Y<y.length;Y+=1){let X=y[Y];n.roundLengths&&(X=Math.floor(X)),y[Y]<=t.virtualSize-a&&B.push(X)}y=B,Math.floor(t.virtualSize-a)-Math.floor(y[y.length-1])>1&&y.push(t.virtualSize-a)}if(p&&n.loop){const B=b[0]+j;if(n.slidesPerGroup>1){const Y=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),X=B*n.slidesPerGroup;for(let J=0;J<Y;J+=1)y.push(y[y.length-1]+X)}for(let Y=0;Y<t.virtual.slidesBefore+t.virtual.slidesAfter;Y+=1)n.slidesPerGroup===1&&y.push(y[y.length-1]+B),w.push(w[w.length-1]+B),t.virtualSize+=B}if(y.length===0&&(y=[0]),j!==0){const B=t.isHorizontal()&&l?"marginLeft":t.getDirectionLabel("marginRight");m.filter((Y,X)=>!n.cssMode||n.loop?!0:X!==m.length-1).forEach(Y=>{Y.style[B]=`${j}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let B=0;b.forEach(X=>{B+=X+(j||0)}),B-=j;const Y=B>a?B-a:0;y=y.map(X=>X<=0?-_:X>Y?Y+C:X)}if(n.centerInsufficientSlides){let B=0;b.forEach(X=>{B+=X+(j||0)}),B-=j;const Y=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(B+Y<a){const X=(a-B-Y)/2;y.forEach((J,ne)=>{y[ne]=J-X}),w.forEach((J,ne)=>{w[ne]=J+X})}}if(Object.assign(t,{slides:m,snapGrid:y,slidesGrid:w,slidesSizesGrid:b}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ll(r,"--swiper-centered-offset-before",`${-y[0]}px`),Ll(r,"--swiper-centered-offset-after",`${t.size/2-b[b.length-1]/2}px`);const B=-t.snapGrid[0],Y=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(X=>X+B),t.slidesGrid=t.slidesGrid.map(X=>X+Y)}if(x!==h&&t.emit("slidesLengthChange"),y.length!==E&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),w.length!==S&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!p&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const B=`${n.containerModifierClass}backface-hidden`,Y=t.el.classList.contains(B);x<=n.maxBackfaceHiddenSlides?Y||t.el.classList.add(B):Y&&t.el.classList.remove(B)}}function Bj(t){const e=this,n=[],r=e.virtual&&e.params.virtual.enabled;let s=0,a;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const l=d=>r?e.slides[e.getSlideIndexByData(d)]:e.slides[d];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(d=>{n.push(d)});else for(a=0;a<Math.ceil(e.params.slidesPerView);a+=1){const d=e.activeIndex+a;if(d>e.slides.length&&!r)break;n.push(l(d))}else n.push(l(e.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const d=n[a].offsetHeight;s=d>s?d:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function Vj(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(t.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-n-t.cssOverflowAdjustment()}const Ax=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function Wj(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:r,rtlTranslate:s,snapGrid:a}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let l=-t;s&&(l=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let d=n.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*e.size:typeof d=="string"&&(d=parseFloat(d));for(let p=0;p<r.length;p+=1){const h=r[p];let m=h.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(m-=r[0].swiperSlideOffset);const x=(l+(n.centeredSlides?e.minTranslate():0)-m)/(h.swiperSlideSize+d),y=(l-a[0]+(n.centeredSlides?e.minTranslate():0)-m)/(h.swiperSlideSize+d),w=-(l-m),b=w+e.slidesSizesGrid[p],_=w>=0&&w<=e.size-e.slidesSizesGrid[p],C=w>=0&&w<e.size-1||b>1&&b<=e.size||w<=0&&b>=e.size;C&&(e.visibleSlides.push(h),e.visibleSlidesIndexes.push(p)),Ax(h,C,n.slideVisibleClass),Ax(h,_,n.slideFullyVisibleClass),h.progress=s?-x:x,h.originalProgress=s?-y:y}}function Uj(t){const e=this;if(typeof t>"u"){const m=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*m||0}const n=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:a,isEnd:l,progressLoop:d}=e;const p=a,h=l;if(r===0)s=0,a=!0,l=!0;else{s=(t-e.minTranslate())/r;const m=Math.abs(t-e.minTranslate())<1,x=Math.abs(t-e.maxTranslate())<1;a=m||s<=0,l=x||s>=1,m&&(s=0),x&&(s=1)}if(n.loop){const m=e.getSlideIndexByData(0),x=e.getSlideIndexByData(e.slides.length-1),y=e.slidesGrid[m],w=e.slidesGrid[x],b=e.slidesGrid[e.slidesGrid.length-1],_=Math.abs(t);_>=y?d=(_-y)/b:d=(_+b-w)/b,d>1&&(d-=1)}Object.assign(e,{progress:s,progressLoop:d,isBeginning:a,isEnd:l}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),a&&!p&&e.emit("reachBeginning toEdge"),l&&!h&&e.emit("reachEnd toEdge"),(p&&!a||h&&!l)&&e.emit("fromEdge"),e.emit("progress",s)}const Rp=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function Gj(){const t=this,{slides:e,params:n,slidesEl:r,activeIndex:s}=t,a=t.virtual&&n.virtual.enabled,l=t.grid&&n.grid&&n.grid.rows>1,d=x=>Un(r,`.${n.slideClass}${x}, swiper-slide${x}`)[0];let p,h,m;if(a)if(n.loop){let x=s-t.virtual.slidesBefore;x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),p=d(`[data-swiper-slide-index="${x}"]`)}else p=d(`[data-swiper-slide-index="${s}"]`);else l?(p=e.find(x=>x.column===s),m=e.find(x=>x.column===s+1),h=e.find(x=>x.column===s-1)):p=e[s];p&&(l||(m=Pj(p,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!m&&(m=e[0]),h=$j(p,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!h===0&&(h=e[e.length-1]))),e.forEach(x=>{Rp(x,x===p,n.slideActiveClass),Rp(x,x===m,n.slideNextClass),Rp(x,x===h,n.slidePrevClass)}),t.emitSlidesClasses()}const nc=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,r=e.closest(n());if(r){let s=r.querySelector(`.${t.params.lazyPreloaderClass}`);!s&&t.isElement&&(r.shadowRoot?s=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(s=r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},$p=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Bf=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const r=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),s=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const l=s,d=[l-e];d.push(...Array.from({length:e}).map((p,h)=>l+r+h)),t.slides.forEach((p,h)=>{d.includes(p.column)&&$p(t,h)});return}const a=s+r-1;if(t.params.rewind||t.params.loop)for(let l=s-e;l<=a+e;l+=1){const d=(l%n+n)%n;(d<s||d>a)&&$p(t,d)}else for(let l=Math.max(s-e,0);l<=Math.min(a+e,n-1);l+=1)l!==s&&(l>a||l<s)&&$p(t,l)};function Hj(t){const{slidesGrid:e,params:n}=t,r=t.rtlTranslate?t.translate:-t.translate;let s;for(let a=0;a<e.length;a+=1)typeof e[a+1]<"u"?r>=e[a]&&r<e[a+1]-(e[a+1]-e[a])/2?s=a:r>=e[a]&&r<e[a+1]&&(s=a+1):r>=e[a]&&(s=a);return n.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function Yj(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:s,activeIndex:a,realIndex:l,snapIndex:d}=e;let p=t,h;const m=w=>{let b=w-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof p>"u"&&(p=Hj(e)),r.indexOf(n)>=0)h=r.indexOf(n);else{const w=Math.min(s.slidesPerGroupSkip,p);h=w+Math.floor((p-w)/s.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),p===a&&!e.params.loop){h!==d&&(e.snapIndex=h,e.emit("snapIndexChange"));return}if(p===a&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=m(p);return}const x=e.grid&&s.grid&&s.grid.rows>1;let y;if(e.virtual&&s.virtual.enabled&&s.loop)y=m(p);else if(x){const w=e.slides.find(_=>_.column===p);let b=parseInt(w.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(w),0)),y=Math.floor(b/s.grid.rows)}else if(e.slides[p]){const w=e.slides[p].getAttribute("data-swiper-slide-index");w?y=parseInt(w,10):y=p}else y=p;Object.assign(e,{previousSnapIndex:d,snapIndex:h,previousRealIndex:l,realIndex:y,previousIndex:a,activeIndex:p}),e.initialized&&Bf(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(l!==y&&e.emit("realIndexChange"),e.emit("slideChange"))}function Jj(t,e){const n=this,r=n.params;let s=t.closest(`.${r.slideClass}, swiper-slide`);!s&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(d=>{!s&&d.matches&&d.matches(`.${r.slideClass}, swiper-slide`)&&(s=d)});let a=!1,l;if(s){for(let d=0;d<n.slides.length;d+=1)if(n.slides[d]===s){a=!0,l=d;break}}if(s&&a)n.clickedSlide=s,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=l;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var qj={updateSize:Dj,updateSlides:Fj,updateAutoHeight:Bj,updateSlidesOffset:Vj,updateSlidesProgress:Wj,updateProgress:Uj,updateSlidesClasses:Gj,updateActiveIndex:Yj,updateClickedSlide:Jj};function Qj(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:r,translate:s,wrapperEl:a}=e;if(n.virtualTranslate)return r?-s:s;if(n.cssMode)return s;let l=Ej(a,t);return l+=e.cssOverflowAdjustment(),r&&(l=-l),l||0}function Zj(t,e){const n=this,{rtlTranslate:r,params:s,wrapperEl:a,progress:l}=n;let d=0,p=0;const h=0;n.isHorizontal()?d=r?-t:t:p=t,s.roundLengths&&(d=Math.floor(d),p=Math.floor(p)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?d:p,s.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-d:-p:s.virtualTranslate||(n.isHorizontal()?d-=n.cssOverflowAdjustment():p-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${d}px, ${p}px, ${h}px)`);let m;const x=n.maxTranslate()-n.minTranslate();x===0?m=0:m=(t-n.minTranslate())/x,m!==l&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function Kj(){return-this.snapGrid[0]}function Xj(){return-this.snapGrid[this.snapGrid.length-1]}function eC(t,e,n,r,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const a=this,{params:l,wrapperEl:d}=a;if(a.animating&&l.preventInteractionOnTransition)return!1;const p=a.minTranslate(),h=a.maxTranslate();let m;if(r&&t>p?m=p:r&&t<h?m=h:m=t,a.updateProgress(m),l.cssMode){const x=a.isHorizontal();if(e===0)d[x?"scrollLeft":"scrollTop"]=-m;else{if(!a.support.smoothScroll)return r1({swiper:a,targetPosition:-m,side:x?"left":"top"}),!0;d.scrollTo({[x?"left":"top"]:-m,behavior:"smooth"})}return!0}return e===0?(a.setTransition(0),a.setTranslate(m),n&&(a.emit("beforeTransitionStart",e,s),a.emit("transitionEnd"))):(a.setTransition(e),a.setTranslate(m),n&&(a.emit("beforeTransitionStart",e,s),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(y){!a||a.destroyed||y.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var tC={getTranslate:Qj,setTranslate:Zj,minTranslate:Kj,maxTranslate:Xj,translateTo:eC};function nC(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function l1(t){let{swiper:e,runCallbacks:n,direction:r,step:s}=t;const{activeIndex:a,previousIndex:l}=e;let d=r;if(d||(a>l?d="next":a<l?d="prev":d="reset"),e.emit(`transition${s}`),n&&a!==l){if(d==="reset"){e.emit(`slideResetTransition${s}`);return}e.emit(`slideChangeTransition${s}`),d==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`)}}function rC(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),l1({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function iC(t,e){t===void 0&&(t=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),l1({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var sC={setTransition:nC,transitionStart:rC,transitionEnd:iC};function oC(t,e,n,r,s){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const a=this;let l=t;l<0&&(l=0);const{params:d,snapGrid:p,slidesGrid:h,previousIndex:m,activeIndex:x,rtlTranslate:y,wrapperEl:w,enabled:b}=a;if(!b&&!r&&!s||a.destroyed||a.animating&&d.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=a.params.speed);const _=Math.min(a.params.slidesPerGroupSkip,l);let C=_+Math.floor((l-_)/a.params.slidesPerGroup);C>=p.length&&(C=p.length-1);const E=-p[C];if(d.normalizeSlideIndex)for(let N=0;N<h.length;N+=1){const L=-Math.floor(E*100),O=Math.floor(h[N]*100),B=Math.floor(h[N+1]*100);typeof h[N+1]<"u"?L>=O&&L<B-(B-O)/2?l=N:L>=O&&L<B&&(l=N+1):L>=O&&(l=N)}if(a.initialized&&l!==x&&(!a.allowSlideNext&&(y?E>a.translate&&E>a.minTranslate():E<a.translate&&E<a.minTranslate())||!a.allowSlidePrev&&E>a.translate&&E>a.maxTranslate()&&(x||0)!==l))return!1;l!==(m||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(E);let S;l>x?S="next":l<x?S="prev":S="reset";const j=a.virtual&&a.params.virtual.enabled;if(!(j&&s)&&(y&&-E===a.translate||!y&&E===a.translate))return a.updateActiveIndex(l),d.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),d.effect!=="slide"&&a.setTranslate(E),S!=="reset"&&(a.transitionStart(n,S),a.transitionEnd(n,S)),!1;if(d.cssMode){const N=a.isHorizontal(),L=y?E:-E;if(e===0)j&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),j&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{w[N?"scrollLeft":"scrollTop"]=L})):w[N?"scrollLeft":"scrollTop"]=L,j&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return r1({swiper:a,targetPosition:L,side:N?"left":"top"}),!0;w.scrollTo({[N?"left":"top"]:L,behavior:"smooth"})}return!0}const z=a1().isSafari;return j&&!s&&z&&a.isElement&&a.virtual.update(!1,!1,l),a.setTransition(e),a.setTranslate(E),a.updateActiveIndex(l),a.updateSlidesClasses(),a.emit("beforeTransitionStart",e,r),a.transitionStart(n,S),e===0?a.transitionEnd(n,S):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(L){!a||a.destroyed||L.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,S))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function aC(t,e,n,r){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const a=s.grid&&s.params.grid&&s.params.grid.rows>1;let l=t;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)l=l+s.virtual.slidesBefore;else{let d;if(a){const y=l*s.params.grid.rows;d=s.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else d=s.getSlideIndexByData(l);const p=a?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:h}=s.params;let m=s.params.slidesPerView;m==="auto"?m=s.slidesPerViewDynamic():(m=Math.ceil(parseFloat(s.params.slidesPerView,10)),h&&m%2===0&&(m=m+1));let x=p-d<m;if(h&&(x=x||d<Math.ceil(m/2)),r&&h&&s.params.slidesPerView!=="auto"&&!a&&(x=!1),x){const y=h?d<s.activeIndex?"prev":"next":d-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?d+1:d-p+1,slideRealIndex:y==="next"?s.realIndex:void 0})}if(a){const y=l*s.params.grid.rows;l=s.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else l=s.getSlideIndexByData(l)}return requestAnimationFrame(()=>{s.slideTo(l,e,n,r)}),s}function lC(t,e,n){e===void 0&&(e=!0);const r=this,{enabled:s,params:a,animating:l}=r;if(!s||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);let d=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(d=Math.max(r.slidesPerViewDynamic("current",!0),1));const p=r.activeIndex<a.slidesPerGroupSkip?1:d,h=r.virtual&&a.virtual.enabled;if(a.loop){if(l&&!h&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+p,t,e,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+p,t,e,n)}function cC(t,e,n){e===void 0&&(e=!0);const r=this,{params:s,snapGrid:a,slidesGrid:l,rtlTranslate:d,enabled:p,animating:h}=r;if(!p||r.destroyed)return r;typeof t>"u"&&(t=r.params.speed);const m=r.virtual&&s.virtual.enabled;if(s.loop){if(h&&!m&&s.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const x=d?r.translate:-r.translate;function y(S){return S<0?-Math.floor(Math.abs(S)):Math.floor(S)}const w=y(x),b=a.map(S=>y(S)),_=s.freeMode&&s.freeMode.enabled;let C=a[b.indexOf(w)-1];if(typeof C>"u"&&(s.cssMode||_)){let S;a.forEach((j,I)=>{w>=j&&(S=I)}),typeof S<"u"&&(C=_?a[S]:a[S>0?S-1:S])}let E=0;if(typeof C<"u"&&(E=l.indexOf(C),E<0&&(E=r.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(E=E-r.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),s.rewind&&r.isBeginning){const S=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(S,t,e,n)}else if(s.loop&&r.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(E,t,e,n)}),!0;return r.slideTo(E,t,e,n)}function uC(t,e,n){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof t>"u"&&(t=r.params.speed),r.slideTo(r.activeIndex,t,e,n)}function dC(t,e,n,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const s=this;if(s.destroyed)return;typeof t>"u"&&(t=s.params.speed);let a=s.activeIndex;const l=Math.min(s.params.slidesPerGroupSkip,a),d=l+Math.floor((a-l)/s.params.slidesPerGroup),p=s.rtlTranslate?s.translate:-s.translate;if(p>=s.snapGrid[d]){const h=s.snapGrid[d],m=s.snapGrid[d+1];p-h>(m-h)*r&&(a+=s.params.slidesPerGroup)}else{const h=s.snapGrid[d-1],m=s.snapGrid[d];p-h<=(m-h)*r&&(a-=s.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,s.slidesGrid.length-1),s.slideTo(a,t,e,n)}function pC(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let s=t.clickedIndex,a;const l=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;a=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<t.loopedSlides-r/2||s>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),s=t.getSlideIndex(Un(n,`${l}[data-swiper-slide-index="${a}"]`)[0]),Df(()=>{t.slideTo(s)})):t.slideTo(s):s>t.slides.length-r?(t.loopFix(),s=t.getSlideIndex(Un(n,`${l}[data-swiper-slide-index="${a}"]`)[0]),Df(()=>{t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}var fC={slideTo:oC,slideToLoop:aC,slideNext:lC,slidePrev:cC,slideReset:uC,slideToClosest:dC,slideToClickedSlide:pC};function hC(t){const e=this,{params:n,slidesEl:r}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;const s=()=>{Un(r,`.${n.slideClass}, swiper-slide`).forEach((x,y)=>{x.setAttribute("data-swiper-slide-index",y)})},a=e.grid&&n.grid&&n.grid.rows>1,l=n.slidesPerGroup*(a?n.grid.rows:1),d=e.slides.length%l!==0,p=a&&e.slides.length%n.grid.rows!==0,h=m=>{for(let x=0;x<m;x+=1){const y=e.isElement?Rc("swiper-slide",[n.slideBlankClass]):Rc("div",[n.slideClass,n.slideBlankClass]);e.slidesEl.append(y)}};if(d){if(n.loopAddBlankSlides){const m=l-e.slides.length%l;h(m),e.recalcSlides(),e.updateSlides()}else Ic("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(p){if(n.loopAddBlankSlides){const m=n.grid.rows-e.slides.length%n.grid.rows;h(m),e.recalcSlides(),e.updateSlides()}else Ic("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function mC(t){let{slideRealIndex:e,slideTo:n=!0,direction:r,setTranslate:s,activeSlideIndex:a,byController:l,byMousewheel:d}=t===void 0?{}:t;const p=this;if(!p.params.loop)return;p.emit("beforeLoopFix");const{slides:h,allowSlidePrev:m,allowSlideNext:x,slidesEl:y,params:w}=p,{centeredSlides:b}=w;if(p.allowSlidePrev=!0,p.allowSlideNext=!0,p.virtual&&w.virtual.enabled){n&&(!w.centeredSlides&&p.snapIndex===0?p.slideTo(p.virtual.slides.length,0,!1,!0):w.centeredSlides&&p.snapIndex<w.slidesPerView?p.slideTo(p.virtual.slides.length+p.snapIndex,0,!1,!0):p.snapIndex===p.snapGrid.length-1&&p.slideTo(p.virtual.slidesBefore,0,!1,!0)),p.allowSlidePrev=m,p.allowSlideNext=x,p.emit("loopFix");return}let _=w.slidesPerView;_==="auto"?_=p.slidesPerViewDynamic():(_=Math.ceil(parseFloat(w.slidesPerView,10)),b&&_%2===0&&(_=_+1));const C=w.slidesPerGroupAuto?_:w.slidesPerGroup;let E=C;E%C!==0&&(E+=C-E%C),E+=w.loopAdditionalSlides,p.loopedSlides=E;const S=p.grid&&w.grid&&w.grid.rows>1;h.length<_+E?Ic("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):S&&w.grid.fill==="row"&&Ic("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const j=[],I=[];let R=p.activeIndex;typeof a>"u"?a=p.getSlideIndex(h.find(J=>J.classList.contains(w.slideActiveClass))):R=a;const z=r==="next"||!r,N=r==="prev"||!r;let L=0,O=0;const B=S?Math.ceil(h.length/w.grid.rows):h.length,X=(S?h[a].column:a)+(b&&typeof s>"u"?-_/2+.5:0);if(X<E){L=Math.max(E-X,C);for(let J=0;J<E-X;J+=1){const ne=J-Math.floor(J/B)*B;if(S){const ie=B-ne-1;for(let ce=h.length-1;ce>=0;ce-=1)h[ce].column===ie&&j.push(ce)}else j.push(B-ne-1)}}else if(X+_>B-E){O=Math.max(X-(B-E*2),C);for(let J=0;J<O;J+=1){const ne=J-Math.floor(J/B)*B;S?h.forEach((ie,ce)=>{ie.column===ne&&I.push(ce)}):I.push(ne)}}if(p.__preventObserver__=!0,requestAnimationFrame(()=>{p.__preventObserver__=!1}),N&&j.forEach(J=>{h[J].swiperLoopMoveDOM=!0,y.prepend(h[J]),h[J].swiperLoopMoveDOM=!1}),z&&I.forEach(J=>{h[J].swiperLoopMoveDOM=!0,y.append(h[J]),h[J].swiperLoopMoveDOM=!1}),p.recalcSlides(),w.slidesPerView==="auto"?p.updateSlides():S&&(j.length>0&&N||I.length>0&&z)&&p.slides.forEach((J,ne)=>{p.grid.updateSlide(ne,J,p.slides)}),w.watchSlidesProgress&&p.updateSlidesOffset(),n){if(j.length>0&&N){if(typeof e>"u"){const J=p.slidesGrid[R],ie=p.slidesGrid[R+L]-J;d?p.setTranslate(p.translate-ie):(p.slideTo(R+Math.ceil(L),0,!1,!0),s&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-ie,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-ie))}else if(s){const J=S?j.length/w.grid.rows:j.length;p.slideTo(p.activeIndex+J,0,!1,!0),p.touchEventsData.currentTranslate=p.translate}}else if(I.length>0&&z)if(typeof e>"u"){const J=p.slidesGrid[R],ie=p.slidesGrid[R-O]-J;d?p.setTranslate(p.translate-ie):(p.slideTo(R-O,0,!1,!0),s&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-ie,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-ie))}else{const J=S?I.length/w.grid.rows:I.length;p.slideTo(p.activeIndex-J,0,!1,!0)}}if(p.allowSlidePrev=m,p.allowSlideNext=x,p.controller&&p.controller.control&&!l){const J={slideRealIndex:e,direction:r,setTranslate:s,activeSlideIndex:a,byController:!0};Array.isArray(p.controller.control)?p.controller.control.forEach(ne=>{!ne.destroyed&&ne.params.loop&&ne.loopFix({...J,slideTo:ne.params.slidesPerView===w.slidesPerView?n:!1})}):p.controller.control instanceof p.constructor&&p.controller.control.params.loop&&p.controller.control.loopFix({...J,slideTo:p.controller.control.params.slidesPerView===w.slidesPerView?n:!1})}p.emit("loopFix")}function gC(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const r=[];t.slides.forEach(s=>{const a=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;r[a]=s}),t.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),r.forEach(s=>{n.append(s)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var xC={loopCreate:hC,loopFix:mC,loopDestroy:gC};function vC(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function yC(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var wC={setGrabCursor:vC,unsetGrabCursor:yC};function bC(t,e){e===void 0&&(e=this);function n(r){if(!r||r===Hn()||r===Nt())return null;r.assignedSlot&&(r=r.assignedSlot);const s=r.closest(t);return!s&&!r.getRootNode?null:s||n(r.getRootNode().host)}return n(e)}function Dx(t,e,n){const r=Nt(),{params:s}=t,a=s.edgeSwipeDetection,l=s.edgeSwipeThreshold;return a&&(n<=l||n>=r.innerWidth-l)?a==="prevent"?(e.preventDefault(),!0):!1:!0}function _C(t){const e=this,n=Hn();let r=t;r.originalEvent&&(r=r.originalEvent);const s=e.touchEventsData;if(r.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==r.pointerId)return;s.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(s.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Dx(e,r,r.targetTouches[0].pageX);return}const{params:a,touches:l,enabled:d}=e;if(!d||!a.simulateTouch&&r.pointerType==="mouse"||e.animating&&a.preventInteractionOnTransition)return;!e.animating&&a.cssMode&&a.loop&&e.loopFix();let p=r.target;if(a.touchEventsTarget==="wrapper"&&!Rj(p,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||s.isTouched&&s.isMoved)return;const h=!!a.noSwipingClass&&a.noSwipingClass!=="",m=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&m&&(p=m[0]);const x=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,y=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(y?bC(x,p):p.closest(x))){e.allowClick=!0;return}if(a.swipeHandler&&!p.closest(a.swipeHandler))return;l.currentX=r.pageX,l.currentY=r.pageY;const w=l.currentX,b=l.currentY;if(!Dx(e,r,w))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=w,l.startY=b,s.touchStartTime=Tc(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,a.threshold>0&&(s.allowThresholdMove=!1);let _=!0;p.matches(s.focusableElements)&&(_=!1,p.nodeName==="SELECT"&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==p&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!p.matches(s.focusableElements))&&n.activeElement.blur();const C=_&&e.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||C)&&!p.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&e.freeMode&&e.animating&&!a.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function SC(t){const e=Hn(),n=this,r=n.touchEventsData,{params:s,touches:a,rtlTranslate:l,enabled:d}=n;if(!d||!s.simulateTouch&&t.pointerType==="mouse")return;let p=t;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(r.touchId!==null||p.pointerId!==r.pointerId))return;let h;if(p.type==="touchmove"){if(h=[...p.changedTouches].find(R=>R.identifier===r.touchId),!h||h.identifier!==r.touchId)return}else h=p;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",p);return}const m=h.pageX,x=h.pageY;if(p.preventedByNestedSwiper){a.startX=m,a.startY=x;return}if(!n.allowTouchMove){p.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:m,startY:x,currentX:m,currentY:x}),r.touchStartTime=Tc());return}if(s.touchReleaseOnEdges&&!s.loop){if(n.isVertical()){if(x<a.startY&&n.translate<=n.maxTranslate()||x>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(m<a.startX&&n.translate<=n.maxTranslate()||m>a.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==p.target&&p.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&p.target===e.activeElement&&p.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",p),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=m,a.currentY=x;const y=a.currentX-a.startX,w=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(y**2+w**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let R;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:y*y+w*w>=25&&(R=Math.atan2(Math.abs(w),Math.abs(y))*180/Math.PI,r.isScrolling=n.isHorizontal()?R>s.touchAngle:90-R>s.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",p),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||p.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!s.cssMode&&p.cancelable&&p.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&p.stopPropagation();let b=n.isHorizontal()?y:w,_=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;s.oneWayMovement&&(b=Math.abs(b)*(l?1:-1),_=Math.abs(_)*(l?1:-1)),a.diff=b,b*=s.touchRatio,l&&(b=-b,_=-_);const C=n.touchesDirection;n.swipeDirection=b>0?"prev":"next",n.touchesDirection=_>0?"prev":"next";const E=n.params.loop&&!s.cssMode,S=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(E&&S&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const R=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(R)}r.allowMomentumBounce=!1,s.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",p)}if(new Date().getTime(),s._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&C!==n.touchesDirection&&E&&S&&Math.abs(b)>=1){Object.assign(a,{startX:m,startY:x,currentX:m,currentY:x,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",p),r.isMoved=!0,r.currentTranslate=b+r.startTranslate;let j=!0,I=s.resistanceRatio;if(s.touchReleaseOnEdges&&(I=0),b>0?(E&&S&&r.allowThresholdMove&&r.currentTranslate>(s.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(s.slidesPerView!=="auto"&&n.slides.length-s.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(j=!1,s.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+b)**I))):b<0&&(E&&S&&r.allowThresholdMove&&r.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(s.slidesPerView!=="auto"&&n.slides.length-s.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(s.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(j=!1,s.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-b)**I))),j&&(p.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),s.threshold>0)if(Math.abs(b)>s.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function kC(t){const e=this,n=e.touchEventsData;let r=t;r.originalEvent&&(r=r.originalEvent);let s;if(r.type==="touchend"||r.type==="touchcancel"){if(s=[...r.changedTouches].find(R=>R.identifier===n.touchId),!s||s.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;s=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:l,touches:d,rtlTranslate:p,slidesGrid:h,enabled:m}=e;if(!m||!l.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&l.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}l.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const x=Tc(),y=x-n.touchStartTime;if(e.allowClick){const R=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(R&&R[0]||r.target,R),e.emit("tap click",r),y<300&&x-n.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Tc(),Df(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||d.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let w;if(l.followFinger?w=p?e.translate:-e.translate:w=-n.currentTranslate,l.cssMode)return;if(l.freeMode&&l.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:w});return}const b=w>=-e.maxTranslate()&&!e.params.loop;let _=0,C=e.slidesSizesGrid[0];for(let R=0;R<h.length;R+=R<l.slidesPerGroupSkip?1:l.slidesPerGroup){const z=R<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;typeof h[R+z]<"u"?(b||w>=h[R]&&w<h[R+z])&&(_=R,C=h[R+z]-h[R]):(b||w>=h[R])&&(_=R,C=h[h.length-1]-h[h.length-2])}let E=null,S=null;l.rewind&&(e.isBeginning?S=l.virtual&&l.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(E=0));const j=(w-h[_])/C,I=_<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;if(y>l.longSwipesMs){if(!l.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(j>=l.longSwipesRatio?e.slideTo(l.rewind&&e.isEnd?E:_+I):e.slideTo(_)),e.swipeDirection==="prev"&&(j>1-l.longSwipesRatio?e.slideTo(_+I):S!==null&&j<0&&Math.abs(j)>l.longSwipesRatio?e.slideTo(S):e.slideTo(_))}else{if(!l.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(_+I):e.slideTo(_):(e.swipeDirection==="next"&&e.slideTo(E!==null?E:_+I),e.swipeDirection==="prev"&&e.slideTo(S!==null?S:_))}}function Fx(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:s,snapGrid:a}=t,l=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const d=l&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!d?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!l?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=s,t.allowSlideNext=r,t.params.watchOverflow&&a!==t.snapGrid&&t.checkOverflow()}function jC(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function CC(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let s;const a=t.maxTranslate()-t.minTranslate();a===0?s=0:s=(t.translate-t.minTranslate())/a,s!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function EC(t){const e=this;nc(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function TC(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const c1=(t,e)=>{const n=Hn(),{params:r,el:s,wrapperEl:a,device:l}=t,d=!!r.nested,p=e==="on"?"addEventListener":"removeEventListener",h=e;!s||typeof s=="string"||(n[p]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:d}),s[p]("touchstart",t.onTouchStart,{passive:!1}),s[p]("pointerdown",t.onTouchStart,{passive:!1}),n[p]("touchmove",t.onTouchMove,{passive:!1,capture:d}),n[p]("pointermove",t.onTouchMove,{passive:!1,capture:d}),n[p]("touchend",t.onTouchEnd,{passive:!0}),n[p]("pointerup",t.onTouchEnd,{passive:!0}),n[p]("pointercancel",t.onTouchEnd,{passive:!0}),n[p]("touchcancel",t.onTouchEnd,{passive:!0}),n[p]("pointerout",t.onTouchEnd,{passive:!0}),n[p]("pointerleave",t.onTouchEnd,{passive:!0}),n[p]("contextmenu",t.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&s[p]("click",t.onClick,!0),r.cssMode&&a[p]("scroll",t.onScroll),r.updateOnWindowResize?t[h](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",Fx,!0):t[h]("observerUpdate",Fx,!0),s[p]("load",t.onLoad,{capture:!0}))};function IC(){const t=this,{params:e}=t;t.onTouchStart=_C.bind(t),t.onTouchMove=SC.bind(t),t.onTouchEnd=kC.bind(t),t.onDocumentTouchStart=TC.bind(t),e.cssMode&&(t.onScroll=CC.bind(t)),t.onClick=jC.bind(t),t.onLoad=EC.bind(t),c1(t,"on")}function RC(){c1(this,"off")}var $C={attachEvents:IC,detachEvents:RC};const Bx=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function PC(){const t=this,{realIndex:e,initialized:n,params:r,el:s}=t,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const l=Hn(),d=r.breakpointsBase==="window"||!r.breakpointsBase?r.breakpointsBase:"container",p=["window","container"].includes(r.breakpointsBase)||!r.breakpointsBase?t.el:l.querySelector(r.breakpointsBase),h=t.getBreakpoint(a,d,p);if(!h||t.currentBreakpoint===h)return;const x=(h in a?a[h]:void 0)||t.originalParams,y=Bx(t,r),w=Bx(t,x),b=t.params.grabCursor,_=x.grabCursor,C=r.enabled;y&&!w?(s.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),t.emitContainerClasses()):!y&&w&&(s.classList.add(`${r.containerModifierClass}grid`),(x.grid.fill&&x.grid.fill==="column"||!x.grid.fill&&r.grid.fill==="column")&&s.classList.add(`${r.containerModifierClass}grid-column`),t.emitContainerClasses()),b&&!_?t.unsetGrabCursor():!b&&_&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(z=>{if(typeof x[z]>"u")return;const N=r[z]&&r[z].enabled,L=x[z]&&x[z].enabled;N&&!L&&t[z].disable(),!N&&L&&t[z].enable()});const E=x.direction&&x.direction!==r.direction,S=r.loop&&(x.slidesPerView!==r.slidesPerView||E),j=r.loop;E&&n&&t.changeDirection(),en(t.params,x);const I=t.params.enabled,R=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),C&&!I?t.disable():!C&&I&&t.enable(),t.currentBreakpoint=h,t.emit("_beforeBreakpoint",x),n&&(S?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!j&&R?(t.loopCreate(e),t.updateSlides()):j&&!R&&t.loopDestroy()),t.emit("breakpoint",x)}function zC(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let r=!1;const s=Nt(),a=e==="window"?s.innerHeight:n.clientHeight,l=Object.keys(t).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const p=parseFloat(d.substr(1));return{value:a*p,point:d}}return{value:d,point:d}});l.sort((d,p)=>parseInt(d.value,10)-parseInt(p.value,10));for(let d=0;d<l.length;d+=1){const{point:p,value:h}=l[d];e==="window"?s.matchMedia(`(min-width: ${h}px)`).matches&&(r=p):h<=n.clientWidth&&(r=p)}return r||"max"}var MC={setBreakpoint:PC,getBreakpoint:zC};function NC(t,e){const n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(s=>{r[s]&&n.push(e+s)}):typeof r=="string"&&n.push(e+r)}),n}function OC(){const t=this,{classNames:e,params:n,rtl:r,el:s,device:a}=t,l=NC(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...l),s.classList.add(...e),t.emitContainerClasses()}function LC(){const t=this,{el:e,classNames:n}=t;!e||typeof e=="string"||(e.classList.remove(...n),t.emitContainerClasses())}var AC={addClasses:OC,removeClasses:LC};function DC(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){const s=t.slides.length-1,a=t.slidesGrid[s]+t.slidesSizesGrid[s]+r*2;t.isLocked=t.size>a}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var FC={checkOverflow:DC},Vf={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function BC(t,e){return function(r){r===void 0&&(r={});const s=Object.keys(r)[0],a=r[s];if(typeof a!="object"||a===null){en(e,r);return}if(t[s]===!0&&(t[s]={enabled:!0}),s==="navigation"&&t[s]&&t[s].enabled&&!t[s].prevEl&&!t[s].nextEl&&(t[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&t[s]&&t[s].enabled&&!t[s].el&&(t[s].auto=!0),!(s in t&&"enabled"in a)){en(e,r);return}typeof t[s]=="object"&&!("enabled"in t[s])&&(t[s].enabled=!0),t[s]||(t[s]={enabled:!1}),en(e,r)}}const Pp={eventsEmitter:Aj,update:qj,translate:tC,transition:sC,slide:fC,loop:xC,grabCursor:wC,events:$C,breakpoints:MC,checkOverflow:FC,classes:AC},zp={};let Mh=class ar{constructor(){let e,n;for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?n=s[0]:[e,n]=s,n||(n={}),n=en({},n),e&&!n.el&&(n.el=e);const l=Hn();if(n.el&&typeof n.el=="string"&&l.querySelectorAll(n.el).length>1){const m=[];return l.querySelectorAll(n.el).forEach(x=>{const y=en({},n,{el:x});m.push(new ar(y))}),m}const d=this;d.__swiper__=!0,d.support=s1(),d.device=o1({userAgent:n.userAgent}),d.browser=a1(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],n.modules&&Array.isArray(n.modules)&&d.modules.push(...n.modules);const p={};d.modules.forEach(m=>{m({params:n,swiper:d,extendParams:BC(n,p),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const h=en({},Vf,p);return d.params=en({},h,zp,n),d.originalParams=en({},d.params),d.passedParams=en({},n),d.params&&d.params.on&&Object.keys(d.params.on).forEach(m=>{d.on(m,d.params.on[m])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:r}=this,s=Un(n,`.${r.slideClass}, swiper-slide`),a=$c(s[0]);return $c(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===e))}recalcSlides(){const e=this,{slidesEl:n,params:r}=e;e.slides=Un(n,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const r=this;e=Math.min(Math.max(e,0),1);const s=r.minTranslate(),l=(r.maxTranslate()-s)*e+s;r.translateTo(l,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(r=>{const s=e.getSlideClasses(r);n.push({slideEl:r,classNames:s}),e.emit("_slideClass",r,s)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const r=this,{params:s,slides:a,slidesGrid:l,slidesSizesGrid:d,size:p,activeIndex:h}=r;let m=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let x=a[h]?Math.ceil(a[h].swiperSlideSize):0,y;for(let w=h+1;w<a.length;w+=1)a[w]&&!y&&(x+=Math.ceil(a[w].swiperSlideSize),m+=1,x>p&&(y=!0));for(let w=h-1;w>=0;w-=1)a[w]&&!y&&(x+=a[w].swiperSlideSize,m+=1,x>p&&(y=!0))}else if(e==="current")for(let x=h+1;x<a.length;x+=1)(n?l[x]+d[x]-l[h]<p:l[x]-l[h]<p)&&(m+=1);else for(let x=h-1;x>=0;x-=1)l[h]-l[x]<p&&(m+=1);return m}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&nc(e,l)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const l=e.rtlTranslate?e.translate*-1:e.translate,d=Math.min(Math.max(l,e.maxTranslate()),e.minTranslate());e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}let a;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)s(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const l=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;a=e.slideTo(l.length-1,0,!1,!0)}else a=e.slideTo(e.activeIndex,0,!1,!0);a||s()}r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const r=this,s=r.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${s}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(a=>{e==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let r=e||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const s=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(s()):Un(r,s())[0];return!l&&n.params.createElements&&(l=Rc("div",n.params.wrapperClass),r.append(l),Un(r,`.${n.params.slideClass}`).forEach(d=>{l.append(d)})),Object.assign(n,{el:r,wrapperEl:l,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:l,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Ar(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Ar(r,"direction")==="rtl"),wrongRTL:Ar(l,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const s=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(a=>{a.complete?nc(n,a):a.addEventListener("load",l=>{nc(n,l.target)})}),Bf(n),n.initialized=!0,Bf(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const r=this,{params:s,el:a,wrapperEl:l,slides:d}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),s.loop&&r.loopDestroy(),n&&(r.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),l&&l.removeAttribute("style"),d&&d.length&&d.forEach(p=>{p.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(p=>{r.off(p)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),jj(r)),r.destroyed=!0),null}static extendDefaults(e){en(zp,e)}static get extendedDefaults(){return zp}static get defaults(){return Vf}static installModule(e){ar.prototype.__modules__||(ar.prototype.__modules__=[]);const n=ar.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>ar.installModule(n)),ar):(ar.installModule(e),ar)}};Object.keys(Pp).forEach(t=>{Object.keys(Pp[t]).forEach(e=>{Mh.prototype[e]=Pp[t][e]})});Mh.use([Oj,Lj]);const u1=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ii(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function hs(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof t[r]>"u"?t[r]=e[r]:Ii(e[r])&&Ii(t[r])&&Object.keys(e[r]).length>0?e[r].__swiper__?t[r]=e[r]:hs(t[r],e[r]):t[r]=e[r]})}function d1(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function p1(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function f1(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function h1(t){t===void 0&&(t="");const e=t.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function VC(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function WC(t){let{swiper:e,slides:n,passedParams:r,changedParams:s,nextEl:a,prevEl:l,scrollbarEl:d,paginationEl:p}=t;const h=s.filter(O=>O!=="children"&&O!=="direction"&&O!=="wrapperClass"),{params:m,pagination:x,navigation:y,scrollbar:w,virtual:b,thumbs:_}=e;let C,E,S,j,I,R,z,N;s.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&!r.thumbs.swiper.destroyed&&m.thumbs&&(!m.thumbs.swiper||m.thumbs.swiper.destroyed)&&(C=!0),s.includes("controller")&&r.controller&&r.controller.control&&m.controller&&!m.controller.control&&(E=!0),s.includes("pagination")&&r.pagination&&(r.pagination.el||p)&&(m.pagination||m.pagination===!1)&&x&&!x.el&&(S=!0),s.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||d)&&(m.scrollbar||m.scrollbar===!1)&&w&&!w.el&&(j=!0),s.includes("navigation")&&r.navigation&&(r.navigation.prevEl||l)&&(r.navigation.nextEl||a)&&(m.navigation||m.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(I=!0);const L=O=>{e[O]&&(e[O].destroy(),O==="navigation"?(e.isElement&&(e[O].prevEl.remove(),e[O].nextEl.remove()),m[O].prevEl=void 0,m[O].nextEl=void 0,e[O].prevEl=void 0,e[O].nextEl=void 0):(e.isElement&&e[O].el.remove(),m[O].el=void 0,e[O].el=void 0))};s.includes("loop")&&e.isElement&&(m.loop&&!r.loop?R=!0:!m.loop&&r.loop?z=!0:N=!0),h.forEach(O=>{if(Ii(m[O])&&Ii(r[O]))Object.assign(m[O],r[O]),(O==="navigation"||O==="pagination"||O==="scrollbar")&&"enabled"in r[O]&&!r[O].enabled&&L(O);else{const B=r[O];(B===!0||B===!1)&&(O==="navigation"||O==="pagination"||O==="scrollbar")?B===!1&&L(O):m[O]=r[O]}}),h.includes("controller")&&!E&&e.controller&&e.controller.control&&m.controller&&m.controller.control&&(e.controller.control=m.controller.control),s.includes("children")&&n&&b&&m.virtual.enabled?(b.slides=n,b.update(!0)):s.includes("virtual")&&b&&m.virtual.enabled&&(n&&(b.slides=n),b.update(!0)),s.includes("children")&&n&&m.loop&&(N=!0),C&&_.init()&&_.update(!0),E&&(e.controller.control=m.controller.control),S&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),e.el.appendChild(p)),p&&(m.pagination.el=p),x.init(),x.render(),x.update()),j&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),e.el.appendChild(d)),d&&(m.scrollbar.el=d),w.init(),w.updateSize(),w.setTranslate()),I&&(e.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=e.hostEl.constructor.nextButtonSvg,a.part.add("button-next"),e.el.appendChild(a)),(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-prev"),l.innerHTML=e.hostEl.constructor.prevButtonSvg,l.part.add("button-prev"),e.el.appendChild(l))),a&&(m.navigation.nextEl=a),l&&(m.navigation.prevEl=l),y.init(),y.update()),s.includes("allowSlideNext")&&(e.allowSlideNext=r.allowSlideNext),s.includes("allowSlidePrev")&&(e.allowSlidePrev=r.allowSlidePrev),s.includes("direction")&&e.changeDirection(r.direction,!1),(R||N)&&e.loopDestroy(),(z||N)&&e.loopCreate(),e.update()}function UC(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},r={},s={};hs(n,Vf),n._emitClasses=!0,n.init=!1;const a={},l=u1.map(p=>p.replace(/_/,"")),d=Object.assign({},t);return Object.keys(d).forEach(p=>{typeof t[p]>"u"||(l.indexOf(p)>=0?Ii(t[p])?(n[p]={},s[p]={},hs(n[p],t[p]),hs(s[p],t[p])):(n[p]=t[p],s[p]=t[p]):p.search(/on[A-Z]/)===0&&typeof t[p]=="function"?e?r[`${p[2].toLowerCase()}${p.substr(3)}`]=t[p]:n.on[`${p[2].toLowerCase()}${p.substr(3)}`]=t[p]:a[p]=t[p])}),["navigation","pagination","scrollbar"].forEach(p=>{n[p]===!0&&(n[p]={}),n[p]===!1&&delete n[p]}),{params:n,passedParams:s,rest:a,events:r}}function GC(t,e){let{el:n,nextEl:r,prevEl:s,paginationEl:a,scrollbarEl:l,swiper:d}=t;d1(e)&&r&&s&&(d.params.navigation.nextEl=r,d.originalParams.navigation.nextEl=r,d.params.navigation.prevEl=s,d.originalParams.navigation.prevEl=s),p1(e)&&a&&(d.params.pagination.el=a,d.originalParams.pagination.el=a),f1(e)&&l&&(d.params.scrollbar.el=l,d.originalParams.scrollbar.el=l),d.init(n)}function HC(t,e,n,r,s){const a=[];if(!e)return a;const l=p=>{a.indexOf(p)<0&&a.push(p)};if(n&&r){const p=r.map(s),h=n.map(s);p.join("")!==h.join("")&&l("children"),r.length!==n.length&&l("children")}return u1.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in t&&p in e)if(Ii(t[p])&&Ii(e[p])){const h=Object.keys(t[p]),m=Object.keys(e[p]);h.length!==m.length?l(p):(h.forEach(x=>{t[p][x]!==e[p][x]&&l(p)}),m.forEach(x=>{t[p][x]!==e[p][x]&&l(p)}))}else t[p]!==e[p]&&l(p)}),a}const YC=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Pc(){return Pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pc.apply(this,arguments)}function m1(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function g1(t){const e=[];return _e.Children.toArray(t).forEach(n=>{m1(n)?e.push(n):n.props&&n.props.children&&g1(n.props.children).forEach(r=>e.push(r))}),e}function JC(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return _e.Children.toArray(t).forEach(r=>{if(m1(r))e.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const s=g1(r.props.children);s.length>0?s.forEach(a=>e.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:e,slots:n}}function qC(t,e,n){if(!n)return null;const r=m=>{let x=m;return m<0?x=e.length+m:x>=e.length&&(x=x-e.length),x},s=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:l}=n,d=t.params.loop?-e.length:0,p=t.params.loop?e.length*2:e.length,h=[];for(let m=d;m<p;m+=1)m>=a&&m<=l&&h.push(e[r(m)]);return h.map((m,x)=>_e.cloneElement(m,{swiper:t,style:s,key:m.props.virtualIndex||m.key||`slide-${x}`}))}function Fo(t,e){return typeof window>"u"?$.useEffect(t,e):$.useLayoutEffect(t,e)}const Vx=$.createContext(null),QC=$.createContext(null),wn=$.forwardRef(function(t,e){let{className:n,tag:r="div",wrapperTag:s="div",children:a,onSwiper:l,...d}=t===void 0?{}:t,p=!1;const[h,m]=$.useState("swiper"),[x,y]=$.useState(null),[w,b]=$.useState(!1),_=$.useRef(!1),C=$.useRef(null),E=$.useRef(null),S=$.useRef(null),j=$.useRef(null),I=$.useRef(null),R=$.useRef(null),z=$.useRef(null),N=$.useRef(null),{params:L,passedParams:O,rest:B,events:Y}=UC(d),{slides:X,slots:J}=JC(a),ne=()=>{b(!w)};Object.assign(L.on,{_containerClasses(ee,Q){m(Q)}});const ie=()=>{Object.assign(L.on,Y),p=!0;const ee={...L};if(delete ee.wrapperClass,E.current=new Mh(ee),E.current.virtual&&E.current.params.virtual.enabled){E.current.virtual.slides=X;const Q={cache:!1,slides:X,renderExternal:y,renderExternalUpdate:!1};hs(E.current.params.virtual,Q),hs(E.current.originalParams.virtual,Q)}};C.current||ie(),E.current&&E.current.on("_beforeBreakpoint",ne);const ce=()=>{p||!Y||!E.current||Object.keys(Y).forEach(ee=>{E.current.on(ee,Y[ee])})},pe=()=>{!Y||!E.current||Object.keys(Y).forEach(ee=>{E.current.off(ee,Y[ee])})};$.useEffect(()=>()=>{E.current&&E.current.off("_beforeBreakpoint",ne)}),$.useEffect(()=>{!_.current&&E.current&&(E.current.emitSlidesClasses(),_.current=!0)}),Fo(()=>{if(e&&(e.current=C.current),!!C.current)return E.current.destroyed&&ie(),GC({el:C.current,nextEl:I.current,prevEl:R.current,paginationEl:z.current,scrollbarEl:N.current,swiper:E.current},L),l&&!E.current.destroyed&&l(E.current),()=>{E.current&&!E.current.destroyed&&E.current.destroy(!0,!1)}},[]),Fo(()=>{ce();const ee=HC(O,S.current,X,j.current,Q=>Q.key);return S.current=O,j.current=X,ee.length&&E.current&&!E.current.destroyed&&WC({swiper:E.current,slides:X,passedParams:O,changedParams:ee,nextEl:I.current,prevEl:R.current,scrollbarEl:N.current,paginationEl:z.current}),()=>{pe()}}),Fo(()=>{YC(E.current)},[x]);function H(){return L.virtual?qC(E.current,X,x):X.map((ee,Q)=>_e.cloneElement(ee,{swiper:E.current,swiperSlideIndex:Q}))}return _e.createElement(r,Pc({ref:C,className:h1(`${h}${n?` ${n}`:""}`)},B),_e.createElement(QC.Provider,{value:E.current},J["container-start"],_e.createElement(s,{className:VC(L.wrapperClass)},J["wrapper-start"],H(),J["wrapper-end"]),d1(L)&&_e.createElement(_e.Fragment,null,_e.createElement("div",{ref:R,className:"swiper-button-prev"}),_e.createElement("div",{ref:I,className:"swiper-button-next"})),f1(L)&&_e.createElement("div",{ref:N,className:"swiper-scrollbar"}),p1(L)&&_e.createElement("div",{ref:z,className:"swiper-pagination"}),J["container-end"]))});wn.displayName="Swiper";const It=$.forwardRef(function(t,e){let{tag:n="div",children:r,className:s="",swiper:a,zoom:l,lazy:d,virtualIndex:p,swiperSlideIndex:h,...m}=t===void 0?{}:t;const x=$.useRef(null),[y,w]=$.useState("swiper-slide"),[b,_]=$.useState(!1);function C(I,R,z){R===x.current&&w(z)}Fo(()=>{if(typeof h<"u"&&(x.current.swiperSlideIndex=h),e&&(e.current=x.current),!(!x.current||!a)){if(a.destroyed){y!=="swiper-slide"&&w("swiper-slide");return}return a.on("_slideClass",C),()=>{a&&a.off("_slideClass",C)}}}),Fo(()=>{a&&x.current&&!a.destroyed&&w(a.getSlideClasses(x.current))},[a]);const E={isActive:y.indexOf("swiper-slide-active")>=0,isVisible:y.indexOf("swiper-slide-visible")>=0,isPrev:y.indexOf("swiper-slide-prev")>=0,isNext:y.indexOf("swiper-slide-next")>=0},S=()=>typeof r=="function"?r(E):r,j=()=>{_(!0)};return _e.createElement(n,Pc({ref:x,className:h1(`${y}${s?` ${s}`:""}`),"data-swiper-slide-index":p,onLoad:j},m),l&&_e.createElement(Vx.Provider,{value:E},_e.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof l=="number"?l:void 0},S(),d&&!b&&_e.createElement("div",{className:"swiper-lazy-preloader"}))),!l&&_e.createElement(Vx.Provider,{value:E},S(),d&&!b&&_e.createElement("div",{className:"swiper-lazy-preloader"})))});It.displayName="SwiperSlide";const x1=xa`
    font-size: ${t=>t.fontSize||"17px"};
    color: ${t=>t.color||"inherit"};
    margin: ${t=>t.margin||"0"};
    opacity: ${t=>t.opacity||"1"};
    overflow-wrap: anywhere;

    @media (max-width: 1024px) {
        font-size: ${t=>t.mobileFontSize||"17px"};
    }
    @media (max-width: 600px) {
        font-size: ${t=>t.mobileFontSize||"17px"};
    }
`,ZC=k.div`
    width: ${t=>t.width||"449px"};
    height: ${t=>t.height||"258px"};
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: ${t=>t.borderRadius||"10px"};

    @media (max-width: 1024px) {
        width: 90%;
        height: auto;
    }
    @media (max-width: 600px) {
        width: 100%;
        height: auto;
    }
`;k.img`
    width: ${t=>t.width||"449px"};
    height: ${t=>t.height||"188px"};
    object-fit: ${t=>t.objectFit||"cover"};
    border-radius: ${t=>t.borderRadius||"10px 10px 0 0"};

    @media (max-width: 1024px) {
        height: ${t=>t.mobileHeight||"200px"};
    }
    @media (max-width: 600px) {
        height: ${t=>t.mobileHeight||"180px"};
    }
`;const KC=k.div`
    width: ${t=>t.width||"449px"};
    height: ${t=>t.height||"70px"};
    position: absolute;
    bottom: 0;
    /* position: relative; */
    background: ${t=>t.bgColor||"#191919"};
    color: ${t=>t.textColor||"white"};
    padding: ${t=>t.padding||"12px 20px 16px 20px"};
    box-sizing: border-box;
    overflow: hidden;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: anywhere;
    text-align: left;

    @media (max-width: 1024px) {
        padding: ${t=>t.mobilePadding||"12px 16px"};
    }
    @media (max-width: 600px) {
        padding: ${t=>t.mobilePadding||"8px 14px"};
    }
`,XC=k.h3`
    ${x1}
    overflow: hidden;
    text-overflow: ellipsis;
`,eE=k.p`
    ${x1}
`;k.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 0.5rem;
    overflow: hidden;
    background: black;
    /* width: 100%;
    height: 100%;
    position: relative;
    border-radius: .5rem;
    overflow: hidden;
    background: black; */
`;k.iframe`
    width: 100%;
    height: 100%;
    border: none;
`;const tE=k.div`
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    position: relative;
`,nE=k.div`
    width: 50px;
    font-size: 0.75rem;
    padding: 1px 7px;
    background-color: red;
    /* border: 3px solid red; */
    color: white;
    border-radius: 0.3125rem;
    position: absolute;
    top: 0.625rem;
    left: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    text-shadow: gray 1px 1px 1px;
`,rE=({videoData:t})=>{const{url:e,title:n,broadcaster:r}=t,s=$.useRef(null),[a,l]=$.useState(!1);$.useEffect(()=>{const h=s.current;if(!h)return;const m=x=>{console.log("비디오 에러:",x)};return h.addEventListener("error",m),h.pause(),()=>{h.removeEventListener("error",m)}},[]);const d=()=>{l(!0);const h=s.current;if(h)if(h.readyState>=2)try{h.play().catch(m=>{console.log("비디오 재생 실패:",m)})}catch(m){console.log("비디오 재생 중 예외 발생:",m)}else{const m=()=>{a&&h.play().catch(x=>console.log("로드 후 재생 실패:",x)),h.removeEventListener("loadeddata",m)};h.addEventListener("loadeddata",m)}},p=()=>{l(!1);const h=s.current;h&&!h.paused&&h.pause()};return u.jsxs(ZC,{children:[u.jsxs(tE,{onMouseEnter:d,onMouseLeave:p,children:[u.jsx("video",{ref:s,muted:!0,loop:!0,playsInline:!0,preload:"metadata",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},width:"100%",height:"100%",src:e}),u.jsx(nE,{children:"LIVE"})]}),u.jsxs(KC,{children:[u.jsx(XC,{children:n}),u.jsx(eE,{children:r})]})]})},v1=({title:t})=>{const e=[{id:1,url:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/A_Close-Up_Of_A_Ball_Being_Kicked_fhd_1248072.mp4",title:"축구 하이라이트 - 볼 킥 장면",broadcaster:"KBS N"},{id:2,url:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Aerial_Hyper_Lapse_Video_Of_Sport_City_-_Manchester_UK_fhd_2395741.mp4",title:"맨체스터 스포츠 시티 하이퍼랩스",broadcaster:"Sky Sports"},{id:3,url:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Athletes_Practice_At_Swimming_Pool_fhd_1018922.mp4",title:"수영 국가대표 훈련 현장",broadcaster:"MBC Sports+"},{id:4,url:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Baseball_Game_In_The_Stadium_fhd_141965.mp4",title:"KBO 리그 - 잠실구장 현장",broadcaster:"KBS N SPORTS"},{id:5,url:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/Busy_Pedestrian_Street_fhd_172445.mp4",title:"서울로 7017 - 퇴근길 풍경",broadcaster:"tvN"}];return u.jsxs(iE,{children:[u.jsx(sE,{children:t}),u.jsx(oE,{breakpoints:{1024:{slidesPerView:4.2,spaceBetween:16},600:{slidesPerView:2.2,spaceBetween:14},0:{slidesPerView:1.2,spaceBetween:8}},children:e.map(n=>u.jsx(It,{children:u.jsx(rE,{videoData:n})},n.id))})]})},iE=k.section`
  width: 100%;
  margin: 0 auto;
  padding: 60px 0 60px 0;
  @media (max-width: 1024px) {
    padding: 40px 0 40px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0 30px 0;
  }
`,sE=k.h3`
  color: white;
  font-size: var(--title-xlarge-size); //32
  font-weight: var(--title-xlarge-weight); //800
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
  }
  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`,oE=k(wn)`
  padding-bottom: 20px;

  .swiper-slide {
    border-radius: 8px;
    width: auto;
    flex-shrink: 0;
  }
`,aE=k.section`
    display: flex;
    flex-direction: row;
    gap: 40px;
    height: 75vh;
    /* padding: 60px 0 60px 0; */
    @media (max-width: 1024px) {
        flex-direction: column;
        /* gap: 40px; */
        height: 95vh;
        padding: 40px 0 40px 0;
    }
    @media (max-width: 600px) {
        /* padding:0px 0 0px 0; */
        height: 100vh;
    }
`,lE=k.div`
    flex: 1;
    /* padding-left: 60px;  */
    display: flex;
    align-items: center;
`,cE=k.div`
    padding-left: 85px;
    flex: 3;
    overflow: hidden; /* 왼쪽으로 넘치는 슬라이드를 숨김 */
`,uE=k.h3`
    color: white;
    line-height: 1.5;
    margin: 0;
    font-size: var(--title-xlarge-size); //32
    font-weight: var(--title-xlarge-weight); //800
    @media (max-width: 1024px) {
        padding: 20px;
        font-size: var(--title-large-mobile); //24
        font-weight: var(--title-large-weigh); //700
    }
    @media (max-width: 600px) {
        font-size: var(--title-small-mobile); //17
        font-weight: var(--title-xsmall-weight); //700
    }
`,dE=k.div`
    position: relative;
    width: ${({$isMainSlide:t})=>t?"371.57px":"255.88px"};
    height: ${({$isMainSlide:t})=>t?"535.62px":"369.11px"};
    overflow: visible;
`,pE=k.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${({$isMainSlide:t})=>t?"200px 200px 8px 8px":"8px"};
    position: relative;
    transition: border-radius 1s ease;
    @media (max-width: 1024px) {
        width: 85%;
        height: 85%;
    }
    @media (max-width: 600px) {
        width: 65%;
        height: 65%;
    }
`,fE=k.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`,hE=k.div`
    position: absolute;
    width: 152.32px;
    height: 333.92px;

    /* top: 50%;
  left: 10px; */
    top: 79%;
    left: -72px;
    transform: translateY(-50%) rotate(-0.12deg);

    font-family: 'NanumSquare Neo', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 130px;
    line-height: 500px;

    background: linear-gradient(92.58deg, rgba(0, 0, 0, 0.5) 40.27%, rgba(255, 255, 255, 0.5) 89.41%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    -webkit-text-stroke: 5px white;
    z-index: 10;

    ${({$isMainSlide:t})=>t&&`
        font-size: 200px;
        line-height: 400px;
        -webkit-text-stroke: 5px white; /* 🎯 메인 숫자는 더 굵은 테두리 적용 */
    `}
    @media (max-width: 1024px) {
        width: 90%;
        top: 65%;
        left: -150px;
    }

    @media (max-width: 600px) {
        font-size: 120px;
        width: 60%;
        top: 50%;
        left: -100px;
    }
`,Wx=({image:t,rank:e,isMainSlide:n,id:r,mediaType:s="series"})=>{const a=s||"series";return u.jsx(mE,{to:`/detail/${a}/${r}`,children:u.jsxs(dE,{$isMainSlide:n,children:[u.jsx(hE,{$isMainSlide:n,children:e}),u.jsx(pE,{$isMainSlide:n,children:u.jsx(fE,{src:t,alt:`순위 ${e}`})})]})})},mE=k(lt)`
    text-decoration: none;
    color: inherit;
    display: block;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease;
    }
`;var Mp={exports:{}},Np={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux;function gE(){if(Ux)return Np;Ux=1;var t=Kc();function e(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var n=typeof Object.is=="function"?Object.is:e,r=t.useSyncExternalStore,s=t.useRef,a=t.useEffect,l=t.useMemo,d=t.useDebugValue;return Np.useSyncExternalStoreWithSelector=function(p,h,m,x,y){var w=s(null);if(w.current===null){var b={hasValue:!1,value:null};w.current=b}else b=w.current;w=l(function(){function C(R){if(!E){if(E=!0,S=R,R=x(R),y!==void 0&&b.hasValue){var z=b.value;if(y(z,R))return j=z}return j=R}if(z=j,n(S,R))return z;var N=x(R);return y!==void 0&&y(z,N)?(S=R,z):(S=R,j=N)}var E=!1,S,j,I=m===void 0?null:m;return[function(){return C(h())},I===null?void 0:function(){return C(I())}]},[h,m,x,y]);var _=r(p,w[0],w[1]);return a(function(){b.hasValue=!0,b.value=_},[_]),d(_),_},Np}var Gx;function xE(){return Gx||(Gx=1,Mp.exports=gE()),Mp.exports}var vE=xE();function yE(t){t()}function wE(){let t=null,e=null;return{clear(){t=null,e=null},notify(){yE(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const s=e={callback:n,next:null,prev:e};return s.prev?s.prev.next=s:t=s,function(){!r||t===null||(r=!1,s.next?s.next.prev=s.prev:e=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}var Hx={notify(){},get:()=>[]};function bE(t,e){let n,r=Hx,s=0,a=!1;function l(_){m();const C=r.subscribe(_);let E=!1;return()=>{E||(E=!0,C(),x())}}function d(){r.notify()}function p(){b.onStateChange&&b.onStateChange()}function h(){return a}function m(){s++,n||(n=t.subscribe(p),r=wE())}function x(){s--,n&&s===0&&(n(),n=void 0,r.clear(),r=Hx)}function y(){a||(a=!0,m())}function w(){a&&(a=!1,x())}const b={addNestedSub:l,notifyNestedSubs:d,handleChangeWrapper:p,isSubscribed:h,trySubscribe:y,tryUnsubscribe:w,getListeners:()=>r};return b}var _E=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SE=_E(),kE=()=>typeof navigator<"u"&&navigator.product==="ReactNative",jE=kE(),CE=()=>SE||jE?$.useLayoutEffect:$.useEffect,EE=CE(),Op=Symbol.for("react-redux-context"),Lp=typeof globalThis<"u"?globalThis:{};function TE(){if(!$.createContext)return{};const t=Lp[Op]??(Lp[Op]=new Map);let e=t.get($.createContext);return e||(e=$.createContext(null),t.set($.createContext,e)),e}var Jr=TE();function IE(t){const{children:e,context:n,serverState:r,store:s}=t,a=$.useMemo(()=>{const p=bE(s);return{store:s,subscription:p,getServerState:r?()=>r:void 0}},[s,r]),l=$.useMemo(()=>s.getState(),[s]);EE(()=>{const{subscription:p}=a;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),l!==s.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[a,l]);const d=n||Jr;return $.createElement(d.Provider,{value:a},e)}var RE=IE;function Nh(t=Jr){return function(){return $.useContext(t)}}var y1=Nh();function w1(t=Jr){const e=t===Jr?y1:Nh(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var $E=w1();function PE(t=Jr){const e=t===Jr?$E:w1(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var $t=PE(),zE=(t,e)=>t===e;function ME(t=Jr){const e=t===Jr?y1:Nh(t),n=(r,s={})=>{const{equalityFn:a=zE}=typeof s=="function"?{equalityFn:s}:s,l=e(),{store:d,subscription:p,getServerState:h}=l;$.useRef(!0);const m=$.useCallback({[r.name](y){return r(y)}}[r.name],[r]),x=vE.useSyncExternalStoreWithSelector(p.addNestedSub,d.getState,h||d.getState,m,a);return $.useDebugValue(x),x};return Object.assign(n,{withTypes:()=>n}),n}var $e=ME();function yt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var NE=typeof Symbol=="function"&&Symbol.observable||"@@observable",Yx=NE,Ap=()=>Math.random().toString(36).substring(7).split("").join("."),OE={INIT:`@@redux/INIT${Ap()}`,REPLACE:`@@redux/REPLACE${Ap()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ap()}`},zc=OE;function Oh(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function b1(t,e,n){if(typeof t!="function")throw new Error(yt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(yt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(yt(1));return n(b1)(t,e)}let r=t,s=e,a=new Map,l=a,d=0,p=!1;function h(){l===a&&(l=new Map,a.forEach((C,E)=>{l.set(E,C)}))}function m(){if(p)throw new Error(yt(3));return s}function x(C){if(typeof C!="function")throw new Error(yt(4));if(p)throw new Error(yt(5));let E=!0;h();const S=d++;return l.set(S,C),function(){if(E){if(p)throw new Error(yt(6));E=!1,h(),l.delete(S),a=null}}}function y(C){if(!Oh(C))throw new Error(yt(7));if(typeof C.type>"u")throw new Error(yt(8));if(typeof C.type!="string")throw new Error(yt(17));if(p)throw new Error(yt(9));try{p=!0,s=r(s,C)}finally{p=!1}return(a=l).forEach(S=>{S()}),C}function w(C){if(typeof C!="function")throw new Error(yt(10));r=C,y({type:zc.REPLACE})}function b(){const C=x;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(yt(11));function S(){const I=E;I.next&&I.next(m())}return S(),{unsubscribe:C(S)}},[Yx](){return this}}}return y({type:zc.INIT}),{dispatch:y,subscribe:x,getState:m,replaceReducer:w,[Yx]:b}}function LE(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:zc.INIT})>"u")throw new Error(yt(12));if(typeof n(void 0,{type:zc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(yt(13))})}function AE(t){const e=Object.keys(t),n={};for(let a=0;a<e.length;a++){const l=e[a];typeof t[l]=="function"&&(n[l]=t[l])}const r=Object.keys(n);let s;try{LE(n)}catch(a){s=a}return function(l={},d){if(s)throw s;let p=!1;const h={};for(let m=0;m<r.length;m++){const x=r[m],y=n[x],w=l[x],b=y(w,d);if(typeof b>"u")throw d&&d.type,new Error(yt(14));h[x]=b,p=p||b!==w}return p=p||r.length!==Object.keys(l).length,p?h:l}}function Mc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function DE(...t){return e=>(n,r)=>{const s=e(n,r);let a=()=>{throw new Error(yt(15))};const l={getState:s.getState,dispatch:(p,...h)=>a(p,...h)},d=t.map(p=>p(l));return a=Mc(...d)(s.dispatch),{...s,dispatch:a}}}function FE(t){return Oh(t)&&"type"in t&&typeof t.type=="string"}var _1=Symbol.for("immer-nothing"),Jx=Symbol.for("immer-draftable"),an=Symbol.for("immer-state");function In(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Cs=Object.getPrototypeOf;function Ri(t){return!!t&&!!t[an]}function hr(t){var e;return t?S1(t)||Array.isArray(t)||!!t[Jx]||!!((e=t.constructor)!=null&&e[Jx])||lu(t)||cu(t):!1}var BE=Object.prototype.constructor.toString();function S1(t){if(!t||typeof t!="object")return!1;const e=Cs(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===BE}function Nc(t,e){au(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function au(t){const e=t[an];return e?e.type_:Array.isArray(t)?1:lu(t)?2:cu(t)?3:0}function Wf(t,e){return au(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function k1(t,e,n){const r=au(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function VE(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function lu(t){return t instanceof Map}function cu(t){return t instanceof Set}function gi(t){return t.copy_||t.base_}function Uf(t,e){if(lu(t))return new Map(t);if(cu(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=S1(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[an];let s=Reflect.ownKeys(r);for(let a=0;a<s.length;a++){const l=s[a],d=r[l];d.writable===!1&&(d.writable=!0,d.configurable=!0),(d.get||d.set)&&(r[l]={configurable:!0,writable:!0,enumerable:d.enumerable,value:t[l]})}return Object.create(Cs(t),r)}else{const r=Cs(t);if(r!==null&&n)return{...t};const s=Object.create(r);return Object.assign(s,t)}}function Lh(t,e=!1){return uu(t)||Ri(t)||!hr(t)||(au(t)>1&&(t.set=t.add=t.clear=t.delete=WE),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Lh(r,!0))),t}function WE(){In(2)}function uu(t){return Object.isFrozen(t)}var UE={};function $i(t){const e=UE[t];return e||In(0,t),e}var na;function j1(){return na}function GE(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function qx(t,e){e&&($i("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Gf(t){Hf(t),t.drafts_.forEach(HE),t.drafts_=null}function Hf(t){t===na&&(na=t.parent_)}function Qx(t){return na=GE(na,t)}function HE(t){const e=t[an];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Zx(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[an].modified_&&(Gf(e),In(4)),hr(t)&&(t=Oc(e,t),e.parent_||Lc(e,t)),e.patches_&&$i("Patches").generateReplacementPatches_(n[an].base_,t,e.patches_,e.inversePatches_)):t=Oc(e,n,[]),Gf(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==_1?t:void 0}function Oc(t,e,n){if(uu(e))return e;const r=e[an];if(!r)return Nc(e,(s,a)=>Kx(t,r,e,s,a,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Lc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const s=r.copy_;let a=s,l=!1;r.type_===3&&(a=new Set(s),s.clear(),l=!0),Nc(a,(d,p)=>Kx(t,r,s,d,p,n,l)),Lc(t,s,!1),n&&t.patches_&&$i("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function Kx(t,e,n,r,s,a,l){if(Ri(s)){const d=a&&e&&e.type_!==3&&!Wf(e.assigned_,r)?a.concat(r):void 0,p=Oc(t,s,d);if(k1(n,r,p),Ri(p))t.canAutoFreeze_=!1;else return}else l&&n.add(s);if(hr(s)&&!uu(s)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Oc(t,s),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Lc(t,s)}}function Lc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Lh(e,n)}function YE(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:j1(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=r,a=Ah;n&&(s=[r],a=ra);const{revoke:l,proxy:d}=Proxy.revocable(s,a);return r.draft_=d,r.revoke_=l,d}var Ah={get(t,e){if(e===an)return t;const n=gi(t);if(!Wf(n,e))return JE(t,n,e);const r=n[e];return t.finalized_||!hr(r)?r:r===Dp(t.base_,e)?(Fp(t),t.copy_[e]=Jf(r,t)):r},has(t,e){return e in gi(t)},ownKeys(t){return Reflect.ownKeys(gi(t))},set(t,e,n){const r=C1(gi(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const s=Dp(gi(t),e),a=s==null?void 0:s[an];if(a&&a.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(VE(n,s)&&(n!==void 0||Wf(t.base_,e)))return!0;Fp(t),Yf(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Dp(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Fp(t),Yf(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=gi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){In(11)},getPrototypeOf(t){return Cs(t.base_)},setPrototypeOf(){In(12)}},ra={};Nc(Ah,(t,e)=>{ra[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ra.deleteProperty=function(t,e){return ra.set.call(this,t,e,void 0)};ra.set=function(t,e,n){return Ah.set.call(this,t[0],e,n,t[0])};function Dp(t,e){const n=t[an];return(n?gi(n):t)[e]}function JE(t,e,n){var s;const r=C1(e,n);return r?"value"in r?r.value:(s=r.get)==null?void 0:s.call(t.draft_):void 0}function C1(t,e){if(!(e in t))return;let n=Cs(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Cs(n)}}function Yf(t){t.modified_||(t.modified_=!0,t.parent_&&Yf(t.parent_))}function Fp(t){t.copy_||(t.copy_=Uf(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var qE=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const a=n;n=e;const l=this;return function(p=a,...h){return l.produce(p,m=>n.call(this,m,...h))}}typeof n!="function"&&In(6),r!==void 0&&typeof r!="function"&&In(7);let s;if(hr(e)){const a=Qx(this),l=Jf(e,void 0);let d=!0;try{s=n(l),d=!1}finally{d?Gf(a):Hf(a)}return qx(a,r),Zx(s,a)}else if(!e||typeof e!="object"){if(s=n(e),s===void 0&&(s=e),s===_1&&(s=void 0),this.autoFreeze_&&Lh(s,!0),r){const a=[],l=[];$i("Patches").generateReplacementPatches_(e,s,a,l),r(a,l)}return s}else In(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(l,...d)=>this.produceWithPatches(l,p=>e(p,...d));let r,s;return[this.produce(e,n,(l,d)=>{r=l,s=d}),r,s]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){hr(t)||In(8),Ri(t)&&(t=QE(t));const e=Qx(this),n=Jf(t,void 0);return n[an].isManual_=!0,Hf(e),n}finishDraft(t,e){const n=t&&t[an];(!n||!n.isManual_)&&In(9);const{scope_:r}=n;return qx(r,e),Zx(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const s=e[n];if(s.path.length===0&&s.op==="replace"){t=s.value;break}}n>-1&&(e=e.slice(n+1));const r=$i("Patches").applyPatches_;return Ri(t)?r(t,e):this.produce(t,s=>r(s,e))}};function Jf(t,e){const n=lu(t)?$i("MapSet").proxyMap_(t,e):cu(t)?$i("MapSet").proxySet_(t,e):YE(t,e);return(e?e.scope_:j1()).drafts_.push(n),n}function QE(t){return Ri(t)||In(10,t),E1(t)}function E1(t){if(!hr(t)||uu(t))return t;const e=t[an];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Uf(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Uf(t,!0);return Nc(n,(r,s)=>{k1(n,r,E1(s))}),e&&(e.finalized_=!1),n}var ln=new qE,T1=ln.produce;ln.produceWithPatches.bind(ln);ln.setAutoFreeze.bind(ln);ln.setUseStrictShallowCopy.bind(ln);ln.applyPatches.bind(ln);ln.createDraft.bind(ln);ln.finishDraft.bind(ln);function I1(t){return({dispatch:n,getState:r})=>s=>a=>typeof a=="function"?a(n,r,t):s(a)}var ZE=I1(),KE=I1,XE=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Mc:Mc.apply(null,arguments)},e5=t=>t&&typeof t.match=="function";function Bo(t,e){function n(...r){if(e){let s=e(...r);if(!s)throw new Error(fr(0));return{type:t,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>FE(r)&&r.type===t,n}var R1=class Oo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Oo.prototype)}static get[Symbol.species](){return Oo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Oo(...e[0].concat(this)):new Oo(...e.concat(this))}};function Xx(t){return hr(t)?T1(t,()=>{}):t}function ev(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function t5(t){return typeof t=="boolean"}var n5=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:s=!0,actionCreatorCheck:a=!0}=e??{};let l=new R1;return n&&(t5(n)?l.push(ZE):l.push(KE(n.extraArgument))),l},r5="RTK_autoBatch",tv=t=>e=>{setTimeout(e,t)},i5=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let s=!0,a=!1,l=!1;const d=new Set,p=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:tv(10):t.type==="callback"?t.queueNotification:tv(t.timeout),h=()=>{l=!1,a&&(a=!1,d.forEach(m=>m()))};return Object.assign({},r,{subscribe(m){const x=()=>s&&m(),y=r.subscribe(x);return d.add(m),()=>{y(),d.delete(m)}},dispatch(m){var x;try{return s=!((x=m==null?void 0:m.meta)!=null&&x[r5]),a=!s,a&&(l||(l=!0,p(h))),r.dispatch(m)}finally{s=!0}}})},s5=t=>function(n){const{autoBatch:r=!0}=n??{};let s=new R1(t);return r&&s.push(i5(typeof r=="object"?r:void 0)),s};function o5(t){const e=n5(),{reducer:n=void 0,middleware:r,devTools:s=!0,preloadedState:a=void 0,enhancers:l=void 0}=t||{};let d;if(typeof n=="function")d=n;else if(Oh(n))d=AE(n);else throw new Error(fr(1));let p;typeof r=="function"?p=r(e):p=e();let h=Mc;s&&(h=XE({trace:!1,...typeof s=="object"&&s}));const m=DE(...p),x=s5(m);let y=typeof l=="function"?l(x):x();const w=h(...y);return b1(d,a,w)}function $1(t){const e={},n=[];let r;const s={addCase(a,l){const d=typeof a=="string"?a:a.type;if(!d)throw new Error(fr(28));if(d in e)throw new Error(fr(29));return e[d]=l,s},addMatcher(a,l){return n.push({matcher:a,reducer:l}),s},addDefaultCase(a){return r=a,s}};return t(s),[e,n,r]}function a5(t){return typeof t=="function"}function l5(t,e){let[n,r,s]=$1(e),a;if(a5(t))a=()=>Xx(t());else{const d=Xx(t);a=()=>d}function l(d=a(),p){let h=[n[p.type],...r.filter(({matcher:m})=>m(p)).map(({reducer:m})=>m)];return h.filter(m=>!!m).length===0&&(h=[s]),h.reduce((m,x)=>{if(x)if(Ri(m)){const w=x(m,p);return w===void 0?m:w}else{if(hr(m))return T1(m,y=>x(y,p));{const y=x(m,p);if(y===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return m},d)}return l.getInitialState=a,l}var c5=(t,e)=>e5(t)?t.match(e):t(e);function u5(...t){return e=>t.some(n=>c5(n,e))}var d5="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",p5=(t=21)=>{let e="",n=t;for(;n--;)e+=d5[Math.random()*64|0];return e},f5=["name","message","stack","code"],Bp=class{constructor(t,e){mp(this,"_type");this.payload=t,this.meta=e}},nv=class{constructor(t,e){mp(this,"_type");this.payload=t,this.meta=e}},h5=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of f5)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Oe=(()=>{function t(e,n,r){const s=Bo(e+"/fulfilled",(p,h,m,x)=>({payload:p,meta:{...x||{},arg:m,requestId:h,requestStatus:"fulfilled"}})),a=Bo(e+"/pending",(p,h,m)=>({payload:void 0,meta:{...m||{},arg:h,requestId:p,requestStatus:"pending"}})),l=Bo(e+"/rejected",(p,h,m,x,y)=>({payload:x,error:(r&&r.serializeError||h5)(p||"Rejected"),meta:{...y||{},arg:m,requestId:h,rejectedWithValue:!!x,requestStatus:"rejected",aborted:(p==null?void 0:p.name)==="AbortError",condition:(p==null?void 0:p.name)==="ConditionError"}}));function d(p){return(h,m,x)=>{const y=r!=null&&r.idGenerator?r.idGenerator(p):p5(),w=new AbortController;let b,_;function C(S){_=S,w.abort()}const E=async function(){var I,R;let S;try{let z=(I=r==null?void 0:r.condition)==null?void 0:I.call(r,p,{getState:m,extra:x});if(g5(z)&&(z=await z),z===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const N=new Promise((L,O)=>{b=()=>{O({name:"AbortError",message:_||"Aborted"})},w.signal.addEventListener("abort",b)});h(a(y,p,(R=r==null?void 0:r.getPendingMeta)==null?void 0:R.call(r,{requestId:y,arg:p},{getState:m,extra:x}))),S=await Promise.race([N,Promise.resolve(n(p,{dispatch:h,getState:m,extra:x,requestId:y,signal:w.signal,abort:C,rejectWithValue:(L,O)=>new Bp(L,O),fulfillWithValue:(L,O)=>new nv(L,O)})).then(L=>{if(L instanceof Bp)throw L;return L instanceof nv?s(L.payload,y,p,L.meta):s(L,y,p)})])}catch(z){S=z instanceof Bp?l(null,y,p,z.payload,z.meta):l(z,y,p)}finally{b&&w.signal.removeEventListener("abort",b)}return r&&!r.dispatchConditionRejection&&l.match(S)&&S.meta.condition||h(S),S}();return Object.assign(E,{abort:C,requestId:y,arg:p,unwrap(){return E.then(m5)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:s,settled:u5(l,s),typePrefix:e})}return t.withTypes=()=>t,t})();function m5(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function g5(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var x5=Symbol.for("rtk-slice-createasyncthunk");function v5(t,e){return`${t}/${e}`}function y5({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[x5];return function(s){const{name:a,reducerPath:l=a}=s;if(!a)throw new Error(fr(11));const d=(typeof s.reducers=="function"?s.reducers(b5()):s.reducers)||{},p=Object.keys(d),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},m={addCase(j,I){const R=typeof j=="string"?j:j.type;if(!R)throw new Error(fr(12));if(R in h.sliceCaseReducersByType)throw new Error(fr(13));return h.sliceCaseReducersByType[R]=I,m},addMatcher(j,I){return h.sliceMatchers.push({matcher:j,reducer:I}),m},exposeAction(j,I){return h.actionCreators[j]=I,m},exposeCaseReducer(j,I){return h.sliceCaseReducersByName[j]=I,m}};p.forEach(j=>{const I=d[j],R={reducerName:j,type:v5(a,j),createNotation:typeof s.reducers=="function"};S5(I)?j5(R,I,m,e):_5(R,I,m)});function x(){const[j={},I=[],R=void 0]=typeof s.extraReducers=="function"?$1(s.extraReducers):[s.extraReducers],z={...j,...h.sliceCaseReducersByType};return l5(s.initialState,N=>{for(let L in z)N.addCase(L,z[L]);for(let L of h.sliceMatchers)N.addMatcher(L.matcher,L.reducer);for(let L of I)N.addMatcher(L.matcher,L.reducer);R&&N.addDefaultCase(R)})}const y=j=>j,w=new Map;let b;function _(j,I){return b||(b=x()),b(j,I)}function C(){return b||(b=x()),b.getInitialState()}function E(j,I=!1){function R(N){let L=N[j];return typeof L>"u"&&I&&(L=C()),L}function z(N=y){const L=ev(w,I,()=>new WeakMap);return ev(L,N,()=>{const O={};for(const[B,Y]of Object.entries(s.selectors??{}))O[B]=w5(Y,N,C,I);return O})}return{reducerPath:j,getSelectors:z,get selectors(){return z(R)},selectSlice:R}}const S={name:a,reducer:_,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:C,...E(l),injectInto(j,{reducerPath:I,...R}={}){const z=I??l;return j.inject({reducerPath:z,reducer:_},R),{...S,...E(z,!0)}}};return S}}function w5(t,e,n,r){function s(a,...l){let d=e(a);return typeof d>"u"&&r&&(d=n()),t(d,...l)}return s.unwrapped=t,s}var Jt=y5();function b5(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function _5({type:t,reducerName:e,createNotation:n},r,s){let a,l;if("reducer"in r){if(n&&!k5(r))throw new Error(fr(17));a=r.reducer,l=r.prepare}else a=r;s.addCase(t,a).exposeCaseReducer(e,a).exposeAction(e,l?Bo(t,l):Bo(t))}function S5(t){return t._reducerDefinitionType==="asyncThunk"}function k5(t){return t._reducerDefinitionType==="reducerWithPrepare"}function j5({type:t,reducerName:e},n,r,s){if(!s)throw new Error(fr(18));const{payloadCreator:a,fulfilled:l,pending:d,rejected:p,settled:h,options:m}=n,x=s(t,a,m);r.exposeAction(e,x),l&&r.addCase(x.fulfilled,l),d&&r.addCase(x.pending,d),p&&r.addCase(x.rejected,p),h&&r.addMatcher(x.settled,h),r.exposeCaseReducer(e,{fulfilled:l||Al,pending:d||Al,rejected:p||Al,settled:h||Al})}function Al(){}function fr(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}function P1(t,e){return function(){return t.apply(e,arguments)}}const{toString:C5}=Object.prototype,{getPrototypeOf:Dh}=Object,du=(t=>e=>{const n=C5.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),zn=t=>(t=t.toLowerCase(),e=>du(e)===t),pu=t=>e=>typeof e===t,{isArray:Os}=Array,ia=pu("undefined");function E5(t){return t!==null&&!ia(t)&&t.constructor!==null&&!ia(t.constructor)&&sn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const z1=zn("ArrayBuffer");function T5(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&z1(t.buffer),e}const I5=pu("string"),sn=pu("function"),M1=pu("number"),fu=t=>t!==null&&typeof t=="object",R5=t=>t===!0||t===!1,rc=t=>{if(du(t)!=="object")return!1;const e=Dh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},$5=zn("Date"),P5=zn("File"),z5=zn("Blob"),M5=zn("FileList"),N5=t=>fu(t)&&sn(t.pipe),O5=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||sn(t.append)&&((e=du(t))==="formdata"||e==="object"&&sn(t.toString)&&t.toString()==="[object FormData]"))},L5=zn("URLSearchParams"),[A5,D5,F5,B5]=["ReadableStream","Request","Response","Headers"].map(zn),V5=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function va(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Os(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const a=n?Object.getOwnPropertyNames(t):Object.keys(t),l=a.length;let d;for(r=0;r<l;r++)d=a[r],e.call(null,t[d],d,t)}}function N1(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,O1=t=>!ia(t)&&t!==wi;function qf(){const{caseless:t}=O1(this)&&this||{},e={},n=(r,s)=>{const a=t&&N1(e,s)||s;rc(e[a])&&rc(r)?e[a]=qf(e[a],r):rc(r)?e[a]=qf({},r):Os(r)?e[a]=r.slice():e[a]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&va(arguments[r],n);return e}const W5=(t,e,n,{allOwnKeys:r}={})=>(va(e,(s,a)=>{n&&sn(s)?t[a]=P1(s,n):t[a]=s},{allOwnKeys:r}),t),U5=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),G5=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},H5=(t,e,n,r)=>{let s,a,l;const d={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),a=s.length;a-- >0;)l=s[a],(!r||r(l,t,e))&&!d[l]&&(e[l]=t[l],d[l]=!0);t=n!==!1&&Dh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Y5=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},J5=t=>{if(!t)return null;if(Os(t))return t;let e=t.length;if(!M1(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},q5=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Dh(Uint8Array)),Q5=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const a=s.value;e.call(t,a[0],a[1])}},Z5=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},K5=zn("HTMLFormElement"),X5=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),rv=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),eT=zn("RegExp"),L1=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};va(n,(s,a)=>{let l;(l=e(s,a,t))!==!1&&(r[a]=l||s)}),Object.defineProperties(t,r)},tT=t=>{L1(t,(e,n)=>{if(sn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(sn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},nT=(t,e)=>{const n={},r=s=>{s.forEach(a=>{n[a]=!0})};return Os(t)?r(t):r(String(t).split(e)),n},rT=()=>{},iT=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Vp="abcdefghijklmnopqrstuvwxyz",iv="0123456789",A1={DIGIT:iv,ALPHA:Vp,ALPHA_DIGIT:Vp+Vp.toUpperCase()+iv},sT=(t=16,e=A1.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function oT(t){return!!(t&&sn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const aT=t=>{const e=new Array(10),n=(r,s)=>{if(fu(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const a=Os(r)?[]:{};return va(r,(l,d)=>{const p=n(l,s+1);!ia(p)&&(a[d]=p)}),e[s]=void 0,a}}return r};return n(t,0)},lT=zn("AsyncFunction"),cT=t=>t&&(fu(t)||sn(t))&&sn(t.then)&&sn(t.catch),D1=((t,e)=>t?setImmediate:e?((n,r)=>(wi.addEventListener("message",({source:s,data:a})=>{s===wi&&a===n&&r.length&&r.shift()()},!1),s=>{r.push(s),wi.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",sn(wi.postMessage)),uT=typeof queueMicrotask<"u"?queueMicrotask.bind(wi):typeof process<"u"&&process.nextTick||D1,U={isArray:Os,isArrayBuffer:z1,isBuffer:E5,isFormData:O5,isArrayBufferView:T5,isString:I5,isNumber:M1,isBoolean:R5,isObject:fu,isPlainObject:rc,isReadableStream:A5,isRequest:D5,isResponse:F5,isHeaders:B5,isUndefined:ia,isDate:$5,isFile:P5,isBlob:z5,isRegExp:eT,isFunction:sn,isStream:N5,isURLSearchParams:L5,isTypedArray:q5,isFileList:M5,forEach:va,merge:qf,extend:W5,trim:V5,stripBOM:U5,inherits:G5,toFlatObject:H5,kindOf:du,kindOfTest:zn,endsWith:Y5,toArray:J5,forEachEntry:Q5,matchAll:Z5,isHTMLForm:K5,hasOwnProperty:rv,hasOwnProp:rv,reduceDescriptors:L1,freezeMethods:tT,toObjectSet:nT,toCamelCase:X5,noop:rT,toFiniteNumber:iT,findKey:N1,global:wi,isContextDefined:O1,ALPHABET:A1,generateString:sT,isSpecCompliantForm:oT,toJSONObject:aT,isAsyncFn:lT,isThenable:cT,setImmediate:D1,asap:uT};function ve(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}U.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const F1=ve.prototype,B1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{B1[t]={value:t}});Object.defineProperties(ve,B1);Object.defineProperty(F1,"isAxiosError",{value:!0});ve.from=(t,e,n,r,s,a)=>{const l=Object.create(F1);return U.toFlatObject(t,l,function(p){return p!==Error.prototype},d=>d!=="isAxiosError"),ve.call(l,t.message,e,n,r,s),l.cause=t,l.name=t.name,a&&Object.assign(l,a),l};const dT=null;function Qf(t){return U.isPlainObject(t)||U.isArray(t)}function V1(t){return U.endsWith(t,"[]")?t.slice(0,-2):t}function sv(t,e,n){return t?t.concat(e).map(function(s,a){return s=V1(s),!n&&a?"["+s+"]":s}).join(n?".":""):e}function pT(t){return U.isArray(t)&&!t.some(Qf)}const fT=U.toFlatObject(U,{},null,function(e){return/^is[A-Z]/.test(e)});function hu(t,e,n){if(!U.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,C){return!U.isUndefined(C[_])});const r=n.metaTokens,s=n.visitor||m,a=n.dots,l=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(e);if(!U.isFunction(s))throw new TypeError("visitor must be a function");function h(b){if(b===null)return"";if(U.isDate(b))return b.toISOString();if(!p&&U.isBlob(b))throw new ve("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(b)||U.isTypedArray(b)?p&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,_,C){let E=b;if(b&&!C&&typeof b=="object"){if(U.endsWith(_,"{}"))_=r?_:_.slice(0,-2),b=JSON.stringify(b);else if(U.isArray(b)&&pT(b)||(U.isFileList(b)||U.endsWith(_,"[]"))&&(E=U.toArray(b)))return _=V1(_),E.forEach(function(j,I){!(U.isUndefined(j)||j===null)&&e.append(l===!0?sv([_],I,a):l===null?_:_+"[]",h(j))}),!1}return Qf(b)?!0:(e.append(sv(C,_,a),h(b)),!1)}const x=[],y=Object.assign(fT,{defaultVisitor:m,convertValue:h,isVisitable:Qf});function w(b,_){if(!U.isUndefined(b)){if(x.indexOf(b)!==-1)throw Error("Circular reference detected in "+_.join("."));x.push(b),U.forEach(b,function(E,S){(!(U.isUndefined(E)||E===null)&&s.call(e,E,U.isString(S)?S.trim():S,_,y))===!0&&w(E,_?_.concat(S):[S])}),x.pop()}}if(!U.isObject(t))throw new TypeError("data must be an object");return w(t),e}function ov(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Fh(t,e){this._pairs=[],t&&hu(t,this,e)}const W1=Fh.prototype;W1.append=function(e,n){this._pairs.push([e,n])};W1.toString=function(e){const n=e?function(r){return e.call(this,r,ov)}:ov;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function hT(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function U1(t,e,n){if(!e)return t;const r=n&&n.encode||hT;U.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let a;if(s?a=s(e,n):a=U.isURLSearchParams(e)?e.toString():new Fh(e,n).toString(r),a){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}class av{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,function(r){r!==null&&e(r)})}}const G1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mT=typeof URLSearchParams<"u"?URLSearchParams:Fh,gT=typeof FormData<"u"?FormData:null,xT=typeof Blob<"u"?Blob:null,vT={isBrowser:!0,classes:{URLSearchParams:mT,FormData:gT,Blob:xT},protocols:["http","https","file","blob","url","data"]},Bh=typeof window<"u"&&typeof document<"u",Zf=typeof navigator=="object"&&navigator||void 0,yT=Bh&&(!Zf||["ReactNative","NativeScript","NS"].indexOf(Zf.product)<0),wT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bT=Bh&&window.location.href||"http://localhost",_T=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Bh,hasStandardBrowserEnv:yT,hasStandardBrowserWebWorkerEnv:wT,navigator:Zf,origin:bT},Symbol.toStringTag,{value:"Module"})),jt={..._T,...vT};function ST(t,e){return hu(t,new jt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,a){return jt.isNode&&U.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},e))}function kT(t){return U.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function jT(t){const e={},n=Object.keys(t);let r;const s=n.length;let a;for(r=0;r<s;r++)a=n[r],e[a]=t[a];return e}function H1(t){function e(n,r,s,a){let l=n[a++];if(l==="__proto__")return!0;const d=Number.isFinite(+l),p=a>=n.length;return l=!l&&U.isArray(s)?s.length:l,p?(U.hasOwnProp(s,l)?s[l]=[s[l],r]:s[l]=r,!d):((!s[l]||!U.isObject(s[l]))&&(s[l]=[]),e(n,r,s[l],a)&&U.isArray(s[l])&&(s[l]=jT(s[l])),!d)}if(U.isFormData(t)&&U.isFunction(t.entries)){const n={};return U.forEachEntry(t,(r,s)=>{e(kT(r),s,n,0)}),n}return null}function CT(t,e,n){if(U.isString(t))try{return(e||JSON.parse)(t),U.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ya={transitional:G1,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,a=U.isObject(e);if(a&&U.isHTMLForm(e)&&(e=new FormData(e)),U.isFormData(e))return s?JSON.stringify(H1(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e)||U.isReadableStream(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ST(e,this.formSerializer).toString();if((d=U.isFileList(e))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return hu(d?{"files[]":e}:e,p&&new p,this.formSerializer)}}return a||s?(n.setContentType("application/json",!1),CT(e)):e}],transformResponse:[function(e){const n=this.transitional||ya.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(U.isResponse(e)||U.isReadableStream(e))return e;if(e&&U.isString(e)&&(r&&!this.responseType||s)){const l=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(d){if(l)throw d.name==="SyntaxError"?ve.from(d,ve.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],t=>{ya.headers[t]={}});const ET=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),TT=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(l){s=l.indexOf(":"),n=l.substring(0,s).trim().toLowerCase(),r=l.substring(s+1).trim(),!(!n||e[n]&&ET[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},lv=Symbol("internals");function Eo(t){return t&&String(t).trim().toLowerCase()}function ic(t){return t===!1||t==null?t:U.isArray(t)?t.map(ic):String(t)}function IT(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const RT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Wp(t,e,n,r,s){if(U.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!U.isString(e)){if(U.isString(r))return e.indexOf(r)!==-1;if(U.isRegExp(r))return r.test(e)}}function $T(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function PT(t,e){const n=U.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,a,l){return this[r].call(this,e,s,a,l)},configurable:!0})})}let Vt=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function a(d,p,h){const m=Eo(p);if(!m)throw new Error("header name must be a non-empty string");const x=U.findKey(s,m);(!x||s[x]===void 0||h===!0||h===void 0&&s[x]!==!1)&&(s[x||p]=ic(d))}const l=(d,p)=>U.forEach(d,(h,m)=>a(h,m,p));if(U.isPlainObject(e)||e instanceof this.constructor)l(e,n);else if(U.isString(e)&&(e=e.trim())&&!RT(e))l(TT(e),n);else if(U.isHeaders(e))for(const[d,p]of e.entries())a(p,d,r);else e!=null&&a(n,e,r);return this}get(e,n){if(e=Eo(e),e){const r=U.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return IT(s);if(U.isFunction(n))return n.call(this,s,r);if(U.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Eo(e),e){const r=U.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Wp(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function a(l){if(l=Eo(l),l){const d=U.findKey(r,l);d&&(!n||Wp(r,r[d],d,n))&&(delete r[d],s=!0)}}return U.isArray(e)?e.forEach(a):a(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const a=n[r];(!e||Wp(this,this[a],a,e,!0))&&(delete this[a],s=!0)}return s}normalize(e){const n=this,r={};return U.forEach(this,(s,a)=>{const l=U.findKey(r,a);if(l){n[l]=ic(s),delete n[a];return}const d=e?$T(a):String(a).trim();d!==a&&delete n[a],n[d]=ic(s),r[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return U.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&U.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[lv]=this[lv]={accessors:{}}).accessors,s=this.prototype;function a(l){const d=Eo(l);r[d]||(PT(s,l),r[d]=!0)}return U.isArray(e)?e.forEach(a):a(e),this}};Vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(Vt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});U.freezeMethods(Vt);function Up(t,e){const n=this||ya,r=e||n,s=Vt.from(r.headers);let a=r.data;return U.forEach(t,function(d){a=d.call(n,a,s.normalize(),e?e.status:void 0)}),s.normalize(),a}function Y1(t){return!!(t&&t.__CANCEL__)}function Ls(t,e,n){ve.call(this,t??"canceled",ve.ERR_CANCELED,e,n),this.name="CanceledError"}U.inherits(Ls,ve,{__CANCEL__:!0});function J1(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ve("Request failed with status code "+n.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function zT(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function MT(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,a=0,l;return e=e!==void 0?e:1e3,function(p){const h=Date.now(),m=r[a];l||(l=h),n[s]=p,r[s]=h;let x=a,y=0;for(;x!==s;)y+=n[x++],x=x%t;if(s=(s+1)%t,s===a&&(a=(a+1)%t),h-l<e)return;const w=m&&h-m;return w?Math.round(y*1e3/w):void 0}}function NT(t,e){let n=0,r=1e3/e,s,a;const l=(h,m=Date.now())=>{n=m,s=null,a&&(clearTimeout(a),a=null),t.apply(null,h)};return[(...h)=>{const m=Date.now(),x=m-n;x>=r?l(h,m):(s=h,a||(a=setTimeout(()=>{a=null,l(s)},r-x)))},()=>s&&l(s)]}const Ac=(t,e,n=3)=>{let r=0;const s=MT(50,250);return NT(a=>{const l=a.loaded,d=a.lengthComputable?a.total:void 0,p=l-r,h=s(p),m=l<=d;r=l;const x={loaded:l,total:d,progress:d?l/d:void 0,bytes:p,rate:h||void 0,estimated:h&&d&&m?(d-l)/h:void 0,event:a,lengthComputable:d!=null,[e?"download":"upload"]:!0};t(x)},n)},cv=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},uv=t=>(...e)=>U.asap(()=>t(...e)),OT=jt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,jt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,LT=jt.hasStandardBrowserEnv?{write(t,e,n,r,s,a){const l=[t+"="+encodeURIComponent(e)];U.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),U.isString(r)&&l.push("path="+r),U.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function AT(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function DT(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function q1(t,e){return t&&!AT(e)?DT(t,e):e}const dv=t=>t instanceof Vt?{...t}:t;function Pi(t,e){e=e||{};const n={};function r(h,m,x,y){return U.isPlainObject(h)&&U.isPlainObject(m)?U.merge.call({caseless:y},h,m):U.isPlainObject(m)?U.merge({},m):U.isArray(m)?m.slice():m}function s(h,m,x,y){if(U.isUndefined(m)){if(!U.isUndefined(h))return r(void 0,h,x,y)}else return r(h,m,x,y)}function a(h,m){if(!U.isUndefined(m))return r(void 0,m)}function l(h,m){if(U.isUndefined(m)){if(!U.isUndefined(h))return r(void 0,h)}else return r(void 0,m)}function d(h,m,x){if(x in e)return r(h,m);if(x in t)return r(void 0,h)}const p={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:d,headers:(h,m,x)=>s(dv(h),dv(m),x,!0)};return U.forEach(Object.keys(Object.assign({},t,e)),function(m){const x=p[m]||s,y=x(t[m],e[m],m);U.isUndefined(y)&&x!==d||(n[m]=y)}),n}const Q1=t=>{const e=Pi({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:a,headers:l,auth:d}=e;e.headers=l=Vt.from(l),e.url=U1(q1(e.baseURL,e.url),t.params,t.paramsSerializer),d&&l.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let p;if(U.isFormData(n)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if((p=l.getContentType())!==!1){const[h,...m]=p?p.split(";").map(x=>x.trim()).filter(Boolean):[];l.setContentType([h||"multipart/form-data",...m].join("; "))}}if(jt.hasStandardBrowserEnv&&(r&&U.isFunction(r)&&(r=r(e)),r||r!==!1&&OT(e.url))){const h=s&&a&&LT.read(a);h&&l.set(s,h)}return e},FT=typeof XMLHttpRequest<"u",BT=FT&&function(t){return new Promise(function(n,r){const s=Q1(t);let a=s.data;const l=Vt.from(s.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:h}=s,m,x,y,w,b;function _(){w&&w(),b&&b(),s.cancelToken&&s.cancelToken.unsubscribe(m),s.signal&&s.signal.removeEventListener("abort",m)}let C=new XMLHttpRequest;C.open(s.method.toUpperCase(),s.url,!0),C.timeout=s.timeout;function E(){if(!C)return;const j=Vt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),R={data:!d||d==="text"||d==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:j,config:t,request:C};J1(function(N){n(N),_()},function(N){r(N),_()},R),C=null}"onloadend"in C?C.onloadend=E:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(E)},C.onabort=function(){C&&(r(new ve("Request aborted",ve.ECONNABORTED,t,C)),C=null)},C.onerror=function(){r(new ve("Network Error",ve.ERR_NETWORK,t,C)),C=null},C.ontimeout=function(){let I=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const R=s.transitional||G1;s.timeoutErrorMessage&&(I=s.timeoutErrorMessage),r(new ve(I,R.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,t,C)),C=null},a===void 0&&l.setContentType(null),"setRequestHeader"in C&&U.forEach(l.toJSON(),function(I,R){C.setRequestHeader(R,I)}),U.isUndefined(s.withCredentials)||(C.withCredentials=!!s.withCredentials),d&&d!=="json"&&(C.responseType=s.responseType),h&&([y,b]=Ac(h,!0),C.addEventListener("progress",y)),p&&C.upload&&([x,w]=Ac(p),C.upload.addEventListener("progress",x),C.upload.addEventListener("loadend",w)),(s.cancelToken||s.signal)&&(m=j=>{C&&(r(!j||j.type?new Ls(null,t,C):j),C.abort(),C=null)},s.cancelToken&&s.cancelToken.subscribe(m),s.signal&&(s.signal.aborted?m():s.signal.addEventListener("abort",m)));const S=zT(s.url);if(S&&jt.protocols.indexOf(S)===-1){r(new ve("Unsupported protocol "+S+":",ve.ERR_BAD_REQUEST,t));return}C.send(a||null)})},VT=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const a=function(h){if(!s){s=!0,d();const m=h instanceof Error?h:this.reason;r.abort(m instanceof ve?m:new Ls(m instanceof Error?m.message:m))}};let l=e&&setTimeout(()=>{l=null,a(new ve(`timeout ${e} of ms exceeded`,ve.ETIMEDOUT))},e);const d=()=>{t&&(l&&clearTimeout(l),l=null,t.forEach(h=>{h.unsubscribe?h.unsubscribe(a):h.removeEventListener("abort",a)}),t=null)};t.forEach(h=>h.addEventListener("abort",a));const{signal:p}=r;return p.unsubscribe=()=>U.asap(d),p}},WT=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},UT=async function*(t,e){for await(const n of GT(t))yield*WT(n,e)},GT=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},pv=(t,e,n,r)=>{const s=UT(t,e);let a=0,l,d=p=>{l||(l=!0,r&&r(p))};return new ReadableStream({async pull(p){try{const{done:h,value:m}=await s.next();if(h){d(),p.close();return}let x=m.byteLength;if(n){let y=a+=x;n(y)}p.enqueue(new Uint8Array(m))}catch(h){throw d(h),h}},cancel(p){return d(p),s.return()}},{highWaterMark:2})},mu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Z1=mu&&typeof ReadableStream=="function",HT=mu&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),K1=(t,...e)=>{try{return!!t(...e)}catch{return!1}},YT=Z1&&K1(()=>{let t=!1;const e=new Request(jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),fv=64*1024,Kf=Z1&&K1(()=>U.isReadableStream(new Response("").body)),Dc={stream:Kf&&(t=>t.body)};mu&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Dc[e]&&(Dc[e]=U.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new ve(`Response type '${e}' is not supported`,ve.ERR_NOT_SUPPORT,r)})})})(new Response);const JT=async t=>{if(t==null)return 0;if(U.isBlob(t))return t.size;if(U.isSpecCompliantForm(t))return(await new Request(jt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(U.isArrayBufferView(t)||U.isArrayBuffer(t))return t.byteLength;if(U.isURLSearchParams(t)&&(t=t+""),U.isString(t))return(await HT(t)).byteLength},qT=async(t,e)=>{const n=U.toFiniteNumber(t.getContentLength());return n??JT(e)},QT=mu&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:a,timeout:l,onDownloadProgress:d,onUploadProgress:p,responseType:h,headers:m,withCredentials:x="same-origin",fetchOptions:y}=Q1(t);h=h?(h+"").toLowerCase():"text";let w=VT([s,a&&a.toAbortSignal()],l),b;const _=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let C;try{if(p&&YT&&n!=="get"&&n!=="head"&&(C=await qT(m,r))!==0){let R=new Request(e,{method:"POST",body:r,duplex:"half"}),z;if(U.isFormData(r)&&(z=R.headers.get("content-type"))&&m.setContentType(z),R.body){const[N,L]=cv(C,Ac(uv(p)));r=pv(R.body,fv,N,L)}}U.isString(x)||(x=x?"include":"omit");const E="credentials"in Request.prototype;b=new Request(e,{...y,signal:w,method:n.toUpperCase(),headers:m.normalize().toJSON(),body:r,duplex:"half",credentials:E?x:void 0});let S=await fetch(b);const j=Kf&&(h==="stream"||h==="response");if(Kf&&(d||j&&_)){const R={};["status","statusText","headers"].forEach(O=>{R[O]=S[O]});const z=U.toFiniteNumber(S.headers.get("content-length")),[N,L]=d&&cv(z,Ac(uv(d),!0))||[];S=new Response(pv(S.body,fv,N,()=>{L&&L(),_&&_()}),R)}h=h||"text";let I=await Dc[U.findKey(Dc,h)||"text"](S,t);return!j&&_&&_(),await new Promise((R,z)=>{J1(R,z,{data:I,headers:Vt.from(S.headers),status:S.status,statusText:S.statusText,config:t,request:b})})}catch(E){throw _&&_(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new ve("Network Error",ve.ERR_NETWORK,t,b),{cause:E.cause||E}):ve.from(E,E&&E.code,t,b)}}),Xf={http:dT,xhr:BT,fetch:QT};U.forEach(Xf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const hv=t=>`- ${t}`,ZT=t=>U.isFunction(t)||t===null||t===!1,X1={getAdapter:t=>{t=U.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let a=0;a<e;a++){n=t[a];let l;if(r=n,!ZT(n)&&(r=Xf[(l=String(n)).toLowerCase()],r===void 0))throw new ve(`Unknown adapter '${l}'`);if(r)break;s[l||"#"+a]=r}if(!r){const a=Object.entries(s).map(([d,p])=>`adapter ${d} `+(p===!1?"is not supported by the environment":"is not available in the build"));let l=e?a.length>1?`since :
`+a.map(hv).join(`
`):" "+hv(a[0]):"as no adapter specified";throw new ve("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return r},adapters:Xf};function Gp(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ls(null,t)}function mv(t){return Gp(t),t.headers=Vt.from(t.headers),t.data=Up.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),X1.getAdapter(t.adapter||ya.adapter)(t).then(function(r){return Gp(t),r.data=Up.call(t,t.transformResponse,r),r.headers=Vt.from(r.headers),r},function(r){return Y1(r)||(Gp(t),r&&r.response&&(r.response.data=Up.call(t,t.transformResponse,r.response),r.response.headers=Vt.from(r.response.headers))),Promise.reject(r)})}const ew="1.7.9",gu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{gu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const gv={};gu.transitional=function(e,n,r){function s(a,l){return"[Axios v"+ew+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,d)=>{if(e===!1)throw new ve(s(l," has been removed"+(n?" in "+n:"")),ve.ERR_DEPRECATED);return n&&!gv[l]&&(gv[l]=!0,console.warn(s(l," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(a,l,d):!0}};gu.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function KT(t,e,n){if(typeof t!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const a=r[s],l=e[a];if(l){const d=t[a],p=d===void 0||l(d,a,t);if(p!==!0)throw new ve("option "+a+" must be "+p,ve.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ve("Unknown option "+a,ve.ERR_BAD_OPTION)}}const sc={assertOptions:KT,validators:gu},Dn=sc.validators;let Si=class{constructor(e){this.defaults=e,this.interceptors={request:new av,response:new av}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const a=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Pi(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:a}=n;r!==void 0&&sc.assertOptions(r,{silentJSONParsing:Dn.transitional(Dn.boolean),forcedJSONParsing:Dn.transitional(Dn.boolean),clarifyTimeoutError:Dn.transitional(Dn.boolean)},!1),s!=null&&(U.isFunction(s)?n.paramsSerializer={serialize:s}:sc.assertOptions(s,{encode:Dn.function,serialize:Dn.function},!0)),sc.assertOptions(n,{baseUrl:Dn.spelling("baseURL"),withXsrfToken:Dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=a&&U.merge(a.common,a[n.method]);a&&U.forEach(["delete","get","head","post","put","patch","common"],b=>{delete a[b]}),n.headers=Vt.concat(l,a);const d=[];let p=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(p=p&&_.synchronous,d.unshift(_.fulfilled,_.rejected))});const h=[];this.interceptors.response.forEach(function(_){h.push(_.fulfilled,_.rejected)});let m,x=0,y;if(!p){const b=[mv.bind(this),void 0];for(b.unshift.apply(b,d),b.push.apply(b,h),y=b.length,m=Promise.resolve(n);x<y;)m=m.then(b[x++],b[x++]);return m}y=d.length;let w=n;for(x=0;x<y;){const b=d[x++],_=d[x++];try{w=b(w)}catch(C){_.call(this,C);break}}try{m=mv.call(this,w)}catch(b){return Promise.reject(b)}for(x=0,y=h.length;x<y;)m=m.then(h[x++],h[x++]);return m}getUri(e){e=Pi(this.defaults,e);const n=q1(e.baseURL,e.url);return U1(n,e.params,e.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(e){Si.prototype[e]=function(n,r){return this.request(Pi(r||{},{method:e,url:n,data:(r||{}).data}))}});U.forEach(["post","put","patch"],function(e){function n(r){return function(a,l,d){return this.request(Pi(d||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}Si.prototype[e]=n(),Si.prototype[e+"Form"]=n(!0)});let XT=class tw{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(s=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](s);r._listeners=null}),this.promise.then=s=>{let a;const l=new Promise(d=>{r.subscribe(d),a=d}).then(s);return l.cancel=function(){r.unsubscribe(a)},l},e(function(a,l,d){r.reason||(r.reason=new Ls(a,l,d),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new tw(function(s){e=s}),cancel:e}}};function e4(t){return function(n){return t.apply(null,n)}}function t4(t){return U.isObject(t)&&t.isAxiosError===!0}const eh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eh).forEach(([t,e])=>{eh[e]=t});function nw(t){const e=new Si(t),n=P1(Si.prototype.request,e);return U.extend(n,Si.prototype,e,{allOwnKeys:!0}),U.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return nw(Pi(t,s))},n}const me=nw(ya);me.Axios=Si;me.CanceledError=Ls;me.CancelToken=XT;me.isCancel=Y1;me.VERSION=ew;me.toFormData=hu;me.AxiosError=ve;me.Cancel=me.CanceledError;me.all=function(e){return Promise.all(e)};me.spread=e4;me.isAxiosError=t4;me.mergeConfig=Pi;me.AxiosHeaders=Vt;me.formToJSON=t=>H1(U.isHTMLForm(t)?new FormData(t):t);me.getAdapter=X1.getAdapter;me.HttpStatusCode=eh;me.default=me;const{Axios:iN,AxiosError:sN,CanceledError:oN,isCancel:aN,CancelToken:lN,VERSION:cN,all:uN,Cancel:dN,isAxiosError:pN,spread:fN,toFormData:hN,AxiosHeaders:mN,HttpStatusCode:gN,formToJSON:xN,getAdapter:vN,mergeConfig:yN}=me,Hp={params:{include_adult:"false",language:"ko-KR",page:"1",sort_by:"popularity.desc"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}},Vo=Oe("movie/getMovie",async(t,e)=>{try{let n=[],r=1;const s=new Set;for(;n.length<24;){const a=await me.get("https://api.themoviedb.org/3/discover/movie",{...Hp,params:{...Hp.params,page:r.toString()}}),l=a.data.results.filter(d=>d.overview&&d.poster_path&&d.backdrop_path&&!s.has(d.id));for(const d of l)try{if(n.length>=24)break;if(!s.has(d.id)){s.add(d.id);const h=(await me.get(`https://api.themoviedb.org/3/movie/${d.id}/videos`,{headers:Hp.headers})).data.results.find(m=>m.site==="YouTube"&&m.key&&(m.type==="Trailer"||m.type==="Teaser"));n.push({...d,videoKey:h?h.key:null})}}catch(p){console.error(`Error fetching videos for movie ${d.id}:`,p.message)}if(r++,!a.data.results.length||r>10)break}return n.slice(0,24)}catch(n){return console.error("Main error:",n.message),e.rejectWithValue(n.message)}}),Wo=Oe("movieDetail/getMovieDetail",async(t,{rejectWithValue:e})=>{try{return(await me.get(`https://api.themoviedb.org/3/movie/${t}`,{params:{language:"ko-KR"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}})).data}catch(n){return e(n.message)}}),n4={params:{},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}},ki=Oe("contentPlayer/getMovieVideos",async(t=null,{rejectWithValue:e})=>{try{if(!t)return"MkcqlqCfYcg";const s=(await me.get(`https://api.themoviedb.org/3/movie/${t}/videos`,n4)).data.results.find(a=>a.site==="YouTube"&&a.key);return s?s.key:"MkcqlqCfYcg"}catch(n){return e(n.message)}}),xv={params:{language:"ko-KR",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}};Oe("reviews/getMovieReviews",async(t,{rejectWithValue:e})=>{try{let n=[],r=1,s=!0;for(;s;){const a=await me.get(`https://api.themoviedb.org/3/movie/${t}/reviews`,{...xv,params:{...xv.params,page:r.toString()}}),{results:l,total_pages:d}=a.data,p=l.filter(h=>h.content&&h.content.trim().length>0);n=[...n,...p],s=r<d&&r<5,r++}return n}catch(n){return e(n.message)}});const Yp={params:{include_adult:"false",include_null_first_air_dates:"false",language:"ko-KR",page:"1",sort_by:"popularity.desc"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}},Uo=Oe("TVseries/getTVseries",async(t,e)=>{try{let n=[],r=1;const s=new Set;for(;n.length<24;){const a=await me.get("https://api.themoviedb.org/3/discover/tv",{...Yp,params:{...Yp.params,page:r.toString()}}),l=a.data.results.filter(d=>d.overview&&d.poster_path&&d.backdrop_path&&!s.has(d.id));for(const d of l)try{if(n.length>=24)break;if(!s.has(d.id)){s.add(d.id);const h=(await me.get(`https://api.themoviedb.org/3/tv/${d.id}/videos`,{headers:Yp.headers})).data.results.find(m=>m.site==="YouTube"&&m.key&&(m.type==="Trailer"||m.type==="Teaser"));n.push({...d,videoKey:h?h.key:null})}}catch(p){console.error(`Error fetching videos for show ${d.id}:`,p.message)}if(r++,!a.data.results.length||r>10)break}return n.slice(0,24)}catch(n){return console.error("Main error:",n.message),e.rejectWithValue(n.message)}}),Ur=Oe("TVDetail/getTVDetail",async(t,{rejectWithValue:e})=>{try{return(await me.get(`https://api.themoviedb.org/3/tv/${t}`,{params:{language:"ko-KR"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}})).data}catch(n){return e(n.message)}}),oc=Oe("player/getTVVideos",async(t=null,{rejectWithValue:e})=>{try{if(!t)return console.log("No tvId provided, returning default video"),"MkcqlqCfYcg";const r=(await me.get(`https://api.themoviedb.org/3/tv/${t}/videos`,{params:{language:"ko-KR"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}})).data.results;let s=r.find(l=>l.site==="YouTube"&&l.key&&(l.type==="Trailer"||l.type==="Teaser")&&l.iso_639_1==="ko");s||(console.log("No Korean trailer found, searching for any trailer"),s=r.find(l=>l.site==="YouTube"&&l.key&&(l.type==="Trailer"||l.type==="Teaser"))),s||(console.log("No trailer found, searching for any YouTube video"),s=r.find(l=>l.site==="YouTube"&&l.key));const a=s?s.key:"MkcqlqCfYcg";return console.log("Selected video key:",a),a}catch(n){return console.error("Error in getTVVideos:",n),e("Failed to fetch video: "+n.message)}}),ac=Oe("content/getAiringToday",async(t,{rejectWithValue:e})=>{try{const n=new Date,r=new Date(n);r.setDate(n.getDate()-n.getDay());const s=new Date(r);s.setDate(r.getDate()+6);let a=[],l=1;for(;l<=5;)try{const h=await me.get("https://api.themoviedb.org/3/tv/on_the_air",{params:{language:"ko-KR",page:l.toString()},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}}),x=(await Promise.all(h.data.results.filter(y=>y.poster_path).map(async y=>{try{const w=await me.get(`https://api.themoviedb.org/3/tv/${y.id}`,{params:{language:"ko-KR"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}});if(w.data.next_episode_to_air){const b=new Date(w.data.next_episode_to_air.air_date);if(b>=r&&b<=s)return{...y,next_air_date:w.data.next_episode_to_air.air_date}}return null}catch(w){return console.error(`Error fetching show details: ${w.message}`),null}}))).filter(y=>y!==null);if(a=[...a,...x],!h.data.results.length)break;l++}catch(h){console.error(`Error fetching page ${l}: ${h.message}`);break}const d=a.reduce((h,m)=>{const y=new Date(m.next_air_date).getDay(),b=["일","월","화","수","목","금","토"][y];return h[b]||(h[b]=[]),h[b].push({...m,airDate:m.next_air_date,dayOfWeek:b}),h},{}),p={};return["일","월","화","수","목","금","토"].forEach(h=>{p[h]=(d[h]||[]).sort((m,x)=>new Date(m.next_air_date)-new Date(x.next_air_date)).slice(0,10)}),p}catch(n){return e(n.message)}}),Go=Oe("topRated/getTopRated",async(t,{rejectWithValue:e})=>{try{const n={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"},r={language:"ko-KR",page:"1"},[s,a]=await Promise.all([me.get("https://api.themoviedb.org/3/movie/top_rated",{headers:n,params:r}),me.get("https://api.themoviedb.org/3/tv/top_rated",{headers:n,params:r})]),l=s.data.results.filter(p=>p.poster_path&&p.backdrop_path).slice(0,5).map(p=>({...p,mediaType:"movie"})),d=a.data.results.filter(p=>p.poster_path&&p.backdrop_path).slice(0,5).map(p=>({...p,mediaType:"tv"}));return{movies:l,tvShows:d}}catch(n){return e(n.message)}}),r4={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"},lc=Oe("search/multi",async({query:t,page:e=1},{rejectWithValue:n})=>{try{const r=await me.get("https://api.themoviedb.org/3/search/multi",{params:{query:t,language:"ko-KR",page:e,include_adult:!1},headers:r4});return{results:r.data.results.map(a=>({...a,mediaType:a.media_type})),page:r.data.page,totalPages:r.data.total_pages,totalResults:r.data.total_results}}catch(r){return n(r.message)}}),qr=me.create({baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}}),Ho=Oe("content/fetchPopular",async()=>{const[t,e]=await Promise.all([qr.get("/trending/movie/day",{params:{language:"ko-KR",region:"KR"}}),qr.get("/trending/tv/day",{params:{language:"ko-KR",region:"KR"}})]),n=t.data.results.map(s=>({...s,media_type:"movie",title:s.title,release_date:s.release_date})),r=e.data.results.map(s=>({...s,media_type:"series",title:s.name,release_date:s.first_air_date}));return[...n,...r].sort((s,a)=>a.popularity-s.popularity).slice(0,10)}),cc=Oe("genres/fetch",async()=>{const[t,e]=await Promise.all([qr.get("/genre/movie/list",{params:{language:"ko-KR"}}),qr.get("/genre/tv/list",{params:{language:"ko-KR"}})]);return[...new Map([...t.data.genres,...e.data.genres].map(s=>[s.id,s])).values()].sort(()=>Math.random()-.5).slice(0,4)}),uc=Oe("genres/fetchMain",async()=>{const[t,e]=await Promise.all([qr.get("/genre/movie/list",{params:{language:"ko-KR"}}),qr.get("/genre/tv/list",{params:{language:"ko-KR"}})]);return[...new Map([...t.data.genres,...e.data.genres].map(s=>[s.id,s])).values()].sort(()=>Math.random()-.5).slice(0,8)}),Yo=Oe("genres/fetchByGenre",async({genreId:t,contentType:e="all"},{rejectWithValue:n})=>{var r;try{let s=[];if(e==="all"||e==="movie"){const a=await qr.get("/discover/movie",{params:{with_genres:t,language:"ko-KR",sort_by:"popularity.desc",page:1}});s=[...s,...a.data.results.map(l=>({...l,media_type:"movie"}))]}if(e==="all"||e==="tv"){const a=await qr.get("/discover/tv",{params:{with_genres:t,language:"ko-KR",sort_by:"popularity.desc",page:1}});s=[...s,...a.data.results.map(l=>({...l,media_type:"tv"}))]}return s.sort((a,l)=>l.popularity-a.popularity),{genreId:t,results:s}}catch(s){return n(((r=s.response)==null?void 0:r.data)||s.message)}}),Jp={params:{language:"ko-KR",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}},dc=Oe("movies/getMovieRecommendations",async(t,e)=>{try{let n=[],r=1;const s=new Set;for(;n.length<24;){const a=await me.get(`https://api.themoviedb.org/3/movie/${t}/recommendations`,{...Jp,params:{...Jp.params,page:r.toString()}}),l=a.data.results.filter(d=>d.overview&&d.poster_path&&d.backdrop_path&&!s.has(d.id));for(const d of l)try{if(n.length>=24)break;if(!s.has(d.id)){s.add(d.id);const h=(await me.get(`https://api.themoviedb.org/3/movie/${d.id}/videos`,{headers:Jp.headers})).data.results.find(m=>m.site==="YouTube"&&m.key&&(m.type==="Trailer"||m.type==="Teaser"));n.push({...d,videoKey:h?h.key:null})}}catch(p){console.error(`Error fetching videos for movie ${d.id}:`,p.message)}if(r++,!a.data.results.length||r>10)break}return n.slice(0,24)}catch(n){return console.error("Main error:",n.message),e.rejectWithValue(n.message)}}),pc=Oe("TVDetail/getTVContentRating",async(t,{rejectWithValue:e})=>{try{const n=await me.get(`https://api.themoviedb.org/3/tv/${t}/content_ratings`,{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}}),r=n.data.results.find(a=>a.iso_3166_1==="KR"),s=n.data.results.find(a=>a.iso_3166_1==="US");return{rating:(r==null?void 0:r.rating)||(s==null?void 0:s.rating)||"정보 없음",iso_3166_1:r?"KR":s?"US":null}}catch(n){return e(n.message)}}),fc=Oe("movies/getMovieContentRating",async(t,{rejectWithValue:e})=>{var n,r;try{const s=await me.get(`https://api.themoviedb.org/3/movie/${t}/release_dates`,{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}}),a=s.data.results.find(h=>h.iso_3166_1==="KR"),l=s.data.results.find(h=>h.iso_3166_1==="US"),d=(n=a==null?void 0:a.release_dates[0])==null?void 0:n.certification,p=(r=l==null?void 0:l.release_dates[0])==null?void 0:r.certification;return{rating:d||p||"정보 없음",iso_3166_1:a?"KR":l?"US":null}}catch(s){return e(s.message)}}),hc=Oe("TVEpisodes/getTVSeasonEpisodes",async({tvId:t,seasonNumber:e},{rejectWithValue:n})=>{try{if(!t||e===void 0)return n("TV ID and Season Number are required");const s=(await me.get(`https://api.themoviedb.org/3/tv/${t}/season/${e}`,{params:{language:"ko-KR"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}})).data,a=await Promise.all(s.episodes.map(async l=>{try{const p=(await me.get(`https://api.themoviedb.org/3/tv/${t}/season/${e}/episode/${l.episode_number}/videos`,{params:{language:"ko-KR"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}})).data.results;let h=p.find(x=>x.site==="YouTube"&&x.key&&(x.type==="Trailer"||x.type==="Teaser"||x.type==="Clip")&&x.iso_639_1==="ko");h||(h=p.find(x=>x.site==="YouTube"&&x.key&&(x.type==="Trailer"||x.type==="Teaser"||x.type==="Clip"))),h||(h=p.find(x=>x.site==="YouTube"&&x.key));const m=l.still_path?`https://image.tmdb.org/t/p/w300${l.still_path}`:"/contentdetail/sample/EpItemImgSample.png";return{...l,videoKey:h?h.key:null,stillUrl:m,runtime:l.runtime?`${l.runtime}분`:"정보 없음"}}catch(d){return console.error(`Error fetching videos for episode ${l.episode_number}:`,d),{...l,videoKey:null,stillUrl:l.still_path?`https://image.tmdb.org/t/p/w300${l.still_path}`:"/contentdetail/sample/EpItemImgSample.png",runtime:l.runtime?`${l.runtime}분`:"정보 없음"}}}));return{seasonInfo:{air_date:s.air_date,name:s.name,overview:s.overview,id:s.id,poster_path:s.poster_path,season_number:s.season_number},episodes:a}}catch(r){return console.error("Error fetching TV season episodes:",r),n(r.message)}}),mc=Oe("TVSeasons/getTVSeasons",async(t,{rejectWithValue:e})=>{try{return t?(await me.get(`https://api.themoviedb.org/3/tv/${t}`,{params:{language:"ko-KR"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}})).data.seasons.filter(r=>r.season_number>0):e("TV ID is required")}catch(n){return console.error("Error fetching TV seasons:",n),e(n.message)}}),qp={params:{language:"ko-KR",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY2NTIxYzQzYzJlMDNmNTlkMjc2N2YxMDlhYWFhNCIsIm5iZiI6MTczNzUxMDE4NS4yNjIsInN1YiI6IjY3OTA0ZDI5MmQ2MWMzM2U2M2RmZTVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._QJjWVEDYEcIfVZtQRYG0JSRb22Dit3HopPsNm8AILE"}},gc=Oe("tv/getTVRecommendations",async(t,e)=>{try{let n=[],r=1;const s=new Set;for(;n.length<24;){const a=await me.get(`https://api.themoviedb.org/3/tv/${t}/recommendations`,{...qp,params:{...qp.params,page:r.toString()}}),l=a.data.results.filter(d=>d.overview&&d.poster_path&&d.backdrop_path&&!s.has(d.id));for(const d of l)try{if(n.length>=24)break;if(!s.has(d.id)){s.add(d.id);const h=(await me.get(`https://api.themoviedb.org/3/tv/${d.id}/videos`,{headers:qp.headers})).data.results.find(m=>m.site==="YouTube"&&m.key&&(m.type==="Trailer"||m.type==="Teaser"));n.push({...d,videoKey:h?h.key:null})}}catch(p){console.error(`Error fetching videos for TV series ${d.id}:`,p.message)}if(r++,!a.data.results.length||r>10)break}return n.slice(0,24)}catch(n){return console.error("Main error:",n.message),e.rejectWithValue(n.message)}}),i4=()=>{const t=$t(),[e,n]=$.useState(0),{popularContent:r,status:s}=$e(p=>p.popularR),a=["https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_01.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_02.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_03.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_04.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_05.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_01.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_02.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_03.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_04.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_05.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_01.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_02.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_03.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_04.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_05.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_01.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_02.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_03.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_04.webp","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_05.webp"];$.useEffect(()=>{t(Ho())},[t]);const l=s==="succeeded"&&r.length>0?r:a.map((p,h)=>({id:h+1,poster_path:p,media_type:"series"})),d=s==="succeeded"&&r.length>0?"인기 TOP 10":"인기 드라마";return u.jsxs(aE,{children:[u.jsx(lE,{children:u.jsx(uE,{children:d})}),u.jsx(cE,{children:u.jsx(s4,{spaceBetween:60,slidesPerView:3.5,centeredSlides:!1,onSlideChange:p=>n(p.realIndex),breakpoints:{390:{slidesPerView:1,spaceBetween:50},600:{slidesPerView:1.3,spaceBetween:15},768:{slidesPerView:2.3,spaceBetween:15},1024:{slidesPerView:3.3,spaceBetween:15}},children:l.map((p,h)=>{if(s==="succeeded"&&r.length>0){const m=p.poster_path?`https://image.tmdb.org/t/p/w500${p.poster_path}`:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/weeklyitem_01.webp";return u.jsx(It,{children:u.jsx(Wx,{image:m,rank:h+1,isMainSlide:h===e,id:p.id,mediaType:p.media_type})},p.id||h)}else return u.jsx(It,{children:u.jsx(Wx,{image:p.poster_path,rank:h+1,isMainSlide:h===e,id:p.id,mediaType:p.media_type})},h)})})})]})},s4=k(wn)`
    width: 100%;
    overflow: visible;

    .swiper-slide {
        overflow: visible;
    }
`,o4=k.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(1rem, 3vw, 3rem) 10px;
    padding: 60px 20px 60px 0;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: clamp(1rem, 2vw, 1rem) 10px;
        justify-items: center;
        padding: 40px 20px 40px 0;
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 0px;
        justify-items: center;
        padding: 30px 20px 30px 0;
    }
`,a4=k(lt).withConfig({shouldForwardProp:t=>t!=="ishighlighted"})`
    width: clamp(200px, 40vw, 435px);
    height: clamp(120px, 20vw, 183px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    border: 2px solid #009c8c;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: border-color 0.3s ease;

    background-color: ${({ishighlighted:t})=>"black"};
    &:hover {
        background-color: #009c8c;
        color: #191919;
    }
    @media (max-width: 1024px) {
        width: 27.1875rem;
        height: 7.4375rem;
    }
    .en {
        font-size: 2.5rem;
        font-weight: 700;
        background: linear-gradient(to bottom, #ffffff, #888888);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        @media (max-width: 1024px) {
            font-size: 24px;
        }
    }

    .ko {
        font-size: 1.5rem;
        color: ${({ishighlighted:t})=>"white"};
        /* margin-top: 0.5rem; */
        @media (max-width: 1024px) {
            font-size: 17px;
        }
    }

    .GenreText {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 600px) {
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
    }
    @media (max-width: 1024px) {
        width: clamp(180px, 45vw, 380px);
        /* height: clamp(100px, 18vw, 160px); */
    }

    @media (max-width: 600px) {
        width: 100%;
        height: 70%;
        padding: 15px;
        /* height: clamp(90px, 25vw, 140px); */
    }
`,rw=Jt({name:"genres",initialState:{genres:[],mainGenres:[],status:"idle",mainGenresStatus:"idle",error:null,selectedGenre:null,contentsByGenre:{},contentStatus:"idle",contentError:null},reducers:{setSelectedGenre:(t,e)=>{t.selectedGenre=e.payload}},extraReducers:t=>{t.addCase(cc.pending,e=>{e.status="loading"}).addCase(cc.fulfilled,(e,n)=>{e.status="succeeded",e.genres=n.payload}).addCase(cc.rejected,(e,n)=>{e.status="failed",e.error=n.error.message}).addCase(uc.pending,e=>{e.mainGenresStatus="loading"}).addCase(uc.fulfilled,(e,n)=>{e.mainGenresStatus="succeeded",e.mainGenres=n.payload}).addCase(uc.rejected,(e,n)=>{e.mainGenresStatus="failed",e.error=n.error.message}).addCase(Yo.pending,e=>{e.contentStatus="loading"}).addCase(Yo.fulfilled,(e,n)=>{e.contentStatus="succeeded",e.contentsByGenre[n.payload.genreId]=n.payload.results}).addCase(Yo.rejected,(e,n)=>{e.contentStatus="failed",e.contentError=n.error.message})}}),l4=rw.actions,c4=rw.reducer,u4={28:"ACTION",12:"ADVENTURE",16:"ANIMATION",35:"COMEDY",80:"CRIME",99:"DOCUMENTARY",18:"DRAMA",10751:"FAMILY",14:"FANTASY",36:"HISTORY",27:"HORROR",10402:"MUSICAL",9648:"MYSTERY",10749:"ROMANCE",878:"SCI-FI",10770:"TV MOVIE",53:"THRILLER",10752:"WAR",37:"WESTERN"},Vh=()=>{const t=$t(),{mainGenres:e,mainGenresStatus:n}=$e(l=>l.genreR);$.useEffect(()=>{e.length===0&&n==="idle"&&t(uc())},[t,e.length,n]);const r=$.useMemo(()=>e.map(l=>({id:l.id,ko:l.name,en:u4[l.id]||l.name.toUpperCase()})),[e]),s=[28,10402,14,878],a=l=>{t(l4.setSelectedGenre(l)),t(Yo({genreId:l}))};return n==="loading"?u.jsx("div",{children:"장르 로딩 중..."}):u.jsx(o4,{children:r.map(({id:l,en:d,ko:p})=>u.jsx(a4,{to:`/contents/all/${l}`,genre:d,ishighlighted:s.includes(l),onClick:()=>a(l),children:u.jsxs("div",{className:"GenreText",children:[u.jsx("span",{className:"en",children:d}),u.jsx("span",{className:"ko",children:p})]})},l))})},vv=({show:t})=>{if(!t)return u.jsx(p4,{children:"콘텐츠 없음"});const e=t.poster_path?`https://image.tmdb.org/t/p/w500${t.poster_path}`:"/mainhome/default_poster.webp";return u.jsx(iw,{children:u.jsx(d4,{src:e,alt:t.name||"콘텐츠 이미지"})})},iw=k.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 400px) {
        height: auto;
        width: 90%;
        margin: 0 auto;
        transform: scale(0.85);

        &:hover {
            transform: translateY(-3px) scale(0.85);
        }
    }
`,d4=k.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    transition: filter 0.3s;

    ${iw}:hover & {
        filter: brightness(0.7);
    }

    @media (max-width: 400px) {
        max-height: 170px;
        width: 85%;
        margin: 0 auto;
        display: block;
    }
`,p4=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    border-radius: 8px;
    height: 250px;
    color: #999;
    font-size: 0.9rem;

    @media (max-width: 400px) {
        height: 180px;
    }
`,f4=({activeDay:t,setActiveDay:e})=>{const{weeklyContent:n,isComplete:r}=$e(l=>l.weeklyR),s=["일","월","화","수","목","금","토"],a=l=>!r||!n||!n[l]?0:n[l].length;return u.jsx(h4,{children:s.map(l=>{const d=a(l),p=d>0;return u.jsxs(m4,{children:[u.jsx(g4,{className:l===t?"active":"",onClick:()=>e(l),disabled:!p&&r,$hasContent:p||!r,children:l}),p&&u.jsx(x4,{children:d})]},l)})})},h4=k.div`
    display: flex;
    justify-content: center;
    gap: clamp(15px, 2vw, 25px);
    padding: 10px;

    @media (max-width: 1024px) {
        gap: 15px;
    }
`,m4=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`,g4=k.button`
    width: clamp(50px, 3.5vw, 56px);
    height: clamp(50px, 3.5vw, 56px);
    border-radius: 50%;
    border: 2px solid ${t=>t.$hasContent?"#a8a9ad":"#555"};
    background-color: ${t=>t.$hasContent?"#333":"#222"};
    color: ${t=>t.$hasContent?"white":"#666"};
    font-size: clamp(1rem, 1vw, 1rem);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${t=>t.$hasContent?"pointer":"not-allowed"};
    transition: all 0.3s ease-in-out;
    opacity: ${t=>t.$hasContent?1:.7};

    &:hover {
        border-color: ${t=>t.$hasContent?"#07ffe6":"#555"};
        color: ${t=>t.$hasContent?"#07ffe6":"#666"};
    }

    &.active {
        background-color: #07ffe6;
        color: black;
        border-color: #07ffe6;
        box-shadow: 0px 0px 15px rgba(7, 255, 230, 0.7);
        opacity: 1;
    }

    @media (max-width: 1024px) {
        width: clamp(40px, 4vw, 45px);
        height: clamp(40px, 4vw, 45px);
        font-size: clamp(0.875rem, 1vw, 1.3rem);
    }
`,x4=k.span`
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #07ffe6;
    color: black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`,v4=()=>{const[t,e]=$.useState("일"),{weeklyContent:n,loading:r,isComplete:s}=$e(d=>d.weeklyR),[a,l]=$.useState([]);return $.useEffect(()=>{s&&n&&n[t]&&l(n[t]||[])},[s,n,t]),u.jsxs(y4,{children:[u.jsxs(w4,{children:[u.jsx(S4,{children:u.jsx(b4,{children:"VIBO 신작 업데이트"})}),u.jsx(f4,{activeDay:t,setActiveDay:e})]}),r?u.jsx(k4,{children:"콘텐츠를 로딩 중입니다..."}):u.jsx(_4,{slidesPerView:1.25,spaceBetween:25,breakpoints:{1280:{slidesPerView:5.5,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:30},600:{slidesPerView:2.5,spaceBetween:20},400:{slidesPerView:1.8,spaceBetween:20}},children:a.length>0?a.map(d=>u.jsx(It,{children:u.jsx(j4,{children:u.jsx(lt,{to:`/detail/series/${d.id}`,children:u.jsx(vv,{show:d})})})},d.id)):u.jsx(It,{children:u.jsx(vv,{})})})]})},y4=k.section`
    display: flex;
    flex-direction: column;
    padding: 60px 0 60px 0;
    @media (max-width: 1024px) {
        padding: 40px 0 40px 0;
    }
    @media (max-width: 600px) {
        padding: 30px 0 30px 0;
    }
`,w4=k.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2.375rem;
    gap: 0.5rem;
    flex-direction: column;
`,b4=k.h3`
    color: #fff;
    font-weight: 900;
    white-space: nowrap;
    padding: 0 10px;
    font-size: var(--title-xlarge-size);
    font-weight: var(--title-xlarge-weight);
    @media (max-width: 1024px) {
        font-size: var(--title-large-mobile);
        font-weight: var(--title-large-weigh);
    }
    @media (max-width: 600px) {
        font-size: var(--title-small-mobile);
        font-weight: var(--title-xsmall-weight);
    }
`,_4=k(wn)`
    width: 100%;
    max-width: 100%;

    .swiper-pagination-bullet {
        background-color: #fff;
        opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
        background-color: #1ee0b6;
        opacity: 1;
    }

    @media (max-width: 1024px) {
        overflow: hidden;
    }

    @media (max-width: 400px) {
        padding: 0 15px;
        overflow: visible;
    }
`,S4=k.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`,k4=k.div`
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
`,j4=k.div`
    width: 100%;

    @media (max-width: 400px) {
        width: 78%;
        margin: 0 auto;
    }
`,C4=k.div`
  width: 100%;
  height: 28.6875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 60px 0 60px 0;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    height: 25rem;
    margin: 40px 0 40px 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 20rem;
    margin: 20px 0 20px 0;
  }
`,E4=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1024px) {
    width: 100%;
    height: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`,T4=()=>u.jsx(C4,{children:u.jsx(E4,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/sample/adBannerSample.png",alt:"배너 이미지 파친코"})}),Fc=k.div`
  /* max-width: 1820px; */
  width: 100%;
  margin: 60px 0 60px 0;
  padding: 0 0 0 50px;

  display: flex;
  flex-direction: column;
  /* gap: 100px; */
  @media (max-width: 1024px) {
    padding: 0 0 0 20px; // 1024px 이하에서 좌우 패딩 조정
    /* gap: 40px; // 간격 줄이기 */
  }

  @media (max-width: 600px) {
    padding: 0 0 0 20px; // 600px 이하에서 더 작은 패딩 적용
    /* gap: 20px; // 간격 더 줄이기 */
    /* & > *:nth-child(1) {
      margin: 1;
    } */
    // 첫 번째 컴포넌트만 margin 0
  }
  /* 
  @media (max-width: 1200px) {
    padding: 0 40px;
    gap: 40px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 20px;
  } */
`,Kr=k.div`
  padding-top: 100px;
  /* @media (max-width: 1024px) {
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
  } */
`,I4=k.div`
  /* width: 34.375rem; */
  height: 710px;
  background-color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`,R4=k.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;
  border-radius: 0.5rem;
`,$4=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 13px;
`,P4=k.h2`
  font-size: 50px;
  font-weight: 900;
  color: #fff;
  line-height: 100%;
`,z4=k.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 15px;
`,Qp=k.span`
  font-size: 1.0625rem; /* 17px */
  padding: 16px 16px; /* 위아래 7.5px, 좌우 10px */
  height: 1.6875rem; /* 27px */
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  white-space: nowrap;
`,M4=k.p`
  font-size: 1.0625rem;
  color: #939598;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 최대 3줄 */
  -webkit-box-orient: vertical;
`,sw=k.div`
  display: flex;
  flex-direction: ${t=>t.$flexDirection};
  align-items: ${t=>t.$alignItems};
  justify-content: ${t=>t.$justifyContent};
  gap: ${t=>t.$gap};
  padding: ${t=>t.$padding?t.$padding:""};
  position: ${t=>t.$position};
  width: ${t=>t.$width||"auto"};
  border-top: ${t=>t.$borderTop};
  white-space: ${t=>t.$whiteSpace};
  font-size: ${t=>t.$fontSize};

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    white-space: nowrap; /* 텍스트가 한 줄로 표시되도록 설정 */
    overflow: hidden; /* 넘치는 텍스트는 보이지 않도록 숨김 */
  }
`,ow=k.span`
  font-size: 120px;
  font-weight: 900;
  line-height: 100%;
  font-style: italic;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 48px;
  }
`,N4=({content:t})=>{var n;if(!t)return null;const e=r=>({28:"액션",12:"모험",16:"애니메이션",35:"코미디",80:"범죄",99:"다큐멘터리",18:"드라마",10751:"가족",14:"판타지",36:"역사",27:"공포",10402:"음악",9648:"미스터리",10749:"로맨스",878:"SF",10770:"TV 영화",53:"스릴러",10752:"전쟁",37:"서부"})[r]||"기타";return u.jsxs(I4,{children:[u.jsx(R4,{src:`https://image.tmdb.org/t/p/original${t.posterPath}`,alt:t.title}),u.jsxs($4,{children:[u.jsxs(sw,{$alignItems:"baseline",$gap:"20px",$padding:"15px 0",children:[u.jsx(ow,{children:"1"}),u.jsx(P4,{children:t.title})]}),u.jsxs(z4,{children:[u.jsx(Qp,{children:t.releaseYear}),u.jsx(Qp,{children:(n=t.genres)==null?void 0:n.map(r=>e(r)).join(", ")}),u.jsx(Qp,{children:t.adult?"청소년 관람불가":"전체 관람가"})]}),u.jsx(M4,{children:t.overview})]})]})},O4=k.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
`,L4=k.div`
  width: 39.6875rem;
  height: 21.875rem;
  background-color: #000;
  padding: 0.9375rem;
  display: flex;
  gap: 2rem;
  border-radius: 0.5rem;
`,A4=k.img`
  /* width: 18.125rem;  */
  height: 100%; /* 290px */
  object-fit: cover;
  border-radius: 0.5rem;
`,D4=k.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.8rem;
  width: 355px;
`,F4=k.h2`
  font-size: 2.125rem; /* 34px */
  font-weight: 900; /* Pretendard Heavy */
  font-family: 'Pretendard', sans-serif;
  color: #fff;
  margin: 0;
`,B4=k.div`
  gap: 10px;
  display: flex;
  /* width: 355px; */
`,Zp=k.div`
  font-size: 15px;
  padding: 15px;
  height: 1.6875rem;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  white-space: nowrap;
`,V4=k.p`
  font-size: 1.0625rem; /* 17px */
  color: #939598;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin: 0;
`,W4=k.div`
  display: flex;
  flex-direction: ${t=>t.$flexDirection};
  align-items: ${t=>t.$alignItems};
  justify-content: ${t=>t.$justifyContent};
  gap: ${t=>t.$gap};
  padding: ${t=>t.$padding?t.$padding:""};
  position: ${t=>t.$position};
  width: ${t=>t.$width||"auto"};
  border-top: ${t=>t.$borderTop};
  white-space: ${t=>t.$whiteSpace};
  font-size: ${t=>t.$fontSize};
`,U4=k.span`
  font-size: 6.25rem;
  font-weight: 900;
  line-height: 100%;
  font-style: italic;
`,G4=({content:t})=>{const e=n=>({28:"액션",12:"모험",16:"애니메이션",35:"코미디",80:"범죄",99:"다큐멘터리",18:"드라마",10751:"가족",14:"판타지",36:"역사",27:"공포",10402:"음악",9648:"미스터리",10749:"로맨스",878:"SF",10770:"TV 영화",53:"스릴러",10752:"전쟁",37:"서부"})[n]||"기타";return u.jsx(O4,{children:t==null?void 0:t.map((n,r)=>{var s;return u.jsxs(L4,{children:[u.jsx(A4,{src:`https://image.tmdb.org/t/p/original${n.posterPath}`,alt:n.title}),u.jsxs(D4,{children:[u.jsxs(W4,{$alignItems:"flex-end",$gap:"20px",$padding:"20px 20px 20px 0",children:[u.jsx(U4,{children:r+2}),u.jsx(F4,{children:n.title})]}),u.jsxs(B4,{children:[u.jsx(Zp,{children:n.releaseYear}),u.jsx(Zp,{children:((s=n.genres)==null?void 0:s.slice(0,2).map(a=>e(a)).join(", "))||"장르 없음"}),u.jsx(Zp,{children:n.adult?"청소년 관람불가":"전체 관람가"})]}),u.jsx(V4,{children:n.overview})]})]},n.id)})})};function aw(t,e,n,r){return t.params.createElements&&Object.keys(r).forEach(s=>{if(!n[s]&&n.auto===!0){let a=Un(t.el,`.${r[s]}`)[0];a||(a=Rc("div",r[s]),a.className=r[s],t.el.append(a)),n[s]=a,e[s]=a}}),n}function lw(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function a(b){let _;return b&&typeof b=="string"&&e.isElement&&(_=e.el.querySelector(b)||e.hostEl.querySelector(b),_)?_:(b&&(typeof b=="string"&&(_=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&_&&_.length>1&&e.el.querySelectorAll(b).length===1?_=e.el.querySelector(b):_&&_.length===1&&(_=_[0])),b&&!_?b:_)}function l(b,_){const C=e.params.navigation;b=ft(b),b.forEach(E=>{E&&(E.classList[_?"add":"remove"](...C.disabledClass.split(" ")),E.tagName==="BUTTON"&&(E.disabled=_),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](C.lockClass))})}function d(){const{nextEl:b,prevEl:_}=e.navigation;if(e.params.loop){l(_,!1),l(b,!1);return}l(_,e.isBeginning&&!e.params.rewind),l(b,e.isEnd&&!e.params.rewind)}function p(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function h(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function m(){const b=e.params.navigation;if(e.params.navigation=aw(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let _=a(b.nextEl),C=a(b.prevEl);Object.assign(e.navigation,{nextEl:_,prevEl:C}),_=ft(_),C=ft(C);const E=(S,j)=>{S&&S.addEventListener("click",j==="next"?h:p),!e.enabled&&S&&S.classList.add(...b.lockClass.split(" "))};_.forEach(S=>E(S,"next")),C.forEach(S=>E(S,"prev"))}function x(){let{nextEl:b,prevEl:_}=e.navigation;b=ft(b),_=ft(_);const C=(E,S)=>{E.removeEventListener("click",S==="next"?h:p),E.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(E=>C(E,"next")),_.forEach(E=>C(E,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?w():(m(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{x()}),r("enable disable",()=>{let{nextEl:b,prevEl:_}=e.navigation;if(b=ft(b),_=ft(_),e.enabled){d();return}[...b,..._].filter(C=>!!C).forEach(C=>C.classList.add(e.params.navigation.lockClass))}),r("click",(b,_)=>{let{nextEl:C,prevEl:E}=e.navigation;C=ft(C),E=ft(E);const S=_.target;let j=E.includes(S)||C.includes(S);if(e.isElement&&!j){const I=_.path||_.composedPath&&_.composedPath();I&&(j=I.find(R=>C.includes(R)||E.includes(R)))}if(e.params.navigation.hideOnClick&&!j){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===S||e.pagination.el.contains(S)))return;let I;C.length?I=C[0].classList.contains(e.params.navigation.hiddenClass):E.length&&(I=E[0].classList.contains(e.params.navigation.hiddenClass)),s(I===!0?"navigationShow":"navigationHide"),[...C,...E].filter(R=>!!R).forEach(R=>R.classList.toggle(e.params.navigation.hiddenClass))}});const y=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),d()},w=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),x()};Object.assign(e.navigation,{enable:y,disable:w,update:d,init:m,destroy:x})}function To(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function cw(t){let{swiper:e,extendParams:n,on:r,emit:s}=t;const a="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:S=>S,formatFractionTotal:S=>S,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let l,d=0;function p(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function h(S,j){const{bulletActiveClass:I}=e.params.pagination;S&&(S=S[`${j==="prev"?"previous":"next"}ElementSibling`],S&&(S.classList.add(`${I}-${j}`),S=S[`${j==="prev"?"previous":"next"}ElementSibling`],S&&S.classList.add(`${I}-${j}-${j}`)))}function m(S,j,I){if(S=S%I,j=j%I,j===S+1)return"next";if(j===S-1)return"previous"}function x(S){const j=S.target.closest(To(e.params.pagination.bulletClass));if(!j)return;S.preventDefault();const I=$c(j)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===I)return;const R=m(e.realIndex,I,e.slides.length);R==="next"?e.slideNext():R==="previous"?e.slidePrev():e.slideToLoop(I)}else e.slideTo(I)}function y(){const S=e.rtl,j=e.params.pagination;if(p())return;let I=e.pagination.el;I=ft(I);let R,z;const N=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,L=e.params.loop?Math.ceil(N/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(z=e.previousRealIndex||0,R=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(R=e.snapIndex,z=e.previousSnapIndex):(z=e.previousIndex||0,R=e.activeIndex||0),j.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const O=e.pagination.bullets;let B,Y,X;if(j.dynamicBullets&&(l=Ff(O[0],e.isHorizontal()?"width":"height"),I.forEach(J=>{J.style[e.isHorizontal()?"width":"height"]=`${l*(j.dynamicMainBullets+4)}px`}),j.dynamicMainBullets>1&&z!==void 0&&(d+=R-(z||0),d>j.dynamicMainBullets-1?d=j.dynamicMainBullets-1:d<0&&(d=0)),B=Math.max(R-d,0),Y=B+(Math.min(O.length,j.dynamicMainBullets)-1),X=(Y+B)/2),O.forEach(J=>{const ne=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(ie=>`${j.bulletActiveClass}${ie}`)].map(ie=>typeof ie=="string"&&ie.includes(" ")?ie.split(" "):ie).flat();J.classList.remove(...ne)}),I.length>1)O.forEach(J=>{const ne=$c(J);ne===R?J.classList.add(...j.bulletActiveClass.split(" ")):e.isElement&&J.setAttribute("part","bullet"),j.dynamicBullets&&(ne>=B&&ne<=Y&&J.classList.add(...`${j.bulletActiveClass}-main`.split(" ")),ne===B&&h(J,"prev"),ne===Y&&h(J,"next"))});else{const J=O[R];if(J&&J.classList.add(...j.bulletActiveClass.split(" ")),e.isElement&&O.forEach((ne,ie)=>{ne.setAttribute("part",ie===R?"bullet-active":"bullet")}),j.dynamicBullets){const ne=O[B],ie=O[Y];for(let ce=B;ce<=Y;ce+=1)O[ce]&&O[ce].classList.add(...`${j.bulletActiveClass}-main`.split(" "));h(ne,"prev"),h(ie,"next")}}if(j.dynamicBullets){const J=Math.min(O.length,j.dynamicMainBullets+4),ne=(l*J-l)/2-X*l,ie=S?"right":"left";O.forEach(ce=>{ce.style[e.isHorizontal()?ie:"top"]=`${ne}px`})}}I.forEach((O,B)=>{if(j.type==="fraction"&&(O.querySelectorAll(To(j.currentClass)).forEach(Y=>{Y.textContent=j.formatFractionCurrent(R+1)}),O.querySelectorAll(To(j.totalClass)).forEach(Y=>{Y.textContent=j.formatFractionTotal(L)})),j.type==="progressbar"){let Y;j.progressbarOpposite?Y=e.isHorizontal()?"vertical":"horizontal":Y=e.isHorizontal()?"horizontal":"vertical";const X=(R+1)/L;let J=1,ne=1;Y==="horizontal"?J=X:ne=X,O.querySelectorAll(To(j.progressbarFillClass)).forEach(ie=>{ie.style.transform=`translate3d(0,0,0) scaleX(${J}) scaleY(${ne})`,ie.style.transitionDuration=`${e.params.speed}ms`})}j.type==="custom"&&j.renderCustom?(O.innerHTML=j.renderCustom(e,R+1,L),B===0&&s("paginationRender",O)):(B===0&&s("paginationRender",O),s("paginationUpdate",O)),e.params.watchOverflow&&e.enabled&&O.classList[e.isLocked?"add":"remove"](j.lockClass)})}function w(){const S=e.params.pagination;if(p())return;const j=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let I=e.pagination.el;I=ft(I);let R="";if(S.type==="bullets"){let z=e.params.loop?Math.ceil(j/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&z>j&&(z=j);for(let N=0;N<z;N+=1)S.renderBullet?R+=S.renderBullet.call(e,N,S.bulletClass):R+=`<${S.bulletElement} ${e.isElement?'part="bullet"':""} class="${S.bulletClass}"></${S.bulletElement}>`}S.type==="fraction"&&(S.renderFraction?R=S.renderFraction.call(e,S.currentClass,S.totalClass):R=`<span class="${S.currentClass}"></span> / <span class="${S.totalClass}"></span>`),S.type==="progressbar"&&(S.renderProgressbar?R=S.renderProgressbar.call(e,S.progressbarFillClass):R=`<span class="${S.progressbarFillClass}"></span>`),e.pagination.bullets=[],I.forEach(z=>{S.type!=="custom"&&(z.innerHTML=R||""),S.type==="bullets"&&e.pagination.bullets.push(...z.querySelectorAll(To(S.bulletClass)))}),S.type!=="custom"&&s("paginationRender",I[0])}function b(){e.params.pagination=aw(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const S=e.params.pagination;if(!S.el)return;let j;typeof S.el=="string"&&e.isElement&&(j=e.el.querySelector(S.el)),!j&&typeof S.el=="string"&&(j=[...document.querySelectorAll(S.el)]),j||(j=S.el),!(!j||j.length===0)&&(e.params.uniqueNavElements&&typeof S.el=="string"&&Array.isArray(j)&&j.length>1&&(j=[...e.el.querySelectorAll(S.el)],j.length>1&&(j=j.find(I=>i1(I,".swiper")[0]===e.el))),Array.isArray(j)&&j.length===1&&(j=j[0]),Object.assign(e.pagination,{el:j}),j=ft(j),j.forEach(I=>{S.type==="bullets"&&S.clickable&&I.classList.add(...(S.clickableClass||"").split(" ")),I.classList.add(S.modifierClass+S.type),I.classList.add(e.isHorizontal()?S.horizontalClass:S.verticalClass),S.type==="bullets"&&S.dynamicBullets&&(I.classList.add(`${S.modifierClass}${S.type}-dynamic`),d=0,S.dynamicMainBullets<1&&(S.dynamicMainBullets=1)),S.type==="progressbar"&&S.progressbarOpposite&&I.classList.add(S.progressbarOppositeClass),S.clickable&&I.addEventListener("click",x),e.enabled||I.classList.add(S.lockClass)}))}function _(){const S=e.params.pagination;if(p())return;let j=e.pagination.el;j&&(j=ft(j),j.forEach(I=>{I.classList.remove(S.hiddenClass),I.classList.remove(S.modifierClass+S.type),I.classList.remove(e.isHorizontal()?S.horizontalClass:S.verticalClass),S.clickable&&(I.classList.remove(...(S.clickableClass||"").split(" ")),I.removeEventListener("click",x))})),e.pagination.bullets&&e.pagination.bullets.forEach(I=>I.classList.remove(...S.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const S=e.params.pagination;let{el:j}=e.pagination;j=ft(j),j.forEach(I=>{I.classList.remove(S.horizontalClass,S.verticalClass),I.classList.add(e.isHorizontal()?S.horizontalClass:S.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?E():(b(),w(),y())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&y()}),r("snapIndexChange",()=>{y()}),r("snapGridLengthChange",()=>{w(),y()}),r("destroy",()=>{_()}),r("enable disable",()=>{let{el:S}=e.pagination;S&&(S=ft(S),S.forEach(j=>j.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{y()}),r("click",(S,j)=>{const I=j.target,R=ft(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&R&&R.length>0&&!I.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&I===e.navigation.nextEl||e.navigation.prevEl&&I===e.navigation.prevEl))return;const z=R[0].classList.contains(e.params.pagination.hiddenClass);s(z===!0?"paginationShow":"paginationHide"),R.forEach(N=>N.classList.toggle(e.params.pagination.hiddenClass))}});const C=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:S}=e.pagination;S&&(S=ft(S),S.forEach(j=>j.classList.remove(e.params.pagination.paginationDisabledClass))),b(),w(),y()},E=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:S}=e.pagination;S&&(S=ft(S),S.forEach(j=>j.classList.add(e.params.pagination.paginationDisabledClass))),_()};Object.assign(e.pagination,{enable:C,disable:E,render:w,update:y,init:b,destroy:_})}function H4(t){let{swiper:e,extendParams:n,on:r,emit:s,params:a}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,d,p=a&&a.autoplay?a.autoplay.delay:3e3,h=a&&a.autoplay?a.autoplay.delay:3e3,m,x=new Date().getTime(),y,w,b,_,C,E,S;function j(H){!e||e.destroyed||!e.wrapperEl||H.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",j),!(S||H.detail&&H.detail.bySwiperTouchMove)&&B())}const I=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?y=!0:y&&(h=m,y=!1);const H=e.autoplay.paused?m:x+h-new Date().getTime();e.autoplay.timeLeft=H,s("autoplayTimeLeft",H,H/p),d=requestAnimationFrame(()=>{I()})},R=()=>{let H;return e.virtual&&e.params.virtual.enabled?H=e.slides.find(Q=>Q.classList.contains("swiper-slide-active")):H=e.slides[e.activeIndex],H?parseInt(H.getAttribute("data-swiper-autoplay"),10):void 0},z=H=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(d),I();let ee=typeof H>"u"?e.params.autoplay.delay:H;p=e.params.autoplay.delay,h=e.params.autoplay.delay;const Q=R();!Number.isNaN(Q)&&Q>0&&typeof H>"u"&&(ee=Q,p=Q,h=Q),m=ee;const D=e.params.speed,G=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),s("autoplay")),e.params.cssMode&&(x=new Date().getTime(),requestAnimationFrame(()=>{z()})))};return ee>0?(clearTimeout(l),l=setTimeout(()=>{G()},ee)):requestAnimationFrame(()=>{G()}),ee},N=()=>{x=new Date().getTime(),e.autoplay.running=!0,z(),s("autoplayStart")},L=()=>{e.autoplay.running=!1,clearTimeout(l),cancelAnimationFrame(d),s("autoplayStop")},O=(H,ee)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(l),H||(E=!0);const Q=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",j):B()};if(e.autoplay.paused=!0,ee){C&&(m=e.params.autoplay.delay),C=!1,Q();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-x),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),Q())},B=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(x=new Date().getTime(),E?(E=!1,z(m)):z(),e.autoplay.paused=!1,s("autoplayResume"))},Y=()=>{if(e.destroyed||!e.autoplay.running)return;const H=Hn();H.visibilityState==="hidden"&&(E=!0,O(!0)),H.visibilityState==="visible"&&B()},X=H=>{H.pointerType==="mouse"&&(E=!0,S=!0,!(e.animating||e.autoplay.paused)&&O(!0))},J=H=>{H.pointerType==="mouse"&&(S=!1,e.autoplay.paused&&B())},ne=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",X),e.el.addEventListener("pointerleave",J))},ie=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",X),e.el.removeEventListener("pointerleave",J))},ce=()=>{Hn().addEventListener("visibilitychange",Y)},pe=()=>{Hn().removeEventListener("visibilitychange",Y)};r("init",()=>{e.params.autoplay.enabled&&(ne(),ce(),N())}),r("destroy",()=>{ie(),pe(),e.autoplay.running&&L()}),r("_freeModeStaticRelease",()=>{(b||E)&&B()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?L():O(!0,!0)}),r("beforeTransitionStart",(H,ee,Q)=>{e.destroyed||!e.autoplay.running||(Q||!e.params.autoplay.disableOnInteraction?O(!0,!0):L())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){L();return}w=!0,b=!1,E=!1,_=setTimeout(()=>{E=!0,b=!0,O(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!w)){if(clearTimeout(_),clearTimeout(l),e.params.autoplay.disableOnInteraction){b=!1,w=!1;return}b&&e.params.cssMode&&B(),b=!1,w=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(C=!0)}),Object.assign(e.autoplay,{start:N,stop:L,pause:O,resume:B})}const Y4=k.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  width: 1750px;
  padding: 60px 0px 60px 0px;
  margin-left: -60px;
`,J4=k.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: 60px 50px 60px 50px; */
  @media (max-width: 1024px) {
    padding: 40px 0 40px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0 30px 0;
  }
`,uw=k.div`
  display: flex;
  color: white;

  margin-top: 40px;
  text-align: center;
  flex-direction: column;
  font-size: var(--title-xlarge-size);
  font-weight: var(--title-xlarge-weight); //800
  /*text-overflow: ellipsis; 왜 안먹음.. */

  @media (max-width: 1024px) {
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
    text-align: 10px;
  }

  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`,q4=k.div`
  width: 600px; /* 밑줄 길이 */
  height: 3px; /* 밑줄 두께 */
  background: white; /* 밑줄 색상 */
  margin-top: 30px;
  align-self: center;

  @media (max-width: 1024px) {
    width: 80%;
    height: 2px;
    align-self: center;
    margin-top: 20px;
  }
`,Q4=k.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100vh;
  }
`,Z4=k.div`
  background: black;
  border-radius: 16px;
  padding: 16px;
  /* display: flex
; */
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-height: 800px; */
  margin: 0 auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1024px) {
    width: 100%;
    /* max-height: 100%; */
  }
`,K4=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
    max-height: 100%;
  }
`;k.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 12px;
`;const X4=k.img`
  width: 100%;
  height: 100px;
  border-radius: 12px;
`,e3=k.div`
  color: #fff;
  @media (max-width: 1024px) {
    width: 300px;
    max-height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 1024px) {
    width: 266px;
    max-height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`,t3=k.div`
  display: flex;
`;k.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  @media (max-width: 1024px) {
    font-size: 12px;
    font-weight: bold;
  }
`;const n3=k.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 8px;

  @media (max-width: 1024px) {
    gap: 10px;
    margin-bottom: 6px;
    justify-content: flex-start;
  }
`,Kp=k.span`
  background: #444;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  @media (max-width: 1024px) {
    font-size: 10px;
    gap: 15px;
    margin-bottom: 6px;
    display: flex;
    justify-content: flex-start;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`,r3=k.p`
  font-size: 14px;
  color: #bbb;
  max-width: 400px;
  height: auto;
  @media (max-width: 1024px) {
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* 최대 3줄 표시 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,i3=({content:t})=>{const e=n=>({28:"액션",12:"모험",16:"애니메이션",35:"코미디",80:"범죄",99:"다큐멘터리",18:"드라마",10751:"가족",14:"판타지",36:"역사",27:"공포",10402:"음악",9648:"미스터리",10749:"로맨스",878:"SF",10770:"TV 영화",53:"스릴러",10752:"전쟁",37:"서부"})[n]||"기타";return u.jsx(u.Fragment,{children:u.jsx(Q4,{children:u.jsx(wn,{spaceBetween:3,centeredSlides:!1,loop:!0,breakpoints:{390:{slidesPerView:1.3,spaceBetween:10},600:{slidesPerView:2.3,spaceBetween:15},768:{slidesPerView:2.3,spaceBetween:15},1024:{slidesPerView:3.3,spaceBetween:15}},children:t==null?void 0:t.map((n,r)=>{var s;return u.jsx(It,{children:u.jsx(s3,{children:u.jsxs(K4,{children:[u.jsx(o3,{src:n.posterPath?`https://image.tmdb.org/t/p/original${n.posterPath}`:"/fallback-image.png",alt:n.title}),u.jsx(a3,{children:u.jsxs(e3,{children:[u.jsxs(sw,{children:[u.jsx(ow,{children:r+1}),u.jsx(uw,{children:n.title})]}),u.jsxs(n3,{children:[u.jsx(Kp,{children:n.releaseYear}),u.jsx(Kp,{children:((s=n.genres)==null?void 0:s.slice(0,2).map(a=>e(a)).join(", "))||"장르 없음"}),u.jsx(Kp,{children:n.adult?"청소년 관람불가":"전체 관람가"})]}),u.jsx(r3,{children:n.overview})]})})]})})},n.id)})})})})},s3=k(Z4)`
  max-width: 500px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
  flex-shrink: 0;
`,o3=k(X4)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`,a3=k(t3)`
  flex-grow: 1;
  padding: 15px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 12px;
  }
`,l3=()=>{const[t,e]=$.useState(!1);$.useEffect(()=>{const m=()=>{e(window.innerWidth<=1024)};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const n=$t(),{movies:r,tvShows:s,loading:a,error:l}=$e(m=>m.topRatedR);$.useEffect(()=>{n(Go())},[n]);const d=[...r||[],...s||[]].map(m=>{var x,y;return{id:m.id,rank:m.vote_average,title:m.mediaType==="movie"?m.title:m.name,overview:m.overview,releaseYear:m.mediaType==="movie"?(x=m.release_date)==null?void 0:x.split("-")[0]:(y=m.first_air_date)==null?void 0:y.split("-")[0],genres:m.genre_ids,adult:m.adult,mediaType:m.mediaType,posterPath:m.poster_path,backdropPath:m.backdrop_path}}).sort((m,x)=>x.rank-m.rank).slice(0,5),p=d[0],h=d.slice(1);return a?u.jsx("div",{children:"Loading..."}):l?u.jsxs("div",{children:["Error: ",l]}):u.jsx(u.Fragment,{children:u.jsxs(J4,{children:[u.jsxs(uw,{children:[u.jsx("h3",{children:"VIBO TOP 5"}),u.jsx(q4,{})]}),t?u.jsx(i3,{content:[p,...h]}):u.jsxs(Y4,{children:[u.jsx(N4,{content:p}),u.jsx(G4,{content:h})]})]})})},c3=({item:t})=>{const[e,n]=$.useState(!1),{name:r,ongo:s}=t;return u.jsx(u3,{$isHovered:e,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:s,children:r})},u3=k.div`
  width: 18.75rem;
  height: 31.25rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${t=>t.$isHovered?"linear-gradient(to bottom, var( --primary-base), var(--black))":"#333"};
  color: ${t=>t.$isHovered?"var(--white)":"var(--gray-700)"};
  @media (max-width: 1024px) {
    display: none;
  }
`,d3=k.div`
  background: black;
  text-align: center;

  padding: 60px 0 60px 0;
  @media (max-width: 1024px) {
    display: none;
  }
`,p3=k.div`
  color: var(--white);
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 70px;
  display: inline-block;
  @media (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`,f3=k.div`
  width: 1000px; /* 밑줄 길이 */
  height: 3px; /* 밑줄 두께 */
  background: white; /* 밑줄 색상 */
  margin-top: 30px; /* H2와의 간격 */
  align-self: center;
  @media (max-width: 1024px) {
    width: 60%;
  }
`,h3=k.div`
  /* display: flex;
  justify-content: center;
  gap: 40px;
  @media (max-width: 1024px) {
    gap: 20px;
  } */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    padding: 40px 40px;
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    padding: 40px 40px;
  }
`,m3=()=>{const t=tt(),a=[{id:1,name:"Series",ongo:()=>{t("/serieshome")}},{id:2,name:"Movie",ongo:()=>{t("/moviehome")}},{id:3,name:"LIVE",ongo:()=>{t("/livehome")}},{id:4,name:"VIBO PLUS",ongo:()=>{t("/")}}];return u.jsx(u.Fragment,{children:u.jsxs(d3,{children:[u.jsxs(p3,{children:[u.jsx("h2",{children:"지금, 다채로운 콘텐츠를 VIBO에서 찾아보세요."}),u.jsx(f3,{})]}),u.jsx(h3,{children:a.map(l=>u.jsx(c3,{text:"Series",item:l},l.id))})]})})};function cr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dw(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Es={duration:.5,overwrite:!1,delay:0},Wh,wt,Ve,Yn=1e8,Tt=1/Yn,th=Math.PI*2,g3=th/4,x3=0,pw=Math.sqrt,v3=Math.cos,y3=Math.sin,mt=function(e){return typeof e=="string"},qe=function(e){return typeof e=="function"},mr=function(e){return typeof e=="number"},Uh=function(e){return typeof e>"u"},qn=function(e){return typeof e=="object"},Wt=function(e){return e!==!1},Gh=function(){return typeof window<"u"},Dl=function(e){return qe(e)||mt(e)},fw=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,nh=/(?:-?\.?\d|\.)+/gi,hw=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mw=/[+-]=-?[.\d]+/,gw=/[^,'"\[\]\s]+/gi,w3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ge,Bn,rh,Hh,cn={},Bc={},xw,vw=function(e){return(Bc=Ts(e,cn))&&Yt},Yh=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},sa=function(e,n){return!n&&console.warn(e)},yw=function(e,n){return e&&(cn[e]=n)&&Bc&&(Bc[e]=n)||cn},oa=function(){return 0},b3={suppressEvents:!0,isStart:!0,kill:!1},xc={suppressEvents:!0,kill:!1},_3={suppressEvents:!0},Jh={},Gr=[],ih={},ww,tn={},ef={},yv=30,vc=[],qh="",Qh=function(e){var n=e[0],r,s;if(qn(n)||qe(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(s=vc.length;s--&&!vc[s].targetTest(n););r=vc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Uw(e[s],r)))||e.splice(s,1);return e},ji=function(e){return e._gsap||Qh(vn(e))[0]._gsap},bw=function(e,n,r){return(r=e[n])&&qe(r)?e[n]():Uh(r)&&e.getAttribute&&e.getAttribute(n)||r},Ut=function(e,n){return(e=e.split(",")).forEach(n)||e},Xe=function(e){return Math.round(e*1e5)/1e5||0},it=function(e){return Math.round(e*1e7)/1e7||0},ms=function(e,n){var r=n.charAt(0),s=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+s:r==="-"?e-s:r==="*"?e*s:e/s},S3=function(e,n){for(var r=n.length,s=0;e.indexOf(n[s])<0&&++s<r;);return s<r},Vc=function(){var e=Gr.length,n=Gr.slice(0),r,s;for(ih={},Gr.length=0,r=0;r<e;r++)s=n[r],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},_w=function(e,n,r,s){Gr.length&&!wt&&Vc(),e.render(n,r,wt&&n<0&&(e._initted||e._startAt)),Gr.length&&!wt&&Vc()},Sw=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(gw).length<2?n:mt(e)?e.trim():e},kw=function(e){return e},un=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},k3=function(e){return function(n,r){for(var s in r)s in n||s==="duration"&&e||s==="ease"||(n[s]=r[s])}},Ts=function(e,n){for(var r in n)e[r]=n[r];return e},wv=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=qn(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},Wc=function(e,n){var r={},s;for(s in e)s in n||(r[s]=e[s]);return r},Jo=function(e){var n=e.parent||Ge,r=e.keyframes?k3(Rt(e.keyframes)):un;if(Wt(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},j3=function(e,n){for(var r=e.length,s=r===n.length;s&&r--&&e[r]===n[r];);return r<0},jw=function(e,n,r,s,a){var l=e[s],d;if(a)for(d=n[a];l&&l[a]>d;)l=l._prev;return l?(n._next=l._next,l._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[s]=n,n._prev=l,n.parent=n._dp=e,n},xu=function(e,n,r,s){r===void 0&&(r="_first"),s===void 0&&(s="_last");var a=n._prev,l=n._next;a?a._next=l:e[r]===n&&(e[r]=l),l?l._prev=a:e[s]===n&&(e[s]=a),n._next=n._prev=n.parent=null},Qr=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ci=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},C3=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},sh=function(e,n,r,s){return e._startAt&&(wt?e._startAt.revert(xc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,s))},E3=function t(e){return!e||e._ts&&t(e.parent)},bv=function(e){return e._repeat?Is(e._tTime,e=e.duration()+e._rDelay)*e:0},Is=function(e,n){var r=Math.floor(e=it(e/n));return e&&r===e?r-1:r},Uc=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},vu=function(e){return e._end=it(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},yu=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=it(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),vu(e),r._dirty||Ci(r,e)),e},Cw=function(e,n){var r;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(r=Uc(e.rawTime(),n),(!n._dur||wa(0,n.totalDuration(),r)-n._tTime>Tt)&&n.render(r,!0)),Ci(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-1e-8}},Wn=function(e,n,r,s){return n.parent&&Qr(n),n._start=it((mr(r)?r:r||e!==Ge?xn(e,r,n):e._time)+n._delay),n._end=it(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),jw(e,n,"_first","_last",e._sort?"_start":0),oh(n)||(e._recent=n),s||Cw(e,n),e._ts<0&&yu(e,e._tTime),e},Ew=function(e,n){return(cn.ScrollTrigger||Yh("scrollTrigger",n))&&cn.ScrollTrigger.create(n,e)},Tw=function(e,n,r,s,a){if(Kh(e,n,a),!e._initted)return 1;if(!r&&e._pt&&!wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ww!==nn.frame)return Gr.push(e),e._lazy=[a,s],1},T3=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},oh=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},I3=function(e,n,r,s){var a=e.ratio,l=n<0||!n&&(!e._start&&T3(e)&&!(!e._initted&&oh(e))||(e._ts<0||e._dp._ts<0)&&!oh(e))?0:1,d=e._rDelay,p=0,h,m,x;if(d&&e._repeat&&(p=wa(0,e._tDur,n),m=Is(p,d),e._yoyo&&m&1&&(l=1-l),m!==Is(e._tTime,d)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||wt||s||e._zTime===Tt||!n&&e._zTime){if(!e._initted&&Tw(e,n,s,r,p))return;for(x=e._zTime,e._zTime=n||(r?Tt:0),r||(r=n&&!x),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=p,h=e._pt;h;)h.r(l,h.d),h=h._next;n<0&&sh(e,n,r,!0),e._onUpdate&&!r&&rn(e,"onUpdate"),p&&e._repeat&&!r&&e.parent&&rn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===l&&(l&&Qr(e,1),!r&&!wt&&(rn(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},R3=function(e,n,r){var s;if(r>n)for(s=e._first;s&&s._start<=r;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=e._last;s&&s._start>=r;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Rs=function(e,n,r,s){var a=e._repeat,l=it(n)||0,d=e._tTime/e._tDur;return d&&!s&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:it(l*(a+1)+e._rDelay*a):l,d>0&&!s&&yu(e,e._tTime=e._tDur*d),e.parent&&vu(e),r||Ci(e.parent,e),e},_v=function(e){return e instanceof Mt?Ci(e):Rs(e,e._dur)},$3={_start:0,endTime:oa,totalDuration:oa},xn=function t(e,n,r){var s=e.labels,a=e._recent||$3,l=e.duration()>=Yn?a.endTime(!1):e._dur,d,p,h;return mt(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),h=n.substr(-1)==="%",d=n.indexOf("="),p==="<"||p===">"?(d>=0&&(n=n.replace(/=/,"")),(p==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(h?(d<0?a:r).totalDuration()/100:1)):d<0?(n in s||(s[n]=l),s[n]):(p=parseFloat(n.charAt(d-1)+n.substr(d+1)),h&&r&&(p=p/100*(Rt(r)?r[0]:r).totalDuration()),d>1?t(e,n.substr(0,d-1),r)+p:l+p)):n==null?l:+n},qo=function(e,n,r){var s=mr(n[1]),a=(s?2:1)+(e<2?0:1),l=n[a],d,p;if(s&&(l.duration=n[1]),l.parent=r,e){for(d=l,p=r;p&&!("immediateRender"in d);)d=p.vars.defaults||{},p=Wt(p.vars.inherit)&&p.parent;l.immediateRender=Wt(d.immediateRender),e<2?l.runBackwards=1:l.startAt=n[a-1]}return new rt(n[0],l,n[a+1])},Xr=function(e,n){return e||e===0?n(e):n},wa=function(e,n,r){return r<e?e:r>n?n:r},Ct=function(e,n){return!mt(e)||!(n=w3.exec(e))?"":n[1]},P3=function(e,n,r){return Xr(r,function(s){return wa(e,n,s)})},ah=[].slice,Iw=function(e,n){return e&&qn(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&qn(e[0]))&&!e.nodeType&&e!==Bn},z3=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(s){var a;return mt(s)&&!n||Iw(s,1)?(a=r).push.apply(a,vn(s)):r.push(s)})||r},vn=function(e,n,r){return Ve&&!n&&Ve.selector?Ve.selector(e):mt(e)&&!r&&(rh||!$s())?ah.call((n||Hh).querySelectorAll(e),0):Rt(e)?z3(e,r):Iw(e)?ah.call(e,0):e?[e]:[]},lh=function(e){return e=vn(e)[0]||sa("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return vn(n,r.querySelectorAll?r:r===e?sa("Invalid scope")||Hh.createElement("div"):e)}},Rw=function(e){return e.sort(function(){return .5-Math.random()})},$w=function(e){if(qe(e))return e;var n=qn(e)?e:{each:e},r=Ei(n.ease),s=n.from||0,a=parseFloat(n.base)||0,l={},d=s>0&&s<1,p=isNaN(s)||d,h=n.axis,m=s,x=s;return mt(s)?m=x={center:.5,edges:.5,end:1}[s]||0:!d&&p&&(m=s[0],x=s[1]),function(y,w,b){var _=(b||n).length,C=l[_],E,S,j,I,R,z,N,L,O;if(!C){if(O=n.grid==="auto"?0:(n.grid||[1,Yn])[1],!O){for(N=-1e8;N<(N=b[O++].getBoundingClientRect().left)&&O<_;);O<_&&O--}for(C=l[_]=[],E=p?Math.min(O,_)*m-.5:s%O,S=O===Yn?0:p?_*x/O-.5:s/O|0,N=0,L=Yn,z=0;z<_;z++)j=z%O-E,I=S-(z/O|0),C[z]=R=h?Math.abs(h==="y"?I:j):pw(j*j+I*I),R>N&&(N=R),R<L&&(L=R);s==="random"&&Rw(C),C.max=N-L,C.min=L,C.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(O>_?_-1:h?h==="y"?_/O:O:Math.max(O,_/O))||0)*(s==="edges"?-1:1),C.b=_<0?a-_:a,C.u=Ct(n.amount||n.each)||0,r=r&&_<0?Bw(r):r}return _=(C[y]-C.min)/C.max||0,it(C.b+(r?r(_):_)*C.v)+C.u}},ch=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var s=it(Math.round(parseFloat(r)/e)*e*n);return(s-s%1)/n+(mr(r)?0:Ct(r))}},Pw=function(e,n){var r=Rt(e),s,a;return!r&&qn(e)&&(s=r=e.radius||Yn,e.values?(e=vn(e.values),(a=!mr(e[0]))&&(s*=s)):e=ch(e.increment)),Xr(n,r?qe(e)?function(l){return a=e(l),Math.abs(a-l)<=s?a:l}:function(l){for(var d=parseFloat(a?l.x:l),p=parseFloat(a?l.y:0),h=Yn,m=0,x=e.length,y,w;x--;)a?(y=e[x].x-d,w=e[x].y-p,y=y*y+w*w):y=Math.abs(e[x]-d),y<h&&(h=y,m=x);return m=!s||h<=s?e[m]:l,a||m===l||mr(l)?m:m+Ct(l)}:ch(e))},zw=function(e,n,r,s){return Xr(Rt(e)?!n:r===!0?!!(r=0):!s,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(s=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*s)/s})},M3=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(s){return n.reduce(function(a,l){return l(a)},s)}},N3=function(e,n){return function(r){return e(parseFloat(r))+(n||Ct(r))}},O3=function(e,n,r){return Nw(e,n,0,1,r)},Mw=function(e,n,r){return Xr(r,function(s){return e[~~n(s)]})},L3=function t(e,n,r){var s=n-e;return Rt(e)?Mw(e,t(0,e.length),n):Xr(r,function(a){return(s+(a-e)%s)%s+e})},A3=function t(e,n,r){var s=n-e,a=s*2;return Rt(e)?Mw(e,t(0,e.length-1),n):Xr(r,function(l){return l=(a+(l-e)%a)%a||0,e+(l>s?a-l:l)})},aa=function(e){for(var n=0,r="",s,a,l,d;~(s=e.indexOf("random(",n));)l=e.indexOf(")",s),d=e.charAt(s+7)==="[",a=e.substr(s+7,l-s-7).match(d?gw:nh),r+=e.substr(n,s-n)+zw(d?a:+a[0],d?0:+a[1],+a[2]||1e-5),n=l+1;return r+e.substr(n,e.length-n)},Nw=function(e,n,r,s,a){var l=n-e,d=s-r;return Xr(a,function(p){return r+((p-e)/l*d||0)})},D3=function t(e,n,r,s){var a=isNaN(e+n)?0:function(w){return(1-w)*e+w*n};if(!a){var l=mt(e),d={},p,h,m,x,y;if(r===!0&&(s=1)&&(r=null),l)e={p:e},n={p:n};else if(Rt(e)&&!Rt(n)){for(m=[],x=e.length,y=x-2,h=1;h<x;h++)m.push(t(e[h-1],e[h]));x--,a=function(b){b*=x;var _=Math.min(y,~~b);return m[_](b-_)},r=n}else s||(e=Ts(Rt(e)?[]:{},e));if(!m){for(p in n)Zh.call(d,e,p,"get",n[p]);a=function(b){return tm(b,d)||(l?e.p:e)}}}return Xr(r,a)},Sv=function(e,n,r){var s=e.labels,a=Yn,l,d,p;for(l in s)d=s[l]-n,d<0==!!r&&d&&a>(d=Math.abs(d))&&(p=l,a=d);return p},rn=function(e,n,r){var s=e.vars,a=s[n],l=Ve,d=e._ctx,p,h,m;if(a)return p=s[n+"Params"],h=s.callbackScope||e,r&&Gr.length&&Vc(),d&&(Ve=d),m=p?a.apply(h,p):a.call(h),Ve=l,m},Lo=function(e){return Qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wt),e.progress()<1&&rn(e,"onInterrupt"),e},fs,Ow=[],Lw=function(e){if(e)if(e=!e.name&&e.default||e,Gh()||e.headless){var n=e.name,r=qe(e),s=n&&!r&&e.init?function(){this._props=[]}:e,a={init:oa,render:tm,add:Zh,kill:tI,modifier:eI,rawVars:0},l={targetTest:0,get:0,getSetter:em,aliases:{},register:0};if($s(),e!==s){if(tn[n])return;un(s,un(Wc(e,a),l)),Ts(s.prototype,Ts(a,Wc(e,l))),tn[s.prop=n]=s,e.targetTest&&(vc.push(s),Jh[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}yw(n,s),e.register&&e.register(Yt,s,Gt)}else Ow.push(e)},Me=255,Ao={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},tf=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*Me+.5|0},Aw=function(e,n,r){var s=e?mr(e)?[e>>16,e>>8&Me,e&Me]:0:Ao.black,a,l,d,p,h,m,x,y,w,b;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ao[e])s=Ao[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),d=e.charAt(3),e="#"+a+a+l+l+d+d+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Me,s&Me,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Me,e&Me]}else if(e.substr(0,3)==="hsl"){if(s=b=e.match(nh),!n)p=+s[0]%360/360,h=+s[1]/100,m=+s[2]/100,l=m<=.5?m*(h+1):m+h-m*h,a=m*2-l,s.length>3&&(s[3]*=1),s[0]=tf(p+1/3,a,l),s[1]=tf(p,a,l),s[2]=tf(p-1/3,a,l);else if(~e.indexOf("="))return s=e.match(hw),r&&s.length<4&&(s[3]=1),s}else s=e.match(nh)||Ao.transparent;s=s.map(Number)}return n&&!b&&(a=s[0]/Me,l=s[1]/Me,d=s[2]/Me,x=Math.max(a,l,d),y=Math.min(a,l,d),m=(x+y)/2,x===y?p=h=0:(w=x-y,h=m>.5?w/(2-x-y):w/(x+y),p=x===a?(l-d)/w+(l<d?6:0):x===l?(d-a)/w+2:(a-l)/w+4,p*=60),s[0]=~~(p+.5),s[1]=~~(h*100+.5),s[2]=~~(m*100+.5)),r&&s.length<4&&(s[3]=1),s},Dw=function(e){var n=[],r=[],s=-1;return e.split(Hr).forEach(function(a){var l=a.match(ps)||[];n.push.apply(n,l),r.push(s+=l.length+1)}),n.c=r,n},kv=function(e,n,r){var s="",a=(e+s).match(Hr),l=n?"hsla(":"rgba(",d=0,p,h,m,x;if(!a)return e;if(a=a.map(function(y){return(y=Aw(y,n,1))&&l+(n?y[0]+","+y[1]+"%,"+y[2]+"%,"+y[3]:y.join(","))+")"}),r&&(m=Dw(e),p=r.c,p.join(s)!==m.c.join(s)))for(h=e.replace(Hr,"1").split(ps),x=h.length-1;d<x;d++)s+=h[d]+(~p.indexOf(d)?a.shift()||l+"0,0,0,0)":(m.length?m:a.length?a:r).shift());if(!h)for(h=e.split(Hr),x=h.length-1;d<x;d++)s+=h[d]+a[d];return s+h[x]},Hr=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ao)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),F3=/hsl[a]?\(/,Fw=function(e){var n=e.join(" "),r;if(Hr.lastIndex=0,Hr.test(n))return r=F3.test(n),e[1]=kv(e[1],r),e[0]=kv(e[0],r,Dw(e[1])),!0},la,nn=function(){var t=Date.now,e=500,n=33,r=t(),s=r,a=1e3/240,l=a,d=[],p,h,m,x,y,w,b=function _(C){var E=t()-s,S=C===!0,j,I,R,z;if((E>e||E<0)&&(r+=E-n),s+=E,R=s-r,j=R-l,(j>0||S)&&(z=++x.frame,y=R-x.time*1e3,x.time=R=R/1e3,l+=j+(j>=a?4:a-j),I=1),S||(p=h(_)),I)for(w=0;w<d.length;w++)d[w](R,y,z,C)};return x={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(C){return y/(1e3/(C||60))},wake:function(){xw&&(!rh&&Gh()&&(Bn=rh=window,Hh=Bn.document||{},cn.gsap=Yt,(Bn.gsapVersions||(Bn.gsapVersions=[])).push(Yt.version),vw(Bc||Bn.GreenSockGlobals||!Bn.gsap&&Bn||{}),Ow.forEach(Lw)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&x.sleep(),h=m||function(C){return setTimeout(C,l-x.time*1e3+1|0)},la=1,b(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(p),la=0,h=oa},lagSmoothing:function(C,E){e=C||1/0,n=Math.min(E||33,e)},fps:function(C){a=1e3/(C||240),l=x.time*1e3+a},add:function(C,E,S){var j=E?function(I,R,z,N){C(I,R,z,N),x.remove(j)}:C;return x.remove(C),d[S?"unshift":"push"](j),$s(),j},remove:function(C,E){~(E=d.indexOf(C))&&d.splice(E,1)&&w>=E&&w--},_listeners:d},x}(),$s=function(){return!la&&nn.wake()},je={},B3=/^[\d.\-M][\d.\-,\s]/,V3=/["']/g,W3=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),s=r[0],a=1,l=r.length,d,p,h;a<l;a++)p=r[a],d=a!==l-1?p.lastIndexOf(","):p.length,h=p.substr(0,d),n[s]=isNaN(h)?h.replace(V3,"").trim():+h,s=p.substr(d+1).trim();return n},U3=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),s=e.indexOf("(",n);return e.substring(n,~s&&s<r?e.indexOf(")",r+1):r)},G3=function(e){var n=(e+"").split("("),r=je[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[W3(n[1])]:U3(e).split(",").map(Sw)):je._CE&&B3.test(e)?je._CE("",e):r},Bw=function(e){return function(n){return 1-e(1-n)}},Vw=function t(e,n){for(var r=e._first,s;r;)r instanceof Mt?t(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?t(r.timeline,n):(s=r._ease,r._ease=r._yEase,r._yEase=s,r._yoyo=n)),r=r._next},Ei=function(e,n){return e&&(qe(e)?e:je[e]||G3(e))||n},Ni=function(e,n,r,s){r===void 0&&(r=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var a={easeIn:n,easeOut:r,easeInOut:s},l;return Ut(e,function(d){je[d]=cn[d]=a,je[l=d.toLowerCase()]=r;for(var p in a)je[l+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=je[d+"."+p]=a[p]}),a},Ww=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},nf=function t(e,n,r){var s=n>=1?n:1,a=(r||(e?.3:.45))/(n<1?n:1),l=a/th*(Math.asin(1/s)||0),d=function(m){return m===1?1:s*Math.pow(2,-10*m)*y3((m-l)*a)+1},p=e==="out"?d:e==="in"?function(h){return 1-d(1-h)}:Ww(d);return a=th/a,p.config=function(h,m){return t(e,h,m)},p},rf=function t(e,n){n===void 0&&(n=1.70158);var r=function(l){return l?--l*l*((n+1)*l+n)+1:0},s=e==="out"?r:e==="in"?function(a){return 1-r(1-a)}:Ww(r);return s.config=function(a){return t(e,a)},s};Ut("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Ni(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Ni("Elastic",nf("in"),nf("out"),nf());(function(t,e){var n=1/e,r=2*n,s=2.5*n,a=function(d){return d<n?t*d*d:d<r?t*Math.pow(d-1.5/e,2)+.75:d<s?t*(d-=2.25/e)*d+.9375:t*Math.pow(d-2.625/e,2)+.984375};Ni("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);Ni("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Ni("Circ",function(t){return-(pw(1-t*t)-1)});Ni("Sine",function(t){return t===1?1:-v3(t*g3)+1});Ni("Back",rf("in"),rf("out"),rf());je.SteppedEase=je.steps=cn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,s=e+(n?0:1),a=n?1:0,l=1-Tt;return function(d){return((s*wa(0,l,d)|0)+a)*r}}};Es.ease=je["quad.out"];Ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return qh+=t+","+t+"Params,"});var Uw=function(e,n){this.id=x3++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:bw,this.set=n?n.getSetter:em},ca=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Rs(this,+n.duration,1,1),this.data=n.data,Ve&&(this._ctx=Ve,Ve.data.push(this)),la||nn.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Rs(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,s){if($s(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(yu(this,r),!a._dp||a.parent||Cw(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Tt||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),_w(this,r,s)),this},e.time=function(r,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+bv(this))%(this._dur+this._rDelay)||(r?this._dur:0),s):this._time},e.totalProgress=function(r,s){return arguments.length?this.totalTime(this.totalDuration()*r,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(r,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+bv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*a,s):this._repeat?Is(this._tTime,a)+1:1},e.timeScale=function(r,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===r)return this;var a=this.parent&&this._ts?Uc(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-1e-8?0:this._rts,this.totalTime(wa(-Math.abs(this._delay),this._tDur,a),s!==!1),vu(this),C3(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($s(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Wn(s,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(Wt(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var s=this.parent||this._dp;return s?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uc(s.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=_3);var s=wt;return wt=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),wt=s,this},e.globalTime=function(r){for(var s=this,a=arguments.length?r:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(r):a},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,_v(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var s=this._time;return this._rDelay=r,_v(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,s){return this.totalTime(xn(this,r),Wt(s))},e.restart=function(r,s){return this.play().totalTime(r?-this._delay:0,Wt(s)),this._dur||(this._zTime=-1e-8),this},e.play=function(r,s){return r!=null&&this.seek(r,s),this.reversed(!1).paused(!1)},e.reverse=function(r,s){return r!=null&&this.seek(r||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(r,s){return r!=null&&this.seek(r,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var r=this.parent||this._dp,s=this._start,a;return!!(!r||this._ts&&this._initted&&r.isActive()&&(a=r.rawTime(!0))>=s&&a<this.endTime(!0)-Tt)},e.eventCallback=function(r,s,a){var l=this.vars;return arguments.length>1?(s?(l[r]=s,a&&(l[r+"Params"]=a),r==="onUpdate"&&(this._onUpdate=s)):delete l[r],this):l[r]},e.then=function(r){var s=this;return new Promise(function(a){var l=qe(r)?r:kw,d=function(){var h=s.then;s.then=null,qe(l)&&(l=l(s))&&(l.then||l===s)&&(s.then=h),a(l),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},e.kill=function(){Lo(this)},t}();un(ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Mt=function(t){dw(e,t);function e(r,s){var a;return r===void 0&&(r={}),a=t.call(this,r)||this,a.labels={},a.smoothChildTiming=!!r.smoothChildTiming,a.autoRemoveChildren=!!r.autoRemoveChildren,a._sort=Wt(r.sortChildren),Ge&&Wn(r.parent||Ge,cr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),r.scrollTrigger&&Ew(cr(a),r.scrollTrigger),a}var n=e.prototype;return n.to=function(s,a,l){return qo(0,arguments,this),this},n.from=function(s,a,l){return qo(1,arguments,this),this},n.fromTo=function(s,a,l,d){return qo(2,arguments,this),this},n.set=function(s,a,l){return a.duration=0,a.parent=this,Jo(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new rt(s,a,xn(this,l),1),this},n.call=function(s,a,l){return Wn(this,rt.delayedCall(0,s,a),l)},n.staggerTo=function(s,a,l,d,p,h,m){return l.duration=a,l.stagger=l.stagger||d,l.onComplete=h,l.onCompleteParams=m,l.parent=this,new rt(s,l,xn(this,p)),this},n.staggerFrom=function(s,a,l,d,p,h,m){return l.runBackwards=1,Jo(l).immediateRender=Wt(l.immediateRender),this.staggerTo(s,a,l,d,p,h,m)},n.staggerFromTo=function(s,a,l,d,p,h,m,x){return d.startAt=l,Jo(d).immediateRender=Wt(d.immediateRender),this.staggerTo(s,a,d,p,h,m,x)},n.render=function(s,a,l){var d=this._time,p=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=s<=0?0:it(s),x=this._zTime<0!=s<0&&(this._initted||!h),y,w,b,_,C,E,S,j,I,R,z,N;if(this!==Ge&&m>p&&s>=0&&(m=p),m!==this._tTime||l||x){if(d!==this._time&&h&&(m+=this._time-d,s+=this._time-d),y=m,I=this._start,j=this._ts,E=!j,x&&(h||(d=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(z=this._yoyo,C=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(C*100+s,a,l);if(y=it(m%C),m===p?(_=this._repeat,y=h):(R=it(m/C),_=~~R,_&&_===R&&(y=h,_--),y>h&&(y=h)),R=Is(this._tTime,C),!d&&this._tTime&&R!==_&&this._tTime-R*C-this._dur<=0&&(R=_),z&&_&1&&(y=h-y,N=1),_!==R&&!this._lock){var L=z&&R&1,O=L===(z&&_&1);if(_<R&&(L=!L),d=L?0:m%h?h:m,this._lock=1,this.render(d||(N?0:it(_*C)),a,!h)._lock=0,this._tTime=m,!a&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1),d&&d!==this._time||E!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,p=this._tDur,O&&(this._lock=2,d=L?h:-1e-4,this.render(d,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!E)return this;Vw(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=R3(this,it(d),it(y)),S&&(m-=y-(y=S._start))),this._tTime=m,this._time=y,this._act=!j,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,d=0),!d&&y&&!a&&!_&&(rn(this,"onStart"),this._tTime!==m))return this;if(y>=d&&s>=0)for(w=this._first;w;){if(b=w._next,(w._act||y>=w._start)&&w._ts&&S!==w){if(w.parent!==this)return this.render(s,a,l);if(w.render(w._ts>0?(y-w._start)*w._ts:(w._dirty?w.totalDuration():w._tDur)+(y-w._start)*w._ts,a,l),y!==this._time||!this._ts&&!E){S=0,b&&(m+=this._zTime=-1e-8);break}}w=b}else{w=this._last;for(var B=s<0?s:y;w;){if(b=w._prev,(w._act||B<=w._end)&&w._ts&&S!==w){if(w.parent!==this)return this.render(s,a,l);if(w.render(w._ts>0?(B-w._start)*w._ts:(w._dirty?w.totalDuration():w._tDur)+(B-w._start)*w._ts,a,l||wt&&(w._initted||w._startAt)),y!==this._time||!this._ts&&!E){S=0,b&&(m+=this._zTime=B?-1e-8:Tt);break}}w=b}}if(S&&!a&&(this.pause(),S.render(y>=d?0:-1e-8)._zTime=y>=d?1:-1,this._ts))return this._start=I,vu(this),this.render(s,a,l);this._onUpdate&&!a&&rn(this,"onUpdate",!0),(m===p&&this._tTime>=this.totalDuration()||!m&&d)&&(I===this._start||Math.abs(j)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(m===p&&this._ts>0||!m&&this._ts<0)&&Qr(this,1),!a&&!(s<0&&!d)&&(m||d||!p)&&(rn(this,m===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,a){var l=this;if(mr(a)||(a=xn(this,a,s)),!(s instanceof ca)){if(Rt(s))return s.forEach(function(d){return l.add(d,a)}),this;if(mt(s))return this.addLabel(s,a);if(qe(s))s=rt.delayedCall(0,s);else return this}return this!==s?Wn(this,s,a):this},n.getChildren=function(s,a,l,d){s===void 0&&(s=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),d===void 0&&(d=-1e8);for(var p=[],h=this._first;h;)h._start>=d&&(h instanceof rt?a&&p.push(h):(l&&p.push(h),s&&p.push.apply(p,h.getChildren(!0,a,l)))),h=h._next;return p},n.getById=function(s){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===s)return a[l]},n.remove=function(s){return mt(s)?this.removeLabel(s):qe(s)?this.killTweensOf(s):(s.parent===this&&xu(this,s),s===this._recent&&(this._recent=this._last),Ci(this))},n.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=it(nn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),t.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},n.addLabel=function(s,a){return this.labels[s]=xn(this,a),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,a,l){var d=rt.delayedCall(0,a||oa,l);return d.data="isPause",this._hasPause=1,Wn(this,d,xn(this,s))},n.removePause=function(s){var a=this._first;for(s=xn(this,s);a;)a._start===s&&a.data==="isPause"&&Qr(a),a=a._next},n.killTweensOf=function(s,a,l){for(var d=this.getTweensOf(s,l),p=d.length;p--;)Dr!==d[p]&&d[p].kill(s,a);return this},n.getTweensOf=function(s,a){for(var l=[],d=vn(s),p=this._first,h=mr(a),m;p;)p instanceof rt?S3(p._targets,d)&&(h?(!Dr||p._initted&&p._ts)&&p.globalTime(0)<=a&&p.globalTime(p.totalDuration())>a:!a||p.isActive())&&l.push(p):(m=p.getTweensOf(d,a)).length&&l.push.apply(l,m),p=p._next;return l},n.tweenTo=function(s,a){a=a||{};var l=this,d=xn(l,s),p=a,h=p.startAt,m=p.onStart,x=p.onStartParams,y=p.immediateRender,w,b=rt.to(l,un({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:d,overwrite:"auto",duration:a.duration||Math.abs((d-(h&&"time"in h?h.time:l._time))/l.timeScale())||Tt,onStart:function(){if(l.pause(),!w){var C=a.duration||Math.abs((d-(h&&"time"in h?h.time:l._time))/l.timeScale());b._dur!==C&&Rs(b,C,0,1).render(b._time,!0,!0),w=1}m&&m.apply(b,x||[])}},a));return y?b.render(0):b},n.tweenFromTo=function(s,a,l){return this.tweenTo(a,un({startAt:{time:xn(this,s)}},l))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),Sv(this,xn(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),Sv(this,xn(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Tt)},n.shiftChildren=function(s,a,l){l===void 0&&(l=0);for(var d=this._first,p=this.labels,h;d;)d._start>=l&&(d._start+=s,d._end+=s),d=d._next;if(a)for(h in p)p[h]>=l&&(p[h]+=s);return Ci(this)},n.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return t.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ci(this)},n.totalDuration=function(s){var a=0,l=this,d=l._last,p=Yn,h,m,x;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-s:s));if(l._dirty){for(x=l.parent;d;)h=d._prev,d._dirty&&d.totalDuration(),m=d._start,m>p&&l._sort&&d._ts&&!l._lock?(l._lock=1,Wn(l,d,m-d._delay,1)._lock=0):p=m,m<0&&d._ts&&(a-=m,(!x&&!l._dp||x&&x.smoothChildTiming)&&(l._start+=m/l._ts,l._time-=m,l._tTime-=m),l.shiftChildren(-m,!1,-1/0),p=0),d._end>a&&d._ts&&(a=d._end),d=h;Rs(l,l===Ge&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(s){if(Ge._ts&&(_w(Ge,Uc(s,Ge)),ww=nn.frame),nn.frame>=yv){yv+=on.autoSleep||120;var a=Ge._first;if((!a||!a._ts)&&on.autoSleep&&nn._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||nn.sleep()}}},e}(ca);un(Mt.prototype,{_lock:0,_hasPause:0,_forcing:0});var H3=function(e,n,r,s,a,l,d){var p=new Gt(this._pt,e,n,0,1,Qw,null,a),h=0,m=0,x,y,w,b,_,C,E,S;for(p.b=r,p.e=s,r+="",s+="",(E=~s.indexOf("random("))&&(s=aa(s)),l&&(S=[r,s],l(S,e,n),r=S[0],s=S[1]),y=r.match(Xp)||[];x=Xp.exec(s);)b=x[0],_=s.substring(h,x.index),w?w=(w+1)%5:_.substr(-5)==="rgba("&&(w=1),b!==y[m++]&&(C=parseFloat(y[m-1])||0,p._pt={_next:p._pt,p:_||m===1?_:",",s:C,c:b.charAt(1)==="="?ms(C,b)-C:parseFloat(b)-C,m:w&&w<4?Math.round:0},h=Xp.lastIndex);return p.c=h<s.length?s.substring(h,s.length):"",p.fp=d,(mw.test(s)||E)&&(p.e=0),this._pt=p,p},Zh=function(e,n,r,s,a,l,d,p,h,m){qe(s)&&(s=s(a||0,e,l));var x=e[n],y=r!=="get"?r:qe(x)?h?e[n.indexOf("set")||!qe(e["get"+n.substr(3)])?n:"get"+n.substr(3)](h):e[n]():x,w=qe(x)?h?Z3:Jw:Xh,b;if(mt(s)&&(~s.indexOf("random(")&&(s=aa(s)),s.charAt(1)==="="&&(b=ms(y,s)+(Ct(y)||0),(b||b===0)&&(s=b))),!m||y!==s||uh)return!isNaN(y*s)&&s!==""?(b=new Gt(this._pt,e,n,+y||0,s-(y||0),typeof x=="boolean"?X3:qw,0,w),h&&(b.fp=h),d&&b.modifier(d,this,e),this._pt=b):(!x&&!(n in e)&&Yh(n,s),H3.call(this,e,n,y,s,w,p||on.stringFilter,h))},Y3=function(e,n,r,s,a){if(qe(e)&&(e=Qo(e,a,n,r,s)),!qn(e)||e.style&&e.nodeType||Rt(e)||fw(e))return mt(e)?Qo(e,a,n,r,s):e;var l={},d;for(d in e)l[d]=Qo(e[d],a,n,r,s);return l},Gw=function(e,n,r,s,a,l){var d,p,h,m;if(tn[e]&&(d=new tn[e]).init(a,d.rawVars?n[e]:Y3(n[e],s,a,l,r),r,s,l)!==!1&&(r._pt=p=new Gt(r._pt,a,e,0,1,d.render,d,0,d.priority),r!==fs))for(h=r._ptLookup[r._targets.indexOf(a)],m=d._props.length;m--;)h[d._props[m]]=p;return d},Dr,uh,Kh=function t(e,n,r){var s=e.vars,a=s.ease,l=s.startAt,d=s.immediateRender,p=s.lazy,h=s.onUpdate,m=s.runBackwards,x=s.yoyoEase,y=s.keyframes,w=s.autoRevert,b=e._dur,_=e._startAt,C=e._targets,E=e.parent,S=E&&E.data==="nested"?E.vars.targets:C,j=e._overwrite==="auto"&&!Wh,I=e.timeline,R,z,N,L,O,B,Y,X,J,ne,ie,ce,pe;if(I&&(!y||!a)&&(a="none"),e._ease=Ei(a,Es.ease),e._yEase=x?Bw(Ei(x===!0?a:x,Es.ease)):0,x&&e._yoyo&&!e._repeat&&(x=e._yEase,e._yEase=e._ease,e._ease=x),e._from=!I&&!!s.runBackwards,!I||y&&!s.stagger){if(X=C[0]?ji(C[0]).harness:0,ce=X&&s[X.prop],R=Wc(s,Jh),_&&(_._zTime<0&&_.progress(1),n<0&&m&&d&&!w?_.render(-1,!0):_.revert(m&&b?xc:b3),_._lazy=0),l){if(Qr(e._startAt=rt.set(C,un({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:!_&&Wt(p),startAt:null,delay:0,onUpdate:h&&function(){return rn(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(wt||!d&&!w)&&e._startAt.revert(xc),d&&b&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(m&&b&&!_){if(n&&(d=!1),N=un({overwrite:!1,data:"isFromStart",lazy:d&&!_&&Wt(p),immediateRender:d,stagger:0,parent:E},R),ce&&(N[X.prop]=ce),Qr(e._startAt=rt.set(C,N)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(wt?e._startAt.revert(xc):e._startAt.render(-1,!0)),e._zTime=n,!d)t(e._startAt,Tt,Tt);else if(!n)return}for(e._pt=e._ptCache=0,p=b&&Wt(p)||p&&!b,z=0;z<C.length;z++){if(O=C[z],Y=O._gsap||Qh(C)[z]._gsap,e._ptLookup[z]=ne={},ih[Y.id]&&Gr.length&&Vc(),ie=S===C?z:S.indexOf(O),X&&(J=new X).init(O,ce||R,e,ie,S)!==!1&&(e._pt=L=new Gt(e._pt,O,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(H){ne[H]=L}),J.priority&&(B=1)),!X||ce)for(N in R)tn[N]&&(J=Gw(N,R,e,ie,O,S))?J.priority&&(B=1):ne[N]=L=Zh.call(e,O,N,"get",R[N],ie,S,0,s.stringFilter);e._op&&e._op[z]&&e.kill(O,e._op[z]),j&&e._pt&&(Dr=e,Ge.killTweensOf(O,ne,e.globalTime(n)),pe=!e.parent,Dr=0),e._pt&&p&&(ih[Y.id]=1)}B&&Zw(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!pe,y&&n<=0&&I.render(Yn,!0,!0)},J3=function(e,n,r,s,a,l,d,p){var h=(e._pt&&e._ptCache||(e._ptCache={}))[n],m,x,y,w;if(!h)for(h=e._ptCache[n]=[],y=e._ptLookup,w=e._targets.length;w--;){if(m=y[w][n],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==n&&m.fp!==n;)m=m._next;if(!m)return uh=1,e.vars[n]="+=0",Kh(e,d),uh=0,p?sa(n+" not eligible for reset"):1;h.push(m)}for(w=h.length;w--;)x=h[w],m=x._pt||x,m.s=(s||s===0)&&!a?s:m.s+(s||0)+l*m.c,m.c=r-m.s,x.e&&(x.e=Xe(r)+Ct(x.e)),x.b&&(x.b=m.s+Ct(x.b))},q3=function(e,n){var r=e[0]?ji(e[0]).harness:0,s=r&&r.aliases,a,l,d,p;if(!s)return n;a=Ts({},n);for(l in s)if(l in a)for(p=s[l].split(","),d=p.length;d--;)a[p[d]]=a[l];return a},Q3=function(e,n,r,s){var a=n.ease||s||"power1.inOut",l,d;if(Rt(n))d=r[e]||(r[e]=[]),n.forEach(function(p,h){return d.push({t:h/(n.length-1)*100,v:p,e:a})});else for(l in n)d=r[l]||(r[l]=[]),l==="ease"||d.push({t:parseFloat(e),v:n[l],e:a})},Qo=function(e,n,r,s,a){return qe(e)?e.call(n,r,s,a):mt(e)&&~e.indexOf("random(")?aa(e):e},Hw=qh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yw={};Ut(Hw+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Yw[t]=1});var rt=function(t){dw(e,t);function e(r,s,a,l){var d;typeof s=="number"&&(a.duration=s,s=a,a=null),d=t.call(this,l?s:Jo(s))||this;var p=d.vars,h=p.duration,m=p.delay,x=p.immediateRender,y=p.stagger,w=p.overwrite,b=p.keyframes,_=p.defaults,C=p.scrollTrigger,E=p.yoyoEase,S=s.parent||Ge,j=(Rt(r)||fw(r)?mr(r[0]):"length"in s)?[r]:vn(r),I,R,z,N,L,O,B,Y;if(d._targets=j.length?Qh(j):sa("GSAP target "+r+" not found. https://gsap.com",!on.nullTargetWarn)||[],d._ptLookup=[],d._overwrite=w,b||y||Dl(h)||Dl(m)){if(s=d.vars,I=d.timeline=new Mt({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:j}),I.kill(),I.parent=I._dp=cr(d),I._start=0,y||Dl(h)||Dl(m)){if(N=j.length,B=y&&$w(y),qn(y))for(L in y)~Hw.indexOf(L)&&(Y||(Y={}),Y[L]=y[L]);for(R=0;R<N;R++)z=Wc(s,Yw),z.stagger=0,E&&(z.yoyoEase=E),Y&&Ts(z,Y),O=j[R],z.duration=+Qo(h,cr(d),R,O,j),z.delay=(+Qo(m,cr(d),R,O,j)||0)-d._delay,!y&&N===1&&z.delay&&(d._delay=m=z.delay,d._start+=m,z.delay=0),I.to(O,z,B?B(R,O,j):0),I._ease=je.none;I.duration()?h=m=0:d.timeline=0}else if(b){Jo(un(I.vars.defaults,{ease:"none"})),I._ease=Ei(b.ease||s.ease||"none");var X=0,J,ne,ie;if(Rt(b))b.forEach(function(ce){return I.to(j,ce,">")}),I.duration();else{z={};for(L in b)L==="ease"||L==="easeEach"||Q3(L,b[L],z,b.easeEach);for(L in z)for(J=z[L].sort(function(ce,pe){return ce.t-pe.t}),X=0,R=0;R<J.length;R++)ne=J[R],ie={ease:ne.e,duration:(ne.t-(R?J[R-1].t:0))/100*h},ie[L]=ne.v,I.to(j,ie,X),X+=ie.duration;I.duration()<h&&I.to({},{duration:h-I.duration()})}}h||d.duration(h=I.duration())}else d.timeline=0;return w===!0&&!Wh&&(Dr=cr(d),Ge.killTweensOf(j),Dr=0),Wn(S,cr(d),a),s.reversed&&d.reverse(),s.paused&&d.paused(!0),(x||!h&&!b&&d._start===it(S._time)&&Wt(x)&&E3(cr(d))&&S.data!=="nested")&&(d._tTime=-1e-8,d.render(Math.max(0,-m)||0)),C&&Ew(cr(d),C),d}var n=e.prototype;return n.render=function(s,a,l){var d=this._time,p=this._tDur,h=this._dur,m=s<0,x=s>p-Tt&&!m?p:s<Tt?0:s,y,w,b,_,C,E,S,j,I;if(!h)I3(this,s,a,l);else if(x!==this._tTime||!s||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(y=x,j=this.timeline,this._repeat){if(_=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(_*100+s,a,l);if(y=it(x%_),x===p?(b=this._repeat,y=h):(C=it(x/_),b=~~C,b&&b===C?(y=h,b--):y>h&&(y=h)),E=this._yoyo&&b&1,E&&(I=this._yEase,y=h-y),C=Is(this._tTime,_),y===d&&!l&&this._initted&&b===C)return this._tTime=x,this;b!==C&&(j&&this._yEase&&Vw(j,E),this.vars.repeatRefresh&&!E&&!this._lock&&y!==_&&this._initted&&(this._lock=l=1,this.render(it(_*b),!0).invalidate()._lock=0))}if(!this._initted){if(Tw(this,m?s:y,l,a,x))return this._tTime=0,this;if(d!==this._time&&!(l&&this.vars.repeatRefresh&&b!==C))return this;if(h!==this._dur)return this.render(s,a,l)}if(this._tTime=x,this._time=y,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(I||this._ease)(y/h),this._from&&(this.ratio=S=1-S),y&&!d&&!a&&!b&&(rn(this,"onStart"),this._tTime!==x))return this;for(w=this._pt;w;)w.r(S,w.d),w=w._next;j&&j.render(s<0?s:j._dur*j._ease(y/this._dur),a,l)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(m&&sh(this,s,a,l),rn(this,"onUpdate")),this._repeat&&b!==C&&this.vars.onRepeat&&!a&&this.parent&&rn(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(m&&!this._onUpdate&&sh(this,s,!0,!0),(s||!h)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&Qr(this,1),!a&&!(m&&!d)&&(x||d||E)&&(rn(this,x===p?"onComplete":"onReverseComplete",!0),this._prom&&!(x<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),t.prototype.invalidate.call(this,s)},n.resetTo=function(s,a,l,d,p){la||nn.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||Kh(this,h),m=this._ease(h/this._dur),J3(this,s,a,l,d,m,h,p)?this.resetTo(s,a,l,d,1):(yu(this,0),this.parent||jw(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wt),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Dr&&Dr.vars.overwrite!==!0)._first||Lo(this),this.parent&&l!==this.timeline.totalDuration()&&Rs(this,this._dur*this.timeline._tDur/l,0,1),this}var d=this._targets,p=s?vn(s):d,h=this._ptLookup,m=this._pt,x,y,w,b,_,C,E;if((!a||a==="all")&&j3(d,p))return a==="all"&&(this._pt=0),Lo(this);for(x=this._op=this._op||[],a!=="all"&&(mt(a)&&(_={},Ut(a,function(S){return _[S]=1}),a=_),a=q3(d,a)),E=d.length;E--;)if(~p.indexOf(d[E])){y=h[E],a==="all"?(x[E]=a,b=y,w={}):(w=x[E]=x[E]||{},b=a);for(_ in b)C=y&&y[_],C&&((!("kill"in C.d)||C.d.kill(_)===!0)&&xu(this,C,"_pt"),delete y[_]),w!=="all"&&(w[_]=1)}return this._initted&&!this._pt&&m&&Lo(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return qo(1,arguments)},e.delayedCall=function(s,a,l,d){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:d})},e.fromTo=function(s,a,l){return qo(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,l){return Ge.killTweensOf(s,a,l)},e}(ca);un(rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ut("staggerTo,staggerFrom,staggerFromTo",function(t){rt[t]=function(){var e=new Mt,n=ah.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var Xh=function(e,n,r){return e[n]=r},Jw=function(e,n,r){return e[n](r)},Z3=function(e,n,r,s){return e[n](s.fp,r)},K3=function(e,n,r){return e.setAttribute(n,r)},em=function(e,n){return qe(e[n])?Jw:Uh(e[n])&&e.setAttribute?K3:Xh},qw=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},X3=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Qw=function(e,n){var r=n._pt,s="";if(!e&&n.b)s=n.b;else if(e===1&&n.e)s=n.e;else{for(;r;)s=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+s,r=r._next;s+=n.c}n.set(n.t,n.p,s,n)},tm=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},eI=function(e,n,r,s){for(var a=this._pt,l;a;)l=a._next,a.p===s&&a.modifier(e,n,r),a=l},tI=function(e){for(var n=this._pt,r,s;n;)s=n._next,n.p===e&&!n.op||n.op===e?xu(this,n,"_pt"):n.dep||(r=1),n=s;return!r},nI=function(e,n,r,s){s.mSet(e,n,s.m.call(s.tween,r,s.mt),s)},Zw=function(e){for(var n=e._pt,r,s,a,l;n;){for(r=n._next,s=a;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:l)?n._prev._next=n:a=n,(n._next=s)?s._prev=n:l=n,n=r}e._pt=a},Gt=function(){function t(n,r,s,a,l,d,p,h,m){this.t=r,this.s=a,this.c=l,this.p=s,this.r=d||qw,this.d=p||this,this.set=h||Xh,this.pr=m||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,s,a){this.mSet=this.mSet||this.set,this.set=nI,this.m=r,this.mt=a,this.tween=s},t}();Ut(qh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return Jh[t]=1});cn.TweenMax=cn.TweenLite=rt;cn.TimelineLite=cn.TimelineMax=Mt;Ge=new Mt({sortChildren:!1,defaults:Es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=Fw;var Ti=[],yc={},rI=[],jv=0,iI=0,sf=function(e){return(yc[e]||rI).map(function(n){return n()})},dh=function(){var e=Date.now(),n=[];e-jv>2&&(sf("matchMediaInit"),Ti.forEach(function(r){var s=r.queries,a=r.conditions,l,d,p,h;for(d in s)l=Bn.matchMedia(s[d]).matches,l&&(p=1),l!==a[d]&&(a[d]=l,h=1);h&&(r.revert(),p&&n.push(r))}),sf("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(s){return r.add(null,s)})}),jv=e,sf("matchMedia"))},Kw=function(){function t(n,r){this.selector=r&&lh(r),this.data=[],this._r=[],this.isReverted=!1,this.id=iI++,n&&this.add(n)}var e=t.prototype;return e.add=function(r,s,a){qe(r)&&(a=s,s=r,r=qe);var l=this,d=function(){var h=Ve,m=l.selector,x;return h&&h!==l&&h.data.push(l),a&&(l.selector=lh(a)),Ve=l,x=s.apply(l,arguments),qe(x)&&l._r.push(x),Ve=h,l.selector=m,l.isReverted=!1,x};return l.last=d,r===qe?d(l,function(p){return l.add(null,p)}):r?l[r]=d:d},e.ignore=function(r){var s=Ve;Ve=null,r(this),Ve=s},e.getTweens=function(){var r=[];return this.data.forEach(function(s){return s instanceof t?r.push.apply(r,s.getTweens()):s instanceof rt&&!(s.parent&&s.parent.data==="nested")&&r.push(s)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,s){var a=this;if(r?function(){for(var d=a.getTweens(),p=a.data.length,h;p--;)h=a.data[p],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return d.splice(d.indexOf(m),1)}));for(d.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,x){return x.g-m.g||-1/0}).forEach(function(m){return m.t.revert(r)}),p=a.data.length;p--;)h=a.data[p],h instanceof Mt?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof rt)&&h.revert&&h.revert(r);a._r.forEach(function(m){return m(r,a)}),a.isReverted=!0}():this.data.forEach(function(d){return d.kill&&d.kill()}),this.clear(),s)for(var l=Ti.length;l--;)Ti[l].id===this.id&&Ti.splice(l,1)},e.revert=function(r){this.kill(r||{})},t}(),sI=function(){function t(n){this.contexts=[],this.scope=n,Ve&&Ve.data.push(this)}var e=t.prototype;return e.add=function(r,s,a){qn(r)||(r={matches:r});var l=new Kw(0,a||this.scope),d=l.conditions={},p,h,m;Ve&&!l.selector&&(l.selector=Ve.selector),this.contexts.push(l),s=l.add("onMatch",s),l.queries=r;for(h in r)h==="all"?m=1:(p=Bn.matchMedia(r[h]),p&&(Ti.indexOf(l)<0&&Ti.push(l),(d[h]=p.matches)&&(m=1),p.addListener?p.addListener(dh):p.addEventListener("change",dh)));return m&&s(l,function(x){return l.add(null,x)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(s){return s.kill(r,!0)})},t}(),Gc={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(s){return Lw(s)})},timeline:function(e){return new Mt(e)},getTweensOf:function(e,n){return Ge.getTweensOf(e,n)},getProperty:function(e,n,r,s){mt(e)&&(e=vn(e)[0]);var a=ji(e||{}).get,l=r?kw:Sw;return r==="native"&&(r=""),e&&(n?l((tn[n]&&tn[n].get||a)(e,n,r,s)):function(d,p,h){return l((tn[d]&&tn[d].get||a)(e,d,p,h))})},quickSetter:function(e,n,r){if(e=vn(e),e.length>1){var s=e.map(function(m){return Yt.quickSetter(m,n,r)}),a=s.length;return function(m){for(var x=a;x--;)s[x](m)}}e=e[0]||{};var l=tn[n],d=ji(e),p=d.harness&&(d.harness.aliases||{})[n]||n,h=l?function(m){var x=new l;fs._pt=0,x.init(e,r?m+r:m,fs,0,[e]),x.render(1,x),fs._pt&&tm(1,fs)}:d.set(e,p);return l?h:function(m){return h(e,p,r?m+r:m,d,1)}},quickTo:function(e,n,r){var s,a=Yt.to(e,un((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),r||{})),l=function(p,h,m){return a.resetTo(n,p,h,m)};return l.tween=a,l},isTweening:function(e){return Ge.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ei(e.ease,Es.ease)),wv(Es,e||{})},config:function(e){return wv(on,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,s=e.plugins,a=e.defaults,l=e.extendTimeline;(s||"").split(",").forEach(function(d){return d&&!tn[d]&&!cn[d]&&sa(n+" effect requires "+d+" plugin.")}),ef[n]=function(d,p,h){return r(vn(d),un(p||{},a),h)},l&&(Mt.prototype[n]=function(d,p,h){return this.add(ef[n](d,qn(p)?p:(h=p)&&{},this),h)})},registerEase:function(e,n){je[e]=Ei(n)},parseEase:function(e,n){return arguments.length?Ei(e,n):je},getById:function(e){return Ge.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new Mt(e),s,a;for(r.smoothChildTiming=Wt(e.smoothChildTiming),Ge.remove(r),r._dp=0,r._time=r._tTime=Ge._time,s=Ge._first;s;)a=s._next,(n||!(!s._dur&&s instanceof rt&&s.vars.onComplete===s._targets[0]))&&Wn(r,s,s._start-s._delay),s=a;return Wn(Ge,r,0),r},context:function(e,n){return e?new Kw(e,n):Ve},matchMedia:function(e){return new sI(e)},matchMediaRefresh:function(){return Ti.forEach(function(e){var n=e.conditions,r,s;for(s in n)n[s]&&(n[s]=!1,r=1);r&&e.revert()})||dh()},addEventListener:function(e,n){var r=yc[e]||(yc[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=yc[e],s=r&&r.indexOf(n);s>=0&&r.splice(s,1)},utils:{wrap:L3,wrapYoyo:A3,distribute:$w,random:zw,snap:Pw,normalize:O3,getUnit:Ct,clamp:P3,splitColor:Aw,toArray:vn,selector:lh,mapRange:Nw,pipe:M3,unitize:N3,interpolate:D3,shuffle:Rw},install:vw,effects:ef,ticker:nn,updateRoot:Mt.updateRoot,plugins:tn,globalTimeline:Ge,core:{PropTween:Gt,globals:yw,Tween:rt,Timeline:Mt,Animation:ca,getCache:ji,_removeLinkedListItem:xu,reverting:function(){return wt},context:function(e){return e&&Ve&&(Ve.data.push(e),e._ctx=Ve),Ve},suppressOverwrites:function(e){return Wh=e}}};Ut("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Gc[t]=rt[t]});nn.add(Mt.updateRoot);fs=Gc.to({},{duration:0});var oI=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},aI=function(e,n){var r=e._targets,s,a,l;for(s in n)for(a=r.length;a--;)l=e._ptLookup[a][s],l&&(l=l.d)&&(l._pt&&(l=oI(l,s)),l&&l.modifier&&l.modifier(n[s],e,r[a],s))},of=function(e,n){return{name:e,rawVars:1,init:function(s,a,l){l._onInit=function(d){var p,h;if(mt(a)&&(p={},Ut(a,function(m){return p[m]=1}),a=p),n){p={};for(h in a)p[h]=n(a[h]);a=p}aI(d,a)}}}},Yt=Gc.registerPlugin({name:"attr",init:function(e,n,r,s,a){var l,d,p;this.tween=r;for(l in n)p=e.getAttribute(l)||"",d=this.add(e,"setAttribute",(p||0)+"",n[l],s,a,0,0,l),d.op=l,d.b=p,this._props.push(l)},render:function(e,n){for(var r=n._pt;r;)wt?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},of("roundProps",ch),of("modifiers"),of("snap",Pw))||Gc;rt.version=Mt.version=Yt.version="3.12.7";xw=1;Gh()&&$s();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cv,Fr,gs,nm,bi,Ev,rm,lI=function(){return typeof window<"u"},gr={},xi=180/Math.PI,xs=Math.PI/180,ls=Math.atan2,Tv=1e8,im=/([A-Z])/g,cI=/(left|right|width|margin|padding|x)/i,uI=/[\s,\(]\S/,Gn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ph=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},dI=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},pI=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},fI=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},Xw=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},eb=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},hI=function(e,n,r){return e.style[n]=r},mI=function(e,n,r){return e.style.setProperty(n,r)},gI=function(e,n,r){return e._gsap[n]=r},xI=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},vI=function(e,n,r,s,a){var l=e._gsap;l.scaleX=l.scaleY=r,l.renderTransform(a,l)},yI=function(e,n,r,s,a){var l=e._gsap;l[n]=r,l.renderTransform(a,l)},He="transform",Ht=He+"Origin",wI=function t(e,n){var r=this,s=this.target,a=s.style,l=s._gsap;if(e in gr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Gn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(d){return r.tfm[d]=ur(s,d)}):this.tfm[e]=l.x?l[e]:ur(s,e),e===Ht&&(this.tfm.zOrigin=l.zOrigin);else return Gn.transform.split(",").forEach(function(d){return t.call(r,d,n)});if(this.props.indexOf(He)>=0)return;l.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Ht,n,"")),e=He}(a||n)&&this.props.push(e,n,a[e])},tb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bI=function(){var e=this.props,n=this.target,r=n.style,s=n._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?n[e[a]](e[a+2]):n[e[a]]=e[a+2]:e[a+2]?r[e[a]]=e[a+2]:r.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(im,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)s[l]=this.tfm[l];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=rm(),(!a||!a.isStart)&&!r[He]&&(tb(r),s.zOrigin&&r[Ht]&&(r[Ht]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},nb=function(e,n){var r={target:e,props:[],revert:bI,save:wI};return e._gsap||Yt.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(s){return r.save(s)}),r},rb,fh=function(e,n){var r=Fr.createElementNS?Fr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fr.createElement(e);return r&&r.style?r:Fr.createElement(e)},Jn=function t(e,n,r){var s=getComputedStyle(e);return s[n]||s.getPropertyValue(n.replace(im,"-$1").toLowerCase())||s.getPropertyValue(n)||!r&&t(e,Ps(n)||n,1)||""},Iv="O,Moz,ms,Ms,Webkit".split(","),Ps=function(e,n,r){var s=n||bi,a=s.style,l=5;if(e in a&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Iv[l]+e in a););return l<0?null:(l===3?"ms":l>=0?Iv[l]:"")+e},hh=function(){lI()&&window.document&&(Cv=window,Fr=Cv.document,gs=Fr.documentElement,bi=fh("div")||{style:{}},fh("div"),He=Ps(He),Ht=He+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rb=!!Ps("perspective"),rm=Yt.core.reverting,nm=1)},Rv=function(e){var n=e.ownerSVGElement,r=fh("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",r.appendChild(s),gs.appendChild(r);try{a=s.getBBox()}catch{}return r.removeChild(s),gs.removeChild(r),a},$v=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},ib=function(e){var n,r;try{n=e.getBBox()}catch{n=Rv(e),r=1}return n&&(n.width||n.height)||r||(n=Rv(e)),n&&!n.width&&!n.x&&!n.y?{x:+$v(e,["x","cx","x1"])||0,y:+$v(e,["y","cy","y1"])||0,width:0,height:0}:n},sb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ib(e))},zi=function(e,n){if(n){var r=e.style,s;n in gr&&n!==Ht&&(n=He),r.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(s==="--"?n:n.replace(im,"-$1").toLowerCase())):r.removeAttribute(n)}},Br=function(e,n,r,s,a,l){var d=new Gt(e._pt,n,r,0,1,l?eb:Xw);return e._pt=d,d.b=s,d.e=a,e._props.push(r),d},Pv={deg:1,rad:1,turn:1},_I={grid:1,flex:1},Zr=function t(e,n,r,s){var a=parseFloat(r)||0,l=(r+"").trim().substr((a+"").length)||"px",d=bi.style,p=cI.test(n),h=e.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(p?"Width":"Height"),x=100,y=s==="px",w=s==="%",b,_,C,E;if(s===l||!a||Pv[s]||Pv[l])return a;if(l!=="px"&&!y&&(a=t(e,n,r,"px")),E=e.getCTM&&sb(e),(w||l==="%")&&(gr[n]||~n.indexOf("adius")))return b=E?e.getBBox()[p?"width":"height"]:e[m],Xe(w?a/b*x:a/100*b);if(d[p?"width":"height"]=x+(y?l:s),_=s!=="rem"&&~n.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,E&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Fr||!_.appendChild)&&(_=Fr.body),C=_._gsap,C&&w&&C.width&&p&&C.time===nn.time&&!C.uncache)return Xe(a/C.width*x);if(w&&(n==="height"||n==="width")){var S=e.style[n];e.style[n]=x+s,b=e[m],S?e.style[n]=S:zi(e,n)}else(w||l==="%")&&!_I[Jn(_,"display")]&&(d.position=Jn(e,"position")),_===e&&(d.position="static"),_.appendChild(bi),b=bi[m],_.removeChild(bi),d.position="absolute";return p&&w&&(C=ji(_),C.time=nn.time,C.width=_[m]),Xe(y?b*a/x:b&&a?x/b*a:0)},ur=function(e,n,r,s){var a;return nm||hh(),n in Gn&&n!=="transform"&&(n=Gn[n],~n.indexOf(",")&&(n=n.split(",")[0])),gr[n]&&n!=="transform"?(a=da(e,s),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:Yc(Jn(e,Ht))+" "+a.zOrigin+"px"):(a=e.style[n],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=Hc[n]&&Hc[n](e,n,r)||Jn(e,n)||bw(e,n)||(n==="opacity"?1:0))),r&&!~(a+"").trim().indexOf(" ")?Zr(e,n,a,r)+r:a},SI=function(e,n,r,s){if(!r||r==="none"){var a=Ps(n,e,1),l=a&&Jn(e,a,1);l&&l!==r?(n=a,r=l):n==="borderColor"&&(r=Jn(e,"borderTopColor"))}var d=new Gt(this._pt,e.style,n,0,1,Qw),p=0,h=0,m,x,y,w,b,_,C,E,S,j,I,R;if(d.b=r,d.e=s,r+="",s+="",s==="auto"&&(_=e.style[n],e.style[n]=s,s=Jn(e,n)||s,_?e.style[n]=_:zi(e,n)),m=[r,s],Fw(m),r=m[0],s=m[1],y=r.match(ps)||[],R=s.match(ps)||[],R.length){for(;x=ps.exec(s);)C=x[0],S=s.substring(p,x.index),b?b=(b+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(b=1),C!==(_=y[h++]||"")&&(w=parseFloat(_)||0,I=_.substr((w+"").length),C.charAt(1)==="="&&(C=ms(w,C)+I),E=parseFloat(C),j=C.substr((E+"").length),p=ps.lastIndex-j.length,j||(j=j||on.units[n]||I,p===s.length&&(s+=j,d.e+=j)),I!==j&&(w=Zr(e,n,_,j)||0),d._pt={_next:d._pt,p:S||h===1?S:",",s:w,c:E-w,m:b&&b<4||n==="zIndex"?Math.round:0});d.c=p<s.length?s.substring(p,s.length):""}else d.r=n==="display"&&s==="none"?eb:Xw;return mw.test(s)&&(d.e=0),this._pt=d,d},zv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kI=function(e){var n=e.split(" "),r=n[0],s=n[1]||"50%";return(r==="top"||r==="bottom"||s==="left"||s==="right")&&(e=r,r=s,s=e),n[0]=zv[r]||r,n[1]=zv[s]||s,n.join(" ")},jI=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,s=r.style,a=n.u,l=r._gsap,d,p,h;if(a==="all"||a===!0)s.cssText="",p=1;else for(a=a.split(","),h=a.length;--h>-1;)d=a[h],gr[d]&&(p=1,d=d==="transformOrigin"?Ht:He),zi(r,d);p&&(zi(r,He),l&&(l.svg&&r.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",da(r,1),l.uncache=1,tb(s)))}},Hc={clearProps:function(e,n,r,s,a){if(a.data!=="isFromStart"){var l=e._pt=new Gt(e._pt,n,r,0,0,jI);return l.u=s,l.pr=-10,l.tween=a,e._props.push(r),1}}},ua=[1,0,0,1,0,0],ob={},ab=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mv=function(e){var n=Jn(e,He);return ab(n)?ua:n.substr(7).match(hw).map(Xe)},sm=function(e,n){var r=e._gsap||ji(e),s=e.style,a=Mv(e),l,d,p,h;return r.svg&&e.getAttribute("transform")?(p=e.transform.baseVal.consolidate().matrix,a=[p.a,p.b,p.c,p.d,p.e,p.f],a.join(",")==="1,0,0,1,0,0"?ua:a):(a===ua&&!e.offsetParent&&e!==gs&&!r.svg&&(p=s.display,s.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,d=e.nextElementSibling,gs.appendChild(e)),a=Mv(e),p?s.display=p:zi(e,"display"),h&&(d?l.insertBefore(e,d):l?l.appendChild(e):gs.removeChild(e))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},mh=function(e,n,r,s,a,l){var d=e._gsap,p=a||sm(e,!0),h=d.xOrigin||0,m=d.yOrigin||0,x=d.xOffset||0,y=d.yOffset||0,w=p[0],b=p[1],_=p[2],C=p[3],E=p[4],S=p[5],j=n.split(" "),I=parseFloat(j[0])||0,R=parseFloat(j[1])||0,z,N,L,O;r?p!==ua&&(N=w*C-b*_)&&(L=I*(C/N)+R*(-_/N)+(_*S-C*E)/N,O=I*(-b/N)+R*(w/N)-(w*S-b*E)/N,I=L,R=O):(z=ib(e),I=z.x+(~j[0].indexOf("%")?I/100*z.width:I),R=z.y+(~(j[1]||j[0]).indexOf("%")?R/100*z.height:R)),s||s!==!1&&d.smooth?(E=I-h,S=R-m,d.xOffset=x+(E*w+S*_)-E,d.yOffset=y+(E*b+S*C)-S):d.xOffset=d.yOffset=0,d.xOrigin=I,d.yOrigin=R,d.smooth=!!s,d.origin=n,d.originIsAbsolute=!!r,e.style[Ht]="0px 0px",l&&(Br(l,d,"xOrigin",h,I),Br(l,d,"yOrigin",m,R),Br(l,d,"xOffset",x,d.xOffset),Br(l,d,"yOffset",y,d.yOffset)),e.setAttribute("data-svg-origin",I+" "+R)},da=function(e,n){var r=e._gsap||new Uw(e);if("x"in r&&!n&&!r.uncache)return r;var s=e.style,a=r.scaleX<0,l="px",d="deg",p=getComputedStyle(e),h=Jn(e,Ht)||"0",m,x,y,w,b,_,C,E,S,j,I,R,z,N,L,O,B,Y,X,J,ne,ie,ce,pe,H,ee,Q,D,G,ge,fe,xe;return m=x=y=_=C=E=S=j=I=0,w=b=1,r.svg=!!(e.getCTM&&sb(e)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[He]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[He]!=="none"?p[He]:"")),s.scale=s.rotate=s.translate="none"),N=sm(e,r.svg),r.svg&&(r.uncache?(H=e.getBBox(),h=r.xOrigin-H.x+"px "+(r.yOrigin-H.y)+"px",pe=""):pe=!n&&e.getAttribute("data-svg-origin"),mh(e,pe||h,!!pe||r.originIsAbsolute,r.smooth!==!1,N)),R=r.xOrigin||0,z=r.yOrigin||0,N!==ua&&(Y=N[0],X=N[1],J=N[2],ne=N[3],m=ie=N[4],x=ce=N[5],N.length===6?(w=Math.sqrt(Y*Y+X*X),b=Math.sqrt(ne*ne+J*J),_=Y||X?ls(X,Y)*xi:0,S=J||ne?ls(J,ne)*xi+_:0,S&&(b*=Math.abs(Math.cos(S*xs))),r.svg&&(m-=R-(R*Y+z*J),x-=z-(R*X+z*ne))):(xe=N[6],ge=N[7],Q=N[8],D=N[9],G=N[10],fe=N[11],m=N[12],x=N[13],y=N[14],L=ls(xe,G),C=L*xi,L&&(O=Math.cos(-L),B=Math.sin(-L),pe=ie*O+Q*B,H=ce*O+D*B,ee=xe*O+G*B,Q=ie*-B+Q*O,D=ce*-B+D*O,G=xe*-B+G*O,fe=ge*-B+fe*O,ie=pe,ce=H,xe=ee),L=ls(-J,G),E=L*xi,L&&(O=Math.cos(-L),B=Math.sin(-L),pe=Y*O-Q*B,H=X*O-D*B,ee=J*O-G*B,fe=ne*B+fe*O,Y=pe,X=H,J=ee),L=ls(X,Y),_=L*xi,L&&(O=Math.cos(L),B=Math.sin(L),pe=Y*O+X*B,H=ie*O+ce*B,X=X*O-Y*B,ce=ce*O-ie*B,Y=pe,ie=H),C&&Math.abs(C)+Math.abs(_)>359.9&&(C=_=0,E=180-E),w=Xe(Math.sqrt(Y*Y+X*X+J*J)),b=Xe(Math.sqrt(ce*ce+xe*xe)),L=ls(ie,ce),S=Math.abs(L)>2e-4?L*xi:0,I=fe?1/(fe<0?-fe:fe):0),r.svg&&(pe=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!ab(Jn(e,He)),pe&&e.setAttribute("transform",pe))),Math.abs(S)>90&&Math.abs(S)<270&&(a?(w*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(b*=-1,S+=S<=0?180:-180)),n=n||r.uncache,r.x=m-((r.xPercent=m&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-m)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+l,r.y=x-((r.yPercent=x&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-x)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+l,r.z=y+l,r.scaleX=Xe(w),r.scaleY=Xe(b),r.rotation=Xe(_)+d,r.rotationX=Xe(C)+d,r.rotationY=Xe(E)+d,r.skewX=S+d,r.skewY=j+d,r.transformPerspective=I+l,(r.zOrigin=parseFloat(h.split(" ")[2])||!n&&r.zOrigin||0)&&(s[Ht]=Yc(h)),r.xOffset=r.yOffset=0,r.force3D=on.force3D,r.renderTransform=r.svg?EI:rb?lb:CI,r.uncache=0,r},Yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},af=function(e,n,r){var s=Ct(n);return Xe(parseFloat(n)+parseFloat(Zr(e,"x",r+"px",s)))+s},CI=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,lb(e,n)},fi="0deg",Io="0px",hi=") ",lb=function(e,n){var r=n||this,s=r.xPercent,a=r.yPercent,l=r.x,d=r.y,p=r.z,h=r.rotation,m=r.rotationY,x=r.rotationX,y=r.skewX,w=r.skewY,b=r.scaleX,_=r.scaleY,C=r.transformPerspective,E=r.force3D,S=r.target,j=r.zOrigin,I="",R=E==="auto"&&e&&e!==1||E===!0;if(j&&(x!==fi||m!==fi)){var z=parseFloat(m)*xs,N=Math.sin(z),L=Math.cos(z),O;z=parseFloat(x)*xs,O=Math.cos(z),l=af(S,l,N*O*-j),d=af(S,d,-Math.sin(z)*-j),p=af(S,p,L*O*-j+j)}C!==Io&&(I+="perspective("+C+hi),(s||a)&&(I+="translate("+s+"%, "+a+"%) "),(R||l!==Io||d!==Io||p!==Io)&&(I+=p!==Io||R?"translate3d("+l+", "+d+", "+p+") ":"translate("+l+", "+d+hi),h!==fi&&(I+="rotate("+h+hi),m!==fi&&(I+="rotateY("+m+hi),x!==fi&&(I+="rotateX("+x+hi),(y!==fi||w!==fi)&&(I+="skew("+y+", "+w+hi),(b!==1||_!==1)&&(I+="scale("+b+", "+_+hi),S.style[He]=I||"translate(0, 0)"},EI=function(e,n){var r=n||this,s=r.xPercent,a=r.yPercent,l=r.x,d=r.y,p=r.rotation,h=r.skewX,m=r.skewY,x=r.scaleX,y=r.scaleY,w=r.target,b=r.xOrigin,_=r.yOrigin,C=r.xOffset,E=r.yOffset,S=r.forceCSS,j=parseFloat(l),I=parseFloat(d),R,z,N,L,O;p=parseFloat(p),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,p+=m),p||h?(p*=xs,h*=xs,R=Math.cos(p)*x,z=Math.sin(p)*x,N=Math.sin(p-h)*-y,L=Math.cos(p-h)*y,h&&(m*=xs,O=Math.tan(h-m),O=Math.sqrt(1+O*O),N*=O,L*=O,m&&(O=Math.tan(m),O=Math.sqrt(1+O*O),R*=O,z*=O)),R=Xe(R),z=Xe(z),N=Xe(N),L=Xe(L)):(R=x,L=y,z=N=0),(j&&!~(l+"").indexOf("px")||I&&!~(d+"").indexOf("px"))&&(j=Zr(w,"x",l,"px"),I=Zr(w,"y",d,"px")),(b||_||C||E)&&(j=Xe(j+b-(b*R+_*N)+C),I=Xe(I+_-(b*z+_*L)+E)),(s||a)&&(O=w.getBBox(),j=Xe(j+s/100*O.width),I=Xe(I+a/100*O.height)),O="matrix("+R+","+z+","+N+","+L+","+j+","+I+")",w.setAttribute("transform",O),S&&(w.style[He]=O)},TI=function(e,n,r,s,a){var l=360,d=mt(a),p=parseFloat(a)*(d&&~a.indexOf("rad")?xi:1),h=p-s,m=s+h+"deg",x,y;return d&&(x=a.split("_")[1],x==="short"&&(h%=l,h!==h%(l/2)&&(h+=h<0?l:-360)),x==="cw"&&h<0?h=(h+l*Tv)%l-~~(h/l)*l:x==="ccw"&&h>0&&(h=(h-l*Tv)%l-~~(h/l)*l)),e._pt=y=new Gt(e._pt,n,r,s,h,dI),y.e=m,y.u="deg",e._props.push(r),y},Nv=function(e,n){for(var r in n)e[r]=n[r];return e},II=function(e,n,r){var s=Nv({},r._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=r.style,d,p,h,m,x,y,w,b;s.svg?(h=r.getAttribute("transform"),r.setAttribute("transform",""),l[He]=n,d=da(r,1),zi(r,He),r.setAttribute("transform",h)):(h=getComputedStyle(r)[He],l[He]=n,d=da(r,1),l[He]=h);for(p in gr)h=s[p],m=d[p],h!==m&&a.indexOf(p)<0&&(w=Ct(h),b=Ct(m),x=w!==b?Zr(r,p,h,b):parseFloat(h),y=parseFloat(m),e._pt=new Gt(e._pt,d,p,x,y-x,ph),e._pt.u=b||0,e._props.push(p));Nv(d,s)};Ut("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",s="Bottom",a="Left",l=(e<3?[n,r,s,a]:[n+a,n+r,s+r,s+a]).map(function(d){return e<2?t+d:"border"+d+t});Hc[e>1?"border"+t:t]=function(d,p,h,m,x){var y,w;if(arguments.length<4)return y=l.map(function(b){return ur(d,b,h)}),w=y.join(" "),w.split(y[0]).length===5?y[0]:w;y=(m+"").split(" "),w={},l.forEach(function(b,_){return w[b]=y[_]=y[_]||y[(_-1)/2|0]}),d.init(p,w,x)}});var cb={name:"css",register:hh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,s,a){var l=this._props,d=e.style,p=r.vars.startAt,h,m,x,y,w,b,_,C,E,S,j,I,R,z,N,L;nm||hh(),this.styles=this.styles||nb(e),L=this.styles.props,this.tween=r;for(_ in n)if(_!=="autoRound"&&(m=n[_],!(tn[_]&&Gw(_,n,r,s,e,a)))){if(w=typeof m,b=Hc[_],w==="function"&&(m=m.call(r,s,e,a),w=typeof m),w==="string"&&~m.indexOf("random(")&&(m=aa(m)),b)b(this,e,_,m,r)&&(N=1);else if(_.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(_)+"").trim(),m+="",Hr.lastIndex=0,Hr.test(h)||(C=Ct(h),E=Ct(m)),E?C!==E&&(h=Zr(e,_,h,E)+E):C&&(m+=C),this.add(d,"setProperty",h,m,s,a,0,0,_),l.push(_),L.push(_,0,d[_]);else if(w!=="undefined"){if(p&&_ in p?(h=typeof p[_]=="function"?p[_].call(r,s,e,a):p[_],mt(h)&&~h.indexOf("random(")&&(h=aa(h)),Ct(h+"")||h==="auto"||(h+=on.units[_]||Ct(ur(e,_))||""),(h+"").charAt(1)==="="&&(h=ur(e,_))):h=ur(e,_),y=parseFloat(h),S=w==="string"&&m.charAt(1)==="="&&m.substr(0,2),S&&(m=m.substr(2)),x=parseFloat(m),_ in Gn&&(_==="autoAlpha"&&(y===1&&ur(e,"visibility")==="hidden"&&x&&(y=0),L.push("visibility",0,d.visibility),Br(this,d,"visibility",y?"inherit":"hidden",x?"inherit":"hidden",!x)),_!=="scale"&&_!=="transform"&&(_=Gn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),j=_ in gr,j){if(this.styles.save(_),I||(R=e._gsap,R.renderTransform&&!n.parseTransform||da(e,n.parseTransform),z=n.smoothOrigin!==!1&&R.smooth,I=this._pt=new Gt(this._pt,d,He,0,1,R.renderTransform,R,0,-1),I.dep=1),_==="scale")this._pt=new Gt(this._pt,R,"scaleY",R.scaleY,(S?ms(R.scaleY,S+x):x)-R.scaleY||0,ph),this._pt.u=0,l.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Ht,0,d[Ht]),m=kI(m),R.svg?mh(e,m,0,z,0,this):(E=parseFloat(m.split(" ")[2])||0,E!==R.zOrigin&&Br(this,R,"zOrigin",R.zOrigin,E),Br(this,d,_,Yc(h),Yc(m)));continue}else if(_==="svgOrigin"){mh(e,m,1,z,0,this);continue}else if(_ in ob){TI(this,R,_,y,S?ms(y,S+m):m);continue}else if(_==="smoothOrigin"){Br(this,R,"smooth",R.smooth,m);continue}else if(_==="force3D"){R[_]=m;continue}else if(_==="transform"){II(this,m,e);continue}}else _ in d||(_=Ps(_)||_);if(j||(x||x===0)&&(y||y===0)&&!uI.test(m)&&_ in d)C=(h+"").substr((y+"").length),x||(x=0),E=Ct(m)||(_ in on.units?on.units[_]:C),C!==E&&(y=Zr(e,_,h,E)),this._pt=new Gt(this._pt,j?R:d,_,y,(S?ms(y,S+x):x)-y,!j&&(E==="px"||_==="zIndex")&&n.autoRound!==!1?fI:ph),this._pt.u=E||0,C!==E&&E!=="%"&&(this._pt.b=h,this._pt.r=pI);else if(_ in d)SI.call(this,e,_,h,S?S+m:m);else if(_ in e)this.add(e,_,h||e[_],S?S+m:m,s,a);else if(_!=="parseTransform"){Yh(_,m);continue}j||(_ in d?L.push(_,0,d[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,h||e[_])),l.push(_)}}N&&Zw(this)},render:function(e,n){if(n.tween._time||!rm())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:ur,aliases:Gn,getSetter:function(e,n,r){var s=Gn[n];return s&&s.indexOf(",")<0&&(n=s),n in gr&&n!==Ht&&(e._gsap.x||ur(e,"x"))?r&&Ev===r?n==="scale"?xI:gI:(Ev=r||{})&&(n==="scale"?vI:yI):e.style&&!Uh(e.style[n])?hI:~n.indexOf("-")?mI:em(e,n)},core:{_removeProperty:zi,_getMatrix:sm}};Yt.utils.checkPrefix=Ps;Yt.core.getStyleSaver=nb;(function(t,e,n,r){var s=Ut(t+","+e+","+n,function(a){gr[a]=1});Ut(e,function(a){on.units[a]="deg",ob[a]=1}),Gn[s[13]]=t+","+e,Ut(r,function(a){var l=a.split(":");Gn[l[1]]=s[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){on.units[t]="px"});Yt.registerPlugin(cb);var Pe=Yt.registerPlugin(cb)||Yt;Pe.core.Tween;const RI=k.div`
  width: 100%;
  /* margin: 0 auto; */
  margin-bottom: 60px;
  // min-height: 600px;
  position: relative;
  overflow: hidden;
`,$I=k.div`
  width: 100%;
  height: auto;
  min-height: 600px;
  overflow: visible;
  //페이지 네비 스타일링 추가
  .swiper-pagination-bullet {
    background-color: white !important;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--primary-base) !important;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--primary-base) !important;
    font-size: 30px !important;
    z-index: 11;
  }
`,PI=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  min-height: 600px;
  max-height: 600px;
`,zI=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* 슬라이드 마다 살짝 어둡게 적용해보기 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
    border-radius: 12px;
  }
`,MI=k.div`
  position: absolute;
  bottom: 40px; /* 하단 여백 */
  left: 50px; /* 왼쪽 여백 */
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8); /* 텍스트 가독성 개선 */

  max-width: 50%;
  padding: 20px;
  margin-bottom: 40px;
  z-index: 1000;
`;k.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
  text-align: left;
`;const NI=k.div`
  font-size: 24px;
  opacity: 0.9;
  text-align: left;
  color: gray;
  z-index: 1000;
`,OI=k.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  overflow: visible;

  /* @media (min-width: 1700px) {
    top: 80px;
    height: 100%;
  } */

  @media (min-width: 1024px) and (max-width: 1450px) {
    // height: calc(100% - ((1450px - 100vw) * 0.1));
    /* top: calc(-100px + ((1450px - 100vw) * 0.1)); */
  }

  @media (max-width: 1450px) {
    /* top: -60px;
    height: 79%; */
  }
`;k.img`
  position: absolute;
  width: ${t=>t.size||"50px"};
  height: auto;
  opacity: 1;
  z-index: 300;
`;const LI=k.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 600px;
  border-radius: 12px;
  background: linear-gradient(to top, rgba(0, 0, 0.3, 0.8), rgba(0, 0, 0, 0.1));
  z-index: 2;
  transition: opacity 1.5s ease;
`,AI=k.img`
  width: auto;
  max-width: 600px;
  height: auto;
  margin: 0 auto;
  display: block;
  z-index: 2;
`,om=()=>{const t=$.useRef(null),e=$.useRef([]),[n,r]=$.useState(window.innerWidth<=768),[s,a]=$.useState(600),[l,d]=$.useState(!0),[p,h]=$.useState(0),[m,x]=$.useState(!1);$.useEffect(()=>{if(!t.current||n)return;const w=t.current.clientHeight;t.current.clientWidth;const b=36,_=[],C=5,E=Math.min(1500,window.innerWidth),S=[{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_v.png",left:"15%"},{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_i.png",left:"35%"},{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_b.png",left:"55%"},{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_o.png",left:"75%"}];e.current.forEach(j=>j.remove()),e.current=[];for(let j=0;j<b;j++){const I=document.createElement("img");I.src=`https://raw.githubusercontent.com/peaceRyun/vibostatic/main/public/gsap/gsap_${String(j+1).padStart(2,"0")}.png`,I.classList.add("floating-item"),I.style.position="absolute",I.style.width="auto",I.style.height="auto",I.style.top=`${-Math.random()*100}px`,I.style.left=`${Math.random()*(E-C)}px`,t.current.appendChild(I),_.push(I)}S.forEach(({src:j,left:I})=>{const R=document.createElement("img");R.src=j,R.classList.add("floating-balloon"),R.style.position="absolute",R.style.width="auto",R.style.top="-100px",R.style.left=I,t.current.appendChild(R),_.push(R)}),e.current=_,_.forEach(j=>{const I=j.classList.contains("floating-balloon");j.classList.contains("floating-item");const R=I?8+Math.random()*4:2+Math.random()*1.5,z=Math.random()*-10;Pe.to(j,{y:I?s-150:w-80,x:I?`+=${z}`:`+=${Math.random()*40-10}`,rotation:Math.random()*360,duration:R,ease:I?"power2.out":"bounce.out",onComplete:()=>{I&&Pe.to(j,{x:`+=${Math.random()*50-25}`,y:"+=20",repeat:-1,yoyo:!0,duration:2.5+Math.random(),ease:"sine.inOut"})}})}),setTimeout(()=>{Pe.to(_,{opacity:0,duration:1.5,ease:"power2.out"}),setTimeout(()=>{d(!1)},1e3)},2e3)},[n,s]),$.useEffect(()=>{if(!y[p])return;const w=document.querySelector(`.logo-${p}`);w&&Pe.fromTo(w,{opacity:0,y:30},{opacity:1,y:0,duration:.6,ease:"power2.out",delay:p===0?3:.5})},[p]);const y=[{id:1,image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img01.webp",logo:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo01.webp",alt:"배너 1"},{id:2,image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img02.webp",logo:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo02.webp",alt:"배너 2"},{id:3,image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img03.webp",logo:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo03.webp",alt:"배너 3"},{id:4,image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img04.webp",logo:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo04.webp",alt:"배너 4"},{id:5,image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img05.webp",logo:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo05.webp",alt:"배너 5"},{id:6,image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img06.webp",logo:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mainbanner/banner_img_logo06.webp",alt:"배너 6"}];return u.jsxs(RI,{children:[!n&&u.jsx(OI,{ref:t}),u.jsx($I,{children:u.jsx(wn,{modules:[lw,cw,H4],navigation:!0,pagination:{clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,slidesPerView:1.1,spaceBetween:20,onSlideChange:w=>h(w.realIndex),children:y.map((w,b)=>u.jsx(It,{children:u.jsxs(zI,{style:{position:"relative"},children:[u.jsxs("div",{style:{position:"relative"},children:[l&&p===b&&u.jsx(LI,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:2}}),u.jsx(PI,{src:w.image,alt:w.title})]}),u.jsxs(MI,{children:[u.jsx(AI,{className:`logo-${b}`,src:w.logo,alt:"배너 로고"}),u.jsx(NI,{children:w.subtitle})]})]})},w.id))},n)})]})},am="ddf6521c43c2e03f59d2767f109aaaa4",Zo=Oe("animations/getAnimations",async(t,e)=>{try{let n=[],r=1;for(;n.length<50;){console.log(`📢 Fetching page ${r} for animations...`);const s=await me.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:am,language:"ko-KR",with_genres:16,include_adult:!1,page:r}}),a=s.data.results.filter(l=>l.overview&&l.overview.trim().length>0&&l.poster_path&&l.backdrop_path);if(n=[...n,...a],r++,!s.data.results.length||r>10)break}return console.log(` Final results: ${n.length} animations`),{title:"온 가족 함께 애니타임",option:"ANIMATION",contentlist:n.slice(0,24)}}catch(n){return console.error(" Error fetching animations:",n.message),e.rejectWithValue(n.message)}}),Ko=Oe("movies/getDarkTheaterReleases",async(t,e)=>{try{let n=[],r=1;for(;n.length<50;){console.log(`📢 Fetching page ${r} for dark-themed theater releases...`);const s=await me.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:am,language:"ko-KR",primary_release_date_gte:new Date().toISOString().split("T")[0],with_release_type:3,include_adult:!1,sort_by:"popularity.desc",page:r}}),a=[28,53,80,27,9648],l=s.data.results.filter(d=>d.poster_path&&d.overview&&d.overview.trim().length>0&&d.vote_average>=6&&d.genre_ids.some(p=>a.includes(p)));if(n=[...n,...l],r++,!s.data.results.length||r>10)break}return console.log(` Final results: ${n.length} movies`),{title:"극장동시 다크영화",option:"MOVIE",contentlist:n.slice(0,24)}}catch(n){return console.error(" Error fetching dark-themed theater releases:",n.message),e.rejectWithValue(n.message)}}),Xo=Oe("dramas/getDramaTvs",async(t,e)=>{var n;try{let r=[],s=1;const a=5;for(;r.length<50;){console.log(`📢 Fetching page ${s} for drama TV shows...`);const l=await me.get("https://api.themoviedb.org/3/discover/tv",{params:{api_key:am,language:"ko-KR",sort_by:"popularity.desc",with_genres:"18,10749,35",include_adult:!1,page:s}});if(console.log("🔍 API Response:",l.data),!l.data.results||l.data.results.length===0){console.warn("⚠️ No more results from API.");break}const d=l.data.results.filter(p=>p.poster_path&&p.name&&p.vote_average>=6&&p.overview&&p.overview.trim().length>0&&p.genre_ids&&p.genre_ids.length>0);if(console.log(` Filtered dramas from page ${s}:`,d),r=[...r,...d],s++,s>a){console.log("⛔ Max page limit reached.");break}}return console.log(`🎬 Final results: ${r.length} dramas`),{title:"감성터지는 드라마",option:"TV",contentlist:r.slice(0,24)}}catch(r){return console.error("Error fetching drama TV shows:",((n=r.response)==null?void 0:n.data)||r.message),e.rejectWithValue(r.message)}}),DI=k.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  height: 375px;
  border-radius: 0.5rem;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 230px;
    height: 350px;
  }
`,FI=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${t=>t.$isHovered?"rotateY(180deg)":"rotateY(0)"};
  border-radius: 0.5rem;
`,BI=k.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5rem;
`,VI=k.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 0.5rem;
`,WI=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`,UI=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${t=>t.width||"250px"};
    height: ${t=>t.height||"250px"};
`,GI=k("lord-icon")`
    width: 100%;
    height: 100%;
    cursor: pointer;
`,HI=({src:t="https://cdn.lordicon.com/ulnswmkk.json",colors:e="primary:#e8308c",isLiked:n,onClick:r,width:s,height:a,...l})=>{const[d,p]=$.useState("hover");$.useEffect(()=>{const y=document.createElement("script");y.src="https://cdn.lordicon.com/lordicon.js",y.async=!0,document.querySelector('script[src="https://cdn.lordicon.com/lordicon.js"]')||document.body.appendChild(y)},[]);const h=$.useCallback(()=>{n||p("morph")},[n]),m=$.useCallback(()=>{n||p("morph")},[n]),x=$.useCallback(()=>{n?(p("morph"),setTimeout(()=>{r()},500)):r()},[n,r]);return u.jsx(UI,{width:s,height:a,onMouseEnter:h,onMouseLeave:m,children:u.jsx(GI,{src:t,colors:e,trigger:n?"in":d,state:n?"in-heart":"morph-heart",onClick:x,...l})})},lm=({memberId:t,width:e,height:n})=>{const[r,s]=$.useState(!1),a=l=>{l.preventDefault(),l.stopPropagation(),s(!r),console.log(`Member ${t} like status: ${!r}`)};return u.jsx("div",{onClick:a,style:{cursor:"pointer",display:"inline-block"},children:u.jsx(HI,{width:e,height:n,colors:"primary:#e8308c",isLiked:r})})},Ov={drama:["drama/Ravers_Refreshing_Makeup_In_Smoky_Neon_Lit_Club_Restroom_fhd_2662826.mp4","drama/Couple_Walking_With_Children_On_Mountain_fhd_1284450.mp4","drama/Hippie_Man_Caressing_Girlfriends_Face_With_Wildflower_fhd_3084631.mp4","drama/Men_Play_Street_Basketball_fhd_1789251.mp4","drama/Ravers_Refreshing_Makeup_In_Smoky_Neon_Lit_Club_Restroom_fhd_2662826.mp4","drama/Romantic_Couple_On_The_Beach_fhd_1117955.mp4","drama/Rural_Female_Jogger_At_Sunrise_fhd_630313.mp4","drama/The_Couple_Was_Playing_Together_On_The_Bus_fhd_2580005.mp4","drama/Woman_In_A_Bikini_Relaxing_By_The_Poolside_In_A_Luxury_Designer_Villa_fhd_2615539.mp4"],horror:["horror/Bloody_Hand_Scratching_Glass_..._fhd_749917.mp4","horror/Man_Walking_In_Alley_At_Night_fhd_847692.mp4","horror/Moon_In_The_Dark_Sky_And_Clouds_At_Night_fhd_2077005.mp4","horror/Nightmare_Demon_fhd_2896999.mp4","horror/Scary_Doll_In_An_Abandoned_Kindergarten_fhd_1036161.mp4","horror/Scary_Mask_fhd_295179.mp4","horror/Scary_Static_On_Old_TV_fhd_184865.mp4","horror/Woman_s_Face_Screams_From_Inside_A_Wall_fhd_1234782.mp4"],thriller:["thriller/A_Man_Walks_In_Forest_Holding_An_Axe_fhd_1348403.mp4","thriller/Alone_Woman_In_A_Parking_Lot_fhd_2833198.mp4","thriller/Body_Of_Murder_Victim_And_Bloody_Knife_At_Crime_Scene_fhd_2783148.mp4","thriller/Girl_Pulling_Gum_Out_Of_Her_Mouth_fhd_2715214.mp4","thriller/Hands_Dangle_From_The_Door_Of_A_Retro_Car_fhd_2618950.mp4","thriller/Smoking_A_Cigarette_fhd_1077541.mp4","thriller/Teens_Applying_Lipstick_fhd_1123717.mp4","thriller/Victim_Being_Strangled_By_Murderer_With_Head_Wrapped_In_Plastic_fhd_2437476.mp4","thriller/Woman_Holding_Umbrella_At_Winter_fhd_2158738.mp4","thriller/Woman_Sinks_To_The_Bottom_fhd_1067263.mp4","thriller/Young_Woman_Jumps_From_A_Boat_Into_Sea_fhd_1274692.mp4","thriller/Zombie_Woman_Walking_Through_The..._fhd_729660.mp4"]},YI=({content:t,videoType:e="drama"})=>{const{title:n,name:r,backdrop_path:s,overview:a}=t,l=$.useRef(null),d=$.useMemo(()=>{const m=Ov[e]||Ov.drama,x=Math.floor(Math.random()*m.length);return`https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/${m[x]}`},[e]),p=()=>{l.current&&l.current.play()},h=()=>{l.current&&(l.current.pause(),l.current.currentTime=0)};return u.jsxs(ub,{onMouseEnter:p,onMouseLeave:h,children:[u.jsxs(Fl,{$justifyCenter:"center",$alignItems:"center",$position:"relative",children:[u.jsx(qI,{src:s?`https://image.tmdb.org/t/p/w500/${s}`:"/mainhome/sample/commonSample.png",alt:n||r}),u.jsxs(JI,{ref:l,muted:!0,loop:!0,playsInline:!0,children:[u.jsx("source",{src:d,type:"video/mp4"}),"Your browser does not support the video tag."]}),u.jsx("button",{children:u.jsx(QI,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/carousel_action_atomic.png",alt:"play"})})]}),u.jsxs(Fl,{$flexDirection:"column",$padding:"35px 20px 6px",$gap:"8px",children:[u.jsxs(Fl,{$justifyContent:"space-between",$alignItems:"center",children:[u.jsxs(Fl,{$justifyContent:"space-between",$alignItems:"center",$gap:"10px",children:[u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png",alt:"rateAll"}),u.jsx(ZI,{$br:"4px",$padding:"3.5px 5px",fontSize:"12px",children:"HD"}),u.jsx(KI,{$fontSize:"12px",children:"2024"})]}),u.jsx(lm,{width:"30px",height:"30px"})]}),u.jsx(eR,{$textAlign:"left",$fontSize:"20px",children:n||r}),u.jsx(XI,{})]}),u.jsx(tR,{$lineClamp:"3",children:a})]})},ub=k.div`
    width: 100%;
    max-width: 394px;
    height: 100%;
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;
`,JI=k.video`
    position: absolute; /* ✅ 기본 이미지 위에 배치 */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover; /* ✅ 영상이 부모 요소를 꽉 채우도록 설정 */
    opacity: 0; /* ✅ 기본적으로 숨김 */
    transition: opacity 0.3s ease-in-out; /* ✅ 부드러운 전환 효과 */

    /* ✅ 마우스 호버 시 영상이 나타남 */
    ${ub}:hover & {
        opacity: 1;
    }
`,qI=k.img`
    width: 100%;
    height: 50%;
`,QI=k.img`
    position: absolute;
    width: 67.5px !important;
    height: 67.5px !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`,Fl=k.div`
    display: flex;
    flex-direction: ${t=>t.$flexDirection};
    align-items: ${t=>t.$alignItems};
    justify-content: ${t=>t.$justifyContent};
    gap: ${t=>t.$gap};
    padding: ${t=>t.$padding||"0"};
    position: ${t=>t.$position};
    width: ${t=>t.$width||"auto"};
`,ZI=k.div`
    border-radius: ${t=>t.$br};
    border: 1px solid var(--primary-base);
    color: var(--primary-base);
    background-color: var(--gray-900);
    padding: ${t=>t.$padding};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: ${t=>t.fontSize};
`,KI=k.span`
    font-size: ${t=>t.$fontSize||"12px"};
    padding: ${t=>t.$padding||"0"};
`,XI=k.div`
    margin: 5px 0 10px;
    height: 1px;
    background-color: var(--secondary-base);
`,eR=k.h4`
    font-size: ${t=>t.$fontSize||"20px"};
    font-weight: 800;
    text-align: ${t=>t.$textAlign||"left"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,tR=k.p`
    padding: ${t=>t.$padding||"7px 20px 0px"};
    font-size: ${t=>t.$fontSize||"13px"};
    font-weight: 400;
    text-align: start;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${t=>t.$lineClamp||"3"};
    overflow: hidden;
`,db=({content:t,videoType:e})=>{const{id:n,poster_path:r,title:s,name:a,media_type:l}=t,[d,p]=$.useState(!1),h=tt(),m=()=>{const w=x();h(`/detail/${w}/${n}`)},x=()=>l==="movie"||l==="series"?l:a&&!s?"series":"movie",y=r?`https://image.tmdb.org/t/p/w500/${r}`:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/sample/commonSample.png";return u.jsx(DI,{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:m,style:{cursor:"pointer",opacity:1},children:u.jsxs(FI,{$isHovered:d,children:[u.jsx(BI,{children:u.jsx(WI,{src:y,alt:s||a||"이미지 없음"})}),u.jsx(VI,{children:u.jsx(YI,{content:t,videoType:e})})]})})},nR={getAnimations:"drama",getDarkTheaterReleases:"horror",getDramaTvs:"thriller"},lf=({fetchFunction:t,stateSelector:e})=>{var d;const n=$t(),r=tt(),s=e?$e(e)??{title:"",option:"",contentlist:[]}:{title:"",option:"",contentlist:[]};$e(p=>p.filterR.loading);const a=t&&nR[t.name]||"drama";$.useEffect(()=>{t&&typeof t=="function"&&n(t())},[n,t]);const l=()=>{r(`/contentlist/${a}`,{state:{contentData:s,videoType:a}})};return u.jsxs(rR,{children:[u.jsxs(sR,{children:[u.jsxs(oR,{children:[s.title,u.jsx(iR,{children:s.option})]}),u.jsx(aR,{onClick:l,children:"더보기"})]}),u.jsx(lR,{spaceBetween:30,slidesPerView:5.5,breakpoints:{1024:{slidesPerView:4.2,spaceBetween:15},600:{slidesPerView:2.5,spaceBetween:10},400:{slidesPerView:1.5,spaceBetween:5}},children:((d=s==null?void 0:s.contentlist)==null?void 0:d.length)>0?s.contentlist.map((p,h)=>u.jsx(It,{children:u.jsx(db,{content:p,videoType:a})},p.id||h)):u.jsx("p",{children:"콘텐츠를 불러오는 중..."})})]})},rR=k.section`
    display: flex;
    position: relative;
    padding: 60px 0;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 40px 0;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        padding: 30px 0;
    }
`,iR=k.div`
    position: absolute;
    left: 100%;
    top: 0;
    transform: rotate(90deg);
    transform-origin: top left;
    font-weight: bold;
    color: var(--gray-700);
    letter-spacing: 5px;
    z-index: 800;
    font-size: var(--title-xlarge-size);
    font-weight: var(--title-xlarge-weight);
    @media (max-width: 1024px) {
        display: none;
    }
`,sR=k.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1024px) {
        text-align: left;
        white-space: normal;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 0;
    }
`,oR=k.div`
    position: relative;
    color: white;
    line-height: 1.5;
    margin: 0;
    white-space: pre-line;
    font-size: var(--title-xlarge-size);
    font-weight: var(--title-xlarge-weight);

    @media (max-width: 1024px) {
        font-size: var(--title-large-mobile);
        font-weight: var(--title-large-weigh);
        text-align: left;
        white-space: normal;
    }
    @media (max-width: 600px) {
        font-size: var(--title-small-mobile);
        font-weight: var(--title-xsmall-weight);
    }
`,aR=k.button`
    background-color: var(--primary-600);
    color: black;
    font-size: clamp(14px, 1.2vw, 17px);
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: clamp(120px, 10vw, 155px);
    height: 40px;
    font-weight: bold;

    &:hover {
        background-color: var(--primary-base);
    }
    @media (max-width: 1024px) {
        margin-right: 20px;
    }
`,lR=k(wn)`
    flex: 3;
    max-width: 100%;

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 8px;
    }
`,cR=[{id:"1",title:"실시간 인기 LIVE"}],uR=()=>{const t=$t();return $.useEffect(()=>{t(Vo()),t(Uo()),t(ac()),t(Go()),t(Zo()),t(Ko()),t(Xo())},[]),u.jsxs(Kr,{children:[u.jsx(om,{}),u.jsxs(Fc,{children:[u.jsx("div",{children:cR.map(e=>u.jsx(v1,{title:e.title},e.id))}),u.jsx(v4,{}),u.jsx(i4,{}),u.jsx(Vh,{})]}),u.jsx(T4,{}),u.jsxs(Fc,{children:[u.jsx(lf,{fetchFunction:Zo,stateSelector:e=>e.filterR.animations}),u.jsx(lf,{fetchFunction:Ko,stateSelector:e=>e.filterR.darkTheaterReleases}),u.jsx(lf,{fetchFunction:Xo,stateSelector:e=>e.filterR.dramaTvs}),u.jsx(l3,{})]}),u.jsx(m3,{})]})},dR=k.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`,wc=k.input`
    opacity: 0;
    width: 0;
    height: 0;
`,pR=k.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: ${t=>t.$isRound?"34px":"0"};

    &:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: black;
        transition: 0.4s;
        border-radius: ${t=>t.$isRound?"50%":"0"};
    }

    ${wc}:checked + & {
        background-color: var(--primary-base);
    }

    ${wc}:focus + & {
        box-shadow: 0 0 1px var(--primary-base);
    }

    ${wc}:checked + &:before {
        transform: translateX(26px);
    }
`,pb=({isRound:t})=>u.jsxs(dR,{children:[u.jsx(wc,{type:"checkbox"}),u.jsx(pR,{$isRound:t})]}),fR=k.div`
  position: relative;
`,hR=k.div`
  width: 130px;
  height: 48px;
  border: 1px solid var(--primary-base);
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: 590px) {
    width: 100px;
    height: 38px;
    padding: 0 20px;
  }
`,mR=k.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background-color: var(--gray-900);
  border: 1px solid var(--primary-base);
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`,gR=k.div`
  padding: 12px 30px;

  cursor: pointer;

  &:hover {
    background-color: var(--gray-800);
  }
  @media (max-width: 590px) {
    padding: 12px 20px;
  }
`,Lv=k.img`
  transition: transform 0.2s ease;
  transform: ${({$isDropOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
`,fb=({isOpen:t,onToggle:e,selectedSeason:n,onSelect:r,options:s=[],loading:a=!1})=>{const l=n!=="",d=p=>{const h=document.getElementById("episode-list");h&&h.scrollIntoView({behavior:"smooth"}),r(p)};return u.jsxs(fR,{children:[u.jsx(hR,{onClick:e,disabled:a,children:a?"로딩 중...":l?u.jsxs(u.Fragment,{children:[n,u.jsx(Lv,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/live area.png",alt:"dropdownIcon",$isDropOpen:t})]}):u.jsxs(u.Fragment,{children:["시즌 클릭",u.jsx(Lv,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/live area.png",alt:"dropdownIcon",$isDropOpen:t})]})}),t&&s.length>0&&u.jsx(mR,{children:s.map(p=>u.jsx(gR,{onClick:()=>d(p.name),children:p.name},p.id||p.name))})]})};k.div`
    position: relative;
    padding: 0 var(--spacing-5);
    @media (min-width: 1025px) {
        padding: 0 50px;
    }
`;const gh=k.div`
    margin: 0 auto;
    @media (max-width: 599px) {
        max-width: calc(390px - var(--spacing-8));
    }
    @media (min-width: 600px) {
        max-width: calc(var(--breakpoint-tablet) - var(--spacing-8));
    }
    @media (min-width: 1025px) {
        max-width: calc(var(--breakpoint-desktop) - 100px);
    }
`,xR=k.div`
    margin-top: 100px;
    max-width: 1820px;
    width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    overflow: hidden;

    @media (max-width: 590px) {
        margin-top: 50px;
        max-width: 100%;
    }
`,vR=k.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 비율 */
    height: 0;
`;k.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
`;const yR=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(25, 25, 25, 0.8) 75%, #191919 100%);

    @media (max-width: 590px) {
        height: 80%;
    }
`,wR=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    margin: 0px 50px 63px;
    @media (max-width: 1024px) {
        display: none;
    }
`,bR=k.div`
    width: 100%;
    max-width: 394px;
    height: 367px;
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;

    @media (max-width: 590px) {
        max-width: 320px;
        height: 300px;
    }
`;k.div`
    width: 130px;
    height: 48px;
    border: 1px solid var(--primary-base);
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    gap: 10px;
    margin-right: 150px;

    @media (max-width: 590px) {
        width: 100px;
        padding: 0 20px;
        /* margin-right: 0; */
    }
`;const _R=k.img`
    width: 100%;
    height: 221px;
`,SR=k.img`
    position: absolute;
    width: 67.5px !important;
    height: 67.5px !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;k.img`
    width: 34px;
    height: 29px;
`;const Bl=k.img`
    width: 34px;
    height: 34px;
`,ba=k.ul`
    display: flex;
    flex-direction: ${t=>t.$flexDirection};
    align-items: ${t=>t.$alignItems};
    justify-content: ${t=>t.$justifyContent};
    gap: ${t=>t.$gap};
    padding: ${t=>t.$padding?t.$padding:""};
    position: ${t=>t.$position};
    width: ${t=>t.$width||"auto"};

    @media (max-width: 590px) {
        gap: 20px;
    }
`,hb=k.div`
    border-radius: ${t=>t.$br};
    border: 1px solid var(--primary-base);
    color: var(--primary-base);
    background-color: var(--gray-900);
    padding: ${t=>t.$padding};
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: ${t=>t.fontSize};
`,Jc=k.span`
    font-weight: ${t=>t.$fontWeight};
    font-size: ${t=>t.$fontSize?t.$fontSize:"12px"};
    padding: ${t=>t.$padding};
    white-space: ${t=>t.$whiteSpace};
`,Ro=k.span`
    font-size: 24px;
    color: var(--gray-600);
`,$o=k.span`
    font-size: 24px;
    color: var(--white);
`,kR=k.div`
    margin: 5px 0 10px;
    height: 1px;
    background-color: var(--secondary-base);
`,jR=k.h2`
    font-size: 40px;
    font-weight: 700;
    line-height: 100%;
    @media (max-width: 1024px) {
        display: none;
    }
`,_a=k.h3`
    font-size: ${t=>t.fontSize?t.fontSize:"28px"};
    font-weight: ${t=>t.fontWeight?t.fontWeight:"800"};
`,cm=k.h4`
    font-size: ${t=>t.$fontSize?t.$fontSize:"28px"};
    font-weight: ${t=>t.$fontWeight?t.$fontWeight:"800"};
    text-align: ${t=>t.$textAlign};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: calc(200px * 0.08); /* 컨테이너 너비의 8% */
`,wu=k.p`
    padding: ${t=>t.$padding?t.$padding:"7px 20px 0px"};
    font-size: ${t=>t.$fontSize?t.$fontSize:"13px"};
    font-weight: ${t=>t.$fontWeight?t.$fontWeight:"400"};
    text-align: start;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${t=>t.$lineClamp}; /* 원하는 줄 수 */
    overflow: hidden;

    @media (max-width: 590px) {
        padding: 10px 0;
    }
`,CR=k.p`
    font-size: 28px;
    font-weight: 400;
    text-align: start;
`,mb=k.p`
    font-size: 20px;
    font-weight: 400;
    text-align: start;

    @media (max-width: 590px) {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }
`,ER=k.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,TR=k.div`
    background-color: var(--gray-900);
    padding: var(--spacing-6) var(--spacing-9);
    border-radius: 10px;
    width: 518px;
    height: 441px;
    border: 2px solid var(--primary-base);
`,IR=k.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`,RR=k.button`
    background: #1d1d1d;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 2;
`,$R=k.div`
    width: 100%;
    height: 1px;
    background: var(--secondary-300);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
`,gb=k.img`
    width: ${t=>t.$width};
    height: ${t=>t.$height};

    @media (max-width: 590px) {
        width: 150px; /* 📌 기존 150px에서 더 줄이기 */
        height: 100px;
    }
    /* @media (max-width: 590px) {
    width: ${t=>t.$mobileWidth||"150px"};
    height: ${t=>t.$mobileHeight||"90px"};
  } */
`,PR=k.img`
    width: ${t=>t.$width};
    height: ${t=>t.$height};
    position: ${t=>t.$position};
    top: ${t=>t.$top};
    right: ${t=>t.$right};
    transform: ${t=>t.$transform};
    z-index: ${t=>t.$zIndex};
    filter: opacity(0.4) blur(3px);
    box-shadow: inset -35px -35px 67px 15px #191919, inset 35px 35px 67px 15px #191919;
`,xb=k.div`
    position: relative;
    overflow: hidden;
    // 초기 높이를 auto로 설정
    height: auto;

    @media (max-width: 590px) {
        max-width: 100%;
        /* padding: 10px; */
    }
`,zR=k.button`
    position: absolute;
    top: 20px;
    right: 20px;
    @media (max-width: 590px) {
        top: 5px; /* 📌 모바일에서 버튼 위치 조정 */
        right: 5px;
    }
`;k.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 590px) {
        margin-top: 20px;
    }
`;k.div`
    width: 100%;

    &.mobile-only {
        display: none; // 기본적으로 숨김

        @media (max-width: 590px) {
            margin-top: 0;
            height: auto;
            /* display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10; */
        }
    }

    &.pc-only {
        display: block;

        @media (max-width: 590px) {
            display: none;
        }
    }
`;k.div`
    width: 100%;
    padding: 20px;

    @media (max-width: 590px) {
        padding: 10px;
    }
`;const Se=k.div`
    display: flex;
    flex-direction: ${t=>t.$flexDirection};
    align-items: ${t=>t.$alignItems};
    justify-content: ${t=>t.$justifyContent};
    gap: ${t=>t.$gap};
    padding: ${t=>t.$padding?t.$padding:""};
    position: ${t=>t.$position};
    width: ${t=>t.$width||"auto"};
    border-top: ${t=>t.$borderTop};
    white-space: ${t=>t.$whiteSpace};
    font-size: ${t=>t.$fontSize};
`,MR=k.div``,NR=k.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 17px;
`,Av=k.div`
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;k.div`
    width: 100%;
    overflow: hidden;
`;const cf=k.div`
    margin-top: 20px;
    padding: 16px;
`;k.div`
    video {
        width: 100%;
        border-radius: 10px;
    }
`;k.div`
    text-align: center;
`;k.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
`;k.span`
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
`;k.button`
    width: 100%;
    padding: 10px;
    background: #00c8ff;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;k.div`
    margin-top: 20px;
`;k.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;k.div`
    img {
        width: 100%;
        border-radius: 5px;
    }
`;const uf=k.div`
    display: grid;
    gap: 20px;

    /* 모바일 (작은 화면) */
    grid-template-columns: repeat(2, 1fr);

    /* 태블릿 (중간 화면) */
    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }
`,OR=k.div`
    cursor: pointer;
    img {
        width: 100%;
        border-radius: 5px;
    }
`;k.div`
    background: #222;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
`;const LR=k.div`
    display: flex;
    justify-content: space-around;
    background-color: #222;
    /* padding: 10px 0; */
    /* border-radius: 8px; */
    /* margin-bottom: 10px; */
    position: relative;
    @media (min-width: 1024px) {
        display: none; // 화면이 768px 이하일 때 이 컴포넌트 숨기기
    }
`,Dv=k.button`
    flex: 1;
    padding: 12px 0;
    font-size: 16px;
    color: ${t=>t.$active?"#fff":"#aaa"};
    /* background: ${t=>t.active?"#00c8ff":"transparent"}; */
    border: none;
    /* border-bottom: ${t=>t.active?"3px solid #fff":"none"}; */
    cursor: pointer;
    transition: 0.3s;
    position: relative;

    &:hover {
        color: #fff;
    }
    /* 위에 클릭하면 컬러 보이게 해야함 */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 4px;
        background-color: ${t=>t.active?"#07FFE6":"transparent"};
        border-radius: 4px;
    }
`;k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #444;
`;const AR=k.div`
    /* padding: 20px; */
    /* background-color: #000;
  color: #fff; */
`,DR=k.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    margin-bottom: 16px;
`;k.div`
    /* width: 100%;
  background-color: red; */
`;const FR=k.p`
    font-size: 14px;
    color: #888;
`,BR=k.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 100%;
`,VR=k.p`
    font-size: 18px;
    font-weight: bold;
`,WR=k.p`
    font-size: 12px;
    color: #888;
`,UR=k.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
`,GR=k.button`
    width: 100%;
    height: 50px;
    padding: 8px 16px;
    background-color: var(--primary-base);
    color: var(--black);
    border: none;
    border-radius: 4px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;k.button`
    width: 100%;
    height: 50px;
    padding: 8px 16px;
    background-color: var(--gray-700);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;const HR=k.div`
    margin-bottom: 16px;
`,YR=k.div`
    margin-bottom: 16px;

    h4 {
        font-size: 13px;
        color: #ddd;
    }
    p {
        font-size: 10px;
    }
`,JR=k.div`
    display: flex;
    gap: 16px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`,qR=k.div`
    img {
        width: 30px;
    }
    p {
        color: white;
        margin-top: 6px;
        font-size: 12px;
    }
`,QR=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: white;
        margin-top: 6px;
        font-size: 12px;
    }
`,ZR=k.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    .rating-value {
        font-size: 16px;
        font-weight: bold;
    }

    /* 기존 스타일 유지 */
    h2 {
        font-size: 16px;
    }
    span {
        font-size: 12px;
    }
`,KR=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: white;
        margin-top: 6px;
        font-size: 12px;
    }
`;k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: white;
        margin-top: 6px;
        font-size: 12px;
    }
`;const XR=k.progress`
    width: 80%;
    height: 6px;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 10px;
    background-color: #444;

    &::-webkit-progress-bar {
        background-color: #444;
        border-radius: 10px;
    }

    &::-webkit-progress-value {
        background-color: var(--primary-base);
        border-radius: 10px;
    }

    &::-moz-progress-bar {
        background-color: var(--primary-base);
        border-radius: 10px;
    }
`,e$=k.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* flexdirection="row" justifycontent="spacebetween" alignitem="center" */
`,t$=k.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,n$=k.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`,r$=k.div`
    display: flex;
    width: 100%;
    gap: 10px;
    flex-direction: row;
    justify-content: space-between;
`,i$=k.div`
    font-size: 13px;
    font-weight: bold;
    color: #ddd;
    margin-bottom: 10px;
`,s$=({episode:t})=>{const e=n=>n?typeof n=="string"?n:`${n}분`:"정보 없음";return u.jsx("li",{children:u.jsxs(Se,{$alignItems:"center",$gap:"60px",$padding:"30px",$width:"75%",children:[u.jsx(Jc,{$fontWeight:"800",$fontSize:"28px",$padding:"0 20px",children:t.episode_number}),u.jsx(gb,{$width:"225px",$height:"137px",src:t.stillUrl,alt:`${t.name} 썸네일`}),u.jsxs(Se,{$flexDirection:"column",$gap:"20px",children:[u.jsx(cm,{$fontSize:"15px",$fontWeight:"700",children:t.name}),u.jsx(wu,{$fontSize:"15px",$fontWeight:"400",$padding:"0",$lineClamp:"3",children:t.overview||"에피소드 설명이 없습니다."})]}),u.jsx(Jc,{$fontSize:"15px",$whiteSpace:"nowrap",children:e(t.runtime)})]})})},o$=t=>{const e=$.useRef(null),n=$.useRef(null);return $.useEffect(()=>{const r=e.current;if(!r)return;n.current&&n.current.kill();const s=r.offsetHeight;return t?(Pe.set(r,{height:0,opacity:0,overflow:"hidden"}),n.current=Pe.to(r,{height:"auto",opacity:1,duration:.5,ease:"power2.inOut",onComplete:()=>{Pe.set(r,{clearProps:"height,overflow"})}})):(Pe.set(r,{height:s,overflow:"hidden"}),n.current=Pe.to(r,{height:0,opacity:0,duration:.5,ease:"power2.inOut",onComplete:()=>{Pe.set(r,{clearProps:"all"})}})),()=>{n.current&&n.current.kill()}},[t]),e};var vb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fv=_e.createContext&&_e.createContext(vb),a$=["attr","size","title"];function l$(t,e){if(t==null)return{};var n=c$(t,e),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function c$(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function qc(){return qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qc.apply(this,arguments)}function Bv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Qc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bv(Object(n),!0).forEach(function(r){u$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function u$(t,e,n){return e=d$(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d$(t){var e=p$(t,"string");return typeof e=="symbol"?e:e+""}function p$(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yb(t){return t&&t.map((e,n)=>_e.createElement(e.tag,Qc({key:n},e.attr),yb(e.child)))}function Qe(t){return e=>_e.createElement(f$,qc({attr:Qc({},t.attr)},e),yb(t.child))}function f$(t){var e=n=>{var{attr:r,size:s,title:a}=t,l=l$(t,a$),d=s||n.size||"1em",p;return n.className&&(p=n.className),t.className&&(p=(p?p+" ":"")+t.className),_e.createElement("svg",qc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:p,style:Qc(Qc({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&_e.createElement("title",null,a),t.children)};return Fv!==void 0?_e.createElement(Fv.Consumer,null,n=>e(n)):e(vb)}function h$(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"},child:[]}]})(t)}function Zc(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}function m$(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeMiterlimit:"10",strokeWidth:"32",d:"M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z"},child:[]}]})(t)}function g$(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z"},child:[]}]})(t)}const x$=({seasons:t,episodes:e,contentRating:n,seasonsLoading:r,episodesLoading:s,onSeasonSelect:a,posterPath:l})=>{const[d,p]=$.useState(!1),[h,m]=$.useState(""),x=o$(!!h),y=()=>{p(!d)},w=E=>{m(E),p(!1);const S=E.split(" ")[1];a(S)},b=()=>{m(""),p(!1)},_=t.map(E=>({id:E.id,name:`시즌 ${E.season_number}`})),C=l?`https://image.tmdb.org/t/p/original${l}`:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/EpListBackgroudImg.png";return u.jsx("section",{id:"episode-list",children:u.jsxs(Se,{$flexDirection:"column",$gap:"30px",children:[u.jsxs(Se,{$justifyContent:"space-between",$alignItems:"center",$padding:"60px 0 0",$borderTop:"1px solid var(--secondary-300)",children:[u.jsxs(Se,{$flexDirection:"column",$position:"relative",children:[u.jsx(_a,{children:"에피소드"}),h&&!s&&u.jsxs(Se,{$justifyContent:"space-between",$alignItems:"center",$gap:"20px",children:[u.jsxs(Se,{$gap:"10px",$justifyContent:"space-between",$alignItems:"center",children:[u.jsxs(CR,{children:[h,":"]}),n&&u.jsx(Bl,{src:`https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/${n.rating||"전체관람가"} 관람등급 1.png`,alt:`${n.rating||"전체관람가"} 관람등급`}),u.jsx(Bl,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-대사.png",alt:"내용정보-대사"}),u.jsx(Bl,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-선정성.png",alt:"내용정보-선정성"}),u.jsx(Bl,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-주제.png",alt:"내용정보-주제"})]}),u.jsxs(Se,{$justifyContent:"space-between",$alignItems:"center",$gap:"15px",children:[u.jsx(mb,{children:"연속 재생"}),u.jsx(pb,{isRound:!0})]})]})]}),u.jsx(fb,{isOpen:d,onToggle:y,selectedSeason:h,onSelect:w,options:_,loading:r})]}),h&&u.jsxs(xb,{ref:x,children:[s?u.jsx("div",{children:"에피소드 로딩 중..."}):u.jsx(ba,{$flexDirection:"column",children:e.map(E=>u.jsx(s$,{episode:E},E.id))}),u.jsx(PR,{src:C,alt:"에피배경이미지",$position:"absolute",$top:"0",$right:"0",$zIndex:"-1",$width:"555px",$height:"802px"}),u.jsx(zR,{onClick:b,children:u.jsx(Zc,{color:"var(--white)",size:"40"})})]})]})})};function v$(t){return Qe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"},child:[]}]})(t)}function wb(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(t)}function y$(t){return Qe({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"},child:[]}]})(t)}function w$(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"},child:[]}]})(t)}function b$(t){return Qe({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"},child:[]}]})(t)}function _$(t){return Qe({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"},child:[]}]})(t)}function S$(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"},child:[]}]})(t)}const k$=k.button`
    width: ${t=>t.$width};
    height: ${t=>t.$height};
    border-radius: 5px;
    border: 1px solid var(--primary-base);
    background-color: transparent;
    color: var(--white);
    font-size: 1rem;
    font-weight: 700;
    padding: 17.5px 10px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    white-space: nowrap;
`,j$=k.button`
    width: ${t=>t.$width};
    height: ${t=>t.$height};
    border-radius: 5px;
    background-color: ${t=>t.$type==="disabled"?"var(--gray-200)":"var(--primary-base)"};
    color: ${t=>t.$type==="disabled"?"var(--gray-500)":"var(--black)"};
    font-size: ${t=>t.$fontSize};
    font-weight: ${t=>t.$fontWeight};
    padding: 17px 23px;
    white-space: nowrap;
    &:hover {
        background-color: var(--primary-600);
    }
    ${t=>t.$play&&`
        &::before {
            content: ' ';
            background-image: url('https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/playicon.png');
            width: 18px;
            height: 20px;
            margin-right: 10px;
        }
    `}
`,xh=({children:t,type:e="default",fontSize:n="1.5rem",fontWeight:r="700",width:s="8.375rem",height:a="3.1875rem",play:l,onClick:d})=>u.jsx(j$,{$type:e,$fontSize:n,$fontWeight:r,$width:s,$height:a,$play:l,onClick:d,children:t}),C$=({children:t,type:e="default",fontSize:n="1.5rem",width:r="8.375rem",height:s="3.1875rem",onClick:a,review:l})=>u.jsxs(k$,{$type:e,$fontSize:n,$width:r,$height:s,onClick:a,children:[l&&u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/reviewIcon.png",alt:"리뷰 아이콘"}),t,u.jsx(v$,{})]}),Vv={isPlaying:!1,isMuted:!1,isFullscreen:!1,progress:0,isError:!1,videoId:null,duration:0,videoData:null,loading:!1,error:null},bb=Jt({name:"contentPlayer",initialState:Vv,reducers:{setPlaying:(t,e)=>{t.isPlaying=e.payload},togglePlay:t=>{t.isPlaying=!t.isPlaying},setMuted:(t,e)=>{t.isMuted=e.payload},toggleMute:t=>{t.isMuted=!t.isMuted},setFullscreen:(t,e)=>{t.isFullscreen=e.payload},setProgress:(t,e)=>{t.progress=e.payload},setError:(t,e)=>{t.isError=e.payload},setVideoId:(t,e)=>{t.videoId=e.payload},setDuration:(t,e)=>{t.duration=e.payload},resetPlayer:()=>Vv},extraReducers:t=>{t.addCase(ki.pending,e=>{e.loading=!0,e.error=null}).addCase(ki.fulfilled,(e,n)=>{e.loading=!1,e.videoData=n.payload,e.videoId=n.payload}).addCase(ki.rejected,(e,n)=>{e.loading=!1,e.error=n.payload,e.isError=!0})}}),Fn=bb.actions,E$=bb.reducer,Wv=({contentDetail:t,contentType:e})=>{const n=tt(),r=$t(),{id:s}=bh(),a=$.useRef(null),l=e==="series",{videoId:d}=$e(m=>m.playerR);$.useEffect(()=>{s&&(l?(r(Ur(s)),r(oc(s))):(r(Wo(s)),r(ki(s))))},[r,s,l]);const p=()=>{r(Fn.setVideoId(d)),r(Fn.setPlaying(!0)),n("/player")},h=(t==null?void 0:t.name)||(t==null?void 0:t.title)||"제목 로딩 중...";return u.jsx("section",{children:u.jsxs(xR,{children:[u.jsxs(vR,{children:[u.jsx("iframe",{ref:a,src:`https://www.youtube.com/embed/${d}?enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&origin=${window.location.origin}&autoplay=1&mute=1&loop=1&playlist=${d}`,title:"YouTube video player",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",border:"none"},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),u.jsx(yR,{})]}),u.jsx(wR,{children:u.jsxs(Se,{$gap:"30px",$flexDirection:"column",$position:"relative",children:[u.jsx(jR,{children:h}),u.jsxs(Se,{$gap:"26px",$alignItems:"center",children:[u.jsx(xh,{play:!0,onClick:p,color:"var(--secondary-400)",fontSize:"20px",children:"재생"}),u.jsx("button",{children:u.jsx(lm,{width:"50px",height:"50px"})})]})]})})]})})},T$=({content:t,contentType:e})=>{const{id:n,name:r,title:s,backdrop_path:a,overview:l}=t,d=tt(),p=()=>{d(`/detail/${e}/${n}`)};return u.jsxs(bR,{onClick:p,style:{cursor:"pointer"},children:[u.jsxs(Se,{$justifyCenter:"center",$alignItems:"center",$position:"relative",children:[u.jsx(_R,{src:`https://image.tmdb.org/t/p/w500/${a}`,alt:s||r}),u.jsx("button",{children:u.jsx(SR,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/carousel_action_atomic.png",alt:"sample1"})})]}),u.jsxs(Se,{$flexDirection:"column",$padding:"15px 20px 6px",$gap:"8px",children:[u.jsxs(Se,{$justifyContent:"space-between",$alignItems:"center",children:[u.jsxs(Se,{$justifyContent:"space-between",$alignItems:"center",$gap:"10px",children:[u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png",alt:"rateAll"}),u.jsx(hb,{$br:"4px",$padding:"3.5px 5px",fontSize:"12px",children:"HD"}),u.jsx(Jc,{$fontSize:"12px",$padding:"0 0 0 0",children:"2024"})]}),u.jsx(lm,{width:"30px",height:"30px"})]}),u.jsx(cm,{$textAlign:"left",$fontSize:"20px",children:s||r}),u.jsx(kR,{})]}),u.jsx(wu,{$lineClamp:"3",children:l})]})},I$=({recommendData:t,loading:e,contentType:n})=>e?u.jsx("div",{children:"loading...."}):!t||t.length===0?null:u.jsx("section",{children:u.jsxs(Se,{$flexDirection:"column",$position:"relative",$gap:"40px",$padding:"30px 0 60px",children:[u.jsx(_a,{children:"비슷한 콘텐츠"}),u.jsx(wn,{breakpoints:{599:{slidesPerView:2,spaceBetween:10},600:{slidesPerView:3,spaceBetween:20},1025:{slidesPerView:6,spaceBetween:30}},pagination:{clickable:!0},className:"mySwiper",children:t.map(r=>u.jsx(It,{children:u.jsx(T$,{content:r,contentType:n})},r.id))},window.location.pathname)]})}),R$=({nickname:t,rating:e,content:n,date:r,imgurl:s})=>{const{srcNow:a}=$e(l=>l.profileR);return u.jsx("li",{style:{marginLeft:"107px"},children:u.jsxs(Se,{$gap:"17px",$alignItems:"center",children:[u.jsx("img",{src:s||a||"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/SampleProfile.png",alt:"프로필",style:{width:"40px",height:"40px",borderRadius:"50%"}}),u.jsxs(Se,{$flexDirection:"column",$position:"relative",style:{width:"100%"},children:[u.jsxs(Se,{$gap:"15px",$alignItems:"center",$justifyContent:"space-between",children:[u.jsxs(Se,{$gap:"15px",$alignItems:"center",children:[u.jsx("span",{children:t}),u.jsx(Se,{$gap:"5px",$alignItems:"center",children:Array(e||0).fill().map((l,d)=>u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/StarActive.png",alt:"별"},d))})]}),u.jsx("span",{style:{color:"#666",fontSize:"14px"},children:r})]}),u.jsx($$,{children:n})]})]})})},$$=k.p`
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,P$=({value:t,onChange:e})=>u.jsx("form",{style:{padding:"10px 0 0"},onSubmit:n=>n.preventDefault(),children:u.jsx("textarea",{style:{width:"100%",height:"100px",backgroundColor:"var(--gray-900)",borderRadius:"8px",border:"1px solid var(--secondary-200)",padding:"1rem",color:"white"},placeholder:"리뷰를 작성해주세요 (50자 이내)",value:t,maxLength:50,onChange:e})}),z$={reviews:JSON.parse(localStorage.getItem("reviews"))||[]},_b=Jt({name:"reviewR",initialState:z$,reducers:{addReview:(t,e)=>{t.reviews.push(e.payload),localStorage.setItem("reviews",JSON.stringify(t.reviews))}}}),{addReview:M$}=_b.actions,N$=_b.reducer,O$=({isOpen:t,onClose:e,contentDetail:n})=>{const r=$t(),{nickname:s="익명",srcNow:a="https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/SampleProfile.png"}=$e(m=>m.profileR),[l,d]=$.useState("");$.useEffect(()=>{t||d("")},[t]);const p=m=>{m.stopPropagation()},h=()=>{if(!l.trim()){alert("리뷰를 입력해주세요.");return}const m={id:Date.now(),author:s,content:l,created_at:new Date().toISOString(),author_details:{rating:5,avatar_path:a}};r(M$(m)),d(""),e()};return t?u.jsx(ER,{onClick:e,children:u.jsx(TR,{onClick:p,children:u.jsxs(Se,{$flexDirection:"column",$position:"relative",$gap:"20px",children:[u.jsx(_a,{fontSize:"19px",fontWeight:"700",children:(n==null?void 0:n.title)||"리뷰 작성"}),u.jsx(wu,{$fontSize:"17px",$padding:"0px",children:"이 콘텐츠에 대해서 얼마나 만족하셨나요?"}),u.jsxs(Se,{$gap:"15px",$alignItems:"center",children:[u.jsx("img",{src:a,alt:"유저 프로필",style:{width:"40px",height:"40px",borderRadius:"50%"}}),u.jsx("span",{style:{fontSize:"17px"},children:s})]}),u.jsx(P$,{value:l,onChange:m=>d(m.target.value)}),u.jsxs(Se,{$justifyContent:"center",$alignItems:"center",$position:"relative",$gap:"60px",children:[u.jsx(xh,{width:"99px",height:"34px",fontSize:"12px",fontWeight:"400",onClick:e,children:"취소"}),u.jsx(xh,{width:"99px",height:"34px",fontSize:"12px",onClick:h,children:"확인"})]})]})})}):null},Uv=({contentDetail:t})=>{const[e,n]=$.useState(!1),[r,s]=$.useState(5),a=$e(x=>x.reviewR.reviews),{nickname:l,srcNow:d}=$e(x=>x.profileR),p=()=>{n(!0)},h=()=>{n(!1)},m=()=>{s(x=>Math.min(x+5,a.length))};return u.jsxs("section",{children:[u.jsxs(Se,{$flexDirection:"column",$position:"relative",$gap:"20px",$padding:"0 0 30px",children:[u.jsxs(Se,{$gap:"15px",$alignItems:"center",children:[u.jsx(_a,{children:"사용자 평"}),u.jsx(hb,{$br:"20px",$padding:"5px 8px",fontSize:"14px",children:a.length})]}),u.jsxs(Se,{$gap:"15px",$alignItems:"center",children:[u.jsx("img",{src:d||"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/SampleProfile.png",alt:"사용자 프로필",style:{width:"40px",height:"40px",borderRadius:"50%"}}),u.jsx("span",{style:{fontSize:"17px"},children:l}),u.jsx(C$,{review:!0,width:"173px",height:"46px",onClick:p,children:"리뷰 작성하기"})]}),u.jsx(ba,{$flexDirection:"column",$gap:"50px",children:a.slice(0,r).map(x=>{var y;return u.jsx(R$,{nickname:x.author,rating:((y=x.author_details)==null?void 0:y.rating)||0,content:x.content,date:x.created_at.split("T")[0],imgurl:x.author_details.avatar_path||d},x.id)})}),r<a.length&&u.jsxs(IR,{children:[u.jsx($R,{}),u.jsx(RR,{onClick:m,children:u.jsx("img",{src:"/contentdetail/ui/loadMoreBtnIcon.png",alt:"더보기아이콘"})})]})]}),u.jsx(O$,{isOpen:e,onClose:h,contentDetail:t})]})},Gv=k.div`
    /* margin: 80px 0; */
    margin: 160px 8px;
`,Hv=k.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 60px;
    row-gap: 60px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
    }
`,Yv=k.div`
    grid-column: span 2;
    color: var(--white);
    font-size: clamp(40px, 3.65vw, 70px);
    font-weight: 900;
    margin: 0;
`,Jv=k.div`
    border: 1px solid var(--primary-base);
    border-radius: 5px;
    font-size: 13px;
    font-weight: 700;
    padding: 2px 4px;
`,L$=k.div`
    width: 100%;
    max-width: 1000px; // 적당한 최대 너비 설정
    aspect-ratio: 16 / 9; // 영상 비율 유지
    position: fixed;
    background-color: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`,Sb=k.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden; // iframe이 넘치지 않도록
`,A$=k.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
`,D$=k.div`
    width: 100%;
    height: 100%;
    position: relative;
`,F$=k.iframe`
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
`,B$=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${Sb}:hover & {
        opacity: 1;
    }
`,V$=k.div`
    width: 100%;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    position: relative;
    transition: height 0.2s ease;

    &:hover {
        height: 8px;

        // hover 시에만 핸들 표시
        & > div > div {
            transform: scale(1);
        }
    }
`,W$=k.div`
    width: ${t=>t.$progress}%;
    height: 100%;
    background-color: #00e6c3; // 밝은 청록색
    position: relative;
    transition: width 0.1s linear;
`,U$=k.div`
    width: 16px;
    height: 16px;
    background-color: #00e6c3;
    border-radius: 50%;
    position: absolute;
    right: -8px;
    top: 50%;
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.2s ease;
    cursor: grab;
    margin-top: -8px;

    &:active {
        cursor: grabbing;
    }
`,G$=k.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`,H$=k.div`
    display: flex;
    gap: 10px;
`,df=k.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`,Y$=({contentDetail:t,contentType:e,onMoreClick:n})=>{var h,m,x,y,w;if(!t)return null;const r=e==="series"?new Date(t.first_air_date).getFullYear():new Date(t.release_date).getFullYear(),s=e==="series"?t.number_of_episodes:null,a=t.vote_average?t.vote_average.toFixed(1):"N/A",l=((m=(h=t.credits)==null?void 0:h.cast)==null?void 0:m.slice(0,3).map(b=>b.name).join(", "))||"정보 없음",d=((x=t.genres)==null?void 0:x.map(b=>b.name).join(", "))||"정보 없음",p=()=>{const b=document.getElementById("cont-more-detail");b&&b.scrollIntoView({behavior:"smooth"}),n==null||n()};return u.jsx("section",{children:u.jsxs(Se,{$gap:"15px",$padding:"30px 0 30px",$justifyContent:"space-between",children:[u.jsxs(Se,{$flexDirection:"column",$gap:"15px",children:[u.jsxs(Se,{$gap:"15px",$alignItems:"center",children:[u.jsxs("span",{children:[r,"년"]}),e==="series"&&u.jsxs("span",{children:["에피소드 ",s,"화"]}),u.jsx(Jv,{children:"FHD"})]}),u.jsxs(Se,{$gap:"10px",children:[u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png",alt:"rateAll",style:{width:"24px"}}),u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-선정성.png",alt:"rateAll",style:{width:"24px"}}),u.jsxs(Jv,{children:[" 평점 ",a," / 10 "]})]}),u.jsx("p",{children:t.overview||"줄거리 정보가 없습니다."})]}),u.jsxs(ba,{$flexDirection:"column",$gap:"15px",children:[u.jsx("li",{children:u.jsxs(Se,{$gap:"8px",$whiteSpace:"nowrap",$fontSize:"16px",children:[u.jsx("strong",{style:{color:"var(--gray-600)"},children:"출연: "}),u.jsx("p",{children:l}),u.jsx("span",{onClick:p,style:{cursor:"pointer"},children:"더보기"})]})}),u.jsx("li",{children:u.jsxs(Se,{$gap:"8px",$whiteSpace:"nowrap",$fontSize:"16px",children:[u.jsx("strong",{style:{color:"var(--gray-600)"},children:"장르: "}),u.jsx("p",{children:d}),u.jsx("span",{onClick:p,style:{cursor:"pointer"},children:"더보기"})]})}),u.jsx("li",{children:u.jsxs(Se,{$gap:"8px",$whiteSpace:"nowrap",$fontSize:"16px",children:[u.jsx("strong",{style:{color:"var(--gray-600)"},children:"콘텐츠 특징: "}),u.jsx("p",{children:((w=(y=t.keywords)==null?void 0:y.keywords)==null?void 0:w.map(b=>b.name).join(", "))||"정보 없음"}),u.jsx("span",{onClick:p,style:{cursor:"pointer"},children:"더보기"})]})})]})]})})},J$=({contentDetail:t,contentType:e,contentRating:n})=>{var h,m,x,y,w,b;if(!t)return null;const r=((h=t.created_by)==null?void 0:h.map(_=>_.name).join(", "))||"정보 없음",s=((x=(m=t.credits)==null?void 0:m.cast)==null?void 0:x.map(_=>_.name).join(", "))||"정보 없음",a=((y=t.genres)==null?void 0:y.map(_=>_.name).join(", "))||"정보 없음",l=((b=(w=t.keywords)==null?void 0:w.keywords)==null?void 0:b.map(_=>_.name).join(", "))||"정보 없음",d=e==="series"?t.name:t.title,p=(n==null?void 0:n.rating)||"정보 없음";return u.jsx("section",{children:u.jsxs(Se,{$flexDirection:"column",$position:"relative",$gap:"15px",$mb:"100px",$padding:"0 0 100px",children:[u.jsxs(_a,{children:[d," 상세 정보"]}),u.jsxs(ba,{$flexDirection:"column",$gap:"5px",children:[e==="series"&&u.jsxs("li",{children:[u.jsx(Ro,{children:"크리에이터: "}),u.jsx($o,{children:r})]}),u.jsxs("li",{children:[u.jsx(Ro,{children:"출연: "}),u.jsx($o,{children:s})]}),u.jsxs("li",{children:[u.jsx(Ro,{children:"장르: "}),u.jsx($o,{children:a})]}),u.jsxs("li",{children:[u.jsxs(Ro,{children:[e==="series"?"시리즈 특징":"영화 특징",": "]}),u.jsx($o,{children:l})]}),u.jsxs("li",{children:[u.jsx(Ro,{children:"관람등급: "}),u.jsxs($o,{children:[p,"세 이용가"]})]})]})]})})};function q$(t){return Qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(t)}function Q$(t){return Qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}function Z$(t){return Qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"},child:[]}]})(t)}function K$(t){return Qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"},child:[]}]})(t)}function X$(t){return Qe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function eP(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(t)}const tP=({number:t})=>u.jsxs("li",{children:[u.jsxs(Se,{children:[u.jsx(gb,{$width:"225px",$height:"137px",src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/EpItemImgSample.png",alt:"에피회차별썸네일샘플"}),u.jsxs(n$,{children:[u.jsxs(t$,{children:[u.jsxs(r$,{children:[u.jsx("span",{children:t}),u.jsx(cm,{$fontSize:"15px",$fontWeight:"700",children:"애인있어요"})]}),u.jsx(Jc,{$fontSize:"15px",$whiteSpace:"nowrap",children:"52분"})]}),u.jsx(S$,{size:30})]})]}),u.jsx(wu,{children:"아직도 넌 혼잔거니 물어오네요. 난 그저 웃어요. 사랑하고있죠. 사랑하는 사람 있어요. 그대는 내가 안쓰러운건가봐, 좋은 사람있다며 한번 만나보라 말하죠. 그댄 모르죠, 내게도 멋진 애인이 있다는걸."})]}),nP=()=>{const[t,e]=$.useState(!1),[n,r]=$.useState("시즌 1"),[s,a]=$.useState(!1),l=n.split(" ")[1],d=()=>{e(!t)},p=h=>{r(h),e(!1)};return u.jsx(u.Fragment,{children:u.jsx("section",{children:u.jsxs(Se,{$flexDirection:"column",$gap:"15px",$padding:"20px 0",$width:"100%",children:[u.jsxs(Av,{children:[u.jsx(fb,{isOpen:t,onToggle:d,selectedSeason:n,onSelect:p}),u.jsxs(Av,{children:[u.jsx(mb,{children:"연속 재생"}),u.jsx(pb,{isRound:!0})]})]}),u.jsx("handleToggle",{onToggle:d}),u.jsx(xb,{children:u.jsx(ba,{$flexDirection:"column",children:[...Array(4)].map((h,m)=>u.jsx(tP,{number:l},m))})})]})})})};function vh(t){return Qe({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"},child:[]}]})(t)}function rP(t){return Qe({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function pf(t){return Qe({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(t)}const iP=()=>{const[t,e]=$.useState(null),[n,r]=$.useState(null),s=l=>{e(l),r(null)},a=l=>{r(l)};return u.jsxs(sP,{children:[u.jsx(oP,{children:"굿 닥터"}),u.jsxs(aP,{children:[u.jsx(cs,{onClick:()=>s("국가"),isSelected:t==="국가",children:"국가"}),u.jsx(cs,{onClick:()=>s("출연"),isSelected:t==="출연",children:"출연"}),u.jsx(cs,{onClick:()=>s("크리에이터"),isSelected:t==="크리에이터",children:"크리에이터"}),u.jsx(cs,{onClick:()=>s("관람등급"),isSelected:t==="관람등급",children:"관람등급"}),u.jsx(cs,{onClick:()=>s("장르"),isSelected:t==="장르",children:"장르"}),u.jsx(cs,{onClick:()=>s("시리즈 특징"),isSelected:t==="시리즈 특징",children:"시리즈 특징"})]}),t&&u.jsxs(lP,{children:[t==="국가"&&u.jsx(or,{onClick:()=>a("미국"),isSelected:n==="미국",children:"미국"}),t==="출연"&&u.jsxs(u.Fragment,{children:[u.jsx(or,{onClick:()=>a("프레디 하이모어"),isSelected:n==="프레디 하이모어",children:"프레디 하이모어"}),u.jsx(or,{onClick:()=>a("헐 하퍼"),isSelected:n==="헐 하퍼",children:"헐 하퍼"}),u.jsx(or,{onClick:()=>a("리차드 시프"),isSelected:n==="리차드 시프",children:"리차드 시프"})]}),t==="크리에이터"&&u.jsx(or,{onClick:()=>a("진혁"),isSelected:n==="진혁",children:"진혁"}),t==="관람등급"&&u.jsx(or,{onClick:()=>a("ALL"),isSelected:n==="ALL",children:"ALL"}),t==="장르"&&u.jsxs(u.Fragment,{children:[u.jsx(or,{onClick:()=>a("메디컬 시리즈"),isSelected:n==="메디컬 시리즈",children:"메디컬 시리즈"}),u.jsx(or,{onClick:()=>a("드라마"),isSelected:n==="드라마",children:"드라마"})]}),t==="시리즈 특징"&&u.jsx(or,{onClick:()=>a("감정을 파고드는"),isSelected:n==="감정을 파고드는",children:"감정을 파고드는"})]})]})},sP=k.div`
  background-color: #333;
  color: white;
  padding: 20px;
  width: 300px;
  font-family: Arial, sans-serif;
`,oP=k.h1`
  font-size: 24px;
  margin-bottom: 20px;
`,aP=k.div`
  margin-bottom: 20px;
`,cs=k.div`
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  background-color: ${t=>t.isSelected?"#444":"transparent"};
  &:hover {
    background-color: #555;
  }
`,lP=k.div`
  padding-left: 20px;
`,or=k.div`
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${t=>t.isSelected?"#666":"transparent"};
  &:hover {
    background-color: #777;
  }
`,cP=({contentDetail:t,contentType:e})=>{var b,_,C,E,S,j;const[n,r]=$.useState(0),s=e==="series";$.useEffect(()=>{const I=setInterval(()=>{n<50&&r(R=>R+1)},100);return()=>clearInterval(I)},[n]);const a=s?t==null?void 0:t.name:t==null?void 0:t.title,l=s?t==null?void 0:t.first_air_date:t==null?void 0:t.release_date,d=l?new Date(l).getFullYear():"",p=((b=t==null?void 0:t.genres)==null?void 0:b.map(I=>I.name).join(", "))||"",h=(t==null?void 0:t.number_of_seasons)||0,m=(t==null?void 0:t.number_of_episodes)||0,x=((C=(_=t==null?void 0:t.credits)==null?void 0:_.cast)==null?void 0:C.slice(0,3).map(I=>I.name).join(", "))||"",y=s?(E=t==null?void 0:t.created_by)==null?void 0:E.map(I=>I.name).join(", "):(j=(S=t==null?void 0:t.production_companies)==null?void 0:S[0])==null?void 0:j.name,w=(t==null?void 0:t.overview)||"";return u.jsx("div",{children:u.jsxs(AR,{children:[u.jsxs(DR,{children:[u.jsx(BR,{children:a||"제목 로딩 중..."}),u.jsx("div",{children:p}),u.jsxs(FR,{children:[d,"년 전체 FHD"]}),s&&u.jsxs(VR,{children:["시즌 ",h,": ",m,"화 | ",l]}),u.jsxs(e$,{children:[u.jsx(XR,{value:n,max:"100"}),u.jsx(WR,{children:"10분 남음"})]})]}),u.jsx(UR,{children:u.jsxs(GR,{children:[u.jsx(rP,{size:20}),"재생"]})}),u.jsxs(HR,{children:[u.jsxs(YR,{children:[u.jsx(i$,{children:w.length>100?`${w.substring(0,100)}...`:w}),u.jsxs("div",{children:[u.jsxs("p",{children:["출연 : ",x||"정보 없음",u.jsx("button",{onClick:()=>u.jsx(iP,{}),children:"더보기"})]}),u.jsxs("p",{children:["크리에이터 : ",y||"정보 없음"]})]})]}),u.jsxs(JR,{children:[u.jsxs(qR,{children:[u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/하트active.png",alt:"하트"}),u.jsx("p",{children:"좋아요"})]}),u.jsxs(QR,{children:[u.jsxs(ZR,{children:[u.jsx("span",{className:"rating-value",children:t!=null&&t.vote_average?Math.round(t.vote_average/2):3}),u.jsx("span",{children:"/5"})]}),u.jsx("p",{children:"평점"})]}),u.jsxs(KR,{children:[u.jsx(g$,{size:30}),u.jsx("p",{children:"공유"})]})]})]})]})})},uP=({recommendData:t,loading:e,contentType:n})=>{const r="https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/sample-contentlsit.png",s=tt(),a=d=>{d.target.onerror=null,d.target.src=r};if(e)return u.jsx(cf,{children:u.jsx(uf,{children:u.jsx("p",{children:"로딩 중..."})})});const l=d=>{s(`/detail/${n}/${d}`)};return!t||t.length===0?u.jsx(cf,{children:u.jsx(uf,{children:u.jsx("p",{children:"추천 콘텐츠가 없습니다."})})}):u.jsx(cf,{children:u.jsx(uf,{children:t.map(d=>u.jsx(OR,{onClick:()=>l(d.id),children:u.jsx("img",{src:d.poster_path?`https://image.tmdb.org/t/p/w780${d.poster_path}`:r,alt:n==="movie"?d.title:d.name,onError:a})},d.id))})})},qv=({contentType:t})=>{const e=$t(),{id:n}=bh(),[r,s]=$.useState(window.innerWidth<=1024),a=t==="series",[l,d]=$.useState(a?"episodes":"similar"),{movieDetail:p,movieRecommendations:h,recommendLoading:m}=$e(L=>L.movieR),{TVDetail:x,contentRating:y,TVRecommendData:w,recommendLoading:b,tvSeasons:_,episodes:C,seasonsLoading:E,episodesLoading:S}=$e(L=>L.tvSeriesR),j=a?x:p,I=y,R=a?w:h,z=a?b:m;$.useEffect(()=>{const L=()=>{s(window.innerWidth<=1024)};return window.addEventListener("resize",L),L(),()=>window.removeEventListener("resize",L)},[]),$.useEffect(()=>{a||d("similar")},[a]),$.useEffect(()=>{n&&(t==="series"?(e(Uo()),e(Ur(n)),e(pc(n)),e(mc(n)),e(gc(n))):t==="movie"&&(e(Vo()),e(Wo(n)),e(fc(n)),e(dc(n))))},[e,n,t]);const N=L=>{n&&L&&e(hc({tvId:n,seasonNumber:L}))};return u.jsxs(u.Fragment,{children:[!r&&u.jsx(MR,{children:u.jsx(gh,{children:u.jsxs(Se,{$flexDirection:"column",$position:"relative",$gap:"30px",$padding:"0 50px",children:[u.jsx(Wv,{contentDetail:j,contentType:t}),u.jsxs("div",{style:{padding:"0 50px"},children:[u.jsx(Y$,{contentDetail:j,contentType:t}),a&&u.jsx(x$,{seasons:_||[],episodes:C||[],contentRating:I,seasonsLoading:E,episodesLoading:S,onSeasonSelect:N,posterPath:j==null?void 0:j.poster_path}),u.jsx(I$,{recommendData:R,loading:z,contentType:t}),u.jsx(Uv,{contentDetail:j}),u.jsx("div",{id:"cont-more-detail",children:u.jsx(J$,{contentDetail:j,contentType:t,contentRating:I})})]})]})})}),r&&u.jsxs(NR,{children:[u.jsx("div",{children:u.jsx(Wv,{contentDetail:j,contentType:t})}),u.jsx(cP,{contentDetail:j}),u.jsxs(LR,{children:[a&&u.jsx(Dv,{$active:l==="episodes",onClick:()=>d("episodes"),children:"에피소드"}),u.jsx(Dv,{$active:l==="similar",onClick:()=>d("similar"),children:"비슷한 콘텐츠"})]}),a&&l==="episodes"&&u.jsx(nP,{seasons:_||[],episodes:C||[],contentRating:I,seasonsLoading:E,episodesLoading:S,onSeasonSelect:N}),l==="similar"&&u.jsx(uP,{recommendData:R,loading:z,contentType:t}),u.jsx(Uv,{contentDetail:j})]})]})},dP=k.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #191919;
  color: #fff;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: rgb(255, 255, 255);
  transition: backdrop-filter 0.3s linear, background-color 0.3s linear;
  backdrop-filter: blur(30px);
  background-color: rgba(0, 0, 0, 0.7);
  inset: -1px 0px 0px;

  @media (max-width: 1024px) {
    height: 4rem;
    padding: 15px;
  }
`,pP=k.div`
  display: flex;
  align-items: center;
  gap: 3.0625rem;

  @media (max-width: 590px) {
    gap: 1rem;
  }
`,fP=k.h1`
  font-size: 3.125rem;
  font-family: 'metrobarat', sans-serif;
  font-weight: 400;
  background: linear-gradient(to right, #fff, #07ffe6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  @media (max-width: 590px) {
    font-size: 1.8rem;
  }
`,kb=k.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 590px) {
    gap: 1rem;
  }
`,hP=k.nav`
  display: flex;
  gap: 3.5rem;

  @media (max-width: 590px) {
    display: none;
  }
`,dr=k.span`
  font-size: 1.0625rem;
  font-weight: 800;
  font-family: 'Pretendard', sans-serif;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #07ffe6;
  }

  @media (max-width: 590px) {
    font-size: 0.9rem;
  }
`;k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3.5rem;
  width: auto;
  margin-right: 2.8rem;
  cursor: pointer;
`;const mP=k.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  cursor: pointer;
`;k.img`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  object-fit: cover;
  margin-right: 1.75rem;
  cursor: pointer;

  @media (max-width: 590px) {
    width: 2rem;
    height: 2rem;
  }
`;const jb=k.div`
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #1ee0b6;
  }
`;k.div`
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;k.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100vh; /* 화면의 세로 크기 전체를 채우기 */
  background-color: #191919;
  padding: 5rem 9.5rem 8.125rem 11.375rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: fixed;

  .content-wrapper {
    flex: 1;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    padding-top: 4.375rem;

    .left-section {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 1.063rem;
        font-weight: 800;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          font-size: 0.938rem;
          line-height: 1.5rem;
          color: #939598;
          margin-bottom: 0.5rem;
        }

        .rank-number {
          color: #07ffe6;
          margin-right: 0.5rem;
        }
      }

      small {
        display: block;
        margin-top: 1rem;
        font-size: 0.938rem;
        color: #ccc;
      }
    }

    .right-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .right-section .section:last-child {
      margin-top: 11.875rem;
    }

    .section {
      h3 {
        font-size: 1.063rem;
        font-weight: 800;
        margin-bottom: 1rem;
        line-height: 1.5;
        color: #ffffff;
      }

      p {
        font-size: 0.95rem;
        color: #ccc;
      }

      .keywords {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        span {
          background-color: #191919;
          border: 1px solid #07ffe6;
          padding: 0.5rem 1rem;
          border-radius: 1.25rem;
          font-size: 0.75rem;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #07ffe6;
            color: #191919;
          }
        }
      }
    }
  }
`;k.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.063rem;
  background-color: #191919;
  border: none;
  border-bottom: 0.1875rem solid #1ee0b6;
  color: #fff;
  outline: none;

  &::placeholder {
    color: #57585a;
  }
`;k.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: #7e7e7e;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1ee0b6;
  }
`;const gP=k.div`
  position: absolute;
  top: 5rem;
  right: 2rem;
  background-color: #191919;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  position: fixed;

  ul {
    width: 200px;
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
  }
`,mi=k.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  gap: 0.5rem;
  transition: background 0.3s;
  color: white;
  font-size: 14px;
  &:hover {
    background-color: #07ffe6;
    color: #191919;
  }
  &.noHover:hover {
    background-color: transparent;
    color: inherit;
  }
  svg {
    color: #07ffe6;
  }
`,ff=k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #2e2e2e;
`,xP=k.div`
  position: absolute;
  align-items: center;
  margin-top: 10px;
  width: 185px;
  height: 0px;
  border: 1px solid #07ffe6;
`,vP=k.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #07ffe6;
    color: #191919;
  }
`;k.div`
  /* display: none; */
  cursor: pointer;
  font-size: 2.5rem;
  color: white;
  height: 43px;

  /* @media (max-width: 590px) {
    display: block;
  } */
`;const yP=k.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4rem;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  text-align: center;
  padding: 1rem;
  z-index: 999;

  ${dr} {
    padding: 1rem;
    font-size: 1.2rem;
  }
`,wP=()=>u.jsxs(hP,{children:[u.jsx(lt,{to:"/serieshome",children:u.jsx(dr,{children:"시리즈"})}),u.jsx(lt,{to:"/moviehome",children:u.jsx(dr,{children:"영화"})}),u.jsx(lt,{to:"/livehome",children:u.jsx(dr,{children:"라이브"})}),u.jsx(dr,{children:"VIBO+"})]}),bP=({onClick:t})=>u.jsx(jb,{onClick:t,children:u.jsx(X$,{size:30})}),_P=({onClick:t})=>u.jsx(mP,{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/common/header/profileLogo.png",alt:"프로필",onClick:t}),Qv={searchResults:[],currentPage:1,totalPages:0,totalResults:0,status:"idle",error:null,query:""},Cb=Jt({name:"search",initialState:Qv,reducers:{setQuery:(t,e)=>{t.query=e.payload},clearSearch:()=>Qv},extraReducers:t=>{t.addCase(lc.pending,e=>{e.status="loading",e.error=null}).addCase(lc.fulfilled,(e,n)=>{e.status="succeeded",e.searchResults=n.payload.results,e.currentPage=n.payload.page,e.totalPages=n.payload.totalPages,e.totalResults=n.payload.totalResults}).addCase(lc.rejected,(e,n)=>{e.status="failed",e.error=n.payload})}}),SP=Cb.actions,kP=Cb.reducer,Zv=k.span`
    font-size: 0.875rem;
    font-weight: bold;
    color: #7e7e7e;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #1ee0b6;
    }
`,jP=k.input`
    width: 100%;
    padding: 1rem;
    font-size: 1.063rem;
    background-color: #191919;
    border: none;
    border-bottom: 0.1875rem solid #1ee0b6;
    color: #fff;
    outline: none;

    &::placeholder {
        color: #57585a;
    }
`,CP=k.div`
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100vh; /* 화면의 세로 크기 전체를 채우기 */
    background-color: #191919;
    padding: 5rem 9.5rem 8.125rem 11.375rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 9999;
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    .content-wrapper {
        flex: 1;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
        padding-top: 4.375rem;

        .left-section {
            display: flex;
            flex-direction: column;

            h3 {
                font-size: 1.063rem;
                font-weight: 800;
                margin-bottom: 1rem;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    font-size: 0.938rem;
                    line-height: 1.5rem;
                    color: #939598;
                    margin-bottom: 0.5rem;
                }

                .rank-number {
                    color: #07ffe6;
                    margin-right: 0.5rem;
                }
            }

            small {
                display: block;
                margin-top: 1rem;
                font-size: 0.938rem;
                color: #ccc;
            }
        }

        .right-section {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .right-section .section:last-child {
            margin-top: 11.875rem;
        }

        .section {
            h3 {
                font-size: 1.063rem;
                font-weight: 800;
                margin-bottom: 1rem;
                line-height: 1.5;
                color: #ffffff;
            }

            p {
                font-size: 0.95rem;
                color: #ccc;
            }

            .keywords {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;

                span {
                    background-color: #191919;
                    border: 1px solid #07ffe6;
                    padding: 0.5rem 1rem;
                    border-radius: 1.25rem;
                    font-size: 0.75rem;
                    color: #fff;
                    cursor: pointer;
                    transition: background-color 0.3s;

                    &:hover {
                        background-color: #07ffe6;
                        color: #191919;
                    }
                }
            }
        }
    }
`,EP=k.div`
    padding: 6rem 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    min-height: min-content;
    width: 100%;
`,hf=k.div`
    margin-bottom: 2rem;
`,mf=k.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    width: 100%;

    h3 {
        flex: 0 0 calc((100% - (1.5rem * 5)) / 6); // 첫 줄 6개 (h3 포함)
        font-size: 3.8rem;
        font-weight: 800;
        color: #ffffff;
        margin: 0;
    }

    & > div {
        flex: 0 0 calc((100% - (1.5rem * 5)) / 6); // 6개 아이템
        max-width: calc((100% - (1.5rem * 5)) / 6);
    }
`,gf=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.5rem;
        margin-bottom: 0.75rem;
    }

    p {
        text-align: center;
        font-size: 0.875rem;
        color: #ffffff;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`,TP=k.div`
    text-align: center;
    padding: 2rem;
    color: #ffffff;
    font-size: 1rem;
`,Eb=({onClose:t})=>{const e=tt(),n=$t(),{searchResults:r,status:s}=$e(y=>y.searchR),[a,l]=$.useState(""),{popularContent:d}=$e(y=>y.popularR),{genres:p}=$e(y=>y.genreR);$.useEffect(()=>{n(Ho()),n(cc())},[]);const h={movie:r.filter(y=>y.mediaType==="movie").slice(0,10),tv:r.filter(y=>y.mediaType==="tv").slice(0,10),person:r.filter(y=>y.mediaType==="person").slice(0,10)},m=y=>{const w=y.target.value;l(w),w.trim()&&(n(SP.setQuery(w)),n(lc({query:w,page:1})))},x=(y,w)=>{t(),e(w==="movie"?`/detail/movie/${y}`:w==="tv"?`/detail/series/${y}`:w==="person"?"/contents":`/detail/${y}`)};return u.jsxs(CP,{children:[u.jsx(jP,{type:"text",placeholder:"제목, 인물 검색",value:a,onChange:m}),!a&&u.jsxs("div",{className:"content-wrapper",children:[u.jsxs("div",{className:"left-section",children:[u.jsx("h3",{children:"실시간 인기 검색어"}),u.jsx("ul",{children:s==="loading"?u.jsx("div",{children:"Loading..."}):s==="failed"?u.jsxs("div",{children:["Error: ",error||"Something went wrong"]}):d.map((y,w)=>u.jsxs("li",{children:[u.jsx("span",{className:"rank-number",children:w+1}),y.title]},y.id))}),u.jsx("small",{children:"2025.01.22 오후 07:19 기준"})]}),u.jsxs("div",{className:"right-section",children:[u.jsxs("div",{className:"section",children:[u.jsxs("h3",{children:["최근 검색어 ",u.jsx(Zv,{children:"모두 지우기"})]}),u.jsx("p",{children:"최근 검색한 내역이 없습니다."})]}),u.jsxs("div",{className:"section",children:[u.jsxs("h3",{children:["장르 바로가기 ",u.jsx(Zv,{children:"더보기"})]}),u.jsx("div",{className:"keywords",children:p.map(y=>u.jsxs("span",{children:["# ",y.name]},y.id))})]})]})]}),a&&u.jsx(EP,{children:s==="loading"?u.jsx(TP,{children:"검색중..."}):u.jsxs(u.Fragment,{children:[h.tv.length>0&&u.jsx(hf,{children:u.jsxs(mf,{children:[u.jsx("h3",{children:"시리즈"}),h.tv.map(y=>u.jsxs(gf,{onClick:()=>x(y.id,"tv"),children:[u.jsx("img",{src:y.poster_path?`https://image.tmdb.org/t/p/original${y.poster_path}`:"/path-to-placeholder-image.jpg",alt:y.name}),u.jsx("p",{children:y.name})]},y.id))]})}),h.movie.length>0&&u.jsx(hf,{children:u.jsxs(mf,{children:[u.jsx("h3",{children:"영화"}),h.movie.map(y=>u.jsxs(gf,{onClick:()=>x(y.id,"movie"),children:[u.jsx("img",{src:y.poster_path?`https://image.tmdb.org/t/p/original${y.poster_path}`:"/path-to-placeholder-image.jpg",alt:y.title}),u.jsx("p",{children:y.title})]},y.id))]})}),h.person.length>0&&u.jsx(hf,{children:u.jsxs(mf,{children:[u.jsx("h3",{children:"인물"}),h.person.map(y=>u.jsxs(gf,{onClick:()=>x(y.id,"person"),children:[u.jsx("img",{src:y.profile_path?`https://image.tmdb.org/t/p/original${y.profile_path}`:"/path-to-placeholder-image.jpg",alt:y.name}),u.jsx("p",{children:y.name})]},y.id))]})})]})})]})},IP=({onClick:t})=>u.jsx(u.Fragment,{children:u.jsx(jb,{onClick:t,children:u.jsx(Zc,{size:40})})}),RP="https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconV.png",$P=Oe("memberR/register",async({id:t,email:e,password:n,phone:r},s)=>{const a=JSON.parse(localStorage.getItem("users"))||[];if(a.find(p=>p.id===t))return alert("이미 존재하는 아이디입니다."),s.rejectWithValue({success:!1,message:"아이디 중복"});const d={id:t,email:e,password:n,phone:r,nickname:"User01",profileImg:RP};return a.push(d),localStorage.setItem("users",JSON.stringify(a)),alert("회원가입이 완료되었습니다!"),{success:!0,user:d}}),PP=Oe("memberR/login",async({userId:t,password:e,autoLogin:n},r)=>{const a=(JSON.parse(localStorage.getItem("users"))||[]).find(l=>l.id===t);return a?a.password!==e?(alert("비밀번호가 일치하지 않습니다."),r.rejectWithValue({success:!1,message:"비밀번호 불일치"})):(localStorage.setItem("isLoggedIn",JSON.stringify(!0)),localStorage.setItem("currentUser",JSON.stringify(a)),n&&localStorage.setItem("autoLogin",JSON.stringify(!0)),alert("로그인 성공!"),{success:!0,user:a}):(alert("존재하지 않는 아이디입니다."),r.rejectWithValue({success:!1,message:"존재하지 않는 아이디"}))}),zP=Oe("memberR/logout",async(t,e)=>(localStorage.removeItem("isLoggedIn"),localStorage.removeItem("currentUser"),localStorage.removeItem("autoLogin"),alert("로그아웃 되었습니다."),{success:!0})),vs={register:$P,login:PP,logout:zP};function xf(t){return Qe({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"},child:[]}]})(t)}const Tb=({onClose:t})=>{const e=$t(),n=tt(),r=()=>{e(vs.logout()).then(()=>{n("/about")})};return u.jsxs(gP,{children:[u.jsxs("ul",{onClick:t,children:[u.jsxs(mi,{children:[u.jsx(ff,{children:u.jsx(pf,{size:30})}),"사용자1"]}),u.jsxs(mi,{children:[u.jsx(ff,{children:u.jsx(pf,{size:30})}),"사용자2"]}),u.jsxs(mi,{children:[u.jsx(ff,{children:u.jsx(pf,{size:30})}),"사용자3"]})]}),u.jsxs("ul",{children:[u.jsx(lt,{to:"/mypage",onClick:t,children:u.jsxs(mi,{children:[u.jsx(xf,{size:30}),"마이페이지"]})}),u.jsx(lt,{to:"/profilesforedit",onClick:t,children:u.jsxs(mi,{children:[u.jsx(xf,{size:30}),"프로필관리"]})}),u.jsx(lt,{to:"/profileinfoedit",onClick:t,children:u.jsxs(mi,{children:[u.jsx(xf,{size:30}),"회원정보수정"]})}),u.jsx(mi,{className:"noHover",children:u.jsx(xP,{})}),u.jsxs(vP,{onClick:r,children:[u.jsx(Q$,{size:20}),"로그아웃"]})]})]})},MP=()=>{const[t,e]=$.useState(!1),[n,r]=$.useState(!1),s=$.useRef(null),a=$.useRef(null),l=()=>{e(p=>!p)},d=()=>{r(p=>!p)};return $.useEffect(()=>{const p=h=>{s.current&&!s.current.contains(h.target)&&e(!1),a.current&&!a.current.contains(h.target)&&r(!1)};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[]),u.jsxs(kb,{children:[u.jsxs("div",{ref:s,children:[t?u.jsx(IP,{onClick:l}):u.jsx(bP,{onClick:l}),t&&u.jsx(Eb,{onClose:()=>e(!1)})]}),u.jsxs("div",{ref:a,children:[u.jsx(_P,{onClick:d}),n&&u.jsx(Tb,{onClose:()=>r(!1)})]})]})},NP=()=>u.jsx("div",{children:u.jsx(OP,{children:u.jsx(lt,{to:"/",children:u.jsx(LP,{children:"VIBO"})})})}),OP=k.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  @media (max-width: 1024px) {
    height: 4rem;
    padding: 15px;
  }
`,LP=k(lt)`
  font-size: 3.125rem;
  font-family: 'metrobarat', sans-serif;
  font-weight: 400;
  background: linear-gradient(to right, #fff, #07ffe6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
`,AP=()=>{const[t,e]=$.useState(!1),[n,r]=$.useState(!1),[s,a]=$.useState(!1),l=xr(),p=["/profilesforedit","/profileinfoedit","/profileselect","/profileforedit"].includes(l.pathname),h=["/about","/register","/login"].includes(l.pathname),m=()=>e(b=>!b),x=()=>r(b=>!b),y=()=>a(b=>!b),w=()=>e(!1);return u.jsx(u.Fragment,{children:h?u.jsx(NP,{}):u.jsxs(dP,{children:[u.jsxs(pP,{children:[u.jsx(lt,{to:"/",children:u.jsx(fP,{children:"VIBO"})}),!p&&u.jsx(wP,{})]}),!p&&u.jsx(kb,{children:u.jsx(MP,{onSearchClick:m,onProfileClick:x,toggleMobileMenu:y})}),s&&u.jsxs(yP,{children:[u.jsx(lt,{to:"/serieshome",onClick:y,children:u.jsx(dr,{children:"시리즈"})}),u.jsx(lt,{to:"/moviehome",onClick:y,children:u.jsx(dr,{children:"영화"})}),u.jsx(lt,{to:"/livehome",onClick:y,children:u.jsx(dr,{children:"라이브"})}),u.jsx(dr,{onClick:y,children:"VIBO+"})]}),t&&u.jsx(Eb,{onClose:w}),n&&u.jsx(Tb,{})]})})},DP=()=>u.jsxs("div",{className:"wrap",children:[u.jsx(AP,{}),u.jsx("main",{className:"main",children:u.jsx(F2,{})})]}),FP=k.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    background: #fff5f5;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`,BP=k.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`,VP=({title:t,image:e})=>u.jsx(FP,{children:u.jsx(BP,{src:e,alt:t})}),Kv={28:{en:"ACTION",ko:"액션"},12:{en:"ADVENTURE",ko:"모험"},16:{en:"ANIMATION",ko:"애니메이션"},35:{en:"COMEDY",ko:"코미디"},80:{en:"CRIME",ko:"범죄"},99:{en:"DOCUMENTARY",ko:"다큐멘터리"},18:{en:"DRAMA",ko:"드라마"},10751:{en:"FAMILY",ko:"가족"},14:{en:"FANTASY",ko:"판타지"},36:{en:"HISTORY",ko:"역사"},27:{en:"HORROR",ko:"공포"},10402:{en:"MUSICAL",ko:"뮤지컬"},9648:{en:"MYSTERY",ko:"미스터리"},10749:{en:"ROMANCE",ko:"로맨스"},878:{en:"SCI-FI",ko:"공상과학"},10770:{en:"TV MOVIE",ko:"TV 영화"},53:{en:"THRILLER",ko:"스릴러"},10752:{en:"WAR",ko:"전쟁"},37:{en:"WESTERN",ko:"서부"}},Vl=({contentType:t="all"})=>{const e=$t(),{genreId:n}=bh(),{genres:r,contentsByGenre:s,contentStatus:a}=$e(w=>w.genreR);let l=null;n&&(l=r.find(w=>w.id.toString()===n),!l&&Kv[n]&&(l={id:parseInt(n),...Kv[n]}));const d=(l==null?void 0:l.ko)||"모든",p=(l==null?void 0:l.en)||"ALL",h=()=>{switch(t){case"movie":return"영화";case"series":return"시리즈";default:return"콘텐츠"}};$.useEffect(()=>{n&&e(Yo({genreId:n,contentType:t}))},[e,n,t]);const m=n?s[n]||[]:[],x=w=>w.media_type?w.media_type==="tv"?"series":w.media_type:t!=="all"?t:w.title&&!w.name?"movie":!w.title&&w.name?"series":"movie";if(a==="loading")return u.jsx(gh,{children:u.jsx(Gv,{children:u.jsx(Hv,{children:u.jsxs(Yv,{children:[u.jsx("div",{className:"firstS",children:"콘텐츠를"}),u.jsx("div",{className:"secondS",children:"불러오는 중..."})]})})})});const y={display:"block",textDecoration:"none",color:"inherit"};return u.jsx(gh,{children:u.jsx(Gv,{children:u.jsxs(Hv,{children:[u.jsxs(Yv,{children:[u.jsx("div",{className:"firstS",children:p}),u.jsxs("div",{className:"secondS",children:[d," ",h()]})]}),m.length>0?m.map(w=>{const _=`/detail/${x(w)}/${w.id}`;return u.jsx(lt,{to:_,style:y,children:u.jsx(VP,{title:w.title||w.name,image:w.poster_path?`https://image.tmdb.org/t/p/w500${w.poster_path}`:"/contentdetail/sample/sample-contentlsit.png"})},w.id)}):u.jsx("div",{className:"no-content",children:u.jsxs("p",{children:["선택하신 ",d," 장르의 ",h(),"가 없습니다."]})})]})})})},Vr=({type:t="series"})=>{const e=tt(),n=()=>{e("/contentlist")},{TVseriesData:r}=$e(d=>d.tvSeriesR),{movieData:s}=$e(d=>d.movieR),a=t==="series"?r:s,l=t==="series"?"TV":"영화";if(!a)return u.jsx("div",{children:"loading...."});if(a.length>0)return u.jsxs(WP,{children:[u.jsxs(GP,{children:[u.jsxs(HP,{children:[`
  XX님이
  좋아할만 한
  ${t==="series"?"예능":"액션"}`,u.jsx(UP,{children:l})]}),u.jsx(YP,{onClick:n,children:"더보기"})]}),u.jsx(JP,{spaceBetween:30,slidesPerView:5.5,breakpoints:{1024:{slidesPerView:4.2,spaceBetween:15},400:{slidesPerView:2.2,spaceBetween:10}},children:a.map(d=>u.jsx(It,{children:u.jsx(db,{content:{...d,media_type:t}})},d.id))})]})},WP=k.section`
  display: flex;
  /* align-items: center; */
  position: relative;
  // gap: 5px;
  padding: 60px 0 60px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 0 40px 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 30px 0 30px 0;
  }
`,UP=k.div`
  position: absolute;
  left: 19.8%;
  top: 21%;
  transform: translateY(-50%) rotate(-270deg);
  font-size: clamp(50px, 6vw, 80px);
  font-weight: bold;
  color: #5e5e5e;
  letter-spacing: 5px;
  @media (max-width: 1024px) {
    font-size: clamp(40px, 5vw, 60px);
    left: 15%;
    top: 30%;
  }
  @media (max-width: 600px) {
    font-size: clamp(30px, 4vw, 50px);
    left: 10%;
    top: 35%;
  }
`,GP=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 443px; */
  @media (max-width: 1024px) {
    text-align: left;
    white-space: normal;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
  }
`,HP=k.h3`
  color: white;

  line-height: 1.5;
  margin: 0;
  white-space: pre-line;
  font-size: var(--title-xlarge-size); //32
  font-weight: var(--title-xlarge-weight); //800
  @media (max-width: 1024px) {
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
    text-align: left;
    white-space: normal;
  }
  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`,YP=k.button`
  background-color: var(--primary-600);
  color: black;
  font-size: clamp(14px, 1.2vw, 17px);
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: clamp(120px, 10vw, 155px);
  height: 40px;
  font-weight: bold;

  &:hover {
    background-color: var(--primary-base);
  }
`,JP=k(wn)`
  flex: 3;
  max-width: 100%;
  /* height: 443px; */

  .swiper-slide {
    // width: 300px !important; // 이 줄을 제거하거나 주석 처리합니다
    /* height: 443px; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    /* min-width: 390px; */
  }
`,Ib=k.button`
  display: flex;
  background-color: var(--primary-600);
  color: black;
  font-size: 24px;
  padding: 17px 32px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 31.25rem;
  height: 4.375rem;
  font-weight: bold;

  &:hover {
    background-color: var(--primary-base);
  }
`,Rb=k.div`
  width: 1770px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 120px;
`,qP=k.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  /* background-color: black; */
  /* padding: 20px; */
  /* margin-top: 40px;
  margin-bottom: 40px; */
`,QP=k.button`
  width: 13.75rem;
  height: 3.75rem;
  padding: 10px 16px;
  border-radius: 999px;
  border: 2px solid var(--secondary-base);
  font-size: 24px;
  cursor: pointer;
  color: ${t=>t.$active?"var(--white)":"#ccc"};
  background-color: ${t=>t.$active?"var(--secondary-base)":"transparent"};

  &:hover {
    opacity: 0.8;
  }
`,$b=({tabs:t})=>{const[e,n]=$.useState(t[0]);return u.jsx(qP,{children:t.map(r=>u.jsx(QP,{$active:e===r,onClick:()=>n(r),children:r},r))})},ZP=k.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;

  max-width: 1860px;

  .swiper-slide {
    width: 300px !important;
    height: 443px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    transition: all 0.3s ease;
    overflow: visible !important;
  }

  @media (max-width: 1024px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
  }
`,KP=k.div`
  display: flex;

  align-items: center;
  position: relative;

  /* padding: 0 20px; */
  gap: 20px;
  margin-top: 100px;
`,XP=k.div`
  color: white;
  /* width: 23rem; */

  width: 465px;

  line-height: 1.5;
  margin: 0;
  text-align: left;
  font-size: var(--title-xlarge-size); //32
  font-weight: var(--title-xlarge-weight); //800
  @media (max-width: 1024px) {
    font-size: var(--title-large-mobile); //24
    font-weight: var(--title-large-weigh); //700
    text-align: left;
    white-space: normal;
  }
  @media (max-width: 600px) {
    font-size: var(--title-small-mobile); //17
    font-weight: var(--title-xsmall-weight); //700
  }
`,ez=k.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 443px;
`,tz=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,nz=k.span`
  position: absolute;
  bottom: -18px;
  left: 16%;
  transform: translate(-67%, 15%);
  font-size: 130px;
  font-weight: 900;
  /* color: rgba(255, 255, 255, 0.8); */
  height: 200px;
  z-index: 1;
  background: linear-gradient(810deg, #3e3e3f, #a8a9ad, #d1d2d4); /* 부드러운 회색-흰색 그라데이션 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 100px;
    font-weight: 900;
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 90px;
    font-weight: 900;
    bottom: 4px;
    left: 25%;
  }
`,rz=k.div`
  border: 2px solid transparent;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;

    @media (max-width: 1024px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 70%;
      margin-left: 30px;
    }
  }
`,iz=({rank:t,image:e,title:n})=>u.jsxs(tz,{children:[u.jsx(nz,{children:t}),u.jsx(rz,{children:u.jsx("img",{src:e,alt:n})})]}),Pb=()=>{const t=[{id:1,title:"별들에게 물어봐",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_01.webp"},{id:2,title:"옥씨부인전",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_02.webp"},{id:3,title:"도깨비",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_03.webp"},{id:4,title:"너를 좋아해",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_04.webp"},{id:5,title:"류주기",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_05.webp"},{id:6,title:"조폭",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_06.webp"},{id:7,title:"이한신",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_07.webp"},{id:8,title:"지송",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_08.webp"},{id:9,title:"슬의생",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_09.webp"},{id:10,title:"별들에게 물어봐",image:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/dramahome/drama_10.webp"}];return u.jsx(KP,{children:u.jsxs(ZP,{children:[u.jsx(ez,{children:u.jsx(XP,{children:u.jsx("h2",{children:"인기 드라마"})})}),u.jsx(wn,{spaceBetween:20,slidesPerView:4,children:t.map((e,n)=>u.jsx(It,{children:u.jsx(iz,{rank:n+1,image:e.image,title:e.title})},e.id))})]})})},sz=()=>{const t=["국내영화","미국영화","영국영화","일본영화","대만영화"];return u.jsxs(Kr,{children:[u.jsx(om,{}),u.jsxs(Fc,{children:[u.jsx($b,{tabs:t}),u.jsx(Pb,{}),u.jsx(Vr,{}),u.jsx(Vr,{}),u.jsx(Vh,{}),u.jsx(Vr,{}),u.jsx(Vr,{}),u.jsx(Rb,{children:u.jsx(Ib,{children:"더보기"})})]})]})},oz=()=>{const t=["국내드라마","미국드라마","영국드라마","일본드라마","중국드라마"];return u.jsxs(Kr,{children:[u.jsx(om,{}),u.jsxs(Fc,{children:[u.jsx($b,{tabs:t}),u.jsx(Pb,{}),u.jsx(Vr,{}),u.jsx(Vr,{}),u.jsx(Vh,{}),u.jsx(Vr,{}),u.jsx(Vr,{}),u.jsx(Rb,{children:u.jsx(Ib,{children:"더보기"})})]})]})},az=k.div`
    position: relative;
    padding: 0 var(--spacing-5);
    @media (min-width: 1025px) {
        padding: 0 50px;
    }
`,lz=k.div`
    position: relative;
    text-align: center;
    color: var(--white);
    height: 21.875rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .banner-content {
        position: relative;
        text-align: left;
        padding: 0 20px;
        margin: 0 50px;

        h1 {
            font-size: var(--title-xxlarge-size);
            font-weight: var(--title-xlarge-weight);
        }

        p {
            font-size: var(--heading-medium-size);
            font-weight: var(--label-large-weight);
        }
    }
`,cz=k.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 50px;
    .list {
        margin-top: 60px;
    }
    li {
        font-size: var(--label-large-size);
        padding: 10px 0;
        /* border-top: 1px solid gray; */
        text-align: left;
    }

    .title {
        padding: 40px 20px;
    }
    h2 {
        font-size: var(--title-xlarge-size);
        font-weight: var(--title-xlarge-weight);
    }
    p {
        font-size: var(--title-medium-size);
        margin-top: 20px;
    }
`,vf=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 40px 20px;
    position: relative;

    .basic {
        &:hover {
            background: var(--primary-base);
            color: var(--black);
        }
    }
    /* .text {
    li {
      color: var(--primary-base);
      font-weight: 800;
    }
  } */

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 2.5rem;
        right: 0;
        width: 0.0625rem;
        height: 90%;
        background: gray;
    }
`,yf=k.div`
    border: 1px solid var(--primary-base);
    /* padding: 20px; */
    border-radius: 10px;
    width: 18.75rem;
    height: 140px;
    background: ${({$isFilled:t})=>t?"#07FFE6":"transparent"};
    color: ${({$isFilled:t})=>t?"black":"inherit"};
    transition: background 0.3s ease, color 0.3s ease;
    h2 {
        padding: 50px;
        text-align: center;
    }
`,wf=k.ul`
    font-size: 20px;
    margin-top: 3.125rem;
    list-style: none;
    width: 100%;

    li {
        color: ${t=>t.$isFilled?"var(--primary-base)":"white"};
        font-weight: ${t=>t.$isFilled?"bold":"normal"};
        padding: 10px 0;
        text-align: center;
    }
`,uz=k.button`
    display: block;
    width: 240px;
    height: 60px;
    margin: 60px auto;
    padding: 0px;
    background: var(--primary-base);
    color: black;
    font-size: 24px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    /* cursor: pointer; */
`;k.div`
    /* display: flex;
  justify-content: space-between;
  align-items: flex-start; */
    /* width: 100%; */
`;const dz=k.div`
    margin: 100px 300px;
`,pz=k.h1`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 60px;
`,Po=k.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`,Wl=k.label`
    font-size: 16px;
    width: 150px; /* 라벨 고정 너비 */
    text-align: left;
    color: #bbb;
`,Ul=k.div`
    flex: 1;
`,zo=k.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #444;
    border-radius: 5px;
    background: #222;
    color: var(--white);
`,Xv=k.select`
    width: 100%;
    padding: 12px;
    border: 1px solid #444;
    border-radius: 5px;
    background: #222;
    color: var(--white);
`,ey=k.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,fz=k.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 60px;
`,bf=k.button`
    width: 16.7rem;
    height: 100%;
    padding: ${t=>t.$padding?t.$padding:"1.675rem 0px"};
    border: ${t=>t.$cancel?"1px solid var(--gray-300)":"none"};
    border-radius: 5px;
    cursor: pointer;
    background: ${t=>t.$cancel?"#444":"#68F5EB"};
    color: ${t=>t.$cancel?"var(--gray-300)":"var(--gray-900)"};
    font-size: ${t=>t.$fontSize?t.$fontSize:"1.4rem"};
    font-weight: 700;
    text-align: center;
    opacity: 0.8;
    white-space: nowrap;
    &:hover {
        opacity: 1;
    }
`,hz=k.div`
    /* width: 100%;
  height: 200px;
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  color: var(--white); */
`;k.div`
    padding-top: 3.35rem;
    h3 {
        font-size: 1.67rem;
    }
    p {
        font-size: 1.25rem;
        color: var(--gray-500);
    }
`;const mz=k.p`
    text-align: left;
    padding: 0;
    color: gray;
    font-size: 12px;
    margin-top: 20px;
`;k.div`
    input {
        appearance: none;
    }
`;k.div`
    display: flex;
    flex-direction: ${t=>t.$flexDirection};
    align-items: ${t=>t.$alignItems};
    justify-content: ${t=>t.$justifyContent};
    gap: ${t=>t.$gap};
    padding: ${t=>t.$padding?t.$padding:""};
    position: ${t=>t.$position};
    width: ${t=>t.$width||"auto"};
    border-top: ${t=>t.$borderTop};
    color: ${t=>t.$color};
`;k.ul`
    display: flex;
    flex-direction: ${t=>t.$flexDirection};
    align-items: ${t=>t.$alignItems};
    justify-content: ${t=>t.$justifyContent};
    gap: ${t=>t.$gap};
    padding: ${t=>t.$padding?t.$padding:""};
    position: ${t=>t.$position};
    width: ${t=>t.$width||"auto"};
`;const gz=k.div`
    display: flex;
    gap: 40px;
    width: 100%;
    max-width: 610px;
    height: 456px;
    margin: 200px auto;
    padding: 95px;
    // border: 1px solid #ccc;
    border-radius: 8px;
    // background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        width: 192px;
        font-weight: 900;
        font-size: 32px;
        color: #07ffe6;
    }
`,zb=k.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`,xz=k.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`,vz=k.legend`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
`,vi=k.input`
    font-family: NanumSquare Neo;
    font-weight: 600;
    padding: 22px 16px;
    border: 1px solid ${({$error:t})=>t?"#eb003b":"#bcbdc0"};
    background-color: #191919;
    border-radius: 8px;
    font-size: 17px;
    width: 420px;
    height: 56px;
    transition: border-color 0.2s ease-in-out;
    color: white;

    &[type='password'] {
        font-family: 'NanumSquare Neo';
        font-weight: 600;
        padding: 22px 16px;
        border: 1px solid ${({$error:t})=>t?"#eb003b":"#bcbdc0"};
        border-radius: 8px;
        font-size: 17px;
        width: 420px;
        height: 56px;
    }

    &::placeholder {
        color: #bcbdc0;
    }

    &:focus {
        border: 1px solid ${({$error:t})=>t?"#eb003b":"#07ffe6"};
        outline: none;
    }
`,Mb=k.button`
    width: 420px;
    height: 56px;
    padding: 12px;
    background-color: #07ffe6;
    color: black;
    font-weight: 700;
    font-size: 17px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #06dbbf;
    }
    &:active {
        background-color: #04998a;
    }
    &:disabled {
        background-color: #d1d2d4;
        cursor: not-allowed;
    }
`,yz=k.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
`,wz=k.input`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    accent-color: #06dbbf;
    font-weight: 600;
    font-size: 15px;
    color: #bcbdc0;
`,bz=k.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 10px;

    a {
        font-weight: 600;
        font-size: 15px;
        color: #bcbdc0;
        text-decoration: none;
        font-size: 15px;

        &:hover {
            text-decoration: underline;
        }
    }

    span {
        color: #888;
    }
`,_z=k.div`
    display: flex;
    gap: 40px;
    width: 100%;
    max-width: 610px;
    height: auto;
    margin: 100px auto;
    padding: 50px;
    border-radius: 8px;
    background-color: #191919;
    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        font-weight: 900;
        font-size: 32px;
        color: #07ffe6;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        .Register {
            display: flex;
            flex-direction: column;
            gap: 45px;
            width: 100%;
            max-width: 610px;
        }
    }
`;k.h2`
    font-weight: 900;
    font-size: 32px;
    color: #07ffe6;
`;const ty=k.p`
    color: #eb003b;
    font-size: 12px;
    position: absolute;
    bottom: -20px; /* 인풋 아래 고정 */
    left: 40px;
    margin: 0;
`,us=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    min-height: 60px;
    position: relative;
    .textarea {
        width: 100%;
        max-width: 420px;
        min-height: 183px;
        color: #a8a9ab;
        background-color: #3e3e3f;
        border: 0;
    }
`,ny=k.div`
    position: relative;
    width: 100%;
    max-width: 420px;
`,ry=k.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #07ffe6;
    color: black;
    font-weight: 700;
    font-size: 14px;
    padding: 6px 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: #06dbbf;
    }
    &:active {
        background-color: #04998a;
    }
`;k.div`
    display: flex;
    flex-direction: column;
`;const Sz=k.div`
    width: 100%;
    padding: 20px;
    background: black;
    color: white;
`,iy=k.div`
    margin-bottom: 20px;
`,kz=k.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`,jz=k.p`
    font-size: 14px;
    color: var(--gray-100);
    margin-bottom: 10px;
`,_f=k.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 0;
`,Sf=k(wb)`
    font-size: 20px;
    color: ${t=>t.active?"var(--primary-base)":"var(--gray-100)"};
    margin-right: 10px;
`,kf=k.p`
    font-size: 16px;
    color: white;
`,sy=k.div`
    display: flex;
    gap: 15px;
    margin-left: 30px;
`,jf=k.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`,Gl=k(wb)`
    font-size: 15px;
    color: ${t=>t.active?"var(--primary-base)":"var(--gray-100)"};
    margin-right: 5px;
`,Hl=k.p`
    font-size: 14px;
    color: var(--gray-100);
`,Cz=k.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`,Ez=k.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: var(--black);
    padding: 50px;
    border: 2px solid var(--primary-base);
    border-radius: 10px;
    color: var(--white);
    width: 600px;
    height: 600px;
    text-align: center;
    font-weight: 7600;
    position: relative;
    .subtitle {
        h2 {
            font-size: 30px;
            font-weight: 700;
        }
        p {
            font-size: 16px;
            color: var(--gray-700);
            margin-top: 10px;
        }
    }
`,Tz=k.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: var(--primary-base);
    color: var(--black);
    font-size: 40px;
`,Iz=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #222;
    padding: 20px;
    border: 1px solid var(--primary-base);
    border-radius: 5px;
    margin: 60px 25px;
    width: 450px;
    height: 110px;
    p {
        font-size: 20px;
        color: var(--white);
        font-weight: 700;
        text-align: left;
    }
    .text {
        display: flex;
        gap: 10px;
        flex-direction: row;
        flex-wrap: nowrap;
    }
`,Rz=k.button`
    width: 260px;
    height: 50px;
    background: var(--primary-base);
    color: black;
    padding: 10px;
    font-size: 24px;
    font-weight: 800;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
`,$z=k.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`,Pz=k.button`
    flex: 1 1 calc(50% - 10px);
    padding: 10px;
    background: ${t=>t.$isSelected?"var(--primary-base)":"var(--gray-600)"};
    border: none;
    border-radius: 5px;
    color: ${t=>t.$isSelected?"var(--black)":"var(--white)"};
    cursor: pointer;

    &:hover {
        background: var(--primary-base);
        color: var(--black);
    }
`,zz=k.div`
    background: #222;
    color: var(--white);
    padding: 20px;
    border-radius: 10px;
    width: 400px;
`,Mz=k.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
`,Cf=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`,Ef=k.p`
    color: var(--gray-500);
    font-size: 14px;
`;k.p`
    color: #bbb;
    font-size: 14px;
`;const Nz=k.p`
    font-size: 18px;
    font-weight: bold;
`;k.div`
    input {
        appearance: none;
    }
`;const Mo=k.div`
    display: flex;
    flex-direction: ${t=>t.$flexDirection};
    align-items: ${t=>t.$alignItems};
    justify-content: ${t=>t.$justifyContent};
    gap: ${t=>t.$gap};
    padding: ${t=>t.$padding?t.$padding:""};
    position: ${t=>t.$position};
    width: ${t=>t.$width||"auto"};
    height: ${t=>t.$height||"auto"};
    border-top: ${t=>t.$borderTop};
    color: ${t=>t.$color};

    &.checkbox1,
    &.checkbox2 {
        flex: 1;
        input[type='checkbox'] {
            appearance: none;
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
`;function oy(t){return Qe({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},child:[]}]})(t)}const Oz=({onClose:t})=>{const[e,n]=$.useState(1),[r,s]=$.useState(null);return u.jsx(Cz,{children:u.jsxs(Ez,{children:[u.jsx(Tz,{onClick:t,children:"×"}),e===1&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"subtitle",children:[u.jsxs("h2",{children:["광고형 스탠다드 이용권의",u.jsx("br",{}),"결제 내역을 확인해주세요."]}),u.jsx("p",{children:"정기 결제 주기를 확인해 주세요."})]}),u.jsxs(Iz,{children:[u.jsxs("div",{className:"text",children:[u.jsx("p",{children:"월간 "}),u.jsx("span",{style:{background:" var(--primary-base)",color:"black",padding:"5px 5px",borderRadius:"3px",fontSize:"14px",textAlign:"center",fontWeight:"800"},children:"EVENT"})]}),u.jsxs("p",{children:["월 5,500원",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--gray-700)",fontSize:"14px"},children:"지금 가입하면 50% 할인"})]})]}),u.jsxs(Rz,{onClick:()=>n(2),children:["확인",u.jsx(q$,{size:30})]})]}),e===2&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"subtitle",children:[u.jsx("h2",{children:"결제 정보를 입력해 주세요."}),u.jsx("p",{children:"정기 결제에 사용할 결제 정보를 입력해 주세요."})]}),u.jsxs(zz,{children:[u.jsx(Mz,{children:"스탠다드 이용권"}),u.jsxs(Cf,{children:[u.jsx(Ef,{children:"요금"}),u.jsx("p",{children:"5,500원"})]}),u.jsxs(Cf,{children:[u.jsx(Ef,{children:"혜택"}),u.jsx("p",{children:"다운로드 3회권"})]}),u.jsxs(Cf,{children:[u.jsx(Ef,{children:"결제 예정 금액"}),u.jsx(Nz,{children:"5,500원"})]})]}),u.jsx($z,{children:["결제방법1","결제방법2","결제방법3","결제방법4"].map(a=>u.jsx(Pz,{onClick:()=>s(a),$isSelected:r===a,children:a},a))}),u.jsxs(Mo,{$flexDirection:"column",$width:"400px",$gap:"7px",children:[u.jsxs(Mo,{className:"CheckBox",$justifyContent:"space-between",children:[u.jsxs(Mo,{$gap:"15px",$alignItems:"center",className:"checkbox1",children:[u.jsx("input",{type:"checkbox",id:"agree"}),u.jsx(oy,{color:"var(--primary-base)",size:"20px"}),u.jsx("label",{htmlFor:"agree",children:" 동의사항 내용 1"})]}),u.jsxs(Mo,{$gap:"15px",$alignItems:"center",className:"checkbox1",children:[u.jsx("input",{type:"checkbox",id:"agree"}),u.jsx(oy,{color:"var(--primary-base)",size:"20px"}),u.jsx("label",{htmlFor:"agree",children:" 동의사항 내용 2"})]})]}),u.jsxs(Mo,{className:"checkbox2",$gap:"15px",$alignItems:"center",children:[u.jsx("input",{type:"checkbox",id:"agree"}),u.jsx(h$,{color:"var(--primary-base)",size:"20px"}),u.jsx("label",{htmlFor:"agree",children:" 전체내용 동의하기"})]})]})]})]})})},Lz=()=>{const[t,e]=$.useState(!1),[n,r]=$.useState(null);return u.jsx(u.Fragment,{children:u.jsxs(Kr,{children:[u.jsx(az,{}),u.jsxs(lz,{children:[u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/member_banner.PNG",alt:"membershipbanner"}),u.jsxs("div",{className:"banner-content",children:[u.jsx("h1",{children:"VIBO 여기서 지금 스트리밍중"}),u.jsx("p",{children:"다양한 콘텐츠를 합리적인 멤버십으로 즐겨보세요."})]})]}),u.jsxs("section",{children:[u.jsxs(cz,{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"이용권 구독"}),u.jsxs("p",{children:["전체 이용권 정보를 보시려면 ",u.jsx("br",{})," 하단 [모든 이용권 보기] 버튼을 선택하세요."]}),u.jsxs("ul",{className:"list",children:[u.jsx("li",{children:"월간 요금"}),u.jsx("li",{children:"프로필 추가"}),u.jsx("li",{children:"풀영상시청"}),u.jsx("li",{children:"댓글 / 평점"}),u.jsx("li",{children:"VIBO PLUS 이용권"})]})]}),u.jsxs(vf,{children:[u.jsx(yf,{className:"basic",$isFilled:n==="basic",onClick:()=>r(n==="basic"?null:"basic"),children:u.jsx("h2",{children:"베이직"})}),u.jsxs(wf,{className:"text",$isFilled:n==="basic",children:[u.jsx("li",{children:"무료"}),u.jsx("li",{children:"1개"}),u.jsx("li",{children:"x"}),u.jsx("li",{children:"x"}),u.jsx("li",{children:"x"})]})]}),u.jsxs(vf,{children:[u.jsx(yf,{className:"standard",$isFilled:n==="standard",onClick:()=>r(n==="standard"?null:"standard"),children:u.jsx("h2",{children:"스탠다드"})}),u.jsxs(wf,{className:"text",$isFilled:n==="standard",children:[u.jsx("li",{children:"5,500원"}),u.jsx("li",{children:"3개"}),u.jsx("li",{children:"✔"}),u.jsx("li",{children:"✔"}),u.jsx("li",{children:"x"})]})]}),u.jsxs(vf,{children:[u.jsx(yf,{className:"premium",$isFilled:n==="premium",onClick:()=>r(n==="premium"?null:"premium"),children:u.jsx("h2",{children:"프리미엄"})}),u.jsxs(wf,{className:"premium",$isFilled:n==="premium",children:[u.jsx("li",{children:"9,900원"}),u.jsx("li",{children:"3개"}),u.jsx("li",{children:"✔"}),u.jsx("li",{children:"✔"}),u.jsx("li",{children:"✔"})]})]})]}),u.jsx(uz,{onClick:()=>e(!0),children:"결제하기"}),t&&u.jsx(Oz,{onClose:()=>e(!1)})]})]})})},Az=()=>{const[t,e]=$.useState({personalInfo:!1,marketing:!1,push:!1,email:!1,sms:!1,thirdParty:!1}),n=r=>{e(s=>({...s,[r]:!s[r]}))};return u.jsx(u.Fragment,{children:u.jsx(Kr,{children:u.jsxs(dz,{children:[u.jsx(pz,{children:"회원정보 수정"}),u.jsxs("form",{children:[u.jsxs(Po,{children:[u.jsx(Wl,{htmlFor:"userId",children:"아이디"}),u.jsx(Ul,{children:u.jsx(zo,{type:"text",id:"userId",placeholder:"사용자 아이디",disabled:!0})})]}),u.jsxs(Po,{children:[u.jsx(Wl,{htmlFor:"userName",children:"이름"}),u.jsx(Ul,{children:u.jsx(zo,{type:"text",id:"userName",placeholder:"사용자 이름"})})]}),u.jsxs(Po,{children:[u.jsx(Wl,{htmlFor:"email",children:"이메일"}),u.jsx(Ul,{children:u.jsxs(ey,{children:[u.jsx(zo,{type:"text",id:"email",placeholder:"이메일 입력"}),u.jsxs(Xv,{children:[u.jsx("option",{children:"직접 입력"}),u.jsx("option",{children:"@gmail.com"}),u.jsx("option",{children:"@naver.com"}),u.jsx("option",{children:"@daum.net"})]})]})})]}),u.jsxs(Po,{children:[u.jsx(Wl,{htmlFor:"phone",children:"휴대폰 번호"}),u.jsx(Ul,{children:u.jsxs(ey,{children:[u.jsxs(Xv,{children:[u.jsx("option",{children:"010"}),u.jsx("option",{children:"011"}),u.jsx("option",{children:"016"})]}),"-",u.jsx(zo,{type:"text",placeholder:"0000"}),"-",u.jsx(zo,{type:"text",placeholder:"0000"}),u.jsx(bf,{$padding:"10px 20px",type:"button",$fontSize:"1rem",$cancel:!0,children:"인증번호 전송"})]})})]}),u.jsx(Po,{children:u.jsx(hz,{children:u.jsxs(Sz,{children:[u.jsxs(iy,{children:[u.jsx(kz,{children:"개인정보 수집 및 마케팅 수신 동의"}),u.jsx(jz,{children:"수신동의를 하시면 티빙에서 제공하는 다양한 프로모션과 이벤트/신규 콘텐츠 등의 정보를 만나실 수 있습니다."}),u.jsxs(_f,{onClick:()=>n("personalInfo"),children:[u.jsx(Sf,{active:t.personalInfo}),u.jsx(kf,{children:"[선택] 개인정보 수집 및 이용 동의"})]}),u.jsxs(jf,{children:[u.jsx(Gl,{active:t.personalInfo}),u.jsx(Hl,{children:"맞춤형 광고 설정 활성화"})]}),u.jsxs(_f,{onClick:()=>n("marketing"),children:[u.jsx(Sf,{active:t.marketing}),u.jsx(kf,{children:"[선택] 마케팅 정보 수신 동의"})]}),u.jsxs(sy,{children:[u.jsxs(sy,{onClick:()=>n("push"),children:[u.jsx(Gl,{active:t.push}),u.jsx(Hl,{children:"푸시 알림"})]}),u.jsxs(jf,{onClick:()=>n("email"),children:[u.jsx(Gl,{active:t.email}),u.jsx(Hl,{children:"이메일"})]}),u.jsxs(jf,{onClick:()=>n("sms"),children:[u.jsx(Gl,{active:t.sms}),u.jsx(Hl,{children:"SMS"})]})]})]}),u.jsx(iy,{children:u.jsxs(_f,{onClick:()=>n("thirdParty"),children:[u.jsx(Sf,{active:t.thirdParty}),u.jsx(kf,{children:"[선택] CJ 음니서비스 이용을 위한 개인정보 제 3자 제공 동의"})]})})]})})}),u.jsx(mz,{children:"회원 탈퇴 및 계정 삭제"}),u.jsxs(fz,{children:[u.jsx(bf,{type:"submit",children:"확인"}),u.jsx(bf,{type:"button",$cancel:!0,children:"취소"})]})]})]})})})},Dz=k.div`
  width: 100%;
  margin: 0 auto; /* ✅ 가운데 정렬 */
  padding: 0 20px; /* ✅ 좌우 패딩 추가 */
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 110px;
`,Fz=[{id:"1",title:"실시간 인기 LIVE"},{id:"2",title:"뉴스/시사/교양 채널"},{id:"3",title:"스포츠 채널"},{id:"4",title:"예능 채널"},{id:"5",title:"다큐 채널"}],Bz=()=>u.jsx(Kr,{children:u.jsx(Dz,{children:Fz.map(t=>u.jsx(v1,{title:t.title},t.id))})}),Vz=k.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    z-index: 2;
    width: 70rem;
    height: 100vh;
    max-height: 61.25rem;
    padding: 0 75px 75px;
    background-color: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 40px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`,bu=k.h2`
    font-weight: 700;
    font-size: var(--heading-medium-size);
    text-align: center;
`,Tf=k.h3`
    font-weight: 700;
    font-size: 30px;
    text-align: left;
`,ys=k.p`
    font-weight: 700;
    font-size: ${t=>t.$fontSize?t.$fontSize:"20px"};
    color: ${t=>t.$color};
`,um=k.div`
    height: 75vh;
    position: relative;
`,dm=k.form`
    height: calc(100vh - 300px);
    width: calc(1920px - 1200px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
`,et=k.div`
    display: flex;
    flex-direction: ${t=>t.$flexDirection};
    align-items: ${t=>t.$alignItems};
    justify-content: ${t=>t.$justifyContent};
    gap: ${t=>t.$gap};
    padding: ${t=>t.$padding?t.$padding:""};
    margin: ${t=>t.$margin?t.$margin:""};
    position: ${t=>t.$position};
    width: ${t=>t.$width||"auto"};
    border-top: ${t=>t.$borderTop};
`,pa=k.div`
    overflow: hidden;
    border: ${t=>t.$border};
    border-radius: ${t=>t.$borderRadius};
    position: relative;
    top: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        top: -30px;
    }
`,zs=k.img`
    width: ${t=>t.$width||"auto"};
    height: ${t=>t.$height||"auto"};
    filter: ${t=>t.$filter&&"brightness(50%)"};
    object-fit: contain;
`,yh=k.div`
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`,Nb=k.button`
    border: ${t=>t.$border};
    border-radius: ${t=>t.$borderRadius};
    padding: ${t=>t.$padding};
    color: ${t=>t.$color};
    width: ${t=>t.$width};
`,Ob=k.button`
    border: ${t=>t.$border};
    border-radius: ${t=>t.$borderRadius};
    background-color: ${t=>t.$backgroundColor};
    padding: ${t=>t.$padding};
    color: ${t=>t.$color};
    width: ${t=>t.$width};
    font-weight: 800;
`,Wz=k.input`
    background-color: var(--gray-500);
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 20px;
    margin: 0;
    width: 32.167rem;
    height: 4.167rem;
    font-weight: 600;
    font-size: var(--title-medium-size);
`,Uz=k.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`,Gz=k.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    padding: 75px 75px 0px 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`,Hz=k.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: -75px;
    padding: 20px 20px 0 0;
`;k.div`
    padding-top: 5rem;
`;const Lb=()=>{const t=tt(),e=()=>{t("/profilesforedit")};return u.jsx(u.Fragment,{children:u.jsx(Kr,{children:u.jsx(um,{children:u.jsx(dm,{children:u.jsxs(et,{$flexDirection:"column",$alignItems:"center",$gap:"60px",$padding:"90px",children:[u.jsxs(et,{$flexDirection:"column",$alignItems:"center",$gap:"10px",children:[u.jsx(bu,{children:"프로필 선택"}),u.jsx(ys,{$color:"var(--gray-500)",children:"선택할 프로필을 선택해주세요"})]}),u.jsxs(et,{$gap:"20px",$alignItems:"center",children:[u.jsxs(et,{$gap:"20px",$flexDirection:"column",$alignItems:"center",children:[u.jsx(pa,{$border:"4px solid var(--white)",$borderRadius:"5px",children:u.jsx(zs,{$width:"200px",$height:"200px",src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconI.png",alt:"샘플프아"})}),u.jsx(ys,{$fontSize:"17px",$color:"var(--gray-500)",children:"닉네임1"})]}),u.jsxs(et,{$gap:"20px",$flexDirection:"column",$alignItems:"center",children:[u.jsx(pa,{$border:"4px solid var(--white)",$borderRadius:"5px",children:u.jsx(zs,{$width:"200px",$height:"200px",src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconV.png",alt:"샘플프아"})}),u.jsx(ys,{$fontSize:"17px",$color:"var(--gray-500)",children:"닉네임2"})]})]}),u.jsx(Nb,{$padding:"1.675rem",$border:"1px solid var(--gray-500)",$borderRadius:"5px",$color:"var(--gray-300)",$width:"15.5rem",onClick:e,children:"프로필 편집"})]})})})})})},Yz=()=>u.jsx(u.Fragment,{children:u.jsx(Lb,{})}),Jz=k.div``,qz=k.div`
    text-align: left;
    margin-top: 20px;
    padding: 25px 0;
    h3 {
        font-size: 33px;
        padding-bottom: 25px;
    }
    p {
        font-size: 23px;
    }
`,Qz=k.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 50px;
    position: relative;
`,Zz=k.div`
    width: 18.75rem;
    height: 380px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    position: absolute;
    transform-origin: bottom;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.6); // inner shadow
        border-radius: 8px;
    }
`,Kz=k.div`
    width: 9.375rem;
    height: 190px;
    background-color: ${t=>t.color};
    border-radius: 8px;
    position: absolute;
    transform-origin: bottom;
    z-index: -2;
    opacity: 0.5;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
`,Xz=k.div`
    display: flex;
    width: 150px;
    height: 45px;
    border-radius: 10px;
    background-color: var(--primary-base);
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    p {
        display: flex;
        text-align: center;
        font-size: var(--label-medium-size);
        font-weight: var(--display-small-weight);
        color: var(--black);
    }
`,ay=["#FF6B6B","#FFCC5C","#4ECDC4","#1A535C","#FFD166","#6A0572","#A29BFE","#E84393","#FDCB6E","#00CEC9"],eM=()=>ay[Math.floor(Math.random()*ay.length)],tM=()=>{const t=[{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/mypage_01.webp"},{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/mypage_02.webp"},{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/mypage_04.webp"}],e=$.useRef([]),n=$.useRef(new Array(10).fill(null)),r=$.useRef(Array.from({length:10},()=>eM())),s=tt(),a=$.useRef([{x:480,y:180},{x:670,y:100},{x:600,y:150},{x:160,y:280},{x:650,y:290},{x:400,y:10},{x:500,y:80},{x:430,y:230},{x:250,y:250},{x:400,y:280}]),l=$.useRef(Array.from({length:t.length},()=>({x:150,y:10})));return $.useEffect(()=>{Pe.set(e.current,{x:window.innerWidth,y:window.innerHeight,rotationX:60,rotationY:30,opacity:.5}),Pe.set(n.current,{x:window.innerWidth-200,y:window.innerHeight-100,rotationX:60,rotationY:30,opacity:.6}),e.current.forEach((d,p)=>{if(d){const{x:h,y:m}=l.current[p];Pe.to(d,{x:p*100+h,y:-p*70+m,opacity:1,duration:1.5,ease:"power2.out"})}}),n.current.forEach((d,p)=>{if(d){const{x:h,y:m}=a.current[p];Pe.to(d,{x:h,y:m,opacity:.6,duration:1.5,ease:"power2.out"})}})},[]),u.jsx("div",{children:u.jsxs(qz,{children:[u.jsx("h3",{children:"시청하신 콘텐츠가 없습니다."}),u.jsx("p",{children:"다양한 콘텐츠를 시청해보세요."}),u.jsx("p",{children:"고객님의 취향에 맞추어 추천을 해드릴까요?"}),u.jsx("div",{children:u.jsx(Xz,{onClick:()=>s("/"),children:u.jsx("p",{children:"콘텐츠 추천받기"})})}),u.jsxs(Qz,{children:[u.jsx("div",{children:Array.from({length:10}).map((d,p)=>u.jsx(Kz,{ref:h=>n.current[p]=h,color:r.current[p],children:p+1},`bg-${p}`))}),t.map((d,p)=>u.jsx(Zz,{ref:h=>e.current[p]=h,style:{backgroundImage:`url(${d.src})`}},p))]})]})})},nM=k.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  padding: 20px;
  justify-content: center;
  max-width: 1700px;
  margin: auto;
`,rM=k.div`
  width: 250px;
  height: 415px;
  aspect-ratio: 9 / 14;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
`,iM=k.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  /* margin-bottom: 20px; */
  justify-content: left;
`,sM=k.button`
  background: ${t=>t.active?"#009C8C":"#222"};
  color: ${t=>t.active?"#000":"#fff"};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: var(--label-medium-size);
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: var(--secondary-base);
    color: black;
  }
`,ly=()=>{const t=["드라마","영화"],[e,n]=_e.useState("드라마"),s=[{id:1,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_01.webp",category:"드라마"},{id:2,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_02.webp",category:"드라마"},{id:3,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_03.webp",category:"드라마"},{id:4,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_04.webp",category:"드라마"},{id:5,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_05.webp",category:"드라마"},{id:6,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_06.webp",category:"드라마"},{id:7,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_07.webp",category:"드라마"},{id:8,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_08.webp",category:"드라마"},{id:9,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_09.webp",category:"드라마"},{id:10,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_10.webp",category:"드라마"},{id:11,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_11.webp",category:"드라마"},{id:12,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_drama_12.webp",category:"드라마"},{id:13,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_01.webp",category:"영화"},{id:14,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_02.webp",category:"영화"},{id:15,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_03.webp",category:"영화"},{id:16,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_04.webp",category:"영화"},{id:17,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_05.webp",category:"영화"},{id:18,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_06.webp",category:"영화"},{id:19,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_07.webp",category:"영화"},{id:20,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_08.webp",category:"영화"},{id:21,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_09.webp",category:"영화"},{id:22,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_10.webp",category:"영화"},{id:23,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_11.webp",category:"영화"},{id:24,src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/member/b_movie_12.webp",category:"영화"}].filter(a=>a.category===e);return u.jsxs("div",{children:[u.jsx(iM,{children:t.map(a=>u.jsx(sM,{active:e===a,onClick:()=>n(a),children:a},a))}),u.jsx(nM,{children:s.map(a=>u.jsx(rM,{style:{backgroundImage:`url(${a.src})`}},a.id))})]})},oM=k.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 60px;
    max-width: 900px;
    margin: auto;
`,aM=k.div`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    background: var(--gray-800);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #68f5eb;
`,lM=k.div`
    width: 127px;
    height: 183px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    flex-shrink: 0;
    box-shadow: 15px 10px 10px rgba(0, 0, 0, 0.5);
`,cM=k.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 11.4375rem;
    gap: 20px;
    padding: 20px;
    .reviwText {
        display: flex;
        justify-content: space-between;
    }
`,uM=k.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
`,dM=k.span`
    background: var(--black);
    padding: 2px 0;
    border-radius: 4px;
    border: 1px solid var(--primary-base);
    width: 81px;
    height: 29px;
    font-size: var(--label-small-size);
    color: var(--primary-base);
    text-align: center;
`,pM=k.span`
    background: var(--black);
    font-size: var(--label-small-size);
    color: var(--primary-base);
    text-align: center;
    padding: 2px 0;
    border-radius: 4px;
    border: 1px solid var(--primary-base);
    height: 29px;
    width: 130px;
`,fM=k.div`
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 5px;
    background: var(--black);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid var(--primary-base);
    height: 6rem;
`,hM=k.div`
    display: flex;
    align-items: center;
    margin-bottom: 45px;
    gap: 8px;
`,mM=k.div`
    display: flex;
    gap: 3px;
`,gM=k.span`
    color: ${t=>t.$filled?"#FFD700":"#444"};
    font-size: 18px;
`,xM=k.button`
    background: none;
    border: none;
    color: #bbb;
    font-size: 16px;
    cursor: pointer;
    align-self: flex-start;
    &:hover {
        color: white;
    }
`,vM=()=>{const t=$e(e=>e.reviewR.reviews);return u.jsx("div",{children:u.jsx(oM,{children:t.length>0?t.map(e=>u.jsxs(aM,{children:[u.jsx(lM,{style:{backgroundImage:`url(${e.moviePoster||"/default-movie-poster.jpg"})`}}),u.jsxs(cM,{children:[u.jsxs("div",{className:"reviwText",children:[u.jsxs(uM,{children:[u.jsx(dM,{children:e.author}),u.jsx(pM,{children:e.created_at.split("T")[0]})]}),u.jsx(mM,{children:[...Array(5)].map((n,r)=>{var s;return u.jsx(gM,{$filled:r<(((s=e.author_details)==null?void 0:s.rating)||0),children:u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/StarActive.png",alt:"별"})},r)})})]}),u.jsxs(fM,{children:[e.content,u.jsxs(hM,{children:[u.jsx(w$,{size:15}),u.jsx(Zc,{size:20})]})]})]}),u.jsx(xM,{children:u.jsx(Zc,{size:30})})]},e.id)):u.jsx("p",{style:{color:"white",textAlign:"center",padding:"20px"},children:"아직 작성된 리뷰가 없습니다."})})})},yM=()=>{const[t,e]=$.useState("시청내역"),{nickname:n,srcNow:r}=$e(d=>d.profileR),s=tt(),a=()=>{s("/profileselect")},l=()=>{s("/membership")};return u.jsx("div",{children:u.jsxs(Kr,{children:[u.jsx(Jz,{}),u.jsxs(wM,{children:[u.jsxs(bM,{children:[u.jsx(_M,{src:r}),u.jsxs(SM,{children:[u.jsxs(kM,{children:[u.jsx("strong",{children:n}),u.jsx("p",{children:"님"})," ",u.jsx(lt,{to:"/profileforedit",children:"✏️"})]}),u.jsx("button",{onClick:a,children:"프로필 전환"})]})]}),u.jsxs(jM,{children:[u.jsx(CM,{children:u.jsxs("div",{className:"PassTitle",children:[u.jsx("strong",{children:"ViBo"}),u.jsx("span",{children:" 패스"}),u.jsx("p",{children:"사용 중인 패스가 없습니다."})]})}),u.jsx(EM,{onClick:l,children:u.jsx("div",{className:"PassTitle2",children:u.jsx("strong",{children:"패스 구매하기 ▶ "})})})]}),u.jsx(TM,{children:u.jsxs("h3",{children:["패스를 구매하시면 ",u.jsx("strong",{children:"ViBo Original"})," 그리고 ",u.jsx("br",{}),u.jsx("strong",{children:"실시간 인기콘텐츠와 다양한 영화를"})," 시청하실 수 있어요!"]})}),u.jsx(IM,{children:["시청내역","구매내역","찜","나의 리뷰"].map(d=>u.jsx(RM,{$active:t===d,onClick:()=>e(d),children:d},d))}),u.jsxs($M,{children:[t==="시청내역"&&u.jsx(tM,{}),t==="구매내역"&&u.jsx(ly,{}),t==="찜"&&u.jsx(ly,{}),t==="나의 리뷰"&&u.jsx(vM,{})]})]})]})})},wM=k.div`
    padding: 50px;
`,bM=k.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`,_M=k.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-image: url(${t=>t.src||"/images/default-profile.jpg"});
    border: 2px solid #68f5eb;
`,SM=k.div`
    flex: 1;
    display: flex;
    gap: 40px;
    align-items: center;
    button {
        color: var(--white);
        padding: 10px;
        background: var(--gray-800);
        border-radius: 5px;
        width: 6.25rem;
        height: 2.1875rem;
    }
`,kM=k.h2`
    display: flex;
    font-weight: bold;
    align-items: center;
    gap: 10px;
    strong {
        font-size: 48px;
    }
    p {
        font-size: 32px;
    }
`,jM=k.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px;
`,CM=k.div`
    background: var(--gray-800);
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    gap: 2.875rem;
    /* width: 48.25rem; */
    height: 6.875rem;
    .PassTitle {
        width: 26.625rem;
        height: 6.25rem;
        padding: 15px;
        strong {
            font-size: var(--title-medium-size);
            font-weight: var(--title-xlarge-weightt);
            color: var(--primary-base);
        }
        span {
            font-size: var(--title-medium-size);
        }
        p {
            font-size: var(--detail-large-weight);
            font-weight: 300;
        }
    }
    .PassTitle2 {
        font-size: var(--title-medium-size);
        width: 18.75rem;
        text-align: center;
        padding: 25px;
    }
`,EM=k.div`
    background: var(--gray-800);
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    gap: 2.875rem;
    /* width: 48.25rem; */
    height: 6.875rem;
    cursor: pointer;
    .PassTitle2 {
        font-size: var(--title-medium-size);
        width: 18.75rem;
        text-align: center;
        padding: 25px;
    }
`,TM=k.div`
    font-size: var(--title-medium-size);
    background: var(--gray-800);
    padding: 25px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    width: 51.5625rem;
    height: 6.875rem;
    text-align: left;
    strong {
        color: var(--primary-base);
    }
`,IM=k.div`
    display: flex;
    gap: 60px;
    gap: 60px;
    margin-top: 90px;
    border-bottom: 2px solid #444;
    padding-bottom: 10px;
`,RM=k.div`
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding-bottom: 5px;
    color: ${t=>t.$active?"#68F5EB":"white"};
    position: relative;
    margin-bottom: 20px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${t=>t.active?"100%":"0"};
        height: 3px;
        background-color: #68f5eb;
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`,$M=k.div`
    /* padding: 20px;
  background: #111;
  border-radius: 10px;
  margin-top: 20px; */
`,PM="https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public",bc=({item:t={src:"",name:""},handleIcon:e,handleModalOpen:n})=>{const{src:r,name:s}=t;return u.jsx(u.Fragment,{children:u.jsx("button",{onClick:a=>{e(t),n(a)},children:u.jsx(zs,{$width:"200px",$height:"200px",src:r||`${PM}/프아V.png`,alt:s})})})},cy=({icons:t,handleIcon:e,handleModalOpen:n})=>u.jsx("div",{style:{height:"200px"},children:u.jsx(wn,{slidesPerView:5,spaceBetween:30,navigation:!0,modules:[lw],className:"mySwiper",children:t==null?void 0:t.map(r=>u.jsx(It,{style:{width:"200px",height:"200px"},children:u.jsx(bc,{item:r,handleIcon:e,handleModalOpen:n})},r.id))})}),zM=({handleModalOpen:t})=>u.jsxs(Gz,{children:[u.jsx(bu,{children:"이미지 선택"}),u.jsx(Hz,{onClick:t,children:u.jsx(eP,{size:"60px"})})]}),pt="https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public",Yl=[{id:"1",name:"profileIconV",src:`${pt}/profileIconV.png`},{id:"2",name:"profileIconI",src:`${pt}/profileIconI.png`},{id:"3",name:"profileIconB",src:`${pt}/profileIconB.png`},{id:"4",name:"profileIconO",src:`${pt}/profileIconO.png`},{id:"5",name:"sample1",src:`${pt}/sample1.png`},{id:"6",name:"sample2",src:`${pt}/sample2.png`},{id:"7",name:"sample3",src:`${pt}/sample3.png`},{id:"8",name:"sample4",src:`${pt}/sample4.png`},{id:"9",name:"sample5",src:`${pt}/sample5.png`},{id:"10",name:"sample6",src:`${pt}/sample6.png`},{id:"11",name:"sample7",src:`${pt}/sample7.png`},{id:"12",name:"sample8",src:`${pt}/sample8.png`},{id:"13",name:"sample9",src:`${pt}/sample9.png`},{id:"14",name:"sample10",src:`${pt}/sample10.png`},{id:"15",name:"sample11",src:`${pt}/sample11.png`},{id:"16",name:"sample12",src:`${pt}/sample12.png`},{id:"17",name:"sample13",src:`${pt}/sample13.png`}];var uy,dy;const MM={srcNow:((uy=JSON.parse(localStorage.getItem("currentUser")))==null?void 0:uy.profileImg)||`${pt}/profileIconV.png`,idNow:"",nameNow:"",nickname:((dy=JSON.parse(localStorage.getItem("currentUser")))==null?void 0:dy.nickname)||""},Ab=Jt({name:"profileR",initialState:MM,reducers:{setIconNow:(t,e)=>{const n=e.payload;t.srcNow=n.src,t.idNow=n.id,t.nameNow=n.name,localStorage.setItem("currentUser",JSON.stringify({...JSON.parse(localStorage.getItem("currentUser")),profileImg:n.src}))},add:(t,e)=>{t.nickname=e.payload,localStorage.setItem("currentUser",JSON.stringify({...JSON.parse(localStorage.getItem("currentUser")),nickname:e.payload}))}}}),Db=Ab.actions,NM=Ab.reducer,OM=({handleModalOpen:t})=>{const e=$t(),n=l=>{const d=Yl.find(p=>l.name===p.name);e(Db.setIconNow(d))},r=Yl.filter(l=>parseInt(l.id)>4&parseInt(l.id)<11),s=Yl.filter(l=>parseInt(l.id)<5),a=Yl.filter(l=>parseInt(l.id)>10);return u.jsxs(u.Fragment,{children:[u.jsx(Uz,{}),u.jsxs(Vz,{children:[u.jsx(zM,{handleModalOpen:t}),u.jsxs(et,{$flexDirection:"column",$gap:"30px",children:[u.jsxs(et,{$flexDirection:"column",children:[u.jsx(Tf,{children:"코믹 이미지"}),u.jsx(et,{$gap:"10px",children:s.map(l=>u.jsx(bc,{item:l,handleIcon:n,handleModalOpen:t},l.id))})]}),u.jsxs(et,{$flexDirection:"column",children:[u.jsx(Tf,{children:"기본 이미지"}),a.length>5?u.jsx(cy,{icons:a,handleIcon:n,handleModalOpen:t}):u.jsx(et,{$gap:"20px",children:a.map(l=>u.jsx(bc,{item:l,handleIcon:n,handleModalOpen:t},l.id))})]}),u.jsxs(et,{$flexDirection:"column",children:[u.jsx(Tf,{children:"모던 이미지"}),r.length>5?u.jsx(cy,{icons:r,handleIcon:n,handleModalOpen:t}):u.jsx(et,{$gap:"20px",children:r.map(l=>u.jsx(bc,{item:l,handleIcon:n,handleModalOpen:t},l.id))})]})]})]})]})},LM=()=>{const[t,e]=$.useState(!1),{nickname:n,srcNow:r}=$e(y=>y.profileR),[s,a]=$.useState(n),l=$t(),d=tt(),p=y=>{y.preventDefault(),e(!t)},h=y=>{if(y.preventDefault(),!s)return;l(Db.add(s));const w=localStorage.getItem("profileEditBackUrl");d(w==="/profilesforedit"?"/profilesforedit":"/mypage"),localStorage.removeItem("profileEditBackUrl")},m=y=>{a(y.target.value)},x=()=>{d(-1)};return u.jsx(u.Fragment,{children:u.jsxs(um,{children:[t&&u.jsx(OM,{handleModalOpen:p}),u.jsx(dm,{onSubmit:h,children:u.jsxs(et,{$flexDirection:"column",$alignItems:"center",$gap:"60px",$padding:"90px",children:[u.jsx(et,{$flexDirection:"column",$alignItems:"center",$gap:"10px",children:u.jsx(bu,{children:"프로필 편집"})}),u.jsxs(et,{$gap:"40px",$flexDirection:"column",$alignItems:"center",children:[u.jsxs(pa,{children:[u.jsx(zs,{$width:"200px",$height:"200px",src:r,alt:"샘플프아",$filter:!0}),u.jsx(yh,{children:u.jsx("button",{onClick:p,children:u.jsx(vh,{size:"40px",color:"white"})})})]}),u.jsx(Wz,{type:"text",placeholder:"본인 닉네임",name:"nickname",value:s,onChange:m})]}),u.jsxs(et,{$gap:"15px",children:[u.jsx(Ob,{type:"submit",$padding:"1.675rem",$border:"1px solid var(--gray-500)",$borderRadius:"5px",$color:"var(--black)",$width:"15.5rem",$backgroundColor:"var(--gray-300)",children:"확인"}),u.jsx(Nb,{type:"button",onClick:x,$padding:"1.675rem",$border:"1px solid var(--gray-500)",$borderRadius:"5px",$color:"var(--gray-300)",$width:"15.5rem",children:"취소"})]})]})})]})})},AM=()=>{const t=tt(),e=()=>{localStorage.setItem("profileEditBackUrl","/profilesforedit"),t("/profileforedit")},n=()=>{t("/profileselect")};return u.jsx(u.Fragment,{children:u.jsx(um,{children:u.jsx(dm,{children:u.jsxs(et,{$flexDirection:"column",$alignItems:"center",$gap:"60px",$padding:"90px",children:[u.jsxs(et,{$flexDirection:"column",$alignItems:"center",$gap:"10px",children:[u.jsx(bu,{children:"프로필 편집"}),u.jsx(ys,{$color:"var(--gray-500)",children:"편집할 프로필을 선택해주세요"})]}),u.jsxs(et,{$gap:"15px",$alignItems:"center",children:[u.jsxs(et,{$gap:"20px",$flexDirection:"column",$alignItems:"center",children:[u.jsxs(pa,{children:[u.jsx(zs,{$width:"200px",$height:"200px",src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconI.png",alt:"샘플프아",$filter:!0}),u.jsx(yh,{children:u.jsx("button",{onClick:e,children:u.jsx(vh,{size:"40px",color:"white"})})})]}),u.jsx(ys,{$fontSize:"17px",$color:"var(--gray-500)",children:"닉네임1"})]}),u.jsxs(et,{$gap:"20px",$flexDirection:"column",$alignItems:"center",children:[u.jsxs(pa,{children:[u.jsx(zs,{$width:"200px",$height:"200px",src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconV.png",alt:"샘플프아",$filter:!0}),u.jsx(yh,{children:u.jsx("button",{onClick:e,children:u.jsx(vh,{size:"40px",color:"white"})})})]}),u.jsx(ys,{$fontSize:"17px",$color:"var(--gray-500)",children:"닉네임2"})]})]}),u.jsx(Ob,{onClick:n,$padding:"1.675rem",$border:"1px solid var(--gray-500)",$borderRadius:"5px",$color:"var(--black)",$width:"15.5rem",$backgroundColor:"var(--gray-300)",children:"완료"})]})})})})},DM=()=>{const t=$t(),e=$e(S=>S.contPlayerR.isPlaying),n=$e(S=>S.contPlayerR.isMuted),r=$e(S=>S.contPlayerR.isFullscreen),s=$e(S=>S.contPlayerR.progress),a=$e(S=>S.contPlayerR.isError),l=$e(S=>S.contPlayerR.videoId),d=$.useRef(null),p=$.useRef(null),[h,m]=$.useState(!1);$.useEffect(()=>{t(Fn.setPlaying(!0))},[t]),$.useEffect(()=>{const S=()=>{p.current&&p.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")},j=p.current;if(j)return j.addEventListener("load",S),()=>j.removeEventListener("load",S)},[]),$.useEffect(()=>{p.current&&(e?p.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):p.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"))},[e]),$.useEffect(()=>{let S;e&&(S=setInterval(()=>{var I,R;(I=p.current)==null||I.contentWindow.postMessage('{"event":"command","func":"getCurrentTime","args":""}',"*"),(R=p.current)==null||R.contentWindow.postMessage('{"event":"command","func":"getDuration","args":""}',"*")},1e3));const j=I=>{try{const R=JSON.parse(I.data);if(R.info&&R.info.currentTime&&R.info.duration){const z=R.info.currentTime/R.info.duration*100;t(Fn.setProgress(z))}}catch{}};return window.addEventListener("message",j),()=>{S&&clearInterval(S),window.removeEventListener("message",j)}},[e,t]);const x=()=>{if(p.current)try{e?p.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"):p.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),t(Fn.togglePlay())}catch(S){console.error("Error toggling play state:",S)}},y=()=>{if(p.current)try{n?p.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}',"*"):p.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}',"*"),t(Fn.toggleMute())}catch(S){console.error("Error toggling mute state:",S)}},w=()=>{var S;document.fullscreenElement?(document.exitFullscreen(),t(Fn.setFullscreen(!1))):((S=d.current)==null||S.requestFullscreen(),t(Fn.setFullscreen(!0)))},b=S=>{if(h)return;const I=S.currentTarget.getBoundingClientRect(),R=(S.clientX-I.left)/I.width,z=Math.max(0,Math.min(100,R*100));t(Fn.setProgress(z)),p.current&&p.current.contentWindow.postMessage(JSON.stringify({event:"command",func:"seekTo",args:[z,!0]}),"*")},_=S=>{S.preventDefault(),m(!0),document.addEventListener("mousemove",C),document.addEventListener("mouseup",E)},C=$.useCallback(S=>{if(!h||!p.current)return;const I=document.querySelector(".progress-bar-container").getBoundingClientRect();let R=(S.clientX-I.left)/I.width;R=Math.max(0,Math.min(1,R));const z=R*100;t(Fn.setProgress(z)),p.current.contentWindow.postMessage(JSON.stringify({event:"command",func:"seekTo",args:[z,!0]}),"*")},[h,t]),E=$.useCallback(()=>{m(!1),document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",E)},[C]);return u.jsx(L$,{ref:d,children:u.jsxs(Sb,{children:[a?u.jsx(A$,{children:"동영상을 불러올 수 없습니다."}):u.jsx(D$,{children:u.jsx(F$,{ref:p,src:`https://www.youtube.com/embed/${l}?enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&origin=${window.location.origin}&playerapiid=ytplayer&autoplay=1&mute=0&loop=0&playlist=${l}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{pointerEvents:"none"}})}),u.jsxs(B$,{children:[u.jsx(V$,{className:"progress-bar-container",onClick:b,children:u.jsx(W$,{$progress:s,children:u.jsx(U$,{onMouseDown:_})})}),u.jsxs(G$,{children:[u.jsxs(H$,{children:[u.jsx(df,{onClick:x,children:e?u.jsx(y$,{}):u.jsx(m$,{})}),u.jsx(df,{onClick:y,children:n?u.jsx(_$,{}):u.jsx(b$,{})})]}),u.jsx(df,{onClick:w,children:r?u.jsx(K$,{}):u.jsx(Z$,{})})]})]})]})})};function FM(){const{pathname:t}=xr();return $.useEffect(()=>{window.scrollTo(0,0)},[t]),null}const BM=()=>{const[t,e]=$.useState(""),[n,r]=$.useState(""),[s,a]=$.useState(""),[l,d]=$.useState(""),[p,h]=$.useState(""),[m,x]=$.useState(""),[y,w]=$.useState(""),[b,_]=$.useState(!1),[C,E]=$.useState(!1),S=$t(),j=tt(),I=$e(B=>{var Y;return((Y=B.memberR)==null?void 0:Y.users)||[]}),R=B=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}$/.test(B),z=B=>{const Y=B.target.value;r(Y),R(Y)?x(""):x("🔴 영문, 숫자, 대문자, 특수문자 포함 6~12자리")},N=B=>{const Y=B.target.value;a(Y),w(n!==Y?"🔴 비밀번호가 일치하지 않습니다":"")},L=()=>{I.some(B=>B.id===t)?(alert("이미 사용 중인 아이디입니다."),_(!1)):(alert("사용 가능한 아이디입니다."),_(!0))},O=B=>{if(B.preventDefault(),!t||!l||!n||!s||!p){alert("모든 필드를 입력해주세요.");return}if(n!==s){alert("비밀번호가 일치하지 않습니다.");return}if(!b){alert("아이디 중복 확인을 해주세요.");return}if(I.some(Y=>Y.email===l)){alert("이미 가입된 이메일입니다.");return}S(vs.register({id:t,email:l,password:n,phone:p})).then(Y=>{var X;(X=Y.payload)!=null&&X.success&&(alert("회원가입이 완료되었습니다!"),j("/login"))})};return u.jsxs(_z,{children:[u.jsx("h2",{className:"title",children:"VIBO ID 회원가입"}),u.jsxs(zb,{className:"form",onSubmit:O,children:[u.jsxs("div",{className:"Register",children:[u.jsx(us,{children:u.jsxs(ny,{children:[u.jsx(vi,{type:"text",placeholder:"아이디",value:t,onChange:B=>e(B.target.value)}),u.jsx(ry,{type:"button",onClick:L,children:"중복확인"})]})}),u.jsxs(us,{children:[u.jsx(vi,{type:"password",placeholder:"비밀번호",value:n,onChange:z,$error:!!m}),m&&u.jsx(ty,{children:m})]}),u.jsxs(us,{children:[u.jsx(vi,{type:"password",placeholder:"비밀번호 확인",value:s,onChange:N,$error:!!y}),y&&u.jsx(ty,{children:y})]}),u.jsx(us,{children:u.jsx(vi,{type:"email",placeholder:"이메일",value:l,onChange:B=>d(B.target.value)})}),u.jsx(us,{children:u.jsxs(ny,{children:[u.jsx(vi,{type:"text",placeholder:"휴대폰 번호",value:p,onChange:B=>h(B.target.value)}),u.jsx(ry,{type:"button",onClick:()=>E(!0),children:"중복확인"})]})})]}),u.jsx(us,{children:u.jsx("textarea",{className:"textarea",placeholder:"약관 내용",readOnly:!0})}),u.jsx(Mb,{type:"submit",children:"회원가입"})]})]})},VM=()=>{const[t,e]=$.useState(""),[n,r]=$.useState(""),[s,a]=$.useState(!1),l=t.trim()===""||n.trim()==="",d=$t(),p=tt(),h=m=>{if(m.preventDefault(),l){alert("아이디와 비밀번호를 입력해주세요.");return}d(vs.login({userId:t,password:n,autoLogin:s})).then(x=>{var y,w;(y=x.payload)!=null&&y.success?p("/"):alert(((w=x.payload)==null?void 0:w.message)||"로그인 실패")})};return u.jsxs(gz,{children:[u.jsx("div",{className:"title",children:"VIBO 로그인"}),u.jsx(zb,{onSubmit:h,children:u.jsxs(xz,{children:[u.jsx(vz,{children:"로그인"}),u.jsx(vi,{type:"text",id:"userId",name:"userId",placeholder:"아이디",value:t,onChange:m=>e(m.target.value),required:!0}),u.jsx(vi,{type:"password",id:"password",name:"password",placeholder:"비밀번호",value:n,onChange:m=>r(m.target.value),required:!0}),u.jsxs(yz,{children:[u.jsx(wz,{type:"checkbox",id:"autoLogin",checked:s,onChange:()=>a(!s)}),u.jsx("label",{htmlFor:"autoLogin",children:"자동 로그인"})]}),u.jsx(Mb,{type:"submit",disabled:l,children:"로그인"}),u.jsxs(bz,{children:[u.jsx("a",{href:"/find-id",children:"아이디 찾기"}),u.jsx("span",{children:"|"}),u.jsx("a",{href:"/find-password",children:"비밀번호 찾기"}),u.jsx("span",{children:"|"}),u.jsx("a",{href:"/register",children:"회원가입"})]})]})})]})},WM=bj`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`,UM=k.div`
  position: relative;
  color: white;
  width: 100%;
  height: 500px;
  overflow: hidden;

  .banner-container {
    width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .dimmed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%);
      z-index: 0;
    }
  }

  .banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    max-width: 800px;
    z-index: 1;

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      font-size: 64px;
      font-weight: 900;
      white-space: nowrap;

      .default {
        color: #fff;
        font-weight: 700;
      }

      // .special {
      //   color: #07ffe6;
      // }
    }

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      font-size: 60px;
      font-weight: 700;

      .default {
        color: #fff;
      }

      .vibo {
        color: #07ffe6;
        font-weight: 900;
        font-size: 64px;
      }
    }
    p {
      display: flex;
      flex-direction: column;

      .description1 {
        font-size: 24px;
        font-weight: 700;
        margin-top: 12px;
        color: #d1d2d4;
      }
      .description2 {
        font-size: 18px;
        font-weight: 600;

        color: #d1d2d4;
      }
    }

    .start-button {
      margin-top: 40px;
      padding: 16px 108px;
      font-size: 18px;
      font-weight: 800;
      color: black;
      background-color: #07ffe6;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background-color: #05c6bb;
      }
    }
  }

  @media (max-width: 1024px) {
    .banner-content {
      h1 {
        font-size: 40px;
      }
      h2 {
        font-size: 30px;
      }
      .description {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    .banner-content {
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 24px;
      }
      .description {
        font-size: 14px;
      }
    }
  }
`,GM=k.div`
  position: relative;
  text-align: center;
  color: white;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .text-wrapper {
    max-width: 1200px;
    text-align: center;
    padding: 0 20px;
  }

  h2 {
    font-family: NanumSquare Neo;
    font-size: 60px;
    font-weight: 800;
    line-height: 100px;
    text-align: center;
    letter-spacing: 0.01em;
  }

  p {
    font-family: NanumSquare Neo;
    font-weight: 800;
    font-size: 30px;
    color: var(--gray-500);
  }
`,HM=k.div`
  position: relative;
  text-align: left;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0;

  .content-container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    max-width: 1440px;
    width: 100%;
  }

  .text-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    gap: 140px;
  }

  h1 {
    font-family: NanumSquare Neo;
    font-size: 80px;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 20px;
    text-transform: uppercase;
    background: linear-gradient(to top, #07ffe6 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  .gradient-text {
  }

  .big-card {
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    border-radius: 10px;
  }

  .image-side {
    display: flex;
    flex-direction: row;
    gap: 40px;
    // width: 50%;
  }

  .small-card {
    width: 100%;
    height: 100%;
    min-width: 200px;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    .content-container {
      flex-direction: column;
      align-items: center;
    }

    .text-side {
      align-items: center;
      width: 100%;
    }

    .image-side {
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }

    .big-card,
    .small-card {
      max-width: 600px;
    }
  }
`,YM=k.div`
  width: 100%;
  // padding: 0 0;

  overflow: hidden;
  position: absolute;
  top: 300px;

  .slider-container {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .slide-track {
    display: flex;

    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.02s linear;
  }

  .slide {
    width: 380px;
    height: 225px;
    margin: 0 20px;
    // background: #111;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide:last-child {
    margin-right: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`,JM=k.div`
  position: relative;
  text-align: center;
  color: white;
  height: 920px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .title {
    position: absolute;
    top: 70px;
    h2 {
      font-family: NanumSquare Neo;
      font-size: 60px;
      font-weight: 800;
      line-height: 100px;
      text-align: center;
      letter-spacing: 0.01em;
    }
    p {
      font-family: NanumSquare Neo;
      font-weight: 700;
      font-size: 30px;
      color: var(--gray-500);
    }
  }

  button {
    position: absolute;
    bottom: 0;
    background-color: var(--primary-base);
    width: 239px;
    height: 51px;
    font-weight: 800;
    font-size: 24px;
    border-radius: 50px;
  }
`,qM=k.div`
  width: 100%;
  max-width: 2800px;
  // height: 107px;
  margin: 100px auto;
  padding: 50px calc((100vw - 1360px) / 2);
  background-color: #191919;
  color: white;
  border-radius: 10px;
  text-align: center;
  background: #000;

  .faq-title {
    font-size: 60px;
    font-weight: 800;
    color: white;
    margin-bottom: 64px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: flex-start;
  }
`,QM=k.div`
  background-color: ${({active:t})=>t?"#2a2a2a":"#3e3e3f"};
  color: ${({active:t})=>t?"#07ffe6":"#D1D2D4"};
  padding: 30px 40px;
  margin-bottom: ${({active:t})=>t?"10px":"35px"};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 34px;
  transition: background 0.3s ease-in-out, margin-bottom 0.3s ease-in-out;
  width: 100%;
  max-width: 1500px;
  height: 95px;

  &:hover {
    color: #07ffe6;
  }
`,ZM=k.div`
  flex-grow: 1;
  text-align: left;
  font-weight: 700;
`,KM=k.span`
  transition: transform 0.3s ease;
  transform: ${({active:t})=>t?"rotate(180deg)":"rotate(0)"};
`,XM=k.div`
  font-size: 20px;
  text-align: left;
  padding: 10px 30px;
  color: #d1d2d4;
`,e6=k.div`
  max-width: 1470px;
  max-height: ${({active:t})=>t?"100px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  background-color: #2a2a2a;
  border-radius: 6px;
  margin: ${({active:t})=>t?"0 0 30px 30px;":"0"};

  padding: ${({active:t})=>t?"15px":"0"};
  opacity: ${({active:t})=>t?"1":"0"};
`,t6=k.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #191919;
  color: white;
  text-align: center;
  gap: 100px;
  margin: 100px auto;

  .logo {
    width: 160px;
    height: 160px;
    object-fit: contain;
    // margin-top: 100px;
  }

  h2 {
    font-size: 54px;
    font-weight: 800;
  }

  .login-btn {
    // margin-top: 40px;
    padding: 17px 85px;
    background-color: #07ffe6;
    color: black;
    font-size: 24px;
    font-weight: 800;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background-color: #06dbbf;
    }

    &:active {
      background-color: #04998a;
    }
  }
`,n6=k.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

  .about-swiper {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease-in-out;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 190px;
  }

  .swiper-pagination-bullet {
    background: #ffffff;
    opacity: 0.5;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #07ffe6;
    opacity: 1;
    width: 24px;
    border-radius: 10px;
  }
  .swiper-slide {
    opacity: 1; 
    transition: opacity 1s ease-in-out; 
`,pm=k.div`
  width: 100%;
  height: 432px;
  display: flex;
  flex-direction: column;
  // position: absolute;
  bottom: -100px;
  left: 0;
  gap: 30px;
  align-items: center;
  white-space: nowrap;
  justify-content: flex-end;
  position: relative;
  color: white;
  text-align: center;
  padding: 20px;

  .TitleBackground {
    position: absolute;
    bottom: -160px;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 600px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 10%);

    z-index: 1;
    
`,fm=k.h2`
  font-size: 32px;
  font-weight: 800;
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 220px;

  .LastTitle {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);

    // .bold {
    //   position: absolute;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   top: -250px;
    //   font-family: metrobarat;
    //   font-size: 100px;
    //   letter-spacing: 3px;
    //   font-weight: 700;
    // }
    .light {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 24px;
      font-weight: 700;
    }
    .BoldLight {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 40px;
    }
  }
`,Fb=k.p`
  font-size: 20px;
  font-weight: 700;
  color: #a8a9ad;
  margin-bottom: 100px;
  position: absolute;
  z-index: 100;

  .highlight {
    color: #06dbbf;
    font-weight: 700;
  }
`,r6=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .main-btn,
  .sub-btn {
    width: 346px;
    height: 52px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    @media (max-width: 600px) {
      width: 346px;
      height: 52px;
      font-size: 16px;
    }

    @media (min-width: 601px) and (max-width: 1024px) {
      width: 560px;
      height: 52px;
      font-size: 16px;
    }
  }

  .main-btn {
    background: #06dbbf;
    color: white;
    border: none;
    bottom: 100px;
  }

  .sub-btn {
    background: none;
    color: white;
    border: 1px solid white;
    bottom: 30px;
  }
`,i6=k.div`
  display: grid;
  // grid-template-rows: repeat(0, auto);
  grid-template-columns: repeat(6, auto);
  gap: 14px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 0;
  overflow: visible;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  // background-color: #1b1b1b;
  .slide1card {
    min-width: 100px;
    min-height: 144px;
    width: auto;
    height: auto;
    max-height: 160px;
    object-fit: contain;
    overflow: visible;
  }
`,s6=k.div`
  display: flex;
  position: absolute;
  top: -200px;
  left: 0;
  width: 100%;
  gap: 10px;
  white-space: nowrap;
  overflow: visible;

  .live-slide {
    width: 700px;
    height: 830px;
    object-fit: contain;
  }
`,o6=k.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,a6=k.div`
  position: absolute;
  font-size: 100px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'metrobarat', sans-serif;
  opacity: 0;
`,l6=k.div`
  position: absolute;
  font-size: 100px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'metrobarat', sans-serif;
  background: linear-gradient(90deg, #07ffe6, #ffffff, #07ffe6);
  background-size: 400% 100%;
  display: inline-block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${WM} 3s linear infinite;
`,c6=()=>{const t=tt(),e=()=>{t("/login")};return u.jsx(UM,{children:u.jsxs("div",{className:"banner-container",children:[u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_banner.png",alt:"aboutbanner"}),u.jsx("div",{className:"dimmed"}),u.jsxs("div",{className:"banner-content",children:[u.jsxs("h1",{children:[u.jsx("span",{className:"default",children:"VIBO"}),u.jsx("span",{className:"special",children:"Special 콘텐츠"}),u.jsx("span",{className:"default",children:"는"})]}),u.jsxs("h2",{children:[u.jsx("span",{className:"default",children:"오직"}),u.jsx("span",{className:"vibo",children:"VIBO+"}),u.jsx("span",{className:"default",children:"에서만"})]}),u.jsxs("p",{children:[u.jsx("span",{className:"description1",children:"매달 새롭게 추가되는 콘텐츠를"}),u.jsx("span",{className:"description2",children:"3가지 멤버십으로 시작해 보세요."})]}),u.jsx("button",{className:"start-button",onClick:e,children:"VIBO 로그인"})]})]})})},u6=()=>u.jsxs(u.Fragment,{children:[u.jsx(GM,{children:u.jsxs("div",{className:"text-wrapper",children:[u.jsx("h2",{children:"시리즈, 영화, 다양한 TV 콘텐츠를"}),u.jsx("p",{children:"언제 어디서나 스트리밍 해보세요."})]})}),u.jsx(HM,{children:u.jsxs("div",{className:"content-container",children:[u.jsxs("div",{className:"text-side",children:[u.jsxs("h1",{children:[u.jsx("span",{className:"gradient-text",children:"VIBO"}),u.jsx("br",{}),u.jsx("span",{className:"gradient-text",children:"Original"}),u.jsx("br",{}),u.jsx("span",{className:"gradient-text",children:"Contents"})]}),u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_original01.png",alt:"about-original01",className:"big-card"})]}),u.jsxs("div",{className:"image-side",children:[u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_original02.png",alt:"about-original02",className:"small-card"}),u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_original03.png",alt:"about-original03",className:"small-card"})]})]})})]}),Jl=["https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all01.png","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all02.png","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all03.png","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all04.png","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all05.png","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all06.png","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all07.png","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all08.png","https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/about_all09.png"],d6=()=>{const t=$.useRef(null),e=$.useRef(null);return $.useEffect(()=>{t.current&&e.current&&(Pe.set(t.current,{x:0}),Pe.set(e.current,{x:"-50%"}),Pe.to(t.current,{x:"-50%",duration:15,repeat:-1,ease:"linear"}),Pe.to(e.current,{x:"0%",duration:15,repeat:-1,ease:"linear"}))},[]),u.jsxs(YM,{children:[u.jsx("div",{className:"slider-container",children:u.jsx("div",{className:"slide-track",ref:t,children:[...Jl,...Jl].map((n,r)=>u.jsx("div",{className:"slide",children:u.jsx("img",{src:n,alt:`Slide ${r+1}`})},`top-${r}`))})}),u.jsx("div",{className:"slider-container",style:{marginTop:"20px"},children:u.jsx("div",{className:"slide-track",ref:e,children:[...Jl,...Jl].map((n,r)=>u.jsx("div",{className:"slide",children:u.jsx("img",{src:n,alt:`Slide ${r+1}`})},`bottom-${r}`))})})]})},p6=()=>{const t=tt(),e=()=>{t("/register")};return u.jsx(u.Fragment,{children:u.jsxs(JM,{children:[u.jsxs("div",{className:"title",children:[u.jsx("h2",{children:"요즘 뜨는 모든 콘텐츠"}),u.jsxs("p",{children:["5,500원으로 시작하세요.",u.jsx("br",{}),"멤버십은 언제든지 해지 가능합니다."]})]}),u.jsx(d6,{}),u.jsx("button",{className:"btn",onClick:e,children:"지금 시작하기"})]})})},f6=()=>{const t=tt(),e=()=>{t("/login")};return u.jsx(u.Fragment,{children:u.jsxs(t6,{children:[u.jsx("img",{src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/logo 1.png",alt:"VIBO 로그인",className:"logo"}),u.jsx("h2",{children:"지금 함께 해 보세요."}),u.jsx("button",{className:"login-btn",onClick:e,children:"로그인"})]})})},h6=[{question:"VIBO만의 콘텐츠는 무엇인가요?",answer:"VIBO에서만 제공하는 오리지널 콘텐츠를 확인하세요."},{question:"VIBO 란 무엇인가요?",answer:"VIBO는 새로운 OTT 플랫폼으로, 다양한 콘텐츠를 제공합니다."},{question:"VIBO 서비스 이용 요금은 얼마인가요?",answer:"멤버십 플랜에 따라 요금이 다를 수 있습니다."},{question:"멤버십을 가족과 공유할 수 있나요?",answer:"네, VIBO 멤버십을 가족과 공유할 수 있습니다."},{question:"콘텐츠 시청시 광고가 있나요?",answer:"VIBO+ 멤버십은 광고 없이 이용할 수 있습니다."}],m6=()=>{const[t,e]=$.useState(null),n=r=>{e(t===r?null:r)};return u.jsxs(u.Fragment,{children:[u.jsxs(qM,{children:[u.jsx("h2",{className:"faq-title",children:"자주 묻는 질문"}),h6.map((r,s)=>u.jsxs("div",{children:[u.jsxs(QM,{onClick:()=>n(s),active:t===s,children:[u.jsx(ZM,{active:t===s,children:r.question}),u.jsx(KM,{active:t===s,children:"▼"})]}),u.jsx(e6,{active:t===s,children:u.jsx(XM,{children:r.answer})})]},s))]}),u.jsx(f6,{})]})},g6=()=>{const t=tt(),e=()=>{t("/login")},n=()=>{t("/register")};return u.jsxs(r6,{children:[u.jsx("button",{className:"main-btn",onClick:n,children:"VIBO 시작하기"}),u.jsx("button",{className:"sub-btn",onClick:e,children:"다른 계정으로 로그인 하기"})]})},x6=()=>u.jsx(u.Fragment,{children:u.jsxs(pm,{children:[u.jsx("div",{className:"TitleBackground"}),u.jsxs(fm,{children:["요즘 뜨는 모든 콘텐츠",u.jsx("br",{}),"무제한 스트리밍"]}),u.jsxs(Fb,{children:[u.jsx("span",{className:"highlight",children:"바이보+"}),"부터",u.jsx("br",{}),"드라마, 예능, 영화, 해외 시리즈까지"]})]})}),v6=({activeIndex:t})=>{const e=$.useRef(null);return $.useEffect(()=>{e.current&&t===1&&Pe.to(e.current,{x:"-200%",duration:5,repeat:-1,ease:"linear"})},[t]),u.jsxs(s6,{ref:e,children:[u.jsx("img",{className:"live-slide",src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about\\aboutM_09.png",alt:"Live Slide 9"}),u.jsx("img",{className:"live-slide",src:"https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about\\aboutM_10.png",alt:"Live Slide 10"})]})},y6=()=>u.jsxs(pm,{children:[u.jsx("div",{className:"TitleBackground"}),u.jsxs(fm,{children:["실시간으로 즐기는",u.jsx("br",{}),"라이브 & 콘텐츠 랭킹"]}),u.jsxs(Fb,{children:[u.jsx("span",{className:"highlight",children:"VIBO"}),"에서 지금 가장 인기 있는",u.jsx("br",{}),"콘텐츠를 한눈에 확인하세요."]})]}),w6=()=>u.jsxs(pm,{children:[u.jsx("div",{className:"TitleBackground"}),u.jsx(fm,{children:u.jsxs("div",{className:"LastTitle",children:[u.jsx("span",{className:"light",children:"VIBO 시작하기를 눌러"}),u.jsx("span",{className:"BoldLight",children:"지금 함께 하세요"})]})})]}),b6=()=>{const t=$.useRef([]),e=$.useRef(null);return $.useEffect(()=>{t.current.forEach((n,r)=>{if(n){const a=r%2===0?"-50px":"50px";Pe.to(n,{y:a,duration:3,repeat:-1,yoyo:!0,ease:"power1.inOut"})}}),e.current&&Pe.to(e.current,{x:"-100%",duration:5,repeat:-1,ease:"linear"})},[]),u.jsx(u.Fragment,{children:u.jsx(i6,{children:[...Array(12)].map((n,r)=>u.jsx("img",{className:"slide1card",src:`https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/about/aboutM_0${r%8+1}.png`,alt:`Slide ${r+1}`,ref:s=>t.current[r]=s},r))})})},_6=({activeIndex:t})=>{const e=$.useRef([]),n=$.useRef(null);return $.useEffect(()=>{t===2&&(Pe.set(n.current,{opacity:0,y:-50}),Pe.fromTo(e.current,{opacity:0,scale:0,x:()=>Math.random()*800-400,y:()=>Math.random()*500-250},{opacity:1,scale:1,x:0,y:-50,duration:1.5,ease:"power3.out",stagger:.1,onComplete:()=>{Pe.to(e.current,{opacity:0,duration:.5,delay:0}),Pe.to(n.current,{opacity:1,duration:.7,onComplete:()=>{Pe.to(n.current,{backgroundPosition:"200% 50%",duration:3,repeat:-1,ease:"linear"})}})}}))},[t]),u.jsxs(o6,{children:[Array.from({length:10}).map((r,s)=>u.jsx(a6,{ref:a=>e.current[s]=a,children:"VIBO"},s)),u.jsx(l6,{ref:n,children:"VIBO"})]})},S6=({activeIndex:t,setActiveIndex:e})=>{const n=$.useRef(null),r=$.useRef(null);return $.useEffect(()=>{if(n.current){const s=n.current.swiper;s.on("slideChangeTransitionStart",()=>{Pe.to(r.current,{opacity:0,duration:.2})}),s.on("slideChangeTransitionEnd",()=>{Pe.to(r.current,{opacity:1,duration:.2})})}},[]),u.jsx(n6,{ref:r,children:u.jsxs(wn,{ref:n,pagination:{clickable:!0},modules:[cw],className:"about-swiper",onSlideChange:s=>e(s.activeIndex),children:[u.jsxs(It,{children:[u.jsx(x6,{}),u.jsx(b6,{})]}),u.jsxs(It,{children:[u.jsx(y6,{}),t===1&&u.jsx(v6,{activeIndex:t})]}),u.jsxs(It,{children:[u.jsx(w6,{}),t===2&&u.jsx(_6,{activeIndex:t})]})]})})},k6=k.div`
  // margin: 100px 0;
  // padding: 20px;
`,j6=k.div`
  margin: 100px auto;
  //   @media (max-width: 599px) {
  //     max-width: calc(390px - var(--spacing-8));
  //   }
  //   @media (min-width: 600px) {
  //     max-width: calc(var(--breakpoint-tablet) - var(--spacing-8));
  //   }
  //   // @media (min-width: 1025px) {
  //   //   max-width: calc(var(--breakpoint-desktop) - 100px);
  //   // }
  //
`,C6=k.div`
  // margin: 0 auto;
  // @media (max-width: 599px) {
  //   max-width: calc(390px - var(--spacing-8));
  // }
  // @media (min-width: 600px) {
  //   max-width: calc(var(--breakpoint-tablet) - var(--spacing-8));
  // }

  // position: relative;
  // width: 100%;
  // height: 100vh;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`,E6=()=>{const[t,e]=$.useState(window.innerWidth>1024),[n,r]=$.useState(0),s=$.useRef(null);return $.useEffect(()=>{const a=()=>e(window.innerWidth>1024);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),$.useEffect(()=>{!t&&s.current&&Pe.fromTo(s.current,{opacity:0},{opacity:1.5,duration:1.5,ease:"power2.out"})},[t]),u.jsx(u.Fragment,{children:t?u.jsx(j6,{children:u.jsxs(k6,{children:[u.jsxs("section",{children:[u.jsx(c6,{}),u.jsx(u6,{}),u.jsx(p6,{})]}),u.jsx(m6,{})]})}):u.jsxs(C6,{className:"about-m-container",ref:s,children:[u.jsx(S6,{activeIndex:n,setActiveIndex:r}),u.jsx(g6,{})]})})},T6=()=>u.jsx(u.Fragment,{children:u.jsxs(pk,{children:[u.jsx(FM,{}),u.jsx(_j,{}),u.jsxs(V2,{children:[u.jsx(De,{path:"/player",children:u.jsx(De,{index:!0,element:u.jsx(DM,{})})}),u.jsxs(De,{path:"/",element:u.jsx(DP,{}),children:[u.jsx(De,{index:!0,element:u.jsx(uR,{})}),u.jsx(De,{path:"/membership",element:u.jsx(Lz,{})}),u.jsx(De,{path:"/moviehome",element:u.jsx(sz,{})}),u.jsx(De,{path:"/serieshome",element:u.jsx(oz,{})}),u.jsx(De,{path:"/livehome",element:u.jsx(Bz,{})}),u.jsx(De,{path:"/about",element:u.jsx(E6,{})}),u.jsx(De,{path:"/profileedit",element:u.jsx(Yz,{})}),u.jsx(De,{path:"/profileselect",element:u.jsx(Lb,{})}),u.jsx(De,{path:"/profileforedit",element:u.jsx(LM,{})}),u.jsx(De,{path:"/profilesforedit",element:u.jsx(AM,{})}),u.jsx(De,{path:"/profileinfoedit",element:u.jsx(Az,{})}),u.jsx(De,{path:"/mypage",element:u.jsx(yM,{})}),u.jsx(De,{path:"/register",element:u.jsx(BM,{})}),u.jsx(De,{path:"/login",element:u.jsx(VM,{})}),u.jsx(De,{path:"/detail/series/:id",element:u.jsx(qv,{contentType:"series"})}),u.jsx(De,{path:"/detail/movie/:id",element:u.jsx(qv,{contentType:"movie"})}),u.jsxs(De,{path:"/contents",children:[u.jsx(De,{path:"all/:genreId?",element:u.jsx(Vl,{contentType:"all"})}),u.jsx(De,{path:"movie/:genreId?",element:u.jsx(Vl,{contentType:"movie"})}),u.jsx(De,{path:"series/:genreId?",element:u.jsx(Vl,{contentType:"series"})})]}),u.jsx(De,{path:"/contentlist",element:u.jsx(Vl,{contentType:"all"})})]})]})]})}),I6={weeklyContent:{},loading:!1,error:null,isComplete:!1},R6=Jt({name:"weekly",initialState:I6,reducers:{},extraReducers:t=>{t.addCase(ac.pending,e=>{e.loading=!0,e.error=null,e.isComplete=!1}).addCase(ac.fulfilled,(e,n)=>{e.loading=!1,e.weeklyContent=n.payload,e.isComplete=!0}).addCase(ac.rejected,(e,n)=>{e.loading=!1,e.error=n.payload,e.isComplete=!1})}}),$6=R6.reducer,P6=Jt({name:"memberR",initialState:{users:JSON.parse(localStorage.getItem("users"))||[],currentUser:JSON.parse(localStorage.getItem("currentUser"))||null,isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn"))||!1},reducers:{},extraReducers:t=>{t.addCase(vs.register.fulfilled,(e,n)=>{n.payload.success&&e.users.push(n.payload.user)}).addCase(vs.login.fulfilled,(e,n)=>{n.payload.success&&(e.isLoggedIn=!0,e.currentUser=n.payload.user)}).addCase(vs.logout.fulfilled,e=>{e.isLoggedIn=!1,e.currentUser=null})}}),z6=P6.reducer,M6={isPlaying:!0,progress:0,duration:0,currentTime:0,videoId:"MkcqlqCfYcg",loading:!1,error:null},Bb=Jt({name:"player",initialState:M6,reducers:{setPlaying:(t,e)=>{t.isPlaying=e.payload},setProgress:(t,e)=>{t.progress=e.payload},setDuration:(t,e)=>{t.duration=e.payload},setCurrentTime:(t,e)=>{t.currentTime=e.payload},setVideoId:(t,e)=>{console.log("setVideoId action:",e.payload),t.videoId=e.payload}},extraReducers:t=>{t.addCase(oc.pending,e=>{e.loading=!0,e.error=null}).addCase(oc.fulfilled,(e,n)=>{console.log("getTVVideos.fulfilled with payload:",n.payload),e.loading=!1,e.videoId=n.payload}).addCase(oc.rejected,(e,n)=>{console.log("getTVVideos.rejected with error:",n.payload),e.loading=!1,e.error=n.payload,e.videoId="MkcqlqCfYcg"}).addCase(ki.pending,e=>{e.loading=!0,e.error=null}).addCase(ki.fulfilled,(e,n)=>{console.log("getMovieVideos.fulfilled with payload:",n.payload),e.loading=!1,e.videoId=n.payload}).addCase(ki.rejected,(e,n)=>{console.log("getMovieVideos.rejected with error:",n.payload),e.loading=!1,e.error=n.payload,e.videoId="MkcqlqCfYcg"})}}),{setPlaying:wN,setProgress:bN,setDuration:_N,setCurrentTime:SN,setVideoId:kN}=Bb.actions,N6=Bb.reducer,O6={movieData:[],loading:!0,error:null,currentData:null,movieDetail:null,detailLoading:!1,detailError:null,movieRecommendations:[],recommendLoading:!1,recommendError:null},L6=Jt({name:"movie",initialState:O6,reducers:{},extraReducers:t=>{t.addCase(Vo.pending,e=>{e.loading=!0,e.error=null}).addCase(Vo.fulfilled,(e,n)=>{e.movieData=n.payload,e.loading=!1}).addCase(Vo.rejected,(e,n)=>{e.loading=!1,e.error=n.payload}).addCase(Wo.pending,e=>{e.detailLoading=!0,e.detailError=null}).addCase(Wo.fulfilled,(e,n)=>{e.movieDetail=n.payload,e.detailLoading=!1}).addCase(Wo.rejected,(e,n)=>{e.detailLoading=!1,e.detailError=n.payload}).addCase(dc.pending,e=>{e.recommendLoading=!0,e.recommendError=null}).addCase(dc.fulfilled,(e,n)=>{e.movieRecommendations=n.payload,e.recommendLoading=!1}).addCase(dc.rejected,(e,n)=>{e.recommendLoading=!1,e.recommendError=n.payload})}}),A6=L6.reducer,D6={TVseriesData:[],TVRecommendData:[],TVDetail:null,contentRating:null,tvSeasons:[],currentSeasonData:null,episodes:[],loading:!0,seasonsLoading:!1,episodesLoading:!1,recommendLoading:!1,error:null,currentData:null},F6=Jt({name:"tvSeries",initialState:D6,reducers:{},extraReducers:t=>{t.addCase(Uo.pending,e=>{e.loading=!0}).addCase(Uo.fulfilled,(e,n)=>{e.TVseriesData=n.payload,e.loading=!1}).addCase(Uo.rejected,(e,n)=>{e.error=n.payload,e.loading=!1}).addCase(Ur.pending,e=>{e.loading=!0}).addCase(Ur.fulfilled,(e,n)=>{e.TVDetail=n.payload,e.currentData=n.payload,e.loading=!1}).addCase(Ur.rejected,(e,n)=>{e.error=n.payload,e.loading=!1}).addCase(gc.pending,e=>{e.recommendLoading=!0}).addCase(gc.fulfilled,(e,n)=>{e.TVRecommendData=n.payload,e.recommendLoading=!1}).addCase(gc.rejected,(e,n)=>{e.error=n.payload,e.recommendLoading=!1}).addCase(pc.pending,e=>{e.loading=!0}).addCase(pc.fulfilled,(e,n)=>{e.contentRating=n.payload,e.loading=!1}).addCase(pc.rejected,(e,n)=>{e.error=n.payload,e.loading=!1}).addCase(fc.pending,e=>{e.loading=!0}).addCase(fc.fulfilled,(e,n)=>{e.contentRating=n.payload,e.loading=!1}).addCase(fc.rejected,(e,n)=>{e.error=n.payload,e.loading=!1}).addCase(mc.pending,e=>{e.seasonsLoading=!0}).addCase(mc.fulfilled,(e,n)=>{e.tvSeasons=n.payload,e.seasonsLoading=!1}).addCase(mc.rejected,(e,n)=>{e.error=n.payload,e.seasonsLoading=!1}).addCase(hc.pending,e=>{e.episodesLoading=!0}).addCase(hc.fulfilled,(e,n)=>{e.currentSeasonData=n.payload.seasonInfo,e.episodes=n.payload.episodes,e.episodesLoading=!1}).addCase(hc.rejected,(e,n)=>{e.error=n.payload,e.episodesLoading=!1})}}),B6=F6.reducer,V6={data:null,loading:!1,error:null},W6=Jt({name:"TVDetail",initialState:V6,reducers:{},extraReducers:t=>{t.addCase(Ur.pending,e=>{e.loading=!0,e.error=null}).addCase(Ur.fulfilled,(e,n)=>{e.loading=!1,e.data=n.payload}).addCase(Ur.rejected,(e,n)=>{e.loading=!1,e.error=n.payload})}}),U6=W6.reducer,G6={movies:[],tvShows:[],loading:!1,error:null},H6=Jt({name:"topRated",initialState:G6,reducers:{},extraReducers:t=>{t.addCase(Go.pending,e=>{e.loading=!0,e.error=null}).addCase(Go.fulfilled,(e,n)=>{e.loading=!1,e.movies=n.payload.movies,e.tvShows=n.payload.tvShows}).addCase(Go.rejected,(e,n)=>{e.loading=!1,e.error=n.payload})}}),Y6=H6.reducer,J6={animations:{title:"",option:"",contentlist:[]},darkTheaterReleases:{title:"",option:"",contentlist:[]},dramaTvs:{title:"",option:"",contentlist:[]},loading:!1,error:null},q6=Jt({name:"filterContents",initialState:J6,reducers:{},extraReducers:t=>{t.addCase(Zo.pending,e=>{e.loading=!0}).addCase(Zo.fulfilled,(e,n)=>{e.loading=!1,e.animations=n.payload}).addCase(Zo.rejected,(e,n)=>{e.loading=!1,e.error=n.error.message}).addCase(Ko.pending,e=>{e.loading=!0}).addCase(Ko.fulfilled,(e,n)=>{e.loading=!1,e.darkTheaterReleases=n.payload}).addCase(Ko.rejected,(e,n)=>{e.loading=!1,e.error=n.error.message}).addCase(Xo.pending,e=>{e.loading=!0}).addCase(Xo.fulfilled,(e,n)=>{e.loading=!1,e.dramaTvs=n.payload}).addCase(Xo.rejected,(e,n)=>{e.loading=!1,e.error=n.error.message})}}),Q6=q6.reducer,Z6={popularContent:[],status:"idle",error:null},K6=Jt({name:"popular",initialState:Z6,reducers:{},extraReducers:t=>{t.addCase(Ho.pending,e=>{e.status="loading"}).addCase(Ho.fulfilled,(e,n)=>{e.status="succeeded",e.popularContent=n.payload}).addCase(Ho.rejected,(e,n)=>{e.status="failed",e.error=n.error.message})}}),X6=K6.reducer,eN=o5({reducer:{reviewR:N$,weeklyR:$6,memberR:z6,playerR:N6,movieR:A6,tvSeriesR:B6,contPlayerR:E$,profileR:NM,tvDetailR:U6,topRatedR:Y6,searchR:kP,popularR:X6,genreR:c4,filterR:Q6}});qS.createRoot(document.getElementById("root")).render(u.jsx(_e.StrictMode,{children:u.jsx(RE,{store:eN,children:u.jsx(T6,{})})}));
