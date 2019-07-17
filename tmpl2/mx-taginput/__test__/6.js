let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let list = [];
        for (let index = 0; index < 5; index++) {
            list.push({
                text: 'test' + index,
                value: index
            })
        }
        this.updater.digest({
            viewId: this.id,
            list
        });
    },
    'select<change>'(e){
        // e.selected：string，逗号分隔，选中value
        // e.items：array，选中完成对象
        this.updater.digest({
            selected: e.selected
        });
    }
});