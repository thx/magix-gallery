define("mx-editor/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var n=e("magix"),s=e("__test__/example");e("$");n.applyStyle("_zs_galleryI","._zs_galleryeR{width:80%}"),l.exports=s.extend({tmpl:function(e,t,l,n,s,a,i,_){if(l||(l=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(d,c)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(m,o)}}if(!_){var g=/[\\'"]/g;_=function(e){return s(e).replace(g,"\\$&")}}i||(i=function(e,t,l,n){for(n=e[v];--n;)if(e[l=v+n]===t)return l;return e[l=v+e[v]++]=t,l});var v="",y="",p=e.content,u=e.tmpl,z=e.viewId,f=e.text1,h=e.text2;return y+='<div mxa="_zs_gallerya[:_" class="_zs_galleryh"><div mxa="_zs_gallerya[:a" class="_zs_galleryk"><div mxs="_zs_gallerya[:_" class="mb10 clearfix"><div class="fl lh22 color-9">以下示例：</div><div class="fl lh22">最多显示两行，超出换行</div></div><div mxa="_zs_gallerya[:b" class="mb10 clearfix"><div mxs="_zs_gallerya[:a" class="fl lh22 color-9">当前内容：</div><div mxa="_zs_gallerya[:c" class="fl lh22 _zs_galleryeR">'+n(p)+'</div></div><div mxa="_zs_gallerya[:d" class="mb20 clearfix"><div mxs="_zs_gallerya[:b" class="color-9 fl">实际显示：</div><div mxa="_zs_gallerya[:e" class="fl w140"><div mx-edit="'+t+'change()" mx-view="mx-editor/index?tmpl='+a(u)+"&content="+a(p)+"&rules="+i(l,{required:!0})+'"></div></div></div></div><div mxa="_zs_gallerya[:f" class="_zs_galleryl"><div mxs="_zs_gallerya[:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_1"><span mxa="_zs_gallerya[:g" class="_zs_galleryo">'+s(f)+'</span><i mxs="_zs_gallerya[:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(z)+'_text_1">\n&lt;div class="w140"&gt;\n    &lt;mx-editor\n        tmpl="&#123;&#123;=tmpl&#125;&#125;"\n        content="&#123;&#123;=content&#125;&#125;"\n        rules="&#123;&#123;@&#123;\n            required: true\n        &#125;&#125;&#125;"\n        mx-edit="change()"&gt;&lt;/mx-editor&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerya[:h" class="_zs_galleryl"><div mxs="_zs_gallerya[:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_2"><span mxa="_zs_gallerya[:i" class="_zs_galleryo">'+s(h)+'</span><i mxs="_zs_gallerya[:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(z)+"_text_2\">\nlet Magix = require('magix');\nlet Base = require('__test__/example');\nlet $ = require('$');\n\nmodule.exports = Base.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let content = '这是一条非常长非常长非常长的需要换行的数据';\n        this.setContent(content);\n    &#125;,\n    'change&lt;edit&gt;' (e) &#123;\n        // editText编辑后的文案\n        this.setContent(e.editText);\n    &#125;,\n    setContent(content)&#123;\n        let len = content.length,\n            max = 20;\n        this.updater.digest(&#123;\n            tmpl: (len &gt; max) ? (content.slice(0, max) + '...') : content,\n            content\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.setContent("这是一条非常长非常长非常长的需要换行的数据")},"change<edit>":function(e){this.setContent(e.editText)},setContent:function(e){var t=e.length;this.updater.digest({tmpl:t>20?e.slice(0,20)+"...":e,content:e})}})});