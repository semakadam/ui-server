import{S as m,i,s as a,w as p,x as u,y as c,q as g,o as f,B as l}from"../../../../../../../../chunks/index-733079a8.js";import{b as _}from"../../../../../../../../chunks/get-event-categorization-b2bce139.js";import{E as y}from"../../../../../../../../chunks/event-summary-9f00a450.js";import"../../../../../../../../chunks/pagination-d3197b47.js";import"../../../../../../../../chunks/stores-1e95b62c.js";import"../../../../../../../../chunks/index-d95e2ca5.js";import"../../../../../../../../chunks/index.es-b93730d8.js";import"../../../../../../../../chunks/time-format-416f6d08.js";import"../../../../../../../../chunks/navigation-3f1ea447.js";import"../../../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../../../chunks/select-e2ca0e5a.js";import"../../../../../../../../chunks/persist-store-bb92bb0b.js";import"../../../../../../../../chunks/index-3578a8fa.js";import"../../../../../../../../chunks/index-a8ee0a5c.js";import"../../../../../../../../chunks/format-date-4b1bc9ef.js";import"../../../../../../../../chunks/format-camel-case-c8f5e0aa.js";import"../../../../../../../../chunks/route-for-46a9c4b7.js";import"../../../../../../../../chunks/code-block-9bb6a382.js";import"../../../../../../../../chunks/link-089a4975.js";import"../../../../../../../../chunks/copyable-a8d8233c.js";import"../../../../../../../../chunks/event-view-type-a67056be.js";import"../../../../../../../../chunks/empty-state-091dd153.js";function v(n){let e,r;return e=new y({props:{items:n[0],groups:n[1],expandAll:!0}}),{c(){p(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,o){c(e,t,o),r=!0},p(t,[o]){const s={};o&1&&(s.items=t[0]),o&2&&(s.groups=t[1]),e.$set(s)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){l(e,t)}}}const L=async function({stuff:n,url:e}){const r=e.searchParams.get("category"),t=_(n.events,r),o=n.eventGroups;return{props:{items:t,groups:o}}};function d(n,e,r){let{items:t}=e,{groups:o}=e;return n.$$set=s=>{"items"in s&&r(0,t=s.items),"groups"in s&&r(1,o=s.groups)},[t,o]}class M extends m{constructor(e){super(),i(this,e,d,v,a,{items:0,groups:1})}}export{M as default,L as load};