define("mx-dialog/__test__/1",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(t,e,l)=>{t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("mx-dialog/index"),n=t("__test__/example");t("$");l.exports=n.extend({tmpl:function(t,e,l,a,n,i,s,r){if(l||(l=t),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,d=function(t){return"&"+c[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(_,d)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(t){return o[t]},m=/[!')(*]/g;i=function(t){return encodeURIComponent(n(t)).replace(m,x)}}if(!r){var g=/[\\'"]/g;r=function(t){return n(t).replace(g,"\\$&")}}var v="",u=t.viewId,f=t.text1,p=t.text2;return v+='<div mxa="_zs_galleryat:_" class="_zs_galleryh"><div mxs="_zs_galleryat:_" class="_zs_galleryk"><div class="mb20 clearfix"><div class="color-9 fl">提示浮层：</div><div class="fl"><div>mixins到view上，this.alert()</div><div>默认无mask，宽度320，居中显示</div></div></div><div><a href="javascript:;" mx-click="'+e+'alert1()" class="btn btn-brand">默认alert</a><a href="javascript:;" mx-click="'+e+'alert2()" class="btn btn-brand ml20">自定义alert样式</a><a href="javascript:;" mx-click="'+e+'alert3()" class="btn btn-brand ml20">无关闭按钮，自动关闭</a></div></div><div mxa="_zs_galleryat:a" class="clearfix"><div mxa="_zs_galleryat:b" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_galleryat:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryat:c" class="_zs_galleryo">'+n(f)+'</span><i mxs="_zs_galleryat:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(u)+'_text_1">\n&lt;a href="javascript:;" \n    mx-click="alert1()" \n    class="btn btn-brand"&gt;默认alert&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    mx-click="alert2()" \n    class="btn btn-brand"&gt;自定义alert样式&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    mx-click="alert3()" \n    class="btn btn-brand"&gt;无关闭按钮，自动关闭&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryat:d" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryat:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_2"><span mxa="_zs_galleryat:e" class="_zs_galleryo">'+n(p)+'</span><i mxs="_zs_galleryat:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(u)+"_text_2\">\nlet Magix = require('magix');\nlet Dialog = require('@../index'); //mixins dialog\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'alert1&lt;click&gt;'(e) &#123;\n        this.alert('系统异常', '测试内容');\n    &#125;,\n    'alert2&lt;click&gt;'(e) &#123;\n        let that = this;\n        // this.alert(title, content, enterCallback, dialogOptions)\n        //   title: '标题',\n        //   content: '内容',\n        //   enterCallback: '点击确认按钮的回调',\n        //   dialogOptions: { //浮层样式覆盖\n        //      width:'宽度，默认320',\n        //      height:'高度',\n        //      btns: 'true or false，是否有按钮，默认true',\n        //      modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',\n        //      mask: 'true or false，是否有遮罩，默认false',\n        //      closable: 'true or false，是否有右上角关闭按钮，默认false',\n        //      left: '最终定位相对于屏幕左侧，默认居中',\n        //      top: '最终定位相对于屏幕高侧，默认居中'\n        //   }\n        that.alert(\n            '系统异常', \n            '测试内容', \n            () => &#123;\n                console.log('点击确认后响应')\n            &#125;, \n            &#123;\n                width: 400,\n                mask: true\n            &#125;\n        );\n    &#125;,\n    'alert3&lt;click&gt;'(e) &#123;\n        let dialog = this.alert(\n            '系统异常', \n            '无关闭按钮，自动关闭，2秒后自动关闭', \n            null, \n            &#123;\n                width: 400,\n                mask: true,\n                btns: false\n            &#125;\n        );\n        \n        setTimeout(() =&gt; &#123;\n            dialog.close();\n        &#125;, 2000);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[a],render:function(){this.updater.digest()},"alert1<click>":function(t){this.alert("系统异常","测试内容")},"alert2<click>":function(t){this.alert("系统异常","测试内容",function(){},{width:400,mask:!0})},"alert3<click>":function(t){var e=this.alert("系统异常","无关闭按钮，2秒后自动关闭",null,{width:400,mask:!0,btns:!1});setTimeout(function(){e.close()},2e3)}})});