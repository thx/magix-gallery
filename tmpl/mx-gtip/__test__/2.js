let Magix = require('magix');
let Base = require('__test__/example');
let GTip = require('@../index');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    mixins: [GTip],
    render() {
        this.updater.digest();
    },
    'show1<click>'(){
        this.gtip('显示提示信息，1秒后自动关闭', 1000);
    },
    'show2<click>'(){
        this.gtip('显示提示信息，手动关闭');
    }
});