(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/userSetting/settingMessage"],{5284:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("e76d"))}.bind(null,t)).catch(t.oe)},s={components:{uniNavBar:a},onLoad:function(e){this.type=e.type,this.message=e.message,this.changeType=e.changeType},data:function(){return{message:"",barHeight:25,type:"",changeType:"",empName:"",dept:"",phoneNum:"",email:"",userInfo:""}},mounted:function(){this.getSystemStatusBarHeight(),this.userInfo=e.getStorageSync("userInfo"),console.log("获取用户信息"),this.empName=this.userInfo.userName,this.phoneNum=this.userInfo.phoneNumber,this.email=this.userInfo.email,this.dept=this.userInfo.userDesc,console.log(this.userInfo)},methods:{getSystemStatusBarHeight:function(){var e=plus.navigator.getStatusbarHeight();this.barHeight=e},back:function(){e.navigateBack({})},finish:function(){var n=this,t={empName:this.empName,dept:this.dept,phoneNum:this.phoneNum,email:this.email};t[this.changeType]=this.message,console.log("完成"),this.$HTTP({url:"ChangeUserMessage",data:{userobj:JSON.stringify(t)}}).then((function(t){if(console.log(t),t.data){"empName"==n.changeType?n.userInfo["userName"]=n.message:"dept"==n.changeType?n.userInfo["userDesc"]=n.message:"phoneNum"==n.changeType?n.userInfo["phoneNumber"]=n.message:"email"==n.changeType&&(n.userInfo["email"]=n.message);var a=n.userInfo;console.log(a),console.log(n.userInfo),e.setStorage({key:"userInfo",data:a});var s=e.getStorageInfoSync("userInfo");console.log(s),e.showToast({title:"修改成功",icon:"none"}),e.navigateBack({delta:1,animationType:"pop-out",animationDuration:200})}}))}}};n.default=s}).call(this,t("c11b")["default"])},"63f7":function(e,n,t){"use strict";var a=t("ffe6"),s=t.n(a);s.a},"8a88":function(e,n,t){"use strict";t.r(n);var a=t("fd0e"),s=t("c7e5");for(var o in s)"default"!==o&&function(e){t.d(n,e,(function(){return s[e]}))}(o);t("63f7");var u,i=t("f0c5"),r=Object(i["a"])(s["default"],a["b"],a["c"],!1,null,"eb13d94a",null,!1,a["a"],u);n["default"]=r.exports},ab50:function(e,n,t){"use strict";(function(e){t("8b56");a(t("66fd"));var n=a(t("8a88"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("c11b")["createPage"])},c7e5:function(e,n,t){"use strict";t.r(n);var a=t("5284"),s=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=s.a},fd0e:function(e,n,t){"use strict";var a={uniNavBar:function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"e76d"))}},s=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}))},ffe6:function(e,n,t){}},[["ab50","common/runtime","common/vendor"]]]);