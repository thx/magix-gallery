define("mx-secradio/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),n=e("$");l.exports=s.extend({tmpl:function(e,t,l,s,n,i,a,_){if(l||(l=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(r,x)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return c[e]},m=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(m,v)}}if(!_){var g=/[\\'"]/g;_=function(e){return n(e).replace(g,"\\$&")}}a||(a=function(e,t,l,s){for(s=e[y];--s;)if(e[l=y+s]===t)return l;return e[l=y+e[y]++]=t,l});var y="",u="",o=e.selected,p=e.list,f=e.viewId,z=e.text1,h=e.text2;return u+='<div mxv mxa="_zs_gallerydy:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerydy:a" class="_zs_galleryj"><div mxs="_zs_gallerydy:_" class="clearfix lh22"><div class="color-9 fl">以下示例：</div><div class="fl"><div>mx-change实时获取选中值</div><div>支持展开收起功能</div><div>父节点，子节点都有前缀</div></div></div><div mxa="_zs_gallerydy:b" class="mb15 lh22"><span mxs="_zs_gallerydy:a" class="color-9">当前选择：</span>'+s(o)+'</div><div mxv="list" mx-change="'+t+'select()" mx-view="mx-secradio/index?list='+a(l,p)+"&selected="+i(o)+'&parentPrefix=%E8%AE%A1%E5%88%92&prefix=%E5%8D%95%E5%85%83"></div></div><div mxa="_zs_gallerydy:c" class="_zs_galleryk"><div mxs="_zs_gallerydy:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_gallerydy:d" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_gallerydy:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(f)+'_text_1">\n&lt;mx-secradio \n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    parent-prefix="计划"\n    prefix="单元"\n    mx-change="select()"/&gt;</pre></div><div mxa="_zs_gallerydy:e" class="_zs_galleryk"><div mxs="_zs_gallerydy:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_2"><span mxa="_zs_gallerydy:f" class="_zs_galleryn">'+n(h)+'</span><i mxs="_zs_gallerydy:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(f)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@html.html',\n    render() &#123;\n        let list = [&#123;\n            text: '单品推广计划1',\n            subs: [&#123;\n                value: 11,\n                text: '单品推广计划1_单元1'\n            &#125;, &#123;\n                value: 12,\n                text: '单品推广计划1_单元2'\n            &#125;]\n        &#125;, &#123;\n            text: '单品推广计划2',\n            subs: [&#123;\n                value: 21,\n                text: '单品推广计划2_单元1'\n            &#125;, &#123;\n                value: 22,\n                text: '单品推广计划2_单元2'\n            &#125;]\n        &#125;]\n        this.updater.digest(&#123;\n            list,\n            selected: 21\n        &#125;);\n    &#125;,\n    'select&lt;change&gt;'(event)&#123;\n        // $(event.eventTarget) 当前组件\n        this.updater.digest(&#123;\n            selected: $(event.eventTarget).val()\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({selected:21,list:[{text:"单品推广计划1",subs:[{value:11,text:"单品推广计划1_单元1"},{value:12,text:"单品推广计划1_单元2"}]},{text:"单品推广计划2",subs:[{value:21,text:"单品推广计划2_单元1"},{value:22,text:"单品推广计划2_单元2"}]}]})},"select<change>":function(e){this.updater.digest({selected:n(e.eventTarget).val()})}})});