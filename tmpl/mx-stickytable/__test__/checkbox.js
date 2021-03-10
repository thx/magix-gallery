let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@checkbox.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});