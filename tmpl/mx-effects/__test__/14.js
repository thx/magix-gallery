let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@icon.less');

module.exports = Base.extend({
    tmpl: '@14.html',
    render() {
        this.updater.digest({
            hide: true
        });
    },
    'test<click>'(e) {
        let { hide } = this.updater.get();
        this.updater.digest({
            hide: !hide
        });
    }
});