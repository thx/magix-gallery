/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var WidthReg = /width\s*:\s*(\d+)px/;
Magix.applyStyle("__mx-table_index_","/* @dependent: ./index.less */\n.__mx-table_index_-wrapper {\n  width: 100%;\n  overflow: auto;\n  border: 1px solid #e6e6e6;\n  position: relative;\n}\n.__mx-table_index_-owner thead {\n  background-color: #fff;\n}\n.__mx-table_index_-left,\n.__mx-table_index_-right {\n  position: absolute;\n  top: 1px;\n  background-color: #fff;\n  width: auto;\n  z-index: 1;\n}\n.__mx-table_index_-table-no-border {\n  border: none;\n}\n.__mx-table_index_-left {\n  left: 1px;\n}\n.__mx-table_index_-right {\n  right: 1px;\n}\n.__mx-table_index_-left-active,\n.__mx-table_index_-left-active thead {\n  box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.2);\n}\n.__mx-table_index_-right-active,\n.__mx-table_index_-right-active thead {\n  box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.2);\n}\n");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var range = extra.rwdRange;
        me['@{rwd.range}'] = ((range || [2, -1]) + '').split(',');
        me['@{sticky}'] = (extra.sticky + '') === 'true';
        var node = $('#' + me.id);
        me['@{owner.node}'] = node;
        me['@{table.main}'] = node.find('table');
        me['@{hover.class}'] = extra.rowHoverClass;
    },
    '@{table.insert}': function (className, start, end, ths, trs, id) {
        var table = $('<table id="' + id + '" class="' + className + '"><thead><tr></tr></thead><tbody></tbody></table>');
        this['@{table.sync.state}'](table, start, end, ths, trs);
        return table;
    },
    '@{table.sync.state}': function (table, start, end, ths, trs) {
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
    '@{table.sync.width}': function (table, ths, layoutWidth) {
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
    '@{copy.table.main.thead.width.to.tbody}': function (table, ths) {
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
    '@{sync.cell.height}': function (ths, trs) {
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
    '@{sync.sticky.table.width}': function (table) {
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
    '@{sync.left.sticky.table}': function (left, ths, trs, table, node) {
        var me = this;
        if (me['@{table.left}']) {
            me['@{table.sync.state}'](me['@{table.left}'], 0, left, ths, trs);
            me['@{sync.sticky.table.width}'](me['@{table.left}']);
        }
        else if (left) {
            var id = 't_' + me.id + '_left';
            var t = me['@{table.insert}'](table.attr('class') + ' __mx-table_index_-left', 0, left, ths, trs, id);
            t.appendTo(node);
            me['@{table.left}'] = t;
            me['@{sync.sticky.table.width}'](t);
            if (me['@{sticky}']) {
                me.owner.mountVframe(id, 'mx-table/isticky');
            }
        }
    },
    '@{sync.right.sticky.table}': function (right, ths, trs, table, node) {
        var me = this;
        if (me['@{table.right}']) {
            me['@{table.sync.state}'](me['@{table.right}'], right + ths.length, ths.length, ths, trs);
            me['@{sync.sticky.table.width}'](me['@{table.right}']);
        }
        else if (right) {
            var id = 't_' + me.id + '_right';
            var t = me['@{table.insert}'](table.attr('class') + ' __mx-table_index_-right', right + ths.length, ths.length, ths, trs, id);
            t.appendTo(node);
            me['@{table.right}'] = t;
            me['@{sync.sticky.table.width}'](t);
            if (me['@{sticky}']) {
                me.owner.mountVframe(id, 'mx-table/isticky');
            }
        }
    },
    '@{main.table.split}': function () {
        var me = this;
        var node = me['@{owner.node}'];
        var table = me['@{table.main}'];
        var ths = me['@{table.temp.ths}'] || table.find('thead>tr:first>th');
        delete me['@{table.temp.ths}'];
        if (!node.hasClass('__mx-table_index_-owner')) {
            var sNode_1 = node.wrapInner('<div class="__mx-table_index_-wrapper"></div>').children().first();
            node.addClass('__mx-style_index_-pr __mx-table_index_-owner');
            me['@{scroll.node}'] = sNode_1;
            sNode_1.on('scroll', function () {
                node.prop('sl', sNode_1.prop('scrollLeft'));
                me['@{sync.state}']();
            });
            me.on('destroy', function () {
                sNode_1.off('scroll');
            });
            table.addClass('__mx-table_index_-table-no-border');
            var tfoot = table.find('tfoot');
            if (tfoot.length) {
                $('<table class="__mx-style_index_-table"></table>')
                    .append(tfoot)
                    .appendTo(node);
            }
        }
        me['@{table.sync.width}'](table, ths, node.width());
        me['@{copy.table.main.thead.width.to.tbody}'](table, ths);
        var r = me['@{rwd.range}'];
        var trs = table.find('tbody>tr');
        me['@{sync.cell.height}'](ths, trs);
        me['@{sync.left.sticky.table}'](+r[0], ths, trs, table, node);
        me['@{sync.right.sticky.table}'](+r[1], ths, trs, table, node);
        if (me['@{sticky}'] && !me['@{setup.main.sticky}']) {
            me['@{setup.main.sticky}'] = 1;
            var id = table.attr('id');
            if (!id) {
                table.attr('id', id = Magix.guid('table_'));
            }
            me.owner.mountVframe(id, 'mx-table/isticky');
        }
    },
    '@{sync.state}': function () {
        var me = this;
        var scroll = me['@{scroll.node}'];
        if (!scroll)
            return;
        var node = me['@{owner.node}'];
        var sLeft = node.prop('sl');
        if (sLeft) {
            scroll.prop('scrollLeft', sLeft);
        }
        var leftTable = me['@{table.left}'];
        var rightTable = me['@{table.right}'];
        if (scroll.prop('clientWidth') < scroll.prop('scrollWidth')) {
            if (leftTable) {
                var leftActive = '__mx-table_index_-left-active';
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
                var rightActive = '__mx-table_index_-right-active';
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
        me['@{main.table.split}']();
        me['@{sync.state}']();
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (e.vId == me.owner.pId) {
            var table = me['@{table.main}'];
            var ths = table.find('thead>tr:first>th');
            var tds = table.find('tbody>tr:first>td');
            if (ths.length == tds.length || !tds.length) {
                me['@{table.temp.ths}'] = ths;
                me.render();
            }
        }
    },
    '$tbody>tr<mouseover,mouseout>': function (e) {
        var me = this;
        var hoverClass = me['@{hover.class}'];
        if (hoverClass) {
            var target = e.eventTarget;
            var flag = !Magix.inside(e.relatedTarget, target);
            if (flag) {
                var trs = $(target).parents('tbody').find('tr');
                var index = trs.index(target);
                trs = me['@{table.main}'].find('tbody>tr');
                var action = e.type == 'mouseover' ? 'addClass' : 'removeClass';
                trs.eq(index)[action](hoverClass);
                var table = me['@{table.left}'];
                if (table) {
                    trs = table.find('tbody>tr');
                    trs.eq(index)[action](hoverClass);
                }
                table = me['@{table.right}'];
                if (table) {
                    trs = table.find('tbody>tr');
                    trs.eq(index)[action](hoverClass);
                }
            }
        }
    },
    '$win<resize>': function () {
        var me = this;
        var node = me['@{owner.node}'];
        var table = me['@{table.main}'];
        var ths = table.find('thead>tr:first>th');
        this['@{table.sync.width}'](table, ths, node.width());
        this['@{sync.state}']();
    }
});

});