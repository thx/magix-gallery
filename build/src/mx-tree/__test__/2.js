define("mx-tree/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),n=e("__test__/example"),s=a.Vframe;e("$");a.applyStyle("_zs_galleryaL","._zs_galleryni{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerynj{width:300px;border:1px solid #e6e6e6}._zs_gallerynj ._zs_gallerynk{padding:20px 20px 5px}"),t.exports=n.extend({tmpl:function(e,l,t,a,n,s,i,_){if(t||(t=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(x,d)}}if(!s){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return v[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(c,u)}}if(!_){var g=/[\\'"]/g;_=function(e){return n(e).replace(g,"\\$&")}}i||(i=function(e,l,t,a){for(a=e[m];--a;)if(e[t=m+a]===l)return t;return e[t=m+e[m]++]=l,t});var m="",p="",o=e.selected,y=e.viewId,z=e.list,f=e.text1,V=e.text2;return p+='<div mxv mxa="_zs_galleryeM:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryeM:a" class="_zs_galleryk"><div mxs="_zs_galleryeM:_" class="mb10 clearfix"><div class="color-9 fl">使用场景：</div><div class="fl"><div>实时反馈选中结果，每次操作都响应事件</div><div>默认选中某些选项</div><div>可展开收起子选项</div></div></div><div mxa="_zs_galleryeM:b" class="mb20"><span mxs="_zs_galleryeM:a" class="color-9">当前已选中：</span>'+a(o.length)+'</div><div mxv mxa="_zs_galleryeM:c" class="_zs_gallerynj"><div mxv mxa="_zs_galleryeM:d" class="_zs_gallerynk"><div mxv="list,selected" id="'+a(y)+'_tree" mx-change="'+l+'change()" mx-view="mx-tree/index?list='+i(t,z)+"&bottomValues="+i(t,o)+'"></div></div></div></div><div mxa="_zs_galleryeM:e" class="_zs_galleryl"><div mxs="_zs_galleryeM:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_galleryeM:f" class="_zs_galleryo">'+n(f)+'</span><i mxs="_zs_galleryeM:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    list="&#123;&#123;@list&#125;&#125;"\n    bottom-values="&#123;&#123;@selected&#125;&#125;"\n    mx-change="change()"&gt;&lt;/mx-tree&gt;</pre></div><div mxa="_zs_galleryeM:g" class="_zs_galleryl"><div mxs="_zs_galleryeM:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_2"><span mxa="_zs_galleryeM:h" class="_zs_galleryo">'+n(V)+'</span><i mxs="_zs_galleryeM:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            pValue: '',\n            text: '1'\n        &#125;, &#123;\n            value: 2,\n            pValue: '',\n            text: '2'\n        &#125;, &#123;\n            value: 3,\n            pValue: '',\n            text: '3'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: '1-1'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: '1-2'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: '2-1'\n        &#125;, &#123;\n            value: 211,\n            pValue: 21,\n            text: '2-1-1'\n        &#125;, &#123;\n            value: 212,\n            pValue: 21,\n            text: '2-1-2'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: '2-2'\n        &#125;, &#123;\n            value: 23,\n            pValue: 2,\n            text: '2-3'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list,\n            selected: [211, 23, 3]\n        &#125;);\n    &#125;,\n    'change&lt;change&gt;'(e) &#123;\n        let tree = Vframe.get(this.id + '_tree');\n\n        this.updater.digest(&#123;\n            selected: tree.invoke('getBottomValues')\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:3,pValue:"",text:"3"},{value:11,pValue:1,text:"1-1"},{value:12,pValue:1,text:"1-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:23,pValue:2,text:"2-3"}],selected:[211,23,3]})},"change<change>":function(e){var l=s.get(this.id+"_tree");this.updater.digest({selected:l.invoke("getBottomValues")})}})});