let Magix = require('magix');
let Router = Magix.Router;
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

        let path = Router.parse().path;
        let bizCode = '';
        if (path.indexOf('all/revision/ztc') > -1) {
            bizCode = 'subway';
        }

        // point：单点
        // module：模块
        this.showMxGuides({
            mode: 'module',
            bizCode,
            type: 'brand',
            list: [{
                sizzle: `#${viewId}_module_0`,
                logo: 'https://img.alicdn.com/imgextra/i3/O1CN01LcTWN81ZbbKko7myo_!!6000000003213-2-tps-280-327.png',
                title: '大标题',
                tip: '提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
                placement: 'bottom',
            }]
        })
    }
});