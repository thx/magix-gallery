define("mx-carousel/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var t=e("magix"),s=e("__test__/example");e("$");t.applyStyle("_zs_galleryt","._zs_gallerycH{width:100%;height:100%;background-repeat:no-repeat;background-position:top;line-height:100px;background-color:var(--color-brand);color:#fff;text-align:center;font-size:20px;font-weight:700}"),a.exports=s.extend({tmpl:function(e,l,a,t,s,i,r,n){if(a||(a=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(d,c)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return g[e]},v=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(v,o)}}if(!n){var x=/[\\'"]/g;n=function(e){return s(e).replace(x,"\\$&")}}var p="",u=e.viewId,m=e.text1,y=e.text2;return p+='<div mxa="_zs_gallery,:_" class="_zs_galleryg"><div mxs="_zs_gallery,:_" class="_zs_galleryj"><div class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>垂直方向切换</div><div>自动播放</div><div>显示面板指示点</div></div></div><div class="clearfix mb10"><div mx-view="mx-carousel/index?height=100&vertical=true&autoplay=true"><div data-carousel="true"><div class="_zs_gallerycH">1</div></div><div data-carousel="true"><div class="_zs_gallerycH">2</div></div><div data-carousel="true"><div class="_zs_gallerycH">3</div></div></div></div></div><div mxa="_zs_gallery,:a" class="clearfix"><div mxa="_zs_gallery,:b" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallery,:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_gallery,:c" class="_zs_galleryn">'+s(m)+'</span><i mxs="_zs_gallery,:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(u)+'_text_1">\n&lt;mx-carousel height="100" autoplay="true" active="1"&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg"&gt;1&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg"&gt;2&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg"&gt;3&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><div mxa="_zs_gallery,:d" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallery,:c" class="_zs_galleryi">CSS</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_2"><span mxa="_zs_gallery,:e" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallery,:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(u)+'_text_2">\n.bg &#123;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center top;\n    line-height: 100px;\n    background-color: #4d7fff;\n    color: #fff;\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n&#125;</pre></div></div></div>'},render:function(){this.updater.digest({})}})});