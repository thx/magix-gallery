define("mx-table/__test__/index4",["magix","$","mx-title/second","./1"],(e,t,n)=>{e("mx-title/second"),e("./1");var i=e("magix");e("$");n.exports=i.View.extend({tmpl:function(e,t,n,i,r,l,_,a){if(n||(n=e),!r){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+m[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(x,d)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},s=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(s,o)}}if(!a){var u=/[\\'"]/g;a=function(e){return r(e).replace(u,"\\$&")}}return'<div mxs="_zs_galleryeH:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryeH:a" mx-view="mx-table/__test__/1"></div>','<div mxs="_zs_galleryeH:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryeH:a" mx-view="mx-table/__test__/1"></div>'},render:function(){this.updater.digest()}})});