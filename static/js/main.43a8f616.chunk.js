(this["webpackJsonpproject-x"]=this["webpackJsonpproject-x"]||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c(37),l=c.n(s),r=(c(46),c(11)),a=c(21),i=c(19),o=c(38),d=(Object(o.a)({apiKey:"AIzaSyDjaVXf5f-O7Ao46me8U5v7PE4s98aa3bU",authDomain:"project-x-1d9e6.firebaseapp.com",projectId:"project-x-1d9e6",storageBucket:"project-x-1d9e6.appspot.com",messagingSenderId:"888412838530",appId:"1:888412838530:web:7f38fb770995e8f280f29b"}),c(10)),j=c(17),b=c.n(j),u=c.p+"static/media/login.753498d3.svg",x=c(4),m=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],l=Object(n.useState)(""),o=Object(r.a)(l,2),j=o[0],m=o[1],h=Object(n.useState)(!1),f=Object(r.a)(h,2),p=f[0],O=f[1];Object(n.useEffect)((function(){console.log(p)}),[p]);var g=Object(d.f)();return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center ",children:Object(x.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(x.jsx)("div",{className:"shadow bg-white w-full rounded-lg divide-y divide-gray-200",children:Object(x.jsxs)("div",{className:"px-10 py-10",children:[Object(x.jsx)("div",{className:"flex justify-center",children:Object(x.jsx)("img",{src:u,alt:"login",className:"mb-7 w-3/5"})}),Object(x.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Email"}),Object(x.jsx)("input",{className:"border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full",type:"email",name:"email",value:c,onChange:function(e){return s(e.target.value)}}),Object(x.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",value:j,onChange:function(e){return m(e.target.value)},className:"border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"}),Object(x.jsx)("button",{onClick:function(){var e=Object(i.b)();Object(i.d)(e,c,j).then((function(e){var t=e.user;console.log(t),!0===t.emailVerified?(O(!0),b.a.fire("","Signed in successful","success"),g.push("/landingpage")):b.a.fire({text:"Please verify your email before attempting to login",icon:"warning",confirmButtonText:"OK"})})).catch((function(e){var t=e.message;console.log(t),b.a.fire({title:t,text:"Please try again",icon:"error",confirmButtonText:"OK"})}))},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:Object(x.jsx)("span",{className:"inline-block",children:"Login"})}),Object(x.jsxs)("p",{className:"text-center pt-7 text-gray-600",children:["Don't have an account? Register"," ",Object(x.jsx)(a.b,{to:"/signup",children:Object(x.jsx)("span",{className:"hover:text-green-400 font-bold",children:"here"})})]})]})})})})})},h=c.p+"static/media/joshua.e013bf36.jpeg",f=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],l=Object(d.f)();Object(n.useEffect)((function(){var e=Object(i.b)();console.log(e),console.log(e.currentUser.email+" email verified: "+e.currentUser.emailVerified),s(e.currentUser.email)}),[]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{class:"",children:Object(x.jsxs)("div",{class:"flex flex-row flex-wrap",children:[Object(x.jsx)("aside",{class:"w-full md:w-1/4",children:Object(x.jsx)("div",{children:Object(x.jsx)("ul",{class:"flex flex-col overflow-hidden",children:Object(x.jsxs)("nav",{className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col h-screen px-4 text-white ",children:[Object(x.jsx)("div",{className:"flex justify-center m-8",children:Object(x.jsx)("img",{src:h,alt:"profilePicture",className:" w-20 h-20 rounded-full"})}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("span",{children:c})}),Object(x.jsxs)("div",{className:"m-2 cursor-pointer",children:[Object(x.jsx)("ul",{onClick:function(){return alert("Under Construction")},children:Object(x.jsx)("li",{className:"text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg",children:Object(x.jsx)("span",{children:"English"})})}),Object(x.jsx)("ul",{onClick:function(){return alert("Under Construction")},children:Object(x.jsx)("li",{className:"text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg",children:Object(x.jsx)("span",{children:"Math"})})}),Object(x.jsx)("ul",{onClick:function(){return alert("Under Construction")},children:Object(x.jsx)("li",{className:"text-center py-3.5 hover:text-white hover:bg-black hover:font-bold rounded rounded-lg",children:Object(x.jsx)("span",{children:"Science"})})}),Object(x.jsx)("ul",{onClick:function(){var e=Object(i.b)();Object(i.e)(e).then((function(){console.log("Sign-out successful"),b.a.fire({title:"Logout?",text:"You will be signed out",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!0}).then((function(e){e.isConfirmed?(b.a.fire("","Logout successful","success"),l.push("/")):e.dismiss===b.a.DismissReason.cancel&&b.a.fire("Welcome back","","success")}))})).catch((function(e){}))},className:"rounded-full bg-red-700 text-white text-sm m-8 hover:bg-red-900 ",children:Object(x.jsx)("li",{className:"text-center py-3",children:Object(x.jsx)("span",{children:"Log Out"})})})]})]})})})}),Object(x.jsxs)("main",{role:"main",class:"w-full sm:w-2/3 md:w-3/4 text-center bg-gray-200",children:[Object(x.jsx)("span",{className:"font-bold",children:"Welcome"}),Object(x.jsxs)("div",{class:"grid grid-cols-3 gap-4",children:[Object(x.jsx)("div",{children:"1"}),Object(x.jsx)("div",{children:"2"}),Object(x.jsx)("div",{children:"9"})]})]})]})})})},p=c.p+"static/media/signup.e9633564.svg",O=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],l=Object(n.useState)(""),o=Object(r.a)(l,2),d=o[0],j=o[1];return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"min-h-screen w-screen bg-gray-200 sm: px-6 flex flex-col justify-center ",children:Object(x.jsx)("div",{className:"p-1 xs:p-0 mx-auto md:w-full md:max-w-md",children:Object(x.jsx)("div",{className:"bg-white shadow w-full rounded-lg divide-y divide-gray-200",children:Object(x.jsxs)("div",{className:"px-10 py-10",children:[Object(x.jsx)("div",{className:"flex justify-center",children:Object(x.jsx)("img",{src:p,alt:"sign up",className:"mb-7 w-3/5"})}),Object(x.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Email"}),Object(x.jsx)("input",{className:"border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full",type:"email",name:"email",value:c,onChange:function(e){return s(e.target.value)}}),Object(x.jsx)("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",value:d,onChange:function(e){return j(e.target.value)},className:"border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"}),Object(x.jsx)("button",{onClick:function(){var e=Object(i.b)();Object(i.a)(e,c,d).then((function(){Object(i.c)(e.currentUser).then((function(){b.a.fire({text:"Click on the link in your email to verify your account.",icon:"info",confirmButtonText:"OK"})}))})).catch((function(e){var t=e.message;console.log(t),b.a.fire({title:t,text:"Please try again",icon:"error",confirmButtonText:"OK"})}))},type:"button",className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  hover:from-pink-500 hover:to-yellow-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block",children:Object(x.jsx)("span",{className:"inline-block",children:"Sign Up"})}),Object(x.jsxs)("p",{className:"text-center pt-7 text-gray-600",children:["Have an account? Login"," ",Object(x.jsx)(a.b,{to:"/",children:Object(x.jsx)("span",{className:"hover:text-green-400 font-bold",children:"here"})})]})]})})})})})};var g=function(){return Object(x.jsx)(a.a,{basename:"/project-x",children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",component:m}),Object(x.jsx)(d.a,{path:"/signup",component:O}),Object(x.jsx)(d.a,{path:"/landingpage",component:f})]})})};c(66);l.a.render(Object(x.jsx)(g,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.43a8f616.chunk.js.map