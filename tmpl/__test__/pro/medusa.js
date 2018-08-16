let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@medusa.html',
    render() {
        this.updater.digest();
    }
});