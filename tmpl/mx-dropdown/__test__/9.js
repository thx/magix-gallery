let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        let list = [];
        for (let index = 0; index < 6; index++) {
            list.push({
                text: '多选' + (index + 1),
                value: index + 1
            })
        }
        this.updater.digest({
            list,
            selected: '1,2,3'
        });
    },
    'select<change>'(e) {
        // e.values [array] 当前选中值
        // e.texts [array] 当前选中文案
        debugger
        this.updater.digest({
            selected: e.values
        });
    }
});