import{cm as n,bV as l}from"./index-62e99b2b.js";var g="Expected a function";function d(t,a,r){var e=!0,i=!0;if(typeof t!="function")throw new TypeError(g);return l(r)&&(e="leading"in r?!!r.leading:e,i="trailing"in r?!!r.trailing:i),n(t,a,{leading:e,maxWait:a,trailing:i})}export{d as t};