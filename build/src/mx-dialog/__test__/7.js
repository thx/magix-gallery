define("mx-dialog/__test__/7",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(e,l,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("mx-dialog/index"),i=e("__test__/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,s,i,_,n,t){if(a||(a=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(d,c)}}if(!_){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},g=/[!')(*]/g;_=function(e){return encodeURIComponent(i(e)).replace(g,o)}}if(!t){var m=/[\\'"]/g;t=function(e){return i(e).replace(m,"\\$&")}}var p="",v=e.viewId,y=e.text1,u=e.text2;return p+='<div mxa="_zs_galleryak:_" class="_zs_galleryh"><div mxs="_zs_galleryak:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">afterClose：</span>浮层关闭之后调用</div><div class="mb20"><a href="javascript:;" mx-click="'+l+'open()" class="btn btn-brand mr20">打开浮层</a></div></div><div mxa="_zs_galleryak:a" class="clearfix"><div mxa="_zs_galleryak:b" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_galleryak:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_1"><span mxa="_zs_galleryak:c" class="_zs_galleryo">'+i(y)+'</span><i mxs="_zs_galleryak:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(v)+'_text_1">\n&lt;a href="javascript:;" \n    mx-click="open()" \n    class="btn btn-brand"&gt;打开浮层&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryak:d" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryak:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_2"><span mxa="_zs_galleryak:e" class="_zs_galleryo">'+i(u)+'</span><i mxs="_zs_galleryak:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(v)+"_text_2\">\nlet Magix = require('magix');\nlet Dialog = require('@../index'); //mixins dialog\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        this.updater.digest();\n    },\n    'open&lt;click&gt;'(e) &#123;\n        let dlg = this.mxDialog('@./demo');\n        dlg.afterClose(() =&gt; &#123;\n            // do something\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[s],render:function(){this.updater.digest()},"open<click>":function(e){this.mxDialog("mx-dialog/__test__/demo").afterClose(function(){})}})});