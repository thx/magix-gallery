define("mx-dropdown/examples/16",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(e,l,a)=>{e("../multiple"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,t,r,s,i){if(a||(a=e),!t){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(o,m)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return c[e]},d=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(d,u)}}if(!i){var _=/[\\'"]/g;i=function(e){return t(e).replace(_,"\\$&")}}s||(s=function(e,l,a,n){for(n=e[p];--n;)if(e[a=p+n]===l)return a;return e[a=p+e[p]++]=l,a});var p="",v="",g=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerya\\:_" class="_zs_galleryg"><div mxa="_zs_gallerya\\:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/multiple?searchbox=true&list='+s(a,[{value:1,text:"测试Logo"},{value:2,text:"logo"},{value:3,text:"123456"}])+'"></div></div><div mxa="_zs_gallerya\\:b" class="_zs_galleryk"><div mxs="_zs_gallerya\\:_" class="_zs_galleryi">搜索不区分大小写</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_gallerya\\:c" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_gallerya\\:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(g)+'_text_1">\n&lt;mx-dropdown.multiple class="w200" \n    searchbox="true"\n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'测试Logo\'\n    &#125;,&#123;\n        value: 2,\n        text: \'logo\'\n    &#125;,&#123;\n        value: 3,\n        text: \'123456\'\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});