let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@styles.less');

module.exports = Base.extend({
    tmpl: '@styles.html',
    render() {
        this.updater.digest();
    }
});