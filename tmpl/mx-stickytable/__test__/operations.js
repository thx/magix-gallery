let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@operations.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});