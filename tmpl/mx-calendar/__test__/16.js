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
        // event.selected 当前选择日期
        this.updater.digest({
            selected: event.selected,
        })
    }
});