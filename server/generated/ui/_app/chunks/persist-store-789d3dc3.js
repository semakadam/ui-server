import{w as n}from"./index-d28ebc24.js";function S(t,s=""){var o,i;let e=s;try{(o=window==null?void 0:window.localStorage)!=null&&o.getItem(t)&&(e=JSON.parse((i=window==null?void 0:window.localStorage)==null?void 0:i.getItem(t)))}catch{e=null}const{subscribe:a,set:c}=n(e);return{subscribe:a,set:r=>{var l;(l=window==null?void 0:window.localStorage)==null||l.setItem(t,JSON.stringify(r)),c(r)}}}export{S as p};
