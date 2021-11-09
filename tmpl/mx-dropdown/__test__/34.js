let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@34.html',
    render() {
        this.updater.digest({
            selected: [1, 2],
            checker: (items) => {
                // items: 当前选中数据对象数组
                return new Promise(resolve => {
                    resolve((items.length > 2) ? '最多选中两个' : '');
                })
            }
        });
    }
});