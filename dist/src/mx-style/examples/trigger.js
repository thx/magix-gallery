define("mx-style/examples/trigger",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,l,t)=>{e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");t.exports=i.extend({tmpl:function(e,l,t,i,s,a,n,r){if(t||(t=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(g,x)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(m,p)}}if(!r){var _=/[\\'"]/g;r=function(e){return s(e).replace(_,"\\$&")}}var c="",v=e.open,u=e.viewId,y=e.text1,z=e.text2;return c+='<div mxa="_zs_galleryed:_" class="_zs_galleryg"><div mxa="_zs_galleryed:a" class="_zs_galleryj"><div mxs="_zs_galleryed:_" class="mb20">组件内所有的展开项使用通用的样式，mx-trigger，mx-trigger-open，mx-output，mx-output-bottom（向下展开），mx-output-open，可借助这些class自定义一个类似于dropdown的组件</div><a mxa="_zs_galleryed:b" href="javascript:;" mx-click="'+l+'toggle()" class="btn btn-brand mr20">'+i(v?"点击收起":"点击展开")+'</a><div mxa="_zs_galleryed:c" style="position: relative; display: inline-block; width: 200px;"><div class="mx-trigger ',v&&(c+=" mx-trigger-open "),c+='">trigger<i mxs="_zs_galleryed:a" class="mc-iconfont mx-trigger-arrow">&#xe692;</i></div><div class="mx-output mx-output-bottom ',v&&(c+=" mx-output-open "),c+='"><div mxs="_zs_galleryed:b" style="padding: 20px;">自定义区域</div></div></div></div><div mxa="_zs_galleryed:d" class="clearfix"><div mxa="_zs_galleryed:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryed:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(u)+'_text_1"><span mxa="_zs_galleryed:f" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryed:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(u)+'_text_1">\n&lt;a class="btn btn-brand mr20" href="javascript:;" \n    mx-click="toggle()"&gt;\n    &#123;&#123;=(open ? \'点击收起\' : \'点击展开\')&#125;&#125;\n&lt;/a&gt;\n\n&lt;div style="position: relative; display: inline-block; width: 200px;"&gt;\n    &lt;div class="mx-trigger &#123;&#123;if open&#125;&#125; mx-trigger-open &#123;&#123;/if&#125;&#125;"&gt;\n        trigger\n        &lt;i class="mc-iconfont mx-trigger-arrow"&gt;&#38;&#35;xe692;&lt;/i&gt;\n    &lt;/div&gt;\n    &lt;div class="mx-output mx-output-bottom &#123;&#123;if open&#125;&#125; mx-output-open &#123;&#123;/if&#125;&#125;"&gt;\n        &lt;div style="padding: 20px;"&gt;自定义区域&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryed:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryed:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(u)+'_text_2"><span mxa="_zs_galleryed:h" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_galleryed:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(u)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@trigger.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            open: false\n        &#125;);\n    &#125;,\n    'toggle&lt;click&gt;'()&#123;\n        let open = this.updater.get('open');\n        this.updater.digest(&#123;\n            open: !open\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({open:!1})},"toggle<click>":function(){var e=this.updater.get("open");this.updater.digest({open:!e})}})});