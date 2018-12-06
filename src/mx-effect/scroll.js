/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effect/scroll",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
var Magix = require("magix");
var $ = require("$");
var Panel = function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
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
    $p += '<div mxs="_!:_" class="__mx-effect_scroll_-panel"><div>0</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>-</div><div>.</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effect/scroll.html';
    throw msg;
} return $p; };
Magix.applyStyle("__mx-effect_scroll_","/* @dependent: ./index.less */\n.__mx-effect_scroll_-wrapper {\n  float: left;\n  height: 32px;\n  overflow: hidden;\n}\n.__mx-effect_scroll_-panel {\n  line-height: 32px;\n  transition: all 0.6s;\n}\n");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me.assign(extra);
    },
    assign: function (ops, ctrl) {
        var me = this;
        if (ctrl)
            ctrl.deep = 0;
        me['@{value}'] = ops.value;
        return true;
    },
    '@{add}': function () {
        var me = this;
        $('<div class="__mx-effect_scroll_-wrapper"/>').append(Panel).appendTo(me['@{owner.node}']);
    },
    '@{scroll}': function (exists, values) {
        var lh = parseInt(exists.css('line-height'), 10);
        for (var i = values.length; i--;) {
            var v = values[i];
            if (v == '-')
                v = 10;
            else if (v == '.')
                v = 11;
            exists.eq(i).css({
                transform: "translateY(-" + v * lh + "px)"
            });
        }
    },
    render: function () {
        var me = this;
        var exists = me['@{owner.node}'].find('>div');
        var values = (me['@{value}'] + '').split('');
        if (exists.length > values.length) {
            for (var i = exists.length - 1; i >= values.length; i--) {
                exists.eq(i).remove();
            }
        }
        else {
            for (var i = exists.length; i < values.length; i++) {
                me['@{add}']();
            }
        }
        exists = me['@{owner.node}'].find('>div>div');
        me['@{scroll}'](exists, values);
    }
});

});