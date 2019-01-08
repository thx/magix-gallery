/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
                // 当前排序字段
                var orderField = item.attr('sort-field') || locParams.orderField;
                // 当前排序方式
                var orderBy = item.attr('sort-orderby') || locParams.orderBy || 'default';
                var icon;
                if (orderField == field) {
                    icon = Map[orderBy];
                }
                else {
                    icon = Map["default"];
                }
                me['@{order.field}'] = orderField;
                me['@{order.by}'] = orderBy;
                me['@{order.field.key}'] = item.attr('order-field-key') || 'orderField';
                me['@{order.by.key}'] = item.attr('order-by-key') || 'orderBy';
                item.html("<i class=\"mc-iconfont displacement-2 cursor-pointer\">" + icon + "</i>");
            });
        };
        me.on('rendered', ready);
        me.on('domready', ready);
    },
    sort: function (list) {
        list = list || [];
        var orderField = this['@{order.field}'], orderBy = this['@{order.by}'];
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
        var oldOrderField = me['@{order.field}'], oldOrderBy = me['@{order.by}'];
        var orderBy, orderField = trigger;
        if (oldOrderField == trigger) {
            if (oldOrderBy == 'asc') {
                orderBy = 'desc';
            }
            else {
                orderBy = 'asc';
            }
        }
        else {
            // 默认降序
            orderBy = 'desc';
        }
        var orderFieldKey = me['@{order.field.key}'], orderByKey = me['@{order.by.key}'];
        var params = {};
        params[orderFieldKey] = orderField;
        params[orderByKey] = orderBy;
        Router.to(params);
    }
};

});