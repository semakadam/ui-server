import{r as i,a as p,b as f}from"./route-for-api-e9ca21c2.js";const a={};function w(){var r;return(r={}.VITE_TEMPORAL_UI_BUILD_TARGET)!=null?r:null}const m=/(tmprl\.cloud|tmprl-test\.cloud)$/,E=async(r=fetch)=>{var n,c,t,l,u,d;const o=await i(p("settings"),{request:r}),e=w();return{auth:{enabled:!!((n=o==null?void 0:o.Auth)!=null&&n.Enabled),options:(c=o==null?void 0:o.Auth)==null?void 0:c.Options},baseUrl:((l=(t=a==null?void 0:a.env)==null?void 0:t.VITE_API)!=null?l:f)?window.location.origin:"",codec:{endpoint:(u=o==null?void 0:o.Codec)==null?void 0:u.Endpoint,accessToken:(d=o==null?void 0:o.Codec)==null?void 0:d.AccessToken},defaultNamespace:(o==null?void 0:o.DefaultNamespace)||"default",showTemporalSystemNamespace:o==null?void 0:o.ShowTemporalSystemNamespace,notifyOnNewVersion:o==null?void 0:o.NotifyOnNewVersion,feedbackURL:o==null?void 0:o.FeedbackURL,runtimeEnvironment:{get isCloud(){return e?e==="cloud":m.test(window.location.hostname)},get isLocal(){return e?e==="local":m.test(window.location.hostname)},envOverride:Boolean(e)},version:o==null?void 0:o.Version}};export{E as f};
