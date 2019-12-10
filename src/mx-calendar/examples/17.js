let Magix = require('magix');
let Base = require('examples/example');
let Moment = require('moment');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@17.html',
    render() {
        this.updater.digest();
    }
});