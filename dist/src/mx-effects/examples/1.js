define("mx-effects/examples/1",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,i,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");a.exports=l.extend({tmpl:function(e,i,a,l,s,n,t,r){if(a||(a=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(c,m)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},_=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(_,v)}}if(!r){var p=/[\\'"]/g;r=function(e){return s(e).replace(p,"\\$&")}}var o="",g=e.viewId,y=e.text1;return o+='<div mxa="_zs_gallerybE:_" class="_zs_galleryg"><div mxs="_zs_gallerybE:_" class="_zs_galleryj"><div class="empty-area mb20"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div>暂无内容</div></div></div><div content="自定义文案" class="empty-area"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div>自定义文案</div></div></div></div><div mxa="_zs_gallerybE:a" class="_zs_galleryk"><div mxs="_zs_gallerybE:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_gallerybE:b" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerybE:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(g)+'_text_1">\n&lt;mx-effects.empty/&gt;\n\n&lt;mx-effects.empty content="自定义文案"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});