let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@3.less');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            list: [{
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
        let selected = e.selected;
        this.updater.digest({
            selected
        })
    }
});
