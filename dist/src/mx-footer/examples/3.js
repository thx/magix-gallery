define("mx-footer/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,r)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");r.exports=a.extend({tmpl:function(e,l,r,a,s,i,n,t){if(r||(r=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,_=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(d,_)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},o=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(o,c)}}if(!t){var p=/[\\'"]/g;t=function(e){return s(e).replace(p,"\\$&")}}var g="",u=e.viewId,v=e.text1;return g+='<div mxa="_zs_galleryb):_" class="_zs_galleryg"><div mxs="_zs_galleryb):_" class="_zs_galleryj"><div mx-view="mx-footer/index?products=true"></div></div><div mxa="_zs_galleryb):a" class="_zs_galleryk"><div mxs="_zs_galleryb):a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryb):b" class="_zs_galleryn">'+s(v)+'</span><i mxs="_zs_galleryb):b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(u)+'_text_1">\n&lt;mx-footer products="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});