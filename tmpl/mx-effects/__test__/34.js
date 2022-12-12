let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@34.html',
    render() {
        this.updater.digest({
            num: 1.4
        });
    }
});