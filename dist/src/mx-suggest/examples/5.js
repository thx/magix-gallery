define("mx-suggest/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");l.exports=a.extend({tmpl:function(e,t,l,a,n,s,i,x){if(l||(l=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,_=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(u,_)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},v=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(v,m)}}if(!x){var d=/[\\'"]/g;x=function(e){return n(e).replace(d,"\\$&")}}i||(i=function(e,t,l,a){for(a=e[g];--a;)if(e[l=g+a]===t)return l;return e[l=g+e[g]++]=t,l});var g="",p="",o=e.viewId,y=e.text1;return p+='<div mxa="_zs_galleryeb:_" class="_zs_galleryg"><div mxa="_zs_galleryeb:a" class="_zs_galleryj"><div mx-view="mx-suggest/index?list='+i(l,[{text:"test1",value:4},{text:"test2",value:3},{text:"test3",value:2},{text:"test4",value:1}])+'&type=all"></div></div><div mxa="_zs_galleryeb:b" class="_zs_galleryk"><div mxs="_zs_galleryeb:_" class="_zs_galleryi">同时在value和text中搜索关键词</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(o)+'_text_1"><span mxa="_zs_galleryeb:c" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_galleryeb:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(o)+"_text_1\">\n&lt;mx-suggest \n    list=\"&#123;&#123;@[&#123;\n        value: 'test1',\n        text: 4\n    &#125;, &#123;\n        value: 'test12',\n        text: 3\n    &#125;, &#123;\n        value: 'abc1',\n        text: 2\n    &#125;, &#123;\n        value: 'abc2',\n        text: 1\n    &#125;]&#125;&#125;\"\n    type=\"all\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});