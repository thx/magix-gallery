let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@dropdown.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});