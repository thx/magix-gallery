/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/range",["magix","mx-gtip/index","../range","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../range");
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
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical; var $expr, $art, $line; try {
    $p += '<h2 mxs="_J:_">mx-slider.range</h2><h3 mxs="_J:a">默认情形</h3><div mxs="_J:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/range?max=200&min=100&value=30%2C150&step=0.05"></div></div><div mxs="_J:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="30,150"\n    step="0.05"\n    class="fl"/&gt;</pre></div><h3 mxs="_J:d" class="__mx-style_index_-mt30">垂直</h3><div mxa="_J:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&vertical=' + ($expr = '<%!$eu(vertical)%>', $eu(vertical)) + '"></div></div><div mxs="_J:e" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="30,150"\n    step="0.05"\n    vertical="true"\n    class="fl"/&gt;</pre></div><h3 mxs="_J:f" class="__mx-style_index_-mt30">禁用</h3><div mxs="_J:g" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-slider/range?max=200&min=100&value=30%2C150&step=0.05&disabled=true"></div></div><div mxs="_J:h" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="30,150"\n    step="0.05"\n    disabled="true"\n    class="fl"/&gt;</pre></div><h3 mxs="_J:i" class="__mx-style_index_-mt30">响应change事件</h3><div mxs="_J:j" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'showValue()" class="__mx-style_index_-fl" mx-view="mx-slider/range?max=500&min=200&value=210%2C350&step=10"></div></div><div mxs="_J:k" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-slider.range\n    max="500"\n    min="200"\n    value="210,350"\n    step="10"\n    mx-change="showValue()"\n    class="fl"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'showValue&lt;change&gt;\' (e) {\n        this.gtipRT(\'value:\' + e.value);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-slider/__test__/range.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            vertical: true
        });
    },
    'showValue<change>': function (e) {
        this.gtipRT('value:' + e.value);
    }
});

});