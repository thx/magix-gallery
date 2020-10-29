let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@menu.less');

module.exports = Base.extend({
    tmpl: '@menu4.html',
    render() {
        this.updater.digest();
    }
});