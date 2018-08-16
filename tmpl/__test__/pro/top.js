let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@top.html',
    render() {
        this.updater.digest();
    }
});