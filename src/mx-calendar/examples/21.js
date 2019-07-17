let Magix = require('magix');
let Base = require('examples/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@21.html',
    render() {
        this.updater.digest({
            configs: {
                min: Moment().subtract(10, 'days').format(Formater),
                max: Moment().add(10, 'days').format(Formater),
                selected: Moment().add(2, 'days').format(Formater)
            }
        });
    },
    'change<change>'(e){
        // e.date
        // e.time
        let configs = this.updater.get('configs');
        configs.selected = e.date;
        this.updater.digest({
            configs
        })
    }
});