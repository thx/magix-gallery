define("mx-slider/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,i,n,d,r){if(s||(s=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,_=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(x,_)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(v,m)}}if(!r){var p=/[\\'"]/g;r=function(e){return i(e).replace(p,"\\$&")}}var g="",u=e.cur,o=e.viewId,y=e.text1,z=e.text2;return g+='<div mxa="_zs_galleryd\\:_" class="_zs_galleryg"><div mxa="_zs_galleryd\\:a" class="_zs_galleryj"><div mxs="_zs_galleryd\\:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>包含输入框</div><div>输入框与滑动轴联动</div><div>step几位小数，其他数值同step保持一致</div><div>结果带提示文案</div></div></div><div mxa="_zs_galleryd\\:b" class="mb20"><span mxs="_zs_galleryd\\:a" class="color-9">当前值：</span><span>'+a(u)+'</span></div><div mxa="_zs_galleryd\\:c" class="pt20 pb20"><div mx-change="'+l+'showValue()" mx-view="mx-slider/index?width=160&needInput=true&max=200&min=100&value='+n(u)+'&step=0.05&tip=%E5%85%83"></div></div></div><div mxa="_zs_galleryd\\:d" class="_zs_galleryk"><div mxs="_zs_galleryd\\:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_1"><span mxa="_zs_galleryd\\:e" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_galleryd\\:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(o)+'_text_1">\n&lt;mx-slider\n    width="160"\n    need-input="true"\n    max="200"\n    min="100"\n    value="&#123;&#123;=cur&#125;&#125;"\n    step="0.05"\n    tip="元"\n    mx-change="showValue()"/&gt;</pre></div><div mxa="_zs_galleryd\\:f" class="_zs_galleryk"><div mxs="_zs_galleryd\\:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_2"><span mxa="_zs_galleryd\\:g" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_galleryd\\:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(o)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            cur: 120\n        &#125;);\n    &#125;,\n    'showValue&lt;change&gt;' (e) &#123;\n        // 操作结束的时候返回\n        // 当前值 e.value\n        this.updater.digest(&#123;\n            cur: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({cur:120})},"showValue<change>":function(e){this.updater.digest({cur:e.value})}})});