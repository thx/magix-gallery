define("mx-footer/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");t.exports=l.extend({tmpl:function(e,_,t,l,i,r,s,n){if(t||(t=e),!i){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+a[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(x,d)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(m,o)}}if(!n){var g=/[\\'"]/g;n=function(e){return i(e).replace(g,"\\$&")}}var v="",p=e.viewId,u=e.text1;return v+='<div mxa="_zs_gallerybU:_" class="_zs_galleryg"><div mxs="_zs_gallerybU:_" class="_zs_galleryj"><div mx-view="mx-footer/index"></div></div><div mxa="_zs_gallerybU:a" class="_zs_galleryk"><div mxs="_zs_gallerybU:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_gallerybU:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerybU:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(p)+'_text_1">\n&lt;mx-footer/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});