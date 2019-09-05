let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@err.html',
    render() {
        this.updater.digest();
    }
});