let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@sub.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});