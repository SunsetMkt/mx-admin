import{y as a,p as f,O as p}from"./index-d19751eb.js";const d=r=>{const s=a([]),e=a({}),c=f({sortBy:"",sortOrder:0}),n=a([]),t=a(!1);return{data:s,pager:e,sortProps:c,checkedRowKeys:n,loading:t,fetchDataFn:async(i,l,o)=>{t.value=!0,await r(s,e)(i,l,o?p.stringify(o):void 0),t.value=!1}}};export{d as u};
