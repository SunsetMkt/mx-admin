import{m as s}from"./editor.main-2e49c7ff.js";import"./index-94a141f8.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,c=(r,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of m(e))!l.call(r,t)&&(a||t!=="default")&&d(r,t,{get:()=>e[t],enumerable:!(i=p(e,t))||i.enumerable});return r},n={};c(n,s);var o=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],x={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:["<!--","-->"]},brackets:[["<!--","-->"],["<",">"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],onEnterRules:[{beforeText:new RegExp(`<(?!(?:${o.join("|")}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:n.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`<(?!(?:${o.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),action:{indentAction:n.languages.IndentAction.Indent}}],folding:{markers:{start:new RegExp("^\\s*<!--\\s*#region\\b.*-->"),end:new RegExp("^\\s*<!--\\s*#endregion\\b.*-->")}}},y={defaultToken:"",tokenPostfix:".html",ignoreCase:!0,tokenizer:{root:[[/<!DOCTYPE/,"metatag","@doctype"],[/<!--/,"comment","@comment"],[/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,["delimiter","tag","","delimiter"]],[/(<)(script)/,["delimiter",{token:"tag",next:"@script"}]],[/(<)(style)/,["delimiter",{token:"tag",next:"@style"}]],[/(<)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/(<\/)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/</,"delimiter"],[/[^<]+/]],doctype:[[/[^>]+/,"metatag.content"],[/>/,"metatag","@pop"]],comment:[[/-->/,"comment","@pop"],[/[^-]+/,"comment.content"],[/./,"comment.content"]],otherTag:[[/\/?>/,"delimiter","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],script:[[/type/,"attribute.name","@scriptAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],scriptAfterType:[[/=/,"delimiter","@scriptAfterTypeEquals"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/>/,{token:"delimiter",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]],style:[[/type/,"attribute.name","@styleAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],styleAfterType:[[/=/,"delimiter","@styleAfterTypeEquals"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/>/,{token:"delimiter",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]]}};export{x as conf,y as language};
