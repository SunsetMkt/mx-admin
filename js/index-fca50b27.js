import{f as d,p as f,a as e,b$ as g,H as c,N as o,b as s}from"./index-d19751eb.js";import{N as h}from"./Form-020f5b68.js";import{N as u}from"./FormItem-8719bbf1.js";import{N as _}from"./Switch-d9cf99e7.js";import"./index-f597b3de.js";var I=d({setup(){const t=f({apiUrl:localStorage.getItem("__api")||"",gatewayUrl:localStorage.getItem("__gateway")||"",persist:!1}),n=()=>{const a=new URL(location.href),{apiUrl:l,gatewayUrl:r,persist:m}=t;l&&a.searchParams.set("__api",l),r&&a.searchParams.set("__gateway",r),m&&(l&&localStorage.setItem("__api",l),r&&localStorage.setItem("__gateway",r)),a.pathname="/",a.hash="",location.href=a.toString()},i=()=>{localStorage.removeItem("__api"),localStorage.removeItem("__gateway"),location.href="/"},p=()=>{t.apiUrl="http://localhost:2333",t.gatewayUrl="http://localhost:2333"};return()=>e("div",{class:"relative h-screen w-full flex items-center justify-center"},[e(g,{title:"\u8BBE\u7F6E API",class:"modal-card sm m-auto form-card"},{default:()=>[e(h,{onSubmit:n},{default:()=>[e(u,{label:"API \u5730\u5740"},{default:()=>[e(c,{value:t.apiUrl,onUpdateValue:a=>{t.apiUrl=a}},null)]}),e(u,{label:"Gateway \u5730\u5740"},{default:()=>[e(c,{value:t.gatewayUrl,onUpdateValue:a=>{t.gatewayUrl=a}},null)]}),e(u,{label:"\u6301\u4E45\u5316",labelPlacement:"left"},{default:()=>[e(_,{value:t.persist,onUpdateValue:a=>{t.persist=a}},null)]}),e("div",{class:"text-center space-x-2"},[e(o,{onClick:p,round:!0},{default:()=>[s("\u672C\u5730\u8C03\u8BD5")]}),e(o,{onClick:i,round:!0},{default:()=>[s("\u91CD\u7F6E")]}),e(o,{onClick:n,round:!0,type:"primary"},{default:()=>[s("\u786E\u5B9A")]})])]})]})])}});export{I as default};
