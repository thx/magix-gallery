let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        this.mxDialog('@./inner');
    },
    'open2<click>'(e) {
        this.mxDialog('@./inner', {}, {
            top: 100,
            width: 400
        });
    }
});