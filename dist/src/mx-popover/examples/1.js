define("mx-popover/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,n,t,i,r){if(s||(s=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(_,m)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return c[e]},d=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(d,p)}}if(!r){var o=/[\\'"]/g;r=function(e){return n(e).replace(o,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2,u=e.text3;return g+='<div mxa="_zs_gallerydP:_" class="_zs_galleryg"><div mxs="_zs_gallerydP:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">说明：</span>提示浮层内文案默认左对齐</div><span class="btn mr20" mx-view="mx-popover/index?content=%E9%BB%98%E8%AE%A4%E4%B8%8B%E4%B8%AD%E9%97%B4%E5%AF%B9%E9%BD%90">默认下中间对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E4%B8%8B%E5%B7%A6%E5%AF%B9%E9%BD%90&placement=bottom&align=left">下左对齐</span><span class="btn" mx-view="mx-popover/index?content=%E4%B8%8B%E5%8F%B3%E5%AF%B9%E9%BD%90&placement=bottom&align=right">下右对齐</span></div><div mxa="_zs_gallerydP:a" class="_zs_galleryk"><div mxs="_zs_gallerydP:a" class="_zs_galleryi">下中间对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerydP:b" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerydP:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="默认下中间对齐"&gt;默认下中间对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydP:c" class="_zs_galleryk"><div mxs="_zs_gallerydP:c" class="_zs_galleryi">下左对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_2"><span mxa="_zs_gallerydP:d" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_gallerydP:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_2">\n&lt;mx-popover class="btn"\n    content="下左对齐"\n    placement="bottom"\n    align="left"&gt;下左对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydP:e" class="_zs_galleryk"><div mxs="_zs_gallerydP:d" class="_zs_galleryi">下右对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:3})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_3"><span mxa="_zs_gallerydP:f" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_gallerydP:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_3">\n&lt;mx-popover class="btn"\n    content="下右对齐"\n    placement="bottom"\n    align="right"&gt;下右对齐&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});