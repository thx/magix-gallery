let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        this.updater.digest({
            content: 2000
        });
    },
    'change<edit>'(e) {
        // editText编辑后的文案
        this.updater.digest({
            content: e.editText
        })
    }
});