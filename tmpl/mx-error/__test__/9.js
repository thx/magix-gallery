let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest({
            data: {
                img: 'https://img.alicdn.com/imgextra/i3/O1CN017gPrjE1hRXXyNoPGG_!!6000000004274-2-tps-984-646.png',
                subTitle: '小标题描述',
                title: '主要文案<br/>限1-2行，12-20字',
                tip: '辅助描述：限1-3行，20-50字<br/>辅助描述：限1-3行，20-50字辅助描述：限1-3行，20-50字',
                link: 'https://www.taobao.com/',
                linkText: '点击查看详情',
                btns: [{
                    text: '马上创建智能推广',
                    link: 'https://www.taobao.com/',
                    outer: true,
                }, {
                    text: '马上创建智能推广',
                    link: 'https://www.taobao.com/',
                    outer: false,
                }]
            }
        });
    }
});