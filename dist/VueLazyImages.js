/*!
 * vue-lazy-images v1.2.2
 * (c) 2017 LowesYang
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueLazyImages=t():e.VueLazyImages=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(4),a=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.init(t)}return o(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.images=[],this.scrollParent=new WeakSet,this.options=e,this.eventsList=e.eventsList||a}},{key:"addImage",value:function(e){if(e.tagName&&"img"===e.tagName.toLowerCase()){var t=(0,i.getScrollParent)(e);if(t){var n={el:e,scrollParent:t};this.images.push(n),this.initListener(t)}}}},{key:"initListener",value:function(e){var t=this;if(!this.scrollParent.has(e)){var n=(0,i.getStyle)(e,"position");""!==n&&"static"!==n||(e.style.position="relative"),this.scrollParent.add(e),this.eventsList.forEach(function(n){e.addEventListener(n,t.loadImage.bind(t))})}}},{key:"loadImage",value:function(){for(var e=void 0,t=void 0,n=this.images,r=0;r<n.length;r++)null===n[r].el.parentNode&&n.splice(r--,1);for(var o=0;o<n.length;o++)e=n[o].scrollParent,t=n[o].el,(0,i.checkInView)(t,e,this.options.offset)&&(t.src=t.dataset.src||"",n.splice(o--,1))}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.VueLazyImage=t.install=void 0;var o=n(2),i=r(o),a=n(0),s=r(a),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component("lazy-image",i.default),t.offset=parseInt(t.offset,10)||0;var n=new s.default(t);e.prototype.$lazyImages=n};t.default={install:u,VueLazyImage:i.default},t.install=u,t.VueLazyImage=i.default},function(e,t,n){n(9);var r=n(7)(n(3),n(8),"data-v-631bcb1f",null);r.options.__file="D:\\website\\vue-lazy-images\\src\\VueLazyImage.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] VueLazyImage.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{show:!1}},mounted:function(){var e=this;this.$lazyImages.addImage(this.$refs.target),this.$refs.target.onload=function(){e.show=!0},this.$lazyImages.loadImage()},props:{src:{type:String,required:!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return e&&e!==window?(getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t])||e.style[t]:null},o=function(e){return/scroll|auto/.test(r(e,"overflow")+r(e,"overflow-y")+r(e,"overflow-x"))},i=function(e){if(!(e instanceof HTMLElement))return console.error(e+" is not an HTMLElement"),null;for(var t=e;t&&t!==document.body&&t!==document.documentElement;){if(!t.parentNode)return null;if(o(t))return t;t=t.parentNode}return window},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=void 0,i=void 0,a=0,s=0;if(t===window){o=document.documentElement.clientHeight||document.body.clientHeight,i=document.documentElement.clientWidth||document.body.clientWidth;var u=void 0,c=void 0,l=void 0,f=void 0,d=void 0;return d=e.getBoundingClientRect(),u=d.top-n,c=d.left-n,f=d.bottom+n,l=d.right+n,u<o&&f>0&&c<i&&l>0}var p=t.scrollTop,v=t.scrollLeft,h=e.offsetWidth,m=e.offsetHeight;for(o=t.clientHeight,i=t.clientWidth;e!=t&&null!=e;){var g=parseInt(r(e,"border-width"));a+=e.offsetTop+g,s+=e.offsetLeft+g,e=e.offsetParent}return p+o>a-n&&a+m+n>p&&v+i>s-n&&s+h+n>v};t.getScrollParent=i,t.getStyle=r,t.checkOverflow=o,t.checkInView=a},function(e,t,n){t=e.exports=n(6)(void 0),t.push([e.i,"\nimg[data-v-631bcb1f]{\n    opacity:0;\n    -webkit-transition: opacity 0.4s;\n    -moz-transition: opacity 0.4s;\n    -ms-transition: opacity 0.4s;\n    -o-transition: opacity 0.4s;\n    transition: opacity 0.4s;\n}\n.show[data-v-631bcb1f]{\n    opacity:1;\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var u=Object.create(s.computed||null);Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}}),s.computed=u}return{esModule:o,exports:i,options:s}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{ref:"target",class:{show:e.show},attrs:{"data-src":e.src,width:"100%",height:"100%"}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(10)("a5728e9c",r,!1)},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var i=p++;r=d||(d=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(11),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=l[a.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],c=i[3],l={id:e+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}}])});