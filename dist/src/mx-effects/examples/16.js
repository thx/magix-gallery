define("mx-effects/examples/16",["magix","examples/example","$","../icon","mx-copy/index","examples/hl"],(e,n,l)=>{e("../icon"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");l.exports=a.extend({tmpl:function(e,n,l,a,s,c,t,r){if(l||(l=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,m=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(o,m)}}if(!c){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return x[e]},p=/[!')(*]/g;c=function(e){return encodeURIComponent(s(e)).replace(p,_)}}if(!r){var d=/[\\'"]/g;r=function(e){return s(e).replace(d,"\\$&")}}var f="",g=e.viewId,v=e.text1;return f+='<div mxa="_zs_gallerybJ:_" class="_zs_galleryg"><div mxs="_zs_gallerybJ:_" class="_zs_galleryj"><span class="mr10" mx-view="mx-effects/icon?color=%2351a300&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&color=%2351a300&content=%E6%B5%8B%E8%AF%95"></span></div><div mxa="_zs_gallerybJ:a" class="_zs_galleryk"><div mxs="_zs_gallerybJ:a" class="_zs_galleryi">自定义颜色</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+c(g)+'_text_1"><span mxa="_zs_gallerybJ:b" class="_zs_galleryn">'+s(v)+'</span><i mxs="_zs_gallerybJ:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(g)+'_text_1">\n&lt;mx-effects.icon \n    color="#51a300" \n    content="测试"/&gt;\n    \n&lt;mx-effects.icon \n    mode="hollow" \n    color="#51a300" \n    content="测试"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});