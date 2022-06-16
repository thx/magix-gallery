let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@18.less');
module.exports = Base.extend({
    tmpl: '@18.html',
    render() {
        this.updater.digest();
    }
});