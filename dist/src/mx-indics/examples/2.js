define("mx-indics/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");a.exports=t.extend({tmpl:function(e,l,a,t,s,n,i,x){if(a||(a=e),!s){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,r=function(e){return"&"+u[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(v,r)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return c[e]},_=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(_,d)}}if(!x){var m=/[\\'"]/g;x=function(e){return s(e).replace(m,"\\$&")}}i||(i=function(e,l,a,t){for(t=e[p];--t;)if(e[a=p+t]===l)return a;return e[a=p+e[p]++]=l,a});var p="",o="",g=e.viewId,y=e.text1,f=e.text2;return o+='<div mxa="_zs_galleryc(:_" class="_zs_galleryg"><div mxa="_zs_galleryc(:a" class="_zs_galleryj"><div mxa="_zs_galleryc(:b" class="clearfix mb20"><div mxa="_zs_galleryc(:c" class="_zs_galleryd"><div mxs="_zs_galleryc(:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">不限制可选择个数 + 指标可排序 + 无分组</div></div><div mx-view="mx-indics/index?fields='+i(a,[{value:1,text:"消耗",tip:"消耗提示文案"},{value:2,text:"展现量"},{value:3,text:"点击量"},{value:4,text:"点击率"},{value:5,text:"平均点击单价",tip:"平均点击单价提示文案"},{value:6,text:"点击转化率"},{value:7,text:"成交笔数"},{value:8,text:"千次展现成本"},{value:9,text:"投资回报率"},{value:10,text:"访问页面数"}])+"&defaults="+i(a,[1,2,3])+"&custom=true&customs="+i(a,[2,3,4,5,6])+'&sortable=true"></div></div><div mxa="_zs_galleryc(:d" class="_zs_galleryd"><div mxs="_zs_galleryc(:a" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">不限制可选择个数 + 指标可排序 + 有分组</div></div><div mx-view="mx-indics/index?parents='+i(a,[{value:1,text:"组1"},{value:2,text:"组2"}])+"&fields="+i(a,[{value:1,text:"消耗",pValue:1,tip:"消耗提示文案"},{value:2,text:"展现量",pValue:1},{value:3,text:"点击量",pValue:1},{value:4,text:"点击率",pValue:1},{value:5,text:"平均点击单价",pValue:1,tip:"平均点击单价提示文案"},{value:6,text:"点击转化率",pValue:2},{value:7,text:"成交笔数",pValue:2},{value:8,text:"千次展现成本",pValue:2},{value:9,text:"投资回报率",pValue:2},{value:10,text:"访问页面数",pValue:2}])+"&defaults="+i(a,[1,2,3])+"&custom=true&customs="+i(a,[2,3,4,5,6])+'&sortable=true"></div></div></div></div><div mxa="_zs_galleryc(:e" class="clearfix"><div mxa="_zs_galleryc(:f" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryc(:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_galleryc(:g" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryc(:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(g)+"_text_1\">\n&lt;mx-indics \n    fields=\"&#123;&#123;@[&#123;\n        value: 1, text: '消耗', tip: '消耗提示文案'\n    &#125;, &#123;\n        value: 2, text: '展现量'\n    &#125;, &#123;\n        value: 3, text: '点击量'\n    &#125;, &#123;\n        value: 4, text: '点击率'\n    &#125;, &#123;\n        value: 5, text: '平均点击单价', tip: '平均点击单价提示文案'\n    &#125;, &#123;\n        value: 6, text: '点击转化率'\n    &#125;, &#123;\n        value: 7, text: '成交笔数'\n    &#125;, &#123;\n        value: 8, text: '千次展现成本'\n    &#125;, &#123;\n        value: 9, text: '投资回报率'\n    &#125;, &#123;\n        value: 10, text: '访问页面数'\n    &#125;]&#125;&#125;\" \n    defaults=\"&#123;&#123;@[1,2,3]&#125;&#125;\"\n    custom=\"true\"\n    customs=\"&#123;&#123;@[2,3,4,5,6]&#125;&#125;\"\n    sortable=\"true\"/&gt;\n            </pre></div><div mxa=\"_zs_galleryc(:h\" class=\"_zs_galleryk _zs_galleryd _zs_gallerye\"><div mxs=\"_zs_galleryc(:b\" class=\"_zs_galleryi\">HTML Code</div><div class=\"_zs_galleryl\" mx-success=\""+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_2"><span mxa="_zs_galleryc(:i" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_galleryc(:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(g)+"_text_2\">\n&lt;mx-indics \n    parents=\"&#123;&#123;@[&#123;\n        value: 1, text: '组1'\n    &#125;, &#123;\n        value: 2, text: '组2'\n    &#125;]&#125;&#125;\"\n    fields=\"&#123;&#123;@[&#123;\n        value: 1, text: '消耗', pValue: 1, tip: '消耗提示文案'\n    &#125;, &#123;\n        value: 2, text: '展现量', pValue: 1\n    &#125;, &#123;\n        value: 3, text: '点击量', pValue: 1\n    &#125;, &#123;\n        value: 4, text: '点击率', pValue: 1\n    &#125;, &#123;\n        value: 5, text: '平均点击单价', pValue: 1, tip: '平均点击单价提示文案'\n    &#125;, &#123;\n        value: 6, text: '点击转化率', pValue: 2\n    &#125;, &#123;\n        value: 7, text: '成交笔数', pValue: 2\n    &#125;, &#123;\n        value: 8, text: '千次展现成本', pValue: 2\n    &#125;, &#123;\n        value: 9, text: '投资回报率', pValue: 2\n    &#125;, &#123;\n        value: 10, text: '访问页面数', pValue: 2\n    &#125;]&#125;&#125;\" \n    defaults=\"&#123;&#123;@[1,2,3]&#125;&#125;\"\n    custom=\"true\"\n    customs=\"&#123;&#123;@[2,3,4,5,6]&#125;&#125;\"\n    sortable=\"true\"/&gt;\n            </pre></div></div></div>"},render:function(){this.updater.digest({})}})});