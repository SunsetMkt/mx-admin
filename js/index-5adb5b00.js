import{d as b,v as m,w as f,j as h,bX as o,R as E,h as d}from"./index-0227ab67.js";import{a as M}from"./use-async-monaco-d64a683f.js";class x{created;id}const D=`
async function handler(ctx: Context) {
  return 'pong';
}
`.trimStart();var S=(e=>(e.JSON="json",e.Function="function",e.Text="text",e.YAML="yaml",e))(S||{}),O=(e=>(e.json="json",e.function="typescript",e.text="markdown",e.yaml="yaml",e))(O||{});class U extends x{type="json";private=!1;raw="{}";name="";reference="root";comment;metatype;schema}var u;(e=>{e.libSource=`
 `.trim(),e.libUri="ts:filename/extends.d.ts"})(u||(u={}));var g=Object.freeze(Object.defineProperty({__proto__:null,get globalTypeDeclare(){return u}},Symbol.toStringTag,{value:"Module"}));const w=b({props:{value:{type:Object,required:!0},onSave:{type:Function,required:!1},language:{type:String,default:"typescript"}},setup(e,{expose:y}){const c=m(),s=M(c,e.value,t=>{e.value.value=t},{language:e.language});y(s),f(()=>[s.loaded.value,e.language],([t,r])=>{t&&o(()=>import("./editor.main-759b9211.js").then(function(a){return a.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(a=>{const i=s.editor.getModel();!i||a.editor.setModelLanguage(i,r)})}),h(()=>{o(()=>import("./editor.main-759b9211.js").then(function(t){return t.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(t=>{const r=t.languages.typescript.typescriptDefaults.getCompilerOptions();r.target=t.languages.typescript.ScriptTarget.ESNext,r.allowNonTsExtensions=!0,t.languages.typescript.typescriptDefaults.setCompilerOptions(r);const a="ts:filename/global.d.ts";t.editor.getModel(t.Uri.parse(a))||E.api.serverless.types.get().then(i=>{const l=i;t.languages.typescript.typescriptDefaults.addExtraLib(l,a),t.editor.createModel(l,"typescript",t.Uri.parse(a))}),Object.keys(g).forEach(i=>{const l=g[i],{libSource:p,libUri:n}=l,_=t.Uri.parse(n);t.editor.getModel(_)||(t.languages.typescript.typescriptDefaults.addExtraLib(p,n),t.editor.createModel(p,"typescript",t.Uri.parse(n)))})})});const v=f(()=>s.loaded.value,t=>{v(),o(()=>import("./editor.main-759b9211.js").then(function(r){return r.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(r=>{s.editor.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{e.onSave?.()})})});return()=>d("div",{class:"h-full relative w-full"},d("div",{class:"relative h-full w-full",ref:c}),d(s.Snip))}});export{w as F,O as S,S as a,U as b,D as d};
