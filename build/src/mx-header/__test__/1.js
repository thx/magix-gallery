define("mx-header/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,n,l)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");l.exports=a.extend({tmpl:function(e,n,l,a,s,_,t,r){if(l||(l=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(c,d)}}if(!_){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},v=/[!')(*]/g;_=function(e){return encodeURIComponent(s(e)).replace(v,g)}}if(!r){var m=/[\\'"]/g;r=function(e){return s(e).replace(m,"\\$&")}}var o="",p=e.viewId,u=e.text1,y=e.text2;return o+='<div mxa="_zs_galleryb3:_" class="_zs_galleryh"><div mxs="_zs_galleryb3:_" class="_zs_galleryk"><div class="pt10 pb10"><a rel="noopener noreferrer" href="#!/header/all" class="link-brand" target="_blank">新页面打开完整示例</a></div></div><div mxa="_zs_galleryb3:a" class="clearfix"><div mxa="_zs_galleryb3:b" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryb3:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(p)+'_text_1"><span mxa="_zs_galleryb3:c" class="_zs_galleryo">'+s(u)+'</span><i mxs="_zs_galleryb3:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+'_text_1">\n&lt;mx-header \n    navs="&#123;&#123;@navs&#125;&#125;"\n    cur="&#123;&#123;=cur&#125;&#125;"\n    logo="//gw.alicdn.com/tfs/TB1Uhbvh_vI8KJjSspjXXcgjXXa-534-98.png"\n    mx-navchange="change()"/&gt;</pre></div><div mxa="_zs_galleryb3:d" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryb3:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+_(p)+'_text_2"><span mxa="_zs_galleryb3:e" class="_zs_galleryo">'+s(y)+'</span><i mxs="_zs_galleryb3:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let navs = [&#123;\n            value: 1,\n            text: '营销中台'\n        &#125;, &#123;\n            value: 2,\n            text: '创意中台'\n        &#125;]\n        // 默认不选中任何一个\n        let cur = '';\n        this.updater.digest(&#123;\n            navs,\n            cur\n        &#125;);\n    &#125;,\n    'change&lt;navchange&gt;'(event) &#123;\n        // event.nav &#123;value: , text: &#125; 当前导航\n        let nav = event.nav;\n        this.updater.digest(&#123;\n            cur: nav.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest()}})});