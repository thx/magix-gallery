let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index2.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});