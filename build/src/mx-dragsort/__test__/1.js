define("mx-dragsort/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var s=e("magix"),i=e("__test__/example"),r=e("$");s.applyStyle("_zs_galleryE","._zs_gallerydX{width:120px;padding:10px;margin-bottom:10px;margin-right:10px;border:1px solid var(--color-border);border-radius:var(--border-radius);cursor:pointer}"),l.exports=i.extend({tmpl:function(e,a,l,s,i,r,_,t){if(l||(l=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(n,g)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(c,m)}}if(!t){var o=/[\\'"]/g;t=function(e){return i(e).replace(o,"\\$&")}}var v="",y=e.items,p=e.viewId,z=e.text1,u=e.text3,f=e.text2;v+='<div mxa="_zs_gallerya1:_" class="_zs_galleryg"><div mxa="_zs_gallerya1:a" class="_zs_galleryj"><div mxs="_zs_gallerya1:_" class="mb20"><span class="color-9">以下示例：</span>支持垂直方向的排序</div><div mxa="_zs_gallerya1:b" class="clearfix"><ul mxa="_zs_gallerya1:c" class="fl mr40" mx-view="mx-dragsort/index" mx-dragfinish="'+a+'drag()">';for(var h=0,b=y.length;h<b;h++){v+='<li class="_zs_gallerydX" data-value="'+s(C=y[h])+'">'+s(C)+"</li>"}v+='</ul><div mxa="_zs_gallerya1:d" class="fl"><div mxs="_zs_gallerya1:a">当前顺序：</div>';for(var w=0,$=y.length;w<$;w++){var C;v+="<div>"+s(C=y[w])+"</div>"}return v+='</div></div></div><div mxa="_zs_gallerya1:e" class="clearfix"><div mxa="_zs_gallerya1:f" class="_zs_galleryd"><div mxa="_zs_gallerya1:g" class="_zs_galleryk"><div mxs="_zs_gallerya1:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_gallerya1:h" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_gallerya1:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+'_text_1">\n&lt;!-- mx-view 指到组件地址 --&gt;\n&lt;ul mx-view="app/gallery/mx-dragsort/index" \n    mx-dragfinish="drag()"&gt;\n    &#123;&#123;each items as item&#125;&#125;\n    &lt;li class="item" data-value="&#123;&#123;=item&#125;&#125;"&gt;&#123;&#123;=item&#125;&#125;&lt;/li&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/ul&gt;\n                </pre></div><div mxa="_zs_gallerya1:i" class="_zs_galleryk"><div mxs="_zs_gallerya1:d" class="_zs_galleryi">CSS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:3})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_3"><span mxa="_zs_gallerya1:j" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerya1:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+'_text_3">\n.item&#123;\n    width: 200px;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid @color-border;\n    border-radius: @border-radius;\n    cursor: pointer;\n&#125;\n                </pre></div></div><div mxa="_zs_gallerya1:k" class="_zs_galleryd _zs_gallerye"><div mxa="_zs_gallerya1:l" class="_zs_galleryk"><div mxs="_zs_gallerya1:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_2"><span mxa="_zs_gallerya1:m" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_gallerya1:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            items: [1, 2, 3, 4, 5]\n        &#125;);\n    &#125;,\n    'drag&lt;dragfinish&gt;'(e) &#123;\n        // 重排序之后的\n        let items = [];\n        let drags = $('#' + this.id + ' .@index.less:item');\n        for (var i = 0, len = drags.length; i &lt; len; i++) &#123;\n            let drag = $(drags[i]);\n            items.push(drag.data('value'));\n        &#125;\n        this.updater.digest(&#123;\n            items\n        &#125;);\n    &#125;\n&#125;);\n                </pre></div></div></div></div>"},render:function(){this.updater.digest({items:[1,2,3,4,5]})},"drag<dragfinish>":function(e){for(var a=[],l=r("#"+this.id+" ._zs_gallerydX"),s=0,i=l.length;s<i;s++){var _=r(l[s]);a.push(_.data("value"))}this.updater.digest({items:a})}})});