let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            cur: 120
        });
    },
    'showValue<change>'(e) {
        // 操作结束的时候返回
        this.updater.digest({
            cur: e.value
        })
    },
    'test<click>'(e) {
        let { cur } = this.updater.get();
        this.updater.digest({
            cur: +cur + 10
        })
    }
});