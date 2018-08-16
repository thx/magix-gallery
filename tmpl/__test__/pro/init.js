let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@init.html',
    render() {
        this.updater.digest();
    }
});