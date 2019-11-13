/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/21",["magix","examples/example","$","mx-tabs/index"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-tabs/index");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', selected = $$.selected; var $expr, $art, $line; try {
    $p += '<div mx-change="' + $viewId + 'change()" mx-view="mx-tabs/index?list=';
    $line = 2;
    $art = '@[{\n        value: 22,\n        text: \'模块1\'\n    }, {\n        value: 23,\n        text: \'模块2\'\n    }]';
    ;
    $p += ($expr = '<%@[{            value: 22,            text: \'模块1\'        }, {            value: 23,            text: \'模块2\'        }]%>', $i($$ref, [{ value: 22, text: '模块1' }, { value: 23, text: '模块2' }])) + '&selected=';
    $line = 9;
    $art = '=selected';
    ;
    $p += ($expr = '<%!$eu(selected)%>', $eu(selected)) + '"></div><div mx-view="mx-table/examples/';
    $line = 11;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '?selected=';
    $line = 11;
    $art = '=selected';
    ;
    $p += ($expr = '<%!$eu(selected)%>', $eu(selected)) + '"><div mxs="_zs_gallerye4:_" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/21.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            selected: 22
        });
    },
    'change<change>': function (e) {
        var that = this;
        setTimeout(function () {
            that.updater.digest({
                selected: e.value
            });
        });
    }
});

});