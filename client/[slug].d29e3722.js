import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c,b as l,f as h,g as u,h as p,j as d,k as f,A as m,n as v}from"./client.4a4aa3b2.js";function g(t){let s,a,g,j,b,w,x=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(x),b=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-iu3vwn"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=h(g);j=u(s,x),s.forEach(r),b=c(t),w=l(t,"DIV",{class:!0}),h(w).forEach(r),this.h()},h(){p(w,"class","content svelte-rp6d9m")},m(t,s){d(t,a,s),d(t,g,s),f(g,j),d(t,b,s),d(t,w,s),w.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&x!==(x=t[0].title+"")&&m(j,x),1&a&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(b),t&&r(w)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function b(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,b,g,a,{post:0})}}export{j as preload};
