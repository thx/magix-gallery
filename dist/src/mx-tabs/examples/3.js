define("mx-tabs/examples/3",["magix","examples/example","$","../box","mx-copy/index","examples/hl"],(e,l,a)=>{e("../box"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,n,t,i,x){if(a||(a=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(c,d)}}if(!t){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return _[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(g,m)}}if(!x){var v=/[\\'"]/g;x=function(e){return n(e).replace(v,"\\$&")}}i||(i=function(e,l,a,s){for(s=e[p];--s;)if(e[a=p+s]===l)return a;return e[a=p+e[p]++]=l,a});var p="",u="",o=e.list,y=e.selected,z=e.viewId,f=e.text1,h=e.text2;return u+='<div mxv mxa="_zs_gallerye6:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerye6:a" class="_zs_galleryj"><div mxv="list" mx-change="'+l+'changeTab()" mx-view="mx-tabs/box?list='+i(a,o)+"&selected="+t(y)+'"></div><span mxs="_zs_gallerye6:_" class="color-9 ml20">当前选中：</span><span>'+s(y)+'</span></div><div mxa="_zs_gallerye6:b" class="_zs_galleryk"><div mxs="_zs_gallerye6:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(z)+'_text_1"><span mxa="_zs_gallerye6:c" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerye6:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(z)+'_text_1">\n&lt;mx-tabs.box\n    list="&#123;&#123;@list&#125;&#125;" \n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="changeTab()" /&gt;</pre></div><div mxa="_zs_gallerye6:d" class="_zs_galleryk"><div mxs="_zs_gallerye6:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(z)+'_text_2"><span mxa="_zs_gallerye6:e" class="_zs_galleryn">'+n(h)+'</span><i mxs="_zs_gallerye6:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: '模块1'\n        &#125;, &#123;\n            value: 2,\n            text: '模块2'\n        &#125;, &#123;\n            value: 3,\n            text: '模块3'\n        &#125;];\n\n        this.updater.digest(&#123;\n            list,\n            selected: list[0].value\n        &#125;);\n    &#125;,\n\n    'changeTab&lt;change&gt;' (e) &#123;\n        // e.value 当前选中的key值\n        // e.text 当前选中的文案\n        this.updater.digest(&#123;\n            selected: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){var e=[{value:1,text:"模块1"},{value:2,text:"模块2"},{value:3,text:"模块3"}];this.updater.digest({list:e,selected:e[0].value})},"changeTab<change>":function(e){this.updater.digest({selected:e.value})}})});