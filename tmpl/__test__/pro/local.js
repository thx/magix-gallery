let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@local.html',
    render() {
        this.updater.digest();
    }
});