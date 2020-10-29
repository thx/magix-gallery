let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@menu-desc.html',
    render() {
        this.updater.digest({});
    }
});