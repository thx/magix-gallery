define("mx-effects/__test__/16",["magix","__test__/example","$","../icon","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../icon"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");t.exports=l.extend({tmpl:function(e,n,t,l,s,_,a,c){if(t||(t=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(i,o)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},d=/[!')(*]/g;_=function(e){return encodeURIComponent(s(e)).replace(d,x)}}if(!c){var f=/[\\'"]/g;c=function(e){return s(e).replace(f,"\\$&")}}var g="",p=e.viewId,v=e.text1;return g+='<div mxa="_zs_gallerybm:_" class="_zs_galleryh"><div mxs="_zs_gallerybm:_" class="_zs_galleryk"><span class="mr10" mx-view="mx-effects/icon?color=%2351a300&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&color=%2351a300&content=%E6%B5%8B%E8%AF%95"></span></div><div mxa="_zs_gallerybm:a" class="_zs_galleryl"><div mxs="_zs_gallerybm:a" class="_zs_galleryj">自定义颜色</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(p)+'_text_1"><span mxa="_zs_gallerybm:b" class="_zs_galleryo">'+s(v)+'</span><i mxs="_zs_gallerybm:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(p)+'_text_1">\n&lt;mx-effects.icon \n    color="#51a300" \n    content="测试"/&gt;\n    \n&lt;mx-effects.icon \n    mode="hollow" \n    color="#51a300" \n    content="测试"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});