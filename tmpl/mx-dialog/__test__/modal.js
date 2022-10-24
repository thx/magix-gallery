let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@modal.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});