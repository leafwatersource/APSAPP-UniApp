(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["common/main"],{"0d3b":function(e,t,n){"use strict";n.r(t);var o=n("fe75"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},"24bd":function(e,t,n){"use strict";var o=n("f985"),r=n.n(o);r.a},"78f4":function(e,t,n){"use strict";(function(e){n("8b56");var t=c(n("66fd")),o=c(n("d177")),r=c(n("c6e9")),u=c(n("592a")),a=c(n("c2b9"));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.use(u.default),t.default.config.productionTip=!1;var p=new u.default({locale:"zh-Hans-CN",messages:{"zh-Hans-CN":n("7e7e").lang,"en-US":n("ee6c").lang,"zh-Hant-CN":n("44f4").lang}});t.default.prototype._i18n=p,t.default.prototype.$store=a.default,t.default.prototype.$HTTP=r.default,o.default.mpType="app";var s=new t.default(i({store:a.default},o.default));e(s).$mount()}).call(this,n("c11b")["createApp"])},d177:function(e,t,n){"use strict";n.r(t);var o=n("0d3b");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("24bd");var u,a,c,l,i=n("f0c5"),f=Object(i["a"])(o["default"],u,a,!1,null,null,null,!1,c,l);t["default"]=f.exports},f985:function(e,t,n){},fe75:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log("App Launch"),plus.screen.lockOrientation("portrait-primary");var t=e.getSystemInfoSync();-1!=t.language.indexOf("en")?this.$i18n.locale="en-US":-1!=t.language.indexOf("Hant")?this.$i18n.locale="zh-Hant-CN":(t.language.indexOf("Hans"),this.$i18n.locale="zh-Hans-CN"),plus.runtime.getProperty(plus.runtime.appid,(function(e){console.log(e),console.log(plus.runtime.appid)}))},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=n}).call(this,n("c11b")["default"])}},[["78f4","common/runtime","common/vendor"]]]);