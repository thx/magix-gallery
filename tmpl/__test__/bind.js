let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@bind.html',
    render() {
        this.updater.digest();
    }
});