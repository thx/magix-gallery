define("mx-effects/examples/22",["magix","examples/example","$","../progress","mx-copy/index","examples/hl"],(e,s,l)=>{e("../progress"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");l.exports=r.extend({tmpl:function(e,s,l,r,n,a,i,c){if(l||(l=e),!n){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+t[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(m,o)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(g,x)}}if(!c){var v=/[\\'"]/g;c=function(e){return n(e).replace(v,"\\$&")}}var f="",p=e.viewId,_=e.text1;return f+='<div mxa="_zs_gallerybI:_" class="_zs_galleryg"><div mxs="_zs_gallerybI:_" class="_zs_galleryj"><div class="mb60 clearfix"><div class="fl mr10">单色：</div><div class="fl"><div class="mb40"><div mx-view="mx-effects/progress?num=30.56&color=%23ffb400"></div></div><div mx-view="mx-effects/progress?num=30.56&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div class="mb40"><span class="mr10">渐变：</span><div mx-view="mx-effects/progress?num=50.6&color=%23385acc&colorGradient=%23fe4186"></div></div></div><div mxa="_zs_gallerybI:a" class="_zs_galleryk"><div mxs="_zs_gallerybI:a" class="_zs_galleryi">自定义颜色，支持渐变</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_1"><span mxa="_zs_gallerybI:b" class="_zs_galleryn">'+n(_)+'</span><i mxs="_zs_gallerybI:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(p)+'_text_1">\n&lt;!-- 单色 --&gt;\n&lt;mx-effects.progress \n    num="30.56" \n    color="#ffb400"/&gt;\n\n&lt;!-- 单色 --&gt;\n&lt;mx-effects.progress\n    num="30.56" \n    color="rgb(81, 163, 0)"/&gt;\n\n&lt;!-- 渐变 --&gt;\n&lt;mx-effects.progress\n    num="50.6" \n    color="#385acc"\n    color-gradient="#fe4186"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});