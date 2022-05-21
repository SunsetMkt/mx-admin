import{f as oe,Z as r,a2 as p,a4 as E,ae as y,ad as Qe,T as Ze,a5 as le,S as qe,y as R,ah as Y,X as G,n as h,al as Xe,aI as Ye,am as d,V as Ge,Y as et,H as tt,$ as F,bc as nt,b0 as at,ab as B}from"./index-6e7759df.js";import{s as ee}from"./prop-a1682621.js";import{N as rt}from"./Select-bf96ff63.js";import{B as te,F as ne,a as ae,b as re}from"./Forward-d4dd349d.js";var ie=oe({name:"More",render(){return r("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},r("g",{fill:"currentColor","fill-rule":"nonzero"},r("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}});function it(t,a,i=9){if(a===1)return[1];if(a===2)return[1,2];const u=1,o=a;let s=t,f=t;const x=(i-5)/2;f+=Math.ceil(x),f=Math.min(Math.max(f,u+i-3),o-2),s-=Math.floor(x),s=Math.max(Math.min(s,o-i+3),u+2);let S=!1,C=!1;s>u+2&&(S=!0),f<o-2&&(C=!0);const l=[];l.push(u),S?l.push(-2):o>=u+1&&l.push(u+1);for(let v=s;v<=f;++v)l.push(v);return C?l.push(-1):f===o-2&&l[l.length-1]!==o-1&&l.push(o-1),l[l.length-1]!==o&&l.push(o),l}function ot(t,a){return t.map(i=>{switch(i){case-2:return{type:"fast-backward",active:!1};case-1:return{type:"fast-forward",active:!1};default:return i===a?{type:"page",label:i,active:!0}:{type:"page",label:i,active:!1}}})}function lt(t,a,i){const u=it(t,a,i);return ot(u,t)}var st=p("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[p("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),p("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),E("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),p("select",`
 width: var(--n-select-width);
 `),E("&.transition-disabled",[p("pagination-item","transition: none!important;")]),p("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[p("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),p("pagination-item",`
 position: relative;
 cursor: pointer;
 user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,[y("button",`
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,[p("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),Qe("disabled",[E("&:hover",`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
 `,[y("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)]),E("&:active",`
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,[y("button",`
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]),y("active",`
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,[E("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),y("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[y("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),y("disabled",`
 cursor: not-allowed;
 `,[p("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)])]);const dt=Object.assign(Object.assign({},le.props),{page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:{type:Number,default:10},pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},prev:Function,next:Function,prefix:Function,suffix:Function,label:Function,"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]});var vt=oe({name:"Pagination",props:dt,setup(t){const{mergedComponentPropsRef:a,mergedClsPrefixRef:i,inlineThemeDisabled:u,mergedRtlRef:o}=Ze(t),s=le("Pagination","-pagination",st,nt,t,i),{localeRef:f}=qe("Pagination"),x=R(null),S=R(null),C=R(""),l=R(t.defaultPage),v=R(t.defaultPageSize),c=Y(G(t,"page"),l),w=Y(G(t,"pageSize"),v),z=h(()=>{const{itemCount:e}=t;if(e!==void 0)return Math.max(1,Math.ceil(e/w.value));const{pageCount:n}=t;return n!==void 0?n:1}),P=R(!1),N=R(!1),H=h(()=>{const e=f.value.selectionSuffix;return t.pageSizes.map(n=>typeof n=="number"?{label:`${n} / ${e}`,value:n}:n)}),V=h(()=>{var e,n;return((n=(e=a?.value)===null||e===void 0?void 0:e.Pagination)===null||n===void 0?void 0:n.inputSize)||ee(t.size)}),_=h(()=>{var e,n;return((n=(e=a?.value)===null||e===void 0?void 0:e.Pagination)===null||n===void 0?void 0:n.selectSize)||ee(t.size)}),D=h(()=>(c.value-1)*w.value),L=h(()=>{const e=c.value*w.value-1,{itemCount:n}=t;return n!==void 0&&e>n?n:e}),J=h(()=>{const{itemCount:e}=t;return e!==void 0?e:(t.pageCount||1)*w.value}),W=Xe("Pagination",o,i),$=()=>{at(()=>{var e;const{value:n}=x;!n||(n.classList.add("transition-disabled"),(e=x.value)===null||e===void 0||e.offsetWidth,n.classList.remove("transition-disabled"))})};function k(e){if(e===c.value)return;const{"onUpdate:page":n,onUpdatePage:m,onChange:b}=t;n&&B(n,e),m&&B(m,e),b&&B(b,e),l.value=e}function K(e){if(e===w.value)return;const{"onUpdate:pageSize":n,onUpdatePageSize:m,onPageSizeChange:b}=t;n&&B(n,e),m&&B(m,e),b&&B(b,e),v.value=e,z.value<c.value&&k(z.value)}function Q(){if(t.disabled)return;const e=Math.min(c.value+1,z.value);k(e)}function Z(){if(t.disabled)return;const e=Math.max(c.value-1,1);k(e)}function q(){if(t.disabled)return;const e=Math.min(c.value+(t.pageSlot-4),z.value);k(e)}function X(){if(t.disabled)return;const e=Math.max(c.value-(t.pageSlot-4),1);k(e)}function j(e){K(e)}function A(e){var n;if(e.code==="Enter"||e.code==="NumpadEnter"){const m=parseInt(C.value);Number.isNaN(m)||(k(Math.max(1,Math.min(m,z.value))),C.value="",(n=S.value)===null||n===void 0||n.blur())}}function O(e){if(!t.disabled)switch(e.type){case"page":k(e.label);break;case"fast-backward":X();break;case"fast-forward":q();break}}function T(e){if(!t.disabled){switch(e.type){case"fast-backward":N.value=!0;break;case"fast-forward":P.value=!0;break;default:return}$()}}function U(e){if(!t.disabled){switch(e.type){case"fast-backward":N.value=!1;break;case"fast-forward":P.value=!1;break;default:return}$()}}function I(e){C.value=e.replace(/\D+/g,"")}Ye(()=>{c.value,w.value,$()});const g=h(()=>{const{size:e}=t,{self:{buttonBorder:n,buttonBorderHover:m,buttonBorderPressed:b,buttonIconColor:se,buttonIconColorHover:de,buttonIconColorPressed:ue,itemTextColor:ce,itemTextColorHover:me,itemTextColorPressed:fe,itemTextColorActive:ve,itemTextColorDisabled:ge,itemColor:be,itemColorHover:pe,itemColorPressed:he,itemColorActive:xe,itemColorActiveHover:Ce,itemColorDisabled:we,itemBorder:ze,itemBorderHover:Pe,itemBorderPressed:ke,itemBorderActive:Se,itemBorderDisabled:Ie,itemBorderRadius:Me,jumperTextColor:ye,jumperTextColorDisabled:Re,buttonColor:Fe,buttonColorHover:Be,buttonColorPressed:Ne,[d("itemPadding",e)]:$e,[d("itemMargin",e)]:je,[d("inputWidth",e)]:Te,[d("selectWidth",e)]:Ue,[d("inputMargin",e)]:Ee,[d("selectMargin",e)]:Ae,[d("jumperFontSize",e)]:Oe,[d("prefixMargin",e)]:He,[d("suffixMargin",e)]:Ve,[d("itemSize",e)]:_e,[d("buttonIconSize",e)]:De,[d("itemFontSize",e)]:Le,[`${d("itemMargin",e)}Rtl`]:Je,[`${d("inputMargin",e)}Rtl`]:We},common:{cubicBezierEaseInOut:Ke}}=s.value;return{"--n-prefix-margin":He,"--n-suffix-margin":Ve,"--n-item-font-size":Le,"--n-select-width":Ue,"--n-select-margin":Ae,"--n-input-width":Te,"--n-input-margin":Ee,"--n-input-margin-rtl":We,"--n-item-size":_e,"--n-item-text-color":ce,"--n-item-text-color-disabled":ge,"--n-item-text-color-hover":me,"--n-item-text-color-active":ve,"--n-item-text-color-pressed":fe,"--n-item-color":be,"--n-item-color-hover":pe,"--n-item-color-disabled":we,"--n-item-color-active":xe,"--n-item-color-active-hover":Ce,"--n-item-color-pressed":he,"--n-item-border":ze,"--n-item-border-hover":Pe,"--n-item-border-disabled":Ie,"--n-item-border-active":Se,"--n-item-border-pressed":ke,"--n-item-padding":$e,"--n-item-border-radius":Me,"--n-bezier":Ke,"--n-jumper-font-size":Oe,"--n-jumper-text-color":ye,"--n-jumper-text-color-disabled":Re,"--n-item-margin":je,"--n-item-margin-rtl":Je,"--n-button-icon-size":De,"--n-button-icon-color":se,"--n-button-icon-color-hover":de,"--n-button-icon-color-pressed":ue,"--n-button-color-hover":Be,"--n-button-color":Fe,"--n-button-color-pressed":Ne,"--n-button-border":n,"--n-button-border-hover":m,"--n-button-border-pressed":b}}),M=u?Ge("pagination",h(()=>{let e="";const{size:n}=t;return e+=n[0],e}),g,t):void 0;return{rtlEnabled:W,mergedClsPrefix:i,locale:f,selfRef:x,jumperRef:S,mergedPage:c,showFastBackward:N,showFastForward:P,pageItems:h(()=>lt(c.value,z.value,t.pageSlot)),mergedItemCount:J,jumperValue:C,pageSizeOptions:H,mergedPageSize:w,inputSize:V,selectSize:_,mergedTheme:s,mergedPageCount:z,startIndex:D,endIndex:L,handleJumperInput:I,handleBackwardClick:Z,handleForwardClick:Q,handlePageItemClick:O,handleSizePickerChange:j,handleQuickJumperKeyUp:A,handlePageItemMouseEnter:T,handlePageItemMouseLeave:U,cssVars:u?void 0:g,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const{$slots:t,mergedClsPrefix:a,disabled:i,cssVars:u,mergedPage:o,mergedPageCount:s,pageItems:f,showFastBackward:x,showFastForward:S,showSizePicker:C,showQuickJumper:l,mergedTheme:v,locale:c,inputSize:w,selectSize:z,mergedPageSize:P,pageSizeOptions:N,jumperValue:H,prev:V,next:_,prefix:D,suffix:L,label:J,handleJumperInput:W,handleSizePickerChange:$,handleBackwardClick:k,handlePageItemClick:K,handlePageItemMouseEnter:Q,handlePageItemMouseLeave:Z,handleForwardClick:q,handleQuickJumperKeyUp:X,onRender:j}=this;j?.();const A=t.prefix||D,O=t.suffix||L,T=V||t.prev,U=_||t.next,I=J||t.label;return r("div",{ref:"selfRef",class:[`${a}-pagination`,this.themeClass,this.rtlEnabled&&`${a}-pagination--rtl`,i&&`${a}-pagination--disabled`],style:u},A?r("div",{class:`${a}-pagination-prefix`},A({page:o,pageSize:P,pageCount:s,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,r("div",{class:[`${a}-pagination-item`,!T&&`${a}-pagination-item--button`,(o<=1||o>s||i)&&`${a}-pagination-item--disabled`],onClick:k},T?T({page:o,pageSize:P,pageCount:s,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):r(F,{clsPrefix:a},{default:()=>this.rtlEnabled?r(ne,null):r(te,null)})),f.map((g,M)=>{let e;switch(g.type){case"page":const n=g.label;I?e=I({type:"page",node:n,active:g.active}):e=n;break;case"fast-forward":const m=S?r(F,{clsPrefix:a},{default:()=>this.rtlEnabled?r(re,null):r(ae,null)}):r(F,{clsPrefix:a},{default:()=>r(ie,null)});I?e=I({type:"fast-forward",node:m,active:S}):e=m;break;case"fast-backward":const b=x?r(F,{clsPrefix:a},{default:()=>this.rtlEnabled?r(ae,null):r(re,null)}):r(F,{clsPrefix:a},{default:()=>r(ie,null)});I?e=I({type:"fast-backward",node:b,active:x}):e=b;break}return r("div",{key:M,class:[`${a}-pagination-item`,{[`${a}-pagination-item--active`]:g.active,[`${a}-pagination-item--disabled`]:i}],onClick:()=>K(g),onMouseenter:()=>Q(g),onMouseleave:()=>Z(g)},e)}),r("div",{class:[`${a}-pagination-item`,!U&&`${a}-pagination-item--button`,{[`${a}-pagination-item--disabled`]:o<1||o>=s||i}],onClick:q},U?U({page:o,pageSize:P,pageCount:s,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):r(F,{clsPrefix:a},{default:()=>this.rtlEnabled?r(te,null):r(ne,null)})),C?r(rt,{size:z,placeholder:"",options:N,value:P,disabled:i,theme:v.peers.Select,themeOverrides:v.peerOverrides.Select,onUpdateValue:$}):null,l?r("div",{class:`${a}-pagination-quick-jumper`},et(this.$slots.goto,()=>[c.goto]),r(tt,{ref:"jumperRef",value:H,onUpdateValue:W,size:w,placeholder:"",disabled:i,theme:v.peers.Input,themeOverrides:v.peerOverrides.Input,onKeyup:X})):null,O?r("div",{class:`${a}-pagination-suffix`},O({page:o,pageSize:P,pageCount:s,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}});export{vt as N};