define("mx-search/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");s.exports=l.extend({tmpl:function(e,a,s,l,i,r,t,n){if(s||(s=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(c,_)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(m,v)}}if(!n){var g=/[\\'"]/g;n=function(e){return i(e).replace(g,"\\$&")}}t||(t=function(e,a,s,l){for(l=e[u];--l;)if(e[s=u+l]===a)return s;return e[s=u+e[u]++]=a,s});var u="",h="",y=e.searchKey,p=e.searchValue,o=e.list,z=e.viewId,f=e.text1,L=e.text2;return h+='<div mxv mxa="_zs_gallerydL:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerydL:a" class="_zs_galleryj"><div mxs="_zs_gallerydL:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>支持上下键切换选择项</div><div>未搜索状态下，回车默认搜索第一个</div><div>已搜索状态下，回车搜索当前选中项</div><div>默认placeholder=list.map(item => {return item.text;})，对item.text去重</div><div>事件处理</div></div></div><div mxa="_zs_gallerydL:b" class="mb20"><span mxs="_zs_gallerydL:a" class="color-9">当前搜索：</span>',y&&(h+="<span>"+l(y)+" = "+l(p)+"</span>"),h+='</div><div mxv><div mxv="list" class="w200" mx-search="'+a+'change()" mx-view="mx-search/index?list='+t(s,o)+"&searchKey="+r(y)+"&searchValue="+r(p)+'"></div></div></div><div mxa="_zs_gallerydL:c" class="_zs_galleryk"><div mxs="_zs_gallerydL:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(z)+'_text_1"><span mxa="_zs_gallerydL:d" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_gallerydL:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_1">\n&lt;mx-search class="w200"\n    list="&#123;&#123;@list&#125;&#125;" \n    search-key="&#123;&#123;=searchKey&#125;&#125;"\n    search-value="&#123;&#123;=searchValue&#125;&#125;"\n    mx-search="change()"&gt;&lt;/mx-search&gt;</pre></div><div mxa="_zs_gallerydL:e" class="_zs_galleryk"><div mxs="_zs_gallerydL:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(z)+'_text_2"><span mxa="_zs_gallerydL:f" class="_zs_galleryn">'+i(L)+'</span><i mxs="_zs_gallerydL:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [&#123;\n                text: '计划',\n                value: 'campaignId'\n            &#125;, &#123;\n                text: '单元',\n                value: 'adgroupId'\n            &#125;],\n            searchKey: '',\n            searchValue: ''\n        &#125;);\n    &#125;,\n    'change&lt;search&gt;' (e) &#123;\n        e.preventDefault();\n        // e.searchKey 搜索对应的key值\n        // e.searchValue input文本框输入的对应的内容\n        this.updater.digest(&#123;\n            searchKey: e.searchKey,\n            searchValue: e.searchValue\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({list:[{text:"计划",value:"campaignId"},{text:"单元",value:"adgroupId"}],searchKey:"",searchValue:""})},"change<search>":function(e){e.preventDefault(),this.updater.digest({searchKey:e.searchKey,searchValue:e.searchValue})}})});