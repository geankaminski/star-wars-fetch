(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},1419:function(t,e,r){"use strict";r("e31b")},"1e7a":function(t,e,r){"use strict";r("5810")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=r("1e18"),i=r("688f"),n=r.n(i),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},c=[],l={name:"App"},u=l,p=(r("034f"),r("2877")),f=Object(p["a"])(u,o,c,!1,null,null,null),h=f.exports,d=r("8c4f"),g=(r("f9e3"),r("2dd8"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("div",{staticClass:"home"},[r("header",[r("h1",{staticClass:"title"},[t._v("STAR WARS")]),r("p",{staticClass:"subtitle"},[t._v("Choose a category")])]),r("b-list-group",[r("b-list-group-item",{staticClass:"item"},[r("router-link",{staticClass:"link",attrs:{to:{path:"/search",query:{category:"people"}}}},[t._v("People")])],1),r("b-list-group-item",{staticClass:"item"},[r("router-link",{staticClass:"link",attrs:{to:{path:"/search",query:{category:"planets"}}}},[t._v("Planets")])],1),r("b-list-group-item",{staticClass:"item"},[r("router-link",{staticClass:"link",attrs:{to:{path:"/search",query:{category:"starships"}}}},[t._v("Starships")])],1),r("b-list-group-item",{staticClass:"item"},[r("router-link",{staticClass:"link",attrs:{to:{path:"/search",query:{category:"vehicles"}}}},[t._v("Vehicles")])],1),r("b-list-group-item",{staticClass:"item"},[r("router-link",{staticClass:"link",attrs:{to:{path:"/search",query:{category:"films"}}}},[t._v("Films")])],1),r("b-list-group-item",{staticClass:"item"},[r("router-link",{staticClass:"link",attrs:{to:{path:"/search",query:{category:"species"}}}},[t._v("Species")])],1)],1)],1)])}),v=[],b={name:"home"},m=b,y=(r("1e7a"),Object(p["a"])(m,g,v,!1,null,"b9bde8f2",null)),_=y.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("header",[r("h1",{staticClass:"title"},[t._v("STAR WARS")]),r("p",{staticClass:"subtitle"},[t._v(t._s(t.category))])]),t.infos&&t.infos.length?r("div",[r("b-list-group",t._l(t.infos,(function(e){return r("div",{key:e.name},[r("b-list-group-item",{staticClass:"item"},[r("router-link",{staticClass:"link",attrs:{to:{path:"/detail",query:{category:t.category,id:t.get(e.url)}}}},[t._v(" "+t._s(e.name||e.title)+" ")])],1)],1)})),0),r("div",{staticClass:"container mt-4 mb-4"},[r("div",{staticClass:"row justify-content-center"},[t.previous?r("div",[r("a",{staticClass:"link mr-5",attrs:{href:t.$router.resolve({path:"/search",query:{category:t.category,page:t.getPage(t.previous)}}).href}},[r("b-icon-arrow-left",{staticClass:"h1"})],1)]):t._e(),t.next?r("div",[r("a",{staticClass:"link",attrs:{href:t.$router.resolve({path:"/search",query:{category:t.category,page:t.getPage(t.next)}}).href}},[r("b-icon-arrow-right",{staticClass:"h1"})],1)]):t._e()])])],1):t._e(),t.errors&&t.errors.length?r("div",[r("b-list-group",t._l(t.errors,(function(e){return r("div",{key:e},[r("b-list-group-item",{staticClass:"item"},[t._v(" "+t._s(e.message)+" ")])],1)})),0)],1):t._e()])},w=[],k=(r("99af"),r("caad"),r("d3b7"),r("ac1f"),r("2532"),r("3ca3"),r("841c"),r("ddb0"),r("2b3d"),r("bc3a")),x=r.n(k),O={name:"search",data:function(){return{infos:[],errors:[],next:null,previous:null,category:null,page:null,get:function(t){return t.substr(-3,2).includes("/")?t.substr(-2,1):t.substr(-3,2)},getPage:function(t){return t.substr(-2,1).includes("=")?t.substr(-1,1):t.substr(-2,2)}}},created:function(){var t=this,e=window.location.search.substring(1),r=new URLSearchParams(e);this.category=r.get("category"),this.page=r.get("page"),this.page?(this.next="https://swapi.dev/api/".concat(this.category,"/?page=").concat(this.page),1==this.page?this.previous=null:this.previous="https://swapi.dev/api/".concat(this.category,"/?page=").concat(this.page-1)):(this.next="https://swapi.dev/api/".concat(this.category,"/?page=1"),this.previous=null),x.a.get(this.next).then((function(e){t.infos=e.data.results,t.next=e.data.next})).catch((function(e){t.errors.push(e)}))}},S=O,j=(r("1419"),Object(p["a"])(S,C,w,!1,null,"0ae6ba55",null)),P=j.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.detail?r("div",[r("div",{staticClass:"fade"}),r("div",[r("section",{staticClass:"star-wars"},[r("div",{staticClass:"crawl"},[t._m(0),r("b-list-group",t._l(t.detail,(function(e,s){return r("div",{key:e},[r("b-list-group-item",{staticClass:"item mb-5 pb-3"},[t._v(" "+t._s(s)+": "+t._s(e)+" ")])],1)})),0)],1)])])]):t._e(),t.errors&&t.errors.length?r("div",[r("b-list-group",t._l(t.errors,(function(e){return r("div",{key:e},[r("b-list-group-item",{staticClass:"item"},[t._v(" "+t._s(e.message)+" ")])],1)})),0)],1):t._e()])},A=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"titleCrawl"},[r("h1",[t._v("STAR WARS")]),r("p",[t._v("A chosen detail")])])}],R={name:"detail",data:function(){return{detail:null,errors:[]}},created:function(){var t=this,e=window.location.search.substring(1),r=new URLSearchParams(e);x.a.get("https://swapi.dev/api/".concat(r.get("category"),"/").concat(r.get("id"))).then((function(e){t.detail=e.data})).catch((function(e){t.errors.push(e)}))}},$=R,E=(r("ce19"),Object(p["a"])($,q,A,!1,null,"77210008",null)),T=E.exports,M=[{path:"/",component:_},{path:"/search",component:P},{path:"/detail",component:T}],W=M;s["default"].use(d["a"]),s["default"].use(a["a"]),s["default"].use(a["b"]);var J=new d["a"]({mode:"history",routes:W});s["default"].use(n.a,{router:J}),new s["default"]({router:J,mounted:function(){},render:function(t){return t(h)}}).$mount("#app")},5810:function(t,e,r){},"7fce":function(t,e,r){},"85ec":function(t,e,r){},ce19:function(t,e,r){"use strict";r("7fce")},e31b:function(t,e,r){}});
//# sourceMappingURL=app.213b1126.js.map