define("mx-popover/__test__/10",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");n.exports=_.extend({tmpl:function(e,t,n,_,l,a,s,r){if(n||(n=e),!l){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};l=function(e){return""+(null==e?"":e)},_=function(e){return l(e).replace(c,o)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(p,m)}}if(!r){var d=/[\\'"]/g;r=function(e){return l(e).replace(d,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallerycW:_" class="_zs_galleryh"><div mxs="_zs_gallerycW:_" class="_zs_galleryk"><span class="btn" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&auto=true&placement=right&align=bottom">默认展开</span></div><div mxa="_zs_gallerycW:a" class="_zs_galleryl"><div mxs="_zs_gallerycW:a" class="_zs_galleryj">默认展开</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_gallerycW:b" class="_zs_galleryo">'+l(u)+'</span><i mxs="_zs_gallerycW:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="提示内容"\n    auto="true"\n    placement="right"\n    align="bottom"&gt;默认展开&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});