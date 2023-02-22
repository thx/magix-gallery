let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    },
    'select<change>'(e) {
        this.updater.digest({
            item: e.item,
        })
    }
});
