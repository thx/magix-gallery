let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@error.less');

module.exports = Base.extend({
    tmpl: '@12.html',
    render() {
        this.updater.digest();
    }
});