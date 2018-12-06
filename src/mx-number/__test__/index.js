/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-number/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
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
    $p += '<h2 mxs="_C:_">mx-number</h2><h3 mxs="_C:a">默认情形</h3><div mxv mxa="_C:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxs="_C:b" class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index"></div><input mxs="_C:c" class="__mx-style_index_-input"/><br mxs="_C:d"/>下面这个是原生的number，用以对比<br mxs="_C:d"/><native.input mxs="_C:e" type="number" class="__mx-style_index_-input"/><div mxs="_C:f" style="color:#aaa;">mx-number比原生多了按着shift键的变化比率，这个变化比率是可配置的<br/>原生可以输入多个点小数点“.”和多个科学计数法“e”，而只有合法的数字才能取出值，否则会取到空字符串</div></div><div mxs="_C:g" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-number /&gt;</pre></div><h3 mxs="_C:h" class="__mx-style_index_-mt30">最大值、最小值及step</h3><div mxs="_C:i" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index?max=10&min=-10&step=0.5&ratio=4&value=8.5"></div></div><div mxs="_C:j" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-number\n    max="10"\n    min="-10"\n    step="0.5"\n    value="8.5" /&gt;</pre></div><h3 mxs="_C:k" class="__mx-style_index_-mt30">禁用</h3><div mxs="_C:l" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index?disabled=true&value=20"></div></div><div mxs="_C:m" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-number disabled="true" value="20" /&gt;</pre></div><h3 mxs="_C:n" class="__mx-style_index_-mt30">响应事件</h3><div mxs="_C:o" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'show()" class="__mx-style_index_-input __mx-style_index_-pr" mx-view="mx-number/index?max=10&min=-10&step=0.5&value=8.5"></div></div><div mxs="_C:p" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-number\n    max="10"\n    min="-10"\n    step="0.5"\n    value="8.5"\n    mx-change="show()" /&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'show&lt;change&gt;\' (e) {\n        this.gtipRT(\'当前值：\' + e.eventTarget.value);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-number/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'show<change>': function (e) {
        this.gtipRT('当前值：' + e.eventTarget.value);
    }
});

});