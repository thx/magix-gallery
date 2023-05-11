let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            disabled: false,
            index: 1,
            list: [{
                value: 1,
                text: '操作1',
                tag: 'HOT',
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
        this.updater.digest({
            item: e.item,
        })
    },
    'toggle<click>'(e) {
        this.updater.digest({
            disabled: !this.updater.get('disabled')
        })
    }
});
