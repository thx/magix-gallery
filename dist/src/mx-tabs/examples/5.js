define("mx-tabs/examples/5",["magix","examples/example","$","../box","mx-copy/index","examples/hl"],(e,n,a)=>{e("../box"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");a.exports=l.extend({tmpl:function(e,n,a,l,i,s,t,r){if(a||(a=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(m,d)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(p,c)}}if(!r){var o=/[\\'"]/g;r=function(e){return i(e).replace(o,"\\$&")}}t||(t=function(e,n,a,l){for(l=e[u];--l;)if(e[a=u+l]===n)return a;return e[a=u+e[u]++]=n,a});var u="",v="",y=e.viewId,g=e.text1;return v+='<div mxa="_zs_gallerye\\:_" class="_zs_galleryg"><div mxa="_zs_gallerye\\:a" class="_zs_galleryj"><div mx-view="mx-tabs/box?list='+t(a,[{name:"模块1",id:1,tips:"提示信息"},{name:"模块2",id:2}])+'&valueKey=id&textKey=name"></div></div><div mxa="_zs_gallerye\\:b" class="_zs_galleryk"><div mxs="_zs_gallerye\\:_" class="_zs_galleryi">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_gallerye\\:c" class="_zs_galleryn">'+i(g)+'</span><i mxs="_zs_gallerye\\:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(y)+'_text_1">\n&lt;mx-tabs.box\n    list="&#123;&#123;@[&#123;\n        name: \'模块1\',\n        id: 1,\n        tips: \'提示信息\'\n    &#125;,&#123;\n        name: \'模块2\',\n        id: 2\n    &#125;]&#125;&#125;"\n    value-key="id"\n    text-key="name"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});