let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@bind.html',
    render() {
        this.updater.digest();
    }
});