let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@menu-custom.html',
    render() {
        this.updater.digest();
    }
});