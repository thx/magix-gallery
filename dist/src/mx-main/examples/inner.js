define("mx-main/examples/inner",["magix","$"],(n,e,i)=>{var t=n("magix"),r=n("$");i.exports=t.View.extend({tmpl:function(n,e,i,t,r,a,u,o){if(i||(i=n),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,f=function(n){return"&"+c[n]+";"};r=function(n){return""+(null==n?"":n)},function(n){return r(n).replace(d,f)}}if(!a){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(n){return l[n]},m=/[!')(*]/g;a=function(n){return encodeURIComponent(r(n)).replace(m,s)}}if(!o){var g=/[\\'"]/g;o=function(n){return r(n).replace(g,"\\$&")}}return'<div mxs="_zs_gallerydi:_" class="min-height-320">自定义内容</div>','<div mxs="_zs_gallerydi:_" class="min-height-320">自定义内容</div>'},init:function(n){this.updater.set({info:n.info||{},data:r.extend(!0,{},n.data||{})})},render:function(){this.updater.digest()},check:function(){var n=this.updater.get("info"),e={};return e["test_"+n.index]=n.label,new Promise(function(i){i({ok:!0,msg:n.label,remain:e})})}})});