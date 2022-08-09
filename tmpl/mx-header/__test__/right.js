let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@right.html',
    render() {
        this.updater.digest();
    }
});