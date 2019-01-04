/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/rwd",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryaA","._zs_gallerymk{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryml{width:24px}._zs_galleryml ._zs_gallerymm{width:12px;background-color:#ccc;color:#fff;cursor:pointer}._zs_galleryml ._zs_gallerymm:hover{background-color:#4d7fff}._zs_gallerymn{padding-right:40px}");
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
} ; var $g = '', $_temp, $p = ''; $p += '<div mxs="_zs_galleryd7:_" class="pa _zs_galleryml unselectable"><div class="_zs_gallerymm fl" mx-click="' + $viewId + '__eu()"><i class="mc-iconfont fontsize-12">&#xe61e;</i></div><div class="_zs_gallerymm fr" mx-click="' + $viewId + '__ev()"><i class="mc-iconfont fontsize-12 rotate180">&#xe61e;</i></div></div>'; return $p; };
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['__ej'] = ((extra.rwdRange || [2, -1]) + '').split(',');
        me['__ek'] = +extra.rwdLimit || 4;
        me['__el'] = +extra.rwdCurrent || 1;
        $('#' + me.id).css({
            position: 'relative'
        });
    },
    '__eb': function () {
        var me = this;
        var table = $('#' + me.id).find('table');
        var thead = table.find('thead');
        table.css({
            borderCollapse: 'inherit'
        });
        var ths = thead.find('>tr>th');
        var rows = table.find('>tbody>tr');
        me['__em'] = ths;
        me['__en'] = rows;
        me['__eo'] = table;
    },
    '__er': function () {
        var me = this;
        var ths = me['__em'];
        var c = me['__el'];
        var r = me['__ej'];
        var l = me['__ek'];
        var min = +r[0];
        var max = ths.length + (+r[1]) - 1;
        var start = min + (c - 1) * l;
        var end = Math.min(max, min + c * l - 1);
        var rows = me['__en'];
        me['__ep'] = Math.ceil((max - min + 1) / l);
        for (var i = min; i <= max; i++) {
            var th = ths.eq(i);
            if (i >= start && i <= end) {
                if (i == end) {
                    th.addClass('_zs_gallerymn');
                    me['__eq'] = th;
                }
                else {
                    th.removeClass('_zs_gallerymn');
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
    '__et': function () {
        var me = this, ctrl;
        if (!me['__es']) {
            var tmpl = $.isFunction(html) ? html(null, me.id) : html;
            if (me.wrapEvent) {
                tmpl = me.wrapEvent(tmpl);
            }
            ctrl = $(tmpl).insertBefore(me['__eo']);
            me['__es'] = ctrl;
        }
        ctrl = me['__es'];
        var last = me['__eq'];
        var height = last.outerHeight();
        var offset = last.offset();
        ctrl.css({
            height: height,
            lineHeight: height + 'px'
        }).offset({
            left: offset.left + last.outerWidth() - 24,
            top: offset.top
        });
        var c = me['__el'];
        var p = me['__ep'];
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
        me['__eb']();
        me['__er']();
        me['__et']();
    },
    '__eu<click>': function () {
        var me = this;
        var c = me['__el'];
        if (c > 1) {
            me['__el']--;
            me['__er']();
            me['__et']();
        }
    },
    '__ev<click>': function () {
        var me = this;
        var c = me['__el'];
        var pages = me['__ep'];
        if (c < pages) {
            me['__el']++;
            me['__er']();
            me['__et']();
        }
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (Magix.inside(e.vId, me.owner.pId)) {
            clearTimeout(me['__ew']);
            me['__ew'] = setTimeout(function () {
                me['__eb']();
                me['__er']();
                me['__et']();
            }, 0);
        }
    },
    '$doc<navslidend>': function () {
        this['__et']();
    },
    '$win<resize>': function () {
        this['__et']();
    }
});

});