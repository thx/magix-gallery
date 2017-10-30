/*
ver:1.3.4
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
    },
    '@{table.insert}'(className, start, end, ths, trs, id) {
        let table = $('<table id="' + id + '" class="' + className + '"><thead><tr></tr></thead><tbody></tbody></table>');
        this['@{table.sync.state}'](table, start, end, ths, trs);
        return table;
    },
    '@{table.sync.state}'(table, start, end, ths, trs) {
        let theadTr = table.find('thead>tr');
        let theadThs = theadTr.find('th');
        let tbody = table.find('tbody');
        let tbodyTrs = tbody.find('tr');
        for (let i = start; i < end; i++) {
            let th = ths.eq(i);
            let insert = i >= theadThs.length;
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
            let insert = i >= tbodyTrs.length;
            let tr;
            if (insert) {
                tr = $('<tr/>');
            } else {
                tr = tbodyTrs.eq(i);
            }
            let trTds = tr.find('td');
            for (let i = start; i < end; i++) {
                let td = tds.eq(i);
                if (td.attr('fake') !== 'true') {
                    $('<td fake="true"/>').css({
                        height: td.outerHeight(),
                        width: td.outerWidth()
                    }).insertBefore(td);
                    if (insert) {
                        tr.append(td);
                    } else {
                        trTds.eq(i - start).replaceWith(td);
                    }
                }
            }
            if (insert) {
                tbody.append(tr);
            }
        }
        for (let i = trs.length; i < tbodyTrs.length; i++) {
            tbodyTrs.eq(i).remove();
        }
    },
    '@{table.sync.width}'(table, ths, layoutWidth) {
        let width = 0;
        for (let i = ths.length; i--;) {
            let style = ths.eq(i).attr('style');
            let m = style.match(WidthReg);
            if (m) {
                width += parseInt(m[1]);
            }
        }
        if (width > layoutWidth) {
            table.css({
                width
            });
            table.find('thead').css({
                width
            });
            return false;
        } else {
            table.css({
                width: 'inherit'
            });
            table.find('thead').css({
                width: 'inherit'
            });
            return true;
        }
    },
    '@{table.main.split}'() {
        let me = this;
        let node = $('#' + me.id);
        let table = me['@{table.temp}'] || node.find('table');
        let ths = me['@{table.temp.ths}'] || table.find('thead>tr>th');
        let end = 0;
        delete me['@{table.temp}'];
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
            end = me['@{table.sync.width}'](table, ths, node.width());
            me['@{table.ths.count}'] = ths.length;
        } else if (me['@{table.ths.count}'] != ths.length) {
            end = me['@{table.sync.width}'](table, ths, node.width());
            me['@{table.ths.count}'] = ths.length;
        }
        if (end) {
            let t = me['@{table.right}'];
            if (t) {
                t.remove();
                delete me['@{table.right}'];
            }
            t = me['@{table.left}'];
            if (t) {
                t.remove();
                delete me['@{table.left}'];
            }
            return;
        }
        let r = me['@{rwd.range}'];
        let left = +r[0];
        let right = +r[1];
        let trs = node.find('tbody>tr');
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
        if (me['@{table.left}']) {
            me['@{table.sync.state}'](me['@{table.left}'], 0, left, ths, trs);
        } else if (left) {
            let id = 't_' + me.id + '_left';
            let t = me['@{table.insert}'](table.attr('class') + ' @index.less:left', 0, left, ths, trs, id);
            t.insertAfter(node);
            me['@{table.left}'] = t;
            if (me['@{sticky}']) {
                me.owner.mountVframe(id, '@./isticky');
            }
        }
        if (me['@{table.right}']) {
            me['@{table.sync.state}'](me['@{table.right}'], right + ths.length, ths.length, ths, trs);
        } else if (right) {
            let id = 't_' + me.id + '_right';
            let t = me['@{table.insert}'](table.attr('class') + ' @index.less:right', right + ths.length, ths.length, ths, trs, id);
            t.insertAfter(node);
            me['@{table.right}'] = t;
            if (me['@{sticky}']) {
                me.owner.mountVframe(id, '@./isticky');
            }
        }
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
        me['@{table.main.split}']();
        me['@{sync.state}']();
    },
    '$doc<htmlchanged>'(e) {
        let me = this;
        if (e.vId == me.owner.pId) {
            let node = $('#' + me.id);
            let table = node.find('table');
            let ths = table.find('thead>tr>th');
            let tds = table.find('tbody>tr').first().find('td');
            if (ths.length == tds.length) {
                me['@{table.temp}'] = table;
                me['@{table.temp.ths}'] = ths;
                me.render();
            }
        }
    },
    '$win<resize>'() {
        this['@{sync.state}']();
    }
});