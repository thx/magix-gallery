define("mx-tabs/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,t)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");t.exports=l.extend({tmpl:function(e,a,t,l,n,s,i,c){if(t||(t=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(x,d)}}if(!s){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return g[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(_,m)}}if(!c){var v=/[\\'"]/g;c=function(e){return n(e).replace(v,"\\$&")}}i||(i=function(e,a,t,l){for(l=e[p];--l;)if(e[t=p+l]===a)return t;return e[t=p+e[p]++]=a,t});var p="",u="",o=e.list,f=e.selected,y=e.viewId,h=e.text1,z=e.text2;return u+='<div mxv mxa="_zs_galleryfa:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfa:a" class="_zs_galleryj"><div mxs="_zs_galleryfa:_" class="mb30"><span class="color-9">以下示例：</span>配置tagContent自定义右上角打标内容，配置tag展示右侧默认打标样式，优先级tagContent > tag</div><div mxv="list" mx-change="'+a+'changeTab()" mx-view="mx-tabs/index?list='+i(t,o)+"&selected="+s(f)+'"></div><div mxa="_zs_galleryfa:b" class="mt20"><a mxs="_zs_galleryfa:a" href="javascript:;" class="btn btn-brand" mx-click="'+a+'changeData()">改变数据</a><span mxs="_zs_galleryfa:b" class="ml20 color-9">当前选中：</span><span>'+l(f)+'</span></div></div><div mxa="_zs_galleryfa:c" class="clearfix"><div mxa="_zs_galleryfa:d" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryfa:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_galleryfa:e" class="_zs_galleryn">'+n(h)+'</span><i mxs="_zs_galleryfa:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(y)+'_text_1">\n&lt;mx-tabs \n    list="&#123;&#123;@list&#125;&#125;" \n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="changeTab()"&gt;&lt;/mx-tabs&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="changeData()"&gt;改变数据&lt;/a&gt;</pre></div><div mxa="_zs_galleryfa:f" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryfa:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_2"><span mxa="_zs_galleryfa:g" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryfa:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: '默认打标',\n            tag: 'New'\n        &#125;, &#123;\n            value: 2,\n            text: '自定义标颜色',\n            tag: 'New',\n            color: '#30ab66'\n        &#125;, &#123;\n            value: 3,\n            text: '无打标'\n        &#125;, &#123;\n            value: 4,\n            text: '自定义打标模块',\n            tagContent: '&lt;img src=\"https://img.alicdn.com/tfs/TB1pvD4dkP2gK0jSZPxXXacQpXa-100-34.png\" style=\"max-width: none; width: 50px;\"/&gt;'\n        &#125;];\n\n        this.updater.digest(&#123;\n            list,\n            selected: list[1].value\n        &#125;);\n    &#125;,\n    'changeData&lt;click&gt;' (e) &#123;\n        let list = [&#123;\n            value: 4,\n            text: '新模块1',\n            tag: 'New'\n        &#125;, &#123;\n            value: 5,\n            text: '新模块2'\n        &#125;];\n        let selected = list[0].value;\n        this.updater.digest(&#123;\n            list,\n            selected\n        &#125;)\n    &#125;,\n    'changeTab&lt;change&gt;' (e) &#123;\n        // e.value 当前选中的key值\n        // e.text 当前选中的文案\n        this.updater.digest(&#123;\n            selected: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){var e=[{value:1,text:"默认打标",tag:"NEW"},{value:2,text:"自定义标颜色",tag:"NEW",color:"#30ab66"},{value:3,text:"无打标"},{value:4,text:"自定义打标模块",tagContent:'<img src="https://img.alicdn.com/tfs/TB1pvD4dkP2gK0jSZPxXXacQpXa-100-34.png" style="max-width: none; width: 50px;"/>'}];this.updater.digest({list:e,selected:e[1].value})},"changeData<click>":function(e){var a=[{value:4,text:"新模块1",tag:"NEW"},{value:5,text:"新模块2"}],t=a[0].value;this.updater.digest({list:a,selected:t})},"changeTab<change>":function(e){this.updater.digest({selected:e.value})}})});