let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        let list = [];
        for (let index = 0; index < 6; index++) {
            list.push({
                text: ((index % 2 == 0) ? 'test' : 'hello') + index,
                value: index
            })
        }
        this.updater.digest({
            viewId: this.id,
            list,
            selected1: [1, 2],
            selected2: [1, 2],
        });
    },
    'select<change>'(e) {
        // e.selected：string，逗号分隔，选中value
        // e.items：array，选中完成对象
        this.updater.digest({
            selected: e.selected,
            items: e.items
        });
    }
});