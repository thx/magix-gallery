let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@class.less');
module.exports = Base.extend({
    tmpl: '@11.html',
    render() {
        this.updater.digest();
    }
});