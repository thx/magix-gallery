define("mx-main/examples/tip",["magix","$"],(e,n,i)=>{var r=e("magix");e("$");i.exports=r.View.extend({tmpl:function(e,n,i,r,t,a,u,c){if(i||(i=e),!t){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,m=function(e){return"&"+l[e]+";"};t=function(e){return""+(null==e?"":e)},function(e){return t(e).replace(f,m)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},s=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(s,p)}}if(!c){var g=/[\\'"]/g;c=function(e){return t(e).replace(g,"\\$&")}}return'<div mxs="_zs_galleryc|:_" class="min-height-200 pa20">自定义右侧提示view</div>','<div mxs="_zs_galleryc|:_" class="min-height-200 pa20">自定义右侧提示view</div>'},render:function(){this.updater.digest()}})});