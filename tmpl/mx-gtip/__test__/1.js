let Magix = require('magix');
let Base = require('__test__/example');
let GTip = require('@../index');

module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [GTip],
    render() {
        this.updater.digest();
    },
    'show1<click>'() {
        this.gtip('highlight品牌色强调提示顶通，手动关闭', {
            type: 'highlight'
        });
    },
    'show2<click>'() {
        this.gtip('error红色错误提示顶通，手动关闭', {
            type: 'error'
        });
    },
    'show3<click>'() {
        this.gtip('warn黄色警告提示顶通，1s自动关闭', {
            type: 'warn',
            timeout: 1000
        });
    },
    'show4<click>'() {
        this.gtip('pass绿色同构提示顶通，手动关闭', {
            type: 'pass'
        });
    },
    'show5<click>'() {
        this.gtip('common黑色透明度底提示顶通，手动关闭', {
            type: 'common'
        });
    }
});