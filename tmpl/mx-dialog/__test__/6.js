let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@6.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        this.mxDialog('@./inner');
    },
    'open2<click>'(e) {
        this.mxDialog('@./inner', {}, {
            width: 400
        });
    }
});