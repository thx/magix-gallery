define("mx-slider/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");l.exports=_.extend({tmpl:function(e,i,l,_,t,n,s,a){if(l||(l=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},_=function(e){return t(e).replace(d,x)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(t(e)).replace(v,m)}}if(!a){var g=/[\\'"]/g;a=function(e){return t(e).replace(g,"\\$&")}}var p="",u=e.viewId,o=e.text1;return p+='<div mxa="_zs_gallerydf:_" class="_zs_galleryh"><div mxs="_zs_gallerydf:_" class="_zs_galleryk"><div class="pl40"><div mx-view="mx-slider/index?max=200&min=100&value=130&step=0.5&vertical=true&tip=%E5%85%83&height=200"></div></div></div><div mxa="_zs_gallerydf:a" class="_zs_galleryl"><div mxs="_zs_gallerydf:a" class="_zs_galleryj">纵向滑块 + 自定义高度</div><div class="_zs_gallerym" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(u)+'_text_1"><span mxa="_zs_gallerydf:b" class="_zs_galleryo">'+t(o)+'</span><i mxs="_zs_gallerydf:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(u)+'_text_1">\n&lt;mx-slider\n    max="200"\n    min="100"\n    value="130"\n    step="0.5"\n    vertical="true"\n    tip="元"\n    height="200"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});