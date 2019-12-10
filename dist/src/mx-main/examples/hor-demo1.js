define("mx-main/examples/hor-demo1",["magix","$","examples/example","mx-copy/index","examples/hl"],(e,n,l)=>{e("mx-copy/index"),e("examples/hl");var a=e("magix"),s=(e("$"),a.Router,e("examples/example"));l.exports=s.extend({tmpl:function(e,n,l,a,s,i,r,d){if(l||(l=e),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,_=function(e){return"&"+t[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(o,_)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(c,x)}}if(!d){var p=/[\\'"]/g;d=function(e){return s(e).replace(p,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2,f=e.text3,u=e.text4;return g+='<div mxa="_zs_gallerydi:_" class="_zs_galleryg"><div mxs="_zs_gallerydi:_" class="_zs_galleryj"><div class="mb40 clearfix lh22"><div class="fl color-9 mr10">以下示例：</div><div class="fl"><div>标题点击可以快速跳转；未到步骤不可点击；</div><div>当到达最后一步时前面的步骤都不可点击；</div><div>btns自定义按钮，包含预置按钮；prevTip，nextTip，nextFn预置按钮，详情说明参见<a href="#!/main/index" class="color-brand">侧边导航分步流程</a></div><div>优先级 btns > prevTip + nextTip + nextFn，则btns=[]没有按钮</div></div></div><div class="color-9 lh22">点击以下链接新页面查看示例：</div><div class="lh22"><span class="color-9">从第一步开始：</span><a href="#!/main/hor-demo" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/hor-demo</a></div><div class="lh22"><span class="color-9">已到达第二步，停留在第二步上：</span><a href="#!/main/hor-demo?campaignId=1&stepIndex=2" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/hor-demo?campaignId=1&stepIndex=2</a></div><div class="lh22"><span class="color-9">已到达第二步，停留在第一步上：</span><a href="#!/main/hor-demo?campaignId=1&stepIndex=1" target="_blank" rel="noopener noreferrer" class="color-brand">#!/main/hor-demo?campaignId=1&stepIndex=1</a></div></div><div mxa="_zs_gallerydi:a" class="clearfix"><div mxa="_zs_gallerydi:b" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_gallerydi:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_gallerydi:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-main.hor\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_gallerydi:d" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_gallerydi:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_2"><span mxa="_zs_gallerydi:e" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: '设置计划',\n            view: '@./hor-inner',\n            nextTip: '下一步，设置单元',\n            nextFn: (remains) =&gt; &#123;\n                // remains：当前步骤保留的信息，提交处理\n                return new Promise(resolve =&gt; &#123;\n                    // 返回值为保留到地址栏的参数\n                    resolve(&#123;\n                        campaignId: 1\n                    &#125;)\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '设置单元',\n            view: '@./hor-inner',\n            btns: [&#123;\n                type: 'prev',\n                text: '返回计划设置'\n            &#125;, &#123;\n                type: 'next',\n                text: '下一步，添加创意',\n                callback: (remains) =&gt; &#123;\n                    // remains：当前步骤保留的信息，提交处理\n                    return new Promise(resolve =&gt; &#123;\n                        // 返回值为保留到地址栏的参数\n                        resolve(&#123;\n                            adgroupId: 1\n                        &#125;)\n                    &#125;)\n                &#125;\n            &#125;]\n        &#125;, &#123;\n            label: '添加创意',\n            view: '@./hor-inner'\n        &#125;, &#123;\n            label: '完成',\n            view: '@./hor-inner',\n            btns: []\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if (locParams.campaignId) &#123;\n            alreadyStep = 2;\n            if (locParams.adgroupId) &#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa=\"_zs_gallerydi:f\" class=\"clearfix\"><div mxa=\"_zs_gallerydi:g\" class=\"_zs_galleryk _zs_gallery_\"><div mxs=\"_zs_gallerydi:d\" class=\"_zs_galleryi\">hor-inner： HTML Code</div><div class=\"_zs_galleryl\" mx-success=\""+n+'done({id:3})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_3"><span mxa="_zs_gallerydi:h" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_3">\n&lt;div class="fontsize-16"&gt;第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;&lt;/div&gt;\n            </pre></div><div mxa="_zs_gallerydi:i" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_gallerydi:e" class="_zs_galleryi">hor-inner： JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:4})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_4"><span mxa="_zs_gallerydi:j" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerydi:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+"_text_4\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    init(extra) &#123;\n        // 当前步骤完成信息\n        let info = extra.info;\n        this.updater.set(&#123;\n            info\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get('info');\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok: true, //当前view校验结果\n                msg: info.label,\n                remain: &#123;&#125; //提交data\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest()}})});