let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@theme-style.less');

module.exports = Base.extend({
    tmpl: '@theme-style.html',
    render() {
        this.updater.digest();
    }
});