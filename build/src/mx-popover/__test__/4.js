define("mx-popover/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,_,i,a,r){if(n||(n=e),!_){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+s[e]+";"};_=function(e){return""+(null==e?"":e)},l=function(e){return _(e).replace(c,o)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(_(e)).replace(d,m)}}if(!r){var p=/[\\'"]/g;r=function(e){return _(e).replace(p,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryc::_" class="_zs_galleryg"><div mxs="_zs_galleryc::_" class="_zs_galleryj"><i class="mc-iconfont color-9" mx-view="mx-popover/index?content=%E7%94%A8%C2%A0i%C2%A0%E6%A0%87%E7%AD%BE%E7%94%9F%E6%88%90%EF%BC%8C%E5%AE%BD%E5%BA%A6400%EF%BC%8C%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90&width=400&alignText=center&placement=bottom">&#xe7aa;</i></div><div mxa="_zs_galleryc::a" class="_zs_galleryk"><div mxs="_zs_galleryc::a" class="_zs_galleryi">自定义tag显示 + 自定义宽度 + 自定义文字对齐方式</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_galleryc::b" class="_zs_galleryn">'+_(u)+'</span><i mxs="_zs_galleryc::b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-popover class="mc-iconfont color-9"\n    tag="i"\n    content="用 i 标签生成，宽度400，文字居中对齐"\n    width="400"\n    align-text="center"\n    placement="bottom"&gt;&amp;#xe629;&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});