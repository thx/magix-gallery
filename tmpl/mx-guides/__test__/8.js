let Magix = require('magix');
let Base = require('__test__/example');
let Guides = require('@../../mx-guides/index');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@8.html',
    mixins: [Guides],
    render() {
        this.updater.digest({
            viewId: this.id
        });
    },
    'show<click>'(e) {
        let { viewId } = this.updater.get();

        // point：单点
        // module：模块
        this.showMxGuides({
            mode: 'module',
            type: 'brand',
            list: [{
                sizzle: `#${viewId}_module_0`,
                logo: 'https://img.alicdn.com/imgextra/i4/O1CN01ORDwn01DIRDMwbWWQ_!!6000000000193-2-tps-257-327.png',
                title: '大标题',
                tip: '提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'bottom',
            }]
        })
    }
});