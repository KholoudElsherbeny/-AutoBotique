import{_ as I}from"./FormInput.a59cf4ac.js";import{_ as k}from"./FormButton.e5cd7372.js";import{a as N,u as O,b as S,c as V,d as B,e as D}from"./entry.292f65b0.js";import{u as F}from"./composables.33e0fa5e.js";import{u as i}from"./cookie.a04b2244.js";import{_ as R}from"./BACKDROP2.90d07d0f.js";import{c as z,a as w,b as U}from"./index.esm.b18c19fd.js";import{b as j,f as E,O as L,a0 as q,a1 as e,E as n,a8 as v,z as b,N as A,$ as T,a5 as g,a2 as H,U as Y,ak as G,al as J}from"./swiper-vue.9b6bf1d2.js";const K=t=>(G("data-v-9a4a34ed"),t=t(),J(),t),M={class:"h-100 auth_form_container d-flex justify-content-start align-items-center"},Q={class:"container-fluid w-100"},W={class:"row"},X={class:"d-flex flex-column gap-3"},Z={class:"sub_title"},ss=K(()=>e("h1",{class:"title"},"Create New Password",-1)),es={class:"d-flex justify-content-end mt-3"},as={class:"background_iamge","data-src":R,alt:"car"},os={__name:"reset-password",setup(t){const p=O(),y=S();F({title:"Reset Password"});const P=V(),_=B(),u=i("phone_code"),m=i("phone"),f=i("code"),h=j(0);D({validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0});const x=z({password:w().required().min(8).label("New Password"),confirmPassword:w().required().oneOf([U("password")],"Passwords do not match").label("Your Confirmation Password")}),$={email:"",password:""},C=async(a,r)=>{const s=new FormData;s.append("code",f.value),s.append("phone",m.value),s.append("phone_code",u.value),s.append("password",a.password.trim()),s.append("password_confirmation",a.confirmPassword.trim());const c=P.public.baseURL,l={Accept:"application/json",lang:_.locale.value,"Accept-Language":_.locale.value};try{const o=await $fetch(`${c}reset_password`,{method:"post",headers:l,body:s});p.success(o.message),m.value=null,u.value=null,f.value=null,y.push("/auth/sign-in")}catch(o){p.error(o.data.message)}};return(a,r)=>{const s=I,c=k,l=E("VForm"),o=L("lazy-load");return T(),q("section",{class:"h-100 reset_password_page",onClick:r[0]||(r[0]=d=>h.value=b(h)+1)},[e("div",M,[e("div",Q,[e("div",W,[n(l,{"validation-schema":b(x),"initial-values":$,onSubmit:C,class:"col-12 col-xl-6 col-xxl-5"},{default:v(({meta:d})=>[e("div",X,[e("h5",Z,g(a.$t("auth_sub_title")),1),ss,n(s,{type:"password",name:"password",label:"New Password"}),n(s,{type:"password",name:"confirmPassword",label:a.$t("labels.confirmPassword"),showIcon:!1},null,8,["label"]),e("div",es,[n(c,{type:"submit",class:H({red:d.valid}),disabled:!d.valid},{default:v(()=>[Y(g(a.$t("buttons.confirm")),1)]),_:2},1032,["class","disabled"])])])]),_:1},8,["validation-schema"])])])]),A(e("img",as,null,512),[[o]])])}}},_s=N(os,[["__scopeId","data-v-9a4a34ed"]]);export{_s as default};
