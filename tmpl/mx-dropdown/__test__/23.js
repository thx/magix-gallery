let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@23.html',
    render() {
        this.updater.digest();
    },
    'change<change>'(e) {
        // 默认选中了第一个，初始化就是trigger change
    }
});