import{f,y as n,w as o,u as c,k as d,l as v,a as u,F as m,H as y,b as p}from"./index-d19751eb.js";import{N as w}from"./Select-7a97fa4f.js";const h=f({props:{initialValue:{type:String,required:!0},onSubmit:{type:Function,required:!0},placeholder:{type:String},type:{type:String,default:"input"},options:{type:Array,default:()=>[]},returnToConfrim:{type:Boolean,default:!0}},setup(e){const a=n(e.initialValue);o(()=>e.initialValue,t=>{a.value=t});const l=n(!1),i=n(),s=c();o(()=>l.value,t=>{!e.returnToConfrim||t&&(s.info("\u56DE\u8F66\u4EE5\u5B8C\u6210\u4FEE\u6539",{duration:1500}),requestAnimationFrame(()=>{i.value?.focus()}))});const r=()=>{e.onSubmit(a.value),l.value=!1};return d(v),()=>u(m,null,[l.value?u("div",{class:"flex items-center w-full relative flex-nowrap"},[(()=>{switch(e.type){case"input":return u(y,{onKeydown:t=>{t.key=="Enter"&&r()},class:"w-3/4",value:a.value,placeholder:e.placeholder??e.initialValue,size:"tiny",autofocus:!0,ref:i,onBlur:()=>{l.value=!1},onInput:t=>{a.value=t}},null);case"select":return u(w,{class:"w-full",placeholder:e.placeholder??e.initialValue,value:a.value,onUpdateValue:t=>{a.value=t,r()},onBlur:()=>{l.value=!1},options:e.options},null)}})()]):u("button",{class:"w-full text-left",onClick:()=>{l.value=!0}},[e.initialValue,p("\xA0")])])}});export{h as E};
