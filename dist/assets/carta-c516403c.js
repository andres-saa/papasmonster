import{_ as c,c as e,d as t,F as a,f as o,e as r,E as n}from"./index-e1b50803.js";const l={data(){return{isMobile:!1}},created(){this.handleResize(),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.isMobile=window.matchMedia("(max-width: 768px)").matches}}},d={class:"mt-2 md:mt-5 mb-0 pb-0",style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","min-height":"100vh"}},m={class:"col-12 mr-auto ml-auto m-0 p-0",style:{"max-width":"1024px"}},h=["src"],u={class:"col-12 mr-auto ml-auto my-0 p-0",style:{"max-width":"1024px"}},_=["src"];function p(f,w,x,y,i,g){return e(),t("div",d,[(e(),t(a,null,o([0],s=>r("div",m,[i.isMobile?n("",!0):(e(),t("img",{key:0,style:{width:"100%"},src:`/images/carta/${s}.jpeg`,alt:""},null,8,h))])),64)),(e(),t(a,null,o([1,2,3,4],s=>r("div",u,[i.isMobile?(e(),t("img",{key:0,style:{width:"100%"},src:`/images/cartaVertical/${s}.jpeg`,alt:""},null,8,_)):n("",!0)])),64))])}const v=c(l,[["render",p]]);export{v as default};
