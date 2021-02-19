let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@empty.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});