(this["webpackJsonpproject-x"]=this["webpackJsonpproject-x"]||[]).push([[0],{189:function(e,t,c){},190:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(57),a=c.n(n),r=(c(127),c(12)),l=c(17),i=c(23),o=c(116),d=(Object(o.a)({apiKey:"AIzaSyDjaVXf5f-O7Ao46me8U5v7PE4s98aa3bU",authDomain:"project-x-1d9e6.firebaseapp.com",projectId:"project-x-1d9e6",storageBucket:"project-x-1d9e6.appspot.com",messagingSenderId:"888412838530",appId:"1:888412838530:web:7f38fb770995e8f280f29b"}),c(11)),j=c(18),b=c.n(j),u=c.p+"static/media/login.753498d3.svg",m=c(41),x=c.n(m),h=c(30),f=c(59),O=Object(f.b)({name:"authentication",initialState:{value:{email:"",isAuthenticated:""}},reducers:{LOGIN_ACTION:function(e,t){e.value=t.payload},LOGOUT_ACTION:function(e,t){e.value=t.payload}}}),p=O.actions,g=p.LOGIN_ACTION,v=p.LOGOUT_ACTION,w=O.reducer,y=c(4),N=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),o=Object(r.a)(a,2),j=o[0],m=o[1],f=Object(s.useState)(!1),O=Object(r.a)(f,2),p=O[0],v=O[1],w=Object(s.useState)(!1),N=Object(r.a)(w,2),k=N[0],C=N[1],S=Object(d.f)(),T=Object(h.b)(),L=Object(h.c)((function(e){return e.authenticationReducer.value}));Object(s.useEffect)((function(){console.log("isAuthenticated: "+p),console.log(L)}),[p,L]);return Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center",children:Object(y.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(y.jsx)("div",{className:"shadow bg-white w-full rounded-lg divide-y divide-gray-200",children:Object(y.jsxs)("div",{className:"px-10 py-10",children:[Object(y.jsx)("div",{className:"flex justify-center",children:Object(y.jsx)("img",{src:u,alt:"login",className:"mb-7 w-3/5"})}),Object(y.jsx)("h1",{className:"font-semibold text-center text-lg mb-3",children:"Login to your account"}),Object(y.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Email"}),Object(y.jsx)("input",{className:"border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full",type:"email",name:"email",value:c,onChange:function(e){return n(e.target.value)}}),Object(y.jsxs)("div",{className:"md:grid grid-cols-2 gap-x-32",children:[Object(y.jsx)("div",{children:Object(y.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Password"})}),Object(y.jsx)("div",{children:Object(y.jsx)("label",{className:"text-sm text-green-600",children:Object(y.jsx)(l.b,{to:"/forgetpassword",children:" Forgot Password?"})})})]}),Object(y.jsx)("input",{type:"password",name:"password",value:j,onChange:function(e){return m(e.target.value)},className:"border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"}),Object(y.jsx)("button",{onClick:function(){C(!0),setTimeout((function(){var e=Object(i.b)();Object(i.e)(e,c,j).then((function(e){var t=e.user;T(g({email:t.email,isAuthenticated:!0})),!0===t.emailVerified?(v(!0),b.a.fire("","Signed in successful","success"),S.push("/landingpage")):b.a.fire({text:"Please verify your email before attempting to login",icon:"warning",confirmButtonText:"OK"})})).catch((function(e){var t=e.message;console.log(t),b.a.fire({title:t,text:"Please try again",icon:"error",confirmButtonText:"OK"})}),C(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===k?Object(y.jsx)(x.a,{size:7}):Object(y.jsx)("span",{className:"inline-block",children:"Login"})}),Object(y.jsxs)("p",{className:"text-center pt-7 text-gray-600",children:["Don't have an account? Register"," ",Object(y.jsx)(l.b,{to:"/signup",children:Object(y.jsx)("span",{className:"hover:text-green-400 font-bold",children:"here"})})]})]})})})})})},k=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"mt-3",children:Object(y.jsx)("span",{className:"font-bold",children:"English"})}),Object(y.jsxs)("div",{className:"grid grid-cols-3 gap-4 mx-10 my-14",children:[Object(y.jsx)("div",{className:"shadow bg-white rounded-lg ml-4",children:"a"}),Object(y.jsx)("div",{className:"shadow bg-white w-full rounded-lg  ml-4",children:"b"}),Object(y.jsx)("div",{className:"shadow bg-white w-full rounded-lg ml-4",children:"c"})]})]})},C=c(121),S=function(e){var t=e.emailData,c=Object(d.f)(),s=Object(h.b)();return Object(y.jsx)("div",{children:Object(y.jsx)("ul",{className:"flex flex-col overflow-hidden",children:Object(y.jsxs)("nav",{className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white rounded-r-3xl",children:[Object(y.jsx)("div",{className:"flex justify-center m-8",children:Object(y.jsx)(C.a,{name:t,size:"100",round:!0})}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)("span",{children:t})}),Object(y.jsxs)("div",{className:"m-2 cursor-pointer",children:[Object(y.jsx)("ul",{onClick:function(){return alert("Under Construction")},children:Object(y.jsx)("li",{className:"text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg",children:Object(y.jsx)("span",{children:"English"})})}),Object(y.jsx)("ul",{onClick:function(){return alert("Under Construction")},children:Object(y.jsx)("li",{className:"text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg",children:Object(y.jsx)("span",{children:"Math"})})}),Object(y.jsx)("ul",{onClick:function(){return alert("Under Construction")},children:Object(y.jsx)("li",{className:"text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg",children:Object(y.jsx)("span",{children:"Science"})})}),Object(y.jsx)("button",{onClick:function(){var e=Object(i.b)();Object(i.f)(e).then((function(){b.a.fire({title:"Logout?",text:"You will be signed out",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!0}).then((function(e){e.isConfirmed?(b.a.fire("","Logout successful","success"),s(v({email:t,isAuthenticated:!1,message:"User signed out"})),c.push("/")):e.dismiss===b.a.DismissReason.cancel&&b.a.fire("Welcome back","","success")}))})).catch((function(e){}))},type:"button",className:"bg-gradient-to-r from-blue-600 to-blue-500  hover:from-red-500 hover:to-yellow-500 text-white w-full rounded-lg  text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mt-12 ",children:Object(y.jsx)("li",{className:"text-center py-3 ",children:Object(y.jsx)("span",{children:"Log Out"})})})]})]})})})},T=function(){var e=Object(d.f)(),t=Object(h.c)((function(e){return e.authenticationReducer.value}));return console.log(t),Object(s.useEffect)((function(){0==t.isAuthenticated&&e.push("/")})),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"flex flex-row flex-wrap",children:[Object(y.jsx)("aside",{className:"w-full sm:w-1/4 md:w-2/6 xl:w-1/6 bg-gray-200",children:Object(y.jsx)(S,{emailData:t.email})}),Object(y.jsx)("main",{role:"main",className:"w-full sm:w-3/4 md:w-4/6 xl:w-5/6 text-center bg-gray-200",children:Object(y.jsx)(k,{})})]})})},L=c.p+"static/media/signup.e9633564.svg",B=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),o=Object(r.a)(a,2),j=o[0],u=o[1],m=Object(s.useState)(!1),h=Object(r.a)(m,2),f=h[0],O=h[1],p=Object(d.f)();return Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:"min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center overflow-y-hidden",children:Object(y.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(y.jsx)("div",{className:"bg-white shadow w-full rounded-lg divide-y divide-gray-200",children:Object(y.jsxs)("div",{className:"px-10 py-10",children:[Object(y.jsxs)(l.b,{to:"/",children:[" ",Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(y.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})]}),Object(y.jsx)("div",{className:"flex justify-center",children:Object(y.jsx)("img",{src:L,alt:"sign up",className:"mb-3 w-3/5"})}),Object(y.jsx)("h1",{className:"font-semibold text-center text-lg mb-3",children:"Sign up for an account"}),Object(y.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Email"}),Object(y.jsx)("input",{className:"border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full",type:"email",name:"email",value:c,onChange:function(e){return n(e.target.value)}}),Object(y.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Password"}),Object(y.jsx)("input",{type:"password",name:"password",value:j,onChange:function(e){return u(e.target.value)},className:"border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"}),Object(y.jsx)("button",{onClick:function(){O(!0),setTimeout((function(){var e=Object(i.b)();Object(i.a)(e,c,j).then((function(){Object(i.c)(e.currentUser).then((function(){b.a.fire({text:"Click on the link in your email to verify your account.",icon:"info",confirmButtonText:"OK"},p.push("/"))}))})).catch((function(e){var t=e.message;console.log(t),b.a.fire({title:t,text:"Please try again",icon:"error",confirmButtonText:"OK"})}),O(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===f?Object(y.jsx)(x.a,{size:7}):Object(y.jsx)("span",{className:"inline-block",children:"Register"})}),Object(y.jsxs)("p",{className:"text-center pt-7 text-gray-600",children:["Have an account? Login"," ",Object(y.jsx)(l.b,{to:"/",children:Object(y.jsx)("span",{className:"hover:text-green-400 font-bold",children:"here"})})]})]})})})})})},A=c.p+"static/media/forgetpassword.8c5534ff.svg",I=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),o=Object(r.a)(a,2),j=o[0],u=o[1],m=Object(d.f)();return Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center",children:Object(y.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(y.jsx)("div",{className:"shadow bg-white w-full rounded-lg divide-y divide-gray-200",children:Object(y.jsxs)("div",{className:"px-10 py-10",children:[Object(y.jsxs)(l.b,{to:"/",children:[" ",Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(y.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})]}),Object(y.jsx)("div",{className:"flex justify-center",children:Object(y.jsx)("img",{src:A,alt:"forgetpassword",className:"mb-7 w-3/5"})}),Object(y.jsx)("h1",{className:"font-semibold text-center text-lg mb-3",children:"Enter your email to reset your password"}),Object(y.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Email"}),Object(y.jsx)("input",{className:"border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full",type:"email",name:"email",value:c,onChange:function(e){return n(e.target.value)}}),Object(y.jsx)("button",{onClick:function(){u(!0),setTimeout((function(){var e=Object(i.b)();Object(i.d)(e,c).then((function(){b.a.fire("","Check your email for further instructions","success"),m.push("/")})).catch((function(e){var t=e.message;b.a.fire("",t,"error")}),u(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===j?Object(y.jsx)(x.a,{size:7}):Object(y.jsx)("span",{className:"inline-block",children:"Reset Password"})})]})})})})})};var E=function(){return Object(y.jsx)(l.a,{basename:"/project-x",children:Object(y.jsxs)(d.c,{children:[Object(y.jsx)(d.a,{exact:!0,path:"/",component:N}),Object(y.jsx)(d.a,{path:"/signup",component:B}),Object(y.jsx)(d.a,{path:"/landingpage",component:T}),Object(y.jsx)(d.a,{path:"/forgetpassword",component:I})]})})},U=(c(189),Object(f.a)({reducer:{authenticationReducer:w}}));a.a.render(Object(y.jsx)(h.a,{store:U,children:Object(y.jsx)(E,{})}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.e155b8fa.chunk.js.map