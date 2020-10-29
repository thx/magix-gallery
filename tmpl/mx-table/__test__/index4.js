let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index4.html',
    render() {
        this.updater.digest();
    }
});