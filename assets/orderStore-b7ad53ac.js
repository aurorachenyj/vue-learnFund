import{j as p,k as n,l}from"./index-957ec83c.js";import{T as d}from"./Toast-c723ed56.js";const{VITE_APP_URL:u,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},m=p("orderStore",{state:()=>({totalPage:null,totalOrderList:[],courseStudentNumData:[],finalorderInfoData:[],orderInfoData:[]}),mounted(){this.getTotalPage()},watch:{totalPage(){this.getTotalOrderList()}},actions:{getTotalPage(){n.get(`${u}/api/${h}/admin/orders?page=1`).then(t=>{d.fire({icon:"success",title:"取得資料中"}),this.totalPage=t.data.pagination.total_pages,console.log(this.totalPage)}).catch(t=>{d.fire({icon:"error",title:t.response.data.message})})},getTotalOrderList(t){console.log(t);const i=[];for(let r=1;r<=t;r++)i.push(r);const s=i.map(r=>n.get(`${u}/api/${h}/admin/orders?page=${r}`));Promise.all(s).then(r=>{console.log(r),r.forEach(e=>{this.totalOrderList.push(...e.data.orders)}),console.log(this.totalOrderList),this.calcClassmate()}).catch(r=>{console.log(r)}),console.log(this.totalOrderList)},calcClassmate(){const i=[...l(this.totalOrderList)],s=[];i.forEach(a=>{const o=Object.values(a.products);s.push(...o)});const e=s.map(a=>a.product_id).reduce((a,o)=>(a[o]?a[o]++:a[o]=1,a),{});this.courseStudentNumData=e,console.log(this.courseStudentNumData)},getOrderCourseDetail(){this.isLoading=!0;const t=l(this.showStudentNumData),s=Object.keys(t).map(r=>n.get(`${u}/api/${h}/product/${r}`));Promise.all(s).then(r=>{r.forEach(o=>{this.orderInfoData.push({productId:o.data.product.id,title:o.data.product.title,price:o.data.product.price,fundingPrice:o.data.product.funding_price})});const e=[...l(this.orderInfoData)];Object.entries(t).map(([o,c])=>({id:o,classmateNum:c})).forEach(o=>{e.forEach(c=>{o.id===c.productId&&(c.classmateNum=o.classmateNum)})}),console.log(e),this.finalorderInfoData=e,this.isLoading=!1,d.fire({icon:"success",title:"成功取得開課狀況資料"})}).catch(r=>{this.isLoading=!1,console.log(r)})}},getters:{page:({totalPage:t})=>t,sendOrderData:({totalOrderList:t})=>t,showStudentNumData:({courseStudentNumData:t})=>t,showFinalorderInfoData:({finalorderInfoData:t})=>t}});export{m as o};
