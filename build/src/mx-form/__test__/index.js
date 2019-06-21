/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/index",["magix","__test__/subs","mx-title/second","./17"],(require,exports,module)=>{
/*Magix*/
require("__test__/subs");
require("mx-title/second");
require("./17");
var Magix = require("magix");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycc:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\'\n    }, {\n        name: \'支持双向绑定的组件\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\'        }, {            name: \'支持双向绑定的组件\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo' }, { name: '支持双向绑定的组件', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E5%AE%8C%E6%95%B4%E8%A1%A8%E5%8D%95%E5%BA%94%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycc:_" class="clearfix mb20"><div mx-view="mx-form/__test__/17"></div></div><div id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=%E6%94%AF%E6%8C%81%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%9A%84%E7%BB%84%E4%BB%B6"></div><div mxs="_zs_gallerycc:a" class="lh22 mb40"><div>1. dropdown</div><div class="pl15"><div>1.1 单选</div><div>1.2 多选（传入数组即为数组，传入逗号分隔即为逗号分隔，默认逗号分隔）</div></div><div>2. 日历</div><div class="pl15"><div>1.1 单日</div><div>1.2 时间段（开始时间，结束时间，是否对比）</div></div><div>3. 开关</div><div>4. mx-taginput：标签选择</div><div>5. mx-cascade：级联选择</div><div>6. mx-time：时分秒选择</div><div>7. mx-suggest：可选项提示</div><div>8. mx-color：颜色选择</div><div>9. mx-tree：树状结构</div><div>10. mx-tabs：底边线tab切换</div><div>11. mx-tabs.box：盒状分组</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        that.updater.digest({
            viewId: that.id
        });
    }
});

});