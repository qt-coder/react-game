(this["webpackJsonpstartup-game"]=this["webpackJsonpstartup-game"]||[]).push([[0],{49:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n(0),s=n.n(o),a=n(9),r=n.n(a),i=n(29),l=n(92),j=n(91),d=n(83),h=n(86),u=n(90),b=n(88),p=n(89),m=Object(d.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function x(e){var t=m();return Object(c.jsxs)(h.a,{className:t.root,style:{backgroundColor:"#a3e3f0"},children:[Object(c.jsxs)(b.a,{children:[Object(c.jsx)(p.a,{variant:"h5",component:"h2",children:e.type}),Object(c.jsxs)(p.a,{className:t.pos,color:"textSecondary",children:["Cost: $",e.cost]}),Object(c.jsxs)(p.a,{className:t.pos,color:"textSecondary",children:["Gain: $",e.gain,"/s"]}),Object(c.jsxs)(p.a,{className:t.pos,color:"textSecondary",children:["Current Amount: ",e.webDevAmount]})]}),Object(c.jsx)(u.a,{children:Object(c.jsx)(l.a,{size:"small",onClick:function(){e.points>=e.cost?(e.setWebDevAmount(e.webDevAmount+1),e.setPoints(e.points-e.cost)):alert("You don't have anough money to hire a ".concat(e.type))},variant:"contained",color:"secondary",children:"Hire"})})]})}var O=function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(o.useState)("01"),r=Object(i.a)(a,2),d=r[0],h=r[1],u=Object(o.useState)(0),b=Object(i.a)(u,2),p=b[0],m=b[1];return Object(o.useEffect)((function(){return s(n+p),function(){}})),0===n?Object(c.jsxs)("div",{onKeyDown:function(){return s(n+5)},className:"main",style:{textAlign:"center"},children:[Object(c.jsx)("h1",{children:"STARTUP"}),Object(c.jsx)("h2",{children:"Type in the prompt to start coding and making money! Hire employees to help you profit!"}),Object(c.jsxs)("h1",{children:["Cash: ",n]}),Object(c.jsx)(l.a,{onClick:function(){return s(n+5)},variant:"contained",color:"primary",children:"Start Game"})]}):Object(c.jsxs)("div",{className:"main",style:{textAlign:"center"},children:[Object(c.jsx)("h1",{children:"STARTUP"}),Object(c.jsxs)("h1",{children:["Cash: $",Math.round(n)]}),Object(c.jsxs)("h1",{children:["Cash per second: $",Math.round(100*p)]}),Object(c.jsx)(j.a,{id:"outlined-password-input",label:"Code",type:"text",variant:"outlined",rows:"5",cols:"2000",multiline:!0,onKeyDown:function(){s(n+55),h(d+"01")},value:d,onChange:function(){},style:{width:"300px",height:"150px"}}),Object(c.jsx)(x,{type:"Web Developer",cost:"10000",gain:"100",points:n,setPoints:s,webDevAmount:p,setWebDevAmount:m})]})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.4f107d72.chunk.js.map