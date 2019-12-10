let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index12.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});