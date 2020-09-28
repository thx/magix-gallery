let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@error.less');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            index: 1
        });
    },
    'add<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        })
    }
});