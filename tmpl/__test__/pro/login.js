let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@login.html',
    render() {
        this.updater.digest();
    }
});