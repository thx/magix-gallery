/*
ver:2.0.4
*/
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me['@{sticky}'] = (extra.sticky + '') == 'true';
        me['@{hover.class}'] = extra.rowHoverClass;
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
    '@{thead.sticky}'(table) {
        let id = table.attr('id');
        if (!id) {
            table.attr('id', id = Magix.guid('table_'));
        }
        table.find('thead').css({
            width: table.width()
        });
        this.owner.mountVframe(id, '@./isticky');
    },
    '@{sync.cell.height}'() {
        let me = this;
        let mainTable = me['@{table.main}'];
        let leftTable = me['@{table.left}'];
        let rightTable = me['@{table.right}'];
        let mainTrs = mainTable.find('tbody>tr');
        let leftTrs,
            rightTrs;
        if (leftTable) {
            leftTrs = leftTable.find('tbody>tr');
        }
        if (rightTable) {
            rightTrs = rightTable.find('tbody>tr');
        }
        for (let i = 0; i < mainTrs.length; i++) {
            let td = mainTrs.eq(i).find('td');
            let height = td.outerHeight();
            if (leftTrs) {
                leftTrs.eq(i).find('td:first').css({
                    height
                });
            }
            if (rightTrs) {
                rightTrs.eq(i).find('td:first').css({
                    height
                });
            }
        }
    },
    render() {
        let me = this;
        let node = $('#' + me.id);
        node.addClass('@scoped.style:pr @index.less:owner');
        let main = node.find('[table-role="main"]');
        main.addClass('@index.less:wrapper');
        let mainTable = main.find('table');
        mainTable.addClass('@index.less:table-no-border');
        me['@{table.main}'] = mainTable;
        let leftTable = node.find('[table-role="left-sticky"]');
        if (leftTable.length) {
            leftTable.addClass('@index.less:left @index.less:table-no-border');
            me['@{table.left}'] = leftTable;
        }
        let rightTable = node.find('[table-role="right-sticky"]');
        if (rightTable.length) {
            rightTable.addClass('@index.less:right @index.less:table-no-border');
            me['@{table.right}'] = rightTable;
        }
        me['@{scroll.node}'] = main;
        let scroll = () => {
            me['@{sync.state}']();
        };
        me.on('destroy', () => {
            main.off('scroll', scroll);
        });
        main.on('scroll', scroll);
        me['@{sync.state}']();
        me['@{sync.cell.height}']();
        let sticky = me['@{sticky}'];
        if (sticky) {
            me['@{thead.sticky}'](mainTable);
            if (leftTable.length) {
                me['@{thead.sticky}'](leftTable);
            }
            if (rightTable.length) {
                me['@{thead.sticky}'](rightTable);
            }
        }
    },
    '$doc<htmlchanged>'(e) {
        let me = this;
        if (e.vId == me.owner.pId) {
            me['@{sync.cell.height}']();
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
    }
});