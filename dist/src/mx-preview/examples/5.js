define("mx-preview/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(i,a,e)=>{i("../index"),i("mx-copy/index"),i("examples/hl");var l=i("magix"),r=i("examples/example");i("$");l.applyStyle("_zs_galleryaq","._zs_galleryje{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryjf{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),e.exports=r.extend({tmpl:function(i,a,e,l,r,d,n,s){if(e||(e=i),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,t=function(i){return"&"+c[i]+";"};r=function(i){return""+(null==i?"":i)},l=function(i){return r(i).replace(m,t)}}if(!d){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(i){return o[i]},g=/[!')(*]/g;d=function(i){return encodeURIComponent(r(i)).replace(g,x)}}if(!s){var p=/[\\'"]/g;s=function(i){return r(i).replace(p,"\\$&")}}var u="",_=i.viewId,v=i.text1;return u+='<div mxa="_zs_gallerydR:_" class="_zs_galleryg"><div mxs="_zs_gallerydR:_" class="_zs_galleryj"><div class="color-9 mb20 clearfix"><i class="mc-iconfont displacement-2 mr5 fl">&#xe6ac;</i><div class="fl"><div>缩略图展示xiaotu<span class="color-brand">预览width，height必配</span></div><div>datu按照实际比例展示</div></div></div><div class="_zs_galleryje" mx-view="mx-preview/index?format=23&datuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1HcdJr49YBuNjy0Ffwu0IsVXa.png&xiaotuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1pJkOrGSWBuNjSsrbwu10mVXa.png&clickUrl=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=190&height=43&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydR:a" class="_zs_galleryk"><div mxs="_zs_gallerydR:a" class="_zs_galleryi">套图（业务场景大小图）预览</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(_)+'_text_1"><span mxa="_zs_gallerydR:b" class="_zs_galleryn">'+r(v)+'</span><i mxs="_zs_gallerydR:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(_)+'_text_1">\n&lt;mx-preview class="demo"\n    format="23"\n    datu-url="//img.alicdn.com/simba/img/TB1HcdJr49YBuNjy0Ffwu0IsVXa.png"\n    xiaotu-url="//img.alicdn.com/simba/img/TB1pJkOrGSWBuNjSsrbwu10mVXa.png"\n    click-url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="190"\n    height="43"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});