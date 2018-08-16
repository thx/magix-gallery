let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@13.html',
    render() {
        this.updater.digest({
            min: '2018-08-17',
            start: '2018-08-10',
            end: '2018-08-14'
        });
    }
});