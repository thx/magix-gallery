define("mx-collapse/__test__/content",["magix","mx-preview/index"],(e,r,i)=>{e("mx-preview/index");var n=e("magix");n.applyStyle("_zs_galleryz","._zs_gallerydi{margin-right:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}"),i.exports=n.View.extend({tmpl:function(e,r,i,n,a,t,l,o){if(i||(i=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},function(e){return a(e).replace(c,m)}}if(!t){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return u[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(g,x)}}if(!o){var s=/[\\'"]/g;o=function(e){return a(e).replace(s,"\\$&")}}var p="",v=e.outer;return p+='<div mxa="_zs_galleryan:_" class="mb20">当前模块标题是：'+a(v.title)+'</div><div mxs="_zs_galleryan:_" class="clearfix"><div class="_zs_gallerydi" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerydi" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div></div>'},init:function(e){var r=e.data||{};this.updater.set({outer:r})},render:function(){this.updater.digest({})}})});