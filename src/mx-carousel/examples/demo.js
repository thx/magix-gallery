let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
Magix.applyStyle('@demo.less');

module.exports = Base.extend({
    tmpl: '@demo.html',
    render() {
        this.updater.digest({});
    }
});