webpackJsonp([1],{"/OVM":function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__=__webpack_require__("Dd8w"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_1__module_user_userInfo__=__webpack_require__("jQzo"),__WEBPACK_IMPORTED_MODULE_2__module_user_userPassword__=__webpack_require__("tSKS"),__WEBPACK_IMPORTED_MODULE_3_vuex__=__webpack_require__("NYxO");__webpack_exports__.a={components:{userInfoForm:__WEBPACK_IMPORTED_MODULE_1__module_user_userInfo__.default,passwordForm:__WEBPACK_IMPORTED_MODULE_2__module_user_userPassword__.default},data:function(){return{isHidden:!1,isCollapse:!1,editableTabsValue:"/home",editableTabs:[{title:"首页",href:"/home"}],menuList:[]}},mounted:function(){var e=this;"/home"!==this.$route.path&&this.changeRouter("/home"),this.$request.getMenuUserTree().then(function(t){if(t.isOk)e.menuList=t.list;else{var s=e;s.showConfirm("系统过期,请重新登录!",function(){s.$router.push("/login")})}})},computed:{mode:function(){return this.$store.getters.config.isHorizontal?"horizontal":"vertical"},userInfo:function(){return this.$store.getters.userInfo},projectName:function(){return this.$store.getters.config.projectName}},methods:__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({},Object(__WEBPACK_IMPORTED_MODULE_3_vuex__.b)(["commitLoginOut","commitUserInfo"]),{refreshUserInfo:function(){this.commitUserInfo()},getRandomText:function getRandomText(){var word=eval('var word="\\u'+(Math.round(20901*Math.random())+19968).toString(16)+'"');return word},openUserInfoDialog:function(e){this.$refs.userInfoDialog.open(e)},openPasswordDialog:function(e){this.$refs.passwordDialog.open(e)},loginOut:function(){var e=this;e.showConfirm("确认退出吗?",function(){e.commitLoginOut().then(function(t){t.isOk&&(e.showToast("退出成功"),e.$router.push("/login"))})})},collapse:function(){this.isCollapse=!this.isCollapse,this.isCollapse?this.isHidden=!0:this.isHidden=!1},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},changeRouter:function(e){this.$router.push(e)},changeTab:function(e){this.$router.push(e.name)},addTab:function(e){this.editableTabs.map(function(e){return e.href}).contain(e.href)||this.editableTabs.push({title:e.name,href:e.href}),this.editableTabsValue=e.href},removeTab:function(e){var t=this,s=this.editableTabs,o=this.editableTabsValue;o===e&&s.forEach(function(r,i){if(r.href===e){var a=s[i+1]||s[i-1];a&&(o=a.href,t.changeRouter(a.href))}}),this.editableTabsValue=o,this.editableTabs=s.filter(function(t){return t.href!==e})}})}},"0Hkk":function(e,t){},HQHH:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("/OVM"),r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",[s("userInfo-form",{ref:"userInfoDialog",on:{reload:e.refreshUserInfo}}),e._v(" "),s("password-form",{ref:"passwordDialog",on:{reloadList:e.getList}}),e._v(" "),s("el-aside",{staticClass:"el-aside",class:[{"aside-hidden":e.isHidden,"aside-horizontal":"horizontal"==e.mode}]},[s("el-menu",{attrs:{mode:e.mode,"background-color":"#333","text-color":"#fff","active-text-color":"#409EFF","default-active":e.$route.path,collapse:e.isCollapse,router:""},on:{open:e.handleOpen,close:e.handleClose}},e._l(e.menuList,function(t,o){return t.children&&!t.href?s("el-submenu",{key:o,attrs:{index:o}},[s("template",{slot:"title"},[s("i",{class:t.icon}),s("span",{staticClass:"span",attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.children,function(t,o){return s("el-menu-item",{key:o,attrs:{index:t.href},on:{click:function(s){return e.addTab(t)}}},[s("span",{staticClass:"span",attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])})],2):s("el-menu-item",{staticClass:"el-submenu__title",attrs:{index:t.href},on:{click:function(s){return e.addTab(t)}}},[s("i",{class:t.icon}),s("span",{staticClass:"span",attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])}),1)],1),e._v(" "),s("el-container",{class:[{"body-horizontal":"horizontal"==e.mode}],staticStyle:{height:"100vh"}},[s("el-header",{staticClass:"el-header",class:[{"header-horizontal":"horizontal"==e.mode}]},["horizontal"!=e.mode?s("div",{staticStyle:{float:"left"}},[s("svg",{staticClass:"icon hamburger",class:{"is-active":!e.isHidden},attrs:{t:"1637039383052",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3444",width:"200",height:"200"},on:{click:e.collapse}},[s("path",{attrs:{d:"M935.27 12.34H89.78c-41.38 0-75.23 33.85-75.23 75.23S48.4 162.8 89.78 162.8h845.49c41.38 0 75.23-33.85 75.23-75.23 0-41.37-33.85-75.23-75.23-75.23zM935.27 295.17H496.64c-41.38 0-75.23 33.85-75.23 75.23s33.85 75.23 75.23 75.23h438.63c41.38 0 75.23-33.85 75.23-75.23 0-41.37-33.85-75.23-75.23-75.23zM935.27 578.27H496.64c-41.38 0-75.23 33.85-75.23 75.23s33.85 75.23 75.23 75.23h438.63c41.38 0 75.23-33.85 75.23-75.23 0-41.37-33.85-75.23-75.23-75.23zM935.27 861.64H89.78c-41.38 0-75.23 33.85-75.23 75.23s33.85 75.23 75.23 75.23h845.49c41.38 0 75.23-33.85 75.23-75.23 0-41.37-33.85-75.23-75.23-75.23zM26.95 544.85l235.2 176.67c25.2 18.93 61.19 0.95 61.19-30.57V332.96c0-31.74-36.44-49.65-61.57-30.28L26.57 484.01c-20.01 15.42-19.82 45.67 0.38 60.84z","p-id":"3445",fill:"#ffffff"}})]),e._v(" "),s("span",{staticClass:"project-name"},[e._v(e._s(e.projectName))])]):e._e(),e._v(" "),s("el-dropdown",[s("span",{staticClass:"el-dropdown-link pointer"},[s("el-image",{staticClass:"head-img",attrs:{src:e.formatUrl(e.userInfo.photo)}}),e._v(" "),s("span",{staticStyle:{color:"white","font-weight":"bold","font-size":"medium"}},[e._v(e._s(e.userInfo.loginName))]),e._v(" "),s("i",{staticClass:"el-icon-arrow-down",staticStyle:{color:"white"}})],1),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{nativeOn:{click:function(t){return e.openUserInfoDialog({title:"用户信息",pageFrom:"edit",id:e.userInfo.id})}}},[e._v("用户信息")]),e._v(" "),s("el-dropdown-item",{nativeOn:{click:function(t){return e.openPasswordDialog({title:"修改密码"})}}},[e._v("修改密码")]),e._v(" "),s("el-dropdown-item",{nativeOn:{click:function(t){return e.loginOut.apply(null,arguments)}}},[e._v("退出登录")])],1)],1),e._v(" "),s("el-dropdown",[e._l(e.userInfo.roleList,function(t){return s("span",{staticClass:"pointer",staticStyle:{color:"ghostwhite"}},[e._v("【"+e._s(t.roleName)+"】")])}),e._v(" "),e.userInfo.office?s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[e._v("所属机构:【"+e._s(e.userInfo.office.name)+"】")])],1):e._e()],2)],1),e._v(" "),s("el-tabs",{staticStyle:{background:"white",border:"none"},attrs:{type:"border-card",closable:""},on:{"tab-click":e.changeTab,"tab-remove":e.removeTab},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,function(e){return s("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.href}})}),1),e._v(" "),s("el-main",{staticStyle:{background:"white"}},[s("router-view")],1),e._v(" "),s("el-footer",{staticClass:"copyright"},[e._v("Copyright © 2022 by "+e._s(e.projectName))])],1)],1)},staticRenderFns:[]};var i=function(e){s("VdtJ")},a=s("VU/8")(o.a,r,!1,i,"data-v-d25d7ede",null);t.default=a.exports},VdtJ:function(e,t){},jQzo:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("Dd8w"),r=s.n(o),i=s("l4me"),a=s("NYxO"),l={components:{suiPhoto:i.default},name:"sysUserForm",data:function(){return{dialog:{title:"",open:!1,disabled:!1},sysUser:{photo:"",loginName:"",userName:"",userNo:"",email:"",phone:"",officeId:""},rules:{photo:[{required:!0,message:"请输入用户头像",trigger:"blur"}],loginName:[{required:!0,message:"请输入登录名",trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱",trigger:["blur","change"]}],phone:[{required:!1,validator:this.$validator.phone}]}}},computed:{userInfo:function(){return this.$store.getters.userInfo}},methods:r()({},Object(a.b)(["commitUpdateUserInfo"]),{open:function(e){this.sysUser=this.userInfo,this.showDialog(e.title,!1)},cancel:function(){this.dialog.open=!1},submitForm:function(){var e=this;e.$refs.sysUserForm.validate(function(t){t&&e.commitUpdateUserInfo(e.sysUser).then(function(t){t.isOk&&(e.dialog.open=!1,e.showSuccess("提交成功"),e.$emit("reload"))})})},showDialog:function(e,t){this.resetForm(this.$refs.sysUserForm),this.dialog.open=!0,this.dialog.title=e,this.dialog.disabled=t}})},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"body"},[s("el-dialog",{attrs:{width:"600px",title:e.dialog.title,"close-on-click-modal":!1,visible:e.dialog.open},on:{"update:visible":function(t){return e.$set(e.dialog,"open",t)}}},[s("el-form",{ref:"sysUserForm",attrs:{model:e.sysUser,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"用户头像",prop:"loginName"}},[s("sui-photo",{attrs:{type:"user",disabled:e.dialog.disabled,url:e.sysUser.photo},model:{value:e.sysUser.photo,callback:function(t){e.$set(e.sysUser,"photo",t)},expression:"sysUser.photo"}},[e._v("11")])],1),e._v(" "),s("el-form-item",{attrs:{label:"登录名",prop:"loginName"}},[s("el-input",{staticStyle:{width:"217px"},attrs:{placeholder:"请输入登录名",disabled:!0},model:{value:e.sysUser.loginName,callback:function(t){e.$set(e.sysUser,"loginName",t)},expression:"sysUser.loginName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"姓名",prop:"userName"}},[s("el-input",{staticStyle:{width:"217px"},attrs:{placeholder:"请输入姓名",disabled:e.dialog.disabled},model:{value:e.sysUser.userName,callback:function(t){e.$set(e.sysUser,"userName",t)},expression:"sysUser.userName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[s("el-input",{staticStyle:{width:"217px"},attrs:{placeholder:"请输入手机号",disabled:e.dialog.disabled},model:{value:e.sysUser.phone,callback:function(t){e.$set(e.sysUser,"phone",t)},expression:"sysUser.phone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{staticStyle:{width:"217px"},attrs:{placeholder:"请输入邮箱",disabled:e.dialog.disabled},model:{value:e.sysUser.email,callback:function(t){e.$set(e.sysUser,"email",t)},expression:"sysUser.email"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取 消")]),e._v(" "),e.dialog.disabled?e._e():s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("保 存")])],1)],1)],1)},staticRenderFns:[]};var d=s("VU/8")(l,n,!1,function(e){s("kYqB")},"data-v-270af8ea",null);t.default=d.exports},kYqB:function(e,t){},tSKS:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"body"},[s("el-dialog",{attrs:{width:"600px",title:e.dialog.title,"close-on-click-modal":!1,visible:e.dialog.open},on:{"update:visible":function(t){return e.$set(e.dialog,"open",t)}}},[s("el-form",{ref:"passwordForm",attrs:{model:e.user,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"登录名",prop:"loginName"}},[s("el-input",{staticStyle:{width:"217px"},attrs:{disabled:"",placeholder:"请输入登录名"},model:{value:e.user.loginName,callback:function(t){e.$set(e.user,"loginName",t)},expression:"user.loginName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"原始密码",prop:"oldPassword"}},[s("el-input",{staticStyle:{width:"217px"},attrs:{type:"password",placeholder:"请输入原始密码",disabled:e.dialog.disabled},model:{value:e.user.oldPassword,callback:function(t){e.$set(e.user,"oldPassword",t)},expression:"user.oldPassword"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[s("el-input",{staticStyle:{width:"217px"},attrs:{type:"password",placeholder:"请输入新密码",disabled:e.dialog.disabled},model:{value:e.user.newPassword,callback:function(t){e.$set(e.user,"newPassword",t)},expression:"user.newPassword"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"prePassword"}},[s("el-input",{staticStyle:{width:"217px"},attrs:{type:"password",placeholder:"请输入确认密码",disabled:e.dialog.disabled},model:{value:e.user.prePassword,callback:function(t){e.$set(e.user,"prePassword",t)},expression:"user.prePassword"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取 消")]),e._v(" "),e.dialog.disabled?e._e():s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("保 存")])],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")({name:"passwordForm",data:function(){return{roleList:[],checkRoleList:["普通用户"],dialog:{title:"",open:!1,disabled:!1},user:{loginName:this.$store.getters.userInfo.loginName,oldPassword:"",newPassword:"",prePassword:""},rules:{oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"}],prePassword:[{required:!0,message:"请输入确认密码",trigger:"blur"}]}}},mounted:function(){},methods:{open:function(e){this.showDialog(e.title,!1)},cancel:function(){this.dialog.open=!1},submitForm:function(){var e=this,t=this;t.$refs.passwordForm.validate(function(s){if(s){if(e.user.newPassword!=e.user.prePassword)return void e.showWarn("两次密码不一致");t.$request.doPost("/admin/sysUser/modifyPsd",t.user).then(function(s){s.isOk?(t.dialog.open=!1,t.showSuccess(s.info),t.$emit("reloadList")):e.showWarn(s.info)})}})},showDialog:function(e,t){this.resetForm(this.$refs.sysUserForm),this.dialog.open=!0,this.dialog.title=e,this.dialog.disabled=t}}},o,!1,function(e){s("0Hkk")},"data-v-9025e492",null);t.default=r.exports}});
//# sourceMappingURL=1.695f2534b6d7efb984ac.js.map