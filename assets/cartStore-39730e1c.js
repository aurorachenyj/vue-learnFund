import{h as a,i as s}from"./index-c26ca672.js";const{VITE_APP_URL:e,VITE_APP_PATH:r}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},o=a("cartStore",{state:()=>({cartListData:{}}),actions:{getCartList(){this.isLoading=!0,s.get(`${e}/api/${r}/cart`).then(t=>{this.cartListData=t.data.data,this.isLoading=!1}).catch(t=>{alert(t.response.data.message)})},clearCartList(){this.cartListData={}}},getters:{cartList:({cartListData:t})=>t}});export{o as c};
