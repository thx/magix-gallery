define("mx-switch/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,t,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,t,a,s,n,l,i,r){if(a||(a=e),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(e){return"&"+c[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(d,g)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return x[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(n(e)).replace(m,_)}}if(!r){var o=/[\\'"]/g;r=function(e){return n(e).replace(o,"\\$&")}}var p="",u=e.state,v=e.viewId,h=e.text1,y=e.text2;return p+='<div mxa="_zs_galleryeo:_" class="_zs_galleryg"><div mxa="_zs_galleryeo:a" class="_zs_galleryj clearfix"><span class="mr20" mx-change="'+t+'toggle()" mx-view="mx-switch/index?state='+l(u)+'"></span><a mxs="_zs_galleryeo:_" href="javascript:;" class="btn btn-brand mr20" mx-click="'+t+'change()">切换状态</a><span>当前状态：'+s(u)+'</span></div><div mxa="_zs_galleryeo:b" class="_zs_galleryk"><div mxs="_zs_galleryeo:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(v)+'_text_1"><span mxa="_zs_galleryeo:c" class="_zs_galleryn">'+n(h)+'</span><i mxs="_zs_galleryeo:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_1">\n&lt;mx-switch class="mr20"\n    state="&#123;&#123;=state&#125;&#125;"\n    mx-change="toggle()"/&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="change()"&gt;切换状态&lt;/a&gt;</pre></div><div mxa="_zs_galleryeo:d" class="_zs_galleryk"><div mxs="_zs_galleryeo:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(v)+'_text_2"><span mxa="_zs_galleryeo:e" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_galleryeo:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            state: true\n        &#125;);\n    &#125;,\n    'toggle&lt;change&gt;' (event) &#123;\n        // event.state 当前开还是关\n        // true 开，false关\n        this.updater.digest(&#123;\n            state: event.state\n        &#125;);\n    &#125;,\n    'change&lt;click&gt;'(event)&#123;\n        let state = this.updater.get('state');\n        this.updater.digest(&#123;\n            state: !state\n        &#125;);\n&#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({state:!0,disabled:!0})},"changeDisabled<click>":function(e){var t=this.updater.get("disabled");this.updater.digest({disabled:!t})},"toggle<change>":function(e){this.updater.digest({state:e.state})},"change<click>":function(e){var t=this.updater.get("state");this.updater.digest({state:!t})}})});