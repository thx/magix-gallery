define("mx-carousel/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var r=e("magix"),s=e("examples/example");e("$");r.applyStyle("_zs_galleryu","._zs_gallerycG{width:100%;height:100%;background-repeat:no-repeat;background-position:top;line-height:100px;color:#fff;text-align:center;font-size:20px;font-weight:700}._zs_gallerycH{background-color:var(--color-brand)}._zs_gallerycI{background-color:var(--color-brand-vs)}._zs_gallerycJ{background-color:var(--color-warn)}"),a.exports=s.extend({tmpl:function(e,l,a,r,s,i,t,d){if(a||(a=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(c,o)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return g[e]},_=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(_,v)}}if(!d){var x=/[\\'"]/g;d=function(e){return s(e).replace(x,"\\$&")}}var u="",m=e.viewId,p=e.text1;return u+='<div mxa="_zs_galleryaa:_" class="_zs_galleryg"><div mxs="_zs_galleryaa:_" class="_zs_galleryj"><div class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>渐显渐隐切换</div><div>自动播放</div><div>显示面板指示点</div><div><a class="link-brand" rel="noopener noreferrer" href="#!/carousel/demo" target="_blank">跳转查看全屏案例</a></div></div></div><div class="clearfix mb10"><div mx-view="mx-carousel/index?height=100&autoplay=true&mode=fade"><div data-carousel="true"><div class="_zs_gallerycG _zs_gallerycH">1</div></div><div data-carousel="true"><div class="_zs_gallerycG _zs_gallerycI">2</div></div><div data-carousel="true"><div class="_zs_gallerycG _zs_gallerycJ">3</div></div></div></div></div><div mxa="_zs_galleryaa:a" class="_zs_galleryk"><div mxs="_zs_galleryaa:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(m)+'_text_1"><span mxa="_zs_galleryaa:b" class="_zs_galleryn">'+s(p)+'</span><i mxs="_zs_galleryaa:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(m)+'_text_1">\n&lt;mx-carousel height="100" autoplay="true" mode="fade"&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg1"&gt;1&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg2"&gt;2&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg3"&gt;3&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div></div>'},render:function(){this.updater.digest({})}})});