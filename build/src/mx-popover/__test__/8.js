define("mx-popover/__test__/8",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");s.exports=t.extend({tmpl:function(e,l,s,t,_,n,a,i){if(s||(s=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(c,x)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(o,m)}}if(!i){var p=/[\\'"]/g;i=function(e){return _(e).replace(p,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2,u=e.text3;return g+='<div mxa="_zs_gallerydj:_" class="_zs_galleryg"><div mxs="_zs_gallerydj:_" class="_zs_galleryj"><span class="btn mr20" mx-view="mx-popover/index?content=%E5%8F%B3%E4%B8%AD%E5%AF%B9%E9%BD%90&placement=right">右中对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E5%8F%B3%E4%B8%8A%E5%AF%B9%E9%BD%90&placement=right&align=top">右上对齐</span><span class="btn" mx-view="mx-popover/index?content=%E5%8F%B3%E4%B8%8B%E5%AF%B9%E9%BD%90&placement=right&align=bottom">右下对齐</span></div><div mxa="_zs_gallerydj:a" class="_zs_galleryk"><div mxs="_zs_gallerydj:a" class="_zs_galleryi">右中对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_gallerydj:b" class="_zs_galleryn">'+_(y)+'</span><i mxs="_zs_gallerydj:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_1">\n&lt;mx-popover class="btn mr20"\n    content="右中对齐"\n    placement="right"&gt;右中对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydj:c" class="_zs_galleryk"><div mxs="_zs_gallerydj:c" class="_zs_galleryi">右上对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_gallerydj:d" class="_zs_galleryn">'+_(z)+'</span><i mxs="_zs_gallerydj:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_2">\n&lt;mx-popover class="btn mr20"\n    content="右上对齐"\n    placement="right"\n    align="top"&gt;右上对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydj:e" class="_zs_galleryk"><div mxs="_zs_gallerydj:d" class="_zs_galleryi">右下对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:3})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_3"><span mxa="_zs_gallerydj:f" class="_zs_galleryn">'+_(u)+'</span><i mxs="_zs_gallerydj:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_3">\n&lt;mx-popover class="btn mr20"\n    content="右下对齐"\n    placement="right"\n    align="bottom"&gt;右下对齐&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});