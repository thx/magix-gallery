/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/desc",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerybm:_" class="pr20"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="100">可配参数</th><th width="200">说明</th><th width="100">类型</th><th width="120">默认值</th></tr></thead><tbody><tr><td>fields</td><td><pre>\n指标数组，格式如下：[{\n    text: \'指标文案\',\n    value: \'跟后台交互的指标value值\',\n    tip: \'指标提示文案\'\n}]</pre></td><td>array</td><td class="word-break"></td></tr><tr><td>defaults</td><td>默认指标value值的数组，必填</td><td>array</td><td class="word-break"></td></tr><tr><td>custom</td><td>当前指标类型，false（默认指标），true（自定义指标）</td><td>boolean</td><td class="word-break">false</td></tr><tr><td>customs</td><td>自定义指标value值的数组，例如["cost"]</td><td>array</td><td class="word-break"></td></tr><tr><td>limit</td><td>指标选中上限，不传不限制选择个数</td><td>number</td><td class="word-break"></td></tr><tr><td>sortable</td><td>是否需要排序</td><td>boolean</td><td class="word-break">false</td></tr></tbody></table></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/__test__/desc.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});