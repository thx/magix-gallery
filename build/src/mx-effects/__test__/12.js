define("mx-effects/__test__/12",["magix","__test__/example","$","../star","mx-copy/index","__test__/hl"],(e,s,t)=>{e("../star"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,s,t,_,l,r,a,i){if(t||(t=e),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+n[e]+";"};l=function(e){return""+(null==e?"":e)},_=function(e){return l(e).replace(c,m)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(l(e)).replace(o,x)}}if(!i){var v=/[\\'"]/g;i=function(e){return l(e).replace(v,"\\$&")}}var f="",g=e.viewId,u=e.text1;return f+='<div mxa="_zs_gallerybs:_" class="_zs_galleryg"><div mxs="_zs_gallerybs:_" class="_zs_galleryj"><div class="mb10"><div mx-view="mx-effects/star?num=2.5&color=%23ffb400"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=4&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_gallerybs:a" class="_zs_galleryk"><div mxs="_zs_gallerybs:a" class="_zs_galleryi">自定义颜色</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_gallerybs:b" class="_zs_galleryn">'+l(u)+'</span><i mxs="_zs_gallerybs:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(g)+'_text_1">\n&lt;mx-effects.star num="2.5"\n    color="#ffb400"/&gt;\n    \n&lt;mx-effects.star num="4"\n    color="rgb(81, 163, 0)"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});