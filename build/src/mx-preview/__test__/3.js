define("mx-preview/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var l=e("magix"),t=e("__test__/example");e("$");l.applyStyle("_zs_galleryap","._zs_gallerykE{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykF{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;background-color:#fafafa}._zs_gallerykG{width:400px;height:220px;padding:10px;border-radius:4px;overflow-y:auto;border:1px solid #e6e6e6}"),a.exports=t.extend({tmpl:function(e,i,a,l,t,r,n,d){if(a||(a=e),!t){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,_=function(e){return"&"+m[e]+";"};t=function(e){return""+(null==e?"":e)},l=function(e){return t(e).replace(s,_)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(o,c)}}if(!d){var h=/[\\'"]/g;d=function(e){return t(e).replace(h,"\\$&")}}var g="",p=e.viewId,v=e.text1;return g+='<div mxa="_zs_galleryc3:_" class="_zs_galleryh"><div mxs="_zs_galleryc3:_" class="_zs_galleryk"><div class="color-9 mb20"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i>会根据屏幕可视范围对预览大小进行修正</div><div class="_zs_gallerykF" mx-view="mx-preview/index?format=10&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F69961%2F2018%2F05%2F08%2Ff1a2711e-e9057e21-14941396.html&width=1280&height=720&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerykF" mx-view="mx-preview/index?format=10&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F10167%2F2018%2F05%2F08%2F2ae9a14d-ba8eb686-14928142.html&width=586&height=325&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerykF" mx-view="mx-preview/index?format=10&url=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=300&height=250&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryc3:a" class="_zs_galleryl"><div mxs="_zs_galleryc3:a" class="_zs_galleryj">html 预览</div><div class="_zs_gallerym" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_galleryc3:b" class="_zs_galleryo">'+t(v)+'</span><i mxs="_zs_galleryc3:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(p)+'_text_1">\n&lt;mx-preview class="demo"\n    format="10"\n    url="//kb-render.alicdn.com/html/69961/2018/05/08/f1a2711e-e9057e21-14941396.html"\n    width="1280"\n    height="720"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;mx-preview class="demo"\n    format="10"\n    url="//kb-render.alicdn.com/html/10167/2018/05/08/2ae9a14d-ba8eb686-14928142.html"\n    width="586"\n    height="325"\n    max-width="100"\n    max-height="100"/&gt;\n    \n&lt;mx-preview class="demo"\n    format="10"\n    url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="300"\n    height="250"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});