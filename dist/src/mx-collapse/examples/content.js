define("mx-collapse/examples/content",["magix","mx-preview/index"],(e,r,i)=>{e("mx-preview/index");var a=e("magix");a.applyStyle("_zs_galleryB","._zs_gallerydJ{margin-right:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}"),i.exports=a.View.extend({tmpl:function(e,r,i,a,n,t,l,o){if(i||(i=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},function(e){return n(e).replace(c,m)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return x[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(g,u)}}if(!o){var s=/[\\'"]/g;o=function(e){return n(e).replace(s,"\\$&")}}var p="",v=e.outer;return p+='<div mxa="_zs_galleryaI:_" class="mb20">当前模块标题是：'+n(v.title)+'</div><div mxs="_zs_galleryaI:_" class="clearfix"><div class="_zs_gallerydJ" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerydJ" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div></div>'},init:function(e){var r=e.data||{};this.updater.set({outer:r})},render:function(){this.updater.digest({})}})});