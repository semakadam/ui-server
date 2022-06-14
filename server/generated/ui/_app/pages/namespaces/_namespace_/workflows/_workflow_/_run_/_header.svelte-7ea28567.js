var Fe=Object.defineProperty;var ve=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var ye=(n,e,t)=>e in n?Fe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ce=(n,e)=>{for(var t in e||(e={}))je.call(e,t)&&ye(n,t,e[t]);if(ve)for(var t of ve(e))Re.call(e,t)&&ye(n,t,e[t]);return n};import{S as ae,i as ne,s as re,w as T,k as A,x as S,m as W,y as C,g as P,q as b,o as I,B as N,d as u,l as Ie,n as Ve,p as qe,t as j,h as R,e as g,c as k,a as $,b as h,M as m,E as ee,ac as Ee,T as De,R as Te,N as he,C as Ae,V as Se,j as te}from"../../../../../../chunks/index-b7ec6eb7.js";import{I as He}from"../../../../../../chunks/index-5902cb5b.js";import{e as Be}from"../../../../../../chunks/event-view-47b2ec75.js";import{w as Me}from"../../../../../../chunks/workflows-4e9f6afa.js";import{W as Le,t as Oe}from"../../../../../../chunks/workflow-status-30634047.js";import{f as We,g as Ue,h as Qe,i as Je,j as ze,k as Ce}from"../../../../../../chunks/route-for-e4b4dbdd.js";import{r as Ge,a as Ke,h as Xe}from"../../../../../../chunks/route-for-api-24b24782.js";import{n as Ye}from"../../../../../../chunks/notifications-30963af3.js";import{B as Pe}from"../../../../../../chunks/button-29aac72b.js";import{M as Ze}from"../../../../../../chunks/modal-78ef2fd6.js";import{f as xe}from"../../../../../../chunks/events-service-4b660a36.js";import{p as et}from"../../../../../../chunks/stores-5fddffdd.js";import"../../../../../../chunks/index-3b47d797.js";import"../../../../../../chunks/persist-store-f29105ba.js";import"../../../../../../chunks/with-loading-22689bcc.js";import"../../../../../../chunks/simplify-attributes-433df544.js";import"../../../../../../chunks/format-date-a1a343f8.js";import"../../../../../../chunks/to-duration-6ce02332.js";import"../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../chunks/index-f3514990.js";import"../../../../../../chunks/is-http-42140adc.js";import"../../../../../../chunks/data-converter-config-613f553d.js";import"../../../../../../chunks/atob-eb4fc9a1.js";import"../../../../../../chunks/index-8821dfb5.js";import"../../../../../../chunks/get-event-categorization-20095c1b.js";async function tt({workflow:n,namespace:e,reason:t}){return await Ge(Ke("workflow.terminate",{namespace:e,workflowId:n.id,runId:n.runId}),{options:{method:"POST",body:JSON.stringify({reason:t})},shouldRetry:!1})}function Ne(n){let e,t,r,s;return e=new Pe({props:{destroy:!0,$$slots:{default:[at]},$$scope:{ctx:n}}}),e.$on("click",n[3]),r=new Ze({props:{open:n[2],confirmText:"Terminate",$$slots:{content:[rt],title:[nt]},$$scope:{ctx:n}}}),r.$on("cancelModal",n[4]),r.$on("confirmModal",n[6]),{c(){T(e.$$.fragment),t=A(),T(r.$$.fragment)},l(a){S(e.$$.fragment,a),t=W(a),S(r.$$.fragment,a)},m(a,o){C(e,a,o),P(a,t,o),C(r,a,o),s=!0},p(a,o){const f={};o&1024&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const i={};o&4&&(i.open=a[2]),o&1026&&(i.$$scope={dirty:o,ctx:a}),r.$set(i)},i(a){s||(b(e.$$.fragment,a),b(r.$$.fragment,a),s=!0)},o(a){I(e.$$.fragment,a),I(r.$$.fragment,a),s=!1},d(a){N(e,a),a&&u(t),N(r,a)}}}function at(n){let e;return{c(){e=j("Terminate")},l(t){e=R(t,"Terminate")},m(t,r){P(t,e,r)},d(t){t&&u(e)}}}function nt(n){let e,t;return{c(){e=g("h3"),t=j("Terminate Workflow"),this.h()},l(r){e=k(r,"H3",{slot:!0});var s=$(e);t=R(s,"Terminate Workflow"),s.forEach(u),this.h()},h(){h(e,"slot","title")},m(r,s){P(r,e,s),m(e,t)},p:ee,d(r){r&&u(e)}}}function rt(n){let e,t,r,s,a,o,f;return{c(){e=g("div"),t=g("p"),r=j(`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),s=A(),a=g("input"),this.h()},l(i){e=k(i,"DIV",{slot:!0});var c=$(e);t=k(c,"P",{});var w=$(t);r=R(w,`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),w.forEach(u),s=W(c),a=k(c,"INPUT",{class:!0,placeholder:!0}),c.forEach(u),this.h()},h(){h(a,"class","mt-4 block w-full rounded-md border border-gray-200 p-2"),h(a,"placeholder","Enter a reason"),h(e,"slot","content")},m(i,c){P(i,e,c),m(e,t),m(t,r),m(e,s),m(e,a),Ee(a,n[1]),o||(f=De(a,"input",n[8]),o=!0)},p(i,c){c&2&&a.value!==i[1]&&Ee(a,i[1])},d(i){i&&u(e),o=!1,f()}}}function st(n){let e=n[5](n[0]),t,r,s=e&&Ne(n);return{c(){s&&s.c(),t=Ie()},l(a){s&&s.l(a),t=Ie()},m(a,o){s&&s.m(a,o),P(a,t,o),r=!0},p(a,[o]){o&1&&(e=a[5](a[0])),e?s?(s.p(a,o),o&1&&b(s,1)):(s=Ne(a),s.c(),b(s,1),s.m(t.parentNode,t)):s&&(Ve(),I(s,1,1,()=>{s=null}),qe())},i(a){r||(b(s),r=!0)},o(a){I(s),r=!1},d(a){s&&s.d(a),a&&u(t)}}}function ot(n,e,t){let{workflow:r}=e,{namespace:s}=e,a="",o=!1;const f=()=>t(2,o=!0),i=()=>t(2,o=!1),c=p=>String(p.status)==="Running",w=()=>{t(2,o=!1),t(1,a=""),Ye.add("success","Workflow Terminated"),window.location.reload()},v=()=>{tt({workflow:r,namespace:s,reason:a}).then(w).catch(Xe)};function d(){a=this.value,t(1,a)}return n.$$set=p=>{"workflow"in p&&t(0,r=p.workflow),"namespace"in p&&t(7,s=p.namespace)},[r,a,o,f,i,c,v,s,d]}class lt extends ae{constructor(e){super(),ne(this,e,ot,st,re,{workflow:0,namespace:7})}}function ft(n){let e,t;return{c(){e=g("span"),t=j("Download"),this.h()},l(r){e=k(r,"SPAN",{class:!0});var s=$(e);t=R(s,"Download"),s.forEach(u),this.h()},h(){h(e,"class","hidden md:inline")},m(r,s){P(r,e,s),m(e,t)},p:ee,d(r){r&&u(e)}}}function it(n){let e,t;return e=new Pe({props:{secondary:!0,icon:"download",$$slots:{default:[ft]},$$scope:{ctx:n}}}),e.$on("click",n[0]),{c(){T(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,s){C(e,r,s),t=!0},p(r,[s]){const a={};s&16&&(a.$$scope={dirty:s,ctx:r}),e.$set(a)},i(r){t||(b(e.$$.fragment,r),t=!0)},o(r){I(e.$$.fragment,r),t=!1},d(r){N(e,r)}}}function ut(n,e,t){let{namespace:r}=e,{workflowId:s}=e,{runId:a}=e;const o=async()=>{const f=await xe({namespace:r,workflowId:s,runId:a}),i=JSON.stringify({events:f},null,2);c(i,`${a}/events.json`,"text/plain");function c(w,v,d){const p=document.createElement("a"),O=new Blob([w],{type:d});p.href=URL.createObjectURL(O),p.download=v,p.click()}};return n.$$set=f=>{"namespace"in f&&t(1,r=f.namespace),"workflowId"in f&&t(2,s=f.workflowId),"runId"in f&&t(3,a=f.runId)},[o,r,s,a]}class mt extends ae{constructor(e){super(),ne(this,e,ut,it,re,{namespace:1,workflowId:2,runId:3})}}function ct(n){let e;return{c(){e=j(n[1])},l(t){e=R(t,n[1])},m(t,r){P(t,e,r)},p(t,r){r&2&&te(e,t[1])},d(t){t&&u(e)}}}function ht(n){let e,t,r,s;return{c(){e=j(n[1]),t=A(),r=g("span"),s=j(n[2]),this.h()},l(a){e=R(a,n[1]),t=W(a),r=k(a,"SPAN",{class:!0});var o=$(r);s=R(o,n[2]),o.forEach(u),this.h()},h(){h(r,"class","rounded-sm bg-blue-100 px-2 text-blue-700")},m(a,o){P(a,e,o),P(a,t,o),P(a,r,o),m(r,s)},p(a,o){o&2&&te(e,a[1]),o&4&&te(s,a[2])},d(a){a&&u(e),a&&u(t),a&&u(r)}}}function dt(n){let e,t;function r(o,f){return o[2]||o[2]===0?ht:ct}let s=r(n),a=s(n);return{c(){e=g("a"),a.c(),this.h()},l(o){e=k(o,"A",{class:!0,href:!0,"data-cy":!0});var f=$(e);a.l(f),f.forEach(u),this.h()},h(){h(e,"class","block whitespace-nowrap text-sm md:text-base svelte-sf1jtj"),h(e,"href",n[0]),h(e,"data-cy",t=n[4].dataCy),Te(e,"active",n[3])},m(o,f){P(o,e,f),a.m(e,null)},p(o,[f]){s===(s=r(o))&&a?a.p(o,f):(a.d(1),a=s(o),a&&(a.c(),a.m(e,null))),f&1&&h(e,"href",o[0]),f&16&&t!==(t=o[4].dataCy)&&h(e,"data-cy",t),f&8&&Te(e,"active",o[3])},i:ee,o:ee,d(o){o&&u(e),a.d()}}}function wt(n,e,t){let r,s;he(n,et,i=>t(5,s=i));let{href:a}=e,{label:o}=e,{amount:f=null}=e;return n.$$set=i=>{t(4,e=Ae(Ae({},e),Se(i))),"href"in i&&t(0,a=i.href),"label"in i&&t(1,o=i.label),"amount"in i&&t(2,f=i.amount)},n.$$.update=()=>{n.$$.dirty&33&&t(3,r=s.url.pathname.includes(a))},e=Se(e),[a,o,f,r,e,s]}class Z extends ae{constructor(e){super(),ne(this,e,wt,dt,re,{href:0,label:1,amount:2})}}function pt(n){var de,we,pe,_e,ge;let e,t,r,s,a,o,f,i,c,w,v,d,p,O=n[1].id+"",x,se,V,q,oe,D,le,y,H,fe,B,ie,M,ue,U,me,Q,X;return a=new He({props:{scale:.8,name:"caretLeft",class:"inline"}}),v=new Le({props:{status:(de=n[1])==null?void 0:de.status}}),q=new mt({props:{namespace:n[0],workflowId:n[1].id,runId:n[1].runId}}),D=new lt({props:{workflow:n[1],namespace:n[0]}}),H=new Z({props:{label:"History",href:We(ce({view:n[3]},n[4])),amount:(we=n[1])==null?void 0:we.historyEvents,dataCy:"history-tab"}}),B=new Z({props:{label:"Workers",href:Ue(n[4]),amount:(_e=(pe=n[2])==null?void 0:pe.pollers)==null?void 0:_e.length,dataCy:"workers-tab"}}),M=new Z({props:{label:"Pending Activities",href:Qe(n[4]),amount:(ge=n[1].pendingActivities)==null?void 0:ge.length,dataCy:"pending-activities-tab"}}),U=new Z({props:{label:"Stack Trace",href:Je(n[4]),dataCy:"stack-trace-tab"}}),Q=new Z({props:{label:"Queries",href:ze(n[4]),dataCy:"queries-tab"}}),{c(){e=g("header"),t=g("main"),r=g("div"),s=g("a"),T(a.$$.fragment),o=j("Back to Workflows"),i=A(),c=g("div"),w=g("h1"),T(v.$$.fragment),d=A(),p=g("span"),x=j(O),se=A(),V=g("div"),T(q.$$.fragment),oe=A(),T(D.$$.fragment),le=A(),y=g("nav"),T(H.$$.fragment),fe=A(),T(B.$$.fragment),ie=A(),T(M.$$.fragment),ue=A(),T(U.$$.fragment),me=A(),T(Q.$$.fragment),this.h()},l(l){e=k(l,"HEADER",{class:!0});var _=$(e);t=k(_,"MAIN",{class:!0});var F=$(t);r=k(F,"DIV",{class:!0});var J=$(r);s=k(J,"A",{href:!0,"data-cy":!0,class:!0});var z=$(s);S(a.$$.fragment,z),o=R(z,"Back to Workflows"),z.forEach(u),J.forEach(u),i=W(F),c=k(F,"DIV",{class:!0});var L=$(c);w=k(L,"H1",{class:!0});var G=$(w);S(v.$$.fragment,G),d=W(G),p=k(G,"SPAN",{class:!0});var Y=$(p);x=R(Y,O),Y.forEach(u),G.forEach(u),se=W(L),V=k(L,"DIV",{class:!0});var K=$(V);S(q.$$.fragment,K),oe=W(K),S(D.$$.fragment,K),K.forEach(u),L.forEach(u),le=W(F),y=k(F,"NAV",{class:!0});var E=$(y);S(H.$$.fragment,E),fe=W(E),S(B.$$.fragment,E),ie=W(E),S(M.$$.fragment,E),ue=W(E),S(U.$$.fragment,E),me=W(E),S(Q.$$.fragment,E),E.forEach(u),F.forEach(u),_.forEach(u),this.h()},h(){h(s,"href",f=`/namespaces/${n[0]}/workflows?query=${Ce(n[6])}&search=${n[5]}`),h(s,"data-cy","back-to-workflows"),h(s,"class","back-to-workflows svelte-st9g8m"),h(r,"class","-mt-3 -ml-2 block"),h(p,"class","select-all font-medium"),h(w,"class","relative flex items-center gap-4 text-2xl"),h(V,"class","ml-8 flex items-center justify-end gap-4"),h(c,"class","mb-8 flex items-center justify-between"),h(y,"class","flex flex-wrap gap-6"),h(t,"class","relative flex flex-col gap-1"),h(e,"class","flex flex-col gap-4")},m(l,_){P(l,e,_),m(e,t),m(t,r),m(r,s),C(a,s,null),m(s,o),m(t,i),m(t,c),m(c,w),C(v,w,null),m(w,d),m(w,p),m(p,x),m(c,se),m(c,V),C(q,V,null),m(V,oe),C(D,V,null),m(t,le),m(t,y),C(H,y,null),m(y,fe),C(B,y,null),m(y,ie),C(M,y,null),m(y,ue),C(U,y,null),m(y,me),C(Q,y,null),X=!0},p(l,[_]){var K,E,ke,be,$e;(!X||_&1&&f!==(f=`/namespaces/${l[0]}/workflows?query=${Ce(l[6])}&search=${l[5]}`))&&h(s,"href",f);const F={};_&2&&(F.status=(K=l[1])==null?void 0:K.status),v.$set(F),(!X||_&2)&&O!==(O=l[1].id+"")&&te(x,O);const J={};_&1&&(J.namespace=l[0]),_&2&&(J.workflowId=l[1].id),_&2&&(J.runId=l[1].runId),q.$set(J);const z={};_&2&&(z.workflow=l[1]),_&1&&(z.namespace=l[0]),D.$set(z);const L={};_&8&&(L.href=We(ce({view:l[3]},l[4]))),_&2&&(L.amount=(E=l[1])==null?void 0:E.historyEvents),H.$set(L);const G={};_&4&&(G.amount=(be=(ke=l[2])==null?void 0:ke.pollers)==null?void 0:be.length),B.$set(G);const Y={};_&2&&(Y.amount=($e=l[1].pendingActivities)==null?void 0:$e.length),M.$set(Y)},i(l){X||(b(a.$$.fragment,l),b(v.$$.fragment,l),b(q.$$.fragment,l),b(D.$$.fragment,l),b(H.$$.fragment,l),b(B.$$.fragment,l),b(M.$$.fragment,l),b(U.$$.fragment,l),b(Q.$$.fragment,l),X=!0)},o(l){I(a.$$.fragment,l),I(v.$$.fragment,l),I(q.$$.fragment,l),I(D.$$.fragment,l),I(H.$$.fragment,l),I(B.$$.fragment,l),I(M.$$.fragment,l),I(U.$$.fragment,l),I(Q.$$.fragment,l),X=!1},d(l){l&&u(e),N(a),N(v),N(q),N(D),N(H),N(B),N(M),N(U),N(Q)}}}function _t(n,e,t){let r,s;he(n,Me,d=>t(7,r=d)),he(n,Be,d=>t(3,s=d));let{namespace:a}=e,{workflow:o}=e,{workers:f}=e;const i={namespace:a,workflow:o.id,run:o.runId},{parameters:c,searchType:w}=r,v=Oe(c);return n.$$set=d=>{"namespace"in d&&t(0,a=d.namespace),"workflow"in d&&t(1,o=d.workflow),"workers"in d&&t(2,f=d.workers)},[a,o,f,s,i,w,v]}class Ut extends ae{constructor(e){super(),ne(this,e,_t,pt,re,{namespace:0,workflow:1,workers:2})}}export{Ut as default};
