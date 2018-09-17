let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@iframe.less');

module.exports = Magix.View.extend({
    tmpl: '@iframe.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});