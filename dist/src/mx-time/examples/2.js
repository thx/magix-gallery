define("mx-time/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,s,i)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");i.exports=l.extend({tmpl:function(e,s,i,l,n,t,a,m){if(i||(i=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(c,d)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},o=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(o,p)}}if(!m){var v=/[\\'"]/g;m=function(e){return n(e).replace(v,"\\$&")}}var _="",g=e.viewId,u=e.text1;return _+='<div mxa="_zs_gallerye]:_" class="_zs_galleryg"><div mxs="_zs_gallerye]:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">时分可选，秒不可选：</span><div class="w220" mx-view="mx-time/index?time=10%3A10%3A10&types=hour%2Cminute"></div></div><div class="mb20"><span class="color-9">时秒可选，分不可选：</span><div class="w220" mx-view="mx-time/index?time=10%3A10%3A10&types=hour%2Csecond"></div></div><div class="mb20"><span class="color-9">分秒可选，时不可选：</span><div class="w220" mx-view="mx-time/index?time=10%3A10%3A10&types=minute%2Csecond"></div></div></div><div mxa="_zs_gallerye]:a" class="_zs_galleryk"><div mxs="_zs_gallerye]:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(g)+'_text_1"><span mxa="_zs_gallerye]:b" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_gallerye]:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(g)+'_text_1">\n&lt;!-- 时分可选，秒不可选 --&gt;\n&lt;mx-time class="w220" \n    time="10:10:10"  \n    types="hour,minute"/&gt;\n\n&lt;!-- 时秒可选，分不可选 --&gt;\n&lt;mx-time class="w220" \n    time="10:10:10"  \n    types="hour,second"/&gt;\n\n&lt;!-- 分秒可选，时不可选 --&gt;\n&lt;mx-time class="w220" \n    time="10:10:10"  \n    types="minute,second"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});