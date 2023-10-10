"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(a),k=r,g=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(g,p(p({ref:t},c),{},{components:a})):n.createElement(g,p({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},72066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={},p="Nacos \u53d1\u5e03 1.0.0 \u7248\u672c\uff0c\u53ef\u5927\u89c4\u6a21\u6295\u5165\u5230\u751f\u4ea7\u73af\u5883\u4e2d",o={permalink:"/en/blog/nacos1.0.0",source:"@site/i18n/en/docusaurus-plugin-content-blog/nacos1.0.0.md",title:"Nacos \u53d1\u5e03 1.0.0 \u7248\u672c\uff0c\u53ef\u5927\u89c4\u6a21\u6295\u5165\u5230\u751f\u4ea7\u73af\u5883\u4e2d",description:"\u7ecf\u8fc7 3 \u4e2a RC \u7248\u672c\u7684\u793e\u533a\u4f53\u9a8c\u4e4b\u540e\uff0cNacos \u6b63\u5f0f\u53d1\u5e03 1.0.0 GA \u7248\u672c\uff0c\u5728\u67b6\u6784\u3001\u529f\u80fd\u548c API \u8bbe\u8ba1\u4e0a\u8fdb\u884c\u4e86\u5168\u65b9\u4f4d\u7684\u91cd\u6784\u548c\u5347\u7ea7\u3002",date:"2023-10-10T11:24:40.000Z",formattedDate:"October 10, 2023",tags:[],readingTime:13.795,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Nacos 0.9.0\u7248\u672c\u8fdb\u884c\u53d1\u5e03",permalink:"/en/blog/nacos0.9.0"},nextItem:{title:"\u6211\u4eec\u603b\u7ed3\u4e863\u5927\u4f7f\u7528\u5efa\u8bae\uff0c\u5e76\u9996\u6b21\u516c\u5f00 Nacos3.0 \u89c4\u5212\u56fe | Nacos \u5f00\u6e904\u5468\u5e74",permalink:"/en/blog/nacos3.0-is-coming"}},s={authorsImageUrls:[]},i=[{value:"Nacos \u6f14\u8fdb\u5386\u7a0b",id:"nacos-\u6f14\u8fdb\u5386\u7a0b",level:2},{value:"\u6ce8\u518c\u5b9e\u4f8b\u652f\u6301ephemeral\u5b57\u6bb5",id:"\u6ce8\u518c\u5b9e\u4f8b\u652f\u6301ephemeral\u5b57\u6bb5",level:3},{value:"\u6ce8\u518c\u5b9e\u4f8b\u652f\u6301 groupName \u5b57\u6bb5",id:"\u6ce8\u518c\u5b9e\u4f8b\u652f\u6301-groupname-\u5b57\u6bb5",level:3},{value:"\u589e\u52a0\u4e86Server\u72b6\u6001\u7684\u8bbe\u7f6e",id:"\u589e\u52a0\u4e86server\u72b6\u6001\u7684\u8bbe\u7f6e",level:3},{value:"\u589e\u52a0\u5168\u5c40\u63a8\u9001\u5f00\u5173",id:"\u589e\u52a0\u5168\u5c40\u63a8\u9001\u5f00\u5173",level:3},{value:"\u652f\u6301\u542f\u52a8\u65f6\u6570\u636e\u9884\u70ed",id:"\u652f\u6301\u542f\u52a8\u65f6\u6570\u636e\u9884\u70ed",level:3},{value:"\u5143\u6570\u636e\u7f16\u8f91\u6846\u4f18\u5316",id:"\u5143\u6570\u636e\u7f16\u8f91\u6846\u4f18\u5316",level:3},{value:"\u652f\u6301 MySQL 8.0",id:"\u652f\u6301-mysql-80",level:3},{value:"Nacos 1.0.0 \u5b9e\u73b0\u5927\u89c4\u6a21\u751f\u4ea7\u53ef\u7528",id:"nacos-100-\u5b9e\u73b0\u5927\u89c4\u6a21\u751f\u4ea7\u53ef\u7528",level:2},{value:"API \u5b8c\u6574\u5217\u8868\u5f00\u653e\uff0c\u6a21\u578b\u548c\u67b6\u6784\u8bbe\u8ba1\u6587\u6863\u66f4\u65b0",id:"api-\u5b8c\u6574\u5217\u8868\u5f00\u653e\u6a21\u578b\u548c\u67b6\u6784\u8bbe\u8ba1\u6587\u6863\u66f4\u65b0",level:3},{value:"\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\u53d1\u5e03",id:"\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\u53d1\u5e03",level:3},{value:"100+ \u4f01\u4e1a\u7528\u6237\u5df2\u7ecf\u4e0a\u7ebf\u751f\u4ea7\u73af\u5883",id:"100-\u4f01\u4e1a\u7528\u6237\u5df2\u7ecf\u4e0a\u7ebf\u751f\u4ea7\u73af\u5883",level:3},{value:"\u5347\u7ea7\u5efa\u8bae",id:"\u5347\u7ea7\u5efa\u8bae",level:3},{value:"<strong>\u5982\u4f55\u5171\u5efa</strong>",id:"\u5982\u4f55\u5171\u5efa",level:3},{value:"<strong>img \u611f\u8c22\u8d21\u732e\u8005\u4eec</strong>",id:"img-\u611f\u8c22\u8d21\u732e\u8005\u4eec",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7ecf\u8fc7 3 \u4e2a RC \u7248\u672c\u7684\u793e\u533a\u4f53\u9a8c\u4e4b\u540e\uff0cNacos \u6b63\u5f0f\u53d1\u5e03 1.0.0 GA \u7248\u672c\uff0c\u5728\u67b6\u6784\u3001\u529f\u80fd\u548c API \u8bbe\u8ba1\u4e0a\u8fdb\u884c\u4e86\u5168\u65b9\u4f4d\u7684\u91cd\u6784\u548c\u5347\u7ea7\u3002"),(0,r.kt)("p",null,"1.0.0 \u7248\u672c\u7684\u53d1\u5e03\u6807\u5fd7\u7740 Nacos \u5df2\u7ecf\u53ef\u4ee5\u5927\u89c4\u6a21\u5730\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u65b0\u7248\u672c\u4e0d\u4ec5\u9488\u5bf9\u793e\u533a\u7684\u9700\u6c42\u548c\u96c6\u7fa4\u7684\u7a33\u5b9a\u6027\u76f8\u5e94\u5730\u589e\u52a0\u4e86\u4e00\u4e9b\u65b0\u7279\u6027\uff0c\u800c\u4e14\u8fd8\u53d1\u5e03\u4e86\u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\uff0c\u4ee5\u53ca\u5b8c\u6574\u7684 API \u5217\u8868\u548c\u67b6\u6784\u8bbe\u8ba1\u6587\u6863\u3002"),(0,r.kt)("h2",{id:"nacos-\u6f14\u8fdb\u5386\u7a0b"},"Nacos \u6f14\u8fdb\u5386\u7a0b"),(0,r.kt)("p",null,"Nacos \u81ea 2018 \u5e74 7 \u6708\u4efd\u5f00\u6e90\u4ee5\u6765\uff0c\u6709\u8d56\u4e8e\u793e\u533a\u7684\u5927\u529b\u5173\u6ce8\u548c\u53c2\u4e0e\uff0c\u5728\u4e0d\u5230\u4e00\u5e74\u7684\u65f6\u95f4\u91cc\uff0c\u5df2\u7ecf\u6f14\u8fdb\u4e86 10+ \u4e2a\u7248\u672c\u3002\u540c\u65f6\u4e5f\u6709\u5f88\u591a\u4f01\u4e1a\u5ba2\u6237\u4e00\u76f4\u90fd\u4f7f\u7528 Nacos \u4f5c\u4e3a\u751f\u4ea7\u73af\u5883\u7684\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u3002"),(0,r.kt)("p",null,"Nacos \u6e90\u4e8e\u963f\u91cc\u5df4\u5df4\u5185\u90e8\u8fd1\u5341\u5e74\u7684\u751f\u4ea7\u73af\u5883\u6253\u78e8\u7684\u6838\u5fc3\u4e2d\u95f4\u4ef6\uff0c\u5728\u5f00\u6e90\u4e4b\u524d\u5c31\u652f\u6491\u7740\u53cc\u5341\u4e00\u7b49\u5927\u578b\u4e1a\u52a1\u573a\u666f\u3002Nacos \u5f00\u6e90\u4e0d\u4ec5\u662f\u4e3a\u4e86\u4e30\u5bcc\u6574\u4e2a\u5fae\u670d\u52a1\u751f\u6001\uff0c\u4e5f\u662f\u4e3a\u4e86\u6253\u9020\u4e00\u6b3e\u771f\u6b63\u80fd\u591f\u5e94\u5bf9\u5927\u89c4\u6a21\u3001\u9ad8\u5e76\u53d1\u548c\u590d\u6742\u73af\u5883\u4e0b\u590d\u6742\u9700\u6c42\u7684\u751f\u4ea7\u7ea7\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u7ba1\u7406\u5e73\u53f0\u3002\u5728 1.0.0  GA \u7248\u672c\u53d1\u5e03\u4e4b\u9645\uff0c\u5728\u6b64\u56de\u987e\u4e00\u4e0b Nacos \u7684\u6f14\u8fdb\u5386\u7a0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2018.07.20 - Nacos 0.1.0\uff1a\u652f\u6301\u57fa\u672c\u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u548c\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2018.09.15 - Nacos 0.2.0\uff1a\u6b63\u5f0f\u652f\u6301 SpringCloud \u751f\u6001\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2018.10.26 - Nacos 0.3.0\uff1a\u63d0\u4f9b\u63a7\u5236\u53f0\u754c\u9762\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2018.11.19 - Nacos 0.5.0\uff1a\u5f00\u6e90 DNS-F\uff0c\u652f\u6301 DNS \u534f\u8bae\u670d\u52a1\u53d1\u73b0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2018.12.06 - Nacos 0.6.0\uff1a\u6b63\u5f0f\u652f\u6301 Dubbo \u5ba2\u6237\u7aef\u6ce8\u518c\u670d\u52a1\uff0c\u652f\u6301 K8S \u90e8\u7f72\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2018.12.18 - Nacos 0.7.0\uff1a\u652f\u6301 CMDB \u5143\u6570\u636e\u7ba1\u7406\uff0c\u652f\u6301 Node.js \u5ba2\u6237\u7aef\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2019.01.22 - Nacos 0.8.0\uff1aPRE-GA \u652f\u6301\u63a7\u5236\u53f0\u8d26\u53f7\u767b\u5f55\uff0c\u652f\u6301\u547d\u540d\u7a7a\u95f4\uff0cNacos-Sync \u6253\u901a Eureka \u548c Zookeeper\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2019.04.10 - Nacos 1.0.0 GA \uff1a\u540c\u65f6\u652f\u6301 AP \u548c CP \u4e00\u81f4\u6027\uff0c\u53d1\u5e03\u538b\u6d4b\u62a5\u544a\uff0c\u7a33\u5b9a\u6027\u52a0\u5f3a\u548c\u4f53\u9a8c\u4f18\u5316\u3002"))),(0,r.kt)("h1",{id:"nacos-100-\u65b0\u589e\u7684\u7279\u6027"},(0,r.kt)("strong",{parentName:"h1"},"Nacos 1.0.0 \u65b0\u589e\u7684\u7279\u6027")),(0,r.kt)("h3",{id:"\u6ce8\u518c\u5b9e\u4f8b\u652f\u6301ephemeral\u5b57\u6bb5"},"\u6ce8\u518c\u5b9e\u4f8b\u652f\u6301ephemeral\u5b57\u6bb5"),(0,r.kt)("p",null,"Nacos 1.0.0 \u7248\u672c\u5728 instance \u7ea7\u522b\u4e0a\u589e\u52a0\u4e86\u4e00\u4e2aephemeral\u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u8868\u793a\u6ce8\u518c\u7684\u5b9e\u4f8b\u662f\u4e34\u65f6\u5b9e\u4f8b\u8fd8\u662f\u6301\u4e45\u5316\u5b9e\u4f8b\u3002\u5982\u679c\u662f\u4e34\u65f6\u5b9e\u4f8b\uff0c\u5219\u4e0d\u4f1a\u5728Nacos\u670d\u52a1\u7aef\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u9700\u8981\u901a\u8fc7\u4e0a\u62a5\u5fc3\u8df3\u7684\u65b9\u5f0f\u8fdb\u884c\u4fdd\u6d3b\uff0c\u5982\u679c\u4e00\u6bb5\u65f6\u95f4\u5185\u6ca1\u6709\u4e0a\u62a5\u5fc3\u8df3\uff0c\u5219\u4f1a\u88abNacos\u670d\u52a1\u7aef\u6458\u9664\u3002\u5728\u88ab\u6458\u9664\u540e\u5982\u679c\u53c8\u5f00\u59cb\u4e0a\u62a5\u5fc3\u8df3\uff0c\u5219\u4f1a\u91cd\u65b0\u5c06\u8fd9\u4e2a\u5b9e\u4f8b\u6ce8\u518c\u3002\u6301\u4e45\u5316\u5b9e\u4f8b\u5219\u4f1a\u6301\u4e45\u5316\u5230Nacos\u670d\u52a1\u7aef\uff0c\u6b64\u65f6\u5373\u4f7f\u6ce8\u518c\u5b9e\u4f8b\u7684\u5ba2\u6237\u7aef\u8fdb\u7a0b\u4e0d\u5728\uff0c\u8fd9\u4e2a\u5b9e\u4f8b\u4e5f\u4e0d\u4f1a\u4ece\u670d\u52a1\u7aef\u5220\u9664\uff0c\u53ea\u4f1a\u5c06\u5065\u5eb7\u72b6\u6001\u8bbe\u4e3a\u4e0d\u5065\u5eb7\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Yq_2RNjaK1RjSZFAXXbdLFXa-525-595.png",alt:null})),(0,r.kt)("p",null,"\u540c\u4e00\u4e2a\u670d\u52a1\u4e0b\u53ef\u4ee5\u540c\u65f6\u6709\u4e34\u65f6\u5b9e\u4f8b\u548c\u6301\u4e45\u5316\u5b9e\u4f8b\uff0c\u8fd9\u610f\u5473\u7740\u5f53\u8fd9\u670d\u52a1\u7684\u6240\u6709\u5b9e\u4f8b\u8fdb\u7a0b\u4e0d\u5728\u65f6\uff0c\u4f1a\u6709\u90e8\u5206\u5b9e\u4f8b\u4ece\u670d\u52a1\u4e0a\u6458\u9664\uff0c\u5269\u4e0b\u7684\u5b9e\u4f8b\u5219\u4f1a\u4fdd\u7559\u5728\u670d\u52a1\u4e0b\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u8001\u7248\u672c\u5ba2\u6237\u7aef\u6ce8\u518c\u5b9e\u4f8b\u65f6\u4e0d\u4f1a\u4e0a\u4f20 ephemeral \u5b57\u6bb5\uff0c\u9700\u8981\u5728 Nacos \u670d\u52a1\u7aef\u8bbe\u7f6e\u4e00\u4e2a\u9ed8\u8ba4\u7684 ephemeral \u503c\u3002Nacos 1.0.0 \u91cc ephemeral \u7684\u9ed8\u8ba4\u503c\u4e3a true\uff0c\u5373\u8001\u7248\u672c\u5ba2\u6237\u7aef\u9ed8\u8ba4\u6ce8\u518c\u7684\u662f\u4e34\u65f6\u5b9e\u4f8b\u3002\u5982\u679c\u9700\u8981\u8ba9\u8001\u5ba2\u6237\u7aef\u6ce8\u518c\u7684\u5b9e\u4f8b\u7c7b\u578b\u662f\u6301\u4e45\u5316\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5f00\u5173\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -X PUT '$NACOS_SERVER:8848/nacos/v1/ns/operator/switches?entry=defaultInstanceEphemeral&value=false'\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a\u5f53\u4ece\u8001\u7248\u672cNacos\u5347\u7ea7\u5230Nacos 1.0.0\u65f6\uff0c\u4ece\u78c1\u76d8\u52a0\u8f7d\u7684\u5b9e\u4f8b\u6570\u636e\u4f1a\u88ab\u7f6e\u4e3a\u6301\u4e45\u5316\u5b9e\u4f8b\u3002"),(0,r.kt)("h3",{id:"\u6ce8\u518c\u5b9e\u4f8b\u652f\u6301-groupname-\u5b57\u6bb5"},"\u6ce8\u518c\u5b9e\u4f8b\u652f\u6301 groupName \u5b57\u6bb5"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u6ce8\u518c\u5b9e\u4f8b\u65f6\uff0c\u53ef\u4ee5\u5728\u65b9\u6cd5\u7ea7\u522b\u6307\u5b9a\u8981\u6ce8\u518c\u7684\u5206\u7ec4\u540d\uff0c\u8fd9\u4e2a\u5206\u7ec4\u540d\u548c\u670d\u52a1\u540d\u662f\u5bf9\u670d\u52a1\u7684\u4e00\u4e2a\u4e8c\u7ef4\u7684\u6807\u8bc6\uff0c\u4e8c\u8005\u5171\u540c\u5b9a\u4f4d\u4e00\u4e2a\u670d\u52a1\u3002\u4e00\u4e2a\u5178\u578b\u7684\u4f7f\u7528\u5206\u7ec4\u7684\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'namingService.registerInstance("nacos.test.1", "group1", instance);\n')),(0,r.kt)("p",null,"\u4e0d\u6307\u5b9a\u5206\u7ec4\u7684\u63a5\u53e3\u4f9d\u7136\u662f\u652f\u6301\u7684\uff0c\u6b64\u65f6\u4f1a\u5728\u670d\u52a1\u7aef\u4e3a\u8fd9\u4e2a\u670d\u52a1\u5206\u914d\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5206\u7ec4\uff1aDEFAULT_GROUP\u3002"),(0,r.kt)("h3",{id:"\u589e\u52a0\u4e86server\u72b6\u6001\u7684\u8bbe\u7f6e"},"\u589e\u52a0\u4e86Server\u72b6\u6001\u7684\u8bbe\u7f6e"),(0,r.kt)("p",null,"Nacos \u589e\u52a0\u4e86\u5bf9 Server \u72b6\u6001\u7684\u63a7\u5236\uff0c\u6240\u6709\u7684\u72b6\u6001\u90fd\u5b9a\u4e49\u5728 com.alibaba.nacos.naming.cluster.ServerStatus"),(0,r.kt)("p",null,"\u7c7b\u91cc\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB13uYWRMHqK1RjSZJnXXbNLpXa-596-408.png",alt:null})),(0,r.kt)("p",null,"\u5404\u4e2a\u72b6\u6001\u7684\u542b\u4e49\u4ecb\u7ecd\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UP\uff1aServer \u4e00\u5207\u6b63\u5e38\uff0c\u8bfb\u5199\u8bf7\u6c42\u90fd\u4f1a\u88ab\u63a5\u53d7\uff1b"),(0,r.kt)("li",{parentName:"ul"},"DOWN\uff1aServer \u5f02\u5e38\uff0c\u6240\u6709\u8bf7\u6c42\u4f1a\u8fd4\u56de HTTP 503 \u9519\u8bef\uff1b"),(0,r.kt)("li",{parentName:"ul"},"STARTING\uff1aServer \u8fd8\u5728\u542f\u52a8\u4e2d\uff0c\u6240\u6709\u8bf7\u6c42\u8fd4\u56de HTTP 503 \u9519\u8bef\uff1b"),(0,r.kt)("li",{parentName:"ul"},"PAUSED\uff1aServer \u88ab\u4eba\u5de5\u6682\u505c\uff0c\u533a\u522b\u4e8e DOWN \u53ef\u80fd\u662f\u7cfb\u7edf\u81ea\u5df1\u68c0\u6d4b\u5230\u5f02\u5e38\u7136\u540e\u8bbe\u7f6e DOWN \u72b6\u6001\uff0cPAUSED \u72b6\u6001\u8868\u793a\u5f53\u524d Server \u53ef\u80fd\u662f\u6ca1\u95ee\u9898\u7684\uff0c\u53ea\u662f\u4eba\u5de5\u8fdb\u884c\u4e86\u5e72\u9884\uff1b"),(0,r.kt)("li",{parentName:"ul"},"WRITE_ONLY\uff1a\u53ea\u6709\u975e GET \u8bf7\u6c42\u4f1a\u88ab\u63a5\u53d7\uff1b"),(0,r.kt)("li",{parentName:"ul"},"READ_ONLY\uff1a\u53ea\u6709 GET \u8bf7\u6c42\u4f1a\u88ab\u63a5\u53d7\uff1b")),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u63a5\u53e3\u6765\u4fee\u6539\u96c6\u7fa4\u6240\u6709\u673a\u5668\u7684\u72b6\u6001\uff0c\u5982\u679c\u518d\u52a0\u4e0a debug=true \u53c2\u6570\uff0c\u5219\u53ea\u4fee\u6539\u5f53\u524d\u673a\u5668\u7684\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -X PUT '$NACOS_SERVER:8848/nacos/v1/ns/operator/switches?entry=overriddenServerStatus&value=READ_ONLY'\n")),(0,r.kt)("p",null,"\u540c\u65f6\u8fd9\u4e2a\u72b6\u6001\u662f\u4f1a\u81ea\u9002\u5e94\u8fdb\u884c\u4fee\u6539\u7684\uff0c\u6bd4\u5982\u542f\u52a8\u65f6\u8fd9\u4e2a\u72b6\u6001\u4e3a STARTING\uff0c\u7b49\u5230\u6570\u636e\u88c5\u8f7d\u5b8c\u6bd5\uff0c\u5219\u4f1a\u81ea\u52a8\u5c06\u72b6\u6001\u7f6e\u4e3a UP\uff0c\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u7cfb\u7edf\u5f02\u5e38\u5982\u78c1\u76d8\u6ee1\uff0c\u5219\u53c8\u4f1a\u5c06\u72b6\u6001\u7f6e\u4e3a DOWN\u3002\u4e0d\u8fc7\u81ea\u9002\u5e94\u7684\u72b6\u6001\u503c\u4f18\u5148\u7ea7\u8981\u4f4e\u4e8e\u4f7f\u7528\u63a5\u53e3\u8bbe\u7f6e\u7684\u72b6\u6001\u503c\uff0c\u56e0\u6b64\u5f53\u4f60\u60f3\u6062\u590d\u81ea\u9002\u5e94\u7684\u72b6\u6001\u8c03\u8282\u7684\u65f6\u5019\uff0c\u8bb0\u5f97\u5c06\u63a5\u53e3 overriddenServerStatus \u8bbe\u7f6e\u4e3a\u7a7a\u3002"),(0,r.kt)("h3",{id:"\u589e\u52a0\u5168\u5c40\u63a8\u9001\u5f00\u5173"},"\u589e\u52a0\u5168\u5c40\u63a8\u9001\u5f00\u5173"),(0,r.kt)("p",null,"\u652f\u6301\u4e86\u5168\u5c40\u63a8\u9001\u5f00\u5173\uff0c\u53ef\u4ee5\u6253\u5f00\u6216\u8005\u5173\u95ed\u670d\u52a1\u53d8\u66f4\u7684\u63a8\u9001\uff0c\u8c03\u7528\u63a5\u53e3\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -X PUT '$NACOS_SERVER:8848/nacos/v1/ns/operator/switches?entry=pushEnabled&value=false'\n")),(0,r.kt)("p",null,"\u5173\u95ed\u63a8\u9001\u540e\uff0c\u5ba2\u6237\u7aef\u4f9d\u7136\u4f1a\u901a\u8fc7\u8f6e\u8be2\u7684\u65b9\u5f0f\u6765\u66f4\u65b0\u5230\u6570\u636e\uff0c\u53ea\u662f\u66f4\u65b0\u7684\u901f\u5ea6\u6ca1\u6709\u63a8\u9001\u90a3\u4e48\u5feb\u3002"),(0,r.kt)("h3",{id:"\u652f\u6301\u542f\u52a8\u65f6\u6570\u636e\u9884\u70ed"},"\u652f\u6301\u542f\u52a8\u65f6\u6570\u636e\u9884\u70ed"),(0,r.kt)("p",null,"\u5728\u8001\u7248\u672c\u7684 Nacos \u4e2d\uff0c\u53ea\u8981 Server \u542f\u52a8\u6210\u529f\u5c31\u4f1a\u5f00\u59cb\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u6b64\u65f6\u670d\u52a1\u7684\u6570\u636e\u5e76\u4e0d\u4e00\u5b9a\u5b8c\u5168\u52a0\u8f7d\u5b8c\u6210\uff0c\u8fd9\u6837\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5ba2\u6237\u7aef\u63a5\u6536\u5230\u7684\u6570\u636e\u5e76\u4e0d\u5b8c\u6574\u30021.0.0 \u7248\u672c\u589e\u52a0\u4e86\u6570\u636e\u9884\u70ed\u7684\u903b\u8f91\uff0c\u5bf9\u4e8e\u6301\u4e45\u5316\u6570\u636e\uff0c\u5219\u4f1a\u7b49\u5f85\u6240\u6709\u6570\u636e\u4ece\u78c1\u76d8\u52a0\u8f7d\u5b8c\u6210\uff1b\u5bf9\u4e8e\u4e34\u65f6\u5b9e\u4f8b\u8fd9\u6837\u7684\u975e\u6301\u4e45\u5316\u6570\u636e\uff0c\u5219\u4f1a\u7b49\u5f85\u4ece\u5176\u4ed6Server\u62c9\u53d6\u5230\u5b8c\u6574\u6570\u636e\u3002\u6240\u6709\u6570\u636e\u90fd\u51c6\u5907\u597d\u4e4b\u540e\uff0c\u624d\u4f1a\u5c06 Server \u72b6\u6001\u7f6e\u4e3a UP\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e34\u65f6\u5b9e\u4f8b\u7684\u9884\u70ed\uff0c\u5b9e\u73b0\u673a\u5236\u662f Server \u5728\u542f\u52a8\u65f6\u4f1a\u4ece\u5176\u4ed6Server\u8282\u70b9\u62c9\u53d6\u6570\u636e\uff0c\u62c9\u53d6\u6210\u529f\u5219\u542f\u52a8\u6210\u529f\u3002\u4f46\u662f\u5f53\u4ece\u8001\u7248\u672c Server \u5347\u7ea7\u5230 1.0.0 \u65f6\uff0c\u7531\u4e8e\u8fd9\u4e2a\u62c9\u53d6\u5168\u91cf\u6570\u636e\u7684\u63a5\u53e3\u5728\u8001\u7248\u672c Server \u4e2d\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u7b2c\u4e00\u4e2a\u5347\u7ea7\u7684\u673a\u5668\u5c06\u65e0\u6cd5\u62c9\u5230\u4efb\u4f55\u6570\u636e\uff0c\u4ece\u800c\u540e\u9762\u5347\u7ea7\u7684\u673a\u5668\u4e5f\u65e0\u6cd5\u4ece\u7b2c\u4e00\u4e2a\u5347\u7ea7\u7684\u673a\u5668\u62c9\u53d6\u5230\u6570\u636e\u3002\u6b64\u65f6\u5efa\u8bae\u4f7f\u7528\u8c03\u7528 API \u5c06 Server \u7684\u8fd0\u884c\u72b6\u6001\u8bbe\u7f6e\u4e3a WRITE_ONLY\uff0c\u5141\u8bb8\u5ba2\u6237\u7aef\u6570\u636e\u9010\u6b65\u6c47\u805a\u8865\u507f\u4e0a\u6765\uff0c\u4f46\u662f\u8981\u963b\u6b62\u4efb\u4f55\u67e5\u8be2\u7684\u6d41\u91cf\uff0c\u76f4\u5230\u96c6\u7fa4\u6570\u636e\u51c6\u5907\u597d\u4ee5\u540e\uff0c\u518d\u5c06\u8fd9\u4e2a\u8fd0\u884c\u72b6\u6001\u6e05\u7a7a\uff0c\u96c6\u7fa4\u81ea\u52a8\u8c03\u6574\u8fd0\u884c\u72b6\u6001\uff0c\u6700\u540e\u5c31\u4f1a\u63d0\u4f9b\u5b8c\u6574\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"\u5143\u6570\u636e\u7f16\u8f91\u6846\u4f18\u5316"},"\u5143\u6570\u636e\u7f16\u8f91\u6846\u4f18\u5316"),(0,r.kt)("p",null,"\u6b64\u524d\u7684\u5143\u6570\u636e\u7f16\u8f91\u6846\u9700\u8981\u7528\u6237\u6309\u7167\u6307\u5b9a\u683c\u5f0f\u6765\u7f16\u8f91\uff0c\u5bb9\u6613\u51fa\u9519\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1VgDQRNTpK1RjSZFMXXbG_VXa-602-392.png",alt:null})),(0,r.kt)("p",null,"1.0.0 \u7248\u672c\u5bf9\u670d\u52a1\u9875\u9762\u7684\u5143\u6570\u636e\u7f16\u8f91\u6846\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u5728\u8c03\u6574\u7f16\u8f91\u6846\u5927\u5c0f\u7684\u540c\u65f6\uff0c\u589e\u52a0\u8bed\u6cd5\u9ad8\u4eae\uff0c\u65b9\u4fbf\u7528\u6237\u8fdb\u884c\u7f16\u8f91\u548c\u8bc6\u522b\u683c\u5f0f\u95ee\u9898\uff0c\u7f16\u8f91\u6846\u9884\u89c8\u56fe\u5982\u4e0b\uff1a",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1nwL3RIfpK1RjSZFOXXa6nFXa-552-149.png",alt:null})),(0,r.kt)("h3",{id:"\u652f\u6301-mysql-80"},"\u652f\u6301 MySQL 8.0"),(0,r.kt)("p",null,"Nacos 1.0.0 \u652f\u6301\u4e86 MySQL 8.0 \u9a71\u52a8\u3002\u60a8\u53ea\u9700\u8981\u5c068.0\u7248\u672c\u7684\u9a71\u52a8jar\u5305\u653e\u7f6e\u5728{nacos.home}/plugins/mysql/\u4e0b\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u5176\u4ed6\u6539\u52a8\u3002"),(0,r.kt)("h2",{id:"nacos-100-\u5b9e\u73b0\u5927\u89c4\u6a21\u751f\u4ea7\u53ef\u7528"},"Nacos 1.0.0 \u5b9e\u73b0\u5927\u89c4\u6a21\u751f\u4ea7\u53ef\u7528"),(0,r.kt)("h3",{id:"api-\u5b8c\u6574\u5217\u8868\u5f00\u653e\u6a21\u578b\u548c\u67b6\u6784\u8bbe\u8ba1\u6587\u6863\u66f4\u65b0"},"API \u5b8c\u6574\u5217\u8868\u5f00\u653e\uff0c\u6a21\u578b\u548c\u67b6\u6784\u8bbe\u8ba1\u6587\u6863\u66f4\u65b0"),(0,r.kt)("p",null,"\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u7684\u5b8c\u6574 API \u5217\u8868\u4f1a\u53d1\u5e03\u5230\u5b98\u7f51"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"em",href:"https://nacos.io/zh-cn/docs/open-API.html"},"https://nacos.io/zh-cn/docs/open-API.html"))),(0,r.kt)("p",null,"\u9664\u4e86\u6838\u5fc3\u529f\u80fd\u5916\uff0c\u4e5f\u5305\u542b\u90e8\u5206\u8fd0\u7ef4\u63a5\u53e3\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u8fdb\u884c\u96c6\u6210\u3002\u540c\u65f6\u5bf9\u4e8e Nacos \u7684\u6570\u636e\u6a21\u578b\u3001\u96c6\u7fa4\u6a21\u578b\u3001\u67b6\u6784\u8bbe\u8ba1\u53ca\u6a21\u5757\u8bbe\u8ba1\u6587\u6863\u8fdb\u884c\u4e86\u66f4\u65b0"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"em",href:"https://nacos.io/zh-cn/docs/architecture.html"},"https://nacos.io/zh-cn/docs/architecture.html"))),(0,r.kt)("h3",{id:"\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\u53d1\u5e03"},"\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a\u53d1\u5e03"),(0,r.kt)("p",null,"Nacos 1.0.0 \u8fdb\u884c\u4e86\u6027\u80fd\u6d4b\u8bd5\uff0c\u9488\u5bf9\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u7684\u8bfb\u5199\u80fd\u529b\u8fdb\u884c\u4e86\u5927\u89c4\u6a21\u573a\u666f\u7684\u538b\u529b\u6d4b\u8bd5\u3002\u76ee\u524d\u5f97\u5230\u7684\u6d4b\u8bd5\u6570\u636e\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bb9\u91cf\uff1a\u670d\u52a1\u5b9e\u4f8b\u6570 100 \u4e07+\uff0c\u914d\u7f6e\u6570 100 \u4e07+\uff0c\u652f\u6301\u5ba2\u6237\u7aef\u8fde\u63a5 100 \u4e07+\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bfb\u5199TPS\uff1a1 \u4e07+\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8282\u70b9\u6269\u5c55\u80fd\u529b\uff1a100 \u8282\u70b9+\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a8\u9001\u80fd\u529b\uff1a1 \u4e07\u5ba2\u6237\u7aef\u8ba2\u9605\u540c\u4e00\u914d\u7f6e/\u670d\u52a1\uff0c3 \u79d2\u5185\u6536\u5230\u53d8\u66f4\u901a\u77e5\u6bd4\u4f8b 99.9%\uff1b"))),(0,r.kt)("p",null,"\u76ee\u524d\u538b\u6d4b\u62a5\u544a\u5df2\u7ecf\u66f4\u65b0\u5230\u5b98\u7f51\uff1a"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"https:**//nacos.io/zh-cn/docs/nacos-naming-benchmark.html")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"https:**//nacos.io/zh-cn/docs/nacos-config-benchmark.html")),(0,r.kt)("h3",{id:"100-\u4f01\u4e1a\u7528\u6237\u5df2\u7ecf\u4e0a\u7ebf\u751f\u4ea7\u73af\u5883"},"100+ \u4f01\u4e1a\u7528\u6237\u5df2\u7ecf\u4e0a\u7ebf\u751f\u4ea7\u73af\u5883"),(0,r.kt)("p",null,"\u76ee\u524d Nacos \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u4e2d\u5fc3\u5df2\u7ecf\u6709 100 \u591a\u4e2a\u7528\u6237\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u670d\u5f79\uff0c\u5305\u542b\u963f\u91cc\u5df4\u5df4\u3001",(0,r.kt)("em",{parentName:"p"},"\u864e\u7259")," \u7b49\u4f01\u4e1a\u5df2\u7ecf\u5c06 Nacos \u5927\u89c4\u6a21\u5e94\u7528\u5728\u6838\u5fc3\u4e1a\u52a1\u573a\u666f\u4e2d\u3002"),(0,r.kt)("h3",{id:"\u5347\u7ea7\u5efa\u8bae"},"\u5347\u7ea7\u5efa\u8bae"),(0,r.kt)("p",null,"Nacos 1.0.0 \u670d\u52a1\u7aef\u4e2a\u522b\u63a5\u53e3\u4e0e 0.8.0 \u4ee5\u524d\u7684\u7248\u672c\u4e0d\u517c\u5bb9\uff0c0.8.0\u4e4b\u524d\u7248\u672c\u9700\u8981\u5148\u5347\u7ea7\u52300.8.0\uff0c\u518d\u5347\u7ea7\u52301.0.0\u3002\u5bf9\u5ba2\u6237\u7aef\u800c\u8a00\uff0cNacos 1.0.0 \u517c\u5bb9 0.5.0 \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u7684\u5ba2\u6237\u7aef\u8bbf\u95ee\u3002"),(0,r.kt)("h3",{id:"\u5982\u4f55\u5171\u5efa"},(0,r.kt)("strong",{parentName:"h3"},"\u5982\u4f55\u5171\u5efa")),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u5728\u6587\u6863\u4e2d\u53d1\u73b0\u62fc\u5199\u9519\u8bef\uff0c\u5728\u4ee3\u7801\u4e2d\u53d1\u73b0\u9519\u8bef\uff0c\u60f3\u8981\u65b0\u529f\u80fd\u6216\u60f3\u8981\u63d0\u4f9b\u5efa\u8bae\uff0c\u60a8\u53ef\u4ee5\u5728GitHub\u4e0a\u521b\u5efa\u4e00\u4e2a issues"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"em",href:"https://github.com/alibaba/Nacos/issues/new"},"https://github.com/alibaba/Nacos/issues/new")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6216\u8005\u53ef\u4ee5\u9009\u62e9 GitHub \u4ed3\u5e93\u4e2d\u6709\u4ee5\u4e0b\u6807\u7b7e\u7684 issues \u5165\u624b\uff1a"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"good first issue\uff1a\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\u662f\u975e\u5e38\u597d\u7684\u5165\u95e8 issues\u3002"),(0,r.kt)("li",{parentName:"ul"},"contribution welcome\uff1a\u4e9f\u5f85\u89e3\u51b3\u7684\u95ee\u9898\u548c\u975e\u5e38\u91cd\u8981\u7684\u6a21\u5757\uff0c\u4f46\u76ee\u524d\u7f3a\u5c11\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u8d21\u732e\u8005\u6765\u8d21\u732e\u3002")),(0,r.kt)("h2",{id:"img-\u611f\u8c22\u8d21\u732e\u8005\u4eec"},(0,r.kt)("strong",{parentName:"h2"},(0,r.kt)("img",{parentName:"strong",src:"https://res.wx.qq.com/mpres/htmledition/images/icon/common/emotion_panel/smiley/smiley_66.png?tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"img"})," \u611f\u8c22\u8d21\u732e\u8005\u4eec")),(0,r.kt)("p",null,"Nacos \u5f00\u53d1\u56e2\u961f\u6b63\u5728\u65e5\u76ca\u58ee\u5927\uff0c\u4ece\u6700\u5f00\u59cb\u7684\u53ea\u6709 4 \u4e2a\u4ee3\u7801 Contributor\uff0c\u53d1\u5c55\u5230\u76ee\u524d\u7684 40 \u591a\u4e2a\u3002\u5728 1.0.0 \u7248\u672c\u7684\u5f00\u53d1\u4e2d\uff0c\u793e\u533a\u540c\u5b66\u8d21\u732e\u4e86\u5f88\u5927\u7684\u529b\u91cf\uff0c\u5728\u6b64\u8868\u793a\u611f\u8c22\uff0c\u4ed6\u4eec\u662f\uff08\u6392\u5e8f\u4e0d\u5206\u5148\u540e\uff09\uff1a"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"yanlinly\u3001xuechaos\u3001hxy1991\u3001jifengnan\u3001nkorange\u3001neatlife\u3001loadchange\u3001TsingLiang\u3001jameslcj\u3001duansheli\u3001pbting\u3001mingyixu\u3001paderlol\u3001nanamikon")," \u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1vmOsQb2pK1RjSZFsXXaNlXXa-1716-888.png",alt:"img"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DISS is cheap, show me your hand \u6bd4\u5410\u69fd\u66f4\u91cd\u8981\u7684\u662f\u642d\u628a\u624b\uff0c\u53c2\u4e0e\u793e\u533a\u4e00\u8d77\u53d1\u5c55Nacos")),(0,r.kt)("p",null,"\u626b\u7801\u8fdb\u7fa4\uff0c\u73b0\u5728\u5c31\u52a0\u5165\u6211\u4eec\u3002",(0,r.kt)("img",{parentName:"p",src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b0\u4eba\u65f6\u523b - \u4ec0\u4e48\u662f Nacos \uff1f")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nacos")," \u662f\u963f\u91cc\u5df4\u5df4\u4e8e 2018 \u5e74 7 \u6708\u4efd\u65b0\u5f00\u6e90\u7684\u9879\u76ee\uff0cNacos \u7684\u4e3b\u8981\u613f\u666f\u662f\u671f\u671b\u901a\u8fc7\u63d0\u4f9b\u6613\u7528\u7684 \u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001 \u670d\u52a1\u914d\u7f6e\u7ba1\u7406\u3001 \u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0e Nacos \u76f8\u5173\u7684\u5f00\u6e90\u9879\u76ee")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Nacos\uff08\u70b9\u51fb\u201c\u9605\u8bfb\u539f\u6587\u201d\u53ef\u8fdb\u5165\uff09"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos"},"https://github.com/alibaba/nacos")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Dubbo Registry Nacos"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dubbo/dubbo-registry-nacos"},"https://github.com/dubbo/dubbo-registry-nacos")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Nacos DNS-F"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-coredns-plugin"},"https://github.com/nacos-group/nacos-coredns-plugin")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Nacos Spring Project"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-project"},"https://github.com/nacos-group/nacos-spring-project")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Nacos Spring Boot"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"https://github.com/nacos-group/nacos-spring-boot-project")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Spring Cloud Alibaba"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba"},"https://github.com/spring-cloud-incubator/spring-cloud-alibaba")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Dubbo"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://dubbo.apache.org/en-us/"},"http://dubbo.apache.org/en-us/")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Sentinel"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/Sentinel"},"https://github.com/alibaba/Sentinel")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Spring Cloud"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-cloud"},"https://spring.io/projects/spring-cloud")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Nepxion Discovery"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Nepxion/Discovery"},"https://github.com/Nepxion/Discovery")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Spring Cloud Gateway Nacos"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SpringCloud/spring-cloud-gateway-nacoshttps://github.com/SpringCloud/spring-cloud-gateway-nacos"},"https://github.com/SpringCloud/spring-cloud-gateway-nacoshttps://github.com/SpringCloud/spring-cloud-gateway-nacos"),")"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u672c\u6587\u4f5c\u8005\uff1a")),(0,r.kt)("p",null,"\u6731\u9e4f\u98de\uff08\u82b1\u540d\uff1a\u6566\u8c37\uff09"),(0,r.kt)("p",null,"Github ID: nkorange\uff0c\u963f\u91cc\u5df4\u5df4\u4e2d\u95f4\u4ef6\u9ad8\u7ea7\u5f00\u53d1\u5de5\u7a0b\u5e08\uff0cNacos \u5f00\u6e90\u9879\u76ee\u8d1f\u8d23\u4eba\uff0cNacos \u6ce8\u518c\u4e2d\u5fc3\u7b49\u6a21\u5757\u4e3b\u8981\u8d21\u732e\u8005\u3002"))}m.isMDXComponent=!0}}]);