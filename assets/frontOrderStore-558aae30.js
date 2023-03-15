import{k as p,l as o,H as f}from"./index-c63932d6.js";import"./Toast-7de7d469.js";const{VITE_APP_URL:l,VITE_APP_PATH:d}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},P=p("frontOrderStore",{state:()=>({totalStuOrderList:[],finalStuOrderData:[]}),mounted(){},actions:{getStuOrderList(){this.totalStuOrderList=[],o.get(`${l}/api/${d}/orders`).then(s=>{const e=s.data.pagination.total_pages,t=[];for(let a=1;a<=e;a++)t.push(a);const i=t.map(a=>o.get(`${l}/api/${d}/orders?page=${a}`));Promise.all(i).then(a=>{a.forEach(r=>{this.totalStuOrderList.push(...r.data.orders)});const c=[...f(this.totalStuOrderList)].map(r=>Object.values(r.products)).flat().map(r=>({classId:r.product.id,classTitle:r.product.title,classPrice:r.product.price,classFundingPrice:r.product.funding_price,classfundingTarget:r.product.funding_target})),n=Object.values(c.reduce((r,u)=>(r[u.classId]?r[u.classId].stuNum+=1:r[u.classId]={...u,stuNum:1},r),{}));console.log(n),this.finalStuOrderData=n}).catch(a=>{console.log(a)})}).catch(s=>{console.log(s)})},matchFundingTarget(s){let e=null;return this.finalStuOrderData.find(t=>{if(t.classId===s)return e=Math.round(t.stuNum*t.classFundingPrice/t.classfundingTarget*100),!0;e=0}),e},matchFundingMoney(s){let e=null;return this.finalStuOrderData.find(t=>{if(t.classId===s)return e=t.stuNum*t.classFundingPrice,!0;e=0}),e},matchStuNumAndClass(s){let e=null;return this.finalStuOrderData.find(t=>{if(t.classId===s)return e=t.stuNum,!0;e=0}),e}},getters:{showFinalStuOrderData:({finalStuOrderData:s})=>s}});export{P as f};