let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@sort.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});