define("mx-effects/examples/8",["magix","examples/example","$","../progress","mx-copy/index","examples/hl"],(e,t,s)=>{e("../progress"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");s.exports=l.extend({tmpl:function(e,t,s,l,m,n,r,i){if(s||(s=e),!m){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+a[e]+";"};m=function(e){return""+(null==e?"":e)},l=function(e){return m(e).replace(x,c)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return d[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(m(e)).replace(g,v)}}if(!i){var o=/[\\'"]/g;i=function(e){return m(e).replace(o,"\\$&")}}var p="",f=e.viewId,_=e.text1;return p+='<div mxa="_zs_galleryb$:_" class="_zs_galleryg"><div mxs="_zs_galleryb$:_" class="_zs_galleryj"><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=-20.3"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=20.2&textPlacement=left"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=40.23&textPlacement=right"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=60.555&textPlacement=bottom"></div></div><div class="ml40 mt20 mb40"><div mx-view="mx-effects/progress?num=101.2&textPlacement=bottom"></div></div></div><div mxa="_zs_galleryb$:a" class="_zs_galleryk"><div mxs="_zs_galleryb$:a" class="_zs_galleryi">条型进度条，精度与传入数值保持一致，最多两位</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_galleryb$:b" class="_zs_galleryn">'+m(_)+'</span><i mxs="_zs_galleryb$:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(f)+'_text_1">\n&lt;mx-effects.progress\n    num="-20.3"/&gt;\n\n&lt;mx-effects.progress\n    num="20.2" \n    text-placement="left"/&gt;\n\n&lt;mx-effects.progress\n    num="40.23" \n    text-placement="right"/&gt;\n\n&lt;mx-effects.progress\n    num="60.555" \n    text-placement="bottom"/&gt;\n\n&lt;mx-effects.progress\n    num="101.2" \n    text-placement="bottom"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});