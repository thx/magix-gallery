/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/hor-demo",["magix","$","__test__/example","../hor","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,$,Base*/
require("../hor");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var $ = require("$");
var Router = Magix.Router;
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
} ; var $g = '', $_temp, $p = '', alreadyStep = $$.alreadyStep, stepInfos = $$.stepInfos, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text3 = $$.text3, text4 = $$.text4; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycE:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerycE:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerycE:_" class="mb20"><span class="color-9">以下示例：</span>标题点击可以快速跳转；未到步骤不可点击；</div><div mxv="stepInfos" mx-view="mx-main/hor?alreadyStep=';
    $line = 7;
    $art = '=alreadyStep';
    ;
    $p += ($expr = '<%!$eu(alreadyStep)%>', $eu(alreadyStep)) + '&stepInfos=';
    $line = 8;
    $art = '@stepInfos';
    ;
    $p += ($expr = '<%@stepInfos%>', $i($$ref, stepInfos)) + '"></div></div><div mxa="_zs_gallerycE:b" class="clearfix"><div mxa="_zs_gallerycE:c" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_gallerycE:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycE:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycE:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-main.hor\n    already-step="&#123;&#123;=alreadyStep&#125;&#125;"\n    step-infos="&#123;&#123;@stepInfos&#125;&#125;" /&gt;\n            </pre></div><div mxa="_zs_gallerycE:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerycE:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycE:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 28;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycE:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Router = Magix.Router;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let stepInfos = [&#123;\n            label: \'设置计划\',\n            nextTip: \'下一步，设置单元\',\n            view: \'@./hor-inner\',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    campaignId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'设置单元\',\n            prevTip: \'返回计划设置\',\n            nextTip: \'下一步，完成\',\n            view: \'@./hor-inner\',\n            nextFn: (remains, next) =&gt; &#123;\n                // remains 当前步骤保留的信息，提交处理\n                next(&#123;\n                    adgroupId: 1\n                &#125;)\n            &#125;\n        &#125;, &#123;\n            label: \'添加创意\',\n            view: \'@./hor-inner\'\n        &#125;, &#123;\n            label: \'完成\',\n            view: \'@./hor-inner\'\n        &#125;];\n\n        let locParams = Router.parse().params;\n        let alreadyStep = 1;\n        if(locParams.campaignId)&#123;\n            alreadyStep = 2;\n            if(locParams.adgroupId)&#123;\n                alreadyStep = 3;\n            &#125;\n        &#125;\n\n        this.updater.digest(&#123;\n            stepInfos,\n            alreadyStep\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div><div mxa="_zs_gallerycE:g" class="clearfix"><div mxa="_zs_gallerycE:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_gallerycE:d" class="_zs_gallery___test___layout_-eg-title">hor-inner： HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 89;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerycE:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 91;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerycE:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 94;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;div class="fontsize-16"&gt;第&#123;&#123;=info.index&#125;&#125;步：&#123;&#123;=info.label&#125;&#125;&lt;/div&gt;\n            </pre></div><div mxa="_zs_gallerycE:j" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerycE:e" class="_zs_gallery___test___layout_-eg-title">hor-inner： JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 100;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_gallerycE:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 102;
    $art = '!text4';
    ;
    $p += ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_gallerycE:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 105;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@hor-inner.html\',\n    init(extra)&#123;\n        this.updater.set(&#123;\n            info: extra.info || &#123;&#125;,\n            data: $.extend(true, &#123;&#125;, extra.data || &#123;&#125;)\n        &#125;)\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    check() &#123;\n        let info = this.updater.get(\'info\');\n        let ok = true,\n            remain = &#123;&#125;;\n        remain[\'test_\' + info.index] = info.label;\n\n        return new Promise((resolve) =&gt; &#123;\n            // 此处返回promise，防止有接口提交校验等\n            resolve(&#123;\n                ok,\n                msg: info.label,\n                remain\n            &#125;)\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/__test__/hor-demo.html';
    throw msg;
} return $p; },
    render: function () {
        var stepInfos = [{
                label: '设置计划',
                nextTip: '下一步，设置单元',
                view: 'mx-main/__test__/hor-inner',
                nextFn: function (remains, next) {
                    // remains 当前步骤保留的信息，提交处理
                    next({
                        campaignId: 1
                    });
                }
            }, {
                label: '设置单元',
                prevTip: '返回计划设置',
                nextTip: '下一步，添加创意',
                view: 'mx-main/__test__/hor-inner',
                nextFn: function (remains, next) {
                    // remains 当前步骤保留的信息，提交处理
                    next({
                        adgroupId: 1
                    });
                }
            }, {
                label: '添加创意',
                view: 'mx-main/__test__/hor-inner'
            }, {
                label: '完成',
                view: 'mx-main/__test__/hor-inner'
            }];
        var locParams = Router.parse().params;
        var alreadyStep = 1;
        if (locParams.campaignId) {
            alreadyStep = 2;
            if (locParams.adgroupId) {
                alreadyStep = 3;
            }
        }
        this.updater.digest({
            stepInfos: stepInfos,
            alreadyStep: alreadyStep
        });
    }
});

});