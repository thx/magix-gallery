let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@permission.html',
    render() {
        this.updater.digest();
    }
});