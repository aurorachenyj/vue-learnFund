import{_ as A,H as x,n as y,r as T,o as a,c as l,a as t,e as _,f as h,j as p,F as m,D as v,k as b,t as i,I as w,h as f}from"./index-8ab29a44.js";const{VITE_APP_URL:k,VITE_APP_PATH:P}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vue-learnFund/",MODE:"production",DEV:!1,PROD:!0},D={data(){return{articleListData:{},currentPage:1,totalPage:1,allarticleListData:[],allarticleTag:[],clickTagData:[],showTargetTag:"",selectArticle:[]}},mounted(){this.getArticleList()},watch:{currentPage(){this.getArticleList(this.currentPage)},totalPage(){this.getAllArticleList(this.totalPage)}},methods:{searchTagArticle(r){window.scrollTo(0,400),window.screen.width<=992?window.scrollTo(0,800):window.screen.width<=768&&window.scrollTo(0,1e3),this.showTargetTag=r;const o=this.allarticleListData.filter(g=>{if(g.tag.includes(r))return g});this.clickTagData=[...x(o)]},getAllArticleList(r){const o=[];for(let c=1;c<=r;c++)o.push(c);const g=o.map(c=>y.get(`${k}/api/${P}/articles?page=${c}`));Promise.all(g).then(c=>{let s=[];c.forEach(n=>{s.push(n.data.articles)}),this.allarticleListData=[...x(s)].flat();const d=[];this.allarticleListData.forEach(n=>{n.tag.forEach(e=>{d.includes(e)||d.push(e)})}),this.allarticleTag=d}).catch(c=>{console.log(c)})},switchTime(r){return new Date(r*1e3).toLocaleDateString()},changePage(r){this.currentPage=r},getArticleList(r=1){y.get(`${k}/api/${P}/articles?page=${r}`).then(o=>{this.articleListData=o.data;const g=[];if(o.data.articles.length>=3){for(let c=0;c<=2;c++)g.push(o.data.articles[c]);this.selectArticle=g}this.articleListData.articles=o.data.articles.sort((c,s)=>s.create_at-c.create_at),this.currentPage=o.data.pagination.current_page,this.totalPage=o.data.pagination.total_pages}).catch(o=>{console.log(o)})}}},L={class:"full-height mb-5"},C={class:"bg-light py-5"},E={class:"container"},V={class:"row"},j={key:0,class:"col-12"},I=t("h3",{class:"my-3 fw-bold","data-aos":"fade-down"},"精選文章",-1),R={class:"row g-4","data-aos":"fade-down"},N={class:"col-lg-6"},B={class:"h-100 position-relative"},F={class:"overflow-hidden"},H={class:"ratio ratio-4x3"},S=["src"],U={class:"position-absolute bottom-0 start-0 end-0 p-2",style:{background:`linear-gradient(
                          to top,
                          black,
                          rgba(226, 222, 222, 0.1)
                        )`}},M={class:"text-white fw-bold mb-0 p-2"},O={class:"col-lg-6"},z={class:"h-100 d-flex flex-column justify-content-between"},q={class:"row align-items-center mb-3 g-2"},G={class:"col-8"},J={class:"link-style d-inline-block"},K={class:"text-muted fs-7",style:{}},Q={class:"col-4"},W={class:"overflow-hidden"},X={class:"ratio ratio-4x3"},Y=["src"],Z={class:"row align-items-center mb-3 g-2"},$={class:"col-8"},tt={class:"link-style d-inline-block"},et={class:"text-muted fs-7"},st={class:"col-4"},ot={class:"overflow-hidden"},it={class:"ratio ratio-4x3"},at=["src"],lt={class:"container py-5","data-aos":"fade-up"},ct={class:"row flex-md-row-reverse gy-3 g-4"},nt={class:"col-md-3"},rt={class:"sticky-top",style:{top:"110px"}},dt=t("h4",{class:"fw-bold mb-3"},"主題標籤探索",-1),_t={class:"row g-1"},ht={key:0,class:"col-12"},gt={class:"card bg-light border-0",style:{"background-image":"url(./img/content-bg.png)"}},ut={class:"card-body"},mt=["onClick"],vt={class:"col-md-9"},pt={key:0,class:"mb-5 border rounded p-3 border-primary border-top-0 border-bottom-0"},bt={class:"fw-bold mb-3"},ft={class:"text-primary"},wt={class:"col-4"},xt={class:"overflow-hidden"},yt={class:"ratio ratio-4x3"},kt=["src"],Pt={class:"col-8"},At={class:"d-none d-md-block text-muted"},Tt={class:"me-4"},Dt=t("i",{class:"bi bi-person-vcard me-2"},null,-1),Lt=t("i",{class:"bi bi-calendar2-week me-2"},null,-1),Ct=t("h4",{class:"fw-bold my-3"},"最新文章",-1),Et={class:"col-4"},Vt={class:"overflow-hidden"},jt={class:"ratio ratio-4x3 hoverItem"},It=["src"],Rt={class:"col-8"},Nt=t("br",null,null,-1),Bt={class:"d-inline-block link-style"},Ft=t("br",null,null,-1),Ht={class:"d-none d-md-block text-muted"},St={class:"me-2"},Ut=t("i",{class:"bi bi-person-vcard me-2"},null,-1),Mt={key:0,"aria-label":"Page navigation "},Ot={class:"pagination justify-content-center"},zt=t("a",{class:"page-link",href:"#","aria-label":"Previous"},[t("span",{"aria-hidden":"true"},"«")],-1),qt=[zt],Gt=["onClick"],Jt={class:"page-link",href:"#"},Kt=t("a",{class:"page-link",href:"#","aria-label":"Next"},[t("span",{"aria-hidden":"true"},"»")],-1),Qt=[Kt];function Wt(r,o,g,c,s,d){const n=T("RouterLink");return a(),l("div",L,[t("div",C,[t("div",E,[t("div",V,[s.selectArticle.length>0?(a(),l("div",j,[I,t("div",R,[t("div",N,[t("div",B,[_(n,{to:`/article/${s.selectArticle[0].id}`,class:"text-decoration-none"},{default:h(()=>[t("div",F,[t("div",H,[t("img",{class:"img-cover img-hover-enlarge",src:s.selectArticle[0].image,alt:""},null,8,S)])]),t("div",U,[t("h4",M,i(s.selectArticle[0].title),1)])]),_:1},8,["to"])])]),t("div",O,[t("div",z,[t("div",q,[t("div",G,[_(n,{to:`/article/${s.selectArticle[1].id}`,class:"text-decoration-none text-dark"},{default:h(()=>[t("h5",J,i(s.selectArticle[1].title),1),t("p",K,i(s.selectArticle[1].description),1)]),_:1},8,["to"])]),t("div",Q,[_(n,{to:`/article/${s.selectArticle[1].id}`,class:"text-decoration-none text-dark"},{default:h(()=>[t("div",W,[t("div",X,[t("img",{style:{},class:"img-cover img-hover-enlarge",src:s.selectArticle[1].image,alt:""},null,8,Y)])])]),_:1},8,["to"])])]),t("div",Z,[t("div",$,[_(n,{to:`/article/${s.selectArticle[2].id}`,class:"text-decoration-none text-dark"},{default:h(()=>[t("h5",tt,i(s.selectArticle[2].title),1),t("p",et,i(s.selectArticle[2].description),1)]),_:1},8,["to"])]),t("div",st,[_(n,{to:`/article/${s.selectArticle[2].id}`,class:"text-decoration-none text-dark"},{default:h(()=>[t("div",ot,[t("div",it,[t("img",{style:{},class:"img-cover img-hover-enlarge",src:s.selectArticle[2].image,alt:""},null,8,at)])])]),_:1},8,["to"])])])])])])])):p("",!0)])])]),t("div",lt,[t("div",ct,[t("div",nt,[t("div",rt,[dt,t("div",_t,[s.allarticleTag?(a(),l("div",ht,[t("div",gt,[t("div",ut,[(a(!0),l(m,null,v(s.allarticleTag,e=>(a(),l("a",{onClick:f(u=>d.searchTagArticle(e),["prevent"]),key:e+"jojo",href:"",class:"m-1 badge text-decoration-none rounded-pill fs-7 hover-bg-primary"},"#"+i(e),9,mt))),128))])])])):p("",!0)])])]),t("div",vt,[s.clickTagData.length>0?(a(),l("div",pt,[t("h4",bt,[b(" 關鍵字探索文章 "),t("span",ft," #"+i(s.showTargetTag),1)]),(a(!0),l(m,null,v(s.clickTagData,e=>(a(),l("div",{class:"row align-items-center g-3 border-bottom py-3",key:e.id},[t("div",wt,[_(n,{to:`/article/${e.id}`,class:"text-decoration-none"},{default:h(()=>[t("div",xt,[t("div",yt,[t("img",{style:{},class:"img-cover img-hover-enlarge",src:e.image,alt:""},null,8,kt)])])]),_:2},1032,["to"])]),t("div",Pt,[_(n,{to:`/article/${e.id}`,class:"text-decoration-none text-dark"},{default:h(()=>[(a(!0),l(m,null,v(e.tag,u=>(a(),l("span",{key:u+"yoyo",class:"badge bg-light text-muted me-2 mb-2 border-bottom"},i(u),1))),128)),t("h5",null,i(e.title),1),t("p",At,i(e.description),1),t("span",Tt,[Dt,b(i(e.author),1)]),t("span",null,[Lt,b(" "+i(d.switchTime(e.create_at)),1)])]),_:2},1032,["to"])])]))),128))])):p("",!0),Ct,(a(!0),l(m,null,v(s.articleListData.articles,e=>(a(),l("div",{class:"row align-items-center g-3 border-bottom py-3",key:e.id},[t("div",Et,[_(n,{to:`/article/${e.id}`,class:"text-decoration-none"},{default:h(()=>[t("div",Vt,[t("div",jt,[t("img",{style:{},class:"img-cover img-hover-enlarge",src:e.image,alt:""},null,8,It)])])]),_:2},1032,["to"])]),t("div",Rt,[_(n,{to:`/article/${e.id}`,class:"text-decoration-none text-dark hoverItem"},{default:h(()=>[(a(!0),l(m,null,v(e.tag,u=>(a(),l("span",{key:u+"yoyo",class:"badge bg-light text-muted me-2 mb-2 border-bottom"},i(u),1))),128)),Nt,t("h5",Bt,i(e.title),1),Ft,t("p",Ht,i(e.description),1),t("span",St,[Ut,b(i(e.author),1)]),t("span",null,i(d.switchTime(e.create_at)),1)]),_:2},1032,["to"])])]))),128))])])]),s.articleListData.pagination?(a(),l("nav",Mt,[t("ul",Ot,[t("li",{class:w(["page-item",{disabled:!s.articleListData.pagination.has_pre}]),onClick:o[0]||(o[0]=f(e=>d.changePage(s.currentPage-1),["prevent"]))},qt,2),(a(!0),l(m,null,v(s.articleListData.pagination.total_pages,e=>(a(),l("li",{class:w(["page-item",{active:e===s.currentPage}]),key:e+"jojo",onClick:f(u=>d.changePage(e),["prevent"])},[t("a",Jt,i(e),1)],10,Gt))),128)),t("li",{class:w(["page-item",{disabled:!s.articleListData.pagination.has_next}]),onClick:o[1]||(o[1]=f(e=>d.changePage(s.currentPage+1),["prevent"]))},Qt,2)])])):p("",!0)])}const Yt=A(D,[["render",Wt]]);export{Yt as default};
