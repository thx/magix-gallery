let Magix = require('magix');
let Base = require('examples/example');
let Moment = require('moment');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@14.html',
    render() {
        this.updater.digest();
    }
});