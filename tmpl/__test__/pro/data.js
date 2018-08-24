let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@data.html',
    render() {
        this.updater.digest();
    }
});