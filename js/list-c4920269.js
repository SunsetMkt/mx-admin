import{f as d,R as r,u as x,t as k,j as D,w as R,m as T,p as F,a as t,C as N,F as C,A as B,s as p,d as S,N as m,b as i}from"./index-6e7759df.js";import{D as b}from"./delete-confirm-5b4cde74.js";import{T as A}from"./index-fae7fcfe.js";import{R as L}from"./relative-time-5901644a.js";import{u as M}from"./use-table-17c93510.js";import{H as K}from"./rounded-button-77c7ccde.js";import{N as P}from"./Popconfirm-05b75a1e.js";import"./DataTable-bfe8ac94.js";import"./ChevronRight-7c996c67.js";import"./Icon-d4b1fcc1.js";import"./index-731c4fac.js";import"./Tooltip-f83f1440.js";import"./Select-bf96ff63.js";import"./Tag-b1b9f704.js";import"./Pagination-b7a3adfb.js";import"./prop-a1682621.js";import"./Forward-d4dd349d.js";const te=d({name:"SayList",setup(V,$){const{checkedRowKeys:o,data:y,pager:n,loading:f,fetchDataFn:g}=M((a,e)=>async(v=l.query.page||1,w=30)=>{const c=await r.api.says.get({params:{page:v,size:w,select:"title text _id id created modified author source"}});a.value=c.data,e.value=c.pagination}),u=x();k();const l=D(),s=g;R(()=>l.query.page,async a=>{await s(a)}),T(async()=>{await s()});const h=d({setup(){const a=F([{type:"selection",options:["none","all"]},{title:"\u521B\u5EFA\u4E8E",key:"created",width:100,render(e){return t(p,{to:`/says/edit?id=${e.id}`},{default:()=>[t(L,{time:e.created},null)]})}},{title:"\u5185\u5BB9",key:"text"},{title:"\u4F5C\u8005",key:"author"},{title:"\u6765\u6E90",key:"source"},{title:"\u64CD\u4F5C",fixed:"right",key:"id",width:130,render(e){return t(S,{wrap:!1},{default:()=>[t(p,{to:`/says/edit?id=${e.id}`},{default:()=>[t(m,{text:!0,type:"primary",size:"tiny"},{default:()=>[i("\u7F16\u8F91")]})]}),t(P,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await r.api.says(e.id).delete(),u.success("\u5220\u9664\u6210\u529F"),await s(n.value.currentPage)}},{trigger:()=>t(m,{text:!0,type:"error",size:"tiny"},{default:()=>[i("\u79FB\u9664")]}),default:()=>t("span",{class:"max-w-48"},[i("\u786E\u5B9A\u8981\u5220\u9664\u201C"),e.text,i("\u201D ?")])})]})}}]);return()=>t(A,{loading:f.value,columns:a,data:y,onFetchData:s,pager:n,onUpdateCheckedRowKeys:e=>{o.value=e}},null)}});return()=>t(N,null,{actions:()=>t(C,null,[t(b,{checkedRowKeys:o.value,onDelete:async()=>{const a=await Promise.allSettled(o.value.map(e=>r.api.says(e).delete()));for(const e of a)e.status==="rejected"&&u.success(`\u5220\u9664\u5931\u8D25\uFF0C${e.reason.message}`);o.value.length=0,s()}},null),t(K,{to:"/says/edit",icon:t(B,null,null)},null)]),default:()=>t(h,null,null)})}});export{te as default};