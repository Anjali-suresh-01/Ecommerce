(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{30523:e=>{e.exports={polyfill:function(){var e,t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var r=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||a,scrollIntoView:r.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(e=t.navigator.userAgent,RegExp("MSIE |Trident/|Edge/").test(e))?1:0;t.scroll=t.scrollTo=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset);return}d.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(void 0!==arguments[0]){if(c(arguments[0])){n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);return}d.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}},r.prototype.scrollBy=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},r.prototype.scrollIntoView=function(){if(!0===c(arguments[0])){n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);return}var e=function(e){for(var t,r,n;e!==o.body&&!1===(r=s(t=e,"Y")&&u(t,"Y"),n=s(t,"X")&&u(t,"X"),r||n);)e=e.parentNode||e.host;return e}(this),r=e.getBoundingClientRect(),i=this.getBoundingClientRect();e!==o.body?(d.call(this,e,e.scrollLeft+i.left-r.left,e.scrollTop+i.top-r.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function d(e,r,l){var c,s,u,d,f=i();e===o.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,d=n.scroll):(c=e,s=e.scrollLeft,u=e.scrollTop,d=a),function e(o){var r,n,l,a=(i()-o.startTime)/468;r=.5*(1-Math.cos(Math.PI*(a=a>1?1:a))),n=o.startX+(o.x-o.startX)*r,l=o.startY+(o.y-o.startY)*r,o.method.call(o.scrollable,n,l),(n!==o.x||l!==o.y)&&t.requestAnimationFrame(e.bind(t,o))}({scrollable:c,method:d,startTime:f,startX:s,startY:u,x:r,y:l})}}}},42281:(e,t,o)=>{"use strict";var r=o(24601),n=o(86283);n.iG?.addEventListener("error",e=>{e.error&&(0,r.eK)(e.error)}),n.iG?.addEventListener("unhandledrejection",async e=>{if(e.promise)try{await e.promise}catch(e){(0,r.eK)(e)}}),"#b00m"===n.iG?.location.hash&&setTimeout(()=>{throw Error("b00m")});var i=o(30523),l=o(22490),a=o(7180);let c="default";l.Z.createPolicy(c,{createHTML:e=>a.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!0,fallbackOnError:!0}),createScript:e=>a.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!1,fallbackOnError:!0}),createScriptURL:e=>a.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!1,fallbackOnError:!0})}),(0,o(49237).nn)()},89359:(e,t,o)=>{"use strict";function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function n(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function i(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let o=r("meta[name=analytics-location-params]");for(let e of(o&&(t+=(t?"&":"?")+o.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let o=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${o[0]}($|=)`,"g"),`$1${o[1]}$2`)}return t}function l(){return`${window.location.protocol}//${window.location.host}${n()+i()}`}o.d(t,{S:()=>l})},24601:(e,t,o)=>{"use strict";o.d(t,{aJ:()=>O,cI:()=>_,eK:()=>v});var r=o(82918),n=o(49237),i=o(28382),l=o(89359),a=o(68202),c=o(53729),s=o(86283),u=o(46426);let d=!1,f=0,p=Date.now(),h=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function m(e){return e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message}function y(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}function g(e){return!!("AbortError"===e.name||"TypeError"===e.name&&h.has(e.message)||e.name.startsWith("ApiError")&&h.has(e.message))}function v(e,t={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!m(e)){if(R(e))return;let o=Error(),r=y(e),n={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:_(o)};b(T(n,t));return}g(e)||b(T(w(e),t))}else g(e)||b(T(w(e),t))}async function b(e){if(!k())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(S(e.error.stacktrace)){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function w(e){return{type:e.name,value:e.message,stacktrace:_(e)}}function T(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,l.S)()||window.location.href,readyState:document.readyState,referrer:(0,a.wP)(),timeSinceLoad:Math.round(Date.now()-p),user:O()||void 0,bundler:c.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function _(e){return(0,i.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let E=/(chrome|moz|safari)-extension:\/\//;function S(e){return e.some(e=>E.test(e.filename)||E.test(e.function))}function O(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let L=!1;function k(){return!L&&!d&&f<10&&(0,n.Gb)()}if(s.iG?.addEventListener("pageshow",()=>L=!1),s.iG?.addEventListener("pagehide",()=>L=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{v(e.data.error)})}let P=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"];function R(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(P.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}},95253:(e,t,o)=>{"use strict";let r;o.d(t,{Y:()=>f,q:()=>p});var n=o(88149),i=o(86058),l=o(44544),a=o(71643);let{getItem:c}=(0,l.Z)("localStorage"),s="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,n.n)("octolytics");delete e.baseContext,r=new i.R(e)}catch(e){}function d(e){let t=(0,n.n)("octolytics").baseContext||{};if(t)for(let[e,o]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(s)&&(t[e.replace(s,"")]=o,delete t[e]);let o=document.querySelector("meta[name=visitor-payload]");if(o){let e=JSON.parse(atob(o.content));Object.assign(t,e)}let r=new URLSearchParams(window.location.search);for(let[e,o]of r)u.includes(e.toLowerCase())&&(t[e]=o);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(d(e))}function p(e,t={}){let o=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=o?{service:o}:{};for(let[e,o]of Object.entries(t))null!=o&&(n[e]=`${o}`);r&&(d(n),r.sendEvent(e||"unknown",d(n)))}},7180:(e,t,o)=>{"use strict";o.d(t,{O:()=>u,d:()=>TrustedTypesPolicyError});var r=o(46426),n=o(71643),i=o(24601),l=o(27856),a=o.n(l),c=o(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function s({policy:e,policyName:t,fallback:o,fallbackOnError:l=!1,sanitize:s,silenceErrorReporting:u=!1}){try{if((0,r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return o;(0,n.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return s&&new Promise(e=>{let o=window.performance.now(),r=a().sanitize(i,{FORBID_ATTR:[]}),n=window.performance.now();if(i.length!==r.length){let l=Error("Trusted Types policy output sanitized"),a=l.stack?.slice(0,1e3),s=i.slice(0,250);(0,c.q)("trusted_types_policy.sanitize",{policyName:t,output:s,stack:a,outputLength:i.length,sanitizedLength:r.length,executionTime:n-o}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.eK)(e),(0,n.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!l))throw e}return o}let u={apply:s}},22490:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(86283);function n(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let i={createHTML:n("createHTML"),createScript:n("createScript"),createScriptURL:n("createScriptURL")},l={createPolicy:(e,t)=>({name:e,...i,...t})},a=globalThis.trustedTypes??l,c=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||c||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),c=!0)})},86058:(e,t,o)=>{"use strict";function r(){let e;try{e=window.top.document.referrer}catch(t){if(window.parent)try{e=window.parent.document.referrer}catch(e){}}return""===e&&(e=document.referrer),e}function n(){try{return`${screen.width}x${screen.height}`}catch(e){return"unknown"}}function i(){let e=0,t=0;try{return"number"==typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):null!=document.documentElement&&null!=document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):null!=document.body&&null!=document.body.clientWidth&&(t=document.body.clientWidth,e=document.body.clientHeight),`${t}x${e}`}catch(e){return"unknown"}}function l(){return navigator.languages?navigator.languages.join(","):navigator.language||""}function a(){return{referrer:r(),user_agent:navigator.userAgent,screen_resolution:n(),browser_resolution:i(),browser_languages:l(),pixel_ratio:window.devicePixelRatio,timestamp:Date.now(),tz_seconds:-60*new Date().getTimezoneOffset()}}o.d(t,{R:()=>AnalyticsClient});var c=o(82918);let AnalyticsClient=class AnalyticsClient{constructor(e){this.options=e}get collectorUrl(){return this.options.collectorUrl}get clientId(){return this.options.clientId?this.options.clientId:(0,c.b)()}createEvent(e){return{page:location.href,title:document.title,context:{...this.options.baseContext,...e}}}sendPageView(e){let t=this.createEvent(e);this.send({page_views:[t]})}sendEvent(e,t){let o={...this.createEvent(t),type:e};this.send({events:[o]})}send({page_views:e,events:t}){let o={client_id:this.clientId,page_views:e,events:t,request_context:a()},r=JSON.stringify(o);try{if(navigator.sendBeacon){navigator.sendBeacon(this.collectorUrl,r);return}}catch{}fetch(this.collectorUrl,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:r,keepalive:!1})}}},88149:(e,t,o)=>{"use strict";function r(e="ha"){let t;let o={},r=document.head.querySelectorAll(`meta[name^="${e}-"]`);for(let n of Array.from(r)){let{name:r,content:i}=n,l=r.replace(`${e}-`,"").replace(/-/g,"_");"url"===l?t=i:o[l]=i}if(!t)throw Error(`AnalyticsClient ${e}-url meta tag not found`);return{collectorUrl:t,...Object.keys(o).length>0?{baseContext:o}:{}}}o.d(t,{n:()=>r})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","ui_packages_soft-nav_soft-nav_ts"],()=>t(42281));var o=e.O()}]);
//# sourceMappingURL=environment-1c9ab933e485.js.map