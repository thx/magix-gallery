define("mx-effects/examples/15",["magix","examples/example","$","../icon","mx-copy/index","examples/hl"],(e,n,l)=>{e("../icon"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");l.exports=t.extend({tmpl:function(e,n,l,t,s,o,a,c){if(l||(l=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,r=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(m,r)}}if(!o){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},f=/[!')(*]/g;o=function(e){return encodeURIComponent(s(e)).replace(f,p)}}if(!c){var d=/[\\'"]/g;c=function(e){return s(e).replace(d,"\\$&")}}var _="",g=e.viewId,y=e.text1;return _+='<div mxa="_zs_gallerybK:_" class="_zs_galleryg"><div mxs="_zs_gallerybK:_" class="_zs_galleryj"><span class="mr10" mx-view="mx-effects/icon?mode=hollow&content=%E9%BB%98%E8%AE%A4%E7%81%B0%E8%89%B2"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=error&content=%E7%BA%A2%E8%89%B2%E9%94%99%E8%AF%AF"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=warn&content=%E9%BB%84%E8%89%B2%E8%AD%A6%E5%91%8A"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=pass&content=%E7%BB%BF%E8%89%B2%E9%80%9A%E8%BF%87"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=highlight&content=%E5%93%81%E7%89%8C%E8%89%B2%E5%BC%BA%E8%B0%83"></span></div><div mxa="_zs_gallerybK:a" class="_zs_galleryk"><div mxs="_zs_gallerybK:a" class="_zs_galleryi">空心打标</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+o(g)+'_text_1"><span mxa="_zs_gallerybK:b" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerybK:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(g)+'_text_1">\n&lt;mx-effects.icon mode="hollow" content="默认灰色"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="error" content="红色错误"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="warn" content="黄色警告"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="pass" content="绿色通过"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="highlight" content="品牌色强调"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});