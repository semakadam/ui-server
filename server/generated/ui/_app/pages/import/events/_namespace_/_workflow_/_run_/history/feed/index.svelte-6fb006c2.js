import{S as u,i as c,s as f,w as g,x as _,y,q as l,o as E,B as d,N as s}from"../../../../../../../../chunks/index-604742bf.js";import{p as v}from"../../../../../../../../chunks/stores-810822a9.js";import{i as h,a as b}from"../../../../../../../../chunks/import-events-fe941759.js";import{E as q}from"../../../../../../../../chunks/event-summary-42e5a8e8.js";import"../../../../../../../../chunks/index-c9e619a8.js";import"../../../../../../../../chunks/event-view-509b3c08.js";import"../../../../../../../../chunks/persist-store-e5ba5089.js";import"../../../../../../../../chunks/is-function-b969a126.js";import"../../../../../../../../chunks/version-check-9d9f9783.js";import"../../../../../../../../chunks/settings-0aa2906c.js";import"../../../../../../../../chunks/pagination-cc8a048a.js";import"../../../../../../../../chunks/index-0574ae1f.js";import"../../../../../../../../chunks/filter-select-9b8307b8.js";import"../../../../../../../../chunks/update-query-parameters-380a438e.js";import"../../../../../../../../chunks/navigation-6709cf39.js";import"../../../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../../../chunks/select-4556bdf3.js";import"../../../../../../../../chunks/index-69aa65a3.js";import"../../../../../../../../chunks/get-event-categorization-8a63628f.js";import"../../../../../../../../chunks/time-format-1e4f6616.js";import"../../../../../../../../chunks/format-date-919f4714.js";import"../../../../../../../../chunks/to-duration-271d3946.js";import"../../../../../../../../chunks/format-camel-case-abb2903d.js";import"../../../../../../../../chunks/route-for-93451b94.js";import"../../../../../../../../chunks/code-block-03609e84.js";import"../../../../../../../../chunks/copy-to-clipboard-8832075c.js";import"../../../../../../../../chunks/link-74db22ab.js";import"../../../../../../../../chunks/copyable-6f962ac2.js";import"../../../../../../../../chunks/empty-state-c50aaf3c.js";function w(o){let r,e;return r=new q({props:{items:o[0],groups:o[1]}}),{c(){g(r.$$.fragment)},l(t){_(r.$$.fragment,t)},m(t,p){y(r,t,p),e=!0},p(t,[p]){const i={};p&1&&(i.items=t[0]),p&2&&(i.groups=t[1]),r.$set(i)},i(t){e||(l(r.$$.fragment,t),e=!0)},o(t){E(r.$$.fragment,t),e=!1},d(t){d(r,t)}}}function G(o,r,e){let t,p,i,n,a;return s(o,h,m=>e(3,i=m)),s(o,v,m=>e(4,n=m)),s(o,b,m=>e(1,a=m)),o.$$.update=()=>{o.$$.dirty&16&&e(2,t=n.url.searchParams.get("category")),o.$$.dirty&12&&e(0,p=i.filter(m=>t?m.category===t:m))},[p,a,t,i,n]}class tt extends u{constructor(r){super(),c(this,r,G,w,f,{})}}export{tt as default};