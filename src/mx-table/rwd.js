/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/rwd",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_K","._fg{width:24px}._fh{width:12px;background-color:#ccc;color:#e6e6e6;cursor:pointer}._fh:hover{background-color:#f96447}._fi{font-size:12px}._fj{-webkit-transform:scaleX(-1);transform:scaleX(-1)}._fk{padding-right:40px}");
var html = "<div class=\"_af _fg _aj\"><div class=\"_fh _aa\" mx-click=\"\u001f\u001e__fT()\"><i class=\"__ _fi\">&#xe61e;</i></div><div class=\"_fh _ab\" mx-click=\"\u001f\u001e__fU()\"><i class=\"__ _fi _fj\">&#xe61e;</i></div></div>";
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['__fm'] = ((extra.rwdRange || [2, -1]) + '').split(',');
        me['__fJ'] = +extra.rwdLimit || 4;
        me['__fK'] = +extra.rwdCurrent || 1;
        $('#' + me.id).addClass('_ag');
    },
    '__fC': function () {
        var me = this;
        var table = $('#' + me.id).find('table');
        var thead = table.find('thead');
        table.css({
            borderCollapse: 'inherit'
        });
        var ths = thead.find('>tr>th');
        var rows = table.find('>tbody>tr');
        me['__fL'] = ths;
        me['__fM'] = rows;
        me['__fN'] = table;
    },
    '__fQ': function () {
        var me = this;
        var ths = me['__fL'];
        var c = me['__fK'];
        var r = me['__fm'];
        var l = me['__fJ'];
        var min = +r[0];
        var max = ths.length + (+r[1]) - 1;
        var start = min + (c - 1) * l;
        var end = Math.min(max, min + c * l - 1);
        var rows = me['__fM'];
        me['__fO'] = Math.ceil((max - min + 1) / l);
        for (var i = min; i <= max; i++) {
            var th = ths.eq(i);
            if (i >= start && i <= end) {
                if (i == end) {
                    th.addClass('_fk');
                    me['__fP'] = th;
                }
                else {
                    th.removeClass('_fk');
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
    '__fS': function () {
        var me = this, ctrl;
        if (!me['__fR']) {
            ctrl = $(me.wrapEvent(html)).insertBefore(me['__fN']);
            me['__fR'] = ctrl;
        }
        ctrl = me['__fR'];
        var last = me['__fP'];
        var height = last.outerHeight();
        var offset = last.offset();
        ctrl.css({
            height: height,
            lineHeight: height + 'px'
        }).offset({
            left: offset.left + last.outerWidth() - 24,
            top: offset.top
        });
        var c = me['__fK'];
        var p = me['__fO'];
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
        me['__fC']();
        me['__fQ']();
        me['__fS']();
    },
    '__fT<click>': function () {
        var me = this;
        var c = me['__fK'];
        if (c > 1) {
            me['__fK']--;
            me['__fQ']();
            me['__fS']();
        }
    },
    '__fU<click>': function () {
        var me = this;
        var c = me['__fK'];
        var pages = me['__fO'];
        if (c < pages) {
            me['__fK']++;
            me['__fQ']();
            me['__fS']();
        }
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (Magix.inside(e.vId, me.owner.pId)) {
            clearTimeout(me['__fV']);
            me['__fV'] = setTimeout(function () {
                me['__fC']();
                me['__fQ']();
                me['__fS']();
            }, 0);
        }
    },
    '$doc<navslidend>': function () {
        this['__fS']();
    },
    '$win<resize>': function () {
        this['__fS']();
    }
});

});