define("mx-effects/__test__/18",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,s,e)=>{l("mx-copy/index"),l("__test__/hl");var _=l("magix"),a=l("__test__/example");l("$");_.applyStyle("_zs_galleryL","._zs_galleryft{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryfu{width:100px;height:100px;border-radius:50%;background-color:#4d7fff}._zs_galleryfv{padding-top:35px;color:#fff}._zs_galleryfw,._zs_galleryfv{text-align:center}._zs_galleryfw{padding-top:5px}._zs_galleryfw ._zs_galleryfx{font-size:24px;color:#fff}"),e.exports=a.extend({tmpl:function(l,s,e,_,a,t,i,n){if(e||(e=l),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(l){return"&"+r[l]+";"};a=function(l){return""+(null==l?"":l)},_=function(l){return a(l).replace(c,d)}}if(!t){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(l){return o[l]},x=/[!')(*]/g;t=function(l){return encodeURIComponent(a(l)).replace(x,g)}}if(!n){var f=/[\\'"]/g;n=function(l){return a(l).replace(f,"\\$&")}}var p="",v=l.viewId,y=l.text1;return p+='<div mxa="_zs_gallerybl:_" class="_zs_galleryh"><div mxs="_zs_gallerybl:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">以下示例：</span>上下浮动效果</div><div class="_zs_galleryfu"><div class="_zs_galleryfv">浏览更多</div><div class="_zs_galleryfw"><i class="mc-iconfont _zs_galleryfx mx-anim-suspension">&#xeb95;</i></div></div></div><div mxa="_zs_gallerybl:a" class="_zs_galleryl"><div mxs="_zs_gallerybl:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerybl:b" class="_zs_galleryo">'+a(y)+'</span><i mxs="_zs_gallerybl:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(v)+'_text_1">\n&lt;!-- 添加 class mx-anim-suspension --&gt;\n&lt;div class="suspension"&gt;\n    &lt;div class="text"&gt;浏览更多&lt;/div&gt;\n    &lt;div class="icon"&gt;\n        &lt;i class="mc-iconfont suspension-icon mx-anim-suspension"&gt;\n            &#38;&#35;xeb95;\n        &lt;/i&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});