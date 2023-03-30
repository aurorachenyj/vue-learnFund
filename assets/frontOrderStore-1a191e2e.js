import{l as f,n as o,H as g}from"./index-8ab29a44.js";const{VITE_APP_URL:l,VITE_APP_PATH:d}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vue-learnFund/",MODE:"production",DEV:!1,PROD:!0},O=f("frontOrderStore",{state:()=>({totalStuOrderList:[],finalStuOrderData:[]}),mounted(){},actions:{getStuOrderList(){this.totalStuOrderList=[],o.get(`${l}/api/${d}/orders`).then(s=>{const e=s.data.pagination.total_pages,t=[];for(let a=1;a<=e;a++)t.push(a);const c=t.map(a=>o.get(`${l}/api/${d}/orders?page=${a}`));Promise.all(c).then(a=>{a.forEach(r=>{this.totalStuOrderList.push(...r.data.orders)});const i=[...g(this.totalStuOrderList)].map(r=>Object.values(r.products)).flat().map(r=>({classId:r.product.id,classTitle:r.product.title,classPrice:r.product.price,classFundingPrice:r.product.funding_price,classfundingTarget:r.product.funding_target})),u=Object.values(i.reduce((r,n)=>(r[n.classId]?r[n.classId].stuNum+=1:r[n.classId]={...n,stuNum:1},r),{}));console.log(u),this.finalStuOrderData=u}).catch(a=>{console.log(a)})}).catch(s=>{console.log(s)})},matchFundingTarget(s){let e=null;return this.finalStuOrderData.find(t=>{if(t.classId===s)return e=Math.round(t.stuNum*t.classFundingPrice/t.classfundingTarget*100),!0;e=0}),e},matchFundingMoney(s){let e=null;return this.finalStuOrderData.find(t=>{if(t.classId===s)return e=t.stuNum*t.classFundingPrice,!0;e=0}),e},matchStuNumAndClass(s){let e=null;return this.finalStuOrderData.find(t=>{if(t.classId===s)return e=t.stuNum,!0;e=0}),e}},getters:{showFinalStuOrderData:({finalStuOrderData:s})=>s}});export{O as f};
