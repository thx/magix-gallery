define("mx-slider/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,a,n,_,t){if(s||(s=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(d,c)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},m=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(m,v)}}if(!t){var g=/[\\'"]/g;t=function(e){return a(e).replace(g,"\\$&")}}var u="",p=e.cur,o=e.viewId,y=e.text1,z=e.text2;return u+='<div mxa="_zs_galleryc.:_" class="_zs_galleryh"><div mxa="_zs_galleryc.:a" class="_zs_galleryk"><div mxs="_zs_galleryc.:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>包含输入框</div><div>输入框与滑动轴联动</div><div>step几位小数，其他数值同step保持一致</div><div>结果带提示文案</div></div></div><div mxa="_zs_galleryc.:b" class="mb20"><span mxs="_zs_galleryc.:a" class="color-9">当前值：</span><span>'+i(p)+'</span></div><div mxa="_zs_galleryc.:c" class="pt20 pb20"><div mx-change="'+l+'showValue()" mx-view="mx-slider/index?width=160&needInput=true&max=200&min=100&value='+n(p)+'&step=0.05&tip=%E5%85%83"></div></div></div><div mxa="_zs_galleryc.:d" class="_zs_galleryl"><div mxs="_zs_galleryc.:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_1"><span mxa="_zs_galleryc.:e" class="_zs_galleryo">'+a(y)+'</span><i mxs="_zs_galleryc.:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(o)+'_text_1">\n&lt;mx-slider\n    width="160"\n    need-input="true"\n    max="200"\n    min="100"\n    value="&#123;&#123;=cur&#125;&#125;"\n    step="0.05"\n    tip="元"\n    mx-change="showValue()"/&gt;</pre></div><div mxa="_zs_galleryc.:f" class="_zs_galleryl"><div mxs="_zs_galleryc.:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_2"><span mxa="_zs_galleryc.:g" class="_zs_galleryo">'+a(z)+'</span><i mxs="_zs_galleryc.:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(o)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            cur: 120\n        &#125;);\n    &#125;,\n    'showValue&lt;change&gt;' (e) &#123;\n        // 操作结束的时候返回\n        // 当前值 e.value\n        this.updater.digest(&#123;\n            cur: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({cur:120})},"showValue<change>":function(e){this.updater.digest({cur:e.value})}})});