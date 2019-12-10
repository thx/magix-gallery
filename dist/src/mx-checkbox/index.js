/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

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
} ; var $g = '', $_temp, $p = '', indeterminate = $$.indeterminate, checked = $$.checked, disabled = $$.disabled, name = $$.name, value = $$.value; var $expr, $art, $line; try {
    $p += '<input type="checkbox" class="';
    $line = 2;
    $art = 'if indeterminate';
    ;
    $expr = '<%if (indeterminate) {%>';
    if (indeterminate) {
        ;
        $p += ' indeterminate ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 3;
    $art = 'if checked';
    ;
    $expr = '<%if (checked) {%>';
    if (checked) {
        ;
        $p += ' checked="checked" ';
        $line = 3;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 4;
    $art = 'if disabled';
    ;
    $expr = '<%if (disabled) {%>';
    if (disabled) {
        ;
        $p += ' disabled="disabled" ';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' name="';
    $line = 5;
    $art = '=name';
    ;
    $p += ($expr = '<%=name%>', $e(name)) + '" value="';
    $line = 6;
    $art = '=value';
    ;
    $p += ($expr = '<%=value%>', $e(value)) + '" mx-change="' + $viewId + '@{change}()"/>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        //初始化时保存一份当前数据的快照
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var checked = (extra.checked + '') === 'true';
        var disabled = (extra.disabled + '') === 'true';
        var indeterminate = (extra.indeterminate + '') === 'true';
        that.updater.set({
            checked: checked,
            disabled: disabled,
            indeterminate: indeterminate,
            name: extra.name || '',
            value: extra.value || ''
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest({});
    },
    '@{change}<change>': function (e) {
        this.updater.digest({
            checked: e.target.checked,
            indeterminate: false
        });
    }
});

});