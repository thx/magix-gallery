let Magix = require('magix');
let Base = require('__test__/example');
let GTip = require('@../message');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@5.html',
    mixins: [GTip],
    render() {
        this.updater.digest();
    },
    'show1<click>'(e) {
        let { type } = e.params;
        this.gmessage({
            view: '@./custom',
            type: 'error'
        });
    },
    'show2<click>'(e) {
        let { type } = e.params;
        this.gmessage({
            msg: '提示信息，2s自动关闭',
            type: 'warn',
            timeout: 2000
        });
    },
    'show3<click>'(e) {
        let { type } = e.params;
        this.gmessage({
            msg: '提示信息',
            type: 'highlight'
        });
    },
    'show4<click>'(e) {
        let { type } = e.params;
        this.gmessage({
            msg: '提示信息，5s自动关闭',
            type: 'pass',
            timeout: 5000
        });
    },
    'show5<click>'(e) {
        let { type } = e.params;
        this.gmessage({
            msg: '提示信息'
        });
    }
});