define("mx-popover/examples/13",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var t=e("magix"),n=e("examples/example");e("$");t.applyStyle("_zs_galleryao","._zs_galleryiS{color:#ccc;border:1px solid var(--color-border);width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px}._zs_galleryiT{zoom:2}._zs_galleryiU{transform:scale(2)}"),a.exports=n.extend({tmpl:function(e,l,a,t,n,s,r,i){if(a||(a=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(c,d)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return p[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(m,x)}}if(!i){var _=/[\\'"]/g;i=function(e){return n(e).replace(_,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2;return g+='<div mxa="_zs_gallerydr:_" class="_zs_galleryg"><div mxs="_zs_gallerydr:_" class="_zs_galleryj"><div class="mb10">异常场景：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效</div><div class="mb10">如何解决：使用<span class="color-brand">view-type</span>与原生属性type区分</div><div class="mb10">正确场景：<a class="mc-iconfont color-9 fontsize-18" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&type=dark&placement=top&alignText=center">&#xe68d;</a></div><div class="mb10">错误场景：<a class="mc-iconfont color-9 fontsize-18" type="dark" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&placement=top&alignText=center">&#xe68d;</a></div></div><div mxa="_zs_gallerydr:a" class="_zs_galleryk"><div mxs="_zs_gallerydr:a" class="_zs_galleryi">正确场景</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerydr:b" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerydr:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(v)+'_text_1">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="a"\n    width="66"\n    content="删除"\n    view-type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydr:c" class="_zs_galleryk"><div mxs="_zs_gallerydr:c" class="_zs_galleryi">错误场景</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_2"><span mxa="_zs_gallerydr:d" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_gallerydr:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(v)+'_text_2">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="a"\n    width="66"\n    content="删除"\n    type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});