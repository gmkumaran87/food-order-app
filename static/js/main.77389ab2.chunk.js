(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,,,,,,,,function(e,a,c){},function(e,a,c){},function(e,a,c){},,function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var t=c(1),i=c.n(t),r=c(3),s=c.n(r),n=(c(10),c(11),c(12),c(0));var o=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("button",{type:"button",className:e.value,children:e.children})})};var l=function(){return Object(n.jsxs)("nav",{className:"nav-bar",children:[Object(n.jsx)("h2",{children:"Food App"}),Object(n.jsxs)("ul",{className:"links",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"Services"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"Menu"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"Contact Us"})})]}),Object(n.jsxs)(o,{value:"nav-btn",children:[Object(n.jsx)("span",{className:"cart-icon",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(n.jsx)("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})})}),Object(n.jsx)("span",{children:"Your Cart"}),Object(n.jsx)("span",{className:"item-cnt",children:"10"})]})]})};c(14),c(15);var d=function(){return Object(n.jsxs)("div",{className:"add-cart",children:[Object(n.jsx)("div",{className:"decrease",children:Object(n.jsx)("img",{src:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622725000/minus-sign_qbor3i.svg",alt:"minus",className:"addDec-img"})}),Object(n.jsx)("span",{className:"cart-qty",children:"1"}),Object(n.jsx)("div",{className:"increase",children:Object(n.jsx)("img",{src:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622724834/plus_o5ki2v.svg",alt:"plus",className:"addDec-img"})})]})};var m=function(e){var a=e.cart,c=a.img,t=a.description,i=a.name,r=a.isSelected,s=a.price;return console.log("img",c),Object(n.jsxs)("article",{className:"card",children:[Object(n.jsx)("img",{src:c,alt:i,className:"menu-img"}),Object(n.jsxs)("div",{className:"menu-desc",children:[Object(n.jsxs)("div",{className:"menu-title",children:[Object(n.jsx)("h4",{children:i}),Object(n.jsx)("span",{className:"ruppee",children:s})]}),Object(n.jsx)("p",{children:t}),r?Object(n.jsx)(d,{}):Object(n.jsx)(o,{value:"cart-btn",children:"Add to Cart"})]})]})},u=c(5),j=c(4),h=(c.p,[{id:1,name:"buttermilk pancakes",category:"breakfast",price:15.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723870/item-1_apln3b.jpg",description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",isSelected:!0},{id:2,name:"diner double",category:"lunch",price:13.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723871/item-2_ctg4db.jpg",description:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",isSelected:!1},{id:3,name:"godzilla milkshake",category:"shakes",price:6.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-3_pr5yo2.jpg",description:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",isSelected:!1},{id:4,name:"country delight",category:"breakfast",price:20.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-4_sd0dvn.jpg",description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, ",isSelected:!1},{id:5,name:"egg attack",category:"lunch",price:22.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-5_bujvlo.jpg",description:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",isSelected:!1},{id:6,name:"oreo dream",category:"shakes",price:18.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-6_s1yemp.jpg",description:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",isSelected:!1},{id:7,name:"bacon overflow",category:"breakfast",price:8.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-7_vuhc43.jpg",description:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ",isSelected:!1},{id:8,name:"american classic",category:"lunch",price:12.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-8_eu14nf.jpg",description:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  ",isSelected:!1},{id:9,name:"quarantine buddy",category:"shakes",price:16.99,img:"https://res.cloudinary.com/gmkumaran87/image/upload/v1622723883/item-9_ymxg6b.jpg",description:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",isSelected:!1}]),g=function(e,a){switch(a.type){case"ADD_ITEM":return e;default:throw new Error("no matching action type")}},p=i.a.createContext(),b={isLoading:!1,cartItems:h,totalItems:0,totalAmount:0};function v(e){var a=e.children,c=Object(t.useReducer)(g,b),i=Object(j.a)(c,2),r=i[0];i[1];return Object(n.jsxs)(p.Provider,{value:Object(u.a)({},r),children:[" ",a," "]})}var x=function(){return Object(t.useContext)(p)};var O=function(e){var a=x().cartItems;return console.log("state",a),Object(n.jsxs)("div",{className:"section-center",children:[Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h1",{children:"Our Menu"}),Object(n.jsx)("div",{className:"underline"})]}),Object(n.jsx)("div",{className:"menu",children:a.map((function(e){return Object(n.jsx)(m,{cart:e},e.id)}))})]})};var f=function(){var e=x(),a=e.isLoading,c=e.cartItems[1].img;return console.log("img",c),console.log("isLoading",a),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l,{}),a&&Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("h2",{children:"Please wait while loading..."})}),!a&&Object(n.jsx)(O,{})]})};s.a.render(Object(n.jsxs)(i.a.StrictMode,{children:[Object(n.jsx)(v,{children:Object(n.jsx)(f,{})})," "]}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.77389ab2.chunk.js.map