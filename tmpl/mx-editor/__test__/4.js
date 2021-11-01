let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@4.less');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        let content = '这是一条非常长非常长非常长的需要换行的数据';
        this.setContent(content);
    },
    'change<change>'(e) {
        // editText编辑后的文案
        this.setContent(e.editText);
    },
    setContent(content) {
        let len = content.length;
        let max = 20;
        this.updater.digest({
            tmpl: (len > max) ? (content.slice(0, max) + '...') : content,
            content
        });
    }
});