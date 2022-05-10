import{a1 as b,$ as y,a0 as P,aa as l,d as f,P as R,bm as w,af as u,a3 as C,T as x,h as n,L as N,_ as m,an as i,Q as j,bR as S,l as h,x as v,a4 as c}from"./index-62e99b2b.js";import{f as O,N as A,a as z}from"./FormItem-382dc1be.js";const G=Array.apply(null,{length:24}).map((e,r)=>{const s=r+1,t=`calc(100% / 24 * ${s})`;return[l(`${s}-span`,{width:t}),l(`${s}-offset`,{marginLeft:t}),l(`${s}-push`,{left:t}),l(`${s}-pull`,{right:t})]});var K=b([y("row",{width:"100%",display:"flex",flexWrap:"wrap"}),y("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[P("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),G])]);const $=N("n-row"),p={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},V=m(p);var F=f({name:"Row",props:p,setup(e){const{mergedClsPrefixRef:r}=R(e);w("-legacy-grid",K,r);const s=u(()=>{const{gutter:o}=e;return Array.isArray(o)&&o[1]||0}),t=u(()=>{const{gutter:o}=e;return Array.isArray(o)?o[0]:Number(o)});return C($,{mergedClsPrefixRef:r,gutterRef:x(e,"gutter"),verticalGutterRef:s,horizontalGutterRef:t}),{mergedClsPrefix:r,styleMargin:u(()=>`-${i(s.value,{c:.5})} -${i(t.value,{c:.5})}`),styleWidth:u(()=>`calc(100% + ${i(t.value)})`)}},render(){return n("div",{class:`${this.mergedClsPrefix}-row`,style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}});const d={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},M=m(d);var k=f({name:"Col",props:d,setup(e){const r=j($,null);return r||S("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:r.mergedClsPrefixRef,gutter:r.gutterRef,stylePadding:h(()=>`${i(r.verticalGutterRef.value,{c:.5})} ${i(r.horizontalGutterRef.value,{c:.5})}`),mergedPush:h(()=>Number(e.push)-Number(e.pull))}},render(){const{$slots:e,span:r,mergedPush:s,offset:t,stylePadding:o,gutter:I,mergedClsPrefix:a}=this;return n("div",{class:[`${a}-col`,{[`${a}-col--${r}-span`]:!0,[`${a}-col--${s}-push`]:s>0,[`${a}-col--${-s}-pull`]:s<0,[`${a}-col--${t}-offset`]:t}],style:{padding:o}},I?n("div",null,e):e)}});const g=Object.assign(Object.assign({},d),z),L=m(g);var W=f({name:"FormItemCol",props:g,setup(){const e=v(null);return{formItemInstRef:e,validate:(...t)=>{const{value:o}=e;if(o)return o.validate(...t)},restoreValidation:()=>{const{value:t}=e;if(t)return t.restoreValidation()}}},render(){return n(k,c(this.$props,M),{default:()=>{const e=c(this.$props,O);return n(A,Object.assign({ref:"formItemInstRef"},e),this.$slots)}})}});const E=Object.assign(Object.assign({},p),g);var Q=f({name:"FormItemRow",props:E,setup(){const e=v(null);return{formItemColInstRef:e,validate:(...t)=>{const{value:o}=e;if(o)return o.validate(...t)},restoreValidation:()=>{const{value:t}=e;if(t)return t.restoreValidation()}}},render(){return n(F,c(this.$props,V),{default:()=>{const e=c(this.$props,L);return n(W,Object.assign(Object.assign({ref:"formItemColInstRef"},e),{span:24}),this.$slots)}})}});export{Q as N};