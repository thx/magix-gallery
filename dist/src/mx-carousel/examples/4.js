define("mx-carousel/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var s=e("magix"),i=e("examples/example");e("$");s.applyStyle("_zs_galleryv","._zs_gallerycK{position:relative;padding-left:10%;padding-right:10%}._zs_gallerycK ._zs_gallerycL{position:absolute;top:50%;width:40px;height:40px;margin-top:-20px;text-align:center;line-height:40px;font-size:32px;color:var(--color-brand);opacity:.5;transition:all var(--duration);cursor:pointer}._zs_gallerycK ._zs_gallerycL:hover{opacity:.8}._zs_gallerycK ._zs_gallerycL._zs_gallerycM{left:0}._zs_gallerycK ._zs_gallerycL._zs_gallerycN{right:0;transform:rotate(180deg)}._zs_gallerycK ._zs_gallerycO{float:left;width:40%;height:100px;margin-right:5%;margin-left:5%;line-height:100px;background-repeat:no-repeat;background-position:top;background-color:var(--color-brand);color:#fff;text-align:center;font-size:20px;font-weight:700;border-radius:6px}._zs_gallerycK ._zs_gallerycP{width:12px;height:12px;margin-top:4px;background-color:red}"),a.exports=i.extend({tmpl:function(e,l,a,s,i,r,t,c){if(a||(a=e),!i){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,n=function(e){return"&"+g[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(d,n)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return _[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(x,o)}}if(!c){var v=/[\\'"]/g;c=function(e){return i(e).replace(v,"\\$&")}}var p="",m=e.viewId,y=e.text1,z=e.text2;return p+='<div mxa="_zs_galleryae:_" class="_zs_galleryg"><div mxa="_zs_galleryae:a" class="_zs_galleryj"><div mxs="_zs_galleryae:_" class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>自定义切换trigger（prev-trigger，next-trigger）</div><div>自定义轮播点dot-class</div></div></div><div mxs="_zs_galleryae:a" class="mb20 clearfix"><div class="color-9 fl">注意：</div><div class="fl">Magix支持@$(className)直接使用一个样式</div></div><div mxa="_zs_galleryae:b" class="clearfix mb40"><div mxa="_zs_galleryae:c" class="_zs_gallerycK"><div mx-view="mx-carousel/index?height=100&prevTrigger='+r(m)+"_prev&nextTrigger="+r(m)+'_next&dotType=dot-out-center&dotClass=_zs_gallerycP"><div mxs="_zs_galleryae:b" class="clearfix" data-carousel="true"><div class="_zs_gallerycO">1</div><div class="_zs_gallerycO">2</div></div><div mxs="_zs_galleryae:c" class="clearfix" data-carousel="true"><div class="_zs_gallerycO">3</div><div class="_zs_gallerycO">4</div></div><div mxs="_zs_galleryae:d" class="clearfix" data-carousel="true"><div class="_zs_gallerycO">5</div><div class="_zs_gallerycO">6</div></div></div><i class="mc-iconfont _zs_gallerycL _zs_gallerycM" id="'+s(m)+'_prev">&#xe61e;</i><i class="mc-iconfont _zs_gallerycL _zs_gallerycN" id="'+s(m)+'_next">&#xe61e;</i></div></div></div><div mxa="_zs_galleryae:d" class="_zs_galleryk"><div mxs="_zs_galleryae:e" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(m)+'_text_1"><span mxa="_zs_galleryae:e" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_galleryae:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(m)+'_text_1">\n&lt;div class="wrapper"&gt;\n    &lt;mx-carousel height="100" \n        prev-trigger="&#123;&#123;=viewId&#125;&#125;_prev"\n        next-trigger="&#123;&#123;=viewId&#125;&#125;_next"\n        dot-type="dot-out-center"\n        dot-class="@$(dot)"&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;1&lt;/div&gt;\n            &lt;div class="bg"&gt;2&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;3&lt;/div&gt;\n            &lt;div class="bg"&gt;4&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;5&lt;/div&gt;\n            &lt;div class="bg"&gt;6&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n    &lt;/mx-carousel&gt;\n    &lt;i class="mc-iconfont arrow prev" id="&#123;&#123;=viewId&#125;&#125;_prev"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n    &lt;i class="mc-iconfont arrow next" id="&#123;&#123;=viewId&#125;&#125;_next"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryae:f" class="_zs_galleryk"><div mxs="_zs_galleryae:g" class="_zs_galleryi">CSS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(m)+'_text_2"><span mxa="_zs_galleryae:g" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_galleryae:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(m)+'_text_2">\n.dot&#123;\n    width: 12px;\n    height: 12px;\n    margin-top: 4px;\n    background-color: red;\n&#125;\n        </pre></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});