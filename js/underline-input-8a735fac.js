import{d as n,h as e,bR as o}from"./index-7e4abaa4.js";import{i as l}from"./parse-content-ad428e7a.js";const r="_root_1a6k2_1";var s={root:r};const p=n({props:{...l,autoShrink:{type:Boolean,default:!0}},setup(t){return()=>e("div",{class:o(t.autoShrink?"min-w-[2rem]":"min-w-[120px]",s.root)},e("input",{class:"absolute w-full",type:t.type??"text",value:t.value,placeholder:t.placeholder??"",onInput:a=>{t.onChange(a.target.value)}}),e("span",{class:"text-transparent"},t.value,"\xA0"))}});export{p as U};
