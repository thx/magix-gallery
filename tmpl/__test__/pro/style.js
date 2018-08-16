let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@style.less');

module.exports = Magix.View.extend({
    tmpl: '@style.html',
    render() {
        this.updater.digest();
    }
});