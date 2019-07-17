let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@11.html',
    render() {
        this.updater.digest();
    }
});