define("mx-duration/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var i=e("magix").Vframe,a=e("examples/example");e("$");s.exports=a.extend({tmpl:function(e,l,s,i,a,r,n,t){if(s||(s=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(_,x)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(v,m)}}if(!t){var g=/[\\'"]/g;t=function(e){return a(e).replace(g,"\\$&")}}var o="",u=e.ok,p=e.result,y=e.viewId,f=e.text1,z=e.text2;return o+='<div mxa="_zs_gallerybA:_" class="_zs_galleryg"><div mxa="_zs_gallerybA:a" class="_zs_galleryj"><div mxs="_zs_gallerybA:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>可选时间间隔为1小时</div><div>宽度随容器自适应，最小780</div><div>清空时获取选中值，提示未选择内容不可提交</div></div></div><div mxa="_zs_gallerybA:b" class="mb20"><a mxs="_zs_gallerybA:a" href="javascript:;" mx-click="'+l+'get()" class="btn btn-brand mr20">获取当前选中值</a>',o+=u?"<span>"+i(p)+"</span>":'<span mxs="_zs_gallerybA:b" class="color-red">请至少选择一个时段</span>',o+='</div><div id="'+i(y)+'_duration" mx-view="mx-duration/index?width=900&half=true&selected='+r(p)+'"></div></div><div mxa="_zs_gallerybA:c" class="clearfix"><div mxa="_zs_gallerybA:d" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_gallerybA:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_1"><span mxa="_zs_gallerybA:e" class="_zs_galleryn">'+a(f)+'</span><i mxs="_zs_gallerybA:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(y)+'_text_1">\n&lt;mx-duration id="&#123;&#123;=viewId&#125;&#125;_duration"\n    width="900"\n    half="true"\n    selected="&#123;&#123;=result&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerybA:f" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_gallerybA:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_2"><span mxa="_zs_gallerybA:g" class="_zs_galleryn">'+a(z)+'</span><i mxs="_zs_gallerybA:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(y)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            ok: true,\n            result: '00:00-12:00:100,12:00-24:00:220;0;0;0;0;0;00:00-24:00:100'\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;'(event) &#123;\n        let vf = Vframe.get(this.id + '_duration');\n        let result = vf.invoke('submit');\n\n        // ok：\n        //      false 未选择任何时段\n        //      true 已选择时段\n        // result.val 当前选中值，ok = true时\n        this.updater.digest(&#123;\n            ok: result.ok,\n            result: result.val\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest({viewId:this.id,ok:!0,result:"00:00-12:00:100,12:00-24:00:220;0;0;0;0;0;00:00-24:00:100"})},"get<click>":function(e){var l=i.get(this.id+"_duration").invoke("submit");this.updater.digest({ok:l.ok,result:l.val})}})});