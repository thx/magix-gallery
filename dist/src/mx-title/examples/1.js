define("mx-title/examples/1",["magix","examples/example","$","../index","mx-dropdown/index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-dropdown/index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");n.exports=t.extend({tmpl:function(e,l,n,t,i,a,s,d){if(n||(n=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(r,m)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(p,c)}}if(!d){var v=/[\\'"]/g;d=function(e){return i(e).replace(v,"\\$&")}}var _="",g=e.viewId,u=e.text1;return _+='<div mxa="_zs_gallerye?:_" class="_zs_galleryg"><div mxs="_zs_gallerye?:_" class="_zs_galleryj"><div class="clearfix"><div class="fl" mx-view="mx-title/index?content=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div><div class="w200 fr" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i value="mon" class="none">周一</i><i value="wed" class="none">周三</i></div></div></div><div mxa="_zs_gallerye?:a" class="_zs_galleryk"><div mxs="_zs_gallerye?:a" class="_zs_galleryi">带筛选项的</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(g)+'_text_1"><span mxa="_zs_gallerye?:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerye?:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(g)+'_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;mx-title class="fl"\n        content="一级标题" \n        tip="一级标题提示文案"/&gt;\n\n    &lt;mx-dropdown class="w200 fr"\n        empty-text="请选择日期"&gt;\n        &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n        &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;/mx-dropdown&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});