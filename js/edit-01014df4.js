import{H as i}from"./rounded-button-0d1bc611.js";import{f as I,j as P,x as k,y as C,cH as N,di as H,dj as r,t as T,p as D,n as F,m as E,R as u,a as e,C as L,F as f,dk as y,dl as M,H as c,bo as h,bn as j}from"./index-d19751eb.js";import{u as q}from"./use-parse-payload-0fb2feb8.js";import{i as v}from"./isString-069caf8e.js";import{t as B}from"./transform-0a05fcb3.js";import{N as $}from"./Form-020f5b68.js";import{N as m}from"./FormItem-8719bbf1.js";import"./_arrayEach-2ff48152.js";import"./index-f597b3de.js";const U=I({setup(){const g=P(),d=k(),x=()=>({text:"",author:"",source:""}),s=C({});N(()=>{H([r.\u539F\u521B,r.\u54F2\u5B66,r.\u6587\u5B66,r.\u8BD7\u8BCD]).then(t=>{s.value={source:t.from,text:t.hitokoto,author:t.from_who||t.creator}})});const w=T(),b=async()=>{const t=async()=>{await u.api.says.post({data:s.value}),message.success("\u53D1\u5E03\u6210\u529F"),d.push({name:h.ListSay})};a.text||a.author||a.source?w.create({title:"\u8B66\u544A",content:"\u53D1\u5E03\u4E00\u8A00\u4F1A\u8986\u76D6\u73B0\u6709\u7684\u5185\u5BB9, \u8981\u7EE7\u7EED\u5417",type:"warning",negativeText:"\u53D6\u6D88",positiveText:"\u786E\u5B9A",onPositiveClick(){t()}}):t()},S=t=>q(a)(t),a=D(x()),l=F(()=>g.query.id);E(async()=>{const t=l.value;if(t&&typeof t=="string"){const n=(await u.api.says(t).get({})).data;S(n)}});const p=async()=>{const t=()=>{try{if(!a.text||a.text.trim().length==0)throw"\u5185\u5BB9\u4E3A\u7A7A";return{...B(j(a),(o,n,R)=>(o[R]=typeof n>"u"?null:typeof n=="string"&&n.length==0?"":n,o)),text:a.text.trim()}}catch(o){throw message.error(o),o}};if(l.value){if(!v(l.value))return;const o=l.value;await u.api.says(o).put({data:t()}),message.success("\u4FEE\u6539\u6210\u529F")}else await u.api.says.post({data:t()}),message.success("\u53D1\u5E03\u6210\u529F");d.push({name:h.ListSay})};return()=>e(L,{actionsElement:e(f,null,[v(l)?e(i,{name:"\u66F4\u65B0",variant:"info",onClick:p,icon:e(y,null,null)},null):e(f,null,[e(i,{name:"\u53D1\u5E03\u4E00\u8A00",variant:"info",onClick:b,icon:e(M,null,null)},null),e(i,{name:"\u53D1\u5E03\u81EA\u5DF1\u8BF4\u7684",variant:"primary",onClick:p,icon:e(y,null,null)},null)])])},{default:()=>[e($,null,{default:()=>[e(m,{label:"\u5185\u5BB9",required:!0,labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[e(c,{type:"textarea",autofocus:!0,autosize:{minRows:6,maxRows:8},placeholder:s.value.text,value:a.text,onInput:t=>void(a.text=t)},null)]}),e(m,{label:"\u4F5C\u8005",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[e(c,{placeholder:s.value.author,value:a.author,onInput:t=>void(a.author=t)},null)]}),e(m,{label:"\u6765\u6E90",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[e(c,{placeholder:s.value.source,value:a.source,onInput:t=>void(a.source=t)},null)]})]})]})}});export{U as default};
