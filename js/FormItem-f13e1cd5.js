import{k as x,P as ae,v as G,aB as Oe,am as fe,d as Ae,h as S,_ as Q,bJ as Me,Y as I,Z as ve,a7 as Z,ab as ne,O as Ie,aN as be,$ as Se,w as Ne,a0 as Te,c8 as Ce,j as De,ai as N,Q as Be,ar as We,c9 as He,ae as ye,X as Ye}from"./index-7e4abaa4.js";import{f as oe,a as Ke}from"./Form-77af3073.js";import{a as Je}from"./index-47d73072.js";function D(){return D=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},D.apply(this,arguments)}function Ue(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,te(n,e)}function ue(n){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ue(n)}function te(n,e){return te=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},te(n,e)}function Ze(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ie(n,e,t){return Ze()?ie=Reflect.construct:ie=function(i,o,a){var s=[null];s.push.apply(s,o);var f=Function.bind.apply(i,s),h=new f;return a&&te(h,a.prototype),h},ie.apply(null,arguments)}function Ge(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function ce(n){var e=typeof Map=="function"?new Map:void 0;return ce=function(r){if(r===null||!Ge(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return ie(r,arguments,ue(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),te(i,r)},ce(n)}var Qe=/%[sdj%]/g,Xe=function(){};typeof process<"u"&&process.env;function me(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function j(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=0,o=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var a=n.replace(Qe,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return s}});return a}return n}function et(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function w(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||et(e)&&typeof n=="string"&&!n)}function tt(n,e,t){var r=[],i=0,o=n.length;function a(s){r.push.apply(r,s||[]),i++,i===o&&t(r)}n.forEach(function(s){e(s,a)})}function we(n,e,t){var r=0,i=n.length;function o(a){if(a&&a.length){t(a);return}var s=r;r=r+1,s<i?e(n[s],o):t([])}o([])}function rt(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var xe=function(n){Ue(e,n);function e(t,r){var i;return i=n.call(this,"Async Validation Error")||this,i.errors=t,i.fields=r,i}return e}(ce(Error));function nt(n,e,t,r,i){if(e.first){var o=new Promise(function(l,R){var _=function(d){return r(d),d.length?R(new xe(d,me(d))):l(i)},c=rt(n);we(c,t,_)});return o.catch(function(l){return l}),o}var a=e.firstFields===!0?Object.keys(n):e.firstFields||[],s=Object.keys(n),f=s.length,h=0,u=[],p=new Promise(function(l,R){var _=function(b){if(u.push.apply(u,b),h++,h===f)return r(u),u.length?R(new xe(u,me(u))):l(i)};s.length||(r(u),l(i)),s.forEach(function(c){var b=n[c];a.indexOf(c)!==-1?we(b,t,_):tt(b,t,_)})});return p.catch(function(l){return l}),p}function it(n){return!!(n&&n.message!==void 0)}function at(n,e){for(var t=n,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function ke(n,e){return function(t){var r;return n.fullFields?r=at(e,n.fullFields):r=e[t.field||n.fullField],it(t)?(t.field=t.field||n.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||n.fullField}}}function qe(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r=="object"&&typeof n[t]=="object"?n[t]=D({},n[t],r):n[t]=r}}return n}var $e=function(e,t,r,i,o,a){e.required&&(!r.hasOwnProperty(e.field)||w(t,a||e.type))&&i.push(j(o.messages.required,e.fullField))},ot=function(e,t,r,i,o){(/^\s+$/.test(t)||t==="")&&i.push(j(o.messages.whitespace,e.fullField))},de={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},X={integer:function(e){return X.number(e)&&parseInt(e,10)===e},float:function(e){return X.number(e)&&!X.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!X.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(de.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(de.url)},hex:function(e){return typeof e=="string"&&!!e.match(de.hex)}},st=function(e,t,r,i,o){if(e.required&&t===void 0){$e(e,t,r,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?X[s](t)||i.push(j(o.messages.types[s],e.fullField,e.type)):s&&typeof t!==e.type&&i.push(j(o.messages.types[s],e.fullField,e.type))},ft=function(e,t,r,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",f=typeof e.max=="number",h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=t,p=null,l=typeof t=="number",R=typeof t=="string",_=Array.isArray(t);if(l?p="number":R?p="string":_&&(p="array"),!p)return!1;_&&(u=t.length),R&&(u=t.replace(h,"_").length),a?u!==e.len&&i.push(j(o.messages[p].len,e.fullField,e.len)):s&&!f&&u<e.min?i.push(j(o.messages[p].min,e.fullField,e.min)):f&&!s&&u>e.max?i.push(j(o.messages[p].max,e.fullField,e.max)):s&&f&&(u<e.min||u>e.max)&&i.push(j(o.messages[p].range,e.fullField,e.min,e.max))},K="enum",dt=function(e,t,r,i,o){e[K]=Array.isArray(e[K])?e[K]:[],e[K].indexOf(t)===-1&&i.push(j(o.messages[K],e.fullField,e[K].join(", ")))},lt=function(e,t,r,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(j(o.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(j(o.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},m={required:$e,whitespace:ot,type:st,range:ft,enum:dt,pattern:lt},ut=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t,"string")&&!e.required)return r();m.required(e,t,i,a,o,"string"),w(t,"string")||(m.type(e,t,i,a,o),m.range(e,t,i,a,o),m.pattern(e,t,i,a,o),e.whitespace===!0&&m.whitespace(e,t,i,a,o))}r(a)},ct=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t)&&!e.required)return r();m.required(e,t,i,a,o),t!==void 0&&m.type(e,t,i,a,o)}r(a)},mt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t===""&&(t=void 0),w(t)&&!e.required)return r();m.required(e,t,i,a,o),t!==void 0&&(m.type(e,t,i,a,o),m.range(e,t,i,a,o))}r(a)},gt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t)&&!e.required)return r();m.required(e,t,i,a,o),t!==void 0&&m.type(e,t,i,a,o)}r(a)},ht=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t)&&!e.required)return r();m.required(e,t,i,a,o),w(t)||m.type(e,t,i,a,o)}r(a)},pt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t)&&!e.required)return r();m.required(e,t,i,a,o),t!==void 0&&(m.type(e,t,i,a,o),m.range(e,t,i,a,o))}r(a)},vt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t)&&!e.required)return r();m.required(e,t,i,a,o),t!==void 0&&(m.type(e,t,i,a,o),m.range(e,t,i,a,o))}r(a)},bt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t==null&&!e.required)return r();m.required(e,t,i,a,o,"array"),t!=null&&(m.type(e,t,i,a,o),m.range(e,t,i,a,o))}r(a)},yt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t)&&!e.required)return r();m.required(e,t,i,a,o),t!==void 0&&m.type(e,t,i,a,o)}r(a)},wt="enum",xt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t)&&!e.required)return r();m.required(e,t,i,a,o),t!==void 0&&m[wt](e,t,i,a,o)}r(a)},kt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t,"string")&&!e.required)return r();m.required(e,t,i,a,o),w(t,"string")||m.pattern(e,t,i,a,o)}r(a)},qt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t,"date")&&!e.required)return r();if(m.required(e,t,i,a,o),!w(t,"date")){var f;t instanceof Date?f=t:f=new Date(t),m.type(e,f,i,a,o),f&&m.range(e,f.getTime(),i,a,o)}}r(a)},Ft=function(e,t,r,i,o){var a=[],s=Array.isArray(t)?"array":typeof t;m.required(e,t,i,a,o,s),r(a)},le=function(e,t,r,i,o){var a=e.type,s=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(w(t,a)&&!e.required)return r();m.required(e,t,i,s,o,a),w(t,a)||m.type(e,t,i,s,o)}r(s)},Rt=function(e,t,r,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(w(t)&&!e.required)return r();m.required(e,t,i,a,o)}r(a)},ee={string:ut,method:ct,number:mt,boolean:gt,regexp:ht,integer:pt,float:vt,array:bt,object:yt,enum:xt,pattern:kt,date:qt,url:le,hex:le,email:le,required:Ft,any:Rt};function ge(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var he=ge(),re=function(){function n(t){this.rules=null,this._messages=he,this.define(t)}var e=n.prototype;return e.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(o){var a=r[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(r){return r&&(this._messages=qe(ge(),r)),this._messages},e.validate=function(r,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=r,f=i,h=o;if(typeof f=="function"&&(h=f,f={}),!this.rules||Object.keys(this.rules).length===0)return h&&h(null,s),Promise.resolve(s);function u(c){var b=[],d={};function z(P){if(Array.isArray(P)){var k;b=(k=b).concat.apply(k,P)}else b.push(P)}for(var v=0;v<c.length;v++)z(c[v]);b.length?(d=me(b),h(b,d)):h(null,s)}if(f.messages){var p=this.messages();p===he&&(p=ge()),qe(p,f.messages),f.messages=p}else f.messages=this.messages();var l={},R=f.keys||Object.keys(this.rules);R.forEach(function(c){var b=a.rules[c],d=s[c];b.forEach(function(z){var v=z;typeof v.transform=="function"&&(s===r&&(s=D({},s)),d=s[c]=v.transform(d)),typeof v=="function"?v={validator:v}:v=D({},v),v.validator=a.getValidationMethod(v),v.validator&&(v.field=c,v.fullField=v.fullField||c,v.type=a.getType(v),l[c]=l[c]||[],l[c].push({rule:v,value:d,source:s,field:c}))})});var _={};return nt(l,f,function(c,b){var d=c.rule,z=(d.type==="object"||d.type==="array")&&(typeof d.fields=="object"||typeof d.defaultField=="object");z=z&&(d.required||!d.required&&c.value),d.field=c.field;function v($,O){return D({},O,{fullField:d.fullField+"."+$,fullFields:d.fullFields?[].concat(d.fullFields,[$]):[$]})}function P($){$===void 0&&($=[]);var O=Array.isArray($)?$:[$];!f.suppressWarning&&O.length&&n.warning("async-validator:",O),O.length&&d.message!==void 0&&(O=[].concat(d.message));var E=O.map(ke(d,s));if(f.first&&E.length)return _[d.field]=1,b(E);if(!z)b(E);else{if(d.required&&!c.value)return d.message!==void 0?E=[].concat(d.message).map(ke(d,s)):f.error&&(E=[f.error(d,j(f.messages.required,d.field))]),b(E);var L={};d.defaultField&&Object.keys(c.value).map(function(g){L[g]=d.defaultField}),L=D({},L,c.rule.fields);var J={};Object.keys(L).forEach(function(g){var y=L[g],q=Array.isArray(y)?y:[y];J[g]=q.map(v.bind(null,g))});var M=new n(J);M.messages(f.messages),c.rule.options&&(c.rule.options.messages=f.messages,c.rule.options.error=f.error),M.validate(c.value,c.rule.options||f,function(g){var y=[];E&&E.length&&y.push.apply(y,E),g&&g.length&&y.push.apply(y,g),b(y.length?y:null)})}}var k;d.asyncValidator?k=d.asyncValidator(d,c.value,P,c.source,f):d.validator&&(k=d.validator(d,c.value,P,c.source,f),k===!0?P():k===!1?P(typeof d.message=="function"?d.message(d.fullField||d.field):d.message||(d.fullField||d.field)+" fails"):k instanceof Array?P(k):k instanceof Error&&P(k.message)),k&&k.then&&k.then(function(){return P()},function($){return P($)})},function(c){u(c)},s)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!ee.hasOwnProperty(r.type))throw new Error(j("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?ee.required:ee[this.getType(r)]||void 0},n}();re.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");ee[e]=t};re.warning=Xe;re.messages=he;re.validators=ee;function Pt(n){const e=ae(oe,null);return{mergedSize:x(()=>n.size!==void 0?n.size:e?.props.size!==void 0?e.props.size:"medium")}}function Ot(n){const e=ae(oe,null),t=x(()=>{if(r.value==="top")return;const{labelWidth:l}=n;if(l!==void 0&&l!=="auto")return fe(l);if(l==="auto"||e?.props.labelWidth==="auto"){const R=e?.maxChildLabelWidthRef.value;return R!==void 0?fe(R):void 0}if(e?.props.labelWidth!==void 0)return fe(e.props.labelWidth)}),r=x(()=>{const{labelPlacement:l}=n;return l!==void 0?l:e?.props.labelPlacement?e.props.labelPlacement:"top"}),i=x(()=>{const{labelAlign:l}=n;if(l)return l;if(e?.props.labelAlign)return e.props.labelAlign}),o=x(()=>{var l;return[(l=n.labelProps)===null||l===void 0?void 0:l.style,n.labelStyle,{width:t.value}]}),a=x(()=>{const{showRequireMark:l}=n;return l!==void 0?l:e?.props.showRequireMark}),s=x(()=>{const{requireMarkPlacement:l}=n;return l!==void 0?l:e?.props.requireMarkPlacement||"right"}),f=G(!1),h=x(()=>{const{validationStatus:l}=n;if(l!==void 0)return l;if(f.value)return"error"}),u=x(()=>{const{showFeedback:l}=n;return l!==void 0?l:e?.props.showFeedback!==void 0?e.props.showFeedback:!0}),p=x(()=>{const{showLabel:l}=n;return l!==void 0?l:e?.props.showLabel!==void 0?e.props.showLabel:!0});return{validationErrored:f,mergedLabelStyle:o,mergedLabelPlacement:r,mergedLabelAlign:i,mergedShowRequireMark:a,mergedRequireMarkPlacement:s,mergedValidationStatus:h,mergedShowFeedback:u,mergedShowLabel:p}}function At(n){const e=ae(oe,null),t=x(()=>{const{rulePath:a}=n;if(a!==void 0)return a;const{path:s}=n;if(s!==void 0)return s}),r=x(()=>{const a=[],{rule:s}=n;if(s!==void 0&&(Array.isArray(s)?a.push(...s):a.push(s)),e){const{rules:f}=e.props,{value:h}=t;if(f!==void 0&&h!==void 0){const u=Oe(f,h);u!==void 0&&(Array.isArray(u)?a.push(...u):a.push(u))}}return a}),i=x(()=>r.value.some(a=>a.required)),o=x(()=>i.value||n.required);return{mergedRules:r,mergedRequired:o}}var St=Ae({name:"FormItemFeedback",props:{clsPrefix:{type:String,required:!0},explains:Array,feedback:String},render(){var n;const{$slots:e,feedback:t,clsPrefix:r}=this;return e.default?e.default():t?S("div",{key:t,class:`${r}-form-item-feedback__line`},t):(n=this.explains)===null||n===void 0?void 0:n.map(i=>S("div",{key:i,class:`${r}-form-item-feedback__line`},i))}});const{cubicBezierEaseInOut:Fe}=Me;function $t({name:n="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:r=".3s",enterCubicBezier:i=Fe,leaveCubicBezier:o=Fe}={}){return[Q(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),Q(`&.${n}-transition-enter-to, &.${n}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),Q(`&.${n}-transition-leave-active`,{transition:`opacity ${r} ${o}, transform ${r} ${o}`}),Q(`&.${n}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}var jt=I("form-item",{display:"grid",lineHeight:"var(--n-line-height)"},[I("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 `,[ve("asterisk",`
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),ve("asterisk-placeholder",`
 visibility: hidden; 
 `)]),I("form-item-blank",{gridArea:"blank",minHeight:"var(--n-blank-height)"}),Z("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 `,[I("form-item-label",`
 height: var(--n-blank-height);
 line-height: var(--n-blank-height);
 box-sizing: border-box;
 white-space: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `)]),Z("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: var(--n-label-height) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[Z("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),I("form-item-label",{display:"flex",alignItems:"flex-end",justifyContent:"var(--n-label-text-align)"})]),I("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),I("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[Q("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),I("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[Z("warning",{color:"var(--n-feedback-text-color-warning)"}),Z("error",{color:"var(--n-feedback-text-color-error)"}),$t({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]),Re=globalThis&&globalThis.__awaiter||function(n,e,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(u){try{h(r.next(u))}catch(p){a(p)}}function f(u){try{h(r.throw(u))}catch(p){a(p)}}function h(u){u.done?o(u.value):i(u.value).then(s,f)}h((r=r.apply(n,e||[])).next())})};const je=Object.assign(Object.assign({},Se.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object}),Lt=Ye(je);function Pe(n,e){return(...t)=>{try{const r=n(...t);return!e&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r?.then?r:(r===void 0||ye("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(r){ye("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}var Mt=Ae({name:"FormItem",props:je,setup(n){Je(Ke,"formItems",ne(n,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=Ie(n),r=ae(oe,null),i=Pt(n),o=Ot(n),{validationErrored:a}=o,{mergedRequired:s,mergedRules:f}=At(n),{mergedSize:h}=i,{mergedLabelPlacement:u,mergedLabelAlign:p}=o,l=G([]),R=G(be()),_=x(()=>{const{feedback:g}=n;return g!=null?!0:l.value.length}),c=r?ne(r.props,"disabled"):G(!1),b=Se("Form","-form-item",jt,He,n,e);Ne(ne(n,"path"),()=>{n.ignorePathChange||d()});function d(){l.value=[],a.value=!1,n.feedback&&(R.value=be())}function z(){O("blur")}function v(){O("change")}function P(){O("focus")}function k(){O("input")}function $(g,y){return Re(this,void 0,void 0,function*(){let q,A,T,B;return typeof g=="string"?(q=g,A=y):g!==null&&typeof g=="object"&&(q=g.trigger,A=g.callback,T=g.shouldRuleBeApplied,B=g.options),yield new Promise((W,H)=>{O(q,T,B).then(({valid:Y,errors:C})=>{Y?(A&&A(),W()):(A&&A(C),H(C))})})})}const O=(g=null,y=()=>!0,q={suppressWarning:!0})=>Re(this,void 0,void 0,function*(){const{path:A}=n;q?q.first||(q.first=n.first):q={};const{value:T}=f,B=r?Oe(r.props.model,A||""):void 0,W=(g?T.filter(V=>Array.isArray(V.trigger)?V.trigger.includes(g):V.trigger===g):T).filter(y).map(V=>{const F=Object.assign({},V);return F.validator&&(F.validator=Pe(F.validator,!1)),F.asyncValidator&&(F.asyncValidator=Pe(F.asyncValidator,!0)),F});if(!W.length)return yield Promise.resolve({valid:!0});const H=A??"__n_no_path__",Y=new re({[H]:W}),{validateMessages:C}=r?.props||{};return C&&Y.messages(C),yield new Promise(V=>{Y.validate({[H]:B},q,(F,pe)=>{F?.length?(l.value=F.map(U=>U?.message||""),a.value=!0,V({valid:!1,errors:F})):(d(),V({valid:!0}))})})});Te(Ce,{path:ne(n,"path"),disabled:c,mergedSize:i.mergedSize,mergedValidationStatus:o.mergedValidationStatus,restoreValidation:d,handleContentBlur:z,handleContentChange:v,handleContentFocus:P,handleContentInput:k});const E={validate:$,restoreValidation:d,internalValidate:O},L=G(null);De(()=>{L.value!==null&&r?.deriveMaxChildLabelWidth(Number(getComputedStyle(L.value).width.slice(0,-2)))});const J=x(()=>{var g;const{value:y}=h,{value:q}=u,A=q==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:T},self:{labelTextColor:B,asteriskColor:W,lineHeight:H,feedbackTextColor:Y,feedbackTextColorWarning:C,feedbackTextColorError:V,feedbackPadding:F,[N("labelHeight",y)]:pe,[N("blankHeight",y)]:U,[N("feedbackFontSize",y)]:_e,[N("feedbackHeight",y)]:Ee,[N("labelPadding",A)]:Ve,[N("labelTextAlign",A)]:ze,[N(N("labelFontSize",q),y)]:Le}}=b.value;let se=(g=p.value)!==null&&g!==void 0?g:ze;return q==="top"&&(se=se==="right"?"flex-end":"flex-start"),{"--n-bezier":T,"--n-line-height":H,"--n-blank-height":U,"--n-label-font-size":Le,"--n-label-text-align":se,"--n-label-height":pe,"--n-label-padding":Ve,"--n-asterisk-color":W,"--n-label-text-color":B,"--n-feedback-padding":F,"--n-feedback-font-size":_e,"--n-feedback-height":Ee,"--n-feedback-text-color":Y,"--n-feedback-text-color-warning":C,"--n-feedback-text-color-error":V}}),M=Be("form-item",x(()=>{var g;return`${h.value[0]}${u.value[0]}${((g=p.value)===null||g===void 0?void 0:g[0])||""}`}),J,n);return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:L,mergedClsPrefix:e,mergedRequired:s,hasFeedback:_,feedbackId:R,explains:l},o),i),E),{cssVars:t?void 0:J,themeClass:M?.themeClass,onRender:M?.onRender})},render(){var n;const{$slots:e,mergedClsPrefix:t,mergedShowLabel:r,mergedShowRequireMark:i,mergedRequireMarkPlacement:o,onRender:a}=this,s=i!==void 0?i:this.mergedRequired;return a?.(),S("div",{class:[`${t}-form-item`,this.themeClass,`${t}-form-item--${this.mergedSize}-size`,`${t}-form-item--${this.mergedLabelPlacement}-labelled`,!r&&`${t}-form-item--no-label`],style:this.cssVars},r&&(this.label||e.label)?S("label",Object.assign({},this.labelProps,{class:[(n=this.labelProps)===null||n===void 0?void 0:n.class,`${t}-form-item-label`],style:this.mergedLabelStyle,ref:"labelElementRef"}),o!=="left"?e.label?e.label():this.label:null,s?S("span",{class:`${t}-form-item-label__asterisk`},o!=="left"?"\xA0*":"*\xA0"):o==="right-hanging"&&S("span",{class:`${t}-form-item-label__asterisk-placeholder`},"\xA0*"),o==="left"?e.label?e.label():this.label:null):null,S("div",{class:[`${t}-form-item-blank`,this.mergedValidationStatus&&`${t}-form-item-blank--${this.mergedValidationStatus}`]},e),this.mergedShowFeedback?S("div",{key:this.feedbackId,class:`${t}-form-item-feedback-wrapper`},S(We,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const f=S(St,{clsPrefix:t,explains:this.explains,feedback:this.feedback},{default:e.feedback}),{hasFeedback:h,mergedValidationStatus:u}=this;return h||e.feedback?u==="warning"?S("div",{key:"controlled-warning",class:`${t}-form-item-feedback ${t}-form-item-feedback--warning`},f):u==="error"?S("div",{key:"controlled-error",class:`${t}-form-item-feedback ${t}-form-item-feedback--error`},f):u==="success"?S("div",{key:"controlled-success",class:`${t}-form-item-feedback ${t}-form-item-feedback--success`},f):S("div",{key:"controlled-default",class:`${t}-form-item-feedback`},f):null}})):null)}});export{Mt as N,je as a,Lt as f};
