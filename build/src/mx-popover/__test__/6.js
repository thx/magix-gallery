define("mx-popover/__test__/6",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");a.exports=l.extend({tmpl:function(e,t,a,l,s,n,_,r){if(a||(a=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(o,c)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(x,m)}}if(!r){var p=/[\\'"]/g;r=function(e){return s(e).replace(p,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryds:_" class="_zs_galleryg"><div mxs="_zs_galleryds:_" class="_zs_galleryj"><span class="btn" mx-view="mx-popover/index?content=%E7%AC%AC%E4%B8%80%E8%A1%8C%3Cbr%2F%3E%E7%AC%AC%E4%BA%8C%E8%A1%8C%3Ca%20href%3D%27https%3A%2F%2Fwww.taobao.com%2F%27%20target%3D%27_blank%27%20class%3D%27link-brand%27%3E%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5%3C%2Fa%3E&placement=bottom">内容包含html</span></div><div mxa="_zs_galleryds:a" class="_zs_galleryk"><div mxs="_zs_galleryds:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryds:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryds:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="第一行&lt;br/&gt;第二行&lt;a href=\'https://www.taobao.com/\' target=\'_blank\' class=\'link-brand\'&gt;跳转链接&lt;/a&gt;"\n    placement="bottom"&gt;内容包含html&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});