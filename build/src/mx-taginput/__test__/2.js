define("mx-taginput/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");n.exports=i.extend({tmpl:function(e,t,n,i,s,a,l,_){if(n||(n=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(d,x)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},u=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(u,c)}}if(!_){var g=/[\\'"]/g;_=function(e){return s(e).replace(g,"\\$&")}}l||(l=function(e,t,n,i){for(i=e[p];--i;)if(e[n=p+i]===t)return n;return e[n=p+e[p]++]=t,n});var p="",v="",o=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerye3:_" class="_zs_galleryg"><div mxa="_zs_gallerye3:a" class="_zs_galleryj"><div class="w300" mx-view="mx-taginput/index?list='+l(n,[{name:"test1",id:1},{name:"test2",id:2},{name:"test3",id:3}])+'&textKey=name&valueKey=id"></div></div><div mxa="_zs_gallerye3:b" class="_zs_galleryk"><div mxs="_zs_gallerye3:_" class="_zs_galleryi">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(o)+'_text_1"><span mxa="_zs_gallerye3:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerye3:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(o)+'_text_1">\n&lt;mx-taginput class="w300"\n    list="&#123;&#123;@[&#123;\n        name: \'test1\',\n        id: 1\n    &#125;, &#123;\n        name: \'test2\',\n        id: 2\n    &#125;, &#123;\n        name: \'test3\',\n        id: 3\n    &#125;]&#125;&#125;"\n    text-key="name"\n    value-key="id"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});