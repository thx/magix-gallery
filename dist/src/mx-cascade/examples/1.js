define("mx-cascade/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix").Vframe;var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,t,u,x,v){if(a||(a=e),!t){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,s=function(e){return"&"+p[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(i,s)}}if(!u){var V={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return V[e]},c=/[!')(*]/g;u=function(e){return encodeURIComponent(t(e)).replace(c,r)}}if(!v){var d=/[\\'"]/g;v=function(e){return t(e).replace(d,"\\$&")}}x||(x=function(e,l,a,n){for(n=e[m];--n;)if(e[a=m+n]===l)return a;return e[a=m+e[m]++]=l,a});var m="",_="",g=e.list,o=e.viewId,y=e.text1,f=e.text2;return _+='<div mxv mxa="_zs_galleryai:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryai:a" class="_zs_galleryj"><div mxs="_zs_galleryai:_" class="mb15 clearfix"><div class="fl color-9">使用场景：</div><div class="fl"><div>省市县区的选择</div><div>返回选中的叶子节点数据selected（value值），item（完整数据对象）</div></div></div><div mxv="list" class="w200" mx-change="'+l+'select()" mx-view="mx-cascade/index?list='+x(a,g)+'"></div></div><div mxa="_zs_galleryai:b" class="_zs_galleryk"><div mxs="_zs_galleryai:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+u(o)+'_text_1"><span mxa="_zs_galleryai:c" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_galleryai:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(o)+'_text_1">\n&lt;mx-cascade class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    mx-change="select()"&gt;&lt;/mx-cascade&gt;\n        </pre></div><div mxa="_zs_galleryai:d" class="_zs_galleryk"><div mxs="_zs_galleryai:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+u(o)+'_text_2"><span mxa="_zs_galleryai:e" class="_zs_galleryn">'+t(f)+'</span><i mxs="_zs_galleryai:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(o)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 11,\n            pValue: '',\n            text: '上海'\n        &#125;, &#123;\n            value: 12,\n            pValue: '',\n            text: '江苏'\n        &#125;, &#123;\n            value: 13,\n            pValue: '',\n            text: '浙江'\n        &#125;, &#123;\n            value: 14,\n            pValue: '',\n            text: '北京'\n        &#125;, &#123;\n            value: 15,\n            pValue: '',\n            text: '四川'\n        &#125;, &#123;\n            value: 121,\n            pValue: 12,\n            text: '南京'\n        &#125;, &#123;\n            value: 122,\n            pValue: 12,\n            text: '苏州'\n        &#125;, &#123;\n            value: 123,\n            pValue: 12,\n            text: '南通'\n        &#125;, &#123;\n            value: 131,\n            pValue: 13,\n            text: '杭州'\n        &#125;, &#123;\n            value: 132,\n            pValue: 13,\n            text: '宁波'\n        &#125;, &#123;\n            value: 133,\n            pValue: 13,\n            text: '温州'\n        &#125;, &#123;\n            value: 134,\n            pValue: 13,\n            text: '嘉兴'\n        &#125;, &#123;\n            value: 135,\n            pValue: 13,\n            text: '舟山'\n        &#125;, &#123;\n            value: 136,\n            pValue: 13,\n            text: '台州'\n        &#125;, &#123;\n            value: 137,\n            pValue: 13,\n            text: '湖州'\n        &#125;, &#123;\n            value: 151,\n            pValue: 15,\n            text: '成都'\n        &#125;, &#123;\n            value: 152,\n            pValue: 15,\n            text: '乐山'\n        &#125;, &#123;\n            value: 153,\n            pValue: 15,\n            text: '广元'\n        &#125;, &#123;\n            value: 154,\n            pValue: 15,\n            text: '南充'\n        &#125;, &#123;\n            value: 155,\n            pValue: 15,\n            text: '德阳'\n        &#125;, &#123;\n            value: 156,\n            pValue: 15,\n            text: '绵阳'\n        &#125;, &#123;\n            value: 157,\n            pValue: 15,\n            text: '眉山'\n        &#125;, &#123;\n            value: 158,\n            pValue: 15,\n            text: '宜宾'\n        &#125;, &#123;\n            value: 1311,\n            pValue: 131,\n            text: '余杭区'\n        &#125;, &#123;\n            value: 1312,\n            pValue: 131,\n            text: '西湖区'\n        &#125;, &#123;\n            value: 1313,\n            pValue: 131,\n            text: '上城区'\n        &#125;, &#123;\n            value: 1314,\n            pValue: 131,\n            text: '下城区'\n        &#125;, &#123;\n            value: 1315,\n            pValue: 131,\n            text: '江干区'\n        &#125;, &#123;\n            value: 1316,\n            pValue: 131,\n            text: '拱墅区'\n        &#125;, &#123;\n            value: 1317,\n            pValue: 131,\n            text: '萧山区'\n        &#125;, &#123;\n            value: 1318,\n            pValue: 131,\n            text: '滨江区'\n        &#125;, &#123;\n            value: 1319,\n            pValue: 131,\n            text: '富阳市'\n        &#125;, &#123;\n            value: 1371,\n            pValue: 137,\n            text: '吴兴区'\n        &#125;, &#123;\n            value: 1372,\n            pValue: 137,\n            text: '安吉县'\n        &#125;, &#123;\n            value: 1373,\n            pValue: 137,\n            text: '长兴区'\n        &#125;, &#123;\n            value: 1374,\n            pValue: 137,\n            text: '德清县'\n        &#125;, &#123;\n            value: 1375,\n            pValue: 137,\n            text: '南浔区'\n        &#125;]\n\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    'select&lt;change&gt;'(event)&#123;\n        // 选中的叶子节点数据\n        // event.selected：value值\n        // event.item：完整数据对象\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({list:[{value:11,pValue:"",text:"上海"},{value:12,pValue:"",text:"江苏"},{value:13,pValue:"",text:"浙江"},{value:14,pValue:"",text:"北京"},{value:15,pValue:"",text:"四川"},{value:121,pValue:12,text:"南京"},{value:122,pValue:12,text:"苏州"},{value:123,pValue:12,text:"南通"},{value:131,pValue:13,text:"杭州"},{value:132,pValue:13,text:"宁波"},{value:133,pValue:13,text:"温州"},{value:134,pValue:13,text:"嘉兴"},{value:135,pValue:13,text:"舟山"},{value:136,pValue:13,text:"台州"},{value:137,pValue:13,text:"湖州"},{value:151,pValue:15,text:"成都"},{value:152,pValue:15,text:"乐山"},{value:153,pValue:15,text:"广元"},{value:154,pValue:15,text:"南充"},{value:155,pValue:15,text:"德阳"},{value:156,pValue:15,text:"绵阳"},{value:157,pValue:15,text:"眉山"},{value:158,pValue:15,text:"宜宾"},{value:1311,pValue:131,text:"余杭区"},{value:1312,pValue:131,text:"西湖区"},{value:1313,pValue:131,text:"上城区"},{value:1314,pValue:131,text:"下城区"},{value:1315,pValue:131,text:"江干区"},{value:1316,pValue:131,text:"拱墅区"},{value:1317,pValue:131,text:"萧山区"},{value:1318,pValue:131,text:"滨江区"},{value:1319,pValue:131,text:"富阳市"},{value:1371,pValue:137,text:"吴兴区"},{value:1372,pValue:137,text:"安吉县"},{value:1373,pValue:137,text:"长兴区"},{value:1374,pValue:137,text:"德清县"},{value:1375,pValue:137,text:"南浔区"}]})},"select<change>":function(e){}})});