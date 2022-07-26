let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@rowspan.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});