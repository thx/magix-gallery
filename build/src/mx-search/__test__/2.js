define("mx-search/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");a.exports=i.extend({tmpl:function(e,n,a,i,s,t,l,_){if(a||(a=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(d,c)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(g,m)}}if(!_){var u=/[\\'"]/g;_=function(e){return s(e).replace(u,"\\$&")}}l||(l=function(e,n,a,i){for(i=e[p];--i;)if(e[a=p+i]===n)return a;return e[a=p+e[p]++]=n,a});var p="",o="",v=e.viewId,y=e.text1;return o+='<div mxa="_zs_gallerydE:_" class="_zs_galleryg"><div mxa="_zs_gallerydE:a" class="_zs_galleryj"><div class="w200" mx-view="mx-search/index?list='+l(a,[{name:"计划",id:"campaignId"},{name:"单元",id:"adgroupId"}])+'&listText=name&listValue=id"></div></div><div mxa="_zs_gallerydE:b" class="_zs_galleryk"><div mxs="_zs_gallerydE:_" class="_zs_galleryi">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_gallerydE:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerydE:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;mx-search class="w200"\n    list="&#123;&#123;@[&#123;\n        name: \'计划\',\n        id: \'campaignId\'\n    &#125;, &#123;\n        name: \'单元\',\n        id: \'adgroupId\'\n    &#125;]&#125;&#125;"\n    list-text="name"\n    list-value="id"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});