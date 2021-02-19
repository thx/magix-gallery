let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@group.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});