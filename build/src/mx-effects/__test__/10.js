define("mx-effects/__test__/10",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,r)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");r.exports=t.extend({tmpl:function(e,s,r,t,n,_,l,i){if(r||(r=e),!n){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+a[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(m,d)}}if(!_){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return g[e]},x=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(x,c)}}if(!i){var p=/[\\'"]/g;i=function(e){return n(e).replace(p,"\\$&")}}var v="",o=e.viewId,f=e.text1;return v+='<div mxa="_zs_gallerybs:_" class="_zs_galleryg"><div mxs="_zs_gallerybs:_" class="_zs_galleryj"><div class="mb20"><div class="mr20" mx-view="mx-effects/progress?type=degree&num=60"></div><div class="mr20" mx-view="mx-effects/progress?type=degree&num=20.22"></div><div mx-view="mx-effects/progress?type=degree&num=100"></div></div></div><div mxa="_zs_gallerybs:a" class="_zs_galleryk"><div mxs="_zs_gallerybs:a" class="_zs_galleryi">刻度型展示值取整</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(o)+'_text_1"><span mxa="_zs_gallerybs:b" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerybs:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(o)+'_text_1">\n&lt;mx-effects.progress\n    type="degree"\n    num="60"/&gt;\n    \n&lt;mx-effects.progress\n    type="degree"\n    num="20.22"/&gt;\n\n&lt;mx-effects.progress\n    type="degree"\n    num="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});