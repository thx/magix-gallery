let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@right.html',
    render() {
        this.updater.digest();
    }
});