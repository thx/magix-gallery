let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@18.html',
    render() {
        let formatter = 'YYYY-MM-dd HH';
        this.updater.digest({
            formatter,
            start: Moment().format(formatter),
            end: Moment().add(2, 'days').format(formatter)
        });
    }
});