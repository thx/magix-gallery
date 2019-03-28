let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@theme-vars.html',
    render() {
        this.updater.digest();
    }
});