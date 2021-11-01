let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            content: 2000,
            rules: {
                required: true,
                min: [200, '不小于200']
            }
        });
    },
    'change<change>'(e) {
        // editText编辑后的文案
        this.updater.digest({
            content: e.editText
        })
    }
});