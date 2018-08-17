let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@mixins.html',
    render() {
        this.updater.digest({});
    }
});