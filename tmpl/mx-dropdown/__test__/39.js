let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@39.html',
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
            }, {
                value: 4,
                text: '测试'
            }],
            selected2: 2,
            list2: [{
                value: 1,
                text: 'test'
            }, {
                value: 2,
                text: 'TestABC'
            }, {
                value: 3,
                text: 'Another'
            }, {
                value: 4,
                text: '测试'
            }]
        });
    },
    'change<change>'(event) {
        this.updater.digest({
            selected: event.selected
        })
    }
});