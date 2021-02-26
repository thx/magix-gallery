let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@width.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});