import{H as v}from"./rounded-button-86dfc9d5.js";import{P as h,S as b,M as y,T as w}from"./parse-content-76d91b55.js";import{E as C}from"./toggle-09530d61.js";import{f as I,j as P,p as x,n as R,m as N,R as n,y as S,u as E,x as M,a,C as T,F as i,bm as B,I as U,W as D,bo as H,bn as W}from"./index-94a141f8.js";import{U as u}from"./underline-input-447331d5.js";import{u as F}from"./use-parse-payload-5c4fdb44.js";import{i as L}from"./isString-76b2cb71.js";import{N as V}from"./FormItem-3d7bd772.js";import{N as $}from"./InputNumber-8688e515.js";import"./DynamicInput-e891f0a6.js";import"./ChevronRight-f234c366.js";import"./Add-df00129e.js";import"./ButtonGroup-62a671f8.js";import"./Form-8b9145a0.js";import"./use-async-monaco-98bf4993.js";import"./index-8bb284e8.js";import"./editor.main-2e49c7ff.js";import"./use-save-confirm-4d2a0b82.js";import"./Switch-e918befe.js";import"./js-yaml-fae8e8ce.js";import"./use-react-b4d40809.js";import"./throttle-5c97c72d.js";import"./Select-bade2b3f.js";import"./Tag-9da39b6c.js";import"./index-25820ad5.js";const pt=I(()=>{const m=P(),p=()=>({text:"",title:"",order:0,slug:"",subtitle:"",allowComment:!0,id:void 0,images:[],meta:void 0}),d=e=>F(t)(e),t=x(p()),o=R(()=>m.query.id);N(async()=>{const e=o.value;if(e&&typeof e=="string"){const f=(await n.api.pages(e).get({})).data;d(f)}});const s=S(!1),r=E(),c=M(),g=async()=>{const e=()=>{try{if(!t.title||t.title.trim().length==0)throw"\u6807\u9898\u4E3A\u7A7A";if(!t.slug)throw"\u8DEF\u5F84\u4E3A\u7A7A";return{...W(t),title:t.title.trim(),slug:t.slug.trim()}}catch(l){throw r.error(l),l}};if(o.value){if(!L(o.value))return;const l=o.value;await n.api.pages(l).put({data:e()}),r.success("\u4FEE\u6539\u6210\u529F")}else await n.api.pages.post({data:e()}),r.success("\u53D1\u5E03\u6210\u529F");c.push({name:H.ListPage,hash:"|publish"})};return()=>a(T,{actionsElement:a(i,null,[a(h,{data:t,onHandleYamlParsedMeta:e=>{t.title=e.title??t.title,t.slug=e.slug??t.slug,t.subtitle=e.subtitle??t.subtitle}},null),a(v,{icon:a(B,null,null),onClick:g},null)]),footerButtonElement:a(i,null,[a("button",{onClick:()=>{s.value=!0}},[a(U,null,{default:()=>[a(b,null,null)]})])])},{default:()=>[a(y,{class:"mt-3 relative z-10",label:"\u4E0E\u4F60\u6709\u4E2A\u597D\u5FC3\u60C5~",value:t.title,onChange:e=>{t.title=e}},null),a("div",{class:"text-gray-700 pt-3"},[a(u,{value:t.subtitle,onChange:e=>void(t.subtitle=e)},null)]),a("div",{class:"text-gray-500 py-3"},[a("label",null,[`${D}/`]),a(u,{value:t.slug,onChange:e=>void(t.slug=e)},null)]),a(C,{loading:!!(o.value&&typeof t.id>"u"),onChange:e=>{t.text=e},text:t.text},null),a(w,{onUpdateShow:e=>{s.value=e},data:t,show:s.value},{default:()=>[a(V,{label:"\u9875\u9762\u987A\u5E8F"},{default:()=>[a($,{placeholder:"",value:t.order,onUpdateValue:e=>void(t.order=e??0)},null)]})]})]})});export{pt as default};
