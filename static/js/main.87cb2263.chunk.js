(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(18),i=a.n(n),s=(a(25),a(26),a(27),a(2)),o=a(12),d=a(20),l=[{id:1,name:"buttermilk pancakes",category:"breakfast",price:15.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723870/item-1_apln3b.jpg",description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",isSelected:!1,quantity:1,amount:0},{id:2,name:"diner double",category:"lunch",price:13.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723871/item-2_ctg4db.jpg",description:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",isSelected:!1,quantity:1,amount:0},{id:3,name:"godzilla milkshake",category:"shakes",price:6.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-3_pr5yo2.jpg",description:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",isSelected:!1,quantity:1,amount:0},{id:4,name:"country delight",category:"breakfast",price:20.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-4_sd0dvn.jpg",description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, ",isSelected:!1,quantity:1,amount:0},{id:5,name:"egg attack",category:"lunch",price:22.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-5_bujvlo.jpg",description:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",isSelected:!1,quantity:1,amount:0},{id:6,name:"oreo dream",category:"shakes",price:18.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-6_s1yemp.jpg",description:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",isSelected:!1,quantity:1,amount:0},{id:7,name:"bacon overflow",category:"breakfast",price:8.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-7_vuhc43.jpg",description:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ",isSelected:!1,quantity:1,amount:0},{id:8,name:"american classic",category:"lunch",price:12.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-8_eu14nf.jpg",description:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  ",isSelected:!1,quantity:1,amount:0},{id:9,name:"quarantine buddy",category:"shakes",price:16.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-9_ymxg6b.jpg",description:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",isSelected:!1,quantity:1,amount:0}],u=function(e,t){var a=function(e){return e.length>0?e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t})):0},c=function(e){return e.length>0?e.map((function(e){return e.amount})).reduce((function(e,t){return e+t})).toFixed(2):0};switch(console.log("state.selectedItems",e.cartItems),t.type){case"LOAD_BTNS":return Object(s.a)(Object(s.a)({},e),{},{category:t.payload});case"FILTER_MENU":var r=[];return r="all"===t.payload?l.map((function(t){var a=e.selectedItems.find((function(e){return e.id===t.id&&e.isSelected}));return a?Object(s.a)(Object(s.a)({},t),a):t})):l.filter((function(e){return e.category===t.payload})).map((function(t){var a=e.selectedItems.find((function(e){return e.id===t.id&&e.isSelected}));return a?Object(s.a)(Object(s.a)({},t),a):t})),Object(s.a)(Object(s.a)({},e),{},{cartItems:r});case"ADD_ITEM":var n=e.cartItems.map((function(e){return e.id===t.payload?Object(s.a)(Object(s.a)({},e),{},{isSelected:!e.isSelected,amount:e.quantity*e.price}):e})),i=n.filter((function(e){return e.id===t.payload})),d=[].concat(Object(o.a)(e.selectedItems),Object(o.a)(i));return Object(s.a)(Object(s.a)({},e),{},{cartItems:n,selectedItems:d,totalItems:a(d)});case"INCREASE_ITEMS":var u=e.cartItems.map((function(e){return e.id===t.payload?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity+1,amount:e.price*(e.quantity+1)}):e})),m=e.selectedItems.map((function(e){return e.id===t.payload?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity+1,amount:e.price*(e.quantity+1)}):e}));return Object(s.a)(Object(s.a)({},e),{},{cartItems:u,selectedItems:m,totalItems:a(m),totalAmount:c(m)});case"DECREASE_ITEMS":var j=[],b=e.cartItems.map((function(e){return e.id===t.payload?e.quantity>1?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity-1,amount:e.price*(e.quantity-1)}):Object(s.a)(Object(s.a)({},e),{},{quantity:1,isSelected:!1}):e})),p=e.selectedItems.find((function(e){return e.id===t.payload&&1===e.quantity}));return j=p?e.selectedItems.filter((function(e){return e.id!==p.id})):e.selectedItems.map((function(e){return e.id!==t.payload?e:e.quantity>1?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity-1,amount:e.price*(e.quantity-1)}):void 0})),Object(s.a)(Object(s.a)({},e),{},{cartItems:b,selectedItems:j,totalItems:a(j),totalAmount:c(j)});default:throw new Error("no matching action type")}},m=a(0),j=r.a.createContext(),b={isLoading:!1,cartItems:l,selectedItems:[],totalItems:0,totalAmount:0,category:[]};function p(e){var t=e.children,a=Object(c.useReducer)(u,b),r=Object(d.a)(a,2),n=r[0],i=r[1];return Object(c.useEffect)((function(){var e=["all"].concat(Object(o.a)(new Set(l.map((function(e){return e.category})))));i({type:"LOAD_BTNS",payload:e})}),[]),Object(m.jsx)(j.Provider,{value:Object(s.a)(Object(s.a)({},n),{},{filterCategory:function(e){i({type:"FILTER_MENU",payload:e})},addtoCart:function(e){i({type:"ADD_ITEM",payload:Number(e)})},modifyItem:function(e,t){var a=e.target.parentNode.className;i("increase"===a?{type:"INCREASE_ITEMS",payload:t}:{type:"DECREASE_ITEMS",payload:t})}}),children:t})}var h=function(){return Object(c.useContext)(j)};var g=function(e){var t="btn ".concat(e.className),a=h(),c=a.filterCategory,r=a.addtoCart;return a.cartItems,Object(m.jsx)("button",{type:"button",className:t,"data-id":e.id,"data-type":e.data,onClick:function(t){var a=t.target.dataset.type;"category"===a?c(e.category):"cart"===a&&r(t.target.dataset.id)},children:e.children})},y=a(8);var O=function(){var e=h().totalItems;return Object(m.jsxs)("nav",{className:"nav-bar",children:[Object(m.jsx)(y.b,{to:"/food-order-app/",children:Object(m.jsx)("h2",{children:"Food App"})}),Object(m.jsxs)("ul",{className:"links",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:"Services"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/food-order-app/",children:"Menu"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:"Contact Us"})})]}),Object(m.jsx)(y.b,{to:"/cart",children:Object(m.jsxs)(g,{className:"nav-btn",data:"nav",children:[Object(m.jsx)("span",{className:"cart-icon",children:Object(m.jsx)("svg",{"data-id":"nav",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(m.jsx)("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})})}),Object(m.jsx)("span",{"data-id":"nav",className:"nav-msg",children:"Your Cart"}),Object(m.jsx)("span",{"data-id":"nav",className:"item-cnt",children:e})]})})]})};a(37),a(38);var f=function(e){var t=e.id,a=e.qty,c=e.amt,r=e.priceValue,n=h().modifyItem;return Object(m.jsxs)("div",{className:"price-cart",children:[Object(m.jsxs)("div",{className:"add-cart",children:[Object(m.jsx)("div",{className:"decrease",onClick:function(e){return n(e,t)},children:Object(m.jsx)("img",{src:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622725000/minus-sign_qbor3i.svg",alt:"minus",className:"addDec-img"})}),Object(m.jsxs)("span",{className:"cart-qty",children:[" ",a," "]}),Object(m.jsx)("div",{className:"increase",onClick:function(e){return n(e,t)},children:Object(m.jsx)("img",{src:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622724834/plus_o5ki2v.svg",alt:"plus",className:"addDec-img"})})]}),r&&Object(m.jsxs)("span",{className:"price",children:[" ",c," "]})]})};var v=function(e){var t=e.cart,a=t.img,c=t.description,r=t.name,n=t.isSelected,i=t.price,s=t.id,o=t.quantity,d=t.amount;return Object(m.jsxs)("article",{className:"card",children:[Object(m.jsx)("img",{src:a,alt:r,className:"menu-img"}),Object(m.jsxs)("div",{className:"menu-desc",children:[Object(m.jsxs)("div",{className:"menu-title",children:[Object(m.jsxs)("h4",{children:[" ",r," "]})," ",Object(m.jsxs)("span",{className:"ruppee",children:[" ",i," "]})," "]}),Object(m.jsxs)("p",{children:[" ",c," "]})," ",n?Object(m.jsx)(f,{id:s,qty:o,amt:d,priceValue:!0}):Object(m.jsxs)(g,{className:"cart-btn",data:"cart",id:s,children:["Add to Cart"," "]})," "]})," "]})};var x=function(e){var t=h(),a=t.cartItems,c=t.category;return Object(m.jsxs)("div",{className:"section-center",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("h1",{children:"Our Menu"}),Object(m.jsx)("div",{className:"underline"})]}),Object(m.jsx)("div",{className:"btn-container",children:c.map((function(e,t){return Object(m.jsx)(g,{className:"category-btn",data:"category",category:e,children:e},t)}))}),Object(m.jsx)("div",{className:"menu",children:a.map((function(e){return Object(m.jsx)(v,{cart:e},e.id)}))})]})},N=a(3),k=(a(39),function(e){var t=e.cart,a=t.name,c=t.category,r=t.price,n=t.id,i=t.quantity;return console.log(a,c,r),Object(m.jsxs)("article",{className:"item",children:[Object(m.jsxs)("div",{className:"item-left",children:[Object(m.jsx)("h4",{children:a}),Object(m.jsx)("h4",{children:c}),Object(m.jsx)("span",{children:r})]}),Object(m.jsx)(f,{id:n,qty:i,price:r,priceValue:!1})]})}),I=function(){var e=h(),t=e.selectedItems,a=e.totalAmount;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{className:"cart-header",children:Object(m.jsx)("h1",{children:"Your Cart"})}),Object(m.jsxs)("div",{className:"cart",children:[Object(m.jsx)("div",{className:"cartItems",children:t.map((function(e){return Object(m.jsx)(k,{cart:e},e.id)}))}),Object(m.jsxs)("footer",{className:"cart-footer",children:[Object(m.jsxs)("div",{className:"cart-total",children:[Object(m.jsx)("h4",{children:"Total"}),Object(m.jsx)("span",{className:"ruppee",children:a})]}),Object(m.jsxs)("div",{className:"cart-btn-container",children:[Object(m.jsx)(y.b,{to:"/food-order-app/",children:Object(m.jsx)(g,{className:"router-btn",data:"router",children:"Back to Menu"})}),Object(m.jsx)(g,{className:"router-btn order-btn",data:"router",children:"Order now"})]})]})]})]})};var q=function(){var e=h(),t=e.isLoading;return e.cartItems,Object(m.jsxs)(y.a,{children:[Object(m.jsx)(O,{}),Object(m.jsxs)(N.c,{children:[Object(m.jsxs)(N.a,{exact:!0,path:"/food-order-app",children:[" ",t&&Object(m.jsxs)("div",{className:"loading",children:[Object(m.jsx)("h2",{children:" Please wait while loading... "})," "]})," ",!t&&Object(m.jsx)(x,{})," "]})," ",Object(m.jsx)(N.a,{exact:!0,path:"/cart",children:Object(m.jsx)(I,{})})," "]})," "]})};i.a.render(Object(m.jsxs)(r.a.StrictMode,{children:[Object(m.jsx)(p,{children:Object(m.jsx)(q,{})})," "]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.87cb2263.chunk.js.map