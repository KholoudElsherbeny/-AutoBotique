import{a as X,c as Z,d as E,u as x,j as ee}from"./entry.292f65b0.js";import{_ as te}from"./FormButton.e5cd7372.js";import{b as i,v as ae,o as se,O as I,$ as n,a0 as _,a1 as e,E as d,a8 as c,N as u,a4 as m,a5 as s,z as o,R as f,a3 as F,U as g,an as z,i as H,K as Y,a2 as oe,ak as le,al as ne,av as ie,r as de,c as re,Y as ce}from"./swiper-vue.9b6bf1d2.js";import{u as ue}from"./cookie.a04b2244.js";import{_ as T}from"./logo.515c10f7.js";import{_ as _e}from"./search_icon.9ebb051f.js";import{u as ve}from"./composables.33e0fa5e.js";const pe=""+new URL("bell_icon.33b9ffca.svg",import.meta.url).href,me=""+new URL("user_icon.d2d52263.svg",import.meta.url).href,fe=""+new URL("hamburger.ceae37cc.svg",import.meta.url).href,he=""+new URL("edit_password_icon.920ba58a.svg",import.meta.url).href;const j=k=>(le("data-v-284e5052"),k=k(),ne(),k),be={class:"navbar"},ge={key:0,"data-src":T,class:"img-fluid logo",alt:"it-logo"},ye={key:1,"data-src":T,class:"img-fluid logo",alt:"it-logo"},we={class:"navbar_routes_container",id:"navbarNav"},$e={class:"navbar_routes"},ke={class:"nav-item"},Ce={class:"nav-link_not_active"},Pe={class:"nav-link_active"},Se={class:"nav-item"},Be={class:"nav-link_not_active"},Ue={class:"nav-link_active"},Ae={class:"nav-item"},De={class:"nav-link_not_active"},Me={class:"nav-link_active"},Ve={class:"nav-item"},ze={class:"nav-link_not_active"},Le={class:"nav-link_active"},Ne={class:"d-flex align-items-center user_nav_icon_container"},Re={"data-src":_e,alt:""},Fe={key:0},He={"data-src":pe,alt:""},Te={key:1},Ye={"data-src":me,alt:""},Ee={class:"navbar_routes_small_btn"},Ie={"data-src":fe,alt:""},je={key:4,class:"user_dropdown"},qe={key:5,class:"notification_dropdown"},We=ie('<ul data-v-284e5052><li class="noificaion_item_container" data-v-284e5052><div class="noificaion_item" data-v-284e5052><h4 class="notification_header" data-v-284e5052>Admistrative message</h4><p class="notification_body" data-v-284e5052> The price of the car you required has been sent to your mail </p><div class="notification_footer d-flex gap-3" data-v-284e5052><span data-v-284e5052>Mercedes-Benz</span><span data-v-284e5052>MAYBACH 5</span></div></div></li><li class="noificaion_item_container" data-v-284e5052><div class="noificaion_item" data-v-284e5052><h4 class="notification_header" data-v-284e5052>Admistrative message</h4><p class="notification_body" data-v-284e5052> The price of the car you required has been sent to your mail </p><div class="notification_footer d-flex gap-3" data-v-284e5052><span data-v-284e5052>Mercedes-Benz</span><span data-v-284e5052>MAYBACH 5</span></div></div></li></ul>',1),Ge=[We],Je=["onSubmit"],Ke={class:"text-center mb-5"},Oe=["placeholder"],Qe=["placeholder"],Xe={class:"Edit_password_btn_container d-flex justify-content-between my-5"},Ze={"data-src":he,alt:""},xe={class:"text-center"},et={type:"submit",class:"submit_btn"},tt=["onSubmit"],at={class:"text-center mb-5"},st=["placeholder"],ot=["placeholder"],lt=["placeholder"],nt={class:"text-center mt-5"},it={type:"submit",class:"submit_btn"},dt=j(()=>e("input",{type:"text",placeholder:"Search Here"},null,-1)),rt=j(()=>e("i",{class:"fas fa-xmark"},null,-1)),ct=[rt],ut={__name:"Header",setup(k){const b=Z().public.baseURL,v=E(),r=x(),B=ue("JWT"),U=i(!!B.value),C=i(!1),P=i(!1),y=i(!1),A=i(!1),L=i(!1),w=i(!1),R=i(!1),h=i(null),q=i(null),D=i(null),S=i(null),M=i(null),V={Accept:"application/json",lang:v.locale.value,"Accept-Language":v.locale.value,Authorization:`Bearer ${B.value}`},W=async()=>{const{data:t}=await $fetch(`${b}profile`,{method:"get",headers:V});h.value=t},G=async()=>{const{data:t}=await $fetch(`${b}notifications`,{method:"get",headers:V});q.value=t},J=async()=>{if(!h.value.full_name)r.error(v.t("validation.name"));else if(!h.value.email)r.error(v.t("validation.email"));else try{const t=new FormData;t.append("full_name",h.value.full_name),t.append("email",h.value.email);const a=await $fetch(`${b}profile/update`,{method:"post",headers:V,body:t});r.success(v.t("msg.update_successfully")),y.value=!1}catch(t){r.error(t.response._data.message)}},K=async()=>{if(!D.value)r.error(v.t("validation.current_password"));else if(!S.value)r.error(v.t("validation.new_password"));else if(S.value!=M.value)r.error(v.t("validation.confirm_password"));else try{const t=new FormData;t.append("current_password",D.value),t.append("new_password",S.value),t.append("new_password_confirmation",M.value);const a=await $fetch(`${b}profile/update-password`,{method:"post",headers:V,body:t});r.success(v.t("msg.update_successfully")),A.value=!1}catch(t){r.error(t.response._data.message)}},O=async()=>{try{const t=new FormData;t.append("device_token","website"),t.append("type","ios");const a=await $fetch(`${b}logout`,{method:"post",headers:V,body:t});console.log(a),r.success(a.message),y.value=!1,B.value="",U.value=!1}catch(t){r.error(t.response._data.message)}};return ae(()=>{y.value==!0||A.value==!0?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"}),se(()=>{window.addEventListener("scroll",()=>{window.scrollY>100?R.value=!0:R.value=!1}),document.body.addEventListener("click",()=>{C.value=!1,P.value=!1,w.value=!1}),U&&(W(),G())}),(t,a)=>{const p=ee,Q=te,$=I("lazy-load");return n(),_("div",{class:oe(["navbar_container",o(R)?"nav_container_abs":" "])},[e("nav",be,[d(p,{to:t.localePath("/"),class:"navbar-brand"},{default:c(()=>[t.$i18n.locale=="en"?u((n(),_("img",ge,null,512)),[[$]]):m("",!0),t.$i18n.locale=="an"?u((n(),_("img",ye,null,512)),[[$]]):m("",!0)]),_:1},8,["to"]),e("div",we,[e("ul",$e,[e("li",ke,[d(p,{to:t.localePath("/"),class:"nav-link"},{default:c(()=>[e("div",null,[e("div",Ce,s(t.$t("nav.home")),1),e("div",Pe,s(t.$t("nav.home")),1)])]),_:1},8,["to"])]),e("li",Se,[d(p,{to:t.localePath("/about-us"),class:"nav-link"},{default:c(()=>[e("div",null,[e("div",Be,s(t.$t("nav.about")),1),e("div",Ue,s(t.$t("nav.about")),1)])]),_:1},8,["to"])]),e("li",Ae,[d(p,{to:t.localePath("/vehicles"),class:"nav-link"},{default:c(()=>[e("div",null,[e("div",De,s(t.$t("nav.vehicles")),1),e("div",Me,s(t.$t("nav.vehicles")),1)])]),_:1},8,["to"])]),e("li",Ve,[d(p,{to:t.localePath("/contact-us"),class:"nav-link"},{default:c(()=>[e("div",null,[e("div",ze,s(t.$t("nav.contact_us")),1),e("div",Le,s(t.$t("nav.contact_us")),1)])]),_:1},8,["to"])])])]),e("div",Ne,[e("div",null,[e("button",{onClick:a[0]||(a[0]=l=>L.value=!0),class:"text-white d-block",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},[u(e("img",Re,null,512),[[$]])])]),o(U)?(n(),_("div",Fe,[e("button",{class:"text-white d-block",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:a[1]||(a[1]=f(()=>{P.value=!o(P),C.value=!1,w.value=!1},["stop"]))},[u(e("img",He,null,512),[[$]])])])):m("",!0),o(U)?(n(),_("div",Te,[e("button",{class:"text-white d-block",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:a[2]||(a[2]=f(()=>{C.value=!o(C),P.value=!1,w.value=!1},["stop"]))},[u(e("img",Ye,null,512),[[$]])])])):m("",!0),e("div",Ee,[e("button",{onClick:a[3]||(a[3]=f(()=>{w.value=!o(w),C.value=!1,P.value=!1},["stop"])),class:"text-white d-block",type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},[u(e("img",Ie,null,512),[[$]])])]),o(U)?m("",!0):(n(),F(p,{key:2,class:"sign_btn",to:t.localePath("/auth/sign-in")},{default:c(()=>[d(Q,{class:"py-3 px-4",mainBorder:!0},{default:c(()=>[g("sign in")]),_:1})]),_:1},8,["to"])),o(w)?(n(),_("div",{key:3,class:"user_dropdown",onClick:a[4]||(a[4]=f(l=>w.value=!1,["stop"]))},[e("ul",null,[e("li",null,[d(p,{to:t.localePath("/")},{default:c(()=>[g(s(t.$t("nav.home")),1)]),_:1},8,["to"])]),e("li",null,[d(p,{to:t.localePath("/about-us")},{default:c(()=>[g(s(t.$t("nav.about")),1)]),_:1},8,["to"])]),e("li",null,[d(p,{to:t.localePath("/vehicles")},{default:c(()=>[g(s(t.$t("nav.vehicles")),1)]),_:1},8,["to"])]),e("li",null,[d(p,{to:t.localePath("/contact-us")},{default:c(()=>[g(s(t.$t("nav.contact_us")),1)]),_:1},8,["to"])])])])):m("",!0),o(C)?(n(),_("div",je,[e("ul",null,[e("li",null,[d(p,{to:t.localePath("/vehicles/saved_vehicles")},{default:c(()=>[g(s(t.$t("buttons.saved_vehicles")),1)]),_:1},8,["to"])]),e("li",null,[e("button",{onClick:a[5]||(a[5]=l=>y.value=!0)},s(t.$t("buttons.edit_profile")),1)]),e("li",null,[d(p,{to:t.localePath("/terms")},{default:c(()=>[g(s(t.$t("buttons.terms&Conditions")),1)]),_:1},8,["to"])]),e("li",null,[e("button",{class:"logout",onClick:O},s(t.$t("buttons.logout")),1)])])])):m("",!0),o(P)?(n(),_("div",qe,Ge)):m("",!0)])]),o(h)?(n(),F(Y,{key:0,to:"body"},[o(y)?(n(),_("div",{key:0,class:"edit_profile_dialog",onClick:a[10]||(a[10]=l=>y.value=!1)},[e("form",{onSubmit:f(J,["prevent"]),onClick:a[9]||(a[9]=f(()=>{},["stop"])),class:"edit_profile_dialog_card"},[e("h4",Ke,s(t.$t("labels.edit_profile")),1),u(e("input",{type:"text",placeholder:t.$t("labels.name"),"onUpdate:modelValue":a[6]||(a[6]=l=>o(h).full_name=l)},null,8,Oe),[[z,o(h).full_name]]),u(e("input",{type:"email","onUpdate:modelValue":a[7]||(a[7]=l=>o(h).email=l),placeholder:t.$t("labels.email")},null,8,Qe),[[z,o(h).email]]),e("div",Xe,[e("span",null,s(t.$t("labels.password")),1),e("button",{type:"button",onClick:a[8]||(a[8]=()=>{A.value=!0,y.value=!1})},[u(e("img",Ze,null,512),[[$]])])]),e("div",xe,[e("button",et,s(t.$t("buttons.save")),1)])],40,Je)])):m("",!0),o(A)?(n(),_("div",{key:1,class:"edit_profile_dialog",onClick:a[15]||(a[15]=l=>A.value=!1)},[e("form",{onSubmit:f(K,["prevent"]),onClick:a[14]||(a[14]=f(()=>{},["stop"])),class:"edit_profile_dialog_card"},[e("h4",at,s(t.$t("labels.edit_password")),1),u(e("input",{type:"password",placeholder:t.$t("labels.current_password"),"onUpdate:modelValue":a[11]||(a[11]=l=>H(D)?D.value=l:null)},null,8,st),[[z,o(D)]]),u(e("input",{type:"password","onUpdate:modelValue":a[12]||(a[12]=l=>H(S)?S.value=l:null),placeholder:t.$t("labels.new_password")},null,8,ot),[[z,o(S)]]),u(e("input",{type:"password","onUpdate:modelValue":a[13]||(a[13]=l=>H(M)?M.value=l:null),placeholder:t.$t("labels.confirmPassword")},null,8,lt),[[z,o(M)]]),e("div",nt,[e("button",it,s(t.$t("buttons.save")),1)])],40,tt)])):m("",!0)])):m("",!0),(n(),F(Y,{to:"body"},[o(L)?(n(),_("div",{key:0,class:"search_dialog__dialog",onClick:a[19]||(a[19]=l=>L.value=!1)},[e("form",{onSubmit:a[17]||(a[17]=f(()=>{},["prevent"])),onClick:a[18]||(a[18]=f(()=>{},["stop"])),class:"search_dialog_card"},[dt,e("button",{class:"close_search_btn",onClick:a[16]||(a[16]=f(l=>L.value=!1,["stop"]))},ct)],32)])):m("",!0)]))],2)}}},_t=X(ut,[["__scopeId","data-v-284e5052"]]);const vt={class:"footer-container d-flex justify-content-center align-items-center"},pt={class:"text-center"},mt={class:"logo-container mb-3"},ft={"data-src":T,alt:""},ht=e("p",{class:"copyrights"},[g(" copyrights \xA9 "),e("a",{href:"/",target:"_blank"},"Auto Boutique")],-1),bt={__name:"Footer",setup(k){return i(!1),de({name:"",email:"",phone:"",message:""}),re(()=>new Date().getFullYear()),(N,b)=>{const v=I("lazy-load");return n(),_("footer",null,[e("div",vt,[e("div",pt,[e("div",mt,[u(e("img",ft,null,512),[[v]])]),ht])])])}}},gt={class:"default_slot"},Bt={__name:"default",setup(k){const N=E();return ve({titleTemplate:`${N.t("appName")} | %s`,meta:[{hid:"description",name:"description",content:"Starter App Desc Will Go Here"}]}),(b,v)=>{const r=_t,B=bt;return n(),_("section",null,[d(r),e("div",gt,[ce(b.$slots,"default")]),d(B)])}}};export{Bt as default};