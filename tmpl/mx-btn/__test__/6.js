let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest({
            loading: false
        });
    },
    'change<click>'(e) {
        let { loading } = this.updater.get();
        this.updater.digest({
            loading: !loading
        });
    }
});