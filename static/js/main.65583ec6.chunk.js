(this["webpackJsonpreacktonx-3-gallery"]=this["webpackJsonpreacktonx-3-gallery"]||[]).push([[0],{27:function(n,e,t){n.exports=t(55)},32:function(n,e,t){},53:function(n,e,t){},54:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(21),i=t.n(o),c=(t(32),t(9)),l=t(4),u=t(2),p=t(3);function d(){var n=Object(u.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 4px;\n  ::placeholder{\n    font: inherit;\n    font-size: 18px;\n  }\n  "]);return d=function(){return n},n}function s(){var n=Object(u.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\ndisplay: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover{\n    opacity: 1;\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(u.a)(["\ndisplay: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]);return m=function(){return n},n}function g(){var n=Object(u.a)(["\n top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);"]);return g=function(){return n},n}var b=p.a.header(g()),x=p.a.form(m()),h=p.a.button(f()),v=p.a.span(s()),k=p.a.input(d()),E=function(n){var e=n.defaultValue,t=n.onChange,a=n.onSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,r.a.createElement(x,{onSubmit:a},r.a.createElement(h,null,r.a.createElement(v,null,"Search")),r.a.createElement(k,{type:"text",autocomplete:"off",autoFocus:!0,value:e,onChange:t,placeholder:"Search images and photos"}))))},j=t(25),y=t.n(j),w=function(n,e){return y.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(e,"&key=15599000-288ca625732bcf6a027b1d7ae&image_type=photo&orientation=horizontal&per_page=12"))},O=t(26),C=t.n(O);function S(){var n=Object(u.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover{\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n  "]);return S=function(){return n},n}function z(){var n=Object(u.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    "]);return z=function(){return n},n}var L=p.a.li(z()),F=p.a.img(S()),N=function(n){var e=n.item,t=n.imgClick;return r.a.createElement(L,null,r.a.createElement(F,{src:e.webformatURL,"data-action":e.largeImageURL,onClick:t}))};function I(){var n=Object(u.a)(["\npadding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  text-align: center;\n  display: block;\n  margin:0 auto;\n  margin-top:10px;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n:focus {\n  background-color: #303f9f;\n}"]);return I=function(){return n},n}N.propType={item:C.a.object.isRequired};var M=p.a.button(I()),R=function(n){var e=n.onClick;return r.a.createElement(M,{onClick:e},"Load more")};function q(){var n=Object(u.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;"]);return q=function(){return n},n}var A=p.a.ul(q()),H=function(n){var e=n.articles,t=n.onClick,a=n.allArticles,o=n.imgClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,e.map((function(n){return r.a.createElement(N,{item:n,key:n.id,imgClick:o})}))),0!==e.length&&e.length!==a&&r.a.createElement(R,{onClick:t}))},J=(t(52),t(53),function(){return r.a.createElement("div",{className:"lds-heart"},r.a.createElement("div",null))}),T=(t(54),function(n){var e=n.src,t=n.overlayClick,o=n.esc,i=function(n){"Escape"===n.key&&o()};return Object(a.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[]),r.a.createElement("div",{className:"Overlay",onClick:t},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:e,alt:""})))}),U=function(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(1),u=Object(l.a)(i,1)[0],p=Object(a.useState)(u+1),d=Object(l.a)(p,2),s=d[0],f=d[1],m=Object(a.useState)([]),g=Object(l.a)(m,2),b=g[0],x=g[1],h=Object(a.useState)(!1),v=Object(l.a)(h,2),k=v[0],j=v[1],y=Object(a.useState)(null),O=Object(l.a)(y,2),C=O[0],S=O[1],z=Object(a.useState)(null),L=Object(l.a)(z,2),F=L[0],N=L[1];Object(a.useEffect)((function(){b.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[b]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{defaultValue:t,onChange:function(n){var e=n.target.value;o(e)},onSubmit:function(n){n.preventDefault(),j(!0),w(t,u).then((function(n){var e=n.data.hits;x(e),j(!1),S(n.data.totalHits)}))}}),!0===k?r.a.createElement(J,null):r.a.createElement(H,{articles:b,onClick:function(n){w(t,s).then((function(n){var e=n.data.hits;x([].concat(Object(c.a)(b),Object(c.a)(e))),f(s+1)}))},allArticles:C,imgClick:function(n){N(n.target.dataset.action)}}),null!==F&&r.a.createElement(T,{src:F,overlayClick:function(n){"IMG"!==n.target.nodeName&&N(null)},esc:function(){N(null)}}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.65583ec6.chunk.js.map