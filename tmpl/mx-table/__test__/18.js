let Magix = require('magix');
let Base = require('__test__/example');
let Sort = require('@../sort');
let $ = require('$');
let CopyText = '复制代码';
let Router = Magix.Router;
module.exports = Base.extend({
    tmpl: '@18.html',
    mixins: [Sort],
    init() {
        let that = this;
        that.updater.set({
            viewId: that.id,
            text1: CopyText,
            text2: CopyText
        })
        that.observeLocation(['customOrderField', 'customOrderBy']);
    },
    render() {
        let that = this;

        let groups = [{
            name: '组1',
            fields: ['field1', 'field2']
        }, {
            name: '组2',
            fields: ['field3', 'field4', 'field5', 'field6']
        }, {
            name: '组3',
            fields: ['field7', 'field8', 'field9']
        }]
        let len = 0;
        groups.forEach(group => {
            len += group.fields.length;
        })

        let locParams = Router.parse().params;
        let orderFieldKey = 'customOrderField',
            orderByKey = 'customOrderBy';

        let list = that.getList();
        that.updater.digest({
            list,
            orderFieldKey,
            orderByKey,
            sortField: locParams[orderFieldKey] || 'field1',
            sortBy: locParams[orderByKey] || 'asc',
            groups,
            len,
            format: (val) => {
                if (!val) {
                    return '-';
                }
                return val;
            }
        });

        // 重新排序
        that.updater.digest({
            list: that.sort(list)
        })
    },
    getList() {
        let list = [];
        for (var i = 0; i < 5; i++) {
            let empty = (i == 2 || i == 4);
            let origin = {
                fixed1: Magix.guid('fixed1-'),
                fixed2: Magix.guid('fixed2-'),
                fixed3: Magix.guid('fixed3-'),
                field1: empty ? 0 : (i + 9000),
                field2: empty ? 0 : (i + 3000),
                field3: empty ? 0 : (i + 1000),
                field4: i + 412,
                field5: i + 512,
                field6: i + 612,
                field7: i + 7,
                field8: i + 8,
                field9: i + 2
            }

            let item = $.extend(true, {}, origin);
            list.push(item);
        }
        return list;
    }
});