/*
ver:1.3.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let WidthReg = /width\s*:\s*(\d+)px/;
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        let range = extra.rwdRange;
        me['@{rwd.range}'] = ((range || [2, -1]) + '').split(',');
        me['@{sticky}'] = (extra.sticky + '') === 'true';
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
        me['@{table.main}'] = node.find('table');
        me['@{hover.class}'] = extra.rowHoverClass;
    },
    '@{table.insert}'(className, start, end, ths, trs, id) {
        let table = $('<table id="' + id + '" class="' + className + '"><thead><tr></tr></thead><tbody></tbody></table>');
        this['@{table.sync.state}'](table, start, end, ths, trs);
        return table;
    },
    '@{table.sync.state}'(table, start, end, ths, trs) {
        let theadTr = table.find('thead>tr:first');
        let theadThs = theadTr.find('th');
        let tbody = table.find('tbody');
        let tbodyTrs = tbody.find('tr');
        for (let i = start; i < end; i++) {
            let th = ths.eq(i);
            let insert = (i - start) >= theadThs.length;
            if (th.attr('fake') !== 'true') {
                $('<th fake="true"/>').css({
                    height: th.outerHeight(),
                    width: th.outerWidth()
                }).insertBefore(th);
                if (insert) {
                    theadTr.append(th);
                } else {
                    theadThs.eq(i - start).replaceWith(th);
                }
            }
        }
        for (let i = 0; i < trs.length; i++) {
            let tds = trs.eq(i).find('td');
            let insertTr = i >= tbodyTrs.length;
            let tr;
            if (insertTr) {
                tr = $('<tr/>');
            } else {
                tr = tbodyTrs.eq(i);
            }
            let trTds = tr.find('td');
            for (let i = start; i < end; i++) {
                let td = tds.eq(i);
                let th = ths.eq(i);
                let insertTd = (i - start) >= trTds.length;
                if (td.attr('fake') !== 'true') {
                    $('<td fake="true"/>').css({
                        height: td.outerHeight(),
                        width: td.outerWidth()
                    }).insertBefore(td);
                    let style = th.attr('style');
                    let m = style.match(WidthReg);
                    if (m) {
                        td.css({
                            width: parseInt(m[1])
                        });
                    }
                    if (insertTd) {
                        tr.append(td);
                    } else {
                        trTds.eq(i - start).replaceWith(td);
                    }
                }
            }
            if (insertTr) {
                tbody.append(tr);
            }
        }
        for (let i = trs.length; i < tbodyTrs.length; i++) {
            tbodyTrs.eq(i).remove();
        }
    },
    '@{table.sync.width}'(table, ths, layoutWidth) {
        let width = 0;
        let thWds = [];
        for (let i = ths.length; i--;) {
            let style = ths.eq(i).attr('style');
            if (style) {
                let m = style.match(WidthReg);
                if (m) {
                    m = parseInt(m[1]);
                    thWds.push(m);
                    width += m;
                }
            }
        }
        if (width > layoutWidth) {
            table.css({
                width
            });
            table.find('thead').css({
                width
            });
        } else {
            thWds = thWds.reverse();
            for (let i = ths.length, tw = 0; i--;) {
                let w = Math.round((thWds[i] / width) * layoutWidth);
                if (!i) w = layoutWidth - tw;
                else tw += w;
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
    '@{copy.table.main.thead.width.to.tbody}'(table, ths) {
        let bodyFirstTrTds = table.find('tbody>tr:first>td');
        if (bodyFirstTrTds.length == ths.length) {
            for (let i = ths.length; i--;) {
                let th = ths.eq(i);
                let td = bodyFirstTrTds.eq(i);
                let style = th.attr('style');
                let m = style.match(WidthReg);
                if (m) {
                    td.css({
                        width: m[1]
                    });
                }
            }
        }
    },
    '@{sync.cell.height}'(ths, trs) {
        for (let i = ths.length; i--;) {
            let th = ths.eq(i);
            if (th.attr('fake') !== 'true') {
                th.css({
                    height: th.outerHeight()
                });
            }
        }
        for (let i = trs.length; i--;) {
            let tr = trs.eq(i);
            let tds = tr.find('td');
            let td = tds.eq(0);
            td.css({
                height: td.outerHeight()
            });
            td = tds.last();
            td.css({
                height: td.outerHeight()
            });
        }
    },
    '@{sync.sticky.table.width}'(table) {
        let width = 0;
        let ths = table.find('thead>tr>th');
        for (let i = ths.length; i--;) {
            let style = ths.eq(i).attr('style');
            let m = style.match(WidthReg);
            if (m) {
                m = parseInt(m[1]);
                width += m;
            }
        }
        table.css({
            width
        });
        table.find('thead').css({
            width
        });
    },
    '@{sync.left.sticky.table}'(left, ths, trs, table, node) {
        let me = this;
        if (me['@{table.left}']) {
            me['@{table.sync.state}'](me['@{table.left}'], 0, left, ths, trs);
            me['@{sync.sticky.table.width}'](me['@{table.left}']);
        } else if (left) {
            let id = 't_' + me.id + '_left';
            let t = me['@{table.insert}'](table.attr('class') + ' @index.less:left', 0, left, ths, trs, id);
            t.insertAfter(node);
            me['@{table.left}'] = t;
            me['@{sync.sticky.table.width}'](t);
            if (me['@{sticky}']) {
                me.owner.mountVframe(id, '@./isticky');
            }
        }
    },
    '@{sync.right.sticky.table}'(right, ths, trs, table, node) {
        let me = this;
        if (me['@{table.right}']) {
            me['@{table.sync.state}'](me['@{table.right}'], right + ths.length, ths.length, ths, trs);
            me['@{sync.sticky.table.width}'](me['@{table.right}']);
        } else if (right) {
            let id = 't_' + me.id + '_right';
            let t = me['@{table.insert}'](table.attr('class') + ' @index.less:right', right + ths.length, ths.length, ths, trs, id);
            t.insertAfter(node);
            me['@{table.right}'] = t;
            me['@{sync.sticky.table.width}'](t);
            if (me['@{sticky}']) {
                me.owner.mountVframe(id, '@./isticky');
            }
        }
    },
    '@{main.table.split}'() {
        let me = this;
        let node = me['@{owner.node}'];
        let table = me['@{table.main}'];
        let ths = me['@{table.temp.ths}'] || table.find('thead>tr:first>th');
        delete me['@{table.temp.ths}'];
        if (!node.hasClass('@index.less:wrapper')) {
            node.wrap('<div class="@scoped.style:pr @index.less:owner"></div>');
            node.addClass('@index.less:wrapper');
            me['@{scroll.node}'] = node;
            node.on('scroll', () => {
                me['@{sync.state}']();
            });
            me.on('destroy', () => {
                node.off('scroll');
            });
            table.addClass('@index.less:table-no-border');
            let tfoot = table.find('tfoot');
            if (tfoot.length) {
                $('<table class="@scoped.style:table"></table>')
                    .append(tfoot)
                    .insertAfter(node);
            }
        }
        me['@{table.sync.width}'](table, ths, node.width());
        me['@{copy.table.main.thead.width.to.tbody}'](table, ths);
        let r = me['@{rwd.range}'];
        let trs = table.find('tbody>tr');
        me['@{sync.cell.height}'](ths, trs);
        me['@{sync.left.sticky.table}'](+r[0], ths, trs, table, node);
        me['@{sync.right.sticky.table}'](+r[1], ths, trs, table, node);
        if (me['@{sticky}'] && !me['@{setup.main.sticky}']) {
            me['@{setup.main.sticky}'] = 1;
            let id = table.attr('id');
            if (!id) {
                table.attr('id', id = Magix.guid('table_'));
            }
            me.owner.mountVframe(id, '@./isticky');
        }
    },
    '@{sync.state}'() {
        let me = this;
        let scroll = me['@{scroll.node}'];
        if (!scroll) return;
        let leftTable = me['@{table.left}'];
        let rightTable = me['@{table.right}'];
        if (scroll.prop('clientWidth') < scroll.prop('scrollWidth')) {
            if (leftTable) {
                let leftActive = '@index.less:left-active';
                if (scroll.prop('scrollLeft') >= 10) {
                    if (!leftTable.hasClass(leftActive)) {
                        leftTable.addClass(leftActive);
                    }
                } else {
                    if (leftTable.hasClass(leftActive)) {
                        leftTable.removeClass(leftActive);
                    }
                }
            }
            if (rightTable) {
                let rightActive = '@index.less:right-active';
                if (scroll.prop('scrollLeft') < scroll.prop('scrollWidth') - scroll.prop('clientWidth') - 10) {
                    if (!rightTable.hasClass(rightActive)) {
                        rightTable.addClass(rightActive);
                    }
                } else {
                    if (rightTable.hasClass(rightActive)) {
                        rightTable.removeClass(rightActive);
                    }
                }
            }
        }
    },
    render() {
        let me = this;
        me['@{main.table.split}']();
        me['@{sync.state}']();
    },
    '$doc<htmlchanged>'(e) {
        let me = this;
        if (e.vId == me.owner.pId) {
            let table = me['@{table.main}'];
            let ths = table.find('thead>tr:first>th');
            let tds = table.find('tbody>tr:first>td');
            if (ths.length == tds.length || !tds.length) {
                me['@{table.temp.ths}'] = ths;
                me.render();
            }
        }
    },
    '$tbody>tr<mouseover,mouseout>'(e) {
        let me = this;
        let hoverClass = me['@{hover.class}'];
        if (hoverClass) {
            let target = e.eventTarget;
            let flag = !Magix.inside(e.relatedTarget, target);
            if (flag) {
                let trs = $(target).parents('tbody').find('tr');
                let index = trs.index(target);
                trs = me['@{table.main}'].find('tbody>tr');
                let action = e.type == 'mouseover' ? 'addClass' : 'removeClass';
                trs.eq(index)[action](hoverClass);
                let table = me['@{table.left}'];
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
    '$win<resize>'() {
        let me = this;
        let node = me['@{owner.node}'];
        let table = me['@{table.main}'];
        let ths = table.find('thead>tr:first>th');
        this['@{table.sync.width}'](table, ths, node.width());
        this['@{sync.state}']();
    }
});