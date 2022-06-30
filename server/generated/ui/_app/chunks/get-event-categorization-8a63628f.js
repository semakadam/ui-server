const F=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),I=["workflowExecutionStartedEventAttributes","workflowExecutionCompletedEventAttributes","workflowExecutionFailedEventAttributes","workflowExecutionTimedOutEventAttributes","workflowTaskStartedEventAttributes","workflowTaskScheduledEventAttributes","workflowTaskCompletedEventAttributes","workflowTaskTimedOutEventAttributes","workflowTaskFailedEventAttributes","activityTaskScheduledEventAttributes","activityTaskCompletedEventAttributes","activityTaskStartedEventAttributes","activityTaskFailedEventAttributes","activityTaskTimedOutEventAttributes","timerStartedEventAttributes","timerFiredEventAttributes","activityTaskCancelRequestedEventAttributes","activityTaskCanceledEventAttributes","timerCanceledEventAttributes","markerRecordedEventAttributes","workflowExecutionSignaledEventAttributes","workflowExecutionTerminatedEventAttributes","workflowExecutionCancelRequestedEventAttributes","workflowExecutionCanceledEventAttributes","requestCancelExternalWorkflowExecutionInitiatedEventAttributes","requestCancelExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionCancelRequestedEventAttributes","workflowExecutionContinuedAsNewEventAttributes","startChildWorkflowExecutionInitiatedEventAttributes","startChildWorkflowExecutionFailedEventAttributes","childWorkflowExecutionStartedEventAttributes","childWorkflowExecutionCompletedEventAttributes","childWorkflowExecutionFailedEventAttributes","childWorkflowExecutionCanceledEventAttributes","childWorkflowExecutionTimedOutEventAttributes","childWorkflowExecutionTerminatedEventAttributes","signalExternalWorkflowExecutionInitiatedEventAttributes","signalExternalWorkflowExecutionFailedEventAttributes","externalWorkflowExecutionSignaledEventAttributes","upsertWorkflowSearchAttributesEventAttributes"],O=t=>{for(const e of I)if(e in t)return e},R=(t,e)=>t[e],tt=t=>{const e=O(t),r=R(t,e);return{key:e,attributes:r}},i=t=>e=>Boolean(e[t]),et=i("workflowExecutionCompletedEventAttributes"),q=i("workflowExecutionFailedEventAttributes"),G=i("workflowExecutionTimedOutEventAttributes"),N=i("workflowTaskTimedOutEventAttributes"),$=i("workflowTaskFailedEventAttributes"),E=i("activityTaskScheduledEventAttributes"),L=i("activityTaskStartedEventAttributes"),M=i("activityTaskCompletedEventAttributes"),T=i("activityTaskFailedEventAttributes"),x=i("activityTaskTimedOutEventAttributes"),k=i("timerStartedEventAttributes"),B=i("timerFiredEventAttributes"),K=i("activityTaskCancelRequestedEventAttributes"),C=i("activityTaskCanceledEventAttributes"),W=i("timerCanceledEventAttributes"),w=i("markerRecordedEventAttributes"),f=i("workflowExecutionSignaledEventAttributes"),j=i("workflowExecutionTerminatedEventAttributes"),z=i("workflowExecutionCanceledEventAttributes"),v=i("startChildWorkflowExecutionInitiatedEventAttributes"),P=i("childWorkflowExecutionStartedEventAttributes"),U=i("childWorkflowExecutionCompletedEventAttributes"),_=i("childWorkflowExecutionFailedEventAttributes"),D=i("childWorkflowExecutionCanceledEventAttributes"),H=i("childWorkflowExecutionTimedOutEventAttributes"),J=i("childWorkflowExecutionTerminatedEventAttributes"),A=i("signalExternalWorkflowExecutionInitiatedEventAttributes"),Q=i("signalExternalWorkflowExecutionFailedEventAttributes"),h=t=>x(t)||T(t)||q(t)||G(t)||N(t)||$(t)||_(t)||H(t)||Q(t),it=t=>b(t)?t.isFailureOrTimedOut:h(t),y=t=>C(t)||W(t)||z(t)||D(t),rt=t=>b(t)?t.isCanceled:y(t),S=t=>j(t)||J(t),ot=t=>b(t)?t.isTerminated:S(t),p=t=>{if(E(t)||v(t)||k(t)||A(t)||f(t)||w(t))return t.id;if(L(t))return String(t.activityTaskStartedEventAttributes.scheduledEventId);if(C(t))return String(t.activityTaskCanceledEventAttributes.scheduledEventId);if(K(t))return String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId);if(T(t))return String(t.activityTaskFailedEventAttributes.scheduledEventId);if(x(t))return String(t.activityTaskTimedOutEventAttributes.scheduledEventId);if(M(t))return String(t.activityTaskCompletedEventAttributes.scheduledEventId);if(P(t))return String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId);if(U(t))return String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId);if(B(t))return String(t.timerFiredEventAttributes.startedEventId);if(W(t))return String(t.timerCanceledEventAttributes.startedEventId)},V=t=>{var e,r,n,o,c,d,a,u,l;if(!!t){if(E(t))return(r=(e=t.activityTaskScheduledEventAttributes)==null?void 0:e.activityType)==null?void 0:r.name;if(k(t))return`Timer ${(n=t.timerStartedEventAttributes)==null?void 0:n.timerId} (${(o=t.timerStartedEventAttributes)==null?void 0:o.startToFireTimeout})`;if(A(t))return`Signal: ${(c=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:c.signalName}`;if(f(t))return`Signal received: ${(d=t.workflowExecutionSignaledEventAttributes)==null?void 0:d.signalName}`;if(w(t))return`Marker: ${(a=t.markerRecordedEventAttributes)==null?void 0:a.markerName}`;if(v(t))return`Child Workflow: ${(l=(u=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:u.workflowType)==null?void 0:l.name}`}},m=({events:t})=>{let e=0,r;for(const n of t.values()){const o=Number(n.id);o>=e&&(e=o,r=n)}return r},s=t=>{const e=p(t),r=V(t),{timestamp:n,category:o,classification:c}=t,d=t,a=new Map,u=new Set;return a.set(t.id,t),u.add(t.id),{id:e,name:r,events:a,eventIds:u,initialEvent:d,timestamp:n,category:o,classification:c,get eventTime(){var l;return(l=m(this))==null?void 0:l.eventTime},get attributes(){var l;return(l=m(this))==null?void 0:l.attributes},get eventList(){return Array.from(this.events,([l,g])=>g)},get isFailureOrTimedOut(){return Boolean(this.eventList.find(h))},get isCanceled(){return Boolean(this.eventList.find(y))},get isTerminated(){return Boolean(this.eventList.find(S))}}},X=t=>{if(E(t)||v(t)||k(t)||A(t)||f(t)||w(t))return s(t)},Y=(t,e)=>{!t||(t.events.set(e.id,e),t.eventIds.add(e.id),t.timestamp=e.timestamp)},nt=t=>{const e={};for(const r of t){const n=p(r),o=X(r);o?e[o.id]=o:Y(e[n],r)}return Object.values(e)},b=t=>t==null?!1:F(t,"events"),Z={ActivityTaskCanceled:"activity",ActivityTaskCancelRequested:"activity",ActivityTaskCompleted:"activity",ActivityTaskFailed:"activity",ActivityTaskScheduled:"activity",ActivityTaskStarted:"activity",ActivityTaskTimedOut:"activity",ChildWorkflowExecutionCanceled:"child-workflow",ChildWorkflowExecutionCompleted:"child-workflow",ChildWorkflowExecutionFailed:"child-workflow",ChildWorkflowExecutionStarted:"child-workflow",ChildWorkflowExecutionTerminated:"child-workflow",ChildWorkflowExecutionTimedOut:"child-workflow",StartChildWorkflowExecutionFailed:"child-workflow",StartChildWorkflowExecutionInitiated:"child-workflow",MarkerRecorded:"marker",SignalExternalWorkflowExecutionFailed:"signal",SignalExternalWorkflowExecutionInitiated:"signal",WorkflowExecutionSignaled:"signal",TimerCanceled:"timer",TimerFired:"timer",TimerStarted:"timer",WorkflowExecutionCanceled:"workflow",WorkflowExecutionCancelRequested:"workflow",WorkflowExecutionCompleted:"workflow",WorkflowExecutionContinuedAsNew:"workflow",WorkflowExecutionFailed:"workflow",WorkflowExecutionStarted:"workflow",WorkflowExecutionTerminated:"workflow",WorkflowExecutionTimedOut:"workflow",WorkflowTaskCompleted:"workflow",WorkflowTaskFailed:"workflow",WorkflowTaskScheduled:"workflow",WorkflowTaskStarted:"workflow",WorkflowTaskTimedOut:"workflow",ExternalWorkflowExecutionCancelRequested:"workflow",ExternalWorkflowExecutionSignaled:"workflow",RequestCancelExternalWorkflowExecutionFailed:"workflow",RequestCancelExternalWorkflowExecutionInitiated:"workflow",UpsertWorkflowSearchAttributes:"command"},lt=[{label:"All",option:void 0},{label:"Activity",option:"activity"},{label:"Child Workflow",option:"child-workflow"},{label:"Command",option:"command"},{label:"Marker",option:"marker"},{label:"Signal",option:"signal"},{label:"Timer",option:"timer"},{label:"Workflow",option:"workflow"}],st=[{label:"All",option:void 0},{label:"Activity",option:"activity"},{label:"Signal",option:"signal"},{label:"Timer",option:"timer"}],at=t=>Z[t];export{at as a,lt as b,st as c,b as d,m as e,tt as f,nt as g,it as h,et as i,rt as j,ot as k};
