import{b as v,au as k,w as q,O as z,a0 as A,E as g,a8 as h,z as a,$ as m,a1 as _,ao as D,ap as F,aq as I,ar as L,F as N,a6 as P,a3 as $,a2 as E,N as U,a5 as V,as as O,at as j}from"./swiper-vue.9b6bf1d2.js";import{_ as T}from"./VehicleProducts.816c06e2.js";import{a as G,k as H,b as J,c as K,d as M,u as Q,l as W}from"./entry.292f65b0.js";import{u as X}from"./useAPIFetch.ca81a2db.js";import"./CardProduct.e609eda7.js";import"./cookie.a04b2244.js";import"./search_icon.9ebb051f.js";import"./PATTERN.2143be41.js";import"./fetch.2ec56229.js";const Y={class:"vehicle_page_section"},Z={class:"types_container"},ee=["onClick"],ae=["data-src","alt"],te={class:"pt-2"},se={__name:"show-all",async setup(oe){let o,r;const f=H(),R=J(),S=K(),w=M(),C=Q(),y=v([]),e=v({total:1,rows:1,current_page:f.query.page||1,current_page_indexed:f.query.page-1*1||0}),u=async p=>{var i,l;p&&(e.current_page=p.page+1);const c={Accept:"application/json",lang:w.locale.value,"Accept-Language":w.locale.value},d=S.public.baseURL;try{const t=await $fetch(`${d}vehicle`,{method:"get",headers:c,params:{page:e.value.current_page,brand_id:((i=n.value)==null?void 0:i.id)||""}});y.value=t.data,e.value.total=t.meta.total,e.value.current_page=(l=e.current_page)!=null?l:t.meta.current_page,e.value.rows=t.meta.per_page,e.value.current_page_indexed=(e.value.current_page-1)*e.value.rows,R.push({query:{page:e.value.current_page}})}catch(t){C.error(t.data.message)}},{data:B}=([o,r]=k(()=>X("brand_not_paginated")),o=await o,r(),o),b=B.value.data,n=v(null);return[o,r]=k(()=>u()),await o,r(),q(n,async()=>{e.value.current_page=1,await u()}),(p,c)=>{const d=O,i=j,l=T,t=z("lazy-load");return m(),A("section",Y,[g(l,{vehicle_brands:a(b),vehicles:a(y),no_slider:!0},{default:h(()=>[_("div",Z,[g(i,{modules:[a(D),a(F),a(I),a(L)],"slides-per-view":6,spaceBetween:30,navigation:!0,pagination:!1,effect:"creative",autoplay:{delay:8e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-100%",0,-1]},next:{translate:["100%",0,0]}}},{default:h(()=>[(m(!0),A(N,null,P(a(b),s=>(m(),$(d,{key:s.id},{default:h(()=>{var x;return[_("button",{onClick:re=>n.value=s,class:E(["vehicle_type_tab",((x=a(n))==null?void 0:x.id)==s.id?"active":""])},[U(_("img",{"data-src":s.image,width:"50",alt:s.name},null,8,ae),[[t]]),_("div",te,V(s.name),1)],10,ee)]}),_:2},1024))),128))]),_:1},8,["modules"])])]),_:1},8,["vehicle_brands","vehicles"]),g(a(W),{onPage:u,totalRecords:a(e).total,rows:a(e).rows,first:a(e).current_page_indexed,"onUpdate:first":c[0]||(c[0]=s=>a(e).current_page_indexed=s)},null,8,["totalRecords","rows","first"])])}}},ge=G(se,[["__scopeId","data-v-7c66775b"]]);export{ge as default};
