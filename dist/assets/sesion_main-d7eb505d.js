import{T as h}from"./TarjetaMenu-3c0bbc6c.js";import{q as x,u as w,s as v,r as n,i as L,w as $,o as S,t as m,c as d,d as l,e as c,v as T,F as j,f as k,U as y,g as E}from"./index-438126e9.js";/* empty css                                                                    */const b={style:{"margin-top":"3rem"}},N={style:{position:"relative",display:"flex","justify-content":"center","align-items":"center"},class:"text-center text-6xl col-12 mb-8"},B={class:"m-0 text-4xl md:text-7xl"},M={class:"text-white"},P={class:"grid px-3 pb-8",style:{"max-width":"1024px",margin:"auto",position:"relative"}},I={__name:"sesion_main",setup(R){x();const u=w(),a=v(),g=n([]),_=L();$(()=>_.params.category_id,async()=>{_.params.category_id&&(p(),await m())},{deep:!0});const i=n([]),p=async s=>{const o=u.location.site.site_id,t=i.value[0].category_id;if(t&&o){a.setLoading(!0,"cargando productos");try{let e=await fetch(`${y}/products-active/category-id/${t}/site/${o}/4`);if(!e.ok)throw a.setLoading(!1,"cargando productos"),new Error(`HTTP error! status: ${e.status}`);a.setLoading(!1,"cargando productos");let r=await e.json();g.value=r}catch(e){a.setLoading(!1,"cargando productos"),console.error("Error fetching data: ",e)}}},f=async()=>{const s=u.location.site.site_id,o=4;if(s){a.setLoading(!0,"cargando productos");try{let t=await fetch(`${y}/categories_main/${s}/${o}`);if(!t.ok)throw a.setLoading(!1,"cargando productos"),new Error(`HTTP error! status: ${t.status}`);a.setLoading(!1,"cargando productos");let e=await t.json();i.value=e}catch(t){a.setLoading(!1,"cargando productos"),console.error("Error fetching data: ",t)}}};return S(async()=>{await f(),await p(),await m()}),n(JSON.parse(localStorage.getItem("currentNeigborhood"))),(s,o)=>{var t;return d(),l("div",b,[c("div",N,[c("h2",B,[c("b",M,T((t=i.value[0])==null?void 0:t.category_name),1)])]),c("div",P,[(d(!0),l(j,null,k(g.value,(e,r)=>(d(),l("div",{key:e.id,class:"col-12 md:col-6 lg:col-4 xl:col-3"},[E(h,{style:{width:"100%"},id:`tarjeta-${r}`,index:r+1,product:e},null,8,["id","index","product"])]))),128))])])}}};export{I as default};
