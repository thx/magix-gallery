define("mx-effects/__test__/17",["magix","__test__/example","$","../icon","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../icon"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,t,n,l,i,s,_,a){if(n||(n=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(r,o)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(g,x)}}if(!a){var p=/[\\'"]/g;a=function(e){return i(e).replace(p,"\\$&")}}var d="",f=e.viewId,y=e.text1;return d+='<div mxa="_zs_gallerybl:_" class="_zs_galleryg"><div mxs="_zs_gallerybl:_" class="_zs_galleryj"><span class="mr10" mx-view="mx-effects/icon?type=highlight&content=%E6%B5%8B%E8%AF%95&tip=%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=highlight&content=%E6%B5%8B%E8%AF%95&tip=%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF"></span></div><div mxa="_zs_gallerybl:a" class="_zs_galleryk"><div mxs="_zs_gallerybl:a" class="_zs_galleryi">带提示的打标</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_gallerybl:b" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_gallerybl:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(f)+'_text_1">\n&lt;mx-effects.icon\n    type="highlight" \n    content="测试"\n    tip="提示信息"/&gt;\n    \n&lt;mx-effects.icon\n    mode="hollow" \n    type="highlight" \n    content="测试"\n    tip="提示信息"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});