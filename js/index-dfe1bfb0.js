import{bp as X,f as S,y as h,w as N,a as e,x as j,j as L,n as M,ed as Z,p as Q,cq as W,c5 as H,u as ee,dI as A,H as x,bn as te,R as g,bX as C,m as _,ee as T,aI as ae,t as ne,F as O,ef as le,bY as re,b$ as I,N as b,b0 as se,P as z,b as w,L as oe,Z as ue,A as ie,d as D,I as R,eg as ce,g as pe,C as de}from"./index-d19751eb.js";import{H as V}from"./rounded-button-0d1bc611.js";import{u as G}from"./use-react-916c167d.js";import{d as me,l as U}from"./js-yaml-fae8e8ce.js";import{T as fe}from"./two-col-77fa4df2.js";import{F as ve,S as ye,d as he,a as y,b as ge}from"./index-0d5776af.js";import{a as we,p as B}from"./use-async-monaco-9883f875.js";import{_ as be}from"./CheckCircleOutlined-c4a1199b.js";import{o as Se}from"./omit-7b85eead.js";import{N as P}from"./Form-020f5b68.js";import{N as v}from"./FormItem-8719bbf1.js";import{N as xe}from"./Select-7a97fa4f.js";import{N as Ne}from"./Switch-d9cf99e7.js";import{D as Fe}from"./delete-confirm-ecbf8b89.js";import{T as ke}from"./index-39b3df5a.js";import{R as _e}from"./relative-time-0e8b5710.js";import{u as Te}from"./use-table-db53dbb6.js";import{C as K}from"./index-267e59b6.js";import{E as Ce}from"./ExternalLink-660c4ccf.js";import{N as E}from"./Tag-94478d3b.js";import{N as Oe}from"./Popconfirm-7e80e4f1.js";import{N as $e,a as J}from"./Tabs-be639467.js";import"./editor.main-e8e6d0c5.js";import"./use-save-confirm-ed01669c.js";import"./_arrayEach-2ff48152.js";import"./index-f597b3de.js";import"./DataTable-18d1e05e.js";import"./ChevronRight-325e6a5c.js";import"./Checkbox-e8ec6e4e.js";import"./Icon-3c7c2049.js";import"./prop-a1682621.js";import"./Forward-c6ae5d45.js";import"./Tooltip-d9235f95.js";import"./Add-264a8c71.js";import"./throttle-a696a85c.js";var Y={};Object.defineProperty(Y,"__esModule",{value:!0});const k=X,je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ve=(0,k.createElementVNode)("path",{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z",fill:"currentColor"},null,-1),Pe=[Ve];var qe=Y.default=(0,k.defineComponent)({name:"LockFilled",render:function(r,s){return(0,k.openBlock)(),(0,k.createElementBlock)("svg",je,Pe)}});const Ae=S({props:{onSave:{type:Function},value:{type:String,required:!0},onChange:{type:Function,required:!0},language:{type:String,required:!0}},setup(l){const r=we(l),s=h();return N(()=>r.value,()=>{!s.value||s.value.loaded&&l.onChange(r.value)}),()=>e("div",{class:"h-full w-full relative"},[e(ve,{ref:s,value:r,onSave:l.onSave,language:l.language},null)])}}),De=S({setup(){const l=j(),r=L(),s=M(()=>r.query.id),a=Z(s.value?`snippet-${s.value}`:"snippet",new ye),u=Q(s.value?{json:"",yaml:"",text:"",function:""}:{json:JSON.stringify({name:"hello world"},null,2),text:"",yaml:"name: hello world",function:he});N(()=>a.value.type,n=>{a.value.raw=u[n]}),N(()=>[u.json,u.yaml],W(([n,t],[i,c])=>{const m=n!==i,f=t!==c,q=te(u);try{m?q.yaml=me(JSON.parse(n)):f&&(q.json=JSON.stringify(U(t),null,2))}catch{}},100)),N(()=>[a.value.type,a.value.schema],([n,t])=>{if(n===y.JSON){if(!a.value.schema){C(()=>import("./editor.main-e8e6d0c5.js").then(function(c){return c.e}),["js/editor.main-e8e6d0c5.js","assets/editor.main.339eee99.css","js/index-d19751eb.js","assets/index.91340e78.css"]).then(c=>{c.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!1})});return}const i=a.value.schema;fetch(i).then(c=>c.text()).then(c=>{C(()=>import("./editor.main-e8e6d0c5.js").then(function(m){return m.e}),["js/editor.main-e8e6d0c5.js","assets/editor.main.339eee99.css","js/index-d19751eb.js","assets/index.91340e78.css"]).then(m=>{m.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:i,fileMatch:["*"],schema:JSON.parse(c)}]})})})}}),N(()=>s,async n=>{if(n.value){const t=await g.api.snippets(n.value).get();switch(t.type){case y.JSON:{t.raw=JSON.stringify(JSON.parse(t.raw),null,2);break}}a.value=t,u[t.type]=t.raw}},{immediate:!0});const d=H(),o=ee(),p=async(n=!0)=>{const t=f=>{try{return JSON.stringify(JSON.parse(f),null,0)}catch{o.error("JSON \u683C\u5F0F\u9519\u8BEF")}},i=()=>{const f=u[a.value.type];switch(a.value.type){case y.JSON:return t(f);case y.YAML:{try{U(f)}catch{o.error("YAML \u683C\u5F0F\u9519\u8BEF")}return f}case y.Function:return f;default:return f}},m={...Se(a.value,["_id","id","created","data"]),raw:i()};m.metatype||delete m.metatype,s.value?await g.api.snippets(s.value).put({data:m}):await g.api.snippets.post({data:m}),o.success(`${s.value?"\u66F4\u65B0":"\u521B\u5EFA"}\u6210\u529F`),n&&l.replace({query:{...r.query,tab:0}})};return G(()=>(d.setHeaderButtons(e(V,{variant:"success",onClick:()=>p(),icon:e(be,null,null)},null)),()=>{d.setHeaderButtons(null)})),()=>e(fe,null,{default:()=>[e(A,{span:12},{default:()=>[e(P,null,{default:()=>[e(v,{label:"\u540D\u79F0",required:!0},{default:()=>[e(x,{onUpdateValue:n=>void(a.value.name=n),value:a.value.name},null)]}),e(v,{label:"\u5F15\u7528",required:!0},{default:()=>[e(x,{value:a.value.reference,onUpdateValue:n=>void(a.value.reference=n),defaultValue:"root"},null)]}),e(v,{label:"\u5143\u7C7B\u578B"},{default:()=>[e(x,{value:a.value.metatype,onUpdateValue:n=>void(a.value.metatype=n)},null)]}),e(v,{label:"\u6570\u636E\u7C7B\u578B"},{default:()=>[e(xe,{value:a.value.type,defaultValue:y.JSON,onUpdateValue:n=>void(a.value.type=n),options:Object.entries(y).map(([n,t])=>({label:n,value:t}))},null)]}),e(v,{label:"Schema"},{default:()=>[e(x,{value:a.value.schema,onUpdateValue:n=>void(a.value.schema=n)},null)]}),e(v,{label:"\u516C\u5F00",labelPlacement:"left"},{default:()=>[e("div",{class:"w-full flex justify-end"},[e(Ne,{value:!a.value.private,onUpdateValue:n=>void(a.value.private=!n)},null)])]}),e(v,{label:"\u5907\u6CE8"},{default:()=>[e(x,{resizable:!1,value:a.value.comment,onUpdateValue:n=>void(a.value.comment=n),type:"textarea",rows:4},null)]})]})]}),e(A,{span:24},{default:()=>[e(Ae,{onSave:async()=>{await p(!1),o.success("Saved!")},language:ge[a.value.type],value:u[a.value.type],onChange:n=>{u[a.value.type]=n}},null)]})]})}}),Re=S({props:{language:{type:String,required:!0},code:{type:String,required:!0}},setup(l){const r=h();return _(()=>{C(()=>import("./editor.main-e8e6d0c5.js").then(function(s){return s.e}),["js/editor.main-e8e6d0c5.js","assets/editor.main.339eee99.css","js/index-d19751eb.js","assets/index.91340e78.css"]).then(s=>{s.editor.colorize(l.code,l.language,{tabSize:2}).then(a=>{r.value.innerHTML=a})})}),()=>e("pre",{ref:r},[l.code])}});var F;(l=>{async function r(){return(await T.rest.repos.get({owner:"mx-space",repo:"snippets"})).data}l.fetchRepo=r;async function s(u=""){return(await T.rest.repos.getContent({owner:"mx-space",repo:"snippets",path:u})).data}l.fetchFileTree=s;async function a(u=""){return(await T.rest.search.code({q:`repo:mx-space/snippets in:path ${u}`,sort:"indexed",order:"desc"})).data}l.searchFile=a})(F||(F={}));function $(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!z(l)}const Ue=()=>{const l=h([]),r=h(!0);return[l,async()=>{const a=await F.fetchFileTree();Array.isArray(a)&&(l.value=a.filter(({type:u})=>u==="dir").map(({name:u,html_url:d})=>({name:u,url:d||""}))),r.value=!1},r]},Be=S({props:{onFinish:{type:Function,required:!0}},setup(l){const r=h(!1),s=t=>{t.stopPropagation(),t.preventDefault(),n()},[a,u,d]=Ue();ae(()=>{r.value&&u()});const o=h(""),p=ne(),n=async()=>{const t=p.create({title:"\u83B7\u53D6\u548C\u89E3\u6790",content:()=>ue(Ee,{name:o.value,onFinish:()=>{t.destroy(),l.onFinish()}}),closable:!0})};return()=>e(O,null,[e(V,{variant:"info",onClick:()=>{r.value=!0},icon:e(le,null,null)},null),e(re,{show:r.value,onUpdateShow:t=>{r.value=t}},{default:()=>[e(I,{class:"modal-card sm",title:"\u5BFC\u5165 Snippets"},{default:()=>[e(P,{onSubmit:s},{default:()=>[e(v,{label:"\u5305\u540D"},{default:()=>[e(x,{placeholder:"\u652F\u6301\u5BFC\u5165 GitHub repo:mx-space/snippets \u4E0B\u7684\u96C6\u5408\u5305\uFF0C\u793A\u4F8B\u8F93\u5165: kami",value:o.value,onUpdateValue:t=>{o.value=t}},null)]}),e(v,{label:"\u53EF\u83B7\u53D6\u7684"},{default:()=>[d.value?e(K,null,null):e("div",{class:"flex flex-wrap space-x-2"},[a.value.map(({name:t,url:i})=>e("div",{class:"flex items-center ml-4",key:"name"},[e(b,{text:!0,onClick:()=>{o.value=t,se(()=>{n()})}},$(t)?t:{default:()=>[t]}),e("a",{href:i,target:"_blank",rel:"noopener noreferrer"},[e(Ce,{class:"!h-4 !w-4 ml-2"},null)])]))])]}),e("div",{class:"flex justify-end"},[e(b,{round:!0,type:"primary",onClick:n},{default:()=>[w("\u5904\u7406")]})])]})]})]})])}}),Ee=S({props:{name:{type:String,required:!0},onFinish:{type:Function,required:!0}},setup(l){const r=h(!0),s=h([]),a=h([]);_(async()=>{const d=await F.fetchFileTree(l.name);if(Array.isArray(d)){const o=d.map(async p=>{if(p.type==="dir")switch(p.name){case"functions":{const n=await F.fetchFileTree(`${l.name}/functions`);Array.isArray(n)&&await Promise.all(n.map(async t=>{if(t.type==="file"&&/\.(js|ts)$/.test(t.name)){const i=t.download_url;if(!i){message.error(`\u83B7\u53D6\u4E0B\u8F7D\u5730\u5740\u5931\u8D25, ${t.name}`);return}const c=await fetch(i).then(m=>m.text());console.log(`// ${t.name}
${c}`),s.value.push({name:t.name,reference:l.name,raw:c,htmlUrl:t.html_url})}}));break}}else if(p.name==="package.json"){const n=p.download_url;if(!n){message.error("\u65E0\u6CD5\u83B7\u53D6 package.json \u6587\u4EF6\u7684\u4E0B\u8F7D\u5730\u5740");return}const t=await fetch(n).then(c=>c.text()),i=JSON.parse(t);console.log("// package.json"),console.log(i),a.value=Object.entries(i.dependencies||{}).map(([c,m])=>`${c}@${m}`)}});await Promise.all(o),r.value=!1}});const u=async()=>{const d={snippets:s.value.map(p=>({name:B.basename(p.name,B.extname(p.name)),reference:p.reference,raw:p.raw,private:!1,type:y.Function})),packages:unref(a)},o=message.loading("\u6B63\u5728\u5BFC\u5165...",{duration:1e6});await g.api.snippets.more.post({data:d,timeout:1e6}),o.destroy(),message.success("\u5BFC\u5165\u6210\u529F"),l.onFinish()};return()=>{const{name:d}=l;return e("div",null,[e("p",null,[w("\u83B7\u53D6\uFF1A "),d]),r.value?e("div",{class:"h-24 relative"},[e(K,{description:"\u9700\u8981\u4ECE GitHub \u83B7\u53D6\uFF0C\u5EFA\u8BAE\u8FDE\u63A5\u4EE3\u7406\u540E\u64CD\u4F5C\u3002"},null)]):e(P,null,{default:()=>[e(v,{label:"\u5C06\u5BFC\u5165\u7684\u51FD\u6570\uFF1A"},{default:()=>[e("div",{class:"space-x-2"},[s.value.map(({name:o,reference:p,raw:n,htmlUrl:t},i)=>e(oe,{key:`${p}/${o}`,trigger:"hover",placement:"right"},{trigger(){return e(b,{text:!0,onClick:()=>{t&&window.open(t)},class:"cursor-pointer"},{default:()=>[e(E,{closable:!0,onClose:c=>{c.stopPropagation(),s.value.splice(i,1)}},$(o)?o:{default:()=>[o]})]})},default(){return e(I,{bordered:!1,title:o,class:"max-w-[40vw] max-h-[50vh] overflow-auto"},{default:()=>[e(Re,{code:n,language:"typescript"},null)]})}}))])]}),e(v,{label:"\u5C06\u5B89\u88C5\u7684\u4F9D\u8D56\uFF1A"},{default:()=>[e("div",{class:"space-x-2"},[a.value.map((o,p)=>e(E,{closable:!0,key:o,onClose:()=>{a.value.splice(p,1)}},$(o)?o:{default:()=>[o]}))])]}),e("div",{class:"flex justify-end"},[e(b,{round:!0,type:"primary",onClick:u},{default:()=>[w("\u5BFC\u5165")]})])]})])}}});function Je(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!z(l)}const Le=()=>{const l=h([]),r=async()=>{const s=await g.api.snippets.aggregate.post({data:[{$group:{_id:"$reference"}},{$project:{name:"$_id",_id:!1}}]});l.value=s.data.map(({name:a})=>a)};return _(()=>{r()}),l},Me=S({setup(){const{data:l,fetchDataFn:r,loading:s,pager:a,checkedRowKeys:u}=Te((n,t)=>async(i,c,m)=>{const f=await g.api.snippets.get({params:{page:i,size:c,select:"-raw",db_query:m}});n.value=f.data,t.value=f.pagination}),d=Le();_(()=>{r(1,20)});const o=H();G(()=>(o.setHeaderButtons(e(O,null,[e(V,{onClick:()=>{p.push({query:{tab:1}})},icon:e(ie,null,null)},null),e(Be,{onFinish:()=>{r()}},null),e(Fe,{checkedRowKeys:u,onDelete:async n=>{!n||(await Promise.all(n.map(t=>g.api.snippets(t).delete())),r(1,20),u.value.length=0)}},null)])),()=>{o.setHeaderButtons(null)}));const p=j();return()=>{const n=d.value.map(t=>({label:t,value:t}));return e(O,null,[e(ke,{onUpdateCheckedRowKeys:t=>{u.value=t},data:l,nTableProps:{onUpdateFilters(t){t.reference&&t.reference.length?r(1,20,{$or:t.reference.map(i=>({reference:i}))}):r(1,20)}},pager:a,columns:[{type:"selection",options:["none","all"]},{key:"name",title:"\u540D\u79F0",render(t){const i=t.name,c=t.private;return e(D,{align:"center"},{default:()=>[t.type===y.Function&&e(R,null,{default:()=>[e(ce,null,null)]}),e(b,{tag:"a",text:!0,href:`${g.endpoint+(t.type===y.Function?"/fn/":"/snippets/")+t.reference}/${t.name}${t.private?`?token=${pe()}`:""}`,target:"_blank",size:"tiny"},Je(i)?i:{default:()=>[i]}),c&&e(R,{class:"items-center flex "},{default:()=>[e(qe,null,null)]})]})}},{title:"\u7C7B\u578B",key:"type"},{title:"\u5F15\u7528",key:"reference",filter:!0,filterOptions:n},{key:"comment",title:"\u5907\u6CE8",width:300,ellipsis:{tooltip:!0}},{title:"\u521B\u5EFA\u4E8E",key:"created",render(t){return e(_e,{time:t.created},null)}},{title:"\u64CD\u4F5C",key:"id",fixed:"right",render(t){return e(D,null,{default:()=>[e(b,{text:!0,size:"tiny",type:"primary",onClick:()=>{p.push({query:{tab:1,id:t.id}})}},{default:()=>[w("\u7F16\u8F91")]}),e(Oe,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await g.api.snippets(t.id).delete(),message.success("\u5220\u9664\u6210\u529F"),await r(a.value.currentPage)}},{trigger:()=>e(b,{text:!0,type:"error",size:"tiny"},{default:()=>[w("\u79FB\u9664")]}),default:()=>e("span",{class:"max-w-48"},[w("\u786E\u5B9A\u8981\u5220\u9664 "),t.title,w(" ?")])})]})}}],loading:s.value},null)])}}});var kt=S({name:"SnippetView",setup(){const l=L(),r=j(),s=M(()=>l.query.tab||"0");return()=>e(de,null,{default:()=>[e($e,{size:"medium",value:s.value,onUpdateValue:a=>{r.push({query:{tab:a}})}},{default:()=>[e(J,{name:"0",tab:"\u5217\u8868"},{default:()=>[e(Me,null,null)]}),e(J,{name:"1",tab:"\u7F16\u8F91",displayDirective:"if"},{default:()=>[e(De,null,null)]})]})]})}});export{kt as default};
