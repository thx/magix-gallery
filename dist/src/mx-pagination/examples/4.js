define("mx-pagination/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");l.exports=i.extend({tmpl:function(e,a,l,i,n,s,t,r){if(l||(l=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(d,m)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return p[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(c,_)}}if(!r){var g=/[\\'"]/g;r=function(e){return n(e).replace(g,"\\$&")}}var o="",u=e.viewId,v=e.text1;return o+='<div mxa="_zs_gallerydJ:_" class="_zs_galleryg"><div mxs="_zs_gallerydJ:_" class="_zs_galleryj"><div class="text-center" mx-view="mx-pagination/index?jump=false&simplify=true&hideTotal=true&total=100&size=40&page=2"></div></div><div mxa="_zs_gallerydJ:a" class="_zs_galleryk"><div mxs="_zs_gallerydJ:a" class="_zs_galleryi">只有翻页器，没有汇总数据，可自行控制位置</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_gallerydJ:b" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_gallerydJ:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(u)+'_text_1">\n&lt;mx-pagination class="text-center"\n    simplify="true"\n    jump="false"\n    hide-total="true"\n    total="100" \n    size="40" \n    page="2"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});