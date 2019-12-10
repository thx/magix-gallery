let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@menu.less');

module.exports = Base.extend({
    tmpl: '@menu-custom2.html',
    render() {
        this.updater.digest();
    }
});