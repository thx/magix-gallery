define("mx-carousel/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(l,e,a)=>{l("../index"),l("mx-copy/index"),l("__test__/hl");var t=l("magix"),r=l("__test__/example");l("$");t.applyStyle("_zs_galleryw","._zs_gallerycL{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerycM{position:relative;padding-left:10%;padding-right:10%}._zs_gallerycM ._zs_gallerycN{position:absolute;top:20px;width:40px;height:40px;text-align:center;line-height:40px;font-size:32px;color:#4d7fff;opacity:.5;transition:all .25s;cursor:pointer}._zs_gallerycM ._zs_gallerycN:hover{opacity:.8}._zs_gallerycM ._zs_gallerycN._zs_gallerycO{left:0}._zs_gallerycM ._zs_gallerycN._zs_gallerycP{right:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_gallerycM ._zs_gallerycQ{float:left;width:40%;height:80px;margin-right:5%;margin-left:5%;line-height:80px;background-repeat:no-repeat;background-position:top;background-color:#4d7fff;color:#fff;text-align:center;font-size:20px;font-weight:700;border-radius:6px}._zs_gallerycM ._zs_gallerycR{margin-top:8px;background-color:#4d7fff}"),a.exports=r.extend({tmpl:function(l,e,a,t,r,s,i,n){if(a||(a=l),!r){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,g=function(l){return"&"+_[l]+";"};r=function(l){return""+(null==l?"":l)},t=function(l){return r(l).replace(c,g)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return d[l]},x=/[!')(*]/g;s=function(l){return encodeURIComponent(r(l)).replace(x,o)}}if(!n){var v=/[\\'"]/g;n=function(l){return r(l).replace(v,"\\$&")}}var p="",y=l.viewId,f=l.dotClass,m=l.text1,z=l.text2;return p+='<div mxa="_zs_gallery.:_" class="_zs_galleryh"><div mxa="_zs_gallery.:a" class="_zs_galleryk"><div mxs="_zs_gallery.:_" class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>自定义切换trigger</div><div>自定义轮播点样式</div></div></div><div mxa="_zs_gallery.:b" class="clearfix mb40"><div mxa="_zs_gallery.:c" class="_zs_gallerycM"><div mx-view="mx-carousel/index?height=100&prevTrigger='+s(y)+"_prev&nextTrigger="+s(y)+"_next&dotClass="+s(f)+'"><div mxs="_zs_gallery.:a" class="clearfix" data-carousel="true"><div class="_zs_gallerycQ">1</div><div class="_zs_gallerycQ">2</div></div><div mxs="_zs_gallery.:b" class="clearfix" data-carousel="true"><div class="_zs_gallerycQ">3</div><div class="_zs_gallerycQ">4</div></div><div mxs="_zs_gallery.:c" class="clearfix" data-carousel="true"><div class="_zs_gallerycQ">5</div><div class="_zs_gallerycQ">6</div></div></div><i class="mc-iconfont _zs_gallerycN _zs_gallerycO" id="'+t(y)+'_prev">&#xe61e;</i><i class="mc-iconfont _zs_gallerycN _zs_gallerycP" id="'+t(y)+'_next">&#xe61e;</i></div></div></div><div mxa="_zs_gallery.:d" class="clearfix"><div mxa="_zs_gallery.:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallery.:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_gallery.:f" class="_zs_galleryo">'+r(m)+'</span><i mxs="_zs_gallery.:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+'_text_1">\n&lt;div class="wrapper"&gt;\n    &lt;mx-carousel height="100" \n        prev-trigger="&#123;&#123;=viewId&#125;&#125;_prev"\n        next-trigger="&#123;&#123;=viewId&#125;&#125;_next"\n        dot-class="&#123;&#123;=dotClass&#125;&#125;"&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;1&lt;/div&gt;\n            &lt;div class="bg"&gt;2&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;3&lt;/div&gt;\n            &lt;div class="bg"&gt;4&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;5&lt;/div&gt;\n            &lt;div class="bg"&gt;6&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n    &lt;/mx-carousel&gt;\n    &lt;i class="mc-iconfont arrow prev" id="&#123;&#123;=viewId&#125;&#125;_prev"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n    &lt;i class="mc-iconfont arrow next" id="&#123;&#123;=viewId&#125;&#125;_next"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallery.:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallery.:f" class="_zs_galleryj">CSS Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_2"><span mxa="_zs_gallery.:h" class="_zs_galleryo">'+r(z)+'</span><i mxs="_zs_gallery.:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+'_text_2">\n@import "../../mx-style/_vars";\n\n.wrapper&#123;\n    position: relative;\n    padding-left: 10%;\n    padding-right: 10%;\n\n    .arrow&#123;\n        position: absolute;\n        top: 20px;\n        width: 40px;\n        height: 40px;\n        text-align: center;\n        line-height: 40px;\n        font-size: 32px;\n        color: @color-brand;\n        opacity: .5;\n        transition: all @duration;\n        cursor: pointer;\n\n        &:hover&#123;\n            opacity: .8;\n        &#125;\n\n        &.prev&#123;\n            left: 0;\n        &#125;\n\n        &.next&#123;\n            right: 0;\n            transform: rotate(180deg);\n        &#125;\n    &#125;\n    .bg &#123;\n        float: left;\n        width: 40%;\n        height: 80px;\n        margin-right: 5%;\n        margin-left: 5%;\n        line-height: 80px;\n        background-repeat: no-repeat;\n        background-position: center top;\n        background-color: @color-brand;\n        color: #fff;\n        text-align: center;\n        font-size: 20px;\n        font-weight: bold;\n        border-radius: 6px;\n    &#125;\n\n    .dot&#123;\n        margin-top: 8px;\n        background-color: @color-brand;\n    &#125;\n&#125;</pre></div></div></div>'},render:function(){this.updater.digest({viewId:this.id,dotClass:"_zs_gallerycR"})}})});