define("mx-effects/__test__/9",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,n)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,s,n,l,t,a,_,r){if(n||(n=e),!t){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+i[e]+";"};t=function(e){return""+(null==e?"":e)},l=function(e){return t(e).replace(d,m)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(g,x)}}if(!r){var u=/[\\'"]/g;r=function(e){return t(e).replace(u,"\\$&")}}var o="",p=e.num1,v=e.viewId,y=e.text1,z=e.text2;return o+='<div mxa="_zs_gallerybE:_" class="_zs_galleryh"><div mxa="_zs_gallerybE:a" class="_zs_galleryk"><div mxa="_zs_gallerybE:b" class="mb40"><a mxs="_zs_gallerybE:_" href="javascript:;" mx-click="'+s+'add()" class="btn btn-brand mr10">进度 +10</a><div mx-view="mx-effects/progress?num='+a(p)+'"></div></div></div><div mxa="_zs_gallerybE:c" class="_zs_galleryl"><div mxs="_zs_gallerybE:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_gallerybE:d" class="_zs_galleryo">'+t(y)+'</span><i mxs="_zs_gallerybE:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-effects.progress\n    num="&#123;&#123;=num1&#125;&#125;" /&gt;</pre></div><div mxa="_zs_gallerybE:e" class="_zs_galleryl"><div mxs="_zs_gallerybE:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_2"><span mxa="_zs_gallerybE:f" class="_zs_galleryo">'+t(z)+'</span><i mxs="_zs_gallerybE:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            num1: 20\n        &#125;);\n    &#125;,\n    'add&lt;click&gt;'(e)&#123;\n        let data = this.updater.get();\n        this.updater.digest(&#123;\n            num1: data.num1 + 10\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({num1:20,num2:40.3,num3:60.89})},"add<click>":function(e){var s=this.updater.get();this.updater.digest({num1:s.num1+10,num2:s.num2+10,num3:s.num3+10})}})});