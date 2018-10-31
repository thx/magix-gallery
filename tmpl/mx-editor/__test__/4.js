let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@4.less');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            tmpl: '<div class="@4.less:multi-ellipsis">${content}</div>',
            content: '这是一条非常长非常长非常长的需要换行的数据'
        });
    },
    'change<edit>' (e) {
        // editText编辑后的文案
        this.updater.digest({
            content: e.editText
        })
    }
});