import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@base.html',
    init(e) {
        let list = [{
            text: '默认文本行高',
            value: '--line-height',
        }, {
            text: '默认文本字体大小',
            value: '--font-size',
        }, {
            text: '默认文本字体颜色',
            value: '--font-color',
        }, {
            text: '默认字体列表',
            value: '--font-family',
        }, {
            text: '默认数字字体列表',
            value: '--font-number',
        }, {
            text: 'a链接默认颜色',
            value: '--anchor-font-color',
        }, {
            text: '黑色背景操作栏底色，如顶部导航的背景色',
            value: '--app-nav-bg',
        }, {
            text: '全局模块背景色',
            value: '--app-bg',
        }, {
            text: '灰色操作区背景色',
            value: '--color-bg',
        }, {
            text: '灰色操作区hover态背景色',
            value: '--color-bg-hover',
        }, {
            text: '灰色操作区激活态背景色',
            value: '--color-bg-active',
        }, {
            text: '边框线颜色',
            value: '--color-border',
        }, {
            text: '警告场景提示色',
            value: '--color-warn',
        }, {
            text: '故障场景提示色',
            value: '--color-red',
        }, {
            text: '通过场景提示色',
            value: '--color-green',
        }, {
            text: '强调场景提示色',
            value: '--color-blue',
        }];
    },
    render() {
        this.updater.digest();
    }
});