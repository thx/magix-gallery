let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@icon.less');

module.exports = Base.extend({
    tmpl: '@77.html',
    render() {
        this.updater.digest();
    }
});