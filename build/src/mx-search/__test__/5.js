define("mx-search/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,s,a,i,_){if(n||(n=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(c,d)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(o,m)}}if(!_){var v=/[\\'"]/g;_=function(e){return s(e).replace(v,"\\$&")}}i||(i=function(e,t,n,l){for(l=e[u];--l;)if(e[n=u+l]===t)return n;return e[n=u+e[u]++]=t,n});var u="",p="",g=e.viewId,y=e.text1;return p+='<div mxa="_zs_galleryc,:_" class="_zs_galleryh"><div mxa="_zs_galleryc,:a" class="_zs_galleryk"><div mxs="_zs_galleryc,:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>自定义搜索列表文案</div><div><div class="w200" mx-view="mx-search/index?list='+i(n,[{text:"优惠券id",value:"id",tmpl:"搜索id含有“${content}”的优惠券"},{text:"优惠券名称",value:"name",tmpl:"搜索名称含有“${content}”的优惠券"}])+'"></div></div></div><div mxa="_zs_galleryc,:b" class="_zs_galleryl"><div mxs="_zs_galleryc,:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(g)+'_text_1"><span mxa="_zs_galleryc,:c" class="_zs_galleryo">'+s(y)+'</span><i mxs="_zs_galleryc,:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(g)+"_text_1\">\n&lt;mx-search class=\"w200\"\n    list=\"&#123;&#123;@[&#123;\n        text: '优惠券id',\n        value: 'id',\n        tmpl: '搜索id含有“$&#123;content&#125;”的优惠券'\n    &#125;, &#123;\n        text: '优惠券名称',\n        value: 'name',\n        tmpl: '搜索名称含有“$&#123;content&#125;”的优惠券'\n    &#125;]&#125;&#125;\" /&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});