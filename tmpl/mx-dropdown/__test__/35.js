let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@35.html',
    render() {
        this.updater.digest();
    },
    'change<change>'(e) {
        // 默认选中了第一个，初始化就是trigger change
    }
});