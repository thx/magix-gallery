define("mx-effects/__test__/25",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,_)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");_.exports=t.extend({tmpl:function(e,s,_,t,l,r,i,a){if(_||(_=e),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};l=function(e){return""+(null==e?"":e)},t=function(e){return l(e).replace(c,d)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(l(e)).replace(g,m)}}if(!a){var o=/[\\'"]/g;a=function(e){return l(e).replace(o,"\\$&")}}var p="",v=e.viewId,y=e.text1,f=e.text2;return p+='<div mxa="_zs_gallerybt:_" class="_zs_galleryh"><div mxs="_zs_gallerybt:_" class="_zs_galleryk"><div mx-view="mx-effects/progress?type=circle&width=80&num=40"></div><div mx-view="mx-effects/progress?type=circle&border=4&num=40"></div></div><div mxa="_zs_gallerybt:a" class="_zs_galleryl"><div mxs="_zs_gallerybt:a" class="_zs_galleryj">自定义width</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_gallerybt:b" class="_zs_galleryo">'+l(y)+'</span><i mxs="_zs_gallerybt:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_1">\n&lt;mx-effects.progress\n    type="circle"\n    width="80"\n    num="40"/&gt;</pre></div><div mxa="_zs_gallerybt:c" class="_zs_galleryl"><div mxs="_zs_gallerybt:c" class="_zs_galleryj">自定义border</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_2"><span mxa="_zs_gallerybt:d" class="_zs_galleryo">'+l(f)+'</span><i mxs="_zs_gallerybt:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_2">\n&lt;mx-effects.progress\n    type="circle"\n    border="4"\n    num="40"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});