define("mx-main/examples/index-inner",["magix","$","mx-form/index","mx-form/validator"],(n,e,i)=>{var r=n("magix"),t=(n("$"),n("mx-form/index")),m=n("mx-form/validator");i.exports=r.View.extend({tmpl:function(n,e,i,r,t,m,o,a){if(i||(i=n),!t){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,f=function(n){return"&"+u[n]+";"};t=function(n){return""+(null==n?"":n)},function(n){return t(n).replace(c,f)}}if(!m){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(n){return d[n]},x=/[!')(*]/g;m=function(n){return encodeURIComponent(t(n)).replace(x,l)}}if(!a){var s=/[\\'"]/g;a=function(n){return t(n).replace(s,"\\$&")}}return'<div mxs="_zs_gallerydp:_" class="min-height-320">自定义内容</div>','<div mxs="_zs_gallerydp:_" class="min-height-320">自定义内容</div>'},mixins:[t,m],init:function(n){},render:function(){this.updater.digest({int:""})},check:function(){return new Promise(function(n){n({ok:!0,remain:{test:2}})})}})});