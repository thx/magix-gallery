let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@2.less');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            index: 1
        });
    },
    'test<popconfirm>'(e) {
        let cur = e.params.text;
        this.updater.digest({
            cur
        })
    },
    'add<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        })
    }
});
