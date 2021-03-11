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
    /**
     * 错误提示
     */
    'show1<click>'(e) {
        this.gmessage({
            type: 'error',
            view: '@./custom',
        });
    },
    /**
     * 警告提示
     */
    'show2<click>'(e) {
        this.gmessage({
            type: 'warn',
            msg: '警告类提示信息，4s自动关闭',
            timeout: 4000
        });
    },
    /**
     * 品牌色提示（默认设置）
     */
    'show3<click>'(e) {
        this.gmessage({
            type: 'highlight',
            msg: '品牌色提示信息，默认提示样式',
        });
    },
    /**
     * 通过提示
     */
    'show4<click>'(e) {
        this.gmessage({
            type: 'pass',
            msg: '提示信息，5s自动关闭',
            timeout: 5000
        });
    },
    /**
     * 黑色透明度底
     */
    'show5<click>'(e) {
        this.gmessage({
            type: 'common',
            msg: '黑色透明度底提示信息'
        });
    }
});