let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@19.html',
    render() {
        this.updater.digest({
            selected: 2,
            list: [{
                value: 1,
                text: 'test'
            }, {
                value: 2,
                text: 'TestABC'
            }, {
                value: 3,
                text: 'Another'
            }]
        });
    },
    'change<change>'(event) {
        // event.value：string
        // event.text：string
        // event.values：array
        // event.texts：array
        // event.selected：string | array（初始化selected为什么类型就是什么，默认string）
        this.updater.digest({
            selected: event.selected
        })
    }
});