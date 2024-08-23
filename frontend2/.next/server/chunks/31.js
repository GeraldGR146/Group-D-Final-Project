exports.id=31,exports.ids=[31],exports.modules={1390:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var r=t(997),a=t(6689);let l=({onSearch:e})=>{let[s,t]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"flex justify-center",children:[r.jsx("input",{type:"text",value:s,onChange:e=>{t(e.target.value)},className:"w-full max-w-lg p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Search for products and stores..."}),r.jsx("button",{onClick:()=>{e(s)},className:"ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Search"})]})}},5481:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>h});var r=t(997);t(9605);var a=t(6689),l=t.n(a),c=t(1664),i=t.n(c),x=t(1390);let d=()=>r.jsx("header",{className:"bg-gray-100",children:(0,r.jsxs)("div",{className:"w-[1200px] mx-auto h-[60px] flex items-center justify-between border-b border-gray-200 bg-white",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-8",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"App Name"}),(0,r.jsxs)("nav",{className:"flex space-x-6 text-gray-600",children:[r.jsx(i(),{href:"/",className:"hover:text-gray-800",children:"Home"}),r.jsx("div",{className:"relative group",children:(0,r.jsxs)(i(),{href:"/products",className:"hover:text-gray-800 flex items-center",children:["Product ",r.jsx("i",{className:"fas fa-chevron-down ml-1 text-xs"})]})}),r.jsx(i(),{href:"/shopping_cart",className:"hover:text-gray-800",children:"Shopping Cart"}),r.jsx(i(),{href:"#",className:"hover:text-gray-800",children:"Blog"}),r.jsx(i(),{href:"#",className:"hover:text-gray-800",children:"Contact"}),r.jsx(i(),{href:"#",className:"hover:text-gray-800",children:"Pages"})]})]}),r.jsx(x.Z,{}),(0,r.jsxs)("div",{className:"flex items-center space-x-4 text-blue-600",children:[r.jsx(i(),{href:"/register",className:"hover:underline",children:"Login / Register"}),r.jsx(i(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-search"})}),r.jsx(i(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-shopping-cart"})}),r.jsx(i(),{href:"#",className:"text-gray-500 hover:text-blue-600",children:r.jsx("i",{className:"fas fa-heart"})})]})]})});class n extends l().Component{render(){return(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:this.props.title}),r.jsx("ul",{children:this.props.items.map((e,s)=>r.jsx("li",{className:"mb-2",children:e},s))})]})}}class o extends l().Component{render(){return r.jsx("div",{className:"mt-8 text-center",children:r.jsx("p",{className:"text-sm text-gray-600",children:"Description anything"})})}}class m extends l().Component{render(){return(0,r.jsxs)("footer",{className:"bg-gray-100 p-10",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{className:"flex-1",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"App Name"}),(0,r.jsxs)("div",{className:"flex space-x-2",children:[r.jsx("a",{href:"#",className:"text-blue-600",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx("a",{href:"#",className:"text-pink-600",children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"#",className:"text-blue-400",children:r.jsx("i",{className:"fab fa-twitter"})})]})]}),r.jsx(n,{title:"Company Info",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(n,{title:"Legal",items:["About Us","Carrier","We are hiring","Blog"]}),r.jsx(n,{title:"Features",items:["Business Marketing","User Analytic","Live Chat","Unlimited Support"]}),r.jsx(n,{title:"Resources",items:["IOS & Android","Watch a Demo","Customers","API"]}),(0,r.jsxs)("div",{className:"flex-1 px-4",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Get In Touch"}),(0,r.jsxs)("form",{className:"flex mb-4",children:[r.jsx("input",{type:"email",placeholder:"Your Email",className:"p-2 border border-gray-300 rounded-l-md flex-grow"}),r.jsx("button",{type:"submit",className:"p-2 bg-blue-500 text-white rounded-r-md",children:"Subscribe"})]}),r.jsx("p",{className:"text-gray-600",children:"Lorem ipsum dolor amit."})]})]}),r.jsx(o,{})]})}}let h=function({Component:e,pageProps:s}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(d,{}),r.jsx(e,{...s}),r.jsx(m,{})]})}},3590:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(997);t(6689);let a=({orderNumber:e,orderDate:s,deliveryDate:t,orderStatus:a,paymentMethod:l,productImage:c,productName:i,color:x,qty:d,total:n})=>(0,r.jsxs)("div",{className:"bg-white p-4 mb-4 rounded-lg shadow",children:[(0,r.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{className:"text-sm font-semibold",children:["Order no: #",e]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Order Date: ",s]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Estimated Delivery Date: ",t]})]}),(0,r.jsxs)("div",{className:"text-right",children:[(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Order Status: ",a]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Payment Method: ",l]})]})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[r.jsx("img",{src:c,alt:"Product",className:"w-16 h-16 object-cover rounded"}),(0,r.jsxs)("div",{className:"flex-grow",children:[r.jsx("p",{className:"text-sm font-semibold",children:i}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Colour: ",x]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Qty: ",d]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:["Total: $",n]})]}),r.jsx("button",{className:"px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-full",children:"View Detail"})]})]}),l=()=>(0,r.jsxs)("div",{className:"max-w-4xl mx-auto p-4",children:[r.jsx("h1",{className:"text-xl font-semibold mb-6",children:"My Orders"}),(0,r.jsxs)("div",{className:"flex space-x-4 mb-4",children:[r.jsx("button",{className:"px-6 py-2 text-sm font-semibold text-white bg-black rounded-full",children:"Active"}),r.jsx("button",{className:"px-6 py-2 text-sm font-semibold text-gray-500 bg-white rounded-full",children:"Cancelled"}),r.jsx("button",{className:"px-6 py-2 text-sm font-semibold text-gray-500 bg-white rounded-full",children:"Completed"})]}),[{orderNumber:"123456789",orderDate:"6 June 2023 04:50 PM",deliveryDate:"8 June 2023",orderStatus:"In progress",paymentMethod:"Cash on delivery",productImage:"https://placehold.co/100x100",productName:"Black Printed T-shirt",color:"Black",qty:1,total:12},{orderNumber:"123456789",orderDate:"6 June 2023 04:50 PM",deliveryDate:"8 June 2023",orderStatus:"Shipped",paymentMethod:"Cash on delivery",productImage:"https://placehold.co/100x100",productName:"Printed blue & white Case Cover",color:"Blue",qty:1,total:14},{orderNumber:"123456789",orderDate:"6 June 2023 04:50 PM",deliveryDate:"8 June 2023",orderStatus:"In progress",paymentMethod:"Cash on delivery",productImage:"https://placehold.co/100x100",productName:"Blue Shirt",color:"Blue",qty:1,total:19}].map((e,s)=>r.jsx(a,{...e},s))]})},9605:()=>{}};