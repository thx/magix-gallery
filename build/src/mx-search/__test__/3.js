define("mx-search/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");t.exports=l.extend({tmpl:function(e,a,t,l,n,r,s,_){if(t||(t=e),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+i[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(d,c)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return x[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(n(e)).replace(g,u)}}if(!_){var m=/[\\'"]/g;_=function(e){return n(e).replace(m,"\\$&")}}s||(s=function(e,a,t,l){for(l=e[o];--l;)if(e[t=o+l]===a)return t;return e[t=o+e[o]++]=a,t});var o="",v="",p=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerydC:_" class="_zs_galleryg"><div mxa="_zs_gallerydC:a" class="_zs_galleryj"><div class="w300" mx-view="mx-search/index?list='+s(t,[{text:"宝贝",value:"itemId"},{text:"单元",value:"adgroupId"}])+'&searchKey=adgroupId&searchValue=%E8%B6%85%E5%87%BA%E5%8F%B3%E5%AF%B9%E9%BD%90%EF%BC%8C%E6%90%9C%E7%B4%A2%E6%A1%86%E5%9C%A8%E9%A1%B5%E9%9D%A2%E5%8F%B3%E8%BE%B9%E7%BC%98%E6%97%B6%E9%80%82%E7%94%A8&align=right"></div></div><div mxa="_zs_gallerydC:b" class="_zs_galleryk"><div mxs="_zs_gallerydC:_" class="_zs_galleryi">内容超出右对齐</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_gallerydC:c" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerydC:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(p)+'_text_1">\n&lt;mx-search class="w300"\n    list="&#123;&#123;@[&#123;\n        text: \'宝贝\',\n        value: \'itemId\'\n    &#125;, &#123;\n        text: \'单元\',\n        value: \'adgroupId\'\n    &#125;]&#125;&#125;"\n    search-key="adgroupId"\n    search-value="超出右对齐，搜索框在页面右边缘时适用"\n    align="right"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});