(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-8a28c014":"9d3b6f20","chunk-3bfdda04":"835df866","chunk-596dca3d":"5b148bd6"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-8a28c014":1,"chunk-3bfdda04":1,"chunk-596dca3d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-8a28c014":"8c2be405","chunk-3bfdda04":"b012a771","chunk-596dca3d":"4768f343"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],s=u.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=u(e),s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("7193"),a=n.n(r);a.a},"36d6":function(e,t,n){"use strict";var r=n("6924"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("3a0f"),n("a3a3"),n("4d0b");var r=n("329b"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("dog-header"),n("div",{staticClass:"app-init"},[n("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dog-header"},[n("div",{staticClass:"section-center"},[n("div",{staticClass:"logo fl"},[n("a",{attrs:{href:"#/"}},[e._v("\n        logo没设计好\n      ")])]),n("ul",{staticClass:"nav fl"},[n("li",{staticClass:"item s1"},[n("a",{attrs:{href:"#/best"}},[e._v("项目推荐")])]),n("li",{staticClass:"item s3"},[n("a",{attrs:{href:""}},[e._v("大佬说")])]),n("li",{staticClass:"item s4"},[n("a",{attrs:{href:""}},[e._v("好文")])]),n("li",{staticClass:"item s5"},[n("a",{attrs:{href:""}},[e._v("关于")])])])])])}],c={name:"DogHeader",props:{msg:String}},s=c,l=(n("36d6"),n("048f")),f=Object(l["a"])(s,i,u,!1,null,null,null);f.options.__file="DogHeader.vue";var p=f.exports,d={name:"app",components:{DogHeader:p}},h=d,v=(n("034f"),Object(l["a"])(h,a,o,!1,null,null,null));v.options.__file="App.vue";var m=v.exports,g=n("b8e5"),b=n("6724"),y=n.n(b);g["a"].prototype.openPage=function(e,t){this.push({path:e,query:y()({time:(new Date).getTime()},t||{})})},r["a"].use(g["a"]);var _=new g["a"]({routes:[{path:"/",name:"index",component:function(e){Promise.all([n.e("chunk-8a28c014"),n.e("chunk-596dca3d")]).then(function(){var t=[n("1e4b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/best",name:"best",component:function(e){Promise.all([n.e("chunk-8a28c014"),n.e("chunk-3bfdda04")]).then(function(){var t=[n("3804")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)},router:_}).$mount("#app")},6924:function(e,t,n){},7193:function(e,t,n){}});