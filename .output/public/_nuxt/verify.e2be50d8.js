import{_ as A}from"./FormInput.a59cf4ac.js";import{_ as I}from"./FormButton.e5cd7372.js";import{a as j,b as F,u as L,c as S,d as U,e as B}from"./entry.292f65b0.js";import{u as N}from"./composables.33e0fa5e.js";import{u as x}from"./cookie.a04b2244.js";import{_ as O}from"./BACKDROP.fc8a6ccc.js";import{c as z,a as E}from"./index.esm.b18c19fd.js";import{b as T,f as C,O as q,a0 as H,a1 as e,E as r,a8 as v,z as n,N as W,$ as G,a5 as _,U as b,a2 as w,ak as J,al as K}from"./swiper-vue.9b6bf1d2.js";const M=i=>(J("data-v-f6009662"),i=i(),K(),i),P={class:"h-100 verify_page"},Q={class:"h-100 auth_form_container d-flex justify-content-start align-items-center"},X={class:"container-fluid w-100"},Y={class:"row"},Z={class:"d-flex flex-column gap-3"},ee={class:"sub_title"},te=M(()=>e("h1",{class:"title"},"Verifying Account",-1)),ae={class:"w-75 mb-4"},oe={class:"d-flex justify-content-between"},se=["disabled"],ne={class:"d-flex justify-content-end mt-3"},ce={class:"background_iamge","data-src":O,alt:"car"},ie={__name:"verify",setup(i){const V=F(),l=L(),y=S(),d=U(),u=x("phone_code"),p=x("phone");N({title:"Verify"}),B({validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0});const k=z({code:E().required().label("Verify Code")}),D=async(a,h)=>{const t=new FormData;t.append("code",a.code),t.append("phone",p.value),t.append("phone_code",u.value),t.append("device_token","website"),t.append("type","ios");const o=y.public.baseURL,f={Accept:"application/json",lang:d.locale.value,"Accept-Language":d.locale.value};try{const c=await $fetch(`${o}account_verify`,{method:"post",headers:f,body:t});l.success(c.message),V.push("/auth/verified")}catch(c){l.error(c.data.message)}},s=T(60),m=()=>{s.value>0&&setTimeout(()=>{s.value-=1,m()},1e3)};m();const $=async()=>{const a=new FormData;a.append("phone",p.value),a.append("phone_code",u.value);const h=y.public.baseURL,t={Accept:"application/json",lang:d.locale.value,"Accept-Language":d.locale.value};try{const o=await $fetch(`${h}send_code`,{method:"post",headers:t,body:a});l.success(o.message),s.value=60,m()}catch(o){l.error(o.data.message)}};return(a,h)=>{const t=C("router-link"),o=A,f=I,c=C("VForm"),R=q("lazy-load");return G(),H("section",P,[e("div",Q,[e("div",X,[e("div",Y,[r(c,{"validation-schema":n(k),"initial-values":a.initialValues,onSubmit:D,class:"col-12 col-xl-6 col-xxl-5"},{default:v(({meta:g})=>[e("div",Z,[e("h5",ee,_(a.$t("auth_sub_title")),1),te,e("div",ae," We just sent a 4-digit verification to +"+_(n(u))+" "+_(n(p))+". enter the code in the box below to continue. ",1),r(t,{class:"mainColor",to:"edit_number"},{default:v(()=>[b("Edit the Number")]),_:1}),r(o,{label:"Code",type:"text",placeholder:"Code",name:"code"}),e("div",oe,[e("div",null,[b(" Didn't Receive A Code?"),e("button",{class:w(["mainColor span_btn",n(s)&&"btn_disabled"]),onClick:$,disabled:n(s)}," Resend ",10,se)]),e("div",null,_("0 : "+n(s)),1)]),e("div",ne,[r(f,{type:"submit",class:w({red:g.valid}),disabled:!g.valid},{default:v(()=>[b("Verify Account")]),_:2},1032,["class","disabled"])])])]),_:1},8,["validation-schema","initial-values"])])])]),W(e("img",ce,null,512),[[R]])])}}},fe=j(ie,[["__scopeId","data-v-f6009662"]]);export{fe as default};