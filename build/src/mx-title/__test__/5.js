define("mx-title/__test__/5",["magix","__test__/example","$","../second","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../second"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");l.exports=n.extend({tmpl:function(e,t,l,n,s,_,r,a){if(l||(l=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(c,d)}}if(!_){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},x=/[!')(*]/g;_=function(e){return encodeURIComponent(s(e)).replace(x,p)}}if(!a){var m=/[\\'"]/g;a=function(e){return s(e).replace(m,"\\$&")}}var g="",v=e.viewId,y=e.text6;return g+='<div class="_zs_galleryg" id="'+n(v)+'_demo4"><div mxs="_zs_gallerye(:_" class="_zs_galleryj"><div mx-view="mx-title/second?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%BA%8C%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_gallerye(:_" class="_zs_galleryk"><div mxs="_zs_gallerye(:a" class="_zs_galleryi">可包含html标签</div><div class="_zs_galleryl" mx-success="'+t+'done({id:6})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_6"><span mxa="_zs_gallerye(:a" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerye(:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(v)+'_text_6">\n&lt;mx-title.second \n    content="&lt;span style=\'color: red;\'&gt;二级&lt;/span&gt;标题"\n    tip="&lt;span style=\'color: red;\'&gt;高亮&lt;/span&gt;显示"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});