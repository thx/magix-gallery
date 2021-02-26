let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@sub-table.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});