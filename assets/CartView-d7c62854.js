import{T as p}from"./Toast-6cabf889.js";import{c as h}from"./cartStore-7c0f204d.js";import{_ as y,m as k,d as x,r as m,o as n,c as a,e as w,a as t,k as _,t as c,j as i,F as g,D as T,I,E as b,w as V,v as D,K as P,f as R}from"./index-8ab29a44.js";const{VITE_APP_URL:f,VITE_APP_PATH:L}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vue-learnFund/",MODE:"production",DEV:!1,PROD:!0},A={data(){return{isLoading:!1,couponCode:"",couponResText:""}},mounted(){this.getCartList(),this.fillInCouponData()},computed:{...k(h,["cartList","showCheck"])},watch:{cartList(){console.log(this.cartList)}},methods:{...x(h,["getCartList"]),fillInCouponData(){if(console.log(localStorage.getItem("coupon")),localStorage.getItem("coupon")===null){p.fire({icon:"error",title:"尚未取得優惠券"});return}this.couponCode=localStorage.getItem("coupon");const s={code:this.couponCode};this.$http.post(`${f}/api/${L}/coupon`,{data:s}).then(o=>{console.log(o),this.couponResText=o.data.message,this.cartList.final_total=o.data.data.final_total}).catch(o=>{console.log(o)})},removeCoupon(){this.couponCode=""},delCartItem(s,o){const d=this.showCheck.indexOf(o);console.log(d),this.showCheck.splice(d,1),this.$http.delete(`${f}/api/${L}/cart/${s}`).then(r=>{p.fire({icon:"success",title:r.data.message}),this.getCartList()}).catch(r=>{p.fire({icon:"error",title:r.response.data.message})})}}},E={class:"container"},S={class:"my-5"},N={key:0,class:"fs-6 text-darkblue fw-bold"},B={class:"row g-4"},U={class:"col-md-8"},$={key:0},F={class:"overflow-auto"},O={class:"table"},H=t("thead",null,[t("tr",null,[t("th",{scope:"col"}),t("th",{scope:"col",class:"text-nowrap"},"課程名稱"),t("th",{scope:"col",class:"text-nowrap"},"課程狀態"),t("th",{scope:"col"},"售價"),t("th",{scope:"col",class:"text-end text-nowrap"},"付款金額")])],-1),K={key:0},M=t("td",{colspan:"5",class:"text-center"},[_(" 購物車尚無商品 "),t("br"),t("a",{href:"#/courses",class:"btn btn-outline-primary my-2"}," 探索課程 ")],-1),j=[M],z=["onClick"],q=t("i",{class:"bi bi-trash3"},null,-1),G=[q],J={key:0},Q={key:1},W={class:"text-end"},X={class:"col-md-4"},Y={key:0},Z={class:"bg-light p-3"},tt=t("h5",{class:"text-center border-bottom py-3"},"訂單明細",-1),st={class:"clear-fix"},ot=t("p",{class:"d-inline"},"小計",-1),et={class:"d-inline float-end"},nt={class:"text-primary text-end border-bottom py-3"},at=t("br",null,null,-1),ct={class:"text-end"},lt={class:"input-group"},it=t("span",{class:"input-group-text",id:"discount"},"使用優惠券",-1),rt={key:0,class:"fs-7 text-end text-muted mb-0"},dt={key:1,class:"btn btn-outline-primary w-100 disabled mt-4",type:"button"},ut=t("br",null,null,-1),pt=t("br",null,null,-1),_t=t("br",null,null,-1);function ht(s,o,d,r,l,u){const C=m("LoadingVue"),v=m("RouterLink");return n(),a(g,null,[w(C,{active:l.isLoading,"onUpdate:active":o[0]||(o[0]=e=>l.isLoading=e)},null,8,["active"]),t("div",E,[t("h3",S,[_(" 購物車 "),s.cartList.carts?(n(),a("span",N," 目前有 "+c(s.cartList.carts.length)+" 門課程 ",1)):i("",!0)]),t("div",B,[t("div",U,[s.cartList.carts?(n(),a("div",$,[t("div",F,[t("table",O,[H,t("tbody",null,[s.cartList.carts.length===0?(n(),a("tr",K,j)):i("",!0),(n(!0),a(g,null,T(s.cartList.carts,e=>(n(),a("tr",{key:e.id},[t("td",null,[t("a",{onClick:mt=>u.delCartItem(e.id,e.product_id),class:"link-primary"},G,8,z)]),t("td",null,c(e.product.title),1),e.product.courseStatus==="classFunding"?(n(),a("td",J," 募資中 ")):e.product.courseStatus==="classOpen"?(n(),a("td",Q," 已開課 ")):i("",!0),t("td",null,c(e.product.origin_price),1),t("td",W,c(e.product.price),1)]))),128))])])])])):i("",!0)]),t("div",X,[s.cartList.carts?(n(),a("div",Y,[t("div",Z,[tt,t("div",st,[ot,t("p",et,[t("del",null," NT$ "+c(s.cartList.total),1)])]),t("h4",nt," NT$ "+c(s.cartList.final_total),1),at,t("div",ct,[t("span",{onClick:o[1]||(o[1]=(...e)=>u.fillInCouponData&&u.fillInCouponData(...e)),class:I([{disabled:s.cartList.carts.length===0},"badge bg-secondary btn mb-2"])},"一鍵帶入",2)]),(n(),b(P,null,[t("div",lt,[it,V(t("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>l.couponCode=e),type:"text",class:"form-control",placeholder:"輸入代碼"},null,512),[[D,l.couponCode]])])],1024)),l.couponResText!==""?(n(),a("p",rt,c(l.couponResText),1)):i("",!0),s.cartList.carts.length===0?(n(),a("button",dt," 未選購任何課程 ")):(n(),b(v,{key:2,to:"./cart/order",class:"btn btn-outline-primary w-100 mt-4",type:"button"},{default:R(()=>[_(" 結帳去 ")]),_:1}))])])):i("",!0)])])]),ut,pt,_t],64)}const Lt=y(A,[["render",ht]]);export{Lt as default};
