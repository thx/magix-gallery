define("mx-footer/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,r)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var a=e("magix"),s=e("examples/example");e("$");a.applyStyle("_zs_galleryR","._zs_galleryfy{padding:20px;background-color:#3d414d}"),r.exports=s.extend({tmpl:function(e,l,r,a,s,i,n,t){if(r||(r=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(d,x)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},m=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(m,o)}}if(!t){var p=/[\\'"]/g;t=function(e){return s(e).replace(p,"\\$&")}}var g="",u=e.viewId,y=e.text1;return g+='<div mxa="_zs_galleryc_:_" class="_zs_galleryg"><div mxs="_zs_galleryc_:_" class="_zs_galleryj"><div mx-view="mx-footer/index?dark=true&products=true"></div></div><div mxa="_zs_galleryc_:a" class="_zs_galleryk"><div mxs="_zs_galleryc_:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryc_:b" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryc_:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(u)+'_text_1">\n&lt;mx-footer dark="true" products="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});