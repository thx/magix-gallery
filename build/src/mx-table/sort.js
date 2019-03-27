/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/sort",["$","magix"],(require,exports,module)=>{
/*$,Magix*/

/*md5:1fe3776c98de55d18ff14e66773ffcca*/
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
                // 保留在地址栏的排序字段key
                var orderFieldKey = item.attr('order-field-key') || 'orderField';
                // 当前排序字段
                var orderField = item.attr('sort-field') || locParams[orderFieldKey];
                // 保留在地址栏的排序方式key
                var orderByKey = item.attr('order-by-key') || 'orderBy';
                // 当前排序方式
                var orderBy = item.attr('sort-orderby') || locParams[orderByKey] || 'default';
                var icon;
                if (orderField == field) {
                    icon = Map[orderBy];
                }
                else {
                    icon = Map["default"];
                }
                me['@{order.field.key}'] = orderFieldKey;
                me['@{order.field}'] = orderField;
                me['@{order.by.key}'] = orderByKey;
                me['@{order.by}'] = orderBy;
                item.html("<i class=\"mc-iconfont displacement-2 cursor-pointer\">" + icon + "</i>");
            });
        };
        me.on('rendered', ready);
        me.on('domready', ready);
    },
    /**
     * 本地排序
     */
    sort: function (list, orderFieldKey, orderByKey) {
        if (DEBUG) {
            console.warn('本地排序方法：如果自定义保留在地址栏的排序字段和排序方式字段，请显示的传入该值，否则默认取地址栏orderField，orderBy');
        }
        list = list || [];
        var locParams = Router.parse().params;
        orderFieldKey = orderFieldKey || 'orderField';
        orderByKey = orderByKey || 'orderBy';
        var orderField = locParams[orderFieldKey], orderBy = locParams[orderByKey];
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
    /**
     * 点击排序按钮
     */
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
        Router.to((_a = {},
            _a[me['@{order.field.key}']] = orderField,
            _a[me['@{order.by.key}']] = orderBy,
            _a));
        var _a;
    }
};

});