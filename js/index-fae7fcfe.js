import{f as O,x as S,j as k,y,p as q,w as P,z as U,k as C,q as F,a as x,E as B}from"./index-6e7759df.js";import{a as T}from"./DataTable-bfe8ac94.js";var j={"table-row":"_table-row_1brqz_3"};const z=j["table-row"],W=O({props:{data:{type:Object,required:!0},noPagination:{type:Boolean,default:!1},pager:{type:Object,required:!1},onUpdateCheckedRowKeys:{type:Function,default:new Function},onUpdateSorter:{type:Function,default:new Function},onFetchData:{type:Function,required:!1},columns:{type:Array,required:!0},nTableProps:{type:Object,default:()=>({})},maxWidth:{type:Number},loading:{type:Boolean,default:!1},checkedRowKey:{type:String,default:"id"}},setup(o){const h=S(),l=k(),i=y([]),n=q({sortBy:"",sortOrder:0}),r=y(!0),w=P(()=>o.data.value,d=>{r.value=!1,w()});U((d,c,t)=>{r.value=!0,t(),r.value=!1});const s=C(F);return()=>{const{data:d,noPagination:c=!1,pager:t,onUpdateCheckedRowKeys:g,onUpdateSorter:v,nTableProps:b,columns:p,onFetchData:f,checkedRowKey:m="id",maxWidth:R=1200}=o;return x(T,B({loading:o.loading??r.value,remote:!0,scrollX:Math.max(s.contentInsetWidth.value,R),pagination:c?void 0:t&&{page:t.value.currentPage,pageSize:t.value.size,pageCount:t.value.totalPage,showQuickJumper:!0,pageSlot:s.viewport.value.mobile?s.contentInsetWidth.value<400?2:3:void 0,onChange:async e=>{h.push({query:{...l.query,page:e},path:l.path})}},bordered:!1,data:d.value,rowClassName:()=>z,checkedRowKeys:i.value,rowKey:e=>e[m],onUpdateCheckedRowKeys:e=>{i.value=e,g?.(e)},onUpdateSorter:async e=>{if(!e)return;p.forEach(a=>{if("sortOrder"in a&&a.sortOrder!==void 0){if(!e){a.sortOrder=!1;return}a.key===e.columnKey?a.sortOrder=e.order:a.sortOrder=!1}});const{columnKey:K,order:u}=e;n.sortBy=u===!1?"":K.toString()||"",n.sortOrder=u?{descend:-1,ascend:1}[u]:1,v?.(n,e),f&&await f()},columns:p},b),null)}}});export{W as T,z as t};