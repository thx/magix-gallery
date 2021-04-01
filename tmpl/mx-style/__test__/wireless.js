let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@wireless.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});