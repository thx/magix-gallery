let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        let list = [];
        for (let index = 0; index < 6; index++) {
            list.push({
                text: (index == 0 ? '<i class="mc-iconfont">&#xe670;</i>' : '') + '多选' + (index + 1),
                value: index + 1
            })
        }
        this.updater.digest({
            list,
            selectedArr: [1, 2, 3],
            selectedStr: '1,2,3'
        });
    },
    'select<change>'(e) {
        // e.values [array] 当前选中值
        // e.texts [array] 当前选中文案
        let values = e.values;
        this.updater.digest({
            selectedArr: values,
            selectedStr: values.join(',')
        });
    }
});