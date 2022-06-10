let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@class.less');
module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    }
});