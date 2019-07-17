let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index7.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});