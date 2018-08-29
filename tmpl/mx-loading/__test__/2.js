let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../../mx-loading/index'); //loading组件
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    mixins: [Loading],
    render() {
        this.updater.digest();
    },
    'show<click>'(e){
        // showLoading(closeMask)
        // closeMask不需要禁止操作
        this.showLoading(true);
    },
    'hide<click>'(e){
        this.hideLoading();
    }
});