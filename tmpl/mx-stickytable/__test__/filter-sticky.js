let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@filter-sticky.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});