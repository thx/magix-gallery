define("mx-tabs/__test__/3",["magix","__test__/example","$","../box","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../box"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,l,t,s,n,a,_,i){if(t||(t=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(d,x)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return c[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(m,g)}}if(!i){var v=/[\\'"]/g;i=function(e){return n(e).replace(v,"\\$&")}}_||(_=function(e,l,t,s){for(s=e[o];--s;)if(e[t=o+s]===l)return t;return e[t=o+e[o]++]=l,t});var o="",u="",p=e.list,y=e.selected,z=e.viewId,f=e.text1,h=e.text2;return u+='<div mxv mxa="_zs_galleryd%:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd%:a" class="_zs_galleryk"><div mxv="list" mx-change="'+l+'changeTab()" mx-view="mx-tabs/box?list='+_(t,p)+"&selected="+a(y)+'"></div><span mxs="_zs_galleryd%:_" class="color-9 ml20">当前选中：</span><span>'+s(y)+'</span></div><div mxa="_zs_galleryd%:b" class="_zs_galleryl"><div mxs="_zs_galleryd%:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_1"><span mxa="_zs_galleryd%:c" class="_zs_galleryo">'+n(f)+'</span><i mxs="_zs_galleryd%:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(z)+'_text_1">\n&lt;mx-tabs.box\n    list="&#123;&#123;@list&#125;&#125;" \n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="changeTab()" /&gt;</pre></div><div mxa="_zs_galleryd%:d" class="_zs_galleryl"><div mxs="_zs_galleryd%:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(z)+'_text_2"><span mxa="_zs_galleryd%:e" class="_zs_galleryo">'+n(h)+'</span><i mxs="_zs_galleryd%:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: '模块1',\n            tag: 'New'\n        &#125;, &#123;\n            value: 2,\n            text: '模块2'\n        &#125;, &#123;\n            value: 3,\n            text: '模块3'\n        &#125;];\n\n        this.updater.digest(&#123;\n            list,\n            selected: list[0].value\n        &#125;);\n    &#125;,\n\n    'changeTab&lt;change&gt;' (e) &#123;\n        // e.value 当前选中的key值\n        // e.text 当前选中的文案\n        this.updater.digest(&#123;\n            selected: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){var e=[{value:1,text:"模块1",tag:"New"},{value:2,text:"模块2"},{value:3,text:"模块3"}];this.updater.digest({list:e,selected:e[0].value})},"changeTab<change>":function(e){this.updater.digest({selected:e.value})}})});