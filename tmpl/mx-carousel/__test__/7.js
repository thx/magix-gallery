let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@inner.less');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest();
    }
});