let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@other.html',
    render() {
        this.updater.digest();
    }
});