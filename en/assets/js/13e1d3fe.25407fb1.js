"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[7045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||N[m]||r;return n?o.createElement(d,l(l({ref:t},p),{},{components:n})):o.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>N,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var o=n(87462),a=(n(67294),n(3905));const r={title:"Nacos \u4e24\u5468\u5e74\u732e\u793c\uff0cNacos 1.3.2 + Go SDK 1.0.0\u53d1\u5e03",keywords:["\u5f00\u6e90","1.3.2","Go 1.0.0"],description:"Nacos \u4e24\u5468\u5e74\u732e\u793c\uff0cNacos 1.3.2 + Go SDK 1.0.0\u53d1\u5e03"},l="Nacos \u4e24\u5468\u5e74\u732e\u793c\uff0cNacos 1.3.2 + Go SDK 1.0.0\u53d1\u5e03",c={permalink:"/en/blog/nacos-2nd-anniversary",source:"@site/i18n/en/docusaurus-plugin-content-blog/nacos-2nd-anniversary.md",title:"Nacos \u4e24\u5468\u5e74\u732e\u793c\uff0cNacos 1.3.2 + Go SDK 1.0.0\u53d1\u5e03",description:"Nacos \u4e24\u5468\u5e74\u732e\u793c\uff0cNacos 1.3.2 + Go SDK 1.0.0\u53d1\u5e03",date:"2023-10-10T11:24:40.000Z",formattedDate:"October 10, 2023",tags:[],readingTime:3.755,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos \u4e24\u5468\u5e74\u732e\u793c\uff0cNacos 1.3.2 + Go SDK 1.0.0\u53d1\u5e03",keywords:["\u5f00\u6e90","1.3.2","Go 1.0.0"],description:"Nacos \u4e24\u5468\u5e74\u732e\u793c\uff0cNacos 1.3.2 + Go SDK 1.0.0\u53d1\u5e03"},prevItem:{title:"Nacos 1.3.0 new kernel construction process",permalink:"/en/blog/nacos-1.3.0-design"},nextItem:{title:"nacos-confd",permalink:"/en/blog/nacos-confd"}},s={authorsImageUrls:[]},i=[{value:"Nacos 1.3.2",id:"nacos-132",level:2},{value:"Nacos Go SDK 1.0.0",id:"nacos-go-sdk-100",level:2},{value:"\u540e\u671f\u89c4\u5212",id:"\u540e\u671f\u89c4\u5212",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2},{value:"\u7ed3\u5c3e",id:"\u7ed3\u5c3e",level:2}],p={toc:i},u="wrapper";function N(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nacos\u81ea2018\u5e748\u67085\u65e5\u5f00\u6e90\u4ee5\u6765\uff0c\u5728\u793e\u533a\u4e24\u5e74\u7684\u5171\u540c\u52aa\u529b\u4e4b\u4e0b\uff0c\u83b7\u5f97\u4e8613400+ stars\uff0c\u53d1\u5e03\u4e8630\u4e2a\u7248\u672c\uff0c\u5438\u5f15\u4e86 125 \u4f4d\u4f18\u79c0\u8d21\u732e\u8005\uff0c\u79ef\u7d2f\u4e86\u4e0a\u767e\u5bb6\u4f01\u4e1a\u6848\u4f8b\u7684\u6210\u7ee9\u3002\u5728Nacos\u5f00\u6e90\u4e24\u5468\u5e74\u4e4b\u9645\uff0c\u793e\u533a\u540c\u65f6\u53d1\u5e03Nacos 1.3.2\u7248\u672c\u548cGo SDK \u76841.0.0\u7248\u672c\uff0c\u4e3aNacos\u5e86\u751f\u3002"),(0,a.kt)("h2",{id:"nacos-132"},"Nacos 1.3.2"),(0,a.kt)("p",null,"Nacos 1.3.2\u7248\u672c\u57281.3.1\u7684\u57fa\u7840\u4e0a\uff0c\u7ee7\u7eed\u91cd\u6784\u548c\u4f18\u5316\u5185\u6838\u529f\u80fd\uff0c\u4e3b\u8981\u6539\u8fdb\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784\u5e76\u7edf\u4e00 nacos-client \u4e2dhttp\u5ba2\u6237\u7aef\u7684\u5185\u5bb9\uff0c\u589e\u52a0\u62d3\u5c55\u6027\u548c\u53ef\u8bfb\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u56de\u6eda\u5728 nacos-client 1.3.1\u5bf9apache http\u7684\u4f7f\u7528\uff0c\u4ee5\u51cf\u5c11\u4f9d\u8d56\u51b2\u7a81\u548c\u4e0d\u53ef\u63a7\u7684\u65e5\u5fd7\u8f93\u51fa"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784Nacos\u4e2d\u7684\u4e8b\u4ef6\u901a\u77e5\u6a21\u5757\uff0c\u63d0\u9ad8\u6027\u80fd\u548c\u53ef\u8bfb\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590dNacos\u670d\u52a1\u7aef\u5728Windows\u73af\u5883\u4e0b\u542f\u52a8\u5931\u8d25\u7684\u95ee\u9898"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590dNacos\u63a7\u5236\u53f0\u7684\u90e8\u5206\u95ee\u9898"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u90e8\u5206\u6587\u6863\u7684\u63cf\u8ff0\u9519\u8bef")),(0,a.kt)("h2",{id:"nacos-go-sdk-100"},"Nacos Go SDK 1.0.0"),(0,a.kt)("p",null,"Nacos-sdk-go\u7684v1.0.0\u7248\u672c\u4e3b\u8981\u7684\u6539\u8fdb\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u4e00\u4e2a\u8fde\u63a5\u76d1\u542c\u591a\u4e2a\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u53d6\u6d88\u914d\u7f6e\u76d1\u542c\u529f\u80fd"),(0,a.kt)("li",{parentName:"ol"},"\u65e5\u5fd7\u529f\u80fd\u91cd\u65b0\u5b9e\u73b0\uff0c\u652f\u6301\u65e5\u5fd7\u8f6e\u8f6c\u548c\u65e5\u5fd7\u5b9e\u73b0\u66ff\u6362"),(0,a.kt)("li",{parentName:"ol"},"\u63d0\u5347\u4e86\u5b9e\u4f8b\u9009\u62e9\u7684\u6027\u80fd"),(0,a.kt)("li",{parentName:"ol"},"\u6587\u6863\u548c\u793a\u4f8b\u7684\u5b8c\u5584"),(0,a.kt)("li",{parentName:"ol"},"Nacos\u4e0edubbo-go\u3001sentinel-golang\u7b49go\u8bed\u8a00\u5fae\u670d\u52a1\u751f\u6001\u96c6\u6210")),(0,a.kt)("p",null,"\u968f\u7740Go SDK 1.0.0\u6b63\u5f0f\u7248\u7684\u53d1\u5e03\uff0c\u610f\u5473\u7740Nacos\u5728\u652f\u6301\u6240\u6709\u4e3b\u6d41\u5f00\u53d1\u8bed\u8a00\u4e0a\u66f4\u8fdb\u4e86\u4e00\u6b65\u3002\u76ee\u524d\uff0c\u793e\u533a\u5df2\u7ecf\u6709Java\u3001Golang\u3001Python\u3001Nodejs\u7684\u8bed\u8a00\u652f\u6301\u3002C++\u548cC#\u7684SDK\u4e5f\u901a\u8fc7\u7f16\u7a0b\u4e4b\u590f\u7a33\u6b65\u63a8\u8fdb\u4e2d\uff0c\u76f8\u4fe1\u5f88\u5feb\u5c31\u53ef\u4ee5\u548c\u5927\u5bb6\u89c1\u9762\u3002"),(0,a.kt)("h2",{id:"\u540e\u671f\u89c4\u5212"},"\u540e\u671f\u89c4\u5212"),(0,a.kt)("p",null,"\u5728\u65b0\u7684\u4e00\u5e74\u4e2d\uff0cNacos\u5c06\u4f1a\u7ee7\u7eed\u6210\u957f\u3001\u805a\u7126 Nacos \u5185\u6838\u6784\u5efa\uff0c\u6253\u9020\u4e00\u4e2a\u66f4\u7a33\u5b9a\u3001\u66f4\u5b89\u5168\u3001\u66f4\u9ad8\u6548\u7684\u5fae\u670d\u52a1\u5f15\u64ce\n\u76ee\u524d\u6838\u5fc3\u89c4\u5212\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u6c89\u5e76\u7edf\u4e00\u4e00\u81f4\u6027\u6a21\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u6c89\u5e76\u4f18\u5316\u9274\u6743\u6a21\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u8fde\u63a5\u901a\u9053\uff0c\u63d0\u5347\u4ea4\u4e92\u6548\u7387"),(0,a.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u670d\u52a1\u6570\u636e\u6a21\u578b\uff0c\u63d0\u5347\u670d\u52a1\u7aef\u8fd0\u884c\u6548\u7387")),(0,a.kt)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,a.kt)("p",null,"\u968f\u7740\u89c6\u9891\u3001\u76f4\u64ad\u53ca\u7ebf\u4e0a\u6559\u80b2\u884c\u4e1a\u5927\u89c4\u6a21\u53d1\u5c55\uff0cNacos\u5728 \u864e\u7259\u3001\u7231\u5947\u827a\u3001\u8292\u679c\u3001Zoom\u3001\u638c\u95e8\u3001KK\u76f4\u64ad \u7b49\u9ad8\u901f\u53d1\u5c55\u7684\u4f01\u4e1a\u4e2d\u843d\u5730\uff0c\u6709\u6b64\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u8d21\u732e\u8005\u548c\u7528\u6237\u4eec\u7684\u5171\u540c\u52aa\u529b\u3002"),(0,a.kt)("p",null,"\u5728\u6b64\uff0c\u611f\u8c22\u6240\u6709\u53c2\u4e0e\u793e\u533a\u5171\u5efa\uff0c\u4e3aNacos\u63d0\u4f9b\u4ee3\u7801\uff0c\u8bbe\u8ba1\u4ee5\u53ca\u8ba8\u8bba\u7684\u8d21\u732e\u8005\u548c\u7528\u6237\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\u6b22\u8fce\u66f4\u591a\u7684\u4e2a\u4eba\u53ca\u4f01\u4e1a\uff0c\u53c2\u4e0e\u5230Nacos\u7684\u5171\u5efa\u4e2d\uff0c\u8ba9Nacos\u53d8\u5f97\u66f4\u52a0\u9ad8\u6548\u3001\u7a33\u5b9a\u3002"),(0,a.kt)("h2",{id:"\u7ed3\u5c3e"},"\u7ed3\u5c3e"),(0,a.kt)("p",null,"Nacos \u81f4\u529b\u4e8e\u5e2e\u52a9\u60a8\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u3002Nacos \u63d0\u4f9b\u4e86\u4e00\u7ec4\u7b80\u5355\u6613\u7528\u7684\u7279\u6027\u96c6\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u5b9e\u73b0\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5143\u6570\u636e\u53ca\u6d41\u91cf\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"Nacos \u5e2e\u52a9\u60a8\u66f4\u654f\u6377\u548c\u5bb9\u6613\u5730\u6784\u5efa\u3001\u4ea4\u4ed8\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u5e73\u53f0\u3002 Nacos \u662f\u6784\u5efa\u4ee5\u201c\u670d\u52a1\u201d\u4e3a\u4e2d\u5fc3\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784 (\u4f8b\u5982\u5fae\u670d\u52a1\u8303\u5f0f\u3001\u4e91\u539f\u751f\u8303\u5f0f) \u7684\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\u3002"))}N.isMDXComponent=!0}}]);