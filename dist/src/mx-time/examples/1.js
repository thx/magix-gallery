define("mx-time/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,a,n,t,m){if(s||(s=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,r=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(c,r)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return x[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(g,_)}}if(!m){var p=/[\\'"]/g;m=function(e){return a(e).replace(p,"\\$&")}}var v="",o=e.time,h=e.viewId,y=e.text1,f=e.text2;return v+='<div mxa="_zs_galleryfh:_" class="_zs_galleryg"><div mxa="_zs_galleryfh:a" class="_zs_galleryj"><div mxs="_zs_galleryfh:_" class="mb15 lh22"><div class="color-9">下列三种写法等价，时分秒均可选：</div><div class="pl10">types=""</div><div class="pl10">types="all"</div><div class="pl10">types="hour,minute,second"</div></div><div mxa="_zs_galleryfh:b" class="mb20"><span mxs="_zs_galleryfh:a" class="color-9">当前时间：</span>'+i(o)+'</div><div class="w120" id="'+i(h)+'_time" mx-change="'+l+'change()" mx-view="mx-time/index?time='+n(o)+'"></div></div><div mxa="_zs_galleryfh:c" class="_zs_galleryk"><div mxs="_zs_galleryfh:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(h)+'_text_1"><span mxa="_zs_galleryfh:d" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryfh:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(h)+'_text_1">\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    mx-change="change()" /&gt;\n\n&lt;!-- 等价于 --&gt;\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    types="all"\n    mx-change="change()" /&gt;\n\n&lt;!-- 等价于 --&gt;\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    types="hour,minute,second"\n    mx-change="change()" /&gt;\n        </pre></div><div mxa="_zs_galleryfh:e" class="_zs_galleryk"><div mxs="_zs_galleryfh:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(h)+'_text_2"><span mxa="_zs_galleryfh:f" class="_zs_galleryn">'+a(f)+'</span><i mxs="_zs_galleryfh:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(h)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@1.html',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    'change&lt;change&gt;'(e)&#123;\n        // e.time：当前时间\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({time:"10:10:10"})},"change<change>":function(e){this.updater.digest({time:e.time})}})});