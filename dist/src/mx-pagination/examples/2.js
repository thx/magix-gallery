define("mx-pagination/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");l.exports=i.extend({tmpl:function(e,a,l,i,n,s,r,t){if(l||(l=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(d,m)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return _[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(c,p)}}if(!t){var g=/[\\'"]/g;t=function(e){return n(e).replace(g,"\\$&")}}var o="",v=e.viewId,u=e.text1;return o+='<div mxa="_zs_gallerydq:_" class="_zs_galleryg"><div mxs="_zs_gallerydq:_" class="_zs_galleryj"><div mx-view="mx-pagination/index?simplify=true&total=100&size=40&page=2"></div></div><div mxa="_zs_gallerydq:a" class="_zs_galleryk"><div mxs="_zs_gallerydq:a" class="_zs_galleryi">只有翻页器，没有汇总数据</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerydq:b" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_gallerydq:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;mx-pagination \n    simplify="true"\n    total="100" \n    size="40" \n    page="2"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});