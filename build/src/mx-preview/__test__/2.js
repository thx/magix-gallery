define("mx-preview/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,r)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),s=e("__test__/example");e("$");a.applyStyle("_zs_galleryar","._zs_galleryiS{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiT{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),r.exports=s.extend({tmpl:function(e,i,r,a,s,l,t,d){if(r||(r=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(n,o)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(m,x)}}if(!d){var g=/[\\'"]/g;d=function(e){return s(e).replace(g,"\\$&")}}var p="",v=e.viewId,u=e.text1;return p+='<div mxa="_zs_gallerydi:_" class="_zs_galleryg"><div mxs="_zs_gallerydi:_" class="_zs_galleryj"><div class="color-9 mb20"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i>会根据屏幕可视范围对预览大小进行修正，<span class="color-brand">预览width，height必配</span></div><div class="_zs_galleryiS" mx-view="mx-preview/index?format=4&url=%2F%2Fossgw.alicdn.com%2Fcreatives-assets%2Fvideo%2F2018%2F05%2F16%2Faa7ee841-503d-497b-b802-16687fb9731f.mp4&width=540&height=960&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydi:a" class="_zs_galleryk"><div mxs="_zs_gallerydi:a" class="_zs_galleryi">视频预览</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(v)+'_text_1"><span mxa="_zs_gallerydi:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_1">\n&lt;mx-preview class="demo"\n    format="4"\n    url="//ossgw.alicdn.com/creatives-assets/video/2018/05/16/aa7ee841-503d-497b-b802-16687fb9731f.mp4"\n    width="540"\n    height="960"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});