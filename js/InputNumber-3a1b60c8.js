import{f as Y,Z as s,c8 as ye,bd as Ve,ca as Ne,c9 as Re,a4 as Ie,a2 as Me,T as Be,a5 as Z,S as Se,ag as Te,y,X as De,ah as Ce,ai as m,w as Fe,al as Ae,n as Oe,bs as _e,H as ke,cr as j,Y as z,$ as G,bi as K,ab as v}from"./index-6e7759df.js";import{A as $e}from"./Add-b7baeac9.js";var Ee=Y({name:"Remove",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}});const Le=n=>{const{textColorDisabled:r}=n;return{iconColorDisabled:r}},He=ye({name:"InputNumber",common:Ve,peers:{Button:Ne,Input:Re},self:Le});var Pe=He;function Ue(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function je(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function C(n){return n==null?!0:!Number.isNaN(n)}function ze(n){return n==null?"":String(n)}function F(n){if(n===null)return null;if(typeof n=="number")return n;{const r=Number(n);return Number.isNaN(r)?null:r}}var Ge=Ie([Me("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `)]);const X=800,W=100,Ke=Object.assign(Object.assign({},Z.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]});var Ye=Y({name:"InputNumber",props:Ke,setup(n){const{mergedBorderedRef:r,mergedClsPrefixRef:o,mergedRtlRef:q}=Be(n),A=Z("InputNumber","-input-number",Ge,Pe,n,o),{localeRef:J}=Se("InputNumber"),V=Te(n),{mergedSizeRef:Q,mergedDisabledRef:ee,mergedStatusRef:ne}=V,c=y(null),O=y(null),_=y(null),M=y(n.defaultValue),te=De(n,"value"),f=Ce(te,M),h=y(""),le=e=>{const t=[n.min,n.max,n.step,e].map(l=>{const a=String(l).split(".")[1];return a?a.length:0});return Math.max(...t)},ae=m(()=>{const{placeholder:e}=n;return e!==void 0?e:J.value.placeholder}),N=m(()=>{const e=F(n.step);return e!==null?e===0?1:Math.abs(e):1}),k=m(()=>{const e=F(n.min);return e!==null?e:null}),$=m(()=>{const e=F(n.max);return e!==null?e:null}),g=e=>{const{value:t}=f;if(e===t){b();return}const{"onUpdate:value":l,onUpdateValue:a,onChange:i}=n,{nTriggerFormInput:x,nTriggerFormChange:u}=V;i&&v(i,e),a&&v(a,e),l&&v(l,e),M.value=e,x(),u()},d=(e=0,t=!0,l=!1)=>{const{value:a}=h;if(l&&je(a))return!1;const i=Ue(a);if(i===null)return t&&g(null),null;if(C(i)){const x=le(i);let u=parseFloat((i+e).toFixed(x));if(C(u)){const{value:T}=$,{value:D}=k;if(T!==null&&u>T){if(!t||l)return!1;u=T}if(D!==null&&u<D){if(!t||l)return!1;u=D}return n.validator&&!n.validator(u)?!1:(t&&g(u),u)}}return!1},b=()=>{const{value:e}=f;C(e)?h.value=ze(e):h.value=String(e)};b();const re=m(()=>d(0,!1)===!1),E=m(()=>{const{value:e}=f;if(n.validator&&e===null)return!1;const{value:t}=N;return d(-t,!1)!==!1}),L=m(()=>{const{value:e}=f;if(n.validator&&e===null)return!1;const{value:t}=N;return d(+t,!1)!==!1});function ue(e){const{onFocus:t}=n,{nTriggerFormFocus:l}=V;t&&v(t,e),l()}function ie(e){var t,l;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const a=d();if(a!==!1){const u=(l=c.value)===null||l===void 0?void 0:l.inputElRef;u&&(u.value=String(a||"")),f.value===a&&b()}else b();const{onBlur:i}=n,{nTriggerFormBlur:x}=V;i&&v(i,e),x()}function oe(e){const{onClear:t}=n;t&&v(t,e)}function B(){const{value:e}=L;if(!e){U();return}const{value:t}=f;if(t===null)n.validator||g(H());else{const{value:l}=N;d(l)}}function S(){const{value:e}=E;if(!e){P();return}const{value:t}=f;if(t===null)n.validator||g(H());else{const{value:l}=N;d(-l)}}const se=ue,de=ie;function H(){if(n.validator)return null;const{value:e}=k,{value:t}=$;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function fe(e){oe(e),g(null)}function ce(e){var t,l,a;!((t=_.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((l=O.value)===null||l===void 0)&&l.$el.contains(e.target)&&e.preventDefault(),(a=c.value)===null||a===void 0||a.activate()}let p=null,w=null,R=null;function P(){R&&(window.clearTimeout(R),R=null),p&&(window.clearInterval(p),p=null)}function U(){I&&(window.clearTimeout(I),I=null),w&&(window.clearInterval(w),w=null)}function me(){R=window.setTimeout(()=>{p=window.setInterval(()=>{S()},W)},X),K("mouseup",document,()=>{window.setTimeout(P,0)})}let I=null;function ve(){I=window.setTimeout(()=>{w=window.setInterval(()=>{B()},W)},X),K("mouseup",document,()=>{window.setTimeout(U,0)})}const he=()=>{w||B()},ge=()=>{p||S()};function be(e){var t,l;if(e.code==="Enter"||e.code==="NumpadEnter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;d()!==!1&&((l=c.value)===null||l===void 0||l.deactivate())}else if(e.code==="ArrowUp"){if(n.keyboard.ArrowUp===!1)return;e.preventDefault(),d()!==!1&&B()}else if(e.code==="ArrowDown"){if(n.keyboard.ArrowDown===!1)return;e.preventDefault(),d()!==!1&&S()}}function pe(e){h.value=e,n.updateValueOnInput&&d(0,!0,!0)}Fe(f,()=>{b()});const we={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},xe=Ae("InputNumber",q,o);return Object.assign(Object.assign({},we),{rtlEnabled:xe,inputInstRef:c,minusButtonInstRef:O,addButtonInstRef:_,mergedClsPrefix:o,mergedBordered:r,uncontrolledValue:M,mergedValue:f,mergedPlaceholder:ae,displayedValueInvalid:re,mergedSize:Q,mergedDisabled:ee,displayedValue:h,addable:L,minusable:E,mergedStatus:ne,handleFocus:se,handleBlur:de,handleClear:fe,handleMouseDown:ce,handleAddClick:he,handleMinusClick:ge,handleAddMousedown:ve,handleMinusMousedown:me,handleKeyDown:be,handleUpdateDisplayedValue:pe,mergedTheme:A,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Oe(()=>{const{self:{iconColorDisabled:e}}=A.value,[t,l,a,i]=_e(e);return{textColorTextDisabled:`rgb(${t}, ${l}, ${a})`,opacityDisabled:`${i}`}})})},render(){const{mergedClsPrefix:n,$slots:r}=this;return s("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},s(ke,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var o;return(o=r.prefix)===null||o===void 0?void 0:o.call(r)},suffix:()=>{var o;return this.showButton?[r.suffix&&s("span",{class:`${n}-input-number-suffix`},{default:r.suffix}),s(j,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>z(r["minus-icon"],()=>[s(G,{clsPrefix:n},{default:()=>s(Ee,null)})])}),s(j,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>z(r["add-icon"],()=>[s(G,{clsPrefix:n},{default:()=>s($e,null)})])})]:(o=r.suffix)===null||o===void 0?void 0:o.call(r)}}))}});export{Ye as N,Ee as R};
