define("mx-suggest/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");t.exports=i.extend({tmpl:function(e,n,t,i,s,a,l,_){if(t||(t=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(d,m)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(g,c)}}if(!_){var u=/[\\'"]/g;_=function(e){return s(e).replace(u,"\\$&")}}l||(l=function(e,n,t,i){for(i=e[v];--i;)if(e[t=v+i]===n)return t;return e[t=v+e[v]++]=n,t});var v="",o="",p=e.viewId,y=e.text1;return o+='<div mxa="_zs_galleryd]:_" class="_zs_galleryg"><div mxa="_zs_galleryd]:a" class="_zs_galleryj"><div mx-view="mx-suggest/index?list='+l(t,[{name:"test1",id:1},{name:"test12",id:2},{name:"abc1",id:3},{name:"abc2",id:4}])+'&listText=name&listValue=id"></div></div><div mxa="_zs_galleryd]:b" class="_zs_galleryk"><div mxs="_zs_galleryd]:_" class="_zs_galleryi">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_1"><span mxa="_zs_galleryd]:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryd]:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(p)+"_text_1\">\n&lt;mx-suggest \n    list=\"&#123;&#123;@[&#123;\n        name: 'test1',\n        id: 1\n    &#125;, &#123;\n        name: 'test12',\n        id: 2\n    &#125;, &#123;\n        name: 'abc1',\n        id: 3\n    &#125;, &#123;\n        name: 'abc2',\n        id: 4\n    &#125;]&#125;&#125;\"\n    list-text=\"name\"\n    list-value=\"id\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});