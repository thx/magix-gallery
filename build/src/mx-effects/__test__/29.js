define("mx-effects/__test__/29",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,r)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");r.exports=n.extend({tmpl:function(e,s,r,n,t,l,_,a){if(r||(r=e),!t){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+i[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(c,m)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return o[e]},v=/[!')(*]/g;l=function(e){return encodeURIComponent(t(e)).replace(v,d)}}if(!a){var x=/[\\'"]/g;a=function(e){return t(e).replace(x,"\\$&")}}var g="",f=e.viewId,p=e.text1;return g+='<div mxa="_zs_gallerybG:_" class="_zs_galleryg"><div mxs="_zs_gallerybG:_" class="_zs_galleryj"><div class="mb60 clearfix"><span class="mr60">左右对比：</span><div mx-view="mx-effects/progress?vs=true&num=30.56"></div></div><div class="mb40"><span class="mr60">自定义颜色：</span><div mx-view="mx-effects/progress?vs=true&num=50.6&color=%23ffb400&colorVs=%23fe4186"></div></div></div><div mxa="_zs_gallerybG:a" class="_zs_galleryk"><div mxs="_zs_gallerybG:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(f)+'_text_1"><span mxa="_zs_gallerybG:b" class="_zs_galleryn">'+t(p)+'</span><i mxs="_zs_gallerybG:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(f)+'_text_1">\n&lt;!-- 默认颜色 --&gt;\n&lt;mx-effects.progress \n    vs="true"\n    num="30.56" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-effects.progress\n    vs="true"\n    num="50.6" \n    color="#ffb400"\n    color-vs="#fe4186"/&gt;\n\n        </pre></div></div>'},render:function(){this.updater.digest()}})});