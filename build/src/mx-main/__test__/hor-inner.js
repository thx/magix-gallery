define("mx-main/__test__/hor-inner",["magix","$"],(e,t,n)=>{var r=e("magix"),i=e("$");r.applyStyle("_zs_galleryac","._zs_galleryhk{height:20px;margin-top:10px;background-color:var(--color-border)}"),n.exports=r.View.extend({tmpl:function(e,t,n,r,i,a,l,s){if(n||(n=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(o,d)}}if(!a){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return _[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(g,u)}}if(!s){var f=/[\\'"]/g;s=function(e){return i(e).replace(f,"\\$&")}}var p="",x=e.info;return p+='<div mxa="_zs_gallerycX:_" class="fontsize-16">第'+r(x.index)+"步："+r(x.label)+'</div><div mxs="_zs_gallerycX:_" class="_zs_galleryhk" style="width: 200px;"></div><div mxs="_zs_gallerycX:a" class="_zs_galleryhk" style="width: 400px;"></div><div mxs="_zs_gallerycX:a" class="_zs_galleryhk" style="width: 400px;"></div><div mxs="_zs_gallerycX:a" class="_zs_galleryhk" style="width: 400px;"></div>'},init:function(e){this.updater.set({info:e.info||{},data:i.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),t={};return t["test_"+e.index]=e.label,new Promise(function(n){n({ok:!0,msg:e.label,remain:t})})}})});