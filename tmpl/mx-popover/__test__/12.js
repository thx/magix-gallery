let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@error.less');

module.exports = Base.extend({
    tmpl: '@12.html',
    render() {
        this.updater.digest();
    }
});