(()=>{var e={};e.id=222,e.ids=[222,888,660],e.modules={7337:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{config:()=>g,default:()=>h,getServerSideProps:()=>p,getStaticPaths:()=>u,getStaticProps:()=>m,reportWebVitals:()=>f,routeModule:()=>S,unstable_getServerProps:()=>N,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>j});var a=t(7093),l=t(5244),i=t(1323),n=t(2899),c=t.n(n),o=t(5481),d=t(6390),x=e([d]);d=(x.then?(await x)():x)[0];let h=(0,i.l)(d,"default"),m=(0,i.l)(d,"getStaticProps"),u=(0,i.l)(d,"getStaticPaths"),p=(0,i.l)(d,"getServerSideProps"),g=(0,i.l)(d,"config"),f=(0,i.l)(d,"reportWebVitals"),j=(0,i.l)(d,"unstable_getStaticProps"),b=(0,i.l)(d,"unstable_getStaticPaths"),v=(0,i.l)(d,"unstable_getStaticParams"),N=(0,i.l)(d,"unstable_getServerProps"),y=(0,i.l)(d,"unstable_getServerSideProps"),S=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/checkout",pathname:"/checkout",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:d});r()}catch(e){r(e)}})},1390:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var r=t(997),a=t(6689);let l=({onSearch:e})=>{let[s,t]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"flex justify-center",children:[r.jsx("input",{type:"text",value:s,onChange:e=>{t(e.target.value)},className:"w-full max-w-lg p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Search for products and stores..."}),r.jsx("button",{onClick:()=>{e(s)},className:"ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Search"})]})}},5481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var r=t(997);t(9605);var a=t(6689),l=t.n(a),i=t(1664),n=t.n(i),c=t(1390);let o=()=>r.jsx("header",{className:"bg-gray-100",children:(0,r.jsxs)("div",{className:"w-[1200px] mx-auto h-[60px] flex items-center justify-between border-b border-gray-200 bg-white",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-8",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"App Name"}),(0,r.jsxs)("nav",{className:"flex space-x-6 text-gray-600",children:[r.jsx(n(),{href:"/",className:"hover:text-gray-800",children:"Home"}),r.jsx("div",{className:"relative group",children:(0,r.jsxs)(n(),{href:"/products",className:"hover:text-gray-800 flex items-center",children:["Product ",r.jsx("i",{className:"fas fa-chevron-down ml-1 text-xs"})]})}),r.jsx(n(),{href:"/shopping_cart",className:"hover:text-gray-800",children:"Shopping Cart"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Blog"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Contact"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Pages"})]})]}),r.jsx(c.Z,{}),(0,r.jsxs)("div",{className:"flex items-center space-x-4 text-blue-600",children:[r.jsx(n(),{href:"/register",className:"hover:underline",children:"Login / Register"}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-search"})}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-shopping-cart"})}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-heart"})})]})]})});class d extends l().Component{render(){return(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:this.props.title}),r.jsx("ul",{children:this.props.items.map((e,s)=>r.jsx("li",{className:"mb-2",children:e},s))})]})}}class x extends l().Component{render(){return r.jsx("div",{className:"mt-8 text-center",children:r.jsx("p",{className:"text-sm text-gray-600",children:"Description anything"})})}}class h extends l().Component{render(){return(0,r.jsxs)("footer",{className:"bg-gray-100 p-10",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex-1",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"App Name"}),(0,r.jsxs)("div",{className:"flex space-x-2",children:[r.jsx("a",{href:"#",className:"text-blue-600",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#",className:"text-pink-600",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#",className:"text-blue-400",children:r.jsx("i",{className:"fab fa-twitter"})})]})]}),r.jsx(d,{title:"Company Info",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(d,{title:"Legal",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(d,{title:"Features",items:["Business Marketing","User Analytic","Live Chat","Unlimited Support"]}),r.jsx(d,{title:"Resources",items:["IOS & Android","Watch a Demo","Customers","API"]}),(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Get In Touch"}),(0,r.jsxs)("form",{className:"flex mb-4",children:[r.jsx("input",{type:"email",placeholder:"Your Email",className:"p-2 border border-gray-300 rounded-l-md flex-grow"}),r.jsx("button",{type:"submit",className:"p-2 bg-blue-500 text-white rounded-r-md",children:"Subscribe"})]}),r.jsx("p",{className:"text-gray-600",children:"Lorem ipsum dolor amit."})]})]}),r.jsx(x,{})]})}}let m=function({Component:e,pageProps:s}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(o,{}),r.jsx(e,{...s}),r.jsx(h,{})]})}},6390:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{default:()=>o});var a=t(997),l=t(6689),i=t(9648),n=t(1163),c=e([i]);i=(c.then?(await c)():c)[0];let o=()=>{let[e,s]=(0,l.useState)(""),[t,r]=(0,l.useState)(0),c=(0,n.useRouter)();(0,l.useEffect)(()=>{let e=sessionStorage.getItem("total_amount");e&&r(parseFloat(e))},[]);let o=async()=>{if(!e){alert("Please select a payment method");return}try{let s=await i.default.post("http://127.0.0.1:5000/transactions",{payment_method:e},{headers:{Authorization:`Bearer ${sessionStorage.getItem("access_token")}`,"Content-Type":"application/json"}});201===s.status&&(alert("Order confirmed!"),sessionStorage.removeItem("total_amount"),sessionStorage.removeItem("order_id"),c.push("/me"))}catch(e){console.error("There was an error creating the transaction:",e),alert("Failed to confirm order. Please try again.")}};return a.jsx("div",{className:"max-w-3xl mx-auto py-12",children:(0,a.jsxs)("div",{className:"bg-white shadow-md rounded-lg p-6",children:[a.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Checkout"}),a.jsx("div",{className:"mb-6",children:(0,a.jsxs)("div",{className:"flex justify-between text-lg font-semibold",children:[a.jsx("p",{children:"Grand Total"}),(0,a.jsxs)("p",{children:["Rp ",t.toFixed(2)]})]})}),(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Payment Method"}),(0,a.jsxs)("select",{className:"w-full border rounded p-2",value:e,onChange:e=>s(e.target.value),children:[a.jsx("option",{value:"",children:"Select Payment Method"}),a.jsx("option",{value:"credit_card",children:"Credit Card"}),a.jsx("option",{value:"paypal",children:"PayPal"}),a.jsx("option",{value:"bank_transfer",children:"Bank Transfer"}),a.jsx("option",{value:"cash",children:"Cash"}),a.jsx("option",{value:"cod",children:"Cash on Delivery (COD)"})]})]}),a.jsx("div",{className:"text-right",children:a.jsx("button",{className:"bg-green-500 text-white px-6 py-3 rounded",onClick:o,children:"Confirm Order"})})]})})};r()}catch(e){r(e)}})},9605:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9648:e=>{"use strict";e.exports=import("axios")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[117,899,664,342],()=>t(7337));module.exports=r})();