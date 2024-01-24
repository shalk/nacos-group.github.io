"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8192],{3905:(t,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>g});var e=n(67294);function l(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function p(t,a){if(null==t)return{};var n,e,l=function(t,a){if(null==t)return{};var n,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(l[n]=t[n]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=e.createContext({}),d=function(t){var a=e.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},k=function(t){var a=d(t.components);return e.createElement(m.Provider,{value:a},t.children)},o="mdxType",N={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},u=e.forwardRef((function(t,a){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),o=d(n),u=l,g=o["".concat(m,".").concat(u)]||o[u]||N[u]||r;return n?e.createElement(g,i(i({ref:a},k),{},{components:n})):e.createElement(g,i({ref:a},k))}));function g(t,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=t,p[o]="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89868:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var e=n(87462),l=(n(67294),n(3905));const r={title:"Nacos\u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd",keywords:["Nacos","\u7cfb\u7edf\u53c2\u6570"],description:"Nacos\u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd"},i="Nacos \u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd",p={unversionedId:"system-configurations",id:"version-1.X/system-configurations",title:"Nacos\u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd",description:"Nacos\u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd",source:"@site/versioned_docs/version-1.X/system-configurations.md",sourceDirName:".",slug:"/system-configurations",permalink:"/docs/1.X/system-configurations",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Nacos\u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd",keywords:["Nacos","\u7cfb\u7edf\u53c2\u6570"],description:"Nacos\u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"Nacos Spring",permalink:"/docs/1.X/nacos-spring"},next:{title:"Authorization",permalink:"/docs/1.X/auth"}},m={},d=[{value:"Nacos Server",id:"nacos-server",level:2},{value:"\u5168\u5c40\u53c2\u6570",id:"\u5168\u5c40\u53c2\u6570",level:3},{value:"Naming\u6a21\u5757",id:"naming\u6a21\u5757",level:3},{value:"Config\u6a21\u5757",id:"config\u6a21\u5757",level:3},{value:"CMDB\u6a21\u5757",id:"cmdb\u6a21\u5757",level:3},{value:"Nacos Java Client",id:"nacos-java-client",level:2},{value:"\u901a\u7528\u53c2\u6570",id:"\u901a\u7528\u53c2\u6570",level:3},{value:"Naming\u5ba2\u6237\u7aef",id:"naming\u5ba2\u6237\u7aef",level:3},{value:"Config\u5ba2\u6237\u7aef",id:"config\u5ba2\u6237\u7aef",level:3}],k={toc:d},o="wrapper";function N(t){let{components:a,...n}=t;return(0,l.kt)(o,(0,e.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nacos-\u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd"},"Nacos \u7cfb\u7edf\u53c2\u6570\u4ecb\u7ecd"),(0,l.kt)("h2",{id:"nacos-server"},"Nacos Server"),(0,l.kt)("p",null,"\u5bf9\u4e8eServer\u7aef\u6765\u8bf4\uff0c\u4e00\u822c\u662f\u8bbe\u7f6e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"{nacos.home}/conf/application.properties"),"\u91cc\uff0c\u5982\u679c\u53c2\u6570\u540d\u540e\u6807\u6ce8\u4e86(-D)\u7684\uff0c\u5219\u8868\u793a\u662f JVM \u7684\u53c2\u6570\uff0c\u9700\u8981\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"{nacos.home}/bin/startup.sh"),"\u91cc\u8fdb\u884c\u76f8\u5e94\u7684\u8bbe\u7f6e\u3002\u4f8b\u5982\u50cf\u8bbe\u7f6e nacos.home \u7684\u503c\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"{nacos.home}/bin/startup.sh"),"\u8fdb\u884c\u5982\u4e0b\u8bbe\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'JAVA_OPT="${JAVA_OPT} -Dnacos.home=${BASE_DIR}"\n')),(0,l.kt)("h3",{id:"\u5168\u5c40\u53c2\u6570"},"\u5168\u5c40\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.home(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u7684\u6839\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u5f55\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u5b89\u88c5\u7684\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.standalone(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u5355\u673a\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.functionMode(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u6a21\u5f0f\uff0c\u652f\u6301\u53ea\u542f\u52a8\u67d0\u4e00\u4e2a\u6a21\u5757\uff0c\u4e0d\u8bbe\u7f6e\u65f6\u6240\u6709\u6a21\u5757\u90fd\u4f1a\u542f\u52a8"),(0,l.kt)("td",{parentName:"tr",align:null},"config/naming/\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.9.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.inetutils.prefer-hostname-over-ip"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cluster.conf"),"\u91cc\u662f\u5426\u5e94\u8be5\u586b",(0,l.kt)("inlineCode",{parentName:"td"},"hostname")),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.3.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.inetutils.ip-address"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u673aIP\uff0c\u8be5\u53c2\u6570\u8bbe\u7f6e\u540e\uff0c\u5c06\u4f1a\u4f7f\u7528\u8fd9\u4e2aIP\u53bb",(0,l.kt)("inlineCode",{parentName:"td"},"cluster.conf"),"\u91cc\u8fdb\u884c\u5339\u914d\uff0c\u8bf7\u786e\u4fdd\u8fd9\u4e2aIP\u7684\u503c\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"cluster.conf"),"\u91cc\u662f\u5b58\u5728\u7684"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u673aIP"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.3.0")))),(0,l.kt)("h3",{id:"naming\u6a21\u5757"},"Naming\u6a21\u5757"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.data.warmup"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728Server\u542f\u52a8\u65f6\u8fdb\u884c\u6570\u636e\u9884\u70ed"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.expireInstance"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u6458\u9664\u4e34\u65f6\u5b9e\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.distro.taskDispatchPeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65\u4efb\u52a1\u751f\u6210\u7684\u5468\u671f\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"2000"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.distro.batchSyncKeyCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65\u4efb\u52a1\u6bcf\u6279\u7684key\u7684\u6570\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.naming.distro.syncRetryDelay"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65\u4efb\u52a1\u5931\u8d25\u7684\u91cd\u8bd5\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")))),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u5217\u5230\u7684\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u91cc\u914d\u7f6e\u7684\u5c5e\u6027\uff0c\u8fd8\u6709\u4e00\u4e9b\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u8c03\u7528\u63a5\u53e3\u6765\u8fdb\u884c\u8c03\u8282\uff0c\u8fd9\u4e9b\u53c2\u6570\u90fd\u5728",(0,l.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/open-api.html"},"Open API"),"\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u67e5\u770b\u7cfb\u7edf\u5f53\u524d\u6570\u636e\u6307\u6807"),"\u8fd9\u4e2aAPI\u91cc\u6709\u58f0\u660e\u3002"),(0,l.kt)("h3",{id:"config\u6a21\u5757"},"Config\u6a21\u5757"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db.num"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u6570\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db.url.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u4e2a\u6570\u636e\u5e93\u7684URL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db.url.1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e8c\u4e2a\u6570\u636e\u5e93\u7684URL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db.user"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u7684\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db.password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u7684\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spring.datasource.platform"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql"),(0,l.kt)("td",{parentName:"tr",align:null},">=1.3.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db.pool.config.xxx"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u53c2\u6570\uff0c\u4f7f\u7528\u7684\u662fhikari\u8fde\u63a5\u6c60\uff0c\u53c2\u6570\u4e0ehikari\u8fde\u63a5\u6c60\u76f8\u540c\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"td"},"db.pool.config.connectionTimeout"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"db.pool.config.maximumPoolSize")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540chikariCp\u5bf9\u5e94\u9ed8\u8ba4\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},">=1.4.1")))),(0,l.kt)("p",null,"\u5f53\u524d\u6570\u636e\u5e93\u914d\u7f6e\u652f\u6301\u591a\u6570\u636e\u6e90\u3002\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"db.num"),"\u6765\u6307\u5b9a\u6570\u636e\u6e90\u4e2a\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"db.url.index"),"\u4e3a\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u7684\u94fe\u63a5\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"db.user"),"\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"db.password"),"\u6ca1\u6709\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"index"),"\u65f6,\u6240\u6709\u7684\u94fe\u63a5\u90fd\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"db.user"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"db.password"),"\u7528\u4f5c\u8ba4\u8bc1\u3002\u5982\u679c\u4e0d\u540c\u6570\u636e\u6e90\u7684\u7528\u6237\u540d\u79f0\u6216\u8005\u7528\u6237\u5bc6\u7801\u4e0d\u4e00\u6837\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u7b26\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},","),"\u6765\u8fdb\u884c\u5207\u5272\uff0c\u6216\u8005\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"db.user.index"),",",(0,l.kt)("inlineCode",{parentName:"p"},"db.user.password"),"\u6765\u8bbe\u7f6e\u5bf9\u5e94\u6570\u636e\u5e93\u94fe\u63a5\u7684\u7528\u6237\u6216\u8005\u5bc6\u7801\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"db.user"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"db.password"),"\u6ca1\u6709\u6307\u5b9a\u4e0b\u6807\u65f6\uff0c\u56e0\u4e3a\u5f53\u524d\u673a\u5236\u4f1a\u6839\u636e",(0,l.kt)("inlineCode",{parentName:"p"},","),"\u8fdb\u884c\u5207\u5272\u3002\u6240\u4ee5\u5f53\u7528\u6237\u540d\u6216\u8005\u5bc6\u7801\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},","),"\u65f6\uff0c\u4f1a\u628a",(0,l.kt)("inlineCode",{parentName:"p"},","),"\u5207\u5272\u540e\u524d\u9762\u7684\u503c\u5f53\u6210\u6700\u540e\u7684\u503c\u8fdb\u884c\u8ba4\u8bc1\uff0c\u4f1a\u5bfc\u81f4\u8ba4\u8bc1\u5931\u8d25\u3002"),(0,l.kt)("p",null,"Nacos\u4ece1.3\u7248\u672c\u5f00\u59cb\u4f7f\u7528HikariCP\u8fde\u63a5\u6c60\uff0c\u4f46\u57281.4.1\u7248\u672c\u524d\uff0c\u8fde\u63a5\u6c60\u914d\u7f6e\u7531\u7cfb\u7edf\u9ed8\u8ba4\u503c\u5b9a\u4e49\uff0c\u65e0\u6cd5\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002\u57281.4.1\u540e\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b9\u6cd5\u80fd\u591f\u914d\u7f6eHikariCP\u8fde\u63a5\u6c60\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"db.pool.config"),"\u4e3a\u914d\u7f6e\u524d\u7f00\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"xxx"),"\u4e3a\u5b9e\u9645\u7684hikariCP\u914d\u7f6e\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"db.pool.config.connectionTimeout"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"db.pool.config.maximumPoolSize"),"\u7b49\u3002\u66f4\u591ahikariCP\u7684\u914d\u7f6e\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP"},"HikariCP"),"\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0curl,user,password\u4f1a\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"db.url.n"),",",(0,l.kt)("inlineCode",{parentName:"p"},"db.user"),",",(0,l.kt)("inlineCode",{parentName:"p"},"db.password"),"\u8986\u76d6\uff0cdriverClassName\u5219\u662f\u9ed8\u8ba4\u7684MySQL8 driver\uff08\u8be5\u7248\u672cmysql driver\u652f\u6301mysql5.x)"),(0,l.kt)("h3",{id:"cmdb\u6a21\u5757"},"CMDB\u6a21\u5757"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.cmdb.loadDataAtStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6253\u5f00CMDB"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.cmdb.dumpTaskInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u91cfdump\u7684\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"3600"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.cmdb.eventTaskInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u66f4\u4e8b\u4ef6\u7684\u62c9\u53d6\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nacos.cmdb.labelTaskInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6807\u7b7e\u96c6\u5408\u7684\u62c9\u53d6\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.7.0")))),(0,l.kt)("h2",{id:"nacos-java-client"},"Nacos Java Client"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u7684\u53c2\u6570\u5206\u4e3a\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u901a\u8fc7-D\u53c2\u6570\u8fdb\u884c\u6307\u5b9a\u7684\u914d\u7f6e\uff0c\u4e00\u79cd\u662f\u6784\u9020\u5ba2\u6237\u7aef\u65f6\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Properties"),"\u5bf9\u8c61\u6307\u5b9a\u7684\u914d\u7f6e\uff0c\u4ee5\u4e0b\u6ca1\u6709\u5e26-D\u6807\u6ce8\u7684\u90fd\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Properties"),"\u6ce8\u5165\u7684\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"\u901a\u7528\u53c2\u6570"},"\u901a\u7528\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5Nacos Server\u6307\u5b9a\u7684\u8fde\u63a5\u70b9\uff0c\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"https://nacos.io/zh-cn/blog/address-server.html"},"\u6587\u6863")),(0,l.kt)("td",{parentName:"tr",align:null},"\u57df\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpointPort"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5Nacos Server\u6307\u5b9a\u7684\u8fde\u63a5\u70b9\u7aef\u53e3\uff0c\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"https://nacos.io/zh-cn/blog/address-server.html"},"\u6587\u6863")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5408\u6cd5\u7aef\u53e3\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4\u7684ID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4\u7684ID"),(0,l.kt)("td",{parentName:"tr",align:null},"config\u6a21\u5757\u4e3a\u7a7a\uff0cnaming\u6a21\u5757\u4e3apublic"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.8.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serverAddr"),(0,l.kt)("td",{parentName:"tr",align:null},"Nacos Server\u7684\u5730\u5740\u5217\u8868\uff0c\u8fd9\u4e2a\u503c\u7684\u4f18\u5148\u7ea7\u6bd4endpoint\u9ad8"),(0,l.kt)("td",{parentName:"tr",align:null},"ip:port,ip:port,..."),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JM.LOG.PATH(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u65e5\u5fd7\u7684\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u5f55\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6839\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},">= 0.1.0")))),(0,l.kt)("h3",{id:"naming\u5ba2\u6237\u7aef"},"Naming\u5ba2\u6237\u7aef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namingLoadCacheAtStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u65f6\u662f\u5426\u4f18\u5148\u8bfb\u53d6\u672c\u5730\u7f13\u5b58"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namingCacheRegistryDir"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7f13\u5b58\u5b50\u76ee\u5f55\uff0c\u4f4d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},".../nacos/{SUB_DIR}/naming")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u76ee\u5f55\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},">=2.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namingClientBeatThreadCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5fc3\u8df3\u7684\u7ebf\u7a0b\u6c60\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u673a\u5668\u7684CPU\u6570\u7684\u4e00\u534a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namingPollingThreadCount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5b9a\u65f6\u8f6e\u8be2\u6570\u636e\u66f4\u65b0\u7684\u7ebf\u7a0b\u6c60\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u673a\u5668\u7684CPU\u6570\u7684\u4e00\u534a"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.naming.cache.dir(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u7f13\u5b58\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u5f55\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{user.home}/nacos/naming")),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.naming.log.level(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"Naming\u5ba2\u6237\u7aef\u7684\u65e5\u5fd7\u7ea7\u522b"),(0,l.kt)("td",{parentName:"tr",align:null},"info,error,warn\u7b49"),(0,l.kt)("td",{parentName:"tr",align:null},"info"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.client.naming.tls.enable(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6253\u5f00HTTPS"),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.0")))),(0,l.kt)("h3",{id:"config\u5ba2\u6237\u7aef"},"Config\u5ba2\u6237\u7aef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configLongPollTimeout(config.long-poll.timeout 1.0.1\u7248\u672c)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u957f\u8f6e\u8be2\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configRetryTime(config.retry.time 1.0.1\u7248\u672c)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u957f\u8f6e\u8be2\u4efb\u52a1\u91cd\u8bd5\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"2000"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxRetry"),(0,l.kt)("td",{parentName:"tr",align:null},"\u957f\u8f6e\u8be2\u7684\u91cd\u8bd5\u6b21\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b63\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableRemoteSyncConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u5668\u9996\u6b21\u6dfb\u52a0\u65f6\u62c9\u53d6\u8fdc\u7aef\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e03\u5c14\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.config.log.level(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"Config\u5ba2\u6237\u7aef\u7684\u65e5\u5fd7\u7ea7\u522b"),(0,l.kt)("td",{parentName:"tr",align:null},"info,error,warn\u7b49"),(0,l.kt)("td",{parentName:"tr",align:null},"info"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JM.SNAPSHOT.PATH(-D)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u7f13\u5b58\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u5f55\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"{user.home}/nacos/config"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0.0")))))}N.isMDXComponent=!0}}]);