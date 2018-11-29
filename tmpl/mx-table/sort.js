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
            let trigger = context.find('[sort-trigger]');

            trigger.each((idx, item) => {
                item = $(item)
                let field = item.attr('sort-trigger');

                // 当前排序字段
                let orderField = item.attr('sort-field') || locParams.orderField;

                // 当前排序方式
                let orderBy = item.attr('sort-orderby') || locParams.orderBy || 'default';

                let icon;
                if (orderField == field) {
                    icon = Map[orderBy];
                } else {
                    icon = Map.default;
                }
                item.html(`<i class="mc-iconfont displacement-2 cursor-pointer">${icon}</i>`);
            });
        }
        me.on('rendered', ready);
        me.on('domready', ready);
    },

    sort(list) {
        list = list || [];

        let locParams = Router.parse().params;
        let orderBy = locParams.orderBy,
            orderField = locParams.orderField;

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

        switch (orderBy) {
            case 'desc':
                list = list.sort((a, b) => {
                    return (+b[orderField]) - (+a[orderField]);
                });
                break;
            case 'asc':
                list = list.sort((a, b) => {
                    return (+a[orderField]) - (+b[orderField]);
                });
                break;
        }

        return list.concat(emptyList);
    },
    '$[sort-trigger]<click>'(e) {
        let me = this;
        let context = $('#' + me.id);
        let item = $(e.eventTarget);
        let trigger = item.attr('sort-trigger');
        let locParams = Router.parse().params;
        let oldOrderBy = locParams.orderBy,
            oldOrderField = locParams.orderField;
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
            orderBy,
            orderField
        })
    }
};