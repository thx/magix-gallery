let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            values: [1],
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            values: e.values
        })
    }
});