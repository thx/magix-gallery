let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@links.html',
    render() {
        this.updater.digest();
    }
});