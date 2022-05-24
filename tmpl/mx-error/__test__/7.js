let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            num: Math.random()
        });
    },
    'test<click>'(e) {
        this.updater.digest({
            num: Math.random()
        });
    }
});