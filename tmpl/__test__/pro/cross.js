let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@cross.html',
    render() {
        this.updater.digest();
    }
});