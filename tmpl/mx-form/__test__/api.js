let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@api.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});