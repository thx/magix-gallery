define("mx-slider/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");l.exports=i.extend({tmpl:function(e,_,l,i,n,t,s,a){if(l||(l=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(d,x)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},u=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(u,c)}}if(!a){var v=/[\\'"]/g;a=function(e){return n(e).replace(v,"\\$&")}}var g="",p=e.viewId,o=e.text1;return g+='<div mxa="_zs_gallerydW:_" class="_zs_galleryg"><div mxs="_zs_gallerydW:_" class="_zs_galleryj"><div class="pt20 pb20"><div mx-view="mx-slider/index?max=200&min=100&value=120&needInput=true&disabled=true"></div></div></div><div mxa="_zs_gallerydW:a" class="_zs_galleryk"><div mxs="_zs_gallerydW:a" class="_zs_galleryi">禁止选择</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(p)+'_text_1"><span mxa="_zs_gallerydW:b" class="_zs_galleryn">'+n(o)+'</span><i mxs="_zs_gallerydW:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(p)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="120"\n    need-input="true"\n    disabled="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});