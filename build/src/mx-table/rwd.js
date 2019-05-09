/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/rwd",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-table_rwd_","._zs_gallery_mx-table_rwd_-wrap {\n  width: 24px;\n}\n._zs_gallery_mx-table_rwd_-wrap ._zs_gallery_mx-table_rwd_-arrow {\n  width: 12px;\n  background-color: #ccc;\n  color: #fff;\n  cursor: pointer;\n}\n._zs_gallery_mx-table_rwd_-wrap ._zs_gallery_mx-table_rwd_-arrow:hover {\n  background-color: var(--color-brand);\n}\n._zs_gallery_mx-table_rwd_-end {\n  padding-right: 40px;\n}\n");
var html = function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
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
    $p += '<div mxs="_zs_galleryet:_" class="pa _zs_gallery_mx-table_rwd_-wrap unselectable"><div class="_zs_gallery_mx-table_rwd_-arrow fl" mx-click="' + $viewId + '@{toPrev}()"><i class="mc-iconfont fontsize-12">&#xe61e;</i></div><div class="_zs_gallery_mx-table_rwd_-arrow fr" mx-click="' + $viewId + '@{toNext}()"><i class="mc-iconfont fontsize-12 rotate180">&#xe61e;</i></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/rwd.html';
    throw msg;
} return $p; };
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['@{rwd.range}'] = ((extra.rwdRange || [2, -1]) + '').split(',');
        me['@{rwd.limit}'] = +extra.rwdLimit || 4;
        me['@{rwd.current}'] = +extra.rwdCurrent || 1;
        $('#' + me.id).css({
            position: 'relative'
        });
    },
    '@{sync.vars}': function () {
        var me = this;
        var table = $('#' + me.id).find('table');
        var thead = table.find('thead');
        table.css({
            borderCollapse: 'inherit'
        });
        var ths = thead.find('>tr>th');
        var rows = table.find('>tbody>tr');
        me['@{thead.ths}'] = ths;
        me['@{tbody.trs}'] = rows;
        me['@{table}'] = table;
    },
    '@{ui.flush}': function () {
        var me = this;
        var ths = me['@{thead.ths}'];
        var c = me['@{rwd.current}'];
        var r = me['@{rwd.range}'];
        var l = me['@{rwd.limit}'];
        var min = +r[0];
        var max = ths.length + (+r[1]) - 1;
        var start = min + (c - 1) * l;
        var end = Math.min(max, min + c * l - 1);
        var rows = me['@{tbody.trs}'];
        me['@{pages}'] = Math.ceil((max - min + 1) / l);
        for (var i = min; i <= max; i++) {
            var th = ths.eq(i);
            if (i >= start && i <= end) {
                if (i == end) {
                    th.addClass('_zs_gallery_mx-table_rwd_-end');
                    me['@{thead.show.ths.last}'] = th;
                }
                else {
                    th.removeClass('_zs_gallery_mx-table_rwd_-end');
                }
                th.show();
            }
            else {
                th.hide();
            }
        }
        for (var j = rows.length; j--;) {
            var row = rows.eq(j);
            var tds = row.find('td');
            for (var i = min; i <= max; i++) {
                var td = tds.eq(i);
                if (i >= start && i <= end) {
                    td.show();
                }
                else {
                    td.hide();
                }
            }
        }
    },
    '@{ui.arrow}': function () {
        var me = this, ctrl;
        if (!me['@{ui.ctrl.arrow}']) {
            var tmpl = $.isFunction(html) ? html(null, me.id) : html;
            if (me.wrapEvent) {
                tmpl = me.wrapEvent(tmpl);
            }
            ctrl = $(tmpl).insertBefore(me['@{table}']);
            me['@{ui.ctrl.arrow}'] = ctrl;
        }
        ctrl = me['@{ui.ctrl.arrow}'];
        var last = me['@{thead.show.ths.last}'];
        var height = last.outerHeight();
        var offset = last.offset();
        ctrl.css({
            height: height,
            lineHeight: height + 'px'
        }).offset({
            left: offset.left + last.outerWidth() - 24,
            top: offset.top
        });
        var c = me['@{rwd.current}'];
        var p = me['@{pages}'];
        var children = ctrl.find('div');
        if (c == 1) {
            children.eq(0).hide();
        }
        else {
            children.eq(0).show();
        }
        if (c == p) {
            children.eq(1).hide();
        }
        else {
            children.eq(1).show();
        }
    },
    render: function () {
        var me = this;
        me['@{sync.vars}']();
        me['@{ui.flush}']();
        me['@{ui.arrow}']();
    },
    '@{toPrev}<click>': function () {
        var me = this;
        var c = me['@{rwd.current}'];
        if (c > 1) {
            me['@{rwd.current}']--;
            me['@{ui.flush}']();
            me['@{ui.arrow}']();
        }
    },
    '@{toNext}<click>': function () {
        var me = this;
        var c = me['@{rwd.current}'];
        var pages = me['@{pages}'];
        if (c < pages) {
            me['@{rwd.current}']++;
            me['@{ui.flush}']();
            me['@{ui.arrow}']();
        }
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (Magix.inside(e.vId, me.owner.pId)) {
            clearTimeout(me['@{ctrl.timer}']);
            me['@{ctrl.timer}'] = setTimeout(function () {
                me['@{sync.vars}']();
                me['@{ui.flush}']();
                me['@{ui.arrow}']();
            }, 0);
        }
    },
    '$doc<navslidend>': function () {
        this['@{ui.arrow}']();
    },
    '$win<resize>': function () {
        this['@{ui.arrow}']();
    }
});

});