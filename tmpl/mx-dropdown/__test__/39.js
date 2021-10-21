let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@39.html',
    render() {
        this.updater.digest({
            list: [{
                value: 1,
                text: 'test',
                tips: '提示信息'
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
            selected1: 2,
            selected2: 2,
        });
    },
    'change<change>'(event) {
        this.updater.digest({
            selected1: event.selected
        })
    }
});