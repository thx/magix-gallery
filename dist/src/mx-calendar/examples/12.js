define("mx-calendar/examples/12",["magix","examples/example","mx-dialog/index","moment","$","mx-copy/index","examples/hl"],(e,n,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),l=e("mx-dialog/index"),t=e("moment"),i=e("$");a.exports=s.extend({tmpl:function(e,n,a,s,l,t,i,r){if(a||(a=e),!l){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(o,m)}}if(!t){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return _[e]},x=/[!')(*]/g;t=function(e){return encodeURIComponent(l(e)).replace(x,g)}}if(!r){var c=/[\\'"]/g;r=function(e){return l(e).replace(c,"\\$&")}}var p="",y=e.inlay,v=e.viewId,f=e.text1,u=e.text2,z=e.text3,h=e.text4;return p+='<div mxa="_zs_gallery@:_" class="_zs_galleryg"><div mxa="_zs_gallery@:a" class="_zs_galleryj"><div mxa="_zs_gallery@:b" class="mb20"><span mxs="_zs_gallery@:_" class="color-9">当前结果：</span>',y.vs?p+='<span mxa="_zs_gallery@:c" class="color-brand mr5">'+s(y.dates.startStr)+'</span><span mxs="_zs_gallery@:a" class="mr5">对比</span><span mxa="_zs_gallery@:d" class="color-brand-vs">'+s(y.dates.endStr)+"</span>":p+='<span mxa="_zs_gallery@:e" class="mr5">'+s(y.dates.startStr)+'</span><span mxs="_zs_gallery@:b" class="mr5">至</span><span>'+s(y.dates.endStr)+"</span>",p+='</div><div mxs="_zs_gallery@:c"><a href="javascript:;" class="btn btn-brand" mx-click="'+n+'show()">自定义trigger显示日历面板</a></div></div><div mxa="_zs_gallery@:f" class="_zs_galleryk"><div mxs="_zs_gallery@:d" class="_zs_galleryi">Trigger HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallery@:g" class="_zs_galleryn">'+l(f)+'</span><i mxs="_zs_gallery@:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_1">\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="show()"&gt;自定义trigger显示日历面板&lt;/a&gt;</pre></div><div mxa="_zs_gallery@:h" class="_zs_galleryk"><div mxs="_zs_gallery@:f" class="_zs_galleryi">Trigger JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_2"><span mxa="_zs_gallery@:i" class="_zs_galleryn">'+l(u)+'</span><i mxs="_zs_gallery@:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+"_text_2\">\nlet Magix = require('magix');\nlet Dialog = require('@../../mx-dialog/index');\nlet Moment = require('moment');\nlet $ = require('$');\nlet Formater = 'YYYY-MM-DD';\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        this.updater.digest(&#123;\n            inlay:&#123;\n                title: '自定义标题',\n                dates: &#123;\n                    startStr: Moment().format(Formater),\n                    endStr: Moment().add(2, 'days').format(Formater)\n                &#125;,\n                vsEnable: true,\n                vs: true,\n                inlay: true,\n                quickDates: ['passed5', 'passed10']\n            &#125;\n        &#125;);\n    &#125;,\n    'show&lt;click&gt;'(event)&#123;\n        let that = this;\n        let node = $(event.target);\n\n        let offset = node.offset();\n        let winScroll = $(window).scrollTop();\n        let top = offset.top + node.outerHeight() - winScroll + 10,\n            left = offset.left;\n\n        let inlay = that.updater.get('inlay');\n        that.mxDialog('@./pannel', &#123;\n            inlay: inlay,\n            submit: (newInlay) =>&#123;\n                that.updater.digest(&#123;\n                    inlay: newInlay\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            width: 280,\n            top,\n            left,\n            mask: false,\n            closable: false\n        &#125;);\n    &#125;\n&#125;);</pre></div><div mxa=\"_zs_gallery@:j\" class=\"_zs_galleryk\"><div mxs=\"_zs_gallery@:g\" class=\"_zs_galleryi\">Pannel HTML Code</div><div class=\"_zs_galleryl\" mx-success=\""+n+'done({id:3})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_3"><span mxa="_zs_gallery@:k" class="_zs_galleryn">'+l(z)+'</span><i mxs="_zs_gallery@:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_3">\n&lt;mx-calendar.range \n    configs="&#123;&#123;@inlayConfig&#125;&#125;"\n    mx-change="submit()" \n    mx-cancel="hide()"/&gt;</pre></div><div mxa="_zs_gallery@:l" class="_zs_galleryk"><div mxs="_zs_gallery@:h" class="_zs_galleryi">Pannel JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:4})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_4"><span mxa="_zs_gallery@:m" class="_zs_galleryn">'+l(h)+'</span><i mxs="_zs_gallery@:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+"_text_4\">\nlet Magix = require('magix');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@pannel.html',\n    init(e) &#123;\n        this.viewOptions = e;\n        this.updater.set(&#123;\n            inlayConfig: $.extend(true, &#123;&#125;, e.inlay)\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'submit&lt;change&gt;'(e) &#123;\n        // e.dates\n        // e.vs\n        let inlayConfig = this.updater.get('inlayConfig');\n        inlayConfig.dates = e.dates;\n        inlayConfig.vs = e.vs;\n        let viewOptions = this.viewOptions;\n        if(viewOptions.submit)&#123;\n            viewOptions.submit(inlayConfig);\n        &#125;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;,\n    'hide&lt;cancel&gt;'(e) &#123;\n        e.stopPropagation();\n        let viewOptions = this.viewOptions;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;\n&#125;);</pre></div></div>"},mixins:[l],render:function(){this.updater.digest({inlay:{title:"自定义标题",dates:{startStr:t().format("YYYY-MM-DD"),endStr:t().add(2,"days").format("YYYY-MM-DD")},vsEnable:!0,vs:!0,quickDates:["passed5","passed10"]}})},"show<click>":function(e){var n=this,a=i(e.target),s=a.offset(),l=s.top+a.outerHeight()-i(window).scrollTop()+10,t=s.left,r=n.updater.get("inlay");n.mxDialog("mx-calendar/examples/pannel",{inlay:r,submit:function(e){n.updater.digest({inlay:e})}},{width:320,top:l,left:t,mask:!1,closable:!1})}})});