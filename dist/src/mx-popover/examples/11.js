let Magix = require('magix');
let Base = require('examples/example');
let Dialog = require('@../../mx-dialog/index'); //mixins dialog
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@11.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open1<click>'(e) {
        this.mxDialog('@./multi', {
            number: 1
        }, {
            width: 800
        });
    },
    'open2<click>'(e) {
        this.mxDialog('@./multi2', {
            number: 1
        }, {
            width: 800,
            height: 300
        });
    }
});