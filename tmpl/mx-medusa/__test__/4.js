let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            searchValue: ''
        });
    },
    'change<search>' (e) {
        e.preventDefault();
        // e.searchKey 搜索对应的key值
        // e.searchValue input文本框输入的对应的内容
        this.updater.digest({
            searchValue: e.searchValue
        })
    }
});