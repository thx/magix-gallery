let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index6.html',
    render() {
        this.updater.digest();
    }
});