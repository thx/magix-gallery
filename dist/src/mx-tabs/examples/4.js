define("mx-tabs/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,s,i,t,x){if(a||(a=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(_,m)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return d[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(p,c)}}if(!x){var v=/[\\'"]/g;x=function(e){return s(e).replace(v,"\\$&")}}var g="",u=e.viewId,A=e.text1;return g+='<div mxa="_zs_galleryfj:_" class="_zs_galleryg"><div mxs="_zs_galleryfj:_" class="_zs_galleryj"><div mx-view="mx-tabs/index?list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20tips%3A%20%27%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mxa="_zs_galleryfj:a" class="_zs_galleryk"><div mxs="_zs_galleryfj:a" class="_zs_galleryi">可直接传递一个数组</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryfj:b" class="_zs_galleryn">'+s(A)+'</span><i mxs="_zs_galleryfj:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(u)+"_text_1\">\n&lt;mx-tabs \n    list=\"[&#123;\n        value: 1,\n        text: '模块1',\n        tips: '提示信息'\n    &#125;, &#123;\n        value: 2,\n        text: '模块2'\n    &#125;]\" /&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});