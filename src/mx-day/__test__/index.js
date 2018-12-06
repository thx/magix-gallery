/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-day/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', years = $$.years; var $expr, $art, $line; try {
    $p += '<h2 mxs="_k:_">mx-day</h2><h3 mxs="_k:a">展示</h3><div mxv mxa="_k:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div mxv="years" style="width:800px" mx-change="' + $viewId + 'showDays()" mx-view="mx-day/index?years=' + ($expr = '<%@years%>', $i($$ref, years)) + '&selectedYear=2002&selectedDays=' + ($expr = '<%@{ \'2012\': \'0011,,0011,1100\' }%>', $i($$ref, { '2012': '0011,,0011,1100' })) + '"></div></div><div mxs="_k:b" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-day\n    years="&lt;%@years%&gt;"\n    selected-year="2002"\n    selected-days="&lt;%@{\'2012\':\'0011,,0011,1100\'}%&gt;"\n    style="width:800px"/&gt;</pre><div class="__mx-style_index_-pt10">Javascript Code:</div><pre mx-view="__test__/hl">let Magix = require(\'magix\');\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let me = this;\n        let years = [];\n        for (let i = 1996; i &lt; 2020; i++) {\n            years.push(i);\n        }\n        me.updater.digest({\n            years\n        });\n    }\n});</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-day/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        var years = [];
        for (var i = 1996; i < 2020; i++) {
            years.push(i);
        }
        me.updater.digest({
            days: { '2012': '0011,,0011,1100' },
            years: years
        });
    },
    'showDays<change>': function (e) {
        console.log(e.days);
    }
});

});