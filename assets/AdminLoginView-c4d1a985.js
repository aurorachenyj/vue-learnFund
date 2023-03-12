import{T as m}from"./Toast-10dbfdb2.js";import{_ as h,r as i,o as f,b as v,d as s,e as a,w as b,s as u}from"./index-174217fd.js";const{VITE_APP_URL:x,VITE_APP_PATH:D}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{user:{username:"",password:""}}},mounted(){},methods:{adminLogin(){if(this.user.username===""||this.user.password===""){m.fire({icon:"error",title:"請填寫完整"});return}this.$http.post(`${x}/admin/signin`,this.user).then(o=>{console.log(o.data);const{token:e,expired:t}=o.data;document.cookie=`hexToken=${e}; expires=${new Date(t)}`,m.fire({icon:"success",title:o.data.message}),this.goToAdminIndex()}).catch(o=>{var e,t;alert((t=(e=o.response)==null?void 0:e.data)==null?void 0:t.message),this.user={username:"",password:""}})},goToAdminIndex(){this.$router.push("/admin/index")}}},V={class:"container mt-5 full-height"},g={class:"w-50 mx-auto"},P=s("h3",{class:"text-center mb-5"},"後台登入",-1),T={class:"mb-3"},A=s("label",{for:"email",class:"form-label"},"帳號*",-1),E={class:"mb-3"},k=s("label",{for:"password",class:"form-label"},"密碼*",-1),I=s("div",{class:"text-center"},[s("button",{class:"btn btn-outline-primary",type:"submit"},"登入")],-1);function L(o,e,t,U,n,_){const l=i("v-field"),d=i("error-message"),p=i("v-form");return f(),v("div",V,[s("div",g,[P,a(p,{onSubmit:_.adminLogin},{default:b(({errors:c})=>[s("div",T,[A,a(l,{name:"信箱",modelValue:n.user.username,"onUpdate:modelValue":e[0]||(e[0]=r=>n.user.username=r),class:u([{"is-invalid":c.信箱},"form-control"]),id:"email",type:"text",placeholder:"請輸入信箱",rules:"required|email"},null,8,["modelValue","class"]),a(d,{name:"信箱",class:"invalid-feedback"})]),s("div",E,[k,a(l,{name:"密碼",modelValue:n.user.password,"onUpdate:modelValue":e[1]||(e[1]=r=>n.user.password=r),class:u([{"is-invalid":c.密碼},"form-control"]),id:"password",type:"password",placeholder:"請輸入密碼",rules:"required|min:8",required:""},null,8,["modelValue","class"]),a(d,{name:"密碼",class:"invalid-feedback"})]),I]),_:1},8,["onSubmit"])])])}const R=h(w,[["render",L]]);export{R as default};