define("mx-form/__test__/warn",["magix","mx-title/second","./1"],(e,n,t)=>{e("mx-title/second"),e("./1");var i=e("magix");t.exports=i.View.extend({tmpl:function(e,n,t,i,r,d,a,c){if(t||(t=e),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,m=function(e){return"&"+o[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(u,m)}}if(!d){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return f[e]},l=/[!')(*]/g;d=function(e){return encodeURIComponent(r(e)).replace(l,v)}}if(!c){var s=/[\\'"]/g;c=function(e){return r(e).replace(s,"\\$&")}}var x="";return x+='<div id="'+i(e.viewId)+'_warn" mx-view="mx-title/second?content=warn%E8%AD%A6%E5%91%8A%E5%9C%BA%E6%99%AF%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb,:_" class="clearfix mb20"><div mx-view="mx-form/__test__/1"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});