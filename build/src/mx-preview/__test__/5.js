define("mx-preview/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(i,a,e)=>{i("../index"),i("mx-copy/index"),i("__test__/hl");var r=i("magix"),l=i("__test__/example");i("$");r.applyStyle("_zs_galleryas","._zs_galleryiW{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiX{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),e.exports=l.extend({tmpl:function(i,a,e,r,l,t,d,s){if(e||(e=i),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(i){return"&"+n[i]+";"};l=function(i){return""+(null==i?"":i)},r=function(i){return l(i).replace(c,o)}}if(!t){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(i){return _[i]},g=/[!')(*]/g;t=function(i){return encodeURIComponent(l(i)).replace(g,m)}}if(!s){var x=/[\\'"]/g;s=function(i){return l(i).replace(x,"\\$&")}}var u="",p=i.viewId,v=i.text1;return u+='<div mxa="_zs_gallerydB:_" class="_zs_galleryg"><div mxs="_zs_gallerydB:_" class="_zs_galleryj"><div class="color-9 mb20 clearfix"><i class="mc-iconfont displacement-2 mr5 fl">&#xe6ac;</i><div class="fl"><div>缩略图展示xiaotu<span class="color-brand">预览width，height必配</span></div><div>datu按照实际比例展示</div></div></div><div class="_zs_galleryiW" mx-view="mx-preview/index?format=23&datuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1HcdJr49YBuNjy0Ffwu0IsVXa.png&xiaotuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1pJkOrGSWBuNjSsrbwu10mVXa.png&clickUrl=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=190&height=43&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydB:a" class="_zs_galleryk"><div mxs="_zs_gallerydB:a" class="_zs_galleryi">套图（业务场景大小图）预览</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(p)+'_text_1"><span mxa="_zs_gallerydB:b" class="_zs_galleryn">'+l(v)+'</span><i mxs="_zs_gallerydB:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(p)+'_text_1">\n&lt;mx-preview class="demo"\n    format="23"\n    datu-url="//img.alicdn.com/simba/img/TB1HcdJr49YBuNjy0Ffwu0IsVXa.png"\n    xiaotu-url="//img.alicdn.com/simba/img/TB1pJkOrGSWBuNjSsrbwu10mVXa.png"\n    click-url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="190"\n    height="43"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});