define("mx-taginput/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),i=e("$");t.exports=s.extend({tmpl:function(e,l,t,s,i,d,n,a){if(t||(t=e),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+_[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(r,c)}}if(!d){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},g=/[!')(*]/g;d=function(e){return encodeURIComponent(i(e)).replace(g,v)}}if(!a){var m=/[\\'"]/g;a=function(e){return i(e).replace(m,"\\$&")}}n||(n=function(e,l,t,s){for(s=e[o];--s;)if(e[t=o+s]===l)return t;return e[t=o+e[o]++]=l,t});var o="",p="",u=e.selected,y=e.viewId,z=e.list,f=e.text1,h=e.text2;return p+='<div mxv mxa="_zs_galleryd.:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd.:a" class="_zs_galleryk"><div mxs="_zs_galleryd.:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>双向绑定，node.val()可以获取数据</div><div>支持上下键切换，回车选择</div><div>支持键盘delete键删除</div><div>支持输入关键词搜索</div></div></div><div mxa="_zs_galleryd.:b" class="mb20"><a mxs="_zs_galleryd.:a" href="javascript:;" class="btn btn-brand mr20" mx-click="'+l+'get()">获取选中值</a><span mxs="_zs_galleryd.:b" class="color-9">当前选择：</span><span>'+s(u)+'</span></div><div mxv mxa="_zs_galleryd.:c" class="mb20"><div mxv="list" class="w280" id="'+s(y)+'_taginput" mx-view="mx-taginput/index?list='+n(t,z)+"&selected="+d(u)+'&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E9%9C%80%E8%A6%81%E7%9A%84%E5%80%BC"></div></div></div><div mxa="_zs_galleryd.:d" class="_zs_galleryl"><div mxs="_zs_galleryd.:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(y)+'_text_1"><span mxa="_zs_galleryd.:e" class="_zs_galleryo">'+i(f)+'</span><i mxs="_zs_galleryd.:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(y)+'_text_1">\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="get()"&gt;获取选中值&lt;/a&gt;\n\n&lt;mx-taginput class="w280"\n    id="&#123;&#123;=viewId&#125;&#125;_taginput"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    placeholder="请选择需要的值"/&gt;</pre></div><div mxa="_zs_galleryd.:f" class="_zs_galleryl"><div mxs="_zs_galleryd.:e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+d(y)+'_text_2"><span mxa="_zs_galleryd.:g" class="_zs_galleryo">'+i(h)+'</span><i mxs="_zs_galleryd.:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 5; index++) &#123;\n            list.push(&#123;\n                text: 'test' + index,\n                value: index\n            &#125;)\n        &#125;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list,\n            selected: '1,2'\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;'()&#123;\n        let node = $('#' + this.id + '_taginput');\n        this.updater.digest(&#123;\n            selected: node.val()\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){for(var e=[],l=0;l<5;l++)e.push({text:"test"+l,value:l});this.updater.digest({viewId:this.id,list:e,selected:"1,2"})},"get<click>":function(){var e=i("#"+this.id+"_taginput");this.updater.digest({selected:e.val()})}})});