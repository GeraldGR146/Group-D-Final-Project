(()=>{var e={};e.id=948,e.ids=[948,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,s){return s in t?t[s]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,s)):"function"==typeof t&&"default"===s?t:void 0}}})},7691:(e,t,s)=>{"use strict";s.r(t),s.d(t,{config:()=>v,default:()=>p,getServerSideProps:()=>j,getStaticPaths:()=>g,getStaticProps:()=>f,reportWebVitals:()=>N,routeModule:()=>_,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>b});var r={};s.r(r),s.d(r,{default:()=>h});var a=s(7093),i=s(5244),n=s(1323),l=s(2899),c=s.n(l),o=s(5481),d=s(997),x=s(6689),m=s.n(x);(function(){var e=Error("Cannot find module '../services/ProductService'");throw e.code="MODULE_NOT_FOUND",e})(),function(){var e=Error("Cannot find module '../Review/Rating'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '../Review/CommentForm'");throw e.code="MODULE_NOT_FOUND",e}(),function(){var e=Error("Cannot find module '../Review/ReviewList'");throw e.code="MODULE_NOT_FOUND",e}();class u extends m().Component{constructor(e){super(e),this.handleRatingChange=e=>{this.setState({rating:e})},this.handleReviewSubmit=e=>{this.setState(t=>({reviews:[...t.reviews,e],rating:0}))},this.state={product:null,reviews:[],rating:0}}async componentDidMount(){try{let e=await Object(function(){var e=Error("Cannot find module '../services/ProductService'");throw e.code="MODULE_NOT_FOUND",e}())(this.props.productId);this.setState({product:e})}catch(e){console.error("Error fetching product:",e)}}render(){let{product:e}=this.state;return e?d.jsx("div",{className:"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl",children:d.jsx("div",{className:"md:flex",children:(0,d.jsxs)("div",{className:"p-8",children:[d.jsx("div",{className:"uppercase tracking-wide text-sm text-indigo-500 font-semibold",children:e.category}),d.jsx("h1",{className:"block mt-1 text-lg leading-tight font-medium text-black",children:e.name}),d.jsx("p",{className:"mt-2 text-gray-500",children:e.description}),(0,d.jsxs)("div",{className:"mt-4",children:[d.jsx("span",{className:"text-gray-500",children:"Quantity: "}),e.quantity]}),(0,d.jsxs)("div",{className:"mt-4",children:[d.jsx("span",{className:"text-gray-500",children:"Price: "}),"$",e.price.toFixed(2)]}),(0,d.jsxs)("div",{className:"mt-4",children:[d.jsx("span",{className:"text-gray-500",children:"Location: "}),e.location]}),d.jsx("div",{className:"mt-4",children:(0,d.jsxs)("span",{children:[d.jsx(Object(function(){var e=Error("Cannot find module '../Review/Rating'");throw e.code="MODULE_NOT_FOUND",e}()),{rating:this.state.rating,onRate:this.handleRatingChange}),d.jsx(Object(function(){var e=Error("Cannot find module '../Review/CommentForm'");throw e.code="MODULE_NOT_FOUND",e}()),{rating:this.state.rating,onSubmit:this.handleReviewSubmit}),d.jsx(Object(function(){var e=Error("Cannot find module '../Review/ReviewList'");throw e.code="MODULE_NOT_FOUND",e}()),{reviews:this.state.reviews})]})})]})})}):d.jsx("div",{children:"Loading..."})}}let h=u,p=(0,n.l)(r,"default"),f=(0,n.l)(r,"getStaticProps"),g=(0,n.l)(r,"getStaticPaths"),j=(0,n.l)(r,"getServerSideProps"),v=(0,n.l)(r,"config"),N=(0,n.l)(r,"reportWebVitals"),b=(0,n.l)(r,"unstable_getStaticProps"),w=(0,n.l)(r,"unstable_getStaticPaths"),P=(0,n.l)(r,"unstable_getStaticParams"),y=(0,n.l)(r,"unstable_getServerProps"),S=(0,n.l)(r,"unstable_getServerSideProps"),_=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/pages_product/productinfo",pathname:"/pages_product/productinfo",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:r})},1390:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(997),a=s(6689);let i=({onSearch:e})=>{let[t,s]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"flex justify-center",children:[r.jsx("input",{type:"text",value:t,onChange:e=>{s(e.target.value)},className:"w-full max-w-lg p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Search for products and stores..."}),r.jsx("button",{onClick:()=>{e(t)},className:"ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Search"})]})}},5481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(997);s(9605);var a=s(6689),i=s.n(a),n=s(1664),l=s.n(n),c=s(1390);let o=()=>r.jsx("header",{className:"bg-gray-100",children:(0,r.jsxs)("div",{className:"w-[1200px] mx-auto h-[60px] flex items-center justify-between border-b border-gray-200 bg-white",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-8",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"App Name"}),(0,r.jsxs)("nav",{className:"flex space-x-6 text-gray-600",children:[r.jsx(l(),{href:"/",className:"hover:text-gray-800",children:"Home"}),r.jsx("div",{className:"relative group",children:(0,r.jsxs)(l(),{href:"/products",className:"hover:text-gray-800 flex items-center",children:["Product ",r.jsx("i",{className:"fas fa-chevron-down ml-1 text-xs"})]})}),r.jsx(l(),{href:"/shopping_cart",className:"hover:text-gray-800",children:"Shopping Cart"}),r.jsx(l(),{href:"#",className:"hover:text-gray-800",children:"Blog"}),r.jsx(l(),{href:"#",className:"hover:text-gray-800",children:"Contact"}),r.jsx(l(),{href:"#",className:"hover:text-gray-800",children:"Pages"})]})]}),r.jsx(c.Z,{}),(0,r.jsxs)("div",{className:"flex items-center space-x-4 text-blue-600",children:[r.jsx(l(),{href:"/register",className:"hover:underline",children:"Login / Register"}),r.jsx(l(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-search"})}),r.jsx(l(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-shopping-cart"})}),r.jsx(l(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-heart"})})]})]})});class d extends i().Component{render(){return(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:this.props.title}),r.jsx("ul",{children:this.props.items.map((e,t)=>r.jsx("li",{className:"mb-2",children:e},t))})]})}}class x extends i().Component{render(){return r.jsx("div",{className:"mt-8 text-center",children:r.jsx("p",{className:"text-sm text-gray-600",children:"Description anything"})})}}class m extends i().Component{render(){return(0,r.jsxs)("footer",{className:"bg-gray-100 p-10",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex-1",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"App Name"}),(0,r.jsxs)("div",{className:"flex space-x-2",children:[r.jsx("a",{href:"#",className:"text-blue-600",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#",className:"text-pink-600",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#",className:"text-blue-400",children:r.jsx("i",{className:"fab fa-twitter"})})]})]}),r.jsx(d,{title:"Company Info",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(d,{title:"Legal",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(d,{title:"Features",items:["Business Marketing","User Analytic","Live Chat","Unlimited Support"]}),r.jsx(d,{title:"Resources",items:["IOS & Android","Watch a Demo","Customers","API"]}),(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Get In Touch"}),(0,r.jsxs)("form",{className:"flex mb-4",children:[r.jsx("input",{type:"email",placeholder:"Your Email",className:"p-2 border border-gray-300 rounded-l-md flex-grow"}),r.jsx("button",{type:"submit",className:"p-2 bg-blue-500 text-white rounded-r-md",children:"Subscribe"})]}),r.jsx("p",{className:"text-gray-600",children:"Lorem ipsum dolor amit."})]})]}),r.jsx(x,{})]})}}let u=function({Component:e,pageProps:t}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(o,{}),r.jsx(e,{...t}),r.jsx(m,{})]})}},9605:()=>{},5244:(e,t)=>{"use strict";var s;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return s}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(s||(s={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[117,899,664],()=>s(7691));module.exports=r})();