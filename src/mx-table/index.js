/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var WidthReg = /width\s*:\s*(\d+)px/;
Magix.applyStyle("_J","._f_{width:100%;overflow:auto;border:1px solid #e6e6e6;position:relative}._fa,._fb thead,._fc{background-color:#fff}._fa,._fc{position:absolute;top:1px;width:auto;z-index:1}._fd{border:none}._fa{left:1px}._fc{right:1px}._fe,._fe thead{-webkit-box-shadow:6px 0 6px -4px rgba(0,0,0,.2);box-shadow:6px 0 6px -4px rgba(0,0,0,.2)}._ff,._ff thead{-webkit-box-shadow:-6px 0 6px -4px rgba(0,0,0,.2);box-shadow:-6px 0 6px -4px rgba(0,0,0,.2)}");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var range = extra.rwdRange;
        me['__fm'] = ((range || [2, -1]) + '').split(',');
        me['__fd'] = (extra.sticky + '') === 'true';
        var node = $('#' + me.id);
        me['__i'] = node;
        me['__fk'] = node.find('table');
        me['__fe'] = extra.rowHoverClass;
    },
    '__fo': function (className, start, end, ths, trs, id) {
        var table = $('<table id="' + id + '" class="' + className + '"><thead><tr></tr></thead><tbody></tbody></table>');
        this['__fn'](table, start, end, ths, trs);
        return table;
    },
    '__fn': function (table, start, end, ths, trs) {
        var theadTr = table.find('thead>tr:first');
        var theadThs = theadTr.find('th');
        var tbody = table.find('tbody');
        var tbodyTrs = tbody.find('tr');
        for (var i = start; i < end; i++) {
            var th = ths.eq(i);
            var insert = (i - start) >= theadThs.length;
            if (th.attr('fake') !== 'true') {
                $('<th fake="true"/>').css({
                    height: th.outerHeight(),
                    width: th.outerWidth()
                }).insertBefore(th);
                if (insert) {
                    theadTr.append(th);
                }
                else {
                    theadThs.eq(i - start).replaceWith(th);
                }
            }
        }
        for (var i = 0; i < trs.length; i++) {
            var tds = trs.eq(i).find('td');
            var insertTr = i >= tbodyTrs.length;
            var tr = void 0;
            if (insertTr) {
                tr = $('<tr/>');
            }
            else {
                tr = tbodyTrs.eq(i);
            }
            var trTds = tr.find('td');
            for (var i_1 = start; i_1 < end; i_1++) {
                var td = tds.eq(i_1);
                var th = ths.eq(i_1);
                var insertTd = (i_1 - start) >= trTds.length;
                if (td.attr('fake') !== 'true') {
                    $('<td fake="true"/>').css({
                        height: td.outerHeight(),
                        width: td.outerWidth()
                    }).insertBefore(td);
                    var style = th.attr('style');
                    var m = style.match(WidthReg);
                    if (m) {
                        td.css({
                            width: parseInt(m[1])
                        });
                    }
                    if (insertTd) {
                        tr.append(td);
                    }
                    else {
                        trTds.eq(i_1 - start).replaceWith(td);
                    }
                }
            }
            if (insertTr) {
                tbody.append(tr);
            }
        }
        for (var i = trs.length; i < tbodyTrs.length; i++) {
            tbodyTrs.eq(i).remove();
        }
    },
    '__fp': function (table, ths, layoutWidth) {
        var width = 0;
        var thWds = [];
        for (var i = ths.length; i--;) {
            var style = ths.eq(i).attr('style');
            if (style) {
                var m = style.match(WidthReg);
                if (m) {
                    m = parseInt(m[1]);
                    thWds.push(m);
                    width += m;
                }
            }
        }
        if (width > layoutWidth) {
            table.css({
                width: width
            });
            table.find('thead').css({
                width: width
            });
        }
        else {
            thWds = thWds.reverse();
            for (var i = ths.length, tw = 0; i--;) {
                var w = Math.round((thWds[i] / width) * layoutWidth);
                if (!i)
                    w = layoutWidth - tw;
                else
                    tw += w;
                ths.eq(i).css({
                    width: w
                });
            }
            table.css({
                width: layoutWidth
            });
            table.find('thead').css({
                width: layoutWidth
            });
        }
    },
    '__fq': function (table, ths) {
        var bodyFirstTrTds = table.find('tbody>tr:first>td');
        if (bodyFirstTrTds.length == ths.length) {
            for (var i = ths.length; i--;) {
                var th = ths.eq(i);
                var td = bodyFirstTrTds.eq(i);
                var style = th.attr('style');
                var m = style.match(WidthReg);
                if (m) {
                    td.css({
                        width: m[1]
                    });
                }
            }
        }
    },
    '__fl': function (ths, trs) {
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
    },
    '__fr': function (table) {
        var width = 0;
        var ths = table.find('thead>tr>th');
        for (var i = ths.length; i--;) {
            var style = ths.eq(i).attr('style');
            var m = style.match(WidthReg);
            if (m) {
                m = parseInt(m[1]);
                width += m;
            }
        }
        table.css({
            width: width
        });
        table.find('thead').css({
            width: width
        });
    },
    '__fs': function (left, ths, trs, table, node) {
        var me = this;
        if (me['__fg']) {
            me['__fn'](me['__fg'], 0, left, ths, trs);
            me['__fr'](me['__fg']);
        }
        else if (left) {
            var id = 't_' + me.id + '_left';
            var t = me['__fo'](table.attr('class') + ' _fa', 0, left, ths, trs, id);
            t.appendTo(node);
            me['__fg'] = t;
            me['__fr'](t);
            if (me['__fd']) {
                me.owner.mountVframe(id, 'mx-table/isticky');
            }
        }
    },
    '__ft': function (right, ths, trs, table, node) {
        var me = this;
        if (me['__fh']) {
            me['__fn'](me['__fh'], right + ths.length, ths.length, ths, trs);
            me['__fr'](me['__fh']);
        }
        else if (right) {
            var id = 't_' + me.id + '_right';
            var t = me['__fo'](table.attr('class') + ' _fc', right + ths.length, ths.length, ths, trs, id);
            t.appendTo(node);
            me['__fh'] = t;
            me['__fr'](t);
            if (me['__fd']) {
                me.owner.mountVframe(id, 'mx-table/isticky');
            }
        }
    },
    '__fw': function () {
        var me = this;
        var node = me['__i'];
        var table = me['__fk'];
        var ths = me['__fu'] || table.find('thead>tr:first>th');
        delete me['__fu'];
        if (!node.hasClass('_fb')) {
            var sNode_1 = node.wrapInner('<div class="_f_"></div>').children().first();
            node.addClass('_ag _fb');
            me['__ff'] = sNode_1;
            sNode_1.on('scroll', function () {
                node.prop('sl', sNode_1.prop('scrollLeft'));
                me['__fi']();
            });
            me.on('destroy', function () {
                sNode_1.off('scroll');
            });
            table.addClass('_fd');
            var tfoot = table.find('tfoot');
            if (tfoot.length) {
                $('<table class="_aA"></table>')
                    .append(tfoot)
                    .appendTo(node);
            }
        }
        me['__fp'](table, ths, node.width());
        me['__fq'](table, ths);
        var r = me['__fm'];
        var trs = table.find('tbody>tr');
        me['__fl'](ths, trs);
        me['__fs'](+r[0], ths, trs, table, node);
        me['__ft'](+r[1], ths, trs, table, node);
        if (me['__fd'] && !me['__fv']) {
            me['__fv'] = 1;
            var id = table.attr('id');
            if (!id) {
                table.attr('id', id = Magix.guid('table_'));
            }
            me.owner.mountVframe(id, 'mx-table/isticky');
        }
    },
    '__fi': function () {
        var me = this;
        var scroll = me['__ff'];
        if (!scroll)
            return;
        var node = me['__i'];
        var sLeft = node.prop('sl');
        if (sLeft) {
            scroll.prop('scrollLeft', sLeft);
        }
        var leftTable = me['__fg'];
        var rightTable = me['__fh'];
        if (scroll.prop('clientWidth') < scroll.prop('scrollWidth')) {
            if (leftTable) {
                var leftActive = '_fe';
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
                var rightActive = '_ff';
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
        me['__fw']();
        me['__fi']();
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (e.vId == me.owner.pId) {
            var table = me['__fk'];
            var ths = table.find('thead>tr:first>th');
            var tds = table.find('tbody>tr:first>td');
            if (ths.length == tds.length || !tds.length) {
                me['__fu'] = ths;
                me.render();
            }
        }
    },
    '$tbody>tr<mouseover,mouseout>': function (e) {
        var me = this;
        var hoverClass = me['__fe'];
        if (hoverClass) {
            var target = e.eventTarget;
            var flag = !Magix.inside(e.relatedTarget, target);
            if (flag) {
                var trs = $(target).parents('tbody').find('tr');
                var index = trs.index(target);
                trs = me['__fk'].find('tbody>tr');
                var action = e.type == 'mouseover' ? 'addClass' : 'removeClass';
                trs.eq(index)[action](hoverClass);
                var table = me['__fg'];
                if (table) {
                    trs = table.find('tbody>tr');
                    trs.eq(index)[action](hoverClass);
                }
                table = me['__fh'];
                if (table) {
                    trs = table.find('tbody>tr');
                    trs.eq(index)[action](hoverClass);
                }
            }
        }
    },
    '$win<resize>': function () {
        var me = this;
        var node = me['__i'];
        var table = me['__fk'];
        var ths = table.find('thead>tr:first>th');
        this['__fp'](table, ths, node.width());
        this['__fi']();
    }
});

});