define("mx-slider/__test__/8",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(e,s,a)=>{e("../range"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");a.exports=l.extend({tmpl:function(e,s,a,l,n,_,t,r){if(a||(a=e),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(d,x)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},g=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(g,c)}}if(!r){var v=/[\\'"]/g;r=function(e){return n(e).replace(v,"\\$&")}}var p="",o=e.start,u=e.end,y=e.viewId,z=e.text1,h=e.text2;return p+='<div mxa="_zs_gallerydS:_" class="_zs_galleryg"><div mxa="_zs_gallerydS:a" class="_zs_galleryj"><div mxa="_zs_gallerydS:b" class="mb20"><span mxs="_zs_gallerydS:_" class="color-9">开始值：</span><span mxa="_zs_gallerydS:c" class="mr20">'+l(o)+'</span><span mxs="_zs_gallerydS:a" class="color-9">结束值：</span><span>'+l(u)+'</span></div><div mxa="_zs_gallerydS:d" class="pt20 pb20"><div mx-change="'+s+'showValue()" mx-view="mx-slider/range?max=200&min=100&value='+_(o)+"%2C"+_(u)+'&step=0.05"></div></div></div><div mxa="_zs_gallerydS:e" class="_zs_galleryk"><div mxs="_zs_gallerydS:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(y)+'_text_1"><span mxa="_zs_gallerydS:f" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_gallerydS:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="&#123;&#123;=start&#125;&#125;,&#123;&#123;=end&#125;&#125;"\n    step="0.05"\n    mx-change="showValue()"/&gt;</pre></div><div mxa="_zs_gallerydS:g" class="_zs_galleryk"><div mxs="_zs_gallerydS:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+_(y)+'_text_2"><span mxa="_zs_gallerydS:h" class="_zs_galleryn">'+n(h)+'</span><i mxs="_zs_gallerydS:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            start: 110,\n            end: 150\n        &#125;);\n    &#125;,\n    'showValue&lt;change&gt;' (e) &#123;\n        // 操作结束的时候返回\n        // e.value [array] [min, max]\n        let v = e.value;\n        this.updater.digest(&#123;\n            start: v[0],\n            end: v[1]\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({start:110,end:150})},"showValue<change>":function(e){var s=e.value;this.updater.digest({start:s[0],end:s[1]})}})});