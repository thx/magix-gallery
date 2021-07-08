let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@16.html',
    render() {
        this.updater.digest({
            selected: '2018-05'
        });
    },
    
    'select<change>' (event) {
        // event.date 当前选择日期
        // event.time 时分秒
        this.updater.digest({
            selected: event.date
        })
    }
});