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
    'change<change>'(e) {
        // 操作结束的时候返回
        // e.selected [array / string] [min, max] 或者 min,max 与入参一致
        // e.start 开始值
        // e.end 结束值
        this.updater.digest({
            start: e.start,
            end: e.end
        })
    }
});