define("mx-tabs/examples/6",["magix","examples/example","$","../box","mx-copy/index","examples/hl"],(e,l,a)=>{e("../box"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,t,i,n,x){if(a||(a=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(d,m)}}if(!i){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return v[e]},A=/[!')(*]/g;i=function(e){return encodeURIComponent(t(e)).replace(A,_)}}if(!x){var c=/[\\'"]/g;x=function(e){return t(e).replace(c,"\\$&")}}var o="",u=e.viewId,p=e.text1;return o+='<div mxa="_zs_gallerye9:_" class="_zs_galleryg"><div mxs="_zs_gallerye9:_" class="_zs_galleryj"><div class="mb10"><div mx-view="mx-tabs/box?disabled=true&list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mx-view="mx-tabs/box?mode=hollow&disabled=true&list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mxa="_zs_gallerye9:a" class="_zs_galleryk"><div mxs="_zs_gallerye9:a" class="_zs_galleryi">可直接传数组 + 禁用</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_gallerye9:b" class="_zs_galleryn">'+t(p)+'</span><i mxs="_zs_gallerye9:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;mx-tabs.box\n    disabled="true"\n    list="[&#123;\n        text: \'模块1\',\n        value: 1\n    &#125;,&#123;\n        text: \'模块2\',\n        value: 2\n    &#125;]"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});