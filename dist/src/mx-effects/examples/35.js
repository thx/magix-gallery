define("mx-effects/examples/35",["magix","examples/example","$","../degree","mx-copy/index","examples/hl"],(e,l,s)=>{e("../degree"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");s.exports=n.extend({tmpl:function(e,l,s,n,r,a,i,m){if(s||(s=e),!r){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+t[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(x,d)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return c[e]},_=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(_,g)}}if(!m){var v=/[\\'"]/g;m=function(e){return r(e).replace(v,"\\$&")}}var f="",p=e.viewId,u=e.text1;return f+='<div mxa="_zs_galleryb6:_" class="_zs_galleryg"><div mxs="_zs_galleryb6:_" class="_zs_galleryj"><div class="mb20"><div class="mr20" mx-view="mx-effects/degree?num=60"></div><div class="mr20" mx-view="mx-effects/degree?num=20.22"></div><div mx-view="mx-effects/degree?num=100"></div></div></div><div mxa="_zs_galleryb6:a" class="_zs_galleryk"><div mxs="_zs_galleryb6:a" class="_zs_galleryi">刻度型展示值取整</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_1"><span mxa="_zs_galleryb6:b" class="_zs_galleryn">'+r(u)+'</span><i mxs="_zs_galleryb6:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(p)+'_text_1">\n&lt;mx-effects.degree\n    num="60"/&gt;\n    \n&lt;mx-effects.degree\n    num="20.22"/&gt;\n\n&lt;mx-effects.degree\n    num="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});