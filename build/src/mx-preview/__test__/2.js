define("mx-preview/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,r,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),s=e("__test__/example");e("$");i.applyStyle("_zs_galleryap","._zs_galleryiC{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiD{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),a.exports=s.extend({tmpl:function(e,r,a,i,s,l,t,d){if(a||(a=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(n,o)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return c[e]},x=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(x,g)}}if(!d){var m=/[\\'"]/g;d=function(e){return s(e).replace(m,"\\$&")}}var p="",v=e.viewId,u=e.text1;return p+='<div mxa="_zs_gallerydg:_" class="_zs_galleryg"><div mxs="_zs_gallerydg:_" class="_zs_galleryj"><div class="color-9 mb20"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i>会根据屏幕可视范围对预览大小进行修正，<span class="color-brand">预览width，height必配</span></div><div class="_zs_galleryiC" mx-view="mx-preview/index?format=4&url=%2F%2Fossgw.alicdn.com%2Fcreatives-assets%2Fvideo%2F2018%2F05%2F16%2Faa7ee841-503d-497b-b802-16687fb9731f.mp4&width=540&height=960&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydg:a" class="_zs_galleryk"><div mxs="_zs_gallerydg:a" class="_zs_galleryi">视频预览</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(v)+'_text_1"><span mxa="_zs_gallerydg:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerydg:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;mx-preview class="demo"\n    format="4"\n    url="//ossgw.alicdn.com/creatives-assets/video/2018/05/16/aa7ee841-503d-497b-b802-16687fb9731f.mp4"\n    width="540"\n    height="960"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});