/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
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
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $p += '<h2 mxs="_P:_">mx-tree</h2><div mxv mxa="_P:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix" style="margin-left:30px;"><div mxv="list" mx-view="mx-tree/index?list=' + ($expr = '<%@list%>', $i($$ref, list)) + '"></div></div><div mxs="_P:a" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-tree list="&lt;%@list%&gt;"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: [{\n                id: 0,\n                pId: \'\',\n                text: \'abc\'\n            }, {\n                id: \'0-0\',\n                pId: \'\',\n                text: \'abc-abc\'\n            }, {\n                id: 1,\n                pId: 0,\n                text: \'def\'\n            }, {\n                id: 2,\n                pId: 1,\n                text: \'aaa\'\n            }, {\n                id: 3,\n                pId: 2,\n                text: \'bbb\'\n            }]\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            list: [{
                    id: 0,
                    pId: '',
                    text: 'abc'
                }, {
                    id: '0-0',
                    pId: '',
                    text: 'abc-abc'
                }, {
                    id: 1,
                    pId: 0,
                    text: 'def'
                }, {
                    id: 2,
                    pId: 1,
                    text: 'aaa'
                }, {
                    id: 3,
                    pId: 2,
                    text: 'bbb'
                }, {
                    id: 4,
                    pId: 2,
                    text: 'bbb'
                }, {
                    id: 5,
                    pId: 1,
                    text: 'aaa'
                }, {
                    id: 6,
                    pId: 1,
                    text: 'aaa'
                }]
        });
    }
});

});