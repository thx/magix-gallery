let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@hor.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});