import{bP as G,d as w,v as h,w as C,h as e,t as E,f as U,k as J,dW as Y,l as K,ch as W,b_ as L,u as X,dp as O,y as b,bi as Z,R as g,bX as _,j as B,dX as N,aE as Q,q as ee,bS as te,bT as M,N as F,aW as ae,dY as ne,F as k,n as ue,cO as re,a as P,I as V,dZ as se,g as oe,A as le,m as ie}from"./index-0227ab67.js";import{H as D}from"./rounded-button-308bc40f.js";import{u as H}from"./use-react-80035343.js";import{d as ce,l as $}from"./js-yaml-fae8e8ce.js";import{u as pe,T as de,p as j}from"./use-async-monaco-d64a683f.js";import{F as me,d as ve,S as fe,a as y,b as ye}from"./index-5adb5b00.js";import{o as he}from"./omit-f160f248.js";import{_ as ge}from"./CheckCircleOutlined-41df34dc.js";import{N as T}from"./Form-663fa235.js";import{N as f}from"./FormItem-39bb9788.js";import{N as Fe}from"./Select-7858b884.js";import{N as we}from"./Switch-62c404a6.js";import{D as be}from"./delete-confirm-39ca559c.js";import{T as Ce}from"./index-0ff9a119.js";import{R as xe}from"./relative-time-513cda3d.js";import{u as Se}from"./use-table-50961f79.js";import{C as z}from"./index-752486ed.js";import{E as Be}from"./ExternalLink-03f6f857.js";import{N as q}from"./Tag-9690fc76.js";import{N as Ne}from"./Popconfirm-ca156b07.js";import{N as _e,a as R}from"./Tabs-e6291b3f.js";import"./editor.main-759b9211.js";import"./use-save-confirm-6a63e807.js";import"./_arrayEach-2ff48152.js";import"./index-082836ff.js";import"./DataTable-a4e31283.js";import"./Icon-1ba3e757.js";import"./Forward-f1c0b02c.js";import"./ChevronRight-83e5ac23.js";import"./Tooltip-973fe8b7.js";import"./Add-1f9ab160.js";import"./throttle-73e01a99.js";var I={};Object.defineProperty(I,"__esModule",{value:!0});const S=G,ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ee=(0,S.createElementVNode)("path",{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z",fill:"currentColor"},null,-1),De=[Ee];var Te=I.default=(0,S.defineComponent)({name:"LockFilled",render:function(u,s){return(0,S.openBlock)(),(0,S.createElementBlock)("svg",ke,De)}});const Ae=w({props:{onSave:{type:Function},value:{type:String,required:!0},onChange:{type:Function,required:!0},language:{type:String,required:!0}},setup(r){const u=pe(r),s=h();return C(()=>u.value,()=>{!s.value||s.value.loaded&&r.onChange(u.value)}),()=>e("div",{class:"h-full w-full relative"},e(me,{ref:s,value:u,onSave:r.onSave,language:r.language}))}}),Oe=w({setup(){const r=E(),u=U(),s=J(()=>u.query.id),a=Y(s.value?"snippet-"+s.value:"snippet",new ye),o=K(s.value?{json:"",yaml:"",text:"",function:""}:{json:JSON.stringify({name:"hello world"},null,2),text:"",yaml:"name: hello world",function:ve});C(()=>a.value.type,n=>{a.value.raw=o[n]}),C(()=>[o.json,o.yaml],W(([n,t],[c,i])=>{const m=n!==c,v=t!==i,A=Z(o);try{m?A.yaml=ce(JSON.parse(n)):v&&(A.json=JSON.stringify($(t),null,2))}catch{}},100)),C(()=>[a.value.type,a.value.schema],([n,t])=>{if(n===y.JSON){if(!a.value.schema){_(()=>import("./editor.main-759b9211.js").then(function(i){return i.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(i=>{i.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!1})});return}const c=a.value.schema;fetch(c).then(i=>i.text()).then(i=>{_(()=>import("./editor.main-759b9211.js").then(function(m){return m.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(m=>{m.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:c,fileMatch:["*"],schema:JSON.parse(i)}]})})})}}),C(()=>s,async n=>{if(n.value){const t=await g.api.snippets(n.value).get();switch(t.type){case y.JSON:{t.raw=JSON.stringify(JSON.parse(t.raw),null,2);break}}a.value=t,o[t.type]=t.raw}},{immediate:!0});const d=L(),l=X(),p=async(n=!0)=>{const t=v=>{try{return JSON.stringify(JSON.parse(v),null,0)}catch{l.error("JSON \u683C\u5F0F\u9519\u8BEF")}},c=()=>{const v=o[a.value.type];switch(a.value.type){case y.JSON:return t(v);case y.YAML:{try{$(v)}catch{l.error("YAML \u683C\u5F0F\u9519\u8BEF")}return v}case y.Function:return v;default:return v}},m={...he(a.value,["_id","id","created","data"]),raw:c()};m.metatype||delete m.metatype,s.value?await g.api.snippets(s.value).put({data:m}):await g.api.snippets.post({data:m}),l.success(`${s.value?"\u66F4\u65B0":"\u521B\u5EFA"}\u6210\u529F`),n&&r.replace({query:{...u.query,tab:0}})};return H(()=>(d.setHeaderButtons(e(D,{variant:"success",onClick:()=>p(),icon:e(ge,null)})),()=>{d.setHeaderButtons(null)})),()=>e(de,null,e(O,{span:12},e(T,null,e(f,{label:"\u540D\u79F0",required:!0},e(b,{onUpdateValue:n=>void(a.value.name=n),value:a.value.name})),e(f,{label:"\u5F15\u7528",required:!0},e(b,{value:a.value.reference,onUpdateValue:n=>void(a.value.reference=n),defaultValue:"root"})),e(f,{label:"\u5143\u7C7B\u578B"},e(b,{value:a.value.metatype,onUpdateValue:n=>void(a.value.metatype=n)})),e(f,{label:"\u6570\u636E\u7C7B\u578B"},e(Fe,{value:a.value.type,defaultValue:y.JSON,onUpdateValue:n=>void(a.value.type=n),options:Object.entries(y).map(([n,t])=>({label:n,value:t}))})),e(f,{label:"Schema"},e(b,{value:a.value.schema,onUpdateValue:n=>void(a.value.schema=n)})),e(f,{label:"\u516C\u5F00",labelPlacement:"left"},e("div",{class:"w-full flex justify-end"},e(we,{value:!a.value.private,onUpdateValue:n=>void(a.value.private=!n)}))),e(f,{label:"\u5907\u6CE8"},e(b,{resizable:!1,value:a.value.comment,onUpdateValue:n=>void(a.value.comment=n),type:"textarea",rows:4})))),e(O,{span:24},e(Ae,{onSave:async()=>{await p(!1),l.success("Saved!")},language:fe[a.value.type],value:o[a.value.type],onChange:n=>{o[a.value.type]=n}})))}}),Pe=w({props:{language:{type:String,required:!0},code:{type:String,required:!0}},setup(r){const u=h();return B(()=>{_(()=>import("./editor.main-759b9211.js").then(function(s){return s.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(s=>{s.editor.colorize(r.code,r.language,{tabSize:2}).then(a=>{u.value.innerHTML=a})})}),()=>e("pre",{ref:u},r.code)}});var x;(r=>{async function u(){return(await N.rest.repos.get({owner:"mx-space",repo:"snippets"})).data}r.fetchRepo=u;async function s(o=""){return(await N.rest.repos.getContent({owner:"mx-space",repo:"snippets",path:o})).data}r.fetchFileTree=s;async function a(o=""){return(await N.rest.search.code({q:`repo:mx-space/snippets in:path ${o}`,sort:"indexed",order:"desc"})).data}r.searchFile=a})(x||(x={}));const Ve=()=>{const r=h([]),u=h(!0);return[r,async()=>{const a=await x.fetchFileTree();Array.isArray(a)&&(r.value=a.filter(({type:o})=>o==="dir").map(({name:o,html_url:d})=>({name:o,url:d||""}))),u.value=!1},u]},$e=w({props:{onFinish:{type:Function,required:!0}},setup(r){const u=h(!1),s=t=>{t.stopPropagation(),t.preventDefault(),n()},[a,o,d]=Ve();Q(()=>{u.value&&o()});const l=h(""),p=ee(),n=async()=>{const t=p.create({title:"\u83B7\u53D6\u548C\u89E3\u6790",content:()=>e(je,{name:l.value,onFinish:()=>{t.destroy(),r.onFinish()}}),closable:!0})};return()=>e(k,null,e(D,{variant:"info",onClick:()=>{u.value=!0},icon:e(ne,null)}),e(te,{show:u.value,onUpdateShow:t=>{u.value=t}},e(M,{class:"modal-card sm",title:"\u5BFC\u5165 Snippets"},e(T,{onSubmit:s},e(f,{label:"\u5305\u540D"},e(b,{placeholder:"\u652F\u6301\u5BFC\u5165 GitHub repo:mx-space/snippets \u4E0B\u7684\u96C6\u5408\u5305\uFF0C\u793A\u4F8B\u8F93\u5165: kami",value:l.value,onUpdateValue:t=>{l.value=t}})),e(f,{label:"\u53EF\u83B7\u53D6\u7684"},d.value?e(z,null):e("div",{class:"flex flex-wrap space-x-2"},a.value.map(({name:t,url:c})=>e("div",{class:"flex items-center ml-4",key:"name"},e(F,{text:!0,onClick:()=>{l.value=t,ae(()=>{n()})}},t),e("a",{href:c,target:"_blank",rel:"noopener noreferrer"},e(Be,{class:"!h-4 !w-4 ml-2"})))))),e("div",{class:"flex justify-end"},e(F,{round:!0,type:"primary",onClick:n},"\u5904\u7406"))))))}}),je=w({props:{name:{type:String,required:!0},onFinish:{type:Function,required:!0}},setup(r){const u=h(!0),s=h([]),a=h([]);B(async()=>{const d=await x.fetchFileTree(r.name);if(Array.isArray(d)){const l=d.map(async p=>{if(p.type==="dir")switch(p.name){case"functions":{const n=await x.fetchFileTree(`${r.name}/functions`);Array.isArray(n)&&await Promise.all(n.map(async t=>{if(t.type==="file"&&/\.(js|ts)$/.test(t.name)){const c=t.download_url;if(!c){message.error("\u83B7\u53D6\u4E0B\u8F7D\u5730\u5740\u5931\u8D25, "+t.name);return}const i=await fetch(c).then(m=>m.text());console.log(`// ${t.name}
${i}`),s.value.push({name:t.name,reference:r.name,raw:i,htmlUrl:t.html_url})}}));break}}else if(p.name==="package.json"){const n=p.download_url;if(!n){message.error("\u65E0\u6CD5\u83B7\u53D6 package.json \u6587\u4EF6\u7684\u4E0B\u8F7D\u5730\u5740");return}const t=await fetch(n).then(i=>i.text()),c=JSON.parse(t);console.log("// package.json"),console.log(c),a.value=Object.entries(c.dependencies||{}).map(([i,m])=>`${i}@${m}`)}});await Promise.all(l),u.value=!1}});const o=async()=>{const d={snippets:s.value.map(p=>({name:j.basename(p.name,j.extname(p.name)),reference:p.reference,raw:p.raw,private:!1,type:y.Function})),packages:re(a)},l=message.loading("\u6B63\u5728\u5BFC\u5165...",{duration:1e6});await g.api.snippets.more.post({data:d,timeout:1e6}),l.destroy(),message.success("\u5BFC\u5165\u6210\u529F"),r.onFinish()};return()=>{const{name:d}=r;return e("div",null,e("p",null,"\u83B7\u53D6\uFF1A ",d),u.value?e("div",{class:"h-24 relative"},e(z,{description:"\u9700\u8981\u4ECE GitHub \u83B7\u53D6\uFF0C\u5EFA\u8BAE\u8FDE\u63A5\u4EE3\u7406\u540E\u64CD\u4F5C\u3002"})):e(T,null,e(f,{label:"\u5C06\u5BFC\u5165\u7684\u51FD\u6570\uFF1A"},e("div",{class:"space-x-2"},s.value.map(({name:l,reference:p,raw:n,htmlUrl:t},c)=>e(ue,{key:`${p}/${l}`,trigger:"hover",placement:"right"},{trigger(){return e(F,{text:!0,onClick:()=>{t&&window.open(t)},class:"cursor-pointer"},e(q,{closable:!0,onClose:i=>{i.stopPropagation(),s.value.splice(c,1)}},l))},default(){return e(M,{bordered:!1,title:l,class:"max-w-[40vw] max-h-[50vh] overflow-auto"},e(Pe,{code:n,language:"typescript"}))}})))),e(f,{label:"\u5C06\u5B89\u88C5\u7684\u4F9D\u8D56\uFF1A"},e("div",{class:"space-x-2"},a.value.map((l,p)=>e(q,{closable:!0,key:l,onClose:()=>{a.value.splice(p,1)}},l)))),e("div",{class:"flex justify-end"},e(F,{round:!0,type:"primary",onClick:o},"\u5BFC\u5165"))))}}}),qe=()=>{const r=h([]),u=async()=>{const s=await g.api.snippets.aggregate.post({data:[{$group:{_id:"$reference"}},{$project:{name:"$_id",_id:!1}}]});r.value=s.data.map(({name:a})=>a)};return B(()=>{u()}),r},Re=w({setup(){const{data:r,fetchDataFn:u,loading:s,pager:a,checkedRowKeys:o}=Se((n,t)=>async(c,i,m)=>{const v=await g.api.snippets.get({params:{page:c,size:i,select:"-raw",db_query:m}});n.value=v.data,t.value=v.pagination}),d=qe();B(()=>{u(1,20)});const l=L();H(()=>(l.setHeaderButtons(e(k,null,e(D,{onClick:()=>{p.push({query:{tab:1}})},icon:e(le,null)}),e($e,{onFinish:()=>{u()}}),e(be,{checkedRowKeys:o,onDelete:async n=>{!n||(await Promise.all(n.map(t=>g.api.snippets(t).delete())),u(1,20),o.value.length=0)}}))),()=>{l.setHeaderButtons(null)}));const p=E();return()=>{const n=d.value.map(t=>({label:t,value:t}));return e(k,null,e(Ce,{onUpdateCheckedRowKeys:t=>{o.value=t},data:r,nTableProps:{onUpdateFilters(t){t.reference&&t.reference.length?u(1,20,{$or:t.reference.map(c=>({reference:c}))}):u(1,20)}},pager:a,columns:[{type:"selection",options:["none","all"]},{key:"name",title:"\u540D\u79F0",render(t){const c=t.name,i=t.private;return e(P,{align:"center"},t.type===y.Function&&e(V,null,e(se,null)),e(F,{tag:"a",text:!0,href:g.endpoint+(t.type===y.Function?"/serverless/":"/snippets/")+t.reference+"/"+t.name+(t.private?`?token=${oe()}`:""),target:"_blank",size:"tiny"},c),i&&e(V,{class:"items-center flex "},e(Te,null)))}},{title:"\u7C7B\u578B",key:"type"},{title:"\u5F15\u7528",key:"reference",filter:!0,filterOptions:n},{key:"comment",title:"\u5907\u6CE8",width:300,ellipsis:{tooltip:!0}},{title:"\u521B\u5EFA\u4E8E",key:"created",render(t){return e(xe,{time:t.created})}},{title:"\u64CD\u4F5C",key:"id",fixed:"right",render(t){return e(P,null,e(F,{text:!0,size:"tiny",type:"primary",onClick:()=>{p.push({query:{tab:1,id:t.id}})}},"\u7F16\u8F91"),e(Ne,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await g.api.snippets(t.id).delete(),message.success("\u5220\u9664\u6210\u529F"),await u(a.value.currentPage)}},{trigger:()=>e(F,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>e("span",{class:"max-w-48"},"\u786E\u5B9A\u8981\u5220\u9664 ",t.title," ?")}))}}],loading:s.value}))}}});var gt=w({name:"SnippetView",setup(){const r=U(),u=E(),s=J(()=>r.query.tab||"0");return()=>e(ie,null,e(_e,{size:"medium",value:s.value,onUpdateValue:a=>{u.push({query:{tab:a}})}},e(R,{name:"0",tab:"\u5217\u8868"},e(Re,null)),e(R,{name:"1",tab:"\u7F16\u8F91",displayDirective:"if"},e(Oe,null))))}});export{gt as default};
