define("mx-slider/__test__/9",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(e,l,_)=>{e("../range"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");_.exports=t.extend({tmpl:function(e,l,_,t,a,n,r,i){if(_||(_=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(d,x)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(g,m)}}if(!i){var v=/[\\'"]/g;i=function(e){return a(e).replace(v,"\\$&")}}var u="",o=e.viewId,p=e.text1;return u+='<div mxa="_zs_gallerydJ:_" class="_zs_galleryh"><div mxs="_zs_gallerydJ:_" class="_zs_galleryk"><div class="pl40"><div mx-view="mx-slider/range?max=200&min=100&value=120%2C150&step=0.5&vertical=true&height=200"></div></div></div><div mxa="_zs_gallerydJ:a" class="_zs_galleryl"><div mxs="_zs_gallerydJ:a" class="_zs_galleryj">纵向滑块 + 自定义高度</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_1"><span mxa="_zs_gallerydJ:b" class="_zs_galleryo">'+a(p)+'</span><i mxs="_zs_gallerydJ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(o)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="120,150"\n    step="0.5"\n    vertical="true"\n    height="200"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});