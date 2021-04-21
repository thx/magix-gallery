let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@trigger.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});