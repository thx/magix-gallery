define("mx-title/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");s.exports=_.extend({tmpl:function(e,l,s,_,t,a,i,n){if(s||(s=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},_=function(e){return t(e).replace(c,d)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(m,g)}}if(!n){var p=/[\\'"]/g;n=function(e){return t(e).replace(p,"\\$&")}}var v="",o=e.viewId,y=e.text1,z=e.text2;return v+='<div class="_zs_galleryg" id="'+_(o)+'_demo1"><div mxs="_zs_gallerye^:_" class="_zs_galleryj"><div mx-view="mx-title/index?content=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div></div><div mxa="_zs_gallerye^:_" class="_zs_galleryk"><div mxs="_zs_gallerye^:a" class="_zs_galleryi">使用组件</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(o)+'_text_1"><span mxa="_zs_gallerye^:a" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_gallerye^:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(o)+'_text_1">\n&lt;mx-title \n    content="一级标题"\n    tip="标题提示文案"/&gt;\n        </pre></div><div mxa="_zs_gallerye^:b" class="_zs_galleryk"><div mxs="_zs_gallerye^:c" class="_zs_galleryi">可直接使用class</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(o)+'_text_2"><span mxa="_zs_gallerye^:c" class="_zs_galleryn">'+t(z)+'</span><i mxs="_zs_gallerye^:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(o)+'_text_2">\n&lt;div class="page-header"&gt;\n    &lt;span class="first-header"&gt;一级标题&lt;/span&gt;\n    &lt;span class="page-tip"&gt;标题提示文案&lt;/span&gt;\n&lt;/div&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});