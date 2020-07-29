let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@wireless.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});