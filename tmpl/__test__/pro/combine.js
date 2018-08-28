let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@combine.html',
    render() {
        this.updater.digest();
    }
});