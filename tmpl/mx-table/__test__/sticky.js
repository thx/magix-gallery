let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@sticky.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            options: []
        });
    }
});