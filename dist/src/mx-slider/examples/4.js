define("mx-slider/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,i)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");i.exports=s.extend({tmpl:function(e,l,i,s,a,n,r,t){if(i||(i=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,_=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},s=function(e){return a(e).replace(x,_)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(v,c)}}if(!t){var p=/[\\'"]/g;t=function(e){return a(e).replace(p,"\\$&")}}var g="",o=e.viewId,u=e.text1,y=e.text2;return g+='<div mxa="_zs_galleryd-:_" class="_zs_galleryg"><div mxs="_zs_galleryd-:_" class="_zs_galleryj clearfix"><div class="pl40 pr80 fl"><div mx-view="mx-slider/index?max=200&min=100&value=130&step=0.5&vertical=true&tip=%E5%85%83&height=200"></div></div><div class="pl40 fl"><div mx-view="mx-slider/index?max=200&min=100&value=140&step=20&vertical=true&tip=%E5%85%83&height=200&showDot=true"></div></div></div><div mxa="_zs_galleryd-:a" class="_zs_galleryk"><div mxs="_zs_galleryd-:a" class="_zs_galleryi">纵向滑块 + 自定义高度</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_1"><span mxa="_zs_galleryd-:b" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_galleryd-:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(o)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="130"\n    step="0.5"\n    vertical="true"\n    tip="元"\n    height="200"/&gt;</pre></div><div mxa="_zs_galleryd-:c" class="_zs_galleryk"><div mxs="_zs_galleryd-:c" class="_zs_galleryi">纵向显示刻度点</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_2"><span mxa="_zs_galleryd-:d" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryd-:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(o)+'_text_2">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="140"\n    step="20"\n    vertical="true"\n    tip="元"\n    height="200"\n    show-dot="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});