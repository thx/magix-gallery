define("mx-popover/__test__/9",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,_,i,a,r){if(n||(n=e),!_){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+s[e]+";"};_=function(e){return""+(null==e?"":e)},l=function(e){return _(e).replace(c,o)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(_(e)).replace(p,d)}}if(!r){var m=/[\\'"]/g;r=function(e){return _(e).replace(m,"\\$&")}}var g="",v=e.viewId,y=e.text1;return g+='<div mxa="_zs_galleryc7:_" class="_zs_galleryh"><div mxs="_zs_galleryc7:_" class="_zs_galleryk"><i class="mc-iconfont color-9 fontsize-18" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&type=dark&placement=top&alignText=center">&#xe68d;</i></div><div mxa="_zs_galleryc7:a" class="_zs_galleryl"><div mxs="_zs_galleryc7:a" class="_zs_galleryj">黑底白字</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_galleryc7:b" class="_zs_galleryo">'+_(y)+'</span><i mxs="_zs_galleryc7:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="i"\n    width="66"\n    content="删除"\n    type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});