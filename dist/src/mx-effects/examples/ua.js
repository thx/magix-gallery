let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@ua.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});