define("__test__/pro/chartpark-id",["magix","$","../example","./chartpark/demo","mx-copy/index","../hl"],(e,a,t)=>{e("./chartpark/demo"),e("mx-copy/index"),e("../hl");e("magix"),e("$");var r=e("../example");t.exports=r.extend({tmpl:function(e,a,t,r,l,n,i,c){if(t||(t=e),!l){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,d=function(e){return"&"+_[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(s,d)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(l(e)).replace(o,m)}}if(!c){var p=/[\\'"]/g;c=function(e){return l(e).replace(p,"\\$&")}}i||(i=function(e,a,t,r){for(r=e[g];--r;)if(e[t=g+r]===a)return t;return e[t=g+e[g]++]=a,t});var g="",v="",u=e.chartData,h=e.viewId,y=e.text1;return v+='<div mxv mxa="_zs_galleryn:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryn:a" class="_zs_galleryj"><div mxv="chartData" mx-view="__test__/pro/chartpark/demo?chartId=4&data='+i(t,u)+'" style="height: 250px;"></div></div><div mxa="_zs_galleryn:b" class="_zs_galleryk"><div mxs="_zs_galleryn:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(h)+'_text_1"><span mxa="_zs_galleryn:c" class="_zs_galleryn">'+l(y)+'</span><i mxs="_zs_galleryn:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(h)+'_text_1">\n&lt;lg-chart style="height: 250px;" chart-id="1" data="&#123;&#123;@chartData&#125;&#125;"&gt;&lt;/lg-chart&gt;\n</pre></div></div>'},render:function(){this.updater.digest({chartData:[["time","click","ppc"],["2017-03-21",10,23],["2017-03-22",20,65],["2017-03-23",40,45],["2017-03-24",18,123],["2017-03-25",32,32]]})}})});