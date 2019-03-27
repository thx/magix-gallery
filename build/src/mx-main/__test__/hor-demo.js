define("mx-main/__test__/hor-demo",["magix","$","__test__/example","../hor","mx-copy/index","__test__/hl"],(e,n,a)=>{e("../hor"),e("mx-copy/index"),e("__test__/hl");var l=e("magix"),s=(e("$"),l.Router),r=e("__test__/example");a.exports=r.extend({tmpl:function(e,n,a,l,s,r,i,_){if(a||(a=e),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+t[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(d,x)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(m,c)}}if(!_){var p=/[\\'"]/g;_=function(e){return s(e).replace(p,"\\$&")}}i||(i=function(e,n,a,l){for(l=e[g];--l;)if(e[a=g+l]===n)return a;return e[a=g+e[g]++]=n,a});var g="",v="",y=e.alreadyStep,z=e.stepInfos,u=e.viewId,f=e.text1,h=e.text2,J=e.text3,w=e.text4;return v+='<div mxv mxa="_zs_gallerycJ:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerycJ:a" class="_zs_galleryk"><div mxs="_zs_gallerycJ:_" class="mb20"><span class="color-9">以下示例：</span>标题点击可以快速跳转；未到步骤不可点击；</div><div mxv="stepInfos" mx-view="mx-main/hor?alreadyStep='+r(y)+"&stepInfos="+i(a,z)+'"></div></div><div mxa="_zs_gallerycJ:b" class="clearfix"><div mxa="_zs_gallerycJ:c" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_gallerycJ:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_1"><span mxa="_zs_gallerycJ:d" class="_zs_galleryo">'+s(f)+'</span><i mxs="_zs_gallerycJ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+'_text_1">\n&lt;mx-main.hor\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_gallerycJ:e" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_gallerycJ:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_2"><span mxa="_zs_gallerycJ:f" class="_zs_galleryo">'+s(h)+'</span><i mxs="_zs_gallerycJ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: '设置计划',\n            nextTip: '下一步，设置单元',\n            view: '@./hor-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '设置单元',\n            prevTip: '返回计划设置',\n            nextTip: '下一步，完成',\n            view: '@./hor-inner',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    adgroupId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: '添加创意',\n            view: '@./hor-inner'\n        &#125;, &#123;\n            label: '完成',\n            view: '@./hor-inner'\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if(locParams.campaignId)&#123;\n            alreadyStep = 2;\n            if(locParams.adgroupId)&#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa=\"_zs_gallerycJ:g\" class=\"clearfix\"><div mxa=\"_zs_gallerycJ:h\" class=\"_zs_galleryl _zs_gallerya\"><div mxs=\"_zs_gallerycJ:d\" class=\"_zs_galleryj\">hor-inner： HTML Code</div><div class=\"_zs_gallerym\" mx-success=\""+n+'done({id:3})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_3"><span mxa="_zs_gallerycJ:i" class="_zs_galleryo">'+s(J)+'</span><i mxs="_zs_gallerycJ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+'_text_3">\n&lt;div class="fontsize-16"&gt;第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;&lt;/div&gt;\n            </pre></div><div mxa="_zs_gallerycJ:j" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_gallerycJ:e" class="_zs_galleryj">hor-inner： JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:4})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_4"><span mxa="_zs_gallerycJ:k" class="_zs_galleryo">'+s(w)+'</span><i mxs="_zs_gallerycJ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+"_text_4\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@hor-inner.html',\n    init(extra)&#123;\n        this.updater.set(&#123;\n            info: extra.info || &#123;&#125;,\n            data: $.extend(true, &#123;&#125;, extra.data || &#123;&#125;)\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get('info');\n        let ok = true,\n            remain = &#123;&#125;;\n        remain['test_' + info.index] = info.label;\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok,\n                msg: info.label,\n                remain\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){var e=s.parse().params,n=1;e.campaignId&&(n=2,e.adgroupId&&(n=3)),this.updater.digest({stepInfos:[{label:"设置计划",nextTip:"下一步，设置单元",view:"mx-main/__test__/hor-inner",nextFn:function(e,n){n({campaignId:1})}},{label:"设置单元",prevTip:"返回计划设置",nextTip:"下一步，添加创意",view:"mx-main/__test__/hor-inner",nextFn:function(e,n){n({adgroupId:1})}},{label:"添加创意",view:"mx-main/__test__/hor-inner"},{label:"完成",view:"mx-main/__test__/hor-inner"}],alreadyStep:n})}})});