let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@menu-custom-desc.html',
    render() {
        this.updater.digest();
    }
});