define("mx-loading/__test__/8",["magix","__test__/example","$","../anim","mx-copy/index","__test__/hl"],(e,l,i)=>{e("../anim"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");i.exports=n.extend({tmpl:function(e,l,i,n,a,s,t,m){if(i||(i=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,r=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(d,r)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(a(e)).replace(g,x)}}if(!m){var c=/[\\'"]/g;m=function(e){return a(e).replace(c,"\\$&")}}var v="",p=e.viewId,u=e.text1;return v+='<div mxa="_zs_galleryb/:_" class="_zs_galleryh"><div mxs="_zs_galleryb/:_" class="_zs_galleryk clearfix"><div class="fl ml40" mx-view="mx-loading/anim?mode=pulse"></div><div class="fl ml80" mx-view="mx-loading/anim?mode=pulse&type=brand"></div><div class="fl ml80" mx-view="mx-loading/anim?mode=pulse&size=40"></div><div class="fl ml80" mx-view="mx-loading/anim?mode=pulse&size=40&color=%2351a300"></div></div><div mxa="_zs_galleryb/:a" class="_zs_galleryl"><div mxs="_zs_galleryb/:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(p)+'_text_1"><span mxa="_zs_galleryb/:b" class="_zs_galleryo">'+a(u)+'</span><i mxs="_zs_galleryb/:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(p)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="pulse" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="pulse" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="pulse" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="pulse" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});