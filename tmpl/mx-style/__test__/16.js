let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@var.less');
module.exports = Base.extend({
    tmpl: '@16.html',
    render() {
        this.updater.digest();
    }
});