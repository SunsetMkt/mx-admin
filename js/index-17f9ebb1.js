import{Q as v,bi as I,w as o,aR as m,x as w}from"./index-62e99b2b.js";function x(r,f,i){var u;const t=v(r,null);if(t===null)return;const s=(u=I())===null||u===void 0?void 0:u.proxy;o(i,d),d(i.value),m(()=>{d(void 0,i.value)});function d(n,e){const a=t[f];e!==void 0&&c(a,e),n!==void 0&&l(a,n)}function c(n,e){n[e]||(n[e]=[]),n[e].splice(n[e].findIndex(a=>a===s),1)}function l(n,e){n[e]||(n[e]=[]),~n[e].findIndex(a=>a===s)||n[e].push(s)}}function j(r,f,i){if(!f)return r;const u=w(r.value);let t=null;return o(r,s=>{t!==null&&window.clearTimeout(t),s===!0?i&&!i.value?u.value=!0:t=window.setTimeout(()=>{u.value=!0},f):u.value=!1}),u}export{x as a,j as u};