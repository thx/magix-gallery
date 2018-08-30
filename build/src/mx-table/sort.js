/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/sort",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

var $ = require("$");
var Magix = require("magix");
var Router = Magix.Router;
var Map = {
    desc: '&#xe606;',
    asc: '&#xe607;',
    "default": '&#xe608;'
};
module.exports = {
    ctor: function () {
        var me = this;
        var ready = function () {
            var locParams = Router.parse().params;
            var context = $('#' + me.id);
            var trigger = context.find('[sort-trigger]');
            trigger.each(function (idx, item) {
                item = $(item);
                var field = item.attr('sort-trigger');
                var orderBy = locParams.orderBy || 'default';
                var icon;
                if (locParams.orderField == field) {
                    icon = Map[orderBy];
                }
                else {
                    icon = Map["default"];
                }
                item.html("<i class=\"mc-iconfont displacement-2 cursor-pointer\">" + icon + "</i>");
            });
        };
        me.on('rendered', ready);
        me.on('domready', ready);
    },
    sort: function (list) {
        list = list || [];
        var locParams = Router.parse().params;
        var orderBy = locParams.orderBy, orderField = locParams.orderField;
        if (!orderField) {
            return list;
        }
        var emptyList = [];
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (!item[orderField]) {
                emptyList.push(item);
                list.splice(i--, 1);
            }
        }
        switch (orderBy) {
            case 'desc':
                list = list.sort(function (a, b) {
                    return (+b[orderField]) - (+a[orderField]);
                });
                break;
            case 'asc':
                list = list.sort(function (a, b) {
                    return (+a[orderField]) - (+b[orderField]);
                });
                break;
        }
        return list.concat(emptyList);
    },
    '$[sort-trigger]<click>': function (e) {
        var me = this;
        var context = $('#' + me.id);
        var item = $(e.eventTarget);
        var trigger = item.attr('sort-trigger');
        var locParams = Router.parse().params;
        var oldOrderBy = locParams.orderBy, oldOrderField = locParams.orderField;
        var orderBy, orderField = trigger;
        if (oldOrderField == trigger) {
            if (oldOrderBy == 'desc') {
                orderBy = 'asc';
            }
            else {
                orderBy = 'desc';
            }
        }
        else {
            // 默认降序
            orderBy = 'desc';
        }
        Router.to({
            orderBy: orderBy,
            orderField: orderField
        });
    }
};

});