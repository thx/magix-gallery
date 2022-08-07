let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@nav-steps.html',
    render() {
        this.updater.digest();
    }
});