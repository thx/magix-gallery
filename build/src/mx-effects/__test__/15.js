define("mx-effects/__test__/15",["magix","__test__/example","$","../icon","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../icon"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,s,o,c,i){if(n||(n=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,r=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(a,r)}}if(!o){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},d=/[!')(*]/g;o=function(e){return encodeURIComponent(s(e)).replace(d,x)}}if(!i){var p=/[\\'"]/g;i=function(e){return s(e).replace(p,"\\$&")}}var f="",g=e.viewId,y=e.text1;return f+='<div mxa="_zs_gallerybj:_" class="_zs_galleryg"><div mxs="_zs_gallerybj:_" class="_zs_galleryj"><span class="mr10" mx-view="mx-effects/icon?mode=hollow&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=error&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=warn&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=highlight&content=%E6%B5%8B%E8%AF%95"></span></div><div mxa="_zs_gallerybj:a" class="_zs_galleryk"><div mxs="_zs_gallerybj:a" class="_zs_galleryi">空心打标</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+o(g)+'_text_1"><span mxa="_zs_gallerybj:b" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerybj:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(g)+'_text_1">\n&lt;mx-effects.icon mode="hollow" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="error" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="warn" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="highlight" content="测试"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});