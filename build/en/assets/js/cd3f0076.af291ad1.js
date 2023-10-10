"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},i),{},{components:n})):r.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Nacos\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u9884\u89c8",keywords:["nacos"],description:"Nacos\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u9884\u89c8"},c="Nacos\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u9884\u89c8",l={permalink:"/en/blog/discovery-console",source:"@site/i18n/en/docusaurus-plugin-content-blog/discovery-console.md",title:"Nacos\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u9884\u89c8",description:"Nacos\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u9884\u89c8",date:"2023-10-10T11:24:40.000Z",formattedDate:"October 10, 2023",tags:[],readingTime:6.255,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u9884\u89c8",keywords:["nacos"],description:"Nacos\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u9884\u89c8"},prevItem:{title:"v0.5.0 of Nacos-sdk-csharp was released! Capabilities aligned with Java SDK\uff01",permalink:"/en/blog/csharp-0.5.0"},nextItem:{title:"\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u57fa\u4e8eDNS\u7684\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0",permalink:"/en/blog/dns-sd"}},p={authorsImageUrls:[]},s=[],i={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nacos\u662f\u963f\u91cc\u5df4\u5df4\u4e2d\u95f4\u4ef6\u90e8\u95e8\u6700\u8fd1\u5f00\u6e90\u7684\u4e00\u6b3e\u7528\u4e8e\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u7684\u4ea7\u54c1\u3002\u5728\u65e20.1\u7248\u672c\u53d1\u5e03\u57fa\u672c\u529f\u80fd\u548c0.2\u7248\u672c\u53d1\u5e03\u4e0eSpring\u751f\u6001\u7ed3\u5408\u7684\u529f\u80fd\u540e\uff0c0.3\u7248\u672c\u5c06\u91ca\u653e\u5168\u65b0\u7684\u63a7\u5236\u53f0\u754c\u9762\u3002\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u76f8\u5173\u7684\u63a7\u5236\u53f0\uff0c\u5c06\u4f1a\u7531\u963f\u91cc\u4e91\u5546\u4e1a\u4ea7\u54c1ACM\u63a7\u5236\u53f0\u6539\u9020\u800c\u6765\uff0c\u800c\u670d\u52a1\u53d1\u73b0\u7684\u63a7\u5236\u53f0\u754c\u9762\uff0c\u5219\u5c06\u4ee5\u9996\u6b21\u9732\u9762\u7684\u59ff\u6001\uff0c\u5f00\u653e\u7ed9\u5f00\u6e90\u793e\u533a\u3002\u672c\u6587\u5c31\u5c06\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u76f8\u5173\u7684\u754c\u9762UI\u521d\u7248\u8bbe\u8ba1\u516c\u5e03\uff0c\u6b22\u8fce\u5927\u5bb6\u53c2\u4e0e\u8ba8\u8bba\uff0c\u5e0c\u671b\u901a\u8fc7\u5927\u5bb6\u7684\u6279\u8bc4\u548c\u5efa\u8bae\uff0c\u5c06\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u8fd9\u5757\u7684\u529f\u80fd\u548c\u754c\u9762\uff0c\u8bbe\u8ba1\u7684\u66f4\u52a0\u7f8e\u89c2\u548c\u6613\u7528\u3002"),(0,a.kt)("p",null,"\u670d\u52a1\u53d1\u73b0\u63a7\u5236\u53f0\u7684\u4e3b\u8981\u529f\u80fd\u662f\u670d\u52a1\u5217\u8868\u7684\u5c55\u793a\u548c\u641c\u7d22\uff0c\u4ee5\u53ca\u670d\u52a1\u914d\u7f6e\u3001\u96c6\u7fa4\u914d\u7f6e\u3001\u5b9e\u4f8b\u914d\u7f6e\u7684\u67e5\u8be2\u548c\u66f4\u65b0\u3002\u57280.3\u7248\u672c\u4e2d\uff0c\u4e3b\u8981\u4f1a\u6709\u4e24\u4e2a\u9875\u9762\uff1a\u670d\u52a1\u5217\u8868\u548c\u670d\u52a1\u8be6\u60c5\u3002"),(0,a.kt)("h1",{id:"\u670d\u52a1\u5217\u8868"},"\u670d\u52a1\u5217\u8868"),(0,a.kt)("p",null,"\u670d\u52a1\u5217\u8868\u9875\u9762\u4e3b\u8981\u5c55\u793a\u5df2\u7ecf\u5728Nacos\u6ce8\u518c\u7684\u670d\u52a1\u5217\u8868\uff0c\u4ee5\u53ca\u670d\u52a1\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u670d\u52a1\u7684\u57fa\u672c\u4fe1\u606f\u6709\uff1a\u670d\u52a1\u7684\u540d\u79f0\u3001\u670d\u52a1\u4e0b\u96c6\u7fa4\u7684\u6570\u76ee\u3001\u670d\u52a1\u4e0b\u5b9e\u4f8b\u7684\u6570\u76ee\u3001\u670d\u52a1\u7684\u5065\u5eb7\u7a0b\u5ea6\u4ee5\u53ca\u8fdb\u5165\u670d\u52a1\u8be6\u60c5\u7684\u6309\u94ae\u3002\u540c\u65f6\u53f3\u4e0a\u89d2\u8fd8\u6709\u4e00\u4e2a\u652f\u6301\u6839\u636e\u670d\u52a1\u540d\u641c\u7d22\u670d\u52a1\u7684\u641c\u7d22\u6846\u548c\u641c\u7d22\u6309\u94ae\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1538701093629-9880a456-8a37-4663-bd88-853441dab3f4.png",alt:"\u56fe1 \u670d\u52a1\u5217\u8868\u9875\u9762"})),(0,a.kt)("h1",{id:"\u670d\u52a1\u8be6\u60c5"},"\u670d\u52a1\u8be6\u60c5"),(0,a.kt)("p",null,"\u5728\u670d\u52a1\u5217\u8868\u9875\u9762\u70b9\u51fb\u201cdetail\u201d\u6309\u94ae\uff0c\u5c31\u4f1a\u8fdb\u5165\u670d\u52a1\u8be6\u60c5\u9875\u9762\u3002\u670d\u52a1\u8be6\u60c5\u9875\u9762\u5c55\u793a\u7684\u662f\u4e00\u4e2a\u670d\u52a1\u7684\u6240\u6709\u5173\u952e\u4fe1\u606f\uff0c\u5305\u62ec\u670d\u52a1\u7684\u914d\u7f6e\u548c\u5143\u6570\u636e\u3001\u96c6\u7fa4\u5217\u8868\u548c\u793a\u4f8b\u5217\u8868\uff0c\u4ee5\u53ca\u4e00\u4e9b\u64cd\u4f5c\u7684\u6309\u94ae\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1538701093629-9880a456-8a37-4663-bd88-853441dab3f4.png",alt:"\u56fe2 \u670d\u52a1\u8be6\u60c5\u9875\u9762"})),(0,a.kt)("p",null,"\u5728\u8be5\u9875\u9762\u7684\u4e0a\u65b9\uff0c\u662f\u670d\u52a1\u7684\u914d\u7f6e\u548c\u5143\u4fe1\u606f\uff0c\u76ee\u524d\u5305\u542b\u670d\u52a1\u540d\u3001\u4fdd\u62a4\u9608\u503c\u3001\u5065\u5eb7\u68c0\u67e5\u6a21\u5f0f\u4ee5\u53ca\u5143\u6570\u636emetadata\u3002\u53f3\u4e0a\u65b9\u662f\u7f16\u8f91\u670d\u52a1\u6309\u94ae\uff0c\u70b9\u51fb\u540e\u4f1a\u6709\u5bf9\u8bdd\u6846\u5f39\u51fa\uff0c\u53ef\u4ee5\u5bf9\u670d\u52a1\u7684\u914d\u7f6e\u8fdb\u884c\u7f16\u8f91\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1538701150783-fa6d58cf-01f4-430c-a5d0-6278c9590404.png",alt:"\u56fe2 \u670d\u52a1\u8be6\u60c5\u9875\u9762"})),(0,a.kt)("p",null,"\u670d\u52a1\u8be6\u60c5\u7684\u4e0b\u65b9\uff0c\u662f\u96c6\u7fa4\u5217\u8868\u548c\u96c6\u7fa4\u4e0b\u7684\u5b9e\u4f8b\u5217\u8868\u3002\u6bcf\u4e2a\u96c6\u7fa4\u4f1a\u663e\u793a\u4e00\u4e2a\u96c6\u7fa4\u540d\uff0c\u548c\u76f8\u5e94\u7684\u67e5\u770b&\u66f4\u65b0\u96c6\u7fa4\u8be6\u60c5\u6309\u94ae\u3002\u70b9\u51fb\u8be5\u6309\u94ae\u540e\uff0c\u4f1a\u662f\u4e00\u4e2a\u66f4\u65b0\u96c6\u7fa4\u7684\u5bf9\u8bdd\u6846\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1538701200952-f9dcb51e-100e-4501-a3db-d665dfaf7188.png",alt:"\u56fe4 \u66f4\u65b0\u96c6\u7fa4\uff08TCP\u5065\u5eb7\u68c0\u67e5\uff09"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1538701223427-284aaf1c-1cd3-412e-9f22-d5baae2cee25.png",alt:"\u56fe5 \u66f4\u65b0\u96c6\u7fa4\uff08HTTP\u5065\u5eb7\u68c0\u67e5\uff09"})),(0,a.kt)("p",null,"\u56fe4\u548c\u56fe5\u5206\u522b\u5c55\u793a\u4e86\u5bf9\u96c6\u7fa4\u66f4\u65b0\u7684\u4e24\u79cd\u5bf9\u8bdd\u6846\u5c55\u793a\uff0c\u4e24\u8005\u7684\u533a\u522b\u662f\u9009\u62e9\u4e86\u4e0d\u540c\u7684\u5065\u5eb7\u68c0\u67e5\u65b9\u5f0f\u3002TCP\u5065\u5eb7\u68c0\u67e5\u65b9\u5f0f\u53ef\u4ee5\u914d\u7f6e\u68c0\u67e5\u7684\u7aef\u53e3\uff1bHTTP\u5065\u5eb7\u68c0\u67e5\u65b9\u5f0f\u53ef\u4ee5\u914d\u7f6e\u68c0\u67e5\u7684\u7aef\u53e3\u3001\u68c0\u67e5\u7684\u8def\u5f84\u548cHTTP\u5934\u90e8\u4fe1\u606f\u3002\u540c\u65f6\u8fd8\u53ef\u4ee5\u914d\u7f6e\u662f\u5426\u91c7\u7528\u5b9e\u4f8b\u7684\u7aef\u53e3\u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u5982\u679c\u914d\u7f6e\u4e3atrue\uff0c\u5219\u5065\u5eb7\u68c0\u67e5\u5c06\u4f7f\u7528\u5b9e\u4f8b\u6ce8\u518c\u7684\u7aef\u53e3\u8fdb\u884c\u901a\u4fe1\u3002\u8be5\u5bf9\u8bdd\u6846\u8fd8\u53ef\u4ee5\u7f16\u8f91\u96c6\u7fa4\u7684\u5143\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u96c6\u7fa4\u4e0b\u9762\u90fd\u4f1a\u6709\u5b9e\u4f8b\u5217\u8868\uff0c\u5b9e\u4f8b\u5217\u8868\u5c06\u4f1a\u5206\u9875\u5c55\u793a\u8be5\u96c6\u7fa4\u4e0b\u6ce8\u518c\u7684\u6240\u6709\u5b9e\u4f8b\uff0c\u5c55\u793a\u7684\u4fe1\u606f\u6709IP\u3001\u7aef\u53e3\u3001\u6743\u91cd\u3001\u662f\u5426\u5065\u5eb7\u3001\u5143\u4fe1\u606f\u548c\u5bf9\u5e94\u7684\u7f16\u8f91\u53ca\u4e0b\u7ebf\u6309\u94ae\u3002\u4e0b\u7ebf\u6309\u94ae\u70b9\u51fb\u540e\uff0c\u8be5\u5b9e\u4f8b\u5c06\u4e0d\u4f1a\u8fd4\u56de\u7ed9\u8ba2\u9605\u7aef\uff0c\u65e0\u8bba\u8be5\u5b9e\u4f8b\u662f\u5426\u5065\u5eb7\u3002\u201c\u4e0b\u7ebf\u201d\u6587\u672c\u4f1a\u6539\u6210\u201c\u4e0a\u7ebf\u201d\uff0c\u7528\u4e8e\u5bf9\u5e94\u7684\u5b9e\u4f8b\u4e0a\u7ebf\u64cd\u4f5c\u3002\u70b9\u51fb\u7f16\u8f91\u6309\u94ae\uff0c\u5219\u4f1a\u8fdb\u5165\u7f16\u8f91\u5b9e\u4f8b\u5bf9\u8bdd\u6846\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/lark/0/2018/png/15356/1538701250740-ffb38cd0-a15d-4425-a2ca-48c5d0d2698e.png",alt:"\u56fe6 \u7f16\u8f91\u5b9e\u4f8b\u5bf9\u8bdd\u6846"})),(0,a.kt)("p",null,"\u7f16\u8f91\u5b9e\u4f8b\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u7f16\u8f91\u7684\u4fe1\u606f\u6709\u5b9e\u4f8b\u7684\u6743\u91cd\u3001\u662f\u5426\u4e0a\u4e0b\u7ebf\u548c\u5143\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"0.3\u7248\u672c\u7684\u670d\u52a1\u53d1\u73b0\u9875\u9762\uff0c\u57fa\u672c\u5c31\u662f\u8fd9\u6837\uff0c\u6b22\u8fce\u5927\u5bb6\u7684\u53cd\u9988\u3002\u670d\u52a1\u6ce8\u518c\u5ba2\u6237\u7aef\u4e5f\u53ef\u4ee5\u7f16\u8f91\u670d\u52a1\u3001\u96c6\u7fa4\u3001\u5b9e\u4f8b\u5143\u4fe1\u606f\uff0c\u8fd9\u4e9b\u53ef\u80fd\u4f1a\u548c\u63a7\u5236\u53f0\u7684\u7f16\u8f91\u76f8\u51b2\u7a81\uff0c\u76ee\u524d\u7684\u673a\u5236\u662f\uff0c\u4e0d\u7ba1\u662f\u63a7\u5236\u53f0\u66f4\u65b0\u548c\u5ba2\u6237\u7aef\u66f4\u65b0\uff0c\u90fd\u5c06\u88abNacos\u670d\u52a1\u7aef\u6240\u63a5\u53d7\uff0c\u8fd9\u70b9\u4e5f\u6b22\u8fce\u5927\u5bb6\u7ed9\u51fa\u81ea\u5df1\u7684\u770b\u6cd5\u3002\u6700\u540e\u4e5f\u9884\u795d\u5927\u5bb6\u56fd\u5e86\u653e\u5047\u6109\u5feb\uff01"))}d.isMDXComponent=!0}}]);