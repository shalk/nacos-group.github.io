"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},i="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=c(n),m=o,k=i["".concat(a,".").concat(m)]||i[m]||b[m]||u;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,l=new Array(u);l[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[i]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<u;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const u={},l="Consul\u4e0ekubernetes\u6574\u5408\u516c\u544a[\u7ffb\u8bd1]",s={permalink:"/en/blog/consul-k8s",source:"@site/i18n/en/docusaurus-plugin-content-blog/consul-k8s.md",title:"Consul\u4e0ekubernetes\u6574\u5408\u516c\u544a[\u7ffb\u8bd1]",description:"\u5bfc\u8bfb",date:"2023-10-10T11:24:40.000Z",formattedDate:"October 10, 2023",tags:[],readingTime:7.015,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Nacos \u8fdb\u5165CNCF landscape",permalink:"/en/blog/cncf"},nextItem:{title:"v0.5.0 of Nacos-sdk-csharp was released! Capabilities aligned with Java SDK\uff01",permalink:"/en/blog/csharp-0.5.0"}},a={authorsImageUrls:[]},c=[{value:"\u5bfc\u8bfb",id:"\u5bfc\u8bfb",level:2},{value:"\u529f\u80fd\u70b9",id:"\u529f\u80fd\u70b9",level:2},{value:"\u4e0eKubernetes\u6574\u5408",id:"\u4e0ekubernetes\u6574\u5408",level:2}],p={toc:c},i="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5bfc\u8bfb"},"\u5bfc\u8bfb"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Consul\u662f\u76ee\u524d\u4e1a\u754c\u6bd4\u8f83\u706b\u7684\u670d\u52a1\u53d1\u73b0\u4e0e\u914d\u7f6e\u4ea7\u54c1\uff0c\u5b83\u7387\u5148\u5c06\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u7b49\u5206\u5e03\u5f0f\u670d\u52a1\u5f53\u4e2d\u4f7f\u7528\u5230\u7684\u57fa\u7840\u670d\u52a1\u8fdb\u884c\u6574\u5408\uff0c\u5bf9\u5916\u63d0\u4f9b\u5206\u5e03\u5f0f\u53ca\u9ad8\u53ef\u7528\u7684\u670d\u52a1\u3002Consul\u76ee\u524d\u6709\u5f00\u6e90\u7248\u672c\u548c\u5546\u4e1a\u5316\u7248\u672c\u540c\u65f6\u6f14\u8fdb\uff0c\u8fd9\u4e5f\u662f\u56fd\u5185\u53ef\u4ee5\u501f\u9274\u7684\u4e00\u79cd\u5f00\u6e90\u7b56\u7565\u3002\u540c\u65f6\uff0cConsul\u5bf9\u4e8e\u65b0\u6280\u672f\u8d8b\u52bf\u7684\u8ddf\u8fdb\u548c\u6574\u5408\uff0c\u4e5f\u662f\u503c\u5f97\u6211\u4eec\u5b66\u4e60\u548c\u53c2\u8003\u7684\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7ffb\u8bd1\u4e86Consul\u5bf9\u4e8eKubernetes\u7684\u6574\u5408\u6240\u53d1\u5e03\u7684\u516c\u544a\u6587\u7ae0\uff08",(0,o.kt)("a",{parentName:"p",href:"https://www.hashicorp.com/blog/consul-plus-kubernetes"},"\u539f\u6587\u5730\u5740"),"\uff09\u3002Consul\u901a\u8fc7\u652f\u6301Service Mesh\uff0c\u5e76\u63d0\u4f9b\u5bf9Kubernetes\u7684\u65e0\u7f1d\u652f\u6301\uff0c\u4e0e\u76ee\u524d\u6700\u53d7\u793e\u533a\u70ed\u6367\u7684\u4ea7\u54c1\u8fdb\u884c\u7ed1\u5b9a\uff0c\u5e76\u901a\u8fc7\u529f\u80fd\u9884\u544a\u7684\u5f62\u5f0f\uff0c\u6765\u8fbe\u5230\u5bf9\u4ea7\u54c1\u5ba3\u4f20\u6548\u679c\u7684\u6700\u5927\u5316\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"\u4e0eConsul\u4ea7\u54c1\u5bf9\u5e94\u7684\uff0c\u963f\u91cc\u5df4\u5df4\u5728\u8fd1\u671f\u5f00\u6e90\u4e86\u5176\u670d\u52a1\u53d1\u73b0\u4e0e\u914d\u7f6e\u7ba1\u7406\u4ea7\u54c1",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io"},"Nacos"),"\u3002Nacos\u662f\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5185\u90e8VIPServer\u3001ConfigServer\u548cDiamond\u4e09\u4e2a\u652f\u6491\u53cc\u5341\u4e00\u7684\u91cd\u8981\u4e2d\u95f4\u4ef6\u4ea7\u54c1\u6574\u5408\u800c\u6765\u3002Nacos\u4e3b\u8981\u5173\u6ce8\u4ea7\u54c1\u7684\u6781\u81f4\u6613\u7528\u4ee5\u53ca\u4e0e\u4e91\u539f\u751f\u7684\u6df1\u5ea6\u6574\u5408\uff0c\u4e3b\u8981\u652f\u6301\u670d\u52a1\u53d1\u73b0\u3001\u914d\u7f6e\u7ba1\u7406\u7b49\u529f\u80fd\u3002\u5f88\u5feb\uff0cNacos\u4e5f\u4f1a\u4e0eService Mesh\u8fdb\u884c\u6574\u5408\uff0c\u540c\u65f6\u5728\u96c6\u56e2\u5185\u90e8\u548c\u5f00\u6e90\u8fdb\u884c\u53d1\u5e03\uff0c\u5229\u7528\u963f\u91cc\u5df4\u5df4\u4e30\u5bcc\u7684\u573a\u666f\u548c\u5f00\u6e90\u793e\u533a\u7684\u529b\u91cf\uff0c\u5c06Nacos\u6253\u9020\u6210\u4e91\u539f\u751f\u751f\u6001\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u57fa\u7840\u4ea7\u54c1\u3002")),(0,o.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03HashiCorp Consul\u4e0eKubernetes\u6df1\u5ea6\u6574\u5408\u7684\u591a\u9879\u529f\u80fd\u3002 \u8fd9\u7bc7\u6587\u7ae0\u5c06\u5206\u4eab\u5c06\u5728\u672a\u6765\u51e0\u5468\u5185\u53d1\u5e03\u7684\u4e00\u7cfb\u5217\u521d\u6b65\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e9b\u529f\u80fd\u5305\u62ec\u7528\u4e8e\u5728Kubernetes\u4e0a\u5b89\u88c5Consul\u7684\u5b98\u65b9Helm Chart\uff0c\u4e0eConsul\u81ea\u52a8\u540c\u6b65Kubernetes\u670d\u52a1\uff08\u53cd\u4e4b\u4ea6\u7136\uff09\uff0c\u5916\u90e8Consul Agent\u81ea\u52a8\u52a0\u5165Kubernetes\u4e2d\u7684\u96c6\u7fa4\uff0c\u7528\u4e8eConnect\u81ea\u52a8\u4fdd\u62a4pod\u7684\u6ce8\u5165\u5668\uff0c\u4ee5\u53ca\u5bf9Envoy\u7684\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u9664\u4e86\u4e0eKubernetes\u672c\u5730\u96c6\u6210\u4e4b\u5916\uff0c\u8fd9\u4e9b\u529f\u80fd\u8fd8\u6709\u52a9\u4e8e\u89e3\u51b3\u591a\u4e2aKubernetes\u96c6\u7fa4\u4e4b\u95f4\u4ee5\u53caKubernetes\u670d\u52a1\u4e0e\u975eKubernetes\u670d\u52a1\u4ea4\u4e92\u591a\u9879\u91cd\u8981\u8de8\u96c6\u7fa4\u6311\u6218\u3002 \u6211\u4eec\u5f88\u9ad8\u5174\u4e0e\u60a8\u5206\u4eab\u8fd9\u9879\u5de5\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u529f\u80fd\u70b9"},"\u529f\u80fd\u70b9"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u5c06\u5728\u672a\u6765\u51e0\u5468\u5185\u516c\u5e03\u548c\u53d1\u5e03\u7684\u529f\u80fd\u5217\u8868\u3002\u540e\u7eed\u516c\u544a\u535a\u5ba2\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u6bcf\u4e2a\u9879\u76ee\uff0c\u6bcf\u4e2a\u9879\u76ee\u90fd\u5c06\u94fe\u63a5\u5230\u8be5\u516c\u544a\u5e16\u5b50\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Helm Chart"),"\u3002\u7528\u4e8e\u5728Kubernetes\u4e0a\u5b89\u88c5\uff0c\u914d\u7f6e\u548c\u5347\u7ea7Consul\u7684\u5b98\u65b9Helm Chart\u3002\u6b64Helm Chart\u8fd8\u5c06\u652f\u6301Kubernetes\u7684\u5176\u4ed6\u529f\u80fd\u7684\u81ea\u52a8\u5b89\u88c5\u548c\u914d\u7f6e\uff0c\u4f8b\u5982\u76ee\u5f55\u540c\u6b65\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes\u81ea\u52a8\u52a0\u5165"),"\u3002Consul\u7684\u4e91\u81ea\u52a8\u52a0\u5165\u529f\u80fd\u5c06\u66f4\u65b0\uff0c\u4ee5\u652f\u6301\u53d1\u73b0\u548c\u52a0\u5165\u57fa\u4e8eKubernetes\u7684Agent\u4ee3\u7406\u3002\u8fd9\u5c06\u4f7f\u5916\u90e8Consul Agent\u52a0\u5165\u5728Kubernetes\u4e2d\u8fd0\u884c\u7684Consul\u96c6\u7fa4\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u670d\u52a1\u76ee\u5f55\u540c\u6b65\uff1a\u4eceK8S\u5230Consul"),"\u3002\u9002\u5f53\u7684Kubernetes\u670d\u52a1\u5c06\u81ea\u52a8\u540c\u6b65\u5230Consul\u76ee\u5f55\uff0c\u4f7f\u975eKubernetes\u670d\u52a1\u80fd\u591f\u53d1\u73b0\u5e76\u8fde\u63a5\u5230Kubernetes\u4e2d\u8fd0\u884c\u7684\u670d\u52a1\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u670d\u52a1\u76ee\u5f55\u540c\u6b65\uff1a\u4eceConsul\u5230K8S"),"\u3002Consul\u670d\u52a1\u5c06\u540c\u6b65\u5230Kubernetes\u670d\u52a1\uff0c\u4ee5\u4fbf\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528Kubernetes\u672c\u5730\u670d\u52a1\u53d1\u73b0\u6765\u53d1\u73b0\u548c\u8fde\u63a5\u5728Kubernetes\u4e4b\u5916\u8fd0\u884c\u7684\u670d\u52a1\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connect\u81ea\u52a8\u6ce8\u5165"),"\u3002\u90e8\u7f72\u5728Kubernetes\u4e2d\u7684Pod\u53ef\u4ee5\u914d\u7f6e\u4e3a\u81ea\u52a8\u4f7f\u7528Connect\u901a\u8fc7TLS\u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,o.kt)("strong",{parentName:"li"},"Envoy Proxy"),"\u3002\u914d\u7f6e\u4e3a\u4f7f\u7528Connect\u81ea\u52a8\u6ce8\u5165\u7684Pod\u53ef\u4ee5\u4f7f\u7528Envoy Proxy\u8fdb\u884c\u7b2c4\u5c42\u901a\u4fe1\uff0c\u901a\u8fc7Connect\u8fdb\u884c\u4fdd\u62a4\u3002 Envoy\u4e5f\u5c06\u7528\u4e8e\u975eKubernetes\u7684Connect\u90e8\u7f72\u3002")),(0,o.kt)("h2",{id:"\u4e0ekubernetes\u6574\u5408"},"\u4e0eKubernetes\u6574\u5408"),(0,o.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u6b63\u5728\u4e0eKubernetes\u5728\u591a\u4e2a\u4ea7\u54c1\u4e0a\u8fdb\u884c\u5bc6\u5207\u6574\u5408\u3002\u901a\u8fc7\u4f7f\u6211\u4eec\u7684\u4ea7\u54c1\u66f4\u6613\u4e8e\u8fd0\u884c\u4ee5\u53ca\u96c6\u6210\u548c\u589e\u5f3aKubernetes\u529f\u80fd\uff0c\u6211\u4eec\u770b\u5230\u4e86\u89e3\u51b3\u7eafKubernetes\u7528\u6237\u6311\u6218\u7684\u673a\u4f1a\u3002"),(0,o.kt)("p",null,"\u8fd9\u79cd\u96c6\u6210\u7684\u6838\u5fc3\u539f\u5219\u662f\u589e\u5f3a\u73b0\u6709\u529f\u80fd\u800c\u4e0d\u662f\u66ff\u6362\u3002\u670d\u52a1\u3001ConfigMaps\u53caSecrets\u7b49\u529f\u80fd\u662fKubernetes\u6838\u5fc3\u5de5\u4f5c\u6d41\u7a0b\u7684\u4e00\u90e8\u5206\u3002\u66f4\u9ad8\u7ea7\u522b\u7684\u5de5\u5177\u548c\u6269\u5c55\u5229\u7528\u8fd9\u4e9b\u6838\u5fc3\u539f\u8bed\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u5728\u6574\u5408\u548c\u589e\u5f3a\u8fd9\u4e9b\u6838\u5fc3\u539f\u8bed\u3002\u4f8b\u5982\uff0cConsul\u76ee\u5f55\u540c\u6b65\u5c06Consul\u76ee\u5f55\u4e2d\u7684\u5916\u90e8\u670d\u52a1\u8f6c\u6362\u4e3a\u4e00\u7ea7\u7684Kubernetes\u670d\u52a1\u8d44\u6e90\u3002\u7136\u540e\uff0c\u5728Kubernetes\u4e2d\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u53d1\u73b0\u5e76\u8fde\u63a5\u5230\u975eKubernetes\u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u9664\u4e86\u4f7f\u6211\u4eec\u7684\u4ea7\u54c1\u5728Kubernetes\u4e2d\u66f4\u6613\u7528\u548c\u66f4\u81ea\u7136\u4e4b\u5916\uff0c\u8fd9\u4e9b\u96c6\u6210\u8fd8\u5141\u8bb8\u7528\u6237\u5728\u4e0e\u975eKubernetes\u5de5\u4f5c\u8d1f\u8f7d\u5171\u4eab\u7684\u73af\u5883\u4e2d\u66f4\u597d\u5730\u5de5\u4f5c\u3002 \u867d\u7136\u65b0\u7528\u6237\u5f88\u5bb9\u6613\u5728\u7eafKubernetes\u73af\u5883\u4e2d\u542f\u52a8\uff0c\u4f46\u5927\u591a\u6570\u90e8\u7f72\u5fc5\u987b\u4e0e\u5728\u4e91\u8ba1\u7b97\u73af\u5883\u4e2d\u8fd0\u884c\u7684\u5916\u90e8\u670d\u52a1\uff0c\u672c\u5730\u6570\u636e\u4e2d\u5fc3\u7b49\u8fdb\u884c\u4ea4\u4e92\u3002 \u50cfConsul\u8fd9\u6837\u7684HashiCorp\u4ea7\u54c1\u4e13\u4e3a\u8fd9\u4e9b\u5f02\u6784\u73af\u5883\u800c\u8bbe\u8ba1\u3002 \u901a\u8fc7\u5b9e\u73b0\u66f4\u81ea\u7136\u7684Kubernetes\u4f53\u9a8c\uff0c\u975eKubernetes\u5e94\u7528\u7a0b\u5e8f\u4e0eKubernetes\u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u53d8\u5f97\u540c\u6837\u81ea\u7136\u3002"),(0,o.kt)("h1",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03\u7b2c\u4e00\u6279HashiCorp Consul\u548cKubernetes\u7684\u529f\u80fd\u3002 \u8fd9\u4e9b\u529f\u80fd\u4f7f\u5f97\u5728Kubernetes\u4e0a\u8fd0\u884cConsul\uff0c\u4e0e\u975eKubernetes\u670d\u52a1\u8fdb\u884c\u4ea4\u4e92\uff0c\u5728Kubernetes\u5185\u5916\u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u7b49\u7b49\u66f4\u52a0\u5bb9\u6613\u3002 \u8fd9\u4e9b\u529f\u80fd\u4e2d\u7684\u6bcf\u4e00\u9879\u90fd\u5c06\u5728\u672a\u6765\u51e0\u5468\u5185\u5168\u9762\u516c\u5e03\u548c\u53d1\u5e03\uff0c\u4ece\u4e0b\u5468\u7684Helm Chart\u5f00\u59cb\u3002"),(0,o.kt)("p",null,"Terraform\u548cVault\u4e5f\u4e0eKubernetes\u7d27\u5bc6\u96c6\u6210\u3002 Terraform Kubernetes\u63d0\u4f9b\u5546\u73b0\u5728\u62e5\u6709\u4e00\u540d\u4e13\u804c\u5de5\u7a0b\u5e08\uff0c\u5e76\u4e14\u5728\u672a\u6765\u51e0\u4e2a\u6708\u5185\u5e94\u8be5\u4f1a\u8fc5\u901f\u6539\u8fdb\u3002 Vault\u6b63\u5728\u5f00\u53d1\u65b0\u7684\u96c6\u6210\uff0c\u4e5f\u5c06\u5f88\u5feb\u516c\u5e03\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5bf9Kubernetes\uff0c\u6211\u4eec\u7684\u5de5\u5177\u4ee5\u53ca\u6539\u8fdb\u8fd9\u4e9b\u96c6\u6210\u611f\u5174\u8da3\uff0c\u8bf7\u52a0\u5165\u6211\u4eec\uff01 \u6211\u4eec\u6709\u4e00\u4e9b\u9488\u5bf9Kubernetes\u96c6\u6210\u7684\u751f\u6001\u7cfb\u7edf\u5de5\u7a0b\u5e08\u5c97\u4f4d\u9700\u6c42\u3002"))}b.isMDXComponent=!0}}]);