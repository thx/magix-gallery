define("mx-loading/examples/2",["magix","examples/example","mx-loading/index","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example"),s=e("mx-loading/index");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,s,n,c,t){if(a||(a=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(d,x)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(o,_)}}if(!t){var g=/[\\'"]/g;t=function(e){return s(e).replace(g,"\\$&")}}var p="",v=e.viewId,h=e.text1,y=e.text2;return p+='<div mxa="_zs_galleryc,:_" class="_zs_galleryg"><div mxs="_zs_galleryc,:_" class="_zs_galleryj"><a href="javascript:;" mx-click="'+l+'show()" class="btn btn-brand mr20">打开</a><a href="javascript:;" mx-click="'+l+'hide()" class="btn">关闭</a></div><div mxa="_zs_galleryc,:a" class="_zs_galleryk"><div mxs="_zs_galleryc,:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_galleryc,:b" class="_zs_galleryn">'+s(h)+'</span><i mxs="_zs_galleryc,:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;a href="javascript:;" class="btn btn-brand mr20"\n    mx-click="show()" &gt;打开&lt;/a&gt; \n\n&lt;a href="javascript:;" class="btn"\n    mx-click="hide()" &gt;关闭&lt;/a&gt;</pre></div><div mxa="_zs_galleryc,:c" class="_zs_galleryk"><div mxs="_zs_galleryc,:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_2"><span mxa="_zs_galleryc,:d" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryc,:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+"_text_2\">\nlet Magix = require('magix');\nlet Loading = require('@../../mx-loading/index'); //loading组件\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Loading],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'show&lt;click&gt;'(e)&#123;\n        // showLoading(closeMask)\n        // closeMask不需要禁止操作\n        this.showLoading(true);\n    &#125;,\n    'hide&lt;click&gt;'(e)&#123;\n        this.hideLoading();\n    &#125;\n&#125;);</pre></div></div>"},mixins:[s],render:function(){this.updater.digest()},"show<click>":function(e){this.showLoading(!0)},"hide<click>":function(e){this.hideLoading()}})});