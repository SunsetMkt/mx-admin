import{k as f,q as u,m as i,bX as c,a as t,c3 as g,c1 as s,d as k}from"./index-6e7759df.js";const l="vs-dark",p=!0,m=[{background:"000000",token:""},{foreground:"969896",token:"comment"},{foreground:"eeeeee",token:"keyword.operator.class"},{foreground:"eeeeee",token:"constant.other"},{foreground:"eeeeee",token:"source.php.embedded.line"},{foreground:"d54e53",token:"variable"},{foreground:"d54e53",token:"support.other.variable"},{foreground:"d54e53",token:"string.other.link"},{foreground:"d54e53",token:"string.regexp"},{foreground:"d54e53",token:"entity.name.tag"},{foreground:"d54e53",token:"entity.other.attribute-name"},{foreground:"d54e53",token:"meta.tag"},{foreground:"d54e53",token:"declaration.tag"},{foreground:"d54e53",token:"markup.deleted.git_gutter"},{foreground:"e78c45",token:"constant.numeric"},{foreground:"e78c45",token:"constant.language"},{foreground:"e78c45",token:"support.constant"},{foreground:"e78c45",token:"constant.character"},{foreground:"e78c45",token:"variable.parameter"},{foreground:"e78c45",token:"punctuation.section.embedded"},{foreground:"e78c45",token:"keyword.other.unit"},{foreground:"e7c547",token:"entity.name.class"},{foreground:"e7c547",token:"entity.name.type.class"},{foreground:"e7c547",token:"support.type"},{foreground:"e7c547",token:"support.class"},{foreground:"b9ca4a",token:"string"},{foreground:"b9ca4a",token:"constant.other.symbol"},{foreground:"b9ca4a",token:"entity.other.inherited-class"},{foreground:"b9ca4a",token:"markup.heading"},{foreground:"b9ca4a",token:"markup.inserted.git_gutter"},{foreground:"70c0b1",token:"keyword.operator"},{foreground:"70c0b1",token:"constant.other.color"},{foreground:"7aa6da",token:"entity.name.function"},{foreground:"7aa6da",token:"meta.function-call"},{foreground:"7aa6da",token:"support.function"},{foreground:"7aa6da",token:"keyword.other.special-method"},{foreground:"7aa6da",token:"meta.block-level"},{foreground:"7aa6da",token:"markup.changed.git_gutter"},{foreground:"c397d8",token:"keyword"},{foreground:"c397d8",token:"storage"},{foreground:"c397d8",token:"storage.type"},{foreground:"c397d8",token:"entity.name.tag.css"},{foreground:"ced2cf",background:"df5f5f",token:"invalid"},{foreground:"ced2cf",background:"82a3bf",token:"meta.separator"},{foreground:"ced2cf",background:"b798bf",token:"invalid.deprecated"},{foreground:"ffffff",token:"markup.inserted.diff"},{foreground:"ffffff",token:"markup.deleted.diff"},{foreground:"ffffff",token:"meta.diff.header.to-file"},{foreground:"ffffff",token:"meta.diff.header.from-file"},{foreground:"718c00",token:"markup.inserted.diff"},{foreground:"718c00",token:"meta.diff.header.to-file"},{foreground:"c82829",token:"markup.deleted.diff"},{foreground:"c82829",token:"meta.diff.header.from-file"},{foreground:"ffffff",background:"4271ae",token:"meta.diff.header.from-file"},{foreground:"ffffff",background:"4271ae",token:"meta.diff.header.to-file"},{foreground:"3e999f",fontStyle:"italic",token:"meta.diff.range"}],h={"editor.foreground":"#DEDEDE","editor.background":"#00000000","editor.selectionBackground":"#424242","editor.lineHighlightBackground":"#2A2A2A","editorCursor.foreground":"#9F9F9F","editorWhitespace.foreground":"#343434"};var b={base:l,inherit:p,rules:m,colors:h};const y="vs",F=!0,v=[{background:"FFFFFF",token:""},{foreground:"008e00",token:"comment"},{foreground:"7d4726",token:"meta.preprocessor"},{foreground:"7d4726",token:"keyword.control.import"},{foreground:"df0002",token:"string"},{foreground:"3a00dc",token:"constant.numeric"},{foreground:"c800a4",token:"constant.language"},{foreground:"275a5e",token:"constant.character"},{foreground:"275a5e",token:"constant.other"},{foreground:"c800a4",token:"variable.language"},{foreground:"c800a4",token:"variable.other"},{foreground:"c800a4",token:"keyword"},{foreground:"c900a4",token:"storage"},{foreground:"438288",token:"entity.name.class"},{foreground:"790ead",token:"entity.name.tag"},{foreground:"450084",token:"entity.other.attribute-name"},{foreground:"450084",token:"support.function"},{foreground:"450084",token:"support.constant"},{foreground:"790ead",token:"support.type"},{foreground:"790ead",token:"support.class"},{foreground:"790ead",token:"support.other.variable"}],D={"editor.foreground":"#000000","editor.background":"#FFFFFF00","editor.selectionBackground":"#B5D5FF","editor.lineHighlightBackground":"#00000012","editorCursor.foreground":"#000000","editorWhitespace.foreground":"#BFBFBF"};var _={base:y,inherit:F,rules:v,colors:D};const d=new Set,a=(e,n,r)=>{d.has(e)||i(()=>{c(()=>import("./editor.main-c3af4c17.js").then(function(o){return o.e}),["js/editor.main-c3af4c17.js","assets/editor.main.2109f3ac.css","js/index-6e7759df.js","assets/index.caa4b5a6.css"]).then(o=>{o.editor.defineTheme(e,n),d.add(e),r(o)})})},S=()=>{const n=f(u).isDark,r=o=>{n.value?o.editor.setTheme("dark"):o.editor.setTheme("light")};a("light",_,r),a("dark",b,r)},w=e=>t("div",{class:"absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"},[t(k,{vertical:!0,align:"center"},{default:()=>[t(g,{strokeWidth:14,show:!0,rotate:!0},null),e.description&&t(s,null,{default:()=>[e.description]})]})]);w.props=["description"];export{w as C,S as u};
