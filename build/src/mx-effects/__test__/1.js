define("mx-effects/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,t,i)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");i.exports=s.extend({tmpl:function(e,t,i,s,n,_,a,l){if(i||(i=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(d,c)}}if(!_){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return v[e]},x=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(x,m)}}if(!l){var o=/[\\'"]/g;l=function(e){return n(e).replace(o,"\\$&")}}var p="",g=e.viewId,y=e.text1;return p+='<div mxa="_zs_gallerybr:_" class="_zs_galleryg"><div mxs="_zs_gallerybr:_" class="_zs_galleryj"><div class="empty-area mb20"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div>暂无内容</div></div></div><div content="自定义文案" class="empty-area"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div>自定义文案</div></div></div></div><div mxa="_zs_gallerybr:a" class="_zs_galleryk"><div mxs="_zs_gallerybr:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(g)+'_text_1"><span mxa="_zs_gallerybr:b" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerybr:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(g)+'_text_1">\n&lt;mx-effects.empty/&gt;\n\n&lt;mx-effects.empty content="自定义文案"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});