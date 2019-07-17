let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@demo.less');

module.exports = Base.extend({
    tmpl: '@demo.html',
    render() {
        this.updater.digest({});
    }
});