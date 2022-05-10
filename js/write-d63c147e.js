import{H as F}from"./rounded-button-92024ad7.js";import{T as N,M as k,P,S as U}from"./parse-content-135090e0.js";import{E as T}from"./toggle-ca196e8c.js";import{d as E,i as A,j as D,k as y,m as M,l as b,R as c,x as r,u as V,v as $,h as t,z as j,W as z,F as w,bj as H,I as W,n as q,C as L,bk as O,bl as Y}from"./index-62e99b2b.js";import{U as _}from"./underline-input-0a2eddb5.js";import{N as G}from"./DynamicTags-c8c771b1.js";import{i as J}from"./isString-a0ec2c3b.js";import{N as p}from"./FormItem-382dc1be.js";import{N as C}from"./Select-5a24a54a.js";import{N as K}from"./Switch-065eb892.js";import"./DynamicInput-3156cdca.js";import"./ChevronRight-9f5971e6.js";import"./Add-ff98d4f7.js";import"./ButtonGroup-b7bd8604.js";import"./InputNumber-0c8da4e8.js";import"./Form-1ff87b42.js";import"./use-async-monaco-82870548.js";import"./index-482f668f.js";import"./editor.main-51e9cfb2.js";import"./use-save-confirm-ea777af7.js";import"./js-yaml-fae8e8ce.js";import"./use-react-1afb760f.js";import"./throttle-cdd5b52c.js";import"./Tag-ce864d2c.js";import"./index-17f9ebb1.js";const Ca=E(()=>{const I=A(),l=D(L);y(async()=>{await l.fetch()});const R=()=>({categoryId:l.data?.value?.[0].id??"",slug:"",text:"",title:"",copyright:!0,tags:[],summary:"",allowComment:!0,id:void 0,images:[],meta:void 0}),S=a=>{const o=O(e),n=Object.keys(o);for(const u in a)n.includes(u)&&(e[u]=a[u])},e=M(R()),s=b(()=>I.query.id),d=b(()=>l.get(e.categoryId)||l.data?.value?.[0]||{});y(async()=>{const a=s.value;if(a&&typeof a=="string"){const o=await c.api.posts(a).get();S(o.data)}});const g=r(!1),f=V(),x=$(),B=async()=>{const a={...e,categoryId:d.value.id,summary:e.summary&&e.summary.trim()!=""?e.summary.trim():null};if(s.value){if(!J(s.value))return;const o=s.value;await c.api.posts(o).put({data:a}),f.success("\u4FEE\u6539\u6210\u529F")}else await c.api.posts.post({data:a}),f.success("\u53D1\u5E03\u6210\u529F");x.push({name:Y.ViewPost,hash:"|publish"})};return()=>t(q,{title:s.value?"\u4FEE\u6539\u6587\u7AE0":"\u64B0\u5199\u65B0\u6587\u7AE0",actionsElement:t(w,null,t(P,{data:e,onHandleYamlParsedMeta:a=>{e.title=a.title??e.title,e.slug=a.slug??e.slug}}),t(F,{icon:t(H,null),onClick:B})),footerButtonElement:t(w,null,t("button",{onClick:()=>{g.value=!0}},t(W,null,t(U,null))))},t(k,{class:"mt-3 relative z-10",label:"\u60F3\u60F3\u53D6\u4E2A\u4EC0\u4E48\u6807\u9898\u597D\u5462~",value:e.title,onChange:a=>{e.title=a}}),t("div",{class:"text-gray-500 py-3"},t("label",{class:"prefix"},`${z}/${d.value.slug}/`),t(_,{class:"ml-2",value:e.slug,onChange:a=>{e.slug=a}})),t(T,{loading:!!(s.value&&typeof e.id>"u"),onChange:a=>{e.text=a},text:e.text}),t(N,{show:g.value,onUpdateShow:a=>{g.value=a},data:e},t(p,{label:"\u5206\u7C7B",required:!0,path:"category"},t(C,{placeholder:"\u8BF7\u9009\u62E9",value:d.value.id,onUpdateValue:a=>{e.categoryId=a},options:l.data.value?.map(a=>({label:a.name,value:a.id,key:a.id}))||[]})),t(p,{label:"\u6807\u7B7E"},t(G,{value:e.tags,onUpdateValue:a=>{e.tags.length=0,e.tags.push(...a)}},{input({submit:a}){const o=E({setup(){const n=r([]),u=r(!1),h=r(""),v=r();return y(async()=>{u.value=!0,v.value&&v.value.$el.querySelector("input").focus();const{data:i}=await c.api.categories.get({params:{type:"Tag"}});n.value=i.map(m=>({label:m.name+" ("+m.count+")",value:m.name,key:m.name})),u.value=!1}),()=>t(C,{ref:v,size:"small",value:h.value,clearable:!0,loading:u.value,filterable:!0,tag:!0,options:n.value,onUpdateValue:i=>{h.value=i,a(i)}})}});return t(o,null)}})),t(p,{label:"\u6982\u8981"},t(j,{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"\u6587\u7AE0\u6982\u8981",value:e.summary,onInput:a=>void(e.summary=a)})),t(p,{label:"\u7248\u6743\u6CE8\u660E",labelAlign:"right",labelPlacement:"left"},t(K,{value:e.copyright,onUpdateValue:a=>void(e.copyright=a)}))))});export{Ca as default};