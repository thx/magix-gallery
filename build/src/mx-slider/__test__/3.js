define("mx-slider/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,s,_,l,n,i,t,a){if(_||(_=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(r,x)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},v=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(v,c)}}if(!a){var u=/[\\'"]/g;a=function(e){return n(e).replace(u,"\\$&")}}var p="",g=e.viewId,o=e.text1;return p+='<div mxa="_zs_galleryds:_" class="_zs_galleryh"><div mxs="_zs_galleryds:_" class="_zs_galleryk"><div class="pt20 pb20"><div mx-disabled mx-view="mx-slider/index?max=200&min=100&value=120&needInput=true"></div></div></div><div mxa="_zs_galleryds:a" class="_zs_galleryl"><div mxs="_zs_galleryds:a" class="_zs_galleryj">禁止选择</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(g)+'_text_1"><span mxa="_zs_galleryds:b" class="_zs_galleryo">'+n(o)+'</span><i mxs="_zs_galleryds:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(g)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="120"\n    need-input="true"\n    mx-disabled/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});