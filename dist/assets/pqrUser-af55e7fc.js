import{s as _,a as t,U as a,_ as v,r as P,o as S,b as i,c,d,g as w,D as l,F as y,f as R,K as g,e as o,v as Q,z as m,A as x}from"./index-7554e270.js";const E={store:_(),resolve(){this.store.setLoading(!1,"")},async getPqrsByPlaceId(r){this.store.setLoading(!0,"Cargando PQRS");try{const e=await t.get(`${a}/get-pqrs-by-place-id/${r}`);return e.status===200?(this.resolve(),e.data):(console.error("No se ha podido cargar las PQRS"),this.resolve(),null)}catch(e){throw console.error("Error al cargar las PQRS:",e),this.resolve(),new Error("Error al cargar las PQRS")}},async createPqrs(r){this.store.setLoading(!0,"Creando PQRS");try{const e=await t.post(`${a}/create_pqrs/`,r);return e.status===200?(this.resolve(),e.data):(console.error("No se ha podido crear la PQRS"),this.resolve(),null)}catch(e){throw console.error("Error al crear la PQRS:",e),this.resolve(),new Error("Error al crear la PQRS")}},async updatePqrs(r,e){this.store.setLoading(!0,"Editando PQRS");try{const s=await t.put(`${a}/update_pqrs/${e}`,r);return s.status===200?(this.resolve(),s.data):(console.error("No se ha podido crear la PQRS"),this.resolve(),null)}catch(s){throw console.error("Error al crear la PQRS:",s),this.resolve(),new Error("Error al crear la PQRS")}},async deletePqrs(r){this.store.setLoading(!0,"Eliminando PQRS");try{const e=await t.delete(`${a}/delete_pqrs/${r}`);return e.status===200?(this.resolve(),e.data):(console.error("No se ha podido crear la PQRS"),this.resolve(),null)}catch(e){throw console.error("Error al crear la PQRS:",e),this.resolve(),new Error("Error al crear la PQRS")}}};const p=r=>(m("data-v-8269c898"),r=r(),x(),r),f={class:"container col-12 px-2"},q=p(()=>o("p",{class:"my-6 text-2xl"},[o("b",null," PQRS")],-1)),I=p(()=>o("div",null,null,-1)),L={class:"p-0 m-0 text-xl",style:{width:"100%"}},$={class:"m-0"},B=["innerHTML"],N={__name:"pqrUser",setup(r){const e=P([]),s=async()=>{e.value=await E.getPqrsByPlaceId(1)};return S(async()=>{s()}),(b,A)=>{const u=i("AccordionTab"),h=i("Accordion");return c(),d("div",f,[q,w(h,{style:{width:"100%",overflow:"hidden","max-width":"800px"},expandIcon:"pi pi-plus",collapseIcon:"pi pi-minus"},{default:l(()=>[(c(!0),d(y,null,R(e.value,(n,U)=>(c(),g(u,{key:n.id},{header:l(()=>[I,o("p",L,Q(n.question),1)]),default:l(()=>[o("p",$,[o("p",{innerHTML:n.answer},null,8,B)])]),_:2},1024))),128))]),_:1})])}}},C=v(N,[["__scopeId","data-v-8269c898"]]);export{C as default};
