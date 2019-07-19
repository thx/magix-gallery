/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/hor-demo",["magix","$","examples/example","../hor"],(require,exports,module)=>{
/*Magix,$,Base*/
require("../hor");
var Magix = require("magix");
var $ = require("$");
var Router = Magix.Router;
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', alreadyStep = $$.alreadyStep, stepInfos = $$.stepInfos; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryc#:_" class="pl20 pr20 pt20"><div mxs="_zs_galleryc#:_" class="mb40"><span class="color-9">以下示例：</span>标题点击可以快速跳转；未到步骤不可点击；</div><div mxv="stepInfos" mx-view="mx-main/hor?alreadyStep=';
    $line = 6;
    $art = '=alreadyStep';
    ;
    $p += ($expr = '<%!$eu(alreadyStep)%>', $eu(alreadyStep)) + '&stepInfos=';
    $line = 7;
    $art = '@stepInfos';
    ;
    $p += ($expr = '<%@stepInfos%>', $i($$ref, stepInfos)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/hor-demo.html';
    throw msg;
} return $p; },
    render: function () {
        var stepInfos = [{
                label: '设置计划',
                nextTip: '下一步，设置单元',
                view: 'mx-main/examples/hor-inner',
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
                view: 'mx-main/examples/hor-inner',
                nextFn: function (remains, next) {
                    // remains 当前步骤保留的信息，提交处理
                    next({
                        adgroupId: 1
                    });
                }
            }, {
                label: '添加创意',
                view: 'mx-main/examples/hor-inner'
            }, {
                label: '完成',
                view: 'mx-main/examples/hor-inner'
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