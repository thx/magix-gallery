define("mx-search/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");s.exports=l.extend({tmpl:function(e,a,s,l,r,n,c,i){if(s||(s=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(x,m)}}if(!n){var t={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return t[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(r(e)).replace(p,_)}}if(!i){var g=/[\\'"]/g;i=function(e){return r(e).replace(g,"\\$&")}}var o="",u=e.searchValue,v=e.viewId,h=e.text1;return o+='<div mxa="_zs_gallerydW:_" class="_zs_galleryg"><div mxa="_zs_gallerydW:a" class="_zs_galleryj"><div mxa="_zs_gallerydW:b" class="mb20"><span mxs="_zs_gallerydW:_" class="color-9">回车搜索：</span><span>campaignId = '+l(u)+'</span></div><div mxs="_zs_gallerydW:a" class="w200" mx-search="'+a+'change()" mx-view="mx-search/index?searchKey=campaignId&placeholder=%E6%90%9C%E7%B4%A2%E8%AE%A1%E5%88%92"></div></div><div mxa="_zs_gallerydW:c" class="_zs_galleryk"><div mxs="_zs_gallerydW:b" class="_zs_galleryi">单个搜索，封装事件</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(v)+'_text_1"><span mxa="_zs_gallerydW:d" class="_zs_galleryn">'+r(h)+'</span><i mxs="_zs_gallerydW:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(v)+'_text_1">\n&lt;mx-search class="w200"\n    search-key="campaignId"\n    placeholder="搜索计划"\n    mx-search="change()"/&gt;</pre></div></div>'},render:function(){this.updater.digest({searchValue:""})},"change<search>":function(e){e.preventDefault(),this.updater.digest({searchValue:e.searchValue})}})});