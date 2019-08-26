let Magix = require('magix');
let Base = require('examples/example');
let GTip = require('@../index');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [GTip],
    render() {
        this.updater.digest();
    },
    'show1<click>'(){
        this.gtip('默认顶通，手动关闭');
    },
    'show2<click>'(){
        this.gtip('error顶通（错误提示），手动关闭', {
            type: 'error'
        });
    },
    'show3<click>'(){
        this.gtip('warn顶通（警告），1s自动关闭', {
            type: 'warn',
            timeout: 1000,
            styles: {
                width: 'auto',
                top: '80px',
                right: '40px',
                left: 'auto',
                borderRadius: '8px'
            }
        });
    },
    'show4<click>'(){
        this.gtip('highlight顶通（品牌色强调），手动关闭', {
            type: 'highlight'
        });
    }
});