/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-table/attach',["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:1.3.8
*/
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-table_index_",".__mx-table_index_-wrapper {\n  width: 100%;\n  overflow: auto;\n  border: 1px solid #e6e6e6;\n  position: relative;\n}\n.__mx-table_index_-owner thead {\n  background-color: #fff;\n}\n.__mx-table_index_-left,\n.__mx-table_index_-right {\n  position: absolute;\n  top: 1px;\n  background-color: #fff;\n  width: auto;\n  z-index: 1;\n}\n.__mx-table_index_-table-no-border {\n  border: none;\n}\n.__mx-table_index_-left {\n  left: 1px;\n}\n.__mx-table_index_-right {\n  right: 1px;\n}\n.__mx-table_index_-left-active,\n.__mx-table_index_-left-active thead {\n  -webkit-box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.2);\n          box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.2);\n}\n.__mx-table_index_-right-active,\n.__mx-table_index_-right-active thead {\n  -webkit-box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.2);\n          box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.2);\n}\n");
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me['@{sticky}'] = (extra.sticky + '') == 'true';
        me['@{hover.class}'] = extra.rowHoverClass;
    },
    '@{sync.state}'() {
        let me = this;
        let scroll = me['@{scroll.node}'];
        if (!scroll)
            return;
        let leftTable = me['@{table.left}'];
        let rightTable = me['@{table.right}'];
        if (scroll.prop('clientWidth') < scroll.prop('scrollWidth')) {
            if (leftTable) {
                let leftActive = '__mx-table_index_-left-active';
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
                let rightActive = '__mx-table_index_-right-active';
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
    '@{thead.sticky}'(table) {
        let id = table.attr('id');
        if (!id) {
            table.attr('id', id = Magix.guid('table_'));
        }
        table.find('thead').css({
            width: table.width()
        });
        this.owner.mountVframe(id, 'mx-table/isticky');
    },
    '@{sync.cell.height}'() {
        let me = this;
        let mainTable = me['@{table.main}'];
        let leftTable = me['@{table.left}'];
        let rightTable = me['@{table.right}'];
        let mainTrs = mainTable.find('tbody>tr');
        let leftTrs, rightTrs;
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
        node.addClass('__mx-style_index_-pr __mx-table_index_-owner');
        let main = node.find('[table-role="main"]');
        main.addClass('__mx-table_index_-wrapper');
        let mainTable = main.find('table');
        mainTable.addClass('__mx-table_index_-table-no-border');
        me['@{table.main}'] = mainTable;
        let leftTable = node.find('[table-role="left-sticky"]');
        if (leftTable.length) {
            leftTable.addClass('__mx-table_index_-left __mx-table_index_-table-no-border');
            me['@{table.left}'] = leftTable;
        }
        let rightTable = node.find('[table-role="right-sticky"]');
        if (rightTable.length) {
            rightTable.addClass('__mx-table_index_-right __mx-table_index_-table-no-border');
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

});