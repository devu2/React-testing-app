(this["webpackJsonptesting-app"]=this["webpackJsonptesting-app"]||[]).push([[0],{39:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(32),s=n.n(c),o=n(4),i=n(5),r=n(7),l=n(6),u=n(33),j=n(2),d=(n(39),n(0)),b=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("h2",{children:"Footer"})})}}]),n}(a.Component),p=n(13),h=n.n(p),m=n(16),O=n(17),f=n(14),v=n.n(f),x=(n(60),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.login=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,c=n.email,s=n.password,e.next=4,v.a.post("https://cite-plus-ba-before-mer-imkeud.herokuapp.com/api/v1/user/login",{email:c,password:s}).then((function(e){var t=e.data.user;window.localStorage.setItem("authToken",e.data.Token),window.localStorage.setItem("userData",JSON.stringify(t)),v.a.defaults.headers.common.Authorization=e.data.Token,window.location.replace("/notification")})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:"",fireErrors:"",userDetails:""},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"login",children:Object(d.jsx)("div",{className:"loginCont",children:Object(d.jsxs)("form",{action:"",className:"login100-form validate-form",onSubmit:this.login,children:[Object(d.jsx)("span",{className:"login100-form-logo",children:Object(d.jsx)("i",{className:"zmdi zmdi-landscape"})}),Object(d.jsx)("span",{className:"login100-form-title",children:"Login"}),Object(d.jsxs)("div",{className:"wrap-input100 validate-input","data-validate":"Enter username",children:[Object(d.jsx)("label",{htmlFor:"Password",children:"Email:"}),Object(d.jsx)("input",{className:"input100",type:"email",name:"email",onChange:this.handleChange}),Object(d.jsx)("span",{className:"focus-input100","data-placeholder":"\uf207"})]}),Object(d.jsxs)("div",{className:"wrap-input100 validate-input","data-validate":"Enter password",children:[Object(d.jsx)("label",{htmlFor:"Password",children:"password:"}),Object(d.jsx)("input",{className:"input100",type:"password",name:"password",onChange:this.handleChange}),Object(d.jsx)("span",{className:"focus-input100","data-placeholder":"\uf191"})]}),Object(d.jsx)("div",{className:"container-login100-form-btn",children:Object(d.jsx)("button",{className:"login100-form-btn",children:"Login"})})]})})})}}]),n}(a.Component)),g=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(b,{})]})}}]),n}(a.Component),w=n(20),k=(n(61),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).logOut=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("https://cite-plus-ba-before-mer-imkeud.herokuapp.com/api/v1/user/logout").then((function(e){console.log(e.status),localStorage.removeItem("authToken"),window.location.replace("/")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),a.state={user:{},password:"",fireErrors:"",person:{user_name:"Username"}},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(window.localStorage.getItem("authToken")||window.location.replace("/"),window.localStorage.getItem("authToken")){v.a.defaults.headers.common.Authorization=window.localStorage.getItem("authToken");var t=JSON.parse(window.localStorage.getItem("userData"));this.setState((function(){return{person:Object(w.a)(Object(w.a)({},e.state.person),t)}}))}}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"navigation",children:[Object(d.jsxs)("div",{className:"menu-icons",children:[Object(d.jsx)("div",{className:"bars"}),Object(d.jsx)("div",{className:"bars"}),Object(d.jsx)("div",{className:"bars"})]}),Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsxs)("span",{className:"login100-form-logo",children:[Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png",alt:"User ",srcSet:""}),Object(d.jsx)("span",{children:this.state.person.user_name})]}),Object(d.jsx)("div",{className:"logout",children:Object(d.jsx)("button",{onClick:this.logOut,children:"Logout"})})]})]})}}]),n}(a.Component)),N=(n(62),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"notification",children:Object(d.jsxs)("p",{children:["You are notified ",this.props.notificationCount," times"]})})})}}]),n}(a.Component)),y=(n(63),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).counts=function(){return e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"wallpaper",children:[Object(d.jsx)(N,{notificationCount:this.state.count}),Object(d.jsxs)("h1",{children:["Click notify me ",Object(d.jsx)("br",{}),"You have clicked: ",Object(d.jsx)("span",{children:this.state.count})," times"]}),Object(d.jsx)("button",{type:"submit",onClick:this.counts,children:"Notify Me "})]})}}]),n}(a.Component)),C=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{}),Object(d.jsx)(y,{}),Object(d.jsx)(b,{})]})}}]),n}(a.Component),S=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",exact:!0,component:g}),Object(d.jsx)(j.a,{path:"/notification",exact:!0,component:C})]})})})}}]),n}(a.Component);s.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3f43b39f.chunk.js.map