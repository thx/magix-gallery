define("mx-dropdown/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");t.exports=l.extend({tmpl:function(e,s,t,l,n,a,i,r){if(t||(t=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(c,_)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(m,x)}}if(!r){var g=/[\\'"]/g;r=function(e){return n(e).replace(g,"\\$&")}}var p="",v=e.selected,u=e.first,f=e.second,y=e.viewId,h=e.text1,z=e.text2;p+='<div mxa="_zs_galleryaM:_" class="_zs_galleryh"><div mxa="_zs_galleryaM:a" class="_zs_galleryk"><div mxs="_zs_galleryaM:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>带分组的只能用mx-dropdown.item节点实现</div><div>点击展开下拉选项</div></div></div><div mxa="_zs_galleryaM:b" class="clearfix"><div class="w200 fl" mx-view="mx-dropdown/index?selected='+a(v)+'"><i mxs="_zs_galleryaM:a" group="true" class="none">第一组</i>';for(var w=0,M=u.length;w<M;w++){p+='<i value="'+l($=u[w])+'" class="none">'+l($)+"</i>"}p+='<i mxs="_zs_galleryaM:b" group="true" class="none">第二组</i>';for(var b=0,k=f.length;b<k;b++){var $;p+='<i value="'+l($=f[b])+'" class="none">'+l($)+"</i>"}return p+='</div><a mxs="_zs_galleryaM:c" href="javascript:;" class="btn btn-brand ml20 fl" mx-click="'+s+'changeData()">修改数据</a></div></div><div mxa="_zs_galleryaM:c" class="_zs_galleryl"><div mxs="_zs_galleryaM:d" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_galleryaM:d" class="_zs_galleryo">'+n(h)+'</span><i mxs="_zs_galleryaM:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+'_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;mx-dropdown class="w200 mr20 fl"\n        selected="&#123;&#123;=selected&#125;&#125;"&gt;\n        &lt;mx-dropdown.item group="true"&gt;第一组&lt;/mx-dropdown.item&gt;\n        &#123;&#123;each first as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n        &lt;mx-dropdown.item group="true"&gt;第二组&lt;/mx-dropdown.item&gt;\n        &#123;&#123;each second as i&#125;&#125;\n        &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/mx-dropdown&gt;\n    &lt;a class="btn btn-brand fl" href="javascript:;" \n        mx-click="changeData()"&gt;修改数据&lt;/a&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryaM:e" class="_zs_galleryl"><div mxs="_zs_galleryaM:f" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_2"><span mxa="_zs_galleryaM:f" class="_zs_galleryo">'+n(z)+'</span><i mxs="_zs_galleryaM:e" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let that = this;\n\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 2; i++) &#123;\n            first.push('1' + i);\n            second.push('2' + i);\n        &#125;\n        that.updater.digest(&#123;\n            first,\n            second,\n            selected: 11\n        &#125;);\n    &#125;,\n    'changeData&lt;click&gt;' (e) &#123;\n        let first = [],\n            second = [];\n        for (var i = 0; i &lt; 2; i++) &#123;\n            first.push('3' + i);\n            second.push('4' + i);\n        &#125;\n\n        this.updater.digest(&#123;\n            first,\n            second,\n            selected: 31\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){for(var e=[],s=[],t=0;t<2;t++)e.push("1"+t),s.push("2"+t);this.updater.digest({first:e,second:s,selected:11})},"changeData<click>":function(e){for(var s=[],t=[],l=0;l<2;l++)s.push("3"+l),t.push("4"+l);this.updater.digest({first:s,second:t,selected:31})}})});