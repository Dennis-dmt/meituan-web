webpackJsonp([2],{c2lw:function(r,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("gyMJ");var t={data:function(){var r=this;return{registerForm:{userName:"",password:"",rePassword:""},strengthClass:"",rules:{userName:[{validator:function(r,e,s){console.log(e),""===e?s(new Error("请输入用户名")):e.length<4||e.length>16?s(new Error("用户名必须为4-16位的字母数字下划线组成")):s()},trigger:"blur"}],pass:[{validator:function(e,s,t){""===s?t(new Error("请输入密码")):(""!==r.registerForm.rePassword&&r.$refs.registerForm.validateField("rePassword"),t())},trigger:"blur"}],rePassword:[{validator:function(e,s,t){""===s?t(new Error("请再次输入密码")):s!==r.registerForm.password?t(new Error("两次输入密码不一致!")):t()},trigger:"blur"}]}}},methods:{submitForm:function(r){var e=this;this.$refs[r].validate(function(r){if(console.log(e.registerForm),!r)return console.log("error submit!!"),!1;e.$api.register({params:e.registerForm}).then(function(r){console.log(1111,r),"success"==r.status?(e.$router.push({name:"login"}),e.$store.commit("setUserName",e.registerForm.userName)):alert(r.msg)})})},input:function(){var r=this.registerForm.password.match(/_/g)&&this.registerForm.password.match(/(\w)+/g)&&this.registerForm.password.match(/(\d)+/g);this.registerForm.password.length>20||this.registerForm.password.length>6&&r?this.strengthClass="strong":this.registerForm.password.length<6?this.strengthClass="week":this.registerForm.password?this.strengthClass="normal":this.strengthClass=""}}},o={render:function(){var r=this,e=r.$createElement,s=r._self._c||e;return s("div",{staticClass:"page-register"},[s("div",{staticClass:"header"},[s("header",[s("router-link",{staticClass:"site-logo",attrs:{to:{name:"index"}}}),r._v(" "),s("div",{staticClass:"login"},[s("span",[r._v("已有美团账号")]),r._v(" "),s("router-link",{attrs:{to:{name:"login"}}},[r._v("登录")])],1)],1)]),r._v(" "),s("div",{staticClass:"content"},[s("el-form",{ref:"registerForm",staticClass:"demo-ruleForm",attrs:{model:r.registerForm,"status-icon":"",rules:r.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[s("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:r.registerForm.userName,callback:function(e){r.$set(r.registerForm,"userName",e)},expression:"registerForm.userName"}})],1),r._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},on:{input:r.input},model:{value:r.registerForm.password,callback:function(e){r.$set(r.registerForm,"password",e)},expression:"registerForm.password"}}),r._v(" "),s("div",{staticClass:"pw-strength"},[s("div",{class:["bar",r.strengthClass]}),r._v(" "),s("div",{staticClass:"letter"},[s("span",[r._v("弱")]),r._v(" "),s("span",[r._v("中")]),r._v(" "),s("span",[r._v("强")])])])],1),r._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"rePassword"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:r.registerForm.rePassword,callback:function(e){r.$set(r.registerForm,"rePassword",e)},expression:"registerForm.rePassword"}})],1),r._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return r.submitForm("registerForm")}}},[r._v("提交")])],1)],1)],1),r._v(" "),s("footer")])},staticRenderFns:[]};var a=s("VU/8")(t,o,!1,function(r){s("pvUm")},null,null);e.default=a.exports},pvUm:function(r,e){}});
//# sourceMappingURL=2.d4587bdb510f986d604d.js.map