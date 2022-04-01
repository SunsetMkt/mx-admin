import{d as Z,h as Q,ds as oe,dY as d,dZ as se,v as ee,w as z,i as ce,cO as ue,j as le,bX as fe,U as de}from"./index-7e4abaa4.js";import{u as he,C as ve}from"./index-f001a2b4.js";import{u as pe}from"./use-save-confirm-74164de5.js";import{e as ye}from"./editor.main-759b9211.js";const tt=Z({setup(a,{slots:t}){return()=>Q(oe,{cols:"36 1:12 1024:36 1600:36",xGap:24},t?.default?.())}});var q={},U={},M={};Object.defineProperty(M,"__esModule",{value:!0});M.DummySourceCache=void 0;var ge=function(){function a(){}return a.prototype.getFile=function(t){return Promise.resolve(void 0)},a.prototype.isFileAvailable=function(t){return Promise.resolve(!1)},a.prototype.storeFile=function(t,e){return Promise.resolve(void 0)},a.prototype.clear=function(){return Promise.resolve(void 0)},a}();M.DummySourceCache=ge;var A={},$=d&&d.__awaiter||function(a,t,e,n){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function c(u){try{o(n.next(u))}catch(f){s(f)}}function l(u){try{o(n.throw(u))}catch(f){s(f)}}function o(u){u.done?r(u.value):i(u.value).then(c,l)}o((n=n.apply(a,t||[])).next())})},V=d&&d.__generator||function(a,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(o){return function(u){return l([o,u])}}function l(o){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,i&&(r=o[0]&2?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[o[0]&2,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return e.label++,{value:o[1],done:!1};case 5:e.label++,i=o[1],o=[0];continue;case 7:o=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1],r=o;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(o);break}r[2]&&e.ops.pop(),e.trys.pop();continue}o=t.call(a,e)}catch(u){o=[6,u],i=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(A,"__esModule",{value:!0});A.UnpkgSourceResolver=void 0;var me=function(){function a(){}return a.prototype.resolvePackageJson=function(t,e,n){return $(this,void 0,void 0,function(){return V(this,function(i){switch(i.label){case 0:return[4,this.resolveFile("https://unpkg.com/".concat(t).concat(e?"@".concat(e):"").concat(n?"/".concat(n):"","/package.json"))];case 1:return[2,i.sent()]}})})},a.prototype.resolveSourceFile=function(t,e,n){return $(this,void 0,void 0,function(){return V(this,function(i){switch(i.label){case 0:return[4,this.resolveFile("https://unpkg.com/".concat(t).concat(e?"@".concat(e):"","/").concat(n))];case 1:return[2,i.sent()]}})})},a.prototype.resolveFile=function(t){return $(this,void 0,void 0,function(){var e;return V(this,function(n){switch(n.label){case 0:return[4,fetch(t,{method:"GET"})];case 1:return e=n.sent(),e.ok?[4,e.text()]:[3,3];case 2:return[2,n.sent()];case 3:if(e.status===404)return[2,""];throw Error("Error other than 404 while fetching from Unpkg at ".concat(t));case 4:return[2]}})})},a}();A.UnpkgSourceResolver=me;var E={},N={};function P(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}function H(a,t){for(var e="",n=0,i=-1,r=0,s,c=0;c<=a.length;++c){if(c<a.length)s=a.charCodeAt(c);else{if(s===47)break;s=47}if(s===47){if(!(i===c-1||r===1))if(i!==c-1&&r===2){if(e.length<2||n!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",n=0):(e=e.slice(0,l),n=e.length-1-e.lastIndexOf("/")),i=c,r=0;continue}}else if(e.length===2||e.length===1){e="",n=0,i=c,r=0;continue}}t&&(e.length>0?e+="/..":e="..",n=2)}else e.length>0?e+="/"+a.slice(i+1,c):e=a.slice(i+1,c),n=c-i-1;i=c,r=0}else s===46&&r!==-1?++r:r=-1}return e}function be(a,t){var e=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return e?e===t.root?e+n:e+a+n:n}var j={resolve:function(){for(var t="",e=!1,n,i=arguments.length-1;i>=-1&&!e;i--){var r;i>=0?r=arguments[i]:(n===void 0&&(n=process.cwd()),r=n),P(r),r.length!==0&&(t=r+"/"+t,e=r.charCodeAt(0)===47)}return t=H(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(P(t),t.length===0)return".";var e=t.charCodeAt(0)===47,n=t.charCodeAt(t.length-1)===47;return t=H(t,!e),t.length===0&&!e&&(t="."),t.length>0&&n&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return P(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,e=0;e<arguments.length;++e){var n=arguments[e];P(n),n.length>0&&(t===void 0?t=n:t+="/"+n)}return t===void 0?".":j.normalize(t)},relative:function(t,e){if(P(t),P(e),t===e||(t=j.resolve(t),e=j.resolve(e),t===e))return"";for(var n=1;n<t.length&&t.charCodeAt(n)===47;++n);for(var i=t.length,r=i-n,s=1;s<e.length&&e.charCodeAt(s)===47;++s);for(var c=e.length,l=c-s,o=r<l?r:l,u=-1,f=0;f<=o;++f){if(f===o){if(l>o){if(e.charCodeAt(s+f)===47)return e.slice(s+f+1);if(f===0)return e.slice(s+f)}else r>o&&(t.charCodeAt(n+f)===47?u=f:f===0&&(u=0));break}var y=t.charCodeAt(n+f),v=e.charCodeAt(s+f);if(y!==v)break;y===47&&(u=f)}var h="";for(f=n+u+1;f<=i;++f)(f===i||t.charCodeAt(f)===47)&&(h.length===0?h+="..":h+="/..");return h.length>0?h+e.slice(s+u):(s+=u,e.charCodeAt(s)===47&&++s,e.slice(s))},_makeLong:function(t){return t},dirname:function(t){if(P(t),t.length===0)return".";for(var e=t.charCodeAt(0),n=e===47,i=-1,r=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),e===47){if(!r){i=s;break}}else r=!1;return i===-1?n?"/":".":n&&i===1?"//":t.slice(0,i)},basename:function(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');P(t);var n=0,i=-1,r=!0,s;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var c=e.length-1,l=-1;for(s=t.length-1;s>=0;--s){var o=t.charCodeAt(s);if(o===47){if(!r){n=s+1;break}}else l===-1&&(r=!1,l=s+1),c>=0&&(o===e.charCodeAt(c)?--c===-1&&(i=s):(c=-1,i=l))}return n===i?i=l:i===-1&&(i=t.length),t.slice(n,i)}else{for(s=t.length-1;s>=0;--s)if(t.charCodeAt(s)===47){if(!r){n=s+1;break}}else i===-1&&(r=!1,i=s+1);return i===-1?"":t.slice(n,i)}},extname:function(t){P(t);for(var e=-1,n=0,i=-1,r=!0,s=0,c=t.length-1;c>=0;--c){var l=t.charCodeAt(c);if(l===47){if(!r){n=c+1;break}continue}i===-1&&(r=!1,i=c+1),l===46?e===-1?e=c:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||i===-1||s===0||s===1&&e===i-1&&e===n+1?"":t.slice(e,i)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return be("/",t)},parse:function(t){P(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;var n=t.charCodeAt(0),i=n===47,r;i?(e.root="/",r=1):r=0;for(var s=-1,c=0,l=-1,o=!0,u=t.length-1,f=0;u>=r;--u){if(n=t.charCodeAt(u),n===47){if(!o){c=u+1;break}continue}l===-1&&(o=!1,l=u+1),n===46?s===-1?s=u:f!==1&&(f=1):s!==-1&&(f=-1)}return s===-1||l===-1||f===0||f===1&&s===l-1&&s===c+1?l!==-1&&(c===0&&i?e.base=e.name=t.slice(1,l):e.base=e.name=t.slice(c,l)):(c===0&&i?(e.name=t.slice(1,s),e.base=t.slice(1,l)):(e.name=t.slice(c,s),e.base=t.slice(c,l)),e.ext=t.slice(s,l)),c>0?e.dir=t.slice(0,c-1):i&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};j.posix=j;var L=j,_e=d&&d.__createBinding||(Object.create?function(a,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(a,n,i)}:function(a,t,e,n){n===void 0&&(n=e),a[n]=t[e]}),ke=d&&d.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),we=d&&d.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(a!=null)for(var e in a)e!=="default"&&Object.prototype.hasOwnProperty.call(a,e)&&_e(t,a,e);return ke(t,a),t},Pe=d&&d.__read||function(a,t){var e=typeof Symbol=="function"&&a[Symbol.iterator];if(!e)return a;var n=e.call(a),i,r=[],s;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(c){s={error:c}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(s)throw s.error}}return r},Se=d&&d.__spreadArray||function(a,t,e){if(e||arguments.length===2)for(var n=0,i=t.length,r;n<i;n++)(r||!(n in t))&&(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return a.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(N,"__esModule",{value:!0});N.DependencyParser=void 0;var Ce=we(L),Oe=function(){function a(){this.REGEX_CLEAN=/[\n|\r]/g,this.REGEX_DETECT_IMPORT=/(?:(?:(?:import)|(?:export))(?:.)*?from\s+["']([^"']+)["'])|(?:\/+\s+<reference\s+path=["']([^"']+)["']\s+\/>)/g}return a.prototype.parseDependencies=function(t,e){var n=this,i=t;return Se([],Pe(i.matchAll(this.REGEX_DETECT_IMPORT)),!1).map(function(r){var s;return(s=r[1])!==null&&s!==void 0?s:r[2]}).filter(function(r){return!!r}).map(function(r){var s=n.resolvePath(r,e);return s})},a.prototype.resolvePath=function(t,e){if(typeof e=="string"){if(t.startsWith("."))return{kind:"relative",importPath:t,sourcePath:e};if(t.startsWith("@")){var n=t.split("/");return{kind:"package",packageName:"".concat(n[0],"/").concat(n[1]),importPath:n.slice(2).join("/")}}else{var n=t.split("/");return{kind:"package",packageName:n[0],importPath:n.slice(1).join("/")}}}else switch(e.kind){case"package":throw Error("TODO?");case"relative":throw Error("TODO2?");case"relative-in-package":if(t.startsWith("."))return{kind:"relative-in-package",packageName:e.packageName,sourcePath:Ce.join(e.sourcePath,e.importPath),importPath:t};if(t.startsWith("@")){var n=t.split("/");return{kind:"package",packageName:"".concat(n[0],"/").concat(n[1]),importPath:n.slice(2).join("/")}}else{var n=t.split("/");return{kind:"package",packageName:n[0],importPath:n.slice(1).join("/")}}}},a}();N.DependencyParser=Oe;var R={},De=d&&d.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(R,"__esModule",{value:!0});R.importResourcePathToString=void 0;var J=De(L),je=function(a){var t;switch(a.kind){case"package":return J.default.join(a.packageName,(t=a.importPath)!==null&&t!==void 0?t:"","package.json");case"relative":return J.default.join(a.sourcePath,a.importPath);case"relative-in-package":return J.default.join(a.packageName,a.sourcePath,a.importPath)}};R.importResourcePathToString=je;var F={};Object.defineProperty(F,"__esModule",{value:!0});F.invokeUpdate=void 0;var Ae=function(a,t){var e,n="".concat(a.type,": ");switch(a.type){case"CodeChanged":n+="";break;case"ResolveNewImports":n+="";break;case"LookedUpTypeFile":n+='"'.concat(a.path,'" was ').concat(a.success?"sucessfully":"not sucessfully"," looked up");break;case"AttemptedLookUpFile":n+='"'.concat(a.path,'" was ').concat(a.success?"sucessfully":"not sucessfully"," attempted to looked up");break;case"LookedUpPackage":n+='package.json for package "'.concat(a.package,'" was ').concat(a.success?"sucessfully":"not sucessfully"," looked up").concat(a.definitelyTyped?" (found in definitely typed repo)":"");break;case"LoadedFromCache":n+='"'.concat(a.importPath,'" was loaded from cache');break;case"StoredToCache":n+='"'.concat(a.importPath,'" was stored to cache');break}n.endsWith(": ")&&(n=n.slice(void 0,-2)),(e=t.onUpdate)===null||e===void 0||e.call(t,a,n)};F.invokeUpdate=Ae;var T={};Object.defineProperty(T,"__esModule",{value:!0});T.RecursionDepth=void 0;var Re=function(){function a(t,e,n){e===void 0&&(e=0),n===void 0&&(n=0),this.options=t,this.fileRecursionDepth=e,this.packageRecursionDepth=n}return a.prototype.nextPackage=function(){return new a(this.options,this.fileRecursionDepth,this.packageRecursionDepth+1)},a.prototype.nextFile=function(){return new a(this.options,this.fileRecursionDepth+1,this.packageRecursionDepth)},a.prototype.same=function(){return new a(this.options,this.fileRecursionDepth,this.packageRecursionDepth)},a.prototype.shouldStop=function(){return this.options.fileRecursionDepth>0&&this.fileRecursionDepth>=this.options.fileRecursionDepth||this.options.packageRecursionDepth>0&&this.packageRecursionDepth>=this.options.packageRecursionDepth},a}();T.RecursionDepth=Re;var I=d&&d.__assign||function(){return I=Object.assign||function(a){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},I.apply(this,arguments)},Fe=d&&d.__createBinding||(Object.create?function(a,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(a,n,i)}:function(a,t,e,n){n===void 0&&(n=e),a[n]=t[e]}),Te=d&&d.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),Ie=d&&d.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(a!=null)for(var e in a)e!=="default"&&Object.prototype.hasOwnProperty.call(a,e)&&Fe(t,a,e);return Te(t,a),t},C=d&&d.__awaiter||function(a,t,e,n){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function c(u){try{o(n.next(u))}catch(f){s(f)}}function l(u){try{o(n.throw(u))}catch(f){s(f)}}function o(u){u.done?r(u.value):i(u.value).then(c,l)}o((n=n.apply(a,t||[])).next())})},O=d&&d.__generator||function(a,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(o){return function(u){return l([o,u])}}function l(o){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,i&&(r=o[0]&2?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[o[0]&2,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return e.label++,{value:o[1],done:!1};case 5:e.label++,i=o[1],o=[0];continue;case 7:o=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1],r=o;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(o);break}r[2]&&e.ops.pop(),e.trys.pop();continue}o=t.call(a,e)}catch(u){o=[6,u],i=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},G=d&&d.__values||function(a){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&a[t],n=0;if(e)return e.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},Ue=d&&d.__read||function(a,t){var e=typeof Symbol=="function"&&a[Symbol.iterator];if(!e)return a;var n=e.call(a),i,r=[],s;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(c){s={error:c}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(s)throw s.error}}return r};Object.defineProperty(E,"__esModule",{value:!0});E.ImportResolver=void 0;var Me=N,Ee=R,m=Ie(L),b=F,Ne=T,Le=function(){function a(t){var e,n;if(this.options=t,this.loadedFiles=[],this.dependencyParser=new Me.DependencyParser,this.cache=t.sourceCache,this.sourceResolver=t.sourceResolver,this.newImportsResolved=!1,this.monaco=t.monaco,t.preloadPackages&&t.versions)try{for(var i=G(Object.entries(t.versions)),r=i.next();!r.done;r=i.next()){var s=Ue(r.value,2),c=s[0],l=s[1];this.resolveImport({kind:"package",packageName:c,importPath:""},new Ne.RecursionDepth(this.options)).catch(function(o){console.error(o)})}}catch(o){e={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}return a.prototype.wereNewImportsResolved=function(){return this.newImportsResolved},a.prototype.resetNewImportsResolved=function(){this.newImportsResolved=!1},a.prototype.resolveImportsInFile=function(t,e,n){var i,r,s;return C(this,void 0,void 0,function(){var c,l,o,u,f,y,v,h;return O(this,function(p){switch(p.label){case 0:if(n.shouldStop())return[2];c=this.dependencyParser.parseDependencies(t,e),p.label=1;case 1:p.trys.push([1,8,9,10]),l=G(c),o=l.next(),p.label=2;case 2:if(o.done)return[3,7];u=o.value,p.label=3;case 3:return p.trys.push([3,5,,6]),[4,this.resolveImport(u,n)];case 4:return p.sent(),[3,6];case 5:return f=p.sent(),this.options.onError?(r=(i=this.options).onError)===null||r===void 0||r.call(i,(s=f.message)!==null&&s!==void 0?s:f):console.error(f),[3,6];case 6:return o=l.next(),[3,2];case 7:return[3,10];case 8:return y=p.sent(),v={error:y},[3,10];case 9:try{o&&!o.done&&(h=l.return)&&h.call(l)}finally{if(v)throw v.error}return[7];case 10:return[2]}})})},a.prototype.resolveImport=function(t,e){return C(this,void 0,void 0,function(){var n,i,r;return O(this,function(s){switch(s.label){case 0:if(n=this.hashImportResourcePath(t),this.loadedFiles.includes(n))return[2];switch(this.loadedFiles.push(n),i=t.kind,i){case"package":return[3,1];case"relative":return[3,5];case"relative-in-package":return[3,6]}return[3,8];case 1:return[4,this.resolveImportFromPackageRoot(t)];case 2:return r=s.sent(),r?[4,this.resolveImportInPackage(r,e.nextPackage().nextFile())]:[3,4];case 3:return[2,s.sent()];case 4:return[3,8];case 5:throw Error("Not implemented yet");case 6:return[4,this.resolveImportInPackage(t,e.nextFile())];case 7:return[2,s.sent()];case 8:return[2]}})})},a.prototype.resolveImportInPackage=function(t,e){return C(this,void 0,void 0,function(){var n,i,r;return O(this,function(s){switch(s.label){case 0:return[4,this.loadSourceFileContents(t)];case 1:return n=s.sent(),n?(i=n.source,r=n.at,this.createModel(i,this.monaco.Uri.parse(this.options.fileRootPath+m.join("node_modules/".concat(t.packageName),r))),[4,this.resolveImportsInFile(i,{kind:"relative-in-package",packageName:t.packageName,sourcePath:m.dirname(r),importPath:""},e)]):[3,3];case 2:s.sent(),s.label=3;case 3:return[2]}})})},a.prototype.resolveImportFromPackageRoot=function(t){var e,n,i,r,s,c,l,o,u;return C(this,void 0,void 0,function(){var f,y,v,h,p,_,k,g,w,_;return O(this,function(S){switch(S.label){case 0:return f={type:"LookedUpPackage",package:t.packageName,definitelyTyped:!1,success:!1},this.options.onlySpecifiedPackages&&!(!((e=this.versions)===null||e===void 0)&&e[t.packageName])&&!(!((n=this.versions)===null||n===void 0)&&n["@types/"+t.packageName])?((0,b.invokeUpdate)(f,this.options),[2]):(y=(r=(i=t.importPath)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0>0,v=y?"/".concat(t.importPath):"",[4,this.resolvePackageJson(t.packageName,(s=this.versions)===null||s===void 0?void 0:s[t.packageName],y?t.importPath:void 0)]);case 1:return h=S.sent(),!h&&y?[4,this.resolvePackageJson(t.packageName,(c=this.versions)===null||c===void 0?void 0:c[t.packageName])]:[3,3];case 2:h=S.sent(),v="",S.label=3;case 3:return h?(p=JSON.parse(h),p.typings||p.types?(_=p.typings||p.types,this.createModel(h,this.monaco.Uri.parse("".concat(this.options.fileRootPath,"node_modules/").concat(t.packageName).concat(v,"/package.json"))),(0,b.invokeUpdate)({type:"LookedUpPackage",package:t.packageName,definitelyTyped:!1,success:!0},this.options),this.setVersion(t.packageName,p.version),[2,{kind:"relative-in-package",packageName:t.packageName,sourcePath:"",importPath:m.join((l=t.importPath)!==null&&l!==void 0?l:"",_.startsWith("./")?_.slice(2):_)}]):[3,4]):[3,7];case 4:return k="@types/".concat(t.packageName.startsWith("@")?t.packageName.slice(1).replace(/\//,"__"):t.packageName),[4,this.resolvePackageJson(k,(o=this.versions)===null||o===void 0?void 0:o[k])];case 5:if(g=S.sent(),g){if(w=JSON.parse(g),w.typings||w.types)return _=w.typings||w.types,this.createModel(g,this.monaco.Uri.parse("".concat(this.options.fileRootPath,"node_modules/").concat(k,"/package.json"))),(0,b.invokeUpdate)({type:"LookedUpPackage",package:k,definitelyTyped:!0,success:!0},this.options),this.setVersion(k,w.version),[2,{kind:"relative-in-package",packageName:k,sourcePath:"",importPath:m.join((u=t.importPath)!==null&&u!==void 0?u:"",_.startsWith("./")?_.slice(2):_)}];(0,b.invokeUpdate)(f,this.options)}else(0,b.invokeUpdate)(f,this.options);S.label=6;case 6:return[3,8];case 7:(0,b.invokeUpdate)(f,this.options),S.label=8;case 8:return[2]}})})},a.prototype.loadSourceFileContents=function(t){return C(this,void 0,void 0,function(){var e,n,i,r,s,h,c,l,o,v,h,u,f,y,v,h,p,k;return O(this,function(g){switch(g.label){case 0:return e=m.join(t.packageName,t.sourcePath,t.importPath),n={type:"LookedUpTypeFile",path:e,definitelyTyped:!1,success:!1},i=t.packageName,r=this.getVersion(t.packageName),s=[".d.ts","/index.d.ts",".ts",".tsx","/index.ts","/index.tsx"],s.map(function(w){return t.importPath.endsWith(w)}).reduce(function(w,_){return w||_},!1)?[4,this.resolveSourceFile(i,r,m.join(t.sourcePath,t.importPath))]:[3,2];case 1:return h=g.sent(),h?[2,{source:h,at:m.join(t.sourcePath,t.importPath)}]:[3,9];case 2:g.trys.push([2,7,8,9]),c=G(s),l=c.next(),g.label=3;case 3:return l.done?[3,6]:(o=l.value,v=m.join(t.sourcePath,t.importPath)+o,[4,this.resolveSourceFile(i,r,v)]);case 4:if(h=g.sent(),(0,b.invokeUpdate)({type:"AttemptedLookUpFile",path:m.join(i,v),success:!!h},this.options),h)return(0,b.invokeUpdate)({type:"LookedUpTypeFile",path:m.join(i,v),success:!0},this.options),[2,{source:h,at:v}];g.label=5;case 5:return l=c.next(),[3,3];case 6:return[3,9];case 7:return u=g.sent(),p={error:u},[3,9];case 8:try{l&&!l.done&&(k=c.return)&&k.call(c)}finally{if(p)throw p.error}return[7];case 9:return[4,this.resolvePackageJson(i,r,m.join(t.sourcePath,t.importPath))];case 10:return f=g.sent(),f?(y=JSON.parse(f).types,y?(v=m.join(t.sourcePath,t.importPath,y),[4,this.resolveSourceFile(i,r,v)]):[3,12]):[3,12];case 11:if(h=g.sent(),h)return(0,b.invokeUpdate)({type:"LookedUpTypeFile",path:m.join(i,v),success:!0},this.options),[2,{source:h,at:v}];g.label=12;case 12:return(0,b.invokeUpdate)(n,this.options),[2,null]}})})},a.prototype.getVersion=function(t){var e;return(e=this.versions)===null||e===void 0?void 0:e[t]},a.prototype.setVersions=function(t){var e,n;this.versions=t,(n=(e=this.options).onUpdateVersions)===null||n===void 0||n.call(e,t)},a.prototype.setVersion=function(t,e){var n;this.setVersions(I(I({},this.versions),(n={},n[t]=e,n)))},a.prototype.createModel=function(t,e){e=e.with({path:e.path.replace("@types/","")}),this.monaco.editor.getModel(e)||(this.monaco.editor.createModel(t,"typescript",e),this.newImportsResolved=!0)},a.prototype.hashImportResourcePath=function(t){return(0,Ee.importResourcePathToString)(t)},a.prototype.resolvePackageJson=function(t,e,n){return C(this,void 0,void 0,function(){var i,r,s,c;return O(this,function(l){switch(l.label){case 0:return i=m.join(t+(e?"@".concat(e):""),n??"","package.json"),r=!1,s=void 0,this.cache.isFileAvailable?[4,this.cache.isFileAvailable(i)]:[3,2];case 1:return r=l.sent(),[3,4];case 2:return[4,this.cache.getFile(i)];case 3:s=l.sent(),r=s!==void 0,l.label=4;case 4:return r?s==null?[3,5]:(c=s,[3,7]):[3,8];case 5:return[4,this.cache.getFile(i)];case 6:c=l.sent(),l.label=7;case 7:return[2,c];case 8:return[4,this.sourceResolver.resolvePackageJson(t,e,n)];case 9:return s=l.sent(),s&&this.cache.storeFile(i,s),[2,s]}})})},a.prototype.resolveSourceFile=function(t,e,n){return C(this,void 0,void 0,function(){var i,r,s,c;return O(this,function(l){switch(l.label){case 0:return i=m.join(t+(e?"@".concat(e):""),n),r=!1,s=void 0,this.cache.isFileAvailable?[4,this.cache.isFileAvailable(i)]:[3,2];case 1:return r=l.sent(),[3,4];case 2:return[4,this.cache.getFile(i)];case 3:s=l.sent(),r=s!==void 0,l.label=4;case 4:return r?((0,b.invokeUpdate)({type:"LoadedFromCache",importPath:i},this.options),s==null?[3,5]:(c=s,[3,7])):[3,8];case 5:return[4,this.cache.getFile(i)];case 6:c=l.sent(),l.label=7;case 7:return[2,c];case 8:return[4,this.sourceResolver.resolveSourceFile(t,e,n)];case 9:return s=l.sent(),s&&((0,b.invokeUpdate)({type:"StoredToCache",importPath:i},this.options),this.cache.storeFile(i,s)),[2,s]}})})},a}();E.ImportResolver=Le;var xe=se(ye),D=d&&d.__assign||function(){return D=Object.assign||function(a){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},D.apply(this,arguments)},$e=d&&d.__createBinding||(Object.create?function(a,t,e,n){n===void 0&&(n=e);var i=Object.getOwnPropertyDescriptor(t,e);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(a,n,i)}:function(a,t,e,n){n===void 0&&(n=e),a[n]=t[e]}),Ve=d&&d.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),te=d&&d.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(a!=null)for(var e in a)e!=="default"&&Object.prototype.hasOwnProperty.call(a,e)&&$e(t,a,e);return Ve(t,a),t},B=d&&d.__awaiter||function(a,t,e,n){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function c(u){try{o(n.next(u))}catch(f){s(f)}}function l(u){try{o(n.throw(u))}catch(f){s(f)}}function o(u){u.done?r(u.value):i(u.value).then(c,l)}o((n=n.apply(a,t||[])).next())})},K=d&&d.__generator||function(a,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(o){return function(u){return l([o,u])}}function l(o){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,i&&(r=o[0]&2?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[o[0]&2,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return e.label++,{value:o[1],done:!1};case 5:e.label++,i=o[1],o=[0];continue;case 7:o=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1],r=o;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(o);break}r[2]&&e.ops.pop(),e.trys.pop();continue}o=t.call(a,e)}catch(u){o=[6,u],i=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},Je=d&&d.__values||function(a){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&a[t],n=0;if(e)return e.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(U,"__esModule",{value:!0});U.AutoTypings=void 0;var Ge=M,Be=A,Ke=E,We=te(L),Xe=te(xe),Y=F,ze=T,qe=function(){function a(t,e){var n=this;this.editor=t,this.options=e,this.disposables=[],this.importResolver=new Ke.ImportResolver(e);var i=t.onDidChangeModelContent(function(r){n.debouncedResolveContents()});this.disposables.push(i),this.resolveContents(),e.dontAdaptEditorOptions||e.monaco.languages.typescript.typescriptDefaults.setCompilerOptions(D(D({},e.monaco.languages.typescript.typescriptDefaults.getCompilerOptions()),{moduleResolution:e.monaco.languages.typescript.ModuleResolutionKind.NodeJs,allowSyntheticDefaultImports:!0,rootDir:e.fileRootPath}))}return a.create=function(t,e){var n,i;e?.shareCache&&e.sourceCache&&!a.sharedCache&&(a.sharedCache=e.sourceCache);var r=(n=e?.monaco)!==null&&n!==void 0?n:Xe;if(!r)throw new Error("monacoInstance not found, you can specify the monaco instance via options.monaco");return new a(t,D(D({fileRootPath:"inmemory://model/",onlySpecifiedPackages:!1,preloadPackages:!1,shareCache:!1,dontAdaptEditorOptions:!1,dontRefreshModelValueAfterResolvement:!1,sourceCache:(i=a.sharedCache)!==null&&i!==void 0?i:new Ge.DummySourceCache,sourceResolver:new Be.UnpkgSourceResolver,debounceDuration:4e3,fileRecursionDepth:10,packageRecursionDepth:3},e),{monaco:r}))},a.prototype.dispose=function(){var t,e;try{for(var n=Je(this.disposables),i=n.next();!i.done;i=n.next()){var r=i.value;r.dispose()}}catch(s){t={error:s}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},a.prototype.setVersions=function(t){this.importResolver.setVersions(t),this.options.versions=t},a.prototype.clearCache=function(){return B(this,void 0,void 0,function(){return K(this,function(t){switch(t.label){case 0:return[4,this.options.sourceCache.clear()];case 1:return t.sent(),[2]}})})},a.prototype.debouncedResolveContents=function(){var t=this;this.isResolving||((0,Y.invokeUpdate)({type:"CodeChanged"},this.options),this.options.debounceDuration<=0?this.resolveContents():(this.debounceTimer!==void 0&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(function(){return B(t,void 0,void 0,function(){return K(this,function(e){switch(e.label){case 0:return[4,this.resolveContents()];case 1:return e.sent(),this.debounceTimer=void 0,[2]}})})},this.options.debounceDuration)))},a.prototype.resolveContents=function(){var t;return B(this,void 0,void 0,function(){var e,n,i,r;return K(this,function(s){switch(s.label){case 0:if(this.isResolving=!0,(0,Y.invokeUpdate)({type:"ResolveNewImports"},this.options),e=this.editor.getModel(),!e)throw Error("No model");n=e.getLinesContent(),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,this.importResolver.resolveImportsInFile(n.join(`
`),We.dirname(e.uri.toString()),new ze.RecursionDepth(this.options))];case 2:return s.sent(),[3,4];case 3:if(i=s.sent(),this.options.onError)this.options.onError((t=i.message)!==null&&t!==void 0?t:i);else throw i;return[3,4];case 4:return this.importResolver.wereNewImportsResolved()&&(this.options.dontRefreshModelValueAfterResolvement||(r=this.editor.getPosition(),e.setValue(e.getValue()),r&&this.editor.setPosition(r)),this.importResolver.resetNewImportsResolved()),this.isResolving=!1,[2]}})})},a}();U.AutoTypings=qe;var x={},W=d&&d.__awaiter||function(a,t,e,n){function i(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function c(u){try{o(n.next(u))}catch(f){s(f)}}function l(u){try{o(n.throw(u))}catch(f){s(f)}}function o(u){u.done?r(u.value):i(u.value).then(c,l)}o((n=n.apply(a,t||[])).next())})},X=d&&d.__generator||function(a,t){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(o){return function(u){return l([o,u])}}function l(o){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,i&&(r=o[0]&2?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[o[0]&2,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return e.label++,{value:o[1],done:!1};case 5:e.label++,i=o[1],o=[0];continue;case 7:o=e.ops.pop(),e.trys.pop();continue;default:if(r=e.trys,!(r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){e=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){e.label=o[1];break}if(o[0]===6&&e.label<r[1]){e.label=r[1],r=o;break}if(r&&e.label<r[2]){e.label=r[2],e.ops.push(o);break}r[2]&&e.ops.pop(),e.trys.pop();continue}o=t.call(a,e)}catch(u){o=[6,u],i=0}finally{n=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(x,"__esModule",{value:!0});x.LocalStorageCache=void 0;var He=function(){function a(){}return a.prototype.getFile=function(t){var e;return W(this,void 0,void 0,function(){return X(this,function(n){return[2,(e=localStorage.getItem(a.LOCALSTORAGE_PREFIX+t))!==null&&e!==void 0?e:void 0]})})},a.prototype.storeFile=function(t,e){return W(this,void 0,void 0,function(){return X(this,function(n){return localStorage.setItem(a.LOCALSTORAGE_PREFIX+t,e),[2]})})},a.prototype.clear=function(){return W(this,void 0,void 0,function(){var t,e;return X(this,function(n){for(t=0;t<localStorage.length;t++)e=localStorage.key(t),e?.startsWith(a.LOCALSTORAGE_PREFIX)&&localStorage.removeItem(e);return[2]})})},a.LOCALSTORAGE_PREFIX="__autotyper_cache_",a}();x.LocalStorageCache=He;var re={};Object.defineProperty(re,"__esModule",{value:!0});var ne={};Object.defineProperty(ne,"__esModule",{value:!0});var ae={};Object.defineProperty(ae,"__esModule",{value:!0});var ie={};Object.defineProperty(ie,"__esModule",{value:!0});(function(a){var t=d&&d.__createBinding||(Object.create?function(n,i,r,s){s===void 0&&(s=r);var c=Object.getOwnPropertyDescriptor(i,r);(!c||("get"in c?!i.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return i[r]}}),Object.defineProperty(n,s,c)}:function(n,i,r,s){s===void 0&&(s=r),n[s]=i[r]}),e=d&&d.__exportStar||function(n,i){for(var r in n)r!=="default"&&!Object.prototype.hasOwnProperty.call(i,r)&&t(i,n,r)};Object.defineProperty(a,"__esModule",{value:!0}),e(U,a),e(R,a),e(x,a),e(re,a),e(ne,a),e(ae,a),e(ie,a),e(A,a)})(q);const rt=a=>{const t=ee(a.value);return z(()=>a.value,e=>{t.value=e}),t},nt=(a,t,e,n)=>{const{unSaveConfirm:i=!0,...r}=n;pe(i,()=>!1,"\u662F\u5426\u786E\u5B9A\u79BB\u5F00\uFF1F"),he();const s=ee(!1),c={editor:null,module:null,loaded:null,Snip:Z({setup(){return()=>s.value?null:Q(ve,{description:"Monaco \u4F53\u79EF\u8F83\u5927\u8010\u5FC3\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210..."})}})},{isDark:l}=ce(de);return ue(t),c.loaded=s,z(()=>t.value,o=>{const u=c.editor;u&&o!=u.getValue()&&u.setValue(o)}),z(()=>l.value,o=>{c.editor.updateOptions({theme:o?"dark":"light"})}),le(()=>{fe(()=>import("./editor.main-759b9211.js").then(function(o){return o.e}),["js/editor.main-759b9211.js","assets/editor.main.2109f3ac.css"]).then(o=>{const u={...r,value:t.value,theme:l.value?"dark":"light",automaticLayout:!0,cursorStyle:"line-thin",minimap:{enabled:!1},tabSize:2,fontFamily:"operator mono, fira code, monaco, monospace",fontSize:14};u.language==="typescript"&&Object.assign(u,{model:o.editor.createModel(t.value,"typescript")}),c.editor=o.editor.create(a.value,u),q.AutoTypings.create(c.editor,{sourceCache:new q.LocalStorageCache}),c.module=o,["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(f=>{const y=c.editor;y[f](()=>{const v=y.getValue();e(v)})}),c.editor.addAction({id:"trigger-suggestion",label:"Trigger Suggestion",keybindings:[o.KeyMod.Shift|o.KeyCode.Space],run:()=>{c.editor.trigger("","editor.action.triggerSuggest",{})}}),c.editor.onKeyDown(function(f){(f.ctrlKey||f.metaKey)&&f.keyCode===o.KeyCode.KeyS&&f.preventDefault()}),c.editor.onKeyUp(function(f){(f.ctrlKey||f.metaKey)&&f.keyCode===o.KeyCode.KeyS&&f.preventDefault()}),s.value=!0})}),c};export{tt as T,nt as a,L as p,rt as u};
