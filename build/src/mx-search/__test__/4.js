define("mx-search/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");s.exports=l.extend({tmpl:function(e,a,s,l,_,r,n,c){if(s||(s=e),!_){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};_=function(e){return""+(null==e?"":e)},l=function(e){return _(e).replace(t,d)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},u=/[!')(*]/g;r=function(e){return encodeURIComponent(_(e)).replace(u,m)}}if(!c){var g=/[\\'"]/g;c=function(e){return _(e).replace(g,"\\$&")}}var p="",o=e.searchValue,v=e.viewId,h=e.text1;return p+='<div mxa="_zs_gallerydu:_" class="_zs_galleryg"><div mxa="_zs_gallerydu:a" class="_zs_galleryj"><div mxa="_zs_gallerydu:b" class="mb20"><span mxs="_zs_gallerydu:_" class="color-9">回车搜索：</span><span>campaignId = '+l(o)+'</span></div><div mxs="_zs_gallerydu:a" class="w200" mx-search="'+a+'change()" mx-view="mx-search/index?searchKey=campaignId&placeholder=%E6%90%9C%E7%B4%A2%E8%AE%A1%E5%88%92"></div></div><div mxa="_zs_gallerydu:c" class="_zs_galleryk"><div mxs="_zs_gallerydu:b" class="_zs_galleryi">单个搜索，封装事件</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_gallerydu:d" class="_zs_galleryn">'+_(h)+'</span><i mxs="_zs_gallerydu:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-search class="w200"\n    search-key="campaignId"\n    placeholder="搜索计划"\n    mx-search="change()"/&gt;</pre></div></div>'},render:function(){this.updater.digest({searchValue:""})},"change<search>":function(e){e.preventDefault(),this.updater.digest({searchValue:e.searchValue})}})});