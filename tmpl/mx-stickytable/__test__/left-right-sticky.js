let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@left-right-sticky.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});