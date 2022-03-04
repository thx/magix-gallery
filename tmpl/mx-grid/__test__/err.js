let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@err.html',
    render() {
        this.updater.digest();
    }
});