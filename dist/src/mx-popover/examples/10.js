define("mx-popover/examples/10",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,s,t,r,i){if(a||(a=e),!s){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,x=function(e){return"&"+p[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(o,x)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},d=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(d,c)}}if(!i){var _=/[\\'"]/g;i=function(e){return s(e).replace(_,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallerydp:_" class="_zs_galleryg"><div mxs="_zs_gallerydp:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">说明：</span>以下示例默认展开提示浮层</div><span class="btn" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&auto=true&placement=right&align=bottom">默认展开</span></div><div mxa="_zs_gallerydp:a" class="_zs_galleryk"><div mxs="_zs_gallerydp:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerydp:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerydp:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="提示内容"\n    auto="true"\n    placement="right"\n    align="bottom"&gt;默认展开&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});