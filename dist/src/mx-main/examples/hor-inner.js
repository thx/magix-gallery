define("mx-main/examples/hor-inner",["magix","$"],(e,i,l)=>{var n=e("magix"),r=e("$");n.applyStyle("_zs_galleryae","._zs_galleryie{height:20px;margin-top:10px;background-color:var(--color-border)}"),l.exports=n.View.extend({tmpl:function(e,i,l,n,r,t,a,s){if(l||(l=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(o,c)}}if(!t){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return _[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(r(e)).replace(g,u)}}if(!s){var f=/[\\'"]/g;s=function(e){return r(e).replace(f,"\\$&")}}var p="",x=e.info;return p+='<div mxa="_zs_gallerydl:_" class="fontsize-16">第'+n(x.index)+"步："+n(x.label)+'</div><div mxs="_zs_gallerydl:_" class="_zs_galleryie" style="width: 200px;"></div><div mxs="_zs_gallerydl:a" class="_zs_galleryie" style="width: 400px;"></div><div mxs="_zs_gallerydl:a" class="_zs_galleryie" style="width: 400px;"></div><div mxs="_zs_gallerydl:a" class="_zs_galleryie" style="width: 400px;"></div>'},init:function(e){this.updater.set({info:e.info||{},data:r.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),i={};return i["test_"+e.index]=e.label,new Promise(function(l){l({ok:!0,msg:e.label,remain:i})})}})});