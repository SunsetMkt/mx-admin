import{o as f,M as l,H as d,by as v}from"./vendor-a7b34205.js";const E=(u,r,i="\u6587\u7AE0\u672A\u4FDD\u5B58\u662F\u5426\u786E\u5B9A\u79BB\u5F00\uFF1F")=>{const n=e=>{if(!r())return e.preventDefault(),e.returnValue=i,!1};f(()=>{u&&window.addEventListener("beforeunload",n)}),l(()=>{u&&window.removeEventListener("beforeunload",n)});const s=d();v(async(e,c,o)=>{if(!u){o();return}if(r()){o();return}if(e.hash=="|publish"){o();return}const a=new Promise((t,m)=>{s.warning({title:i,negativeText:"\u55EF",positiveText:"\u624B\u6296\u4E86\u5566",onNegativeClick(){t(!0)},onPositiveClick(){t(!1)}})});await Promise.resolve(a)&&o()})};export{E as u};
