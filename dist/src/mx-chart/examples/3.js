define("mx-chart/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");l.exports=t.extend({tmpl:function(e,a,l,t,i,c,r,s){if(l||(l=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,x=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(p,x)}}if(!c){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},d=/[!')(*]/g;c=function(e){return encodeURIComponent(i(e)).replace(d,_)}}if(!s){var v=/[\\'"]/g;s=function(e){return i(e).replace(v,"\\$&")}}r||(r=function(e,a,l,t){for(t=e[o];--t;)if(e[l=o+t]===a)return l;return e[l=o+e[o]++]=a,l});var o="",g="",u=e.chartId,y=e.chartData,h=e.viewId,z=e.text1,f=e.text2;return g+='<div mxv mxa="_zs_galleryao:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryao:a" class="_zs_galleryj"><div mxv="chartId,chartData" style="height: 400px;" mx-view="mx-chart/index?chartId='+r(l,u)+"&data="+r(l,y)+'"></div></div><div mxa="_zs_galleryao:b" class="clearfix"><div mxa="_zs_galleryao:c" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_galleryao:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+c(h)+'_text_1"><span mxa="_zs_galleryao:d" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_galleryao:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(h)+'_text_1">\n        &lt;mx-chart \n            chartId="&#123;&#123;@chartId&#125;&#125;" \n            data="&#123;&#123;@chartData&#125;&#125;" \n            style="height: 400px;"\n        &gt&lt;/mx-chart/&gt;\n        </pre></div><div mxa="_zs_galleryao:e" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryao:b" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+c(h)+'_text_2"><span mxa="_zs_galleryao:f" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_galleryao:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(h)+'_text_2">\nlet Magix = require(\'magix\');\nlet Base = require(\'examples/example\');\nlet $ = require(\'$\');\n    \nmodule.exports = Base.extend({\n    tmpl: \'@1.html\',\n    render() {\n        let chartData = [\n            {"time":"2017-03-21","pv":10,"uv":11,"click":12,"ppc":45},\n            {"time":"2017-03-22","pv":20,"uv":32,"click":14,"ppc":34},\n            {"time":"2017-03-23","pv":30,"uv":15,"click":12,"ppc":65},\n            {"time":"2017-03-24","pv":15,"uv":23,"click":21,"ppc":23},\n            {"time":"2017-03-25","pv":28,"uv":15,"click":15,"ppc":12}\n        ];\n        let chartId = 1;\n        this.updater.digest({\n            chartData,\n            chartId\n        });\n    }\n});\n                </pre></div></div></div>'},render:function(){this.updater.digest({chartData:[{time:"2017-03-21",pv:10,uv:11,click:12,ppc:45},{time:"2017-03-22",pv:20,uv:32,click:14,ppc:34},{time:"2017-03-23",pv:30,uv:15,click:12,ppc:65},{time:"2017-03-24",pv:15,uv:23,click:21,ppc:23},{time:"2017-03-25",pv:28,uv:15,click:15,ppc:12}],chartId:1})}})});