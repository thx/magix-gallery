define("mx-gtip/__test__/1",["magix","__test__/example","mx-gtip/index","$","mx-copy/index","__test__/hl"],(e,l,s)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example"),a=e("mx-gtip/index");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,a,t,n,_){if(s||(s=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(c,x)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return d[e]},m=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(m,g)}}if(!_){var o=/[\\'"]/g;_=function(e){return a(e).replace(o,"\\$&")}}var p="",v=e.viewId,y=e.text1,u=e.text2;return p+='<div mxa="_zs_galleryb0:_" class="_zs_galleryh"><div mxs="_zs_galleryb0:_" class="_zs_galleryk"><div class="mb20"><a href="javascript:;" mx-click="'+l+'show1()" class="link-brand">显示提示信息，1秒后自动关闭</a></div><div><a href="javascript:;" mx-click="'+l+'show2()" class="link-brand">显示提示信息，手动关闭</a></div></div><div mxa="_zs_galleryb0:a" class="clearfix"><div mxa="_zs_galleryb0:b" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryb0:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryb0:c" class="_zs_galleryo">'+a(y)+'</span><i mxs="_zs_galleryb0:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;a href="javascript:;" class="link-brand"\n    mx-click="show1()"&gt;显示提示信息，1秒后自动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" class="link-brand"\n    mx-click="show2()"&gt;显示提示信息，手动关闭&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryb0:d" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryb0:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_2"><span mxa="_zs_galleryb0:e" class="_zs_galleryo">'+a(u)+'</span><i mxs="_zs_galleryb0:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+"_text_2\">\nlet Magix = require('magix');\nlet GTip = require('@../../mx-gtip/index');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'show1&lt;click&#gt;'()&#123;\n        this.gtip('显示提示信息，1秒后自动关闭', 1000);\n    &#125;,\n    'show2&lt;click&#gt;'()&#123;\n        this.gtip('显示提示信息，手动关闭');\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[a],render:function(){this.updater.digest()},"show1<click>":function(){this.gtip("显示提示信息，1秒后自动关闭",1e3)},"show2<click>":function(){this.gtip("显示提示信息，手动关闭")}})});