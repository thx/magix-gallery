let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest({
            list: [{
                text: 'test1',
                value: 4
            }, {
                text: 'Test2',
                value: 3
            }, {
                text: 'hello3',
                value: 2
            }, {
                text: 'Hello4',
                value: 1
            }],
            selected1: '',
            selected2: '',
            selected3: '',
        });
    }
});