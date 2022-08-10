let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@nav-check.html',
    render() {
        this.updater.digest();
    }
});