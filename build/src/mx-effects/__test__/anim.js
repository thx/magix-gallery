define("mx-effects/__test__/anim",["magix","$","mx-title/second","./18"],(e,t,i)=>{e("mx-title/second"),e("./18");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,r,s,l,d){if(i||(i=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,_=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(a,_)}}if(!s){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return v[e]},x=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(x,m)}}if(!d){var f=/[\\'"]/g;d=function(e){return r(e).replace(f,"\\$&")}}return'<div mxs="_zs_gallerybL:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerybL:a" class="clearfix"><div class="_zs_galleryd"><div mx-view="mx-effects/__test__/18"></div></div></div>','<div mxs="_zs_gallerybL:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerybL:a" class="clearfix"><div class="_zs_galleryd"><div mx-view="mx-effects/__test__/18"></div></div></div>'},render:function(){this.updater.digest({})}})});