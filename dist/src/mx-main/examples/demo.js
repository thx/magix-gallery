/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/demo",["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
var Magix = require("magix");
var $ = require("$");
var Router = Magix.Router;
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', alreadyStep = $$.alreadyStep, stepInfos = $$.stepInfos; var $expr, $art, $line; try {
    $p += '<div mxv="stepInfos" mx-view="mx-main/index?rightWidth=220&leftWidth=140&alreadyStep=';
    $line = 4;
    $art = '=alreadyStep';
    ;
    $p += ($expr = '<%!$eu(alreadyStep)%>', $eu(alreadyStep)) + '&stepInfos=';
    $line = 5;
    $art = '@stepInfos';
    ;
    $p += ($expr = '<%@stepInfos%>', $i($$ref, stepInfos)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/demo.html';
    throw msg;
} return $p; },
    render: function () {
        var stepInfos = [{
                label: '设置计划',
                sideView: 'mx-main/examples/tip',
                subs: [{
                        label: '基本信息',
                        icon: '<i class="mc-iconfont fontsize-22">&#xe612;</i>',
                        view: 'mx-main/examples/inner1'
                    }],
                nextTip: '下一步，设置计划',
                nextFn: function (remains, next) {
                    // remains 当前步骤保留的信息，提交处理
                    next({
                        campaignId: 1
                    });
                }
            }, {
                label: '设置单元',
                sideTitle: '单元说明',
                sideTip: "<div>\u8BF4\u660E\uFF1A</div>\n<div>1\u3001\u6761\u4EF61</div>\n<div>2\u3001\u6761\u4EF62</div>\n<div>3\u3001\u6761\u4EF63</div>",
                subs: [{
                        label: '推广宝贝',
                        icon: '<i class="mc-iconfont fontsize-20">&#xe613;</i>',
                        view: 'mx-main/examples/inner2'
                    }, {
                        label: '出价方式',
                        icon: '<i class="mc-iconfont fontsize-20">&#xe731;</i>',
                        view: 'mx-main/examples/inner'
                    }],
                prevTip: '返回计划设置',
                nextTip: '下一步，完成',
                nextFn: function (remains, next) {
                    // remains 当前步骤保留的信息，提交处理
                    next({
                        adgroupId: 1
                    });
                }
            }, {
                label: '完成创建',
                subs: [{
                        label: '完成标题',
                        icon: '<i class="mc-iconfont fontsize-20">&#xe7be;</i>',
                        view: 'mx-main/examples/inner3'
                    }]
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