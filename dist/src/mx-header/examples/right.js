define("mx-header/examples/right",["magix","$"],(t,n,e)=>{var r=t("magix");t("$");e.exports=r.View.extend({tmpl:function(t,n,e,r,u,a,i,o){if(e||(e=t),!u){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,b=function(t){return"&"+c[t]+";"};u=function(t){return""+(null==t?"":t)},function(t){return u(t).replace(l,b)}}if(!a){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(t){return f[t]},m=/[!')(*]/g;a=function(t){return encodeURIComponent(u(t)).replace(m,s)}}if(!o){var p=/[\\'"]/g;o=function(t){return u(t).replace(p,"\\$&")}}return'<button mxs="_zs_galleryc1:_" type="button" class="mx-btn btn-brand w80">请登录</button>','<button mxs="_zs_galleryc1:_" type="button" class="mx-btn btn-brand w80">请登录</button>'},render:function(){this.updater.digest()}})});