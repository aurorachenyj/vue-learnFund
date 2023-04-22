import{_ as x,m as h,d as m,p as v,r as y,o,c as a,F as D,E as w,a as t,l as g,e as _,f as u,t as r,k}from"./index-123c8591.js";import{b as p}from"./bookmarkStore-d24eb969.js";import{c as b}from"./cartStore-ca223e58.js";import{T as B}from"./Toast-54279abc.js";const{VITE_APP_URL:C,VITE_APP_PATH:T}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vue-learnFund/",MODE:"production",DEV:!1,PROD:!0},S={data(){return{bookmarkClassDetail:[]}},mounted(){this.getLocalStorageBookmark()},computed:{...h(p,["showbookmarkData"]),...h(b,["addToCart"])},watch:{showbookmarkData(){this.getBookmarkDetail()}},methods:{...m(p,["getLocalStorageBookmark","setLocalStorageBookmark"]),...m(b,["showCheck"]),moveToCart(c){this.addToCart(c);const e=this.showbookmarkData.indexOf(c);this.showbookmarkData.splice(e,1),this.setLocalStorageBookmark(),this.getBookmarkDetail()},delBookmark(c){const e=this.showbookmarkData.indexOf(c);this.showbookmarkData.splice(e,1),this.setLocalStorageBookmark(),B.fire({icon:"success",title:"移除收藏"}),this.getBookmarkDetail()},getBookmarkDetail(){this.bookmarkClassDetail=[];const c=this.showbookmarkData.map(e=>v.get(`${C}/api/${T}/product/${e}`));Promise.all(c).then(e=>{e.forEach(i=>{this.bookmarkClassDetail.push(i.data.product)})}).catch(e=>{console.log(e)})}}},P={class:"container full-height pb-5"},L=t("h4",{class:"my-5"},[g("我收藏的課程 "),t("i",{class:"bi bi-bookmark-heart"})],-1),E={key:0,class:"d-flex justify-content-center mb-5"},V=t("div",{class:"col-12 col-md-8 border border-3 rounded-3 py-3"},[t("p",{class:"text-center"},[g(" 尚未收藏任何課程 "),t("br"),t("a",{href:".#/courses",class:"btn btn-outline-primary mt-2"}," 探索課程 ")])],-1),A=[V],$={key:1},N={class:"col-md-3"},O=["src"],R={class:"col-md-6"},F={class:"mb-0"},I={class:"mt-3 d-flex align-items-center"},U={key:0,class:"badge bg-darkblue me-3"},H={key:1,class:"badge bg-secondary me-3"},j={key:2,class:"mb-0 fw-bold text-primary"},M={key:3,class:"mb-0 fw-bold text-primary"},q={class:"col-md-3"},z={class:"text-end text-md-start"},G={class:"btn-group btn-group-sm",role:"group","aria-label":"Basic outlined example"},J=["onClick"],K=t("i",{class:"bi bi-trash3 text-dark"},null,-1),Q=[K],W=["onClick"];function X(c,e,i,Y,n,l){const d=y("RouterLink");return o(),a("div",P,[L,n.bookmarkClassDetail.length===0?(o(),a("div",E,A)):(o(),a("div",$,[(o(!0),a(D,null,w(n.bookmarkClassDetail,s=>(o(),a("div",{class:"row align-items-center gy-3 pb-3 mb-3 border-bottom",key:s.id},[t("div",N,[_(d,{to:`/course/${s.id}`,class:"text-white text-decoration-none"},{default:u(()=>[t("img",{src:s.imageUrl,style:{width:"10rem",height:"8rem"},class:"img-cover d-none d-md-block",alt:""},null,8,O)]),_:2},1032,["to"])]),t("div",R,[_(d,{to:`/course/${s.id}`,class:"text-decoration-none text-dark fw-bold"},{default:u(()=>[t("h5",F,r(s.title),1)]),_:2},1032,["to"]),t("div",I,[s.courseStatus==="classOpen"?(o(),a("span",U,"已開課")):s.courseStatus==="classFunding"?(o(),a("span",H,"募資中")):k("",!0),s.courseStatus==="classOpen"?(o(),a("h5",j," NT$ "+r(s.price),1)):s.courseStatus==="classFunding"?(o(),a("h5",M," NT$ "+r(s.funding_price),1)):k("",!0)])]),t("div",q,[t("div",z,[t("div",G,[t("button",{onClick:f=>l.delBookmark(s.id),type:"button",class:"btn btn-outline-light me-3"},Q,8,J),t("button",{onClick:f=>l.moveToCart(s.id),type:"button",class:"btn btn-outline-primary"}," 移至購物車 ",8,W)])])])]))),128))]))])}const ot=x(S,[["render",X]]);export{ot as default};
