define("mx-effects/examples/anim",["magix","$","mx-title/second","./18"],(e,i,n)=>{e("mx-title/second"),e("./18");var t=e("magix");e("$");n.exports=t.View.extend({tmpl:function(e,i,n,t,r,l,s,a){if(n||(n=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(c,m)}}if(!l){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},f=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(f,x)}}if(!a){var o=/[\\'"]/g;a=function(e){return r(e).replace(o,"\\$&")}}return'<div mxs="_zs_galleryb!:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb!:a" class="clearfix"><div class="_zs_galleryd"><div mx-view="mx-effects/examples/18"></div></div></div>','<div mxs="_zs_galleryb!:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb!:a" class="clearfix"><div class="_zs_galleryd"><div mx-view="mx-effects/examples/18"></div></div></div>'},render:function(){this.updater.digest({})}})});