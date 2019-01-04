/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/index",["magix","$","__test__/example","__test__/subs","mx-title/second","mx-copy/index","__test__/hl","__test__/api"],(require,exports,module)=>{
/*Magix,$,Base*/
require("__test__/subs");
require("mx-title/second");
require("mx-copy/index");
require("__test__/hl");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
var Base = require("__test__/example");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, options = $$.options; $p += '<div mxv mxa="_zs_galleryca:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo' }, { name: 'API', key: viewId + '_api' }, { name: 'step-infos配置', key: viewId + '_step', subs: [{ name: '可配参数', key: viewId + '_step1' }, { name: 'check', key: viewId + '_step2' }] }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryca:a" class="clearfix"><div mxa="_zs_galleryca:b" class="_zs_galleryh"><div mxs="_zs_galleryca:_" class="_zs_galleryk"><a href="#!/main/demo" target="_blank" rel="noopener noreferrer" class="color-brand">新页面查看示例</a></div><div mxa="_zs_galleryca:c" class="clearfix"><div mxa="_zs_galleryca:d" class="_zs_galleryl _zs_gallerya"><div mxs="_zs_galleryca:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryca:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryca:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-main \n    right-width="220"\n    left-width="140"\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n                    </pre></div><div mxa="_zs_galleryca:f" class="_zs_galleryl _zs_galleryb _zs_galleryf"><div mxs="_zs_galleryca:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryca:g" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryca:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: \'设置单元\',\n            nextTip: \'下一步，设置计划\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7b5;&lt;/i&gt;\',\n            sideTip: `&lt;div&gt;说明：&lt;/div&gt;\n&lt;div&gt;1、条件1&lt;/div&gt;\n&lt;div&gt;2、条件2&lt;/div&gt;\n&lt;div&gt;3、条件3&lt;/div&gt;`,\n            subs: [&#123;\n                label: \'推广宝贝\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n                view: \'@./inner2\'\n            &#125;, &#123;\n                label: \'出价方式\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;\',\n                view: \'@./inner\'\n            &#125;],\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                // next(remainParams:object) 保存在路由上的参数\n                next(&#123;\n                    adgroupId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'设置计划\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe612;&lt;/i&gt;\',\n            prevTip: \'返回单元设置\',\n            nextTip: \'下一步，添加创意\',\n            sideView: \'@./tip\',\n            subs: [&#123;\n                label: \'基本信息\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe612;&lt;/i&gt;\',\n                view: \'@./inner1\'\n            &#125;],\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'添加创意\',\n            nextTip: \'下一步，完成\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe613;&lt;/i&gt;\',\n            subs: [&#123;\n                label: \'创意内容1\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe705;&lt;/i&gt;\',\n                view: \'@./inner3\',\n                sideView: \'@./tip\'\n            &#125;, &#123;\n                label: \'创意内容2\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe664;&lt;/i&gt;\',\n                view: \'@./inner\',\n                sideView: \'@./tip\'\n            &#125;, &#123;\n                label: \'创意内容3\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe767;&lt;/i&gt;\',\n                view: \'@./inner\',\n                sideView: \'@./tip\'\n            &#125;]\n        &#125;, &#123;\n            label: \'完成创建\',\n            nextTip: \'完成\',\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe64c;&lt;/i&gt;\',\n            subs: [&#123;\n                label: \'完成标题\',\n                icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7be;&lt;/i&gt;\',\n                view: \'@./inner4\'\n            &#125;]\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if(locParams.adgroupId)&#123;\n            alreadyStep = 2;\n            if(locParams.campaignId)&#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n                    </pre></div></div></div></div><div mxv mxa="_zs_galleryca:h" class="pr20"><div id="' + $e(viewId) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=' + $i($$ref, options) + '" class="mb40"></div><div id="' + $e(viewId) + '_step" mx-view="mx-title/second?content=step-infos%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_galleryca:i" class="mb40"><div class="mb10" id="' + $e(viewId) + '_step1">1. step-infos数组所有可配参数说明</div><div mxs="_zs_galleryca:d" class="pl15 mb20"><pre class="tip-content">\n[{\n    label: \'必填，一级标题文案\',\n    prevTip: \'可选，自定义返回上一步文案，默认返回上一步\'\n    nextTip: \'可选，自定义下一步文案，默认返回下一步\',\n    icon: \'可选，标题icon\',\n    sideTip: \'可选，所有子view公用一个侧边提示，使用默认样式\',\n    sideView: \'可选，所有子view公用一个侧边提示，自定义view\',\n    subs: [{\n        label: \'必填，二级标题文案，当只有一个二级标题时，不显示二级标题\',\n        icon: \'可选，二级标题icon\',\n        view: \'必填，二级标题对应的view，该view必须实现check方法\',\n        sideTip: \'可选，二级view对应的自己单独的侧标提示，使用默认样式\',\n        sideView: \'可选，二级view对应的自己单独的侧标提示，自定义view\',\n    }, {\n        label: \'必填，二级标题文案\',\n        icon: \'可选，二级标题icon\',\n        view: \'必填，二级标题对应的view，该view必须实现check方法\'\n    }],\n    nextFn: (remains, next) => {\n        // remains 当前所有子步骤保留的信息交集，便于提交接口处理等\n        // next(remainParams:object) 保存在路由上的参数\n        next({\n            example: 1\n        })\n    }\n}]\n                </pre></div><div class="mb10" id="' + $e(viewId) + '_step2">2. 子view必须实现的check方法说明，返回一个Promise</div><div mxs="_zs_galleryca:e" class="pl15"><pre class="tip-content">\ncheck() {\n    let ok = true,\n        remain = {};\n\n    return new Promise((resolve) => {\n        // 此处返回promise，防止有接口提交校验等\n        resolve({\n            ok,  // 是否校验通过，false的时候不提交\n            msg: \'错误信息提示\',\n            remain: {} // 当前步骤保留的参数，所有子view交集\n        })\n    })\n}\n                </pre></div></div></div></div>'; return $p; },
    render: function () {
        var viewId = this.id;
        var options = [{
                key: 'step-infos',
                desc: "\u6B65\u9AA4\u4FE1\u606F\uFF0C<a href=\"javascript:;\" mx-click=\"to({id:'" + viewId + "_step'})\" class=\"color-brand\">\u67E5\u770B\u8BE6\u7EC6\u8BF4\u660E</a>",
                type: 'array',
                def: '[]'
            }, {
                key: 'already-step',
                desc: '当前已经到达第几步，从1开始',
                type: 'number',
                def: '取路由地址上stepIndex，1 和 alreadyStep的最大值'
            }, {
                key: 'left-width',
                desc: '左侧导航区域宽度',
                type: 'number',
                def: '160'
            }, {
                key: 'right-width',
                desc: '右侧提示区域宽度',
                type: 'number',
                def: '260'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});