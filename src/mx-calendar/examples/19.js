let Magix = require('magix');
let Base = require('examples/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@19.html',
    render() {
        this.updater.digest({
            today: Moment().format(Formater),
        });
    }
});