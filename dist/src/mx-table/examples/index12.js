define("mx-table/examples/index12",["magix","$","mx-title/second","./17"],(e,t,n)=>{e("mx-title/second"),e("./17");var i=e("magix");e("$");n.exports=i.View.extend({tmpl:function(e,t,n,i,r,l,a,m){if(n||(n=e),!r){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,s=function(e){return"&"+x[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(d,s)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},u=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(u,o)}}if(!m){var v=/[\\'"]/g;m=function(e){return r(e).replace(v,"\\$&")}}return'<div mxs="_zs_gallerye(:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerye(:a" mx-view="mx-table/examples/17"></div>','<div mxs="_zs_gallerye(:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerye(:a" mx-view="mx-table/examples/17"></div>'},render:function(){this.updater.digest({viewId:this.id})}})});