import{_ as v,m as d,b as h,l as C,r as D,o as a,c as i,e as t,t as e,j as l,F as N,D as S,i as m,d as b,w as p,G as x}from"./index-c63932d6.js";import{h as u}from"./zh-tw-a6f00c05.js";import{c as g}from"./cartStore-d1f49025.js";import{f as k}from"./frontOrderStore-558aae30.js";import{b as f}from"./bookmarkStore-19523483.js";import"./Toast-7de7d469.js";const{VITE_APP_URL:A,VITE_APP_PATH:L}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{searchData:[]}},props:["keywordName"],mounted(){console.log(this.keywordName),this.searchKeyword()},created(){u.locale("zh-tw")},computed:{...d(g,["cartList","ShowCourseList","showCheck"]),...d(k,["showFinalStuOrderData"]),...d(f,["showbookmarkData"])},methods:{...h(g,["getCartList","addToCart","checkedClass","getAllCourse"]),...h(k,["getStuOrderList","matchFundingTarget","matchStuNumAndClass"]),...h(f,["setLocalStorageBookmark","getLocalStorageBookmark","BookmarkAction"]),countLeftDay(o){return Date.parse(new Date)>o?"已":(o=new Date(o).toISOString(),u(o).fromNow())},searchKeyword(){console.log(this.keywordName),C.get(`${A}/api/${L}/products/all`).then(o=>{console.log(o),this.searchData=[],o.data.products.forEach(n=>{console.log(typeof n.content),(n.content.includes(this.keywordName)||n.description.includes(this.keywordName)||n.title.includes(this.keywordName)||n.category.includes(this.keywordName))&&this.searchData.push(n)}),console.log(this.searchData)}).catch(o=>{console.log(o)})}}},$={class:"full-height mb-5"},B={class:"container mt-5"},P={class:"h5"},E={class:"text-primary fw-bold h4"},V={key:0,class:"container mt-5"},F={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3"},O={key:0,class:"card h-100 hover-shadow"},j={class:"ratio ratio-16x9 overflow-hidden"},z=["src"],I={class:"position-absolute top-rem-1 start-rem-1"},R={class:"badge bg-darkblue me-2"},U=t("span",{class:"badge bg-secondary"}," 已開課",-1),H={class:"card-body"},K={class:"h-100 d-flex flex-column"},G={class:"d-flex justify-content-between"},M=["onClick"],q=["onClick"],J={class:"mt-auto"},Q={class:"mb-2"},W={class:"mb-0"},X=t("i",{class:"bi bi-book"},null,-1),Y={class:"mb-0"},Z=t("i",{class:"bi bi-card-list"},null,-1),tt={class:"text-primary fw-bold h3"},st={class:"d-flex justify-content-between mt-2 align-items-center"},ot={class:"text-muted mb-0"},et={key:0,href:"#/cart",type:"button",class:"btn btn-primary text-white btn-sm"},at=["disabled","onClick"],it={key:1,class:"card h-100 hover-shadow"},nt={class:"ratio ratio-16x9 overflow-hidden"},rt=["src"],lt={class:"position-absolute top-rem-1 start-rem-1"},ct={class:"badge bg-darkblue me-2"},dt=t("span",{class:"badge bg-white text-primary fw-bold"}," 募資中",-1),ht={class:"card-body"},mt={class:"h-100 d-flex flex-column"},_t={class:"d-flex justify-content-between"},bt=["onClick"],pt=["onClick"],ut={key:0,class:"mt-auto"},gt={class:"mb-0 mt-1 mb-2"},kt={class:"text-primary fw-bold h3"},ft={class:"progress",style:{height:"20px"}},yt={class:"d-flex justify-content-between"},wt={class:"mb-0 text-muted"},vt={class:"text-muted mb-0"},Ct={class:"text-secondary fw-bolder"},Dt={class:"d-flex justify-content-between mt-2"},Nt={class:"text-muted mb-0"},St={key:0,href:"#/cart",type:"button",class:"btn btn-primary text-white btn-sm"},xt=["onClick"];function At(o,n,y,Lt,c,w){const _=D("RouterLink");return a(),i("div",$,[t("div",B,[t("p",P,[t("span",E,e(y.keywordName),1),l(" 的搜尋結果，共 "+e(c.searchData.length)+" 筆 ",1)])]),c.searchData?(a(),i("div",V,[t("div",F,[(a(!0),i(N,null,S(c.searchData,s=>(a(),i("div",{class:"col position-relative",key:s.id},[s.courseStatus==="classOpen"?(a(),i("div",O,[b(_,{to:`/course/${s.id}`,class:"text-decoration-none"},{default:p(()=>[t("div",j,[t("img",{src:s.imageUrl,class:"card-img-top img-cover img-hover-enlarge",alt:"..."},null,8,z)]),t("div",I,[t("span",R,e(s.category),1),U])]),_:2},1032,["to"]),t("div",H,[t("div",K,[t("div",G,[t("h5",null,e(s.title),1),o.showbookmarkData.includes(s.id)?(a(),i("i",{key:0,class:"bi bi-bookmark-fill img-hover-enlarge",onClick:r=>o.BookmarkAction(s.id),style:{"font-size":"1.5rem",color:"orange","font-weight":"500",cursor:"pointer"}},null,8,M)):(a(),i("i",{key:1,class:"bi bi-bookmark img-hover-enlarge",onClick:r=>o.BookmarkAction(s.id),style:{"font-size":"1.5rem",color:"orange","font-weight":"500",cursor:"pointer"}},null,8,q))]),t("div",J,[t("div",Q,[t("p",W,[X,l(" "+e(s.unit)+" 小時 ",1)]),t("p",Y,[Z,l(" "+e(s.classSectionNum)+" 章節 "+e(s.classUnitNum)+" 單元 ",1)])]),t("p",null,[t("del",null,"NT$ "+e(s.origin_price),1),t("span",tt," NT$ "+e(s.price),1)]),t("div",st,[t("p",ot," 同學 "+e(o.matchStuNumAndClass(s.id))+" 人 ",1),o.showCheck.includes(s.id)?(a(),i("a",et," 已選購，結帳去 ")):(a(),i("button",{key:1,disabled:o.sendLoadItem===!0,onClick:r=>o.addToCart(s.id),class:"btn btn-outline-primary btn-sm"}," 加入購物車 ",8,at))])])])])])):s.courseStatus==="classFunding"?(a(),i("div",it,[b(_,{to:`/course/${s.id}`,class:"text-decoration-none"},{default:p(()=>[t("div",nt,[t("img",{src:s.imageUrl,class:"card-img-top img-cover img-hover-enlarge",alt:"..."},null,8,rt)]),t("div",lt,[t("span",ct,e(s.category),1),dt])]),_:2},1032,["to"]),t("div",ht,[t("div",mt,[t("div",_t,[t("h5",null,e(s.title),1),o.showbookmarkData.includes(s.id)?(a(),i("i",{key:0,class:"bi bi-bookmark-fill img-hover-enlarge",onClick:r=>o.BookmarkAction(s.id),style:{"font-size":"1.5rem",color:"orange","font-weight":"500",cursor:"pointer"}},null,8,bt)):(a(),i("i",{key:1,class:"bi bi-bookmark img-hover-enlarge",onClick:r=>o.BookmarkAction(s.id),style:{"font-size":"1.5rem",color:"orange","font-weight":"500",cursor:"pointer"}},null,8,pt))]),o.showFinalStuOrderData?(a(),i("div",ut,[t("p",gt,[l(" 募資價 "),t("span",kt," NT$ "+e(s.funding_price),1)]),t("div",ft,[t("div",{class:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:x({width:o.matchFundingTarget(s.id)+"%"})},null,4)]),t("div",yt,[t("p",wt," 達標率 "+e(o.matchFundingTarget(s.id))+" % ",1),t("p",vt,[t("span",Ct,e(w.countLeftDay(s.fundingEndDate)),1),l(" 結束 ")])]),t("div",Dt,[t("p",Nt," 同學 "+e(o.matchStuNumAndClass(s.id))+" 人 ",1),o.showCheck.includes(s.id)?(a(),i("a",St," 已選購，結帳去 ")):(a(),i("button",{key:1,onClick:r=>o.addToCart(s.id),class:"btn btn-outline-primary btn-sm"}," 加入購物車 ",8,xt))])])):m("",!0)])])])):m("",!0)]))),128))])])):m("",!0)])}const Ft=v(T,[["render",At]]);export{Ft as default};