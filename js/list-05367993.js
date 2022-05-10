import{c4 as S,bd as R,df as C,aV as A,L as F,d as b,Q as k,P as I,l as L,w as T,T as B,h as a,_ as U,ax as $,au as D,aZ as N,a8 as v,a2 as x,x as E,a3 as V,ac as z,a4 as K,a5 as _,p as q,a6 as M,R as y,m as H,u as G,i as J,k as Q,F as Z,A as W,b$ as X,dg as Y,N as h,c2 as ee,a as te,J as ae,r as se,bl as oe,dh as re,n as ne}from"./index-62e99b2b.js";import{D as le}from"./delete-confirm-aded32dd.js";import{R as ie}from"./relative-time-89b7617b.js";import{u as ue}from"./use-table-a2880f8a.js";import{H as ce}from"./rounded-button-92024ad7.js";import{N as pe,a as de}from"./ListItem-815a86bd.js";import{c as me,d as fe,a as he,b as ge}from"./Icon-aa605da4.js";import{b as ve,t as ye}from"./Select-5a24a54a.js";import{N as be}from"./ButtonGroup-b7bd8604.js";import{N as w}from"./Avatar-7371bbd5.js";import"./Forward-91b8e448.js";import"./Tag-ce864d2c.js";const Pe=S({name:"Popselect",common:R,peers:{Popover:C,InternalSelectMenu:A}});var Ne=Pe;const O=F("n-popselect"),P={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,onChange:[Function,Array]},j=U(P);var Me=b({name:"PopselectPanel",props:P,setup(o){const s=k(O),{mergedClsPrefixRef:i}=I(o),l=L(()=>$(o.options,ye));function u(t,e){const{onUpdateValue:r,"onUpdate:value":d,onChange:m}=o;r&&v(r,t,e),d&&v(d,t,e),m&&v(m,t,e)}function c(t){n(t.key)}function p(t){D(t,"action")||t.preventDefault()}function n(t){const{value:{getNode:e}}=l;if(o.multiple)if(Array.isArray(o.value)){const r=[],d=[];let m=!0;o.value.forEach(f=>{if(f===t){m=!1;return}const g=e(f);g&&(r.push(g.key),d.push(g.rawNode))}),m&&(r.push(t),d.push(e(t).rawNode)),u(r,d)}else{const r=e(t);r&&u([t],[r.rawNode])}else if(o.value===t&&o.cancelable)u(null,null);else{const r=e(t);r&&u(t,r.rawNode),s.setShow(!1)}N(()=>{s.syncPosition()})}return T(B(o,"options"),()=>{N(()=>{s.syncPosition()})}),{mergedTheme:s.mergedThemeRef,mergedClsPrefix:i,treeMate:l,handleToggle:c,handleMenuMousedown:p}},render(){return a(ve,{clsPrefix:this.mergedClsPrefix,focusable:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:!1,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown},{action:()=>{var o,s;return((s=(o=this.$slots).action)===null||s===void 0?void 0:s.call(o))||[]},empty:()=>{var o,s;return((s=(o=this.$slots).empty)===null||s===void 0?void 0:s.call(o))||[]}})}});const we=Object.assign(Object.assign(Object.assign(Object.assign({},x.props),_(M,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},M.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),P);var je=b({name:"Popselect",props:we,__popover__:!0,setup(o){const s=x("Popselect","-popselect",void 0,Ne,o),i=E(null);function l(){var p;(p=i.value)===null||p===void 0||p.syncPosition()}function u(p){var n;(n=i.value)===null||n===void 0||n.setShow(p)}return V(O,{mergedThemeRef:s,syncPosition:l,setShow:u}),Object.assign(Object.assign({},{syncPosition:l,setShow:u}),{popoverInstRef:i,mergedTheme:s})},render(){const{mergedTheme:o}=this,s={theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(i,l,u,c,p)=>a(Me,Object.assign({},z(this.$attrs,{class:i,style:u}),K(this.$props,j),{ref:me(l),onMouseenter:c,onMouseleave:p}),{action:()=>{var n,t;return(t=(n=this.$slots).action)===null||t===void 0?void 0:t.call(n)},empty:()=>{var n,t;return(t=(n=this.$slots).empty)===null||t===void 0?void 0:t.call(n)}})};return a(q,Object.assign({},_(this.$props,j),s),{trigger:()=>{var i,l;return(l=(i=this.$slots).default)===null||l===void 0?void 0:l.call(i)}})}});const Be=b({setup(){const{data:o,pager:s,sortProps:i,fetchDataFn:l,loading:u}=ue((e,r)=>async(d=n.query.page||1,m=30)=>{const f=await y.api.projects.get({params:{page:d,size:m}});e.value=f.data,r.value=f.pagination}),c=H(new Set),p=G(),n=J(),t=l;return T(()=>n.query.page,async e=>{await t(e)}),Q(async()=>{await t()}),()=>a(ne,null,{actions:()=>a(Z,null,a(le,{checkedRowKeys:c,onDelete:async()=>{await Promise.all(Array.from(c.values()).map(e=>y.api.projects(e).delete())),c.clear(),t()}}),a(ce,{to:"/projects/edit",icon:a(W,null)})),default:()=>a(X,{show:u.value},a(pe,{bordered:!1,class:"min-h-[300px]"},{footer(){return a("div",{class:"flex justify-end"},a(fe,{itemCount:s.value.total,pageCount:s.value.totalPage,page:s.value.currentPage,pageSize:s.value.size,onUpdatePage:e=>{t(e)}}))},default(){return o.value.map(e=>a(de,{key:e.id},{prefix(){return a(he,{class:"mt-4",checked:c.has(e.id),onUpdateChecked:r=>{r?c.add(e.id):c.delete(e.id)}})},default(){return a(Y,{description:e.description},{header(){return a("div",null,a(h,{ghost:!0,type:"primary",text:!0,class:"!font-medium",...e.projectUrl?{tag:"a",href:e.projectUrl,target:"_blank"}:{}},e.name))},footer(){return a(ee,null,a(te,{class:"pl-[3.6rem] text-[var(--clear-color-pressed)] text-sm"},a("span",null,"\u521B\u5EFA\u4E8E ",ae(e.created)),e.modified&&a("span",null,"\u66F4\u65B0\u4E8E"," ",a(ie,{time:e.modified}))))},"header-extra"(){return a(be,null,a(h,{onClick:()=>{se.push({name:oe.EditProject,query:{id:e.id}})}},"\u7F16\u8F91"),a(je,{class:"!p-0",options:[{value:"del",label:"",render(){return a(h,{type:"error",bordered:!1,onClick:async()=>{await y.api.projects(e.id).delete(),p.success("\u5220\u9664\u6210\u529F"),await t(s.value.currentPage)}},"\u5220\u9664")}}]},a(h,{class:"!px-2"},a(ge,null,a(re,null)))))},avatar(){return e.avatar?a(w,{class:"align-center",circle:!0,src:e.avatar,size:"large"}):a(w,{circle:!0,size:"large",class:"align-center"},e.name[0].toUpperCase())}})}}))}}))})}});export{Be as default};