let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@22.html',
    render() {
        let that = this;
        that.updater.digest();
    }
});