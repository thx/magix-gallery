define("mx-collapse/__test__/content",["magix","mx-preview/index"],(e,r,i)=>{e("mx-preview/index");var a=e("magix");a.applyStyle("_zs_galleryy","._zs_gallerydg{margin-right:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}"),i.exports=a.View.extend({tmpl:function(e,r,i,a,t,n,l,o){if(i||(i=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,g=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},function(e){return t(e).replace(c,g)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return m[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(x,u)}}if(!o){var s=/[\\'"]/g;o=function(e){return t(e).replace(s,"\\$&")}}var p="",v=e.outer;return p+='<div mxa="_zs_galleryah:_" class="mb20">当前模块标题是：'+t(v.title)+'</div><div mxs="_zs_galleryah:_" class="clearfix"><div class="_zs_gallerydg" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerydg" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div></div>'},init:function(e){var r=e.data||{};this.updater.set({outer:r})},render:function(){this.updater.digest({})}})});