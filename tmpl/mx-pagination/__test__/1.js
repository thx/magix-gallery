let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            total: 400,
            sizes: [20, 40, 50],
            page: 1,
            size: 40,
        });
    },
    'change<change>'(e) {
        // e.page 当前第几页
        // e.size 每页多少条
        // e.offset 偏移量
        this.updater.digest({
            page: e.page,
            size: e.size
        })
    }
});