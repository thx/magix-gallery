let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@40.html',
    render() {
        this.updater.digest({
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
            selected1: [2, 3],
            selected2: 2,
        });
    }
});