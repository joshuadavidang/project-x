(this["webpackJsonpproject-x"]=this["webpackJsonpproject-x"]||[]).push([[0],{213:function(e,t,s){},214:function(e,t,s){"use strict";s.r(t);var c=s(3),a=s(60),i=s.n(a),n=(s(131),s(9)),r=s(16),l=s(26),o=s(120),d=(Object(o.a)({apiKey:"AIzaSyDjaVXf5f-O7Ao46me8U5v7PE4s98aa3bU",authDomain:"project-x-1d9e6.firebaseapp.com",projectId:"project-x-1d9e6",storageBucket:"project-x-1d9e6.appspot.com",messagingSenderId:"888412838530",appId:"1:888412838530:web:7f38fb770995e8f280f29b"}),s(14)),j=s(20),m=s.n(j),b=s.p+"static/media/login.753498d3.svg",x=s(40),u=s.n(x),h=s(25),p=s(44),g=Object(p.b)({name:"authentication",initialState:{value:{email:"",isAuthenticated:""}},reducers:{LOGIN_ACTION:function(e,t){e.value=t.payload},LOGOUT_ACTION:function(e,t){e.value=t.payload}}}),O=g.actions,f=O.LOGIN_ACTION,v=O.LOGOUT_ACTION,w=g.reducer,N=s(1),y=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(""),o=Object(n.a)(i,2),j=o[0],x=o[1],p=Object(c.useState)(!1),g=Object(n.a)(p,2),O=g[0],v=g[1],w=Object(c.useState)(!1),y=Object(n.a)(w,2),k=y[0],L=y[1],C=Object(d.f)(),z=Object(h.b)(),M=Object(h.c)((function(e){return e.authenticationReducer.value}));Object(c.useEffect)((function(){console.log("isAuthenticated: "+O),console.log(M)}),[O,M]);return Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen",children:Object(N.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(N.jsx)("div",{className:"shadow bg-white w-full rounded-lg divide-y divide-gray-200",children:Object(N.jsxs)("div",{className:"px-10 py-10",children:[Object(N.jsx)("div",{className:"flex justify-center",children:Object(N.jsx)("img",{src:b,alt:"login",className:"mb-7 w-3/5"})}),Object(N.jsx)("h1",{className:"font-semibold text-center text-lg mb-3",children:"Login to your account"}),Object(N.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Email"}),Object(N.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg",children:[Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",color:"gray",children:[Object(N.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(N.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),Object(N.jsx)("input",{className:"bg-gray-100 outline-none text-sm w-full",type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return a(e.target.value)}})]}),Object(N.jsxs)("div",{className:"md:grid grid-cols-2 gap-x-32",children:[Object(N.jsx)("div",{children:Object(N.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Password"})}),Object(N.jsx)("div",{className:"mb-1",children:Object(N.jsx)("label",{className:"text-sm text-green-600",children:Object(N.jsx)(r.b,{to:"/forgetpassword",children:" Forgot Password?"})})})]}),Object(N.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg",children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",color:"gray",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),Object(N.jsx)("input",{type:"password",name:"password",value:j,placeholder:"Enter password",onChange:function(e){return x(e.target.value)},className:"bg-gray-100 outline-none text-sm w-full"})]}),Object(N.jsx)("button",{onClick:function(){L(!0),setTimeout((function(){var e=Object(l.b)();Object(l.e)(e,s,j).then((function(e){var t=e.user;z(f({email:t.email,isAuthenticated:!0,uid:t.uid})),!0===t.emailVerified?(v(!0),m.a.fire("","Signed in successful","success"),C.push("/landingpage")):m.a.fire({text:"Please verify your email before attempting to login",icon:"warning",confirmButtonText:"OK"})})).catch((function(e){var t=e.message;console.log(t),m.a.fire({title:t,text:"Please try again",icon:"error",confirmButtonText:"OK"})}),L(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===k?Object(N.jsx)(u.a,{size:7}):Object(N.jsx)("span",{className:"inline-block",children:"Login"})}),Object(N.jsxs)("p",{className:"text-center pt-7 text-gray-600",children:["Don't have an account? Register"," ",Object(N.jsx)(r.b,{to:"/signup",children:Object(N.jsx)("span",{className:"hover:text-green-400 font-bold",children:"here"})})]})]})})})})})},k=s(62),L=function(){var e=Object(h.c)((function(e){return e.authenticationReducer.value}));return console.log(e),Object(N.jsx)("div",{className:"mt-10 flex justify-center",children:Object(N.jsxs)("div",{className:"p-10 w-1/2 mx-12 rounded-md tracking-wide shadow-lg ",children:[Object(N.jsx)(k.a,{name:e.email,size:"100",round:!0}),Object(N.jsx)("div",{class:"grid grid-cols-1 gap-4 mt-8 ",children:Object(N.jsx)("div",{className:"bg-gray-100 p-3 rounded-lg mb-6",children:Object(N.jsxs)("h4",{id:"name",className:"text-lg font-semibold ",children:["Email - ",e.email]})})}),Object(N.jsx)("div",{class:"grid grid-cols-1 gap-4",children:Object(N.jsx)("div",{className:"bg-gray-100 p-3 rounded-lg mb-6",children:!0===e.isAuthenticated?Object(N.jsxs)("h5",{id:"name",className:" text-lg font-semibold",children:["Verified"," "]}):Object(N.jsxs)("h5",{id:"name",className:" text-lg font-semibold",children:["Validate your email"," "]})})}),Object(N.jsx)("div",{class:"grid grid-cols-1 gap-4",children:Object(N.jsx)("div",{className:"bg-gray-100 p-3 rounded-lg mb-6",children:Object(N.jsx)("h5",{id:"name",className:" text-lg font-semibold",children:e.uid})})}),Object(N.jsx)("div",{class:"grid grid-cols-1 gap-4",children:Object(N.jsx)("div",{className:"bg-gray-100 p-3 rounded-lg mb-6",children:Object(N.jsx)(r.b,{to:"/forgetpassword",children:Object(N.jsx)("h5",{id:"name",className:" text-lg font-semibold",children:"Forget Password"})})})})]})})},C=function(){return Object(N.jsx)("div",{className:"mt-10 flex justify-center",children:Object(N.jsxs)("div",{className:"max-w-sm p-6 rounded-md tracking-wide shadow-lg",children:[Object(N.jsxs)("div",{id:"header",className:"flex items-center mb-4",children:[Object(N.jsx)("img",{alt:"avatar",className:"w-20 rounded-full border-2 border-gray-300",src:"https://picsum.photos/seed/picsum/200"}),Object(N.jsx)("div",{id:"header-text",className:"leading-5 ml-6 sm",children:Object(N.jsx)("h4",{id:"name",className:"text-xl font-semibold",children:"English"})})]}),Object(N.jsx)("div",{id:"quote",children:Object(N.jsx)("q",{className:"italic text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})})},z=function(){return Object(N.jsx)("div",{className:"mt-10 flex justify-center",children:Object(N.jsxs)("div",{className:"max-w-sm p-6 rounded-md tracking-wide shadow-lg",children:[Object(N.jsxs)("div",{id:"header",className:"flex items-center mb-4",children:[Object(N.jsx)("img",{alt:"avatar",className:"w-20 rounded-full border-2 border-gray-300",src:"https://picsum.photos/seed/picsum/200"}),Object(N.jsx)("div",{id:"header-text",className:"leading-5 ml-6 sm",children:Object(N.jsx)("h4",{id:"name",className:"text-xl font-semibold",children:"Math"})})]}),Object(N.jsx)("div",{id:"quote",children:Object(N.jsx)("q",{className:"italic text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})})},M=function(e){e.subjectTitle;return Object(N.jsx)("div",{children:Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"flex items-center p-6 bg-white rounded-xl",children:[Object(N.jsxs)("div",{className:"flex bg-gray-100 p-3 w-72 space-x-4 rounded-lg",children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 opacity-30",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(N.jsx)("input",{className:"bg-gray-100 outline-none",type:"text",placeholder:"Search..."})]}),Object(N.jsx)("div",{className:"bg-red-600 py-3 ml-4 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer",children:Object(N.jsx)("span",{children:"Search"})})]})})})},T=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"mt-1 flex justify-center",children:Object(N.jsx)(M,{subjectTitle:"English"})}),Object(N.jsxs)("div",{className:"grid grid-cols-3 gap-4 mx-10 my-14 ",children:[Object(N.jsxs)("div",{className:"max-w-sm p-6 rounded-md tracking-wide shadow-lg",children:[Object(N.jsxs)("div",{id:"header",className:"flex items-center mb-4",children:[Object(N.jsx)("img",{alt:"avatar",className:"w-20 rounded-full border-2 border-gray-300",src:"https://picsum.photos/seed/picsum/200"}),Object(N.jsxs)("div",{id:"header-text",className:"leading-5 ml-6 sm",children:[Object(N.jsx)("h4",{id:"name",className:"text-xl font-semibold",children:"John Doe"}),Object(N.jsx)("h5",{id:"job",className:"font-semibold text-blue-600",children:"Designer"})]})]}),Object(N.jsx)("div",{id:"quote",children:Object(N.jsx)("q",{className:"italic text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),Object(N.jsxs)("div",{className:"max-w-sm p-6 rounded-md tracking-wide shadow-lg",children:[Object(N.jsxs)("div",{id:"header",className:"flex items-center mb-4",children:[Object(N.jsx)("img",{alt:"avatar",className:"w-20 rounded-full border-2 border-gray-300",src:"https://picsum.photos/seed/picsum/200"}),Object(N.jsxs)("div",{id:"header-text",className:"leading-5 ml-6 sm",children:[Object(N.jsx)("h4",{id:"name",className:"text-xl font-semibold",children:"John Doe"}),Object(N.jsx)("h5",{id:"job",className:"font-semibold text-blue-600",children:"Designer"})]})]}),Object(N.jsx)("div",{id:"quote",children:Object(N.jsx)("q",{className:"italic text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),Object(N.jsxs)("div",{className:"max-w-sm bg-white p-6 rounded-md tracking-wide shadow-lg",children:[Object(N.jsxs)("div",{id:"header",className:"flex items-center mb-4",children:[Object(N.jsx)("img",{alt:"avatar",className:"w-20 rounded-full border-2 border-gray-300",src:"https://picsum.photos/seed/picsum/200"}),Object(N.jsxs)("div",{id:"header-text",className:"leading-5 ml-6 sm",children:[Object(N.jsx)("h4",{id:"name",className:"text-xl font-semibold",children:"John Doe"}),Object(N.jsx)("h5",{id:"job",className:"font-semibold text-blue-600",children:"Designer"})]})]}),Object(N.jsx)("div",{id:"quote",children:Object(N.jsx)("q",{className:"italic text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})]})]})},A=function(){var e=Object(h.c)((function(e){return e.contentReducer.value}));return console.log(e),Object(N.jsx)("div",{children:"English"===e.subject&&!0===e.isLoaded?Object(N.jsx)(C,{}):"Math"===e.subject&&!0===e.isLoaded?Object(N.jsx)(z,{}):"Account"===e.subject&&!0===e.isLoaded?Object(N.jsx)(L,{}):!1===e.isLoaded?Object(N.jsx)(T,{}):Object(N.jsx)("p",{children:"Error 404, no pages found "})})},B=Object(p.b)({name:"content",initialState:{value:{subject:"no subject",isLoaded:!1}},reducers:{CONTENT_ACTION:function(e,t){e.value=t.payload}}}),S=B.actions.CONTENT_ACTION,E=B.reducer,q=function(e){var t=e.emailData,s=Object(d.f)(),a=Object(h.b)(),i=Object(c.useState)(!1),r=Object(n.a)(i,2),o=r[0],j=r[1],b=Object(c.useState)(!1),x=Object(n.a)(b,2),u=x[0],p=x[1],g=Object(c.useState)(!0),O=Object(n.a)(g,2),f=O[0],w=O[1],y=Object(c.useState)(!1),L=Object(n.a)(y,2),C=L[0],z=L[1],M=function(){w(!0),z(!1),j(!1),p(!1),a(S({isLoaded:!1}))};return Object(N.jsx)("div",{children:Object(N.jsx)("ul",{className:"flex flex-col overflow-hidden",children:Object(N.jsxs)("nav",{className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white rounded-r-3xl",children:[Object(N.jsx)("div",{className:"flex justify-center m-8",children:Object(N.jsx)(k.a,{name:t,size:"100",round:!0})}),Object(N.jsxs)("div",{className:"text-center mb-8",children:[Object(N.jsx)("span",{onClick:M,children:t})," "]}),Object(N.jsxs)("li",{className:!0===f?"text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2":"text-center py-2 w-72  flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2",onClick:M,children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Object(N.jsx)("span",{children:"Home"})]}),Object(N.jsxs)("li",{className:!0===C?"text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2":"text-center py-2  w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2",onClick:function(){z(!0),w(!1),j(!1),p(!1),a(S({subject:"Account",isLoaded:!0}))},children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Object(N.jsx)("span",{children:"Accounts"})]}),Object(N.jsxs)("li",{className:!0===o&&!1===u?"text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2":"text-center py-2 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2",onClick:function(){j(!0),p(!1),w(!1),z(!1),a(S({subject:"English",isLoaded:!0}))},children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Object(N.jsx)("span",{children:"English"})]}),Object(N.jsxs)("li",{className:!0===u&&!1===o?"text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2":"text-center py-2 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2",onClick:function(){p(!0),j(!1),z(!1),w(!1),a(S({subject:"Math",isLoaded:!0}))},children:[Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(N.jsx)("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),Object(N.jsx)("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]}),Object(N.jsx)("span",{children:"Math"})]}),Object(N.jsxs)("li",{className:"text-center py-2 flex w-72 p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2",onClick:function(){var e=Object(l.b)();Object(l.f)(e).then((function(){m.a.fire({title:"Logout?",text:"You will be signed out",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!0}).then((function(e){e.isConfirmed?(m.a.fire("","Logout successful","success"),a(v({email:t,isAuthenticated:!1,message:"User signed out"})),s.push("/")):e.dismiss===m.a.DismissReason.cancel&&m.a.fire("Welcome back","","success")}))})).catch((function(e){}))},children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),Object(N.jsx)("span",{children:"Log Out"})," "]})]})})})},I=function(){var e=Object(h.c)((function(e){return e.authenticationReducer.value}));return console.log(e),Object(c.useEffect)((function(){e.isAuthenticated})),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"flex flex-row flex-wrap",children:[Object(N.jsx)("aside",{className:"w-full sm:w-1/4 md:w-2/6 xl:w-1/6 bg-white",children:Object(N.jsx)(q,{emailData:e.email})}),Object(N.jsx)("main",{role:"main",className:"w-full sm:w-3/4 md:w-4/6 xl:w-5/6 text-center bg-white",children:Object(N.jsx)(A,{})})]})})},V=s.p+"static/media/signup.e9633564.svg",D=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(""),o=Object(n.a)(i,2),j=o[0],b=o[1],x=Object(c.useState)(!1),h=Object(n.a)(x,2),p=h[0],g=h[1],O=Object(d.f)();return Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:"min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center overflow-y-hidden bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen",children:Object(N.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(N.jsx)("div",{className:"bg-white shadow w-full rounded-lg divide-y divide-gray-200",children:Object(N.jsxs)("div",{className:"px-10 py-10",children:[Object(N.jsxs)(r.b,{to:"/",children:[" ",Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})]}),Object(N.jsx)("div",{className:"flex justify-center",children:Object(N.jsx)("img",{src:V,alt:"sign up",className:"mb-3 w-3/5"})}),Object(N.jsx)("h1",{className:"font-semibold text-center text-lg mb-3",children:"Sign up for an account"}),Object(N.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Email"}),Object(N.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg",children:[Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",color:"gray",children:[Object(N.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(N.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),Object(N.jsx)("input",{className:"bg-gray-100 outline-none text-sm w-full",type:"email",name:"email",value:s,placeholder:"New email",onChange:function(e){return a(e.target.value)}})]}),Object(N.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Password"}),Object(N.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg",children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",color:"gray",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),Object(N.jsx)("input",{type:"password",name:"password",value:j,placeholder:"New password",onChange:function(e){return b(e.target.value)},className:"bg-gray-100 outline-none text-sm w-full"})]}),Object(N.jsx)("button",{onClick:function(){g(!0),setTimeout((function(){var e=Object(l.b)();Object(l.a)(e,s,j).then((function(){Object(l.c)(e.currentUser).then((function(){m.a.fire({text:"Click on the link in your email to verify your account.",icon:"info",confirmButtonText:"OK"},O.push("/loginpage"))}))})).catch((function(e){var t=e.message;console.log(t),m.a.fire({title:t,text:"Please try again",icon:"error",confirmButtonText:"OK"})}),g(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===p?Object(N.jsx)(u.a,{size:7}):Object(N.jsx)("span",{className:"inline-block",children:"Register"})}),Object(N.jsxs)("p",{className:"text-center pt-7 text-gray-600",children:["Have an account? Login"," ",Object(N.jsx)(r.b,{to:"/loginpage",children:Object(N.jsx)("span",{className:"hover:text-green-400 font-bold",children:"here"})})]})]})})})})})},P=s.p+"static/media/forgetpassword.8c5534ff.svg",W=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(n.a)(i,2),j=o[0],b=o[1],x=Object(d.f)();return Object(N.jsx)("div",{children:Object(N.jsx)("div",{className:" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen",children:Object(N.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(N.jsx)("div",{className:"shadow bg-white w-full rounded-lg divide-y divide-gray-200",children:Object(N.jsxs)("div",{className:"px-10 py-10",children:[Object(N.jsxs)(r.b,{to:"/loginpage",children:[" ",Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})]}),Object(N.jsx)("div",{className:"flex justify-center",children:Object(N.jsx)("img",{src:P,alt:"forgetpassword",className:"mb-7 w-3/5"})}),Object(N.jsx)("h1",{className:"font-semibold text-center text-lg mb-3",children:"Enter your email to reset your password"}),Object(N.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Email"}),Object(N.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg",children:[Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",color:"gray",children:[Object(N.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(N.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),Object(N.jsx)("input",{className:"bg-gray-100 outline-none text-sm w-full",type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return a(e.target.value)}})]}),Object(N.jsx)("button",{onClick:function(){b(!0),setTimeout((function(){var e=Object(l.b)();Object(l.d)(e,s).then((function(){m.a.fire("","Check your email for further instructions","success"),x.push("/loginpage")})).catch((function(e){var t=e.message;m.a.fire("",t,"error")}),b(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===j?Object(N.jsx)(u.a,{size:7}):Object(N.jsx)("span",{className:"inline-block",children:"Reset Password"})})]})})})})})},R=s(125),H=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),s=t[0],a=t[1],i=Object(d.f)();return Object(N.jsx)("div",{className:"bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen flex items-center justify-center",children:Object(N.jsxs)("div",{className:"p-10 ",children:[Object(N.jsx)("div",{className:"flex justify-center",children:Object(N.jsx)("p",{className:"text-5xl text-pink-100",children:"Mission Possible"})}),Object(N.jsx)("div",{className:"flex justify-center mt-8",children:Object(N.jsx)("button",{onClick:function(){a(!0),setTimeout((function(){a(!1),i.push("/loginpage")}),800)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===s?Object(N.jsx)(R.PulseLoader,{size:7,color:"white"}):Object(N.jsx)("span",{children:"PLAY"})})})]})})};var U=function(){return Object(N.jsx)(r.a,{basename:"/project-x",children:Object(N.jsxs)(d.c,{children:[Object(N.jsx)(d.a,{exact:!0,path:"/",component:H}),Object(N.jsx)(d.a,{path:"/loginpage",component:y}),Object(N.jsx)(d.a,{path:"/signup",component:D}),Object(N.jsx)(d.a,{path:"/landingpage",component:I}),Object(N.jsx)(d.a,{path:"/forgetpassword",component:W})]})})},_=(s(213),Object(p.a)({reducer:{authenticationReducer:w,contentReducer:E}}));i.a.render(Object(N.jsx)(h.a,{store:_,children:Object(N.jsx)(U,{})}),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.8a3634ff.chunk.js.map