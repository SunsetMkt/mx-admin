import{c1 as x,ba as R,d7 as C,aS as A,K as F,d as b,P as k,O as I,k as B,w as O,ab as L,h as a,X as U,aw as $,at as D,aW as M,a5 as v,$ as S,v as E,a0 as z,a9 as V,a1 as K,a2 as T,n as q,a3 as N,R as y,l as H,u as G,f as Q,j as W,F as X,A as Y,bY as J,d8 as Z,N as h,b$ as ee,a as te,H as ae,bQ as se,r as oe,bj as ne,d9 as re,m as le}from"./index-0227ab67.js";import{D as ie}from"./delete-confirm-39ca559c.js";import{R as ue}from"./relative-time-513cda3d.js";import{u as ce}from"./use-table-50961f79.js";import{H as pe}from"./rounded-button-308bc40f.js";import{N as de,a as me}from"./ListItem-72019b04.js";import{c as fe,d as he,a as ge,b as ve}from"./Icon-1ba3e757.js";import{b as ye,t as be}from"./Select-7858b884.js";import{N as w}from"./Avatar-9dde2ed1.js";import"./Forward-f1c0b02c.js";import"./Tag-9690fc76.js";const Pe=x({name:"Popselect",common:R,peers:{Popover:C,InternalSelectMenu:A}});var Me=Pe;const _=F("n-popselect"),P={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,onChange:[Function,Array]},j=U(P);var Ne=b({name:"PopselectPanel",props:P,setup(o){const s=k(_),{mergedClsPrefixRef:i}=I(o),l=B(()=>$(o.options,be));function u(t,e){const{onUpdateValue:n,"onUpdate:value":d,onChange:m}=o;n&&v(n,t,e),d&&v(d,t,e),m&&v(m,t,e)}function c(t){r(t.key)}function p(t){D(t,"action")||t.preventDefault()}function r(t){const{value:{getNode:e}}=l;if(o.multiple)if(Array.isArray(o.value)){const n=[],d=[];let m=!0;o.value.forEach(f=>{if(f===t){m=!1;return}const g=e(f);g&&(n.push(g.key),d.push(g.rawNode))}),m&&(n.push(t),d.push(e(t).rawNode)),u(n,d)}else{const n=e(t);n&&u([t],[n.rawNode])}else if(o.value===t&&o.cancelable)u(null,null);else{const n=e(t);n&&u(t,n.rawNode),s.setShow(!1)}M(()=>{s.syncPosition()})}return O(L(o,"options"),()=>{M(()=>{s.syncPosition()})}),{mergedTheme:s.mergedThemeRef,mergedClsPrefix:i,treeMate:l,handleToggle:c,handleMenuMousedown:p}},render(){return a(ye,{clsPrefix:this.mergedClsPrefix,focusable:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:!1,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown},{action:()=>{var o,s;return((s=(o=this.$slots).action)===null||s===void 0?void 0:s.call(o))||[]},empty:()=>{var o,s;return((s=(o=this.$slots).empty)===null||s===void 0?void 0:s.call(o))||[]}})}});const we=Object.assign(Object.assign(Object.assign(Object.assign({},S.props),T(N,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},N.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),P);var je=b({name:"Popselect",props:we,__popover__:!0,setup(o){const s=S("Popselect","-popselect",void 0,Me,o),i=E(null);function l(){var p;(p=i.value)===null||p===void 0||p.syncPosition()}function u(p){var r;(r=i.value)===null||r===void 0||r.setShow(p)}return z(_,{mergedThemeRef:s,syncPosition:l,setShow:u}),Object.assign(Object.assign({},{syncPosition:l,setShow:u}),{popoverInstRef:i,mergedTheme:s})},render(){const{mergedTheme:o}=this,s={theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(i,l,u,c,p)=>a(Ne,Object.assign({},V(this.$attrs,{class:i,style:u}),K(this.$props,j),{ref:fe(l),onMouseenter:c,onMouseleave:p}),{action:()=>{var r,t;return(t=(r=this.$slots).action)===null||t===void 0?void 0:t.call(r)},empty:()=>{var r,t;return(t=(r=this.$slots).empty)===null||t===void 0?void 0:t.call(r)}})};return a(q,Object.assign({},T(this.$props,j),s),{trigger:()=>{var i,l;return(l=(i=this.$slots).default)===null||l===void 0?void 0:l.call(i)}})}});const Be=b({setup(){const{data:o,pager:s,sortProps:i,fetchDataFn:l,loading:u}=ce((e,n)=>async(d=r.query.page||1,m=30)=>{const f=await y.api.projects.get({params:{page:d,size:m}});e.value=f.data,n.value=f.pagination}),c=H(new Set),p=G(),r=Q(),t=l;return O(()=>r.query.page,async e=>{await t(e)}),W(async()=>{await t()}),()=>a(le,null,{actions:()=>a(X,null,a(ie,{checkedRowKeys:c,onDelete:async()=>{await Promise.all(Array.from(c.values()).map(e=>y.api.projects(e).delete())),c.clear(),t()}}),a(pe,{to:"/projects/edit",icon:a(Y,null)})),default:()=>a(J,{show:u.value},a(de,{bordered:!1,class:"min-h-[300px]"},{footer(){return a("div",{class:"flex justify-end"},a(he,{itemCount:s.value.total,pageCount:s.value.totalPage,page:s.value.currentPage,pageSize:s.value.size,onUpdatePage:e=>{t(e)}}))},default(){return o.value.map(e=>a(me,{key:e.id},{prefix(){return a(ge,{class:"mt-4",checked:c.has(e.id),onUpdateChecked:n=>{n?c.add(e.id):c.delete(e.id)}})},default(){return a(Z,{description:e.description},{header(){return a("div",null,a(h,{ghost:!0,type:"primary",text:!0,class:"!font-medium",...e.projectUrl?{tag:"a",href:e.projectUrl,target:"_blank"}:{}},e.name))},footer(){return a(ee,null,a(te,{class:"pl-[3.6rem] text-[var(--clear-color-pressed)] text-sm"},a("span",null,"\u521B\u5EFA\u4E8E ",ae(e.created)),e.modified&&a("span",null,"\u66F4\u65B0\u4E8E"," ",a(ue,{time:e.modified}))))},"header-extra"(){return a(se,null,a(h,{onClick:()=>{oe.push({name:ne.EditProject,query:{id:e.id}})}},"\u7F16\u8F91"),a(je,{class:"!p-0",options:[{value:"del",label:"",render(){return a(h,{type:"error",bordered:!1,onClick:async()=>{await y.api.projects(e.id).delete(),p.success("\u5220\u9664\u6210\u529F"),await t(s.value.currentPage)}},"\u5220\u9664")}}]},a(h,{class:"!px-2"},a(ve,null,a(re,null)))))},avatar(){return e.avatar?a(w,{class:"align-center",circle:!0,src:e.avatar,size:"large"}):a(w,{circle:!0,size:"large",class:"align-center"},e.name[0].toUpperCase())}})}}))}}))})}});export{Be as default};
