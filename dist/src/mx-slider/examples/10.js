define("mx-slider/examples/10",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,a,n,r,d){if(s||(s=e),!a){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(t,m)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return _[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(p,c)}}if(!d){var o=/[\\'"]/g;d=function(e){return a(e).replace(o,"\\$&")}}var v="",g=e.viewId,u=e.text1;return v+='<div mxa="_zs_galleryd~:_" class="_zs_galleryg"><div mxs="_zs_galleryd~:_" class="_zs_galleryj"><div class="mb40"><div mx-view="mx-slider/index?max=200&min=100&step=20&showDot=true"></div></div></div><div mxa="_zs_galleryd~:a" class="_zs_galleryk"><div mxs="_zs_galleryd~:a" class="_zs_galleryi">显示刻度点</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_galleryd~:b" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_galleryd~:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(g)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    step="1"\n    show-dot="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});