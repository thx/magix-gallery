let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@oper-items.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            options: []
        });
    }
});