let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@17.html',
    render() {
        this.updater.digest();
    }
});