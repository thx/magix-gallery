let Magix = require('magix');
let Base = require('__test__/example');
let Guides = require('@../../mx-guides/index');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@4.html',
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
            list: [{
                sizzle: `#${viewId}_module_0`,
                img: 'https://img.alicdn.com/imgextra/i2/O1CN01lXaOMJ1rTVNPSftyQ_!!6000000005632-2-tps-133-109.png',
                title: '大标题',
                tip: '提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'bottom',
            }]
        })
    }
});