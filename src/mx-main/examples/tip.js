let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@tip.html',
    render() {
        this.updater.digest();
    }
});