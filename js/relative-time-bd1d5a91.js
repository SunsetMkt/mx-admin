import{d as m,v as o,z as i,j as a,E as s,h as u,H as l,n as v}from"./index-7e4abaa4.js";const n=m({props:{time:{type:[String,Date],required:!0}},setup(e){const r=o(i(e.time));let t;return a(()=>{!e.time||(t=setInterval(()=>{r.value=i(e.time)},1e3))}),s(()=>{t&&(t=clearInterval(t))}),()=>r.value}}),E=m({props:{time:{type:[String,Date],required:!0},showPopoverInfoAbsoluteTime:{type:Boolean,default:!0}},setup(e){return()=>e.showPopoverInfoAbsoluteTime?u(v,{trigger:"hover"},{trigger(){return u("span",null,u(n,{time:e.time}))},default(){return e.time?l(e.time,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss"):"\u6B64\u5185\u5BB9\u81EA\u53D1\u5E03\u4EE5\u6765\u6CA1\u6709\u88AB\u4FEE\u6539\u8FC7"}}):u(n,{time:e.time})}});export{E as R};
