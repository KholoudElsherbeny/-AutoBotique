import{_ as q}from"./logo.515c10f7.js";import{a as k,j as x,c as R,d as T,u as U}from"./entry.292f65b0.js";import{O as w,$ as t,a0 as o,N as d,a1 as e,b as S,E as u,a8 as h,F as H,a6 as P,a3 as $,a4 as g,a5 as p,U as y,z as n,ao as A,ap as B,aq as D,ar as z,as as I,at as L,ak as j,al as E,au as O}from"./swiper-vue.9b6bf1d2.js";import{_ as W}from"./FormButton.e5cd7372.js";import{_ as V}from"./PATTERN.2143be41.js";import{_ as G}from"./CardProduct.e609eda7.js";import{_ as J}from"./arrow.ecb86765.js";import{u as K}from"./composables.33e0fa5e.js";import{u as Q}from"./cookie.a04b2244.js";import"./search_icon.9ebb051f.js";const X={},Y={id:"loading",class:"loading"},Z={"data-src":q,width:"100",height:"100",alt:"loading"};function ee(a,_){const c=w("lazy-load");return t(),o("div",Y,[d(e("img",Z,null,512),[[c]])])}const te=k(X,[["render",ee]]),se=""+new URL("mouse.710601d1.svg",import.meta.url).href;const oe={class:"hero_section"},ae={class:"slider_item"},ne={class:"slider_info"},_e={class:"d-flex align-items-center gap-4"},ce={class:"slider_barnd_icon"},ie=["data-src"],re=["data-src"],le={class:"slider_title_backDrop","data-src":V,alt:""},de={key:0,class:"slider_sub_title"},ue={key:1,class:"slider_sub_title"},me={class:"slider_title"},pe={key:0,class:"slider_sub_title smaller"},he={class:"slider_text"},fe={class:"slide_image_container"},ve=["data-src"],ge={class:"mouse_scroll_down"},ye={class:"","data-src":se,alt:""},we=e("div",null,"Scorll Down",-1),$e={__name:"HomeHero",props:{sliders:{type:Array,required:!0}},setup(a){const _=a;return S(Array.from({length:10},()=>{const c=Math.floor(Math.random()*256),f=Math.floor(Math.random()*256),l=Math.floor(Math.random()*256),i=c*.299+f*.587+l*.114>186?"black":"white";return{bg:`rgb(${c}, ${f}, ${l})`,color:i}})),(c,f)=>{const l=W,i=x,v=I,m=L,r=w("lazy-load");return t(),o("section",oe,[u(m,{modules:[n(A),n(B),n(D),n(z)],"slides-per-view":1,loop:!0,navigation:!0,pagination:!0,effect:"fade",autoplay:{delay:5e3,disableOnInteraction:!0},"fade-effect":{crossFade:!0}},{default:h(()=>[(t(!0),o(H,null,P(_.sliders,s=>(t(),$(v,{key:s.id},{default:h(()=>[e("div",ae,[e("div",ne,[e("div",_e,[e("span",ce,[s.vehicle?d((t(),o("img",{key:0,"data-src":s.vehicle.brand_image,width:"70",alt:""},null,8,ie)),[[r]]):g("",!0),s.brand?d((t(),o("img",{key:1,"data-src":s.brand.image,width:"70",alt:""},null,8,re)),[[r]]):g("",!0),d(e("img",le,null,512),[[r]])]),s.vehicle?(t(),o("h3",de,p(s.vehicle.brand_name),1)):(t(),o("h3",ue,p(s.brand.name),1))]),e("h2",me,p(s.name),1),s.vehicle?(t(),o("h5",pe,p(s.vehicle.name),1)):g("",!0),e("p",he,p(s.description),1),u(i,{class:"sign_btn",to:c.localePath("/auth/sign-in")},{default:h(()=>[u(l,{class:"slider_detail_btn",mainBorder:!0},{default:h(()=>[y("Detials")]),_:1})]),_:1},8,["to"])]),e("div",fe,[d(e("img",{"data-src":s.image,alt:""},null,8,ve),[[r]])])])]),_:2},1024))),128))]),_:1},8,["modules"]),e("div",ge,[d(e("img",ye,null,512),[[r]]),we])])}}};const C=a=>(j("data-v-a902b5fe"),a=a(),E(),a),be={class:"products_home_section"},ke={class:"products_home"},xe={class:"section_header"},Se={class:"sub_title"},He={key:0,class:"title"},Pe=C(()=>e("br",null,null,-1)),Ae={key:1,class:"title"},Be={class:"slider_title_backDrop","data-src":V,alt:""},De={class:"prdoucts_container py-5"},ze={class:"d-flex justify-content-center align-items-center"},Ie={class:"show_all_btn"},Le=C(()=>e("span",null,"Show All",-1)),Ve={class:"arrow_icon"},Ce={"data-src":J,alt:"arrow"},Me={__name:"HomeProducts",props:{vehicles:{type:Array,required:!0},title:{type:String,required:!1}},setup(a){return(_,c)=>{const f=G,l=I,i=L,v=x,m=w("lazy-load");return t(),o("section",be,[e("div",ke,[e("div",xe,[e("div",Se,p(_.$t("titles.Agent_for_the_finest_types_of_cars")),1),a.title?(t(),o("h3",Ae,p(a.title),1)):(t(),o("h3",He,[y(" ready for "),Pe,y(" Delivery ")])),d(e("img",Be,null,512),[[m]])]),e("div",De,[u(i,{modules:[n(A),n(B),n(D),n(z)],"slides-per-view":2,spaceBetween:30,navigation:!0,pagination:!1,effect:"creative",breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:30}},autoplay:{delay:5e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-100%",0,-1]},next:{translate:["100%",0,0]}}},{default:h(()=>[(t(!0),o(H,null,P(a.vehicles,r=>(t(),$(l,{key:r.id},{default:h(()=>[u(f,{item:r},null,8,["item"])]),_:2},1024))),128))]),_:1},8,["modules"])]),e("div",ze,[u(v,{to:_.localePath("/vehicles/show-all")},{default:h(()=>[e("button",Ie,[Le,e("span",Ve,[d(e("img",Ce,null,512),[[m]])])])]),_:1},8,["to"])])])])}}},Ne=k(Me,[["__scopeId","data-v-a902b5fe"]]),Fe={key:1,class:"home-wrapper"},Xe={__name:"index",async setup(a){let _,c;const l=R().public.baseURL,i=T();U();const v=Q("JWT"),m={Accept:"application/json",lang:i.locale.value,"Accept-Language":i.locale.value};v.value&&(m.Authorization=`Bearer ${v.value}`);const s=([_,c]=O(()=>$fetch(`${l}home`,{headers:m,method:"get"})),_=await _,c(),_),b=S(!0);return setTimeout(()=>{b.value=!1},2e3),K({title:`${i.t("nav.home")}`,meta:[{name:"description",content:"Starter App Desc Will Go Here"}]}),(qe,Re)=>{const M=te,N=$e,F=Ne;return t(),o("div",null,[n(b)?(t(),$(M,{key:0})):(t(),o("div",Fe,[u(N,{sliders:n(s).sliders},null,8,["sliders"]),u(F,{vehicles:n(s).vehicles},null,8,["vehicles"])]))])}}};export{Xe as default};
