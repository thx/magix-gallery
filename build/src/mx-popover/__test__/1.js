define("mx-popover/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");l.exports=_.extend({tmpl:function(e,s,l,_,t,n,a,i){if(l||(l=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},_=function(e){return t(e).replace(r,c)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(m,o)}}if(!i){var p=/[\\'"]/g;i=function(e){return t(e).replace(p,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2,u=e.text3;return g+='<div mxa="_zs_gallerydd:_" class="_zs_galleryg"><div mxs="_zs_gallerydd:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">说明：</span>提示浮层内文案默认左对齐</div><span class="btn mr20" mx-view="mx-popover/index?content=%E9%BB%98%E8%AE%A4%E4%B8%8B%E4%B8%AD%E9%97%B4%E5%AF%B9%E9%BD%90">默认下中间对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E4%B8%8B%E5%B7%A6%E5%AF%B9%E9%BD%90&placement=bottom&align=left">下左对齐</span><span class="btn" mx-view="mx-popover/index?content=%E4%B8%8B%E5%8F%B3%E5%AF%B9%E9%BD%90&placement=bottom&align=right">下右对齐</span></div><div mxa="_zs_gallerydd:a" class="_zs_galleryk"><div mxs="_zs_gallerydd:a" class="_zs_galleryi">下中间对齐</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_gallerydd:b" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_gallerydd:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="默认下中间对齐"&gt;默认下中间对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydd:c" class="_zs_galleryk"><div mxs="_zs_gallerydd:c" class="_zs_galleryi">下左对齐</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_gallerydd:d" class="_zs_galleryn">'+t(z)+'</span><i mxs="_zs_gallerydd:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_2">\n&lt;mx-popover class="btn"\n    content="下左对齐"\n    placement="bottom"\n    align="left"&gt;下左对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydd:e" class="_zs_galleryk"><div mxs="_zs_gallerydd:d" class="_zs_galleryi">下右对齐</div><div class="_zs_galleryl" mx-success="'+s+'done({id:3})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_3"><span mxa="_zs_gallerydd:f" class="_zs_galleryn">'+t(u)+'</span><i mxs="_zs_gallerydd:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_3">\n&lt;mx-popover class="btn"\n    content="下右对齐"\n    placement="bottom"\n    align="right"&gt;下右对齐&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});