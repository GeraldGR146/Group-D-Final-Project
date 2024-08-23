(()=>{var e={};e.id=686,e.ids=[686,888,660],e.modules={5354:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>g,default:()=>x,getServerSideProps:()=>p,getStaticPaths:()=>h,getStaticProps:()=>u,reportWebVitals:()=>b,routeModule:()=>S,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>f});var a=s(7093),l=s(5244),i=s(1323),n=s(2899),o=s.n(n),c=s(5481),d=s(7290),m=e([d]);d=(m.then?(await m)():m)[0];let x=(0,i.l)(d,"default"),u=(0,i.l)(d,"getStaticProps"),h=(0,i.l)(d,"getStaticPaths"),p=(0,i.l)(d,"getServerSideProps"),g=(0,i.l)(d,"config"),b=(0,i.l)(d,"reportWebVitals"),f=(0,i.l)(d,"unstable_getStaticProps"),j=(0,i.l)(d,"unstable_getStaticPaths"),N=(0,i.l)(d,"unstable_getStaticParams"),v=(0,i.l)(d,"unstable_getServerProps"),y=(0,i.l)(d,"unstable_getServerSideProps"),S=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/me/promotion",pathname:"/me/promotion",bundlePath:"",filename:""},components:{App:c.default,Document:o()},userland:d});r()}catch(e){r(e)}})},1390:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var r=s(997),a=s(6689);let l=({onSearch:e})=>{let[t,s]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"flex justify-center",children:[r.jsx("input",{type:"text",value:t,onChange:e=>{s(e.target.value)},className:"w-full max-w-lg p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Search for products and stores..."}),r.jsx("button",{onClick:()=>{e(t)},className:"ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Search"})]})}},5481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(997);s(9605);var a=s(6689),l=s.n(a),i=s(1664),n=s.n(i),o=s(1390);let c=()=>r.jsx("header",{className:"bg-gray-100",children:(0,r.jsxs)("div",{className:"w-[1200px] mx-auto h-[60px] flex items-center justify-between border-b border-gray-200 bg-white",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-8",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"App Name"}),(0,r.jsxs)("nav",{className:"flex space-x-6 text-gray-600",children:[r.jsx(n(),{href:"/",className:"hover:text-gray-800",children:"Home"}),r.jsx("div",{className:"relative group",children:(0,r.jsxs)(n(),{href:"/products",className:"hover:text-gray-800 flex items-center",children:["Product ",r.jsx("i",{className:"fas fa-chevron-down ml-1 text-xs"})]})}),r.jsx(n(),{href:"/shopping_cart",className:"hover:text-gray-800",children:"Shopping Cart"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Blog"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Contact"}),r.jsx(n(),{href:"#",className:"hover:text-gray-800",children:"Pages"})]})]}),r.jsx(o.Z,{}),(0,r.jsxs)("div",{className:"flex items-center space-x-4 text-blue-600",children:[r.jsx(n(),{href:"/register",className:"hover:underline",children:"Login / Register"}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-search"})}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-shopping-cart"})}),r.jsx(n(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-heart"})})]})]})});class d extends l().Component{render(){return(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:this.props.title}),r.jsx("ul",{children:this.props.items.map((e,t)=>r.jsx("li",{className:"mb-2",children:e},t))})]})}}class m extends l().Component{render(){return r.jsx("div",{className:"mt-8 text-center",children:r.jsx("p",{className:"text-sm text-gray-600",children:"Description anything"})})}}class x extends l().Component{render(){return(0,r.jsxs)("footer",{className:"bg-gray-100 p-10",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex-1",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"App Name"}),(0,r.jsxs)("div",{className:"flex space-x-2",children:[r.jsx("a",{href:"#",className:"text-blue-600",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#",className:"text-pink-600",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#",className:"text-blue-400",children:r.jsx("i",{className:"fab fa-twitter"})})]})]}),r.jsx(d,{title:"Company Info",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(d,{title:"Legal",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(d,{title:"Features",items:["Business Marketing","User Analytic","Live Chat","Unlimited Support"]}),r.jsx(d,{title:"Resources",items:["IOS & Android","Watch a Demo","Customers","API"]}),(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Get In Touch"}),(0,r.jsxs)("form",{className:"flex mb-4",children:[r.jsx("input",{type:"email",placeholder:"Your Email",className:"p-2 border border-gray-300 rounded-l-md flex-grow"}),r.jsx("button",{type:"submit",className:"p-2 bg-blue-500 text-white rounded-r-md",children:"Subscribe"})]}),r.jsx("p",{className:"text-gray-600",children:"Lorem ipsum dolor amit."})]})]}),r.jsx(m,{})]})}}let u=function({Component:e,pageProps:t}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(c,{}),r.jsx(e,{...t}),r.jsx(x,{})]})}},7290:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>d});var a=s(997),l=s(1163),i=s(2296),n=s(5609),o=s(9648),c=e([o]);o=(c.then?(await c)():c)[0];let d=()=>{let e=(0,l.useRouter)(),t=n.object({code:n.string().required("Promotion code is required"),discount_percentage:n.number().min(0,"Discount percentage must be at least 0").max(100,"Discount percentage must be at most 100").required("Discount percentage is required"),start_date:n.date().nullable().transform((e,t)=>""===t?null:e).required("Start date is required"),end_date:n.date().nullable().transform((e,t)=>""===t?null:e).required("End date is required")}),s=async(t,{setSubmitting:s})=>{s(!0);let r=sessionStorage.getItem("store_id"),a=sessionStorage.getItem("access_token");try{let s=await o.default.post(`http://127.0.0.1:5000/stores/${r}/promotions`,t,{headers:{Authorization:`Bearer ${a}`}});201===s.status&&(alert("Promotion created successfully"),e.push("/me"))}catch(e){console.error("Error creating promotion:",e),alert("Failed to create promotion")}finally{s(!1)}};return(0,a.jsxs)("div",{className:"max-w-md mx-auto p-6",children:[a.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Create a New Promotion"}),a.jsx(i.Formik,{initialValues:{code:"",discount_percentage:"",start_date:"",end_date:""},validationSchema:t,onSubmit:s,children:({isSubmitting:e})=>(0,a.jsxs)(i.Form,{children:[(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"code",className:"block text-sm font-medium",children:"Promotion Code"}),a.jsx(i.Field,{type:"text",id:"code",name:"code",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm"}),a.jsx(i.ErrorMessage,{name:"code",component:"div",className:"text-red-500 text-sm"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"discount_percentage",className:"block text-sm font-medium",children:"Discount Percentage"}),a.jsx(i.Field,{type:"number",id:"discount_percentage",name:"discount_percentage",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm"}),a.jsx(i.ErrorMessage,{name:"discount_percentage",component:"div",className:"text-red-500 text-sm"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"start_date",className:"block text-sm font-medium",children:"Start Date"}),a.jsx(i.Field,{type:"date",id:"start_date",name:"start_date",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm"}),a.jsx(i.ErrorMessage,{name:"start_date",component:"div",className:"text-red-500 text-sm"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"end_date",className:"block text-sm font-medium",children:"End Date"}),a.jsx(i.Field,{type:"date",id:"end_date",name:"end_date",className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm"}),a.jsx(i.ErrorMessage,{name:"end_date",component:"div",className:"text-red-500 text-sm"})]}),a.jsx("div",{className:"flex justify-end",children:a.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700",disabled:e,children:e?"Submitting...":"Create Promotion"})})]})})]})};r()}catch(e){r(e)}})},9605:()=>{},2296:e=>{"use strict";e.exports=require("formik")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},5609:e=>{"use strict";e.exports=require("yup")},9648:e=>{"use strict";e.exports=import("axios")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[117,899,664,342],()=>s(5354));module.exports=r})();