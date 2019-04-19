let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@compatibility.html',
    render() {
        this.updater.digest();
    }
});