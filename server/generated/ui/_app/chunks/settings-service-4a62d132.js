import{r as f,a as w,b as h}from"./route-for-api-9b8f6a57.js";import{s as E}from"./settings-0aa2906c.js";const t={};function T(){var a;return(a={}.VITE_TEMPORAL_UI_BUILD_TARGET)!=null?a:null}const d=/(tmprl\.cloud|tmprl-test\.cloud)$/,b=async(a=fetch)=>{var n,e,l,m,i,u;const o=await f(w("settings"),{request:a}),r=T(),c={auth:{enabled:!!((n=o==null?void 0:o.Auth)!=null&&n.Enabled),options:(e=o==null?void 0:o.Auth)==null?void 0:e.Options},baseUrl:((m=(l=t==null?void 0:t.env)==null?void 0:l.VITE_API)!=null?m:h)?window.location.origin:"",codec:{endpoint:(i=o==null?void 0:o.Codec)==null?void 0:i.Endpoint,accessToken:(u=o==null?void 0:o.Codec)==null?void 0:u.AccessToken},defaultNamespace:(o==null?void 0:o.DefaultNamespace)||"default",showTemporalSystemNamespace:o==null?void 0:o.ShowTemporalSystemNamespace,notifyOnNewVersion:o==null?void 0:o.NotifyOnNewVersion,feedbackURL:o==null?void 0:o.FeedbackURL,runtimeEnvironment:{get isCloud(){return r?r==="cloud":d.test(window.location.hostname)},get isLocal(){return r?r==="local":d.test(window.location.hostname)},envOverride:Boolean(r)},version:o==null?void 0:o.Version};return E.set(c),c};export{b as f};
