define("mx-effects/__test__/22",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,s,r)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");r.exports=l.extend({tmpl:function(e,s,r,l,n,t,i,_){if(r||(r=e),!n){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+a[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(c,o)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(g,m)}}if(!_){var v=/[\\'"]/g;_=function(e){return n(e).replace(v,"\\$&")}}var f="",x=e.viewId,p=e.text1;return f+='<div mxa="_zs_gallerybr:_" class="_zs_galleryg"><div mxs="_zs_gallerybr:_" class="_zs_galleryj"><div class="mb60 clearfix"><div class="fl mr10">单色：</div><div class="fl"><div class="mb40"><div mx-view="mx-effects/progress?num=30.56&color=%23ffb400"></div></div><div mx-view="mx-effects/progress?num=30.56&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div class="mb40"><span class="mr10">渐变：</span><div mx-view="mx-effects/progress?num=50.6&color=%23385acc&colorGradient=%23fe4186"></div></div></div><div mxa="_zs_gallerybr:a" class="_zs_galleryk"><div mxs="_zs_gallerybr:a" class="_zs_galleryi">自定义颜色，支持渐变</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(x)+'_text_1"><span mxa="_zs_gallerybr:b" class="_zs_galleryn">'+n(p)+'</span><i mxs="_zs_gallerybr:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(x)+'_text_1">\n&lt;!-- 单色 --&gt;\n&lt;mx-effects.progress \n    num="30.56" \n    color="#ffb400"/&gt;\n\n&lt;!-- 单色 --&gt;\n&lt;mx-effects.progress\n    num="30.56" \n    color="rgb(81, 163, 0)"/&gt;\n\n&lt;!-- 渐变 --&gt;\n&lt;mx-effects.progress\n    num="50.6" \n    color="#385acc"\n    color-gradient="#fe4186"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});