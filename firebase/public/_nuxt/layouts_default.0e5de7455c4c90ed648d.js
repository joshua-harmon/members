webpackJsonp([6],{Ma2J:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("NLV/"),n=e("STrE"),i=!1;var o=function(t){i||e("q8VZ")},r=e("VU/8")(s.a,n.a,!1,o,null,null);r.options.__file="layouts\\default.vue",a.default=r.exports},"NLV/":function(t,a,e){"use strict";var s=e("kxiW"),n=e.n(s);a.a={components:{},data:function(){return{clipped:!0,title:"Gym",userEmail:null,ConfirmModal:!1,MemberName:null}},created:function(){this.userState()},methods:{logoutUser:function(){this.ConfirmModal=!0},userState:function(){var t=this;n.a.auth().onAuthStateChanged(function(a){t.userEmail=a?n.a.auth().currentUser.email:null})},ConfirmModalLogout:function(){this.ConfirmModal=!1,n.a.auth().signOut(),this.$router.push({name:"index"}),this.userState(),this.$bus.$emit("logged")}}}},STrE:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-toolbar",{staticClass:"primary",attrs:{fixed:"",app:"","clipped-left":t.clipped}},[e("v-icon",{staticClass:"accent--text hidden-xs-only",attrs:{left:""}},[t._v("fitness_center")]),e("v-toolbar-title",{staticClass:"accent--text hidden-xs-only",domProps:{textContent:t._s(t.title)}}),t.userEmail?t._e():e("v-toolbar-title",{staticClass:"accent--text hidden-sm-and-up",domProps:{textContent:t._s(t.title)}}),e("v-toolbar-title",{staticClass:"accent--text hidden-xs-only"},[e("v-btn",{staticClass:"accent--text hidden-sm-and-down",attrs:{flat:"",href:"https://www.osamamohamed.com",target:"_blank"}},[t._v("\n        Developed by: OSAMA MOHAMED\n      ")])],1),e("v-spacer"),t.userEmail?e("v-btn",{staticClass:"accent--text hidden-xs-only",attrs:{flat:"",to:"/",exact:""}},[e("v-icon",{attrs:{left:""}},[t._v("fas fa-users")]),t._v("\n      All Members\n    ")],1):t._e(),t.userEmail?e("v-btn",{staticClass:"accent--text hidden-xs-only",attrs:{flat:"",to:"/new-member",exact:""}},[e("v-icon",{attrs:{left:""}},[t._v("fas fa-user-plus")]),t._v("\n      New Member\n    ")],1):t._e(),t.userEmail?e("v-btn",{staticClass:"accent--text hidden-xs-only",attrs:{flat:"",to:"/prices",exact:""}},[e("v-icon",{attrs:{left:""}},[t._v("attach_money")]),t._v("\n      Prices\n    ")],1):t._e(),t.userEmail?e("v-btn",{staticClass:"accent--text b-small",attrs:{flat:"",to:"/",exact:""}},[e("v-icon",[t._v("fas fa-users")])],1):t._e(),t.userEmail?e("v-btn",{staticClass:"accent--text b-small",attrs:{flat:"",to:"/new-member",exact:""}},[e("v-icon",[t._v("fas fa-user-plus")])],1):t._e(),e("v-toolbar-title",{staticClass:"accent--text hidden-sm-and-down"},[t._v(t._s(t.userEmail))]),t.userEmail?e("v-btn",{staticClass:"accent--text",attrs:{flat:"",exact:""},on:{click:function(a){t.logoutUser()}}},[t._v("\n      Log out\n      "),e("v-icon",{attrs:{right:""}},[t._v("fas fa-sign-out")])],1):t._e(),t.userEmail?t._e():e("v-btn",{staticClass:"accent--text",attrs:{flat:"",to:"/",exact:""}},[e("v-icon",{attrs:{left:""}},[t._v("fas fa-home")]),t._v("\n      Home\n    ")],1),t.userEmail?t._e():e("v-btn",{staticClass:"accent--text",attrs:{flat:"",to:"/pricing",exact:""}},[e("v-icon",{attrs:{left:""}},[t._v("fas fa-usd")]),t._v("\n      Pricing\n    ")],1),t.userEmail?t._e():e("v-btn",{staticClass:"accent--text",attrs:{flat:"",to:"/login",exact:""},on:{click:function(a){t.logoutUser()}}},[e("v-icon",{attrs:{left:""}},[t._v("fas fa-sign-in")]),t._v("\n      Log in\n    ")],1)],1),e("v-content",[e("v-container",[e("nuxt")],1)],1),e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.ConfirmModal,callback:function(a){t.ConfirmModal=a},expression:"ConfirmModal"}},[e("v-card",[e("v-card-text",[e("h3",[e("span",{staticClass:"primary--text"},[t._v(t._s(t.MemberName))]),t._v("\n            logged out successfully!\n          ")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"primary--text",attrs:{flat:""},nativeOn:{click:function(a){t.ConfirmModalLogout()}}},[e("v-icon",{attrs:{left:""}},[t._v("check")]),t._v("\n            OK\n          ")],1)],1)],1)],1)],1)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};a.a=n},awNh:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}.application{background-color:#f2f2f2!important}i.fas{margin-bottom:5px}div.btn__content>i.fas,div.input-group__input>i.fas{font-size:20px!important}.picker--date__table .btn.btn--active{color:#1e88e5!important}@media (max-width:576px){.picker.picker--date{max-width:107%}}@media (min-width:600px){.b-small{display:none}}",""])},q8VZ:function(t,a,e){var s=e("awNh");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("fa2be10e",s,!1,{sourceMap:!1})}});