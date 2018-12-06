/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("../index");
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
    $p += '<h2 mxs="_w:_">mx-gtip</h2><div mxs="_w:a" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button class="__mx-style_index_-btn __mx-style_index_-fl" mx-click="' + $viewId + 'rt()">右上角提示</button><button class="__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10" mx-click="' + $viewId + 'rb()">右下角提示</button><button class="__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10" mx-click="' + $viewId + 'lt();">左上角提示</button><button class="__mx-style_index_-btn __mx-style_index_-fl __mx-style_index_-ml10" mx-click="' + $viewId + 'lb();">左下角提示</button></div><div mxs="_w:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button class="btn fl" mx-click="rt()"&gt;右上角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="rb()"&gt;右下角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="lt();"&gt;左上角提示&lt;/button&gt;\n    &lt;button class="btn fl ml10" mx-click="lb();"&gt;左下角提示&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet GTip = require(\'app/gallery/mx-gtip/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'rt&lt;click&gt;\' () {\n        this.gtipRT(\'右上角，消息内容\' + Date.now());\n    },\n    \'rb&lt;click&gt;\' () {\n        this.gtipRB(\'右下角，消息内容\' + Date.now());\n    },\n    \'lt&lt;click&gt;\' () {\n        this.gtipLT(\'左上角，消息内容\' + Date.now());\n    },\n    \'lb&lt;click&gt;\' () {\n        this.gtipLB(\'左下角，消息内容\' + Date.now());\n    },\n    \'rtt&lt;click&gt;\' (e) {\n        this.gtipRT(\'右上角，消息内容\' + Date.now(), e.params.s * 1000);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-gtip/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'rt<click>': function () {
        this.gtipRT('右上角，消息内容' + Date.now());
    },
    'rb<click>': function () {
        this.gtipRB('右下角，消息内容' + Date.now());
    },
    'lt<click>': function () {
        this.gtipLT('左上角，消息内容' + Date.now());
    },
    'lb<click>': function () {
        this.gtipLB('左下角，消息内容' + Date.now());
    },
    'rtt<click>': function (e) {
        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);
    }
});

});