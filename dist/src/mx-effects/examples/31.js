define("mx-effects/examples/31",["magix","examples/example","$","../notice","mx-copy/index","examples/hl"],(e,l,a)=>{e("../notice"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,s,i,t,r){if(a||(a=e),!s){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(x,d)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return _[e]},m=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(m,g)}}if(!r){var p=/[\\'"]/g;r=function(e){return s(e).replace(p,"\\$&")}}var o="",v=e.index,y=e.viewId,u=e.text1,f=e.text2;return o+='<div mxa="_zs_galleryb9:_" class="_zs_galleryg"><div mxa="_zs_galleryb9:a" class="_zs_galleryj"><div mxa="_zs_galleryb9:b" class="mb20" mx-view="mx-effects/notice?type=highlight"><span>提示内容'+n(v)+'，</span><a mxs="_zs_galleryb9:_" class="color-brand" href="javascript:;" mx-click="'+l+'change()">点此切换内容</a></div></div><div mxa="_zs_galleryb9:c" class="_zs_galleryk"><div mxs="_zs_galleryb9:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_galleryb9:d" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryb9:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(y)+'_text_1">\n&lt;mx-effects.notice \n    type="highlight" \n    class="mb20"&gt;\n    &lt;span&gt;提示内容&#123;&#123;=index&#125;&#125;，&lt;/span&gt;\n    &lt;a class="color-brand" href="javascript:;" mx-click="change()"&gt;点此切换内容&lt;/a&gt;\n&lt;/mx-effects.notice&gt;\n        </pre></div><div mxa="_zs_galleryb9:e" class="_zs_galleryk"><div mxs="_zs_galleryb9:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_2"><span mxa="_zs_galleryb9:f" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_galleryb9:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            index: 1\n        &#125;);\n    &#125;,\n    'change&lt;click&gt;'(event) &#123;\n        let &#123; index &#125; = this.updater.get();\n        this.updater.digest(&#123;\n            index: index + 1\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({index:1})},"change<click>":function(e){var l=this.updater.get().index;this.updater.digest({index:l+1})}})});