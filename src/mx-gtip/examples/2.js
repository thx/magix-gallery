let Magix = require('magix');
let Base = require('examples/example');
let GTip = require('@../index');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    mixins: [GTip],
    render() {
        this.updater.digest();
    },
    'show1<click>'(){
        this.gtip('error提示，手动关闭', {
            type: 'error',
            singleton: false,
            styles: {
                width: 'auto',
                top: '80px',
                right: '40px',
                left: 'auto',
                borderRadius: '8px'
            }
        });
    },
    'show2<click>'(){
        this.gtip('warn提示，手动关闭', {
            type: 'warn',
            singleton: false,
            styles: {
                width: 'auto',
                top: '160px',
                right: '40px',
                left: 'auto',
                borderRadius: '8px'
            }
        });
    },
    'show3<click>'(){
        this.gtip('highlight提示，手动关闭', {
            type: 'highlight',
            singleton: false,
            styles: {
                width: 'auto',
                top: '240px',
                right: '40px',
                left: 'auto'
            }
        });
    }
});