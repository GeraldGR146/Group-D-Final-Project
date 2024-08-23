"use strict";(()=>{var e={};e.id=97,e.ids=[97,660],e.modules={8890:(e,s,t)=>{t.r(s),t.d(s,{config:()=>p,default:()=>d,getServerSideProps:()=>m,getStaticPaths:()=>u,getStaticProps:()=>g,reportWebVitals:()=>x,routeModule:()=>N,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>h});var a=t(7093),r=t(5244),l=t(1323),n=t(2899),i=t.n(n),c=t(5481),o=t(3678);let d=(0,l.l)(o,"default"),g=(0,l.l)(o,"getStaticProps"),u=(0,l.l)(o,"getStaticPaths"),m=(0,l.l)(o,"getServerSideProps"),p=(0,l.l)(o,"config"),x=(0,l.l)(o,"reportWebVitals"),h=(0,l.l)(o,"unstable_getStaticProps"),j=(0,l.l)(o,"unstable_getStaticPaths"),b=(0,l.l)(o,"unstable_getStaticParams"),f=(0,l.l)(o,"unstable_getServerProps"),v=(0,l.l)(o,"unstable_getServerSideProps"),N=new a.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/MainPage/Category",pathname:"/MainPage/Category",bundlePath:"",filename:""},components:{App:c.default,Document:i()},userland:o})},9517:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t(997),r=t(6689);let l=()=>{let e=["assets/electronics.banner.jpeg","assets/grocceries.banner.jpg","assets/chair.banner.jpeg","assets/wayang.banner.jpeg","assets/download.banner.jpeg","assets/download1.banner.jpeg","assets/download2.banner.jpeg","assets/groceries.banner.jpeg","assets/images.banner.jpeg","assets/images2.banner.jpeg"],[s,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let s=setInterval(()=>{t(s=>(s+1)%e.length)},5e3);return()=>clearInterval(s)},[e.length]),(0,a.jsxs)("div",{className:"relative w-full h-64 overflow-hidden",children:[a.jsx("div",{className:"flex transition-transform duration-1000 ease-in-out",style:{transform:`translateX(-${100*s}%)`},children:e.map((e,s)=>a.jsx("div",{className:"min-w-full h-full justify-center align-middle",children:a.jsx("img",{src:e,alt:`Banner ${s+1}`,className:"w-fit h-fit object-contain justify-center align-middle"})},s))}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2",children:e.map((e,r)=>a.jsx("div",{className:`w-3 h-3 rounded-full cursor-pointer ${s===r?"bg-blue-500":"bg-gray-300"}`,onClick:()=>t(r)},r))})]})}},3678:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var a=t(997);t(6689);let r=({product_id:e,seller_id:s,store_id:t,name:r,description:l,price:n,quantity:i,product_type:c,image_url:o,onAddToCart:d,onAddToWishlist:g,location:u,store_name:m})=>a.jsx("div",{children:(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6 max-w-sm",children:[(0,a.jsxs)("div",{children:[a.jsx("p",{className:"text-gray-500 text-sm",children:"Comodity"}),a.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Type Product"}),a.jsx("a",{href:"#",className:"text-sm text-gray-500 mt-4 inline-block",children:"Explore Items"})]}),a.jsx("img",{src:"assets/detergent.png",alt:"Detergent",className:"w-24 h-32 object-contain"})]})});var l=t(6511),n=t(9517),i=t(459);let c=()=>(0,a.jsxs)("section",{children:[a.jsx(n.default,{}),(0,a.jsxs)("div",{className:"container mx-auto p-4",children:[a.jsx("div",{className:"flex justify-center my-8",children:a.jsx("h2",{className:"text-2xl font-bold",children:"Category"})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[a.jsx(r,{title:"Discount Product 1",content:"Description of Discount product 1"}),a.jsx(r,{title:"Discount Product 2",content:"Description of Discount product 2"}),a.jsx(r,{title:"Discount Product 3",content:"Description of Discount product 3"}),a.jsx(r,{title:"Discount Product 4",content:"Description of Discount product 4"})]}),a.jsx(l.default,{}),a.jsx(i.default,{})]})]})},459:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var a=t(997);t(6689);let r=function(){return(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[a.jsx("h1",{className:"flex justify-center text-3xl font-bold mb-4",children:"HOW TO ORDER"}),(0,a.jsxs)("div",{className:"grid grid-cols-4 gap-4",children:[(0,a.jsxs)("div",{className:"bg-gray-200 p-4 rounded-lg",children:[a.jsx("img",{src:"assets/people.png",alt:"Register/Login",className:"w-full h-32 object-contain rounded-lg mb-4"}),a.jsx("h3",{className:"text-lg font-bold mb-2",children:"1. Register/Login"}),a.jsx("p",{className:"text-sm",children:"Please register or if you already have an account, please log in."})]}),(0,a.jsxs)("div",{className:"bg-gray-200 p-4 rounded-lg",children:[a.jsx("img",{src:"assets/cart1.png",alt:"add to cart",className:"w-full h-32 object-contain rounded-lg mb-4"}),a.jsx("h3",{className:"text-lg font-bold mb-2",children:"2. add to cart"}),a.jsx("p",{className:"text-sm",children:"add to the cart."})]}),(0,a.jsxs)("div",{className:"bg-gray-200 p-4 rounded-lg",children:[a.jsx("img",{src:"assets/pay.jpeg",alt:"pay with best price",className:"w-full h-32 object-contain rounded-lg mb-4"}),a.jsx("h3",{className:"text-lg font-bold mb-2",children:"3. pay with best price"}),a.jsx("p",{className:"text-sm",children:"pay with any methode."})]}),(0,a.jsxs)("div",{className:"bg-gray-200 p-4 rounded-lg",children:[a.jsx("img",{src:"assets/ship.png",alt:"shiping",className:"w-full h-32 object-contain rounded-lg mb-4"}),a.jsx("h3",{className:"text-lg font-bold mb-2",children:"4. shiping your order"}),a.jsx("p",{className:"text-sm",children:"ship and wait."})]})]})]})}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[117,899,664,203],()=>t(8890));module.exports=a})();