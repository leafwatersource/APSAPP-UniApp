(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/login/login"],{"0bf7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("a3a5"));var o=n("2f62");function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){n.e("components/m-input").then(function(){return resolve(n("f290"))}.bind(null,n)).catch(n.oe)},c={components:{mInput:u},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0,isDevtools:!1,userName:"",userPass:"",version:""}},mounted:function(){var t=this,n=e.getStorageSync("userInfo");console.log(n),this.userName=n.empID,this.userPass=e.getStorageSync("pass"),console.log(this.userPass),plus.runtime.getProperty(plus.runtime.appid,(function(e){t.version=e.version}))},computed:s({},(0,o.mapState)(["forcedLogin","api","userGuid"]),{i18n:function(){return this.$t("message")}}),methods:{login:function(){var t=this;console.log(this.api);var n=this,o=e.getStorageSync("UserGuid"),a=e.getStorageSync("UserEmpID");console.log(a),console.log(o),e.showLoading({title:"登录中",mask:!0}),this.$HTTP({url:"UserHaveLogin",data:{username:a,userGuid:o}}).then((function(o){console.log(o),o.data?(console.log("账号没有在别的设备登录过"),n.ForceOut()):(console.log(n.userName,n.userPass),n.$HTTP({url:"login",data:{username:n.userName,userpass:n.userPass}}).then((function(o){console.log(o),e.hideLoading(),2==o.data["loginState"]?(e.hideLoading(),e.showModal({title:t.i18n.publicText.Login_forceOut,content:o.data["message"],confirmText:t.i18n.publicText.Button_OK,cancelText:t.i18n.publicText.Button_Cancel,success:function(e){e.confirm&&n.ForceOut()}})):1==o.data["loginState"]?(n.$store.state.userGuid=o.data["userGuiD"],n.UserInfo()):0==o.data["loginState"]&&(e.hideToast(),e.showToast({title:o.data["message"],icon:"none"}))})))}))},ForceOut:function(){var t=this;this.$HTTP({url:"ForceOut",data:{userName:this.userName,userPass:this.userPass}}).then((function(n){console.log(n),1==n.data["loginState"]?(t.$store.state.userGuid=n.data.userGuiD,t.UserInfo()):0==n.data["loginState"]&&(e.hideLoading(),e.showToast({title:n.data["message"],icon:"none"})),2==n.data.loginState&&t.login()}))},UserInfo:function(){var t=this;this.$HTTP({url:"GetUserInfo",data:{userGuid:this.userGuid,empid:this.userName}}).then((function(n){if(n){t.$store.state.userInfo=n.data;var o=n.data,a=t.userPass;e.setStorage({key:"UserEmpID",data:n.data["empID"]}),e.setStorage({key:"UserGuid",data:n.data["userGuid"]}),e.setStorage({key:"userInfo",data:o}),e.setStorage({key:"pass",data:a}),e.showToast({title:"登陆成功",success:function(){e.hideToast(),e.switchTab({url:"../main/main"})}})}}))},StartSocket:function(){}}};t.default=c}).call(this,n("c11b")["default"])},"4c52":function(e,t,n){"use strict";(function(e){n("8b56");o(n("66fd"));var t=o(n("e62c"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},"73f7":function(e,t,n){"use strict";var o=n("97b2"),a=n.n(o);a.a},"97b2":function(e,t,n){},ae72:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))},c85a:function(e,t,n){"use strict";n.r(t);var o=n("0bf7"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},e62c:function(e,t,n){"use strict";n.r(t);var o=n("ae72"),a=n("c85a");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("73f7");var s,i=n("f0c5"),u=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"c98a9186",null,!1,o["a"],s);t["default"]=u.exports}},[["4c52","common/runtime","common/vendor"]]]);