let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@icon.less');

module.exports = Base.extend({
    tmpl: '@63.html',
    render() {
        this.updater.digest();
    }
});