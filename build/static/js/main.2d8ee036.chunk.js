(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a,o,r=t(0),c=t.n(r),s=t(13),i=t.n(s),l=t(17),b=t(2),d=t(3),u=t(4),m=t(8),h=t(7),p=t(5),j=t(6),f=(j.a.div(a||(a=Object(p.a)(["\n  .contacts-list {\n    /* list-style: none; */\n  }\n"]))),j.a.form(o||(o=Object(p.a)(["\n  width: 250px;\n  border: 1px solid blue;\n  .phonebook-name {\n    margin-left: 10px;\n    font-size: 22px;\n    font-weight: bold;\n  }\n\n  .input {\n    width: 150px;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    border: 1px solid blue;\n    :hover {\n      border-color: red;\n    }\n    :focus {\n      border-color: red;\n      border: 3px solid red;\n    }\n  }\n\n  .add-contact-btn {\n    display: block;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    border-radius: 18px;\n    color: blue;\n    border-color: blue;\n    background-color: yellow;\n    :hover {\n      color: red;\n      border-color: red;\n    }\n    :focus {\n      border-color: yellow;\n      border: 3px solid yellow;\n    }\n  }\n"])))),O=t(30),x=t(1),v=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={contacts:[],name:"",id:Object(O.a)()},e.handleNameChange=function(n){var t=n.currentTarget,a=t.name,o=t.value;e.setState(Object(b.a)({},a,o))},e.handleSubmit=function(n){n.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:""})},e}return Object(u.a)(t,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"phonebook-container",children:[Object(x.jsx)("h2",{className:"phonebook-title",children:"Phonebook"}),Object(x.jsxs)(f,{action:"",className:"form-input",onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{className:"phonebook-name",children:["Name",Object(x.jsx)("br",{}),Object(x.jsx)("input",{onChange:this.handleNameChange,value:this.state.name,className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"phonebook",required:!0,id:this.id})]}),Object(x.jsx)("button",{type:"submit",className:"add-contact-btn",children:"Add contact"})]})]})}}]),t}(r.Component),g=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={contacts:[],name:"",id:Object(O.a)()},e.handleNameChange=function(n){var t=n.currentTarget,a=t.name,o=t.value;e.setState(Object(b.a)({},a,o))},e.handleSubmit=function(n){n.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:""})},e.formSubmithandler=function(n){var t=n.name;console.log(t),e.setState((function(e){return{contacts:[t].concat(Object(l.a)(e.contacts))}}))},e}return Object(u.a)(t,[{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v,{onSubmit:this.formSubmithandler})})}}]),t}(r.Component);t(28);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.2d8ee036.chunk.js.map