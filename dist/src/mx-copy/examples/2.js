define("mx-copy/examples/2",["magix","examples/example","$","../index","examples/hl"],(e,s,l)=>{e("../index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");l.exports=a.extend({tmpl:function(e,s,l,a,n,i,t,r){if(l||(l=e),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(d,x)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(g,m)}}if(!r){var p=/[\\'"]/g;r=function(e){return n(e).replace(p,"\\$&")}}var o="",y=e.success,u=e.viewId,v=e.text2,z=e.text3;return o+='<div mxa="_zs_galleryaK:_" class="_zs_galleryg"><div mxa="_zs_galleryaK:a" class="_zs_galleryj"><div mxs="_zs_galleryaK:_" class="mb20"><span class="color-9">以下示例：</span>复制信息不需要显示，直接配置 copy-text 即可</div><div mxa="_zs_galleryaK:b" class="mb20"><div mxs="_zs_galleryaK:a" class="btn btn-brand" mx-success="'+s+'done2()" mx-view="mx-copy/index?copyText=test">点此复制链接</div>',y&&(o+='<span mxs="_zs_galleryaK:b" class="color-green ml20">复制成功</span>'),o+='</div></div><div mxa="_zs_galleryaK:c" class="_zs_galleryk"><div mxs="_zs_galleryaK:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_2"><span mxa="_zs_galleryaK:d" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_galleryaK:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(u)+'_text_2">\n&lt;mx-copy class="btn btn-brand" copy-text="test"\n    mx-success="done()"&gt;点此复制链接&lt;/mx-copy&gt;\n\n&#123;&#123;if success&#125;&#125;\n&lt;span class="color-green ml20"&gt;复制成功&lt;/span&gt;\n&#123;&#123;/if&#125;&#125;\n            </pre></div><div mxa="_zs_galleryaK:e" class="_zs_galleryk"><div mxs="_zs_galleryaK:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:3})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_3"><span mxa="_zs_galleryaK:f" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryaK:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(u)+"_text_3\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id\n        &#125;);\n    &#125;,\n    'done&lt;success&gt;'(e) &#123;\n        this.updater.digest(&#123;\n            success: true\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest()},"done2<success>":function(e){this.updater.digest({success:!0})}})});