"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?a.createElement(d,c(c({ref:t},p),{},{components:n})):a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",keywords:["nacos0.9","nacos0.9.0","nacos \u53d1\u5e03"],description:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03"},c="Nacos 0.9.0\u7248\u672c\u53d1\u5e03\u5566",i={permalink:"/zh-cn/blog/nacos0.9-intro",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/nacos0.9-intro.md",title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",description:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",date:"2023-10-10T11:24:40.000Z",formattedDate:"2023\u5e7410\u670810\u65e5",tags:[],readingTime:.905,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",keywords:["nacos0.9","nacos0.9.0","nacos \u53d1\u5e03"],description:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03"},prevItem:{title:"Nacos 0.8.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",permalink:"/zh-cn/blog/nacos0.8"},nextItem:{title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",permalink:"/zh-cn/blog/nacos0.9.0"}},s={authorsImageUrls:[]},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nacos \u53d1\u5e03 0.9.0 \u7248\u672c\uff0c\u8be5\u7248\u672c\u52a0\u5f3a\u4e86 Nacos-Sync \u7a33\u5b9a\u6027\uff0c\u589e\u52a0\u4e86\u76d1\u63a7\u4f53\u7cfb\uff0c\u5b8c\u5584\u4e86\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5e76\u4e14\u652f\u6301 Naming \u548c Config \u7684\u5206\u6a21\u5757\u542f\u52a8\uff0c\u6b64\u5916\u8fd8\u4fee\u590d\u4e86\u793e\u533a\u63d0\u51fa\u7684\u4e00\u4e9b issues\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[#412]"," Nacos can support Dubbo service registration discovery and configuration management"),(0,r.kt)("li",{parentName:"ul"},"[#388]"," Cluster name should be provided in the Instance"),(0,r.kt)("li",{parentName:"ul"},"[#377]"," Clean up messy code in Naming module"),(0,r.kt)("li",{parentName:"ul"},"[#369]"," Support instance list persisted on disk"),(0,r.kt)("li",{parentName:"ul"},"[#366]"," Findbugs-maven-plugin version"),(0,r.kt)("li",{parentName:"ul"},"[#362]"," The metadata will lost when online or offline instance through web ui"),(0,r.kt)("li",{parentName:"ul"},"[#352]"," Refactoring internationalization Nacos console"),(0,r.kt)("li",{parentName:"ul"},"[#278]"," Nacos docker img"),(0,r.kt)("li",{parentName:"ul"},"[#243]"," Optimize the efficiency of integration testing, it\u2019s taking too long now")),(0,r.kt)("p",null,"\u611f\u8c22\u4ee5\u4e0b Contributors \u5bf9 Nacos 0.9.0\u7248\u672c\u7684\u8d21\u732e\uff0c\u4ed6\u4eec\u662f\uff1a"),(0,r.kt)("p",null,"@paderlol\u3001@jifengnan\u3001@loadchange\u3001@nkorange\u3001@hxy1991\u3001@huangyunbin\u3001@darkness463\u3001@luoxn28\u3001@TsingLiang\u3001@xuechaos\u3001@nanamikon\u3001@systp\u3001@jameslcj\u3001@pader.zhang"),(0,r.kt)("p",null,"\u8be6\u60c5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/releases/tag/0.9.0"},"https://github.com/alibaba/nacos/releases/tag/0.9.0")),(0,r.kt)("p",null,"Nacos team \u4ecb\u7ecd \uff1a",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/nacos-dev.html"},"https://nacos.io/en-us/docs/nacos-dev.html")," \uff08\u6301\u7eed\u6269\u5c55\u4e2d\uff0c\u6b22\u8fce\u52a0\u5165\uff09"),(0,r.kt)("p",null,"\u5982\u4f55\u52a0\u5165 Nacos team\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/contributing-dev.html"},"https://nacos.io/en-us/docs/contributing-dev.html")))}m.isMDXComponent=!0}}]);