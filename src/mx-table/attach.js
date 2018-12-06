/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/attach",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-table_index_","/* @dependent: ./index.less */\n.__mx-table_index_-wrapper {\n  width: 100%;\n  overflow: auto;\n  border: 1px solid #e6e6e6;\n  position: relative;\n}\n.__mx-table_index_-owner thead {\n  background-color: #fff;\n}\n.__mx-table_index_-left,\n.__mx-table_index_-right {\n  position: absolute;\n  top: 1px;\n  background-color: #fff;\n  width: auto;\n  z-index: 1;\n}\n.__mx-table_index_-table-no-border {\n  border: none;\n}\n.__mx-table_index_-left {\n  left: 1px;\n}\n.__mx-table_index_-right {\n  right: 1px;\n}\n.__mx-table_index_-left-active,\n.__mx-table_index_-left-active thead {\n  box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.2);\n}\n.__mx-table_index_-right-active,\n.__mx-table_index_-right-active thead {\n  box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.2);\n}\n");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['@{sticky}'] = (extra.sticky + '') == 'true';
        me['@{hover.class}'] = extra.rowHoverClass;
    },
    '@{sync.state}': function () {
        var me = this;
        var scroll = me['@{scroll.node}'];
        if (!scroll)
            return;
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
    '@{thead.sticky}': function (table) {
        var id = table.attr('id');
        if (!id) {
            table.attr('id', id = Magix.guid('table_'));
        }
        table.find('thead').css({
            width: table.width()
        });
        this.owner.mountVframe(id, 'mx-table/isticky');
    },
    '@{sync.cell.height}': function () {
        var me = this;
        var mainTable = me['@{table.main}'];
        var leftTable = me['@{table.left}'];
        var rightTable = me['@{table.right}'];
        var mainTrs = mainTable.find('tbody>tr');
        var leftTrs, rightTrs;
        if (leftTable) {
            leftTrs = leftTable.find('tbody>tr');
        }
        if (rightTable) {
            rightTrs = rightTable.find('tbody>tr');
        }
        for (var i = 0; i < mainTrs.length; i++) {
            var td = mainTrs.eq(i).find('td');
            var height = td.outerHeight();
            if (leftTrs) {
                leftTrs.eq(i).find('td:first').css({
                    height: height
                });
            }
            if (rightTrs) {
                rightTrs.eq(i).find('td:first').css({
                    height: height
                });
            }
        }
    },
    render: function () {
        var me = this;
        var node = $('#' + me.id);
        node.addClass('__mx-style_index_-pr __mx-table_index_-owner');
        var main = node.find('[table-role="main"]');
        main.addClass('__mx-table_index_-wrapper');
        var mainTable = main.find('table');
        mainTable.addClass('__mx-table_index_-table-no-border');
        me['@{table.main}'] = mainTable;
        var leftTable = node.find('[table-role="left-sticky"]');
        if (leftTable.length) {
            leftTable.addClass('__mx-table_index_-left __mx-table_index_-table-no-border');
            me['@{table.left}'] = leftTable;
        }
        var rightTable = node.find('[table-role="right-sticky"]');
        if (rightTable.length) {
            rightTable.addClass('__mx-table_index_-right __mx-table_index_-table-no-border');
            me['@{table.right}'] = rightTable;
        }
        me['@{scroll.node}'] = main;
        var scroll = function () {
            me['@{sync.state}']();
        };
        me.on('destroy', function () {
            main.off('scroll', scroll);
        });
        main.on('scroll', scroll);
        me['@{sync.state}']();
        me['@{sync.cell.height}']();
        var sticky = me['@{sticky}'];
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
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (e.vId == me.owner.pId) {
            me['@{sync.cell.height}']();
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
    }
});

});