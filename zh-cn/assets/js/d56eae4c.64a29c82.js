"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Nacos \u56db\u5468\u5e74\uff0c2.1.1 \u53ca 1.4.4 \u7248\u672c\u540c\u65f6\u53d1\u5e03",keywords:["2.1.1","1.4.4"],description:"\u4e3a\u4e86\u5e86\u795d Nacos \u5f00\u6e90\u56db\u5468\u5e74\uff0c\u6211\u4eec\u540c\u65f6\u63a8\u51fa 2.1.1 \u548c 1.4.4 \u4e24\u4e2a\u65b0\u7248\u672c\uff0c\u56de\u9988\u5c0f\u4f19\u4f34\u4eec\u7684\u4fe1\u4efb\uff01"},i="Nacos \u56db\u5468\u5e74\uff0c2.1.1 \u53ca 1.4.4 \u7248\u672c\u540c\u65f6\u53d1\u5e03",c={permalink:"/zh-cn/blog/2.1.1-release",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2.1.1-release.md",title:"Nacos \u56db\u5468\u5e74\uff0c2.1.1 \u53ca 1.4.4 \u7248\u672c\u540c\u65f6\u53d1\u5e03",description:"\u4e3a\u4e86\u5e86\u795d Nacos \u5f00\u6e90\u56db\u5468\u5e74\uff0c\u6211\u4eec\u540c\u65f6\u63a8\u51fa 2.1.1 \u548c 1.4.4 \u4e24\u4e2a\u65b0\u7248\u672c\uff0c\u56de\u9988\u5c0f\u4f19\u4f34\u4eec\u7684\u4fe1\u4efb\uff01",date:"2023-10-10T11:24:40.000Z",formattedDate:"2023\u5e7410\u670810\u65e5",tags:[],readingTime:10.76,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos \u56db\u5468\u5e74\uff0c2.1.1 \u53ca 1.4.4 \u7248\u672c\u540c\u65f6\u53d1\u5e03",keywords:["2.1.1","1.4.4"],description:"\u4e3a\u4e86\u5e86\u795d Nacos \u5f00\u6e90\u56db\u5468\u5e74\uff0c\u6211\u4eec\u540c\u65f6\u63a8\u51fa 2.1.1 \u548c 1.4.4 \u4e24\u4e2a\u65b0\u7248\u672c\uff0c\u56de\u9988\u5c0f\u4f19\u4f34\u4eec\u7684\u4fe1\u4efb\uff01"},prevItem:{title:"Nacos 2.1.0\u7248\u672c\u53d1\u5e03\uff0c\u652f\u6301\u9274\u6743\u53ca\u52a0\u89e3\u5bc6\u63d2\u4ef6",permalink:"/zh-cn/blog/2.1.0-release"},nextItem:{title:"Nacos 2.2.0 \u7248\u672c\u53d1\u5e03\uff0c\u65b0\u589e\u591a\u79cd\u63d2\u4ef6\u652f\u6301",permalink:"/zh-cn/blog/2.2.0-release"}},l={authorsImageUrls:[]},s=[{value:"\u65b0\u7248\u672c\u53d1\u5e03",id:"\u65b0\u7248\u672c\u53d1\u5e03",level:2},{value:"2.1.1 \u7248\u672c\u7279\u6027",id:"211-\u7248\u672c\u7279\u6027",level:3},{value:"\u6279\u91cf\u6ce8\u518c\u670d\u52a1 -- batchRegister",id:"\u6279\u91cf\u6ce8\u518c\u670d\u52a1----batchregister",level:4},{value:"\u670d\u52a1\u8ffd\u8e2a\u4e8b\u4ef6 -- trace event",id:"\u670d\u52a1\u8ffd\u8e2a\u4e8b\u4ef6----trace-event",level:4},{value:"1.4.4 \u7248\u672c\u7279\u6027",id:"144-\u7248\u672c\u7279\u6027",level:3},{value:"\u793e\u533a",id:"\u793e\u533a",level:2},{value:"\u8d21\u732e\u8005\u6fc0\u52b1\u6d3b\u52a8",id:"\u8d21\u732e\u8005\u6fc0\u52b1\u6d3b\u52a8",level:3},{value:"\u4e2d\u95f4\u4ef6\u5f00\u53d1\u8005 MeetUp",id:"\u4e2d\u95f4\u4ef6\u5f00\u53d1\u8005-meetup",level:3},{value:"About Nacos",id:"about-nacos",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2022\u5e747\u6708\uff0c \u4e3a\u4e86\u5e86\u795d Nacos \u5f00\u6e90\u56db\u5468\u5e74\uff0c\u6211\u4eec\u540c\u65f6\u63a8\u51fa 2.1.1 \u548c 1.4.4 \u4e24\u4e2a\u65b0\u7248\u672c\uff0c\u56de\u9988\u5c0f\u4f19\u4f34\u4eec\u7684\u4fe1\u4efb\uff01"),(0,r.kt)("p",null,"\u8fd9\u56db\u5e74\uff0c\u6211\u4eec\u5b8c\u6210\u4e86 1.0\uff0c2.0 \u4e24\u4e2a\u5927\u7248\u672c\u6f14\u8fdb\uff0c\u53d1\u5e03\u4e8646\u4e2a\u7248\u672c\uff0c\u5feb\u901f\u8fed\u4ee3\uff0c\u8fdb\u5165\u4e2d\u56fd\u5f00\u6e90\u6d3b\u8dc3\u9879\u76eeTOP10\uff01"),(0,r.kt)("p",null,"\u8fd9\u56db\u5e74\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u4eceDubbo/Spring\u5230\u670d\u52a1\u7f51\u683c\u751f\u6001\u7684\u5b8c\u6574\u652f\u6301\uff0c\u751f\u6001\u7e41\u8363\uff0c\u88ab4600+\u4e0a\u4e0b\u6e38\u9879\u76ee\u4f9d\u8d56\u5f15\u7528\uff01"),(0,r.kt)("p",null,"\u8fd9\u56db\u5e74\uff0c\u6211\u4eec\u5e02\u573a\u5360\u6709\u7387\u63d0\u5347\u5230\u4e86 55% \u4ee5\u4e0a\uff0c\u5b98\u7f51\u7d2f\u8ba1\u8bbf\u95ee\u7a81\u7834100\u4e07\uff0c\u300aNacos \u67b6\u6784\u4e0e\u539f\u7406\u300b \u7a81\u78346w\u9605\u8bfb\uff01"),(0,r.kt)("p",null,"\u8fd9\u56db\u5e74\uff0c\u6211\u4eec\u5438\u5f15\u6210\u5343\u4e0a\u4e07\u5bb6\u6570\u5b57\u5316\u5347\u7ea7\u4f01\u4e1a\uff0c\u6253\u9020\u864e\u7259\u3001\u7231\u5947\u827a\u3001\u597d\u672a\u6765\u3001\u638c\u95e8\u3001\u5c0f\u7c73\u3001\u5c0f\u9e4f\u3001\u851a\u6765\u7b49\u6807\u6746\uff01"),(0,r.kt)("p",null,"\u8fd9\u56db\u5e74\uff0c\u6211\u4eec\u5438\u5f15\u4e86246+ contributor\uff0c30+ committer\uff0c8+ PMC\uff0c\u5206\u5e03\u5404\u5927\u5934\u90e8\u5382\u5546\uff0c\u53d1\u6325\u8d8a\u6765\u8d8a\u5927\u4f5c\u7528\uff01"),(0,r.kt)("p",null,"\u672a\u6765\uff0c\u6211\u4eec\u5c06\u5168\u9762\u542f\u52a8 Nacos 3.0 \u9879\u76ee\uff0c\u7edf\u4e00\u63a7\u5236\u9762\uff0c\u52a0\u5927\u751f\u6001\u96c6\u6210\uff0c\u5168\u9762\u63d0\u5347\u4f53\u9a8c\uff0c\u5c3d\u60c5\u671f\u5f85\uff5e"),(0,r.kt)("h2",{id:"\u65b0\u7248\u672c\u53d1\u5e03"},"\u65b0\u7248\u672c\u53d1\u5e03"),(0,r.kt)("h3",{id:"211-\u7248\u672c\u7279\u6027"},"2.1.1 \u7248\u672c\u7279\u6027"),(0,r.kt)("p",null,"\u8be5\u7248\u672c\u6838\u5fc3\u89e3\u51b3 Nacos 2.0 \u5e7f\u6cdb\u4f7f\u7528\u66b4\u9732\u51fa\u7684\u4e00\u4e9b\u7a33\u5b9a\u6027\u95ee\u9898\uff08\u5305\u62ec\u9ed8\u8ba4\u5b9e\u73b0\u9274\u6743\u63d2\u4ef6\u3001Grpc\u8bf7\u6c42\u548cdistro\u4e00\u81f4\u6027\u534f\u8bae\u7684\u6027\u80fd\u7b49\uff09\uff0c\u53e6\u5916Beta\u6d4b\u8bd5\u201c\u6279\u91cf\u6ce8\u518c\u670d\u52a1\u201d\u548c\u201c\u670d\u52a1\u8ffd\u8e2a\u4e8b\u4ef6\u201d\u4e24\u4e2a\u65b0\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u53d8\u66f4\u5185\u5bb9\u53ef\u67e5\u770bchangeLog\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## Features\n[#5863] (BETA) Support batch register service.\n[#7424] Add version data compare in the history list.\n[#8305] (REMOVE) Remove leave nacos server nodes API temporarily.\n[#8481] (BETA) Add TRACE Event to server.\n[#8755] Add default fuzzy search feature.\n\n## Enhancement\n[#8099] Fast failure for distro sync task and verify task if cluster disconnect.\n[#8150] Add the namespace description item to the namespace list page.\n[#8345] Add validation for service cluster name.\n[#8515] Optimize some code in InetUtils.\n[#8561] Enhance default authentication plugin performance.\n[#8574] Enhance filter service info for push callback.\n[#8592] Ehhance GrpcUtil memory and cpu cost.\n[#8622] Add NacosEnvironment and add some unit tests.\n\n## Refactor&dependency\n[#8369] Remove mina dependency.\n[#8383] Upgrade jackson version to 2.12.6.1.\n[#8421] Remove commonOkHttp dependency.\n[#8472] Remove useless dependency.\n[#8479] Refactor singleton construction as private.\n[#8540] Upgrade spring-boot version to 2.6.8.\n[#8594] Makes distro data load timeout can be configured.\n[#8596] Explicitly specify spring-boot-maven-plugin version same as spring-boot.\n[#8623] Upgrade mysql-connector-java to 8.0.28.\n\n## BugFix\n[#7039] Fix config encryptedData md5 calculation problem.\n[#8153] Fix NPE for AutoExpireCache.\n[#8243][#8653] Fix health check plugin problem.\n[#8275] Fix can't register service when use skywalking.\n[#8295] Fix can't login when use embedded storage in cluster model.\n[#8318] Fix findAllConfigInfoForDumpAll sql args error.\n[#8372] Fix client can't use https connection.\n[#8424] Fix cycle dependency problem.\n[#8428] Fix naming subscribe bug when multiple NamingService.\n[#8505] Fix log configuration conflict in spring-boot project.\n[#8514][#8539] Fix prometheus api error in client.\n[#8516] Fix the persistent instance becomes a temporary instance.\n[#8602] Fix display error after delete current namespace.\n[#8632] Fix subscribe disabled instance problem in the first time.\n[#8635] Fix NPE when call the shutdown method.\n[#8720] Fix the problem that config aspect invalid problem.\n[#8742] Fix change instance metadata, the revision of service not change.\n[#8784] Fix some bugs for Console UI.\n[#8833] Fix import config failed when open auth.\n[#8880] Fix constantly loading config when not read permission.\n")),(0,r.kt)("h4",{id:"\u6279\u91cf\u6ce8\u518c\u670d\u52a1----batchregister"},"\u6279\u91cf\u6ce8\u518c\u670d\u52a1 -- batchRegister"),(0,r.kt)("p",null,"\u6279\u91cf\u6ce8\u518c\u670d\u52a1\u7684\u9700\u6c42\u4e3b\u8981\u6765\u81ea\u4e8eNacos\u793e\u533a\u7684\u53e6\u4e00\u4e2a\u7ec4\u4ef6 -- Nacos-Sync\uff0cNacos-Sync\u4f5c\u4e3a\u4e00\u4e2a\u652f\u6301\u591a\u6ce8\u518c\u4e2d\u5fc3\u8fc1\u79fb\u7684\u7b2c\u4e09\u65b9\u5de5\u5177\uff0c\u4e00\u76f4\u5e2e\u52a9\u793e\u533a\u7528\u6237\u5e73\u6ed1\u7684\u4eceEureka\uff0cConsul\u7b49\u5176\u4ed6\u6ce8\u518c\u4e2d\u5fc3\u8fc1\u79fb\u5230Nacos\u4e2d\u3002"),(0,r.kt)("p",null,"\u5728Nacos2.0\u53d1\u5e03\u540e\uff0cNacos-Sync\u7b2c\u4e00\u65f6\u95f4\u8fdb\u884c\u4e86\u66f4\u65b0\u3002\u4f46\u5728\u66f4\u65b0\u540e\uff0c\u7531\u4e8eNacos2.0\u7684\u6ce8\u518c\u673a\u5236\u53d1\u751f\u4e86\u4e00\u5b9a\u7684\u53d8\u5316\uff0c\u540c\u4e00\u4e2a\u5ba2\u6237\u7aef\u9488\u5bf9\u540c\u4e00\u4e2a\u670d\u52a1\u53ea\u80fd\u6ce8\u518c\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u8fd9\u5bfc\u81f4\u4e86Nacos-Sync\u8fd9\u79cd\u4ee3\u7406\u670d\u52a1\u6a21\u5f0f\u65e0\u6cd5\u4f7f\u7528\u540c\u4e00\u4e2a\u5ba2\u6237\u7aef\u8fdb\u884c\u540c\u4e00\u4e2a\u670d\u52a1\u7684\u591a\u4e2a\u5b9e\u4f8b\u7684\u4ee3\u7406\u6ce8\u518c\uff0c\u6613\u7528\u6027\u5927\u5927\u964d\u4f4e\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\u793e\u533a\u53d1\u73b0\uff0c\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u5e94\u7528\uff0c\u5982\u7f51\u5173\uff0cproxy\uff0cdubbo3\u591a\u534f\u8bae\u652f\u6301\u7b49\uff0c\u4e5f\u9700\u8981\u4e00\u4e9b\u4ee3\u7406\u6ce8\u518c\u7684\u80fd\u529b\uff0c\u56e0\u6b64\u793e\u533a\u5728\u8fdb\u884c\u6570\u6b21\u65b9\u6848\u8ba8\u8bba\u540e\uff0c\u6700\u7ec8\u7531\u793e\u533a\u540c\u5b66",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chenhao26-nineteen"},"chenhao26-nineteen")," \u5b8c\u6210\u6279\u91cf\u6ce8\u518c\u670d\u52a1\u7684\u529f\u80fd\u5f00\u53d1\uff0c\u5e76\u57282.1.1\u7248\u672c\u8fdb\u884cbeta\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"\u6279\u91cf\u6ce8\u518c\u670d\u52a1\u529f\u80fd\u4e3b\u8981\u7528\u4e8e\u4ee3\u7406\u6ce8\u518c\u7684\u573a\u666f\uff0c\u5141\u8bb8\u5e94\u7528\u4f7f\u7528\u540c\u4e00\u4e2a\u5ba2\u6237\u7aef\u5bf9\u540c\u4e00\u4e2a\u670d\u52a1\u8fdb\u884c\u591a\u4e2a\u5b9e\u4f8b\u7684\u6ce8\u518c\u8bf7\u6c42\u3002\u5927\u591a\u6570\u4f20\u7edf\u4f7f\u7528\u573a\u666f\u4e0b\uff0c\u7528\u6237\u4ecd\u7136\u4f7f\u7528registerService\u529f\u80fd\u5373\u53ef\u3002"),(0,r.kt)("h4",{id:"\u670d\u52a1\u8ffd\u8e2a\u4e8b\u4ef6----trace-event"},"\u670d\u52a1\u8ffd\u8e2a\u4e8b\u4ef6 -- trace event"),(0,r.kt)("p",null,"\u81ea\u4ece\u963f\u91cc\u4e91\u7684",(0,r.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/aliware/mse?spm=nacos-website.topbar.0.0.0"},"MSE")," Nacos\u53d1\u5e03\u4e86\u5173\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/982835?utm_content=m_1000348405"},"\u63a8\u9001\u8f68\u8ff9"),"\u76f8\u5173\u7684\u6587\u7ae0\u540e\uff0c\u793e\u533a\u53cd\u54cd\u70ed\u70c8\uff0c\u90fd\u5e0c\u671b\u80fd\u5728\u5f00\u6e90\u6dfb\u52a0\u5bf9\u5e94\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/aliware/mse?spm=nacos-website.topbar.0.0.0"},"MSE"),"\u56e2\u961f\u5f97\u77e5\u793e\u533a\u7684\u5f3a\u70c8\u9700\u6c42\u540e\uff0c\u7531",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scienceZ"},"scienceZ"),"\u540c\u5b66\u5b8c\u6210\u5bf9\u4e8b\u4ef6\u62bd\u8c61\u5265\u79bb\uff0c\u5e76\u8d21\u732e\u5230\u5f00\u6e90\u793e\u533a\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u8be5\u529f\u80fd\u540c\u6837\u5c5e\u4e8ebeta\u6d4b\u8bd5\uff0c\u6682\u65f6\u53ea\u80fd\u901a\u8fc7\u5728\u6e90\u7801\u4e2d\u8ba2\u9605\u5bf9\u5e94\u4e8b\u4ef6\u7684\u65b9\u5f0f\u8fdb\u884c\u8ffd\u8e2a\uff0c\u540e\u7eed\u7248\u672c\u540c\u6837\u4f1a\u5c06\u8be5\u529f\u80fd\u4f5c\u4e3aSPI\u63d2\u4ef6\u7684\u5f62\u5f0f\u5f00\u653e\uff0c\u65b9\u4fbf\u793e\u533a\u540c\u5b66\u6309\u7167\u81ea\u5df1\u7684\u9700\u6c42\u5b9a\u5236\u63a8\u9001\u8f68\u8ff9\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a \u4e0a\u8ff0\u4e24\u4e2a\u529f\u80fd\u5747\u5c5e\u4e8eBeta\u6d4b\u8bd5\u9636\u6bb5\uff0c\u5176API\uff0c\u529f\u80fd\u53ef\u80fd\u4e0e\u540e\u7eed\u6b63\u5f0f\u53d1\u5e03\u65f6\u7684\u6709\u4e00\u5b9a\u533a\u522b\u3002")),(0,r.kt)("h3",{id:"144-\u7248\u672c\u7279\u6027"},"1.4.4 \u7248\u672c\u7279\u6027"),(0,r.kt)("p",null,"Nacos 1.X\u7248\u672c\u5df2\u7ecf\u4e0d\u518d\u8fdb\u884c\u529f\u80fd\u6f14\u8fdb\uff0c\u53ea\u8fdb\u884c\u4e00\u4e9bbugfix\u548c\u4f18\u5316\uff0c\u56e0\u6b64\u672c\u6b21\u7248\u672c\u53d1\u5e03\u4e3b\u8981\u4e5f\u662f\u8fdb\u884c\u4e00\u4e9bbug\u7684\u4fee\u590d\u548c\u4f18\u5316\uff0c\u5e76\u4e14\u5c06\u4e00\u4e9b\u53ef\u80fd\u6709\u95ee\u9898\u7684\u4f9d\u8d56\u8fdb\u884c\u5347\u7ea7\uff1b\u5efa\u8bae\u5927\u5bb6\u5c3d\u5feb\u5347\u7ea7\u5230 Nacos 2.0\uff0c\u4ee5\u4fbf\u4eab\u53d7\u5feb\u901f\u8fed\u4ee3\u7ea2\u5229\uff01"),(0,r.kt)("p",null,"\u5177\u4f53\u53d8\u66f4\u5185\u5bb9\u53ef\u67e5\u770bchangeLog\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Enhancement\n[#5344] Reset raft cluster ops for no leader by JRaft Api.\n[#5884][#7810] Add the permission for history config.\n[#7284] Enhance print exception details.\n[#7799] Enhance console exception handler.\n[#7802] Enhance thread pool manager.\n[#7801] Enhance connection release timeout between server.\n[#7803] Apply some Jraft Enhancement from 2.X.\n[#7925] Client stops the UpdateTask after a service is unsubscribed.\n[#8072] Reduce memory cost in DistroProtocol initialization to avoid OutOfMemoryError.\n[#8144] Add volatile modifier to NamingProxy.serversFromEndpoint.\n[#8203] Fix the concurrency problem about the iterator of ServerListManager.\n[#8434] Enhance DistroConsistencyServiceImpl listen/unListen.\n\n# BugFix\n[#6198][#7809] Fix StringUtils.join throw NullPointerException.\n[#6273] Fix loop leave server.\n[#7141][#7804] Fix the problem of the operator column being empty while configuring adding and deleting records.\n[#7750][#7869] Fix bug in permissions management module, such as redundant 'nacos,' when change password.\n[#7757][#7761] Fix jraft request parse failed problem.\n[#7807] Fix yaml parse concurrent problem.\n[#7836] Fix nacos-client can't parse `localhost` problem.\n[#8012] Fix NPE in DistroConsistencyServiceImpl.Notifier.\n[#8283] Fix thread safety problem when concurrently registering with the same cluster.\n[#8428] Fix naming subscribe bug when multiple NamingService .\n[#8539] Fix prometheus api error.\n\n# Dependency\n[#7813] Upgrade log4j2 to 2.17.1.\n[#7813] Upgrade logback to 1.2.9.\n[#7813] Upgrade Jraft to 1.3.9.\n[#8421] Remove commonOkHttp dependency.\n[#8169] Upgrade spring-boot version to 2.6.6.\n")),(0,r.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,r.kt)("p",null,"\u968f\u7740\u793e\u533a\u4e0d\u65ad\u58ee\u5927\u548c\u53d1\u5c55\uff0c\u57282.1.1\u7248\u672c\u4e2d\u793e\u533a\u5c0f\u4f19\u4f34\u8d21\u732e\u4e8690%+\u4ee3\u7801\uff0c\u8bf4\u660eNacos\u793e\u533a\u534f\u4f5c\u8fdb\u5165\u4e00\u4e2a\u6210\u719f\u9636\u6bb5\uff0c\u76f8\u4fe1\u5f88\u5feb\u4f1a\u6709\u4e00\u5927\u6279\u7684\u65b0\u5174\u8d21\u732e\u8005\u8981\u52a0\u5165Nacos Committer\u7684\u884c\u5217\uff0c\u52a0\u901f\u63a8\u52a8\u793e\u533a\u6f14\u8fdb\u3002\u540c\u65f6\u6211\u4eec\u4e5f\u4e3a\u793e\u533a\u5c0f\u4f19\u4f34\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u793c\u7269\uff0c\u671f\u671b\u66f4\u591a\u5c0f\u4f19\u4f34\u4e00\u8d77\u53c2\u4e0e\u8d21\u732e\uff5e"),(0,r.kt)("h3",{id:"\u8d21\u732e\u8005\u6fc0\u52b1\u6d3b\u52a8"},"\u8d21\u732e\u8005\u6fc0\u52b1\u6d3b\u52a8"),(0,r.kt)("p",null,'\u57282.1.0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u8bb8\u591a\u5c0f\u4f19\u4f34\u6536\u5230\u4e86Nacos\u793e\u533a\u7684\u5c0f\u793c\u54c1\uff0c\u968f\u77402.1.1\u7248\u672c\u53d1\u5e03\uff0c\u53c8\u4e00\u671f\u7684\u793c\u54c1\u84c4\u52bf\u5f85"\u53d1"\uff0c\u672c\u6b21\u793c\u54c1\u4e3b\u8981\u9488\u5bf9\u57284\u6708\u521d\u81f36\u6708\u5e95\u671f\u95f4\uff0c\u4e3aNacos\u53ca\u5176\u5468\u8fb9\u751f\u6001\u4ea7\u54c1\u6709\u6240\u8d21\u732e\u7684\u65b0\u8d21\u732e\u8005\u4ee5\u53ca\u4fdd\u6301\u6301\u7eed\u8d21\u732e\u7684\u4f18\u79c0\u8d21\u732e\u8005\u4eec\u3002\u6b22\u8fce\u66f4\u591a\u7684\u65b0\u9c9c\u8d21\u732e\u8005\u52a0\u5165Nacos\u793e\u533a\uff0c\u540c\u65f6\u4e5f\u6b22\u8fce\u83b7\u5f97\u4e86\u793c\u54c1\u7684\u8d21\u732e\u8005\u4eec\u53ef\u4ee5\u7ee7\u7eed\u8d21\u732e\u793e\u533a\uff0c\u6fc0\u52b1\u6d3b\u52a8\u4f1a\u4e00\u76f4\u4fdd\u6301\uff5e\u671f\u5f85\u6536\u96c6\u9f50\u6240\u6709\u7684Nacos\u793e\u533a\u793c\u54c1\u54e6\uff5e'),(0,r.kt)("p",null,"\u672c\u6b21\u7684\u793c\u54c1\u5c06\u4f1a\u662fNacos\u7684\u957f\u67c4\u96e8\u4f1e\uff0c\u8bf7\u6ca1\u7559\u4e0b\u8054\u7cfb\u65b9\u5f0f\u7684\u8d21\u732e\u8005\u4eec\u5c3d\u5feb\u5728github\u4e0a\u6dfb\u52a0\uff0c\u4ee5\u514d\u9519\u8fc7\u6d3b\u52a8\uff5e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://cdn.nlark.com/yuque/0/2022/jpeg/1577777/1660125287464-ef4355fa-e7bb-46b2-a85b-c4ca5c909ceb.jpeg#clientId=uf10cb19a-105c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=1290&id=u9a9fa905&margin=%5Bobject%20Object%5D&name=IMG_20220809_164412.jpg&originHeight=2580&originWidth=3071&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ude784ee7-53c4-4366-a506-2fc189a1c93&title=&width=1535.5",alt:"umbrella.jpg"}))))),(0,r.kt)("h3",{id:"\u4e2d\u95f4\u4ef6\u5f00\u53d1\u8005-meetup"},"\u4e2d\u95f4\u4ef6\u5f00\u53d1\u8005 MeetUp"),(0,r.kt)("p",null,"\u8fd1\u671f\uff0c\u963f\u91cc\u4e91\u5728\u676d\u5dde\u4e3e\u529e\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/986002"},"\u4e2d\u95f4\u4ef6\u5f00\u53d1\u8005 Meetup"),"\uff0cNacos \u4e5f\u53c2\u52a0\u4e86\u8be5MeetUp\u7684\u676d\u5dde\u7ad9\u7ebf\u4e0b\u6d3b\u52a8\uff0c\u5e76\u4e14\u6709\u5e78\u9080\u8bf7\u5230\u4e86\u79be\u8fde\u5065\u5eb7\u7684CTO--\u9093\u5fd7\u8c6a\u5927\u4f6c\u6765\u5206\u4eab Nacos\u5fae\u670d\u52a1\u4f53\u7cfb\u5728\u79be\u8fde\u5065\u5eb7\u7684\u843d\u5730\u5e94\u7528\u3002\u5bf9\u676d\u5dde\u7ad9\u6709\u5174\u8da3\u53c8\u6ca1\u6709\u5728\u5f53\u65f6\u6536\u770b\u76f4\u64ad\u6216\u5230\u73b0\u573a\u7684\u540c\u5b66\uff0c\u53ef\u4ee5",(0,r.kt)("a",{parentName:"p",href:"https://yqh.aliyun.com/live/detail/29133"},"\u67e5\u770b\u56de\u770b"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mse-group/Slides"},"\u4e0b\u8f7d\u6f14\u8bb2PDF"),"\u3002\u53e6\u5916",(0,r.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/986002"},"\u4e2d\u95f4\u4ef6\u5f00\u53d1\u8005 Meetup"),"\u4f1a\u5728\u5176\u4ed6\u57ce\u5e02\u76f8\u7ee7\u4e3e\u529e\uff0c\u60f3\u8981\u5230\u73b0\u573a\u53c2\u4e0e\u6216\u8005\u5206\u4eab\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u79ef\u6781\u53c2\u4e0e\uff5e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://cdn.nlark.com/yuque/0/2022/jpeg/1577777/1660125286406-d088463e-20df-47e9-812b-58a58427be1f.jpeg#clientId=uf10cb19a-105c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=1302&id=u690edac9&margin=%5Bobject%20Object%5D&name=THS6110.JPG&originHeight=2603&originWidth=3905&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uaa7cd91f-70f5-4e4e-b84b-e78c882f6a7&title=&width=1952.5",alt:"meetup1.JPG"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://cdn.nlark.com/yuque/0/2022/jpeg/1577777/1660125296258-b98425c3-478f-44e9-9736-0d1bb31ab7c1.jpeg#clientId=uf10cb19a-105c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=1368&id=u862349c0&margin=%5Bobject%20Object%5D&name=THS6126.JPG&originHeight=2735&originWidth=4102&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u3414f330-5d2c-49a9-8569-01f045626d1&title=&width=2051",alt:"meetup2.JPG"}))))),(0,r.kt)("h2",{id:"about-nacos"},"About Nacos"),(0,r.kt)("p",null,"Nacos \u81f4\u529b\u4e8e\u5e2e\u52a9\u60a8\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u3002Nacos \u63d0\u4f9b\u4e86\u4e00\u7ec4\u7b80\u5355\u6613\u7528\u7684\u7279\u6027\u96c6\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u5b9e\u73b0\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5143\u6570\u636e\u53ca\u6d41\u91cf\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"Nacos \u5e2e\u52a9\u60a8\u66f4\u654f\u6377\u548c\u5bb9\u6613\u5730\u6784\u5efa\u3001\u4ea4\u4ed8\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u5e73\u53f0\u3002 Nacos \u662f\u6784\u5efa\u4ee5\u201c\u670d\u52a1\u201d\u4e3a\u4e2d\u5fc3\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784 (\u4f8b\u5982\u5fae\u670d\u52a1\u8303\u5f0f\u3001\u4e91\u539f\u751f\u8303\u5f0f) \u7684\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\u3002"),(0,r.kt)("p",null,"Nacos\u793e\u533a\u540c\u65f6\u4e5f\u5f00\u542f\u4e86\u5173\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/8UwwD_WxSJINP8Qr_1wogg"},"Nacos3.0"),"\u7684\u7545\u60f3\u548c\u89c4\u5212\uff0c\u6b22\u8fce\u793e\u533a\u79ef\u6781\u53c2\u4e0e\u5230\u65b0\u7248\u672c\u7684\u5efa\u8bbe\u4e2d\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/1577777/1660125280551-a2e881fe-d25e-4ebb-a28f-8e56683deef1.png#clientId=uf10cb19a-105c-4&crop=0&crop=0&crop=1&crop=1&from=url&id=Z9to1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=794&originWidth=1650&originalType=binary&ratio=1&rotation=0&showTitle=false&size=185821&status=done&style=none&taskId=u63849e10-1dae-45cb-b559-04d106ebe86&title=",alt:"image.png"})),(0,r.kt)("p",null,"\u6700\u540e\u6b22\u8fce\u5927\u5bb6\u626b\u7801\u52a0\u5165Nacos\u793e\u533a\u7fa4\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/1577777/1660125280778-c1822fb0-958b-4730-a6dc-0e92ba22f3f8.png#clientId=uf10cb19a-105c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=374&id=u2619495f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=923&originWidth=765&originalType=binary&ratio=1&rotation=0&showTitle=false&size=338166&status=done&style=none&taskId=u0690e9a0-6d58-4f72-82b1-7d4457a900e&title=&width=310",alt:"image.png"})))}d.isMDXComponent=!0}}]);