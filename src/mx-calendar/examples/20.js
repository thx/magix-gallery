let Magix = require('magix');
let Base = require('examples/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@20.html',
    render() {
        this.updater.digest({
            start: Moment().format(Formater),
            end: Moment().add(2, 'days').format(Formater)
        });
    }
});