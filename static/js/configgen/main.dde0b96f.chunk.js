(this["webpackJsonpconfiguration-generator-frontend"]=this["webpackJsonpconfiguration-generator-frontend"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},90:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(12),i=n.n(s),o=(n(70),n(71),n(28)),r=n(9),u=n(54),l=n.n(u),j=function(e,t){l.a.get(e).then((function(e){t(void 0,e)})).catch((function(e){t(e,void 0)}))},p=(n(90),n(11)),d=n(1),O=Object(c.createContext)(void 0),b=Object(c.createContext)(void 0),f=function(e){var t=e.children,n=Object(c.useState)({step:1,data:[],instructions:null}),a=Object(p.a)(n,2),s=a[0],i=a[1];return Object(d.jsx)(O.Provider,{value:s,children:Object(d.jsx)(b.Provider,{value:i,children:t})})},m=(n(22),n(120)),x=n(118),_=n(119),v=(n(42),n(55)),h=n.n(v),N=function(e){var t=e.option,n=e.handleClick;return Object(d.jsxs)("div",{className:t.error&&t.error.msg?"__multilineOption __disabledOption":"__multilineOption",onClick:function(){return n(t)},children:[Object(d.jsx)("h4",{className:t.error&&t.error.msg?"__multilineOptionName __disabledOption":"__multilineOptionName",children:t.description?"".concat(t.displayName).concat(t.error&&t.error.msg?" - "+t.error.msg:""):null}),Object(d.jsx)("p",{className:t.error&&t.error.msg?"__multilineOptionDescription __disabledOption":"__multilineOptionDescription",children:t.description?t.description:"".concat(t.displayName).concat(t.error&&t.error.msg?" - "+t.error.msg:"")})]})},g=function(e){var t=e.isOpen,n=e.setIsOpen,a=e.options,s=e.handleClick;var i,o=Object(c.useRef)(null);return i=o,Object(c.useEffect)((function(){function e(e){i.current&&!i.current.contains(e.target)&&n(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[i]),Object(d.jsx)("div",{className:t?"__multilineOptions":"__multilineOptions __hidden",ref:o,children:a.map((function(e){return Object(d.jsx)(N,{option:e,handleClick:s},e.name)}))})},y=function(e){var t=e.options,n=e.setUserInput,a=e.defaultDisplayName,s=e.setDefaultDisplayName,i=Object(c.useState)(!1),o=Object(p.a)(i,2),r=o[0],u=o[1];return Object(d.jsxs)("div",{className:"__multilineContainer",children:[Object(d.jsxs)("div",{onClick:function(){return u(!r)},className:r?"__multilineSelect __opened":"__multilineSelect ",children:[Object(d.jsx)("div",{children:a}),Object(d.jsx)(h.a,{className:"__arrowIcon"})]}),Object(d.jsx)(g,{isOpen:r,setIsOpen:u,options:t,handleClick:function(e){e.error&&e.error.msg||(s(e.displayName),n(e.name),u(!1))}})]})},C=(n(96),function(e){var t=e.value,n=e.onChange;return Object(d.jsx)("input",{placeholder:"Type here",className:"__simpleTextInput",type:"text",onChange:n,value:t})}),I=function(e){var t=e.optionInfo,n=e.setUserInput,c=e.userInput,a=e.defaultDisplayName,s=e.setDefaultDisplayName,i=function(e){n(e.target.value)};return"text"===t.type?Object(d.jsx)(C,{onChange:i,value:c}):Object(d.jsx)(y,{options:t.options,onChange:i,setUserInput:n,defaultDisplayName:a,setDefaultDisplayName:s})},D=(n(97),function(e){var t=e.text,n=e.func,a=Object(c.useContext)(O);return Object(d.jsx)("button",{className:1===a.step&&"Previous"===t?"__simpleButton __hidden":"__simpleButton",onClick:n,children:t})}),S=function(e){var t=e.optionInfo,n=e.userInput,a=Object(c.useContext)(O),s=Object(c.useContext)(b),i=Object(c.useState)(!1),u=Object(p.a)(i,2),l=u[0],f=u[1];return Object(d.jsxs)("div",{className:"__actionButtonsDiv",children:[Object(d.jsx)(D,{text:"Previous",func:function(){a.step>1&&s(Object(r.a)(Object(r.a)({},a),{},{step:a.step-1,instructions:null,data:a.data.filter((function(e){return a.data.indexOf(e)!==a.data.length-1}))}))}}),Object(d.jsx)(D,{text:l?"Next...":"Next",func:function(){f(!0);var e=function(e,t,n){var c=t.next.href,a=t.name;return 1===e.step?"".concat(c,"?").concat(a,"=").concat(n):"".concat(c,"&").concat(a,"=").concat(n)}(a,t,n),c=t.next.rel;j(e,(function(e,t){return e?f(!1):"parameter"===c?(f(!1),s(Object(r.a)(Object(r.a)({},a),{},{data:[].concat(Object(o.a)(a.data),[t.data]),step:a.step+1}))):(s(Object(r.a)(Object(r.a)({},a),{},{instructions:t,step:a.step+1})),void f(!1))}))}})]})},k=function(e){var t=e.optionInfo,n=e.setUserInput,c=e.userInput,a=e.defaultDisplayName,s=e.setDefaultDisplayName;return Object(d.jsxs)(x.a,{className:"__accordionDetails",children:[Object(d.jsx)(_.a,{className:"__description",children:t.description}),Object(d.jsx)(I,{optionInfo:t,setUserInput:n,userInput:c,defaultDisplayName:a,setDefaultDisplayName:s}),Object(d.jsx)(S,{optionInfo:t,userInput:c})]})},w=n(121),E=function(e){var t=e.optionInfo,n=e.step,c=e.userInput;return Object(d.jsxs)(w.a,{className:"__accordionSummary","aria-controls":"panel".concat(n,"-content"),children:[Object(d.jsx)(_.a,{className:"__displayName",children:t.displayName.replace("_"," ")}),Object(d.jsx)(_.a,{className:"__userInput",children:c})]})},U=function(e){var t=e.step,n=e.currentData,a=Object(c.useContext)(O),s=Object(c.useState)(null),i=Object(p.a)(s,2),o=i[0],r=i[1],u=Object(c.useState)(""),l=Object(p.a)(u,2),j=l[0],b=l[1],f=Object(c.useState)(""),x=Object(p.a)(f,2),_=x[0],v=x[1];return Object(c.useEffect)((function(){var e=n&&n.options&&n.options.find((function(e){return!0===e.default}));r(n),e&&e.name?(b(e.name),v(e.displayName)):(b(""),v(""))}),[]),o&&o.displayName?Object(d.jsx)("div",{className:"__ConfigurationOption",children:Object(d.jsxs)(m.a,{className:"__accordion",expanded:a.step===t,children:[Object(d.jsx)(E,{step:t,optionInfo:o,userInput:j}),Object(d.jsx)(k,{userInput:j,optionInfo:o,setUserInput:b,defaultDisplayName:_,setDefaultDisplayName:v})]})}):null},B=(n(43),n(58)),P=n.n(B),T=n(57),J=n.n(T),L={color:"#fa0171",cursor:"pointer",position:"absolute",left:"-30px",top:"-10px"},z={position:"relative"},F=function(e){var t=e.content,n=Object(c.useState)(!1),a=Object(p.a)(n,2),s=a[0],i=a[1];return Object(d.jsx)("div",{style:z,children:s?Object(d.jsx)(J.a,{style:L}):Object(d.jsx)(P.a,{style:L,onClick:function(){navigator.clipboard.writeText(t),setTimeout((function(){i(!0)}),100)}})})},G=function(e){var t=e.content;return Object(d.jsxs)("div",{className:"__code",children:[Object(d.jsx)(F,{content:t}),Object(d.jsx)("code",{className:"__codeBlock",children:t})]})},H=function(e){var t=e.item,n=t.type,c=t.content;return"heading"===n?Object(d.jsx)("h2",{className:"__heading",children:c}):"paragraph"===n?Object(d.jsx)("p",{className:"__paragraph",children:c}):Object(d.jsx)(G,{content:c})},M=function(){var e=Object(c.useContext)(O).instructions.data.instructions;return Object(d.jsx)("div",{className:"__instructions",children:e.map((function(e){return Object(d.jsx)(H,{item:e},e.content)}))})},R=n(59),q=n.n(R),A=(n(98),{fontSize:"18px",color:"#fa0171"}),K=function(){var e=Object(c.useContext)(O),t=Object(c.useContext)(b);return Object(d.jsxs)("div",{className:"__previousStepContainer",children:[Object(d.jsx)(q.a,{style:A}),Object(d.jsx)("p",{className:"__previousStepHelper",onClick:function(){t(Object(r.a)(Object(r.a)({},e),{},{step:e.step-1,instructions:null}))},children:"Previous step"})]})},Q=function(){var e=Object(c.useContext)(O),t=Object(c.useContext)(b);Object(c.useEffect)((function(){j("https://configuration.weaviate.io/v2/parameters/",(function(n,c){n?console.log(n):t(Object(r.a)(Object(r.a)({},e),{},{data:[].concat(Object(o.a)(e.data),[c.data])}))}))}),[]);for(var n=[],a=0;a<e.step;)n=[].concat(Object(o.a)(n),[a+1]),a++;return Object(d.jsxs)("div",{className:"__configGenContainer",children:[n.map((function(t,n){return e.data.length>0&&e.data[t-1]?Object(d.jsx)(U,{step:t,currentData:e.data[t-1]},n):null})),e.instructions?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(K,{}),Object(d.jsx)(M,{})]}):null]})};var V=function(){return Object(d.jsx)("div",{className:"configuration-generator-app",children:Object(d.jsx)(Q,{})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{children:Object(d.jsx)(V,{})})}),document.getElementById("configuration-generator-root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.dde0b96f.chunk.js.map