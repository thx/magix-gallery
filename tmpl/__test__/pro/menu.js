let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@menu.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});