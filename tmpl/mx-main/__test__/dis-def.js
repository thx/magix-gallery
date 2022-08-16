let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@dis-def.html',
    render() {
        let stepInfos = [{
            label: '投放概览',
            subs: [{
                label: '投放概览',
                tip: '标题旁提示信息',
                view: '@./index-inner'
            }]
        }, {
            label: '人群洞察',
            subs: [{
                label: '基本信息',
                view: '@./index-inner',
                titleHide: true // 不显示标题
            }, {
                label: '实时/历史数据',
                view: '@./index-inner'
            }, {
                label: '分商品投放数据 ',
                view: '@./index-inner'
            }]
        }];

        let locParams = Magix.Router.parse().params;
        this.updater.digest({
            stepInfos,
            mode: locParams.mode || 'dark'
        });
    }
});