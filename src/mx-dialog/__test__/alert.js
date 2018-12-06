/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/alert",["magix","../index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_l:_">mx-dialog</h2><h3 mxs="_l:a">alert与confirm</h3><div mxs="_l:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20" mx-click="' + $viewId + 'alert()">alert</button><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand __mx-style_index_-mr20" mx-click="' + $viewId + 'confirm()">confirm</button></div><div mxs="_l:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;button type="button" class="btn btn-brand mr20" mx-click="alert()"&gt;alert&lt;/button&gt;\n&lt;button type="button" class="btn btn-brand mr20" mx-click="confirm()"&gt;confirm&lt;/button&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nlet Dialog = require(\'app/gallery/mx-dialog/index\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'alert&lt;click&gt;\' () {\n        this.alert(\'xxx\', () => {\n            console.log(\'确定被点击\');\n        });\n    },\n    \'confirm&lt;click&gt;\' () {\n        this.confirm(\'xxx\', () => {\n            console.log(\'确定被点击\');\n        }, () => {\n            console.log(\'取消被点击\');\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/alert.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        var me = this;
        me.updater.digest();
    },
    'alert<click>': function () {
        this.alert('xxx', function () {
            console.log('确定被点击');
        });
    },
    'confirm<click>': function () {
        this.confirm('xxx', function () {
            console.log('确定被点击');
        }, function () {
            console.log('取消被点击');
        });
    }
});

});