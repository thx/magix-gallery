let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@60.html',
    render() {
        this.updater.digest();
    }
});