define("mx-time/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");t.exports=i.extend({tmpl:function(e,s,t,i,n,l,a,_){if(t||(t=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(r,c)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},o=/[!')(*]/g;l=function(e){return encodeURIComponent(n(e)).replace(o,x)}}if(!_){var v=/[\\'"]/g;_=function(e){return n(e).replace(v,"\\$&")}}var p="",g=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryeD:_" class="_zs_galleryh"><div mxs="_zs_galleryeD:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">时分可选，秒不可选：</span><div class="w220" mx-view="mx-time/index?time=10%3A10%3A10&types=hour%2Cminute"></div></div><div class="mb20"><span class="color-9">时秒可选，分不可选：</span><div class="w220" mx-view="mx-time/index?time=10%3A10%3A10&types=hour%2Csecond"></div></div><div class="mb20"><span class="color-9">分秒可选，时不可选：</span><div class="w220" mx-view="mx-time/index?time=10%3A10%3A10&types=minute%2Csecond"></div></div></div><div mxa="_zs_galleryeD:a" class="_zs_galleryl"><div mxs="_zs_galleryeD:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(g)+'_text_1"><span mxa="_zs_galleryeD:b" class="_zs_galleryo">'+n(u)+'</span><i mxs="_zs_galleryeD:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(g)+'_text_1">\n&lt;!-- 时分可选，秒不可选 --&gt;\n&lt;mx-time class="w220" \n    time="10:10:10"  \n    types="hour,minute"/&gt;\n\n&lt;!-- 时秒可选，分不可选 --&gt;\n&lt;mx-time class="w220" \n    time="10:10:10"  \n    types="hour,second"/&gt;\n\n&lt;!-- 分秒可选，时不可选 --&gt;\n&lt;mx-time class="w220" \n    time="10:10:10"  \n    types="minute,second"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});