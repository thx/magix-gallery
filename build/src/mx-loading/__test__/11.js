define("mx-loading/__test__/11",["magix","__test__/example","$","../anim","mx-copy/index","__test__/hl"],(e,i,l)=>{e("../anim"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");l.exports=n.extend({tmpl:function(e,i,l,n,a,s,t,r){if(l||(l=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(m,d)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},x=/[!')(*]/g;s=function(e){return encodeURIComponent(a(e)).replace(x,o)}}if(!r){var g=/[\\'"]/g;r=function(e){return a(e).replace(g,"\\$&")}}var v="",p=e.viewId,y=e.text1;return v+='<div mxa="_zs_galleryb]:_" class="_zs_galleryh"><div mxs="_zs_galleryb]:_" class="_zs_galleryk clearfix"><div class="fl ml40" mx-view="mx-loading/anim"></div><div class="fl ml80" mx-view="mx-loading/anim?mode=circle-spinner&type=brand"></div><div class="fl ml80" mx-view="mx-loading/anim?mode=circle-spinner&size=40"></div><div class="fl ml80" mx-view="mx-loading/anim?mode=circle-spinner&size=40&color=%2351a300"></div></div><div mxa="_zs_galleryb]:a" class="_zs_galleryl"><div mxs="_zs_galleryb]:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(p)+'_text_1"><span mxa="_zs_galleryb]:b" class="_zs_galleryo">'+a(y)+'</span><i mxs="_zs_galleryb]:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(p)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});