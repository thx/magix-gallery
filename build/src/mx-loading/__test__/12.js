define("mx-loading/__test__/12",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(n,a,l)=>{n("mx-copy/index"),n("__test__/hl");n("magix");var e=n("__test__/example");n("$");l.exports=e.extend({tmpl:function(n,a,l,e,i,s,t,d){if(l||(l=n),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,g=function(n){return"&"+_[n]+";"};i=function(n){return""+(null==n?"":n)},e=function(n){return i(n).replace(r,g)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(n){return c[n]},p=/[!')(*]/g;s=function(n){return encodeURIComponent(i(n)).replace(p,o)}}if(!d){var m=/[\\'"]/g;d=function(n){return i(n).replace(m,"\\$&")}}var x="",v=n.viewId,y=n.text1;return x+='<div mxa="_zs_galleryb|:_" class="_zs_galleryh"><div mxs="_zs_galleryb|:_" class="_zs_galleryk clearfix"><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryb|:a" class="_zs_galleryl"><div mxs="_zs_galleryb|:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryb|:b" class="_zs_galleryo">'+i(y)+'</span><i mxs="_zs_galleryb|:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(v)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});