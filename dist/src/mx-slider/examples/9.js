define("mx-slider/examples/9",["magix","examples/example","$","../range","mx-copy/index","examples/hl"],(e,l,a)=>{e("../range"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,n,r,s,t){if(a||(a=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(x,m)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(n(e)).replace(g,c)}}if(!t){var p=/[\\'"]/g;t=function(e){return n(e).replace(p,"\\$&")}}var v="",u=e.viewId,o=e.text1;return v+='<div mxa="_zs_galleryd%:_" class="_zs_galleryg"><div mxs="_zs_galleryd%:_" class="_zs_galleryj"><div class="pl40"><div mx-view="mx-slider/range?max=200&min=100&value=120%2C150&step=0.5&vertical=true&height=200"></div></div></div><div mxa="_zs_galleryd%:a" class="_zs_galleryk"><div mxs="_zs_galleryd%:a" class="_zs_galleryi">纵向滑块 + 自定义高度</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_1"><span mxa="_zs_galleryd%:b" class="_zs_galleryn">'+n(o)+'</span><i mxs="_zs_galleryd%:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(u)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="120,150"\n    step="0.5"\n    vertical="true"\n    height="200"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});