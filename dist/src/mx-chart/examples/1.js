define("mx-chart/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");l.exports=i.extend({tmpl:function(e,a,l,i,r,s,n,c){if(l||(l=e),!r){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,_=function(e){return"&"+t[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(p,_)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(m,d)}}if(!c){var v=/[\\'"]/g;c=function(e){return r(e).replace(v,"\\$&")}}n||(n=function(e,a,l,i){for(i=e[g];--i;)if(e[l=g+i]===a)return l;return e[l=g+e[g]++]=a,l});var g="",y="",o=e.chartId,u=e.chartData,h=e.viewId,z=e.text1,f=e.text3;return y+='<div mxv mxa="_zs_galleryap:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryap:a" class="_zs_galleryj"><div mxs="_zs_galleryap:_" class="lh22">图表配置来自chartpark，<a href="#!/all/pro/chartpark" rel="noopener noreferrer" class="color-brand" target="_blank">流程可参考</a></div><div mxv="chartId,chartData" style="height: 400px;" mx-view="mx-chart/index?chartId='+n(l,o)+"&data="+n(l,u)+'"></div></div><div mxa="_zs_galleryap:b" class="clearfix"><div mxa="_zs_galleryap:c" class="_zs_gallery_ _zs_galleryf"><div mxa="_zs_galleryap:d" class="_zs_galleryk"><div mxs="_zs_galleryap:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(h)+'_text_1"><span mxa="_zs_galleryap:e" class="_zs_galleryn">'+r(z)+'</span><i mxs="_zs_galleryap:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(h)+'_text_1">\n&lt;mx-chart \n    chart-id="&#123;&#123;@chartId&#125;&#125;" \n    data="&#123;&#123;@chartData&#125;&#125;" \n    style="height: 400px;"\n&gt&lt;/mx-chart/&gt;\n                    </pre></div><div mxa="_zs_galleryap:f" class="_zs_galleryk"><div mxs="_zs_galleryap:c" class="_zs_galleryi">chartpark 图表配置</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(h)+'_text_2"><span mxa="_zs_galleryap:g" class="_zs_galleryn">'+r(z)+'</span><i mxs="_zs_galleryap:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(h)+'_text_2">\nvar options = {\n    coord: {\n        type: "rect",\n        xAxis: {\n            field: \'time\'\n        }\n    },\n    graphs: [\n        {\n            type: "line",\n            field: ["uv", "pv" ]\n        }\n    ],\n    legend:{}\n};\n                    </pre></div></div><div mxa="_zs_galleryap:h" class="_zs_galleryk _zs_gallerya"><div mxs="_zs_galleryap:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(h)+'_text_3"><span mxa="_zs_galleryap:i" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_galleryap:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(h)+'_text_3">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let chartData = [\n            {"time":"2017-03-21","pv":10,"uv":11,"click":12,"ppc":45},\n            {"time":"2017-03-22","pv":20,"uv":32,"click":14,"ppc":34},\n            {"time":"2017-03-23","pv":30,"uv":15,"click":12,"ppc":65},\n            {"time":"2017-03-24","pv":15,"uv":23,"click":21,"ppc":23},\n            {"time":"2017-03-25","pv":28,"uv":15,"click":15,"ppc":12}\n        ];\n        let chartId = 1;\n        this.updater.digest({\n            chartData,\n            chartId\n        });\n    }\n});\n            </pre></div></div></div>'},render:function(){this.updater.digest({chartData:[{time:"2017-03-21",pv:10,uv:11,click:12,ppc:45},{time:"2017-03-22",pv:20,uv:32,click:14,ppc:34},{time:"2017-03-23",pv:30,uv:15,click:12,ppc:65},{time:"2017-03-24",pv:15,uv:23,click:21,ppc:23},{time:"2017-03-25",pv:28,uv:15,click:15,ppc:12}],chartId:1})}})});