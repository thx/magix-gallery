let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@1.less');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({});
    }
});