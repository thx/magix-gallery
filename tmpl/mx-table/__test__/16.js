let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@16.html',
    render() {
        this.updater.digest({
            line: 2
        });
    }
});