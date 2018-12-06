/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-rating/__test__/index",["magix","$","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,$,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var GTip = require("mx-gtip/index");
var Tips = ['非常不好', '很不好', '一般般', '很好', '非常好'];
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
} ; var $g = '', $_temp, $p = '', ratingValue = $$.ratingValue, ratingMsg = $$.ratingMsg; var $expr, $art, $line; try {
    $p += '<h2 mxs="_|:_">mx-rating</h2><h3 mxs="_|:a">默认情形</h3><div mxs="_|:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-rating/index"></div></div><div mxs="_|:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-rating /&gt;</pre></div><h3 mxs="_|:d" class="__mx-style_index_-mt30">设置星星个数</h3><div mxs="_|:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-rating/index?number=10&value=6"></div></div><div mxs="_|:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-rating number="10" value="6" /&gt;</pre></div><h3 mxs="_|:g" class="__mx-style_index_-mt30">只读</h3><div mxs="_|:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-rating/index?number=10&readonly=true&value=6"></div></div><div mxs="_|:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-rating number="10" readonly="true" value="6" /&gt;</pre></div><h3 mxs="_|:j" class="__mx-style_index_-mt30">响应事件</h3><div mxa="_|:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button mxs="_|:k" type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr10 __mx-style_index_-fl" mx-click="' + $viewId + 'clear()">清除评分</button><div mx-change="' + $viewId + 'showValue()" mx-itemover="' + $viewId + 'over()" mx-itemout="' + $viewId + 'out()" class="__mx-style_index_-fl __mx-style_index_-mr10" mx-view="mx-rating/index?value=' + ($expr = '<%!$eu(ratingValue)%>', $eu(ratingValue)) + '"></div><span>' + ($expr = '<%=ratingMsg%>', $e(ratingMsg)) + '</span></div><div mxs="_|:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button\n    type="button"\n    class="btn btn-brand mr10 fl"\n    mx-click="clear()"&gt;清除评分&lt;/button&gt;\n&lt;mx-rating\n    value="&lt;%=ratingValue%&gt;"\n    mx-change="showValue()"\n    mx-itemover="over()"\n    mx-itemout="out()"\n    class="fl mr10" /&gt;\n&lt;span&gt;&lt;%=ratingMsg%&gt;&lt;/span&gt;</pre><div>Javascipt Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet GTip = require(\'mx-gtip/index\');\nlet Tips = [\'非常不好\', \'很不好\', \'一般般\', \'很好\', \'非常好\'];\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            ratingMsg: \'\',\n            ratingValue: 0\n        });\n    },\n    \'over&lt;itemover&gt;\'(e) {\n        let tip = Tips[e.value - 1];\n        this.updater.digest({\n            ratingMsg: tip\n        });\n    },\n    \'out&lt;itemout&gt;\'(e) {\n        let tip = Tips[e.value - 1] || \'\';\n        this.updater.digest({\n            ratingMsg: tip\n        });\n    },\n    \'showValue&lt;change&gt;\'(e) {\n        this.gtipRT(\'当前值：\' + e.value);\n        this.updater.set({\n            ratingValue: e.value\n        });\n    },\n    \'clear&lt;click&gt;\'() {\n        this.updater.digest({\n            ratingMsg: \'\',\n            ratingValue: 0\n        });\n    }\n});\n</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-rating/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    init: function () {
        this.$ratingValue = 0;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            ratingMsg: '',
            ratingValue: me.$ratingValue
        });
    },
    'over<itemover>': function (e) {
        var tip = Tips[e.value - 1];
        this.updater.digest({
            ratingMsg: tip,
            ratingValue: e.value
        });
    },
    'out<itemout>': function () {
        var tip = Tips[this.$ratingValue - 1] || '';
        this.updater.digest({
            ratingMsg: tip,
            ratingValue: this.$ratingValue
        });
    },
    'showValue<change>': function (e) {
        this.gtipRT('当前值：' + e.value);
        this.updater.digest({
            ratingValue: this.$ratingValue = e.value
        });
    },
    'clear<click>': function () {
        this.updater.digest({
            ratingMsg: '',
            ratingValue: 0
        });
    }
});

});