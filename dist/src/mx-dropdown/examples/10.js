define("mx-dropdown/examples/10",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(e,l,a)=>{e("../multiple"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,i,s,t,r){if(a||(a=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(m,o)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(c,p)}}if(!r){var _=/[\\'"]/g;r=function(e){return i(e).replace(_,"\\$&")}}t||(t=function(e,l,a,n){for(n=e[u];--n;)if(e[a=u+n]===l)return a;return e[a=u+e[u]++]=l,a});var u="",g="",v=e.viewId,w=e.text1;return g+='<div mxa="_zs_gallerya*:_" class="_zs_galleryg"><div mxa="_zs_gallerya*:a" class="_zs_galleryj"><div mxa="_zs_gallerya*:b" class="mb20"><div class="w200" mx-view="mx-dropdown/multiple?needAll=false&list='+t(a,[1,2,3])+'"></div></div><div mxs="_zs_gallerya*:_" class="w200" mx-view="mx-dropdown/multiple?needAll=false"><i value="1" class="none">1</i><i value="2" class="none">2</i><i value="3" class="none">3</i></div></div><div mxa="_zs_gallerya*:c" class="_zs_galleryk"><div mxs="_zs_gallerya*:a" class="_zs_galleryi">显示文案和前后端传递值一致</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerya*:d" class="_zs_galleryn">'+i(w)+'</span><i mxs="_zs_gallerya*:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(v)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    need-all="false"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n\n&lt;mx-dropdown.multiple class="w200"\n    need-all="false"&gt;\n    &lt;mx-dropdown.item value="1"&gt;1&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="2"&gt;2&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="3"&gt;3&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});