import{S as A,i as D,s as F,w as C,k as _,e as d,t as P,x as N,m as h,c as b,a as v,h as q,d as p,b as x,y as B,g as y,M as l,q as H,o as I,B as O,N as M}from"../../chunks/index-604742bf.js";import{f as T}from"../../chunks/settings-service-4a62d132.js";import{m as U}from"../../chunks/route-for-93451b94.js";import{B as V}from"../../chunks/button-0ce95595.js";import{p as j}from"../../chunks/stores-810822a9.js";import{g as z}from"../../chunks/navigation-6709cf39.js";import{N as G,H as J}from"../../chunks/hamburger-header-0b9d605e.js";import"../../chunks/route-for-api-9b8f6a57.js";import"../../chunks/index-c9e619a8.js";import"../../chunks/notifications-cfed8e58.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/is-function-b969a126.js";import"../../chunks/settings-0aa2906c.js";import"../../chunks/index-0574ae1f.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/data-encoder-status-1462e7dc.js";import"../../chunks/data-converter-config-8cf2e48e.js";import"../../chunks/persist-store-e5ba5089.js";import"../../chunks/is-http-3668e20a.js";import"../../chunks/tooltip-4b9b03e7.js";import"../../chunks/copyable-6f962ac2.js";import"../../chunks/copy-to-clipboard-8832075c.js";import"../../chunks/modal-0d6320a7.js";import"../../chunks/index-69aa65a3.js";function K(i){let e;return{c(){e=P("Continue to SSO")},l(n){e=q(n,"Continue to SSO")},m(n,r){y(n,e,r)},d(n){n&&p(e)}}}function Q(i){let e,n,r,c,a,o,S,k,f,w,E,u,m,$;return e=new G({props:{href:"/",user:void 0}}),r=new J({props:{href:"/",user:void 0}}),m=new V({props:{classes:"",login:!0,name:"lock",$$slots:{default:[K]},$$scope:{ctx:i}}}),m.$on("click",i[2]),{c(){C(e.$$.fragment),n=_(),C(r.$$.fragment),c=_(),a=d("section"),o=d("h1"),S=P("Welcome back."),k=_(),f=d("p"),w=P("Let's get you signed in."),E=_(),u=d("div"),C(m.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),n=h(t),N(r.$$.fragment,t),c=h(t),a=b(t,"SECTION",{class:!0});var s=v(a);o=b(s,"H1",{class:!0});var g=v(o);S=q(g,"Welcome back."),g.forEach(p),k=h(s),f=b(s,"P",{class:!0});var L=v(f);w=q(L,"Let's get you signed in."),L.forEach(p),E=h(s),u=b(s,"DIV",{class:!0});var W=v(u);N(m.$$.fragment,W),W.forEach(p),s.forEach(p),this.h()},h(){x(o,"class","text-8xl font-semibold"),x(f,"class","my-7"),x(u,"class","mx-auto"),x(a,"class","my-[20vh] text-center")},m(t,s){B(e,t,s),y(t,n,s),B(r,t,s),y(t,c,s),y(t,a,s),l(a,o),l(o,S),l(a,k),l(a,f),l(f,w),l(a,E),l(a,u),B(m,u,null),$=!0},p(t,[s]){const g={};s&8&&(g.$$scope={dirty:s,ctx:t}),m.$set(g)},i(t){$||(H(e.$$.fragment,t),H(r.$$.fragment,t),H(m.$$.fragment,t),$=!0)},o(t){I(e.$$.fragment,t),I(r.$$.fragment,t),I(m.$$.fragment,t),$=!1},d(t){O(e,t),t&&p(n),O(r,t),t&&p(c),t&&p(a),O(m)}}}const xt=async function({fetch:i}){const e=await T(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function R(i,e,n){let r;M(i,j,o=>n(1,r=o));let{settings:c}=e;const a=()=>{z(U({settings:c,searchParams:r.url.searchParams,originUrl:r.url.origin}))};return i.$$set=o=>{"settings"in o&&n(0,c=o.settings)},[c,r,a]}class yt extends A{constructor(e){super(),D(this,e,R,Q,F,{settings:0})}}export{yt as default,xt as load};
