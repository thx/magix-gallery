define("mx-hour/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),a=e("__test__/example"),t=i.Vframe;e("$");i.applyStyle("_zs_galleryV","._zs_gallerygW{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygX{padding:10px;border-radius:4px;border:1px solid #e6e6e6}._zs_gallerygY{width:760px}._zs_gallerygZ{width:800px}"),s.exports=a.extend({tmpl:function(e,l,s,i,a,t,r,_){if(s||(s=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(n,c)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},v=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(v,g)}}if(!_){var m=/[\\'"]/g;_=function(e){return a(e).replace(m,"\\$&")}}r||(r=function(e,l,s,i){for(i=e[o];--i;)if(e[s=o+i]===l)return s;return e[s=o+e[o]++]=l,s});var o="",y="",p=e.selected,f=e.viewId,u=e.text1,z=e.text2;y+='<div mxv mxa="_zs_galleryb8:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb8:a" class="_zs_galleryk"><div mxs="_zs_galleryb8:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>极简模式（只区分工作日和双休日）</div><div>时间段btn快捷全选或反选</div><div>拖动连续选择</div><div>宽度随容器自适应，可配置提示信息</div></div></div><div mxa="_zs_galleryb8:b" class="mb20 clearfix"><div mxs="_zs_galleryb8:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="'+l+'get()">获取选中值</a></div><div mxa="_zs_galleryb8:c" class="fl">';for(var b=0,h=p.length;b<h;b++){var w=p[b];y+="<div>"+i(w.name)+"："+i(w.times)+"</div>"}return y+='</div></div><div mxv="selected" class="_zs_gallerygX _zs_gallerygY" id="'+i(f)+'_hour" mx-view="mx-hour/index?selected='+r(s,p)+'&tip=%E8%93%9D%E8%89%B2%E4%B8%BA%E5%B7%B2%E9%80%89%E6%8A%95%E6%94%BE%E6%97%B6%E6%AE%B5"></div></div><div mxa="_zs_galleryb8:d" class="clearfix"><div mxa="_zs_galleryb8:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryb8:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(f)+'_text_1"><span mxa="_zs_galleryb8:f" class="_zs_galleryo">'+a(u)+'</span><i mxs="_zs_galleryb8:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(f)+'_text_1">\n&lt;div&gt;\n    &lt;a href="javascript:;" class="btn btn-brand"\n        mx-click="get()"&gt;获取选中值&lt;/a&gt;\n&lt;/div&gt;\n\n&lt;mx-hour id="&#123;&#123;=viewId&#125;&#125;_hour"\n    selected="&#123;&#123;@selected&#125;&#125;" \n    tip="蓝色为已选投放时段"/&gt;</pre></div><div mxa="_zs_galleryb8:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryb8:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(f)+'_text_2"><span mxa="_zs_galleryb8:h" class="_zs_galleryo">'+a(z)+'</span><i mxs="_zs_galleryb8:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(f)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: [&#123;\n                week: '12345',\n                times: [2, 3, 4]\n            &#125;, &#123;\n                week: '67',\n                times: [10, 11, 12]\n            &#125;]\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;'() &#123;\n        let vf = Vframe.get(this.id + '_hour');\n        let selected = vf.invoke('val');\n        this.updater.digest(&#123;\n            selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest({viewId:this.id,selected:[{week:"12345",name:"周一至周五",times:[2,3,4]},{week:"67",name:"周六至周日",times:[10,11,12]}]})},"get<click>":function(){var e=t.get(this.id+"_hour").invoke("val");this.updater.digest({selected:e})}})});