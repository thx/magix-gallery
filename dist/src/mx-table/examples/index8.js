define("mx-table/examples/index8",["magix","$","mx-title/second","./11"],(e,n,t)=>{e("mx-title/second"),e("./11");var i=e("magix");e("$");t.exports=i.View.extend({tmpl:function(e,n,t,i,r,a,l,m){if(t||(t=e),!r){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+x[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(d,c)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(e){return o[e]},u=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(u,s)}}if(!m){var f=/[\\'"]/g;m=function(e){return r(e).replace(f,"\\$&")}}return'<div mxs="_zs_galleryfa:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryfa:a" mx-view="mx-table/examples/11"></div>','<div mxs="_zs_galleryfa:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryfa:a" mx-view="mx-table/examples/11"></div>'},render:function(){this.updater.digest()}})});