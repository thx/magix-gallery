let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index3.html',
    render() {
        this.updater.digest();
    }
});