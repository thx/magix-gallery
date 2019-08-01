let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@menu-custom-desc.html',
    render() {
        this.updater.digest();
    }
});