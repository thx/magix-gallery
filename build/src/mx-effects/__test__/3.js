define("mx-effects/__test__/3",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../notice"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");_.exports=n.extend({tmpl:function(e,t,_,n,s,l,i,a){if(_||(_=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(c,x)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return d[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(m,o)}}if(!a){var g=/[\\'"]/g;a=function(e){return s(e).replace(g,"\\$&")}}var v="",f=e.viewId,p=e.text1;return v+='<div mxa="_zs_gallerybL:_" class="_zs_galleryg"><div mxs="_zs_gallerybL:_" class="_zs_galleryj"><div class="mb20" mx-view="mx-effects/notice?content=%E9%BB%98%E8%AE%A4%E7%81%B0%E8%89%B2%E6%8F%90%E7%A4%BA"></div></div><div mxa="_zs_gallerybL:a" class="_zs_galleryk"><div mxs="_zs_gallerybL:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(f)+'_text_1"><span mxa="_zs_gallerybL:b" class="_zs_galleryn">'+s(p)+'</span><i mxs="_zs_gallerybL:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(f)+'_text_1">\n&lt;mx-effects.notice \n    content="默认灰色提示"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});