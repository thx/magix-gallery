let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@update.html',
    render() {
        this.updater.digest();
    }
});