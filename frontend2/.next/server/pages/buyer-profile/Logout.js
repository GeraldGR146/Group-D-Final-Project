(()=>{var e={};e.id=872,e.ids=[872,888,660],e.modules={1323:(e,s)=>{"use strict";Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,t){return t in s?s[t]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,t)):"function"==typeof s&&"default"===t?s:void 0}}})},4794:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{config:()=>f,default:()=>d,getServerSideProps:()=>g,getStaticPaths:()=>h,getStaticProps:()=>m,reportWebVitals:()=>p,routeModule:()=>P,unstable_getServerProps:()=>N,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>b});var a=t(7093),l=t(5244),i=t(1323),n=t(2899),c=t.n(n),o=t(5481),x=t(1618),u=e([x]);x=(u.then?(await u)():u)[0];let d=(0,i.l)(x,"default"),m=(0,i.l)(x,"getStaticProps"),h=(0,i.l)(x,"getStaticPaths"),g=(0,i.l)(x,"getServerSideProps"),f=(0,i.l)(x,"config"),p=(0,i.l)(x,"reportWebVitals"),b=(0,i.l)(x,"unstable_getStaticProps"),j=(0,i.l)(x,"unstable_getStaticPaths"),v=(0,i.l)(x,"unstable_getStaticParams"),N=(0,i.l)(x,"unstable_getServerProps"),y=(0,i.l)(x,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/buyer-profile/Logout",pathname:"/buyer-profile/Logout",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:x});r()}catch(e){r(e)}})},1390:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var r=t(997),a=t(6689);let l=({onSearch:e})=>{let[s,t]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"flex justify-center",children:[r.jsx("input",{type:"text",value:s,onChange:e=>{t(e.target.value)},className:"w-full max-w-lg p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Search for products and stores..."}),r.jsx("button",{onClick:()=>{e(s)},className:"ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Search"})]})}},5481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var r=t(997);t(9605);var a=t(6689),l=t.n(a),i=t(1664),n=t.n(i),c=t(1390);let o=()=>r.jsx("header",{className:"bg-gray-100",children:(0,r.jsxs)("div",{className:"w-[1200px] mx-auto h-[60px] flex items-center justify-between border-b border-gray-200 bg-white",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-8",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"App Name"}),(0,r.jsxs)("nav",{className:"flex space-x-6 text-gray-600",children:[r.jsx(n(),{href:"/",className:"hover:text-gray-800",children:"Home"}),r.jsx("div",{className:"relative group",children:(0,r.jsxs)(n(),{href:"/products",className:"hover:text-gray-800 flex items-center",children:["Product ",r.jsx("i",{className:"fas fa-chevron-down ml-1 text-xs"})]})}),r.jsx(n(),{href:"/shopping_cart",className:"hover:text-gray-800",children:"Shopping Cart"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Blog"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Contact"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Pages"})]})]}),r.jsx(c.Z,{}),(0,r.jsxs)("div",{className:"flex items-center space-x-4 text-blue-600",children:[r.jsx(n(),{href:"/register",className:"hover:underline",children:"Login / Register"}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-search"})}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-shopping-cart"})}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-heart"})})]})]})});class x extends l().Component{render(){return(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:this.props.title}),r.jsx("ul",{children:this.props.items.map((e,s)=>r.jsx("li",{className:"mb-2",children:e},s))})]})}}class u extends l().Component{render(){return r.jsx("div",{className:"mt-8 text-center",children:r.jsx("p",{className:"text-sm text-gray-600",children:"Description anything"})})}}class d extends l().Component{render(){return(0,r.jsxs)("footer",{className:"bg-gray-100 p-10",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex-1",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"App Name"}),(0,r.jsxs)("div",{className:"flex space-x-2",children:[r.jsx("a",{href:"#",className:"text-blue-600",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#",className:"text-pink-600",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#",className:"text-blue-400",children:r.jsx("i",{className:"fab fa-twitter"})})]})]}),r.jsx(x,{title:"Company Info",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(x,{title:"Legal",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(x,{title:"Features",items:["Business Marketing","User Analytic","Live Chat","Unlimited Support"]}),r.jsx(x,{title:"Resources",items:["IOS & Android","Watch a Demo","Customers","API"]}),(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Get In Touch"}),(0,r.jsxs)("form",{className:"flex mb-4",children:[r.jsx("input",{type:"email",placeholder:"Your Email",className:"p-2 border border-gray-300 rounded-l-md flex-grow"}),r.jsx("button",{type:"submit",className:"p-2 bg-blue-500 text-white rounded-r-md",children:"Subscribe"})]}),r.jsx("p",{className:"text-gray-600",children:"Lorem ipsum dolor amit."})]})]}),r.jsx(u,{})]})}}let m=function({Component:e,pageProps:s}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(o,{}),r.jsx(e,{...s}),r.jsx(d,{})]})}},1618:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{default:()=>i});var a=t(9648),l=e([a]);a=(l.then?(await l)():l)[0];let i=async()=>{try{await a.default.post("http://127.0.0.1:5000/logout",{},{headers:{Authorization:`Bearer ${sessionStorage.getItem("access_token")}`}}),sessionStorage.removeItem("access_token"),sessionStorage.removeItem("role"),sessionStorage.removeItem("username"),console.log("Logout successful"),window.location.href="/login"}catch(e){console.error("Logout failed:",e)}};r()}catch(e){r(e)}})},9605:()=>{},5244:(e,s)=>{"use strict";var t;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9648:e=>{"use strict";e.exports=import("axios")},1017:e=>{"use strict";e.exports=require("path")}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[117,899,664],()=>t(4794));module.exports=r})();