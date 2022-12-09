let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@35.html',
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
            }],
            selected1: '',
            selected2: '',
        });
    }
});