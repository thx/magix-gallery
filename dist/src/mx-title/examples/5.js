define("mx-title/examples/5",["magix","examples/example","$","../second","mx-copy/index","examples/hl"],(e,l,n)=>{e("../second"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");n.exports=s.extend({tmpl:function(e,l,n,s,t,a,r,i){if(n||(n=e),!t){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(d,o)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return p[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(m,x)}}if(!i){var _=/[\\'"]/g;i=function(e){return t(e).replace(_,"\\$&")}}var g="",v=e.viewId,y=e.text6;return g+='<div class="_zs_galleryg" id="'+s(v)+'_demo4"><div mxs="_zs_galleryfB:_" class="_zs_galleryj"><div mx-view="mx-title/second?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%BA%8C%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_galleryfB:_" class="_zs_galleryk"><div mxs="_zs_galleryfB:a" class="_zs_galleryi">可包含html标签</div><div class="_zs_galleryl" mx-success="'+l+'done({id:6})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_6"><span mxa="_zs_galleryfB:a" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_galleryfB:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(v)+'_text_6">\n&lt;mx-title.second \n    content="&lt;span style=\'color: red;\'&gt;二级&lt;/span&gt;标题"\n    tip="&lt;span style=\'color: red;\'&gt;高亮&lt;/span&gt;显示"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});