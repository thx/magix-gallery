define("mx-effects/__test__/18",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,l,s)=>{e("mx-copy/index"),e("__test__/hl");var _=e("magix"),a=e("__test__/example");e("$");_.applyStyle("_zs_galleryK","._zs_galleryeH{width:100px;height:100px;border-radius:50%;background-color:var(--color-brand)}._zs_galleryeI{padding-top:35px;color:#fff}._zs_galleryeJ,._zs_galleryeI{text-align:center}._zs_galleryeJ{padding-top:5px}._zs_galleryeJ ._zs_galleryeK{font-size:24px;color:#fff}"),s.exports=a.extend({tmpl:function(e,l,s,_,a,n,i,t){if(s||(s=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},_=function(e){return a(e).replace(c,d)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return g[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(x,o)}}if(!t){var p=/[\\'"]/g;t=function(e){return a(e).replace(p,"\\$&")}}var v="",m=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerybD:_" class="_zs_galleryg"><div mxs="_zs_gallerybD:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">以下示例：</span>上下浮动效果</div><div class="_zs_galleryeH"><div class="_zs_galleryeI">浏览更多</div><div class="_zs_galleryeJ"><i class="mc-iconfont _zs_galleryeK mx-anim-suspension">&#xeb95;</i></div></div></div><div mxa="_zs_gallerybD:a" class="_zs_galleryk"><div mxs="_zs_gallerybD:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(m)+'_text_1"><span mxa="_zs_gallerybD:b" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_gallerybD:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(m)+'_text_1">\n&lt;!-- 添加 class mx-anim-suspension --&gt;\n&lt;div class="suspension"&gt;\n    &lt;div class="text"&gt;浏览更多&lt;/div&gt;\n    &lt;div class="icon"&gt;\n        &lt;i class="mc-iconfont suspension-icon mx-anim-suspension"&gt;\n            &#38;&#35;xeb95;\n        &lt;/i&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});