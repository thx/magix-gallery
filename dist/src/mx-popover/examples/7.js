define("mx-popover/examples/7",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,n,t,i,r){if(s||(s=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(_,m)}}if(!t){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return p[e]},d=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(d,c)}}if(!r){var o=/[\\'"]/g;r=function(e){return n(e).replace(o,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2,f=e.text3;return g+='<div mxa="_zs_gallerydG:_" class="_zs_galleryg"><div mxs="_zs_gallerydG:_" class="_zs_galleryj"><span class="btn mr20" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%AD%E5%AF%B9%E9%BD%90&placement=left">左中对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%8A%E5%AF%B9%E9%BD%90&placement=left&align=top">左上对齐</span><span class="btn" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%8B%E5%AF%B9%E9%BD%90&placement=left&align=bottom">左下对齐</span></div><div mxa="_zs_gallerydG:a" class="_zs_galleryk"><div mxs="_zs_gallerydG:a" class="_zs_galleryi">左中对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerydG:b" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerydG:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-popover class="btn mr20"\n    content="左中对齐"\n    placement="left"&gt;左中对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydG:c" class="_zs_galleryk"><div mxs="_zs_gallerydG:c" class="_zs_galleryi">左上对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_2"><span mxa="_zs_gallerydG:d" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_gallerydG:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_2">\n&lt;mx-popover class="btn mr20"\n    content="左上对齐"\n    placement="left"\n    align="top"&gt;左上对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydG:e" class="_zs_galleryk"><div mxs="_zs_gallerydG:d" class="_zs_galleryi">左下对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:3})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_3"><span mxa="_zs_gallerydG:f" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerydG:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_3">\n&lt;mx-popover class="btn mr20"\n    content="左下对齐"\n    placement="left"\n    align="bottom"&gt;左下对齐&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});