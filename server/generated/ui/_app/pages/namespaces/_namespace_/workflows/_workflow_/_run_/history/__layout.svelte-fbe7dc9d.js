var Je=Object.defineProperty;var ee=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable;var Ae=(r,e,t)=>e in r?Je(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ne=(r,e)=>{for(var t in e||(e={}))Se.call(e,t)&&Ae(r,t,e[t]);if(ee)for(var t of ee(e))He.call(e,t)&&Ae(r,t,e[t]);return r};var Oe=(r,e)=>{var t={};for(var s in r)Se.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&ee)for(var s of ee(r))e.indexOf(s)<0&&He.call(r,s)&&(t[s]=r[s]);return t};import{S as le,i as ie,s as fe,aL as Re,w as j,x,y as J,K as Me,q as F,o as C,B as R,I as ce,e as h,t as P,k as I,c as v,a as w,h as D,d as p,m as A,b,g as V,Q as l,a2 as qe,aM as Be,l as Pe,v as Ge,aF as Qe,f as De,L as Ke,M as We,N as ze,O as Ue,aN as Xe,aO as Ye,aP as Ze,aQ as et}from"../../../../../../../chunks/vendor-35e673e5.js";import{h as tt,c as oe,r as st,a as rt}from"../../../../../../../chunks/route-for-api-645fd02b.js";import{t as at}from"../../../../../../../chunks/index-df0df581.js";import{f as nt,d as te,i as Te}from"../../../../../../../chunks/route-for-a0c2e129.js";import{p as ue}from"../../../../../../../chunks/stores-668aa160.js";import{T as U,a as ot}from"../../../../../../../chunks/toggle-buttons-4cc5f9b8.js";import{C as Fe}from"../../../../../../../chunks/code-block-f45d11de.js";import{f as lt}from"../../../../../../../chunks/format-date-7efcccd1.js";import{L as it}from"../../../../../../../chunks/link-f7dd30b0.js";import"../../../../../../../chunks/navigation-2df0726c.js";import"../../../../../../../chunks/singletons-a6a7384f.js";import"../../../../../../../chunks/notifications-bbeaa14f.js";import"../../../../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../../../../chunks/data-converter-config-1bd2d6d2.js";import"../../../../../../../chunks/atob-5f9d7101.js";const Ve=(r={},e={})=>{const t=Ne({},r);for(const s of Object.keys(e)){const n=t[s];Array.isArray(n)?t[s]=t[s].concat(e[s]):typeof n=="object"&&!Array.isArray(n)?t[s]=Ve(t[s],e[s]):t[s]=e[s]}return t},je=async(r,{onStart:e,onUpdate:t,onComplete:s,onError:n=tt,token:o,previousProps:c}={})=>{!c&&oe(e)&&e();try{const f=await r(o),{nextPageToken:a}=f,i=Oe(f,["nextPageToken"]),_=Ve(c,i);return oe(t)&&t(_,i),a?je(r,{onStart:e,onUpdate:t,onComplete:s,token:a,previousProps:_}):(oe(s)&&s(_),_)}catch(m){n(m)}},xe=async({namespace:r,workflowId:e,runId:t,onStart:s,onUpdate:n,onComplete:o},c=fetch)=>(await je(async m=>st(rt("events",{namespace:r,workflowId:e,runId:t}),{token:m,request:c}),{onStart:s,onUpdate:n,onComplete:o})).history.events,ft=async(r,e=fetch)=>xe(r,e).then(at),ct=r=>{var o,c,f,m;let e,t;const s=r==null?void 0:r.find(a=>!!a.workflowExecutionStartedEventAttributes),n=r==null?void 0:r.find(a=>!!a.workflowExecutionCompletedEventAttributes);return s&&(e=JSON.stringify((c=(o=s==null?void 0:s.workflowExecutionStartedEventAttributes)==null?void 0:o.input)==null?void 0:c.payloads)),n&&(t=JSON.stringify((m=(f=n==null?void 0:n.workflowExecutionCompletedEventAttributes)==null?void 0:f.result)==null?void 0:m.payloads)),{input:e,result:t}};function ut(r){let e,t;return e=new U({props:{icon:Re}}),e.$on("click",r[0]),{c(){j(e.$$.fragment)},l(s){x(e.$$.fragment,s)},m(s,n){J(e,s,n),t=!0},p:Me,i(s){t||(F(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function mt(r,e,t){let s;ce(r,ue,m=>t(1,s=m));const{workflow:n,run:o,namespace:c}=s.params;return[async()=>{const m=await xe({namespace:c,workflowId:n,runId:o}),a=JSON.stringify({events:m},null,2);i(a,`${o}/events.json`,"text/plain");function i(_,g,y){const u=document.createElement("a"),d=new Blob([_],{type:y});u.href=URL.createObjectURL(d),u.download=g,u.click()}}]}class pt extends le{constructor(e){super();ie(this,e,mt,ut,fe,{})}}function Ce(r,e,t){const s=r.slice();return s[6]=e[t].id,s[7]=Qe(e[t],["id"]),s}function dt(r){let e,t,s,n,o,c=[],f=new Map,m,a,i,_,g=r[0];const y=u=>u[6];for(let u=0;u<g.length;u+=1){let d=Ce(r,g,u),E=y(d);f.set(E,c[u]=Le(E,d))}return i=new it({props:{href:r[1],$$slots:{default:[$t]},$$scope:{ctx:r}}}),{c(){e=h("section"),t=h("h3"),s=P("Pending Activities"),n=I(),o=h("section");for(let u=0;u<c.length;u+=1)c[u].c();m=I(),a=h("div"),j(i.$$.fragment),this.h()},l(u){e=v(u,"SECTION",{class:!0});var d=w(e);t=v(d,"H3",{class:!0});var E=w(t);s=D(E,"Pending Activities"),E.forEach(p),n=A(d),o=v(d,"SECTION",{class:!0});var S=w(o);for(let N=0;N<c.length;N+=1)c[N].l(S);S.forEach(p),m=A(d),a=v(d,"DIV",{class:!0});var O=w(a);x(i.$$.fragment,O),O.forEach(p),d.forEach(p),this.h()},h(){b(t,"class","text-lg font-medium mb-4"),b(o,"class","w-full table-auto space-x-4"),b(a,"class","text-right"),b(e,"class","border-2 border-gray-300 rounded-lg p-4")},m(u,d){V(u,e,d),l(e,t),l(t,s),l(e,n),l(e,o);for(let E=0;E<c.length;E+=1)c[E].m(o,null);l(e,m),l(e,a),J(i,a,null),_=!0},p(u,d){d&3&&(g=u[0],c=qe(c,d,y,1,u,g,f,o,Be,Le,null,Ce));const E={};d&1024&&(E.$$scope={dirty:d,ctx:u}),i.$set(E)},i(u){_||(F(i.$$.fragment,u),_=!0)},o(u){C(i.$$.fragment,u),_=!1},d(u){u&&p(e);for(let d=0;d<c.length;d+=1)c[d].d();R(i)}}}function Le(r,e){var pe;let t,s,n=e[7].activityId+"",o,c,f,m,a,i,_,g,y,u=((pe=e[7].activityType)==null?void 0:pe.name)+"",d,E,S,O,N,Q,H,$,k,M=e[7].lastFailure+"",B,G,q,T,W,se,re,z,me=lt(e[7].lastHeartbeatTime)+"",ae,ne;return{key:r,first:null,c(){t=h("a"),s=h("div"),o=P(n),c=I(),f=h("div"),m=h("div"),a=h("h4"),i=P("Activity Name"),_=I(),g=h("p"),y=h("span"),d=P(u),E=I(),S=h("div"),O=h("div"),N=h("h3"),Q=P("Last Failure"),H=I(),$=h("pre"),k=h("code"),B=P(M),G=I(),q=h("div"),T=h("div"),W=h("h4"),se=P("Last Heartbeat Time"),re=I(),z=h("p"),ae=P(me),ne=I(),this.h()},l(K){t=v(K,"A",{class:!0,href:!0});var L=w(t);s=v(L,"DIV",{class:!0});var de=w(s);o=D(de,n),de.forEach(p),c=A(L),f=v(L,"DIV",{class:!0});var $e=w(f);m=v($e,"DIV",{class:!0});var X=w(m);a=v(X,"H4",{});var ge=w(a);i=D(ge,"Activity Name"),ge.forEach(p),_=A(X),g=v(X,"P",{});var _e=w(g);y=v(_e,"SPAN",{class:!0});var he=w(y);d=D(he,u),he.forEach(p),_e.forEach(p),X.forEach(p),$e.forEach(p),E=A(L),S=v(L,"DIV",{class:!0});var ve=w(S);O=v(ve,"DIV",{class:!0});var Y=w(O);N=v(Y,"H3",{});var we=w(N);Q=D(we,"Last Failure"),we.forEach(p),H=A(Y),$=v(Y,"PRE",{style:!0,class:!0});var be=w($);k=v(be,"CODE",{class:!0});var ye=w(k);B=D(ye,M),ye.forEach(p),be.forEach(p),Y.forEach(p),ve.forEach(p),G=A(L),q=v(L,"DIV",{class:!0});var Ee=w(q);T=v(Ee,"DIV",{class:!0});var Z=w(T);W=v(Z,"H4",{});var ke=w(W);se=D(ke,"Last Heartbeat Time"),ke.forEach(p),re=A(Z),z=v(Z,"P",{});var Ie=w(z);ae=D(Ie,me),Ie.forEach(p),Z.forEach(p),Ee.forEach(p),ne=A(L),L.forEach(p),this.h()},h(){b(s,"class","text-left font-normal text-gray-500 w-40"),b(y,"class","bg-gray-300 text-gray-700 px-2"),b(m,"class","flex gap-2"),b(f,"class","w-full"),b(k,"class","language-json"),De($,"padding","0 1em"),De($,"margin","0"),b($,"class","rounded-lg"),b(O,"class","flex gap-2"),b(S,"class","w-full"),b(T,"class","flex gap-2"),b(q,"class","w-full"),b(t,"class","flex content-between w-full border-b-2 border-gray-300 p-2 last-of-type:border-b-0 hover:bg-gray-50"),b(t,"href",e[1]),this.first=t},m(K,L){V(K,t,L),l(t,s),l(s,o),l(t,c),l(t,f),l(f,m),l(m,a),l(a,i),l(m,_),l(m,g),l(g,y),l(y,d),l(t,E),l(t,S),l(S,O),l(O,N),l(N,Q),l(O,H),l(O,$),l($,k),l(k,B),l(t,G),l(t,q),l(q,T),l(T,W),l(W,se),l(T,re),l(T,z),l(z,ae),l(t,ne)},p(K,L){e=K},d(K){K&&p(t)}}}function $t(r){let e;return{c(){e=P("Show all")},l(t){e=D(t,"Show all")},m(t,s){V(t,e,s)},d(t){t&&p(e)}}}function gt(r){let e,t,s=r[0].length&&dt(r);return{c(){s&&s.c(),e=Pe()},l(n){s&&s.l(n),e=Pe()},m(n,o){s&&s.m(n,o),V(n,e,o),t=!0},p(n,[o]){n[0].length&&s.p(n,o)},i(n){t||(F(s),t=!0)},o(n){C(s),t=!1},d(n){s&&s.d(n),n&&p(e)}}}function _t(r,e,t){let s;ce(r,ue,a=>t(2,s=a));const{pendingActivities:n}=s.stuff.workflow,{namespace:o,workflow:c,run:f}=s.params,m=nt({namespace:o,workflow:c,run:f});return Ge(()=>{window.Prism.highlightAll()}),[n,m]}class ht extends le{constructor(e){super();ie(this,e,_t,gt,fe,{})}}function vt(r){let e;return{c(){e=P("Summary")},l(t){e=D(t,"Summary")},m(t,s){V(t,e,s)},d(t){t&&p(e)}}}function wt(r){let e;return{c(){e=P("Full")},l(t){e=D(t,"Full")},m(t,s){V(t,e,s)},d(t){t&&p(e)}}}function bt(r){let e;return{c(){e=P("Compact")},l(t){e=D(t,"Compact")},m(t,s){V(t,e,s)},d(t){t&&p(e)}}}function yt(r){let e;return{c(){e=P("JSON")},l(t){e=D(t,"JSON")},m(t,s){V(t,e,s)},d(t){t&&p(e)}}}function Et(r){let e,t,s,n,o,c,f,m;return e=new U({props:{icon:Xe,base:te(r[3]("summary")),href:Te(r[3]("summary",r[0].params.eventId||"1")),$$slots:{default:[vt]},$$scope:{ctx:r}}}),s=new U({props:{icon:Ye,href:te(r[3]("full")),$$slots:{default:[wt]},$$scope:{ctx:r}}}),o=new U({props:{icon:Ze,href:te(r[3]("compact")),$$slots:{default:[bt]},$$scope:{ctx:r}}}),f=new U({props:{icon:et,href:te(r[3]("json")),$$slots:{default:[yt]},$$scope:{ctx:r}}}),{c(){j(e.$$.fragment),t=I(),j(s.$$.fragment),n=I(),j(o.$$.fragment),c=I(),j(f.$$.fragment)},l(a){x(e.$$.fragment,a),t=A(a),x(s.$$.fragment,a),n=A(a),x(o.$$.fragment,a),c=A(a),x(f.$$.fragment,a)},m(a,i){J(e,a,i),V(a,t,i),J(s,a,i),V(a,n,i),J(o,a,i),V(a,c,i),J(f,a,i),m=!0},p(a,i){const _={};i&1&&(_.href=Te(a[3]("summary",a[0].params.eventId||"1"))),i&256&&(_.$$scope={dirty:i,ctx:a}),e.$set(_);const g={};i&256&&(g.$$scope={dirty:i,ctx:a}),s.$set(g);const y={};i&256&&(y.$$scope={dirty:i,ctx:a}),o.$set(y);const u={};i&256&&(u.$$scope={dirty:i,ctx:a}),f.$set(u)},i(a){m||(F(e.$$.fragment,a),F(s.$$.fragment,a),F(o.$$.fragment,a),F(f.$$.fragment,a),m=!0)},o(a){C(e.$$.fragment,a),C(s.$$.fragment,a),C(o.$$.fragment,a),C(f.$$.fragment,a),m=!1},d(a){R(e,a),a&&p(t),R(s,a),a&&p(n),R(o,a),a&&p(c),R(f,a)}}}function kt(r){let e,t,s,n,o,c,f,m,a,i,_,g,y,u,d,E,S,O,N;s=new Fe({props:{heading:"Input",content:r[1],framed:!0}}),o=new Fe({props:{heading:"Result",content:r[2],framed:!0}}),f=new ht({}),d=new ot({props:{$$slots:{default:[Et]},$$scope:{ctx:r}}}),S=new pt({});const Q=r[7].default,H=Ke(Q,r,r[8],null);return{c(){e=h("section"),t=h("div"),j(s.$$.fragment),n=I(),j(o.$$.fragment),c=I(),j(f.$$.fragment),m=I(),a=h("section"),i=h("nav"),_=h("h3"),g=P("Event History"),y=I(),u=h("div"),j(d.$$.fragment),E=I(),j(S.$$.fragment),O=I(),H&&H.c(),this.h()},l($){e=v($,"SECTION",{class:!0});var k=w(e);t=v(k,"DIV",{class:!0});var M=w(t);x(s.$$.fragment,M),n=A(M),x(o.$$.fragment,M),M.forEach(p),c=A(k),x(f.$$.fragment,k),m=A(k),a=v(k,"SECTION",{id:!0});var B=w(a);i=v(B,"NAV",{class:!0});var G=w(i);_=v(G,"H3",{class:!0});var q=w(_);g=D(q,"Event History"),q.forEach(p),y=A(G),u=v(G,"DIV",{class:!0});var T=w(u);x(d.$$.fragment,T),E=A(T),x(S.$$.fragment,T),T.forEach(p),G.forEach(p),O=A(B),H&&H.l(B),B.forEach(p),k.forEach(p),this.h()},h(){b(t,"class","flex gap-4"),b(_,"class","text-lg font-medium"),b(u,"class","flex gap-4"),b(i,"class","flex gap-4 justify-between items-end pb-4"),b(a,"id","event-history"),b(e,"class","flex flex-col gap-4")},m($,k){V($,e,k),l(e,t),J(s,t,null),l(t,n),J(o,t,null),l(e,c),J(f,e,null),l(e,m),l(e,a),l(a,i),l(i,_),l(_,g),l(i,y),l(i,u),J(d,u,null),l(u,E),J(S,u,null),l(a,O),H&&H.m(a,null),N=!0},p($,[k]){const M={};k&257&&(M.$$scope={dirty:k,ctx:$}),d.$set(M),H&&H.p&&(!N||k&256)&&We(H,Q,$,$[8],N?Ue(Q,$[8],k,null):ze($[8]),null)},i($){N||(F(s.$$.fragment,$),F(o.$$.fragment,$),F(f.$$.fragment,$),F(d.$$.fragment,$),F(S.$$.fragment,$),F(H,$),N=!0)},o($){C(s.$$.fragment,$),C(o.$$.fragment,$),C(f.$$.fragment,$),C(d.$$.fragment,$),C(S.$$.fragment,$),C(H,$),N=!1},d($){$&&p(e),R(s),R(o),R(f),R(d),R(S),H&&H.d($)}}}const Mt=async function({params:r,stuff:e,fetch:t}){const{workflow:s}=e,{namespace:n}=r,o={namespace:n,workflowId:s.id,runId:s.runId},{events:c,eventGroups:f}=await ft(o,t);return{props:{namespace:n,workflow:s,events:c,eventGroups:f},stuff:{events:c,eventGroups:f}}};function It(r,e,t){let s;ce(r,ue,g=>t(0,s=g));let{$$slots:n={},$$scope:o}=e,{namespace:c}=e,{workflow:f}=e,{events:m}=e;const{input:a,result:i}=ct(m),_=(g,y)=>({namespace:c,workflow:f.id,run:f.runId,view:g,eventId:y});return r.$$set=g=>{"namespace"in g&&t(4,c=g.namespace),"workflow"in g&&t(5,f=g.workflow),"events"in g&&t(6,m=g.events),"$$scope"in g&&t(8,o=g.$$scope)},[s,a,i,_,c,f,m,n,o]}class qt extends le{constructor(e){super();ie(this,e,It,kt,fe,{namespace:4,workflow:5,events:6})}}export{qt as default,Mt as load};
