define("mx-table/examples/index3",["magix","$","mx-title/second","./2","./3"],(e,t,i)=>{e("mx-title/second"),e("./2"),e("./3");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,l,m,r,x){if(i||(i=e),!l){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,d=function(e){return"&"+a[e]+";"};l=function(e){return""+(null==e?"":e)},function(e){return l(e).replace(s,d)}}if(!m){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return v[e]},o=/[!')(*]/g;m=function(e){return encodeURIComponent(l(e)).replace(o,c)}}if(!x){var u=/[\\'"]/g;x=function(e){return l(e).replace(u,"\\$&")}}return'<div mxs="_zs_gallerye{:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerye{:a" mx-view="mx-table/examples/2"></div><div mxs="_zs_gallerye{:b" mx-view="mx-table/examples/3"></div>','<div mxs="_zs_gallerye{:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerye{:a" mx-view="mx-table/examples/2"></div><div mxs="_zs_gallerye{:b" mx-view="mx-table/examples/3"></div>'},render:function(){this.updater.digest()}})});