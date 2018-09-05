let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@theme-demo.less');


module.exports = Magix.View.extend({
    tmpl: '@theme-demo.html',
    render() {
        this.updater.digest();
    }
});