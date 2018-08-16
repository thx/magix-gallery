let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@chartpark.html',
    render() {
        this.updater.digest();
    }
});