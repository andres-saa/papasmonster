import{T as u}from"./TarjetaMenu-6d57ca00.js";import{b as m,u as p,q as g,r as l,l as h,x as d,d as s,e as o,F as x,g as _,f as r,z as f,h as v}from"./index-730eee4c.js";/* empty css                                                                    */const y={class:"grid px-3 pb-8",style:{"max-width":"1024px",margin:"auto",position:"relative"}},w=r("p",{class:"text-center text-3xl col-12 text-white",style:{"font-weight":"bold",display:"flex",gap:"1rem","align-items":"center"}},[r("div",{style:{width:"100%",height:"5px","background-color":"#ff6200"}}),f(" PROMOCIONES "),r("div",{style:{width:"100%",height:"5px","background-color":"#ff6200"}})],-1),B={__name:"sesion_main",setup(S){const t=m();p(),g();const e=l(t.menu.data),n=h();return d(()=>n.params.categoria_id,async()=>{e.value=[],setTimeout(()=>{e.value=t.menu.data},1)},{deep:!0}),d(()=>t.menu.data,async()=>{e.value=[],setTimeout(()=>{e.value=t.menu.data},1)},{deep:!0}),l(JSON.parse(localStorage.getItem("currentNeigborhood"))),(b,N)=>{var i;return s(),o("div",y,[w,(s(!0),o(x,null,_((i=e.value)==null?void 0:i.filter(a=>a.categoria_id==24),(a,c)=>(s(),o("div",{key:a.id,class:"col-12 md:col-4 lg:col-3 sm:col-6"},[v(u,{style:{width:"100%"},id:`tarjeta-${c}`,index:c+1,product:a},null,8,["id","index","product"])]))),128))])}}};export{B as default};
