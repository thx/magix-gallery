define("mx-title/__test__/1",["magix","__test__/example","$","../index","mx-dropdown/index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-dropdown/index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,i,s,d,_){if(n||(n=e),!i){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,x=function(e){return"&"+a[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(r,x)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(c,m)}}if(!_){var v=/[\\'"]/g;_=function(e){return i(e).replace(v,"\\$&")}}var p="",g=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryeX:_" class="_zs_galleryh"><div mxs="_zs_galleryeX:_" class="_zs_galleryk"><div class="clearfix"><div class="fl" mx-view="mx-title/index?content=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div><div class="w200 fr" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i value="mon" class="none">周一</i><i value="wed" class="none">周三</i></div></div></div><div mxa="_zs_galleryeX:a" class="_zs_galleryl"><div mxs="_zs_galleryeX:a" class="_zs_galleryj">带筛选项的</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_galleryeX:b" class="_zs_galleryo">'+i(u)+'</span><i mxs="_zs_galleryeX:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(g)+'_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;mx-title class="fl"\n        content="一级标题" \n        tip="一级标题提示文案"/&gt;\n\n    &lt;mx-dropdown class="w200 fr"\n        empty-text="请选择日期"&gt;\n        &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n        &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;/mx-dropdown&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});