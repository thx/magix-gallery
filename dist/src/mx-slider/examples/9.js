define("mx-slider/examples/9",["magix","examples/example","$","../range","mx-copy/index","examples/hl"],(e,l,a)=>{e("../range"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,r,n,t){if(a||(a=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,_=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(x,_)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return m[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(v,d)}}if(!t){var g=/[\\'"]/g;t=function(e){return i(e).replace(g,"\\$&")}}var p="",o=e.viewId,u=e.text1,y=e.text2;return p+='<div mxa="_zs_galleryec:_" class="_zs_galleryg"><div mxs="_zs_galleryec:_" class="_zs_galleryj clearfix"><div class="pl40 fl pr80"><div mx-view="mx-slider/range?max=200&min=100&value=120%2C150&step=0.5&vertical=true&height=200"></div></div><div class="pl40 fl"><div mx-view="mx-slider/range?max=200&min=100&value=120%2C160&step=20&vertical=true&height=200&showDot=true"></div></div></div><div mxa="_zs_galleryec:a" class="_zs_galleryk"><div mxs="_zs_galleryec:a" class="_zs_galleryi">纵向滑块 + 自定义高度</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(o)+'_text_1"><span mxa="_zs_galleryec:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryec:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(o)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="120,150"\n    step="0.5"\n    vertical="true"\n    height="200"/&gt;</pre></div><div mxa="_zs_galleryec:c" class="_zs_galleryk"><div mxs="_zs_galleryec:c" class="_zs_galleryi">显示刻度点</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(o)+'_text_2"><span mxa="_zs_galleryec:d" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_galleryec:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(o)+'_text_2">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="120,160"\n    step="20"\n    vertical="true"\n    height="200"\n    show-dot="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});