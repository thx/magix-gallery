define("mx-tabs/examples/7",["magix","examples/example","$","../box","mx-copy/index","examples/hl"],(e,l,n)=>{e("../box"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");n.exports=a.extend({tmpl:function(e,l,n,a,t,i,s,r){if(n||(n=e),!t){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+x[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(m,o)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(t(e)).replace(p,c)}}if(!r){var d=/[\\'"]/g;r=function(e){return t(e).replace(d,"\\$&")}}s||(s=function(e,l,n,a){for(a=e[u];--a;)if(e[n=u+a]===l)return n;return e[n=u+e[u]++]=l,n});var u="",v="",f=e.viewId,g=e.text1;return v+='<div mxa="_zs_galleryfi:_" class="_zs_galleryg"><div mxa="_zs_galleryfi:a" class="_zs_galleryj"><div mx-view="mx-tabs/box?mode=hollow&list='+s(n,[{text:"模块1",value:1,tips:"提示信息"},{text:"模块2",value:2},{text:"模块3",value:3}])+'"></div></div><div mxa="_zs_galleryfi:b" class="_zs_galleryk"><div mxs="_zs_galleryfi:_" class="_zs_galleryi">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryfi:c" class="_zs_galleryn">'+t(g)+'</span><i mxs="_zs_galleryfi:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+"_text_1\">\n&lt;mx-tabs.box\n    mode=\"hollow\"\n    list=\"&#123;&#123;@[&#123;\n        text: '模块1',\n        value: 1,\n        tips: '提示信息'\n    &#125;,&#123;\n        text: '模块2',\n        value: 2\n    &#125;,&#123;\n        text: '模块3',\n        value: 3\n    &#125;]&#125;&#125;\" /&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});