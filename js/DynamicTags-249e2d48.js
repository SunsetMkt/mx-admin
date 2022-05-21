import{t as j,c as k,N as w}from"./Tag-b1b9f704.js";import{c8 as $,bd as K,c9 as W,ca as E,cb as H,a2 as x,f as _,T as M,S as X,ag as Z,y as f,a5 as L,X as q,ah as G,n as V,V as J,Z as u,d as Q,b0 as Y,H as ee,N as te,$ as ne,ab as N}from"./index-6e7759df.js";import{s as ae}from"./prop-a1682621.js";import{A as se}from"./Add-b7baeac9.js";const ie=$({name:"DynamicTags",common:K,peers:{Input:W,Button:E,Tag:j,Space:H},self(){return{inputWidth:"64px"}}});var le=ie,ue=x("dynamic-tags",[x("input",{minWidth:"var(--n-input-width)"})]);const re=Object.assign(Object.assign(Object.assign({},L.props),k),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:t=>t},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]});var pe=_({name:"DynamicTags",props:re,setup(t){const{mergedClsPrefixRef:h,inlineThemeDisabled:r}=M(t),{localeRef:o}=X("DynamicTags"),d=Z(t),{mergedDisabledRef:s}=d,c=f(""),m=f(!1),p=f(!0),v=f(null),y=L("DynamicTags","-dynamic-tags",ue,le,t,h),b=f(t.defaultValue),F=q(t,"value"),i=G(F,b),O=V(()=>o.value.add),z=V(()=>ae(t.size)),C=V(()=>s.value||!!t.max&&i.value.length>=t.max);function T(e){const{onChange:n,"onUpdate:value":g,onUpdateValue:B}=t,{nTriggerFormInput:P,nTriggerFormChange:U}=d;n&&N(n,e),B&&N(B,e),g&&N(g,e),b.value=e,P(),U()}function I(e){const n=i.value.slice(0);n.splice(e,1),T(n)}function D(e){switch(e.code){case"Enter":case"NumpadEnter":l()}}function l(e){const n=e??c.value;if(n){const g=i.value.slice(0);g.push(n),T(g)}m.value=!1,p.value=!0,c.value=""}function R(){l()}function A(){m.value=!0,Y(()=>{var e;(e=v.value)===null||e===void 0||e.focus(),p.value=!1})}const S=V(()=>{const{self:{inputWidth:e}}=y.value;return{"--n-input-width":e}}),a=r?J("dynamic-tags",void 0,S,t):void 0;return{mergedClsPrefix:h,inputInstRef:v,localizedAdd:O,inputSize:z,inputValue:c,showInput:m,inputForceFocused:p,mergedValue:i,mergedDisabled:s,triggerDisabled:C,handleInputKeyUp:D,handleAddClick:A,handleInputBlur:R,handleCloseClick:I,handleInputConfirm:l,mergedTheme:y,cssVars:r?void 0:S,themeClass:a?.themeClass,onRender:a?.onRender}},render(){const{mergedTheme:t,cssVars:h,mergedClsPrefix:r,onRender:o,renderTag:d}=this;return o?.(),u(Q,{class:[`${r}-dynamic-tags`,this.themeClass],size:"small",style:h,theme:t.peers.Space,themeOverrides:t.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:s,tagStyle:c,type:m,round:p,size:v,color:y,closable:b,mergedDisabled:F,showInput:i,inputValue:O,inputStyle:z,inputSize:C,inputForceFocused:T,triggerDisabled:I,handleInputKeyUp:D,handleInputBlur:l,handleAddClick:R,handleCloseClick:A,handleInputConfirm:S,$slots:a}=this;return this.mergedValue.map((e,n)=>d?d(e,n):u(w,{key:n,theme:s.peers.Tag,themeOverrides:s.peerOverrides.Tag,style:c,type:m,round:p,size:v,color:y,closable:b,disabled:F,onClose:()=>A(n)},{default:()=>typeof e=="string"?e:e.label})).concat(i?a.input?a.input({submit:S,deactivate:l}):u(ee,Object.assign({placeholder:"",size:C,style:z,autosize:!0},this.inputProps,{ref:"inputInstRef",value:O,onUpdateValue:e=>{this.inputValue=e},theme:s.peers.Input,themeOverrides:s.peerOverrides.Input,onKeyup:D,onBlur:l,internalForceFocus:T})):a.trigger?a.trigger({activate:R,disabled:I}):u(te,{dashed:!0,disabled:I,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button,size:C,onClick:R},{icon:()=>u(ne,{clsPrefix:r},{default:()=>u(se,null)})}))}})}});export{pe as N};