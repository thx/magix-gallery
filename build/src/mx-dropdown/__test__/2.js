define("mx-dropdown/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");s.exports=t.extend({tmpl:function(e,l,s,t,a,n,_,r){if(s||(s=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(d,x)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(m,o)}}if(!r){var g=/[\\'"]/g;r=function(e){return a(e).replace(g,"\\$&")}}_||(_=function(e,l,s,t){for(t=e[v];--t;)if(e[s=v+t]===l)return s;return e[s=v+e[v]++]=l,s});var v="",u="",p=e.keyword,y=e.selectedValue,z=e.list,f=e.selectedText,w=e.viewId,T=e.text1,h=e.text2;return u+='<div mxv mxa="_zs_galleryaT:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryaT:a" class="_zs_galleryk"><div mxv mxa="_zs_galleryaT:b" class="mb20"><div mxv="list" class="w200" mx-change="'+l+'select()" mx-view="mx-dropdown/index?searchbox=true&keyword='+n(p)+"&selected="+n(y)+"&list="+_(s,z)+'"></div></div><div><span mxs="_zs_galleryaT:_" class="color-9">当前选中名：</span><span mxa="_zs_galleryaT:c" class="mr20">'+t(f)+'</span><span mxs="_zs_galleryaT:a" class="color-9">当前选中值：</span><span>'+t(y)+'</span></div></div><div mxa="_zs_galleryaT:d" class="_zs_galleryl"><div mxs="_zs_galleryaT:b" class="_zs_galleryj">搜索不区分大小写</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(w)+'_text_1"><span mxa="_zs_galleryaT:e" class="_zs_galleryo">'+a(T)+'</span><i mxs="_zs_galleryaT:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(w)+'_text_1">\n&lt;mx-dropdown class="w200" \n    searchbox="true" \n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="select()"&gt;\n&lt;/mx-dropdown&gt;</pre></div><div mxa="_zs_galleryaT:f" class="_zs_galleryl"><div mxs="_zs_galleryaT:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(w)+'_text_2"><span mxa="_zs_galleryaT:g" class="_zs_galleryo">'+a(h)+'</span><i mxs="_zs_galleryaT:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(w)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: '测试Logo'\n        &#125;, &#123;\n            value: 2,\n            text: 'logo'\n        &#125;, &#123;\n            value: 3,\n            text: '123456'\n        &#125;];\n        this.updater.digest(&#123;\n            list: list,\n            selectedValue: list[1].value\n        &#125;);\n    &#125;,\n    'select&lt;change&gt;' (e) &#123;\n        // e.value 当前选中值\n        // e.text 当前选中文案\n        // e.keyword 当前搜索关键词\n    &#125;\n&#125;);</pre></div></div>"},render:function(){var e=[{value:1,text:"测试Logo"},{value:2,text:"logo"},{value:3,text:"123456"}],l=e[1];this.updater.digest({list:e,selectedValue:l.value,selectedText:l.text})},"select<change>":function(e){this.updater.digest({selectedValue:e.value,selectedText:e.text,keyword:e.keyword})}})});