/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-table/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
var $ = require('$');
var WidthReg = /width\s*:\s*(\d+)px/;
Magix.applyStyle("C",".eP{width:100%;overflow:auto;border:1px solid #e6e6e6;position:relative}.eQ,.eR thead,.eS{background-color:#fff}.eQ,.eS{position:absolute;top:1px;width:auto;z-index:1}.eT{border:none}.eQ{left:1px}.eS{right:1px}.eU,.eU thead{-webkit-box-shadow:6px 0 6px -4px rgba(0,0,0,.2);box-shadow:6px 0 6px -4px rgba(0,0,0,.2)}.eV,.eV thead{-webkit-box-shadow:-6px 0 6px -4px rgba(0,0,0,.2);box-shadow:-6px 0 6px -4px rgba(0,0,0,.2)}");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var range = extra.rwdRange;
        me['_dM'] = ((range || [2, -1]) + '').split(',');
        me['_dN'] = (extra.sticky + '') === 'true';
    },
    '_dO': function (className, start, end, ths, trs, id) {
        var table = $('<table id="' + id + '" class="' + className + '"><thead></thead><tbody></tbody></table>');
        var thead = table.find('thead');
        var tbody = table.find('tbody');
        var tr = $('<tr/>');
        for (var i = start; i < end; i++) {
            var th = ths.eq(i);
            $('<th fake="true"/>').css({
                height: th.outerHeight(),
                width: th.outerWidth()
            }).insertBefore(th);
            tr.append(th);
        }
        thead.append(tr);
        for (var i = 0; i < trs.length; i++) {
            tr = $('<tr/>');
            var tds = trs.eq(i).find('td');
            for (var i_1 = start; i_1 < end; i_1++) {
                var td = tds.eq(i_1);
                $('<td fake="true"/>').css({
                    height: td.outerHeight(),
                    width: td.outerWidth()
                }).insertBefore(td);
                tr.append(td);
            }
            tbody.append(tr);
        }
        return table;
    },
    '_dP': function (table, start, end, ths, trs) {
        var theadThs = table.find('thead>tr>th');
        var tbody = table.find('tbody');
        var tbodyTrs = tbody.find('tr');
        for (var i = start; i < end; i++) {
            var th = ths.eq(i);
            if (th.attr('fake') !== 'true') {
                $('<th fake="true"/>').css({
                    height: th.outerHeight(),
                    width: th.outerWidth()
                }).insertBefore(th);
                theadThs.eq(i - start).replaceWith(th);
            }
        }
        for (var i = 0; i < trs.length; i++) {
            var tds = trs.eq(i).find('td');
            var insert = i >= tbodyTrs.length;
            var tr = void 0;
            if (insert) {
                tr = $('<tr/>');
            }
            else {
                tr = tbodyTrs.eq(i);
            }
            var trTds = tr.find('td');
            for (var i_2 = start; i_2 < end; i_2++) {
                var td = tds.eq(i_2);
                if (td.attr('fake') !== 'true') {
                    $('<td fake="true"/>').css({
                        height: td.outerHeight(),
                        width: td.outerWidth()
                    }).insertBefore(td);
                    if (insert) {
                        tr.append(td);
                    }
                    else {
                        trTds.eq(i_2 - start).replaceWith(td);
                    }
                }
            }
            if (insert) {
                tbody.append(tr);
            }
        }
        for (var i = trs.length; i < tbodyTrs.length; i++) {
            tbodyTrs.eq(i).remove();
        }
    },
    '_dQ': function (table, ths, layoutWidth) {
        var width = 0;
        for (var i = ths.length; i--;) {
            var style = ths.eq(i).attr('style');
            var m = style.match(WidthReg);
            if (m) {
                width += parseInt(m[1]);
            }
        }
        if (width > layoutWidth) {
            table.css({
                width: width
            });
            table.find('thead').css({
                width: width
            });
            return false;
        }
        else {
            table.css({
                width: 'inherit'
            });
            table.find('thead').css({
                width: 'inherit'
            });
            return true;
        }
    },
    '_dZ': function () {
        var me = this;
        var node = $('#' + me.id);
        var table = me['_dR'] || node.find('table');
        var ths = me['_dS'] || table.find('thead>tr>th');
        var end = 0;
        delete me['_dR'];
        delete me['_dS'];
        if (!node.hasClass('eP')) {
            node.wrap('<div class="ae eR"></div>');
            node.addClass('eP');
            me['_dT'] = node;
            node.on('scroll', function () {
                me['_dU']();
            });
            me.on('destroy', function () {
                node.off('scroll');
            });
            table.addClass('eT');
            var tfoot = table.find('tfoot');
            if (tfoot.length) {
                $('<table class="ay"></table>')
                    .append(tfoot)
                    .insertAfter(node);
            }
            end = me['_dQ'](table, ths, node.width());
            me['_dV'] = ths.length;
        }
        else if (me['_dV'] != ths.length) {
            end = me['_dQ'](table, ths, node.width());
            me['_dV'] = ths.length;
        }
        if (end) {
            var t = me['_dW'];
            if (t) {
                t.remove();
                delete me['_dW'];
            }
            t = me['_dX'];
            if (t) {
                t.remove();
                delete me['_dX'];
            }
            return;
        }
        var r = me['_dM'];
        var left = +r[0];
        var right = +r[1];
        var trs = node.find('tbody>tr');
        for (var i = ths.length; i--;) {
            var th = ths.eq(i);
            if (th.attr('fake') !== 'true') {
                th.css({
                    height: th.outerHeight()
                });
            }
        }
        for (var i = trs.length; i--;) {
            var tr = trs.eq(i);
            var tds = tr.find('td');
            var td = tds.eq(0);
            td.css({
                height: td.outerHeight()
            });
            td = tds.last();
            td.css({
                height: td.outerHeight()
            });
        }
        if (me['_dX']) {
            me['_dP'](me['_dX'], 0, left, ths, trs);
        }
        else if (left) {
            var id = 't_' + me.id + '_left';
            var t = me['_dO'](table.attr('class') + ' eQ', 0, left, ths, trs, id);
            t.insertAfter(node);
            me['_dX'] = t;
            if (me['_dN']) {
                me.owner.mountVframe(id, 'mx-table/isticky');
            }
        }
        if (me['_dW']) {
            me['_dP'](me['_dW'], right + ths.length, ths.length, ths, trs);
        }
        else if (right) {
            var id = 't_' + me.id + '_right';
            var t = me['_dO'](table.attr('class') + ' eS', right + ths.length, ths.length, ths, trs, id);
            t.insertAfter(node);
            me['_dW'] = t;
            if (me['_dN']) {
                me.owner.mountVframe(id, 'mx-table/isticky');
            }
        }
        if (me['_dN'] && !me['_dY']) {
            me['_dY'] = 1;
            var id = table.attr('id');
            if (!id) {
                table.attr('id', id = Magix.guid('table_'));
            }
            me.owner.mountVframe(id, 'mx-table/isticky');
        }
    },
    '_dU': function () {
        var me = this;
        var scroll = me['_dT'];
        if (!scroll)
            return;
        var leftTable = me['_dX'];
        var rightTable = me['_dW'];
        if (scroll.prop('clientWidth') < scroll.prop('scrollWidth')) {
            if (leftTable) {
                var leftActive = 'eU';
                if (scroll.prop('scrollLeft') >= 10) {
                    if (!leftTable.hasClass(leftActive)) {
                        leftTable.addClass(leftActive);
                    }
                }
                else {
                    if (leftTable.hasClass(leftActive)) {
                        leftTable.removeClass(leftActive);
                    }
                }
            }
            if (rightTable) {
                var rightActive = 'eV';
                if (scroll.prop('scrollLeft') < scroll.prop('scrollWidth') - scroll.prop('clientWidth') - 10) {
                    if (!rightTable.hasClass(rightActive)) {
                        rightTable.addClass(rightActive);
                    }
                }
                else {
                    if (rightTable.hasClass(rightActive)) {
                        rightTable.removeClass(rightActive);
                    }
                }
            }
        }
    },
    render: function () {
        var me = this;
        me['_dZ']();
        me['_dU']();
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (e.vId == me.owner.pId) {
            var node = $('#' + me.id);
            var table = node.find('table');
            var ths = table.find('thead>tr>th');
            var tds = table.find('tbody>tr').first().find('td');
            if (ths.length == tds.length) {
                me['_dR'] = table;
                me['_dS'] = ths;
                me.render();
            }
        }
    },
    '$win<resize>': function () {
        this['_dU']();
    }
});

});