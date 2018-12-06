/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/ctrl",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
var Magix = require("magix");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', value = $$.value; var $expr, $art, $line; try {
    $p += '<input ';
    $line = 1;
    $art = 'if value==\'0\'';
    ;
    $expr = '<%if (value == \'0\') {%>';
    if (value == '0') {
        ;
        $p += 'value="';
        $line = 1;
        $art = '=value';
        ;
        $p += ($expr = '<%=value%>', $e(value)) + '" ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' class="__mx-style_index_-input" mx-input="' + $viewId + '@{change}()"/>';
    $line = 2;
    $art = '=value';
    ;
    $p += ($expr = '<%=value%>', $e(value)) + '<textarea a="';
    $line = 3;
    $art = '=value';
    ;
    $p += ($expr = '<%=value%>', $e(value)) + '">';
    $line = 3;
    $art = '=value';
    ;
    $p += ($expr = '<%=value%>', $e(value)) + '</textarea><input type="checkbox" class="__mx-style_index_-switch" ';
    $line = 4;
    $art = 'if value!=\'0\'';
    ;
    $expr = '<%if (value != \'0\') {%>';
    if (value != '0') {
        ;
        $p += 'checked';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '/><table><tbody><tr><td>';
    $line = 5;
    $art = '=Math.random()';
    ;
    $p += ($expr = '<%=Math.random()%>', $e(Math.random())) + '</td></tr></tbody></table><video ';
    $line = 6;
    $art = 'if value==\'0\'';
    ;
    $expr = '<%if (value == \'0\') {%>';
    if (value == '0') {
        ;
        $p += ' controls ';
        $line = 6;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '></video>';
    $line = 7;
    $art = 'if value==\'0\'';
    ;
    $expr = '<%if (value == \'0\') {%>';
    if (value == '0') {
        ;
        $p += ' abc ';
        $line = 9;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxs="_V:_">good</div>';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<select mxv ';
    $line = 12;
    $art = 'if value==\'0\'';
    ;
    $expr = '<%if (value == \'0\') {%>';
    if (value == '0') {
        ;
        $p += ' disabled';
        $line = 12;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '><option mxs="_V:a">adf</option><option ';
    $line = 14;
    $art = 'if value==\'0\'';
    ;
    $expr = '<%if (value == \'0\') {%>';
    if (value == '0') {
        ;
        $p += ' selected';
        $line = 14;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>ex</option></select><table><tbody><tr><td>adf';
    $line = 16;
    $art = '=value';
    ;
    $p += ($expr = '<%=value%>', $e(value)) + '</td></tr></tbody></table>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/ctrl.html';
    throw msg;
} return $p; },
    ctor: function (extra) {
        console.log(extra);
    },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (data) {
        var me = this;
        var altered = me.updater.altered();
        me.updater.set(data);
        if (!altered)
            altered = me.updater.altered();
        if (altered) {
            me.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        console.log('render');
        this.updater.digest();
    },
    '@{change}<input>': function (e) {
        this.updater.digest({
            value: e.eventTarget.value
        });
    }
});

});