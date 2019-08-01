let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@config.html',
    render() {
        this.updater.digest();
    }
});