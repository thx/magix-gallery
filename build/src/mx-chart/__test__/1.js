define("mx-chart/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");l.exports=t.extend({tmpl:function(e,a,l,t,_,i,s,r){if(l||(l=e),!_){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(n,d)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},v=/[!')(*]/g;i=function(e){return encodeURIComponent(_(e)).replace(v,p)}}if(!r){var m=/[\\'"]/g;r=function(e){return _(e).replace(m,"\\$&")}}s||(s=function(e,a,l,t){for(t=e[g];--t;)if(e[l=g+t]===a)return l;return e[l=g+e[g]++]=a,l});var g="",h="",y=e.chartId,o=e.chartData,u=e.viewId,z=e.text1,f=e.text3;return h+='<div mxv mxa="_zs_galleryah:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryah:a" class="_zs_galleryj"><div mxs="_zs_galleryah:_" class="lh22">图表配置来自chartpark，<a href="#!/all/pro/chartpark" style="color: var(--color-brand);" target="_blank">流程可参考</a></div><div mxv="chartId,chartData" style="height: 400px;" mx-view="mx-chart/index?chartId='+s(l,y)+"&data="+s(l,o)+'"></div></div><div mxa="_zs_galleryah:b" class="clearfix"><div mxa="_zs_galleryah:c" class="_zs_gallery_"><div mxa="_zs_galleryah:d" class="_zs_galleryk"><div mxs="_zs_galleryah:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryah:e" class="_zs_galleryn">'+_(z)+'</span><i mxs="_zs_galleryah:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(u)+'_text_1">\n&lt;mx-chart \n    chartId="&#123;&#123;@chartId&#125;&#125;" \n    data="&#123;&#123;@chartData&#125;&#125;" \n    style="height: 400px;"\n&gt&lt;/mx-chart/&gt;\n        </pre></div><div mxa="_zs_galleryah:f" class="_zs_galleryk"><div mxs="_zs_galleryah:c" class="_zs_galleryi">chartpark 图表配置</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_2"><span mxa="_zs_galleryah:g" class="_zs_galleryn">'+_(z)+'</span><i mxs="_zs_galleryah:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(u)+'_text_2">\nvar options = {\n    coord: {\n        type: "rect",\n        xAxis: {\n            field: \'time\'\n        }\n    },\n    graphs: [\n        {\n            type: "line",\n            field: ["uv", "pv" ]\n        }\n    ],\n    legend:{}\n};\n            </pre></div></div><div mxa="_zs_galleryah:h" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryah:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_3"><span mxa="_zs_galleryah:i" class="_zs_galleryn">'+_(f)+'</span><i mxs="_zs_galleryah:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(u)+'_text_3">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let chartData = [\n            {"time":"2017-03-21","pv":10,"uv":11,"click":12,"ppc":45},\n            {"time":"2017-03-22","pv":20,"uv":32,"click":14,"ppc":34},\n            {"time":"2017-03-23","pv":30,"uv":15,"click":12,"ppc":65},\n            {"time":"2017-03-24","pv":15,"uv":23,"click":21,"ppc":23},\n            {"time":"2017-03-25","pv":28,"uv":15,"click":15,"ppc":12}\n        ];\n        let chartId = 1;\n        this.updater.digest({\n            chartData,\n            chartId\n        });\n    }\n});\n                </pre></div></div></div>'},render:function(){this.updater.digest({chartData:[{time:"2017-03-21",pv:10,uv:11,click:12,ppc:45},{time:"2017-03-22",pv:20,uv:32,click:14,ppc:34},{time:"2017-03-23",pv:30,uv:15,click:12,ppc:65},{time:"2017-03-24",pv:15,uv:23,click:21,ppc:23},{time:"2017-03-25",pv:28,uv:15,click:15,ppc:12}],chartId:1})}})});