import{S as g,i as v,s as h,w as f,x as m,y as c,q as p,o as $,B as _,N as k,k as N,e as C,t as E,m as T,c as w,a as I,h as q,d as u,b as L,g as d,M as z}from"../../chunks/index-b7ec6eb7.js";import{p as D}from"../../chunks/stores-5fddffdd.js";import{I as F}from"../../chunks/index-5902cb5b.js";import{N as O,n as S,a as V,T as y}from"../../chunks/index-009a97a3.js";import{r as B,d as M}from"../../chunks/route-for-e4b4dbdd.js";import"../../chunks/index-3b47d797.js";function W(a){let e,s,t;return s=new F({props:{isCloud:a[0],name:"download",scale:1}}),{c(){e=C("div"),f(s.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var o=I(e);m(s.$$.fragment,o),o.forEach(u),this.h()},h(){L(e,"class","nav-icon svelte-1bthrze")},m(n,o){d(n,e,o),c(s,e,null),t=!0},p(n,o){const r={};o&1&&(r.isCloud=n[0]),s.$set(r)},i(n){t||(p(s.$$.fragment,n),t=!0)},o(n){$(s.$$.fragment,n),t=!1},d(n){n&&u(e),_(s)}}}function j(a){let e,s,t,n,o;return e=new y({props:{right:!0,hide:a[2],text:"Import",$$slots:{default:[W]},$$scope:{ctx:a}}}),{c(){f(e.$$.fragment),s=N(),t=C("div"),n=E("Import"),this.h()},l(r){m(e.$$.fragment,r),s=T(r),t=w(r,"DIV",{class:!0});var i=I(t);n=q(i,"Import"),i.forEach(u),this.h()},h(){L(t,"class","nav-title svelte-1bthrze")},m(r,i){c(e,r,i),d(r,s,i),d(r,t,i),z(t,n),o=!0},p(r,i){const l={};i&4&&(l.hide=r[2]),i&9&&(l.$$scope={dirty:i,ctx:r}),e.$set(l)},i(r){o||(p(e.$$.fragment,r),o=!0)},o(r){$(e.$$.fragment,r),o=!1},d(r){_(e,r),r&&u(s),r&&u(t)}}}function A(a){let e,s;return e=new V({props:{link:a[1].import,isCloud:a[0],$$slots:{default:[j]},$$scope:{ctx:a}}}),{c(){f(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){c(e,t,n),s=!0},p(t,n){const o={};n&2&&(o.link=t[1].import),n&1&&(o.isCloud=t[0]),n&13&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function G(a){let e,s;return e=new O({props:{isCloud:a[0],linkList:a[1],$$slots:{top:[A]},$$scope:{ctx:a}}}),{c(){f(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){c(e,t,n),s=!0},p(t,[n]){const o={};n&1&&(o.isCloud=t[0]),n&2&&(o.linkList=t[1]),n&15&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function H(a,e,s){let t;k(a,S,r=>s(2,t=r));let{isCloud:n}=e,{linkList:o}=e;return a.$$set=r=>{"isCloud"in r&&s(0,n=r.isCloud),"linkList"in r&&s(1,o=r.linkList)},[n,o,t]}class J extends g{constructor(e){super(),v(this,e,H,G,h,{isCloud:0,linkList:1})}}function K(a){let e,s;return e=new J({props:{linkList:a[0],isCloud:a[1]}}),{c(){f(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,n){c(e,t,n),s=!0},p(t,[n]){const o={};n&1&&(o.linkList=t[0]),e.$set(o)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}function P(a,e,s){let t,n,o;k(a,D,b=>s(5,o=b));var r,i;const{isCloud:l}=o.stuff.settings.runtimeEnvironment;return a.$$.update=()=>{a.$$.dirty&44&&s(4,t=s(3,i=s(2,r=o.stuff)===null||r===void 0?void 0:r.settings)===null||i===void 0?void 0:i.defaultNamespace),a.$$.dirty&16&&s(0,n={home:B({namespace:t}),import:M({importType:"events"})})},[n,l,r,i,t,o]}class x extends g{constructor(e){super(),v(this,e,P,K,h,{})}}export{x as default};
