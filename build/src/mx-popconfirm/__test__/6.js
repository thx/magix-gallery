define("mx-popconfirm/__test__/6",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");l.exports=n.extend({tmpl:function(e,t,l,n,a,_,s,r){if(l||(l=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(c,o)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},p=/[!')(*]/g;_=function(e){return encodeURIComponent(a(e)).replace(p,x)}}if(!r){var d=/[\\'"]/g;r=function(e){return a(e).replace(d,"\\$&")}}var g="",f=e.viewId,v=e.text1;return g+='<div mxa="_zs_galleryc@:_" class="_zs_galleryg"><div mxs="_zs_galleryc@:_" class="_zs_galleryj"><span class="btn" mx-view="mx-popconfirm/index?content=%E7%AC%AC%E4%B8%80%E8%A1%8C%3Cbr%2F%3E%E7%AC%AC%E4%BA%8C%E8%A1%8C%3Ca%20href%3D%27https%3A%2F%2Fwww.taobao.com%2F%27%20target%3D%27_blank%27%20class%3D%27link-brand%27%3E%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5%3C%2Fa%3E">内容包含html</span></div><div mxa="_zs_galleryc@:a" class="_zs_galleryk"><div mxs="_zs_galleryc@:a" class="_zs_galleryi">提示内容包含html</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(f)+'_text_1"><span mxa="_zs_galleryc@:b" class="_zs_galleryn">'+a(v)+'</span><i mxs="_zs_galleryc@:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(f)+"_text_1\">\n&lt;mx-popconfirm class=\"btn\"\n    content=\"第一行&lt;br/&gt;第二行&lt;a href='https://www.taobao.com/' target='_blank' class='link-brand'&gt;跳转链接&lt;/a&gt;\"&gt;内容包含html&lt;/mx-popconfirm&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});