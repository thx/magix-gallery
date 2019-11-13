define("mx-tree/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,t)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var a=e("magix"),s=e("examples/example"),n=a.Vframe;e("$");t.exports=s.extend({tmpl:function(e,l,t,a,s,n,i,r){if(t||(t=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(x,m)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return c[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(v,u)}}if(!r){var _=/[\\'"]/g;r=function(e){return s(e).replace(_,"\\$&")}}i||(i=function(e,l,t,a){for(a=e[g];--a;)if(e[t=g+a]===l)return t;return e[t=g+e[g]++]=l,t});var g="",p="",o=e.selectedItems,f=e.viewId,y=e.selectedValues,I=e.list,z=e.text1,V=e.text2;p+='<div mxv mxa="_zs_galleryfI:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfI:a" class="_zs_galleryj"><div mxs="_zs_galleryfI:_" class="mb20"><a href="javascript:;" mx-click="'+l+'get()" class="btn btn-brand">获取当前选中单元完整信息</a></div><div mxa="_zs_galleryfI:b" class="mb20 clearfix"><div mxs="_zs_galleryfI:a" class="color-9 fl">选中单元：</div><div mxa="_zs_galleryfI:c" class="fl">';for(var h=0,b=o.length;h<b;h++){var w=o[h];p+="<div>"+a(w.text)+"（"+a(w.value)+"）</div>"}return p+='</div></div><div mxv="selectedValues,list" id="'+a(f)+'_tree" mx-view="mx-tree/index?bottomValues='+i(t,y)+"&list="+i(t,I)+'&needAll=true"></div></div><div mxa="_zs_galleryfI:d" class="_zs_galleryk"><div mxs="_zs_galleryfI:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_galleryfI:e" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_galleryfI:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    bottom-values="&#123;&#123;@selectedValues&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    need-all="true"&gt;&lt;/mx-tree&gt;</pre></div><div mxa="_zs_galleryfI:f" class="_zs_galleryk"><div mxs="_zs_galleryfI:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_2"><span mxa="_zs_galleryfI:g" class="_zs_galleryn">'+s(V)+'</span><i mxs="_zs_galleryfI:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            pValue: '',\n            text: '计划1'\n        &#125;, &#123;\n            value: 2,\n            pValue: '',\n            text: '计划2'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: '单元1-1'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: '单元1-2'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: '单元2-1'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: '单元2-2'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list,\n            selectedValues: [],\n            selectedItems: []\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;'(event)&#123;\n        let that = this;\n\n        let tree = Vframe.get(that.id + '_tree');\n        let selectedItems = tree.invoke('getBottomItems');\n        let selectedValues = selectedItems.map(item =&gt; &#123;\n            return item.value;\n        &#125;)\n\n        this.updater.digest(&#123;\n            selectedValues,\n            selectedItems\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"计划1"},{value:2,pValue:"",text:"计划2"},{value:11,pValue:1,text:"单元1-1"},{value:12,pValue:1,text:"单元1-2"},{value:21,pValue:2,text:"单元2-1"},{value:22,pValue:2,text:"单元2-2"}],selectedValues:[],selectedItems:[]})},"get<click>":function(e){var l=n.get(this.id+"_tree").invoke("getBottomItems"),t=l.map(function(e){return e.value});this.updater.digest({selectedValues:t,selectedItems:l})}})});