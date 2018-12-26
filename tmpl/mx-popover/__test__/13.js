let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@error.less');

module.exports = Base.extend({
    tmpl: '@13.html',
    render() {
        this.updater.digest();
    }
});