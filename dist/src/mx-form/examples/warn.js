let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@warn.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});