import{H as R}from"./rounded-button-308bc40f.js";import{T as k,M as x,P,S as U}from"./parse-content-91d444de.js";import{E as T}from"./toggle-1d6c438f.js";import{d as E,f as A,i as D,j as y,l as M,k as b,R as c,v as r,u as V,t as W,h as t,y as $,W as j,F as w,bh as H,I as q,m as z,C as L,bi as O,bj as Y}from"./index-0227ab67.js";import{U as _}from"./underline-input-4ca640fc.js";import{N as G}from"./DynamicTags-74a62193.js";import{i as J}from"./isString-d3d88591.js";import{N as p}from"./FormItem-39bb9788.js";import{N as C}from"./Select-7858b884.js";import{N as K}from"./Switch-62c404a6.js";import"./Form-663fa235.js";import"./CollapseItem-5d9e2426.js";import"./ChevronRight-83e5ac23.js";import"./InputNumber-25003689.js";import"./Add-1f9ab160.js";import"./js-yaml-fae8e8ce.js";import"./use-react-80035343.js";import"./use-save-confirm-6a63e807.js";import"./throttle-73e01a99.js";import"./Tag-9690fc76.js";import"./index-082836ff.js";const ha=E(()=>{const I=A(),l=D(L);y(async()=>{await l.fetch()});const S=()=>({categoryId:l.data?.value?.[0].id??"",slug:"",text:"",title:"",copyright:!0,tags:[],summary:"",allowComment:!0,id:void 0,images:[]}),B=a=>{const u=O(e),n=Object.keys(u);for(const o in a)n.includes(o)&&(e[o]=a[o])},e=M(S()),s=b(()=>I.query.id),d=b(()=>l.get(e.categoryId)||l.data?.value?.[0]||{});y(async()=>{const a=s.value;if(a&&typeof a=="string"){const u=await c.api.posts(a).get();B(u.data)}});const g=r(!1),f=V(),F=W(),N=async()=>{const a={...e,categoryId:d.value.id,summary:e.summary&&e.summary.trim()!=""?e.summary.trim():null};if(s.value){if(!J(s.value))return;const u=s.value;await c.api.posts(u).put({data:a}),f.success("\u4FEE\u6539\u6210\u529F")}else await c.api.posts.post({data:a}),f.success("\u53D1\u5E03\u6210\u529F");F.push({name:Y.ViewPost,hash:"|publish"})};return()=>t(z,{title:s.value?"\u4FEE\u6539\u6587\u7AE0":"\u64B0\u5199\u65B0\u6587\u7AE0",actionsElement:t(w,null,t(P,{data:e,onHandleYamlParsedMeta:a=>{e.title=a.title??e.title,e.slug=a.slug??e.slug}}),t(R,{icon:t(H,null),onClick:N})),footerButtonElement:t(w,null,t("button",{onClick:()=>{g.value=!0}},t(q,null,t(U,null))))},t(x,{class:"mt-3 relative z-10",label:"\u60F3\u60F3\u53D6\u4E2A\u4EC0\u4E48\u6807\u9898\u597D\u5462~",value:e.title,onChange:a=>{e.title=a}}),t("div",{class:"text-gray-500 py-3"},t("label",{class:"prefix"},`${j}/${d.value.slug}/`),t(_,{class:"ml-2",value:e.slug,onChange:a=>{e.slug=a}})),t(T,{loading:!!(s.value&&typeof e.id>"u"),onChange:a=>{e.text=a},text:e.text}),t(k,{show:g.value,onUpdateShow:a=>{g.value=a},data:e},t(p,{label:"\u5206\u7C7B",required:!0,path:"category"},t(C,{placeholder:"\u8BF7\u9009\u62E9",value:d.value.id,onUpdateValue:a=>{e.categoryId=a},options:l.data.value?.map(a=>({label:a.name,value:a.id,key:a.id}))||[]})),t(p,{label:"\u6807\u7B7E"},t(G,{value:e.tags,onUpdateValue:a=>{e.tags.length=0,e.tags.push(...a)}},{input({submit:a}){const u=E({setup(){const n=r([]),o=r(!1),h=r(""),v=r();return y(async()=>{o.value=!0,v.value&&v.value.$el.querySelector("input").focus();const{data:i}=await c.api.categories.get({params:{type:"Tag"}});n.value=i.map(m=>({label:m.name+" ("+m.count+")",value:m.name,key:m.name})),o.value=!1}),()=>t(C,{ref:v,size:"small",value:h.value,clearable:!0,loading:o.value,filterable:!0,tag:!0,options:n.value,onUpdateValue:i=>{h.value=i,a(i)}})}});return t(u,null)}})),t(p,{label:"\u6982\u8981"},t($,{placeholder:"\u6587\u7AE0\u6982\u8981",value:e.summary,onInput:a=>void(e.summary=a)})),t(p,{label:"\u7248\u6743\u6CE8\u660E",labelWidth:100,labelAlign:"right",labelPlacement:"left"},t(K,{value:e.copyright,onUpdateValue:a=>void(e.copyright=a)}))))});export{ha as default};
