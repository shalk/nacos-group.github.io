"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3799],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},i="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),i=u(a),b=l,d=i["".concat(p,".").concat(b)]||i[b]||k[b]||r;return a?n.createElement(d,c(c({ref:t},s),{},{components:a})):n.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,c=new Array(r);c[0]=b;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[i]="string"==typeof e?e:l,c[1]=o;for(var u=2;u<r;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},15350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u652f\u6301Dubbo\u751f\u6001\u53d1\u5c55\uff0c\u963f\u91cc\u5df4\u5df4\u542f\u52a8\u65b0\u7684\u5f00\u6e90\u9879\u76ee Nacos",keywords:["nacos","alibaba","dubbo"],description:"\u652f\u6301Dubbo\u751f\u6001\u53d1\u5c55\uff0c\u963f\u91cc\u5df4\u5df4\u542f\u52a8\u65b0\u7684\u5f00\u6e90\u9879\u76ee Nacos"},c="\u652f\u6301Dubbo\u751f\u6001\u53d1\u5c55\uff0c\u963f\u91cc\u5df4\u5df4\u542f\u52a8\u65b0\u7684\u5f00\u6e90\u9879\u76ee Nacos",o={permalink:"/zh-cn/blog/nacos-is-coming",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/nacos-is-coming.md",title:"\u652f\u6301Dubbo\u751f\u6001\u53d1\u5c55\uff0c\u963f\u91cc\u5df4\u5df4\u542f\u52a8\u65b0\u7684\u5f00\u6e90\u9879\u76ee Nacos",description:"\u652f\u6301Dubbo\u751f\u6001\u53d1\u5c55\uff0c\u963f\u91cc\u5df4\u5df4\u542f\u52a8\u65b0\u7684\u5f00\u6e90\u9879\u76ee Nacos",date:"2023-10-10T11:24:40.000Z",formattedDate:"2023\u5e7410\u670810\u65e5",tags:[],readingTime:17.285,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u652f\u6301Dubbo\u751f\u6001\u53d1\u5c55\uff0c\u963f\u91cc\u5df4\u5df4\u542f\u52a8\u65b0\u7684\u5f00\u6e90\u9879\u76ee Nacos",keywords:["nacos","alibaba","dubbo"],description:"\u652f\u6301Dubbo\u751f\u6001\u53d1\u5c55\uff0c\u963f\u91cc\u5df4\u5df4\u542f\u52a8\u65b0\u7684\u5f00\u6e90\u9879\u76ee Nacos"},prevItem:{title:"Nacos \u7684 Distro \u4e00\u81f4\u6027\u534f\u8bae",permalink:"/zh-cn/blog/nacos-distro-mechanism"},nextItem:{title:"Nacos \u7684\u4e00\u6761\u6ce8\u518c\u8bf7\u6c42\u4f1a\u7ecf\u5386\u4ec0\u4e48\uff1f",permalink:"/zh-cn/blog/nacos-reigster-mechanism"}},p={authorsImageUrls:[]},u=[{value:"\u8d21\u732eDubbo\u751f\u6001\uff0c\u963f\u91ccNacos\u5f00\u6e90\u8ba1\u5212",id:"\u8d21\u732edubbo\u751f\u6001\u963f\u91ccnacos\u5f00\u6e90\u8ba1\u5212",level:2},{value:"\u4ec0\u4e48\u662f Nacos /n\u0251:k\u0259\u028as/?",id:"\u4ec0\u4e48\u662f-nacos-n\u0251k\u0259\u028as",level:2},{value:"\u4e3a\u4ec0\u4e48\u5f00\u6e90 Nacos",id:"\u4e3a\u4ec0\u4e48\u5f00\u6e90-nacos",level:2},{value:"Nacos \u4e0e \u4e3b\u6d41\u5f00\u6e90\u751f\u6001\u7684\u5173\u7cfb",id:"nacos-\u4e0e-\u4e3b\u6d41\u5f00\u6e90\u751f\u6001\u7684\u5173\u7cfb",level:2},{value:"Nacos \u90e8\u5206\u7279\u6027\u9884\u89c8",id:"nacos-\u90e8\u5206\u7279\u6027\u9884\u89c8",level:2},{value:"Nacos \u7684\u4e3b\u8981\u4ea7\u54c1\u91cc\u7a0b\u7891\u53ca\u8ba1\u5212",id:"nacos-\u7684\u4e3b\u8981\u4ea7\u54c1\u91cc\u7a0b\u7891\u53ca\u8ba1\u5212",level:2},{value:"Nacos \u4e0e\u76f8\u5173\u5f00\u6e90\u4ea7\u54c1\u7684\u5bf9\u6bd4",id:"nacos-\u4e0e\u76f8\u5173\u5f00\u6e90\u4ea7\u54c1\u7684\u5bf9\u6bd4",level:2},{value:"\u793e\u533a\u5316\u53d1\u5c55\uff0c\u6b22\u8fce\u52a0\u5165\u5e76\u8d21\u732e\u793e\u533a",id:"\u793e\u533a\u5316\u53d1\u5c55\u6b22\u8fce\u52a0\u5165\u5e76\u8d21\u732e\u793e\u533a",level:2},{value:"\u611f\u8c22\u6240\u6709\u672a\u6765\u7ed9\u6211\u4eec\u5e2e\u52a9\u7684\u670b\u53cb",id:"\u611f\u8c22\u6240\u6709\u672a\u6765\u7ed9\u6211\u4eec\u5e2e\u52a9\u7684\u670b\u53cb",level:2},{value:"References",id:"references",level:2}],s={toc:u},i="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(i,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8d21\u732edubbo\u751f\u6001\u963f\u91ccnacos\u5f00\u6e90\u8ba1\u5212"},"\u8d21\u732eDubbo\u751f\u6001\uff0c\u963f\u91ccNacos\u5f00\u6e90\u8ba1\u5212"),(0,l.kt)("p",null,"\u5728\u4e0a\u5468\u516d\u7684Aliware\u6280\u672f\u884c\u4e0a\u6d77\u7ad9Dubbo\u5f00\u53d1\u8005\u6c99\u9f99\u4e0a\uff0c\u963f\u91cc\u5df4\u5df4\u9ad8\u7ea7\u6280\u672f\u4e13\u5bb6\u90ed\u5e73(\u5764\u5b87)\u5ba3\u5e03\u4e86\u963f\u91cc\u5df4\u5df4\u7684\u4e00\u4e2a\u65b0\u5f00\u6e90\u8ba1\u5212\uff0c\u963f\u91cc\u5df4\u5df4\u8ba1\u5212\u57287\u6708\u4efd\u5f00\u542f\u4e00\u4e2a\u540d\u53ebNacos\u7684\u65b0\u5f00\u6e90\u9879\u76ee, \u5728\u6d3b\u52a8\u6f14\u8bb2\u4e2d\uff0c\u5764\u5b87\u4ecb\u7ecd\u4e86\u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u7684\u521d\u8877\uff0c\u4ed6\u8868\u793a \u201c\u5c06\u901a\u8fc7Nacos\u9879\u76ee\u5c06\u963f\u91cc\u5df4\u5df4\u5728\u5efa\u8bbe\u5171\u4eab\u670d\u52a1\u4f53\u7cfb\u4e2d\u4f7f\u7528\u7684\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u53ca\u670d\u52a1\u7ba1\u7406\u5e73\u53f0\u8d21\u732e\u7ed9\u5f00\u6e90\u793e\u533a\uff0c\u901a\u8fc7\u6253\u9020Dubbo + Nacos\u7684\u7ecf\u5178\u7ec4\u5408\u8fdb\u4e00\u6b65\u91ca\u653eDubbo\u5728\u4e91\u539f\u751f\u53caService Mesh\u65f6\u4ee3\u4e2d\uff0c\u5728\u5927\u89c4\u6a21\u5fae\u670d\u52a1\u6cbb\u7406\u3001\u6d41\u91cf\u6cbb\u7406\u3001\u670d\u52a1\u96c6\u6210\u4e0e\u670d\u52a1\u5171\u4eab\u7b49\u670d\u52a1\u5e73\u53f0\u80fd\u529b\u5efa\u8bbe\u4e0a\u7684\u5a01\u529b\uff0c\u540c\u65f6Nacos\u4f1a\u975e\u5e38\u5173\u6ce8\u5bf9\u4e3b\u6d41\u5f00\u6e90\u793e\u533a\uff0c\u5982Spring Cloud\u548cKubernetes\u4e91\u539f\u751f\u4f53\u7cfb\u7684\u65e0\u7f1d\u5bf9\u63a5\u4e0e\u652f\u6301\u201d\u3002\u8be5\u9879\u76ee\u9884\u8ba1\u57287\u6708\u4e2d\u65ec\u4e4b\u524d\u5f00\u653e\u9996\u4e2a\u6d4b\u8bd5\u9884\u89c8\u7248\u672c\uff0c\u5e76\u8ba1\u5212\u5728\u672a\u67656~8\u4e2a\u6708release\u76840.8\u7248\u672c\u5f00\u59cb\u8fbe\u5230\u751f\u4ea7\u53ef\u7528\u7684\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u6d3b\u52a8\u7684 ",(0,l.kt)("a",{parentName:"p",href:"http://www.itdks.com/dakashuo/playback/2307"},"\u89c6\u9891\u56de\u653e")),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-nacos-n\u0251k\u0259\u028as"},"\u4ec0\u4e48\u662f Nacos /n\u0251:k\u0259\u028as/?"),(0,l.kt)("p",null,"Nacos \u662f\u963f\u91cc\u5df4\u5df4\u7684\u65b0\u5f00\u6e90\u9879\u76ee\uff0c\u5176\u6838\u5fc3\u5b9a\u4f4d\u662f \u201c\u4e00\u4e2a\u66f4\u6613\u4e8e\u5e2e\u52a9\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u670d\u52a1\u7ba1\u7406\u5e73\u53f0\u201d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530083408486-b4698533-8e69-4e0a-9f3a-fdb1cdfbd290.png",alt:"Screen Shot 2018-06-27 at 15.09.35.png"})," "),(0,l.kt)("p",null,"Nacos \u6709\u4e09\u5927\u4e3b\u8981\u529f\u80fd:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0\u4e0e\u670d\u52a1\u7ba1\u7406")),(0,l.kt)("p",null,"\u5728\u91c7\u7528\u4ee5\u201c\u670d\u52a1(Service)\u201d\u4e3a\u4e2d\u5fc3\u7684\u8bf8\u5982\u5fae\u670d\u52a1\u53ca\u4e91\u539f\u751f\u65b9\u5f0f\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784\u65f6\uff0c\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u81f3\u5173\u91cd\u8981\u3002 Nacos\u540c\u65f6\u652f\u6301\u57fa\u4e8eDNS\u548c\u57fa\u4e8eRPC\uff08\u5982Dubbo/gRPC\uff09\u7684\u670d\u52a1\u53d1\u73b0\uff0c\u5e76\u4e3a\u60a8\u63d0\u4f9b\u670d\u52a1\u7684\u5b9e\u65f6\u7684\u5065\u5eb7\u68c0\u67e5\u4ee5\u9632\u6b62\u5c06\u8bf7\u6c42\u53d1\u9001\u7ed9\u4e0d\u5065\u5eb7\u7684\u4e3b\u673a\uff0c\u57fa\u4e8eNacos\u60a8\u4e5f\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u5b9e\u73b0\u670d\u52a1\u65ad\u8def\u5668\u3002Nacos\u63d0\u4f9b\u7684\u5f3a\u5927\u7684\u670d\u52a1\u7684\u5143\u6570\u636e\u7ba1\u7406\uff0c\u8def\u7531\u53ca\u6d41\u91cf\u7ba1\u7406\u7b56\u7565\u4e5f\u80fd\u591f\u5e2e\u52a9\u60a8\u66f4\u597d\u7684\u6784\u5efa\u66f4\u5f3a\u58ee\u7684\u5fae\u670d\u52a1\u5e73\u53f0\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u914d\u7f6e\u7ba1\u7406")),(0,l.kt)("p",null,"\u52a8\u6001\u914d\u7f6e\u670d\u52a1\u5141\u8bb8\u60a8\u5728\u6240\u6709\u73af\u5883\u4e2d\u4ee5\u96c6\u4e2d\u548c\u52a8\u6001\u7684\u65b9\u5f0f\u7ba1\u7406\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u6216\u670d\u52a1\u7684\u914d\u7f6e\u3002\u52a8\u6001\u914d\u7f6e\u6d88\u9664\u4e86\u914d\u7f6e\u66f4\u65b0\u65f6\u91cd\u65b0\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u7684\u9700\u8981\u3002\u53ef\u4ee5\u66f4\u65b9\u4fbf\u7684\u5e2e\u52a9\u60a8\u5b9e\u73b0\u65e0\u72b6\u6001\u670d\u52a1\uff0c\u66f4\u8f7b\u677e\u5730\u5b9e\u73b0\u6309\u9700\u5f39\u6027\u6269\u5c55\u670d\u52a1\u5b9e\u4f8b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001DNS\u670d\u52a1")),(0,l.kt)("p",null,"\u652f\u6301\u6743\u91cd\u8def\u7531\u7684\u52a8\u6001DNS\u670d\u52a1\u4f7f\u60a8\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u5728\u6570\u636e\u4e2d\u5fc3\u5185\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u5b9e\u65bd\u4e2d\u95f4\u5c42\u8d1f\u8f7d\u5e73\u8861\uff0c\u7075\u6d3b\u7684\u8def\u7531\u7b56\u7565\uff0c\u6d41\u91cf\u63a7\u5236\u548c\u7b80\u5355\u7684DNS\u89e3\u6790\u670d\u52a1\uff0c\u5e2e\u52a9\u60a8\u66f4\u5bb9\u6613\u7684\u5b9e\u73b0DNS-based\u670d\u52a1\u53d1\u73b0\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u5f00\u6e90-nacos"},"\u4e3a\u4ec0\u4e48\u5f00\u6e90 Nacos"),(0,l.kt)("p",null,"\u963f\u91cc\u5df4\u5df4\u4e3a\u4ec0\u4e48\u9009\u62e9\u8fd9\u4e48\u4e00\u4e2a\u65f6\u95f4\u70b9\u5f00\u6e90Nacos\uff0c\u5176\u80cc\u540e\u7684\u601d\u8003\u662f\u4ec0\u4e48\uff0c\u5764\u5b87\u4e5f\u7ed9\u51fa\u4e86\u8be6\u7ec6\u7684\u89e3\u8bfb\uff0c\u5728\u6f14\u8bb2\u4e2d\uff0c\u5764\u5b87\u8868\u793a\u4e3b\u610f\u57fa\u4e8e\u4ee5\u4e0b\u51e0\u70b9:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u56f4\u7ed5\u7740Service\u4e3a\u4e2d\u5fc3\u7684\u5206\u5e03\u5f0f\u57fa\u7840\u8bbe\u65bd\u6b63\u5728\u53d8\u7684\u8d8a\u6765\u8d8a\u91cd\u8981"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077340492-513a25c0-51d0-494f-b39d-6f615d7e3915.png",alt:"Screen Shot 2018-06-27 at 13.28.09.png"})," "),(0,l.kt)("p",null,"\u4e16\u754c\u6b63\u5728\u53d8\u7684\u66f4\u5feb\uff0c\u521b\u65b0\u548c\u5e02\u573a\u7ade\u4e89\u7684\u8282\u594f\u6b63\u5728\u53d8\u5f97\u6108\u53d1\u5267\u70c8\uff0c\u5982\u4f55\u8d85\u5feb\u901f\u5b9e\u73b0\u4e1a\u52a1\u589e\u957f\u6210\u4e3a\u5546\u4e1a\u7ade\u4e89\u7684\u4e3b\u65cb\u5f8b\uff0c\u51e0\u4e4e\u4e00\u591c\u4e4b\u95f4\u5171\u4eab\u5355\u8f66\u5c31\u706b\u904d\u5168\u56fd\uff0c\u4e0d\u5230\u51e0\u5e74\u6ef4\u6ef4\u5c31\u6539\u53d8\u4e86\u6211\u4eec\u7684\u6253\u8f66\u65b9\u5f0f\uff0c\u817e\u8baf\u4e09\u73ed\u5012\u5b9e\u73b0\u5168\u6c11\u201c\u5403\u9e21\u201d\uff0c\u73b0\u5728\u4f01\u4e1a\u4f30\u503c\u5728\u4ece0\u5230100\u4ebf\u6240\u9700\u7684\u65f6\u95f4\u8d8a\u6765\u8d8a\u77ed\uff0c\u800c\u4f01\u4e1a\u7684\u5e73\u5747\u5bff\u547d\u4ece\u6807\u666e\u7684\u6570\u636e\u6765\u770b\u5374\u4ece\u4e0a\u4e16\u7eaa60\u5e74\u4ee3\u768460\u5e74\u4e0b\u964d\u5230\u4e86\u4eca\u5929\u768415\u5e74\uff0c\u4e00\u5207\u90fd\u8868\u793a\u521b\u65b0\u548c\u7ade\u4e89\u7684\u901f\u5ea6\u548c\u70c8\u5ea6\u5728\u52a0\u5f3a\u3002"),(0,l.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\u6280\u672f\u57fa\u7840\u8bbe\u65bd\u7684\u654f\u6377\u548c\u6709\u6548\u6027\u5728\u5546\u4e1a\u6210\u529f\u7684\u8981\u7d20\u4e0a\u5360\u636e\u7684\u6bd4\u91cd\u8d8a\u6765\u8d8a\u5927\uff0c\u4e91\u8ba1\u7b97\u5728\u8d44\u6e90\u548c\u670d\u52a1\u4ea4\u4ed8\u6a21\u5f0f\u4e0a\u7684\u53d8\u9769\uff0c\u5e26\u6765\u4e86\u6548\u7387\u7684\u9769\u547d\u6027\u63d0\u5347\uff0c\u5e26\u6765\u4e86\u66f4\u654f\u6377\u7684\u57fa\u7840\u8bbe\u65bd\uff08\u521b\u4e1a\u4e0d\u7528\u518d\u4e70\u673a\u5668\u5e76\u627e\u673a\u623f\u6258\u7ba1\uff0c\u4ece\u4ee5\u524d\u7684\u534a\u5e74\u51c6\u5907\u5468\u671f\u5230\u73b0\u5728\u5728\u4e91\u4e0a\u7684\u5c0f\u65f6\u7ea7\u521b\u5efa\u5168\u5957\u670d\u52a1\uff09\uff0c\u800c\u5728\u5e94\u7528\u67b6\u6784\u5c42\u9762\uff0c\u5fae\u670d\u52a1\u67b6\u6784\u6a21\u5f0f\u5e26\u6765\u7684\u7075\u6d3b\u6027\u3001\u97e7\u52b2\uff0c\u5feb\u901f\u7ec4\u5408\u548c\u805a\u5408\u539f\u5b50\u670d\u52a1\u4ece\u800c\u521b\u65b0\uff0c\u7ed9\u4e1a\u52a1\u5feb\u901f\u521b\u65b0\u548c\u8bd5\u9519\u63d0\u4f9b\u4e86\u6761\u4ef6\uff0c\u5df2\u7ecf\u88ab\u8d8a\u6765\u8d8a\u591a\u7684\u5e94\u7528\u5e73\u53f0\u8bc1\u660e\u5176\u6709\u6548\u6027\uff0c\u6280\u672f\u57fa\u7840\u8bbe\u65bd\u7684\u66f4\u654f\u6377\uff0c\u7ed9\u5546\u4e1a\u7684\u654f\u6377\u548c\u5546\u4e1a\u7684\u7ade\u4e89\u4f18\u52bf\u63d0\u4f9b\u4e86\u57fa\u7840\u3002"),(0,l.kt)("p",null,"\u5728\u4eca\u5929\uff0c\u65e0\u8bba\u662f\u4e91\u8ba1\u7b97\uff0c\u5fae\u670d\u52a1\u8fd8\u662f\u56f4\u7ed5Kubernetes\u4e3a\u4e2d\u5fc3\u7684\u4e91\u539f\u751f\uff0c\u90fd\u5728\u5f3a\u8c03\u4ee5\u201c\u670d\u52a1\u201d\u4e3a\u5185\u6838\u7684\u5e94\u7528\u67b6\u6784\u6a21\u5f0f\uff0c\u5982\u679c\u8bf415\u5e74\u524d\u6211\u4eec\u5728\u8ba8\u8bba\u201c\u4e00\u5207\u7686\u662f\u5bf9\u8c61\u201d\u6784\u5efa\u5355\u4f53\u7cfb\u7edf\uff0c\u90a3\u4e48\u4eca\u5929\u6211\u4eec\u5c31\u662f\u5728\u8c08\u8bba\u201c\u4e00\u5207\u7686\u662f\u670d\u52a1\u201d\uff0c10\u5e74\u524d\u6dd8\u5b9d\u670d\u52a1\u5316\u6539\u9020\u987a\u5e94\u4e86\u8fd9\u79cd\u8d8b\u52bf\uff0c8\u5e74\u524d\u5fae\u670d\u52a1\u67b6\u6784\u601d\u60f3\u4e5f\u987a\u5e94\u4e86\u8fd9\u4e2a\u8d8b\u52bf\uff0c\u4eca\u5929\u9762\u5411\u201c\u670d\u52a1\u201d\u7684\u5404\u79cd\u5206\u5e03\u5f0f\u57fa\u7840\u8bbe\u65bd\u6b63\u5728\u53d8\u5f97\u8d8a\u6765\u8d8a\u91cd\u8981\uff0c\u7ad9\u5728\u963f\u91cc\u5df4\u5df410\u5e74\u7684\u670d\u52a1\u5316\u53d1\u5c55\u7ecf\u9a8c\u4e0a\u770b\uff0c\u5728\u5927\u89c4\u6a21\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u6cbb\u7406\u548c\u670d\u52a1\u5171\u4eab\u9886\u57df\u73b0\u6709\u7684\u5f00\u6e90\u89e3\u51b3\u65b9\u6848\u662f\u4e0d\u662f\u90fd\u5df2\u7ecf\u975e\u5e38\u5b8c\u7f8e\u4e86\u5462\uff1f\u6839\u636e\u963f\u91cc\u5df4\u5df4\u670d\u52a1\u5316\u8d70\u8fc7\u7684\u8fd9\u4e9b\u5e74\u7684\u751f\u4ea7\u7ecf\u9a8c\u6765\u770b\uff0c\u6211\u4eec\u89c9\u5f97\u5e76\u6ca1\u6709\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},'\u963f\u91cc\u5df4\u5df4\u5728 "\u5171\u4eab\u670d\u52a1\u4f53\u7cfb" \u5efa\u8bbe\u4e0a\u7684\u7ecf\u9a8c\u53ef\u4ee5\u5728\u5404\u4e2a\u884c\u4e1a\u5927\u89c4\u6a21\u590d\u7528'))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077414293-3d22cd01-6e3c-49d1-82ea-ad2f8d443cf9.png",alt:"Screen Shot 2018-06-27 at 13.29.52.png"})," "),(0,l.kt)("p",null,"\u963f\u91cc\u5df4\u5df4\u4e2d\u53f0\u7406\u5ff5\u548c\u4f53\u7cfb\uff0c\u4e0e\u4e91\u539f\u751f\u5728\u7cbe\u795e\u7684\u201c\u9053\u201d\u4e0a\u5b8c\u5168\u5951\u5408\uff0c\u5373\u201c\u539a\u6280\u672f\u5e73\u53f0\uff0c\u8584\u5e94\u7528\u201d \u652f\u6301\u4e1a\u52a1\u7684\u5feb\u901f\u521b\u65b0\u4e0e\u8bd5\u9519\uff0c\u4ece\u800c\u8d62\u5f97\u5e02\u573a\uff0c\u4e2d\u53f0\u4f53\u7cfb\u5021\u5bfc\u53cc\u5f15\u64ce\u67b6\u6784\uff0c\u7565\u8fc7\u201c\u5927\u6570\u636e\u201d\u4e0d\u8c08\uff0c\u4f46\u770b\u4e1a\u52a1\u4e2d\u53f0\uff0c\u5c31\u662f\u4e00\u4e2a\u5927\u7684\u4ee5\u201c\u670d\u52a1\u201d\u4e3a\u4e2d\u5fc3\u7684\u5171\u4eab\u670d\u52a1\u5e73\u53f0\uff0c\u5728\u7ebf\u670d\u52a1\u6c89\u6dc0\u4e1a\u52a1\u6570\u636e\uff0c\u540c\u6b65\u5230\u5927\u6570\u636e\u5e73\u53f0\u8ba1\u7b97\u548c\u6316\u6398\uff0c\u5927\u6570\u636e\u5e73\u53f0\u5219\u901a\u8fc7\u6570\u636e\u56de\u9988\uff0c\u6307\u5bfc\u4e1a\u52a1\u53ca\u670d\u52a1\u7684\u521b\u65b0\uff0c\u652f\u6210\u53ef\u6c89\u6dc0\u548c\u53ef\u5171\u4eab\u201c\u670d\u52a1\u201d\u4f53\u7cfb\u7684\u670d\u52a1\u6ce8\u518c\u4e0e\u670d\u52a1\u6cbb\u7406\u5e73\u53f0\u662f\u8fd9\u4e2a\u4f53\u7cfb\u7684\u5173\u952e\u8981\u7d20\u4e4b\u4e00\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u201c\u670d\u52a1\u6cbb\u7406\uff0c\u670d\u52a1\u6c89\u6dc0\u3001\u670d\u52a1\u5171\u4eab\u548c\u670d\u52a1\u7684\u53ef\u6301\u7eed\u53d1\u5c55\u201d\u662f\u201c\u5171\u4eab\u670d\u52a1\u4f53\u7cfb\u201d\u7684\u6838\u5fc3\u4ef7\u503c\u4e3b\u5f20"))),(0,l.kt)("p",null,"\u652f\u6301\u521b\u65b0\u4ece\u5c0f\u82d7\u957f\u6210\u53c2\u5929\u5927\u6811\uff0c\u670d\u52a1\u5e73\u53f0\u4e0d\u65ad\u6f14\u8fdb\uff0c\u8fd9\u4e00\u5207\u9700\u8981\u4e00\u4e2a\u5f3a\u5927\u7684\u670d\u52a1\u5e73\u53f0\u548c\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\u7684\u652f\u6491\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077444757-d36f344d-d3ae-4df0-808f-8500b4320e8d.png",alt:"Screen Shot 2018-06-27 at 13.30.25.png"})," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u963f\u91cc\u5df4\u5df4\u5c06\u901a\u8fc7Dubbo + Nacos\u4ee5\u53ca\u4e00\u7cfb\u5217\u5f00\u6e90\u9879\u76ee\u6253\u9020\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u53ca\u6d41\u91cf\u7ba1\u7406\u3001\u670d\u52a1\u5171\u4eab\u5e73\u53f0"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077476468-4ce30dd9-0da7-414a-875d-acc151739c1d.png",alt:"Screen Shot 2018-06-27 at 13.30.58.png"})," "),(0,l.kt)("h2",{id:"nacos-\u4e0e-\u4e3b\u6d41\u5f00\u6e90\u751f\u6001\u7684\u5173\u7cfb"},"Nacos \u4e0e \u4e3b\u6d41\u5f00\u6e90\u751f\u6001\u7684\u5173\u7cfb"),(0,l.kt)("p",null,"Nacos \u4e0d\u4f1a\u662f\u4e2a\u5c01\u95ed\u7684\u4f53\u7cfb\uff0c\u9664\u4e86\u5bf9\u4e8e\u963f\u91cc\u5f00\u6e90\u751f\u6001\u4f53\u7cfb\u5982Dubbo\u7b49\u81ea\u8eab\u7684\u652f\u6301\uff0c\u4e5f\u975e\u5e38\u5f3a\u8c03\u878d\u5165\u5176\u5b83\u7684\u5f00\u6e90\u751f\u6001\uff0c\u8fd9\u91cc\u5c31\u5305\u62ecJava\u7684\u5fae\u670d\u52a1\u751f\u6001\u4f53\u7cfbSpring Cloud\uff0cKubernetes/CNCF\u4e91\u539f\u751f\u751f\u6001\u4f53\u7cfb\uff0c\u6b63\u5982Nacos\u7684\u672a\u6765\u5168\u666f\u56fe\u5c55\u793a\u7684\u90a3\u6837"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077509217-d4fec359-8a41-4c51-a986-c44e06d16950.png",alt:"Screen Shot 2018-06-27 at 13.31.30.png"})," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dubbo + Nacos\uff0c \u4e13\u4e3aDubbo\u800c\u751f\u7684\u6ce8\u518c\u4e2d\u5fc3\u4e0e\u914d\u7f6e\u4e2d\u5fc3")),(0,l.kt)("p",null,"\u5728\u963f\u91cc\u5df4\u5df4\u751f\u4ea7\u73af\u5883\u4e0a\uff0cDubbo\u548cNacos\u5929\u7136\u5c31\u662f\u957f\u5728\u4e00\u8d77\u7684\uff0c\u56e0\u4e3aNacos\u7684\u7f3a\u5931\uff0c\u4f20\u7edf\u7684\u6ce8\u518c\u4e2d\u5fc3\u89e3\u51b3\u65b9\u6848\u8ba9Dubbo\u5728\u670d\u52a1\u6cbb\u7406\u3001\u6d41\u91cf\u6cbb\u7406\u3001\u670d\u52a1\u8fd0\u8425\u548c\u7ba1\u7406\u7b49\u65b9\u9762\u7684\u5a01\u529b\u88ab\u9650\u5236\u548c\u524a\u5f31\u4e86\uff0cNacos\u7684\u5f00\u6e90\u548c\u5f00\u653e\u4f1a\u5728\u91c7\u7528Dubbo\u7684\u7528\u6237\u73af\u5883\u4e2d\u91ca\u653e\u8fd9\u4e9b\u5a01\u529b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077613925-04d767fd-ec95-4fe2-8249-ce8650fbe372.png",alt:"Screen Shot 2018-06-27 at 13.31.57.png"})," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nacos \u4f1a\u5b8c\u5168\u517c\u5bb9Spring Cloud")),(0,l.kt)("p",null,"Nacos\u4f1a\u65e0\u7f1d\u652f\u6301Spring Cloud\uff0c\u4e3aSpring Cloud\u7528\u6237\u5176\u63d0\u4f9b\u66f4\u7b80\u4fbf\u7684\u914d\u7f6e\u4e2d\u5fc3\u548c\u6ce8\u518c\u4e2d\u5fc3\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f7f\u7528Nacos\u4e0d\u7528\u518d\u4ec5\u4ec5\u4e3a\u670d\u52a1\u548c\u914d\u7f6e\u5c31\u9700\u8981\u5728\u751f\u4ea7\u4e0ahold\u4f4f Eureka\uff0cSpring Cloud Config Server\uff0cGit\uff0cRabbitMQ/Kafka \u8d77\u7801\u56db\u4e2a\u5f00\u6e90\u4ea7\u54c1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077646935-7ca8a74d-59e5-4e01-865e-06fd5631e623.png",alt:"Screen Shot 2018-06-27 at 13.33.40.png"})," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nacos \u652f\u6301Kubernetes DNS-based Service Discovery")),(0,l.kt)("p",null,"\u5728\u6f14\u8bb2\u4e2d\u5764\u5b87\u4e5f\u8868\u793a\uff0c\u963f\u91cc\u5df4\u5df4\u8fd9\u4e48\u591a\u5e74\u5728VIPServer DNS-based Service Discovery\u4e0a\u7684\u5b9e\u8df5\u8bc1\u660e\uff0c\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u5e94\u7528\u4f1a\u66f4\u5173\u6ce8\u4e0e\u57fa\u7840\u8bbe\u65bd\u7684\u89e3\u8026\u5408\u3001\u591a\u8bed\u8a00\u4e43\u81f3\u591a\u4e91\u7684\u8bc9\u6c42\uff0c\u670d\u52a1\u53d1\u73b0\u7684\u672a\u6765\u4e00\u5b9a\u662f\u57fa\u4e8e\u6807\u51c6\u7684DNS\u534f\u8bae\u505a\uff0c\u800c\u4e0d\u662f\u50cfEureka\u6216\u8005\u50cfZooKeeper\u8fd9\u6837\u7684\u79c1\u6709API\u6216\u8005\u534f\u8bae\u505a, \u540c\u65f6\u5728\u4e91\u4e0a\uff0c\u5728\u670d\u52a1\u53d1\u73b0\u573a\u666f\u4e2d\uff0c\u6ce8\u518c\u4e2d\u5fc3\u66f4\u5173\u6ce8\u7684\u662f\u53ef\u7528\u6027\u800c\u4e0d\u662f\u6570\u636e\u4e00\u81f4\u6027\uff0c\u6240\u4ee5Nacos\u4f1a\u9996\u63a8DNS-based Servcie Discovery\uff0c\u5e76\u4f18\u5148\u5173\u6ce8\u53ef\u7528\u6027\uff0c\u800c\u8fd9\u4e5f\u6b63\u662fNacos\u53ef\u4ee5\u65e0\u7f1d\u878d\u5408\u8fdbKubernetes\u670d\u52a1\u53d1\u73b0\u4f53\u7cfb\u7684\u539f\u56e0\u6240\u5728"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077691493-4dae9605-6886-4307-bc9d-16ba1cceb7ac.png",alt:"Screen Shot 2018-06-27 at 13.34.18.png"})," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nacos \u4f1a\u586b\u8865Spring Cloud \u4f53\u7cfb\u4e0e Kubernetes \u4f53\u7cfb\u7684\u9e3f\u6c9f\n")),(0,l.kt)("p",null,"\u672a\u6765\u4f1a\u6709\u8d8a\u6765\u8d8a\u591ajava\u751f\u6001\u7684\u7528\u6237\u4f1a\u9009\u62e9 Kubernetes+Spring Cloud \u7ec4\u5408\uff0c\u4f46\u4e0d\u5e78\u7684\u662f\uff0c\u5728\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848\u4e0a\uff0c\u8fd92\u4e2a\u4f53\u7cfb\u90fd\u91c7\u7528\u4e86\u5b8c\u5168\u4e0d\u540c\u7684\u65b9\u6848\uff0c\u8fd9\u7ed9\u540c\u65f6\u91c7\u75282\u4e2a\u4f53\u7cfb\u7684\u7528\u6237\u5728\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u7684\u9700\u6c42\u4e0a\u5e26\u6765\u4e86\u975e\u5e38\u5927\u7684\u4e0d\u5fc5\u8981\u7684\u590d\u6742\u6027\u3002Nacos\u4f1a\u5c1d\u8bd5\u586b\u88652\u8005\u7684\u9e3f\u6c9f\uff0c\u4ee5\u4fbf\u57282\u5957\u4f53\u7cfb\u4e0b\u53ef\u4ee5\u91c7\u7528\u540c\u4e00\u5957\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8fd9\u5c06\u5927\u5927\u7684\u7b80\u5316\u4f7f\u7528\u548c\u7ef4\u62a4\u7684\u6210\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077731231-85a58c0e-ff5c-45a1-9bc8-b989e2b09d55.png",alt:"Screen Shot 2018-06-27 at 13.35.05.png"})," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nacos \u4e0e Service Mesh")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077754298-39bbbdd0-c7af-434a-b189-8fd7ac958b43.png",alt:"Screen Shot 2018-06-27 at 13.35.38.png"})," "),(0,l.kt)("h2",{id:"nacos-\u90e8\u5206\u7279\u6027\u9884\u89c8"},"Nacos \u90e8\u5206\u7279\u6027\u9884\u89c8"),(0,l.kt)("p",null,"\u540c\u65f6\u5728\u4f1a\u4e0a\uff0c\u5764\u5b87\u5bf9Nacos 1.0\u7248\u672c\u7684\u90e8\u5206\u7279\u6027\u7ed9\u5927\u5bb6\u505a\u4e86\u9884\u89c8"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077784470-27f0e268-8d1f-443a-b1a5-3d59e15ab8f4.png",alt:"Screen Shot 2018-06-27 at 13.36.06.png"})," "),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4ea7\u54c1\u90fd\u6709\u81ea\u5df1\u7684\u98ce\u683c\u548c\u6807\u7b7e\uff0c\u5764\u5b87\u5728\u6f14\u8bb2\u4e2d\u8868\u793a\uff0c\u56e2\u961f\u4f1a\u901a\u8fc7\u6301\u7eed\u7684\u8d21\u732e\u548c\u52aa\u529b\uff0c\u5e0c\u671b\u672a\u6765\u7ed9Nacos\u8d34\u4e0a\u56db\u4e2a\u65b9\u9762\u7684\u6807\u7b7e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077851626-25444089-c027-4b89-a606-2e693b4e052d.png",alt:"Screen Shot 2018-06-27 at 13.37.10.png"})," "),(0,l.kt)("p",null,"\u5728\u90e8\u7f72\u5f62\u6001\u4e0a\uff0cNacos\u4f1a\u652f\u6301\u591a\u79cd\u90e8\u7f72\u5f62\u6001\uff0c\u5305\u62ec\u6ce8\u518c\u4e2d\u5fc3\u4e0e\u914d\u7f6e\u4e2d\u5fc3\u7684\u5206\u79bb\u90e8\u7f72\uff0c\u540c\u65f6\u5728\u963f\u91cc\u4e91\u4e0a\u63d0\u4f9bNacos\u7684SaaS\u5316\u90e8\u7f72\u670d\u52a1\uff0c\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u76f4\u63a5\u5728\u963f\u91cc\u4e91\u4e0a\u5f00\u901a\u8d26\u6237\u514d\u8d39\u4f53\u9a8cNacos\u670d\u52a1\uff0c\u5728\u5f00\u6e90\u4e0e\u5546\u4e1a\u5316\u7248\u672c\u5dee\u522b\u4e0a\uff0c\u5546\u4e1a\u5316\u7684ACM\u4ee5\u53caEDAS ANS\u66f4\u5f3a\u8c03\u4e0e\u963f\u91cc\u4e91\u5176\u5b83\u4e91\u670d\u52a1\u4ee5\u53ca\u5176\u5b83Aliware PaaS\u7684\u5546\u4e1a\u4ea7\u54c1\u7684\u96c6\u6210\u4f53\u9a8c\u4ee5\u53ca\u63d0\u4f9b\u5546\u4e1a\u670d\u52a1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077875162-26cfa0e2-3da0-473e-98b9-190aa6d6d97a.png",alt:"Screen Shot 2018-06-27 at 13.36.37.png"})," "),(0,l.kt)("h2",{id:"nacos-\u7684\u4e3b\u8981\u4ea7\u54c1\u91cc\u7a0b\u7891\u53ca\u8ba1\u5212"},"Nacos \u7684\u4e3b\u8981\u4ea7\u54c1\u91cc\u7a0b\u7891\u53ca\u8ba1\u5212"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7f57\u9a6c\u4e0d\u662f\u4e00\u5929\u5efa\u6210\u7684\uff0c\u543e\u5c06\u4e0a\u4e0b\u800c\u6c42\u7d22 ")),(0,l.kt)("p",null,"\u56e0\u4e3aNacos\u662f\u8131\u80ce\u4e8e\u963f\u91cc\u5df4\u5df4\u7684\u751f\u4ea7\u4ee3\u7801\uff0c\u6574\u4f53\u4f53\u7cfb\u975e\u5e38\u5e9e\u6742\uff0c\u5728\u4ee3\u7801\u68b3\u7406\u3001\u91cd\u6784\u548c\u5265\u79bb\u4e0e\u5185\u90e8\u7684\u8026\u5408\u4e0a\u662f\u4e00\u4e2a\u6e10\u8fdb\u7684\u8fc7\u7a0b\uff0c\u6240\u4ee5@\u5764\u5b87\u7279\u522b\u63d0\u9192\u793e\u533a\u5728Nacos 0.8\u8fbe\u5230\u751f\u4ea7\u53ef\u7528\u72b6\u6001\u524d\uff0c\u4e0d\u5efa\u8bae\u7528\u4e8e\u751f\u4ea7\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u5728\u5f00\u53d1\u548c\u6d4b\u8bd5\u73af\u5883\u5c1d\u8bd5\u4f7f\u7528\uff0c\u57280.8\u7248\u672c\u5f00\u59cb\uff0c\u5927\u5bb6\u53ef\u4ee5\u653e\u5fc3\u7684\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0cNacos\u6574\u4f53\u7814\u53d1\u8ba1\u5212\u662f\u5728\u672a\u67656-8\u4e2a\u6708\u5c06\u8fbe\u5230\u751f\u4ea7\u53ef\u7528\u7684\u72b6\u6001\uff0c\u672a\u6765\u4f1a\u5f88\u5feb\u542f\u52a8\u5c06Nacos\u8d21\u732e\u7ed9\u5f00\u6e90\u57fa\u91d1\u4f1a\u8fdb\u4e00\u6b65\u793e\u533a\u5316\u53d1\u5c55\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077912860-52c7fea4-5285-45a0-a3b8-73ba010c53da.png",alt:"Screen Shot 2018-06-27 at 13.38.13.png"})," "),(0,l.kt)("h2",{id:"nacos-\u4e0e\u76f8\u5173\u5f00\u6e90\u4ea7\u54c1\u7684\u5bf9\u6bd4"},"Nacos \u4e0e\u76f8\u5173\u5f00\u6e90\u4ea7\u54c1\u7684\u5bf9\u6bd4"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u541b\u5b50\u548c\u800c\u4e0d\u540c")),(0,l.kt)("p",null,"\u5982\u4e0a\u9762\u5bf9\u6574\u4f53\u4e1a\u52a1\u53ca\u6280\u672f\u5f62\u5f0f\u7684\u5224\u65ad\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 Nacos \u4e0e\u540c\u7c7b\u7ade\u54c1\u7684\u4e3b\u8981\u4e0d\u540c\u4e3b\u8981\u5728\u4e8e\u7406\u5ff5\uff0c@\u5764\u5b87\u4ecb\u7ecd\u8bf4\uff0c\u4e25\u683c\u6765\u8bf4\u8fd9\u4e9b\u5e02\u9762\u4e0a\u7684\u4ea7\u54c1\u5e76\u4e0d\u4e0eNacos\u5b8c\u5168\u5bf9\u6807\uff0c\u53ea\u662f\u4e0eNacos\u91cc\u9762\u7684\u670d\u52a1\u53d1\u73b0\u90e8\u5206\u5bf9\u6807\uff0cNacos\u7684\u672a\u6765\u66f4\u770b\u91cd\u5728\u8fd9\u4e9b\u4ea7\u54c1\u7684\u57fa\u7840\u4e0a\u6784\u5efa\u670d\u52a1\u5e73\u53f0\u7684\u80fd\u529b\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5728\u57fa\u7840\u7684\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077938157-00e6b34f-9a16-498c-9b89-cc48f6d6bb73.png",alt:"Screen Shot 2018-06-27 at 13.38.41.png"})," "),(0,l.kt)("h2",{id:"\u793e\u533a\u5316\u53d1\u5c55\u6b22\u8fce\u52a0\u5165\u5e76\u8d21\u732e\u793e\u533a"},"\u793e\u533a\u5316\u53d1\u5c55\uff0c\u6b22\u8fce\u52a0\u5165\u5e76\u8d21\u732e\u793e\u533a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"DISS is cheap, show me your hand\n\u6bd4\u5410\u69fd\u66f4\u91cd\u8981\u7684\u662f\u642d\u628a\u624b\uff0c\u53c2\u4e0e\u793e\u533a\u4e00\u8d77\u53d1\u5c55Nacos")),(0,l.kt)("p",null,"\u4e0e\u963f\u91cc\u5df4\u5df4\u65e9\u671f\u7684\u5f00\u6e90\u4e0d\u540c\uff0c\u963f\u91cc\u5df4\u5df4\u65b0\u4e00\u8f6e\u7684\u5f00\u6e90\u5305\u62ecRocketMQ\uff0cPouch Container\uff0cDubbo, Nacos\u7b49\u5f00\u6e90\u4ea7\u54c1\u66f4\u5f3a\u8c03\u793e\u533a\u5316\u7684\u53d1\u5c55\u4e0e\u793e\u533a\u7684\u591a\u6837\u6027\uff0c\u9f13\u52b1\u66f4\u591a\u7684\u516c\u53f8\u548c\u66f4\u591a\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u5230\u5f00\u6e90\u9879\u76ee\u4e2d\u6765\uff0c\u4f9d\u6258\u4e8e\u793e\u533a\u5c06\u4ea7\u54c1\u505a\u5f97\u66f4\u597d\uff0c\u540c\u65f6\u4e00\u5f00\u59cb\u5c31\u4f1a\u5173\u6ce8\u56fd\u9645\u5316\uff0c\u4e0e\u56fd\u5916\u540c\u7c7b\u4ea7\u54c1\u7684\u76f4\u9762\u7ade\u4e89\u3002"),(0,l.kt)("p",null,"Nacos\u521d\u6b65\u8ba1\u5212\uff0c\u5728\u7b2c\u4e00\u5e74\u5c31\u5438\u6536\u81f3\u5c11\u8d85\u8fc75\u540d\u6765\u81ea\u5176\u5b83\u516c\u53f8\u7684PMC,\u81f3\u5c1110\u540d\u7684\u5916\u90e8Committer, \u800c\u4e14Nacos\u5904\u5728\u9879\u76ee\u5f00\u6e90\u7684\u521d\u671f\uff0c\u6709\u5927\u628a\u7684\u7a7a\u95f4\u8ba9\u6709\u60f3\u6cd5\u3001\u6709\u70ed\u60c5\u3001\u6709\u80fd\u529b\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u8fdb\u6765\uff0cNacos\u672c\u8eab\u5728\u5f88\u591a\u65b9\u9762\u90fd\u6025\u9700\u8981\u793e\u533a\u7684\u5e2e\u52a9\uff0c\u8fd9\u91cc\u9762\u5c31\u6025\u9700\u5305\u62ec\u524d\u7aef\u53caUI\u5efa\u8bbe\uff0cSpring Cloud\u3001Kubernetes\u3001Service Mesh\u4f53\u7cfb\u878d\u5408\u4e0e\u96c6\u6210\uff0c\u591a\u8bed\u8a00\u5ba2\u6237\u7aef\u7b49\u5404\u65b9\u9762\u7684\u6280\u672f\u9886\u5bfc\u8005\u7684\u53c2\u4e0e\uff0c\u5982\u679c\u60a8\u5bf9Nacos\u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u611f\u5174\u8da3\uff0c\u6b22\u8fce\u52a0\u5165Nacos\u793e\u533a\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u626b\u201c\u8d85\u54e5\u201d\u7684\u5fae\u4fe1\u4e8c\u7ef4\u7801\uff0c\u8ba9\u201c\u8d85\u54e5\u201d \u5e2e\u4f60\u52a0\u5165 \u201cNacos\u793e\u533a\u4ea4\u6d41\u7fa4\u201d "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530077965587-8f4e3100-bdd4-469a-9ea0-7af7061bc9ef.png",alt:"Screen Shot 2018-06-27 at 13.39.09.png"})," "),(0,l.kt)("h2",{id:"\u611f\u8c22\u6240\u6709\u672a\u6765\u7ed9\u6211\u4eec\u5e2e\u52a9\u7684\u670b\u53cb"},"\u611f\u8c22\u6240\u6709\u672a\u6765\u7ed9\u6211\u4eec\u5e2e\u52a9\u7684\u670b\u53cb"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1530078016801-65ce72c1-c135-42b6-8076-a046f7829ba7.png",alt:"Screen Shot 2018-06-27 at 13.39.40.png"})," "),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://yq.aliyun.com/articles/601745"},"\u963f\u91cc\u5df4\u5df4\u4e3a\u4ec0\u4e48\u4e0d\u7528 ZooKeeper \u505a\u670d\u52a1\u53d1\u73b0\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://yq.aliyun.com/articles/226238?spm=5176.163362.847322.3.5a8925397in790"},"\u73b0\u4ee3\u5e94\u7528\u67b6\u6784\u4e2d\u7684\u914d\u7f6e\u7ba1\u7406\u9762\u4e34\u7684\u6311\u6218\u548c\u5e94\u5bf9\u4e4b\u9053")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://jm.taobao.org/2016/06/02/zhangwensong-and-load-balance/"},"\u7ae0\u6587\u5d69\u535a\u58eb\u548c\u4ed6\u80cc\u540e\u7684\u8d1f\u8f7d\u5747\u8861\u5e1d\u56fd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/heyc861221/article/details/80126013"},"VIPServer\uff1a\u963f\u91cc\u667a\u80fd\u5730\u5740\u6620\u5c04\u53ca\u73af\u5883\u7ba1\u7406\u7cfb\u7edf\u8be6\u89e3"))))}k.isMDXComponent=!0}}]);