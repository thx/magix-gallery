let Magix = require('magix');
let Base = require('__test__/example');
let GTip = require('@../message');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@6.html',
    mixins: [GTip],
    render() {
        this.updater.digest();
    }
});