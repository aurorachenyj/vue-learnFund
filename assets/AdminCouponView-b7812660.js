import{M as w}from"./modal-f4dabfb3.js";import{_ as T,o as d,b as a,d as e,i as p,t as r,h as x,r as C,e as f,p as _,s as g,y as V,F as v,S as M,q as m,l as I,x as y}from"./index-41230365.js";import{T as P}from"./Toast-684da36b.js";import"./base-component-9a1deeb6.js";const E={data(){return{modal:""}},props:["delId","del","delClassTitle","delClassId","delArticleTitle","delArticleId"],methods:{hideModal(){this.modal.hide()},showModal(){this.modal.show()},delItem(){this.$emit("delItem"),this.modal.hide()}},mounted(){this.modal=new w(this.$refs.modal)}},U={ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},R={class:"modal-dialog"},S={class:"modal-content"},B=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"deleteModalLabel"},"確定刪除?"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),O={class:"modal-body"},H={key:0},N={class:"text-danger"},j={key:1},q={class:"text-danger"},F={key:2},z={class:"text-danger"},G={key:3},J={class:"text-danger"},K={class:"modal-footer justify-content-center"},Q=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function W(n,t,l,u,o,i){return d(),a("div",U,[e("div",R,[e("div",S,[B,e("div",O,[l.delId?(d(),a("p",H,[p(" id： "),e("span",N,r(l.delId),1),p(" 的訂單 ")])):l.del?(d(),a("p",j,[p(" 優惠券名稱： "),e("span",q,r(l.del),1)])):l.delClassTitle?(d(),a("p",F,[p(" 課程名稱： "),e("span",z,r(l.delClassTitle),1)])):l.delArticleTitle?(d(),a("p",G,[p(" 文章標題： "),e("span",J,r(l.delArticleTitle),1)])):x("",!0),p(" （注意，刪除後無法復原！） ")]),e("div",K,[Q,e("button",{onClick:t[0]||(t[0]=(...h)=>i.delItem&&i.delItem(...h)),type:"button",class:"btn btn-danger"}," 確定刪除 ")])])])],512)}const X=T(E,[["render",W]]),{VITE_APP_URL:D,VITE_APP_PATH:$}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},Y={data(){return{modal:"",isLoading:!1,tempCoupon:{title:"",is_enabled:1,percent:0,due_date:0,code:"0"}}},props:{editItem:{},status:{}},mounted(){this.modal=new w(this.$refs.modal)},watch:{editItem(){this.tempCoupon=this.editItem}},methods:{hideModal(){this.modal.hide()},showModal(){this.modal.show()},switchTimeStamp(n){if(typeof n=="number")return this.tempCoupon.due_date=new Date(n*1e3).toISOString().split("T")[0],this.tempCoupon.due_date},addCoupon(){this.isLoading=!0;let n="",t="";this.status==="new"?(n=`${D}/api/${$}/admin/coupon`,t="post"):this.status==="edit"&&(n=`${D}/api/${$}/admin/coupon/${this.tempCoupon.id}`,t="put"),this.tempCoupon.due_date=Date.parse(this.tempCoupon.due_date)/1e3;const l=this.tempCoupon;this.$http[t](n,{data:l}).then(u=>{this.isLoading=!1,P.fire({icon:"success",title:u.data.message}),this.modal.hide(),this.$emit("randerPage")}).catch(u=>{this.isLoading=!1,P.fire({icon:"error",title:u.response.data.message})})}}},Z={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ee={class:"modal-dialog"},te={class:"modal-content"},oe={class:"modal-header"},se={class:"modal-title fw-bold",id:"exampleModalLabel"},ne={key:0},le={key:1},ie=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),de={class:"modal-body"},ae={class:"mb-3"},ce=e("label",{for:"couponTitle",class:"form-label"},"優惠券標題",-1),re={class:"mb-3"},ue=e("label",{for:"couponText",class:"form-label"}," 優惠代碼 ",-1),pe={class:"mb-3"},_e=e("label",{for:"discount",class:"form-label"}," 折扣 % 數 ",-1),he={class:"mb-3"},me=e("label",{for:"deadline",class:"form-label"}," 到期日期 ",-1),be={class:"mb-3 form-check"},ge=e("label",{class:"form-check-label",for:"use"},"是否啟用",-1),Ce={class:"modal-footer"},fe=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function ve(n,t,l,u,o,i){const h=C("LoadingVue");return d(),a(v,null,[f(h,{active:o.isLoading,"onUpdate:active":t[0]||(t[0]=c=>o.isLoading=c)},null,8,["active"]),e("div",Z,[e("div",ee,[e("div",te,[e("div",oe,[e("h5",se,[l.status==="new"?(d(),a("span",ne,"新增")):l.status==="edit"?(d(),a("span",le,"編輯")):x("",!0),p(" 優惠券 ")]),ie]),e("div",de,[e("form",null,[e("div",ae,[ce,_(e("input",{"onUpdate:modelValue":t[1]||(t[1]=c=>o.tempCoupon.title=c),type:"text",class:"form-control",id:"couponTitle"},null,512),[[g,o.tempCoupon.title]])]),e("div",re,[ue,_(e("input",{"onUpdate:modelValue":t[2]||(t[2]=c=>o.tempCoupon.code=c),type:"text",class:"form-control",id:"couponText"},null,512),[[g,o.tempCoupon.code]])]),e("div",pe,[_e,_(e("input",{"onUpdate:modelValue":t[3]||(t[3]=c=>o.tempCoupon.percent=c),type:"number",max:"99",min:"1",class:"form-control",id:"discount",placeholder:"請輸入折扣百分比數字"},null,512),[[g,o.tempCoupon.percent]])]),e("div",he,[p(r(i.switchTimeStamp(o.tempCoupon.due_date))+" ",1),me,_(e("input",{"onUpdate:modelValue":t[4]||(t[4]=c=>o.tempCoupon.due_date=c),type:"date",class:"form-control",id:"deadline"},null,512),[[g,o.tempCoupon.due_date]])]),e("div",be,[_(e("input",{"onUpdate:modelValue":t[5]||(t[5]=c=>o.tempCoupon.is_enabled=c),"true-value":1,"false-value":0,type:"checkbox",class:"form-check-input",id:"use"},null,512),[[V,o.tempCoupon.is_enabled]]),ge])])]),e("div",Ce,[fe,e("button",{onClick:t[6]||(t[6]=(...c)=>i.addCoupon&&i.addCoupon(...c)),type:"button",class:"btn btn-danger"}," 送出 ")])])])],512)],64)}const xe=T(Y,[["render",ve]]),{VITE_APP_URL:L,VITE_APP_PATH:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},Pe={data(){return{mulitDelCoupon:[],isLoading:!1,currentPage:1,delCoupon:"",delCouponTitle:"",allCouponList:{},editId:"",editItem:{},status:""}},components:{DelModal:X,CouponModal:xe},mounted(){this.getCouponList()},methods:{delMoreItem(){console.log(this.mulitDelCoupon),M.fire({title:"確定要刪除這些優惠券?",text:` ID: ${this.mulitDelCoupon} `,showCancelButton:!0,cancelButtonColor:"gray",confirmButtonColor:"#ff6666",confirmButtonText:"確認刪除"}).then(n=>{if(n.isConfirmed){const t=this.mulitDelCoupon.map(l=>this.$http.delete(`${L}/api/${k}/admin/coupon/${l}`).then(u=>{console.log(u.data),this.getCouponList(this.currentPage),this.mulitDelCoupon=[]}).catch(u=>{console.log(u)}));console.log(t.data),P.fire({icon:"success",title:"刪除成功"})}else n.dismiss===M.DismissReason.cancel&&(this.mulitDelCoupon=[])})},changePage(n){this.currentPage=n,this.getCouponList(this.currentPage)},getCouponList(n=1){this.isLoading=!0,this.$http.get(`${L}/api/${k}/admin/coupons?page=${n}`).then(t=>{this.isLoading=!1,this.allCouponList=t.data}).catch(t=>{this.isLoading=!1,console.log(t)})},openDelModal(n,t){console.log(n),this.delCoupon=n,this.delCouponTitle=t,console.log(this.delCoupon),this.$refs.deleteModal.showModal()},openModal(n,t){t==="new"&&(this.editItem={is_enabled:1}),n!==0&&(this.editItem=n),this.status=t,this.$refs.CouponModal.showModal()},postDelCoupon(){const n=this.delCoupon;this.$http.delete(`${L}/api/${k}/admin/coupon/${n}`).then(t=>{P.fire({icon:"success",title:t.data.message}),this.getCouponList()}).catch(t=>{alert(t.response.data.message)})}}},ye=e("h3",{class:"text-center mt-5"},"優惠券管理",-1),Le={class:"text-end"},ke={class:"card mt-4"},Te={class:"card-body p-0"},Me={class:"table-responsive text-nowrap"},Ie={class:"table table-hover"},De={class:"border-bottom border-3 bg-light"},$e={class:"align-middle"},we={scope:"col ",class:"ps-3 py-3 text-center"},Ve=e("th",{scope:"col",class:""},"優惠券名稱",-1),Ae=e("th",{scope:"col"},"折扣 % 數",-1),Ee=e("th",{scope:"col",class:"text-end"},"到期日",-1),Ue=e("th",{scope:"col",class:"text-end"},"是否啟用",-1),Re=e("th",{scope:"col",class:"text-end pe-3"},"編輯",-1),Se={key:0},Be={class:"text-center"},Oe=["value"],He={class:""},Ne={key:0,class:"text-end"},je={key:1,class:"text-end"},qe={class:"text-end"},Fe={class:"text-end pe-3 text-danger"},ze={class:"btn-group",role:"group"},Ge=["onClick"],Je=["onClick"],Ke={key:0,class:"card-footer bg-transparent border-0 pb-0"},Qe={"aria-label":"Page navigation mb-0 "},We={class:"pagination justify-content-center"},Xe=e("a",{class:"page-link",href:"","aria-label":"Previous"},[e("span",{"aria-hidden":"true"},"«")],-1),Ye=[Xe],Ze=["onClick"],et={class:"page-link",href:"#"},tt=e("a",{class:"page-link",href:"#","aria-label":"Next"},[e("span",{"aria-hidden":"true"},"»")],-1),ot=[tt];function st(n,t,l,u,o,i){const h=C("LoadingVue"),c=C("DelModal"),A=C("CouponModal");return d(),a(v,null,[ye,e("div",Le,[e("button",{onClick:t[0]||(t[0]=s=>i.openModal(0,"new")),class:"btn btn-outline-secondary"}," 新增優惠券 ")]),f(h,{active:o.isLoading,"onUpdate:active":t[1]||(t[1]=s=>o.isLoading=s)},null,8,["active"]),e("div",ke,[e("div",Te,[e("div",Me,[e("table",Ie,[e("thead",De,[e("tr",$e,[e("th",we,[e("button",{onClick:t[2]||(t[2]=(...s)=>i.delMoreItem&&i.delMoreItem(...s)),class:m(["btn btn-outline-danger btn-sm",{disabled:o.mulitDelCoupon.length===0}])}," 刪除多個 ",2)]),Ve,Ae,Ee,Ue,Re])]),o.allCouponList.coupons?(d(),a("tbody",Se,[(d(!0),a(v,null,I(o.allCouponList.coupons,s=>(d(),a("tr",{class:"align-middle",key:s.id},[e("td",Be,[_(e("input",{"onUpdate:modelValue":t[3]||(t[3]=b=>o.mulitDelCoupon=b),value:s.id,class:"form-check-input",type:"checkbox",name:"",id:""},null,8,Oe),[[V,o.mulitDelCoupon]])]),e("td",He,r(s.title),1),e("td",null,r(s.percent),1),typeof s.due_date=="number"?(d(),a("td",Ne,r(new Date(s.due_date*1e3).toISOString().split("T")[0]),1)):(d(),a("td",je,r(s.due_date),1)),e("td",qe,[e("div",{class:m(["badge rounded-pill",[{"bg-warning":s.is_enabled===1},{"bg-dark":s.is_enabled===0||!s.is_enabled}]])},r(s.is_enabled?"啟用":"未啟用"),3)]),e("td",Fe,[e("div",ze,[e("button",{onClick:b=>i.openModal(s,"edit"),type:"button",class:"btn btn-outline-dark btn-sm"}," 編輯 ",8,Ge),e("button",{onClick:b=>i.openDelModal(s.id,s.title),type:"button",class:"btn btn-outline-primary btn-sm"}," 刪除 ",8,Je)])])]))),128))])):x("",!0)])])]),o.allCouponList.pagination?(d(),a("div",Ke,[e("nav",Qe,[e("ul",We,[e("li",{class:m(["page-item",{disabled:!o.allCouponList.pagination.has_pre}]),onClick:t[4]||(t[4]=y(s=>i.changePage(o.currentPage-1),["prevent"]))},Ye,2),(d(!0),a(v,null,I(o.allCouponList.pagination.total_pages,s=>(d(),a("li",{class:m(["page-item",{active:s===o.currentPage}]),key:s+"hlllq",onClick:y(b=>i.changePage(s),["prevent"])},[e("a",et,r(s),1)],10,Ze))),128)),e("li",{class:m(["page-item",{disabled:!o.allCouponList.pagination.has_next}]),onClick:t[5]||(t[5]=y(s=>i.changePage(o.currentPage+1),["prevent"]))},ot,2)])])])):x("",!0)]),f(c,{onDelItem:i.postDelCoupon,del:o.delCouponTitle,ref:"deleteModal"},null,8,["onDelItem","del"]),f(A,{onRanderPage:t[6]||(t[6]=s=>i.getCouponList(o.currentPage)),status:o.status,"edit-item":o.editItem,ref:"CouponModal"},null,8,["status","edit-item"])],64)}const at=T(Pe,[["render",st]]);export{at as default};
