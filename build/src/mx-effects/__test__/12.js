define("mx-effects/__test__/12",["magix","__test__/example","$","../star","mx-copy/index","__test__/hl"],(e,s,t)=>{e("../star"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,s,t,_,a,l,r,n){if(t||(t=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},_=function(e){return a(e).replace(c,m)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},o=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(o,x)}}if(!n){var v=/[\\'"]/g;n=function(e){return a(e).replace(v,"\\$&")}}var f="",g=e.viewId,u=e.text1;return f+='<div mxa="_zs_gallerya&:_" class="_zs_galleryh"><div mxs="_zs_gallerya&:_" class="_zs_galleryk"><div class="mb10"><div mx-view="mx-effects/star?num=2.5&color=%23ffb400"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=4&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_gallerya&:a" class="_zs_galleryl"><div mxs="_zs_gallerya&:a" class="_zs_galleryj">自定义颜色</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(g)+'_text_1"><span mxa="_zs_gallerya&:b" class="_zs_galleryo">'+a(u)+'</span><i mxs="_zs_gallerya&:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(g)+'_text_1">\n&lt;mx-effects.star num="2.5"\n    color="#ffb400"/&gt;\n    \n&lt;mx-effects.star num="4"\n    color="rgb(81, 163, 0)"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});