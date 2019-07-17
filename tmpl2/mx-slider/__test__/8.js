let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        this.updater.digest({
            start: 110,
            end: 150
        });
    },
    'showValue<change>' (e) {
        // 操作结束的时候返回
        // e.value [array] [min, max]
        let v = e.value;
        this.updater.digest({
            start: v[0],
            end: v[1]
        })
    }
});