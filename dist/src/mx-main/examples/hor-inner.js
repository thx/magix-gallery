define("mx-main/examples/hor-inner",["magix","$"],(e,n,r)=>{var t=e("magix"),i=e("$");t.applyStyle("_zs_galleryad","._zs_galleryhN{height:20px;margin-top:10px;background-color:var(--color-border)}"),r.exports=t.View.extend({tmpl:function(e,n,r,t,i,a,l,s){if(r||(r=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(d,o)}}if(!a){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return _[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(g,u)}}if(!s){var f=/[\\'"]/g;s=function(e){return i(e).replace(f,"\\$&")}}var p="",x=e.info;return p+='<div mxa="_zs_galleryc+:_" class="fontsize-16">第'+t(x.index)+"步："+t(x.label)+'</div><div mxs="_zs_galleryc+:_" class="_zs_galleryhN" style="width: 200px;"></div><div mxs="_zs_galleryc+:a" class="_zs_galleryhN" style="width: 400px;"></div><div mxs="_zs_galleryc+:a" class="_zs_galleryhN" style="width: 400px;"></div><div mxs="_zs_galleryc+:a" class="_zs_galleryhN" style="width: 400px;"></div>'},init:function(e){this.updater.set({info:e.info||{},data:i.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),n={};return n["test_"+e.index]=e.label,new Promise(function(r){r({ok:!0,msg:e.label,remain:n})})}})});