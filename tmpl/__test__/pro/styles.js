let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@styles.less');

module.exports = Base.extend({
    tmpl: '@styles.html',
    render() {
        this.updater.digest();
    }
});