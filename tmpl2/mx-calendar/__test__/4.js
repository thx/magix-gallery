let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        let formater = 'YYYY-MM-DD';
        this.updater.digest({
            today: Moment().add(2, 'days').format(formater)
        });
    }
});