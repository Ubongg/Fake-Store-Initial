(this["webpackJsonpreact-start"]=this["webpackJsonpreact-start"]||[]).push([[0],{26:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(17),r=c.n(n),a=(c(26),c(3)),l=c(2),o=c(7),j=c(6),d=c(0),u=[{id:1,url:"/",text:"home"},{id:2,url:"/about",text:"about"},{id:3,url:"/products",text:"products"},{id:4,url:"/cart",text:"cart"}],b=[{id:1,url:"https://www.facebook.com",icon:Object(d.jsx)(j.e,{})},{id:2,url:"https://www.twitter.com",icon:Object(d.jsx)(j.h,{})},{id:3,url:"https://www.linkedin.com",icon:Object(d.jsx)(j.f,{})},{id:4,url:"https://www.behance.com",icon:Object(d.jsx)(j.b,{})}],m=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1],n=function(){i(!c)},r=Object(s.useRef)(null),l=Object(s.useRef)(null);return Object(s.useEffect)((function(){l.current.getBoundingClientRect().height;r.current.style.height=c?"100vh":"0px"}),[c]),Object(d.jsxs)("div",{className:"".concat(c?"nav-center shadow":"nav-center"),children:[Object(d.jsxs)("div",{className:"nav-header",children:[Object(d.jsx)(a.b,{to:"/",children:Object(d.jsxs)("h1",{className:"logo",children:["Fake",Object(d.jsx)("span",{children:"store"})]})}),Object(d.jsx)("button",{className:"".concat(c?"nav-toggle show":"nav-toggle"),onClick:n,children:c?Object(d.jsx)(j.g,{}):Object(d.jsx)(j.a,{})})]}),Object(d.jsx)("div",{className:"links-container",ref:r,children:Object(d.jsx)("ul",{className:"links",ref:l,children:u.map((function(e){var t=e.id,c=e.url,s=e.text;return Object(d.jsx)("li",{onClick:n,children:Object(d.jsx)(a.b,{to:c,children:s})},t)}))})}),Object(d.jsx)("ul",{className:"social-icons",children:b.map((function(e){var t=e.id,c=e.url,s=e.icon;return Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",href:c,children:s})},t)}))})]})},h=c(8),x=function(e){var t=e.id,c=e.title,s=e.image,i=e.price;return Object(d.jsxs)("article",{className:"product",children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:s,alt:c})}),Object(d.jsxs)("div",{className:"product-footer",children:[Object(d.jsx)("h3",{children:"".concat(c.substring(0,20),"...")}),Object(d.jsxs)("h4",{children:["$",i]}),Object(d.jsx)(a.b,{to:"/products/".concat(t),className:"btn-details",children:"details"})]})]})},O=c(21),p=c(16),v=c.n(p),f=c(20),g=i.a.createContext(),N=function(e){var t=e.children,c=Object(s.useState)([]),i=Object(o.a)(c,2),n=i[0],r=i[1],a=Object(s.useState)([]),l=Object(o.a)(a,2),j=l[0],u=l[1],b=Object(s.useState)(j),m=Object(o.a)(b,2),x=m[0],p=m[1],N=Object(s.useState)(!1),w=Object(o.a)(N,2),k=w[0],y=w[1],C=!0;Object(s.useEffect)((function(){var e=function(){var e=Object(f.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,fetch("https://fakestoreapi.com/products");case 3:if(t=e.sent,!C){e.next=16;break}return e.t0=u,e.next=8,t.clone().json();case 8:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=p,e.next=13,t.json();case 13:e.t3=e.sent,(0,e.t2)(e.t3),y(!1);case 16:return e.abrupt("return",(function(){C=!1}));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var q=n.reduce((function(e,t){return e+=t.price*t.qty,e=parseFloat(e.toFixed(2))}),0);return Object(d.jsx)(g.Provider,{value:{cart:n,addCart:function(e){var t=n.find((function(t){return t.id===e.id}));r(t?n.map((function(c){return c.id===e.id?Object(h.a)(Object(h.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(O.a)(n),[Object(h.a)(Object(h.a)({},e),{},{qty:1})])),console.log(n)},removeCart:function(e){var t=n.find((function(t){return t.id===e.id}));1===t.qty?r(n.filter((function(t){return t.id!==e.id}))):r(n.map((function(c){return c.id===e.id?Object(h.a)(Object(h.a)({},t),{},{qty:t.qty-1}):c})))},setCart:r,totalPrice:q,removeProduct:function(e){r(n.filter((function(t){return t.id!==e})))},data:j,setData:u,filter:x,setFilter:p,loading:k,setLoading:y},children:t})},w=function(){return Object(s.useContext)(g)},k=function(){var e=w(),t=e.data,c=e.filter,s=e.setFilter,i=e.loading;e.setLoading,e.setData;if(i)return Object(d.jsx)("div",{className:"loading",children:"Loading..."});var n=function(e){var c=t.filter((function(t){return t.category===e}));s(c)};return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"products-title",children:[Object(d.jsx)("h2",{className:"products-title-text",children:"Our Products"}),Object(d.jsx)("div",{className:"products-underline"})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){return s(t)},children:"all"}),Object(d.jsx)("button",{onClick:function(){return n("men's clothing")},children:"men's clothing"}),Object(d.jsx)("button",{onClick:function(){return n("jewelery")},children:"jewelery"}),Object(d.jsx)("button",{onClick:function(){return n("electronics")},children:"electronics"}),Object(d.jsx)("button",{onClick:function(){return n("women's clothing")},children:"women's clothing"})]}),Object(d.jsx)("div",{className:"box",children:c.map((function(e){return Object(d.jsx)(x,Object(h.a)({},e),e.id)}))})]})},y=function(e){var t=e.item,c=t.id,s=t.title,i=t.price,n=t.image,r=t.qty,a=w(),l=a.addCart,o=a.removeCart,u=a.removeProduct;return Object(d.jsxs)("article",{className:"cart-item",children:[Object(d.jsx)("img",{src:n,alt:s}),Object(d.jsxs)("div",{className:"item-details",children:[Object(d.jsx)("h4",{className:"item-title",children:"".concat(s.substring(0,20),"...")}),Object(d.jsxs)("h4",{className:"item-price",children:["$",i]}),Object(d.jsx)("button",{className:"remove-btn",onClick:function(){return u(c)},children:"remove"})]}),Object(d.jsxs)("div",{className:"amount-container",children:[Object(d.jsx)("button",{className:"amount-btn",onClick:function(){return l(t)},children:Object(d.jsx)(j.d,{})}),Object(d.jsx)("p",{className:"amount",children:r}),Object(d.jsx)("button",{className:"amount-btn",onClick:function(){return o(t)},children:Object(d.jsx)(j.c,{})})]})]})},C=function(){var e=w(),t=e.cart,c=e.setCart,s=e.totalPrice;return 0===t.length?Object(d.jsx)("section",{className:"cart",children:Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"your bag"}),Object(d.jsx)("h4",{className:"empty-cart",children:"is currently empty"}),Object(d.jsx)(a.b,{className:"fill-cart",to:"/products",children:"fill it"})]})}):Object(d.jsxs)("section",{className:"cart",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"your bag"}),Object(d.jsx)("div",{className:"cart-underline"})]}),Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)(y,{item:e},e.id)}))}),Object(d.jsxs)("footer",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"cart-total",children:Object(d.jsxs)("h4",{children:["total ",Object(d.jsxs)("span",{children:["$",s]})]})}),Object(d.jsxs)("div",{className:"footer-btns",children:[Object(d.jsx)("button",{className:"to-cart",children:Object(d.jsx)(a.b,{to:"/products",children:"continue shopping"})}),Object(d.jsx)("button",{className:"btn clear-btn",onClick:function(){return c([])},children:"clear cart"})]})]})]})},q=c.p+"static/media/main.61c62bb0.jpg",S=c.p+"static/media/overlap.08e2533e.jpg",L=function(){var e=w().data.slice(0,3);return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsxs)("div",{className:"home-row",children:[Object(d.jsxs)("div",{className:"home-col",children:[Object(d.jsxs)("h1",{children:["treat yo' self to",Object(d.jsx)("br",{}),"something good"]}),Object(d.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?"}),Object(d.jsx)("button",{children:Object(d.jsx)(a.b,{to:"/products",children:"shop now"})})]}),Object(d.jsx)("div",{className:"home-col-img",children:Object(d.jsx)("div",{className:"home-img-bx",children:Object(d.jsx)("img",{src:q,alt:"home"})})})]}),Object(d.jsxs)("div",{className:"featured-products",children:[Object(d.jsxs)("div",{className:"featured-products-title",children:[Object(d.jsx)("h2",{className:"featured-products-title-text",children:"Featured Products"}),Object(d.jsx)("div",{className:"featured-products-underline"})]}),Object(d.jsx)("div",{className:"sliced-products",children:e.map((function(e){var t=e.image,c=e.title,s=e.price,i=e.id;return Object(d.jsxs)("article",{className:"product",children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:t,alt:c})}),Object(d.jsxs)("div",{className:"product-footer",children:[Object(d.jsx)("h3",{children:"".concat(c.substring(0,20),"...")}),Object(d.jsxs)("h4",{children:["$",s]}),Object(d.jsx)(a.b,{to:"/products/".concat(i),className:"btn-details",children:"details"})]})]},i)}))}),Object(d.jsx)("button",{children:Object(d.jsx)(a.b,{to:"/products",children:"all products"})})]}),Object(d.jsxs)("div",{className:"reviews",children:[Object(d.jsx)("h2",{children:"they said about us"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),Object(d.jsxs)("div",{className:"review-boxes",children:[Object(d.jsxs)("div",{className:"review-box",children:[Object(d.jsx)("div",{className:"imgBx",children:Object(d.jsx)("img",{src:S,alt:""})}),Object(d.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dignissimos ea nam veritatis natus veniam amet reprehenderit non, aperiam modi!"}),Object(d.jsx)("h3",{children:"someone somewhere"})]}),Object(d.jsxs)("div",{className:"review-box",children:[Object(d.jsx)("div",{className:"imgBx",children:Object(d.jsx)("img",{src:S,alt:""})}),Object(d.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dignissimos ea nam veritatis natus veniam amet reprehenderit non, aperiam modi!"}),Object(d.jsx)("h3",{children:"someone somewhere"})]}),Object(d.jsxs)("div",{className:"review-box",children:[Object(d.jsx)("div",{className:"imgBx",children:Object(d.jsx)("img",{src:S,alt:""})}),Object(d.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi dignissimos ea nam veritatis natus veniam amet reprehenderit non, aperiam modi!"}),Object(d.jsx)("h3",{children:"someone somewhere"})]})]})]}),Object(d.jsxs)("div",{className:"newsletter",children:[Object(d.jsx)("h3",{children:"Join our newsletter and get 20% off"}),Object(d.jsxs)("div",{className:"subscribe",children:[Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?"}),Object(d.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),e.target.reset()},children:[Object(d.jsx)("input",{type:"email",placeholder:"Enter Email"}),Object(d.jsx)("button",{children:"subscribe"})]})]})]})]})},P=function(){return Object(d.jsx)("div",{className:"about",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-50",children:[Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("h2",{className:"title-text",children:"Our Story"}),Object(d.jsx)("div",{className:"underline"})]}),Object(d.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium a odit ea nisi impedit modi beatae expedita, perspiciatis, placeat vitae veniam, reiciendis earum! Totam numquam veniam minima cupiditate voluptatum dignissimos accusantium rerum natus eos sed beatae molestias hic voluptate voluptates distinctio adipisci inventore nisi exercitationem, dolores amet facilis? Veniam assumenda, enim ipsam delectus molestiae culpa magni libero eum dolor aliquam! Repellat voluptatum qui voluptas assumenda officia dolorem excepturi reiciendis aspernatur cupiditate dolorum nemo dolor ea, itaque at numquam enim? Aspernatur velit libero unde ducimus esse, iusto earum ipsum nobis illo. Quidem voluptatum repellendus iure. Dolores sapiente deserunt molestiae consequatur?"})]}),Object(d.jsx)("div",{className:"col-50",children:Object(d.jsx)("div",{className:"img-bx",children:Object(d.jsx)("img",{src:q,alt:"about"})})})]})})},E=function(){var e=w().addCart,t=Object(l.f)().id,c=Object(s.useState)([]),i=Object(o.a)(c,2),n=i[0],r=i[1],j=Object(s.useState)(null),u=Object(o.a)(j,2),b=(u[0],u[1]),m=Object(s.useState)(!0),h=Object(o.a)(m,2),x=h[0],O=h[1];Object(s.useEffect)((function(){try{fetch("https://fakestoreapi.com/products/".concat(t)).then((function(e){if(!e.ok)throw new Error("could not fetch the data for that resource");return e.json()})).then((function(e){O(!1),r(e),b(null)}))}catch(e){O(!1),b(e.message)}}),[]);var p=n.title,v=n.image,f=n.price,g=n.description;return x?Object(d.jsx)("div",{className:"loading",children:"Loading..."}):Object(d.jsx)("div",{children:n&&Object(d.jsxs)("div",{className:"single-product",children:[Object(d.jsx)("button",{className:"back-btn",children:Object(d.jsx)(a.b,{to:"/products",children:"back to products"})}),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"single-img-bx",children:Object(d.jsx)("img",{src:v,alt:""})})}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("h2",{children:p}),Object(d.jsxs)("h3",{children:["$",f]}),Object(d.jsx)("p",{children:g}),Object(d.jsx)("button",{onClick:function(){return e(n)},children:Object(d.jsx)(a.b,{to:"/cart",children:"add to cart"})})]})]})]})})},F=function(){return Object(d.jsxs)("div",{className:"error",children:[Object(d.jsx)("h2",{children:"you've reached a dead end"}),Object(d.jsx)("h3",{children:"you need to go back real quick"}),Object(d.jsx)("button",{children:Object(d.jsx)(a.b,{to:"/",children:"back home"})})]})},R=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("p",{children:"\xa9 2022 FakeStore. All Rights Reserved"})})};var A=function(){return Object(d.jsxs)(a.a,{children:[Object(d.jsx)(m,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(L,{})}),Object(d.jsx)(l.a,{path:"/about",children:Object(d.jsx)(P,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/products",children:Object(d.jsx)(k,{})}),Object(d.jsx)(l.a,{path:"/products/:id",children:Object(d.jsx)(E,{})}),Object(d.jsx)(l.a,{path:"/cart",children:Object(d.jsx)(C,{})}),Object(d.jsx)(l.a,{path:"*",children:Object(d.jsx)(F,{})})]}),Object(d.jsx)(R,{})]})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(N,{children:Object(d.jsx)(A,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.fc488a06.chunk.js.map