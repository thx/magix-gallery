define("mx-preview/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(i,e,a)=>{i("../index"),i("mx-copy/index"),i("__test__/hl");var l=i("magix"),r=i("__test__/example");i("$");l.applyStyle("_zs_galleryap","._zs_gallerykD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykE{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;background-color:#fafafa}._zs_gallerykF{width:400px;height:220px;padding:10px;border-radius:4px;overflow-y:auto;border:1px solid #e6e6e6}"),a.exports=r.extend({tmpl:function(i,e,a,l,r,t,s,n){if(a||(a=i),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,_=function(i){return"&"+c[i]+";"};r=function(i){return""+(null==i?"":i)},l=function(i){return r(i).replace(d,_)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(i){return m[i]},x=/[!')(*]/g;t=function(i){return encodeURIComponent(r(i)).replace(x,o)}}if(!n){var g=/[\\'"]/g;n=function(i){return r(i).replace(g,"\\$&")}}var p="",u=i.viewId,v=i.text1;return p+='<div mxa="_zs_galleryc9:_" class="_zs_galleryh"><div mxs="_zs_galleryc9:_" class="_zs_galleryk"><div class="color-9 mb20 clearfix"><i class="mc-iconfont displacement-2 mr5 fl">&#xe6ac;</i><div class="fl"><div>缩略图展示xiaotu<span class="color-brand">预览width，height必配</span></div><div>datu按照实际比例展示</div></div></div><div class="_zs_gallerykE" mx-view="mx-preview/index?format=23&datuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1HcdJr49YBuNjy0Ffwu0IsVXa.png&xiaotuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1pJkOrGSWBuNjSsrbwu10mVXa.png&clickUrl=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=190&height=43&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryc9:a" class="_zs_galleryl"><div mxs="_zs_galleryc9:a" class="_zs_galleryj">套图（业务场景大小图）预览</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(u)+'_text_1"><span mxa="_zs_galleryc9:b" class="_zs_galleryo">'+r(v)+'</span><i mxs="_zs_galleryc9:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+'_text_1">\n&lt;mx-preview class="demo"\n    format="23"\n    datu-url="//img.alicdn.com/simba/img/TB1HcdJr49YBuNjy0Ffwu0IsVXa.png"\n    xiaotu-url="//img.alicdn.com/simba/img/TB1pJkOrGSWBuNjSsrbwu10mVXa.png"\n    click-url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="190"\n    height="43"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});