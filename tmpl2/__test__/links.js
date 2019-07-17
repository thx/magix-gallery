let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@links.html',
    render() {
        this.updater.digest();
    }
});