let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            time: '10:10:10'
        });
    },
    'change<change>'(e){
        // e.time：当前时间
        this.updater.digest({
            time: e.time
        })
    }
});