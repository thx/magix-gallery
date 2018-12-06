/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-pagination/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', page = $$.page; var $expr, $art, $line; try {
    $p += '<h2 mxs="_D:_">mx-pagination</h2><h3 mxs="_D:a">完整模式</h3><div mxa="_D:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-pagination/index?total=2000&step=3&page=' + ($expr = '<%!$eu(page)%>', $eu(page)) + '"></div><button mxs="_D:b" class="__mx-style_index_-btn" mx-click="' + $viewId + 'test()">test</button></div><div mxs="_D:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-pagination\n    total="2000"\n    step="3"\n    page="2"\n    class="fl"/&gt;</pre></div><h3 mxs="_D:d" class="__mx-style_index_-mt30">简单模式</h3><div mxs="_D:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-pagination/index?total=2000&step=5&simplify=true&page=15"></div></div><div mxs="_D:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-pagination\n    total="2000"\n    step="5"\n    simplify="true"\n    page="15"/&gt;</pre></div><h3 mxs="_D:g" class="__mx-style_index_-mt30">迷你模式</h3><div mxs="_D:h" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-view="mx-pagination/index?total=2000&step=5&mini=true&page=10"></div></div><div mxs="_D:i" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-pagination\n    total="2000"\n    step="5"\n    mini="true"\n    page="10"/&gt;</pre></div><h3 mxs="_D:j" class="__mx-style_index_-mt30">监听change事件</h3><div mxs="_D:k" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mx-change="' + $viewId + 'show()" mx-view="mx-pagination/index?total=2000&step=5&page=10"></div></div><div mxs="_D:l" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-pagination\n    total="2000"\n    step="5"\n    page="10"\n    mx-change="show()"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    \'show&lt;change&gt;\' (e) {\n        console.log(e.page, e.size);\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-pagination/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            page: 1
        });
    },
    'show<change>': function (e) {
        console.log(e.page, e.size);
    },
    'test<click>': function (e) {
        var page = this.updater.get('page');
        this.updater.digest({
            page: page + 1
        });
    }
});

});