define("mx-tabs/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,t,_,l,n,s,a,i){if(_||(_=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(x,d)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},v=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(v,m)}}if(!i){var u=/[\\'"]/g;i=function(e){return n(e).replace(u,"\\$&")}}var g="",o=e.viewId,A=e.text1;return g+='<div mxa="_zs_galleryd;:_" class="_zs_galleryh"><div mxs="_zs_galleryd;:_" class="_zs_galleryk"><div mx-view="mx-tabs/index?list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tips%3A%20%27%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mxa="_zs_galleryd;:a" class="_zs_galleryl"><div mxs="_zs_galleryd;:a" class="_zs_galleryj">可直接传递一个数组</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(o)+'_text_1"><span mxa="_zs_galleryd;:b" class="_zs_galleryo">'+n(A)+'</span><i mxs="_zs_galleryd;:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(o)+"_text_1\">\n&lt;mx-tabs \n    list=\"[&#123;\n        value: 1,\n        text: '模块1',\n        tips: '提示信息'\n    &#125;, &#123;\n        value: 2,\n        text: '模块2'\n    &#125;]\" /&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});