define("mx-effects/examples/17",["magix","examples/example","$","../icon","mx-copy/index","examples/hl"],(e,n,l)=>{e("../icon"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");l.exports=t.extend({tmpl:function(e,n,l,t,i,s,a,c){if(l||(l=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},t=function(e){return i(e).replace(m,x)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(_,p)}}if(!c){var g=/[\\'"]/g;c=function(e){return i(e).replace(g,"\\$&")}}var d="",f=e.viewId,y=e.text1;return d+='<div mxa="_zs_gallerybK:_" class="_zs_galleryg"><div mxs="_zs_gallerybK:_" class="_zs_galleryj"><span class="mr10" mx-view="mx-effects/icon?type=highlight&content=%E6%B5%8B%E8%AF%95&tip=%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=highlight&content=%E6%B5%8B%E8%AF%95&tip=%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF"></span></div><div mxa="_zs_gallerybK:a" class="_zs_galleryk"><div mxs="_zs_gallerybK:a" class="_zs_galleryi">带提示的打标</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_gallerybK:b" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_gallerybK:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(f)+'_text_1">\n&lt;mx-effects.icon\n    type="highlight" \n    content="测试"\n    tip="提示信息"/&gt;\n    \n&lt;mx-effects.icon\n    mode="hollow" \n    type="highlight" \n    content="测试"\n    tip="提示信息"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});