import{f as o,a as t,b_ as n,b as l}from"./index-6e7759df.js";import{i as r}from"./parse-content-699d9620.js";const s="_root_1a6k2_1";var u={root:s};const p=o({props:{...r,autoShrink:{type:Boolean,default:!0}},setup(e){return()=>t("div",{class:n(e.autoShrink?"min-w-[2rem]":"min-w-[120px]",u.root)},[t("input",{class:"absolute w-full",type:e.type??"text",value:e.value,placeholder:e.placeholder??"",onInput:a=>{e.onChange(a.target.value)}},null),t("span",{class:"text-transparent"},[e.value,l("\xA0")])])}});export{p as U};
