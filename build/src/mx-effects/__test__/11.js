define("mx-effects/__test__/11",["magix","__test__/example","$","../star","mx-copy/index","__test__/hl"],(e,s,t)=>{e("../star"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");t.exports=a.extend({tmpl:function(e,s,t,a,i,n,l,_){if(t||(t=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(m,d)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return c[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(x,v)}}if(!_){var f=/[\\'"]/g;_=function(e){return i(e).replace(f,"\\$&")}}var u="",g=e.viewId,o=e.text1;return u+='<div mxa="_zs_gallerya.:_" class="_zs_galleryh"><div mxs="_zs_gallerya.:_" class="_zs_galleryk"><div class="mb10"><div mx-view="mx-effects/star?num=-1"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=1.4"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=2.5"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=4"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=5.5"></div></div></div><div mxa="_zs_gallerya.:a" class="_zs_galleryl"><div mxs="_zs_gallerya.:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_gallerya.:b" class="_zs_galleryo">'+i(o)+'</span><i mxs="_zs_gallerya.:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(g)+'_text_1">\n&lt;mx-effects.star num="-1"/&gt;\n\n&lt;mx-effects.star num="1.4"/&gt;\n\n&lt;mx-effects.star num="2.5"/&gt;\n\n&lt;mx-effects.star num="4"/&gt;\n\n&lt;mx-effects.star num="5.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});