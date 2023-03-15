import{_ as A,H as w,l as y,r as D,o as a,c,e as t,d as h,w as g,i as p,F as m,D as v,j as b,t as i,I as x,f}from"./index-c63932d6.js";import"./Toast-7de7d469.js";const{VITE_APP_URL:k,VITE_APP_PATH:P}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{articleListData:{},currentPage:1,totalPage:1,allarticleListData:[],allarticleTag:[],clickTagData:[],showTargetTag:"",selectArticle:[]}},mounted(){this.getArticleList()},watch:{currentPage(){this.getArticleList(this.currentPage)},totalPage(){this.getAllArticleList(this.totalPage)}},methods:{searchTagArticle(n){window.scrollTo(0,400),this.showTargetTag=n,console.log(n),console.log(this.allarticleListData);const o=this.allarticleListData.filter(d=>{if(d.tag.includes(n))return d});this.clickTagData=[...w(o)],console.log(this.clickTagData)},getAllArticleList(n){console.log(n);const o=[];for(let l=1;l<=n;l++)o.push(l);console.log(o);const d=o.map(l=>y.get(`${k}/api/${P}/articles?page=${l}`));console.log(d),Promise.all(d).then(l=>{console.log(l);let s=[];l.forEach(r=>{s.push(r.data.articles)}),this.allarticleListData=[...w(s)].flat(),console.log(this.allarticleListData);const _=[];this.allarticleListData.forEach(r=>{r.tag.forEach(e=>{_.includes(e)||_.push(e)})}),this.allarticleTag=_}).catch(l=>{console.log(l)})},switchTime(n){return new Date(n*1e3).toLocaleDateString()},changePage(n){console.log(n),this.currentPage=n},getArticleList(n=1){y.get(`${k}/api/${P}/articles?page=${n}`).then(o=>{console.log(o.data),this.articleListData=o.data;const d=[];if(o.data.articles.length>=3){for(let l=0;l<=2;l++)d.push(o.data.articles[l]);console.log(d),this.selectArticle=d}this.articleListData.articles=o.data.articles.sort((l,s)=>s.create_at-l.create_at),this.currentPage=o.data.pagination.current_page,this.totalPage=o.data.pagination.total_pages}).catch(o=>{console.log(o)})}}},T={class:"full-height mb-5"},C={class:"bg-light py-5"},E={class:"container"},V={class:"row"},j={key:0,class:"col-12"},I=t("h3",{class:"my-3 fw-bold"},"精選文章",-1),R={class:"row g-4"},N={class:"col-lg-6"},B={class:"h-100 position-relative"},H={class:"overflow-hidden"},S={class:"ratio ratio-4x3"},U=["src"],F={class:"position-absolute bottom-0 start-0 end-0 p-2",style:{background:`linear-gradient(
                          to top,
                          black,
                          rgba(226, 222, 222, 0.1)
                        )`}},M={class:"text-white fw-bold mb-0 p-2"},O={class:"col-lg-6"},z={class:"h-100 d-flex flex-column justify-content-between"},q={class:"row align-items-center mb-3 g-2"},G={class:"col-8"},J={class:"link-style d-inline-block"},K={class:"text-muted fs-7",style:{}},Q={class:"col-4"},W={class:"overflow-hidden"},X={class:"ratio ratio-4x3"},Y=["src"],Z={class:"row align-items-center mb-3 g-2"},$={class:"col-8"},tt={class:"link-style d-inline-block"},et={class:"text-muted fs-7"},st={class:"col-4"},ot={class:"overflow-hidden"},it={class:"ratio ratio-4x3"},lt=["src"],at={class:"container py-5"},ct={class:"row flex-md-row-reverse gy-3 g-4"},nt={class:"col-md-3"},rt={class:"sticky-top",style:{top:"110px"}},dt=t("h4",{class:"fw-bold mb-3"},"主題標籤探索",-1),_t={class:"row g-1"},ht={key:0,class:"col-12"},gt={class:"card bg-light border-0",style:{"background-image":"url(./img/content-bg.png)"}},ut={class:"card-body"},mt=["onClick"],vt={class:"col-md-9"},pt={key:0,class:"mb-5 border rounded p-3 border-primary border-top-0 border-bottom-0"},bt={class:"fw-bold mb-3"},ft={class:"text-primary"},xt={class:"col-4"},wt={class:"overflow-hidden"},yt={class:"ratio ratio-4x3"},kt=["src"],Pt={class:"col-8"},At={class:"d-none d-md-block text-muted"},Dt={class:"me-4"},Lt=t("i",{class:"bi bi-person-vcard me-2"},null,-1),Tt=t("i",{class:"bi bi-calendar2-week me-2"},null,-1),Ct=t("h4",{class:"fw-bold my-3"},"最新文章",-1),Et={class:"col-4"},Vt={class:"overflow-hidden"},jt={class:"ratio ratio-4x3 hoverItem"},It=["src"],Rt={class:"col-8"},Nt=t("br",null,null,-1),Bt={class:"d-inline-block link-style"},Ht={class:"d-none d-md-block text-muted"},St={class:"me-2"},Ut=t("i",{class:"bi bi-person-vcard me-2"},null,-1),Ft={key:0,"aria-label":"Page navigation "},Mt={class:"pagination justify-content-center"},Ot=t("a",{class:"page-link",href:"#","aria-label":"Previous"},[t("span",{"aria-hidden":"true"},"«")],-1),zt=[Ot],qt=["onClick"],Gt={class:"page-link",href:"#"},Jt=t("a",{class:"page-link",href:"#","aria-label":"Next"},[t("span",{"aria-hidden":"true"},"»")],-1),Kt=[Jt];function Qt(n,o,d,l,s,_){const r=D("RouterLink");return a(),c("div",T,[t("div",C,[t("div",E,[t("div",V,[s.selectArticle.length>0?(a(),c("div",j,[I,t("div",R,[t("div",N,[t("div",B,[h(r,{to:`/article/${s.selectArticle[0].id}`,class:"text-decoration-none"},{default:g(()=>[t("div",H,[t("div",S,[t("img",{class:"img-cover img-hover-enlarge",src:s.selectArticle[0].image,alt:""},null,8,U)])]),t("div",F,[t("h4",M,i(s.selectArticle[0].title),1)])]),_:1},8,["to"])])]),t("div",O,[t("div",z,[t("div",q,[t("div",G,[h(r,{to:`/article/${s.selectArticle[1].id}`,class:"text-decoration-none text-dark"},{default:g(()=>[t("h5",J,i(s.selectArticle[1].title),1),t("p",K,i(s.selectArticle[1].description),1)]),_:1},8,["to"])]),t("div",Q,[h(r,{to:`/article/${s.selectArticle[1].id}`,class:"text-decoration-none text-dark"},{default:g(()=>[t("div",W,[t("div",X,[t("img",{style:{},class:"img-cover img-hover-enlarge",src:s.selectArticle[1].image,alt:""},null,8,Y)])])]),_:1},8,["to"])])]),t("div",Z,[t("div",$,[h(r,{to:`/article/${s.selectArticle[2].id}`,class:"text-decoration-none text-dark"},{default:g(()=>[t("h5",tt,i(s.selectArticle[2].title),1),t("p",et,i(s.selectArticle[2].description),1)]),_:1},8,["to"])]),t("div",st,[h(r,{to:`/article/${s.selectArticle[2].id}`,class:"text-decoration-none text-dark"},{default:g(()=>[t("div",ot,[t("div",it,[t("img",{style:{},class:"img-cover img-hover-enlarge",src:s.selectArticle[2].image,alt:""},null,8,lt)])])]),_:1},8,["to"])])])])])])])):p("",!0)])])]),t("div",at,[t("div",ct,[t("div",nt,[t("div",rt,[dt,t("div",_t,[s.allarticleTag?(a(),c("div",ht,[t("div",gt,[t("div",ut,[(a(!0),c(m,null,v(s.allarticleTag,e=>(a(),c("a",{onClick:f(u=>_.searchTagArticle(e),["prevent"]),key:e+"jojo",href:"",class:"m-1 badge text-decoration-none rounded-pill fs-7 hover-bg-primary"},"#"+i(e),9,mt))),128))])])])):p("",!0)])])]),t("div",vt,[s.clickTagData.length>0?(a(),c("div",pt,[t("h4",bt,[b(" 關鍵字探索文章 "),t("span",ft," #"+i(s.showTargetTag),1)]),(a(!0),c(m,null,v(s.clickTagData,e=>(a(),c("div",{class:"row align-items-center g-3 border-bottom py-3",key:e.id},[t("div",xt,[h(r,{to:`/article/${e.id}`,class:"text-decoration-none"},{default:g(()=>[t("div",wt,[t("div",yt,[t("img",{style:{},class:"img-cover img-hover-enlarge",src:e.image,alt:""},null,8,kt)])])]),_:2},1032,["to"])]),t("div",Pt,[h(r,{to:`/article/${e.id}`,class:"text-decoration-none text-dark"},{default:g(()=>[(a(!0),c(m,null,v(e.tag,u=>(a(),c("span",{key:u+"yoyo",class:"badge bg-light text-muted me-2 mb-2 border-bottom"},i(u),1))),128)),t("h5",null,i(e.title),1),t("p",At,i(e.description),1),t("span",Dt,[Lt,b(i(e.author),1)]),t("span",null,[Tt,b(" "+i(_.switchTime(e.create_at)),1)])]),_:2},1032,["to"])])]))),128))])):p("",!0),Ct,(a(!0),c(m,null,v(s.articleListData.articles,e=>(a(),c("div",{class:"row align-items-center g-3 border-bottom py-3",key:e.id},[t("div",Et,[h(r,{to:`/article/${e.id}`,class:"text-decoration-none"},{default:g(()=>[t("div",Vt,[t("div",jt,[t("img",{style:{},class:"img-cover img-hover-enlarge",src:e.image,alt:""},null,8,It)])])]),_:2},1032,["to"])]),t("div",Rt,[h(r,{to:`/article/${e.id}`,class:"text-decoration-none text-dark hoverItem"},{default:g(()=>[(a(!0),c(m,null,v(e.tag,u=>(a(),c("span",{key:u+"yoyo",class:"badge bg-light text-muted me-2 mb-2 border-bottom"},i(u),1))),128)),Nt,t("h5",Bt,i(e.title),1),t("p",Ht,i(e.description),1),t("span",St,[Ut,b(i(e.author),1)]),t("span",null,i(_.switchTime(e.create_at)),1)]),_:2},1032,["to"])])]))),128))])])]),s.articleListData.pagination?(a(),c("nav",Ft,[t("ul",Mt,[t("li",{class:x(["page-item",{disabled:!s.articleListData.pagination.has_pre}]),onClick:o[0]||(o[0]=f(e=>_.changePage(s.currentPage-1),["prevent"]))},zt,2),(a(!0),c(m,null,v(s.articleListData.pagination.total_pages,e=>(a(),c("li",{class:x(["page-item",{active:e===s.currentPage}]),key:e+"jojo",onClick:f(u=>_.changePage(e),["prevent"])},[t("a",Gt,i(e),1)],10,qt))),128)),t("li",{class:x(["page-item",{disabled:!s.articleListData.pagination.has_next}]),onClick:o[1]||(o[1]=f(e=>_.changePage(s.currentPage+1),["prevent"]))},Kt,2)])])):p("",!0)])}const Yt=A(L,[["render",Qt]]);export{Yt as default};