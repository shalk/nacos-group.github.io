/*! For license information please see 265f8c6c.01e5205d.js.LICENSE.txt */
(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[9439,136,801,1492,3569],{1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(7294),s=n(2389);function a(e){let{children:t,fallback:n}=e;return(0,s.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},5138:(e,t,n)=>{"use strict";n.d(t,{$Q:()=>m,N$:()=>r,zx:()=>o,$_:()=>E,iR:()=>g});var i=n(7294),s=n(4184),a=n.n(s),c=n(1876);const l={type:"primary",link:"",target:"_self",customStyle:{}},o=function(e){return void 0===e&&(e=l),i.createElement("a",{className:a()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,c.Rg)(e.link,e.language),style:e.customStyle},e.children)},r=e=>i.createElement("div",{className:a()({bone:!0,[`bone-${e.type}`]:!0})}),m=e=>{const{text:t,img:n}=e,s=a()({bar:!0});return i.createElement("div",{className:s},i.createElement("div",{className:"bar-body"},i.createElement("img",{src:n,className:"front-img"}),i.createElement("div",{className:"bar-title"},i.createElement("span",null,t),i.createElement(r,{type:"light"})),i.createElement("img",{src:n,className:"back-img"})))};var u=n(3935);class d extends i.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,c.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=3;const t=this.container?.getBoundingClientRect().width,n=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:u.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&n&&(e=Math.floor(t/n)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:n}=this.state,s=i.Children.count(t),a=Math.ceil(s/n);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*a}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,s=[],a=i.Children.count(e),c=Math.ceil(a/n);for(let i=0;i<c;i++)s.push(Array.from(e).slice(i*n,(i+1)*n));return i.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},s.map(((e,t)=>i.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,s)=>i.createElement("div",{className:"slider-item",key:s},i.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*n+s}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,s=i.Children.count(e),c=Math.ceil(s/n),l=[];for(let o=0;o<c;o++)l.push(i.createElement("span",{key:o,className:a()({"slider-control-item":!0,"slider-control-item-active":o===t}),onClick:this.changeScreen.bind(this,o)}));return i.createElement("div",{className:"slider-control"},l)};render(){return i.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const g=d;i.Component;var h=n(5999),p=n(2263);const b={vision:{title:(0,h.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,h.I)({id:"homepage.footerVersionContent",message:"Nacos \u901a\u8fc7\u63d0\u4f9b\u7b80\u5355\u6613\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406\u7b49\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u5728\u79c1\u6709\u4e91\u3001\u6df7\u5408\u4e91\u6216\u8005\u516c\u6709\u4e91\u7b49\u6240\u6709\u4e91\u73af\u5883\u4e2d\uff0c\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\uff0c\u66f4\u5feb\u7684\u590d\u7528\u548c\u7ec4\u5408\u4e1a\u52a1\u670d\u52a1\uff0c\u66f4\u5feb\u7684\u4ea4\u4ed8\u5546\u4e1a\u521b\u65b0\u7684\u4ef7\u503c\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u8d62\u5f97\u5e02\u573a\u3002"})},documentation:{title:(0,h.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,h.I)({id:"homepage.footerDocListText1",message:"\u6982\u89c8"}),link:"/docs/what-is-nacos",target:""},{text:(0,h.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/quick-start",target:""},{text:(0,h.I)({id:"homepage.footerDocListText3",message:"\u5f00\u53d1\u8005\u6307\u5357"}),link:"/docs/contributing",target:""}]},resources:{title:(0,h.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,h.I)({id:"homepage.footerResourcesListText1",message:"\u793e\u533a"}),link:"/community",target:""},{text:(0,h.I)({id:"homepage.footerResourcesListText2",message:"\u4e91\u670d\u52a1 MSE"}),link:"//cn.aliyun.com/product/aliware/mse?spm=nacos-website.topbar.0.0.0",target:"_blank"},{text:(0,h.I)({id:"homepage.footerResourcesListText3",message:"\u4e91\u670d\u52a1 EDAS"}),link:"//www.aliyun.com/product/edas?source_type=nacos_pc_20181219",target:"_blank"}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Nacos`},E=e=>{const{logo:t}=e,{i18n:n}=(0,p.Z)(),s=n.currentLocale;return i.createElement("footer",{className:"footer-container"},i.createElement("div",{className:"footer-body"},i.createElement("img",{src:e.logo}),i.createElement("div",{className:"cols-container"},i.createElement("div",{className:"col col-12"},i.createElement("h3",null,b.vision.title),i.createElement("p",null,b.vision.content)),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,b.documentation.title),b.documentation.list.map(((e,t)=>i.createElement("dd",{key:t},i.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text)))))),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,b.resources.title),b.resources.list.map(((e,t)=>i.createElement("dd",{key:t},i.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text))))))),i.createElement("div",{className:"copyright"},i.createElement("span",null,b.copyright))))}},3015:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var i=n(7294),s=n(1876),a=n(1262);class c extends i.Component{constructor(e){super(e),this.state={img:e.contact?.img}}onMouseOver=()=>{this.setState({img:this.props.contact?.imgHover})};onMouseOut=()=>{this.setState({img:this.props.contact?.img})};render(){const{contact:e}=this.props,{img:t}=this.state;return i.createElement(a.Z,null,(()=>i.createElement("a",{className:"contact-item",href:(0,s.Rg)(e.link),rel:"noopener noreferrer",target:"_blank",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},i.createElement("img",{src:(0,s.Rg)(t)}),i.createElement("div",null,e.title))))}}const l=c},9946:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var i=n(7294),s=n(1876),a=n(1262);const c=e=>{const{contributor:t}=e,{img:n,title:c,content:l}=t||{};return i.createElement(a.Z,null,(()=>i.createElement("div",{className:"contributor-item"},i.createElement("img",{src:(0,s.Rg)(n)}),i.createElement("div",null,c),i.createElement("p",null,l))))}},4472:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var i=n(7294),s=n(1876),a=n(1262);const c=e=>{const{eco:t}=e;return i.createElement(a.Z,null,(()=>i.createElement("div",{className:"eco-item"},i.createElement("h4",null,t.title),i.createElement("p",null,t.content),i.createElement("div",{className:"tags"},t.tags.map(((e,t)=>i.createElement("a",{key:t,href:(0,s.Rg)(e.link),target:e.target||"_self",style:{background:e.bgColor}},e.text)))))))}},719:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var i=n(7294),s=n(1876),a=n(1262);const c=e=>{const{event:t}=e;return i.createElement(a.Z,null,(()=>i.createElement("div",{className:"event-card"},i.createElement("a",{href:(0,s.Rg)(t.link)},i.createElement("img",{src:`${t.img}`})),i.createElement("div",{className:"event-introduction"},i.createElement("h4",null,t.title),i.createElement("p",null,t.content),i.createElement("a",{href:(0,s.Rg)(t.link)},t.dateStr,i.createElement("img",{className:"arrow",src:"https://img.alicdn.com/imgextra/i4/O1CN01CWa2ug1T6YucJf3Ct_!!6000000002333-2-tps-16-26.png"}))))))}},6415:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var i=n(7294),s=n(5999),a=n(1262),c=n(5138),l=n(719),o=n(3015),r=n(9946),m=n(4472),u=n(7340),d=n(1876);const g={barText:(0,s.I)({id:"community.barText",message:"\u793e\u533a"}),events:{title:(0,s.I)({id:"community.eventsTitle",message:"\u4e8b\u4ef6 & \u65b0\u95fb"}),list:[{img:"https://img.alicdn.com/tfs/TB1qqkLKxnaK1RjSZFBXXcW7VXa-1830-982.png",title:"\u53cc\u5341\u4e00\u732e\u793c | Nacos Star\u7834\u4e24\u4e07\u7684\u56de\u987e\u4e0e\u5c55\u671b",dateStr:"Nov 3, 2021",content:"Nacos Github Star\u6570\u7a81\u7834\u4e24\u4e07\uff0c\u4ece18\u5e74\u5f00\u59cb\u5f00\u6e90\u53d7\u5230\u5927\u5bb6\u7684\u666e\u904d\u5173\u6ce8\uff0c\u501f\u6b64\u673a\u4f1a\u5411\u5927\u5bb6\u56de\u987e\u4e00\u4e0bNacos\u7684\u53d1\u5c55\u548c\u540e\u7eed\u7684\u89c4\u5212\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u4e86\u89e3Nacos\u3002",link:"/blog/up-to-2w-star.html"},{img:"https://sino-cloud-base.oss-cn-hangzhou.aliyuncs.com/fileupload-develop/20210606/19a373eaefb44ec4d476a1dbbfce6489.jpg",title:"Nacos 2.0.1 + 1.4.2 \u53d1\u5e03,\u4e1a\u754c\u7387\u5148\u652f\u6301MCP-OVER-XDS\u534f\u8bae!",dateStr:"May 10, 2021",content:"Nacos 2.0.1 + 1.4.2 \u53d1\u5e03,\u5728\u4e1a\u754c\u5185\uff0c\u7387\u5148\u652f\u6301MCP-OVER-XDS\u534f\u8bae\uff0c\u66f4\u597d\u7684\u8df5\u884c\u63a7\u5236\u5e73\u9762\u548c\u6570\u636e\u5e73\u9762\u89e3\u8026\u7684\u67b6\u6784\uff0c\u5728Mesh\u9886\u57df\u4e2d\u4f1a\u5f97\u5230\u66f4\u5927\u89c4\u6a21\u5e94\u7528\u3002",link:"/blog/2.0.1-release.html"},{img:"https://img.alicdn.com/tfs/TB1i4ugBjDpK1RjSZFrXXa78VXa-1522-584.png",title:"\u864e\u7259\u76f4\u64ad\u5728\u5fae\u670d\u52a1\u6539\u9020\u65b9\u9762\u7684\u5b9e\u8df5\u548c\u603b\u7ed3",content:"\u6587\u7ae0\u6574\u7406\u81ea\u864e\u7259\u57fa\u7840\u4fdd\u969c\u90e8\u4e2d\u95f4\u4ef6\u56e2\u961f\u8d1f\u8d23\u4eba\u5f20\u6ce2\uff08\u793e\u533aID\uff1azhangjimmy\uff09\u5728Dubbo Meetup \u5e7f\u5dde\u7ad9\u6c99\u9f99\u4e0a\u7684\u5206\u4eab\uff0c\u4ecb\u7ecd\u864e\u7259\u5728DNS\u3001\u670d\u52a1\u6ce8\u518c\u3001CMDB\u548c\u670d\u52a1\u914d\u7f6e\u4e2d\u5fc3\u7b49\u65b9\u9762\u7684\u5b9e\u8df5\u3002",dateStr:"Feb 10\uff0c2019",link:"/blog/huya-practice.html"}]},contacts:{title:(0,s.I)({id:"community.contactsTitle",message:"\u8054\u7cfb\u6211\u4eec"}),desc:(0,s.I)({id:"community.contactsDesc",message:"\u6709\u95ee\u9898\u9700\u8981\u53cd\u9988\uff1f\u53ef\u4ee5\u4f18\u5148\u901a\u8fc7\u9489\u9489\u7fa4(1\u7fa4\u5df2\u6ee1\uff0c2\u7fa4\u7fa4\u53f7:30438813)\u8054\u7cfb\u6211\u4eec\uff0c\u6216\u8005\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u53c2\u4e0e\u6211\u4eec\u4e00\u8d77\u4e92\u52a8\u3002"}),list:[{img:"https://img.alicdn.com/imgextra/i3/O1CN018jYPjh1EwZeZ0x4Ir_!!6000000000416-2-tps-160-160.png",imgHover:"https://img.alicdn.com/imgextra/i4/O1CN017jnUKf1MHMwlRqS5W_!!6000000001409-2-tps-160-160.png",title:(0,s.I)({id:"community.contactsListTitle1",message:"\u90ae\u4ef6\u5217\u8868"}),link:"mailto:nacos_dev@linux.alibaba.com"},{img:"https://img.alicdn.com/imgextra/i1/O1CN010WA9R91tvZ1fQNaQt_!!6000000005964-2-tps-172-172.png",imgHover:"https://img.alicdn.com/imgextra/i1/O1CN01ZJTRpF21zhWvsfrOx_!!6000000007056-2-tps-172-172.png",title:(0,s.I)({id:"community.contactsListTitle2",message:"Gitter"}),link:"https://gitter.im/alibaba/nacos"},{img:"https://img.alicdn.com/imgextra/i3/O1CN01dMENDd1PMM6bEAWOM_!!6000000001826-2-tps-304-88.png",imgHover:"https://img.alicdn.com/imgextra/i3/O1CN01vhGiH71h5YfChGR07_!!6000000004226-2-tps-304-88.png",title:(0,s.I)({id:"community.contactsListTitle3",message:"segmentfault"}),link:"https://segmentfault.com/t/nacos"},{img:"https://img.alicdn.com/imgextra/i2/O1CN01u1oA5a1eWdEBcbsul_!!6000000003879-2-tps-164-172.png",imgHover:"https://img.alicdn.com/imgextra/i1/O1CN01eE6zkk1f96UzJlXtN_!!6000000003963-2-tps-164-172.png",title:(0,s.I)({id:"community.contactsListTitle4",message:"@Nacos"}),link:"https://weibo.com/u/6574374908"}]},contributorGuide:{title:(0,s.I)({id:"community.contributeTitle",message:"\u8d21\u732e\u6307\u5357"}),desc:(0,s.I)({id:"community.contributeDesc",message:"Nacos\u793e\u533a\u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8d21\u732e\u3002"}),list:[{img:"https://img.alicdn.com/imgextra/i3/O1CN018jYPjh1EwZeZ0x4Ir_!!6000000000416-2-tps-160-160.png",title:(0,s.I)({id:"community.contributeListTitle1",message:"\u90ae\u4ef6\u5217\u8868"}),content:i.createElement("span",null,i.createElement("a",{href:"mailto:nacos_dev@linux.alibaba.com",target:"_blank"},(0,s.I)({id:"community.contributeListContent1",message:"\u90ae\u4ef6\u5217\u8868"})))},{img:"https://img.alicdn.com/imgextra/i3/O1CN01HZvKBp1IWFLd5xG19_!!6000000000900-2-tps-160-160.png",title:(0,s.I)({id:"community.contributeListTitle2",message:"\u62a5\u544a\u7f3a\u9677"}),content:i.createElement("span",null,(0,s.I)({id:"community.contributeListContent2_1",message:"\u901a\u8fc7"}),i.createElement("a",{href:"https://github.com/alibaba/nacos/issues",target:"_blank"},"Github issues "),(0,s.I)({id:"community.contributeListContent2_2",message:"\u62a5\u544a\u7f3a\u9677\u3002"}))},{img:"https://img.alicdn.com/imgextra/i4/O1CN01bYb6VG1JUhd9wqL83_!!6000000001032-2-tps-160-160.png",title:(0,s.I)({id:"community.contributeListTitle3",message:"\u6587\u6863"}),content:i.createElement("span",null,(0,s.I)({id:"community.contributeListContent3_1",message:"\u4f18\u5316 Nacos"}),"\xa0",i.createElement("a",{href:"http://nacos.io/zh-cn/docs/what-is-nacos.html",target:"_blank"},(0,s.I)({id:"community.contributeListContent3_2",message:"\u6587\u6863"})))},{img:"https://img.alicdn.com/imgextra/i3/O1CN01wewhuB23ZFtOpVoZ1_!!6000000007269-2-tps-160-160.png",title:(0,s.I)({id:"community.contributeListTitle4",message:"Pull Request"}),content:i.createElement("span",null,(0,s.I)({id:"community.contributeListContent2_1",message:"\u63d0\u4ea4"}),i.createElement("a",{href:"https://github.com/alibaba/nacos/pulls",target:"_blank"},"Pull requests "),(0,s.I)({id:"community.contributeListContent2_2",message:"\u6765\u4fee\u590d\u95ee\u9898\u3002"}))}]},ecos:{title:(0,s.I)({id:"community.dubboTitle",message:"\u5f00\u6e90\u751f\u6001\u76f8\u5173"}),list:[{title:"Dubbo and Dubbo Mesh",content:i.createElement("span",null,(0,s.I)({id:"community.ecosListContent1",message:"Dubbo \u53caNacos\u662f\u963f\u91cc\u5df4\u5df4\u5927\u89c4\u6a21\u5fae\u670d\u52a1\u751f\u4ea7\u5b9e\u8df5\u4e2d\u7684\u7ecf\u5178\u7ec4\u5408\uff0c\u5bf9\u6bd4\u4f20\u7edf\u7684\u5982ZooKeeper\u7b49\u6ce8\u518c\u4e2d\u5fc3\u4e0e\u914d\u7f6e\u4e2d\u5fc3\u89e3\u51b3\u65b9\u6848\uff0c\u5728\u4f7f\u7528\u4e91\u539f\u751f\u53caServiceMesh\u8303\u5f0f\u6784\u5efa\u5fae\u670d\u52a1\u5e94\u7528\u5e73\u53f0\u65f6\uff0c\u901a\u8fc7\u5728Dubbo\u4e2d\u4f7f\u7528Nacos\uff0c\u53ef\u4ee5\u5b8c\u5168\u91ca\u653eDubbo\u5728\u5927\u89c4\u6a21\u5fae\u670d\u52a1\u6cbb\u7406\u3001\u6d41\u91cf\u7ba1\u7406\u3001\u670d\u52a1\u96c6\u6210\u53ca\u5171\u4eab\u4e0a\u7684\u6240\u6709\u5a01\u529b\u3002"})),tags:[{text:"Dubbo",link:"http://dubbo.io/",bgColor:"#7A63FC"},{text:"Dubbo Mesh",link:"http://dubbo.io/",bgColor:"#00D0D9"}]},{title:"Kubernetes and CNCF",content:i.createElement("span",null,(0,s.I)({id:"community.ecosListContent2",message:"Nacos \u652f\u6301Kubernetes \u4ee5\u53caCNCF\u6240\u9700\u8981\u7684\u670d\u52a1\u53d1\u73b0\u53ca\u52a8\u6001\u914d\u7f6e\u7ba1\u7406\u7684\u9700\u6c42\uff0cNacos\u53ef\u4ee5\u5b8c\u5168\u65e0\u7f1d\u7684\u66ff\u4ee3Kubernetes\u7684\u539f\u751f\u7684DNS-basedService Discovery \u89e3\u51b3\u65b9\u6848\uff0cNacos\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u670d\u52a1\u6cbb\u7406\u4fa7\u7684\u7279\u6027\uff0c\u8fd9\u5305\u62ec\u670d\u52a1\u7684\u57df\u540d\u7ba1\u7406\uff0c\u670d\u52a1\u5065\u5eb7\u53ca\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u6d41\u91cf\u7ba1\u7406\u53ca\u667a\u80fd\u8def\u7531\u7b56\u7565\u7ba1\u7406\u7b49\uff0cNacos\u4e5f\u589e\u5f3a\u4e86\u5bf9ConfigMap\u7684\u7ba1\u7406\uff0c\u8fd9\u5305\u62ec\u7248\u672c\u914d\u7f6e\u3001\u7070\u5ea6\u53d1\u5e03\u7b49\u3002"})),tags:[{text:"Kubernetes",link:"https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/",bgColor:"#7A63FC"},{text:"CNCF",link:"https://www.cncf.io/",bgColor:"#00D0D9"}]},{title:"Spring Cloud",content:i.createElement("span",null,(0,s.I)({id:"community.ecosListContent3",message:"Nacos \u5b8c\u5168\u517c\u5bb9\u548c\u65e0\u7f1d\u652f\u6301 Spring Cloud\u7684\u76f8\u5173API\u53ca\u4e3b\u8981\u76f8\u5173\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5c06Nacos\u4f5c\u4e3aSpringCloud ConfigServer\u7684\u914d\u7f6e\u670d\u52a1\u6216\u8005Eureka/Consul/ZooKeeper\u7b49\u7684\u670d\u52a1\u53d1\u73b0\u4ea7\u54c1\u7684\u66f4\u597d\u66ff\u4ee3\u8005\uff0cNacos\u5728\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u7ba1\u7406\u4e0a\u5e26\u6765\u4e86\u5f88\u591a\u9762\u5411\u751f\u4ea7\u53ca\u5fae\u670d\u52a1\u6cbb\u7406\u6240\u9700\u8981\u7684\u7279\u6027\u589e\u5f3a\u3002"})),tags:[{text:"Spring Cloud",link:"http://projects.spring.io/spring-cloud/",bgColor:"#7A63FC"},{text:"Microservice",link:"http://microservices.io/",bgColor:"#00D0D9"}]}]}};function h(){return i.createElement(a.Z,null,(()=>i.createElement(u.Z,{title:"Nacos",description:"Nacos Community"},i.createElement("div",{className:"community-page"},i.createElement(c.$Q,{img:(0,d.Rg)("https://img.alicdn.com/imgextra/i1/O1CN01Uhz05Y1cdNpuG58yE_!!6000000003623-2-tps-160-160.png"),text:g.barText}),i.createElement("section",{className:"events-section"},i.createElement("div",{className:"events-body"},i.createElement("h3",null,g.events.title),i.createElement(c.iR,null,g.events.list.map(((e,t)=>i.createElement(l.default,{event:e,key:t})))))),i.createElement("section",{className:"eco-section"},i.createElement("h3",null,g.ecos.title),i.createElement("div",{className:"eco-lists"},g.ecos.list.map(((e,t)=>i.createElement(m.default,{eco:e,key:t}))))),i.createElement("section",{className:"contact-section"},i.createElement("div",{className:"contact-body"},i.createElement("h3",null,g.contacts.title),i.createElement("p",null,g.contacts.desc),i.createElement("div",{className:"contact-list"},g.contacts.list.map(((e,t)=>i.createElement(o.default,{contact:e,key:t})))))),i.createElement("section",{className:"contributor-section"},i.createElement("div",{className:"contributor-body"},i.createElement("h3",null,g.contributorGuide.title),i.createElement("p",null,g.contributorGuide.desc),i.createElement("div",{className:"contributor-list"},g.contributorGuide.list.map(((e,t)=>i.createElement(r.default,{contributor:e,key:t})))))),i.createElement(c.$_,{logo:(0,d.Rg)("https://img.alicdn.com/imgextra/i3/O1CN01rPQVls1KsLgvPZ6tf_!!6000000001219-2-tps-204-40.png")})))))}},1876:(e,t,n)=>{"use strict";n.d(t,{P2:()=>i,Rg:()=>s});const i=(e,t)=>{let n=null;return function(){for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];const c=this;clearTimeout(n),n=setTimeout((()=>{e.apply(c,s)}),t)}},s=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?void 0===t?`${window.rootPath||""}${"default"===t?"/zh-cn":""}${e}`:`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},4184:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var c=s.apply(null,n);c&&e.push(c)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)i.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}}]);