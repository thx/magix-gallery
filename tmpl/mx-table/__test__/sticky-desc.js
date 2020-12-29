let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@sticky-desc.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});