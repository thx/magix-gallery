let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let formater = 'YYYY-MM-DD';
        this.updater.digest({
            today: Moment().format(formater),
            yesterday: Moment().subtract(1, 'days').format(formater),
            tomorrow: Moment().add(1, 'days').format(formater),
        });
    }
});