define("mx-effects/__test__/8",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");s.exports=n.extend({tmpl:function(e,t,s,n,l,m,r,i){if(s||(s=e),!l){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,c=function(e){return"&"+_[e]+";"};l=function(e){return""+(null==e?"":e)},n=function(e){return l(e).replace(a,c)}}if(!m){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},v=/[!')(*]/g;m=function(e){return encodeURIComponent(l(e)).replace(v,d)}}if(!i){var g=/[\\'"]/g;i=function(e){return l(e).replace(g,"\\$&")}}var o="",f=e.viewId,p=e.text1;return o+='<div mxa="_zs_gallerybO:_" class="_zs_galleryg"><div mxs="_zs_gallerybO:_" class="_zs_galleryj"><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=-20.3"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=20.2&textPlacement=left"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=40.23&textPlacement=right"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=60.555&textPlacement=bottom"></div></div><div class="ml40 mt20 mb40"><div mx-view="mx-effects/progress?num=101.2&textPlacement=bottom"></div></div></div><div mxa="_zs_gallerybO:a" class="_zs_galleryk"><div mxs="_zs_gallerybO:a" class="_zs_galleryi">条型进度条，精度与传入数值保持一致，最多两位</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+m(f)+'_text_1"><span mxa="_zs_gallerybO:b" class="_zs_galleryn">'+l(p)+'</span><i mxs="_zs_gallerybO:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(f)+'_text_1">\n&lt;mx-effects.progress\n    num="-20.3"/&gt;\n\n&lt;mx-effects.progress\n    num="20.2" \n    text-placement="left"/&gt;\n\n&lt;mx-effects.progress\n    num="40.23" \n    text-placement="right"/&gt;\n\n&lt;mx-effects.progress\n    num="60.555" \n    text-placement="bottom"/&gt;\n\n&lt;mx-effects.progress\n    num="101.2" \n    text-placement="bottom"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});