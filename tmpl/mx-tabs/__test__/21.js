let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@21.html',
    render() {
        this.updater.digest({
            list: [{
                value: 1,
                text: '模块1',
            }, {
                value: 2,
                text: '模块2',
                disabled: true,
            }, {
                value: 3,
                text: '模块3'
            }, {
                value: 4,
                text: '模块4'
            }],
            selected1: 2,
            selected2: 1,
            selected3: 3,
        });
    }
});