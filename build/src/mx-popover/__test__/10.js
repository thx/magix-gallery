define("mx-popover/__test__/10",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,s,_,a,r){if(n||(n=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(c,o)}}if(!_){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},m=/[!')(*]/g;_=function(e){return encodeURIComponent(s(e)).replace(m,p)}}if(!r){var d=/[\\'"]/g;r=function(e){return s(e).replace(d,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryc-:_" class="_zs_galleryg"><div mxs="_zs_galleryc-:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">说明：</span>以下示例默认展开提示浮层</div><span class="btn" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&auto=true&placement=right&align=bottom">默认展开</span></div><div mxa="_zs_galleryc-:a" class="_zs_galleryk"><div mxs="_zs_galleryc-:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_1"><span mxa="_zs_galleryc-:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryc-:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="提示内容"\n    auto="true"\n    placement="right"\n    align="bottom"&gt;默认展开&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});