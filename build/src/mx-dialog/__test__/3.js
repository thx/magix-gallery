define("mx-dialog/__test__/3",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(e,l,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("mx-dialog/index"),s=e("__test__/example"),n=e("$");a.exports=s.extend({tmpl:function(e,l,a,i,s,n,t,r){if(a||(a=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(d,c)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return o[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(m,g)}}if(!r){var x=/[\\'"]/g;r=function(e){return s(e).replace(x,"\\$&")}}var v="",p=e.viewId,u=e.text1,h=e.text2;return v+='<div mxa="_zs_galleryaD:_" class="_zs_galleryg"><div mxs="_zs_galleryaD:_" class="_zs_galleryj"><div class="lh22">将dialog的方法mixins到view上</div><div class="lh22">1. this.mxDialog()</div><div class="lh22">2. 打开多个浮层时，新开浮层总是在最上方</div><div class="lh22">3. 提供一键关闭所有浮层的方法</div><div class="lh22 mb20">4. false的浮层，点击空白处自动关闭浮层</div><div class="mb20"><a href="javascript:;" mx-click="'+l+'open()" class="btn btn-brand mr20">打开浮层</a><a href="javascript:;" class="btn btn-brand mr20">一键关闭所有浮层</a><a href="javascript:;" mx-click="'+l+'noMask()" class="btn btn-brand">mask=false</a></div></div><div mxa="_zs_galleryaD:a" class="clearfix"><div mxa="_zs_galleryaD:b" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_galleryaD:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_galleryaD:c" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryaD:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(p)+'_text_1">\n&lt;a href="javascript:;" \n    class="btn btn-brand"\n    mx-click="open()"&gt;打开浮层&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    class="btn btn-brand"\n    mx-click="closeAll()"&gt;一键关闭所有浮层&lt;/a&gt;\n            </pre></div><div mxa="_zs_galleryaD:d" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryaD:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_2"><span mxa="_zs_galleryaD:e" class="_zs_galleryn">'+s(h)+'</span><i mxs="_zs_galleryaD:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(p)+"_text_2\">\nlet Magix = require('magix');\nlet Dialog = require('@../index'); //mixins dialog\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        this.updater.digest();\n    },\n    'open&lt;click&gt;'(e) &#123;\n        // this.mxDialog(viewPath[string], viewOptions[object], dialogOptions[object])\n        //    viewPath: 'dialog view路径'\n        //    viewOptions: {\n        //        传入dialog的数据，挂载当前dialog实体\n        //    }, \n        //    dialogOptions: { //浮层样式覆盖\n        //        width:'宽度',\n        //        height:'高度',\n        //        modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',\n        //        mask: 'true or false，是否有遮罩，默认true',\n        //        closable: 'true or false，是否有右上角关闭按钮，默认true',\n        //        left: '最终定位相对于屏幕左侧，默认居中',\n        //        top: '最终定位相对于屏幕高侧，默认居中'\n        //    }\n        this.mxDialog('@./multi', &#123;\n            number: 1\n        &#125;, &#123;\n            width: 800,\n            height: 270,\n            modal: true\n        &#125;);\n    &#125;,\n\n    'closeAll&lt;click&gt;'(e)&#123;\n        this.mxCloseAllDialogs();\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[i],render:function(){this.updater.digest()},"open<click>":function(e){this.mxDialog("mx-dialog/__test__/multi",{number:1},{width:800,height:320,modal:!0})},"noMask<click>":function(e){var l=n(e.eventTarget),a=l.offset(),i=a.top+l.outerHeight()-n(window).scrollTop()+10,s=a.left;this.alert("mask=false的浮层","点击空白处自动关闭浮层",null,{top:i,left:s})}})});