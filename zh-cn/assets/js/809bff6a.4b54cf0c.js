"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[7332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,l(l({ref:t},g),{},{components:n})):a.createElement(h,l({ref:t},g))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},l="Nacos 1.2.0 \u6743\u9650\u63a7\u5236\u4ecb\u7ecd\u548c\u4f7f\u7528",o={permalink:"/zh-cn/blog/nacos 1.2.0 guide",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/nacos 1.2.0 guide.md",title:"Nacos 1.2.0 \u6743\u9650\u63a7\u5236\u4ecb\u7ecd\u548c\u4f7f\u7528",description:"\u65b9\u6848\u80cc\u666f",date:"2023-10-10T11:24:40.000Z",formattedDate:"2023\u5e7410\u670810\u65e5",tags:[],readingTime:11.835,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Nacos 1.1.4\u53d1\u5e03\uff0c\u4e1a\u754c\u7387\u5148\u652f\u6301Istio MCP\u534f\u8bae",permalink:"/zh-cn/blog/nacos 1.1.4"},nextItem:{title:"Nacos 1.3.0 \u5168\u65b0\u5185\u6838\u6784\u5efa\u8fc7\u7a0b",permalink:"/zh-cn/blog/nacos-1.3.0-design"}},s={authorsImageUrls:[]},p=[{value:"\u9274\u6743\uff08Authorization\uff09",id:"\u9274\u6743authorization",level:4}],g={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"bc2d5709"}),"# Nacos\u6743\u9650\u63a7\u5236\u8bbe\u8ba1\u65b9\u6848",(0,i.kt)("a",{name:"If4qS"}),"## \u65b9\u6848\u80cc\u666f Nacos\u81ea\u5f00\u6e90\u4f9d\u8d56\uff0c\u6743\u9650\u63a7\u5236\u4e00\u76f4\u9700\u6c42\u6bd4\u8f83\u5f3a\u70c8\uff0c\u8fd9\u4e5f\u53cd\u5e94\u4e86\u7528\u6237\u9700\u6c42\u5c06Nacos\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u7684\u9700\u6c42\u3002\u6700\u65b0\u53d1\u5e03\u7684Nacos 1.2.0\u7248\u672c\u5df2\u7ecf\u652f\u6301\u4e86\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236\uff0c\u4fdd\u969c\u7528\u6237\u5b89\u5168\u4e0a\u751f\u4ea7\u3002\u672c\u6587\u4e3b\u8981\u4ecb\u7ecdNacos\u6743\u9650\u63a7\u5236\u7684\u8bbe\u8ba1\u65b9\u6848\u548c\u4f7f\u7528\u6307\u5357\u3002",(0,i.kt)("a",{name:"YBdcs"}),"### \u4ec0\u4e48\u662f\u6743\u9650\u63a7\u5236\uff1f \u5728\u5206\u5e03\u5f0f\u670d\u52a1\u8c03\u7528\u65f6\uff0c\u9700\u8981\u5bf9\u672a\u77e5\u7684\u6216\u8005\u4e0d\u53d7\u4fe1\u4efb\u7684\u8bf7\u6c42\u6765\u6e90\u7684\u8bf7\u6c42\u8fdb\u884c\u8bc6\u522b\u548c\u62d2\u7edd\u3002\u6743\u9650\u63a7\u5236\u4e00\u822c\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a\u8eab\u4efd\u8bc6\u522b\uff08Authentication\uff09\u548c\u6743\u9650\u8bc6\u522b\uff08Authorization\uff09\u3002\u8eab\u4efd\u8ba4\u8bc1\u4e3b\u8981\u786e\u5b9a\u8bbf\u95ee\u8005\u7684\u8eab\u4efd\uff0c\u6743\u9650\u8bc6\u522b\u5219\u5224\u65ad\u8fd9\u4e2a\u8bbf\u95ee\u8005\u662f\u5426\u6709\u5bf9\u5e94\u8d44\u6e90\u7684\u6743\u9650\u3002",(0,i.kt)("p",null,"\u5728Nacos\u7684\u573a\u666f\u4e2d\uff0c\u914d\u7f6e\u7ba1\u7406\u7684\u6743\u9650\u63a7\u5236\u6307\u7684\u662f\u8bbe\u7f6e\u67d0\u4e2a\u914d\u7f6e\u80fd\u5426\u88ab\u67d0\u4e2a\u7528\u6237\u8bfb\u5199\uff0c\u8fd9\u4e2a\u6bd4\u8f83\u597d\u7406\u89e3\uff0c\u6ca1\u6709\u6743\u9650\u7684\u7528\u6237\u65e7\u65e0\u6cd5\u8bfb\u53d6\u6216\u8005\u5199\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u3002\u670d\u52a1\u53d1\u73b0\u7684\u6743\u9650\u63a7\u5236\u6307\u7684\u662f\u7528\u6237\u662f\u5426\u6709\u6743\u9650\u8fdb\u884c\u67d0\u4e2a\u670d\u52a1\u7684\u6ce8\u518c\u6216\u8005\u8ba2\u9605\uff0c\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\u670d\u52a1\u53d1\u73b0\u7684\u6743\u9650\u63a7\u5236\u53ea\u80fd\u591f\u63a7\u5236\u7528\u6237\u662f\u5426\u53ef\u4ee5\u4eceNacos\u83b7\u53d6\u5230\u670d\u52a1\u7684\u5730\u5740\u6216\u8005\u5728Nacos\u4e0a\u4fee\u6539\u670d\u52a1\u7684\u5730\u5740\u3002\u4f46\u662f\u5982\u679c\u5df2\u7ecf\u83b7\u53d6\u5230\u4e86\u670d\u52a1\u7684\u5730\u5740\uff0cNacos\u65e0\u6cd5\u5728\u670d\u52a1\u771f\u6b63\u8c03\u7528\u65f6\u8fdb\u884c\u6743\u9650\u63a7\u5236\uff0c\u8fd9\u4e2a\u65f6\u5019\u7684\u6743\u9650\u63a7\u5236\u9700\u8981\u7531\u670d\u52a1\u6846\u67b6\u6765\u5b8c\u6210\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1576216016307-2da56934-917f-46ec-b3eb-a221bc91a9e0.png#align=left&display=inline&height=240&name=image.png&originHeight=480&originWidth=1904&size=271408&status=done&style=none&width=952#align=left&display=inline&height=480&originHeight=480&originWidth=1904&status=done&style=none&width=1904",alt:"image.png"})),(0,i.kt)("a",{name:"TvavD"}),"### \u5e38\u89c1\u5b9e\u73b0\u65b9\u5f0f",(0,i.kt)("a",{name:"xDBnq"}),"#### \u8ba4\u8bc1\uff08Authentication\uff09",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d+\u5bc6\u7801"),(0,i.kt)("li",{parentName:"ul"},"Cookie\uff08\u53ea\u9002\u7528\u4e8e\u6d4f\u89c8\u5668\uff09"),(0,i.kt)("li",{parentName:"ul"},"Session"),(0,i.kt)("li",{parentName:"ul"},"Token\uff08JWT\uff0cOauth\uff0cLDAP\uff0cSAML\uff0cOpenID\uff09"),(0,i.kt)("li",{parentName:"ul"},"AK/SK",(0,i.kt)("a",{name:"vqrqi"}))),(0,i.kt)("h4",{id:"\u9274\u6743authorization"},"\u9274\u6743\uff08Authorization\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ACL\uff1a \u89c4\u5b9a",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u6e90"),"\u53ef\u4ee5\u88ab\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u4f53"),"\u8fdb\u884c\u54ea\u4e9b\u64cd\u4f5c\uff1b"),(0,i.kt)("li",{parentName:"ul"},"DAC\uff1a \u89c4\u5b9a",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u6e90"),"\u53ef\u4ee5\u88ab\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u4f53"),"\u8fdb\u884c\u54ea\u4e9b\u64cd\u4f5c\xa0\u540c\u65f6\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u4f53"),"\u53ef\u4ee5\u5c06",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u6e90"),"\u7684\u6743\u9650\uff0c\u6388\u4e88\u5176\u4ed6",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u4f53"),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},"MAC\uff1aa. \u89c4\u5b9a",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u6e90"),"\u53ef\u4ee5\u88ab\u54ea\u4e9b\u7c7b\u522b\u7684",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u4f53"),"\u8fdb\u884c\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u64cd\u4f5c")," b. \u89c4\u5b9a",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u4f53"),"\u53ef\u4ee5\u5bf9\u54ea\u4e9b\u7b49\u7ea7\u7684",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u6e90"),"\u8fdb\u884c\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u64cd\u4f5c")," \u5f53\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"li"},"\u64cd\u4f5c"),"\uff0c\u540c\u65f6\u6ee1\u8db3a\u4e0eb\u65f6\uff0c\u5141\u8bb8",(0,i.kt)("strong",{parentName:"li"},"\u64cd\u4f5c"),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},"RBAC\uff1a a. \u89c4\u5b9a",(0,i.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u53ef\u4ee5\u5bf9\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u6e90"),"\u8fdb\u884c\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u64cd\u4f5c")," b. \u89c4\u5b9a",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u4f53"),"\u62e5\u6709\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u5f53\u4e00\u4e2a\u64cd\u4f5c\uff0c\u540c\u65f6\u6ee1\u8db3a\u4e0eb\u65f6\uff0c\u5141\u8bb8",(0,i.kt)("strong",{parentName:"li"},"\u64cd\u4f5c"),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},"ABAC\uff1a \u89c4\u5b9a\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u5c5e\u6027"),"\u7684",(0,i.kt)("strong",{parentName:"li"},"\u4e3b\u4f53"),"\u53ef\u4ee5\u5bf9\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u5c5e\u6027"),"\u7684",(0,i.kt)("strong",{parentName:"li"},"\u8d44\u6e90"),"\u5728\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u5c5e\u6027"),"\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u54ea\u4e9b",(0,i.kt)("strong",{parentName:"li"},"\u64cd\u4f5c"),"\u3002")),(0,i.kt)("a",{name:"liyG7"}),"## \u65b9\u6848\u8be6\u60c5 Nacos\u7684\u6743\u9650\u63a7\u5236\uff0c\u76ee\u6807\u662f\u80fd\u591f\u6ee1\u8db3\u7528\u6237\u57fa\u672c\u7684\u9274\u6743\u9700\u6c42\uff0c\u540c\u65f6\u80fd\u591f\u4fdd\u6301\u6269\u5c55\u6027\uff0c\u53ef\u4ee5\u652f\u6301\u53bb\u5bf9\u63a5\u7528\u6237\u81ea\u5e26\u7684\u7528\u6237\u7ba1\u7406\u7cfb\u7edf\u6216\u8005\u9274\u6743\u7cfb\u7edf\uff0c\u5305\u62ec\u540e\u9762\u548cK8S\u751f\u6001\u4ee5\u53caService Mesh\u751f\u6001\u80fd\u591f\u65e0\u7f1d\u7684\u878d\u5408\u3002\u57fa\u4e8e\u8fd9\u6837\u7684\u8003\u8651\uff0c\u76ee\u524dNacos\u6743\u9650\u63a7\u5236\u7684\u8bbe\u8ba1\u662f\u81ea\u5e26\u4e00\u4e2a\u57fa\u672c\u7684\u5b9e\u73b0\uff0c\u7136\u540e\u53ef\u4ee5\u652f\u6301\u7528\u6237\u6269\u5c55\u3002\u5177\u4f53\u7684\u8bbe\u8ba1\u5982\u4e0b\u3002",(0,i.kt)("a",{name:"H0kp9"}),"### \u6a21\u5757\u8bbe\u8ba1 \u6574\u4f53\u7684\u6a21\u5757\u8bbe\u8ba1\u662f\u5c3d\u91cf\u5c06\u9274\u6743\u7684\u903b\u8f91\u62bd\u8c61\u51fa\u6765\uff0c\u4e0d\u5728\u670d\u52a1\u53d1\u73b0\u6a21\u5757\u6216\u8005\u914d\u7f6e\u7ba1\u7406\u6a21\u5757\u6dfb\u52a0\u76f8\u5173\u7684\u903b\u8f91\u3002\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u9009\u62e9\u5f53\u524d\u4f7f\u7528\u7684\u9274\u6743\u7cfb\u7edf\u3002Nacos\u81ea\u5e26\u7684\u8ba4\u8bc1\u7cfb\u7edf\u4f7f\u7528JWT Token\uff0c\u81ea\u5e26\u7684\u9274\u6743\u7cfb\u7edf\u4f7f\u7528\u7684\u662fRBAC\u3002",(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1576219027093-45345003-c583-46ec-a161-01b5f4b3ff47.png#align=left&display=inline&height=450&name=image.png&originHeight=900&originWidth=1744&size=699757&status=done&style=none&width=872#align=left&display=inline&height=900&originHeight=900&originWidth=1744&status=done&style=none&width=1744",alt:"image.png"})),(0,i.kt)("a",{name:"jeLdT"}),"### \u8ba4\u8bc1\u7b97\u6cd5 \u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\uff0c\u4e0d\u7ba1\u662f\u5728\u63a7\u5236\u53f0\u8fd8\u662f\u5728\u5ba2\u6237\u7aef\uff0c\u90fd\u662f\u4e0a\u4f20\u7528\u6237\u540d\u548c\u5bc6\u7801\u6765\u83b7\u53d6\u4e00\u4e2atoken\uff0c\u7136\u540e\u540e\u7eed\u7684\u6bcf\u4e00\u6b21\u5230Nacos\u7684\u8bf7\u6c42\u90fd\u4f1a\u5e26\u4e0a\u8fd9\u4e2atoken\u6765\u8868\u660e\u8eab\u4efd\u3002\u8fd9\u4e2atoken\u4f1a\u6709\u4e00\u4e2a\u5931\u6548\u65f6\u95f4\uff0c\u5bf9\u4e8e\u63a7\u5236\u53f0\u6765\u8bf4\uff0c\u53ea\u9700\u8981\u76f4\u63a5\u63d0\u793a\u7528\u6237\u91cd\u65b0\u767b\u5f55\u5373\u53ef\uff0c\u5bf9\u4e8e\u5ba2\u6237\u7aef\u5219\u9700\u8981\u6709\u4e00\u4e2a\u5b9a\u671f\u5230Nacos\u5237\u65b0token\u7684\u903b\u8f91\u3002",(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1576219050917-51013ce2-49f3-4a86-b5f9-bd07fc88f8e8.png#align=left&display=inline&height=368&name=image.png&originHeight=736&originWidth=1718&size=575605&status=done&style=none&width=859#align=left&display=inline&height=736&originHeight=736&originWidth=1718&status=done&style=none&width=1718",alt:"image.png"})),(0,i.kt)("a",{name:"vSB1T"}),"### \u9274\u6743\u7b97\u6cd5 Nacos\u81ea\u5e26\u7684\u9274\u6743\u7cfb\u7edf\u4f7f\u7528\u7684\u662fRBAC\u6a21\u578b\uff0c\u53ef\u4ee5\u5728\u7f51\u4e0a\u67e5\u8be2\u76f8\u5173\u7684\u8d44\u6599\u3002",(0,i.kt)("a",{name:"RZZGa"}),"#### \u6570\u636e\u6a21\u578b \u9274\u6743\u7684\u6570\u636e\u6a21\u578b\u4e5f\u662f\u57fa\u4e8e\u6807\u51c6\u7684RBAC\u6765\u8bbe\u8ba1\u7684\uff0c\u5206\u4e3a\u7528\u6237\u3001\u89d2\u8272\u548c\u6743\u9650\u4e09\u90e8\u5206\u3002\u7528\u6237\u5c31\u662f\u7531\u7528\u6237\u540d\u548c\u5bc6\u7801\u7ec4\u6210\u7684\u7528\u6237\u4fe1\u606f\uff0c\u89d2\u8272\u5219\u662f\u4e00\u4e2a\u903b\u8f91\u4e0a\u7684\u7528\u6237\u7ec4\uff0cNacos\u542f\u52a8\u65f6\u4f1a\u81ea\u5e26\u4e00\u4e2a\u5168\u5c40\u7ba1\u7406\u5458\u7684\u89d2\u8272\uff0c\u53ea\u6709\u8fd9\u4e2a\u5168\u5c40\u7ba1\u7406\u5458\u7684\u89d2\u8272\u53ef\u4ee5\u8fdb\u884c\u6dfb\u52a0\u7528\u6237\u3001\u6dfb\u52a0\u89d2\u8272\u3001\u6dfb\u52a0\u6388\u6743\u7b49\u64cd\u4f5c\uff0c\u4fdd\u8bc1\u5b89\u5168\u6027\u3002\u800c\u6743\u9650\u5219\u662f\u7531\u8d44\u6e90+\u52a8\u4f5c\u6765\u7ec4\u6210\u3002",(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1576736418792-936a9d1a-5095-47fc-9f87-230abed38384.png#align=left&display=inline&height=451&name=image.png&originHeight=902&originWidth=1834&size=438246&status=done&style=none&width=917#align=left&display=inline&height=902&originHeight=902&originWidth=1834&status=done&style=none&width=1834",alt:"image.png"})),(0,i.kt)("a",{name:"0bd4753c"}),"### \u63a5\u53e3\u8bbe\u8ba1 \u4ee5\u4e0b\u63a5\u53e3\u6d89\u53ca\u5230\u767b\u5f55\u548c\u9274\u6743\u7684\u6240\u6709\u903b\u8f91\uff0c\u8fd9\u4e9b\u63a5\u53e3\u9664\u4e86\u767b\u5f55\u63a5\u53e3\uff0c\u5176\u4ed6\u63a5\u53e3\u90fd\u53ea\u80fd\u7531\u5168\u5c40\u7ba1\u7406\u5458\u6765\u8c03\u7528\u3002",(0,i.kt)("a",{name:"7d94de1c"}),"#### \u7528\u6237\u7ba1\u7406",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7528\u6237\uff1aPOST",(0,i.kt)("br",null),"\n/nacos/v1/auth/users?username=xx&password=yy"),(0,i.kt)("li",{parentName:"ul"},"\u5220\u9664\u7528\u6237\uff1aDELETE /nacos/v1/auth/users?username=xx&password=yy"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u7528\u6237\uff1aPUT /nacos/v1/auth/users?username=xx&oldPassword=yy&newPassword=zz"),(0,i.kt)("li",{parentName:"ul"},"\u767b\u5f55\uff1aPOST",(0,i.kt)("br",null),"\n/nacos/v1/auth/users/login?username=xxx&password=yyy")),(0,i.kt)("a",{name:"3f856ec2"}),"#### \u89d2\u8272\u7ba1\u7406",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u89d2\u8272/\u7ed1\u5b9a\u7528\u6237\u5230\u89d2\u8272\uff1aPOST /nacos/v1/auth/roles?role=xx&username=yy"),(0,i.kt)("li",{parentName:"ul"},"\u5220\u9664\u67d0\u4e2a\u7528\u6237\u7684\u89d2\u8272\uff1aDELETE /nacos/v1/auth/roles?role=xx&username=yy"),(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7528\u6237\u7684\u6240\u6709\u89d2\u8272\uff1aGET /nacos/v1/auth/roles?username=xxx")),(0,i.kt)("a",{name:"23bbdd59"}),"#### \u6743\u9650\u7ba1\u7406",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ed9\u89d2\u8272\u6dfb\u52a0\u6743\u9650\uff1aPOST /nacos/v1/auth/permissions?role=xxx&resource=yyy&action=zzz"),(0,i.kt)("li",{parentName:"ul"},"\u4ece\u89d2\u8272\u5220\u9664\u6743\u9650\uff1aDELETE /nacos/v1/auth/permissions?role=xxx&resource=yyy&action=zzz"),(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u67d0\u4e2a\u89d2\u8272\u7684\u6743\u9650\uff1aGET /nacos/v1/auth/permissions?role=xxx")),(0,i.kt)("a",{name:"4Hil5"}),"# Nacos\u6743\u9650\u63a7\u5236\u5b9e\u6218",(0,i.kt)("a",{name:"TWc9w"}),"## \u5b89\u88c5Nacos 1.2.0",(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u5305\u51c6\u5907\u3002\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u5b89\u88c5\u5305\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/releases/tag/1.2.0"},"https://github.com/alibaba/nacos/releases/tag/1.2.0"),"\uff0c\u4e5f\u53ef\u4ee5\u5c06Nacos master\u5206\u652fclone\u4e0b\u6765\u8fdb\u884c\u6e90\u7801\u7f16\u8bd1\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn -Prelease-nacos -Dmaven.test.skip=true clean install -U\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5305\u89e3\u538b\uff0c\u7136\u540e\u4f7f\u7528distribution/nacos-mysql.sql\u8fdb\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\uff0c\u4e3b\u8981\u662f\u65b0\u589e\u4e86users, roles, permissions\u4e09\u5f20\u8868\uff0cstandalone\u6a21\u5f0f\u4f7f\u7528distribution/schema.sql\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,i.kt)("li",{parentName:"ol"},"Server\u7aef\u6253\u5f00\u6743\u9650\u63a7\u5236\u5f00\u5173\u3002\u4fee\u6539con/application.properties\u5185\u5bb9\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"nacos.core.auth.enabled=true\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5f00\u5173\u91c7\u7528\u4e86\u70ed\u52a0\u8f7d\u6a21\u5f0f\uff0c\u65e0\u9700\u91cd\u542fServer\u5373\u53ef\u751f\u6548\u3002\u56e0\u6b64\u5f53\u6743\u9650\u63a7\u5236\u529f\u80fd\u4f7f\u7528\u6709\u5f02\u5e38\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u56de\u6eda\u5230\u4e0d\u9274\u6743\u7684\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," Nacos 1.2.0\u91cc\u767b\u5f55\u548c\u9274\u6743\u662f\u7ed1\u5b9a\u5173\u7cfb\uff0c\u800c\u7531\u4e8e\u8fd9\u4e2a\u5f00\u5173\u7684\u9ed8\u8ba4\u503c\u4e3afalse\uff0c\u56e0\u6b64\u9ed8\u8ba4\u542f\u52a8\u65f6\uff0c\u662f\u6ca1\u6709\u767b\u5f55\u754c\u9762\u7684\uff0c\u8fd9\u70b9\u8bf7\u8bfb\u8005\u6ce8\u610f\u3002"),(0,i.kt)("a",{name:"xBJZi"}),"## \u4f7f\u7528\u6743\u9650\u63a7\u5236",(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7ba1\u7406\u5458\u8d26\u53f7\u767b\u5f55Nacos\u63a7\u5236\u53f0\uff08\u5982\u679c\u9875\u9762\u63d0\u793a\u9519\u8bef\uff0c\u53ef\u4ee5\u6e05\u7a7a\u6d4f\u89c8\u5668\u7f13\u5b58\u5237\u65b0\u9875\u9762\uff09\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/333810/1580890674563-4d235fd9-983c-4b03-b45c-b1e164152ac7.png#align=left&display=inline&height=470&name=image.png&originHeight=940&originWidth=2870&size=274455&status=done&style=none&width=1435#align=left&display=inline&height=940&originHeight=940&originWidth=2870&status=done&style=none&width=2870",alt:"image.png"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5de6\u4fa7\u8fb9\u680f\u589e\u52a0\u4e86\u4e00\u4e2a\u7236\u83dc\u5355\u548c\u4e09\u4e2a\u5b50\u83dc\u5355\uff0c\u5206\u522b\u7528\u4e8e\u6743\u9650\u63a7\u5236\u91cc\u7684\u7528\u6237\u521b\u5efa\u3001\u89d2\u8272\u521b\u5efa\u4ee5\u53ca\u6743\u9650\u7ba1\xa0 \xa0 \xa0 \xa0 \xa0\u7406\u3002\u8fd9\u4e2a\u83dc\u5355\u680f\u53ea\u4f1a\u5728\u7ba1\u7406\u5458\u767b\u5f55\u7684\u65f6\u5019\u663e\u793a\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u53ea\u6709\u7ba1\u7406\u5458\u624d\u80fd\u8fdb\u884c\u6743\u9650\u7684\u7ba1\u7406\u548c\u5206\u914d\u3002"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u7528\u6237\u3002\u70b9\u51fb\u201c\u7528\u6237\u5217\u8868\u201d\uff0c\u8fdb\u5165\u7528\u6237\u7ba1\u7406\u9875\u9762\uff0c\u53ef\u4ee5\u8fdb\u884c\u7528\u6237\u7684\u521b\u5efa\u3001\u4fee\u6539\u548c\u5220\u9664\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/333810/1580890674569-a729854e-a72d-4b3b-bc4c-53f9df831f3e.png#align=left&display=inline&height=573&name=image.png&originHeight=1146&originWidth=2872&size=349203&status=done&style=none&width=1436#align=left&display=inline&height=1146&originHeight=1146&originWidth=2872&status=done&style=none&width=2872",alt:"image.png"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u89d2\u8272\u3002\u56e0\u4e3aNacos\u7684\u81ea\u5e26\u7684\u6743\u9650\u662f\u57fa\u4e8e\u89d2\u8272\u6765\u8fdb\u884c\u5206\u914d\u7684\uff0c\u56e0\u6b64\u9700\u8981\u7ed9\u521b\u5efa\u597d\u7684\u7528\u6237\u7ed1\u5b9a\u4e00\u4e9b\u89d2\u8272\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/333810/1580890674603-f69520a1-f53e-4eb7-9186-f2963e7b3d65.png#align=left&display=inline&height=545&name=image.png&originHeight=1090&originWidth=2874&size=346611&status=done&style=none&width=1437#align=left&display=inline&height=1090&originHeight=1090&originWidth=2874&status=done&style=none&width=2874",alt:"image.png"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u6743\u9650\u3002\u89d2\u8272\u521b\u5efa\u597d\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u7ed9\u8fd9\u4e2a\u89d2\u8272\u8d4b\u4e88\u7279\u5b9a\u7684\u6743\u9650\u4e86\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/333810/1580890674580-e22945e1-be3a-46bd-b8f3-11b38eee0786.png#align=left&display=inline&height=581&name=image.png&originHeight=1162&originWidth=2876&size=368264&status=done&style=none&width=1438#align=left&display=inline&height=1162&originHeight=1162&originWidth=2876&status=done&style=none&width=2876",alt:"image.png"})),(0,i.kt)("p",null,"\u5728\u201c\u6dfb\u52a0\u8d44\u6e90\u201d\u5bf9\u8bdd\u6846\u91cc\uff0c\u53ef\u4ee5\u9009\u62e9\u7ed1\u5b9a\u7684\u89d2\u8272\uff0c\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u4ee5\u53ca\u5bf9\u5e94\u7684\u52a8\u4f5c\u7c7b\u578b\uff0c\u4f8b\u5982\u5728\u4e0a\u56fe\u4e2d\uff0c\u6211\u4eec\u7ed9\u89d2\u8272role1\u7ed1\u5b9a\u547d\u540d\u7a7a\u95f4test\u7684\u8bfb\u5199\u6743\u9650\u3002\u7136\u540e\u53c8\u56e0\u4e3a\u521a\u521a\u6211\u4eec\u662f\u5c06user1\u7ed1\u5b9a\u5230\u4e86role1\u4e0a\uff0c\u90a3\u4e48user1\u8fd9\u4e2a\u7528\u6237\u5c31\u53ef\u4ee5\u5bf9test\u8fd9\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u8d44\u6e90\u8fdb\u884c\u8bfb\u5199\u64cd\u4f5c\u4e86\u3002"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528user1\u767b\u5f55\u63a7\u5236\u53f0\u3002\u70b9\u51fb\u63a7\u5236\u53f0\u53f3\u4e0a\u89d2\uff0c\u9000\u51faadmin\u8d26\u53f7\uff0c\u7136\u540e\u7528\u521a\u624d\u521b\u5efa\u7684user1\u8fdb\u884c\u767b\u5f55\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/333810/1580890674574-ca6eee1f-b749-4275-897d-ab9fba0ebf80.png#align=left&display=inline&height=449&name=image.png&originHeight=898&originWidth=2874&size=340563&status=done&style=none&width=1437#align=left&display=inline&height=898&originHeight=898&originWidth=2874&status=done&style=none&width=2874",alt:"image.png"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u9996\u5148\u662f\u5de6\u4fa7\u7684\u6743\u9650\u7ba1\u7406\u83dc\u5355\u6d88\u5931\u4e86\uff0c\u56e0\u4e3a\u5f53\u524d\u7528\u6237\u4e0d\u662f\u7ba1\u7406\u5458\u3002\u5176\u6b21\u662f\u4f1a\u5f39\u51fa\u4e00\u4e2a\u9274\u6743\u5931\u8d25\u7684\u63d0\u793a\u6846\u3002\u4e0d\u7528\u62c5\u5fc3\uff0c\u8fd9\u4e2a\u63d0\u793a\u6846\u610f\u601d\u662fuser1\u6ca1\u6709public\u547d\u540d\u7a7a\u95f4\u7684\u8bfb\u6743\u9650\uff0c\u6240\u4ee5\u4f1a\u5f39\u51fa\uff0c\u4f46\u662f\u4e0d\u5f71\u54cd\u6211\u4eec\u5c06\u547d\u540d\u7a7a\u95f4\u5207\u6362\u5230test\uff1a",(0,i.kt)("br",null),(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/333810/1580890674621-bc16b2ad-4a9e-4ebc-83e8-fa41f4a0cba4.png#align=left&display=inline&height=536&name=image.png&originHeight=1072&originWidth=2876&size=554716&status=done&style=none&width=1438#align=left&display=inline&height=1072&originHeight=1072&originWidth=2876&status=done&style=none&width=2876",alt:"image.png"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230test\u547d\u540d\u7a7a\u95f4\u7684\u914d\u7f6e\u6570\u636e\u4e86\uff0c\u4e0b\u9762\u6211\u4eec\u518d\u6765\u4ecb\u7ecd\u5ba2\u6237\u7aef\u7684\u4f7f\u7528\u3002"),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\u4f9d\u8d56\u6700\u65b0\u7684nacos 1.2.0\u5ba2\u6237\u7aef\uff0c\u7136\u540e\u5728\u521d\u59cb\u5316\u65f6\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Properties properties = new Properties();\nproperties.put(PropertyKeyConst.NAMESPACE, "99a791cf-41c4-4535-9e93-b0141652bad0");\nproperties.put(PropertyKeyConst.SERVER_ADDR, "127.0.0.1:8848");\n// \u914d\u7f6e\u7528\u6237\u540d\uff1a\nproperties.put(PropertyKeyConst.USERNAME, "user1");\n// \u914d\u7f6e\u5bc6\u7801\uff1a\nproperties.put(PropertyKeyConst.PASSWORD, "pwd1");\nConfigService iconfig = NacosFactory.createConfigService(properties);\n')),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5ba2\u6237\u7aef\u8fdb\u884c\u6b63\u5e38\u7684\u8bfb\u5199\u914d\u7f6e\u64cd\u4f5c\u3002")),(0,i.kt)("a",{name:"8eF0X"}),"# \u6211\u4eec\u5728\u62db\u4eba \u963f\u91cc\u5df4\u5df4\u4e91\u539f\u751f\u57fa\u7840\u6280\u672f\u4e2d\u53f0\u662f\u96b6\u5c5e\u4e8e\u963f\u91cc\u4e91\u57fa\u7840\u4ea7\u54c1\u4e8b\u4e1a\u90e8\u7684\u6838\u5fc3\u7814\u53d1\u56e2\u961f\uff0c\u81f4\u529b\u4e8e\u6253\u9020\u7a33\u5b9a\u3001\u6807\u51c6\u3001\u5148\u8fdb\u7684\u4e91\u539f\u751f\u5e94\u7528\u57fa\u7840\u5e73\u53f0\uff0c\u63a8\u52a8\u884c\u4e1a\u9762\u5411\u4e91\u539f\u751f\u6280\u672f\u5347\u7ea7\u4e0e\u9769\u547d\u3002\u5728\u8fd9\u91cc\uff0c\u4f60\u5c06\u4e0e\u6765\u81ea\u4e91\u8ba1\u7b97\u3001\u5927\u6570\u636e\u9886\u57df\u7684\u9876\u5c16\u6280\u672f\u4e13\u5bb6\u4eb2\u5bc6\u5408\u4f5c\uff0c\u5728\u5168\u7403\u72ec\u4e00\u65e0\u4e8c\u7684\u573a\u666f\u548c\u89c4\u6a21\u4e2d\u4ece\u4e8bKubernetes\u3001Service Mesh\u3001Serverless\u3001Open Application Model\uff08OAM\uff09\u3001Cloud Native Microservices\u3001OpenMessaging\u3001Event Streaming\u7b49\u4e91\u539f\u751f\u751f\u6001\u6838\u5fc3\u57fa\u7840\u6280\u672f\u53caApache Dubbo\u3001Apache RocketMQ\u3001Nacos\u3001Arthas\u7b49\u9876\u7ea7\u5f00\u6e90\u9879\u76ee\u7684\u7814\u53d1\u548c\u843d\u5730\u5de5\u4f5c\u3002\u5728\u6807\u6746\u7ea7\u7684\u5e73\u53f0\u4e0a\uff0c\u65e2\u670d\u52a1\u963f\u91cc\u5df4\u5df4\u5168\u7403\u7ecf\u6d4e\u4f53\uff0c\u66f4\u670d\u52a1\u5168\u4e16\u754c\u7684\u5f00\u53d1\u8005\u7528\u6237\u3002\u76ee\u524d\u5728\u62db\u8058\u6280\u672f\u4e13\u5bb6\u5c97\u4f4d\uff0c\u8be6\u60c5\u53ef\u53c2\u8003\uff1a[http://www.posterhr.com/html/CkgpBwD6f?from=timeline&isappinstalled=0](http://www.posterhr.com/html/CkgpBwD6f?from=timeline&isappinstalled=0)\uff08\u53ef\u4ee5\u76f4\u63a5\u6295\u9012\uff0c\u4e5f\u53ef\u4ee5\u5c06\u7b80\u5386\u76f4\u63a5\u53d1\u9001\u5230dungu.zpf#alibaba-inc.com\u3002#\u66ff\u6362\u4e3a@\uff09")}m.isMDXComponent=!0}}]);