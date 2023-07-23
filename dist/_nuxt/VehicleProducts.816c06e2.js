import{_ as b}from"./CardProduct.e609eda7.js";import{b as m,O as w,$ as n,a0 as i,a1 as o,a5 as p,U as _,N as g,Y as x,E as c,a8 as v,F as u,a6 as h,a3 as k,z as r,ao as S,ap as B,aq as C,ar as T,as as V,at as P,ak as z,al as N}from"./swiper-vue.9b6bf1d2.js";import{_ as A}from"./PATTERN.2143be41.js";import{a as I}from"./entry.292f65b0.js";function q(e,s){s===void 0&&(s={});var d=s.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",d==="top"&&a.firstChild?a.insertBefore(t,a.firstChild):a.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var D=`
.p-tabview-nav-container {
    position: relative;
}
.p-tabview-scrollable .p-tabview-nav-container {
    overflow: hidden;
}
.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}
.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
}
.p-tabview-header-action {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
}
.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabview-header-action:focus {
    z-index: 1;
}
.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}
.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-tabview-nav-prev {
    left: 0;
}
.p-tabview-nav-next {
    right: 0;
}
.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}
`;q(D);const E=e=>(z("data-v-398b9b81"),e=e(),N(),e),F={class:"products_home_section"},$={class:"products_home"},j={class:"section_header"},O={class:"sub_title"},L={key:0,class:"title"},U=E(()=>o("br",null,null,-1)),Y={key:1,class:"title"},G={class:"slider_title_backDrop","data-src":A,alt:""},H={key:0,class:"prdoucts_container py-2 pb-4"},J={key:1},K={class:"cars_grid_container"},M={__name:"VehicleProducts",props:{vehicles:{type:Array,required:!0},title:{type:String,required:!1},vehicle_types:{type:Array,required:!1},no_slider:{type:Boolean,default:!1,required:!1}},setup(e){return m([{title:"Tab 1",content:"Tab 1 Content"},{title:"Tab 2",content:"Tab 2 Content"},{title:"Tab 3",content:"Tab 3 Content"}]),(s,d)=>{const a=b,t=V,f=P,y=w("lazy-load");return n(),i("section",F,[o("div",$,[o("div",j,[o("div",O,p(s.$t("titles.Agent_for_the_finest_types_of_cars")),1),e.title?(n(),i("h3",Y,p(e.title),1)):(n(),i("h3",L,[_(" ready for "),U,_(" Delivery ")])),g(o("img",G,null,512),[[y]])]),x(s.$slots,"default",{},void 0,!0),e.no_slider?(n(),i("div",J,[o("div",K,[(n(!0),i(u,null,h(e.vehicles,l=>(n(),i("div",{key:l.id},[c(a,{item:l},null,8,["item"])]))),128))])])):(n(),i("div",H,[c(f,{modules:[r(S),r(B),r(C),r(T)],"slides-per-view":2,spaceBetween:30,navigation:!0,pagination:!1,effect:"creative",breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:30}},autoplay:{delay:5e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-100%",0,-1]},next:{translate:["100%",0,0]}}},{default:v(()=>[(n(!0),i(u,null,h(e.vehicles,l=>(n(),k(t,{key:l.id},{default:v(()=>[c(a,{item:l},null,8,["item"])]),_:2},1024))),128))]),_:1},8,["modules"])]))])])}}},Z=I(M,[["__scopeId","data-v-398b9b81"]]);export{Z as _};
