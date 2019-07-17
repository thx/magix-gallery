/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', cur = $$.cur, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryd2:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryd2:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd2:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>包含输入框</div><div>输入框与滑动轴联动</div><div>step几位小数，其他数值同step保持一致</div><div>结果带提示文案</div></div></div><div mxa="_zs_galleryd2:b" class="mb20"><span mxs="_zs_galleryd2:a" class="color-9">当前值：</span><span>';
    $line = 14;
    $art = '=cur';
    ;
    $p += ($expr = '<%=cur%>', $e(cur)) + '</span></div><div mxa="_zs_galleryd2:c" class="pt20 pb20"><div mx-change="' + $viewId + 'showValue()" mx-view="mx-slider/index?width=160&needInput=true&max=200&min=100&value=';
    $line = 22;
    $art = '=cur';
    ;
    $p += ($expr = '<%!$eu(cur)%>', $eu(cur)) + '&step=0.05&tip=%E5%85%83"></div></div></div><div mxa="_zs_galleryd2:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd2:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd2:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 32;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd2:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-slider\n    width="160"\n    need-input="true"\n    max="200"\n    min="100"\n    value="&#123;&#123;=cur&#125;&#125;"\n    step="0.05"\n    tip="元"\n    mx-change="showValue()"/&gt;</pre></div><div mxa="_zs_galleryd2:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd2:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryd2:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 50;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryd2:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            cur: 120\n        &#125;);\n    &#125;,\n    \'showValue&lt;change&gt;\' (e) &#123;\n        // 操作结束的时候返回\n        // 当前值 e.value\n        this.updater.digest(&#123;\n            cur: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-slider/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            cur: 120
        });
    },
    'showValue<change>': function (e) {
        // 操作结束的时候返回
        this.updater.digest({
            cur: e.value
        });
    }
});

});