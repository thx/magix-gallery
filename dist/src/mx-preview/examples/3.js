define("mx-preview/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,i,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var l=e("magix"),r=e("examples/example");e("$");l.applyStyle("_zs_galleryaq","._zs_galleryiY{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiZ{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),a.exports=r.extend({tmpl:function(e,i,a,l,r,t,n,d){if(a||(a=e),!r){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+m[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(s,x)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},h=/[!')(*]/g;t=function(e){return encodeURIComponent(r(e)).replace(h,o)}}if(!d){var g=/[\\'"]/g;d=function(e){return r(e).replace(g,"\\$&")}}var p="",_=e.viewId,v=e.text1;return p+='<div mxa="_zs_gallerydK:_" class="_zs_galleryg"><div mxs="_zs_gallerydK:_" class="_zs_galleryj"><div class="color-9 mb20"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i>会根据屏幕可视范围对预览大小进行修正，<span class="color-brand">预览width，height必配</span></div><div class="_zs_galleryiY" mx-view="mx-preview/index?type=iframe&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F69961%2F2018%2F05%2F08%2Ff1a2711e-e9057e21-14941396.html&width=1280&height=720&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryiY" mx-view="mx-preview/index?type=iframe&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F10167%2F2018%2F05%2F08%2F2ae9a14d-ba8eb686-14928142.html&width=586&height=325&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryiY" mx-view="mx-preview/index?type=iframe&url=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=300&height=250&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydK:a" class="_zs_galleryk"><div mxs="_zs_gallerydK:a" class="_zs_galleryi">html 预览</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(_)+'_text_1"><span mxa="_zs_gallerydK:b" class="_zs_galleryn">'+r(v)+'</span><i mxs="_zs_gallerydK:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(_)+'_text_1">\n&lt;mx-preview class="demo"\n    type="iframe"\n    url="//kb-render.alicdn.com/html/69961/2018/05/08/f1a2711e-e9057e21-14941396.html"\n    width="1280"\n    height="720"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;mx-preview class="demo"\n    type="iframe"\n    url="//kb-render.alicdn.com/html/10167/2018/05/08/2ae9a14d-ba8eb686-14928142.html"\n    width="586"\n    height="325"\n    max-width="100"\n    max-height="100"/&gt;\n    \n&lt;mx-preview class="demo"\n    type="iframe"\n    url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="300"\n    height="250"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});