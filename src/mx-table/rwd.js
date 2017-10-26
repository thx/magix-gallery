/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-table/rwd',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
Magix.applyStyle("D",".eW{width:24px}.eX{width:12px;background-color:#ccc;color:#e6e6e6;cursor:pointer}.eX:hover{background-color:#6363e6}.eY{font-size:12px}.eZ{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.f_{padding-right:40px}");
var html = "<div class=\"ad eW ah\"><div class=\"eX Z\" mx-click=\"\u001f\u001e_eu()\"><i class=\"_ eY\">&#xe61e;</i></div><div class=\"eX a_\" mx-click=\"\u001f\u001e_ev()\"><i class=\"_ eY eZ\">&#xe61e;</i></div></div>";
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['_dM'] = ((extra.rwdRange || [2, -1]) + '').split(',');
        me['_ek'] = +extra.rwdLimit || 4;
        me['_el'] = +extra.rwdCurrent || 1;
        $('#' + me.id).addClass('ae');
    },
    '_ee': function () {
        var me = this;
        var table = $('#' + me.id).find('table');
        var thead = table.find('thead');
        table.css({
            borderCollapse: 'inherit'
        });
        var ths = thead.find('>tr>th');
        var rows = table.find('>tbody>tr');
        me['_em'] = ths;
        me['_en'] = rows;
        me['_eo'] = table;
    },
    '_er': function () {
        var me = this;
        var ths = me['_em'];
        var c = me['_el'];
        var r = me['_dM'];
        var l = me['_ek'];
        var min = +r[0];
        var max = ths.length + (+r[1]) - 1;
        var start = min + (c - 1) * l;
        var end = Math.min(max, min + c * l - 1);
        var rows = me['_en'];
        me['_ep'] = Math.ceil((max - min + 1) / l);
        for (var i = min; i <= max; i++) {
            var th = ths.eq(i);
            if (i >= start && i <= end) {
                if (i == end) {
                    th.addClass('f_');
                    me['_eq'] = th;
                }
                else {
                    th.removeClass('f_');
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
    '_et': function () {
        var me = this, ctrl;
        if (!me['_es']) {
            ctrl = $(me.wrapEvent(html)).insertBefore(me['_eo']);
            me['_es'] = ctrl;
        }
        ctrl = me['_es'];
        var last = me['_eq'];
        var height = last.outerHeight();
        var offset = last.offset();
        ctrl.css({
            height: height,
            lineHeight: height + 'px'
        }).offset({
            left: offset.left + last.outerWidth() - 24,
            top: offset.top
        });
        var c = me['_el'];
        var p = me['_ep'];
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
        me['_ee']();
        me['_er']();
        me['_et']();
    },
    '_eu<click>': function () {
        var me = this;
        var c = me['_el'];
        if (c > 1) {
            me['_el']--;
            me['_er']();
            me['_et']();
        }
    },
    '_ev<click>': function () {
        var me = this;
        var c = me['_el'];
        var pages = me['_ep'];
        if (c < pages) {
            me['_el']++;
            me['_er']();
            me['_et']();
        }
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (Magix.inside(e.vId, me.owner.pId)) {
            clearTimeout(me['_ew']);
            me['_ew'] = setTimeout(function () {
                me['_ee']();
                me['_er']();
                me['_et']();
            }, 0);
        }
    },
    '$doc<navslidend>': function () {
        this['_et']();
    },
    '$win<resize>': function () {
        this['_et']();
    }
});

});