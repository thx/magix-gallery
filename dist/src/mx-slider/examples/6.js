define("mx-slider/examples/6",["magix","examples/example","$","../range","mx-copy/index","examples/hl"],(e,l,a)=>{e("../range"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,s,i,r,m){if(a||(a=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,t=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(x,t)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(g,c)}}if(!m){var p=/[\\'"]/g;m=function(e){return s(e).replace(p,"\\$&")}}var v="",o=e.viewId,u=e.text1;return v+='<div mxa="_zs_galleryd9:_" class="_zs_galleryg"><div mxs="_zs_galleryd9:_" class="_zs_galleryj"><div class="mb40"><div mx-view="mx-slider/range?max=200&min=100&step=1"></div></div><div class="mb20"><div mx-view="mx-slider/range?max=200&min=100&step=0.5"></div></div></div><div mxa="_zs_galleryd9:a" class="_zs_galleryk"><div mxs="_zs_galleryd9:a" class="_zs_galleryi">step决定滑轴刻度</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(o)+'_text_1"><span mxa="_zs_galleryd9:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryd9:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(o)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    step="1"/&gt;\n\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    step="0.5"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});