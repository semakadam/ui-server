var $=Object.defineProperty,D=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var F=(t,i,e)=>i in t?$(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,A=(t,i)=>{for(var e in i||(i={}))M.call(i,e)&&F(t,e,i[e]);if(O)for(var e of O(i))_.call(i,e)&&F(t,e,i[e]);return t},q=(t,i)=>D(t,G(i));import{au as K,aH as H}from"./vendor-f2f66dce.js";import{s as b,d as L,a as B}from"./data-converter-config-e5a50318.js";import{a as N}from"./atob-5f9d7101.js";import{f as U}from"./format-date-f4b2075a.js";import{g as z}from"./get-event-categorization-90555be0.js";const Q=(t,i)=>{if(!t)return{hasWebsocket:!1,websocket:null,closeSocket:function(){return null}};try{v=new H(`ws://localhost:${t}/`,A({packMessage:e=>JSON.stringify(e),unpackMessage:e=>JSON.parse(e),attachRequestId:(e,r)=>Object.assign({requestId:r},e),extractRequestId:e=>e&&e.requestId},i)),v.onError(()=>{console.error("A WebSocket error occurred.")})}catch{b()}return v.open(),{hasWebsocket:!0,websocket:v,closeSocket:function(){return v.close()}}};let v=null;var j;const V=(j=K(L))!=null?j:null,X=Q(V);async function Y(t,i){if(!i.isOpened)try{await i.open()}catch{b()}return i.isOpened?i.sendRequest({payload:JSON.stringify(t)}).then(r=>{B();try{return JSON.parse(r.content)}catch{return r.content}}).catch(()=>{b()}):Promise.resolve(t)}function m(t){var e,r;const i=N(String((r=(e=t==null?void 0:t.metadata)==null?void 0:e.encoding)!=null?r:""));switch(t.metadata.encodingDecoded=i,i){case"json/plain":case"json/protobuf":try{return JSON.parse(N(String(t.data)))}catch{}}return t}const Z=async(t,i)=>{var o,a,c,d,l,k,g,C,W,y,I,R;const e=t,r=(d=(c=(o=e==null?void 0:e.input)==null?void 0:o.payloads)!=null?c:(a=e==null?void 0:e.result)==null?void 0:a.payloads)!=null?d:null;if(r){let n;const u=i!=null?i:X;(i==null?void 0:i.hasWebsocket)?n=await Promise.all((r!=null?r:[]).map(async P=>await Y(P,u.websocket))):n=r.map(m),((l=e==null?void 0:e.input)==null?void 0:l.payloads)&&(e.input.payloads=n),((k=e==null?void 0:e.result)==null?void 0:k.payloads)&&(e.result.payloads=n)}if((g=e==null?void 0:e.searchAttributes)==null?void 0:g.indexedFields){const n=(C=e==null?void 0:e.searchAttributes)==null?void 0:C.indexedFields;Object.entries(n).forEach(([u,E])=>{n[u]=m(E)})}if((W=e==null?void 0:e.memo)==null?void 0:W.fields){const n=(y=e==null?void 0:e.memo)==null?void 0:y.fields;Object.entries(n).forEach(([u,E])=>{n[u]=m(E)})}if((I=e==null?void 0:e.header)==null?void 0:I.fields){const n=(R=e==null?void 0:e.header)==null?void 0:R.fields;Object.entries(n).forEach(([u,E])=>{n[u]=m(E)})}if(e==null?void 0:e.queryResult){const n=e==null?void 0:e.queryResult;Object.entries(n).forEach(([u,E])=>{n[u]=m(E)})}return e},tt=["workflowExecutionStartedEventAttributes","workflowExecutionCompletedEventAttributes","workflowExecutionFailedEventAttributes","workflowExecutionTimedOutEventAttributes","workflowTaskStartedEventAttributes","workflowTaskScheduledEventAttributes","workflowTaskCompletedEventAttributes","workflowTaskTimedOutEventAttributes","workflowTaskFailedEventAttributes","activityTaskScheduledEventAttributes","activityTaskCompletedEventAttributes","activityTaskStartedEventAttributes","activityTaskFailedEventAttributes","activityTaskTimedOutEventAttributes","timerStartedEventAttributes","timerFiredEventAttributes","activityTaskCancelRequestedEventAttributes","activityTaskCanceledEventAttributes","timerCanceledEventAttributes","markerRecordedEventAttributes","workflowExecutionSignaledEventAttributes","workflowExecutionTerminatedEventAttributes","workflowExecutionCancelRequestedEventAttributes","workflowExecutionCanceledEventAttributes","requestCancelExternalWorkflowExecutionInitiatedEventAttributes","requestCancelExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionCancelRequestedEventAttributes","workflowExecutionContinuedAsNewEventAttributes","startChildWorkflowExecutionInitiatedEventAttributes","startChildWorkflowExecutionFailedEventAttributes","childWorkflowExecutionStartedEventAttributes","childWorkflowExecutionCompletedEventAttributes","childWorkflowExecutionFailedEventAttributes","childWorkflowExecutionCanceledEventAttributes","childWorkflowExecutionTimedOutEventAttributes","childWorkflowExecutionTerminatedEventAttributes","signalExternalWorkflowExecutionInitiatedEventAttributes","signalExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionSignaledEventAttributes","upsertWorkflowSearchAttributesEventAttributes"],et=t=>{for(const i of tt)if(i in t)return i},it=(t,i)=>t[i],rt=t=>{const i=et(t),e=it(t,i);return{key:i,attributes:e}},s=t=>i=>Boolean(i[t]),w=s("activityTaskScheduledEventAttributes"),nt=s("activityTaskStartedEventAttributes"),st=s("activityTaskCompletedEventAttributes"),ot=s("activityTaskFailedEventAttributes"),at=s("activityTaskTimedOutEventAttributes"),S=s("timerStartedEventAttributes"),ct=s("timerFiredEventAttributes"),ut=s("activityTaskCancelRequestedEventAttributes"),dt=s("activityTaskCanceledEventAttributes"),lt=s("timerCanceledEventAttributes"),T=s("markerRecordedEventAttributes"),p=s("workflowExecutionSignaledEventAttributes"),x=s("startChildWorkflowExecutionInitiatedEventAttributes"),Et=s("childWorkflowExecutionStartedEventAttributes"),ft=s("childWorkflowExecutionCompletedEventAttributes"),h=s("signalExternalWorkflowExecutionInitiatedEventAttributes"),J=t=>{if(w(t)||x(t)||S(t)||h(t)||p(t)||T(t))return t.id;if(nt(t))return String(t.activityTaskStartedEventAttributes.scheduledEventId);if(dt(t))return String(t.activityTaskCanceledEventAttributes.scheduledEventId);if(ut(t))return String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId);if(ot(t))return String(t.activityTaskFailedEventAttributes.scheduledEventId);if(at(t))return String(t.activityTaskTimedOutEventAttributes.scheduledEventId);if(st(t))return String(t.activityTaskCompletedEventAttributes.scheduledEventId);if(Et(t))return String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId);if(ft(t))return String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId);if(ct(t))return String(t.timerFiredEventAttributes.startedEventId);if(lt(t))return String(t.timerCanceledEventAttributes.startedEventId)},kt=t=>{var i,e,r,o,a,c,d,l,k;if(!!t){if(w(t))return(e=(i=t.activityTaskScheduledEventAttributes)==null?void 0:i.activityType)==null?void 0:e.name;if(S(t))return`Timer ${(r=t.timerStartedEventAttributes)==null?void 0:r.timerId} (${(o=t.timerStartedEventAttributes)==null?void 0:o.startToFireTimeout})`;if(h(t))return`Signal: ${(a=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:a.signalName}`;if(p(t))return`Signal received: ${(c=t.workflowExecutionSignaledEventAttributes)==null?void 0:c.signalName}`;if(T(t))return`Marker: ${(d=t.markerRecordedEventAttributes)==null?void 0:d.markerName}`;if(x(t))return`Child Workflow: ${(k=(l=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:l.workflowType)==null?void 0:k.name}`}},f=t=>{const i=J(t),e=kt(t),{timestamp:r,category:o,classification:a}=t,c=t,d=new Map,l=new Set;return d.set(t.id,t),l.add(t.id),{id:i,name:e,events:d,eventIds:l,initialEvent:c,timestamp:r,category:o,classification:a}},vt=t=>{if(w(t)||x(t)||S(t)||h(t)||p(t)||T(t))return f(t)},mt=(t,i)=>{!t||(t.events.set(i.id,i),t.eventIds.add(i.id),t.timestamp=i.timestamp)},At=t=>{const i={};for(const e of t){const r=J(e),o=vt(e);o?i[o.id]=o:mt(i[r],e)}return Object.values(i)},bt=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],wt=t=>{if(t.includes("RequestCancel"))return"CancelRequested";for(const i of bt)if(t.includes(i))return i};async function St(t){const{key:i,attributes:e}=rt(t),r=await Z(e);return A({type:i},r)}const Tt=async t=>{const i=String(t.eventId),e=t.eventType,r=U(String(t.eventTime)),o=wt(e),a=z(e),c=await St(t);return q(A({},t),{attributes:c,eventType:e,classification:o,category:a,id:i,name:e,timestamp:r})},yt=async t=>{const i=await Promise.all(t.map(Tt)),e=At(i);return{events:i,eventGroups:e}};export{yt as t};
