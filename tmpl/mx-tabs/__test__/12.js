let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@12.less');

module.exports = Base.extend({
    tmpl: '@12.html',
    render() {
        let viewId = this.id;

        this.updater.digest({
            viewId,
            list: [{
                value: `${viewId}_1`,
                text: '红色模块',
                tag: 'New'
            }, {
                value: `${viewId}_2`,
                text: '绿色模块',
                tag: 'New',
                color: '#30ab66'
            }, {
                value: `${viewId}_3`,
                text: '黄色模块',
                tip: '提示信息'
            }],
            index: 0,
            logo: 'https://img.alicdn.com/imgextra/i2/O1CN01x5Rz5u1ZPEayWnVNA_!!6000000003186-2-tps-510-68.png'
        });
    },
    'change<change>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        })
    }
});
