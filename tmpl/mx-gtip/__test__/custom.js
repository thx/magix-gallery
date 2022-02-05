let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@custom.html',
    init(extra) {
        this.updater.set(extra.data || {});
    },
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});