let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@theme.less');

module.exports = Magix.View.extend({
    tmpl: '@theme.html',
    render() {
        this.updater.digest();
    }
});