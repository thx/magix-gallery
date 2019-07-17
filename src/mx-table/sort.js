let $ = require('$');
let Magix = require('magix');
let Router = Magix.Router;
let Map = {
    desc: '&#xe606;',
    asc: '&#xe607;',
    default: '&#xe608;'
}
module.exports = {
    ctor() {
        let me = this;
        let ready = () => {
            let locParams = Router.parse().params;
            let context = $('#' + me.id);

            // 按照table区分，一个view可能多个table
            let tables = context.find('[mx-view*="mx-table/index"]');
            tables.each((tIndex, t) => {
                let tId = t.id;
                if (t.vframe.pId == me.id) {
                    t = $(t);

                    // 只处理本view的table + trigger
                    let trigger = t.find('[sort-trigger]');
                    trigger.each((idx, item) => {
                        item = $(item);
                        let closestTable = item.closest('[mx-view*="mx-table/index"]');
                        if (tId == closestTable[0].id) {
                            let field = item.attr('sort-trigger');

                            // 保留在地址栏的排序字段key
                            let orderFieldKey = item.attr('order-field-key') || 'orderField';
                            // 当前排序字段
                            let orderField = item.attr('sort-field') || locParams[orderFieldKey];

                            // 保留在地址栏的排序方式key
                            let orderByKey = item.attr('order-by-key') || 'orderBy';
                            // 当前排序方式
                            let orderBy = item.attr('sort-orderby') || locParams[orderByKey] || 'default';

                            let icon;
                            if (orderField == field) {
                                icon = Map[orderBy];
                            } else {
                                icon = Map.default;
                            }

                            // 同一个view可能有多个table，需要保证key唯一
                            me[`@{${tId}.order.field.key}`] = orderFieldKey;
                            me[`@{${tId}.order.field}`] = orderField;
                            me[`@{${tId}.order.by.key}`] = orderByKey;
                            me[`@{${tId}.order.by}`] = orderBy;

                            item.html(`<i class="mc-iconfont displacement-2 cursor-pointer">${icon}</i>`);
                        }
                    });
                }
            })
        }
        me.on('rendered', ready);
        me.on('domready', ready);
    },

    /**
     * 本地排序
     */
    sort(list, orderFieldKey, orderByKey) {
        if (DEBUG) {
            console.warn('本地排序方法：如果自定义保留在地址栏的排序字段和排序方式字段，请显示的传入该值，否则默认取地址栏orderField，orderBy');
        }
        list = list || [];

        let locParams = Router.parse().params;
        orderFieldKey = orderFieldKey || 'orderField';
        orderByKey = orderByKey || 'orderBy';
        let orderField = locParams[orderFieldKey],
            orderBy = locParams[orderByKey];
        if (!orderField) {
            return list;
        }

        let emptyList = [];
        for (var i = 0; i < list.length; i++) {
            let item = list[i];
            if (!item[orderField]) {
                emptyList.push(item);
                list.splice(i--, 1);
            }
        }

        list = list.sort((a, b) => {
            let ax = a[orderField] + '',
                bx = b[orderField] + '';

            let compare;
            if (isNaN(parseInt(ax)) || isNaN(parseInt(bx))) {
                // 字符串排序，忽略大小写
                switch (orderBy) {
                    case 'desc':
                        // 降序
                        if (bx.toUpperCase() < ax.toUpperCase()) {
                            compare = -1;
                        } else {
                            compare = 1;
                        }
                        break;
                    case 'asc':
                        // 升序
                        if (ax.toUpperCase() < bx.toUpperCase()) {
                            compare = -1;
                        } else {
                            compare = 1;
                        }
                        break;
                }
            } else {
                // 数字排序
                switch (orderBy) {
                    case 'desc':
                        // 降序
                        compare = (+bx) - (+ax);
                        break;
                    case 'asc':
                        // 升序
                        compare = (+ax) - (+bx);
                        break;
                }
            }

            return compare;
        });
        return list.concat(emptyList);
    },

    /**
     * 点击排序按钮
     */
    '$[sort-trigger]<click>'(e) {
        let me = this;
        let context = $('#' + me.id);
        let item = $(e.eventTarget);
        let trigger = item.attr('sort-trigger');
        let table = item.closest('[mx-view*="mx-table/index"]');
        let tId = table[0].id;

        let oldOrderField = me[`@{${tId}.order.field}`],
            oldOrderBy = me[`@{${tId}.order.by}`];

        let orderBy, orderField = trigger;
        if (oldOrderField == trigger) {
            if (oldOrderBy == 'asc') {
                orderBy = 'desc';
            } else {
                orderBy = 'asc';
            }
        } else {
            // 默认降序
            orderBy = 'desc';
        }
        Router.to({
            [me[`@{${tId}.order.field.key}`]]: orderField,
            [me[`@{${tId}.order.by.key}`]]: orderBy
        });
    }
};