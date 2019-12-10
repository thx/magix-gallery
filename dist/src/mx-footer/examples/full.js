let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@full.html',
    render() {
        this.updater.digest();
    }
});