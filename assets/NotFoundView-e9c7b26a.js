import{_ as s,o as n,c,a as e,t as a}from"./index-123c8591.js";const r={data(){return{counter:3}},methods:{countdown(){const t=setInterval(()=>{this.counter-=1,this.counter===0&&clearInterval(t)},1e3)}},mounted(){setTimeout(()=>{this.$router.push("/")},3e3),this.countdown()}},i={class:"container full-height"},_=e("div",{class:"h3 mt-5 fw-bolder text-primary animate"},"4 0 4",-1),u={class:"fs-5 animateTwo"};function d(t,l,h,p,o,m){return n(),c("div",i,[_,e("div",u,"找不到頁面，將在"+a(o.counter)+"秒後回到首頁",1)])}const v=s(r,[["render",d]]);export{v as default};
