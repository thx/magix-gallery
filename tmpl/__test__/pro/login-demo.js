let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@login-demo.less');

module.exports = Base.extend({
    tmpl: '@login-demo.html',
    render() {
        this.updater.digest({});
    }
});