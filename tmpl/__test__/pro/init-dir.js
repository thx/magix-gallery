let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@init-dir.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});