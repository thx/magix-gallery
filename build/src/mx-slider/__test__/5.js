define("mx-slider/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");l.exports=s.extend({tmpl:function(e,_,l,s,i,n,t,a){if(l||(l=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(d,x)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(g,c)}}if(!a){var v=/[\\'"]/g;a=function(e){return i(e).replace(v,"\\$&")}}var p="",o=e.viewId,u=e.text1;return p+='<div mxa="_zs_gallerydg:_" class="_zs_galleryh"><div mxs="_zs_gallerydg:_" class="_zs_galleryk"><div class="pt20 pb20"><div mx-view="mx-slider/index?max=200&min=100&value=50&step=0.5"></div></div></div><div mxa="_zs_gallerydg:a" class="_zs_galleryl"><div mxs="_zs_gallerydg:a" class="_zs_galleryj">根据可选范围对value进行修正</div><div class="_zs_gallerym" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_1"><span mxa="_zs_gallerydg:b" class="_zs_galleryo">'+i(u)+'</span><i mxs="_zs_gallerydg:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(o)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="50"\n    step="0.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});