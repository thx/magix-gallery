define("mx-suggest/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,n,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,n,a,i,l,s,t,r){if(a||(a=e),!l){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+m[e]+";"};l=function(e){return""+(null==e?"":e)},i=function(e){return l(e).replace(x,d)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return c[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(g,_)}}if(!r){var p=/[\\'"]/g;r=function(e){return l(e).replace(p,"\\$&")}}t||(t=function(e,n,a,i){for(i=e[u];--i;)if(e[a=u+i]===n)return a;return e[a=u+e[u]++]=n,a});var u="",v="",o=e.viewId,y=e.text1;return v+='<div mxa="_zs_galleryeN:_" class="_zs_galleryg"><div mxa="_zs_galleryeN:a" class="_zs_galleryj"><div mx-view="mx-suggest/index?list='+t(a,[{name:"test1",id:1},{name:"test12",id:2},{name:"abc1",id:3},{name:"abc2",id:4}])+'&listText=name&listValue=id"></div></div><div mxa="_zs_galleryeN:b" class="_zs_galleryk"><div mxs="_zs_galleryeN:_" class="_zs_galleryi">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(o)+'_text_1"><span mxa="_zs_galleryeN:c" class="_zs_galleryn">'+l(y)+'</span><i mxs="_zs_galleryeN:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(o)+"_text_1\">\n&lt;mx-suggest \n    list=\"&#123;&#123;@[&#123;\n        name: 'test1',\n        id: 1\n    &#125;, &#123;\n        name: 'test12',\n        id: 2\n    &#125;, &#123;\n        name: 'abc1',\n        id: 3\n    &#125;, &#123;\n        name: 'abc2',\n        id: 4\n    &#125;]&#125;&#125;\"\n    list-text=\"name\"\n    list-value=\"id\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});