import{d as r,h as n,N as i,p as l,n as c,I as u}from"./index-4d27830d.js";const a={variant:{type:String,default:"primary"},color:{type:String},onClick:{type:Function},disabled:{type:Boolean}},d=r({props:a,setup(t,{slots:e}){return()=>n(i,{type:t.variant,color:t.color,circle:!0,onClick:t.onClick,disabled:t.disabled},e)}}),b=r({props:{...a,to:{type:[Object,String]},name:{type:String},icon:{type:Object,required:!0}},setup(t){const e=()=>n(d,{variant:t.variant,class:"shadow",onClick:t.onClick,disabled:t.disabled,color:t.color},n(u,{size:"16"},t.icon)),o=()=>t.name?n(c,{trigger:"hover",placement:"bottom"},{trigger(){return n(e,null)},default(){return t.name}}):n(e,null);return()=>t.to?n(l,{to:t.to},n(o,null)):n(o,null)}});export{b as H};
