let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@13.html',
    render() {
        this.updater.digest({
            cur: 120
        });
    }
});