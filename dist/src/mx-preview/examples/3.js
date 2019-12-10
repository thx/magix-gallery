let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    }
});