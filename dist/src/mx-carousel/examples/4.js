define("mx-carousel/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(l,e,a)=>{l("../index"),l("mx-copy/index"),l("examples/hl");var s=l("magix"),i=l("examples/example");l("$");s.applyStyle("_zs_galleryv","._zs_gallerycK{position:relative;padding-left:10%;padding-right:10%}._zs_gallerycK ._zs_gallerycL{position:absolute;top:50%;width:40px;height:40px;margin-top:-20px;text-align:center;line-height:40px;font-size:32px;color:var(--color-brand);opacity:.5;transition:all var(--duration);cursor:pointer}._zs_gallerycK ._zs_gallerycL:hover{opacity:.8}._zs_gallerycK ._zs_gallerycL._zs_gallerycM{left:0}._zs_gallerycK ._zs_gallerycL._zs_gallerycN{right:0;transform:rotate(180deg)}._zs_gallerycK ._zs_gallerycO{float:left;width:40%;height:100px;margin-right:5%;margin-left:5%;line-height:100px;background-repeat:no-repeat;background-position:top;background-color:var(--color-brand);color:#fff;text-align:center;font-size:20px;font-weight:700;border-radius:6px}._zs_gallerycK ._zs_gallerycP{background-color:red}"),a.exports=i.extend({tmpl:function(l,e,a,s,i,r,t,c){if(a||(a=l),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,n=function(l){return"&"+d[l]+";"};i=function(l){return""+(null==l?"":l)},s=function(l){return i(l).replace(g,n)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return _[l]},v=/[!')(*]/g;r=function(l){return encodeURIComponent(i(l)).replace(v,o)}}if(!c){var x=/[\\'"]/g;c=function(l){return i(l).replace(x,"\\$&")}}var p="",y=l.viewId,m=l.text1,f=l.text2;return p+='<div mxa="_zs_galleryaf:_" class="_zs_galleryg"><div mxa="_zs_galleryaf:a" class="_zs_galleryj"><div mxs="_zs_galleryaf:_" class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>自定义切换trigger（prev-trigger，next-trigger）</div><div>自定义轮播点dot-class</div></div></div><div mxs="_zs_galleryaf:a" class="mb20 clearfix"><div class="color-9 fl">注意：</div><div class="fl">Magix支持@$(className)直接使用一个样式</div></div><div mxa="_zs_galleryaf:b" class="clearfix mb40"><div mxa="_zs_galleryaf:c" class="_zs_gallerycK"><div mx-view="mx-carousel/index?height=100&prevTrigger='+r(y)+"_prev&nextTrigger="+r(y)+'_next&dotType=dot-out-center&dotClass=_zs_gallerycP"><div mxs="_zs_galleryaf:b" class="clearfix" data-carousel="true"><div class="_zs_gallerycO">1</div><div class="_zs_gallerycO">2</div></div><div mxs="_zs_galleryaf:c" class="clearfix" data-carousel="true"><div class="_zs_gallerycO">3</div><div class="_zs_gallerycO">4</div></div><div mxs="_zs_galleryaf:d" class="clearfix" data-carousel="true"><div class="_zs_gallerycO">5</div><div class="_zs_gallerycO">6</div></div></div><i class="mc-iconfont _zs_gallerycL _zs_gallerycM" id="'+s(y)+'_prev">&#xe61e;</i><i class="mc-iconfont _zs_gallerycL _zs_gallerycN" id="'+s(y)+'_next">&#xe61e;</i></div></div></div><div mxa="_zs_galleryaf:d" class="_zs_galleryk"><div mxs="_zs_galleryaf:e" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_1"><span mxa="_zs_galleryaf:e" class="_zs_galleryn">'+i(m)+'</span><i mxs="_zs_galleryaf:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_1">\n&lt;div class="wrapper"&gt;\n    &lt;mx-carousel height="100" \n        prev-trigger="&#123;&#123;=viewId&#125;&#125;_prev"\n        next-trigger="&#123;&#123;=viewId&#125;&#125;_next"\n        dot-type="dot-out-center"\n        dot-class="@$(dot)"&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;1&lt;/div&gt;\n            &lt;div class="bg"&gt;2&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;3&lt;/div&gt;\n            &lt;div class="bg"&gt;4&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;5&lt;/div&gt;\n            &lt;div class="bg"&gt;6&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n    &lt;/mx-carousel&gt;\n    &lt;i class="mc-iconfont arrow prev" id="&#123;&#123;=viewId&#125;&#125;_prev"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n    &lt;i class="mc-iconfont arrow next" id="&#123;&#123;=viewId&#125;&#125;_next"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryaf:f" class="_zs_galleryk"><div mxs="_zs_galleryaf:g" class="_zs_galleryi">CSS Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_2"><span mxa="_zs_galleryaf:g" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_galleryaf:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_2">\n.dot&#123;\n    background-color: red;\n&#125;\n        </pre></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});