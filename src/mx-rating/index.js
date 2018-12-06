/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-rating/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-rating_index_","/* @dependent: ./index.less */\n.__mx-rating_index_-star {\n  color: #999;\n  font-size: 20px;\n  padding: 0 1px;\n}\n.__mx-rating_index_-active {\n  color: #f96447;\n}\n");
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
} ; var $g = '', $_temp, $p = '', number = $$.number, value = $$.value, readonly = $$.readonly; var $expr, $art, $line; try {
    $expr = '<%for (var i = 0; i < number; i++) {%>';
    for (var i = 0; i < number; i++) {
        ;
        $p += '<i class="__mx-style_index_-mc-iconfont __mx-rating_index_-star';
        $expr = '<%if (i < value) {%>';
        if (i < value) {
            ;
            $p += ' __mx-rating_index_-active';
            $expr = '<%}%>';
        }
        ;
        $expr = '<%if (!readonly) {%>';
        if (!readonly) {
            ;
            $p += ' __mx-style_index_-cp';
            $expr = '<%}%>';
        }
        ;
        $p += '" mx-mouseover="' + $viewId + '@{hover}({i:' + ($expr = '<%!i%>', $n(i)) + '})" mx-mouseout="' + $viewId + '@{hover}()" mx-click="' + $viewId + '@{setValue}({i:' + ($expr = '<%!i%>', $n(i)) + '})">&#xe60f;</i>';
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-rating/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['@{number}'] = ops.number | 0 || 5;
        me['@{value}'] = ops.value | 0 || 0;
        me['@{readonly}'] = (ops.readonly + '') === 'true';
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            readonly: me['@{readonly}'],
            value: me['@{value}'],
            number: me['@{number}']
        });
    },
    '@{hover}<mouseover,mouseout>': function (e) {
        var me = this;
        if (me['@{readonly}'])
            return;
        clearTimeout(me['@{delay.timer}']);
        me['@{delay.timer}'] = setTimeout(me.wrapAsync(function () {
            var value = e.params.i + 1;
            me.updater.digest({
                value: e.type == 'mouseout' ? me['@{value}'] : value
            });
            if (e.type == 'mouseover') {
                me['@{owner.node}'].trigger({
                    type: 'itemover',
                    value: value
                });
            }
            else {
                me['@{owner.node}'].trigger({
                    type: 'itemout',
                    value: me['@{value}']
                });
            }
        }), 0);
    },
    '@{setValue}<click>': function (e) {
        var me = this;
        if (me['@{readonly}'])
            return;
        var value = e.params.i + 1;
        me['@{value}'] = value;
        me['@{owner.node}'].prop({ value: value }).trigger({
            type: 'change',
            value: value
        });
    }
});

});