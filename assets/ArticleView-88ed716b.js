import{_ as g,n,r as v,o as a,c as i,a as t,t as r,k as d,F as b,D,j as _,e as f,f as T}from"./index-8ab29a44.js";const{VITE_APP_URL:h,VITE_APP_PATH:p}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vue-learnFund/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{articleId:"",articleData:{},similarClassData:[],toTopBtn:""}},watch:{articleId(){this.getArticle()},articleData(){this.getSimilarClass()}},created(){window.addEventListener("scroll",this.toTopBtnStatus)},mounted(){this.articleId=this.$route.params.articleId},methods:{toTopBtnStatus(){this.toTopBtn=document.querySelector("#toTopBtn"),window.scrollY>100?(this.toTopBtn.classList.remove("d-none"),this.toTopBtn.classList.add("d-block")):(this.toTopBtn.classList.remove("d-block"),this.toTopBtn.classList.add("d-none"))},goTotop(){window.scrollTo(0,0)},getSimilarClass(){const e=["商業","藝術","語言","投資理財","攝影"],l=this.articleData.tag.find(o=>e.includes(o));n.get(`${h}/api/${p}/products?category=${l}`).then(o=>{this.similarClassData=o.data.products}).catch(o=>{console.log(o)})},switchTime(e){return new Date(e*1e3).toLocaleDateString()},getArticle(){n.get(`${h}/api/${p}/article/${this.articleId}`).then(e=>{this.articleData=e.data.article}).catch(e=>{console.log(e)})}}},y={class:"full-height bg-light py-5 position-relative"},x={key:0,class:"container"},k={class:"mt-3"},L={class:"me-4"},B=t("i",{class:"bi bi-person-vcard me-2"},null,-1),A=t("i",{class:"bi bi-calendar2-week me-2"},null,-1),P={class:"row mt-3"},V={class:"col-md-9"},E={class:"ratio ratio-16x9"},I=["src"],S={class:"position-relative mt-5 p-3 text-light fw-bold opacity-75 border-3 rounded fs-5",style:{background:"rgba(38, 81, 110, 0.9)"}},C={class:"mb-0"},R=t("i",{class:"bi bi-pin-fill fs-3 text-white position-absolute top-0 start-5",style:{transform:"rotate(-33deg) translate(-50%, -50%)"}},null,-1),H=t("i",{class:"bi bi-pin fs-2 text-primary position-absolute top-0 start-5",style:{transform:"rotate(-33deg) translate(-50%, -50%)"}},null,-1),N=["innerHTML"],U={key:0,class:"col-md-3"},F={class:"card border-0 sticky-top",style:{top:"100px"}},M={class:"card-body"},O=t("h5",{class:"fw-bold text-secondary"},"相關課程推薦",-1),$={class:"overflow-hidden"},j={class:"ratio ratio-16x9"},q=["src"],Y={class:"p-3 mb-0"};function z(e,l,o,G,s,u){const m=v("RouterLink");return a(),i("div",y,[s.articleData.author?(a(),i("div",x,[t("h3",k,r(s.articleData.title),1),t("span",L,[B,d(r(s.articleData.author),1)]),t("span",null,[A,d(" "+r(u.switchTime(s.articleData.create_at)),1)]),t("div",P,[t("div",V,[t("div",E,[t("img",{class:"img-cover",src:s.articleData.image,alt:""},null,8,I)]),t("div",S,[t("p",C,r(s.articleData.description),1),R,H]),t("article",{class:"my-5 fs-5",innerHTML:s.articleData.content},null,8,N)]),s.similarClassData?(a(),i("div",U,[t("div",F,[t("div",M,[O,(a(!0),i(b,null,D(s.similarClassData,c=>(a(),i("div",{class:"my-3 border border-end border-bottom rounded-3 hover-shadow",key:c.id},[f(m,{to:`/course/${c.id}`,class:"text-decoration-none text-dark"},{default:T(()=>[t("div",$,[t("div",j,[t("img",{class:"img-cover img-hover-enlarge",src:c.imageUrl,alt:""},null,8,q)])]),t("h6",Y,r(c.title),1)]),_:2},1032,["to"])]))),128))])])])):_("",!0)])])):_("",!0)])}const K=g(w,[["render",z]]);export{K as default};
