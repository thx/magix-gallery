let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            index: 1,
            menus: [{
                value: 1,
                text: '操作1'
            }, {
                value: 2,
                text: '操作2'
            }, {
                value: 3,
                text: '操作3'
            }]
        });
    },
    'select<change>'(e) {
        let text = e.params.text;
        let selected = e.selected;
        this.updater.digest({
            text,
            selected
        })
    },
    'add<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        })
    }
});
