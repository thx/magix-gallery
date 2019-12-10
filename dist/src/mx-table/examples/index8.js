let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index8.html',
    render() {
        this.updater.digest();
    }
});