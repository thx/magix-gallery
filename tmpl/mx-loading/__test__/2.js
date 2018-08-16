let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../index'); //loading组件
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest();
    },
    'show<click>'(e){
        // showLoading(closeMask)
        // closeMask不需要禁止操作
        Loading.showLoading(true);
    },
    'hide<click>'(e){
        Loading.hideLoading();
    }
});