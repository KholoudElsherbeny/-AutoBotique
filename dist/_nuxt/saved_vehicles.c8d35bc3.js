import{_ as p}from"./VehicleProducts.816c06e2.js";import{a as d,k as m,b as v,c as h,d as f,u as g}from"./entry.292f65b0.js";import{u as x}from"./cookie.a04b2244.js";import{b as y,au as b,a0 as k,E as R,z as A,$}from"./swiper-vue.9b6bf1d2.js";import"./CardProduct.e609eda7.js";import"./search_icon.9ebb051f.js";import"./PATTERN.2143be41.js";const w={class:"vehicle_page_section"},B={__name:"saved_vehicles",async setup(C){let s,t;m(),v();const c=h().public.baseURL,n=x("JWT"),a=f(),r=g(),o=y([]),_={Accept:"application/json",lang:a.locale.value,"Accept-Language":a.locale.value,Authorization:`Bearer ${n.value}`},i=async l=>{try{const e=await $fetch(`${c}favourites`,{method:"get",headers:_});console.log(e),o.value=e.data}catch(e){r.error(e.data.message)}};return[s,t]=b(()=>i()),await s,t(),(l,e)=>{const u=p;return $(),k("section",w,[R(u,{vehicles:A(o),title:"saved vehicles",no_slider:!0},null,8,["vehicles"])])}}},D=d(B,[["__scopeId","data-v-743f796a"]]);export{D as default};
