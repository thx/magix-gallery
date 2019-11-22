define("mx-dropdown/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,n,i,t,r){if(s||(s=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(c,o)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(g,m)}}if(!r){var _=/[\\'"]/g;r=function(e){return n(e).replace(_,"\\$&")}}var p="",v=e.selected,u=e.first,f=e.second,y=e.viewId,h=e.text1,z=e.text2;p+='<div mxa="_zs_gallerya\\:_" class="_zs_galleryg"><div mxa="_zs_gallerya\\:a" class="_zs_galleryj"><div mxs="_zs_gallerya\\:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>带分组的只能用mx-dropdown.item节点实现</div><div>点击展开下拉选项</div></div></div><div mxa="_zs_gallerya\\:b" class="clearfix"><div class="w200 fl" mx-view="mx-dropdown/index?selected='+i(v)+'"><i mxs="_zs_gallerya\\:a" group="true" class="none">第一组</i>';for(var w=0,b=u.length;w<b;w++){p+='<i value="'+a(D=u[w])+'" class="none">'+a(D)+"</i>"}p+='<i mxs="_zs_gallerya\\:b" group="true" class="none">第二组</i>';for(var k=0,$=f.length;k<$;k++){var D;p+='<i value="'+a(D=f[k])+'" class="none">'+a(D)+"</i>"}return p+='</div><a mxs="_zs_gallerya\\:c" href="javascript:;" class="btn btn-brand ml20 fl" mx-click="'+l+'changeData()">修改数据</a></div></div><div mxa="_zs_gallerya\\:c" class="_zs_galleryk"><div mxs="_zs_gallerya\\:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_gallerya\\:d" class="_zs_galleryn">'+n(h)+'</span><i mxs="_zs_gallerya\\:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(y)+'_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;mx-dropdown class="w200 mr20 fl"\n        selected="&#123;&#123;=selected&#125;&#125;"&gt;\n        &lt;mx-dropdown.item group="true"&gt;第一组&lt;/mx-dropdown.item&gt;\n        &#123;&#123;each first as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n        &lt;mx-dropdown.item group="true"&gt;第二组&lt;/mx-dropdown.item&gt;\n        &#123;&#123;each second as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/mx-dropdown&gt;\n    &lt;a class="btn btn-brand fl" href="javascript:;" \n        mx-click="changeData()"&gt;修改数据&lt;/a&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerya\\:e" class="_zs_galleryk"><div mxs="_zs_gallerya\\:f" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_2"><span mxa="_zs_gallerya\\:f" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_gallerya\\:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let that = this;\n\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 2; i++) &#123;\n            first.push('1' + i);\n            second.push('2' + i);\n        &#125;\n        that.updater.digest(&#123;\n            first,\n            second,\n            selected: 11\n        &#125;);\n    &#125;,\n    'changeData&lt;click&gt;' (e) &#123;\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 2; i++) &#123;\n            first.push('3' + i);\n            second.push('4' + i);\n        &#125;\n\n        this.updater.digest(&#123;\n            first,\n            second,\n            selected: 31\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){for(var e=[],l=[],s=0;s<2;s++)e.push("1"+s),l.push("2"+s);this.updater.digest({first:e,second:l,selected:11})},"changeData<click>":function(e){for(var l=[],s=[],a=0;a<2;a++)l.push("3"+a),s.push("4"+a);this.updater.digest({first:l,second:s,selected:31})}})});