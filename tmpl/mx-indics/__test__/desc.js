let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@desc.html',
    render() {
        this.updater.digest();
    }
});
