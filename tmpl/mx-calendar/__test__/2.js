let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            selected: Moment().format(Formater) + ' 18:08:20'
        });
    }
});