define("mx-slider/__test__/6",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(e,n,s)=>{e("../range"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");s.exports=i.extend({tmpl:function(e,n,s,i,_,l,a,r){if(s||(s=e),!_){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+t[e]+";"};_=function(e){return""+(null==e?"":e)},i=function(e){return _(e).replace(d,m)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},g=/[!')(*]/g;l=function(e){return encodeURIComponent(_(e)).replace(g,c)}}if(!r){var v=/[\\'"]/g;r=function(e){return _(e).replace(v,"\\$&")}}var p="",o=e.viewId,u=e.text1;return p+='<div mxa="_zs_gallerydh:_" class="_zs_galleryh"><div mxs="_zs_gallerydh:_" class="_zs_galleryk"><div class="mb40"><div mx-view="mx-slider/range?max=200&min=100&step=1"></div></div><div class="mb20"><div mx-view="mx-slider/range?max=200&min=100&step=0.5"></div></div></div><div mxa="_zs_gallerydh:a" class="_zs_galleryl"><div mxs="_zs_gallerydh:a" class="_zs_galleryj">step决定滑轴刻度</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(o)+'_text_1"><span mxa="_zs_gallerydh:b" class="_zs_galleryo">'+_(u)+'</span><i mxs="_zs_gallerydh:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(o)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    step="1"/&gt;\n\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    step="0.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});