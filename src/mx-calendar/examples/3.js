let Magix = require('magix');
let Base = require('examples/example');
let Moment = require('moment');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        let formater = 'YYYY-MM-DD';
        this.updater.digest({
            today: Moment().add(2, 'days').format(formater)
        });
    }
});