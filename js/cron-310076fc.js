import{T as p}from"./index-477f2862.js";import{u as c}from"./use-table-a2880f8a.js";import{d as f,R as o,k as d,h as r,cU as h,a as y,N as C,n as g}from"./index-62e99b2b.js";import{t as T}from"./index-0e9a8d87.js";import{N as k}from"./Popconfirm-5f4696a2.js";import"./DataTable-30fbd207.js";import"./ChevronRight-9f5971e6.js";import"./Icon-aa605da4.js";import"./Select-5a24a54a.js";import"./Tag-ce864d2c.js";import"./Forward-91b8e448.js";import"./index-17f9ebb1.js";import"./Tooltip-b6bacdce.js";import"./transform-c17dbe41.js";import"./_arrayEach-2ff48152.js";var _=f({setup(){const{data:s,fetchDataFn:i,loading:n}=c(t=>async()=>{const a=await o.api.health.cron.get();t.value=Array.from(Object.values(a.data).map(e=>({...e,_name:e.name,name:T(e.name)})))});d(async()=>{await i()});const l=async(t,a)=>{await o.api.health.cron.run(t).post();let e=setTimeout(function m(){o.api.health.cron.task(t).get().then(u=>{u.status==="fulfill"?(message.success(`${a} \u6267\u884C\u5B8C\u6210`),e=clearTimeout(e)):u.status==="reject"?(message.error(`${a} \u6267\u884C\u5931\u8D25, `+u.message),e=clearTimeout(e)):e=setTimeout(m,1e3)})},1e3)};return()=>r(g,null,r(p,{noPagination:!0,data:s,loading:n.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},maxWidth:500,columns:[{title:"\u4EFB\u52A1",key:"name",ellipsis:{tooltip:!0},width:150},{title:"\u63CF\u8FF0",key:"description",width:250,ellipsis:{tooltip:!0}},{title:"\u72B6\u6001",key:"status"},{title:"\u4E0B\u6B21\u6267\u884C",key:"",render(t){const a=t.nextDate;return a?h(new Date(a),"MM/dd/yyyy hh:mm:ss"):"N/A"}},{title:"\u64CD\u4F5C",key:"",render(t){return r(y,null,r(k,{onPositiveClick:()=>void l(t._name,t.name)},{trigger(){return r(C,{size:"tiny",text:!0,type:"success"},"\u6267\u884C")},default:()=>r("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u6267\u884C?")}))}}]}))}});export{_ as default};