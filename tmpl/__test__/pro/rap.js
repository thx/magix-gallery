let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@rap.html',
    render() {
        this.updater.digest();
    }
});