define("mx-time/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");i.exports=l.extend({tmpl:function(e,_,i,l,s,t,n,a){if(i||(i=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(d,x)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(g,c)}}if(!a){var o=/[\\'"]/g;a=function(e){return s(e).replace(o,"\\$&")}}var v="",p=e.viewId,u=e.text1;return v+='<div mxa="_zs_galleryeU:_" class="_zs_galleryg"><div mxs="_zs_galleryeU:_" class="_zs_galleryj"><div class="w220" mx-disabled mx-view="mx-time/index?time=10%3A10%3A10"></div></div><div mxa="_zs_galleryeU:a" class="_zs_galleryk"><div mxs="_zs_galleryeU:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(p)+'_text_1"><span mxa="_zs_galleryeU:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryeU:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(p)+'_text_1">\n&lt;mx-time class="w220" \n    mx-disabled \n    time="10:10:10" /&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});