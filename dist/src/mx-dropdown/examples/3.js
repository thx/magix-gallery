define("mx-dropdown/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");n.exports=l.extend({tmpl:function(e,a,n,l,i,s,r,t){if(n||(n=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(x,m)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(p,c)}}if(!t){var o=/[\\'"]/g;t=function(e){return i(e).replace(o,"\\$&")}}r||(r=function(e,a,n,l){for(l=e[u];--l;)if(e[n=u+l]===a)return n;return e[n=u+e[u]++]=a,n});var u="",v="",g=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerya::_" class="_zs_galleryg"><div mxa="_zs_gallerya::a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/index?textKey=name&valueKey=id&list='+r(n,[{id:1,name:"选择1"},{id:2,name:"选择2"}])+'"></div></div><div mxa="_zs_gallerya::b" class="_zs_galleryk"><div mxs="_zs_gallerya::_" class="_zs_galleryi">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_gallerya::c" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_gallerya::a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(g)+'_text_1">\n&lt;mx-dropdown class="w200" \n    text-key="name"\n    value-key="id"\n    list="&#123;&#123;@[&#123;id:1,name:\'选择1\'&#125;,&#123;id:2,name:\'选择2\'&#125;]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest({})}})});