define("mx-slider/__test__/9",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(e,l,_)=>{e("../range"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");_.exports=t.extend({tmpl:function(e,l,_,t,a,i,n,r){if(_||(_=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(d,x)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(g,m)}}if(!r){var v=/[\\'"]/g;r=function(e){return a(e).replace(v,"\\$&")}}var u="",p=e.viewId,o=e.text1;return u+='<div mxa="_zs_gallerydV:_" class="_zs_galleryg"><div mxs="_zs_gallerydV:_" class="_zs_galleryj"><div class="pl40"><div mx-view="mx-slider/range?max=200&min=100&value=120%2C150&step=0.5&vertical=true&height=200"></div></div></div><div mxa="_zs_gallerydV:a" class="_zs_galleryk"><div mxs="_zs_gallerydV:a" class="_zs_galleryi">纵向滑块 + 自定义高度</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(p)+'_text_1"><span mxa="_zs_gallerydV:b" class="_zs_galleryn">'+a(o)+'</span><i mxs="_zs_gallerydV:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="120,150"\n    step="0.5"\n    vertical="true"\n    height="200"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});