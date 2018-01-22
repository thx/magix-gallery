/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/attach",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.1
*/
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_J","._f_{width:100%;overflow:auto;border:1px solid #e6e6e6;position:relative}._fa,._fb thead,._fc{background-color:#fff}._fa,._fc{position:absolute;top:1px;width:auto;z-index:1}._fd{border:none}._fa{left:1px}._fc{right:1px}._fe,._fe thead{-webkit-box-shadow:6px 0 6px -4px rgba(0,0,0,.2);box-shadow:6px 0 6px -4px rgba(0,0,0,.2)}._ff,._ff thead{-webkit-box-shadow:-6px 0 6px -4px rgba(0,0,0,.2);box-shadow:-6px 0 6px -4px rgba(0,0,0,.2)}");
module.exports = Magix.View.extend({
    init: function (extra) {
        var me = this;
        me['__fd'] = (extra.sticky + '') == 'true';
        me['__fe'] = extra.rowHoverClass;
    },
    '__fi': function () {
        var me = this;
        var scroll = me['__ff'];
        if (!scroll)
            return;
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
    '__fj': function (table) {
        var id = table.attr('id');
        if (!id) {
            table.attr('id', id = Magix.guid('table_'));
        }
        table.find('thead').css({
            width: table.width()
        });
        this.owner.mountVframe(id, 'mx-table/isticky');
    },
    '__fl': function () {
        var me = this;
        var mainTable = me['__fk'];
        var leftTable = me['__fg'];
        var rightTable = me['__fh'];
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
        node.addClass('_ag _fb');
        var main = node.find('[table-role="main"]');
        main.addClass('_f_');
        var mainTable = main.find('table');
        mainTable.addClass('_fd');
        me['__fk'] = mainTable;
        var leftTable = node.find('[table-role="left-sticky"]');
        if (leftTable.length) {
            leftTable.addClass('_fa _fd');
            me['__fg'] = leftTable;
        }
        var rightTable = node.find('[table-role="right-sticky"]');
        if (rightTable.length) {
            rightTable.addClass('_fc _fd');
            me['__fh'] = rightTable;
        }
        me['__ff'] = main;
        var scroll = function () {
            me['__fi']();
        };
        me.on('destroy', function () {
            main.off('scroll', scroll);
        });
        main.on('scroll', scroll);
        me['__fi']();
        me['__fl']();
        var sticky = me['__fd'];
        if (sticky) {
            me['__fj'](mainTable);
            if (leftTable.length) {
                me['__fj'](leftTable);
            }
            if (rightTable.length) {
                me['__fj'](rightTable);
            }
        }
    },
    '$doc<htmlchanged>': function (e) {
        var me = this;
        if (e.vId == me.owner.pId) {
            me['__fl']();
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
    }
});

});