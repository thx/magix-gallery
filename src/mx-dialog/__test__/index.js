/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog*/
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Dialog = require("../index");
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
} ; var $g = '', $_temp, $p = '', inDialog = $$.inDialog; var $expr, $art, $line; try {
    $expr = '<%if (inDialog) {%>';
    if (inDialog) {
        ;
        $p += '<div mxs="_m:_" class="__mx-style_index_-dialog-header">加载view测试</div><div mxa="_m:_" class="__mx-style_index_-dialog-body">';
        $expr = '<%}%>';
    }
    ;
    $p += '<h2 mxs="_m:a">mx-dialog</h2><h3 mxs="_m:b">加载普通view</h3><div mxs="_m:c" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20" mx-click="' + $viewId + 'view()">view</button></div><div mxs="_m:d" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button type="button" class="btn btn-brand mr20" mx-click="view()"&gt;view&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Dialog = require(\'app/gallery/mx-dialog/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'view&lt;click&gt;\' () {\n        this.mxDialog(\'path/to/view\', {\n            width: 900\n        });\n    }\n});</pre></div>';
    $expr = '<%if (inDialog) {%>';
    if (inDialog) {
        ;
        $p += '</div><div mxs="_m:e" class="__mx-style_index_-dialog-footer">dialog footer</div>';
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/index.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'view<click>': function () {
        this.mxDialog('mx-dialog/__test__/index', {
            inDialog: true,
            width: 600
        });
    }
});

});