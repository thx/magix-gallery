define("mx-editor/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,n,t,s,l,i,_,a){if(t||(t=e),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(d,c)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},m=/[!')(*]/g;i=function(e){return encodeURIComponent(l(e)).replace(m,o)}}if(!a){var g=/[\\'"]/g;a=function(e){return l(e).replace(g,"\\$&")}}_||(_=function(e,n,t,s){for(s=e[v];--s;)if(e[t=v+s]===n)return t;return e[t=v+e[v]++]=n,t});var v="",p="",u=e.content,y=e.rules,z=e.viewId,f=e.text1,b=e.text2;return p+='<div mxa="_zs_galleryb_:_" class="_zs_galleryh"><div mxa="_zs_galleryb_:a" class="_zs_galleryk"><div mxs="_zs_galleryb_:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>部分文案可编辑，配置展示模板</div><div>hover元素显示编辑按钮</div><div>回车和失去焦点都可触发回调，只触发一次</div></div></div><div mxa="_zs_galleryb_:b" class="mb20"><span mxs="_zs_galleryb_:a" class="color-9">当前内容：</span><span>'+s(u)+'（要求必填且不小于200）</span></div><div mxa="_zs_galleryb_:c" class="mb20"><div mx-edit="'+n+'change()" mx-view="mx-editor/index?tmpl=%3Cspan%3E%24%7Bcontent%7D%3C%2Fspan%3E%3Cspan%20class%3D%27grey-solid-icon%20ml5%27%3E%E6%89%93%E6%A0%87%3C%2Fspan%3E&content='+i(u)+"&rules="+_(t,y)+'"></div></div></div><div mxa="_zs_galleryb_:d" class="_zs_galleryl"><div mxs="_zs_galleryb_:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(z)+'_text_1"><span mxa="_zs_galleryb_:e" class="_zs_galleryo">'+l(f)+'</span><i mxs="_zs_galleryb_:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(z)+'_text_1">\n&lt;mx-editor\n    tmpl="&lt;span&gt;$&#123;content&#125;&lt;/span&gt;&lt;span class=\'grey-solid-icon ml5\'&gt;打标&lt;/span&gt;"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@rules&#125;&#125;"\n    mx-edit="change()"&gt;&lt;/mx-editor&gt;</pre></div><div mxa="_zs_galleryb_:f" class="_zs_galleryl"><div mxs="_zs_galleryb_:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(z)+'_text_2"><span mxa="_zs_galleryb_:g" class="_zs_galleryo">'+l(b)+'</span><i mxs="_zs_galleryb_:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            content: 2000,\n            rules: &#123;\n                required: true,\n                min: [200, '不小于200']\n            &#125;\n        &#125;);\n    &#125;,\n    'change&lt;edit&gt;' (e) &#123;\n        // editText编辑后的文案\n        this.updater.digest(&#123;\n            content: e.editText\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({content:2e3,rules:{required:!0,min:[200,"不小于200"]}})},"change<edit>":function(e){this.updater.digest({content:e.editText})}})});