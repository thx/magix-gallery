define("mx-effects/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,_,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");a.exports=s.extend({tmpl:function(e,_,a,s,t,l,n,i){if(a||(a=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(c,d)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},o=/[!')(*]/g;l=function(e){return encodeURIComponent(t(e)).replace(o,m)}}if(!i){var p=/[\\'"]/g;i=function(e){return t(e).replace(p,"\\$&")}}var g="",v=e.viewId,y=e.text1;return g+='<div mxa="_zs_gallerya\\:_" class="_zs_galleryh"><div mxs="_zs_gallerya\\:_" class="_zs_galleryk"><div class="empty-area"><i class="mc-iconfont no-data">&#xe685;</i><p class="mt10">暂无内容</p></div></div><div mxa="_zs_gallerya\\:a" class="_zs_galleryl"><div mxs="_zs_gallerya\\:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(v)+'_text_1"><span mxa="_zs_gallerya\\:b" class="_zs_galleryo">'+t(y)+'</span><i mxs="_zs_gallerya\\:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(v)+'_text_1">\n&lt;mx-effects.empty/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});