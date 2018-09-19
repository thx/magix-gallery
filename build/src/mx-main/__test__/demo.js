/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/demo",["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
var Magix = require("magix");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', stepInfos = $$.stepInfos, childInfos = $$.childInfos; var $expr, $art, $line; try {
    $p += '<div mxv="stepInfos,childInfos" mx-next="' + $viewId + 'submit()" mx-view="mx-main/index?leftWidth=140&stepInfos=';
    $line = 3;
    $art = '@stepInfos';
    ;
    $p += ($expr = '<%@stepInfos%>', $i($$ref, stepInfos)) + '&childInfos=';
    $line = 4;
    $art = '@childInfos';
    ;
    $p += ($expr = '<%@childInfos%>', $i($$ref, childInfos)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/__test__/demo.html';
    throw msg;
} return $p; },
    render: function () {
        var stepInfos = [{
                label: '诉求信息',
                icon: '<i class="mc-iconfont">&#xe7b6;</i>',
                subs: [{
                        label: '诉求信息',
                        icon: '<i class="mc-iconfont">&#xe7be;</i>',
                        view: 'mx-main/__test__/inner'
                    }]
            }, {
                label: '设置计划',
                icon: '<i class="mc-iconfont">&#xe7b6;</i>',
                nextTip: '下一步，设置单元',
                subs: [{
                        label: '营销场景',
                        icon: '<i class="mc-iconfont">&#xe7be;</i>',
                        view: 'mx-main/__test__/inner'
                    }, {
                        label: '基本信息',
                        icon: '<i class="mc-iconfont">&#xe612;</i>',
                        view: 'mx-main/__test__/inner'
                    }]
            }, {
                label: '设置单元',
                prevTip: '返回计划',
                nextTip: '下一步，添加创意',
                icon: '<i class="mc-iconfont">&#xe7b5;</i>',
                sideTip: "<div>\u5B9D\u8D1D\u56FE\u7247\uFF1A</div>\n<div>1\u3001\u672C\u5730\u4E0A\u4F20\u56FE\u7247\u65F6\u4E0D\u5141\u8BB8\u4E0A\u4F20\u4E0E\u5B9D\u8D1D\u65E0\u5173\u7684\u56FE\u7247\uFF1B</div>\n<div>2\u3001\u4E3A\u4FDD\u8BC1\u6295\u653E\u6548\u679C\uFF0C\u8BF7\u9009\u62E9\u6D45\u8272\u80CC\u666F\u3001\u65E0\u725B\u76AE\u7663\u3001\u65E0\u8FB9\u6846\u6C34\u5370\u3001\u5C11\u6587\u5B57\u3001\u6E05\u6670\u5EA6\u9AD8\u7684\u521B\u610F\uFF1B</div>\n<div>3\u3001\u5EFA\u8BAE\u6DFB\u52A0\u591A\u5F20\u521B\u610F\uFF0C\u6D4B\u8BD5\u70B9\u51FB\u6548\u679C\uFF0C\u62E9\u4F18\u9009\u62E9\u3002</div>",
                subs: [{
                        label: '推广宝贝',
                        icon: '<i class="mc-iconfont">&#xe613;</i>',
                        view: 'mx-main/__test__/inner'
                    }, {
                        label: '出价方式',
                        icon: '<i class="mc-iconfont">&#xe731;</i>',
                        view: 'mx-main/__test__/inner'
                    }]
            }, {
                id: 'complete',
                label: '完成创建',
                icon: '<i class="mc-iconfont">&#xe613;</i>',
                subs: [{
                        label: '完成标题1',
                        icon: '<i class="mc-iconfont">&#xe705;</i>',
                        view: 'mx-main/__test__/inner',
                        sideView: 'mx-main/__test__/tip'
                    }, {
                        label: '完成标题2',
                        icon: '<i class="mc-iconfont">&#xe664;</i>',
                        view: 'mx-main/__test__/inner',
                        sideView: 'mx-main/__test__/tip'
                    }, {
                        label: '完成标题3',
                        icon: '<i class="mc-iconfont">&#xe767;</i>',
                        view: 'mx-main/__test__/inner',
                        sideView: 'mx-main/__test__/tip'
                    }]
            }, {
                label: '添加创意',
                nextTip: '下一步，完成',
                icon: '<i class="mc-iconfont">&#xe64c;</i>',
                subs: [{
                        label: '创意内容',
                        icon: '<i class="mc-iconfont">&#xe7be;</i>',
                        view: 'mx-main/__test__/inner'
                    }]
            }];
        stepInfos[0].locked = true;
        stepInfos[1].locked = true;
        stepInfos[4].locked = true;
        this.updater.digest({
            stepInfos: stepInfos,
            childInfos: {}
        });
    },
    'submit<next>': function (e) {
        // e.stepIndex：当前第几步
        // e.childInfos：当前步骤需要提交的信息
    }
});

});