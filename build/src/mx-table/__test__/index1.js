define("mx-table/__test__/index1",["magix","$","mx-title/second","./4","./5"],(e,t,i)=>{e("mx-title/second"),e("./4"),e("./5");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,_,r,l,m){if(i||(i=e),!_){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,s=function(e){return"&"+x[e]+";"};_=function(e){return""+(null==e?"":e)},function(e){return _(e).replace(a,s)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return d[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(_(e)).replace(c,v)}}if(!m){var o=/[\\'"]/g;m=function(e){return _(e).replace(o,"\\$&")}}return'<div mxs="_zs_galleryeB:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryeB:a" mx-view="mx-table/__test__/4"></div><div mxs="_zs_galleryeB:b" mx-view="mx-table/__test__/5"></div>','<div mxs="_zs_galleryeB:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryeB:a" mx-view="mx-table/__test__/4"></div><div mxs="_zs_galleryeB:b" mx-view="mx-table/__test__/5"></div>'},render:function(){this.updater.digest({})}})});