var O=Object.defineProperty;var T=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var _=(n,o,c)=>o in n?O(n,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[o]=c,l=(n,o)=>{for(var c in o||(o={}))S.call(o,c)&&_(n,c,o[c]);if(T)for(var c of T(o))q.call(o,c)&&_(n,c,o[c]);return n};import{w as C}from"./index-1910a742.js";import{n as E}from"./notifications-0d3ffac1.js";import{i as k}from"./is-network-error-ac7c8caf.js";import{c as $,t as x}from"./route-for-9a2d1abe.js";const P=!0,F=C(null),b=n=>{if(N(n)&&P){window.location.assign($());return}if(U(n)&&P){window.location.assign($());return}if(k(n))throw E.add("error",`${n.statusCode} ${n.statusText}`),F.set(n),n;typeof n=="string"&&E.add("error",n),n instanceof Error&&E.add("error",n.message)},N=n=>k(n)?n.statusCode===401:!1,U=n=>k(n)?n.statusCode===403:!1,K=n=>typeof n=="function",Q=n=>n.message!==void 0&&typeof n.message=="string",D=async(n,o={},c=10)=>{const{params:i={},request:u=fetch,token:f,shouldRetry:h=!1,notifyOnError:V=!0,onError:t,retryInterval:g=5e3}=o;let{options:I}=o;const y=f?{next_page_token:f}:{},v=new URLSearchParams(l(l({},i),y)),A=x(n,v);try{I=M(I);const s=await u(A,I),w=await s.json(),{status:L,statusText:R}=s;if(!s.ok)if(t&&K(t))t({status:L,statusText:R,body:w});else throw{statusCode:s.status,statusText:s.statusText,response:s};return w}catch(s){if(V){if(b(s),h&&c>0)return new Promise(w=>{setTimeout(()=>{w(D(n,o,c-1))},g)})}else throw s}},M=n=>{const o=l({credentials:"include"},n);return o.headers=j(n==null?void 0:n.headers),o},j=n=>{n||(n={});const o="_csrf=",c="X-CSRF-TOKEN";try{let u=document.cookie.split(";").find(f=>f.includes(o));u&&!n[c]&&(u=u.trim().slice(o.length),n[c]=u)}catch(i){console.error(i)}return n};let d="";d.endsWith("/")&&(d=d.slice(0,-1));const B=n=>(n.startsWith("/")&&(n=n.slice(1)),`${d}/api/v1/${n}`),W=n=>Object.keys(n!=null?n:{}).reduce((o,c)=>(o[c]=encodeURIComponent(encodeURIComponent(n[c])),o),{namespace:"",workflowId:"",runId:"",queue:""});function Y(n,o,c=!0){c&&(o=W(o));const i={cluster:"/cluster",settings:"/settings",user:"/me",namespaces:"/namespaces","task-queue":`/namespaces/${o==null?void 0:o.namespace}/task-queues/${o==null?void 0:o.queue}`,workflows:`/namespaces/${o==null?void 0:o.namespace}/workflows`,"workflows.archived":`/namespaces/${o==null?void 0:o.namespace}/workflows/archived`,workflow:`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}`,"workflow.terminate":`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}/terminate`,"events.ascending":`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}/events`,"events.descending":`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}/events/reverse`,query:`/namespaces/${o==null?void 0:o.namespace}/workflows/${o==null?void 0:o.workflowId}/runs/${o==null?void 0:o.runId}/query`};return B(i[n])}export{Y as a,P as b,Q as c,b as h,K as i,F as n,D as r};