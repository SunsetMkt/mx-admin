import{a as f,u as b}from"./use-async-monaco-98bf4993.js";import{f as g,ek as s,y,w as N,a,C as S,dz as d,N as T,b as h,R as w}from"./index-94a141f8.js";import{T as C}from"./two-col-ee7aca5d.js";import{E as p}from"./types-4fa065e6.js";import{N as E}from"./Form-8b9145a0.js";import{N as m}from"./FormItem-3d7bd772.js";import{N as v}from"./Select-bade2b3f.js";import"./index-8bb284e8.js";import"./editor.main-2e49c7ff.js";import"./use-save-confirm-4d2a0b82.js";import"./index-25820ad5.js";import"./Tag-9da39b6c.js";const M=t=>{switch(t){case"objectId":return((l=Math,o=Date,r=16,n=u=>l.floor(u).toString(r))=>n(o.now()/1e3)+" ".repeat(r).replace(/./g,()=>n(l.random()*r)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).substring(10,5);case"randomnumber":return Math.floor(Math.random()*1e4);default:return`{{${t}}}`}};var U=g({setup(){const t=s("debug-event-name",p.POST_CREATE),l=s("debug-event",{}),o=s("debug-event-type","web"),r=f({value:l.value[t.value]??""}),n=y();N(()=>t.value,e=>{u.editor.setValue(l.value[e]||"")});const u=b(n,r,e=>{l.value={...l.value,[t.value]:e}},{language:"json",unSaveConfirm:!1}),i=async()=>{const e=l.value[t.value]?.replace(/(\{\{(.*?)\}\})/g,(V,x,c)=>M(c))??"";console.log(e),w.api.debug.events.post({params:{type:o.value,event:t.value},data:JSON.parse(e)})};return()=>a(S,null,{default:()=>[a(C,null,{default:()=>[a(d,{span:"12"},{default:()=>[a(E,null,{default:()=>[a(m,{label:"Type"},{default:()=>[a(v,{tag:!0,filterable:!0,value:o.value,onUpdateValue:e=>void(o.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))},null)]}),a(m,{label:"Event"},{default:()=>[a(v,{tag:!0,filterable:!0,value:t.value,onUpdateValue:e=>void(t.value=e),options:Object.keys(p).map(e=>({value:e,label:e}))},null)]})]}),a("div",null,[a(T,{type:"primary",onClick:i},{default:()=>[h("\u6D4B\u8BD5")]})])]}),a(d,{span:"24"},{default:()=>[a("div",{class:"h-[calc(100vh-20rem)] relative"},[a("div",{ref:n,class:"h-full"},null)])]})]})]})}});export{U as default};
