define("mx-popover/__test__/13",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),s=e("__test__/example");e("$");a.applyStyle("_zs_galleryaq","._zs_gallerykv{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykw{color:#ccc;border:1px solid #e6e6e6;width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px}._zs_gallerykx{zoom:2}._zs_galleryky{-webkit-transform:scale(2);transform:scale(2)}"),l.exports=s.extend({tmpl:function(e,t,l,a,s,n,r,i){if(l||(l=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(c,o)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(p,x)}}if(!i){var m=/[\\'"]/g;i=function(e){return s(e).replace(m,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2;return g+='<div mxa="_zs_galleryc&:_" class="_zs_galleryh"><div mxs="_zs_galleryc&:_" class="_zs_galleryk"><div class="mb10">异常场景：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效</div><div class="mb10">如何解决：使用<span class="color-brand">view-type</span>与原生属性type区分</div><div class="mb10">正确场景：<a class="mc-iconfont color-9 fontsize-18" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&type=dark&placement=top&alignText=center">&#xe68d;</a></div><div class="mb10">错误场景：<a class="mc-iconfont color-9 fontsize-18" type="dark" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&placement=top&alignText=center">&#xe68d;</a></div></div><div mxa="_zs_galleryc&:a" class="_zs_galleryl"><div mxs="_zs_galleryc&:a" class="_zs_galleryj">正确场景</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryc&:b" class="_zs_galleryo">'+s(y)+'</span><i mxs="_zs_galleryc&:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_1">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="a"\n    width="66"\n    content="删除"\n    view-type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div><div mxa="_zs_galleryc&:c" class="_zs_galleryl"><div mxs="_zs_galleryc&:c" class="_zs_galleryj">错误场景</div><div class="_zs_gallerym" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_galleryc&:d" class="_zs_galleryo">'+s(z)+'</span><i mxs="_zs_galleryc&:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_2">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="a"\n    width="66"\n    content="删除"\n    type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});