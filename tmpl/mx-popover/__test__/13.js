/**
 * 修改type参数为mode，历史配置依然兼容
 */
let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@error.less');

module.exports = Base.extend({
    tmpl: '@13.html',
    render() {
        this.updater.digest();
    }
});