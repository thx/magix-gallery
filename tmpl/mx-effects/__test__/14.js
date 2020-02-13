let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

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