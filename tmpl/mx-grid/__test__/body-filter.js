let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@body-filter.html',
    render() {
        this.updater.digest();
    }
});