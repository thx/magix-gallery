define("mx-footer/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");i.exports=t.extend({tmpl:function(e,_,i,t,l,r,s,n){if(i||(i=e),!l){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+a[e]+";"};l=function(e){return""+(null==e?"":e)},t=function(e){return l(e).replace(x,d)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(l(e)).replace(m,c)}}if(!n){var g=/[\\'"]/g;n=function(e){return l(e).replace(g,"\\$&")}}var v="",p=e.viewId,u=e.text1;return v+='<div mxa="_zs_gallerybi:_" class="_zs_galleryh"><div mxs="_zs_gallerybi:_" class="_zs_galleryk"><div mx-view="mx-footer/index"></div></div><div mxa="_zs_gallerybi:a" class="_zs_galleryl"><div mxs="_zs_gallerybi:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_gallerybi:b" class="_zs_galleryo">'+l(u)+'</span><i mxs="_zs_gallerybi:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+'_text_1">\n&lt;mx-footer/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});