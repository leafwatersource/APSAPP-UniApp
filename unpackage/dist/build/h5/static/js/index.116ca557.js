(function(e){function n(n){for(var o,a,s=n[0],c=n[1],u=n[2],g=0,d=[];g<s.length;g++)a=s[g],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},r={index:0},i=[];function a(e){return s.p+"static/js/"+({"pages-downLoadWork-downLoadWork":"pages-downLoadWork-downLoadWork","pages-login-login":"pages-login-login","pages-main-main":"pages-main-main","pages-main-tryPage":"pages-main-tryPage","pages-selectRes-resList":"pages-selectRes-resList","pages-statisticsCenter-statisticsCenter":"pages-statisticsCenter-statisticsCenter","pages-user-user":"pages-user-user","pages-userSetting-changePass":"pages-userSetting-changePass","pages-userSetting-logTab":"pages-userSetting-logTab","pages-userSetting-resList~pages-userSetting-settingMessage~pages-workDetail-work":"pages-userSetting-resList~pages-userSetting-settingMessage~pages-workDetail-work","pages-userSetting-resList~pages-workDetail-work":"pages-userSetting-resList~pages-workDetail-work","pages-userSetting-resList":"pages-userSetting-resList","pages-workDetail-work":"pages-workDetail-work","pages-userSetting-settingMessage":"pages-userSetting-settingMessage","pages-userSetting-userSetting":"pages-userSetting-userSetting","pages-workDetail-finishWork":"pages-workDetail-finishWork"}[e]||e)+"."+{"pages-downLoadWork-downLoadWork":"425bdee6","pages-login-login":"fa4df57e","pages-main-main":"6299993f","pages-main-tryPage":"7d61de0d","pages-selectRes-resList":"dbb55655","pages-statisticsCenter-statisticsCenter":"1bcf11da","pages-user-user":"e2af262c","pages-userSetting-changePass":"478745b1","pages-userSetting-logTab":"29599dce","pages-userSetting-resList~pages-userSetting-settingMessage~pages-workDetail-work":"c7fba82d","pages-userSetting-resList~pages-workDetail-work":"5b70b9ab","pages-userSetting-resList":"e5260089","pages-workDetail-work":"3edfaa14","pages-userSetting-settingMessage":"98d78368","pages-userSetting-userSetting":"f9542b69","pages-workDetail-finishWork":"50879598"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e),i=function(n){c.onerror=c.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,t[1](a)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var g=0;g<c.length;g++)n(c[g]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("7b12")},"1f57":function(e,n,t){"use strict";t.r(n);var o=t("38b9"),r=t("b78b");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("d484");var a,s=t("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=c.exports},"23a1":function(e,n,t){var o=t("29b6");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=t("4f06").default;r("c9402e26",o,!0,{sourceMap:!1,shadowMode:!1})},"27df":function(e,n,t){"use strict";(function(e){var o=t("ee27");t("c975"),t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("7b09")),i="development",a="http://api2.szrate.com:8088/api/";"development"===i?(e.log("开发环境/测试环境"),a="http://192.168.0.104/api/"):(e.log("生产环境/正式环境"),a="http://phone.szrate.com/api/");var s=function(n){return new Promise((function(t,o){uni.getNetworkType({success:function(e){"none"==e.networkType&&(uni.showToast({title:"无网络",icon:"none"}),o("none"))}}),uni.onNetworkStatusChange((function(e){e.isConnected||(uni.showToast({title:"无网络",icon:"none"}),o("none"))}));try{var i=r.default.state.userInfo["userGuid"],s=r.default.state.userInfo["empID"];if(-1==n.url.indexOf("login")&&-1==n.url.indexOf("ForceOut")&&-1==n.url.indexOf("GetUserInfo")&&-1==n.url.indexOf("UserHaveLogin")&&(!i||!s))return uni.showToast({title:"账号在别处登录了",icon:"none"}),void uni.reLaunch({url:"/pages/login/login"});uni.request({url:(n.baseURL||a)+n.url,method:n.method||"POST",data:n.data,header:{token:JSON.stringify({UserGuid:i,UserEmpID:s}),"Content-Type":"application/x-www-form-urlencoded"},success:function(e){if(500==e.statusCode)return uni.showToast({title:"服务器异常",icon:"none"}),void uni.reLaunch({url:"/pages/login/login"});if(200==e.statusCode){if("0"==e.data.LoginState)return uni.showToast({title:"账号在别出登录了",icon:"none"}),void uni.reLaunch({url:"/pages/login/login"});-1==e.data&&(uni.showToast({title:"账号在别处登录了",icon:"none"}),uni.reLaunch({url:"/pages/login/login"})),t(e)}else 404==e.statusCode&&(uni.showToast({title:"服务器地址错误",icon:"none"}),o(e))},fail:function(n){e.log(n),-1==n.errMsg.indexOf("timeout")?uni.showToast({title:"请检查网络连接",icon:"none",duration:2e3}):uni.showToast({title:"请求超时",icon:"none",duration:2e3})},complete:function(){}})}catch(c){e.log("异常"),uni.hideLoading(),uni.showToast({title:"服务端异常",icon:"none"})}}))},c=s;n.default=c}).call(this,t("5a52")["default"])},"29b6":function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/*按钮的颜色*/\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 头条小程序需要把 iconfont 样式放到组件外 */@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf?t=1536565627510) format("truetype")}.m-icon{font-family:uniicons;font-size:24px;font-weight:400;font-style:normal;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased}.m-icon.uni-active{color:#007aff}.m-icon-contact:before{content:"\\e100"}.m-icon-person:before{content:"\\e101"}.m-icon-personadd:before{content:"\\e102"}.m-icon-contact-filled:before{content:"\\e130"}.m-icon-person-filled:before{content:"\\e131"}.m-icon-personadd-filled:before{content:"\\e132"}.m-icon-phone:before{content:"\\e200"}.m-icon-email:before{content:"\\e201"}.m-icon-chatbubble:before{content:"\\e202"}.m-icon-chatboxes:before{content:"\\e203"}.m-icon-phone-filled:before{content:"\\e230"}.m-icon-email-filled:before{content:"\\e231"}.m-icon-chatbubble-filled:before{content:"\\e232"}.m-icon-chatboxes-filled:before{content:"\\e233"}.m-icon-weibo:before{content:"\\e260"}.m-icon-weixin:before{content:"\\e261"}.m-icon-pengyouquan:before{content:"\\e262"}.m-icon-chat:before{content:"\\e263"}.m-icon-qq:before{content:"\\e264"}.m-icon-videocam:before{content:"\\e300"}.m-icon-camera:before{content:"\\e301"}.m-icon-mic:before{content:"\\e302"}.m-icon-location:before{content:"\\e303"}.m-icon-mic-filled:before,\r\n.m-icon-speech:before{content:"\\e332"}.m-icon-location-filled:before{content:"\\e333"}.m-icon-micoff:before{content:"\\e360"}.m-icon-image:before{content:"\\e363"}.m-icon-map:before{content:"\\e364"}.m-icon-compose:before{content:"\\e400"}.m-icon-trash:before{content:"\\e401"}.m-icon-upload:before{content:"\\e402"}.m-icon-download:before{content:"\\e403"}.m-icon-close:before{content:"\\e404"}.m-icon-redo:before{content:"\\e405"}.m-icon-undo:before{content:"\\e406"}.m-icon-refresh:before{content:"\\e407"}.m-icon-star:before{content:"\\e408"}.m-icon-plus:before{content:"\\e409"}.m-icon-minus:before{content:"\\e410"}.m-icon-circle:before,\r\n.m-icon-checkbox:before{content:"\\e411"}.m-icon-close-filled:before,\r\n.m-icon-clear:before{content:"\\e434"}.m-icon-refresh-filled:before{content:"\\e437"}.m-icon-star-filled:before{content:"\\e438"}.m-icon-plus-filled:before{content:"\\e439"}.m-icon-minus-filled:before{content:"\\e440"}.m-icon-circle-filled:before{content:"\\e441"}.m-icon-checkbox-filled:before{content:"\\e442"}.m-icon-closeempty:before{content:"\\e460"}.m-icon-refreshempty:before{content:"\\e461"}.m-icon-reload:before{content:"\\e462"}.m-icon-starhalf:before{content:"\\e463"}.m-icon-spinner:before{content:"\\e464"}.m-icon-spinner-cycle:before{content:"\\e465"}.m-icon-search:before{content:"\\e466"}.m-icon-plusempty:before{content:"\\e468"}.m-icon-forward:before{content:"\\e470"}.m-icon-back:before,\r\n.m-icon-left-nav:before{content:"\\e471"}.m-icon-checkmarkempty:before{content:"\\e472"}.m-icon-home:before{content:"\\e500"}.m-icon-navigate:before{content:"\\e501"}.m-icon-gear:before{content:"\\e502"}.m-icon-paperplane:before{content:"\\e503"}.m-icon-info:before{content:"\\e504"}.m-icon-help:before{content:"\\e505"}.m-icon-locked:before{content:"\\e506"}.m-icon-more:before{content:"\\e507"}.m-icon-flag:before{content:"\\e508"}.m-icon-home-filled:before{content:"\\e530"}.m-icon-gear-filled:before{content:"\\e532"}.m-icon-info-filled:before{content:"\\e534"}.m-icon-help-filled:before{content:"\\e535"}.m-icon-more-filled:before{content:"\\e537"}.m-icon-settings:before{content:"\\e560"}.m-icon-list:before{content:"\\e562"}.m-icon-bars:before{content:"\\e563"}.m-icon-loop:before{content:"\\e565"}.m-icon-paperclip:before{content:"\\e567"}.m-icon-eye:before{content:"\\e568"}.m-icon-arrowup:before{content:"\\e580"}.m-icon-arrowdown:before{content:"\\e581"}.m-icon-arrowleft:before{content:"\\e582"}.m-icon-arrowright:before{content:"\\e583"}.m-icon-arrowthinup:before{content:"\\e584"}.m-icon-arrowthindown:before{content:"\\e585"}.m-icon-arrowthinleft:before{content:"\\e586"}.m-icon-arrowthinright:before{content:"\\e587"}.m-icon-pulldown:before{content:"\\e588"}.m-icon-scan:before{content:"\\e612"}\r\n/*每个页面公共css */uni-page-body{min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:16px}\r\n/* 原生组件模式下需要注意组件外部样式 */m-input{width:100%;\r\n  /* min-height: 100%; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}.content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#e3e3e3;padding:10px}.input-group{background-color:#fff;margin-top:20px;position:relative}.input-group::before{position:absolute;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.input-group::after{position:absolute;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.input-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative;font-size:18px;line-height:40px}.input-row .title{width:72px;padding-left:15px}.input-row.border::after{position:absolute;right:0;bottom:0;left:8px;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.btn-row{margin-top:25px;padding:10px}uni-button.primary{background-color:#0faeff}',""]),e.exports=n},"38b9":function(e,n,t){"use strict";var o,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},"545a":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.lang=void 0;var o={message:{tabBar:{Nav_Report:"移动报工",Nav_Dash:"统计中心",Nav_User:"用户操作"},publicText:{app_name:"移动报工",app_title:"RateFactory移动报工系统",Login_UserName:"输入用户名",Login_UserPass:"输入密码",Login_Login:"登录",Login_Remember:"记住我",Login_userName_empty:"用户名不允许为空.",Login_userPass_empty:"用户密码不允许为空.",Login_Version:"当前版本号:",Login_Copyby:"深圳市瑞特科技有限公司 版权所有",Login_forceOut:"强制登出",Button_OK:"确定",Button_Cancel:"取消",Login_noPermission:"当前账号没有报工权限.",Tab_unstart:"待生产",Tab_finished:"已完成",Search_hint:"输入工单号码或产品搜索",Workorder_Product:"产品:",Workorder_Operation:"工序:",Workorder_Description:"描述:",User_message_title:"确认退出",User_message_message:"确认退出当前账号?",Workorder_Planstartendtime:"执行时间:",Nav_Back:"返回",Workorder_Title_OrderDetail:"订单详情",ChangeRes_Title_ResName:"切换设备",Workorder_Workid:"工单号码:",Workorder_ResName:"设备名称:",Workorder_Quantity:"数量:",Msg_DownOrder_Title:"拉取订单",Scancode:"扫一扫",Msg_DownOrder_Message:"确认拉取这个订单?",Workorder_DemandDay:"交货日期:",Workorder_WorkHours:"工作时长:",Workorder_BomUsed:"BOM倍率:",Workorder_ItemAttr1:"产品分类:",Workorder_ItemAttr2:"客户名称:",Workorder_ItemAttr3:"图纸版本号:",Workorder_ItemAttr4:"Attr4:",Workorder_JobQty:"订单总数",Workorder_FinishedQty:"设备完成数",Workorder_PlannedQty:"计划数量",Workorder_AllFinishedQty:"累计完成数",Button_BeginChange:"开始切换",Button_EndChangeAndOutput:"结束切换并生产",Button_Report:"报工",Button_EndWorking:"换班",Button_ResumeProduction:"恢复生产",Button_OrderPause:"订单暂停",Button_Pushorder:"订单推送",Button_Clear:"清除",Button_Choose:"选择",Workorder_Inputfinishedqty:"完成数量:",Workorder_Inputfailqty:"不良数量:",Workorder_InputReportTime:"填报日期:",datetime_cancel:"取消",datetime_day:"日",datetime_hour:"时",datetime_minute:"分",datetime_select_date:"选择日期",datetime_current_date:"当前日期",datetime_select_time:"选择时间",datetime_current_time:"当前时间",datetime_month:"月",datetime_title:"选择日期时间",datetime_confirm:"确定",datetime_year:"年",Msg_OrderDetail_pause_unallowed:"已经是暂停状态,无需再次暂停.",Msg_OrderDetail_push_unallowed:"已经生产的订单不允许推送给其他设备.",Msg_OrderDetail_pause_failed:"订单暂停失败.",Msg_OrderDetail_push_failed:"订单推送失败.",Button_Unable:"不可操作"},pageTitle:{User_Setting:"用户设置",Change_PassWorld:"修改密码",Person_Message:"个人信息",Statistics_Center:"统计中心"},user:{cellphoneNumber:"手机号码:",userSettings:"用户设置",systemSettings:"系统设置",operationRecord:"用户操作记录",changePassword:"修改密码",signOut:"退出登录",cancelTitle:"确定退出",cancelText:"取消",confirmText:"确定"},changePass:{oldPass:"旧密码",oldPassHolder:"请填写旧密码",newPass:"新密码",newPassHolder:"请输入新密码",enterPass:"确认密码",enterPassHolder:"请再次输入新密码",finish:"完成"},userSetting:{name:"名字",phone:"电话",email:"邮箱",userGroup:"用户组",system:"系统名称"}}};n.lang=o},"73eb":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.lang=void 0;var o={message:{tabBar:{Nav_Report:"Report",Nav_Dash:"Statistical",Nav_User:"User"},publicText:{app_name:"RateFactory",app_title:" RateFactory mobile system",Login_UserName:" Input user name ",Login_UserPass:"Input password ",Login_Login:"Login",Login_Remember:"Remember",Login_userName_empty:"Empty user name is not allowed.",Login_userPass_empty:"Empty user name is not allowed.",Login_Version:"Version:",Login_Copyby:"Powered by Ratetec.inc",Login_forceOut:"Force out",Button_OK:"Force out",Button_Cancel:"Cancel",Login_noPermission:"This account is not have report permission.",Tab_unstart:"Unfinished",Tab_finished:"Finished",Search_hint:"Input the work order number to search",Workorder_Product:"Product:",Workorder_Operation:"Operation:",Workorder_Description:"Description:",User_message_title:"Exit",User_message_message:"Exit this app at now ?",Workorder_Planstartendtime:"PlanStartEndTime:",Nav_Back:"Back",Workorder_Title_OrderDetail:"Order detail",ChangeRes_Title_ResName:"Change resource",Workorder_Workid:"WorkID:",Workorder_ResName:"Resource name:",Workorder_Quantity:"Quantity:",Msg_DownOrder_Title:"Down this order",Msg_DownOrder_Message:"Are you sure to down this order?",Workorder_ItemAttr4:"Attr4:",Workorder_DemandDay:"DemandDay:",Workorder_WorkHours:"WorkHours:",Workorder_BomUsed:"BomUsed:",Workorder_ItemAttr1:"ProductGroup:",Workorder_ItemAttr2:"CustomName:",Workorder_ItemAttr3:"ImageVersion:",Workorder_JobQty:"Job",Workorder_FinishedQty:"Finished",Workorder_PlannedQty:"Planned",Workorder_AllFinishedQty:"AllFinished",Button_BeginChange:"Beigin change",Button_EndChangeAndOutput:"Output",Button_ResumeProduction:"Resume product",Button_Report:"Report",Button_EndWorking:"Get off work",Button_OrderPause:"Order pause",Button_Pushorder:"Order push",Button_Clear:"Clear",Button_Choose:"Choose",Workorder_Inputfinishedqty:"Finished quantity:",Workorder_Inputfailqty:"Failed quantity:",Workorder_InputReportTime:"Report time:",datetime_confirm:"OK",datetime_title:"Please Choose time",datetime_cancel:"Cancel",datetime_year:"Year",datetime_day:"Day",datetime_hour:"Hour",datetime_minute:"Minute",datetime_month:"Month",datetime_current_time:"Current time",datetime_select_time:"Choose date",datetime_current_date:"Current date",datetime_select_date:"Choose time",Msg_OrderDetail_pause_unallowed:"This order has paused.",Msg_OrderDetail_push_unallowed:"This order can not be push to other resource, because it has out put.",Msg_OrderDetail_pause_failed:"Pause the order failed.",Msg_OrderDetail_push_failed:"Push the order failed.",Button_Unable:"Unable"},pageTitle:{User_Setting:"User Setting",Change_PassWorld:"Change PassWorld",Person_Message:"Person Message"},user:{cellphoneNumber:"phone:",userSettings:"User Settings",systemSettings:"System Settings",operationRecord:"Operation Record",changePassword:"change Password",signOut:"signOut",cancelTitle:"Are you sure to exit",cancelText:"cancel",confirmText:"confirm"},changePass:{oldPass:"Old Password",oldPassHolder:"old password",newPass:"New Password",newPassHolder:"new password",enterPass:"Confirm Password",enterPassHolder:"new password",finish:"finish"},settingMessage:{},userSetting:{name:"Name",phone:"Mobile",email:"Email",userDescription:"User Description",userGroup:"User Group",system:"System"}}};n.lang=o},"7b09":function(e,n,t){"use strict";var o=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("e143")),i=o(t("2f62")),a=o(t("27df"));r.default.use(i.default);var s=new i.default.Store({state:{userInfo:{},isConnected:!0,stateResname:""},mutations:{WriteLog:function(e,n){(0,a.default)({url:"WriteLog",logmodel:e,logmessage:n})},HasLogin:function(e){"{}"==JSON.stringify(e.userInfo)&&uni.redirectTo({url:"../login/login"})}}}),c=s;n.default=c},"7b12":function(e,n,t){"use strict";var o=t("ee27"),r=o(t("f3f3"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("c855"),t("06b9");var i=o(t("e143")),a=o(t("1f57")),s=o(t("27df")),c=o(t("1b4a")),u=o(t("7b09"));i.default.use(c.default),i.default.config.productionTip=!1;var g=new c.default({locale:"zh-Hans-CN",messages:{"zh-Hans-CN":t("545a").lang,"en-US":t("73eb").lang,"zh-Hant-CN":t("97b5").lang}});i.default.prototype._i18n=g,i.default.prototype.$store=u.default,i.default.prototype.$HTTP=s.default,a.default.mpType="app";var l=new i.default((0,r.default)({store:u.default},a.default));l.$mount()},"97b5":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.lang=void 0;var o={message:{tabBar:{Nav_Report:"移動報工",Nav_Dash:"統計中心",Nav_User:"用戶操作"},publicText:{app_name:"移動報工",app_title:"RateFactory移動報工系統",Login_UserName:"輸入用戶名",Login_UserPass:"輸入密碼",Login_Login:"登録",Login_Remember:"記住我",Login_userName_empty:"用戶名不允許為空.",Login_userPass_empty:"用戶密碼不允許為空.",Login_Version:"當前版本號:",Login_Copyby:"深圳市瑞特科技有限公司 版權所有",Login_forceOut:"強行登陸",Button_OK:"確認",Button_Cancel:"取消",Login_noPermission:"當前賬號沒有報工權限.",Nav_Report:"移動報工",Nav_Dash:"統計中心",Nav_User:"用戶操作",Tab_unstart:"待生產",Tab_finished:"已完成",Search_hint:"輸入工單號碼或產品搜索",Workorder_Product:"產品:",Workorder_Operation:"工序:",Workorder_Description:"描述:",User_message_title:"確認退出",User_message_message:"確認退出當前賬號?",Workorder_Planstartendtime:"執行時間:",Nav_Back:"返回",Workorder_Title_OrderDetail:"訂單詳情",ChangeRes_Title_ResName:"切換設備",Workorder_Workid:"工單號碼:",Workorder_ResName:"設備名稱:",Workorder_Quantity:"數量:",Msg_DownOrder_Title:"拉取訂單",Scancode:"掃一掃",Msg_DownOrder_Message:"確認拉取這個訂單?",Workorder_ItemAttr4:"Attr4:",Workorder_DemandDay:"交貨日期:",Workorder_WorkHours:"工作時長:",Workorder_BomUsed:"BOM倍率:",Workorder_ItemAttr1:"產品分類:",Workorder_ItemAttr2:"客戶名稱:",Workorder_ItemAttr3:"圖紙版本號:",Workorder_JobQty:"訂單總數",Workorder_FinishedQty:"設備完成數",Workorder_PlannedQty:"計劃數量",Workorder_AllFinishedQty:"累計完成數",Button_BeginChange:"開始切換",Button_EndChangeAndOutput:"結束切換并生產",Button_Report:"報工",Button_EndWorking:"換班",Button_ResumeProduction:"恢復生產",Button_OrderPause:"訂單暫停",Button_Pushorder:"訂單推送",Button_Clear:"清除",Button_Choose:"選擇",Workorder_Inputfinishedqty:"完成數量:",Workorder_Inputfailqty:"不良數量:",Workorder_InputReportTime:"填報日期:",datetime_confirm:"確定",datetime_title:"選擇日期時間",datetime_cancel:"取消",datetime_year:"年",datetime_day:"日",datetime_hour:"時",datetime_minute:"分",datetime_month:"月",datetime_current_time:"當前時間",datetime_select_time:"選擇時間",datetime_current_date:"當前日期",datetime_select_date:"選擇日期",Msg_OrderDetail_pause_unallowed:"已經是暫停狀態,無需再次暫停.",Msg_OrderDetail_push_unallowed:"已經生產的訂單不允許推送到其他設備.",Msg_OrderDetail_pause_failed:"訂單暫停失敗.",Msg_OrderDetail_push_failed:"訂單推送失敗.",Button_Unable:"不可操作"},pageTitle:{User_Setting:"用戶設置",Change_PassWorld:"修改密碼",Person_Message:"個人信息",Statistics_Center:"統計中心"},user:{cellphoneNumber:"手機號碼:",userSettings:"用戶設置",systemSettings:"系統設置",operationRecord:"用戶操作記錄",changePassword:"修改密碼",signOut:"退出登錄",cancelTitle:"確定退出",cancelText:"取消",confirmText:"確定"},changePass:{oldPass:"舊密碼",oldPassHolder:"請輸入舊密碼",newPass:"新密碼",newPassHolder:"請輸入新密碼",enterPass:"確認密碼",enterPassHolder:"請再次輸入確認密碼",finish:"完成"},userSetting:{name:"名字",phone:"電話",email:"郵箱",userGroup:"用戶組",system:"系統名稱"}}};n.lang=o},b78b:function(e,n,t){"use strict";t.r(n);var o=t("cd28"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},c855:function(e,n,t){"use strict";(function(e){var n=t("ee27"),o=n(t("e143"));e["____D0A5451____"]=!0,delete e["____D0A5451____"],e.__uniConfig={tabBar:{color:"#7a7e83",selectedColor:"#006dcb",backgroundColor:"#fff",fontSize:"14px",height:"60px",list:[{pagePath:"pages/main/main",text:"移动报工",iconPath:"static/img/pc.png",selectedIconPath:"static/img/pc-active.png",redDot:!1,badge:""},{pagePath:"pages/statisticsCenter/statisticsCenter",text:"统计中心",iconPath:"static/img/statistics.png",selectedIconPath:"static/img/statistics-active.png",redDot:!1,badge:""},{pagePath:"pages/user/user",text:"用户操作",iconPath:"static/img/user_1.png",selectedIconPath:"static/img/user-active.png",redDot:!1,badge:""}],borderStyle:"black"},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#0faeff",backgroundColor:"#fbf9fe"}},e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:3e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-login-login",(function(e){var n={component:t.e("pages-login-login").then(function(){return e(t("2c12"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-main-main",(function(e){var n={component:t.e("pages-main-main").then(function(){return e(t("b0d5"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-user-user",(function(e){var n={component:t.e("pages-user-user").then(function(){return e(t("e162"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-workDetail-work",(function(e){var n={component:Promise.all([t.e("pages-userSetting-resList~pages-userSetting-settingMessage~pages-workDetail-work"),t.e("pages-userSetting-resList~pages-workDetail-work"),t.e("pages-workDetail-work")]).then(function(){return e(t("9d84"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-selectRes-resList",(function(e){var n={component:t.e("pages-selectRes-resList").then(function(){return e(t("4e6e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-workDetail-finishWork",(function(e){var n={component:t.e("pages-workDetail-finishWork").then(function(){return e(t("3498"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-userSetting-resList",(function(e){var n={component:Promise.all([t.e("pages-userSetting-resList~pages-userSetting-settingMessage~pages-workDetail-work"),t.e("pages-userSetting-resList~pages-workDetail-work"),t.e("pages-userSetting-resList")]).then(function(){return e(t("50c6"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-statisticsCenter-statisticsCenter",(function(e){var n={component:t.e("pages-statisticsCenter-statisticsCenter").then(function(){return e(t("13e0"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-downLoadWork-downLoadWork",(function(e){var n={component:t.e("pages-downLoadWork-downLoadWork").then(function(){return e(t("0132"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-userSetting-userSetting",(function(e){var n={component:t.e("pages-userSetting-userSetting").then(function(){return e(t("8e17"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-userSetting-logTab",(function(e){var n={component:t.e("pages-userSetting-logTab").then(function(){return e(t("54e4"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-userSetting-changePass",(function(e){var n={component:t.e("pages-userSetting-changePass").then(function(){return e(t("2cbd"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-userSetting-settingMessage",(function(e){var n={component:Promise.all([t.e("pages-userSetting-resList~pages-userSetting-settingMessage~pages-workDetail-work"),t.e("pages-userSetting-settingMessage")]).then(function(){return e(t("f6f7"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-main-tryPage",(function(e){var n={component:t.e("pages-main-tryPage").then(function(){return e(t("f848"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationStyle:"custom",navigationBarBackgroundColor:"#429af1"})},[e("pages-login-login",{slot:"page"})])}},meta:{id:1,name:"pages-login-login",isNVue:!1,pagePath:"pages/login/login",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/main/main",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTextStyle:"white",navigationStyle:"custom",titleNView:!1})},[e("pages-main-main",{slot:"page"})])}},meta:{id:2,name:"pages-main-main",isNVue:!1,pagePath:"pages/main/main",isQuit:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/user/user",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"用户操作",navigationBarTextStyle:"white",navigationStyle:"custom"})},[e("pages-user-user",{slot:"page"})])}},meta:{id:3,name:"pages-user-user",isNVue:!1,pagePath:"pages/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:0}},{path:"/pages/workDetail/work",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"订单详情"})},[e("pages-workDetail-work",{slot:"page"})])}},meta:{name:"pages-workDetail-work",isNVue:!1,pagePath:"pages/workDetail/work",windowTop:44}},{path:"/pages/selectRes/resList",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"设备列表"})},[e("pages-selectRes-resList",{slot:"page"})])}},meta:{name:"pages-selectRes-resList",isNVue:!1,pagePath:"pages/selectRes/resList",windowTop:44}},{path:"/pages/workDetail/finishWork",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"已完成订单详情"})},[e("pages-workDetail-finishWork",{slot:"page"})])}},meta:{name:"pages-workDetail-finishWork",isNVue:!1,pagePath:"pages/workDetail/finishWork",windowTop:44}},{path:"/pages/userSetting/resList",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"可报工的设备"})},[e("pages-userSetting-resList",{slot:"page"})])}},meta:{name:"pages-userSetting-resList",isNVue:!1,pagePath:"pages/userSetting/resList",windowTop:44}},{path:"/pages/statisticsCenter/statisticsCenter",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTextStyle:"white",navigationBarTitleText:"统计中心"})},[e("pages-statisticsCenter-statisticsCenter",{slot:"page"})])}},meta:{id:4,name:"pages-statisticsCenter-statisticsCenter",isNVue:!1,pagePath:"pages/statisticsCenter/statisticsCenter",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/downLoadWork/downLoadWork",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"可拉取的工单"})},[e("pages-downLoadWork-downLoadWork",{slot:"page"})])}},meta:{name:"pages-downLoadWork-downLoadWork",isNVue:!1,pagePath:"pages/downLoadWork/downLoadWork",windowTop:44}},{path:"/pages/userSetting/userSetting",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"个人信息"})},[e("pages-userSetting-userSetting",{slot:"page"})])}},meta:{name:"pages-userSetting-userSetting",isNVue:!1,pagePath:"pages/userSetting/userSetting",windowTop:44}},{path:"/pages/userSetting/logTab",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"用户操作记录"})},[e("pages-userSetting-logTab",{slot:"page"})])}},meta:{name:"pages-userSetting-logTab",isNVue:!1,pagePath:"pages/userSetting/logTab",windowTop:44}},{path:"/pages/userSetting/changePass",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"设置密码"})},[e("pages-userSetting-changePass",{slot:"page"})])}},meta:{name:"pages-userSetting-changePass",isNVue:!1,pagePath:"pages/userSetting/changePass",windowTop:44}},{path:"/pages/userSetting/settingMessage",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"设置用户信息",navigationStyle:"custom"})},[e("pages-userSetting-settingMessage",{slot:"page"})])}},meta:{name:"pages-userSetting-settingMessage",isNVue:!1,pagePath:"pages/userSetting/settingMessage",windowTop:0}},{path:"/pages/main/tryPage",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#006dcb",navigationBarTitleText:"测试",navigationStyle:"default"})},[e("pages-main-tryPage",{slot:"page"})])}},meta:{name:"pages-main-tryPage",isNVue:!1,pagePath:"pages/main/tryPage",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},cd28:function(e,n,t){"use strict";(function(e){t("c975"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){e.log("App Launch"),plus.screen.lockOrientation("portrait-primary");var n=uni.getSystemInfoSync();-1!=n.language.indexOf("en")?this.$i18n.locale="en-US":-1!=n.language.indexOf("Hant")?this.$i18n.locale="zh-Hant-CN":(n.language.indexOf("Hans"),this.$i18n.locale="zh-Hans-CN"),plus.runtime.getProperty(plus.runtime.appid,(function(n){e.log(n),e.log(plus.runtime.appid)}))},onShow:function(){e.log("App Show")},onHide:function(){e.log("App Hide")}};n.default=o}).call(this,t("5a52")["default"])},d484:function(e,n,t){"use strict";var o=t("23a1"),r=t.n(o);r.a}});