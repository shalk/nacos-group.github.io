"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[7777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(n),d=r,m=c["".concat(u,".").concat(d)]||c[d]||k[d]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={title:"Authorization",keywords:["Authorization"],description:"Authorization"},o=void 0,p={unversionedId:"v2/guide/user/auth",id:"version-2.X/v2/guide/user/auth",title:"Authorization",description:"Authorization",source:"@site/versioned_docs/version-2.X/v2/guide/user/auth.md",sourceDirName:"v2/guide/user",slug:"/v2/guide/user/auth",permalink:"/docs/v2/guide/user/auth",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Authorization",keywords:["Authorization"],description:"Authorization"},sidebar:"docs",previous:{title:"Open API \u6307\u5357",permalink:"/docs/v2/guide/user/open-api"},next:{title:"FAQ",permalink:"/docs/v2/guide/user/faq"}},u={},i=[{value:"\u76f8\u5173\u53c2\u6570",id:"\u76f8\u5173\u53c2\u6570",level:2},{value:"\u670d\u52a1\u7aef\u5982\u4f55\u5f00\u542f\u9274\u6743",id:"\u670d\u52a1\u7aef\u5982\u4f55\u5f00\u542f\u9274\u6743",level:2},{value:"\u975eDocker\u73af\u5883",id:"\u975edocker\u73af\u5883",level:3},{value:"\u81ea\u5b9a\u4e49\u5bc6\u94a5",id:"\u81ea\u5b9a\u4e49\u5bc6\u94a5",level:4},{value:"Docker\u73af\u5883",id:"docker\u73af\u5883",level:3},{value:"\u5b98\u65b9\u955c\u50cf",id:"\u5b98\u65b9\u955c\u50cf",level:4},{value:"\u81ea\u5b9a\u4e49\u955c\u50cf",id:"\u81ea\u5b9a\u4e49\u955c\u50cf",level:4},{value:"\u5ba2\u6237\u7aef\u5982\u4f55\u8fdb\u884c\u9274\u6743",id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8fdb\u884c\u9274\u6743",level:2},{value:"Java SDK\u9274\u6743",id:"java-sdk\u9274\u6743",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"\u5176\u4ed6\u8bed\u8a00\u7684SDK\u9274\u6743",id:"\u5176\u4ed6\u8bed\u8a00\u7684sdk\u9274\u6743",level:3},{value:"Open-API\u9274\u6743",id:"open-api\u9274\u6743",level:3},{value:"\u5f00\u542fToken\u7f13\u5b58\u529f\u80fd",id:"\u5f00\u542ftoken\u7f13\u5b58\u529f\u80fd",level:2},{value:"\u80cc\u666f",id:"\u80cc\u666f",level:4},{value:"\u5f00\u542f\u65b9\u5f0f",id:"\u5f00\u542f\u65b9\u5f0f",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:4},{value:"\u5f00\u542f\u670d\u52a1\u8eab\u4efd\u8bc6\u522b\u529f\u80fd",id:"\u5f00\u542f\u670d\u52a1\u8eab\u4efd\u8bc6\u522b\u529f\u80fd",level:2},{value:"\u65e7\u7248\u672c\u5347\u7ea7",id:"\u65e7\u7248\u672c\u5347\u7ea7",level:3}],s={toc:i},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Nacos\u662f\u4e00\u4e2a\u5185\u90e8\u5fae\u670d\u52a1\u7ec4\u4ef6\uff0c\u9700\u8981\u5728\u53ef\u4fe1\u7684\u5185\u90e8\u7f51\u7edc\u4e2d\u8fd0\u884c\uff0c\u4e0d\u53ef\u66b4\u9732\u5728\u516c\u7f51\u73af\u5883\uff0c\u9632\u6b62\u5e26\u6765\u5b89\u5168\u98ce\u9669\u3002"),(0,r.kt)("li",{parentName:"ul"},"Nacos\u63d0\u4f9b\u7b80\u5355\u7684\u9274\u6743\u5b9e\u73b0\uff0c\u4e3a\u9632\u6b62\u4e1a\u52a1\u9519\u7528\u7684\u5f31\u9274\u6743\u4f53\u7cfb\uff0c\u4e0d\u662f\u9632\u6b62\u6076\u610f\u653b\u51fb\u7684\u5f3a\u9274\u6743\u4f53\u7cfb\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd0\u884c\u5728\u4e0d\u53ef\u4fe1\u7684\u7f51\u7edc\u73af\u5883\u6216\u8005\u6709\u5f3a\u9274\u6743\u8bc9\u6c42\uff0c\u8bf7\u53c2\u8003\u5b98\u65b9\u7b80\u5355\u5b9e\u73b0\u505a\u8fdb\u884c",(0,r.kt)("a",{parentName:"li",href:"/docs/v2/plugin/auth-plugin"},"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5f00\u53d1"),"\u3002"))),(0,r.kt)("h1",{id:"\u9274\u6743"},"\u9274\u6743"),(0,r.kt)("h2",{id:"\u76f8\u5173\u53c2\u6570"},"\u76f8\u5173\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542f\u6b62\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u9274\u6743\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.system.type"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9274\u6743\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.plugin.nacos.token.secret.key"),(0,r.kt)("td",{parentName:"tr",align:null},"SecretKey012345678901234567890123456789012345678901234567890123456789(2.2.0.1\u540e\u65e0\u9ed8\u8ba4\u503c)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u9274\u6743\u63d2\u4ef6\u7528\u4e8e\u751f\u6210\u7528\u6237\u767b\u9646\u4e34\u65f6accessToken\u6240\u4f7f\u7528\u7684\u5bc6\u94a5\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u4f7f\u7528\u9ed8\u8ba4\u503c\u6709\u5b89\u5168\u98ce\u9669"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.plugin.nacos.token.expire.seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"18000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u9646\u4e34\u65f6accessToken\u7684\u8fc7\u671f\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.enable.userAgentAuthWhite"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4.1 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4f7f\u7528useragent\u767d\u540d\u5355\uff0c\u4e3b\u8981\u7528\u4e8e\u9002\u914d\u8001\u7248\u672c\u5347\u7ea7\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u7f6e\u4e3atrue\u65f6\u6709\u5b89\u5168\u98ce\u9669"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.server.identity.key"),(0,r.kt)("td",{parentName:"tr",align:null},"serverIdentity(2.2.1\u540e\u65e0\u9ed8\u8ba4\u503c)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4.1 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u66ff\u6362useragent\u767d\u540d\u5355\u7684\u8eab\u4efd\u8bc6\u522bkey\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u4f7f\u7528\u9ed8\u8ba4\u503c\u6709\u5b89\u5168\u98ce\u9669"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.server.identity.value"),(0,r.kt)("td",{parentName:"tr",align:null},"security(2.2.1\u540e\u65e0\u9ed8\u8ba4\u503c)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4.1 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u66ff\u6362useragent\u767d\u540d\u5355\u7684\u8eab\u4efd\u8bc6\u522bvalue\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u4f7f\u7528\u9ed8\u8ba4\u503c\u6709\u5b89\u5168\u98ce\u9669"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"td"},"nacos.core.auth.default.token.secret.key")),(0,r.kt)("td",{parentName:"tr",align:null},"SecretKey012345678901234567890123456789012345678901234567890123456789"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0 ~ 2.0.4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c",(0,r.kt)("inlineCode",{parentName:"td"},"nacos.core.auth.plugin.nacos.token.secret.key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"td"},"nacos.core.auth.default.token.expire.seconds")),(0,r.kt)("td",{parentName:"tr",align:null},"18000"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0 ~ 2.0.4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c",(0,r.kt)("inlineCode",{parentName:"td"},"nacos.core.auth.plugin.nacos.token.expire.seconds"))))),(0,r.kt)("h2",{id:"\u670d\u52a1\u7aef\u5982\u4f55\u5f00\u542f\u9274\u6743"},"\u670d\u52a1\u7aef\u5982\u4f55\u5f00\u542f\u9274\u6743"),(0,r.kt)("h3",{id:"\u975edocker\u73af\u5883"},"\u975eDocker\u73af\u5883"),(0,r.kt)("p",null,"\u6309\u7167\u5b98\u65b9\u6587\u6863\u914d\u7f6e\u542f\u52a8,\u9ed8\u8ba4\u662f\u4e0d\u9700\u8981\u767b\u5f55\u7684\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u914d\u7f6e\u4e2d\u5fc3\u5bf9\u5916\u76f4\u63a5\u66b4\u9732\u3002\u800c\u542f\u7528\u9274\u6743\u4e4b\u540e\uff0c\u9700\u8981\u5728\u4f7f\u7528\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u4e4b\u540e\uff0c\u624d\u80fd\u6b63\u5e38\u4f7f\u7528nacos\u3002"),(0,r.kt)("p",null,"\u5f00\u542f\u9274\u6743\u4e4b\u524d\uff0capplication.properties\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"### If turn on auth system:\nnacos.core.auth.enabled=false\n")),(0,r.kt)("p",null,"\u5f00\u542f\u9274\u6743\u4e4b\u540e\uff0capplication.properties\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"### If turn on auth system:\nnacos.core.auth.system.type=nacos\nnacos.core.auth.enabled=true\n")),(0,r.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u5bc6\u94a5"},"\u81ea\u5b9a\u4e49\u5bc6\u94a5"),(0,r.kt)("p",null,"\u5f00\u542f\u9274\u6743\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7528\u4e8e\u751f\u6210JWT\u4ee4\u724c\u7684\u5bc6\u94a5\uff0capplication.properties\u4e2d\u7684\u914d\u7f6e\u4fe1\u606f\u4e3a\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u6587\u6863\u4e2d\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e3a\u516c\u5f00\u5bc6\u94a5\uff0c\u5728\u5b9e\u9645\u90e8\u7f72\u65f6\u8bf7\u66f4\u6362\u4e3a\u5176\u4ed6\u5bc6\u94a5\u5185\u5bb9\uff0c\u9632\u6b62\u5bc6\u94a5\u6cc4\u6f0f\u5bfc\u81f4\u5b89\u5168\u98ce\u9669\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u57282.2.0.1\u7248\u672c\u540e\uff0c\u793e\u533a\u53d1\u5e03\u7248\u672c\u5c06\u79fb\u9664\u4ee5\u6587\u6863\u5982\u4e0b\u503c\u4f5c\u4e3a\u9ed8\u8ba4\u503c\uff0c\u9700\u8981\u81ea\u884c\u586b\u5145\uff0c\u5426\u5219\u65e0\u6cd5\u542f\u52a8\u8282\u70b9\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5bc6\u94a5\u9700\u8981\u4fdd\u6301\u8282\u70b9\u95f4\u4e00\u81f4\uff0c\u957f\u65f6\u95f4\u4e0d\u4e00\u81f4\u53ef\u80fd\u5bfc\u81f4403 invalid token\u9519\u8bef\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"### The default token(Base64 String):\nnacos.core.auth.default.token.secret.key=SecretKey012345678901234567890123456789012345678901234567890123456789\n\n### 2.1.0 \u7248\u672c\u540e\nnacos.core.auth.plugin.nacos.token.secret.key=SecretKey012345678901234567890123456789012345678901234567890123456789\n")),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u65f6\uff0c\u63a8\u8350\u5c06\u914d\u7f6e\u9879\u8bbe\u7f6e\u4e3a",(0,r.kt)("strong",{parentName:"p"},"Base64\u7f16\u7801"),"\u7684\u5b57\u7b26\u4e32\uff0c\u4e14",(0,r.kt)("strong",{parentName:"p"},"\u539f\u59cb\u5bc6\u94a5\u957f\u5ea6\u4e0d\u5f97\u4f4e\u4e8e32\u5b57\u7b26"),"\u3002\u4f8b\u5982\u4e0b\u9762\u7684\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"### The default token(Base64 String):\nnacos.core.auth.default.token.secret.key=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=\n\n### 2.1.0 \u7248\u672c\u540e\nnacos.core.auth.plugin.nacos.token.secret.key=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9274\u6743\u5f00\u5173\u662f\u4fee\u6539\u4e4b\u540e\u7acb\u9a6c\u751f\u6548\u7684\uff0c\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\u7aef\u3002\u52a8\u6001\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"token.secret.key"),"\u65f6\uff0c\u8bf7\u786e\u4fddtoken\u662f\u6709\u6548\u7684\uff0c\u5982\u679c\u4fee\u6539\u6210\u65e0\u6548\u503c\uff0c\u4f1a\u5bfc\u81f4\u540e\u7eed\u65e0\u6cd5\u767b\u5f55\uff0c\u8bf7\u6c42\u8bbf\u95ee\u5f02\u5e38\u3002")),(0,r.kt)("h3",{id:"docker\u73af\u5883"},"Docker\u73af\u5883"),(0,r.kt)("h4",{id:"\u5b98\u65b9\u955c\u50cf"},"\u5b98\u65b9\u955c\u50cf"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u5b98\u65b9\u955c\u50cf\uff0c\u8bf7\u5728\u542f\u52a8docker\u5bb9\u5668\u65f6\uff0c\u6dfb\u52a0\u5982\u4e0b\u73af\u5883\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"NACOS_AUTH_ENABLE=true\n")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fd0\u884c\u5f00\u542f\u4e86\u9274\u6743\u7684\u5bb9\u5668:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker run --env PREFER_HOST_MODE=hostname --env MODE=standalone --env NACOS_AUTH_ENABLE=true -p 8848:8848 nacos/nacos-server\n")),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u5176\u4ed6\u9274\u6743\u76f8\u5173\u7684\u73af\u5883\u53d8\u91cf\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"option"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u6743\u9650\u7cfb\u7edf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4:false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_TOKEN_EXPIRE_SECONDS"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u5931\u6548\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4:18000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4:SecretKey012345678901234567890123456789012345678901234567890123456789")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_CACHE_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u7f13\u5b58\u5f00\u5173 ,\u5f00\u542f\u540e\u6743\u9650\u7f13\u5b58\u7684\u66f4\u65b0\u9ed8\u8ba4\u670915\u79d2\u7684\u5ef6\u8fdf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 : false")))),(0,r.kt)("p",null,"\u7136\u540e\u8fd0\u884cdocker-compose\u6784\u5efa\u547d\u4ee4,\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/standalone-derby.yaml up\n")),(0,r.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u955c\u50cf"},"\u81ea\u5b9a\u4e49\u955c\u50cf"),(0,r.kt)("p",null,"\u5982\u679c\u9009\u62e9\u81ea\u5b9a\u4e49\u955c\u50cf\uff0c\u8bf7\u5728\u6784\u5efa\u955c\u50cf\u4e4b\u524d\uff0c\u4fee\u6539nacos\u5de5\u7a0b\u4e2d\u7684application.properties\u6587\u4ef6\uff0c"),(0,r.kt)("p",null,"\u5c06\u4e0b\u9762\u8fd9\u4e00\u884c\u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.core.auth.enabled=false\n")),(0,r.kt)("p",null,"\u4fee\u6539\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.core.auth.system.type=nacos\nnacos.core.auth.enabled=true\n")),(0,r.kt)("p",null,"\u7136\u540e\u518d\u914d\u7f6enacos\u542f\u52a8\u547d\u4ee4\u3002"),(0,r.kt)("h2",{id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8fdb\u884c\u9274\u6743"},"\u5ba2\u6237\u7aef\u5982\u4f55\u8fdb\u884c\u9274\u6743"),(0,r.kt)("h3",{id:"java-sdk\u9274\u6743"},"Java SDK\u9274\u6743"),(0,r.kt)("p",null,"\u5728\u6784\u5efa\u201cProperties\u201d\u7c7b\u65f6,\u9700\u4f20\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'properties.put("username","${username}");\nproperties.put("password","${password}");\n')),(0,r.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'try {\n    // Initialize the configuration service, and the console automatically obtains the following parameters through the sample code.\n    String serverAddr = "{serverAddr}";\n    Properties properties = new Properties();\n    properties.put("serverAddr", serverAddr);\n\n    // if need username and password to login\n        properties.put("username","nacos");\n        properties.put("password","nacos");\n\n    ConfigService configService = NacosFactory.createConfigService(properties);\n} catch (NacosException e) {\n    // TODO Auto-generated catch block\n    e.printStackTrace();\n}\n')),(0,r.kt)("h3",{id:"\u5176\u4ed6\u8bed\u8a00\u7684sdk\u9274\u6743"},"\u5176\u4ed6\u8bed\u8a00\u7684SDK\u9274\u6743"),(0,r.kt)("p",null,"\u5f85\u8865\u5145"),(0,r.kt)("h3",{id:"open-api\u9274\u6743"},"Open-API\u9274\u6743"),(0,r.kt)("p",null,"\u9996\u5148\u9700\u8981\u4f7f\u7528\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u9646nacos\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"curl -X POST '127.0.0.1:8848/nacos/v1/auth/login' -d 'username=nacos&password=nacos'\n")),(0,r.kt)("p",null,"\u82e5\u7528\u6237\u540d\u548c\u5bc6\u7801\u6b63\u786e,\u8fd4\u56de\u4fe1\u606f\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"accessToken":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTYwNTYyOTE2Nn0.2TogGhhr11_vLEjqKko1HJHUJEmsPuCxkur-CfNojDo","tokenTtl":18000,"globalAdmin":true}\n')),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u8fdb\u884c\u914d\u7f6e\u4fe1\u606f\u6216\u670d\u52a1\u4fe1\u606f\u65f6,\u5e94\u5f53\u4f7f\u7528\u8be5accessToken\u9274\u6743,\u5728url\u540e\u6dfb\u52a0\u53c2\u6570accessToken=${accessToken},\u5176\u4e2d${accessToken}\u4e3a\u767b\u5f55\u65f6\u8fd4\u56de\u7684token\u4fe1\u606f\uff0c\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"curl -X GET '127.0.0.1:8848/nacos/v1/cs/configs?accessToken=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTYwNTYyMzkyM30.O-s2yWfDSUZ7Svd3Vs7jy9tsfDNHs1SuebJB4KlNY8Q&dataId=nacos.example.1&group=nacos_group'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?accessToken=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTYwNTYyMzkyM30.O-s2yWfDSUZ7Svd3Vs7jy9tsfDNHs1SuebJB4KlNY8Q&port=8848&healthy=true&ip=11.11.11.11&weight=1.0&serviceName=nacos.test.3&encoding=GBK&namespaceId=n1'\n")),(0,r.kt)("h2",{id:"\u5f00\u542ftoken\u7f13\u5b58\u529f\u80fd"},"\u5f00\u542fToken\u7f13\u5b58\u529f\u80fd"),(0,r.kt)("p",null,"\u670d\u52a1\u7aef\u81ea2.2.1\u7248\u672c\u540e\uff0c\u9ed8\u8ba4\u9274\u6743\u63d2\u4ef6\u6a21\u5757\u652f\u6301token\u7f13\u5b58\u529f\u80fd\uff0c\u53ef\u53c2\u89c1ISSUE #9906 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://github.com/alibaba/nacos/issues/9906\n")),(0,r.kt)("h4",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("p",null,"\u65e0\u8bba\u662f\u5ba2\u6237\u7aefSDK\u8fd8\u662fOpenAPI\uff0c\u5728\u8c03\u7528login\u63a5\u53e3\u83b7\u53d6accessToken\u4e4b\u540e\uff0c\u643a\u5e26accessToken\u8bbf\u95ee\u670d\u52a1\u7aef\uff0c\u670d\u52a1\u7aef\u89e3\u6790Token\u8fdb\u884c\u9274\u6743\u3002\u89e3\u6790\u7684\u52a8\u4f5c\u6bd4\u8f83\u8017\u65f6\uff0c\u5982\u679c\u60f3\u8981\u63d0\u5347\u63a5\u53e3\u7684\u6027\u80fd\uff0c\u53ef\u4ee5\u8003\u8651\u5f00\u542f\u7f13\u5b58Token\u7684\u529f\u80fd\uff0c\u7528\u5b57\u7b26\u4e32\u6bd4\u8f83\u4ee3\u66ffToken\u89e3\u6790\u3002"),(0,r.kt)("h4",{id:"\u5f00\u542f\u65b9\u5f0f"},"\u5f00\u542f\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.core.auth.plugin.nacos.token.cache.enable=true\n")),(0,r.kt)("h4",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u5728\u5f00\u542fToken\u7f13\u5b58\u529f\u80fd\u4e4b\u524d\uff0c\u670d\u52a1\u7aef\u5bf9\u6bcf\u4e00\u4e2a\u643a\u5e26\u7528\u6237\u540d\u5bc6\u7801\u8bbf\u95eelogin\u63a5\u53e3\u7684\u8bf7\u6c42\u90fd\u4f1a\u751f\u6210\u65b0\u7684token\uff0c\u63a5\u53e3\u7684\u8fd4\u56de\u503c\u4e2d\u7684tokenTtl\u5b57\u6bb5\u8ddf\u670d\u52a1\u7aef\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684\u503c\u76f8\u7b49\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.core.auth.plugin.nacos.token.expire.seconds=18000\n")),(0,r.kt)("p",null,"\u5728\u5f00\u542fToken\u7f13\u5b58\u529f\u80fd\u4e4b\u540e\uff0c\u670d\u52a1\u7aef\u5bf9\u6bcf\u4e00\u4e2a\u643a\u5e26\u7528\u6237\u540d\u5bc6\u7801\u8bbf\u95eelogin\u63a5\u53e3\u7684\u8bf7\u6c42\uff0c\u4f1a\u5148\u68c0\u67e5\u7f13\u5b58\u4e2d\u662f\u5426\u5b58\u5728\u8be5\u7528\u6237\u540d\u5bf9\u5e94\u7684token\u3002\u82e5\u4e0d\u5b58\u5728\uff0c\u751f\u6210\u65b0\u7684Token\uff0c\u63d2\u5165\u7f13\u5b58\u518d\u8fd4\u56de\uff1b\u82e5\u5b58\u5728\uff0c\u8fd4\u56de\u8be5token\uff0c\u6b64\u65f6tokenTtl\u5b57\u6bb5\u7684\u503c\u4e3a\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684\u503c\u51cf\u53bb\u8be5Token\u5728\u7f13\u5b58\u4e2d\u5b58\u7559\u7684\u65f6\u957f\u3002\n\u5982\u679cToken\u5728\u7f13\u5b58\u4e2d\u5b58\u7559\u7684\u65f6\u957f\u8d85\u8fc7\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\u7684\u503c\u768490%\uff0c\u5f53login\u63a5\u53e3\u6536\u5230\u8bf7\u6c42\u65f6\uff0c\u5c3d\u7ba1\u7f13\u5b58\u4e2d\u5b58\u5728\u8be5\u7528\u6237\u540d\u5bf9\u5e94\u7684Token\uff0c\u670d\u52a1\u7aef\u4f1a\u91cd\u65b0\u751f\u6210Token\u8fd4\u56de\u7ed9\u8bf7\u6c42\u65b9\uff0c\u5e76\u66f4\u65b0\u7f13\u5b58\u3002\u56e0\u6b64\uff0c\u6700\u5dee\u60c5\u51b5\u4e0b\uff0c\u8bf7\u6c42\u65b9\u6536\u5230\u7684tokenTtl\u53ea\u6709\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\u7684\u503c\u768410%\u3002"),(0,r.kt)("h2",{id:"\u5f00\u542f\u670d\u52a1\u8eab\u4efd\u8bc6\u522b\u529f\u80fd"},"\u5f00\u542f\u670d\u52a1\u8eab\u4efd\u8bc6\u522b\u529f\u80fd"),(0,r.kt)("p",null,"\u5f00\u542f\u9274\u6743\u529f\u80fd\u540e\uff0c\u670d\u52a1\u7aef\u4e4b\u95f4\u7684\u8bf7\u6c42\u4e5f\u4f1a\u901a\u8fc7\u9274\u6743\u7cfb\u7edf\u7684\u5f71\u54cd\u3002\u8003\u8651\u5230\u670d\u52a1\u7aef\u4e4b\u95f4\u7684\u901a\u4fe1\u5e94\u8be5\u662f\u53ef\u4fe1\u7684\uff0c\u56e0\u6b64\u57281.2~1.4.0\u7248\u672c\u671f\u95f4\uff0c\u901a\u8fc7User-Agent\u4e2d\u662f\u5426\u5305\u542bNacos-Server\u6765\u8fdb\u884c\u5224\u65ad\u8bf7\u6c42\u662f\u5426\u6765\u81ea\u5176\u4ed6\u670d\u52a1\u7aef\u3002"),(0,r.kt)("p",null,"\u4f46\u8fd9\u79cd\u5b9e\u73b0\u7531\u4e8e\u8fc7\u4e8e\u7b80\u5355\u4e14\u56fa\u5b9a\uff0c\u5bfc\u81f4\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u95ee\u9898\u3002\u56e0\u6b64\u4ece1.4.1\u7248\u672c\u5f00\u59cb\uff0cNacos\u6dfb\u52a0\u670d\u52a1\u8eab\u4efd\u8bc6\u522b\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u914d\u7f6e\u670d\u52a1\u7aef\u7684Identity\uff0c\u4e0d\u518d\u4f7f\u7528User-Agent\u4f5c\u4e3a\u670d\u52a1\u7aef\u8bf7\u6c42\u7684\u5224\u65ad\u6807\u51c6\u3002"),(0,r.kt)("p",null,"\u5f00\u542f\u65b9\u5f0f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"### \u5f00\u542f\u9274\u6743\nnacos.core.auth.enabled=true\n\n### \u5173\u95ed\u4f7f\u7528user-agent\u5224\u65ad\u670d\u52a1\u7aef\u8bf7\u6c42\u5e76\u653e\u884c\u9274\u6743\u7684\u529f\u80fd\nnacos.core.auth.enable.userAgentAuthWhite=false\n\n### \u914d\u7f6e\u81ea\u5b9a\u4e49\u8eab\u4efd\u8bc6\u522b\u7684key\uff08\u4e0d\u53ef\u4e3a\u7a7a\uff09\u548cvalue\uff08\u4e0d\u53ef\u4e3a\u7a7a\uff09\nnacos.core.auth.server.identity.key=example\nnacos.core.auth.server.identity.value=example\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \u6ce8\u610f ")," \u6240\u6709\u96c6\u7fa4\u5747\u9700\u8981\u914d\u7f6e\u76f8\u540c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"server.identity"),"\u4fe1\u606f\uff0c\u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u670d\u52a1\u7aef\u4e4b\u95f4\u6570\u636e\u4e0d\u4e00\u81f4\u6216\u65e0\u6cd5\u5220\u9664\u5b9e\u4f8b\u7b49\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"\u65e7\u7248\u672c\u5347\u7ea7"},"\u65e7\u7248\u672c\u5347\u7ea7"),(0,r.kt)("p",null,"\u8003\u8651\u5230\u65e7\u7248\u672c\u7528\u6237\u9700\u8981\u5347\u7ea7\uff0c\u53ef\u4ee5\u5728\u5347\u7ea7\u671f\u95f4\uff0c\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.core.auth.enable.userAgentAuthWhite=true"),"\u529f\u80fd\uff0c\u5f85\u96c6\u7fa4\u6574\u4f53\u5347\u7ea7\u52301.4.1\u5e76\u7a33\u5b9a\u8fd0\u884c\u540e\uff0c\u518d\u5173\u95ed\u6b64\u529f\u80fd\u3002"))}k.isMDXComponent=!0}}]);