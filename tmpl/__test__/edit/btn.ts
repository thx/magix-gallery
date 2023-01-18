import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@btn.html',
    init(e) {
        let list = [{
            text: '主要按钮支持渐变色配置，背景色主色',
            value: '--btn-brand',
        }, {
            text: '主要按钮支持渐变色配置，背景色主渐变色',
            value: '--btn-brand-gradient',
        }, {
            text: '主要按钮文案颜色',
            value: '--btn-brand-text',
        }, {
            text: '主要按钮hover态，背景色主色',
            value: '--btn-brand-hover',
        }, {
            text: '主要按钮hover态，背景色主渐变色',
            value: '--btn-brand-gradient-hover',
        }, {
            text: '主要按钮hover文案颜色',
            value: '--btn-brand-text-hover',
        }, {
            text: '次要按钮默认态边框色',
            value: '--btn-border',
        }, {
            text: '次要按钮默认态背景色',
            value: '--btn-bg',
        }, {
            text: '次要按钮默认态文案色',
            value: '--btn-text',
        }, {
            text: '次要按钮hover态边框色',
            value: '--btn-border-hover',
        }, {
            text: '次要按钮hover态背景色',
            value: '--btn-bg-hover',
        }, {
            text: '次要按钮hover态文案色',
            value: '--btn-text-hover',
        }, {
            text: '常规按钮水平间距',
            value: '--btn-h-gap',
        }, {
            text: '常规按钮最小宽度',
            value: '--btn-min-width',
        }, {
            text: '常规按钮字体大小',
            value: '--btn-font-size',
        }, {
            text: '常规按钮圆角大小',
            value: '--btn-border-radius',
        }, {
            text: '小号按钮水平间距',
            value: '--btn-small-h-gap',
        }, {
            text: '小号按钮最小宽度',
            value: '--btn-small-min-width',
        }, {
            text: '小号按钮字体大小',
            value: '--btn-small-font-size',
        }, {
            text: '小号按钮圆角大小',
            value: '--btn-small-border-radius',
        }, {
            text: '大号按钮水平间距',
            value: '--btn-large-h-gap',
        }, {
            text: '大号按钮最小宽度',
            value: '--btn-large-min-width',
        }, {
            text: '大号按钮字体大小',
            value: '--btn-large-font-size',
        }, {
            text: '大号按钮圆角大小',
            value: '--btn-large-border-radius',
        }];
    },
    render() {
        this.updater.digest();
    }
});