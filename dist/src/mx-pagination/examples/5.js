define("mx-pagination/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,i,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");n.exports=a.extend({tmpl:function(e,i,n,a,l,s,t,r){if(n||(n=e),!l){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};l=function(e){return""+(null==e?"":e)},a=function(e){return l(e).replace(m,d)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return p[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(g,o)}}if(!r){var _=/[\\'"]/g;r=function(e){return l(e).replace(_,"\\$&")}}var c="",f=e.viewId,v=e.text1;return c+='<div mxa="_zs_gallerydA:_" class="_zs_galleryg"><div mxs="_zs_gallerydA:_" class="_zs_galleryj"><div class="mb20" mx-view="mx-pagination/index?simplify=true&total=100&size=30&offset=30"></div><div mx-view="mx-pagination/index?simplify=true&total=100&size=30&page=3&offset=30"></div></div><div mxa="_zs_gallerydA:a" class="_zs_galleryk"><div mxs="_zs_gallerydA:a" class="_zs_galleryi">优先级 page &gt; offset</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_gallerydA:b" class="_zs_galleryn">'+l(v)+'</span><i mxs="_zs_gallerydA:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+'_text_1">\n&lt;mx-pagination \n    simplify="true"\n    total="100" \n    size="30" \n    offset="30"/&gt;\n\n&lt;mx-pagination \n    simplify="true"\n    total="100" \n    size="30" \n    page="3"\n    offset="30"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});