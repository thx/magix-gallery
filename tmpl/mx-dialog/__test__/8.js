let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@../index.less');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxDialog('@./demo2', {}, {
            height: 200
        });
    }
});