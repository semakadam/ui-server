import{S as i,i as r,s as c,j as u,m,o as f,x as d,u as l,v as p}from"../../../../../../../../chunks/vendor-8450f4eb.js";import{E as v}from"../../../../../../../../chunks/event-details-536afca1.js";import"../../../../../../../../chunks/format-camel-case-8b7e013d.js";import"../../../../../../../../chunks/code-block-75ba3175.js";function _(a){let e,n;return e=new v({props:{attributes:a[0]}}),{c(){u(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,s){f(e,t,s),n=!0},p(t,[s]){const o={};s&1&&(o.attributes=t[0]),e.$set(o)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){l(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}async function j({stuff:a,page:e}){const{workflow:n}=a;return{props:{event:n.pendingActivities.find(s=>s.activityId===e.params.id)}}}function $(a,e,n){let{event:t}=e;return a.$$set=s=>{"event"in s&&n(0,t=s.event)},[t]}class w extends i{constructor(e){super();r(this,e,$,_,c,{event:0})}}export{w as default,j as load};