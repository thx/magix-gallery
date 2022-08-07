let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@hor-check.html',
    render() {
        this.updater.digest();
    }
});