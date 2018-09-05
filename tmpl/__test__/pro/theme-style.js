let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@theme-style.html',
    render() {
        this.updater.digest();
    }
});