define("mx-slider/__test__/7",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(e,_,l)=>{e("../range"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");l.exports=a.extend({tmpl:function(e,_,l,a,s,i,n,r){if(l||(l=e),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+t[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(d,x)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(g,c)}}if(!r){var v=/[\\'"]/g;r=function(e){return s(e).replace(v,"\\$&")}}var u="",o=e.viewId,p=e.text1;return u+='<div mxa="_zs_galleryd4:_" class="_zs_galleryg"><div mxs="_zs_galleryd4:_" class="_zs_galleryj"><div class="pt20 pb20"><div mx-view="mx-slider/range?max=200&min=100&value=120%2C150&disabled=true"></div></div></div><div mxa="_zs_galleryd4:a" class="_zs_galleryk"><div mxs="_zs_galleryd4:a" class="_zs_galleryi">禁止选择</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(o)+'_text_1"><span mxa="_zs_galleryd4:b" class="_zs_galleryn">'+s(p)+'</span><i mxs="_zs_galleryd4:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(o)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="120,150"\n    disabled="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});