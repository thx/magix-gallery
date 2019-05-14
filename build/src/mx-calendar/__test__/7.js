define("mx-calendar/__test__/7",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(e,a,s)=>{e("../rangepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example"),t=e("moment");e("$");s.exports=n.extend({tmpl:function(e,a,s,n,t,r,l,d){if(s||(s=e),!t){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,m=function(e){return"&"+_[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(i,m)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(x,o)}}if(!d){var g=/[\\'"]/g;d=function(e){return t(e).replace(g,"\\$&")}}var v="",p=e.vs,y=e.start,u=e.end,z=e.max,f=e.min,$=e.viewId,h=e.text1,Y=e.text2;return v+='<div mxa="_zs_gallery$:_" class="_zs_galleryg"><div mxa="_zs_gallery$:a" class="_zs_galleryj"><div mxs="_zs_gallery$:_" class="mb20"><span class="color-9">以下示例：</span><span>可对比，关闭对比选择单天</span></div><div mxa="_zs_gallery$:b" class="mb20"><span mxs="_zs_gallery$:a" class="color-9">当前结果：</span>',v+=p?'<span mxa="_zs_gallery$:c" class="color-brand mr5">'+n(y)+'</span><span mxs="_zs_gallery$:b" class="mr5">对比</span><span mxa="_zs_gallery$:d" class="color-brand-vs">'+n(u)+"</span>":'<span mxa="_zs_gallery$:e" class="mr5">'+n(y)+"</span>",v+='</div><div class="w220" mx-change="'+a+'changeInfo()" mx-view="mx-calendar/rangepicker?vsenable=true&vs='+r(p)+"&single=true&start="+r(y)+"&end="+r(u)+"&max="+r(z)+"&min="+r(f)+'"></div></div><div mxa="_zs_gallery$:f" class="_zs_galleryk"><div mxs="_zs_gallery$:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r($)+'_text_1"><span mxa="_zs_gallery$:g" class="_zs_galleryn">'+t(h)+'</span><i mxs="_zs_gallery$:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n($)+'_text_1">\n&lt;mx-calendar.rangepicker class="w220"\n    vsenable="true"\n    vs="&#123;&#123;=vs&#125;&#125;"\n    single="true"\n    start="&#123;&#123;=start&#125;&#125;"\n    end="&#123;&#123;=end&#125;&#125;"\n    max="&#123;&#123;=max&#125;&#125;"\n    min="&#123;&#123;=min&#125;&#125;"\n    mx-change="changeInfo()"/&gt;</pre></div><div mxa="_zs_gallery$:h" class="_zs_galleryk"><div mxs="_zs_gallery$:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+r($)+'_text_2"><span mxa="_zs_gallery$:i" class="_zs_galleryn">'+t(Y)+'</span><i mxs="_zs_gallery$:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n($)+"_text_2\">\nlet Magix = require('magix');\nlet Moment = require('moment');\nlet $ = require('$');\nlet Formater = 'YYYY-MM-DD';\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            vsenable: true,\n            vs: true,\n            start: Moment().subtract(1, 'days').format(Formater),\n            end: Moment().add(1, 'days').format(Formater),\n            min: Moment().subtract(12, 'days').format(Formater),\n            max: Moment().add(12, 'days').format(Formater)\n        &#125;);\n    &#125;,\n    'changeInfo&lt;change&gt;'(event) &#123;\n        let data = this.updater.get();\n        // event.dates.startStr：开始日期\n        // event.dates.endStr：结束日期，不限时未文案不限\n        // event.vs：是否对比\n        let dates = event.dates,\n            vs = event.vs;\n        this.updater.digest(&#123;\n            vs: vs,\n            start: dates.startStr,\n            end: dates.endStr\n        &#125;);\n    &#125;,\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({vsenable:!0,vs:!0,start:t().subtract(1,"days").format("YYYY-MM-DD"),end:t().add(1,"days").format("YYYY-MM-DD"),min:t().subtract(12,"days").format("YYYY-MM-DD"),max:t().add(12,"days").format("YYYY-MM-DD")})},"changeInfo<change>":function(e){this.updater.get();var a=e.dates,s=e.vs;this.updater.digest({vs:s,start:a.startStr,end:a.endStr})}})});