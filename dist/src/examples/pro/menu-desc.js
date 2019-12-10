let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@menu-desc.html',
    render() {
        this.updater.digest({});
    }
});