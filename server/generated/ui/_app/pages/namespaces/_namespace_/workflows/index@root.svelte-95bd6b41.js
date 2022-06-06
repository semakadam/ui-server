import{S as Z,i as x,s as ee,e as N,t as j,k as C,w as S,c as F,a as L,h as D,d as h,m as A,x as q,b,g as v,M as I,y as E,Y as de,T as Y,j as ce,q as $,o as w,B as R,G as De,V as we,n as z,p as G,N as B,ap as Ie,a4 as Q,a5 as U,a3 as V,l as O,_ as We,ag as Oe,aj as Be,E as te}from"../../../../chunks/index-1b46dd35.js";import{b as Qe,t as Pe}from"../../../../chunks/workflow-status-eb4a900b.js";import{j as Ue,k as Ve,l as Me,m as He,n as ze,o as Ge,p as Ke,q as Ye,e as J}from"../../../../chunks/format-date-188b28af.js";import{p as ne}from"../../../../chunks/stores-8b8b27f9.js";import{t as fe}from"../../../../chunks/time-format-c54fc24a.js";import{d as me,r as Je,w as Ce}from"../../../../chunks/index-92abd382.js";import{w as Xe}from"../../../../chunks/with-loading-22689bcc.js";import{E as Ze}from"../../../../chunks/empty-state-193066dc.js";import{u as oe,P as xe}from"../../../../chunks/pagination-a3918f7f.js";import{j as et,S as tt,W as nt,a as rt}from"../../../../chunks/search-71fe071a.js";import{g as ie}from"../../../../chunks/navigation-6709cf39.js";import{S as ue,O as M}from"../../../../chunks/select-75314ba3.js";import{F as Ae,t as lt,c as at}from"../../../../chunks/index.es-3c939ced.js";import"../../../../chunks/simplify-attributes-f7b4503d.js";import"../../../../chunks/route-for-api-e9ca21c2.js";import"../../../../chunks/notifications-b5b1bba1.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/route-for-789b7fae.js";import"../../../../chunks/persist-store-4ece08a3.js";import"../../../../chunks/tooltip-0ff39623.js";import"../../../../chunks/copyable-a6f80d19.js";import"../../../../chunks/button-5dc003c0.js";import"../../../../chunks/singletons-d1fb5791.js";const st=r=>Ue(r)?r==="basic"||r==="advanced":!1,ot=r=>{const e=r.searchParams.get("search");return st(e)?e:(r.searchParams.set("search","basic"),"basic")},it=me([ne],([r])=>r.params.namespace),ut=me([ne],([r])=>r.url.searchParams.get("query")),ft=me([it,ut],([r,e])=>({namespace:r,query:e})),ct=r=>ft.subscribe(({namespace:e,query:n})=>{Xe(Fe,Ne,async()=>{const{workflows:t}=await Qe(e,{query:n});r(t)})}),Ne=Ce(!0),Fe=Ce(!0),mt=Je([],ct),pt=r=>{const e=[],n=()=>{t&&(e.push(t),t="")};let t="",l=0;for(;l<r.length;){const s=r[l];if(Ve(s)){n(),t+=s,l++;continue}if(Me(s)||He(s)){n(),l++;continue}t+=s,l++}return n(),e},re=r=>e=>e.toLowerCase()===r.toLowerCase(),X=(r,e)=>r[e+2],_t=r=>{for(const e of Ye)if(r[e])return{[e]:r[e]}},ht=re("WorkflowType"),gt=re("WorkflowId"),$t=re("StartTime"),dt=re("ExecutionStatus"),ke=r=>{const e=pt(r),n={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(gt(t)&&(n.workflowId=X(e,l)),ht(t)&&(n.workflowType=X(e,l)),dt(t)){const s=X(e,l);ze(s)&&(n.executionStatus=s)}if($t(t)){const s=X(e,l);try{const i=Ge(s),a=_t(i);n.timeRange=Ke(a)}catch(i){console.error("Error parsing StartTime from query",i)}}}),n};function wt(r){let e,n,t,l,s,i,a,o,f,d,u;return i=new Ae({props:{icon:lt,scale:.9,color:"gray",class:"flex items-center"}}),{c(){e=N("div"),n=N("label"),t=j(r[2]),l=C(),s=N("span"),S(i.$$.fragment),a=C(),o=N("input"),this.h()},l(m){e=F(m,"DIV",{class:!0});var p=L(e);n=F(p,"LABEL",{for:!0,class:!0});var c=L(n);t=D(c,r[2]),c.forEach(h),l=A(p),s=F(p,"SPAN",{class:!0});var T=L(s);q(i.$$.fragment,T),T.forEach(h),a=A(p),o=F(p,"INPUT",{class:!0,placeholder:!0,id:!0,name:!0}),p.forEach(h),this.h()},h(){b(n,"for",r[1]),b(n,"class","hidden"),b(s,"class","svelte-fxm0nn"),b(o,"class","block w-full focus:outline-none"),b(o,"placeholder",r[3]),b(o,"id",r[1]),b(o,"name",r[4]),b(e,"class","input-container focus-within:border-blue-700 svelte-fxm0nn")},m(m,p){v(m,e,p),I(e,n),I(n,t),I(e,l),I(e,s),E(i,s,null),I(e,a),I(e,o),de(o,r[0]),f=!0,d||(u=[Y(o,"input",r[7]),Y(o,"input",r[5]),Y(o,"change",r[6])],d=!0)},p(m,[p]){(!f||p&4)&&ce(t,m[2]),(!f||p&2)&&b(n,"for",m[1]),(!f||p&8)&&b(o,"placeholder",m[3]),(!f||p&2)&&b(o,"id",m[1]),(!f||p&16)&&b(o,"name",m[4]),p&1&&o.value!==m[0]&&de(o,m[0])},i(m){f||($(i.$$.fragment,m),f=!0)},o(m){w(i.$$.fragment,m),f=!1},d(m){m&&h(e),R(i),d=!1,De(u)}}}function kt(r,e,n){let{id:t}=e,{label:l}=e,{value:s}=e,{placeholder:i=l}=e,{name:a=t}=e;function o(u){we.call(this,r,u)}function f(u){we.call(this,r,u)}function d(){s=this.value,n(0,s)}return r.$$set=u=>{"id"in u&&n(1,t=u.id),"label"in u&&n(2,l=u.label),"value"in u&&n(0,s=u.value),"placeholder"in u&&n(3,i=u.placeholder),"name"in u&&n(4,a=u.name)},[s,t,l,i,a,o,f,d]}class be extends Z{constructor(e){super(),x(this,e,kt,wt,ee,{id:1,label:2,value:0,placeholder:3,name:4})}}function ve(r,e,n){const t=r.slice();return t[14]=e[n][0],t[15]=e[n][1],t}function ye(r,e,n){const t=r.slice();return t[15]=e[n],t}function bt(r){let e,n,t,l,s;return{c(){e=N("a"),n=j("Advanced Search"),this.h()},l(i){e=F(i,"A",{href:!0,class:!0});var a=L(e);n=D(a,"Advanced Search"),a.forEach(h),this.h()},h(){b(e,"href",t=r[3].url.pathname+"?searchType=advanced"),b(e,"class","text-blue-700")},m(i,a){v(i,e,a),I(e,n),l||(s=Y(e,"click",Ie(r[6]("advanced"))),l=!0)},p(i,a){a&8&&t!==(t=i[3].url.pathname+"?searchType=advanced")&&b(e,"href",t)},d(i){i&&h(e),l=!1,s()}}}function vt(r){let e,n,t,l,s;return{c(){e=N("a"),n=j("Basic Search"),this.h()},l(i){e=F(i,"A",{href:!0,class:!0});var a=L(e);n=D(a,"Basic Search"),a.forEach(h),this.h()},h(){b(e,"href",t=r[3].url.pathname+"?searchType=basic"),b(e,"class","text-blue-700")},m(i,a){v(i,e,a),I(e,n),l||(s=Y(e,"click",Ie(r[6]("basic"))),l=!0)},p(i,a){a&8&&t!==(t=i[3].url.pathname+"?searchType=basic")&&b(e,"href",t)},d(i){i&&h(e),l=!1,s()}}}function yt(r){let e,n,t,l,s,i,a,o,f,d,u,m,p,c,T,P;function k(g){r[9](g)}let _={id:"workflow-id-filter",label:"Workflow ID"};r[2].workflowId!==void 0&&(_.value=r[2].workflowId),n=new be({props:_}),Q.push(()=>U(n,"value",k)),n.$on("input",r[8]);function W(g){r[10](g)}let H={id:"workflow-type-filter",label:"Workflow Type"};r[2].workflowType!==void 0&&(H.value=r[2].workflowType),s=new be({props:H}),Q.push(()=>U(s,"value",W)),s.$on("input",r[8]);function K(g){r[11](g)}let pe={id:"time-range-filter",label:"Time Range",$$slots:{default:[Rt]},$$scope:{ctx:r}};r[2].timeRange!==void 0&&(pe.value=r[2].timeRange),o=new ue({props:pe}),Q.push(()=>U(o,"value",K)),o.$on("change",r[8]);function Le(g){r[12](g)}let _e={id:"execution-status-filter",label:"Workflow Status",$$slots:{default:[Wt]},$$scope:{ctx:r}};r[2].executionStatus!==void 0&&(_e.value=r[2].executionStatus),u=new ue({props:_e}),Q.push(()=>U(u,"value",Le)),u.$on("change",r[8]);function je(g){r[13](g)}let he={id:"filter-by-relative-time",$$slots:{default:[Nt]},$$scope:{ctx:r}};return r[4]!==void 0&&(he.value=r[4]),c=new ue({props:he}),Q.push(()=>U(c,"value",je)),{c(){e=N("div"),S(n.$$.fragment),l=C(),S(s.$$.fragment),a=C(),S(o.$$.fragment),d=C(),S(u.$$.fragment),p=C(),S(c.$$.fragment),this.h()},l(g){e=F(g,"DIV",{class:!0});var y=L(e);q(n.$$.fragment,y),l=A(y),q(s.$$.fragment,y),a=A(y),q(o.$$.fragment,y),d=A(y),q(u.$$.fragment,y),p=A(y),q(c.$$.fragment,y),y.forEach(h),this.h()},h(){b(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5")},m(g,y){v(g,e,y),E(n,e,null),I(e,l),E(s,e,null),I(e,a),E(o,e,null),I(e,d),E(u,e,null),I(e,p),E(c,e,null),P=!0},p(g,y){const ge={};!t&&y&4&&(t=!0,ge.value=g[2].workflowId,V(()=>t=!1)),n.$set(ge);const $e={};!i&&y&4&&(i=!0,$e.value=g[2].workflowType,V(()=>i=!1)),s.$set($e);const le={};y&1048580&&(le.$$scope={dirty:y,ctx:g}),!f&&y&4&&(f=!0,le.value=g[2].timeRange,V(()=>f=!1)),o.$set(le);const ae={};y&1048576&&(ae.$$scope={dirty:y,ctx:g}),!m&&y&4&&(m=!0,ae.value=g[2].executionStatus,V(()=>m=!1)),u.$set(ae);const se={};y&1048576&&(se.$$scope={dirty:y,ctx:g}),!T&&y&16&&(T=!0,se.value=g[4],V(()=>T=!1)),c.$set(se)},i(g){P||($(n.$$.fragment,g),$(s.$$.fragment,g),$(o.$$.fragment,g),$(u.$$.fragment,g),$(c.$$.fragment,g),P=!0)},o(g){w(n.$$.fragment,g),w(s.$$.fragment,g),w(o.$$.fragment,g),w(u.$$.fragment,g),w(c.$$.fragment,g),P=!1},d(g){g&&h(e),R(n),R(s),R(o),R(u),R(c)}}}function Tt(r){let e,n;return e=new tt({props:{icon:!0,id:"advanced-search",placeholder:"Query\u2026",value:r[1]}}),e.$on("submit",r[7]),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const s={};l&2&&(s.value=t[1]),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function St(r){let e;return{c(){e=j("All")},l(n){e=D(n,"All")},m(n,t){v(n,e,t)},d(n){n&&h(e)}}}function Te(r){let e,n;return e=new M({props:{value:r[2].timeRange,$$slots:{default:[qt]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const s={};l&4&&(s.value=t[2].timeRange),l&1048580&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function qt(r){let e=r[2].timeRange+"",n;return{c(){n=j(e)},l(t){n=D(t,e)},m(t,l){v(t,n,l)},p(t,l){l&4&&e!==(e=t[2].timeRange+"")&&ce(n,e)},d(t){t&&h(n)}}}function Et(r){let e=r[15]+"",n;return{c(){n=j(e)},l(t){n=D(t,e)},m(t,l){v(t,n,l)},p:te,d(t){t&&h(n)}}}function Se(r){let e,n;return e=new M({props:{value:r[15],$$slots:{default:[Et]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const s={};l&1048576&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Rt(r){let e,n,t=r[2].timeRange&&!J.includes(r[2].timeRange),l,s,i;e=new M({props:{value:null,$$slots:{default:[St]},$$scope:{ctx:r}}});let a=t&&Te(r),o=J,f=[];for(let u=0;u<o.length;u+=1)f[u]=Se(ye(r,o,u));const d=u=>w(f[u],1,1,()=>{f[u]=null});return{c(){S(e.$$.fragment),n=C(),a&&a.c(),l=C();for(let u=0;u<f.length;u+=1)f[u].c();s=O()},l(u){q(e.$$.fragment,u),n=A(u),a&&a.l(u),l=A(u);for(let m=0;m<f.length;m+=1)f[m].l(u);s=O()},m(u,m){E(e,u,m),v(u,n,m),a&&a.m(u,m),v(u,l,m);for(let p=0;p<f.length;p+=1)f[p].m(u,m);v(u,s,m),i=!0},p(u,m){const p={};if(m&1048576&&(p.$$scope={dirty:m,ctx:u}),e.$set(p),m&4&&(t=u[2].timeRange&&!J.includes(u[2].timeRange)),t?a?(a.p(u,m),m&4&&$(a,1)):(a=Te(u),a.c(),$(a,1),a.m(l.parentNode,l)):a&&(z(),w(a,1,1,()=>{a=null}),G()),m&0){o=J;let c;for(c=0;c<o.length;c+=1){const T=ye(u,o,c);f[c]?(f[c].p(T,m),$(f[c],1)):(f[c]=Se(T),f[c].c(),$(f[c],1),f[c].m(s.parentNode,s))}for(z(),c=o.length;c<f.length;c+=1)d(c);G()}},i(u){if(!i){$(e.$$.fragment,u),$(a);for(let m=0;m<o.length;m+=1)$(f[m]);i=!0}},o(u){w(e.$$.fragment,u),w(a),f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)w(f[m]);i=!1},d(u){R(e,u),u&&h(n),a&&a.d(u),u&&h(l),We(f,u),u&&h(s)}}}function It(r){let e=r[14]+"",n;return{c(){n=j(e)},l(t){n=D(t,e)},m(t,l){v(t,n,l)},p:te,d(t){t&&h(n)}}}function qe(r,e){let n,t,l;return t=new M({props:{value:e[15],$$slots:{default:[It]},$$scope:{ctx:e}}}),{key:r,first:null,c(){n=O(),S(t.$$.fragment),this.h()},l(s){n=O(),q(t.$$.fragment,s),this.h()},h(){this.first=n},m(s,i){v(s,n,i),E(t,s,i),l=!0},p(s,i){e=s;const a={};i&1048576&&(a.$$scope={dirty:i,ctx:e}),t.$set(a)},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){w(t.$$.fragment,s),l=!1},d(s){s&&h(n),R(t,s)}}}function Wt(r){let e=[],n=new Map,t,l,s=Object.entries(r[5]);const i=a=>a[14];for(let a=0;a<s.length;a+=1){let o=ve(r,s,a),f=i(o);n.set(f,e[a]=qe(f,o))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=O()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);t=O()},m(a,o){for(let f=0;f<e.length;f+=1)e[f].m(a,o);v(a,t,o),l=!0},p(a,o){o&32&&(s=Object.entries(a[5]),z(),e=Oe(e,o,i,1,a,s,n,t.parentNode,Be,qe,t,ve),G())},i(a){if(!l){for(let o=0;o<s.length;o+=1)$(e[o]);l=!0}},o(a){for(let o=0;o<e.length;o+=1)w(e[o]);l=!1},d(a){for(let o=0;o<e.length;o+=1)e[o].d(a);a&&h(t)}}}function Pt(r){let e;return{c(){e=j("Relative")},l(n){e=D(n,"Relative")},m(n,t){v(n,e,t)},d(n){n&&h(e)}}}function Ct(r){let e;return{c(){e=j("UTC")},l(n){e=D(n,"UTC")},m(n,t){v(n,e,t)},d(n){n&&h(e)}}}function At(r){let e;return{c(){e=j("Local")},l(n){e=D(n,"Local")},m(n,t){v(n,e,t)},d(n){n&&h(e)}}}function Nt(r){let e,n,t,l,s,i;return e=new M({props:{value:"relative",$$slots:{default:[Pt]},$$scope:{ctx:r}}}),t=new M({props:{value:"UTC",$$slots:{default:[Ct]},$$scope:{ctx:r}}}),s=new M({props:{value:"local",$$slots:{default:[At]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment),n=C(),S(t.$$.fragment),l=C(),S(s.$$.fragment)},l(a){q(e.$$.fragment,a),n=A(a),q(t.$$.fragment,a),l=A(a),q(s.$$.fragment,a)},m(a,o){E(e,a,o),v(a,n,o),E(t,a,o),v(a,l,o),E(s,a,o),i=!0},p(a,o){const f={};o&1048576&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const d={};o&1048576&&(d.$$scope={dirty:o,ctx:a}),t.$set(d);const u={};o&1048576&&(u.$$scope={dirty:o,ctx:a}),s.$set(u)},i(a){i||($(e.$$.fragment,a),$(t.$$.fragment,a),$(s.$$.fragment,a),i=!0)},o(a){w(e.$$.fragment,a),w(t.$$.fragment,a),w(s.$$.fragment,a),i=!1},d(a){R(e,a),a&&h(n),R(t,a),a&&h(l),R(s,a)}}}function Ft(r){let e,n,t,l,s,i;function a(p,c){return p[0]==="advanced"?vt:bt}let o=a(r),f=o(r);const d=[Tt,yt],u=[];function m(p,c){return p[0]==="advanced"?0:1}return l=m(r),s=u[l]=d[l](r),{c(){e=N("section"),n=N("p"),f.c(),t=C(),s.c(),this.h()},l(p){e=F(p,"SECTION",{class:!0});var c=L(e);n=F(c,"P",{class:!0});var T=L(n);f.l(T),T.forEach(h),t=A(c),s.l(c),c.forEach(h),this.h()},h(){b(n,"class","text-right text-xs"),b(e,"class","flex flex-col gap-2")},m(p,c){v(p,e,c),I(e,n),f.m(n,null),I(e,t),u[l].m(e,null),i=!0},p(p,[c]){o===(o=a(p))&&f?f.p(p,c):(f.d(1),f=o(p),f&&(f.c(),f.m(n,null)));let T=l;l=m(p),l===T?u[l].p(p,c):(z(),w(u[T],1,1,()=>{u[T]=null}),G(),s=u[l],s?s.p(p,c):(s=u[l]=d[l](p),s.c()),$(s,1),s.m(e,null))},i(p){i||($(s),i=!0)},o(p){w(s),i=!1},d(p){p&&h(e),f.d(),u[l].d()}}}function Lt(r,e,n){let t,l;B(r,ne,k=>n(3,t=k)),B(r,fe,k=>n(4,l=k));let{searchType:s}=e,{query:i}=e,a=ke(i);const o={All:null,Running:"Running","Timed Out":"TimedOut",Completed:"Completed",Failed:"Failed","Continued as New":"ContinuedAsNew",Canceled:"Canceled",Terminated:"Terminated"},f=k=>()=>{n(0,s=k),oe({parameter:"search",value:s,url:t.url,goto:ie})},d=k=>{const _=new FormData(k.target);n(1,i=String(_.get("query"))),n(2,a=ke(i)),oe({url:t.url,parameter:"query",value:i,goto:ie})},u=et(()=>{n(1,i=Pe(a)),oe({url:t.url,parameter:"query",value:i,allowEmpty:!0,goto:ie})},300);function m(k){r.$$.not_equal(a.workflowId,k)&&(a.workflowId=k,n(2,a))}function p(k){r.$$.not_equal(a.workflowType,k)&&(a.workflowType=k,n(2,a))}function c(k){r.$$.not_equal(a.timeRange,k)&&(a.timeRange=k,n(2,a))}function T(k){r.$$.not_equal(a.executionStatus,k)&&(a.executionStatus=k,n(2,a))}function P(k){l=k,fe.set(l)}return r.$$set=k=>{"searchType"in k&&n(0,s=k.searchType),"query"in k&&n(1,i=k.query)},[s,i,a,t,l,o,f,d,u,m,p,c,T,P]}class jt extends Z{constructor(e){super(),x(this,e,Lt,Ft,ee,{searchType:0,query:1})}}function Dt(r){let e,n,t,l,s,i,a;return t=new Ae({props:{icon:at,scale:1.2,class:"block h-full w-full animate-spin"}}),{c(){e=N("div"),n=N("div"),S(t.$$.fragment),l=C(),s=N("h2"),i=j(r[0]),this.h()},l(o){e=F(o,"DIV",{class:!0});var f=L(e);n=F(f,"DIV",{class:!0});var d=L(n);q(t.$$.fragment,d),d.forEach(h),l=A(f),s=F(f,"H2",{class:!0});var u=L(s);i=D(u,r[0]),u.forEach(h),f.forEach(h),this.h()},h(){b(n,"class","flex h-16 w-16 items-center justify-center rounded-full bg-gray-200"),b(s,"class","text-xl font-medium"),b(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(o,f){v(o,e,f),I(e,n),E(t,n,null),I(e,l),I(e,s),I(s,i),a=!0},p(o,[f]){(!a||f&1)&&ce(i,o[0])},i(o){a||($(t.$$.fragment,o),a=!0)},o(o){w(t.$$.fragment,o),a=!1},d(o){o&&h(e),R(t)}}}function Ot(r,e,n){let{title:t="Loading\u2026"}=e;return r.$$set=l=>{"title"in l&&n(0,t=l.title)},[t]}class Bt extends Z{constructor(e){super(),x(this,e,Ot,Dt,ee,{title:0})}}function Ee(r,e,n){const t=r.slice();return t[12]=e[n],t}function Qt(r){let e,n;return e=new Ze({props:{title:"No Workflows Found",content:r[7]}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p:te,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Ut(r){let e,n;return e=new xe({props:{items:r[4],updating:r[5],$$slots:{default:[Ht,({visibleItems:t})=>({11:t}),({visibleItems:t})=>t?2048:0]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const s={};l&16&&(s.items=t[4]),l&32&&(s.updating=t[5]),l&34881&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Vt(r){let e,n;return e=new Bt({}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p:te,i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Re(r){let e,n;return e=new rt({props:{workflow:r[12],namespace:r[0],timeFormat:r[6]}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const s={};l&2048&&(s.workflow=t[12]),l&1&&(s.namespace=t[0]),l&64&&(s.timeFormat=t[6]),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Mt(r){let e,n,t=r[11],l=[];for(let i=0;i<t.length;i+=1)l[i]=Re(Ee(r,t,i));const s=i=>w(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=O()},l(i){for(let a=0;a<l.length;a+=1)l[a].l(i);e=O()},m(i,a){for(let o=0;o<l.length;o+=1)l[o].m(i,a);v(i,e,a),n=!0},p(i,a){if(a&2113){t=i[11];let o;for(o=0;o<t.length;o+=1){const f=Ee(i,t,o);l[o]?(l[o].p(f,a),$(l[o],1)):(l[o]=Re(f),l[o].c(),$(l[o],1),l[o].m(e.parentNode,e))}for(z(),o=t.length;o<l.length;o+=1)s(o);G()}},i(i){if(!n){for(let a=0;a<t.length;a+=1)$(l[a]);n=!0}},o(i){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)w(l[a]);n=!1},d(i){We(l,i),i&&h(e)}}}function Ht(r){let e,n;return e=new nt({props:{$$slots:{default:[Mt]},$$scope:{ctx:r}}}),{c(){S(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,l){E(e,t,l),n=!0},p(t,l){const s={};l&34881&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function zt(r){let e,n,t,l,s,i,a,o,f,d,u;function m(_){r[8](_)}function p(_){r[9](_)}let c={};r[1]!==void 0&&(c.searchType=r[1]),r[2]!==void 0&&(c.query=r[2]),l=new jt({props:c}),Q.push(()=>U(l,"searchType",m)),Q.push(()=>U(l,"query",p));const T=[Vt,Ut,Qt],P=[];function k(_,W){return _[3]?0:_[4].length?1:2}return o=k(r),f=P[o]=T[o](r),{c(){e=N("h2"),n=j("Recent Workflows"),t=C(),S(l.$$.fragment),a=C(),f.c(),d=O(),this.h()},l(_){e=F(_,"H2",{class:!0});var W=L(e);n=D(W,"Recent Workflows"),W.forEach(h),t=A(_),q(l.$$.fragment,_),a=A(_),f.l(_),d=O(),this.h()},h(){b(e,"class","text-2xl")},m(_,W){v(_,e,W),I(e,n),v(_,t,W),E(l,_,W),v(_,a,W),P[o].m(_,W),v(_,d,W),u=!0},p(_,[W]){const H={};!s&&W&2&&(s=!0,H.searchType=_[1],V(()=>s=!1)),!i&&W&4&&(i=!0,H.query=_[2],V(()=>i=!1)),l.$set(H);let K=o;o=k(_),o===K?P[o].p(_,W):(z(),w(P[K],1,1,()=>{P[K]=null}),G(),f=P[o],f?f.p(_,W):(f=P[o]=T[o](_),f.c()),$(f,1),f.m(d.parentNode,d))},i(_){u||($(l.$$.fragment,_),$(f),u=!0)},o(_){w(l.$$.fragment,_),w(f),u=!1},d(_){_&&h(e),_&&h(t),R(l,_),_&&h(a),P[o].d(_),_&&h(d)}}}const Gt=Pe({timeRange:"1 day"}),wn=async function({params:r,url:e}){e.searchParams.has("query")||e.searchParams.set("query",Gt);const{namespace:n}=r;return{props:{namespace:n}}};function Kt(r,e,n){let t,l,s,i,a;B(r,ne,c=>n(10,t=c)),B(r,Fe,c=>n(3,l=c)),B(r,mt,c=>n(4,s=c)),B(r,Ne,c=>n(5,i=c)),B(r,fe,c=>n(6,a=c));let{namespace:o}=e,f=ot(t.url),d=t.url.searchParams.get("query");const u=f==="advanced"?"Please check your syntax and try again.":"If you have filters applied, try adjusting them.";function m(c){f=c,n(1,f)}function p(c){d=c,n(2,d)}return r.$$set=c=>{"namespace"in c&&n(0,o=c.namespace)},[o,f,d,l,s,i,a,u,m,p]}class kn extends Z{constructor(e){super(),x(this,e,Kt,zt,ee,{namespace:0})}}export{kn as default,wn as load};
