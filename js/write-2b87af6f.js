import{H as P}from"./rounded-button-77c7ccde.js";import{P as U,S as T,M as V,T as $}from"./parse-content-699d9620.js";import{E}from"./toggle-e42319eb.js";import{f as b,j as M,k as B,l as H,m as v,p as W,n as w,R as p,y as u,u as q,x as z,a as t,C as D,F as I,bm as F,I as j,W as A,H as L,bn as O,bo as Y}from"./index-6e7759df.js";import{U as _}from"./underline-input-a7f3ff33.js";import{N as G}from"./DynamicTags-249e2d48.js";import{i as J}from"./isString-79ae3c94.js";import{N as c}from"./FormItem-7cf58170.js";import{N as R}from"./Select-bf96ff63.js";import{N as K}from"./Switch-2cf3a444.js";import"./DynamicInput-fd59e028.js";import"./ChevronRight-7c996c67.js";import"./Add-b7baeac9.js";import"./ButtonGroup-a686121e.js";import"./InputNumber-3a1b60c8.js";import"./Form-4ebafc98.js";import"./use-async-monaco-26ef9579.js";import"./index-bae7d557.js";import"./editor.main-c3af4c17.js";import"./use-save-confirm-d8e8f5e2.js";import"./js-yaml-fae8e8ce.js";import"./use-react-7dbf5132.js";import"./throttle-3e23936a.js";import"./Tag-b1b9f704.js";import"./prop-a1682621.js";import"./index-731c4fac.js";const Se=b(()=>{const S=M(),n=B(H);v(async()=>{await n.fetch()});const C=()=>({categoryId:n.data?.value?.[0].id??"",slug:"",text:"",title:"",copyright:!0,tags:[],summary:"",allowComment:!0,id:void 0,images:[],meta:void 0}),x=e=>{const l=O(a),r=Object.keys(l);for(const o in e)r.includes(o)&&(a[o]=e[o])},a=W(C()),s=w(()=>S.query.id),d=w(()=>n.get(a.categoryId)||n.data?.value?.[0]||{});v(async()=>{const e=s.value;if(e&&typeof e=="string"){const l=await p.api.posts(e).get();x(l.data)}});const g=u(!1),y=q(),N=z(),k=async()=>{const e={...a,categoryId:d.value.id,summary:a.summary&&a.summary.trim()!=""?a.summary.trim():null};if(s.value){if(!J(s.value))return;const l=s.value;await p.api.posts(l).put({data:e}),y.success("\u4FEE\u6539\u6210\u529F")}else await p.api.posts.post({data:e}),y.success("\u53D1\u5E03\u6210\u529F");N.push({name:Y.ViewPost,hash:"|publish"})};return()=>t(D,{title:s.value?"\u4FEE\u6539\u6587\u7AE0":"\u64B0\u5199\u65B0\u6587\u7AE0",actionsElement:t(I,null,[t(U,{data:a,onHandleYamlParsedMeta:e=>{a.title=e.title??a.title,a.slug=e.slug??a.slug}},null),t(P,{icon:t(F,null,null),onClick:k},null)]),footerButtonElement:t(I,null,[t("button",{onClick:()=>{g.value=!0}},[t(j,null,{default:()=>[t(T,null,null)]})])])},{default:()=>[t(V,{class:"mt-3 relative z-10",label:"\u60F3\u60F3\u53D6\u4E2A\u4EC0\u4E48\u6807\u9898\u597D\u5462~",value:a.title,onChange:e=>{a.title=e}},null),t("div",{class:"text-gray-500 py-3"},[t("label",{class:"prefix"},[`${A}/${d.value.slug}/`]),t(_,{class:"ml-2",value:a.slug,onChange:e=>{a.slug=e}},null)]),t(E,{loading:!!(s.value&&typeof a.id>"u"),onChange:e=>{a.text=e},text:a.text},null),t($,{show:g.value,onUpdateShow:e=>{g.value=e},data:a},{default:()=>[t(c,{label:"\u5206\u7C7B",required:!0,path:"category"},{default:()=>[t(R,{placeholder:"\u8BF7\u9009\u62E9",value:d.value.id,onUpdateValue:e=>{a.categoryId=e},options:n.data.value?.map(e=>({label:e.name,value:e.id,key:e.id}))||[]},null)]}),t(c,{label:"\u6807\u7B7E"},{default:()=>[t(G,{value:a.tags,onUpdateValue:e=>{a.tags.length=0,a.tags.push(...e)}},{input({submit:e}){const l=b({setup(){const r=u([]),o=u(!1),h=u(""),f=u();return v(async()=>{o.value=!0,f.value&&f.value.$el.querySelector("input").focus();const{data:i}=await p.api.categories.get({params:{type:"Tag"}});r.value=i.map(m=>({label:`${m.name} (${m.count})`,value:m.name,key:m.name})),o.value=!1}),()=>t(R,{ref:f,size:"small",value:h.value,clearable:!0,loading:o.value,filterable:!0,tag:!0,options:r.value,onUpdateValue:i=>{h.value=i,e(i)}},null)}});return t(l,null,null)}})]}),t(c,{label:"\u6982\u8981"},{default:()=>[t(L,{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"\u6587\u7AE0\u6982\u8981",value:a.summary,onInput:e=>void(a.summary=e)},null)]}),t(c,{label:"\u7248\u6743\u6CE8\u660E",labelAlign:"right",labelPlacement:"left"},{default:()=>[t(K,{value:a.copyright,onUpdateValue:e=>void(a.copyright=e)},null)]})]})]})});export{Se as default};
