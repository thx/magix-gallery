define("mx-loading/__test__/2",["magix","__test__/example","mx-loading/index","$","mx-copy/index","__test__/hl"],(e,i,s)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example"),n=e("mx-loading/index");e("$");s.exports=l.extend({tmpl:function(e,i,s,l,n,a,t,_){if(s||(s=e),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(r,d)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(g,o)}}if(!_){var m=/[\\'"]/g;_=function(e){return n(e).replace(m,"\\$&")}}var p="",v=e.viewId,h=e.text1,y=e.text2;return p+='<div mxa="_zs_gallerycp:_" class="_zs_galleryh"><div mxs="_zs_gallerycp:_" class="_zs_galleryk"><a href="javascript:;" mx-click="'+i+'show()" class="btn btn-brand mr20">打开</a><a href="javascript:;" mx-click="'+i+'hide()" class="btn">关闭</a></div><div mxa="_zs_gallerycp:a" class="_zs_galleryl"><div mxs="_zs_gallerycp:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_gallerycp:b" class="_zs_galleryo">'+n(h)+'</span><i mxs="_zs_gallerycp:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;a href="javascript:;" class="btn btn-brand mr20"\n    mx-click="show()" &gt;打开&lt;/a&gt; \n\n&lt;a href="javascript:;" class="btn"\n    mx-click="hide()" &gt;关闭&lt;/a&gt;</pre></div><div mxa="_zs_gallerycp:c" class="_zs_galleryl"><div mxs="_zs_gallerycp:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+i+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_2"><span mxa="_zs_gallerycp:d" class="_zs_galleryo">'+n(y)+'</span><i mxs="_zs_gallerycp:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+"_text_2\">\nlet Magix = require('magix');\nlet Loading = require('@../../mx-loading/index'); //loading组件\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Loading],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'show&lt;click&gt;'(e)&#123;\n        // showLoading(closeMask)\n        // closeMask不需要禁止操作\n        this.showLoading(true);\n    &#125;,\n    'hide&lt;click&gt;'(e)&#123;\n        this.hideLoading();\n    &#125;\n&#125;);</pre></div></div>"},mixins:[n],render:function(){this.updater.digest()},"show<click>":function(e){this.showLoading(!0)},"hide<click>":function(e){this.hideLoading()}})});