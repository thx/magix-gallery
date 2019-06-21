let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@22.html',
    render() {
        this.updater.digest({
            start: Moment().format(Formater),
            end: Moment().add(5, 'days').format(Formater)
        });
    }
});