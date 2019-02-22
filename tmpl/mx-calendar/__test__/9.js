let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest({
            today: Moment().format(Formater)
        });
    }
});