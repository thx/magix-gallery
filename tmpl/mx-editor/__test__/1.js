let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            tag: '<span class="ml4" mx-view="mx-effects/icon?mode=solid&type=highlight&content=打标"></span>',
            content: 2000,
            rules: {
                required: true,
                min: [200, '不小于200']
            }
        });
    },
    'change<change>'(e) {
        // content编辑后的文案
        this.updater.digest({
            content: e.content
        })
    }
});