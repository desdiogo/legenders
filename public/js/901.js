"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[901],{4810:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".q-page[data-v-42c3865d]{background:#cc95c0;background:linear-gradient(90deg,#7aa1d2,#dbd4b4,#cc95c0)}.q-page .my-card[data-v-42c3865d]{background:#ece9e6;background:linear-gradient(90deg,#fff,#ece9e6)}.q-page[data-v-42c3865d] .logo{border-radius:50%}",""]);const a=o},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},3379:(e,t,n)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var d=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:s,updater:b(f,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function b(e,t){var n,r,o;if(t.singleton){var a=v++;n=p||(p=u(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=u(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},3744:(e,t)=>{t.Z=(e,t)=>{for(const[n,r]of t)e[n]=r;return e}},5901:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(821),o=function(e){return(0,r.pushScopeId)("data-v-42c3865d"),e=e(),(0,r.popScopeId)(),e}((function(){return(0,r.createElementVNode)("title",null,"\n    Log in\n  ",-1)})),a={class:"q-pb-lg row justify-center"},i={class:"row justify-end"};var c=n(9038),l=n(9828),u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top";l.gUr.create({textColor:"white",message:t,type:e,position:n,actions:[{icon:"close",color:"white",attrs:{"aria-label":"Dismiss"}}],timeout:5e3})},s=function(e,t){return u("negative",e,t)};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=(0,r.defineComponent)({components:{Head:c.Fb},setup:function(){var e=(0,c.cI)({email:null,password:null,remember:!1}),t=(0,r.ref)({email:[function(e){return e&&e.length>0||"E-mail é obrigatório"},function(e){return/.+@.+\..+/.test(e)||"E-mail inválido"}],password:[function(e){return e&&e.length>0||"Senha é obrigatória"}]});return{form:e,rules:t,onSubmit:function(){e.transform((function(e){return f(f({},e),{},{remember:e.remember?"on":""})})).post(route("login"),{onError:function(e){return s(e.email)}})}}}});var v=n(3379),b=n.n(v),g=n(4810),h={insert:"head",singleton:!1};b()(g.Z,h);g.Z.locals;const y=(0,n(3744).Z)(p,[["render",function(e,t,n,c,l,u){var s=(0,r.resolveComponent)("Head"),d=(0,r.resolveComponent)("q-img"),f=(0,r.resolveComponent)("q-input"),m=(0,r.resolveComponent)("q-toggle"),p=(0,r.resolveComponent)("q-btn"),v=(0,r.resolveComponent)("q-form"),b=(0,r.resolveComponent)("q-card"),g=(0,r.resolveComponent)("q-page"),h=(0,r.resolveComponent)("q-page-container"),y=(0,r.resolveComponent)("q-layout");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(s,null,{default:(0,r.withCtx)((function(){return[o]})),_:1}),(0,r.createVNode)(y,null,{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(h,null,{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(g,{class:"q-pa-md flex column justify-center items-center"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(b,{class:"q-pa-lg my-card",style:{width:"400px"}},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",a,[(0,r.createVNode)(d,{height:"150px",width:"150px","img-class":"logo",src:"images/logo.jpg"})]),(0,r.createVNode)(v,{onSubmit:(0,r.withModifiers)(e.onSubmit,["prevent"]),class:"q-gutter-md"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(f,{outlined:"",modelValue:e.form.email,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.email=t}),label:"E-mail","lazy-rules":"",rules:e.rules.email},null,8,["modelValue","rules"]),(0,r.createVNode)(f,{outlined:"",type:"password",modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.password=t}),label:"Senha","lazy-rules":"",rules:e.rules.password},null,8,["modelValue","rules"]),(0,r.createVNode)(m,{modelValue:e.form.remember,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.remember=t}),label:"Lembrar-me"},null,8,["modelValue"]),(0,r.createElementVNode)("div",i,[(0,r.createVNode)(p,{label:"Login",type:"submit",color:"accent","no-caps":""})])]})),_:1},8,["onSubmit"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})],64)}],["__scopeId","data-v-42c3865d"]])}}]);