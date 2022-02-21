let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@25.html',
    render() {
        let that = this;

        that.updater.digest({
            viewId: that.id,
            num: 40
        });
    },
    'add<click>'(e) {
        let { num } = this.updater.get();
        this.updater.digest({
            num: num + 10
        })
    },
    'sub<click>'(e) {
        let { num } = this.updater.get();
        this.updater.digest({
            num: num - 10
        })
    }
});