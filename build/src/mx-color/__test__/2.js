define("mx-color/__test__/2",["magix","__test__/example","$","../picker","mx-copy/index","__test__/hl"],(e,l,_)=>{e("../picker"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");_.exports=a.extend({tmpl:function(e,l,_,a,s,r,i,t){if(_||(_=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(c,m)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return o[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(x,d)}}if(!t){var g=/[\\'"]/g;t=function(e){return s(e).replace(g,"\\$&")}}var p="",v=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryam:_" class="_zs_galleryh"><div mxs="_zs_galleryam:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">以下示例：</span>右对齐</div><div class="w300" mx-view="mx-color/picker?align=right"></div></div><div mxa="_zs_galleryam:a" class="_zs_galleryl"><div mxs="_zs_galleryam:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_galleryam:b" class="_zs_galleryo">'+s(u)+'</span><i mxs="_zs_galleryam:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_1">\n&lt;mx-color.picker class="w300"\n    align="right"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});