let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@wireless.less');

module.exports = Magix.View.extend({
    tmpl: '@wireless.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});