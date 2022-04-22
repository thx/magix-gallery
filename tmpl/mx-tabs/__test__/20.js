let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@20.html',
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
            }],
            selected1: 2,
            selected2: 1,
            selected3: 3,
        });
    }
});