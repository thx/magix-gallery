let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let methods = [{
            key: 'showMxGuides(options)',
            desc: `<pre>说明：显示引导内容

options = {
    bizCode: '', // 对应内置品牌人物形象
    mode: 'point', // point：单点； module：模块；
    ignoreScroll: false, // 若相对节点不在可视范围内，是否滚动到指定范围内，默认false，取消滚动配置为true
    list: [{
        sizzle: '相对节点',
        img: '图片地址，显示为64px宽',
        title: '标题',
        tip: '提示信息',
        placement: 'bottom', // 定位，可选left，top，bottom，right，居中8px交集
        nextTip: '下一步按钮文案', // 默认下一步
        cancelTip: '关闭引导文案', // 默认关闭引导
        offset: { // 在placement的基础上微量偏移
            top: 0,
            left: 0,
        }
    }]
}</pre>`,
        }, {
            key: 'hideMxGuides',
            desc: '说明：关闭引导内容'
        }];

        this.updater.digest({
            viewId: this.id,
            methods,
        });
    }
});