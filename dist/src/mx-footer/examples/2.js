define("mx-footer/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,s,r,n,x){if(a||(a=e),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+t[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(m,d)}}if(!r){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return _[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(c,o)}}if(!x){var p=/[\\'"]/g;x=function(e){return s(e).replace(p,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryb/:_" class="_zs_galleryg"><div mxs="_zs_galleryb/:_" class="_zs_galleryj"><div mx-view="mx-footer/index?mode=simple"></div></div><div mxa="_zs_galleryb/:a" class="_zs_galleryk"><div mxs="_zs_galleryb/:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_galleryb/:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_galleryb/:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;mx-footer mode="simple"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});