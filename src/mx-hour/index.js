/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/index",["magix","$","mx-dragselect/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dragselect/index");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("__mx-hour_index_","/* @dependent: ./index.less */\n.__mx-hour_index_-hour {\n  padding: 0;\n  height: 38.4px;\n  overflow: hidden;\n  cursor: default;\n  min-width: 1px;\n}\n.__mx-hour_index_-opacity-hide {\n  opacity: 0;\n}\n.__mx-hour_index_-active {\n  background-color: #f37b63;\n}\n.__mx-hour_index_-no-border {\n  border: none;\n}\n.__mx-hour_index_-right-border {\n  border-right: solid 1px #e6e6e6;\n}\n");
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
} ; var $g = '', $_temp, $p = '', noBorder = $$.noBorder; var $expr, $art, $line; try {
    $p += '<tr mxa="_%:_" mx-change="' + $viewId + '@{show}()" mx-dragbegin="' + $viewId + '@{begin}()" mx-dragfinish="' + $viewId + '@{end}()" mx-view="mx-dragselect/index">';
    $expr = '<%for (var ii = 0; ii < 24; ii++) {%>';
    for (var ii = 0; ii < 24; ii++) {
        ;
        $p += '<td class="__mx-hour_index_-hour';
        $expr = '<%if (noBorder) {%>';
        if (noBorder) {
            ;
            $p += ' __mx-hour_index_-no-border';
            $expr = '<%if (ii < 23) {%>';
            if (ii < 23) {
                ;
                $p += ' __mx-hour_index_-right-border';
                $expr = '<%}%>';
            }
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" data-hour="' + ($expr = '<%=ii%>', $e(ii)) + '"><span mxa="_%:a" class="__mx-hour_index_-opacity-hide">' + ($expr = '<%!(\'0\' + ii).slice(-2)%>', $n(('0' + ii).slice(-2))) + '</span></td>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-hour/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{range}'] = extra.range;
        me['@{noBorder}'] = extra.border == 'no';
    },
    assign: function () {
        return false;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            noBorder: me['@{noBorder}']
        });
        var ownerNode = $('#' + me.id);
        me['@{owner.node}'] = ownerNode;
        me['@{hours}'] = ownerNode.find('.__mx-hour_index_-hour');
        if (me['@{range}']) {
            me.val(me['@{range}']);
        }
    },
    val: function (str) {
        var me = this;
        var hours = me['@{hours}'];
        if (str || str === '') {
            var dragSelected_1 = {};
            hours.each(function (idx, item) {
                item = $(item);
                if (str.charAt(idx) == '1') {
                    dragSelected_1[idx] = 1;
                    item.addClass('__mx-hour_index_-active');
                }
                else {
                    item.removeClass('__mx-hour_index_-active');
                }
            });
            me['@{drag.selected}'] = dragSelected_1;
        }
        else {
            str = [];
            hours.each(function (idx, item) {
                item = $(item);
                if (idx < 24)
                    str.push(item.hasClass('__mx-hour_index_-active') ? 1 : 0);
            });
            str = str.join('');
        }
        return str;
    },
    '@{fire.event}': function () {
        var me = this;
        var startValue = me['@{start.value.temp}'];
        var current = me.val();
        if (startValue != current) {
            me['@{owner.node}'].val(current).trigger({
                type: 'change',
                range: current
            });
        }
    },
    '@{show}<change,click>': function (e) {
        e.stopPropagation();
        var node = $(e.node);
        var me = this;
        var hour = node.data('hour');
        var dragSelected = me['@{drag.selected}'];
        var dragTemp = me['@{drag.temp}'];
        if (e.action == 'add') {
            if (dragSelected[hour]) {
                node.removeClass('__mx-hour_index_-active');
                delete dragSelected[hour];
                if (e.mode == 'drag') {
                    dragTemp[hour] = 1;
                }
            }
            else {
                node.addClass('__mx-hour_index_-active');
                dragSelected[hour] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[hour];
                }
            }
        }
        else if (e.action == 'remove') {
            if (dragTemp[hour]) {
                node.addClass('__mx-hour_index_-active');
                dragSelected[hour] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[hour];
                }
            }
            else {
                node.removeClass('__mx-hour_index_-active');
                delete dragSelected[hour];
                if (e.mode == 'drag') {
                    dragTemp[hour] = 1;
                }
            }
        }
        if (e.mode == 'click') {
            me['@{fire.event}']();
        }
    },
    '@{begin}<dragbegin>': function (e) {
        e.stopPropagation();
        var me = this;
        me['@{start.value.temp}'] = me.val();
        me['@{drag.temp}'] = {};
    },
    '@{end}<dragfinish>': function (e) {
        e.stopPropagation();
        var me = this;
        me['@{fire.event}']();
        delete me['@{drag.temp}'];
    }
}, {
    improve: function (str) {
        if (!str) {
            str = '';
        }
        var start = 0;
        var end = 24;
        while (start < end) {
            if (!str.charAt(start)) {
                str += '0';
            }
            start++;
        }
        return str;
    }
});

});