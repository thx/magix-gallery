let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@error.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});