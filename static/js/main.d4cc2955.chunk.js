(this["webpackJsonpproject-x"]=this["webpackJsonpproject-x"]||[]).push([[0],{107:function(e,t,s){},108:function(e,t,s){"use strict";s.r(t);var c=s(5),n=s(37),a=s.n(n),r=(s(60),s(10)),i=s(16),o=s(23),l=s(50),d=s(51),j=Object(l.a)({apiKey:"AIzaSyDjaVXf5f-O7Ao46me8U5v7PE4s98aa3bU",authDomain:"project-x-1d9e6.firebaseapp.com",projectId:"project-x-1d9e6",storageBucket:"project-x-1d9e6.appspot.com",messagingSenderId:"888412838530",appId:"1:888412838530:web:7f38fb770995e8f280f29b",databaseURL:"https://project-x-1d9e6-default-rtdb.asia-southeast1.firebasedatabase.app/"}),m=(Object(d.a)(j),s(14)),b=s(20),u=s.n(b),x=s(28),h=s.n(x),p=s(17),g=s(34),O=Object(g.b)({name:"authentication",initialState:{value:{email:"",isAuthenticated:"",uid:"",isLoaded:!1}},reducers:{LOGIN_ACTION:function(e,t){e.value=t.payload},LOGOUT_ACTION:function(e,t){e.value=t.payload}}}),f=O.actions,v=f.LOGIN_ACTION,w=f.LOGOUT_ACTION,N=O.reducer,y=s(36),k=s(42),L=s.n(k),C=s(2),z=Object(k.genConfig)(),M=function(){return Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:"flex justify-center",children:Object(C.jsx)(L.a,Object(y.a)({style:{width:"8rem",height:"8rem"}},z))})})},A=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),l=Object(r.a)(a,2),d=l[0],j=l[1],b=Object(c.useState)(!1),x=Object(r.a)(b,2),g=x[0],O=x[1],f=Object(c.useState)(!1),w=Object(r.a)(f,2),N=w[0],y=w[1],k=Object(m.f)(),L=Object(p.b)(),z=Object(p.c)((function(e){return e.authenticationReducer.value}));Object(c.useEffect)((function(){console.log("isAuthenticated: "+g),console.log(z)}),[g,z]);return Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen",children:Object(C.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(C.jsx)("div",{className:"shadow bg-white w-full rounded-lg divide-y divide-gray-200",children:Object(C.jsxs)("div",{className:"px-10 py-10",children:[Object(C.jsxs)(i.b,{to:"/",children:[" ",Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})]}),Object(C.jsx)("div",{className:"flex justify-center",children:Object(C.jsx)(M,{})}),Object(C.jsx)("h1",{className:" text-center text-lg mb-3 font-mono mb-6 mt-8",children:"Login to your account"}),Object(C.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-6 rounded-lg",children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",color:"gray",children:[Object(C.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(C.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),Object(C.jsx)("input",{className:"bg-gray-100 outline-none text-sm w-full",type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return n(e.target.value)}})]}),Object(C.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",color:"gray",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),Object(C.jsx)("input",{type:"password",name:"password",value:d,placeholder:"Enter password",onChange:function(e){return j(e.target.value)},className:"bg-gray-100 outline-none text-sm w-full"})]}),Object(C.jsx)("button",{onClick:function(){y(!0),setTimeout((function(){var e=Object(o.b)();Object(o.d)(e,s,d).then((function(e){var t=e.user;console.log(t),L(v({avatar:t.photoURL,avatarName:t.displayName,email:t.email,isAuthenticated:!0,uid:t.uid})),O(!0),u.a.fire("","Signed in successful","success"),k.push("/landingpage")})).catch((function(e){var t=e.message;console.log(t),u.a.fire({title:t,text:"Please try again",icon:"error",confirmButtonText:"OK"})}),y(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===N?Object(C.jsx)(h.a,{size:7,color:"white"}):Object(C.jsx)("span",{className:"inline-block tracking-wider",children:"Login"})}),Object(C.jsxs)("p",{className:"text-center pt-7 text-gray-600 text-sm font-mono",children:["Don't have an account? Register"," ",Object(C.jsx)(i.b,{to:"/signup",children:Object(C.jsx)("span",{className:"hover:text-green-400 underline font-bold",children:"here"})})]}),Object(C.jsx)("div",{className:"text-center mt-2",children:Object(C.jsx)("label",{className:"text-sm text-green-600 font-mono",children:Object(C.jsx)(i.b,{to:"/forgetpassword",children:" Reset Password"})})})]})})})})})},S=Object(g.b)({name:"content",initialState:{value:{subject:"no subject",isLoaded:!1}},reducers:{CONTENT_ACTION:function(e,t){e.value=t.payload}}}),B=S.actions.CONTENT_ACTION,T=S.reducer,E=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(p.c)((function(e){return e.authenticationReducer.value}));console.log(a);var i=Object(m.f)(),o=Object(p.b)();return Object(C.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(C.jsxs)("div",{className:"p-10 w-auto rounded-md tracking-wide shadow-lg ",children:[Object(C.jsx)(M,{}),Object(C.jsx)("div",{className:"grid grid-cols-1 gap-4 mt-2 ",children:Object(C.jsx)("div",{className:"bg-white-100 p-3 rounded-lg mb-2",children:Object(C.jsxs)("h4",{id:"name",className:"text-sm font-semibold ",children:[a.avatarName," - ",a.avatar]})})}),Object(C.jsx)("div",{className:"grid grid-cols-1 gap-4",children:Object(C.jsx)("div",{className:"bg-gray-100 p-3 rounded-lg mb-6",children:Object(C.jsx)("h4",{id:"name",className:"text-sm font-semibold ",children:a.email})})}),Object(C.jsx)("div",{className:"grid grid-cols-1 gap-4",children:Object(C.jsx)("div",{className:"bg-gray-100 p-3 rounded-lg mb-6",children:""===a.uid?Object(C.jsx)("h5",{id:"name",className:" text-sm font-semibold",children:"Please login to view your uuid"}):Object(C.jsxs)("h5",{id:"name",className:" text-sm font-semibold",children:[a.uid," "]})})}),Object(C.jsx)("div",{className:"grid grid-cols-1 gap-4",children:Object(C.jsx)("button",{onClick:function(){n(!0),setTimeout((function(){n(!1),o(B({isLoaded:!1})),i.push("/forgetpassword")}),600)},type:"button",id:"name",className:" text-sm font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg  font-mono tracking-wide",children:!0===s?Object(C.jsx)(h.a,{size:7}):" Change Password"})})]})})},R=function(){return Object(C.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(C.jsxs)("div",{className:"max-w-sm p-6 rounded-md tracking-wide shadow-lg",children:[Object(C.jsxs)("div",{id:"header",className:"flex items-center mb-4",children:[Object(C.jsx)("img",{alt:"avatar",className:"w-20 rounded-full border-2 border-gray-300",src:"https://picsum.photos/seed/picsum/200"}),Object(C.jsx)("div",{id:"header-text",className:"leading-5 ml-6 sm",children:Object(C.jsx)("h4",{id:"name",className:"text-xl font-semibold",children:"English"})})]}),Object(C.jsx)("div",{id:"quote",children:Object(C.jsx)("q",{className:"italic text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})})},I=function(){return Object(C.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(C.jsxs)("div",{className:"max-w-sm p-6 rounded-md tracking-wide shadow-lg",children:[Object(C.jsxs)("div",{id:"header",className:"flex items-center mb-4",children:[Object(C.jsx)("img",{alt:"avatar",className:"w-20 rounded-full border-2 border-gray-300",src:"https://picsum.photos/seed/picsum/200"}),Object(C.jsx)("div",{id:"header-text",className:"leading-5 ml-6 sm",children:Object(C.jsx)("h4",{id:"name",className:"text-xl font-semibold",children:"Math"})})]}),Object(C.jsx)("div",{id:"quote",children:Object(C.jsx)("q",{className:"italic text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})})},V=function(){return Object(C.jsx)("div",{className:" h-screen flex justify-center items-center ",children:Object(C.jsxs)("div",{className:"max-w-sm p-6 rounded-md tracking-wide shadow-lg",children:[Object(C.jsxs)("div",{id:"header",className:"flex items-center mb-4",children:[Object(C.jsx)(M,{}),Object(C.jsx)("div",{id:"header-text",className:"leading-5 ml-6 sm",children:Object(C.jsx)("h4",{id:"name",className:"text-xl font-semibold",children:"INVENTORY"})})]}),Object(C.jsx)("div",{id:"quote",children:Object(C.jsx)("q",{className:"italic text-gray-600",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})})},W=function(){var e=Object(p.c)((function(e){return e.contentReducer.value}));return console.log(e),Object(C.jsx)("div",{children:"English"===e.subject&&!0===e.isLoaded?Object(C.jsx)(R,{}):"Math"===e.subject&&!0===e.isLoaded?Object(C.jsx)(I,{}):"Account"===e.subject&&!0===e.isLoaded?Object(C.jsx)(E,{}):!1===e.isLoaded?Object(C.jsx)(V,{}):Object(C.jsx)("p",{children:"Error 404, no pages found "})})},P=function(e){var t=e.avatarData,s=Object(p.b)(),n=Object(c.useState)(!1),a=Object(r.a)(n,2),i=a[0],o=a[1],l=Object(c.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1];return Object(C.jsx)("div",{children:Object(C.jsx)("ul",{className:"flex flex-col overflow-hidden",children:Object(C.jsxs)("nav",{className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white rounded-r-3xl ",children:[Object(C.jsx)("div",{className:"flex justify-center m-8",children:Object(C.jsx)(M,{})}),Object(C.jsxs)("div",{className:"text-center mb-6",children:[Object(C.jsx)("span",{className:"font-bold font-mono",children:"Hey,"})," ",Object(C.jsxs)("span",{className:"font-mono",children:[t," ",""," \ud83d\udc4b"]})," "]}),Object(C.jsx)("div",{className:"flex justify-center",children:Object(C.jsxs)("li",{className:!0===i&&!1===j?"text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2":"text-center py-2 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2",onClick:function(){o(!0),m(!1),s(B({subject:"English",isLoaded:!0}))},children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Object(C.jsx)("span",{className:"font-mono",children:"English"})]})}),Object(C.jsx)("div",{className:"flex justify-center",children:Object(C.jsxs)("li",{className:!0===j&&!1===i?"text-center py-2 border-r-8 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2":"text-center py-2 w-72 flex p-3 space-x-4 mt-0.5 justify-center cursor-pointer my-2",onClick:function(){m(!0),o(!1),s(B({subject:"Math",isLoaded:!0}))},children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(C.jsx)("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),Object(C.jsx)("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]}),Object(C.jsx)("span",{className:"font-mono",children:"Math"})]})})]})})})},q=function(){var e=Object(m.f)(),t=Object(p.b)(),s=Object(p.c)((function(e){return e.authenticationReducer.value})),n=Object(p.c)((function(e){return e.contentReducer.value}));console.log(s),Object(c.useEffect)((function(){s.isAuthenticated}));var a=Object(c.useState)(!1),i=Object(r.a)(a,2),l=i[0],d=i[1],j=Object(c.useState)(!1),b=Object(r.a)(j,2),x=b[0],h=b[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"flex",children:[Object(C.jsx)("aside",{className:"w-auto bg-white h-screen",children:Object(C.jsx)(P,{avatarData:s.avatarName})}),Object(C.jsxs)("main",{role:"main",className:"w-screen text-center h-screen overflow-hidden",children:[Object(C.jsx)("div",{className:"h-5/6 flex justify-center items-center",children:Object(C.jsx)(W,{})}),Object(C.jsxs)("div",{className:"h-1/6 flex justify-end items-center space-x-8 pr-12",children:[Object(C.jsxs)("div",{onClick:function(){h(!1),d(!0),t(B({isLoaded:!1}))},className:!0===l||!1===n.isLoaded?"flex items-center space-x-2 cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block":"flex items-center space-x-2 cursor-pointer",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),Object(C.jsx)("span",{className:"font-mono",children:"Inventory"})]}),Object(C.jsxs)("div",{onClick:function(){d(!1),h(!0),t(B({subject:"Account",isLoaded:!0}))},className:!0===x?"flex items-center space-x-2 cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block":"flex items-center space-x-2 cursor-pointer",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(C.jsx)("span",{className:"font-mono",children:"Account"})]}),Object(C.jsxs)("div",{onClick:function(){var c=Object(o.b)();Object(o.e)(c).then((function(){u.a.fire({title:"Logout?",text:"You will be signed out",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!0}).then((function(c){c.isConfirmed?(u.a.fire("","Logout successful","success"),t(w({email:s.email,isAuthenticated:!1,message:"User signed out"})),t(B({isLoaded:!1})),e.push("/")):c.dismiss===u.a.DismissReason.cancel&&u.a.fire("Welcome back","","success")}))})).catch((function(e){}))},className:"flex items-center space-x-2 cursor-pointer",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),Object(C.jsx)("span",{className:"font-mono",children:"Log Out"})]})]})]})]})})},H=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=(t[0],t[1]),n=Object(c.useState)(""),a=Object(r.a)(n,2),l=a[0],d=a[1],j=Object(c.useState)(""),b=Object(r.a)(j,2),x=b[0],p=b[1],g=Object(c.useState)(""),O=Object(r.a)(g,2),f=O[0],v=O[1],w=Object(c.useState)(!1),N=Object(r.a)(w,2),y=N[0],k=N[1],L=Object(m.f)();return Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:"min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center overflow-y-hidden bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen",children:Object(C.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(C.jsx)("div",{className:"bg-white shadow w-full rounded-lg divide-y divide-gray-200",children:Object(C.jsxs)("div",{className:"px-10 py-10",children:[Object(C.jsxs)(i.b,{to:"/loginpage",children:[" ",Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})]}),Object(C.jsx)("div",{className:"flex justify-center",children:Object(C.jsx)(M,{})}),Object(C.jsx)("h1",{className:"font-mono text-center text-lg mb-6 mt-8",children:"Sign up for an account"}),Object(C.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-3 rounded-lg",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",color:"gray",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(C.jsx)("input",{className:"bg-gray-100 outline-none text-sm w-full",type:"text",name:"avatarName",value:l,placeholder:"Give your avatar a name",onChange:function(e){return d(e.target.value)}})]}),Object(C.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block"}),Object(C.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-3 rounded-lg",children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",color:"gray",children:[Object(C.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(C.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),Object(C.jsx)("input",{className:"bg-gray-100 outline-none text-sm w-full",type:"email",name:"email",value:x,placeholder:"New email",onChange:function(e){return p(e.target.value)}})]}),Object(C.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block"}),Object(C.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-7 rounded-lg",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",color:"gray",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),Object(C.jsx)("input",{type:"password",name:"password",value:f,placeholder:"New password",onChange:function(e){return v(e.target.value)},className:"bg-gray-100 outline-none text-sm w-full"})]}),Object(C.jsx)("button",{onClick:function(){k(!0),s("figuring out"),setTimeout((function(){var e=Object(o.b)();Object(o.a)(e,x,f).then((function(){Object(o.f)(e.currentUser,{photoURL:"incoming",displayName:l}),u.a.fire("","Account registered","success"),L.push("/loginpage")})).catch((function(e){var t=e.message;console.log(t),u.a.fire({title:t,text:"Please try again",icon:"error",confirmButtonText:"OK"})}),k(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===y?Object(C.jsx)(h.a,{size:7,color:"white"}):Object(C.jsx)("span",{className:"inline-block tracking-wider",children:"Register"})}),Object(C.jsxs)("p",{className:"text-center pt-7 text-gray-600 font-mono text-sm",children:["Have an account? Login"," ",Object(C.jsx)(i.b,{to:"/loginpage",children:Object(C.jsx)("span",{className:"hover:text-green-400 underline font-bold",children:"here"})})]})]})})})})})},U=s.p+"static/media/forgetpassword.8c5534ff.svg",D=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(!1),l=Object(r.a)(a,2),d=l[0],j=l[1],b=Object(m.f)();return Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:" min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen",children:Object(C.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(C.jsx)("div",{className:"shadow bg-white w-full rounded-lg divide-y divide-gray-200",children:Object(C.jsxs)("div",{className:"px-10 py-10",children:[Object(C.jsxs)(i.b,{to:"/loginpage",children:[" ",Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})]}),Object(C.jsx)("div",{className:"flex justify-center",children:Object(C.jsx)("img",{src:U,alt:"forgetpassword",className:"mb-7 w-3/5"})}),Object(C.jsx)("h1",{className:"font-mono text-center text-md mb-3",children:"Enter your email to reset your password"}),Object(C.jsxs)("div",{className:"flex bg-gray-100 p-3 space-x-4 mb-7 mt-0.5 rounded-lg",children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",color:"gray",children:[Object(C.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(C.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),Object(C.jsx)("input",{className:"bg-gray-100 outline-none text-sm w-full",type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return n(e.target.value)}})]}),Object(C.jsx)("button",{onClick:function(){j(!0),setTimeout((function(){var e=Object(o.b)();Object(o.c)(e,s).then((function(){u.a.fire("","Check your email for further instructions","success"),b.push("/loginpage")})).catch((function(e){var t=e.message;u.a.fire("",t,"error")}),j(!1))}),600)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===d?Object(C.jsx)(h.a,{size:7,color:"white"}):Object(C.jsx)("span",{className:"inline-block",children:"Reset Password"})})]})})})})})},_=s(54),G=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(m.f)();return Object(C.jsx)("div",{className:"bg-cover bg-no-repeat bg-ezreal-image min-w-full h-screen flex items-center justify-center",children:Object(C.jsxs)("div",{className:"p-10 ",children:[Object(C.jsx)("div",{className:"flex justify-center",children:Object(C.jsx)("p",{className:"text-5xl text-pink-100 font-mono",children:"Mission Possible"})}),Object(C.jsx)("div",{className:"flex justify-center mt-10",children:Object(C.jsx)("button",{onClick:function(){n(!0),setTimeout((function(){n(!1),a.push("/loginpage")}),800)},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white w-full py-3 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:!0===s?Object(C.jsx)(_.PulseLoader,{size:7,color:"white"}):Object(C.jsx)("span",{className:"font-mono tracking-widest",children:"PLAY"})})})]})})};var Y=function(){return Object(C.jsx)(i.a,{basename:"/project-x",children:Object(C.jsxs)(m.c,{children:[Object(C.jsx)(m.a,{exact:!0,path:"/",component:G}),Object(C.jsx)(m.a,{path:"/loginpage",component:A}),Object(C.jsx)(m.a,{path:"/signup",component:H}),Object(C.jsx)(m.a,{path:"/landingpage",component:q}),Object(C.jsx)(m.a,{path:"/forgetpassword",component:D})]})})},K=(s(107),Object(g.a)({reducer:{authenticationReducer:N,contentReducer:T}}));a.a.render(Object(C.jsx)(p.a,{store:K,children:Object(C.jsx)(Y,{})}),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.d4cc2955.chunk.js.map