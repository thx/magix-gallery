define("mx-effects/__test__/2",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,t,_)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");_.exports=a.extend({tmpl:function(e,t,_,a,s,l,n,i){if(_||(_=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(c,d)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},o=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(o,m)}}if(!i){var g=/[\\'"]/g;i=function(e){return s(e).replace(g,"\\$&")}}var p="",v=e.viewId,y=e.text1;return p+='<div mxa="_zs_gallerya;:_" class="_zs_galleryh"><div mxs="_zs_gallerya;:_" class="_zs_galleryk"><div class="empty-white"><i class="mc-iconfont no-data">&#xe685;</i><p class="mt10">暂无相关记录</p></div></div><div mxa="_zs_gallerya;:a" class="_zs_galleryl"><div mxs="_zs_gallerya;:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(v)+'_text_1"><span mxa="_zs_gallerya;:b" class="_zs_galleryo">'+s(y)+'</span><i mxs="_zs_gallerya;:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_1">\n&lt;mx-effects.empty bg="white"\n    content="暂无相关记录"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});