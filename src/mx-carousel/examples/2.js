let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@2.less');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({});
    }
});