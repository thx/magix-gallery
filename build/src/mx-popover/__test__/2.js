define("mx-popover/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");s.exports=_.extend({tmpl:function(e,l,s,_,t,n,a,c){if(s||(s=e),!t){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};t=function(e){return""+(null==e?"":e)},_=function(e){return t(e).replace(r,x)}}if(!n){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return p[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(m,o)}}if(!c){var d=/[\\'"]/g;c=function(e){return t(e).replace(d,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2,u=e.text3;return g+='<div mxa="_zs_galleryc0:_" class="_zs_galleryh"><div mxs="_zs_galleryc0:_" class="_zs_galleryk"><span class="btn mr20" mx-view="mx-popover/index?content=%E4%B8%8A%E4%B8%AD%E5%AF%B9%E9%BD%90&placement=top">上中对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E4%B8%8A%E5%B7%A6%E5%AF%B9%E9%BD%90&placement=top&align=left">上左对齐</span><span class="btn" mx-view="mx-popover/index?content=%E4%B8%8A%E5%8F%B3%E5%AF%B9%E9%BD%90&placement=top&align=right">上右对齐</span></div><div mxa="_zs_galleryc0:a" class="_zs_galleryl"><div mxs="_zs_galleryc0:a" class="_zs_galleryj">上中对齐</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryc0:b" class="_zs_galleryo">'+t(y)+'</span><i mxs="_zs_galleryc0:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="上中对齐"\n    placement="top"&gt;上中对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_galleryc0:c" class="_zs_galleryl"><div mxs="_zs_galleryc0:c" class="_zs_galleryj">上左对齐</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_galleryc0:d" class="_zs_galleryo">'+t(z)+'</span><i mxs="_zs_galleryc0:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_2">\n&lt;mx-popover class="btn"\n    content="上左对齐"\n    placement="top"\n    align="left"&gt;上左对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_galleryc0:e" class="_zs_galleryl"><div mxs="_zs_galleryc0:d" class="_zs_galleryj">上右对齐</div><div class="_zs_gallerym" mx-success="'+l+'done({id:3})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_3"><span mxa="_zs_galleryc0:f" class="_zs_galleryo">'+t(u)+'</span><i mxs="_zs_galleryc0:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_3">\n&lt;mx-popover class="btn"\n    content="上右对齐"\n    placement="top"\n    align="right"&gt;上右对齐&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});