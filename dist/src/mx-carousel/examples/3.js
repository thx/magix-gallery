define("mx-carousel/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(l,e,a)=>{l("../index"),l("mx-copy/index"),l("examples/hl");var r=l("magix"),i=l("examples/example");l("$");r.applyStyle("_zs_galleryu","._zs_gallerycG{width:100%;height:100%;background-repeat:no-repeat;background-position:top;line-height:100px;color:#fff;text-align:center;font-size:20px;font-weight:700}._zs_gallerycH{background-color:var(--color-brand)}._zs_gallerycI{background-color:var(--color-brand-vs)}._zs_gallerycJ{background-color:var(--color-warn)}"),a.exports=i.extend({tmpl:function(l,e,a,r,i,s,t,d){if(a||(a=l),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(l){return"&"+c[l]+";"};i=function(l){return""+(null==l?"":l)},r=function(l){return i(l).replace(n,g)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(l){return o[l]},_=/[!')(*]/g;s=function(l){return encodeURIComponent(i(l)).replace(_,v)}}if(!d){var x=/[\\'"]/g;d=function(l){return i(l).replace(x,"\\$&")}}var u="",m=l.viewId,p=l.text1;return u+='<div mxa="_zs_galleryad:_" class="_zs_galleryg"><div mxs="_zs_galleryad:_" class="_zs_galleryj"><div class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>垂直方向切换</div><div>自动播放</div><div>显示面板指示点</div></div></div><div class="clearfix mb10"><div mx-view="mx-carousel/index?height=100&vertical=true&autoplay=true"><div data-carousel="true"><div class="_zs_gallerycG _zs_gallerycH">1</div></div><div data-carousel="true"><div class="_zs_gallerycG _zs_gallerycI">2</div></div><div data-carousel="true"><div class="_zs_gallerycG _zs_gallerycJ">3</div></div></div></div></div><div mxa="_zs_galleryad:a" class="_zs_galleryk"><div mxs="_zs_galleryad:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(m)+'_text_1"><span mxa="_zs_galleryad:b" class="_zs_galleryn">'+i(p)+'</span><i mxs="_zs_galleryad:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(m)+'_text_1">\n&lt;mx-carousel height="100" vertical="true" autoplay="true"&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg1"&gt;1&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg2"&gt;2&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg3"&gt;3&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div></div>'},render:function(){this.updater.digest({})}})});