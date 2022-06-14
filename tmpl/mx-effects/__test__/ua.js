let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@ua.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});