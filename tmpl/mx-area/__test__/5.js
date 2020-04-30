let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: [1]
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.values
        })
    }
});