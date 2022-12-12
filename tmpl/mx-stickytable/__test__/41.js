/**
 * checkbox
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@41.html',
    render() {
        let fields = [];
        for (let i = 1; i < 5; i++) {
            fields.push({
                value: i,
                text: `字段${i}`,
                width: 100
            })
        };

        let count = 30;
        let allList = [];
        for (let i = 0; i < count; i++) {
            let item = { value: i, text: i, };
            fields.forEach(f => {
                item[f.value] = Math.random();
            })
            allList.push(item);
        };

        let params = {
            size: 10,
            page: 1
        };

        this.updater.digest({
            count,
            allList,
            params,
            fields,
            list: allList.slice((params.page - 1) * params.size, params.page * params.size),
            linkages: [],
        });
    },
    'changeIndexes<click>'(e) {
        let { linkages } = this.updater.get();
        this.alert('当前选中值', linkages);
    },
    'changePager<change>'(e) {
        let { allList, params } = this.updater.get();
        Magix.mix(params, {
            size: e.size,
            page: e.page
        });
        this.updater.digest({
            params,
            list: allList.slice((params.page - 1) * params.size, params.page * params.size),
        })
    },
});