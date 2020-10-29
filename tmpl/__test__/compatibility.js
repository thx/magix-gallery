let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@compatibility.html',
    render() {
        this.updater.digest();
    }
});