import{S as a,i as u,s as c,w as f,x as g,y as _,q as l,o as y,B as E,O as s}from"../../../../../chunks/index-733079a8.js";import{p as $}from"../../../../../chunks/stores-1e95b62c.js";import{a as d}from"../../../../../chunks/import-events-3a3bdc90.js";import{E as h}from"../../../../../chunks/event-summary-9f00a450.js";import"../../../../../chunks/index-d95e2ca5.js";import"../../../../../chunks/pagination-d3197b47.js";import"../../../../../chunks/index.es-b93730d8.js";import"../../../../../chunks/time-format-416f6d08.js";import"../../../../../chunks/navigation-3f1ea447.js";import"../../../../../chunks/singletons-d1fb5791.js";import"../../../../../chunks/select-e2ca0e5a.js";import"../../../../../chunks/persist-store-bb92bb0b.js";import"../../../../../chunks/index-3578a8fa.js";import"../../../../../chunks/get-event-categorization-b2bce139.js";import"../../../../../chunks/index-a8ee0a5c.js";import"../../../../../chunks/format-date-4b1bc9ef.js";import"../../../../../chunks/format-camel-case-c8f5e0aa.js";import"../../../../../chunks/route-for-46a9c4b7.js";import"../../../../../chunks/code-block-9bb6a382.js";import"../../../../../chunks/link-089a4975.js";import"../../../../../chunks/copyable-a8d8233c.js";import"../../../../../chunks/event-view-type-a67056be.js";import"../../../../../chunks/empty-state-091dd153.js";function v(o){let r,e;return r=new h({props:{items:o[1],groups:o[0],compact:!0}}),{c(){f(r.$$.fragment)},l(t){g(r.$$.fragment,t)},m(t,m){_(r,t,m),e=!0},p(t,[m]){const p={};m&2&&(p.items=t[1]),m&1&&(p.groups=t[0]),r.$set(p)},i(t){e||(l(r.$$.fragment,t),e=!0)},o(t){y(r.$$.fragment,t),e=!1},d(t){E(r,t)}}}function G(o,r,e){let t,m,p,n;return s(o,d,i=>e(0,p=i)),s(o,$,i=>e(3,n=i)),o.$$.update=()=>{o.$$.dirty&8&&e(2,t=n.url.searchParams.get("category")),o.$$.dirty&5&&e(1,m=p.filter(i=>t?i.category===t:i))},[p,m,t,n]}class R extends a{constructor(r){super(),u(this,r,G,v,c,{})}}export{R as default};