define("mx-pagination/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");i.exports=t.extend({tmpl:function(e,_,i,t,n,a,l,s){if(i||(i=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(c,x)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(g,m)}}if(!s){var o=/[\\'"]/g;s=function(e){return n(e).replace(o,"\\$&")}}var p="",v=e.viewId,u=e.text1;return p+='<div mxa="_zs_gallerycH:_" class="_zs_galleryh"><div mxs="_zs_gallerycH:_" class="_zs_galleryk"><div mx-view="mx-pagination/index?simplify=true&total=100&size=40&page=2"></div></div><div mxa="_zs_gallerycH:a" class="_zs_galleryl"><div mxs="_zs_gallerycH:a" class="_zs_galleryj">只有翻页器，没有汇总数据</div><div class="_zs_gallerym" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_gallerycH:b" class="_zs_galleryo">'+n(u)+'</span><i mxs="_zs_gallerycH:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_1">\n&lt;mx-pagination \n    simplify="true"\n    total="100" \n    size="40" \n    page="2"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});