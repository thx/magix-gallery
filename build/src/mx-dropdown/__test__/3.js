define("mx-dropdown/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");a.exports=t.extend({tmpl:function(e,n,a,t,_,l,i,s){if(a||(a=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(d,x)}}if(!l){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},o=/[!')(*]/g;l=function(e){return encodeURIComponent(_(e)).replace(o,c)}}if(!s){var p=/[\\'"]/g;s=function(e){return _(e).replace(p,"\\$&")}}i||(i=function(e,n,a,t){for(t=e[u];--t;)if(e[a=u+t]===n)return a;return e[a=u+e[u]++]=n,a});var u="",v="",y=e.viewId,g=e.text1;return v+='<div mxa="_zs_gallerya1:_" class="_zs_galleryh"><div mxa="_zs_gallerya1:a" class="_zs_galleryk"><div class="w200" mx-view="mx-dropdown/index?textKey=name&valueKey=id&list='+i(a,[{id:1,name:"选择1"},{id:2,name:"选择2"}])+'"></div></div><div mxa="_zs_gallerya1:b" class="_zs_galleryl"><div mxs="_zs_gallerya1:_" class="_zs_galleryj">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_1"><span mxa="_zs_gallerya1:c" class="_zs_galleryo">'+_(g)+'</span><i mxs="_zs_gallerya1:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+'_text_1">\n&lt;mx-dropdown class="w200" \n    text-key="name"\n    value-key="id"\n    list="&#123;&#123;@[&#123;id:1,name:\'选择1\'&#125;,&#123;id:2,name:\'选择2\'&#125;]&#125;&#125;"&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>'},render:function(){this.updater.digest({})}})});