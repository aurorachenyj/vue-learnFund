import{T as p}from"./Toast-389aab69.js";import{D as P}from"./DelModal-d4cf3965.js";import{M as y}from"./modal-30fd1751.js";import{_ as O,o as l,c as d,a as e,t as o,F as h,D as u,j as D,r as m,e as g,I as b,h as v}from"./index-08966c63.js";import"./base-component-0685a80d.js";const x={data(){return{modal:""}},props:["checkOrderData"],mounted(){this.modal=new y(this.$refs.orderModal)},watch:{},methods:{hideModal(){this.modal.hide()},showModal(){this.modal.show()}}},w={class:"modal fade",ref:"orderModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},C={class:"modal-dialog modal-lg"},I={class:"modal-content"},V=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},"訂單詳情"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={key:0,class:"modal-body"},A={class:"row"},T={class:"col"},N={class:"ms-3"},B=e("h4",null,"用戶資料",-1),R={class:"table"},S={class:"tbody"},U=e("th",{scope:"row"},"姓名",-1),j=e("th",{scope:"row"},"電話",-1),F=e("th",{scope:"row"},"email",-1),H=e("th",{scope:"row"},"付款方式",-1),q={class:"col"},z=e("h4",null,"訂單資料",-1),G={class:"table"},J={class:"tbody"},K=e("th",{scope:"row"},"訂單編號",-1),Q=e("th",{scope:"row"},"下單時間",-1),W=e("th",{scope:"row"},"總金額",-1),X=e("th",{scope:"row"},"訂購品項",-1),Y=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-primary text-white","data-bs-dismiss":"modal"}," 關閉 ")],-1);function Z(r,t,n,L,a,i){return l(),d("div",w,[e("div",C,[e("div",I,[V,n.checkOrderData.order?(l(),d("div",E,[e("div",A,[e("div",T,[e("div",N,[B,e("table",R,[e("div",S,[e("tr",null,[U,e("td",null,o(n.checkOrderData.order.user.name),1)]),e("tr",null,[j,e("td",null,o(n.checkOrderData.order.user.tel),1)]),e("tr",null,[F,e("td",null,o(n.checkOrderData.order.user.email),1)]),e("tr",null,[H,e("td",null,o(n.checkOrderData.order.user.payment),1)])])])])]),e("div",q,[z,e("table",G,[e("div",J,[e("tr",null,[K,e("td",null,o(n.checkOrderData.order.id),1)]),e("tr",null,[Q,e("td",null,o(new Date(n.checkOrderData.order.create_at*1e3).toLocaleDateString()),1)]),e("tr",null,[W,e("td",null,o(n.checkOrderData.order.total),1)]),e("tr",null,[X,e("td",null,[(l(!0),d(h,null,u(n.checkOrderData.order.products,_=>(l(),d("p",{key:_.id,class:"mb-0"},o(_.product.title),1))),128))])])])])])])])):D("",!0),Y])])],512)}const ee=O(x,[["render",Z]]),{VITE_APP_URL:f,VITE_APP_PATH:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},te={data(){return{delId:"",checkOrderData:{},allOrderList:[],isLoading:!1,currentPage:1,totalOrderList:[],totalPage:1,courseStudentNumData:{}}},components:{DelModal:P,OrderDetailModal:ee},mounted(){this.getOrderList()},methods:{getOrderList(r=1){this.isLoading=!0,this.$http.get(`${f}/api/${k}/admin/orders?page=${r}`).then(t=>{this.isLoading=!1,p.fire({icon:"success",title:"成功取得資料"}),this.allOrderList=t.data,this.totalPage=t.data.pagination.total_pages,console.log(this.totalPage),console.log(this.allOrderList)}).catch(t=>{this.isLoading=!1,p.fire({icon:"error",title:t.response.data.message})})},changePage(r){this.currentPage=r,this.getOrderList(this.currentPage)},openDelModal(r){this.delId=r,this.$refs.deleteModal.showModal()},openOrderModal(r){this.isLoading=!0,this.$http.get(`${f}/api/${k}/order/${r}`).then(t=>{this.checkOrderData=t.data,this.isLoading=!1}).catch(t=>{this.isLoading=!1}),this.$refs.orderDetailModal.showModal()},delOrder(){const r=this.delId;this.$http.delete(`${f}/api/${k}/admin/order/${r}`).then(t=>{this.getOrderList(this.currentPage),this.$refs.deleteModal.hideModal()}).catch(t=>{p.fire({icon:"error",title:t.response.data.message})})}}},se=e("h3",{class:"text-center mt-5"},"訂單管理",-1),oe={class:"card mt-4"},ae={class:"card-body p-0"},le={class:"table-responsive text-nowrap"},de={class:"table table-hover"},re=e("thead",{class:"border-bottom border-3 bg-light"},[e("tr",{class:"align-middle"},[e("th",{scope:"col ",class:"ps-3"}),e("th",{scope:"col",class:"py-3"},"訂單編號"),e("th",{scope:"col"},"Email"),e("th",{scope:"col"},"用戶名"),e("th",{scope:"col"},"購買品項"),e("th",{scope:"col",class:"text-end"},"付款方式"),e("th",{scope:"col",class:"text-end"},"金額"),e("th",{scope:"col",class:"text-end pe-3"},"訂單編輯")])],-1),ne=e("td",{class:"py-3 ps-3"},[e("input",{class:"form-check-input",type:"checkbox",name:"",id:""})],-1),ie={class:""},ce={class:"ps-2 px-0 mb-0"},he={class:"text-end"},_e={class:"text-end"},ue={class:"text-end pe-3 text-danger"},pe={class:"btn-group",role:"group"},me=["onClick"],ge=["onClick"],be={key:0,class:"card-footer bg-transparent border-0 pb-0"},ve={"aria-label":"Page navigation mb-0 "},fe={class:"pagination justify-content-center"},ke=e("a",{class:"page-link",href:"","aria-label":"Previous"},[e("span",{"aria-hidden":"true"},"«")],-1),Oe=[ke],De=["onClick"],Le={class:"page-link",href:"#"},Me=e("a",{class:"page-link",href:"#","aria-label":"Next"},[e("span",{"aria-hidden":"true"},"»")],-1),$e=[Me];function Pe(r,t,n,L,a,i){const _=m("LoadingVue"),M=m("DelModal"),$=m("OrderDetailModal");return l(),d(h,null,[se,g(_,{active:a.isLoading,"onUpdate:active":t[0]||(t[0]=s=>a.isLoading=s)},null,8,["active"]),e("div",oe,[e("div",ae,[e("div",le,[e("table",de,[re,e("tbody",null,[(l(!0),d(h,null,u(a.allOrderList.orders,s=>(l(),d("tr",{class:"align-middle",key:s.id},[ne,e("td",ie,o(s.id),1),e("td",null,o(s.user.email),1),e("td",null,o(s.user.name),1),e("td",null,[e("ol",ce,[(l(!0),d(h,null,u(s.products,c=>(l(),d("li",{key:c.id},o(c.product.title),1))),128))])]),e("td",he,o(s.user.payment),1),e("td",_e,o(s.total),1),e("td",ue,[e("div",pe,[e("button",{onClick:c=>i.openOrderModal(s.id),type:"button",class:"btn btn-outline-dark btn-sm"}," 檢視 ",8,me),e("button",{onClick:c=>i.openDelModal(s.id),type:"button",class:"btn btn-outline-primary btn-sm"}," 刪除 ",8,ge)])])]))),128))])])])]),a.allOrderList.pagination?(l(),d("div",be,[e("nav",ve,[e("ul",fe,[e("li",{class:b(["page-item",{disabled:!a.allOrderList.pagination.has_pre}]),onClick:t[1]||(t[1]=v(s=>i.changePage(a.currentPage-1),["prevent"]))},Oe,2),(l(!0),d(h,null,u(a.allOrderList.pagination.total_pages,s=>(l(),d("li",{class:b(["page-item",{active:s===a.currentPage}]),key:s+"hlllq",onClick:v(c=>i.changePage(s),["prevent"])},[e("a",Le,o(s),1)],10,De))),128)),e("li",{class:b(["page-item",{disabled:!a.allOrderList.pagination.has_next}]),onClick:t[2]||(t[2]=v(s=>i.changePage(a.currentPage+1),["prevent"]))},$e,2)])])])):D("",!0)]),g(M,{onDelItem:i.delOrder,"del-id":a.delId,ref:"deleteModal"},null,8,["onDelItem","del-id"]),g($,{"check-order-data":a.checkOrderData,ref:"orderDetailModal"},null,8,["check-order-data"])],64)}const Ve=O(te,[["render",Pe]]);export{Ve as default};
