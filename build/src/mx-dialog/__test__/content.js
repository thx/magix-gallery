define("mx-dialog/__test__/content",["magix","$"],(n,t,e)=>{var r=n("magix");n("$");e.exports=r.View.extend({tmpl:function(n,t,e,r,a,i,o,u){if(e||(e=n),!a){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,l=function(n){return"&"+c[n]+";"};a=function(n){return""+(null==n?"":n)},r=function(n){return a(n).replace(d,l)}}if(!i){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(n){return s[n]},v=/[!')(*]/g;i=function(n){return encodeURIComponent(a(n)).replace(v,f)}}if(!u){var _=/[\\'"]/g;u=function(n){return a(n).replace(_,"\\$&")}}var g="",m=n.text,p=n.content;return g+='<div mxa="_zs_galleryaP:_" class="fontsize-16 mb20">标题：'+r(m)+'</div><div mxa="_zs_galleryaP:a" class="mb20">内容：'+r(p)+'</div><div mxs="_zs_galleryaP:_"><a href="#!/popover/index" class="btn btn-brand">从当前页面跳走，自动销毁浮层</a></div>'},init:function(n){this.updater.set(n.data)},render:function(){this.updater.digest()}})});